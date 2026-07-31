import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Andamento in miniatura, per le schede degli indicatori.
 *
 * Non ha assi né etichette: serve a dare la forma della serie accanto al numero,
 * non a leggerne i valori — quelli stanno nella scheda e nella tabella. La linea
 * è attenuata e solo l'ultimo punto porta il colore, così l'occhio va sul dato
 * più recente.
 */
@Component({
  selector: 'app-sparkline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (path(); as d) {
      <svg [attr.viewBox]="viewBox()" role="img" [attr.aria-label]="label()">
        @if (zeroY(); as zy) {
          <svg:line class="zero" x1="0" [attr.x2]="width()" [attr.y1]="zy" [attr.y2]="zy" />
        }
        <svg:path class="spark" [attr.d]="d" />
        @if (lastPoint(); as p) {
          <svg:circle class="tip" [attr.cx]="p.x" [attr.cy]="p.y" r="2.6" />
        }
      </svg>
    }
  `,
  styles: `
    :host {
      display: block;
      line-height: 0;
    }

    svg {
      display: block;
      width: 100%;
      height: auto;
      overflow: visible;
    }

    .spark {
      fill: none;
      stroke: var(--chart-muted);
      stroke-width: 1.4;
      stroke-linecap: round;
      stroke-linejoin: round;
      vector-effect: non-scaling-stroke;
    }

    .zero {
      stroke: var(--chart-grid);
      stroke-width: 1;
      vector-effect: non-scaling-stroke;
    }

    .tip {
      fill: var(--chart-actual);
      stroke: var(--surface);
      stroke-width: 1.5;
      vector-effect: non-scaling-stroke;
    }
  `,
})
export class Sparkline {
  /** Valori in ordine cronologico. */
  readonly values = input.required<readonly number[]>();
  readonly label = input<string>('Andamento recente');
  readonly width = input<number>(120);
  readonly height = input<number>(28);

  protected readonly viewBox = computed(() => `0 0 ${this.width()} ${this.height()}`);

  private readonly geometry = computed(() => {
    const values = this.values();
    if (values.length < 2) return null;

    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = max === min ? 1 : max - min;
    const inset = 3;
    const h = this.height() - inset * 2;

    const x = (i: number) => (this.width() * i) / (values.length - 1);
    const y = (v: number) => inset + h - ((v - min) / span) * h;

    return { values, x, y, min, max };
  });

  protected readonly path = computed(() => {
    const g = this.geometry();
    if (!g) return null;
    return g.values
      .map((v, i) => `${i ? 'L' : 'M'}${g.x(i).toFixed(1)} ${g.y(v).toFixed(1)}`)
      .join(' ');
  });

  protected readonly lastPoint = computed(() => {
    const g = this.geometry();
    if (!g) return null;
    const i = g.values.length - 1;
    return { x: g.x(i), y: g.y(g.values[i]) };
  });

  /** Lo zero si traccia solo quando la serie lo attraversa. */
  protected readonly zeroY = computed(() => {
    const g = this.geometry();
    return g && g.min < 0 && g.max > 0 ? g.y(0) : null;
  });
}
