import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { Indicator, Release } from '../../core/models/calendar.model';
import { calendarDate, formatValue, surpriseOf } from '../../core/services/calendar.service';

/**
 * Andamento di un indicatore: valore effettivo e consenso a confronto.
 *
 * Il disegno è SVG inline, senza librerie: la pagina non fa richieste di rete e
 * il grafico resta leggibile anche a stampa.
 *
 * Il valore effettivo è la serie che conta, il consenso è contesto: perciò il
 * primo è tracciato nel colore di marca e il secondo in grigio, invece di dare
 * a entrambi una tinta propria. Il colore non è mai l'unico canale — legenda,
 * etichetta finale e tabella sottostante riportano gli stessi numeri.
 */

interface Point {
  readonly x: number;
  readonly y: number;
  readonly release: Release;
}

const W = 760;
const H = 250;
const PAD = { top: 18, right: 60, bottom: 28, left: 52 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;

/** Quante fasce orizzontali disegnare, indicativamente. */
const TICKS = 4;

/**
 * Passo "tondo" più vicino a quello richiesto: 1, 2 o 5 per una potenza di
 * dieci. Serve perché la scala cada su numeri leggibili — 100, 200, 300 —
 * invece che sugli estremi grezzi della serie.
 *
 * Il passo non scende mai sotto l'ultima cifra mostrata: con un decimale, due
 * tacche a 0,05 di distanza verrebbero scritte entrambe «0,1».
 */
function niceStep(range: number, decimals: number): number {
  const floor = Math.pow(10, -decimals);
  const raw = Math.max(range / TICKS, floor);
  const magnitude = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / magnitude;
  const step = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10;
  return Math.max(step * magnitude, floor);
}

@Component({
  selector: 'app-indicator-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (points().length > 1) {
      <figure class="chart">
        <figcaption class="chart__legend">
          <span class="key key--actual">
            <span class="key__mark" aria-hidden="true"></span>
            Effettivo
          </span>
          @if (hasForecast()) {
            <span class="key key--forecast">
              <span class="key__mark" aria-hidden="true"></span>
              Previsto
            </span>
          }
          <span class="chart__range">{{ rangeLabel() }}</span>
        </figcaption>

        <div class="chart__frame">
          <svg
            [attr.viewBox]="viewBox"
            role="img"
            [attr.aria-label]="summary()"
            (pointerleave)="active.set(null)"
            (pointermove)="onMove($event)"
          >
            <!-- Griglia: tratto pieno e sottilissimo, mai in evidenza. -->
            @for (line of gridLines(); track line.value) {
              <svg:line
                class="grid"
                [attr.x1]="padLeft"
                [attr.x2]="right"
                [attr.y1]="line.y"
                [attr.y2]="line.y"
              />
              <svg:text class="tick" [attr.x]="padLeft - 9" [attr.y]="line.y + 3.5">
                {{ line.label }}
              </svg:text>
            }

            @if (zeroY(); as zy) {
              <svg:line
                class="zero"
                [attr.x1]="padLeft"
                [attr.x2]="right"
                [attr.y1]="zy"
                [attr.y2]="zy"
              />
            }

            @if (forecastPath(); as d) {
              <svg:path class="line line--forecast" [attr.d]="d" />
            }
            <svg:path class="line line--actual" [attr.d]="actualPath()" />

            @if (last(); as p) {
              <svg:circle class="dot" [attr.cx]="p.x" [attr.cy]="p.y" r="4" />
              <svg:text class="endlabel" [attr.x]="p.x + 11" [attr.y]="p.y + 4">
                {{ endLabel() }}
              </svg:text>
            }

            @if (active(); as p) {
              <svg:line
                class="cross"
                [attr.x1]="p.x"
                [attr.x2]="p.x"
                [attr.y1]="padTop"
                [attr.y2]="bottom"
              />
              <svg:circle class="dot" [attr.cx]="p.x" [attr.cy]="p.y" r="4" />
            }

            @for (label of axisLabels(); track label.x) {
              <svg:text
                class="tick tick--x"
                [attr.x]="label.x"
                [attr.y]="bottom + 18"
                [attr.text-anchor]="label.anchor"
              >
                {{ label.text }}
              </svg:text>
            }
          </svg>

          @if (active(); as p) {
            <div class="tip" [style.left.%]="tipLeft(p)" [class.tip--right]="p.x > midX">
              <p class="tip__period">{{ p.release.period }}</p>
              <p class="tip__row">
                <span>Effettivo</span>
                <strong class="tnum">{{ show(p.release.actual) }}</strong>
              </p>
              @if (p.release.forecast !== null) {
                <p class="tip__row tip__row--muted">
                  <span>Previsto</span>
                  <strong class="tnum">{{ show(p.release.forecast) }}</strong>
                </p>
              }
              <p class="tip__date">{{ dateOf(p.release) }}</p>
            </div>
          }
        </div>
      </figure>
    }
  `,
  styles: `
    :host {
      display: block;
    }

    .chart {
      margin: 0;
    }

    /* La legenda resta anche quando le serie sono due sole: il colore non è
       mai l'unico canale con cui si distingue una linea dall'altra. */
    .chart__legend {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-4);
      margin-bottom: var(--s-3);
      font-size: var(--t-xs);
      color: var(--text-muted);
    }

    .key {
      display: inline-flex;
      align-items: center;
      gap: var(--s-2);
    }

    /* Ogni voce dichiara la propria tinta: la simmetria fra le due regole dice
       da sola che l'effettivo porta il colore di marca e il consenso no. */
    .key__mark {
      width: var(--s-4);
      height: 2px;
    }

    .key--actual .key__mark {
      background: var(--chart-actual);
    }

    .key--forecast .key__mark {
      background: var(--chart-forecast);
    }

    .chart__range {
      margin-left: auto;
      color: var(--text-faint);
      font-size: var(--t-micro);
    }

    .chart__frame {
      position: relative;
    }

    /* Il rapporto è imposto dal viewBox: così il testo non viene deformato.
       L'altezza segue la larghezza a ogni misura di schermo; l'altezza fissa
       che c'era sotto i 620px non ingrandiva il disegno, aggiungeva soltanto
       fascia vuota sopra e sotto. */
    svg {
      display: block;
      width: 100%;
      height: auto;
      overflow: visible;
      touch-action: pan-y;
    }

    .grid {
      stroke: var(--chart-grid);
      stroke-width: 1;
      vector-effect: non-scaling-stroke;
    }

    /* Lo zero e il mirino sono riferimenti che si devono leggere: stanno un
       gradino sopra la griglia, non due. */
    .zero,
    .cross {
      stroke: var(--line-strong);
      stroke-width: 1;
      vector-effect: non-scaling-stroke;
    }

    .line {
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      vector-effect: non-scaling-stroke;
    }

    .line--actual {
      stroke: var(--chart-actual);
    }

    .line--forecast {
      stroke: var(--chart-forecast);
    }

    /* Il punto è pieno e basta: l'anello nel colore del fondo che lo circondava
       serviva a staccarlo da un alone che non c'è più. */
    .dot {
      fill: var(--chart-actual);
    }

    /* Le etichette non ereditano la deformazione del riquadro. */
    .tick,
    .endlabel {
      font-family: var(--ff-sans);
      font-variant-numeric: tabular-nums;
      fill: var(--text-faint);
      font-size: var(--t-micro);
    }

    .tick {
      text-anchor: end;
    }

    .tick--x {
      text-anchor: middle;
    }

    .endlabel {
      fill: var(--text-soft);
      font-size: var(--t-xs);
      font-weight: 600;
      text-anchor: start;
    }

    /* Il riquadro informativo è l'unica cosa che galleggia davvero sopra la
       pagina, e l'unica qui dentro a portare un'ombra. */
    .tip {
      position: absolute;
      top: var(--s-2);
      transform: translateX(-50%);
      min-width: 150px;
      padding: var(--s-3);
      border-radius: var(--r-sm);
      border: 1px solid var(--line-strong);
      background: var(--surface-2);
      box-shadow: var(--shadow-pop);
      pointer-events: none;
      z-index: 2;
    }

    .tip--right {
      transform: translateX(-100%);
    }

    .tip__period {
      font-size: var(--t-xs);
      font-weight: 600;
      color: var(--text);
      margin-bottom: var(--s-2);
    }

    .tip__row {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: var(--s-4);
      font-size: var(--t-xs);
      color: var(--text-muted);
    }

    .tip__row strong {
      color: var(--chart-actual);
      font-weight: 600;
    }

    .tip__row--muted strong {
      color: var(--text-soft);
    }

    .tip__date {
      margin-top: var(--s-2);
      padding-top: var(--s-2);
      border-top: 1px solid var(--line);
      font-size: var(--t-micro);
      color: var(--text-faint);
    }
  `,
})
export class IndicatorChart {
  readonly indicator = input.required<Indicator>();
  /** Diffusioni in ordine cronologico, già ripulite dalle stime doppie. */
  readonly series = input.required<readonly Release[]>();

  protected readonly viewBox = `0 0 ${W} ${H}`;
  protected readonly padLeft = PAD.left;
  protected readonly padTop = PAD.top;
  protected readonly right = PAD.left + PLOT_W;
  protected readonly bottom = PAD.top + PLOT_H;
  /** Oltre questa ascissa il riquadro si ribalta a sinistra del mirino. */
  protected readonly midX = W * 0.6;

  protected readonly active = signal<Point | null>(null);

  /** Scala verticale, allargata al passo tondo più vicino. */
  private readonly bounds = computed(() => {
    const decimals = this.indicator().decimals;
    const values: number[] = [];
    for (const r of this.series()) {
      if (r.actual !== null) values.push(r.actual);
      if (r.forecast !== null) values.push(r.forecast);
    }
    if (!values.length) {
      return { min: 0, max: 1, step: 1 };
    }

    let low = Math.min(...values);
    let high = Math.max(...values);
    if (low === high) {
      // Serie piatta: si apre comunque una finestra, altrimenti la divisione
      // per l'ampiezza sarebbe per zero e la linea sparirebbe.
      const pad = Math.max(Math.abs(low) * 0.1, Math.pow(10, -decimals));
      low -= pad;
      high += pad;
    }

    const step = niceStep(high - low, decimals);
    const min = Math.floor(low / step) * step;
    const max = Math.ceil(high / step) * step;
    return { min, max: max === min ? min + step : max, step };
  });

  private readonly xOf = computed(() => {
    const n = this.series().length;
    return (i: number) => PAD.left + (n === 1 ? PLOT_W / 2 : (PLOT_W * i) / (n - 1));
  });

  private readonly yOf = computed(() => {
    const { min, max } = this.bounds();
    return (v: number) => PAD.top + PLOT_H - ((v - min) / (max - min)) * PLOT_H;
  });

  protected readonly points = computed<readonly Point[]>(() => {
    const x = this.xOf();
    const y = this.yOf();
    return this.series()
      .map((release, i) => ({ release, i }))
      .filter((p) => p.release.actual !== null)
      .map((p) => ({ x: x(p.i), y: y(p.release.actual as number), release: p.release }));
  });

  protected readonly hasForecast = computed(() => this.series().some((r) => r.forecast !== null));

  protected readonly actualPath = computed(() => this.path(this.points()));

  protected readonly forecastPath = computed(() => {
    const x = this.xOf();
    const y = this.yOf();
    const pts = this.series()
      .map((release, i) => ({ release, i }))
      .filter((p) => p.release.forecast !== null)
      .map((p) => ({ x: x(p.i), y: y(p.release.forecast as number), release: p.release }));
    return pts.length > 1 ? this.path(pts) : null;
  });

  private path(points: readonly Point[]): string {
    return points.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
  }

  protected readonly last = computed(() => this.points().at(-1) ?? null);

  protected readonly endLabel = computed(() => {
    const p = this.last();
    return p ? this.show(p.release.actual) : '';
  });

  /** Riferimenti orizzontali, uno per ogni multiplo del passo. */
  protected readonly gridLines = computed(() => {
    const { min, max, step } = this.bounds();
    const y = this.yOf();
    const lines = [];
    // Il confronto con una tolleranza evita che l'ultima tacca sparisca per
    // l'errore accumulato sommando ripetutamente un passo decimale.
    for (let v = min; v <= max + step / 1000; v += step) {
      lines.push({ value: v, y: y(v), label: this.tick(v) });
    }
    return lines;
  });

  /** Posizione dello zero, tracciato solo se la serie lo attraversa davvero. */
  protected readonly zeroY = computed(() => {
    const { min, max } = this.bounds();
    return min < 0 && max > 0 ? this.yOf()(0) : null;
  });

  protected readonly axisLabels = computed(() => {
    const series = this.series();
    if (series.length < 2) return [];
    const x = this.xOf();
    const indexes = [0, Math.floor((series.length - 1) / 2), series.length - 1];
    return indexes.map((i, k) => ({
      x: x(i),
      text: series[i].period,
      anchor: k === 0 ? 'start' : k === 2 ? 'end' : 'middle',
    }));
  });

  protected readonly rangeLabel = computed(() => {
    const series = this.series();
    if (series.length < 2) return '';
    return `${series[0].period} → ${series.at(-1)?.period}`;
  });

  protected readonly summary = computed(() => {
    const i = this.indicator();
    const p = this.last();
    const n = this.points().length;
    if (!p) return `${i.name}: nessun valore da mostrare.`;
    const s = surpriseOf(p.release, i.surprise, i.decimals);
    return (
      `Andamento di ${i.name} su ${n} rilevazioni. ` +
      `Ultimo valore ${this.show(p.release.actual)} nel periodo ${p.release.period}` +
      (s ? `, ${s.wording}.` : '.')
    );
  });

  protected show(value: number | null): string {
    const i = this.indicator();
    return formatValue(value, i.unit, i.decimals);
  }

  /**
   * Etichetta di una tacca. I decimali sono quelli che il passo richiede
   * davvero: con un passo di dieci, «310,00» direbbe la stessa cosa di «310»
   * occupando il doppio dello spazio.
   */
  protected tick(value: number): string {
    const i = this.indicator();
    const step = this.bounds().step;
    const decimals = Number.isInteger(step) ? 0 : Math.min(i.decimals, 2);
    // Sulle scale l'unità dell'indice si sottintende: la ripeterebbe ogni riga.
    return formatValue(value, i.unit === 'pt' ? '' : i.unit, decimals).trim();
  }

  protected dateOf(release: Release): string {
    return calendarDate(release.at);
  }

  /**
   * Posizione del riquadro informativo, in percentuale del riquadro che lo
   * contiene — che è largo quanto l'intero viewBox, non quanto la sola area di
   * disegno. Rapportarla a `PLOT_W` lo disallineerebbe dal mirino.
   */
  protected tipLeft(p: Point): number {
    return (p.x / W) * 100;
  }

  /** Il punto più vicino al puntatore, in coordinate del riquadro. */
  protected onMove(event: PointerEvent): void {
    const points = this.points();
    if (!points.length) return;

    const target = event.currentTarget as SVGSVGElement;
    const box = target.getBoundingClientRect();
    if (!box.width) return;

    const scaled = ((event.clientX - box.left) / box.width) * W;

    let nearest = points[0];
    for (const p of points) {
      if (Math.abs(p.x - scaled) < Math.abs(nearest.x - scaled)) {
        nearest = p;
      }
    }
    this.active.set(nearest);
  }
}
