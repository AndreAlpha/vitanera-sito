import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DISCLAIMER_DATA } from '../../core/config/site.config';
import {
  CalendarService,
  calendarDayLabel,
  calendarTime,
  calendarDayKey,
  calendarDate,
} from '../../core/services/calendar.service';
import { calendarMarkdown, exportFilename } from '../../core/services/calendar-export';
import { ExportButton } from '../../shared/ui/export-button';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

/**
 * Calendario economico — indici principali.
 *
 * È la porta d'ingresso alle due aree. Mostra ciò che serve subito: che cosa
 * esce nei prossimi giorni e quali appuntamenti hanno in agenda le due banche
 * centrali. Il dettaglio di ogni indicatore vive nelle pagine d'area.
 *
 * La pagina chiudeva con il riquadro ambrato «Come leggere questi numeri», che
 * ripeteva l'avvertenza generale già presente nel piè di pagina e in
 * `/avvertenze`. Restano le due note sui dati, che invece dicono qualcosa di
 * specifico: da dove vengono i valori e quanto è vecchio l'archivio.
 */
@Component({
  selector: 'app-calendar-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, Icon, ExportButton],
  template: `
    <app-page-header
      eyebrow="Dati ufficiali, storico e prossime uscite"
      heading="Calendario economico indici principali"
      icon="calendar"
      [description]="intro"
    >
      <!--
        Erano tre pastiglie colorate: due conteggi e un fuso orario travestiti da
        etichette di stato. Sono tre fatti sul contenuto della pagina, e come tali
        stanno su una riga sola.
      -->
      <p class="head-facts">
        {{ calendar.indicators.length }} indicatori · {{ releases() }} diffusioni in archivio ·
        Orari di Roma
      </p>

      <div class="head-export">
        <app-export-button
          label="Esporta tutto in Markdown"
          [filename]="exportName()"
          [build]="buildExport"
        />
        <p class="head-export__note">
          Un solo file con i {{ calendar.indicators.length }} indicatori di USA ed Euro zona:
          descrizione, ultimo valore, prossima uscita e lo storico completo delle
          {{ releases() }} diffusioni, più l’agenda delle banche centrali.
        </p>
      </div>
    </app-page-header>

    <!-- ------------------------------------------------------------------ -->
    <!-- Le due aree                                                         -->
    <!-- ------------------------------------------------------------------ -->
    <section class="block">
      <div class="sec-head">
        <div>
          <p class="eyebrow">Come è diviso</p>
          <h2>Due aree</h2>
        </div>
      </div>

      <div class="areas">
        @for (section of calendar.sections; track section.area) {
          <a
            class="card card--link area"
            [routerLink]="['/calendario', calendar.areaPath(section.area)]"
            [attr.data-accent]="section.area"
          >
            <div class="area__head">
              <app-icon [name]="section.icon" [size]="15" />
              <h3>{{ section.name }}</h3>
              <span class="area__count tnum">
                {{ section.indicators.length }}<span class="sr-only"> indicatori</span>
              </span>
            </div>
            <p class="area__tag">{{ section.tagline }}</p>
            <p class="area__desc">{{ section.description }}</p>
            <ul class="area__list">
              @for (indicator of section.indicators.slice(0, 6); track indicator.slug) {
                <li>{{ indicator.short }}</li>
              }
              @if (section.indicators.length > 6) {
                <li class="area__more">e altri {{ section.indicators.length - 6 }}</li>
              }
            </ul>
            <span class="area__cta"> Apri l’area <app-icon name="arrow-right" [size]="14" /> </span>
          </a>
        }
      </div>
    </section>

    <!-- ------------------------------------------------------------------ -->
    <!-- Prossime uscite                                                     -->
    <!-- ------------------------------------------------------------------ -->
    <section class="block">
      <div class="sec-head">
        <div>
          <p class="eyebrow">Dati attesi</p>
          <h2>Prossime uscite</h2>
        </div>
      </div>

      @if (upcomingDays().length) {
        <!--
          È l'informazione più utile della pagina, e si legge per colonne: ora,
          area, indicatore, valore atteso. Da elenco di righe libere è diventata
          una tabella vera, con la giornata come intestazione di gruppo.
        -->
        <div class="agenda">
          <table class="agenda__table">
            <caption>
              Il previsto è il consenso degli analisti
            </caption>
            <thead class="agenda__head">
              <tr>
                <th scope="col">Ora</th>
                <th scope="col">Area</th>
                <th scope="col">Indicatore</th>
                <th scope="col" class="agenda__num">Atteso</th>
              </tr>
            </thead>
            @for (day of upcomingDays(); track day.key) {
              <tbody>
                <tr>
                  <th class="agenda__day" colspan="4" scope="colgroup">{{ day.label }}</th>
                </tr>
                @for (row of day.rows; track row.indicator.slug) {
                  <tr class="agenda__row">
                    <td class="agenda__time tnum">{{ time(row.release.at) }}</td>
                    <td class="agenda__area" [attr.data-accent]="row.indicator.area">
                      {{ calendar.areaName(row.indicator.area) }}
                    </td>
                    <td class="agenda__name">
                      <a
                        [routerLink]="[
                          '/calendario',
                          calendar.areaPath(row.indicator.area),
                          row.indicator.key,
                        ]"
                      >
                        {{ row.indicator.name }}
                      </a>
                    </td>
                    <td class="agenda__num tnum">
                      @if (row.release.forecast !== null) {
                        {{ calendar.value(row.release.forecast, row.indicator) }}
                      } @else {
                        <span class="agenda__pending">consenso non ancora rilevato</span>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            }
          </table>
        </div>
      } @else {
        <p class="empty">Nessuna uscita già fissata nell’archivio corrente.</p>
      }
    </section>

    <!-- ------------------------------------------------------------------ -->
    <!-- Banche centrali                                                     -->
    <!-- ------------------------------------------------------------------ -->
    <section class="block">
      <div class="sec-head">
        <div>
          <p class="eyebrow">Chi parla e quando</p>
          <h2>Banche centrali</h2>
        </div>
        <a class="link" routerLink="/calendario/banche-centrali">
          Agenda completa <app-icon name="arrow-right" [size]="13" />
        </a>
      </div>

      <div class="banks">
        @for (section of calendar.sections; track section.area) {
          <article class="card card--pad bank" [attr.data-accent]="section.area">
            <p class="bank__name">
              <app-icon name="bank" [size]="14" />
              {{ section.bank }}
            </p>
            @if (nextEventsOf(section.area); as events) {
              @if (events.length) {
                <ul class="bank__list">
                  @for (event of events; track event.at + event.title) {
                    <li>
                      <span class="bank__when tnum">{{ shortDate(event.at) }}</span>
                      <span class="bank__what">
                        <strong>{{ event.title }}</strong>
                        @if (event.role) {
                          <span class="bank__role">{{ event.role }}</span>
                        }
                      </span>
                    </li>
                  }
                </ul>
              } @else {
                <p class="bank__empty">Nessun appuntamento già fissato.</p>
              }
            }
          </article>
        }
      </div>
    </section>

    <p class="fineprint"><app-icon name="info" [size]="12" />{{ dataNote }}</p>
    <p class="fineprint">
      <app-icon name="clock" [size]="12" />
      Archivio aggiornato al {{ generatedOn() }}. I valori sono statistiche ufficiali già
      pubblicate, non quotazioni di mercato: le date future possono essere spostate dagli enti che
      le diffondono.
    </p>
  `,
  styles: `
    :host {
      display: block;
    }

    .head-facts {
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .head-export {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-3) var(--s-4);
      margin-top: var(--s-4);
      padding-top: var(--s-4);
      border-top: 1px solid var(--line);
    }

    .head-export__note {
      flex: 1;
      min-width: 260px;
      max-width: var(--measure);
      font-size: var(--t-xs);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    /* --- Aree ------------------------------------------------------------
       L'icona dell'area era una piastrella di 46 pixel con bordo e sfumatura,
       e il conteggio un numero da 26 in grassetto: due elementi decorativi che
       pesavano più del nome dell'area. Ora l'icona è alta quanto il titolo e il
       conteggio è un numero grande quanto basta.
       -------------------------------------------------------------------- */

    .areas {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--s-4);
    }

    .area {
      display: flex;
      flex-direction: column;
      padding: var(--s-card);
    }

    .area__head {
      display: flex;
      align-items: center;
      gap: var(--s-2);
    }

    .area__head app-icon {
      color: var(--accent);
    }

    .area__head h3 {
      font-size: var(--t-lg);
    }

    .area__count {
      margin-left: auto;
      font-size: var(--t-xl);
      font-weight: 600;
      line-height: var(--lh-tight);
      color: var(--accent);
    }

    .area__tag {
      margin-top: var(--s-1);
      font-size: var(--t-xs);
      color: var(--text-muted);
    }

    .area__desc {
      max-width: var(--measure);
      margin-top: var(--s-3);
      font-size: var(--t-sm);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    /* I nomi brevi erano dodici pastiglie per scheda: un elenco in linea dice
       le stesse cose senza dodici bordi. */
    .area__list {
      list-style: none;
      margin-top: var(--s-3);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-muted);
    }

    .area__list li {
      display: inline;
    }

    .area__list li + li::before {
      content: ' · ';
      color: var(--text-faint);
    }

    .area__more {
      color: var(--text-faint);
    }

    /* Il rimando cambia colore, non posizione: prima la freccia si allontanava
       dal testo al passaggio del puntatore. */
    .area__cta {
      display: inline-flex;
      align-items: center;
      gap: var(--s-2);
      margin-top: auto;
      padding-top: var(--s-4);
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--accent);
      transition: color var(--dur) var(--ease);
    }

    .area:hover .area__cta {
      color: var(--accent-soft);
    }

    /* --- Agenda ----------------------------------------------------------- */

    .agenda {
      overflow-x: auto;
    }

    .agenda__table {
      width: 100%;
      border-collapse: collapse;
    }

    .agenda__table caption {
      text-align: left;
      padding-bottom: var(--s-3);
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    .agenda__table th,
    .agenda__table td {
      text-align: left;
      vertical-align: baseline;
      padding: var(--s-3) var(--s-3) var(--s-3) 0;
    }

    .agenda__table th:last-child,
    .agenda__table td:last-child {
      padding-right: 0;
    }

    .agenda__head th {
      padding-top: 0;
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--text-faint);
      border-bottom: 1px solid var(--line);
    }

    /* La giornata è un'intestazione di gruppo: sta nella colonna, non sopra un
       fondo colorato, e si distingue solo per peso e filetto. */
    .agenda__day {
      padding-top: var(--s-4);
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--text-soft);
    }

    tbody + tbody .agenda__day {
      padding-top: var(--s-5);
      border-top: 1px solid var(--line);
    }

    .agenda__row + .agenda__row td {
      border-top: 1px solid var(--line-soft);
    }

    .agenda__table .agenda__num {
      text-align: right;
    }

    .agenda__time {
      font-size: var(--t-sm);
      font-weight: 500;
      color: var(--text-soft);
      white-space: nowrap;
    }

    .agenda__area {
      font-size: var(--t-xs);
      color: var(--accent);
      white-space: nowrap;
    }

    .agenda__name {
      font-size: var(--t-sm);
    }

    .agenda__name a {
      color: var(--text);
      transition: color var(--dur) var(--ease);
    }

    .agenda__name a:hover {
      color: var(--accent-soft);
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    /* La riga intera si schiarisce quando il puntatore è sul suo rimando: dice
       che le quattro colonne parlano di una cosa sola. */
    .agenda__row:has(a:hover) td {
      background: var(--surface-hover);
    }

    td.agenda__num {
      font-size: var(--t-sm);
      color: var(--text-soft);
      white-space: nowrap;
    }

    .agenda__pending {
      font-size: var(--t-xs);
      color: var(--text-faint);
      white-space: normal;
    }

    .empty {
      padding: var(--s-6) 0;
      text-align: center;
      font-size: var(--t-sm);
      color: var(--text-muted);
    }

    /* --- Banche centrali -------------------------------------------------- */

    .banks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--s-4);
    }

    .bank__name {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      padding-bottom: var(--s-3);
      border-bottom: 1px solid var(--line);
      font-size: var(--t-sm);
      font-weight: 500;
      color: var(--accent);
    }

    /* Data e appuntamento si incolonnano sulla griglia della lista: le date
       restano allineate fra loro senza fissarne la larghezza a mano. */
    .bank__list {
      display: grid;
      grid-template-columns: auto 1fr;
      list-style: none;
    }

    .bank__list li {
      display: contents;
    }

    .bank__list > li > span {
      padding: var(--s-3) 0;
      font-size: var(--t-sm);
    }

    .bank__list > li + li > span {
      border-top: 1px solid var(--line-soft);
    }

    .bank__list > li > .bank__when {
      padding-right: var(--s-4);
      font-size: var(--t-xs);
      color: var(--text-faint);
      white-space: nowrap;
    }

    .bank__what {
      display: flex;
      flex-direction: column;
      gap: 2px;
      color: var(--text-soft);
      line-height: var(--lh-snug);
    }

    .bank__what strong {
      font-weight: 500;
      color: var(--text);
    }

    .bank__role {
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    .bank__empty {
      padding-top: var(--s-3);
      font-size: var(--t-sm);
      color: var(--text-faint);
    }

    @media (max-width: 620px) {
      .agenda__table th,
      .agenda__table td {
        padding: var(--s-2) var(--s-2) var(--s-2) 0;
      }

      .area {
        padding: var(--s-4);
      }
    }
  `,
})
export class CalendarOverview {
  protected readonly calendar = inject(CalendarService);
  protected readonly dataNote = DISCLAIMER_DATA;

