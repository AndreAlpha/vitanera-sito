import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CalendarArea, CentralBankEvent } from '../../core/models/calendar.model';
import {
  CalendarService,
  calendarDayKey,
  calendarDayLabel,
  calendarDate,
  calendarTime,
} from '../../core/services/calendar.service';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

/**
 * Quanti appuntamenti mostrare. Le riunioni sono fissate fino a oltre un anno
 * in avanti: elencarle tutte allungherebbe la pagina senza aggiungere nulla di
 * utile a chi la consulta oggi.
 */
const AGENDA_LIMIT = 22;

/**
 * Agenda di Federal Reserve e Banca centrale europea.
 *
 * Le riunioni di politica monetaria sono annunciate con più di un anno di
 * anticipo e vengono mostrate per intero. Discorsi e audizioni compaiono invece
 * solo a poche settimane, perché è con quel preavviso che gli istituti li
 * annunciano: dove l'agenda finisce, finisce l'informazione disponibile.
 *
 * La pagina si legge come un'agenda di carta: una data, sotto di essa gli orari
 * incolonnati, e per ciascuna riga il tipo di appuntamento scritto per esteso in
 * una pastiglia. Prima ogni riga era un riquadro a sé e il tipo era affidato al
 * colore del fondo: venti riquadri colorati di seguito sono un elenco che non si
 * riesce a percorrere con l'occhio.
 */
