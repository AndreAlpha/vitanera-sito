import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  DIRECTION_LABEL,
  MARKET_SIGNAL,
  OperationalSignal,
  STRENGTH_VALUE,
} from '../../core/data/signal.data';
import { ClockService } from '../../core/services/clock.service';
import { ContentService, formatDuration } from '../../core/services/content.service';
import { Icon } from '../../shared/ui/icon';
import { Timestamp } from '../../shared/ui/timestamp';

/**
 * Indicatore operativo sull'oro.
 *
 * Vale i minuti dichiarati dalla lettura stessa: scaduto quel termine passa
 * automaticamente allo stato «in attesa di notizie» e la lettura precedente
 * resta visibile solo come storico, marcata come non più valida.
 *
 * Quando non esiste alcuna lettura la scheda non sparisce: tiene lo stesso
 * riquadro in stato di attesa, così la panoramica non resta con un vuoto al
 * posto dell'indicatore.
 *
 * È l'informazione più importante della panoramica, e per questo era anche la
 * più rumorosa: fondo in due sfumature, ombra, piastrelle dorate sotto le
 * icone, un pallino che pulsava all'infinito. Resta un riquadro come gli altri,
 * dove a segnalare che la lettura è viva sono soltanto il bordo in tinta
 * d'accento e la barra della validità residua.
 */
