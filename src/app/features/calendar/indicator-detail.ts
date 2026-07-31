import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DISCLAIMER_DATA } from '../../core/config/site.config';
import { Stage } from '../../core/models/calendar.model';
import { ContentService } from '../../core/services/content.service';
import {
  CalendarService,
  STAGE_LABEL,
  calendarDate,
  calendarDateTime,
  calendarTime,
} from '../../core/services/calendar.service';
import { calendarMarkdown, exportFilename } from '../../core/services/calendar-export';
import { ExportButton } from '../../shared/ui/export-button';
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
 * a chi non distingue i colori del grafico o legge la pagina stampata. Per
 * questo tutto il resto della pagina le fa spazio: l'identikit dell'indicatore
 * è una riga di testo, la sintesi in alto è una riga di dati divisa da filetti,
 * e la scheda descrittiva è un elenco, non una fila di riquadri.
 */
@Component({
  selector: 'app-indicator-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, Icon, IndicatorChart, ExportButton],
  template: `
    @if (indicator(); as ind) {
      <app-page-header
        [eyebrow]="'Calendario economico · ' + calendar.areaName(ind.area)"
        [heading]="ind.name"
        icon="chart"
        [description]="ind.what"
      >
        <!-- Area, cadenza, fonte e profondità dell'archivio: erano quattro
             pastiglie, ma sono quattro dati di servizio e stanno in una riga. -->
        <p class="ident">
          <a class="link" [routerLink]="['/calendario', areaPath()]">{{
            calendar.areaName(ind.area)
          }}</a>
          · {{ cadenceLabel() }} · {{ ind.source }} · {{ ind.releases.length }} diffusioni
        </p>

        <div class="export">
          <app-export-button
            label="Esporta questo indicatore"
            [filename]="exportName()"
            [build]="buildExport"
          />
          <p class="export__note">
            Scarica in Markdown la scheda e tutte le {{ ind.releases.length }} diffusioni. Per
            l’intero calendario c’è l’esportazione completa in
            <a routerLink="/calendario">Indici principali</a>.
          </p>
        </div>
      </app-page-header>

      <!-- ---------------------------------------------------------------- -->
      <!-- Ultimo dato, scostamento, prossima uscita                         -->
      <!-- ---------------------------------------------------------------- -->
      <section class="block">
        <div class="card summary">
          <div class="summary__cell">
            <p class="summary__label">Ultimo valore diffuso</p>
            @if (last(); as l) {
              <p class="summary__value tnum">{{ calendar.value(l.actual, ind) }}</p>
              <p class="summary__meta">
                {{ l.period }}
                @if (l.stage) {
                  · {{ stageLabel(l.stage) }}
                }
              </p>
              <p class="summary__meta">Diffuso il {{ when(l.at) }}</p>
            } @else {
              <p class="summary__value">—</p>
              <p class="summary__meta">Nessuna diffusione registrata.</p>
            }
          </div>

          <div class="summary__cell">
            <p class="summary__label">Scostamento</p>
            @if (last(); as l) {
              @if (surprise(); as s) {
                <!-- Il colore non basta da solo: accanto ci sono sempre il
                     segno del numero e la freccia che ne ripete il verso. -->
                <p class="summary__value tnum" [class]="'tone--' + s.tone">
                  <app-icon [name]="arrow(s.delta)" [size]="14" />
                  {{ s.label }}
                </p>
                <p class="summary__meta">{{ s.wording }}</p>
              } @else {
                <p class="summary__value">—</p>
              }
              <p class="summary__meta">
                Atteso <strong class="tnum">{{ calendar.value(l.forecast, ind) }}</strong>
              </p>
            } @else {
              <p class="summary__value">—</p>
            }
          </div>

          <div class="summary__cell">
            <p class="summary__label">Prossima uscita</p>
            @if (next(); as next) {
              <p class="summary__value summary__value--date">{{ dayOf(next.at) }}</p>
              <p class="summary__meta">alle {{ timeOf(next.at) }} · ora di Roma</p>
              <p class="summary__meta">Periodo di riferimento: {{ next.period }}</p>
              <p class="summary__meta">
                Previsto
                <strong class="tnum">
                  @if (next.forecast !== null) {
                    {{ calendar.value(next.forecast, ind) }}
                  } @else {
                    non ancora rilevato
                  }
                </strong>
              </p>
            } @else {
              <p class="summary__value summary__value--date">Non fissata</p>
              <p class="summary__meta">
                La data della prossima diffusione non è ancora stata pubblicata dall’ente che la
                cura.
              </p>
            }
          </div>
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
        <div class="card card--pad">
          <app-indicator-chart [indicator]="ind" [series]="series()" />
        </div>
      </section>

      <!-- ---------------------------------------------------------------- -->
      <!-- Perché si guarda                                                  -->
      <!-- ---------------------------------------------------------------- -->
      <section class="block">
        <dl class="about">
          <div class="about__row">
            <dt>Che cosa misura</dt>
            <dd>{{ ind.what }}</dd>
          </div>
          <div class="about__row">
            <dt>Perché si guarda</dt>
            <dd>{{ ind.why }}</dd>
          </div>
        </dl>

        @if (categories().length) {
          <div class="topics">
            <span class="topics__label">Argomenti collegati</span>
            @for (category of categories(); track category.slug) {
              <a class="chip topics__link" [routerLink]="['/argomenti', category.slug]">
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
          <span class="sec-head__note">Date e orari nel fuso di Roma</span>
        </div>

        <div class="card table-card">
          <div class="table-scroll">
            <table>
              <caption class="sr-only">
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
                        <span class="cell__stage">· {{ stageLabel(row.release.stage) }}</span>
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
                    <td class="num tnum">
                      @if (row.surprise; as s) {
                        <span [class]="'tone--' + s.tone">{{ s.label }}</span>
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
          <span>
            Fonte dei dati: {{ ind.source }} —
            <a class="src" [attr.href]="ind.sourceUrl" target="_blank" rel="noopener noreferrer">{{
              ind.sourceUrl
            }}</a
            >. Il valore «previsto» è il consenso degli analisti rilevato prima dell’uscita, non una
            previsione di questo sito.
          </span>
        </p>
        <p class="fineprint">
          <app-icon name="alert" [size]="12" />
          <span>{{ dataNote }}</span>
        </p>
      </section>
    } @else {
      <app-page-header
        eyebrow="Calendario economico"
        heading="Indicatore non trovato"
        icon="calendar"
        description="L’indicatore richiesto non esiste in questa area."
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

    /* --- Identikit ed esportazione, dentro l'intestazione ------------------ */

    .ident {
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-muted);
    }

    .export {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-3) var(--s-4);
      margin-top: var(--s-4);
      padding-top: var(--s-4);
      border-top: 1px solid var(--line);
    }

    .export__note {
      flex: 1;
      min-width: 30ch;
      max-width: var(--measure);
      font-size: var(--t-xs);
      line-height: var(--lh-base);
      color: var(--text-faint);
    }

    .export__note a {
      color: var(--accent);
      transition: color var(--dur) var(--ease);
    }

    .export__note a:hover {
      color: var(--accent-soft);
    }

    /* --- Sintesi: una riga di dati, divisa da filetti ----------------------
       Erano due riquadri, uno dei quali in sfumatura d'accento. Sono tre dati
       dello stesso rango — ultimo valore, scostamento, prossima uscita — e si
       leggono meglio affiancati nello stesso riquadro.
       ---------------------------------------------------------------------- */

    .summary {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .summary__cell {
      padding: var(--s-card);
    }

    .summary__cell + .summary__cell {
      border-left: 1px solid var(--line);
    }

    .summary__label {
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--text-muted);
    }

    /* Nessun colore dichiarato: il valore eredita quello del testo, così le
       classi di segno qui sotto bastano a colorare lo scostamento. */
    .summary__value {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      margin-top: var(--s-3);
      font-size: var(--t-2xl);
      font-weight: 600;
      line-height: var(--lh-tight);
      letter-spacing: -0.02em;
    }

    .summary__value--date {
      font-size: var(--t-xl);
      letter-spacing: -0.015em;
    }

    .summary__meta {
      margin-top: var(--s-1);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-muted);
    }

    .summary__value + .summary__meta {
      margin-top: var(--s-3);
    }

    .summary__meta strong {
      color: var(--text-soft);
      font-weight: 500;
    }

    /* Verso della sorpresa: vale per il numero grande e per la colonna dello
       scostamento in tabella. Il segno è scritto in entrambi i casi. */
    .tone--bull {
      color: var(--up);
    }

    .tone--bear {
      color: var(--down);
    }

    .tone--warn {
      color: var(--warn);
    }

    .tone--neutral {
      color: var(--text-soft);
    }

    /* --- Che cosa misura / perché ------------------------------------------
       Due riquadri affiancati per due paragrafi erano contenitori vuoti: qui
       basta un elenco di definizioni separato da filetti.
       ---------------------------------------------------------------------- */

    .about {
      margin: 0;
    }

    .about__row {
      display: grid;
      grid-template-columns: 22ch minmax(0, 1fr);
      gap: var(--s-4);
      padding: var(--s-4) 0;
      border-top: 1px solid var(--line);
    }

    .about__row:last-child {
      border-bottom: 1px solid var(--line);
    }

    .about dt {
      font-size: var(--t-sm);
      font-weight: 500;
      color: var(--text);
    }

    .about dd {
      margin: 0;
      max-width: var(--measure);
      font-size: var(--t-sm);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    .topics {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-2);
      margin-top: var(--s-4);
    }

    .topics__label {
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    .topics__link {
      transition:
        border-color var(--dur) var(--ease),
        color var(--dur) var(--ease);
    }

    .topics__link:hover {
      border-color: var(--accent-line);
      color: var(--accent-soft);
    }

    /* --- Tabella dello storico ---------------------------------------------
       È la ragione d'essere della pagina: righe separate da un filetto, niente
       fasce alternate, numeri incolonnati a destra.
       ---------------------------------------------------------------------- */

    .table-card {
      overflow: hidden;
    }

    .table-scroll {
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: var(--t-sm);
    }

    thead th {
      position: sticky;
      top: 0;
      padding: var(--s-3) var(--s-4);
      border-bottom: 1px solid var(--line-strong);
      background: var(--surface-2);
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--text-muted);
      text-align: left;
      white-space: nowrap;
    }

    th.num,
    td.num {
      text-align: right;
    }

    tbody td {
      padding: var(--s-3) var(--s-4);
      border-bottom: 1px solid var(--line);
      color: var(--text-soft);
      white-space: nowrap;
    }

    tbody tr:last-child td {
      border-bottom: 0;
    }

    tbody tr:hover td {
      background: var(--surface-hover);
    }

    /* Unica riga con un fondo proprio: quella non ancora uscita. */
    .row--pending td {
      background: var(--accent-dim);
    }

    .cell__date {
      color: var(--text);
    }

    .cell__time {
      margin-left: var(--s-2);
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    .cell__stage {
      margin-left: var(--s-1);
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    .cell__actual {
      color: var(--text);
      font-weight: 500;
    }

    .cell__prev {
      color: var(--text-muted);
    }

    .cell__await {
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--accent);
    }

    .cell__missing {
      font-size: var(--t-xs);
      font-style: italic;
      color: var(--text-muted);
    }

    .table-more {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--s-2);
      width: 100%;
      padding: var(--s-3);
      border-top: 1px solid var(--line);
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--accent);
      transition: background var(--dur) var(--ease);
    }

    .table-more:hover {
      background: var(--surface-hover);
    }

    .flip {
      transform: rotate(180deg);
    }

    /* Il rimando alla fonte è un indirizzo intero: deve poter andare a capo. */
    .src {
      color: var(--text-muted);
      text-decoration: underline;
      text-underline-offset: 2px;
      overflow-wrap: anywhere;
    }

    .src:hover {
      color: var(--text-soft);
    }

    @media (max-width: 820px) {
      .summary {
        grid-template-columns: minmax(0, 1fr);
      }

      .summary__cell + .summary__cell {
        border-left: 0;
        border-top: 1px solid var(--line);
      }

      .about__row {
        grid-template-columns: minmax(0, 1fr);
        gap: var(--s-2);
      }
    }

    @media (max-width: 620px) {
      .summary__value {
        font-size: var(--t-xl);
      }

      .summary__value--date {
        font-size: var(--t-lg);
      }

      tbody td,
      thead th {
        padding-inline: var(--s-3);
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
   * non ancora avvenuta compare in testa, così la tabella e il dato
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

  protected exportName(): string {
    const ind = this.indicator();
    return exportFilename(
      ind ? `${this.areaPath()}-${ind.key}` : 'indicatore',
      new Date().toISOString(),
    );
  }

  /** Invocato solo al clic: vedi `ExportButton`. */
  protected readonly buildExport = (): string => {
    const ind = this.indicator();
    return calendarMarkdown({
      indicators: ind ? [ind] : [],
      title: `Calendario economico — ${ind?.name ?? 'indicatore'}`,
      archiveGeneratedAt: this.calendar.generatedAt,
      now: new Date().toISOString(),
    });
  };

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
