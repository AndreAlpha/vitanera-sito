import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Block } from '../../core/models/article.model';
import { slugify } from '../../core/services/content.service';
import { Icon } from '../../shared/ui/icon';

/**
 * Rende un singolo blocco di contenuto di un'analisi.
 *
 * I dieci tipi di blocco avevano dieci vestiti diversi — fondi, sfumature,
 * bordi colorati, piastrelle numerate — e un'analisi lunga sembrava dieci
 * pagine incollate. Ora il vocabolario è uno solo: a separare bastano un
 * filetto e dello spazio. Il riquadro resta dove il blocco interrompe davvero
 * il filo del discorso — il riquadro di richiamo e la nota — e la citazione se
 * la cava con un filetto laterale. I blocchi numerici sono tabelle.
 */
@Component({
  selector: 'app-content-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    @if (paragraph(); as b) {
      <p class="para" [class.para--lead]="b.lead">{{ b.text }}</p>
    }

    @if (heading(); as b) {
      <h2 class="head" [id]="headingAnchor()">{{ b.text }}</h2>
    }

    @if (list(); as b) {
      <div class="blk">
        @if (b.title) {
          <p class="eyebrow blk__title">{{ b.title }}</p>
        }
        @if (b.ordered) {
          <ol class="olist">
            @for (item of b.items; track item) {
              <li>{{ item }}</li>
            }
          </ol>
        } @else {
          <ul class="ulist">
            @for (item of b.items; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        }
      </div>
    }

    @if (callout(); as b) {
      <aside class="callout" [attr.data-tone]="b.tone">
        <p class="callout__title">
          <app-icon [name]="toneIcon(b.tone)" [size]="14" />
          {{ b.title }}
        </p>
        @if (b.text) {
          <p class="callout__text">{{ b.text }}</p>
        }
        @if (b.items?.length) {
          <ul class="callout__list">
            @for (item of b.items; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        }
      </aside>
    }

    @if (stats(); as b) {
      <figure class="blk">
        @if (b.title) {
          <figcaption class="eyebrow blk__title">{{ b.title }}</figcaption>
        }
        <div class="scroll">
          <table class="figures">
            <tbody>
              @for (item of b.items; track item.label) {
                <tr [attr.data-tone]="item.tone ?? 'neutral'">
                  <th scope="row">
                    {{ item.label }}
                    @if (item.note) {
                      <span class="figures__note">{{ item.note }}</span>
                    }
                  </th>
                  <td class="tnum">{{ item.value }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        @if (b.caption) {
          <p class="fineprint"><app-icon name="info" [size]="12" />{{ b.caption }}</p>
        }
      </figure>
    }

    @if (scenarios(); as b) {
      <section class="blk">
        @if (b.title) {
          <p class="eyebrow blk__title">{{ b.title }}</p>
        }
        <dl class="rows">
          @for (item of b.items; track item.label) {
            <div class="rows__item" [attr.data-tone]="item.tone">
              <dt class="rows__label">
                <app-icon [name]="toneIcon(item.tone)" [size]="13" />
                {{ item.label }}
              </dt>
              <dd class="rows__text">{{ item.text }}</dd>
            </div>
          }
        </dl>
        @if (b.caption) {
          <p class="fineprint"><app-icon name="alert" [size]="12" />{{ b.caption }}</p>
        }
      </section>
    }

    @if (balance(); as b) {
      <section class="blk">
        @if (b.title) {
          <p class="eyebrow blk__title">{{ b.title }}</p>
        }
        <div class="bal">
          @for (side of [b.left, b.right]; track side.title) {
            <div class="bal__side" [attr.data-tone]="side.tone">
              <p class="bal__head">
                <app-icon [name]="toneIcon(side.tone)" [size]="13" />
                {{ side.title }}
              </p>
              <ul class="bal__list">
                @for (item of side.items; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </div>
          }
        </div>
      </section>
    }

    @if (timeline(); as b) {
      <section class="blk">
        @if (b.title) {
          <p class="eyebrow blk__title">{{ b.title }}</p>
        }
        <ol class="tl">
          @for (item of b.items; track item.title) {
            <li class="tl__item">
              <p class="tl__when">{{ item.when }}</p>
              <p class="tl__head">{{ item.title }}</p>
              <p class="tl__text">{{ item.text }}</p>
            </li>
          }
        </ol>
      </section>
    }

    @if (quote(); as b) {
      <blockquote class="quote">
        <p>{{ b.text }}</p>
        @if (b.cite) {
          <cite>{{ b.cite }}</cite>
        }
      </blockquote>
    }

    @if (note(); as b) {
      <p class="note"><app-icon name="info" [size]="13" />{{ b.text }}</p>
    }
  `,
  styles: `
    :host {
      display: block;
    }

    /* --- Il tono ------------------------------------------------------------
       Il tono arriva dai dati ed è la stessa informazione ovunque compaia. Una
       sola mappa da nome a colore, invece di una variante di stile per ciascun
       tipo di blocco: prima erano venti regole che dicevano la stessa cosa.
       ----------------------------------------------------------------------- */

    [data-tone] {
      --tone: var(--text);
      --tone-line: var(--line-strong);
    }

    [data-tone='gold'] {
      --tone: var(--accent);
      --tone-line: var(--accent-line);
    }

    [data-tone='bull'] {
      --tone: var(--up);
      --tone-line: var(--up-line);
    }

    [data-tone='bear'] {
      --tone: var(--down);
      --tone-line: var(--down-line);
    }

    [data-tone='warn'] {
      --tone: var(--warn);
      --tone-line: var(--warn-line);
    }

    /* --- Ossatura comune ----------------------------------------------------
       Ogni blocco strutturato ha lo stesso stacco sotto e la stessa etichetta
       sopra: è ciò che tiene insieme un'analisi lunga.
       ----------------------------------------------------------------------- */

    .blk {
      margin: 0 0 var(--s-6);
    }

    .blk__title {
      margin-bottom: var(--s-3);
    }

    .scroll {
      overflow-x: auto;
    }

    /* --- Paragrafi -----------------------------------------------------------
       Il corpo è in carattere con grazie perché è testo da leggere per intero.
       Si ferma a --measure: oltre le settanta battute l'occhio perde la riga di
       ritorno, anche se la colonna intorno sarebbe più larga.
       ----------------------------------------------------------------------- */

    .para {
      max-width: var(--measure);
      margin: 0 0 var(--s-5);
      font-family: var(--ff-serif);
      font-size: var(--t-lg);
      line-height: var(--lh-loose);
      color: var(--text-soft);
    }

    .para--lead {
      font-size: var(--t-xl);
      line-height: var(--lh-base);
      color: var(--text);
    }

    /* --- Titoli interni ------------------------------------------------------
       Niente barretta in sfumatura davanti al titolo: a distinguerlo dal corpo
       bastano il carattere senza grazie e lo spazio. Molto sopra e poco sotto,
       così il titolo appartiene visibilmente al testo che introduce.
       ----------------------------------------------------------------------- */

    .head {
      margin: var(--s-8) 0 var(--s-3);
      font-size: var(--t-lg);
      font-weight: 600;
      /* L'ancora dell'indice non deve finire sotto la barra superiore. */
      scroll-margin-top: calc(var(--topbar-h) + var(--s-6));
    }

    /* --- Elenchi -------------------------------------------------------------
       Il pallino con l'alone e il numero dentro la piastrella erano due modi di
       decorare un elenco puntato. Un trattino e una cifra nel colore di sezione
       dicono la stessa cosa senza aggiungere un oggetto alla pagina.
       ----------------------------------------------------------------------- */

    .ulist,
    .olist {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--s-3);
    }

    .ulist li,
    .olist li {
      position: relative;
      font-size: var(--t-md);
      line-height: var(--lh-base);
      color: var(--text-soft);
    }

    .ulist li {
      padding-left: var(--s-5);
    }

    .ulist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: var(--s-3);
      width: 6px;
      height: 1px;
      background: var(--accent);
    }

    .olist {
      counter-reset: step;
    }

    .olist li {
      padding-left: var(--s-6);
    }

    .olist li::before {
      counter-increment: step;
      content: counter(step) '.';
      position: absolute;
      left: 0;
      top: 2px;
      font-family: var(--ff-sans);
      font-size: var(--t-sm);
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      color: var(--accent);
    }

    /* --- Incisi --------------------------------------------------------------
       Qui il riquadro è giustificato: l'inciso deve staccarsi dal filo del
       discorso. Un fondo piatto, un bordo di un pixel e un filetto a sinistra
       nel colore del tono, al posto dei quattro fondi colorati di prima.
       ----------------------------------------------------------------------- */

    .callout {
      max-width: var(--measure);
      margin: 0 0 var(--s-6);
      padding: var(--s-card);
      border: 1px solid var(--line);
      border-left: 2px solid var(--tone-line);
      border-radius: var(--r-md);
      background: var(--surface);
    }

    .callout__title {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      font-size: var(--t-sm);
      font-weight: 600;
      color: var(--tone);
    }

    .callout__text,
    .callout__list {
      margin-top: var(--s-3);
    }

    .callout__text,
    .callout__list li {
      font-size: var(--t-base);
      line-height: var(--lh-base);
      color: var(--text-soft);
    }

    .callout__list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--s-2);
    }

    .callout__list li {
      position: relative;
      padding-left: var(--s-4);
    }

    .callout__list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: var(--s-3);
      width: 6px;
      height: 1px;
      background: var(--text-faint);
    }

    /* --- Riferimenti numerici ------------------------------------------------
       Erano piastrelle in griglia, una per numero, e il fondo scuro di ognuna
       pesava più del valore che conteneva. Incolonnati a destra i numeri si
       confrontano a colpo d'occhio, e i filetti bastano a separare le righe.
       ----------------------------------------------------------------------- */

    .figures {
      width: 100%;
      border-collapse: collapse;
    }

    .figures th,
    .figures td {
      padding: var(--s-3) 0;
      border-top: 1px solid var(--line);
      vertical-align: baseline;
    }

    .figures tr:last-child th,
    .figures tr:last-child td {
      border-bottom: 1px solid var(--line);
    }

    .figures th {
      text-align: left;
      font-size: var(--t-sm);
      font-weight: 400;
      line-height: var(--lh-snug);
      color: var(--text-muted);
    }

    .figures__note {
      display: block;
      margin-top: 2px;
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .figures td {
      /* La colonna dei valori si stringe sul contenuto: l'etichetta prende il
         resto e va a capo al posto del numero. */
      width: 1%;
      padding-left: var(--s-5);
      text-align: right;
      white-space: nowrap;
      font-size: var(--t-lg);
      font-weight: 600;
      color: var(--tone);
    }

    /* --- Scenari -------------------------------------------------------------
       Non sono schede affiancate: sono voci di un elenco, e come tali si
       leggono in verticale. Etichetta a sinistra, descrizione a destra, un
       filetto fra l'una e l'altra.
       ----------------------------------------------------------------------- */

    .rows {
      margin: 0;
      border-top: 1px solid var(--line);
    }

    .rows__item {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 3fr);
      gap: var(--s-2) var(--s-4);
      padding: var(--s-4) 0;
      border-bottom: 1px solid var(--line);
    }

    .rows__label {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      font-size: var(--t-sm);
      font-weight: 600;
      line-height: var(--lh-snug);
      color: var(--tone);
    }

    .rows__text {
      margin: 0;
      font-size: var(--t-base);
      line-height: var(--lh-base);
      color: var(--text-soft);
    }

    /* --- Bilancio a due colonne ----------------------------------------------
       Due elenchi affiancati, senza scatole né fondi colorati: a separarli
       basta un filetto verticale, che su schermo stretto diventa orizzontale.
       ----------------------------------------------------------------------- */

    .bal {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: var(--s-6);
    }

    .bal__side + .bal__side {
      padding-left: var(--s-6);
      border-left: 1px solid var(--line);
    }

    .bal__head {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      padding-bottom: var(--s-3);
      margin-bottom: var(--s-3);
      border-bottom: 1px solid var(--line);
      font-size: var(--t-sm);
      font-weight: 600;
      color: var(--tone);
    }

    .bal__list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--s-3);
    }

    .bal__list li {
      position: relative;
      padding-left: var(--s-4);
      font-size: var(--t-base);
      line-height: var(--lh-base);
      color: var(--text-soft);
    }

    .bal__list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: var(--s-3);
      width: 6px;
      height: 1px;
      background: var(--text-faint);
    }

    /* --- Cronologia ----------------------------------------------------------
       La linea resta, perché è ciò che rende una sequenza una sequenza; ma è di
       un pixel nel grigio dei filetti, e i pallini sono piccoli e senza alone:
       segnano la tappa, non la illuminano.
       ----------------------------------------------------------------------- */

    .tl {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--s-5);
      padding-left: var(--s-5);
      border-left: 1px solid var(--line);
    }

    .tl__item {
      position: relative;
    }

    /* Il pallino sta a cavallo della linea: l'imbottitura più mezzo pallino. */
    .tl__item::before {
      content: '';
      position: absolute;
      left: calc(-1 * var(--s-5) - 3px);
      top: 6px;
      width: 5px;
      height: 5px;
      border-radius: var(--r-pill);
      background: var(--accent);
    }

    .tl__when {
      font-size: var(--t-xs);
      font-weight: 500;
      line-height: var(--lh-snug);
      color: var(--accent);
    }

    .tl__head {
      margin-top: var(--s-1);
      font-size: var(--t-base);
      font-weight: 600;
      line-height: var(--lh-snug);
      color: var(--text);
    }

    .tl__text {
      margin-top: var(--s-1);
      font-size: var(--t-sm);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    /* --- Citazione -----------------------------------------------------------
       Via le virgolette giganti in sfumatura: un filetto a sinistra e il corsivo
       con grazie dicono già che la voce non è quella dell'analisi.
       ----------------------------------------------------------------------- */

    .quote {
      max-width: var(--measure);
      margin: 0 0 var(--s-6);
      padding-left: var(--s-5);
      border-left: 2px solid var(--accent-line);
    }

    .quote p {
      font-family: var(--ff-serif);
      font-size: var(--t-lg);
      font-style: italic;
      line-height: var(--lh-base);
      color: var(--text);
    }

    .quote cite {
      display: block;
      margin-top: var(--s-2);
      font-size: var(--t-xs);
      font-style: normal;
      color: var(--text-faint);
    }

    /* --- Nota ----------------------------------------------------------------
       Il bordo tratteggiato faceva sembrare la nota un segnaposto da riempire.
       È un riquadro piatto come gli altri, solo più sommesso nel testo.
       ----------------------------------------------------------------------- */

    .note {
      display: flex;
      align-items: flex-start;
      gap: var(--s-2);
      max-width: var(--measure);
      margin: 0 0 var(--s-6);
      padding: var(--s-4);
      border: 1px solid var(--line);
      border-radius: var(--r-md);
      background: var(--surface);
      font-size: var(--t-sm);
      line-height: var(--lh-snug);
      color: var(--text-muted);
    }

    .note app-icon {
      margin-top: 2px;
      color: var(--text-faint);
    }

    @media (max-width: 700px) {
      .para {
        font-size: var(--t-md);
      }

      .para--lead {
        font-size: var(--t-lg);
      }

      .head {
        margin-top: var(--s-7);
      }

      .callout {
        padding: var(--s-4);
      }

      .figures td {
        font-size: var(--t-md);
        padding-left: var(--s-4);
      }

      /* Etichetta sopra e descrizione sotto: due colonne su trecento pixel
         lasciano quattro parole per riga. */
      .rows__item {
        grid-template-columns: minmax(0, 1fr);
        padding: var(--s-3) 0;
      }

      .bal {
        grid-template-columns: minmax(0, 1fr);
        gap: var(--s-5);
      }

      .bal__side + .bal__side {
        padding-left: 0;
        padding-top: var(--s-5);
        border-left: 0;
        border-top: 1px solid var(--line);
      }

      .quote {
        padding-left: var(--s-4);
      }

      .quote p {
        font-size: var(--t-md);
      }
    }
  `,
})
export class ContentBlock {
  readonly block = input.required<Block>();

  private of<K extends Block['kind']>(kind: K) {
    return computed(() => {
      const b = this.block();
      return b.kind === kind ? (b as Extract<Block, { kind: K }>) : null;
    });
  }

  protected readonly paragraph = this.of('paragraph');
  protected readonly heading = this.of('heading');
  protected readonly list = this.of('list');
  protected readonly callout = this.of('callout');
  protected readonly stats = this.of('stats');
  protected readonly scenarios = this.of('scenarios');
  protected readonly balance = this.of('balance');
  protected readonly timeline = this.of('timeline');
  protected readonly quote = this.of('quote');
  protected readonly note = this.of('note');

  protected readonly headingAnchor = computed(() => {
    const h = this.heading();
    return h ? (h.anchor ?? slugify(h.text)) : '';
  });

  protected toneIcon(tone: string): string {
    switch (tone) {
      case 'bull':
        return 'arrow-up';
      case 'bear':
        return 'arrow-down';
      case 'warn':
        return 'alert';
      case 'gold':
        return 'coin';
      default:
        return 'info';
    }
  }
}