@Component({
  selector: 'app-operational-signal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, Timestamp],
  template: `
    <section
      class="card sig"
      [class.sig--live]="live()"
      [class.sig--expired]="signal !== null && !live()"
      aria-live="polite"
    >
      @if (signal; as s) {
        <div class="meter" aria-hidden="true">
          <span class="meter__fill" [style.width]="fill()"></span>
        </div>

        <header class="sig__bar">
          <span class="chip" [class.chip--accent]="live()">
            <i class="state__dot" aria-hidden="true"></i>
            {{ live() ? 'Lettura valida' : 'In attesa di notizie' }}
          </span>

          <span class="sig__asset">{{ s.asset }}</span>

          <span class="sig__timing">
            @if (live()) {
              <span class="sig__left tnum">valida ancora {{ remainingLabel() }}</span>
            }
            <span class="sig__updated"> aggiornato <app-timestamp [iso]="s.updatedAt" /> </span>
          </span>
        </header>

        <div class="sig__body">
          <!-- Quadrante ---------------------------------------------------- -->
          <div class="gauge">
            <p class="gauge__label">{{ live() ? 'Impostazione' : 'Stato' }}</p>
            <p class="gauge__value">
              <app-icon [name]="live() ? icon() : 'clock'" [size]="16" />
              {{ live() ? directionLabel : 'In attesa di notizie' }}
            </p>

            @if (live()) {
              <p class="strength">
                <span>Forza del segnale</span>
                <!-- I tre segmenti ripetono la parola che sta lì accanto: per chi
                     legge con uno screen reader sono decorazione. -->
                <span class="strength__bar" aria-hidden="true">
                  @for (i of dots; track i) {
                    <i [class.on]="i <= strengthValue"></i>
                  }
                </span>
                <span class="strength__value">{{ s.strength }}</span>
              </p>
            } @else {
              <p class="gauge__note">
                L’ultima lettura è scaduta. Nessuna indicazione è considerata valida finché non
                viene pubblicato un nuovo aggiornamento.
              </p>
            }
          </div>

          <!-- Contenuto ---------------------------------------------------- -->
          <div class="detail">
            <h2 class="detail__headline">{{ s.headline }}</h2>
            <p class="detail__stance">{{ s.stance }}</p>

            <div class="cols">
              <div class="col col--fav">
                <p class="col__title"><app-icon name="check" [size]="13" /> Favorito</p>
                <ul>
                  @for (item of s.favours; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </div>
              <div class="col col--avoid">
                <p class="col__title"><app-icon name="close" [size]="13" /> Da evitare</p>
                <ul>
                  @for (item of s.avoid; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </div>
            </div>

            <div class="tags">
              <span class="tags__label tags__label--up">Confermano</span>
              <span class="tags__items">
                @for (item of s.confirming; track item) {
                  <span class="chip">{{ item }}</span>
                }
              </span>

              <span class="tags__label tags__label--down">Contraddicono</span>
              <span class="tags__items">
                @for (item of s.contradicting; track item) {
                  <span class="chip">{{ item }}</span>
                }
              </span>
            </div>

            <p class="fineprint invalid">
              <app-icon name="alert" [size]="12" />
              <span><strong>Decade con:</strong> {{ s.invalidation }}</span>
            </p>
          </div>
        </div>

        <footer class="sig__foot">
          @if (sourceArticles().length) {
            <div class="sources">
              <span class="sources__label">Deriva da</span>
              @for (a of sourceArticles(); track a.slug) {
                <a class="link" [routerLink]="['/analisi', a.slug]">{{ a.kicker }}</a>
              }
            </div>
          }
          <p class="sig__legal">
            Riepilogo editoriale delle analisi pubblicate, valido {{ s.validityMinutes }} minuti
            dall’aggiornamento. <strong>Non è consulenza finanziaria</strong> né un segnale di
            acquisto o vendita.
          </p>
        </footer>
      } @else {
        <header class="sig__bar">
          <span class="chip">
            <i class="state__dot" aria-hidden="true"></i>
            In attesa di notizie
          </span>
        </header>

        <div class="waiting">
          <p class="waiting__title">
            <app-icon name="clock" [size]="15" />
            Nessuna lettura in corso
          </p>
          <p class="waiting__text">
            Al momento non è in corso alcuna lettura operativa. Le letture compaiono qui dopo la
            pubblicazione di un’analisi e restano valide per il tempo dichiarato al momento
            dell’aggiornamento.
          </p>
          <div class="waiting__actions">
            <a class="btn btn--ghost btn--sm" routerLink="/calendario">
              Guarda il calendario economico <app-icon name="arrow-right" [size]="13" />
            </a>
            <a class="btn btn--ghost btn--sm" routerLink="/metodologia">Come lavoriamo</a>
          </div>
        </div>

        <footer class="sig__foot">
          <p class="sig__legal">
            L’indicatore riepiloga le analisi pubblicate e vale solo per il tempo che dichiara.
            <strong>Non è consulenza finanziaria</strong> né un segnale di acquisto o vendita.
          </p>
        </footer>
      }
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    /* Il pannello è un riquadro come gli altri: a dire che la lettura è viva
       basta il bordo in tinta d'accento. Il fondo in sfumatura e l'ombra
       larga lo staccavano dalla pagina come un pannello di controllo acceso. */
    .sig {
      position: relative;
      overflow: hidden; /* la barra di validità deve seguire l'angolo smussato */
      transition: border-color var(--dur) var(--ease);
    }

    .sig--live {
      border-color: var(--accent-line);
    }

    /* --- Barra della validità residua --------------------------------------
       Fondo neutro e riempimento in tinta piena: la sfumatura da scuro a chiaro
       faceva sembrare più lunga la coda di tempo che resta davvero.
       ---------------------------------------------------------------------- */

    .meter {
      position: absolute;
      inset: 0 0 auto;
      height: 3px;
      background: var(--surface-2);
    }

    .meter__fill {
      display: block;
      height: 100%;
      background: var(--accent);
      transition: width 1s linear;
    }

    /* --- Intestazione -------------------------------------------------------- */

    .sig__bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-3);
      padding: var(--s-4) var(--s-card);
      border-bottom: 1px solid var(--line);
    }

    /* Il punto non lampeggia più: un'animazione che si ripete senza fine è la
       cosa che stanca prima in una pagina fatta per essere letta. */
    .state__dot {
      width: 5px;
      height: 5px;
      border-radius: var(--r-pill);
      background: currentColor;
    }

    .sig__asset {
      font-size: var(--t-xs);
      font-weight: 500;
      letter-spacing: 0.06em;
      color: var(--text-soft);
    }

    .sig__timing {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-1) var(--s-4);
      margin-left: auto;
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    .sig__left {
      color: var(--accent);
      font-weight: 500;
    }

    .sig__updated {
      display: inline-flex;
      align-items: center;
      gap: var(--s-1);
    }

    /* --- Corpo ---------------------------------------------------------------- */

    .sig__body {
      display: grid;
      grid-template-columns: 240px minmax(0, 1fr);
    }

    /* La colonna di sinistra si separa con un filetto e non con un fondo più
       scuro: dentro un riquadro già staccato dalla pagina, un secondo livello di
       grigio non aggiungeva niente. */
    .gauge {
      padding: var(--s-card);
      border-right: 1px solid var(--line);
    }

    .gauge__label {
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    /* L'icona stava dentro una piastrella di 56px in sfumatura dorata, sopra al
       valore. Adesso è in linea con la parola che qualifica, alla misura di
       un'icona. */
    .gauge__value {
      display: flex;
      align-items: flex-start;
      gap: var(--s-2);
      margin-top: var(--s-2);
      font-size: var(--t-lg);
      font-weight: 600;
      line-height: var(--lh-snug);
      color: var(--text);
    }

    .gauge__value app-icon {
      margin-top: var(--s-1);
      color: var(--accent);
    }

    /* Lettura scaduta: cambia il grigio, non il colore. Lo stato d'attesa si
       riconosce perché si spegne, non perché si accende di un'altra tinta. */
    .sig--expired .gauge__value {
      color: var(--text-muted);
    }

    .sig--expired .gauge__value app-icon {
      color: var(--text-faint);
    }

    .strength {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-2);
      margin-top: var(--s-4);
      padding-top: var(--s-4);
      border-top: 1px solid var(--line);
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    .strength__bar {
      display: inline-flex;
      gap: 2px;
    }

    .strength__bar i {
      width: 14px;
      height: 3px;
      border-radius: var(--r-pill);
      background: var(--surface-2);
    }

    .strength__bar i.on {
      background: var(--accent);
    }

    .strength__value {
      color: var(--text-soft);
      font-weight: 500;
      text-transform: capitalize;
    }

    .gauge__note {
      margin-top: var(--s-4);
      padding-top: var(--s-4);
      border-top: 1px solid var(--line);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .detail {
      padding: var(--s-card);
      min-width: 0;
    }

    .detail__headline {
      font-size: var(--t-xl);
      line-height: var(--lh-snug);
      max-width: var(--measure);
    }

    .sig--expired .detail__headline {
      color: var(--text-soft);
    }

    .detail__stance {
      max-width: var(--measure);
      margin-top: var(--s-3);
      font-size: var(--t-base);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    /* --- Favorito e da evitare -----------------------------------------------
       Erano due riquadri col fondo verde e col fondo rosso, uno accanto
       all'altro: due macchie di colore che pesavano più della frase che sta
       sopra. Restano distinguibili a colpo d'occhio con il filetto in tinta e
       l'intestazione colorata, che è quanto serve per capire quale è quale.
       ------------------------------------------------------------------------ */

    .cols {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
      gap: var(--s-5);
      margin-top: var(--s-5);
    }

    .col {
      padding-top: var(--s-3);
      border-top: 1px solid var(--line);
    }

    .col__title {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      margin-bottom: var(--s-3);
      font-size: var(--t-xs);
      font-weight: 500;
    }

    .col--fav {
      border-top-color: var(--up-line);
    }

    .col--fav .col__title {
      color: var(--up);
    }

    .col--avoid {
      border-top-color: var(--down-line);
    }

    .col--avoid .col__title {
      color: var(--down);
    }

    .col ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--s-2);
    }

    .col li {
      position: relative;
      padding-left: var(--s-4);
      font-size: var(--t-sm);
      line-height: var(--lh-snug);
      color: var(--text-soft);
    }

    .col li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 5px;
      height: 1px;
      background: var(--text-faint);
    }

    .col--fav li::before {
      background: var(--up);
    }

    .col--avoid li::before {
      background: var(--down);
    }

    /* --- Conferme e contraddizioni --------------------------------------------
       Due righe etichettate: il colore sta sull'etichetta, le voci restano
       pastiglie neutre. Colorarle tutte faceva sedici macchie verdi e rosse in
       un riquadro che ne aveva già abbastanza.
       -------------------------------------------------------------------------- */

    .tags {
      display: grid;
      grid-template-columns: max-content minmax(0, 1fr);
      align-items: baseline;
      gap: var(--s-2) var(--s-3);
      margin-top: var(--s-5);
    }

    .tags__label {
      font-size: var(--t-xs);
      font-weight: 500;
    }

    .tags__label--up {
      color: var(--up);
    }

    .tags__label--down {
      color: var(--down);
    }

    .tags__items {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-2);
    }

    /* Scaduta la lettura, verde e rosso direbbero ancora «vale adesso». */
    .sig--expired .col {
      border-top-color: var(--line);
    }

    .sig--expired .col__title,
    .sig--expired .tags__label {
      color: var(--text-muted);
    }

    .sig--expired .col li::before {
      background: var(--text-faint);
    }

    /* Condizione di decadenza: il filetto la stacca dal resto, l'icona resta
       l'unico segno ambrato del riquadro. */
    .invalid {
      padding-top: var(--s-4);
      border-top: 1px solid var(--line);
    }

    .invalid app-icon {
      color: var(--warn);
    }

    .invalid strong {
      font-weight: 500;
      color: var(--text-soft);
    }

    /* --- Attesa ---------------------------------------------------------------- */

    .waiting {
      padding: var(--s-card);
    }

    .waiting__title {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      font-size: var(--t-lg);
      font-weight: 600;
      line-height: var(--lh-snug);
      color: var(--text-soft);
    }

    .waiting__title app-icon {
      color: var(--text-faint);
    }

    .waiting__text {
      max-width: var(--measure);
      margin-top: var(--s-3);
      font-size: var(--t-sm);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    .waiting__actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-2);
      margin-top: var(--s-5);
    }

    /* --- Piede -------------------------------------------------------------------- */

    .sig__foot {
      display: flex;
      flex-direction: column;
      gap: var(--s-3);
      padding: var(--s-4) var(--s-card);
      border-top: 1px solid var(--line);
    }

    .sources {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-2) var(--s-3);
      font-size: var(--t-xs);
    }

    .sources__label {
      color: var(--text-faint);
    }

    /* L'avvertenza resta, ma in grigio: era ambrata e allineata a destra, e
       nel piede finiva per essere la cosa che si guardava per prima. */
    .sig__legal {
      max-width: var(--measure);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .sig__legal strong {
      font-weight: 500;
      color: var(--text-soft);
    }

    @media (max-width: 900px) {
      .sig__body {
        grid-template-columns: minmax(0, 1fr);
      }

      .gauge {
        border-right: 0;
        border-bottom: 1px solid var(--line);
      }
    }

    @media (max-width: 620px) {
      .sig__bar {
        gap: var(--s-2) var(--s-3);
        padding: var(--s-3) var(--s-4);
      }

      .sig__timing {
        flex: 1 0 100%;
        margin-left: 0;
      }

      .gauge,
      .detail,
      .waiting,
      .sig__foot {
        padding-left: var(--s-4);
        padding-right: var(--s-4);
      }

      .detail__headline {
        font-size: var(--t-lg);
      }

      /* In verticale l'etichetta va sopra alle voci che introduce. */
      .tags {
        grid-template-columns: minmax(0, 1fr);
      }

      .tags__items + .tags__label {
        margin-top: var(--s-2);
      }
    }
  `,
})
export class OperationalSignalCard {
  private readonly clock = inject(ClockService);
  private readonly content = inject(ContentService);

