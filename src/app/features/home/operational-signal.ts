import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DIRECTION_LABEL, MARKET_SIGNAL, STRENGTH_VALUE } from '../../core/data/signal.data';
import { ClockService } from '../../core/services/clock.service';
import { ContentService, formatDuration } from '../../core/services/content.service';
import { Icon } from '../../shared/ui/icon';
import { Timestamp } from '../../shared/ui/timestamp';

/**
 * Indicatore operativo sull'oro.
 *
 * Vale sessanta minuti dall'ultimo aggiornamento: scaduto quel termine passa
 * automaticamente allo stato «in attesa di notizie» e la lettura precedente
 * resta visibile solo come storico, marcata come non più valida.
 */
@Component({
  selector: 'app-operational-signal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, Timestamp],
  template: `
    <section class="sig" [class.sig--expired]="!live()" [attr.aria-live]="'polite'">
      <div class="sig__meter" [style.--fill]="fill()"></div>

      <header class="sig__bar">
        <span class="state" [class.state--live]="live()">
          <i class="state__dot"></i>
          {{ live() ? 'Lettura valida' : 'In attesa di notizie' }}
        </span>

        <span class="sig__asset">{{ signal.asset }}</span>

        <span class="sig__timing">
          @if (live()) {
            <span class="sig__left">valida ancora {{ remainingLabel() }}</span>
          }
          <span class="sig__updated"> aggiornato <app-timestamp [iso]="signal.updatedAt" /> </span>
        </span>
      </header>

      <div class="sig__body">
        <!-- Quadrante ---------------------------------------------------- -->
        <div class="gauge">
          <span class="gauge__icon">
            <app-icon [name]="live() ? icon() : 'clock'" [size]="26" />
          </span>
          <p class="gauge__label">{{ live() ? 'Impostazione' : 'Stato' }}</p>
          <p class="gauge__value">{{ live() ? directionLabel : 'In attesa di notizie' }}</p>

          @if (live()) {
            <div class="gauge__strength">
              <span>Forza del segnale</span>
              <span class="dots">
                @for (i of dots; track i) {
                  <i [class.on]="i <= strengthValue"></i>
                }
              </span>
              <span class="gauge__strengthText">{{ signal.strength }}</span>
            </div>
          } @else {
            <p class="gauge__note">
              L’ultima lettura è scaduta. Nessuna indicazione è considerata valida finché non viene
              pubblicato un nuovo aggiornamento.
            </p>
          }
        </div>

        <!-- Contenuto ---------------------------------------------------- -->
        <div class="detail">
          <h2 class="detail__headline">{{ signal.headline }}</h2>
          <p class="detail__stance">{{ signal.stance }}</p>

          <div class="cols">
            <div class="col col--fav">
              <p class="col__title"><app-icon name="check" [size]="13" /> Favorito</p>
              <ul>
                @for (item of signal.favours; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </div>
            <div class="col col--avoid">
              <p class="col__title"><app-icon name="close" [size]="13" /> Da evitare</p>
              <ul>
                @for (item of signal.avoid; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </div>
          </div>

          <div class="tags">
            <div class="tags__row">
              <span class="tags__label tags__label--bull">Confermano</span>
              @for (item of signal.confirming; track item) {
                <span class="tag tag--bull">{{ item }}</span>
              }
            </div>
            <div class="tags__row">
              <span class="tags__label tags__label--bear">Contraddicono</span>
              @for (item of signal.contradicting; track item) {
                <span class="tag tag--bear">{{ item }}</span>
              }
            </div>
          </div>

          <p class="invalid">
            <app-icon name="alert" [size]="13" />
            <span><strong>Decade con:</strong> {{ signal.invalidation }}</span>
          </p>
        </div>
      </div>

      <footer class="sig__foot">
        <div class="sources">
          <span class="sources__label">Deriva da</span>
          @for (a of sourceArticles(); track a.slug) {
            <a [routerLink]="['/analisi', a.slug]">{{ a.kicker }}</a>
          }
        </div>
        <p class="sig__legal">
          Riepilogo editoriale delle analisi pubblicate, valido {{ signal.validityMinutes }} minuti
          dall’aggiornamento. <strong>Non è consulenza finanziaria</strong> né un segnale di
          acquisto o vendita.
        </p>
      </footer>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .sig {
      position: relative;
      overflow: hidden;
      border: 1px solid var(--accent-line);
      border-radius: var(--r-xl);
      background:
        radial-gradient(120% 100% at 0% 0%, rgba(var(--accent-rgb), 0.14), transparent 60%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.008)),
        rgba(13, 12, 11, 0.86);
      box-shadow: var(--shadow-lg);
      transition:
        border-color 0.5s var(--ease),
        background 0.5s var(--ease);
    }

    .sig--expired {
      border-color: var(--line);
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.028), rgba(255, 255, 255, 0.006)),
        rgba(12, 11, 10, 0.8);
    }

    /* Barra di validità residua */
    .sig__meter {
      position: absolute;
      inset: 0 0 auto;
      height: 3px;
      background: rgba(255, 255, 255, 0.06);
    }

    .sig__meter::after {
      content: '';
      display: block;
      height: 100%;
      width: var(--fill, 0%);
      background: linear-gradient(90deg, var(--accent-deep), var(--accent), var(--accent-soft));
      transition: width 1s linear;
    }

    .sig__bar {
      display: flex;
      align-items: center;
      gap: 14px;
      flex-wrap: wrap;
      padding: 16px 24px 14px;
      border-bottom: 1px solid var(--line);
    }

    .state {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 13px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line-strong);
      background: rgba(255, 255, 255, 0.04);
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 0.03em;
      color: var(--text-muted);
    }

    .state--live {
      border-color: rgba(74, 210, 149, 0.4);
      background: var(--bull-dim);
      color: var(--bull);
    }

    .state__dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: currentColor;
      opacity: 0.55;
    }

    .state--live .state__dot {
      opacity: 1;
      animation: pulse 2.4s ease-in-out infinite;
    }

    @keyframes pulse {
      0%,
      100% {
        box-shadow: 0 0 0 0 rgba(74, 210, 149, 0.55);
      }
      70% {
        box-shadow: 0 0 0 7px rgba(74, 210, 149, 0);
      }
    }

    .sig__asset {
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.14em;
      color: var(--accent-soft);
    }

    .sig__timing {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-left: auto;
      font-size: 11.5px;
      color: var(--text-faint);
    }

    .sig__left {
      color: var(--accent);
      font-weight: 600;
      font-variant-numeric: tabular-nums;
    }

    .sig__updated {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    /* --- Corpo ------------------------------------------------------------ */

    .sig__body {
      display: grid;
      grid-template-columns: 280px minmax(0, 1fr);
      gap: 0;
    }

    .gauge {
      padding: 24px;
      border-right: 1px solid var(--line);
      background: rgba(0, 0, 0, 0.18);
    }

    .gauge__icon {
      display: grid;
      place-items: center;
      width: 56px;
      height: 56px;
      border-radius: 19px;
      background: linear-gradient(140deg, var(--accent-soft), var(--accent-deep));
      color: var(--accent-ink);
      box-shadow: var(--shadow-gold);
      margin-bottom: 18px;
    }

    .sig--expired .gauge__icon {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--line-strong);
      color: var(--text-muted);
      box-shadow: none;
    }

    .gauge__label {
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--text-faint);
    }

    .gauge__value {
      margin-top: 7px;
      font-size: 21px;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.03em;
      color: var(--accent-soft);
    }

    .sig--expired .gauge__value {
      color: var(--text-muted);
    }

    .gauge__strength {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 18px;
      padding-top: 16px;
      border-top: 1px solid var(--line);
      font-size: 11px;
      color: var(--text-faint);
    }

    .gauge__strengthText {
      color: var(--accent);
      font-weight: 700;
      text-transform: capitalize;
    }

    .dots {
      display: inline-flex;
      gap: 4px;
    }

    .dots i {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--accent);
      opacity: 0.2;
    }

    .dots i.on {
      opacity: 1;
    }

    .gauge__note {
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid var(--line);
      font-size: 12px;
      line-height: 1.6;
      color: var(--text-faint);
    }

    .detail {
      padding: 24px;
      min-width: 0;
    }

    /* La lettura scaduta resta leggibile ma chiaramente in secondo piano:
       sotto questa soglia le etichette diventavano illeggibili su mobile. */
    .sig--expired .detail {
      opacity: 0.58;
      filter: saturate(0.45);
    }

    .detail__headline {
      font-size: 20px;
      line-height: 1.28;
      letter-spacing: -0.03em;
    }

    .detail__stance {
      margin-top: 10px;
      font-size: 14px;
      line-height: 1.65;
      color: var(--text-muted);
      max-width: 72ch;
    }

    .cols {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
      gap: 12px;
      margin-top: 20px;
    }

    .col {
      padding: 15px 17px;
      border-radius: var(--r-md);
      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.022);
    }

    .col__title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 11px;
    }

    .col--fav {
      border-color: rgba(74, 210, 149, 0.26);
      background: var(--bull-dim);
    }

    .col--fav .col__title {
      color: var(--bull);
    }

    .col--avoid {
      border-color: rgba(255, 95, 102, 0.26);
      background: var(--bear-dim);
    }

    .col--avoid .col__title {
      color: var(--bear);
    }

    .col ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .col li {
      position: relative;
      padding-left: 15px;
      font-size: 13.2px;
      line-height: 1.58;
      color: var(--text-soft);
    }

    .col li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: currentColor;
      opacity: 0.45;
    }

    .tags {
      display: flex;
      flex-direction: column;
      gap: 9px;
      margin-top: 18px;
    }

    .tags__row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px;
    }

    .tags__label {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      min-width: 96px;
    }

    .tags__label--bull {
      color: var(--bull);
    }

    .tags__label--bear {
      color: var(--bear);
    }

    .tag {
      padding: 3px 10px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.03);
      font-size: 11px;
      color: var(--text-muted);
    }

    .tag--bull {
      border-color: rgba(74, 210, 149, 0.24);
    }

    .tag--bear {
      border-color: rgba(255, 95, 102, 0.24);
    }

    .invalid {
      display: flex;
      align-items: flex-start;
      gap: 9px;
      margin-top: 18px;
      padding-top: 15px;
      border-top: 1px solid var(--line);
      font-size: 12.5px;
      line-height: 1.6;
      color: var(--text-faint);
    }

    .invalid app-icon {
      margin-top: 2px;
      color: var(--warn);
      flex: none;
    }

    .invalid strong {
      color: var(--text-soft);
    }

    /* --- Piede -------------------------------------------------------------- */

    .sig__foot {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 14px 24px 16px;
      border-top: 1px solid var(--line);
      background: rgba(0, 0, 0, 0.2);
    }

    .sources {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      font-size: 11px;
    }

    .sources__label {
      color: var(--text-faint);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 10px;
    }

    .sources a {
      padding: 3px 10px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line);
      color: var(--text-muted);
      transition:
        border-color 0.25s var(--ease),
        color 0.25s var(--ease);
    }

    .sources a:hover {
      border-color: var(--accent-line);
      color: var(--accent-soft);
    }

    .sig__legal {
      flex: 1;
      min-width: 260px;
      text-align: right;
      font-size: 10.5px;
      line-height: 1.5;
      color: var(--text-faint);
    }

    .sig__legal strong {
      color: var(--warn);
    }

    @media (max-width: 900px) {
      .sig__body {
        grid-template-columns: minmax(0, 1fr);
      }

      .gauge {
        border-right: 0;
        border-bottom: 1px solid var(--line);
      }

      .sig__legal {
        text-align: left;
        min-width: 0;
      }

      .tags__label {
        min-width: 0;
      }
    }

    @media (max-width: 560px) {
      .sig__bar {
        padding: 13px 16px 11px;
        gap: 10px;
      }

      .sig__timing {
        flex-wrap: wrap;
        gap: 4px 10px;
        margin-left: 0;
        flex: 1 0 100%;
      }

      .gauge,
      .detail {
        padding: 18px 16px;
      }

      .gauge__icon {
        width: 46px;
        height: 46px;
        border-radius: 15px;
        margin-bottom: 14px;
      }

      .gauge__value {
        font-size: 18px;
      }

      .detail__headline {
        font-size: 17px;
      }

      .detail__stance {
        font-size: 13.4px;
      }

      .sig__foot {
        padding: 13px 16px 15px;
      }

      /* In verticale l'etichetta va sopra ai relativi indicatori. */
      .tags__row {
        gap: 5px;
      }

      .tags__label {
        flex: 1 0 100%;
        margin-bottom: 1px;
      }
    }
  `,
})
export class OperationalSignalCard {
  private readonly clock = inject(ClockService);
  private readonly content = inject(ContentService);

