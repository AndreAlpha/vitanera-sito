import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DISCLAIMER_DATA } from '../../core/config/site.config';
import { Tone } from '../../core/models/article.model';
import { Indicator, Stage } from '../../core/models/calendar.model';
import {
  CalendarService,
  STAGE_LABEL,
  calendarDateTime,
} from '../../core/services/calendar.service';
import { calendarMarkdown, exportFilename } from '../../core/services/calendar-export';
import { ExportButton } from '../../shared/ui/export-button';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';
import { Sparkline } from '../../shared/ui/sparkline';

/**
 * Una delle due aree del calendario, con tutti i suoi indicatori.
 *
 * Ogni scheda risponde a tre domande nell'ordine in cui il lettore se le pone:
 * qual è l'ultimo valore, quanto si è scostato dalle attese, quando esce il
 * prossimo. Sono tre righe separate da un filetto — non tre fondi diversi
 * dentro lo stesso riquadro — così l'occhio scende dritto senza doversi
 * chiedere ogni volta dove finisce un'informazione e ne comincia un'altra.
 * Il resto — storico completo e grafico — sta nella pagina di dettaglio.
 *
 * Non porta più l'avvertenza estesa: la pagina non esprime giudizi, riporta
 * statistiche già pubblicate, e la formula per intero vive in `/avvertenze`.
 */
