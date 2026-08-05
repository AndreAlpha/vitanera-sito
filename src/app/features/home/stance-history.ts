import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { BiasDirection, Horizon, Level } from '../../core/models/article.model';
import { DIRECTION_LABEL, HORIZON_LABEL, HORIZON_SPAN } from '../../core/data/signal.data';
import { ContentService } from '../../core/services/content.service';
import { calendarDate, calendarDateTime } from '../../core/services/calendar.service';

/**
 * Storico dell'impostazione dichiarata, un'analisi alla volta.
 *
 * La scheda dell'indicatore è una fotografia senza memoria: dice dove siamo
 * adesso e non da dove ci si è arrivati. Nella sola giornata del 5 agosto
 * l'impostazione intraday è passata da rialzista a neutrale-rialzista due volte,
 * e chi legge non aveva modo di vederlo.
 *
 * **Non c'è niente da mantenere a mano.** Le tre corsie si ricavano dal `bias`
 * delle analisi in archivio: ogni pubblicazione le aggiorna da sola. È l'unica
 * delle tre sezioni aggiunte in fondo alla scheda che non ha un campo dietro.
 *
 * Tre corsie e non una linea sola: mettere gli orizzonti sulla stessa scala li
 * farebbe sovrapporre proprio dove concordano, e leggere un'impostazione
 * intraday in fila a una di settimane è l'errore che la separazione in tre
 * letture esiste per impedire. Separate, si vede la cosa che conta davvero —
 * l'intraday che sbanda mentre la lettura di fondo non si muove.
 *
 * La linea è a gradini perché un'impostazione **tiene** fino a quando non ne
 * viene pubblicata un'altra: interpolarla disegnerebbe posizioni intermedie che
 * nessuno ha mai dichiarato. Per la stessa ragione l'ultimo tratto arriva fino
 * al margine destro.
 */

/** Direzione su una scala numerica, per poterla disegnare. */
const DIRECTION_STEP: Record<BiasDirection, number> = {
  ribassista: -2,
  'neutrale-ribassista': -1,
  neutrale: 0,
  'neutrale-rialzista': 1,
  rialzista: 2,
};

/** Il punto cresce con la forza dichiarata: è il secondo canale, oltre l'altezza. */
const STRENGTH_RADIUS: Record<Level, number> = { bassa: 2.2, media: 2.9, alta: 3.6 };

const HORIZONS: readonly Horizon[] = ['breve', 'medio', 'lungo'];

const W = 720;
const H = 46;
const PAD_X = 8;
const CY = H / 2;
/** Semiampiezza verticale: due gradini di direzione per lato. */
const AMP = 15;

interface Point {
  readonly x: number;
  readonly y: number;
  readonly r: number;
  readonly title: string;
}

interface Lane {
  readonly horizon: Horizon;
  readonly label: string;
  readonly span: string;
  readonly points: readonly Point[];
  readonly path: string | null;
  readonly last: string;
}

