import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { SignalThreshold, ThresholdMark } from '../../core/data/signal.data';

/**
 * Quanto manca perché la lettura sia sbagliata.
 *
 * Ogni lettura dichiara già in prosa che cosa la farebbe decadere, e quei numeri
 * sono verificabili apposta. Ma «il decennale sopra il 4,70%» scritto in una
 * colonna e «il decennale è al 4,64%» scritto nell'altra non dicono, a colpo
 * d'occhio, che mancano sei punti base. Qui i due numeri stanno sulla stessa
 * scala e la distanza si guarda invece di calcolarla.
 *
 * **Perché esistono due tipi di tacca.** Il registro degli esiti ha già
 * registrato l'errore che questo risolve: la lettura del 5 agosto fissava
 * l'invalidazione al 4,70% e il decennale è andato da 4,60% a 4,64% in sei ore,
 * in salita a ogni controllo, mentre l'esito continuava a segnare «non scattata».
 * Il verdetto era formalmente giusto e sostanzialmente cieco. Una tacca `logora`
 * sta dove la lettura comincia a cedere, non dove finisce.
 *
 * La scala non è dichiarata da nessuna parte: si ricava dai numeri di questa
 * riga. Un minimo e un massimo scritti a mano sarebbero due valori in più da
 * tenere allineati a ogni pubblicazione, e sbagliarli sposterebbe il pallino
 * senza che nulla lo segnali.
 */

/** Margine ai lati, in frazione dell'ampiezza fra i valori della riga. */
const PAD = 0.35;

interface Placed {
  readonly mark: ThresholdMark;
  readonly left: number;
}

interface Row {
  readonly label: string;
  readonly display: string;
  /** Posizione del valore corrente sulla scala, in percentuale. */
  readonly at: number;
  readonly marks: readonly Placed[];
  readonly zone: { readonly left: number; readonly width: number } | null;
  readonly summary: string;
}

