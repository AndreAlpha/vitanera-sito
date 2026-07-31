import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DISCLAIMER_DATA } from '../../core/config/site.config';
import { Indicator, Stage } from '../../core/models/calendar.model';
import {
  CalendarService,
  STAGE_LABEL,
  calendarDate,
  calendarDateTime,
} from '../../core/services/calendar.service';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';
import { Sparkline } from '../../shared/ui/sparkline';

/**
 * Una delle due aree del calendario, con tutti i suoi indicatori.
 *
 * Ogni scheda risponde a tre domande nell'ordine in cui il lettore se le pone:
 * qual è l'ultimo valore, quanto si è scostato dalle attese, quando esce il
 * prossimo. Il resto — storico completo e grafico — sta nella pagina di dettaglio.
 */
@Component({
  selector: 'app-calendar-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, Icon, RiskNotice, Sparkline],
  template: `
    @if (section(); as area) {
      <app-page-header
        [eyebrow]="'Calendario economico · ' + area.tagline"
        [heading]="area.name"
        [icon]="area.icon"
        [description]="area.description"
      >
        <div class="head-facts">
          <span class="chip chip--sm chip--gold">
            <app-icon name="layers" [size]="11" />
            {{ area.indicators.length }} indicatori
          </span>
          <span class="chip chip--sm chip--neutral">
            <app-icon name="bank" [size]="11" />
            {{ area.bank }}
          </span>
          <a class="chip chip--sm chip--neutral" routerLink="/calendario">
            <app-icon name="calendar" [size]="11" />
            Tutte le aree
          </a>
        </div>
      </app-page-header>

      <!-- ---------------------------------------------------------------- -->
      <!-- Prossime uscite dell'area                                         -->
      <!-- ---------------------------------------------------------------- -->
      @if (upcoming().length) {
        <section class="block">
          <div class="sec-head">
            <div>
              <p class="eyebrow">In arrivo</p>
              <h2>Prossime uscite</h2>
            </div>
          </div>
          <ul class="next-strip">
            @for (row of upcoming(); track row.indicator.slug) {
              <li>
                <a
                  class="card card--hover next"
                  [routerLink]="['/calendario', area.slugPath, row.indicator.key]"
                >
                  <p class="next__when">{{ when(row.release.at) }}</p>
                  <p class="next__name">{{ row.indicator.short }}</p>
                  <p class="next__fc tnum">
                    @if (row.release.forecast !== null) {
                      atteso
                      <strong>{{ calendar.value(row.release.forecast, row.indicator) }}</strong>
                    } @else {
                      consenso non rilevato
                    }
                  </p>
                </a>
              </li>
            }
          </ul>
        </section>
      }

      <!-- ---------------------------------------------------------------- -->
      <!-- Gli indicatori                                                    -->
      <!-- ---------------------------------------------------------------- -->
      <section class="block">
        <div class="sec-head">
          <div>
            <p class="eyebrow">Storico e prossima uscita</p>
            <h2>Indicatori</h2>
          </div>
          <span class="chip chip--sm chip--warn">
            <app-icon name="clock" [size]="11" />
            Orari di Roma
          </span>
        </div>

        <div class="grid">
          @for (row of rows(); track row.indicator.slug) {
            <a
              class="card card--hover ind"
              [routerLink]="['/calendario', area.slugPath, row.indicator.key]"
            >
              <div class="ind__head">
                <h3>{{ row.indicator.name }}</h3>
                <app-icon name="chevron-right" [size]="15" />
              </div>
              <p class="ind__cadence">{{ cadence(row.indicator) }} · {{ row.indicator.source }}</p>

              <div class="ind__body">
                <div class="ind__value">
                  <p class="ind__num tnum">{{ calendar.value(row.last?.actual, row.indicator) }}</p>
                  @if (row.last; as last) {
                    <p class="ind__period">
                      {{ last.period }}
                      @if (last.stage) {
                        <span class="ind__stage">{{ stageLabel(last.stage) }}</span>
                      }
                    </p>
                  }
                </div>
                <app-sparkline
                  class="ind__spark"
                  [values]="row.spark"
                  [label]="'Andamento di ' + row.indicator.name"
                />
              </div>

              <div class="ind__surprise">
                @if (row.surprise; as s) {
                  <span class="pill" [class]="'pill--' + s.tone">
                    <app-icon [name]="arrow(s.delta)" [size]="11" />
                    {{ s.label }}
                  </span>
                  <span class="ind__wording">{{ s.wording }}</span>
                } @else {
                  <span class="ind__wording">Consenso non rilevato per l’ultima uscita.</span>
                }
              </div>

              <p class="ind__next">
                <app-icon name="calendar" [size]="12" />
                @if (row.next; as next) {
                  Prossima uscita <strong>{{ when(next.at) }}</strong>
                  @if (next.forecast !== null) {
                    · atteso {{ calendar.value(next.forecast, row.indicator) }}
                  }
                } @else {
                  Prossima uscita non ancora fissata
                }
              </p>
            </a>
          }
        </div>
      </section>

      <p class="fineprint"><app-icon name="info" [size]="12" />{{ dataNote }}</p>
      <app-risk-notice variant="card" title="Come leggere questi numeri" />
    } @else {
      <app-page-header
        eyebrow="Calendario economico"
        heading="Area non trovata"
        icon="calendar"
        description="L’area richiesta non esiste. Le aree disponibili sono USA ed Euro zona."
      />
      <a class="btn btn--gold" routerLink="/calendario">
        Torna al calendario <app-icon name="arrow-right" [size]="15" />
      </a>
    }
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

    /* --- Striscia delle prossime uscite ----------------------------------- */

    .next-strip {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 12px;
    }

    .next {
      display: block;
      padding: 14px 16px 13px;
      height: 100%;
    }

    .next__when {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--accent);
    }

    .next__name {
      margin-top: 6px;
      font-size: 13.6px;
      font-weight: 600;
      color: var(--text);
      line-height: 1.35;
    }

    .next__fc {
      margin-top: 6px;
      font-size: 11.5px;
      color: var(--text-faint);
    }

    .next__fc strong {
      color: var(--text-soft);
    }

    /* --- Griglia degli indicatori ----------------------------------------- */

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
      gap: 14px;
    }

    .ind {
      display: flex;
      flex-direction: column;
      padding: 18px 20px 16px;
    }

    .ind__head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }

    .ind__head h3 {
      font-size: 15px;
      line-height: 1.3;
      letter-spacing: -0.015em;
      transition: color 0.25s var(--ease);
    }

    .ind:hover .ind__head h3 {
      color: var(--accent-soft);
    }

    .ind__head app-icon {
      color: var(--text-faint);
      margin-top: 2px;
    }

    .ind__cadence {
      margin-top: 4px;
      font-size: 11px;
      color: var(--text-faint);
    }

    .ind__body {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 16px;
      margin-top: 16px;
    }

    .ind__num {
      font-size: 25px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.03em;
      color: var(--text);
    }

    .ind__period {
      margin-top: 5px;
      font-size: 11px;
      color: var(--text-muted);
    }

    .ind__stage {
      margin-left: 5px;
      padding: 1px 6px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line);
      font-size: 9.5px;
      color: var(--text-faint);
    }

    .ind__spark {
      width: 120px;
      flex: none;
      padding-bottom: 4px;
    }

    .ind__surprise {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin-top: 14px;
      min-height: 22px;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 9px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line);
      font-size: 11px;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
    }

    .pill--bull {
      color: var(--chart-up);
      border-color: rgba(74, 210, 149, 0.3);
      background: var(--chart-up-dim);
    }

    .pill--bear {
      color: var(--chart-down);
      border-color: rgba(226, 112, 90, 0.32);
      background: var(--chart-down-dim);
    }

    .pill--warn {
      color: var(--warn);
      border-color: rgba(240, 169, 59, 0.3);
      background: var(--warn-dim);
    }

    .pill--neutral,
    .pill--gold {
      color: var(--text-muted);
      background: rgba(255, 255, 255, 0.03);
    }

    .ind__wording {
      font-size: 11.5px;
      color: var(--text-muted);
    }

    .ind__next {
      display: flex;
      align-items: center;
      gap: 7px;
      margin-top: auto;
      padding-top: 14px;
      border-top: 1px solid var(--line);
      font-size: 11.5px;
      color: var(--text-muted);
    }

    .ind__next app-icon {
      color: var(--accent);
      flex: none;
    }

    .ind__next strong {
      color: var(--text-soft);
      font-weight: 600;
    }

    @media (max-width: 620px) {
      .grid {
        grid-template-columns: minmax(0, 1fr);
      }

      .ind {
        padding: 16px 17px 14px;
      }

      .ind__num {
        font-size: 22px;
      }

      .ind__spark {
        width: 96px;
      }
    }
  `,
})
export class CalendarArea {
  protected readonly calendar = inject(CalendarService);
  protected readonly dataNote = DISCLAIMER_DATA;