  protected readonly signal: OperationalSignal | null = MARKET_SIGNAL;
  protected readonly directionLabel = this.signal ? DIRECTION_LABEL[this.signal.direction] : '';
  protected readonly strengthValue = this.signal ? STRENGTH_VALUE[this.signal.strength] : 0;
  protected readonly dots = [1, 2, 3];

  private readonly totalMs = (this.signal?.validityMinutes ?? 0) * 60_000;

  /**
   * Tempo trascorso dall'aggiornamento, mai negativo.
   *
   * L'orologio del visitatore può essere indietro di qualche minuto rispetto a
   * quello di chi pubblica: senza questo troncamento una lettura appena uscita
   * risulterebbe "nel futuro" e verrebbe mostrata come scaduta.
   */
  private readonly elapsed = computed(() => {
    const s = this.signal;
    return s === null ? 0 : Math.max(0, this.clock.now() - Date.parse(s.updatedAt));
  });

  /** Vera finché non sono trascorsi i minuti di validità dichiarati. */
  protected readonly live = computed(() => this.signal !== null && this.elapsed() < this.totalMs);

  protected readonly remainingShare = computed(() =>
    Math.max(0, Math.min(100, ((this.totalMs - this.elapsed()) / this.totalMs) * 100)),
  );

  /** Larghezza della barra di validità residua. */
  protected readonly fill = computed(() => `${this.live() ? this.remainingShare() : 0}%`);

  protected readonly remainingLabel = computed(() => formatDuration(this.totalMs - this.elapsed()));

  protected readonly sourceArticles = computed(() => {
    const sources: readonly string[] = this.signal?.sources ?? [];
    return sources.map((slug) => this.content.bySlug(slug)).filter((a) => a !== null);
  });

  protected readonly icon = computed(() => {
    const d = this.signal?.direction ?? '';
    if (d.endsWith('ribassista')) {
      return 'arrow-down';
    }
    if (d.endsWith('rialzista')) {
      return 'arrow-up';
    }
    return 'arrow-flat';
  });
}