  protected readonly signal = MARKET_SIGNAL;
  protected readonly directionLabel = DIRECTION_LABEL[MARKET_SIGNAL.direction];
  protected readonly strengthValue = STRENGTH_VALUE[MARKET_SIGNAL.strength];
  protected readonly dots = [1, 2, 3];

  private readonly totalMs = MARKET_SIGNAL.validityMinutes * 60_000;

  private readonly elapsed = computed(() => this.clock.now() - Date.parse(this.signal.updatedAt));

  /** Vera finché non sono trascorsi i minuti di validità dichiarati. */
  protected readonly live = computed(() => {
    const e = this.elapsed();
    return e >= 0 && e < this.totalMs;
  });

  protected readonly remainingShare = computed(() =>
    Math.max(0, Math.min(100, ((this.totalMs - this.elapsed()) / this.totalMs) * 100)),
  );

  /** Larghezza della barra di validità residua. */
  protected readonly fill = computed(() => `${this.live() ? this.remainingShare() : 0}%`);

  protected readonly remainingLabel = computed(() => formatDuration(this.totalMs - this.elapsed()));

  protected readonly sourceArticles = computed(() =>
    this.signal.sources.map((slug) => this.content.bySlug(slug)).filter((a) => a !== null),
  );

  protected readonly icon = computed(() => {
    const d = this.signal.direction;
    if (d.endsWith('ribassista')) {
      return 'arrow-down';
    }
    if (d.endsWith('rialzista')) {
      return 'arrow-up';
    }
    return 'arrow-flat';
  });
}
