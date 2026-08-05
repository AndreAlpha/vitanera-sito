import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ConstraintState, SignalConstraint } from '../../core/data/signal.data';
import { Icon } from '../../shared/ui/icon';

/**
 * I vincoli materiali sotto la lettura, ciascuno accanto alla preferenza che lo
 * contraddice.
 *
 * È il quadro di `contenuti/studio/quadro-dei-vincoli.md` messo a video: le
 * preferenze sono opzionali e soggette ai vincoli, i vincoli non sono opzionali
 * né soggetti alle preferenze. Da un lato quello che viene dichiarato, dall'altro
 * il numero che quelle dichiarazioni non hanno spostato.
 *
 * **La colonna di destra non è contorno.** Un numero da solo — «otto navi» — non
 * dice niente: diventa diagnostico solo quando gli sta accanto quello che
 * dovrebbe averlo cambiato e non l'ha fatto. Le due colonne insieme sono
 * l'informazione; separate, sono due elenchi.
 *
 * Le voci cambiano molto più lentamente del resto della scheda: un vincolo
 * sopravvive a tre cambi di impostazione intraday, ed è per questo che sta qui
 * sotto e non fra le conferme.
 */

/** Come si chiama a video ciascuno stato, e con quale icona. */
const STATE_LABEL: Record<ConstraintState, string> = {
  fermo: 'Fermo',
  'si-allenta': 'Si allenta',
  sciolto: 'Sciolto',
};

const STATE_ICON: Record<ConstraintState, string> = {
  fermo: 'lock',
  'si-allenta': 'flow',
  sciolto: 'check',
};

@Component({
  selector: 'app-constraint-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    @if (constraints().length) {
      <section class="vin" aria-labelledby="vincoli">
        <p class="vin__head">
          <span class="vin__title" id="vincoli">Vincoli da tenere sott’occhio</span>
        </p>
        <p class="vin__legend">
          Fatti materiali che le dichiarazioni non spostano. Non dicono quando questa lettura decade
          — quello lo dicono le soglie qui sopra — ma che cosa tiene fermo il quadro a prescindere
          da quello che viene annunciato, e restano quando l’impostazione è già cambiata tre volte
          in una giornata.
        </p>

        <ul class="vins">
          @for (c of constraints(); track c.label) {
            <li class="vin-row" [attr.data-state]="c.state">
              <p class="vin-row__head">
                <span class="state">
                  <app-icon [name]="icon(c.state)" [size]="12" />
                  {{ label(c.state) }}
                </span>
                <span class="vin-row__label">{{ c.label }}</span>
              </p>

              <div class="face">
                <div class="face__col face__col--fact">
                  <p class="face__kind">Il fatto</p>
                  <p class="face__value tnum">{{ c.value }}</p>
                  @if (c.baseline) {
                    <p class="face__base">{{ c.baseline }}</p>
                  }
                </div>
                <div class="face__col face__col--said">
                  <p class="face__kind">Quello che è stato dichiarato</p>
                  <p class="face__said">{{ c.against }}</p>
                </div>
              </div>

              <p class="vin-row__watch"><strong>Si misura su:</strong> {{ c.watch }}</p>
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

    .vin__head {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: var(--s-3);
    }

    .vin__title {
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--text-soft);
    }

    .vin__legend {
      max-width: var(--measure);
      margin-top: var(--s-2);
      font-size: var(--t-micro);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .vins {
      list-style: none;
      display: flex;
      flex-direction: column;
      margin-top: var(--s-3);
    }

    .vin-row {
      padding: var(--s-4) 0;
      border-top: 1px solid var(--line);
    }

    .vin-row:first-child {
      border-top: 0;
      padding-top: var(--s-2);
    }

    .vin-row__head {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: var(--s-2) var(--s-3);
    }

    .vin-row__label {
      font-size: var(--t-sm);
      font-weight: 600;
      color: var(--text);
    }

    /* Lo stato porta l'icona oltre alla parola: la tinta da sola distinguerebbe
       «fermo» da «sciolto» soltanto per chi la vede. */
    .state {
      display: inline-flex;
      align-items: center;
      gap: var(--s-2);
      font-size: var(--t-micro);
      font-weight: 500;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-faint);
    }

    [data-state='fermo'] .state {
      color: var(--accent);
    }

    [data-state='si-allenta'] .state {
      color: var(--down);
    }

    [data-state='sciolto'] .state {
      color: var(--up);
    }

    /* Le due facce del vincolo, affiancate. Il filetto in mezzo è quello che
       rende leggibile il confronto: senza, sono due paragrafi vicini. */
    .face {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(230px, 100%), 1fr));
      gap: var(--s-4);
      margin-top: var(--s-3);
    }

    .face__col--said {
      padding-left: var(--s-4);
      border-left: 1px solid var(--line);
    }

    .face__kind {
      font-size: var(--t-micro);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-faint);
    }

    .face__value {
      margin-top: var(--s-1);
      font-size: var(--t-lg);
      font-weight: 600;
      line-height: var(--lh-tight);
      color: var(--text);
    }

    .face__base {
      margin-top: var(--s-1);
      font-size: var(--t-micro);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    /* Più smorta del fatto, e volutamente: è la metà del quadro che non
       vincola niente. */
    .face__said {
      margin-top: var(--s-2);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-muted);
    }

    .vin-row__watch {
      margin-top: var(--s-3);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .vin-row__watch strong {
      font-weight: 500;
      color: var(--text-soft);
    }

    /* In verticale il filetto passa sopra la seconda colonna, dove adesso c'è
       lo stacco fra le due. */
    @media (max-width: 620px) {
      .face__col--said {
        padding-left: 0;
        padding-top: var(--s-3);
        border-left: 0;
        border-top: 1px solid var(--line);
      }
    }
  `,
})
export class ConstraintList {
  readonly constraints = input.required<readonly SignalConstraint[]>();

  protected label(state: ConstraintState): string {
    return STATE_LABEL[state];
  }

  protected icon(state: ConstraintState): string {
    return STATE_ICON[state];
  }
}
