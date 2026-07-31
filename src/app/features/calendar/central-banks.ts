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
import { RiskNotice } from '../../shared/legal/risk-notice';
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
 */
@Component({
  selector: 'app-central-banks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, Icon, RiskNotice],
  template: `
    <app-page-header
      eyebrow="Chi decide il costo del denaro"
      heading="Banche centrali"
      icon="bank"
      [description]="intro"
    >
      <div class="head-facts">
        <a class="chip chip--sm chip--neutral" routerLink="/calendario">
          <app-icon name="calendar" [size]="11" />
          Calendario economico
        </a>
        <span class="chip chip--sm chip--warn">
          <app-icon name="clock" [size]="11" />
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

      <div class="decisions">
        @for (bank of banks(); track bank.area) {
          <article class="card decision" [attr.data-accent]="bank.area">
            <p class="decision__bank">
              <app-icon name="bank" [size]="15" />
              {{ bank.name }}
            </p>

            <div class="decision__now">
              <span>
                <span class="decision__label">Tasso in vigore</span>
                <span class="decision__rate tnum">{{ bank.current }}</span>
              </span>
              <span class="decision__since">dal {{ bank.since }}</span>
            </div>

            @if (bank.next; as next) {
              <div class="decision__next">
                <p class="decision__label">Prossima riunione</p>
                <p class="decision__date">{{ dayOf(next.at) }}</p>
                <p class="decision__time">alle {{ timeOf(next.at) }} · annuncio della decisione</p>
              </div>
            } @else {
              <p class="decision__time">Nessuna riunione già in calendario.</p>
            }

            @if (bank.chair; as chair) {
              <p class="decision__chair">
                <app-icon name="users" [size]="12" />
                {{ chair }}
              </p>
            }

            <a
              class="decision__link"
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
            <li class="agenda__day">
              <p class="agenda__date">{{ day.label }}</p>
              <ul class="agenda__rows">
                @for (event of day.events; track event.at + event.title) {
                  <li class="agenda__row" [attr.data-accent]="event.area">
                    <span class="agenda__time tnum">{{ timeOf(event.at) }}</span>
                    <span class="agenda__kind" [class]="'agenda__kind--' + event.kind">
                      {{ event.note }}
                    </span>
                    <span class="agenda__body">
                      <strong>{{ event.title }}</strong>
                      @if (event.role) {
                        <span class="agenda__role">{{ event.role }}</span>
                      }
                    </span>
                    <span class="agenda__bank">{{ bankOf(event.area) }}</span>
                  </li>
                }
              </ul>
            </li>
          }
        </ol>
      } @else {
        <p class="card empty">Nessun appuntamento già fissato nell’archivio corrente.</p>
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

    <p class="fineprint">
      <app-icon name="info" [size]="12" />
      Le date delle riunioni di politica monetaria sono quelle pubblicate dai calendari ufficiali di
      Federal Reserve e Banca centrale europea. Gli interventi dei singoli membri vengono annunciati
      con pochi giorni di preavviso e possono essere aggiunti, spostati o annullati senza preavviso.
    </p>

    <app-risk-notice variant="card" title="Avvertenza sempre valida" />
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

    /* --- Decisioni -------------------------------------------------------- */

    .decisions {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
    }

    .decision {
      display: flex;
      flex-direction: column;
      padding: 20px 24px 18px;
      border-color: var(--accent-line);
    }

    .decision__bank {
      display: flex;
      align-items: center;
      gap: 9px;
      font-size: 13.5px;
      font-weight: 600;
      color: var(--accent);
    }

    .decision__now {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
      margin-top: 14px;
    }

    .decision__label {
      display: block;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--text-faint);
    }

    .decision__rate {
      display: block;
      margin-top: 4px;
      font-size: 34px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.035em;
      color: var(--accent-soft);
    }

    .decision__since {
      font-size: 11.5px;
      color: var(--text-faint);
    }

    .decision__next {
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid var(--line);
    }

    .decision__date {
      margin-top: 5px;
      font-size: 17px;
      font-weight: 600;
      color: var(--text);
    }

    .decision__time {
      margin-top: 3px;
      font-size: 12px;
      color: var(--text-muted);
    }

    .decision__chair {
      display: flex;
      align-items: center;
      gap: 7px;
      margin-top: 12px;
      font-size: 12px;
      color: var(--text-faint);
    }

    .decision__link {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      margin-top: auto;
      padding-top: 16px;
      font-size: 12.5px;
      font-weight: 600;
      color: var(--accent);
      transition: gap 0.3s var(--ease);
    }

    .decision__link:hover {
      gap: 12px;
    }

    /* --- Agenda ----------------------------------------------------------- */

    .agenda {
      list-style: none;
      position: relative;
      padding-left: 22px;
    }

    /* Binario verticale che tiene insieme le giornate. */
    .agenda::before {
      content: '';
      position: absolute;
      left: 4px;
      top: 8px;
      bottom: 8px;
      width: 1px;
      background: linear-gradient(
        180deg,
        transparent,
        var(--line-strong) 12%,
        var(--line-strong) 88%,
        transparent
      );
    }

    .agenda__day {
      position: relative;
      padding-bottom: 22px;
    }

    .agenda__day::before {
      content: '';
      position: absolute;
      left: -22px;
      top: 6px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      border: 1px solid var(--accent-line);
      background: var(--bg);
    }

    .agenda__date {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--accent);
    }

    .agenda__rows {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 10px;
    }

    .agenda__row {
      display: grid;
      grid-template-columns: 48px 128px minmax(0, 1fr) auto;
      align-items: baseline;
      gap: 12px;
      padding: 11px 16px;
      border-radius: var(--r-md);
      border: 1px solid var(--line);
      background: var(--panel-glass);
    }

    .agenda__time {
      font-size: 12.5px;
      font-weight: 600;
      color: var(--text);
    }

    .agenda__kind {
      justify-self: start;
      padding: 2px 9px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line);
      font-size: 10.5px;
      color: var(--text-muted);
      white-space: nowrap;
    }

    .agenda__kind--decisione,
    .agenda__kind--conferenza {
      border-color: var(--accent-line);
      background: var(--accent-dim);
      color: var(--accent);
      font-weight: 600;
    }

    .agenda__body {
      display: flex;
      flex-direction: column;
      gap: 2px;
      font-size: 13.2px;
      color: var(--text-soft);
      line-height: 1.45;
    }

    .agenda__role {
      font-size: 11px;
      color: var(--text-faint);
    }

    .agenda__bank {
      font-size: 11px;
      color: var(--text-faint);
      white-space: nowrap;
    }

    /* --- Passati ---------------------------------------------------------- */

    .past {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    .past li {
      display: grid;
      grid-template-columns: 150px minmax(0, 1fr) auto;
      gap: 14px;
      padding: 9px 16px;
      border-radius: var(--r-sm);
      font-size: 12.5px;
      color: var(--text-muted);
    }

    .past li:nth-child(odd) {
      background: rgba(255, 255, 255, 0.018);
    }

    .past__date {
      color: var(--text-faint);
      font-size: 11.5px;
    }

    .past__bank {
      color: var(--text-faint);
      font-size: 11px;
      white-space: nowrap;
    }

    .empty {
      padding: 26px;
      text-align: center;
      color: var(--text-muted);
      font-size: 13.4px;
    }

    @media (max-width: 760px) {
      .agenda__row {
        grid-template-columns: 48px minmax(0, 1fr);
        row-gap: 5px;
      }

      .agenda__kind {
        grid-column: 2;
      }

      .agenda__body {
        grid-column: 2;
      }

      .agenda__bank {
        grid-column: 2;
      }

      .past li {
        grid-template-columns: minmax(0, 1fr);
        gap: 2px;
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