@Component({
  selector: 'app-threshold-track',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (rows(); as list) {
      <section class="sog" aria-labelledby="soglie">
        <p class="sog__head">
          <span class="sog__title" id="soglie">Distanza dalle soglie</span>
        </p>
        <p class="sog__legend">
          Dove stanno adesso i numeri che le tre letture hanno dichiarato come condizioni di
          decadenza. La fascia scura è la zona in cui la lettura non vale più; la tacca chiara è il
          livello a cui comincia a logorarsi, prima della rottura.
        </p>

        <ul class="sogs">
          @for (row of list; track row.label) {
            <li class="sog-row">
              <p class="sog-row__head">
                <span class="sog-row__label">{{ row.label }}</span>
                <span class="sog-row__now tnum">{{ row.display }}</span>
              </p>

              <div class="track" role="img" [attr.aria-label]="row.summary">
                @if (row.zone; as z) {
                  <span
                    class="track__zone"
                    [style.left.%]="z.left"
                    [style.width.%]="z.width"
                  ></span>
                }
                <span class="track__line"></span>
                @for (m of row.marks; track m.mark.at) {
                  <span
                    class="track__mark"
                    [class]="'track__mark--' + m.mark.kind"
                    [style.left.%]="m.left"
                  ></span>
                }
                <span class="track__dot" [style.left.%]="row.at"></span>
              </div>

              <p class="scale">
                @for (m of row.marks; track m.mark.at) {
                  <span class="scale__tick tnum" [style.left.%]="m.left">{{ m.mark.display }}</span>
                }
              </p>

              <ul class="notes">
                @for (m of row.marks; track m.mark.at) {
                  <li class="note" [class]="'note--' + m.mark.kind">
                    <span class="note__kind">{{
                      m.mark.kind === 'invalida' ? 'Invalida' : 'Logora'
                    }}</span>
                    <span class="note__at tnum">{{ m.mark.display }}</span>
                    <span class="note__text">{{ m.mark.note }}</span>
                  </li>
                }
              </ul>
            </li>
          }
        </ul>
      </section>
    }
  `,
  styles: `
    :host {
      display: block;
    }

    .sog__head {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: var(--s-3);
    }

    .sog__title {
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--text-soft);
    }

    .sog__legend {
      max-width: var(--measure);
      margin-top: var(--s-2);
      font-size: var(--t-micro);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .sogs,
    .notes {
      list-style: none;
    }

    .sogs {
      display: flex;
      flex-direction: column;
      margin-top: var(--s-3);
    }

    .sog-row {
      padding: var(--s-4) 0;
      border-top: 1px solid var(--line);
    }

    .sog-row:first-child {
      border-top: 0;
      padding-top: var(--s-2);
    }

    .sog-row__head {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: var(--s-3);
      font-size: var(--t-sm);
    }

    .sog-row__label {
      font-weight: 600;
      color: var(--text);
    }

    .sog-row__now {
      margin-left: auto;
      font-weight: 600;
      color: var(--accent);
    }

    /* --- La scala ------------------------------------------------------------- */

    .track {
      position: relative;
      height: 18px;
      margin-top: var(--s-3);
    }

    .track__line {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: 1px;
      background: var(--line-strong);
    }

    /* Oltre questa fascia la lettura non vale più. Piatta e smorta: deve dire
       «da qui in poi», non gridare. */
    .track__zone {
      position: absolute;
      top: 0;
      bottom: 0;
      background: var(--down-dim);
      border-radius: var(--r-sm);
    }

    .track__mark {
      position: absolute;
      top: 1px;
      bottom: 1px;
      width: 1px;
      transform: translateX(-50%);
    }

    .track__mark--invalida {
      background: var(--down);
    }

    .track__mark--logora {
      background: var(--text-faint);
    }

    .track__dot {
      position: absolute;
      top: 50%;
      width: 9px;
      height: 9px;
      border-radius: var(--r-pill);
      background: var(--accent);
      border: 1.5px solid var(--surface);
      transform: translate(-50%, -50%);
    }

    /* Le etichette stanno sotto la loro tacca, non in fila: incolonnate
       direbbero l'ordine ma non la distanza, che è tutto il punto. */
    .scale {
      position: relative;
      height: 14px;
      margin-top: var(--s-1);
    }

    .scale__tick {
      position: absolute;
      transform: translateX(-50%);
      font-size: var(--t-micro);
      color: var(--text-faint);
      white-space: nowrap;
    }

    /* --- Che cosa comporta ---------------------------------------------------- */

    .notes {
      display: flex;
      flex-direction: column;
      gap: var(--s-1);
      margin-top: var(--s-3);
    }

    .note {
      font-size: var(--t-micro);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .note__kind {
      font-weight: 500;
    }

    .note--invalida .note__kind {
      color: var(--down);
    }

    .note--logora .note__kind {
      color: var(--text-soft);
    }

    .note__at {
      margin: 0 var(--s-2) 0 var(--s-1);
      color: var(--text-soft);
    }
  `,
})
export class ThresholdTrack {
  readonly thresholds = input.required<readonly SignalThreshold[]>();

  protected readonly rows = computed<readonly Row[] | null>(() => {
    const list = this.thresholds();
    if (!list.length) return null;

    return list.map((t) => {
      const values = [t.now, ...t.marks.map((m) => m.at)];
      const lo = Math.min(...values);
      const hi = Math.max(...values);
      // Serie piatta: una soglia già raggiunta esattamente. Si apre comunque una
      // finestra, altrimenti la divisione per l'ampiezza sarebbe per zero.
      const span = hi === lo ? Math.max(Math.abs(hi), 1) : hi - lo;
      const pad = span * PAD;
      const min = lo - pad;
      const max = hi + pad;
      const pct = (v: number) => ((v - min) / (max - min)) * 100;

      const marks = [...t.marks]
        .sort((a, b) => a.at - b.at)
        .map((mark) => ({ mark, left: pct(mark.at) }));

      return {
        label: t.label,
        display: t.display,
        at: pct(t.now),
        marks,
        zone: this.zone(t, pct),
        summary: this.summary(t),
      };
    });
  });

  /**
   * La fascia oltre la quale la lettura non vale più.
   *
   * Si estende **dalla soglia in poi, nel verso opposto al valore corrente**:
   * una soglia sopra il prezzo annerisce a destra, una sotto annerisce a
   * sinistra. Fra più soglie di invalidazione conta la più vicina, che è quella
   * che si raggiunge per prima.
   */
  private zone(t: SignalThreshold, pct: (v: number) => number) {
    const breaking = t.marks.filter((m) => m.kind === 'invalida');
    if (!breaking.length) return null;

    const nearest = breaking.reduce((closest, m) =>
      Math.abs(m.at - t.now) < Math.abs(closest.at - t.now) ? m : closest,
    );
    const at = pct(nearest.at);
    return nearest.at >= t.now ? { left: at, width: 100 - at } : { left: 0, width: at };
  }

  private summary(t: SignalThreshold): string {
    const parts = t.marks.map(
      (m) => `${m.kind === 'invalida' ? 'invalida' : 'si logora'} a ${m.display}`,
    );
    return `${t.label}: adesso ${t.display}; ${parts.join(', ')}.`;
  }
}