@Component({
  selector: 'app-stance-history',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (lanes(); as rows) {
      <figure class="hist">
        <figcaption class="hist__head">
          <span class="hist__title">Storico dell’impostazione</span>
          <span class="hist__range">{{ rangeLabel() }}</span>
        </figcaption>

        <p class="hist__legend">
          Un punto per analisi: sopra la linea rialzista, sotto ribassista, sulla linea neutro, e il
          punto cresce con la forza dichiarata. Il tratto fino al margine destro dice che
          quell’impostazione non è più stata toccata. Sono le
          <span class="tnum">{{ count() }}</span> letture più recenti, e per ogni orizzonte almeno
          l’ultima. Quello che ciascuna analisi aveva dichiarato al momento in cui è uscita: la
          lettura in cima alla scheda le riassume e può discostarsene.
        </p>

        <ul class="lanes">
          @for (lane of rows; track lane.horizon) {
            <li class="lane">
              <p class="lane__head">
                <span class="lane__name">{{ lane.label }}</span>
                <span class="lane__span">{{ lane.span }}</span>
                @if (lane.last) {
                  <span class="lane__last">Ultima analisi: {{ lane.last }}</span>
                }
              </p>

              @if (lane.points.length) {
                <svg [attr.viewBox]="viewBox" role="img" [attr.aria-label]="summary(lane)">
                  <svg:line
                    class="mid"
                    [attr.x1]="padX"
                    [attr.x2]="right"
                    [attr.y1]="cy"
                    [attr.y2]="cy"
                  />
                  @if (lane.path; as d) {
                    <svg:path class="step" [attr.d]="d" />
                  }
                  @for (p of lane.points; track p.x) {
                    <svg:circle class="dot" [attr.cx]="p.x" [attr.cy]="p.y" [attr.r]="p.r">
                      <svg:title>{{ p.title }}</svg:title>
                    </svg:circle>
                  }
                </svg>
              } @else {
                <p class="lane__void">
                  Nessuna analisi ha dichiarato un’impostazione su questo orizzonte.
                </p>
              }
            </li>
          }
        </ul>
      </figure>
    }
  `,
  styles: `
    :host {
      display: block;
    }

    .hist {
      margin: 0;
    }

    .hist__head {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: var(--s-3);
    }

    .hist__title {
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--text-soft);
    }

    .hist__range {
      margin-left: auto;
      font-size: var(--t-micro);
      color: var(--text-faint);
    }

    .hist__legend {
      margin-top: var(--s-2);
      font-size: var(--t-micro);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .lanes {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--s-3);
      margin-top: var(--s-3);
    }

    .lane__head {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: var(--s-2);
      font-size: var(--t-micro);
    }

    .lane__name {
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--accent);
    }

    .lane__span,
    .lane__void {
      color: var(--text-faint);
    }

    /* L'ultima impostazione della corsia, scritta: la posizione del punto la
       dice già, ma il colore e l'altezza non sono canali sufficienti da soli. */
    .lane__last {
      margin-left: auto;
      color: var(--text-soft);
    }

    .lane__void {
      margin-top: var(--s-2);
      font-size: var(--t-micro);
    }

    svg {
      display: block;
      width: 100%;
      height: auto;
      overflow: visible;
    }

    /* Lo zero della corsia: è un riferimento, non un dato. */
    .mid {
      stroke: var(--chart-grid);
      stroke-width: 1;
      vector-effect: non-scaling-stroke;
    }

    .step {
      fill: none;
      stroke: var(--chart-muted);
      stroke-width: 1.4;
      stroke-linecap: round;
      stroke-linejoin: round;
      vector-effect: non-scaling-stroke;
    }

    .dot {
      fill: var(--chart-actual);
    }
  `,
})
export class StanceHistory {
  private readonly content = inject(ContentService);

  /**
   * Quante analisi guardare, dalla più recente.
   *
   * Non è tutto l'archivio di proposito: su una finestra lunga i giorni densi si
   * schiacciano in un punto solo e la lettura di ieri diventa illeggibile.
   */
  readonly limit = input<number>(16);

  protected readonly viewBox = `0 0 ${W} ${H}`;
  protected readonly padX = PAD_X;
  protected readonly right = W - PAD_X;
  protected readonly cy = CY;

  /**
   * Le analisi considerate, dalla più vecchia alla più recente.
   *
   * Sono le ultime `limit`, **più l'ultima di ciascun orizzonte** anche quando è
   * più vecchia. Senza quel supplemento la corsia lunga restava vuota e diceva
   * «nessuna analisi ha dichiarato un'impostazione su questo orizzonte», che era
   * falso: l'analisi c'era, era solo caduta fuori dalla finestra. Ed è proprio la
   * corsia in cui succede più spesso, perché una lettura di fondo si aggiorna di
   * rado — che è anche la cosa che la corsia deve mostrare.
   */
  private readonly window = computed(() => {
    const withBias = this.content.articles().filter((a) => a.bias);
    const recent = withBias.slice(0, this.limit());
    const taken = new Set(recent.map((a) => a.slug));

    for (const horizon of HORIZONS) {
      if (recent.some((a) => a.bias?.horizon === horizon)) continue;
      const latest = withBias.find((a) => a.bias?.horizon === horizon);
      if (latest && !taken.has(latest.slug)) {
        recent.push(latest);
        taken.add(latest.slug);
      }
    }

    return recent.sort((a, b) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt));
  });

  protected readonly count = computed(() => this.window().length);

  /**
   * Dominio temporale condiviso da tutte e tre le corsie.
   *
   * Deve essere lo stesso per tutte, altrimenti due punti incolonnati
   * apparterrebbero a momenti diversi e il confronto fra orizzonti — che è la
   * ragione per cui le corsie stanno una sopra l'altra — direbbe il falso.
   */
  private readonly domain = computed(() => {
    const times = this.window().map((a) => Date.parse(a.publishedAt));
    if (!times.length) return null;
    const from = Math.min(...times);
    const to = Math.max(...times);
    return { from, to, span: to === from ? 1 : to - from };
  });

  protected readonly rangeLabel = computed(() => {
    const d = this.domain();
    if (!d) return '';
    const from = calendarDate(new Date(d.from).toISOString());
    const to = calendarDate(new Date(d.to).toISOString());
    return from === to ? from : `${from} → ${to}`;
  });

  protected readonly lanes = computed<readonly Lane[] | null>(() => {
    const d = this.domain();
    if (!d) return null;

    const x = (iso: string) => PAD_X + ((Date.parse(iso) - d.from) / d.span) * (W - PAD_X * 2);
    const y = (direction: BiasDirection) => CY - (DIRECTION_STEP[direction] / 2) * AMP;

    return HORIZONS.map((horizon) => {
      // `flatMap` e non `filter`: dopo un filtro il tipo di `bias` resterebbe
      // opzionale e servirebbe un'asserzione per leggerlo.
      const rows = this.window().flatMap((a) =>
        a.bias && a.bias.horizon === horizon
          ? [{ at: a.publishedAt, bias: a.bias, title: a.title }]
          : [],
      );

      const points = rows.map((r) => ({
        x: x(r.at),
        y: y(r.bias.direction),
        r: STRENGTH_RADIUS[r.bias.strength],
        title:
          `${calendarDateTime(r.at)} — ${DIRECTION_LABEL[r.bias.direction]}, ` +
          `forza ${r.bias.strength}. ${r.title}`,
      }));

      return {
        horizon,
        label: HORIZON_LABEL[horizon],
        span: HORIZON_SPAN[horizon],
        points,
        path: this.step(points),
        last: rows.length ? DIRECTION_LABEL[rows[rows.length - 1].bias.direction] : '',
      };
    });
  });

  /**
   * Linea a gradini, prolungata fino al margine destro.
   *
   * Il prolungamento non è decorazione: dice che l'ultima impostazione è ancora
   * quella in vigore. Fermare la linea sull'ultimo punto lascerebbe intendere
   * che dopo non ci sia più nulla da dire — ed è il motivo per cui la linea si
   * disegna anche con un punto solo, che è il caso normale della corsia lunga:
   * un pallino isolato sembra un dato orfano, un pallino con la sua coda dice
   * che quella lettura non è più stata toccata.
   */
  private step(points: readonly Point[]): string | null {
    if (!points.length) return null;
    const parts = [`M${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`];
    for (let i = 1; i < points.length; i++) {
      parts.push(`L${points[i].x.toFixed(1)} ${points[i - 1].y.toFixed(1)}`);
      parts.push(`L${points[i].x.toFixed(1)} ${points[i].y.toFixed(1)}`);
    }
    parts.push(`L${(W - PAD_X).toFixed(1)} ${points[points.length - 1].y.toFixed(1)}`);
    return parts.join(' ');
  }

  protected summary(lane: Lane): string {
    return (
      `Impostazione dichiarata su orizzonte ${lane.label.toLowerCase()} in ${lane.points.length} ` +
      `analisi. Ultima: ${lane.last}.`
    );
  }
}
