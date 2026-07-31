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
import { RiskNotice } from '../../shared/legal/risk-notice';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

/**
 * Calendario economico — indici principali.
 *
 * È la porta d'ingresso alle due aree. Mostra ciò che serve subito: che cosa
 * esce nei prossimi giorni e quali appuntamenti hanno in agenda le due banche
 * centrali. Il dettaglio di ogni indicatore vive nelle pagine d'area.
 */
@Component({
  selector: 'app-calendar-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, Icon, RiskNotice],
  template: `
    <app-page-header
      eyebrow="Dati ufficiali, storico e prossime uscite"
      heading="Calendario economico indici principali"
      icon="calendar"
      [description]="intro"
    >
      <div class="head-facts">
        <span class="chip chip--sm chip--gold">
          <app-icon name="layers" [size]="11" />
          {{ calendar.indicators.length }} indicatori
        </span>
        <span class="chip chip--sm chip--neutral">
          <app-icon name="archive" [size]="11" />
          {{ releases() }} diffusioni in archivio
        </span>
        <span class="chip chip--sm chip--warn">
          <app-icon name="clock" [size]="11" />
          Orari di Roma
        </span>
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
            class="card card--hover area"
            [routerLink]="['/calendario', calendar.areaPath(section.area)]"
            [attr.data-accent]="section.area"
          >
            <div class="area__top">
              <span class="area__icon"><app-icon [name]="section.icon" [size]="21" /></span>
              <div>
                <h3>{{ section.name }}</h3>
                <p class="area__tag">{{ section.tagline }}</p>
              </div>
              <span class="area__count tnum">{{ section.indicators.length }}</span>
            </div>
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
        <span class="chip chip--sm chip--neutral">
          <app-icon name="info" [size]="11" />
          Il previsto è il consenso degli analisti
        </span>
      </div>

      @if (upcomingDays().length) {
        <div class="card agenda">
          @for (day of upcomingDays(); track day.key) {
            <div class="agenda__day">
              <p class="agenda__date">{{ day.label }}</p>
              <ul class="agenda__rows">
                @for (row of day.rows; track row.indicator.slug) {
                  <li>
                    <a
                      [routerLink]="[
                        '/calendario',
                        calendar.areaPath(row.indicator.area),
                        row.indicator.key,
                      ]"
                    >
                      <span class="agenda__time tnum">{{ time(row.release.at) }}</span>
                      <span class="agenda__flag" [attr.data-accent]="row.indicator.area">
                        {{ calendar.areaName(row.indicator.area) }}
                      </span>
                      <span class="agenda__name">{{ row.indicator.name }}</span>
                      <span class="agenda__fc tnum">
                        @if (row.release.forecast !== null) {
                          atteso {{ calendar.value(row.release.forecast, row.indicator) }}
                        } @else {
                          consenso non ancora rilevato
                        }
                      </span>
                      <app-icon name="chevron-right" [size]="14" />
                    </a>
                  </li>
                }
              </ul>
            </div>
          }
        </div>
      } @else {
        <p class="card empty">Nessuna uscita già fissata nell’archivio corrente.</p>
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
          <article class="card bank" [attr.data-accent]="section.area">
            <p class="bank__name">
              <app-icon name="bank" [size]="15" />
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

    <app-risk-notice variant="card" title="Come leggere questi numeri" />
  `,
  styles: `
    :host {
      display: block;
    }

    .head-facts {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    /* --- Aree ------------------------------------------------------------ */

    .areas {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 16px;
    }

    .area {
      display: flex;
      flex-direction: column;
      padding: 22px 24px 20px;
    }

    .area__top {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .area__icon {
      display: grid;
      place-items: center;
      width: 46px;
      height: 46px;
      flex: none;
      border-radius: 15px;
      border: 1px solid var(--accent-line);
      background: linear-gradient(
        140deg,
        rgba(var(--accent-rgb), 0.18),
        rgba(var(--accent-rgb), 0.03)
      );
      color: var(--accent);
    }

    .area__top h3 {
      font-size: 20px;
      letter-spacing: -0.02em;
    }

    .area__tag {
      margin-top: 2px;
      font-size: 12px;
      color: var(--text-muted);
    }

    .area__count {
      margin-left: auto;
      font-size: 26px;
      font-weight: 700;
      color: var(--accent);
      line-height: 1;
    }

    .area__desc {
      margin-top: 15px;
      font-size: 13.2px;
      line-height: 1.62;
      color: var(--text-muted);
    }

    .area__list {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 15px;
    }

    .area__list li {
      padding: 3px 10px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.025);
      font-size: 11px;
      color: var(--text-soft);
    }

    .area__more {
      color: var(--text-faint) !important;
      border-style: dashed !important;
    }

    .area__cta {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      margin-top: auto;
      padding-top: 18px;
      font-size: 12.5px;
      font-weight: 600;
      color: var(--accent);
      transition: gap 0.3s var(--ease);
    }

    .area:hover .area__cta {
      gap: 12px;
    }

    /* --- Agenda ---------------------------------------------------------- */

    .agenda {
      padding: 4px 0;
      overflow: hidden;
    }

    .agenda__day + .agenda__day {
      border-top: 1px solid var(--line);
    }

    .agenda__date {
      padding: 13px 22px 7px;
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--accent);
    }

    .agenda__rows {
      list-style: none;
      padding-bottom: 8px;
    }

    .agenda__rows a {
      display: grid;
      grid-template-columns: 52px 82px minmax(0, 1fr) auto 16px;
      align-items: center;
      gap: 12px;
      padding: 9px 22px;
      color: var(--text-soft);
      transition: background 0.2s var(--ease);
    }

    .agenda__rows a:hover {
      background: rgba(255, 255, 255, 0.03);
      color: var(--text);
    }

    .agenda__time {
      font-size: 12.5px;
      font-weight: 600;
      color: var(--text);
    }

    .agenda__flag {
      justify-self: start;
      padding: 2px 9px;
      border-radius: var(--r-pill);
      border: 1px solid var(--accent-line);
      background: var(--accent-dim);
      color: var(--accent);
      font-size: 10.5px;
      font-weight: 600;
      white-space: nowrap;
    }

    .agenda__name {
      font-size: 13.4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .agenda__fc {
      font-size: 11.5px;
      color: var(--text-faint);
      white-space: nowrap;
    }

    .agenda__rows app-icon {
      color: var(--text-faint);
    }

    .empty {
      padding: 26px;
      text-align: center;
      color: var(--text-muted);
      font-size: 13.4px;
    }

    /* --- Banche centrali -------------------------------------------------- */

    .banks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
    }

    .bank {
      padding: 18px 22px 20px;
    }

    .bank__name {
      display: flex;
      align-items: center;
      gap: 9px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--line);
      font-size: 13.5px;
      font-weight: 600;
      color: var(--accent);
    }

    .bank__list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 11px;
      margin-top: 14px;
    }

    .bank__list li {
      display: flex;
      gap: 13px;
      font-size: 12.8px;
    }

    .bank__when {
      flex: none;
      width: 78px;
      color: var(--text-faint);
      font-size: 11.5px;
      padding-top: 1px;
    }

    .bank__what {
      display: flex;
      flex-direction: column;
      gap: 2px;
      color: var(--text-soft);
      line-height: 1.45;
    }

    .bank__role {
      font-size: 11px;
      color: var(--text-faint);
    }

    .bank__empty {
      margin-top: 14px;
      font-size: 12.5px;
      color: var(--text-faint);
    }

    @media (max-width: 760px) {
      .agenda__rows a {
        grid-template-columns: 46px minmax(0, 1fr) 14px;
        row-gap: 3px;
        padding: 11px 16px;
      }

      .agenda__flag {
        grid-column: 2;
      }

      .agenda__name {
        grid-column: 2;
        white-space: normal;
      }

      .agenda__fc {
        grid-column: 2;
        white-space: normal;
      }

      .agenda__rows app-icon {
        grid-row: 1 / span 3;
        grid-column: 3;
      }

      .agenda__date {
        padding-inline: 16px;
      }

      .area {
        padding: 18px 18px 17px;
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