@Component({
  selector: 'app-central-banks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, Icon],
  template: `
    <app-page-header
      eyebrow="Chi decide il costo del denaro"
      heading="Banche centrali"
      icon="bank"
      [description]="intro"
    >
      <div class="head-facts">
        <a class="chip chip--accent" routerLink="/calendario">
          <app-icon name="calendar" [size]="12" />
          Calendario economico
        </a>
        <span class="chip">
          <app-icon name="clock" [size]="12" />
          Orari di Roma
        </span>
      </div>
    </app-page-header>

    <!-- ------------------------------------------------------------------ -->
    <!-- Le due prossime decisioni                                           -->
    <!-- ------------------------------------------------------------------ -->
    <section class="block">
      <div class="sec-head">
        <div>
          <p class="eyebrow">Il prossimo appuntamento che conta</p>
          <h2>Decisioni sui tassi</h2>
        </div>
      </div>

      <div class="rates">
        @for (bank of banks(); track bank.area) {
          <article class="card card--pad rate" [attr.data-accent]="bank.area">
            <h3 class="rate__bank">
              <app-icon name="bank" [size]="14" />
              {{ bank.name }}
            </h3>

            <div class="rate__now">
              <p class="rate__label">Tasso in vigore</p>
              <p class="rate__figure">
                <span class="rate__value tnum">{{ bank.current }}</span>
                <span class="rate__since">dal {{ bank.since }}</span>
              </p>
            </div>

            @if (bank.next; as next) {
              <div class="rate__next">
                <p class="rate__label">Prossima riunione</p>
                <p class="rate__date">{{ dayOf(next.at) }}</p>
                <p class="rate__time">alle {{ timeOf(next.at) }} · annuncio della decisione</p>
              </div>
            } @else {
              <p class="rate__next rate__time">Nessuna riunione già in calendario.</p>
            }

            @if (bank.chair; as chair) {
              <p class="rate__chair">
                <app-icon name="users" [size]="12" />
                {{ chair }}
              </p>
            }

            <a
              class="link rate__link"
              [routerLink]="['/calendario', bank.path, 'tasso-di-interesse']"
            >
              Storico del tasso <app-icon name="arrow-right" [size]="13" />
            </a>
          </article>
        }
      </div>
    </section>

    <!-- ------------------------------------------------------------------ -->
    <!-- Agenda                                                              -->
    <!-- ------------------------------------------------------------------ -->
    <section class="block">
      <div class="sec-head">
        <div>
          <p class="eyebrow">Discorsi, audizioni, verbali e conferenze stampa</p>
          <h2>Prossimi appuntamenti</h2>
        </div>
      </div>

      @if (agenda().length) {
        <ol class="agenda">
          @for (day of agenda(); track day.key) {
            <li class="day">
              <p class="day__label">{{ day.label }}</p>
              <ul class="day__rows">
                @for (event of day.events; track event.at + event.title) {
                  <li class="ev">
                    <span class="ev__time tnum">{{ timeOf(event.at) }}</span>
                    <span class="ev__main">
                      <span class="ev__title">{{ event.title }}</span>
                      @if (event.role) {
                        <span class="ev__role">{{ event.role }}</span>
                      }
                    </span>
                    <span class="ev__meta">
                      @if (event.note; as note) {
                        <!-- Accento solo su ciò che è fissato dal calendario
                             ufficiale: il tipo resta comunque scritto. -->
                        <span class="chip" [class.chip--accent]="event.scheduled">{{ note }}</span>
                      }
                      <span class="ev__bank">{{ bankOf(event.area) }}</span>
                    </span>
                  </li>
                }
              </ul>
            </li>
          }
        </ol>
      } @else {
        <p class="card card--pad empty">Nessun appuntamento già fissato nell’archivio corrente.</p>
      }
    </section>

    <!-- ------------------------------------------------------------------ -->
    <!-- Appena passati                                                      -->
    <!-- ------------------------------------------------------------------ -->
    @if (recent().length) {
      <section class="block">
        <div class="sec-head">
          <div>
            <p class="eyebrow">Per contesto</p>
            <h2>Appena passati</h2>
          </div>
        </div>
        <ul class="past">
          @for (event of recent(); track event.at + event.title) {
            <li>
              <span class="past__date tnum">{{ dayOf(event.at) }}</span>
              <span class="past__title">{{ event.title }}</span>
              <span class="past__bank">{{ bankOf(event.area) }}</span>
            </li>
          }
        </ul>
      </section>
    }

    <p class="fineprint sources">
      <app-icon name="info" [size]="12" />
      Le date delle riunioni di politica monetaria sono quelle pubblicate dai calendari ufficiali di
      Federal Reserve e Banca centrale europea. Gli interventi dei singoli membri vengono annunciati
      con pochi giorni di preavviso e possono essere aggiunti, spostati o annullati senza preavviso.
    </p>
  `,
  styles: `
    :host {
      display: block;
    }

    .head-facts {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-2);
    }

    /* La pastiglia che porta altrove deve rispondere al puntatore: cambia
       fondo, non posizione. */
    .head-facts a.chip {
      transition:
        background var(--dur) var(--ease),
        color var(--dur) var(--ease);
    }

    .head-facts a.chip:hover {
      background: var(--accent-dim);
      color: var(--accent-soft);
    }

    /* --- Decisioni sui tassi ---------------------------------------------- */

    .rates {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--s-4);
    }

    .rate {
      display: flex;
      flex-direction: column;
    }

    /* Il colore dell'area sta sull'icona: il nome dell'istituto è già il
       titolo della scheda e non ha bisogno anche di una tinta. */
    .rate__bank {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      font-size: var(--t-md);
    }

    .rate__bank app-icon {
      color: var(--accent);
    }

    .rate__label {
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    .rate__now {
      margin-top: var(--s-4);
    }

    .rate__figure {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      gap: var(--s-2);
      margin-top: var(--s-1);
    }

    .rate__value {
      font-size: var(--t-2xl);
      font-weight: 600;
      line-height: var(--lh-tight);
      letter-spacing: -0.02em;
      color: var(--text);
    }

    .rate__since {
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    .rate__next {
      margin-top: var(--s-4);
      padding-top: var(--s-4);
      border-top: 1px solid var(--line);
    }

    .rate__date {
      margin-top: var(--s-1);
      font-size: var(--t-md);
      font-weight: 500;
      color: var(--text);
    }

    .rate__time {
      font-size: var(--t-xs);
      color: var(--text-muted);
    }

    /* Vale solo quando la riunione c'è: da sola, la frase di assenza è già
       staccata dal filetto di .rate__next. */
    .rate__date + .rate__time {
      margin-top: var(--s-1);
    }

    .rate__chair {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      margin-top: var(--s-3);
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    /* Ancorato in fondo perché le due schede finiscano alla stessa altezza
       anche quando una delle due non ha l'intervento del presidente. */
    .rate__link {
      align-self: flex-start;
      margin-top: auto;
      padding-top: var(--s-5);
    }

    /* --- Agenda ------------------------------------------------------------
       Nessun riquadro per riga e nessun binario verticale: la giornata è tenuta
       insieme dalla sua data e da un filetto, come su un'agenda di carta.
       ---------------------------------------------------------------------- */

    .agenda {
      list-style: none;
    }

    .day + .day {
      margin-top: var(--s-6);
    }

    .day__label {
      padding-bottom: var(--s-2);
      border-bottom: 1px solid var(--line);
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--accent);
    }

    .day__rows {
      list-style: none;
    }

    .ev {
      display: grid;
      grid-template-columns: 52px minmax(0, 1fr) auto;
      align-items: baseline;
      gap: var(--s-3);
      padding: var(--s-3) 0;
    }

    .ev + .ev {
      border-top: 1px solid var(--line-soft);
    }

    .ev__time {
      font-size: var(--t-sm);
      font-weight: 500;
      color: var(--text);
    }

    .ev__main {
      display: flex;
      flex-direction: column;
      gap: var(--s-1);
    }

    .ev__title {
      font-size: var(--t-sm);
      line-height: var(--lh-snug);
      color: var(--text-soft);
    }

    .ev__role {
      font-size: var(--t-micro);
      color: var(--text-faint);
    }

    .ev__meta {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: var(--s-3);
    }

    .ev__bank {
      font-size: var(--t-micro);
      color: var(--text-faint);
      white-space: nowrap;
    }

    /* --- Appena passati ----------------------------------------------------- */

    .past {
      list-style: none;
    }

    .past li {
      display: grid;
      grid-template-columns: 150px minmax(0, 1fr) auto;
      align-items: baseline;
      gap: var(--s-4);
      padding: var(--s-3) 0;
      font-size: var(--t-sm);
      color: var(--text-muted);
    }

    .past li + li {
      border-top: 1px solid var(--line-soft);
    }

    .past__date {
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    .past__bank {
      font-size: var(--t-micro);
      color: var(--text-faint);
      white-space: nowrap;
    }

    .empty {
      text-align: center;
      font-size: var(--t-sm);
      color: var(--text-muted);
    }

    /* La nota sulle fonti è testo corrente: si ferma alla misura di lettura. */
    .sources {
      max-width: var(--measure);
    }

    @media (max-width: 760px) {
      .ev {
        grid-template-columns: 52px minmax(0, 1fr);
        row-gap: var(--s-2);
      }

      .ev__meta {
        grid-column: 2;
      }

      .past li {
        grid-template-columns: minmax(0, 1fr);
        gap: var(--s-1);
      }
    }
  `,
})
export class CentralBanks {
  private readonly calendar = inject(CalendarService);

