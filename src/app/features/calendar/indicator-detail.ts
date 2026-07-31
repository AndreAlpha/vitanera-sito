import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DISCLAIMER_DATA } from '../../core/config/site.config';
import { Release, Stage } from '../../core/models/calendar.model';
import { ContentService } from '../../core/services/content.service';
import {
  CalendarService,
  STAGE_LABEL,
  calendarDate,
  calendarDateTime,
  calendarTime,
} from '../../core/services/calendar.service';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';
import { IndicatorChart } from '../../shared/ui/indicator-chart';

/** Quante righe mostrare prima di chiedere «mostra tutto». */
const PREVIEW_ROWS = 14;

/**
 * Scheda completa di un indicatore: che cosa misura, dove è arrivato, quando
 * esce di nuovo e l'intero storico delle diffusioni.
 *
 * La tabella non è un ripiego rispetto al grafico: è il modo in cui i tre
 * numeri che contano — atteso, effettivo, scostamento — restano leggibili anche
 * a chi non distingue i colori del grafico o legge la pagina stampata.
 */
@Component({
  selector: 'app-indicator-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, Icon, RiskNotice, IndicatorChart],
  template: `
    @if (indicator(); as ind) {
      <app-page-header
        [eyebrow]="'Calendario economico · ' + calendar.areaName(ind.area)"
        [heading]="ind.name"
        icon="chart"
        [description]="ind.what"
      >
        <div class="head-facts">
          <a class="chip chip--sm chip--neutral" [routerLink]="['/calendario', areaPath()]">
            <app-icon name="arrow-right" [size]="11" />
            {{ calendar.areaName(ind.area) }}
          </a>
          <span class="chip chip--sm chip--neutral">
            <app-icon name="clock" [size]="11" />
            {{ cadenceLabel() }}
          </span>
          <span class="chip chip--sm chip--neutral">
            <app-icon name="bank" [size]="11" />
            {{ ind.source }}
          </span>
          <span class="chip chip--sm chip--gold">
            <app-icon name="archive" [size]="11" />
            {{ ind.releases.length }} diffusioni
          </span>
        </div>
      </app-page-header>

      <!-- ---------------------------------------------------------------- -->
      <!-- Ultimo dato e prossima uscita                                     -->
      <!-- ---------------------------------------------------------------- -->
      <section class="block">
        <div class="facts">
          <article class="card fact fact--main">
            <p class="fact__label">Ultimo valore diffuso</p>
            @if (last(); as l) {
              <p class="fact__value tnum">{{ calendar.value(l.actual, ind) }}</p>
              <p class="fact__meta">
                {{ l.period }}
                @if (l.stage) {
                  · {{ stageLabel(l.stage) }}
                }
              </p>
              <p class="fact__meta fact__meta--dim">Diffuso il {{ when(l.at) }}</p>
              <div class="fact__row">
                <span class="fact__mini">
                  Atteso <strong class="tnum">{{ calendar.value(l.forecast, ind) }}</strong>
                </span>
                @if (surprise(); as s) {
                  <span class="pill" [class]="'pill--' + s.tone">
                    <app-icon [name]="arrow(s.delta)" [size]="11" />
                    {{ s.label }} · {{ s.wording }}
                  </span>
                }
              </div>
            } @else {
              <p class="fact__value">—</p>
              <p class="fact__meta">Nessuna diffusione registrata.</p>
            }
          </article>

          <article class="card fact fact--next">
            <p class="fact__label">Prossima uscita</p>
            @if (next(); as next) {
              <p class="fact__value fact__value--date">{{ dayOf(next.at) }}</p>
              <p class="fact__meta">alle {{ timeOf(next.at) }} · ora di Roma</p>
              <p class="fact__meta fact__meta--dim">Periodo di riferimento: {{ next.period }}</p>
              <div class="fact__row">
                <span class="fact__mini">
                  Previsto
                  <strong class="tnum">
                    @if (next.forecast !== null) {
                      {{ calendar.value(next.forecast, ind) }}
                    } @else {
                      non ancora rilevato
                    }
                  </strong>
                </span>
              </div>
            } @else {
              <p class="fact__value fact__value--date">Non fissata</p>
              <p class="fact__meta">
                La data della prossima diffusione non è ancora stata pubblicata dall’ente che la
                cura.
              </p>
            }
          </article>
        </div>
      </section>

      <!-- ---------------------------------------------------------------- -->
      <!-- Grafico                                                           -->
      <!-- ---------------------------------------------------------------- -->
      <section class="block">
        <div class="sec-head">
          <div>
            <p class="eyebrow">Andamento</p>
            <h2>Effettivo e consenso a confronto</h2>
          </div>
        </div>
        <div class="card chart-card">
          <app-indicator-chart [indicator]="ind" [series]="series()" />
        </div>
      </section>

      <!-- ---------------------------------------------------------------- -->
      <!-- Perché si guarda                                                  -->
      <!-- ---------------------------------------------------------------- -->
      <section class="block">
        <div class="why">
          <article class="card why__card">
            <p class="why__label">
              <app-icon name="info" [size]="13" />
              Che cosa misura
            </p>
            <p>{{ ind.what }}</p>
          </article>
          <article class="card why__card">
            <p class="why__label">
              <app-icon name="target" [size]="13" />
              Perché si guarda
            </p>
            <p>{{ ind.why }}</p>
          </article>
        </div>

        @if (categories().length) {
          <div class="topics">
            <span class="topics__label">Argomenti collegati</span>
            @for (category of categories(); track category.slug) {
              <a class="topics__link" [routerLink]="['/argomenti', category.slug]">
                {{ category.name }}
              </a>
            }
          </div>
        }
      </section>

      <!-- ---------------------------------------------------------------- -->
      <!-- Storico                                                           -->
      <!-- ---------------------------------------------------------------- -->
      <section class="block">
        <div class="sec-head">
          <div>
            <p class="eyebrow">{{ ind.releases.length }} diffusioni</p>
            <h2>Storico</h2>
          </div>
          <span class="chip chip--sm chip--neutral">
            <app-icon name="clock" [size]="11" />
            Date e orari nel fuso di Roma
          </span>
        </div>

        <div class="card table-card">
          <div class="table-scroll">
            <table>
              <caption class="visually-hidden">
                Storico delle diffusioni di
                {{
                  ind.name
                }}: data e ora, periodo di riferimento, valore previsto dal consenso, valore
                effettivo e scostamento.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Data e ora</th>
                  <th scope="col">Periodo</th>
                  <th scope="col" class="num">Previsto</th>
                  <th scope="col" class="num">Attuale</th>
                  <th scope="col" class="num">Precedente</th>
                  <th scope="col" class="num">Scostamento</th>
                </tr>
              </thead>
              <tbody>
                @for (row of visibleRows(); track row.release.at + row.release.period) {
                  <tr [class.row--pending]="row.pending">
                    <td>
                      <span class="cell__date">{{ dayOf(row.release.at) }}</span>
                      <span class="cell__time tnum">{{ timeOf(row.release.at) }}</span>
                    </td>
                    <td>
                      {{ row.release.period }}
                      @if (row.release.stage) {
                        <span class="cell__stage">{{ stageLabel(row.release.stage) }}</span>
                      }
                    </td>
                    <td class="num tnum">{{ calendar.value(row.release.forecast, ind) }}</td>
                    <td class="num tnum cell__actual">
                      @if (row.release.actual !== null) {
                        {{ calendar.value(row.release.actual, ind) }}
                      } @else if (row.pending) {
                        <span class="cell__await">in attesa</span>
                      } @else {
                        <span class="cell__missing">non pubblicato</span>
                      }
                    </td>
                    <td class="num tnum cell__prev">
                      {{ calendar.value(row.release.previous, ind) }}
                    </td>
                    <td class="num">
                      @if (row.surprise; as s) {
                        <span class="pill pill--sm" [class]="'pill--' + s.tone">{{ s.label }}</span>
                      } @else {
                        <span class="cell__prev">—</span>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          @if (ind.releases.length > previewRows) {
            <button class="table-more" type="button" (click)="toggle()">
              @if (expanded()) {
                Mostra solo le ultime {{ previewRows }}
                <app-icon name="chevron-down" [size]="14" class="flip" />
              } @else {
                Mostra tutte le {{ ind.releases.length }} diffusioni
                <app-icon name="chevron-down" [size]="14" />
              }
            </button>
          }
        </div>

        <p class="fineprint">
          <app-icon name="info" [size]="12" />
          Fonte dei dati: {{ ind.source }} —
          <a [attr.href]="ind.sourceUrl" target="_blank" rel="noopener noreferrer">{{
            ind.sourceUrl
          }}</a
          >. Il valore «previsto» è il consenso degli analisti rilevato prima dell’uscita, non una
          previsione di questo sito.
        </p>
        <p class="fineprint"><app-icon name="alert" [size]="12" />{{ dataNote }}</p>
      </section>

      <app-risk-notice variant="card" title="Come leggere questi numeri" />
    } @else {
      <app-page-header
        eyebrow="Calendario economico"
        heading="Indicatore non trovato"
        icon="calendar"
        description="L’indicatore richiesto non esiste in questa area."
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

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }

    /* --- Ultimo dato / prossima uscita ------------------------------------ */

    .facts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
    }

    .fact {
      padding: 20px 24px 19px;
    }

    .fact--main {
      border-color: var(--accent-line);
      background: linear-gradient(160deg, rgba(var(--accent-rgb), 0.07), transparent 60%);
    }

    .fact__label {
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--text-faint);
    }

    .fact__value {
      margin-top: 10px;
      font-size: 38px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.035em;
      color: var(--text);
    }

    .fact--main .fact__value {
      color: var(--accent-soft);
    }

    .fact__value--date {
      font-size: 24px;
      letter-spacing: -0.02em;
    }

    .fact__meta {
      margin-top: 9px;
      font-size: 12.5px;
      color: var(--text-muted);
    }

    .fact__meta--dim {
      margin-top: 3px;
      font-size: 11.5px;
      color: var(--text-faint);
    }

    .fact__row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      margin-top: 15px;
      padding-top: 13px;
      border-top: 1px solid var(--line);
    }

    .fact__mini {
      font-size: 12px;
      color: var(--text-faint);
    }

    .fact__mini strong {
      color: var(--text-soft);
      font-weight: 600;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 10px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line);
      font-size: 11px;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
    }

    .pill--sm {
      padding: 1px 8px;
      font-size: 10.5px;
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

    /* --- Grafico ---------------------------------------------------------- */

    .chart-card {
      padding: 20px 24px 16px;
    }

    /* --- Che cosa misura / perché ----------------------------------------- */

    .why {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
    }

    .why__card {
      padding: 18px 22px 19px;
    }

    .why__label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent);
    }

    .why__card p:last-child {
      font-size: 13.4px;
      line-height: 1.68;
      color: var(--text-muted);
    }

    .topics {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin-top: 16px;
    }

    .topics__label {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--text-faint);
      margin-right: 3px;
    }

    .topics__link {
      padding: 3px 11px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line);
      font-size: 11.5px;
      color: var(--text-muted);
      transition:
        border-color 0.25s var(--ease),
        color 0.25s var(--ease);
    }

    .topics__link:hover {
      border-color: var(--accent-line);
      color: var(--accent-soft);
    }

    /* --- Tabella ---------------------------------------------------------- */

    .table-card {
      padding: 0;
      overflow: hidden;
    }

    .table-scroll {
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12.8px;
    }

    thead th {
      position: sticky;
      top: 0;
      padding: 12px 16px;
      border-bottom: 1px solid var(--line-strong);
      background: var(--panel-2);
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-faint);
      text-align: left;
      white-space: nowrap;
    }

    th.num,
    td.num {
      text-align: right;
    }

    tbody td {
      padding: 10px 16px;
      border-bottom: 1px solid var(--line);
      color: var(--text-soft);
      white-space: nowrap;
    }

    tbody tr:last-child td {
      border-bottom: 0;
    }

    tbody tr:hover td {
      background: rgba(255, 255, 255, 0.022);
    }

    .row--pending td {
      background: var(--accent-dim);
    }

    .cell__date {
      color: var(--text);
    }

    .cell__time {
      margin-left: 8px;
      color: var(--text-faint);
      font-size: 11.5px;
    }

    .cell__stage {
      margin-left: 6px;
      padding: 1px 7px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line);
      font-size: 9.5px;
      color: var(--text-faint);
    }

    .cell__actual {
      color: var(--text);
      font-weight: 600;
    }

    .cell__prev {
      color: var(--text-muted);
    }

    .cell__await {
      color: var(--accent);
      font-size: 11px;
      font-weight: 600;
    }

    .cell__missing {
      color: var(--text-muted);
      font-size: 11px;
      font-style: italic;
    }

    .table-more {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      padding: 13px;
      border: 0;
      border-top: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.02);
      color: var(--accent);
      font-family: inherit;
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s var(--ease);
    }

    .table-more:hover {
      background: rgba(255, 255, 255, 0.045);
    }

    .flip {
      transform: rotate(180deg);
    }

    @media (max-width: 620px) {
      .fact {
        padding: 17px 18px 16px;
      }

      .fact__value {
        font-size: 31px;
      }

      .fact__value--date {
        font-size: 20px;
      }

      .chart-card {
        padding: 16px 14px 12px;
      }

      tbody td,
      thead th {
        padding-inline: 12px;
      }
    }
  `,
})
export class IndicatorDetail {
  protected readonly calendar = inject(CalendarService);
  private readonly content = inject(ContentService);