  protected readonly intro =
    'Gli indicatori macroeconomici che spostano davvero i prezzi, raccolti in un solo posto. Per ciascuno ' +
    'sono riportati lo storico completo delle diffusioni — data e ora, valore atteso dal consenso e valore ' +
    'effettivo — l’andamento in forma di grafico e la data della prossima uscita. In coda, l’agenda di ' +
    'Federal Reserve e Banca centrale europea.';

  protected readonly releases = computed(() => this.calendar.releaseCount());

  /** Prossime uscite di entrambe le aree, raggruppate per giornata. */
  protected readonly upcomingDays = computed(() => {
    const days = new Map<
      string,
      { key: string; label: string; rows: ReturnType<CalendarService['upcoming']>[number][] }
    >();
    for (const row of this.calendar.upcoming(undefined, 16)) {
      const key = calendarDayKey(row.release.at);
      const day = days.get(key) ?? { key, label: calendarDayLabel(row.release.at), rows: [] };
      day.rows.push(row);
      days.set(key, day);
    }
    return [...days.values()];
  });

  protected exportName(): string {
    return exportFilename('usa-euro-zona', new Date().toISOString());
  }

  /**
   * Passato al pulsante e invocato solo al clic: costruire qui il documento
   * intero a ogni disegno della pagina sarebbe mezzo megabyte buttato.
   * È una proprietà e non un metodo perché il riferimento deve restare stabile.
   */
  protected readonly buildExport = (): string =>
    calendarMarkdown({
      indicators: this.calendar.indicators,
      title: 'Calendario economico — indici principali di USA ed Euro zona',
      events: this.calendar.events,
      archiveGeneratedAt: this.calendar.generatedAt,
      now: new Date().toISOString(),
    });

  protected nextEventsOf(area: 'usa' | 'euro') {
    return this.calendar.nextEvents(area, 5);
  }

  protected time(iso: string): string {
    return calendarTime(iso);
  }

  protected shortDate(iso: string): string {
    return `${calendarDate(iso)}`.replace(/ (\d{4})$/, '');
  }

  protected generatedOn(): string {
    return calendarDate(this.calendar.generatedAt);
  }
}