@Component({
  selector: 'app-calendar-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, Icon, Sparkline, ExportButton],
  template: `
    @if (section(); as area) {
      <app-page-header
        [eyebrow]="'Calendario economico · ' + area.tagline"
        [heading]="area.name"
        [icon]="area.icon"
        [description]="area.description"
      >
        <div class="head-facts">
          <span class="chip chip--accent">
            <app-icon name="layers" [size]="12" />
            {{ area.indicators.length }} indicatori
          </span>
          <span class="chip chip--flat">
            <app-icon name="bank" [size]="12" />
            {{ area.bank }}
          </span>
          <a class="chip chip--flat" routerLink="/calendario">
            <app-icon name="calendar" [size]="12" />
            Tutte le aree
          </a>
        </div>

        <div class="head-export">
          <app-export-button
            [label]="'Esporta ' + area.name + ' in Markdown'"
            [filename]="exportName()"
            [build]="buildExport"
          />
          <p class="head-export__note">
            Un file con i {{ area.indicators.length }} indicatori di quest’area e lo storico
            completo di ciascuno: data e ora, previsto, attuale, precedente e scostamento.
          </p>
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

          <!-- Erano cinque riquadri affiancati per tre righe di testo ciascuno:
               un elenco con i filetti dice le stesse cose e si scorre. -->
          <ul class="card next">
            @for (row of upcoming(); track row.indicator.slug) {
              <li>
                <a [routerLink]="['/calendario', area.slugPath, row.indicator.key]">
                  <span class="next__when tnum">{{ when(row.release.at) }}</span>
                  <span class="next__name">{{ row.indicator.short }}</span>
                  <span class="next__fc tnum">
                    @if (row.release.forecast !== null) {
                      atteso
                      <strong>{{ calendar.value(row.release.forecast, row.indicator) }}</strong>
                    } @else {
                      consenso non rilevato
                    }
                  </span>
                  <app-icon name="chevron-right" [size]="14" />
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
          <!-- Era una pastiglia ambrata, ma il fuso non è un allarme: è la
               nota della sezione, e come tale si legge di fianco al titolo. -->
          <span class="sec-head__note">Orari di Roma</span>
        </div>

        <div class="grid">
          @for (row of rows(); track row.indicator.slug) {
            <a
              class="card card--link ind"
              [routerLink]="['/calendario', area.slugPath, row.indicator.key]"
            >
              <div class="ind__head">
                <h3>{{ row.indicator.name }}</h3>
                <app-icon name="chevron-right" [size]="14" />
              </div>
              <p class="ind__cadence">{{ cadence(row.indicator) }} · {{ row.indicator.source }}</p>

              <!-- 1. Ultimo valore, con la forma della serie accanto. -->
              <div class="ind__row ind__value">
                <div>
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

              <!-- 2. Scostamento dal consenso. -->
              <div class="ind__row ind__surprise">
                @if (row.surprise; as s) {
                  <span class="chip tnum" [class]="chipTone(s.tone)">
                    <app-icon [name]="arrow(s.delta)" [size]="11" />
                    {{ s.label }}
                  </span>
                  <span class="ind__wording">{{ s.wording }}</span>
                } @else {
                  <span class="ind__wording">Consenso non rilevato per l’ultima uscita.</span>
                }
              </div>

              <!-- 3. Prossima uscita. -->
              <p class="ind__row ind__next">
                <app-icon name="calendar" [size]="12" />
                <span>
                  @if (row.next; as next) {
                    Prossima uscita <strong>{{ when(next.at) }}</strong>
                    @if (next.forecast !== null) {
                      · atteso {{ calendar.value(next.forecast, row.indicator) }}
                    }
                  } @else {
                    Prossima uscita non ancora fissata
                  }
                </span>
              </p>
            </a>
          }
        </div>
      </section>

      <p class="fineprint"><app-icon name="info" [size]="12" />{{ dataNote }}</p>
    } @else {
      <app-page-header
        eyebrow="Calendario economico"
        heading="Area non trovata"
        icon="calendar"
        description="L’area richiesta non esiste. Le aree disponibili sono USA ed Euro zona."
      />
      <a class="btn btn--primary" routerLink="/calendario">
        Torna al calendario <app-icon name="arrow-right" [size]="15" />
      </a>
    }
  `,
  styles: `
    :host {
      display: block;
    }

    /* --- Intestazione ------------------------------------------------------ */

    .head-facts {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-2);
    }

    /* La pastiglia che è anche un rimando cambia colore, non posizione. */
    .head-facts a {
      transition:
        color var(--dur) var(--ease),
        border-color var(--dur) var(--ease);
    }

    .head-facts a:hover {
      border-color: var(--accent-line);
      color: var(--accent-soft);
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

    /* --- Prossime uscite ---------------------------------------------------- */

    .next {
      list-style: none;
      /* Il fondo dell'ultima riga in evidenza non deve uscire dagli angoli. */
      overflow: hidden;
    }

    .next li + li {
      border-top: 1px solid var(--line);
    }

    .next a {
      display: grid;
      grid-template-columns: 180px minmax(0, 1fr) auto 14px;
      align-items: center;
      gap: var(--s-4);
      padding: var(--s-3) var(--s-4);
      color: var(--text-soft);
      transition:
        background var(--dur) var(--ease),
        color var(--dur) var(--ease);
    }

    .next a:hover {
      background: var(--surface-hover);
      color: var(--text);
    }

    .next__when {
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--accent);
    }

    .next__name {
      font-size: var(--t-base);
      font-weight: 500;
      color: var(--text);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .next__fc {
      font-size: var(--t-xs);
      color: var(--text-faint);
      white-space: nowrap;
    }

    .next__fc strong {
      color: var(--text-soft);
      font-weight: 500;
    }

    .next app-icon {
      color: var(--text-faint);
    }

    /* --- Griglia degli indicatori ------------------------------------------- */

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: var(--s-4);
    }

    .ind {
      display: flex;
      flex-direction: column;
      padding: var(--s-card);
    }

    .ind__head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: var(--s-3);
    }

    .ind__head h3 {
      font-size: var(--t-md);
      line-height: var(--lh-snug);
      transition: color var(--dur) var(--ease);
    }

    .ind:hover .ind__head h3 {
      color: var(--accent-soft);
    }

    .ind__head app-icon {
      color: var(--text-faint);
      margin-top: 2px;
    }

    .ind__cadence {
      margin-top: var(--s-1);
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    /* Le tre risposte della scheda: stesso fondo, un filetto a dividerle. */
    .ind__row {
      display: flex;
      align-items: center;
      gap: var(--s-4);
      margin-top: var(--s-4);
      padding-top: var(--s-4);
      border-top: 1px solid var(--line);
    }

    .ind__value {
      justify-content: space-between;
      align-items: flex-end;
    }

    .ind__num {
      font-size: var(--t-xl);
      font-weight: 600;
      line-height: var(--lh-tight);
      color: var(--text);
    }

    .ind__period {
      margin-top: var(--s-1);
      font-size: var(--t-xs);
      color: var(--text-muted);
    }

    /* La revisione era una pastiglia dentro una riga già minuta: basta il
       punto mediano che separa le altre coppie di dati della scheda. */
    .ind__stage {
      color: var(--text-faint);
    }

    .ind__stage::before {
      content: '·';
      margin: 0 var(--s-1);
    }

    .ind__spark {
      width: 120px;
      flex: none;
      padding-bottom: var(--s-1);
    }

    /* Assorbe l'altezza in più quando un titolo accanto va a capo, così la
       riga della prossima uscita resta appoggiata al fondo di ogni scheda. */
    .ind__surprise {
      flex: 1;
      flex-wrap: wrap;
      gap: var(--s-2);
    }

    .ind__wording {
      font-size: var(--t-xs);
      color: var(--text-muted);
    }

    .ind__next {
      align-items: flex-start;
      gap: var(--s-2);
      font-size: var(--t-xs);
      color: var(--text-muted);
    }

    .ind__next app-icon {
      color: var(--accent);
      margin-top: 2px;
    }

    .ind__next strong {
      color: var(--text-soft);
      font-weight: 500;
    }

    @media (max-width: 760px) {
      .next a {
        grid-template-columns: minmax(0, 1fr) 14px;
        gap: var(--s-1) var(--s-3);
      }

      .next__when,
      .next__name,
      .next__fc {
        grid-column: 1;
        white-space: normal;
      }

      .next app-icon {
        grid-column: 2;
        grid-row: 1 / span 3;
        align-self: center;
      }
    }

    @media (max-width: 620px) {
      .grid {
        grid-template-columns: minmax(0, 1fr);
      }

      .ind {
        padding: var(--s-4);
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

  protected exportName(): string {
    return exportFilename(this.section()?.slugPath ?? 'area', new Date().toISOString());
  }

  /** Invocato solo al clic: vedi `ExportButton`. */
  protected readonly buildExport = (): string => {
    const section = this.section();
    return calendarMarkdown({
      indicators: section?.indicators ?? [],
      title: `Calendario economico — ${section?.name ?? 'area'}`,
      events: section ? this.calendar.events.filter((e) => e.area === section.area) : [],
      archiveGeneratedAt: this.calendar.generatedAt,
      now: new Date().toISOString(),
    });
  };

  protected when(iso: string): string {
    return calendarDateTime(iso);
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

  /**
   * Il verso della sorpresa nella forma delle pastiglie globali: prima ogni
   * pagina si disegnava le proprie, con verdi e rossi leggermente diversi.
   */
  protected chipTone(tone: Tone): string {
    switch (tone) {
      case 'bull':
        return 'chip--up';
      case 'bear':
        return 'chip--down';
      case 'warn':
        return 'chip--warn';
      default:
        return 'chip--flat';
    }
  }
}
