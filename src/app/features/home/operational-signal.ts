import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  DIRECTION_LABEL,
  HORIZON_LABEL,
  HORIZON_SPAN,
  MARKET_SIGNAL,
  OperationalSignal,
  STRENGTH_VALUE,
} from '../../core/data/signal.data';
import { BiasDirection } from '../../core/models/article.model';
import { ContentService, formatDateTime } from '../../core/services/content.service';
import { Icon } from '../../shared/ui/icon';
import { Timestamp } from '../../shared/ui/timestamp';
import { ConstraintList } from './constraint-list';
import { StanceHistory } from './stance-history';
import { ThresholdTrack } from './threshold-track';

/** Freccia che accompagna una direzione. */
function directionIcon(direction: BiasDirection): string {
  if (direction.endsWith('ribassista')) {
    return 'arrow-down';
  }
  if (direction.endsWith('rialzista')) {
    return 'arrow-up';
  }
  return 'arrow-flat';
}

/**
 * Indicatore operativo sull'oro.
 *
 * Dice tre cose per tre archi di tempo — intraday, giorni, settimane — e
 * l'ora in cui è stata scritta. Non scade da sola: prima si dichiarava valida
 * per un tot di minuti e allo scadere si spegneva, anche quando il quadro non
 * era cambiato di una virgola. Quella durata era una precisione che nessuno
 * poteva davvero garantire; adesso c'è la data, grande, e giudicare quanto sia
 * ancora attuale tocca a chi legge.
 *
 * Quando non esiste alcuna lettura la scheda non sparisce: tiene lo stesso
 * riquadro in stato di attesa, così la panoramica non resta con un vuoto al
 * posto dell'indicatore.
 *
 * Sotto le pastiglie stanno tre sezioni che rispondono a tre domande che il
 * testo lasciava implicite — da dove viene la lettura, che cosa tiene fermo il
 * quadro, quanto manca perché sia sbagliata:
 *
 * | Sezione                    | Da dove viene           | Si aggiorna              |
 * | -------------------------- | ----------------------- | ------------------------ |
 * | Storico dell'impostazione  | il `bias` delle analisi | da sé, a ogni pubblicazione |
 * | Vincoli da tenere sott'occhio | `MARKET_SIGNAL.constraints` | a mano, di rado     |
 * | Distanza dalle soglie      | `MARKET_SIGNAL.thresholds`  | a mano, ogni volta  |
 *
 * Occupano la metà bassa della colonna di destra, che restava vuota perché la
 * colonna delle tre letture è lunga il doppio di quella del contenuto.
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
  imports: [RouterLink, Icon, Timestamp, StanceHistory, ConstraintList, ThresholdTrack],
  template: `
    <section class="card sig" [class.sig--live]="signal !== null" aria-live="polite">
      @if (signal; as s) {
        <header class="sig__bar">
          <span class="sig__asset">{{ s.asset }}</span>

          <!-- L'ora dell'ultimo aggiornamento, scritta grande.
               Al suo posto c'era una barra che si svuotava e la scritta «valida
               ancora 47 minuti». Era precisione finta: nessuno sa davvero se una
               lettura vale novanta minuti, e allo scadere la scheda si spegneva
               da sola anche quando il quadro non era cambiato di una virgola.
               Adesso la scheda dice quando è stata scritta e lascia decidere a
               chi legge, che è l'unico ad avere davanti il mercato di adesso. -->
          <span class="stamp">
            <span class="stamp__label">Ultimo aggiornamento</span>
            <span class="stamp__value tnum">{{ updatedLabel }}</span>
            <span class="stamp__ago">
              <app-timestamp [iso]="s.updatedAt" />
            </span>
            <!-- Seconda riga solo quando il quadro è stato riverificato dopo la
                 pubblicazione. Senza, la scheda direbbe di essere ferma alle 8:35
                 con accanto numeri delle 9:20: la data grande dice quale analisi
                 riassume, questa dice fino a quando è stata ricontrollata. -->
            @if (checkedLabel) {
              <span class="stamp__checked">
                Conferme ricontrollate alle <span class="tnum">{{ checkedLabel }}</span>
              </span>
            }
          </span>
        </header>

        <div class="sig__body">
          <!-- Le tre letture --------------------------------------------- -->
          <div class="gauge">
            <p class="gauge__label">Impostazione per orizzonte</p>

            <ul class="reads">
              @for (r of readings; track r.horizon) {
                <li class="read">
                  <p class="read__hz">
                    {{ r.label }}
                    <span class="read__span">{{ r.span }}</span>
                  </p>
                  <p class="read__dir">
                    <app-icon [name]="r.icon" [size]="14" />
                    {{ r.directionLabel }}
                  </p>
                  <p class="strength">
                    <!-- I tre segmenti ripetono la parola che sta lì accanto: per
                         chi legge con uno screen reader sono decorazione. -->
                    <span class="strength__bar" aria-hidden="true">
                      @for (i of dots; track i) {
                        <i [class.on]="i <= r.strengthValue"></i>
                      }
                    </span>
                    <span class="strength__value">forza {{ r.strength }}</span>
                  </p>
                  <p class="read__regime">{{ r.regime }}</p>
                  <p class="read__inv"><strong>Decade con:</strong> {{ r.invalidation }}</p>
                </li>
              }
            </ul>
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

            <!-- Da dove viene questa lettura, e quanto manca perché sia
                 sbagliata. Stanno qui e non a tutta larghezza perché è questa
                 colonna a finire presto: quella delle tre letture è lunga il
                 doppio, e sotto le pastiglie restava mezzo riquadro vuoto. -->
            <div class="panels">
              <app-stance-history />
              <app-threshold-track [thresholds]="s.thresholds" />
            </div>
          </div>
        </div>

        <!-- I vincoli prendono invece tutta la larghezza, per due ragioni. Sono
             fatti a due facce — il numero materiale e la dichiarazione che dice
             il contrario — e affiancarle in una colonna da 800 pixel le
             schiaccia. E cambiano molto più lentamente di tutto il resto della
             scheda: sono la cosa che resta quando l'impostazione intraday è già
             girata tre volte, e chiudere con loro invece che con una pastiglia
             dice anche questo. -->
        <app-constraint-list [constraints]="s.constraints" />

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
            Riepilogo editoriale delle analisi pubblicate al momento indicato sopra. Non ha una
            scadenza dichiarata: quanto sia ancora attuale si giudica dalla data e da quello che il
            mercato ha fatto da allora.
            <strong>Non è consulenza finanziaria</strong> né un segnale di acquisto o vendita.
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
            pubblicazione di un’analisi, divise per orizzonte, con la data e l’ora in cui sono state
            scritte.
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
            L’indicatore riepiloga le analisi pubblicate e riporta la data in cui è stato scritto.
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
      transition: border-color var(--dur) var(--ease);
    }

    .sig--live {
      border-color: var(--accent-line);
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

    /* --- Ultimo aggiornamento -------------------------------------------------
       È la cosa che si guarda per prima quando si arriva sulla panoramica: prima
       era una riga di sei parole in grigio chiaro accanto a un conto alla
       rovescia che rubava la scena. Adesso la data è grande e il tempo trascorso
       le sta sotto, come nota.
       ------------------------------------------------------------------------- */

    .stamp {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-left: auto;
      text-align: right;
    }

    .stamp__label {
      font-size: var(--t-micro);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--text-faint);
    }

    .stamp__value {
      font-size: var(--t-lg);
      font-weight: 600;
      line-height: var(--lh-tight);
      color: var(--text);
    }

    .stamp__ago {
      font-size: var(--t-xs);
      color: var(--text-soft);
    }

    /* Più piccola e più smorta della data: è un dettaglio di servizio, non
       un'informazione che compete con l'ora dell'analisi. */
    .stamp__checked {
      margin-top: var(--s-1);
      font-size: var(--t-micro);
      color: var(--text-faint);
    }

    /* --- Le tre letture ------------------------------------------------------- */

    .reads {
      list-style: none;
      display: flex;
      flex-direction: column;
      margin-top: var(--s-3);
    }

    .read {
      padding: var(--s-4) 0;
      border-top: 1px solid var(--line);
    }

    .read:first-child {
      border-top: 0;
      padding-top: var(--s-1);
    }

    .read__hz {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: var(--s-2);
      font-size: var(--t-xs);
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--accent);
    }

    .read__span {
      font-weight: 400;
      letter-spacing: 0;
      text-transform: none;
      color: var(--text-faint);
    }

    .read__dir {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      margin-top: var(--s-2);
      font-size: var(--t-md);
      font-weight: 600;
      line-height: var(--lh-snug);
      color: var(--text);
    }

    .read__dir app-icon {
      color: var(--accent);
    }

    .read__regime {
      margin-top: var(--s-2);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-muted);
    }

    .read__inv {
      margin-top: var(--s-2);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .read__inv strong {
      font-weight: 500;
      color: var(--text-soft);
    }

    /* --- Corpo ---------------------------------------------------------------- */

    .sig__body {
      display: grid;
      grid-template-columns: 300px minmax(0, 1fr);
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

    .strength {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-2);
      margin-top: var(--s-2);
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

    .detail {
      padding: var(--s-card);
      min-width: 0;
    }

    .detail__headline {
      font-size: var(--t-xl);
      line-height: var(--lh-snug);
      max-width: var(--measure);
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

    /* --- Storico, soglie e vincoli ---------------------------------------------
       Si separano con un filetto e non con un riquadro proprio: sono la stessa
       scheda, non tre schede.

       La ripartizione fra colonna e fascia non è estetica, è una misura. La
       colonna delle tre letture è alta circa 1.150 pixel e quella del contenuto
       ne riempiva 400: erano 750 pixel di vuoto. Storico e soglie ne occupano
       circa 860, e le due colonne finiscono quasi insieme. Mettendoci dentro
       anche i vincoli si arrivava a 1.620 e il vuoto si spostava soltanto —
       1.047 pixel, dall'altra parte.
       -------------------------------------------------------------------------- */

    .panels {
      display: flex;
      flex-direction: column;
      gap: var(--s-6);
      margin-top: var(--s-6);
    }

    .panels > * + * {
      padding-top: var(--s-6);
      border-top: 1px solid var(--line);
    }

    app-constraint-list {
      display: block;
      padding: var(--s-card);
      border-top: 1px solid var(--line);
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

      .stamp {
        flex: 1 0 100%;
        align-items: flex-start;
        margin-left: 0;
        text-align: left;
      }

      .gauge,
      .detail,
      .waiting,
      .sig__foot,
      app-constraint-list {
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
  private readonly content = inject(ContentService);

  protected readonly signal: OperationalSignal | null = MARKET_SIGNAL;
  protected readonly dots = [1, 2, 3];

  /**
   * Data e ora dell'ultimo aggiornamento, per esteso e in cifre.
   *
   * È scritta per intero e non come «due ore fa» perché è l'informazione con cui
   * chi legge decide se fidarsi: «aggiornato ieri alle 20:05» si giudica subito,
   * «17 ore fa» costringe a fare un conto per capire se è prima o dopo la
   * chiusura americana. Il tempo trascorso resta accanto, in piccolo.
   */
  protected readonly updatedLabel = this.signal ? formatDateTime(this.signal.updatedAt) : '';

  /**
   * Ora dell'ultima riverifica, vuota quando non ce n'è stata una successiva.
   *
   * Il confronto è fra istanti e non fra stringhe: `checkedAt` uguale a
   * `updatedAt` non deve produrre una riga che ripete la stessa ora.
   */
  protected readonly checkedLabel =
    this.signal?.checkedAt && Date.parse(this.signal.checkedAt) > Date.parse(this.signal.updatedAt)
      ? formatDateTime(this.signal.checkedAt)
      : '';

  /** Le tre letture, già risolte in etichette pronte da mostrare. */
  protected readonly readings = (this.signal?.readings ?? []).map((r) => ({
    horizon: r.horizon,
    label: HORIZON_LABEL[r.horizon],
    span: HORIZON_SPAN[r.horizon],
    directionLabel: DIRECTION_LABEL[r.direction],
    strength: r.strength,
    strengthValue: STRENGTH_VALUE[r.strength],
    regime: r.regime,
    invalidation: r.invalidation,
    icon: directionIcon(r.direction),
  }));

  protected readonly sourceArticles = computed(() => {
    const sources: readonly string[] = this.signal?.sources ?? [];
    return sources.map((slug) => this.content.bySlug(slug)).filter((a) => a !== null);
  });
}