  protected readonly dataNote = DISCLAIMER_DATA;
  protected readonly previewRows = PREVIEW_ROWS;

  /** Valorizzati dai dati di rotta. */
  readonly area = input.required<string>();
  readonly key = input.required<string>();

  protected readonly expanded = signal(false);

  protected readonly indicator = computed(() => {
    const section = this.calendar.sectionBySlug(this.area());
    if (!section) {
      return null;
    }
    return section.indicators.find((i) => i.key === this.key()) ?? null;
  });

  protected readonly areaPath = computed(() => {
    const ind = this.indicator();
    return ind ? this.calendar.areaPath(ind.area) : 'usa';
  });

  protected readonly last = computed(() => {
    const ind = this.indicator();
    return ind ? this.calendar.lastPublished(ind) : null;
  });

  /** `null` quando la data annunciata è nel frattempo trascorsa. */
  protected readonly next = computed(() => {
    const ind = this.indicator();
    return ind ? this.calendar.nextOf(ind) : null;
  });

  protected readonly surprise = computed(() => {
    const ind = this.indicator();
    const l = this.last();
    return ind && l ? this.calendar.surprise(l, ind) : null;
  });

  protected readonly series = computed(() => {
    const ind = this.indicator();
    return ind ? this.calendar.chartSeries(ind, 28) : [];
  });