  protected readonly intro =
    'Quando si riuniscono, quando parlano e quando pubblicano. Le decisioni sui tassi di Federal Reserve e ' +
    'Banca centrale europea sono fissate dai rispettivi calendari ufficiali; discorsi e audizioni dei singoli ' +
    'membri vengono annunciati con pochi giorni di anticipo.';

  protected readonly banks = computed(() =>
    this.calendar.sections.map((section) => {
      const rate = this.calendar.byArea(section.area).find((i) => i.key === 'tasso-di-interesse');
      const last = rate ? this.calendar.lastPublished(rate) : null;
      // «Dal…» è la riunione che ha fissato il livello, non l'ultima tenuta:
      // quasi tutte le riunioni confermano il tasso senza cambiarlo.
      const since = rate ? this.calendar.inForceSince(rate) : null;
      const chair = this.calendar.nextChairEvent(section.area);

      return {
        area: section.area,
        name: section.bank,
        path: this.calendar.areaPath(section.area),
        current: rate && last ? this.calendar.value(last.actual, rate) : '—',
        since: since ? calendarDate(since.at) : '—',
        next: rate ? this.calendar.nextOf(rate) : null,
        chair: chair ? `${chair.title} · ${calendarDate(chair.at)}` : null,
      };
    }),
  );

  /** Appuntamenti futuri di entrambe le banche, raggruppati per giornata. */
  protected readonly agenda = computed(() => {
    const days = new Map<string, { key: string; label: string; events: CentralBankEvent[] }>();
    for (const event of this.calendar.nextEvents(undefined, AGENDA_LIMIT)) {
      const key = calendarDayKey(event.at);
      const day = days.get(key) ?? { key, label: calendarDayLabel(event.at), events: [] };
      day.events.push(event);
      days.set(key, day);
    }
    return [...days.values()];
  });

  protected readonly recent = computed(() => this.calendar.recentEvents(undefined, 12));

  protected bankOf(area: CalendarArea): string {
    return area === 'usa' ? 'Federal Reserve' : 'BCE';
  }

  protected dayOf(iso: string): string {
    return calendarDate(iso);
  }

  protected timeOf(iso: string): string {
    return calendarTime(iso);
  }
}