  /** Valorizzato dai dati di rotta: "usa" oppure "euro-zona". */
  readonly area = input.required<string>();

  protected readonly section = computed(() => {
    const found = this.calendar.sectionBySlug(this.area());
    return found ? { ...found, slugPath: this.calendar.areaPath(found.area) } : null;
  });

  protected readonly upcoming = computed(() => {
    const section = this.section();
    return section ? this.calendar.upcoming(section.area, 5) : [];
  });

  /** Una riga per indicatore, con ciò che serve alla scheda già calcolato. */
  protected readonly rows = computed(() =>
    (this.section()?.indicators ?? []).map((indicator) => {
      const last = this.calendar.lastPublished(indicator);
      return {
        indicator,
        last,
        next: this.calendar.nextOf(indicator),
        surprise: last ? this.calendar.surprise(last, indicator) : null,
        spark: this.calendar
          .chartSeries(indicator, 16)
          .map((r) => r.actual)
          .filter((v): v is number => v !== null),
      };
    }),
  );

  protected when(iso: string): string {
    return calendarDateTime(iso);
  }

  protected day(iso: string): string {
    return calendarDate(iso);
  }

  /** "Mensile", "Settimanale": la cadenza è memorizzata in minuscolo. */
  protected cadence(indicator: Indicator): string {
    const c = indicator.cadence;
    return c === 'riunione' ? 'A ogni riunione' : c.charAt(0).toUpperCase() + c.slice(1);
  }

  protected stageLabel(stage: Stage): string {
    return STAGE_LABEL[stage];
  }

  protected arrow(delta: number): string {
    return delta > 0 ? 'arrow-up' : delta < 0 ? 'arrow-down' : 'arrow-flat';
  }
}