  protected readonly categories = computed(() => {
    const ind = this.indicator();
    if (!ind) {
      return [];
    }
    return ind.categories
      .map((slug) => this.content.categoryBySlug(slug))
      .filter((c) => c !== null);
  });

  /**
   * Lo storico si apre sulle ultime righe. Una diffusione già in calendario ma
   * non ancora avvenuta compare in testa, così la tabella e il riquadro
   * «prossima uscita» raccontano la stessa cosa.
   */
  protected readonly visibleRows = computed(() => {
    const ind = this.indicator();
    if (!ind) {
      return [];
    }
    const next = this.next();
    const all = next ? [next, ...ind.releases] : [...ind.releases];
    const rows = this.expanded() ? all : all.slice(0, PREVIEW_ROWS);
    const now = new Date().toISOString().slice(0, 16) + 'Z';
    return rows.map((release) => ({
      release,
      surprise: this.calendar.surprise(release, ind),
      // Senza valore effettivo ci sono due casi diversi: il dato deve ancora
      // uscire, oppure la diffusione è saltata e non uscirà più. Chiamarli
      // entrambi «in attesa» terrebbe in sospeso una riga chiusa da mesi.
      pending: release.actual === null && release.at > now,
    }));
  });

  protected readonly cadenceLabel = computed(() => {
    const c = this.indicator()?.cadence;
    switch (c) {
      case 'settimanale':
        return 'Ogni settimana';
      case 'trimestrale':
        return 'Ogni trimestre';
      case 'riunione':
        return 'A ogni riunione';
      default:
        return 'Ogni mese';
    }
  });

  protected toggle(): void {
    this.expanded.update((v) => !v);
  }

  protected when(iso: string): string {
    return calendarDateTime(iso);
  }

  protected dayOf(iso: string): string {
    return calendarDate(iso);
  }

  protected timeOf(iso: string): string {
    return calendarTime(iso);
  }

  protected stageLabel(stage: Stage): string {
    return STAGE_LABEL[stage];
  }

  protected arrow(delta: number): string {
    return delta > 0 ? 'arrow-up' : delta < 0 ? 'arrow-down' : 'arrow-flat';
  }
}
