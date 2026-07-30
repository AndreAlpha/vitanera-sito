import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Block } from '../../core/models/article.model';
import { slugify } from '../../core/services/content.service';
import { Icon } from '../../shared/ui/icon';

/**
 * Rende un singolo blocco di contenuto di un'analisi.
 *
 * Ogni tipo di blocco ha una resa dedicata: paragrafi in carattere con grazie
 * per la lettura lunga, elenchi, riquadri, tabelle di riferimenti, scenari e
 * bilanci a due colonne.
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
      <h2 class="h2" [id]="headingAnchor()">
        <span class="h2__bar"></span>
        {{ b.text }}
      </h2>
    }

    @if (list(); as b) {
      <div class="listwrap">
        @if (b.title) {
          <p class="listwrap__title">{{ b.title }}</p>
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
              <li><span class="dot"></span>{{ item }}</li>
            }
          </ul>
        }
      </div>
    }

    @if (callout(); as b) {
      <aside class="callout" [class]="'callout--' + b.tone">
        <p class="callout__title">
          <app-icon [name]="toneIcon(b.tone)" [size]="15" />
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
      <figure class="stats">
        @if (b.title) {
          <figcaption class="stats__title">{{ b.title }}</figcaption>
        }
        <div class="stats__grid">
          @for (item of b.items; track item.label) {
            <div class="stat" [class]="'stat--' + (item.tone ?? 'neutral')">
              <p class="stat__label">{{ item.label }}</p>
              <p class="stat__value tnum">{{ item.value }}</p>
              @if (item.note) {
                <p class="stat__note">{{ item.note }}</p>
              }
            </div>
          }
        </div>
        @if (b.caption) {
          <p class="stats__caption"><app-icon name="info" [size]="12" />{{ b.caption }}</p>
        }
      </figure>
    }

    @if (scenarios(); as b) {
      <section class="scen">
        @if (b.title) {
          <p class="scen__title">{{ b.title }}</p>
        }
        <div class="scen__grid">
          @for (item of b.items; track item.label) {
            <article class="scen__card" [class]="'scen__card--' + item.tone">
              <p class="scen__label">
                <app-icon [name]="toneIcon(item.tone)" [size]="13" />
                {{ item.label }}
              </p>
              <p class="scen__text">{{ item.text }}</p>
            </article>
          }
        </div>
        @if (b.caption) {
          <p class="scen__caption"><app-icon name="alert" [size]="12" />{{ b.caption }}</p>
        }
      </section>
    }

    @if (balance(); as b) {
      <section class="bal">
        @if (b.title) {
          <p class="bal__title">{{ b.title }}</p>
        }
        <div class="bal__grid">
          @for (side of [b.left, b.right]; track side.title) {
            <div class="bal__side" [class]="'bal__side--' + side.tone">
              <p class="bal__head">
                <app-icon [name]="toneIcon(side.tone)" [size]="14" />
                {{ side.title }}
              </p>
              <ul>
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
      <section class="tl">
        @if (b.title) {
          <p class="tl__title">{{ b.title }}</p>
        }
        <ol>
          @for (item of b.items; track item.title) {
            <li>
              <span class="tl__when">{{ item.when }}</span>
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

    /* --- Paragrafi -------------------------------------------------------- */

    .para {
      font-family: var(--ff-serif);
      font-size: 17.4px;
      line-height: 1.8;
      color: var(--text-soft);
      margin: 0 0 20px;
    }

    .para--lead {
      font-size: 20px;
      line-height: 1.68;
      color: var(--text);
    }

    /* --- Titoli ----------------------------------------------------------- */

    .h2 {
      position: relative;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 21px;
      letter-spacing: -0.025em;
      margin: 40px 0 18px;
      scroll-margin-top: 130px;
    }

    .h2__bar {
      width: 4px;
      height: 20px;
      border-radius: 3px;
      background: linear-gradient(180deg, var(--accent-soft), var(--accent-deep));
    }

    /* --- Elenchi ---------------------------------------------------------- */

    .listwrap {
      margin: 0 0 24px;
    }

    .listwrap__title {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--accent-deep);
      margin-bottom: 11px;
    }

    .ulist {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 11px;
    }

    .ulist li {
      display: flex;
      gap: 12px;
      font-size: 15.4px;
      line-height: 1.68;
      color: var(--text-soft);
    }

    .dot {
      width: 6px;
      height: 6px;
      margin-top: 9px;
      flex: none;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.14);
    }

    .olist {
      counter-reset: step;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 11px;
    }

    .olist li {
      position: relative;
      padding-left: 34px;
      font-size: 15.4px;
      line-height: 1.68;
      color: var(--text-soft);
    }

    .olist li::before {
      counter-increment: step;
      content: counter(step);
      position: absolute;
      left: 0;
      top: 1px;
      display: grid;
      place-items: center;
      width: 22px;
      height: 22px;
      border-radius: 8px;
      background: rgba(var(--accent-rgb), 0.14);
      border: 1px solid var(--accent-line);
      color: var(--accent-soft);
      font-family: var(--ff-sans);
      font-size: 11px;
      font-weight: 700;
    }

    /* --- Riquadri --------------------------------------------------------- */

    .callout {
      margin: 0 0 26px;
      padding: 18px 20px;
      border-radius: var(--r-md);
      border: 1px solid var(--line-strong);
      background: rgba(255, 255, 255, 0.025);
      border-left-width: 3px;
    }

    .callout__title {
      display: flex;
      align-items: center;
      gap: 9px;
      font-size: 13.5px;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin-bottom: 9px;
    }

    .callout__text,
    .callout__list li {
      font-size: 14.4px;
      line-height: 1.66;
      color: var(--text-muted);
    }

    .callout__list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 7px;
      margin-top: 4px;
    }

    .callout__list li::before {
      content: '—';
      margin-right: 8px;
      opacity: 0.45;
    }

    .callout--bull {
      border-color: rgba(74, 210, 149, 0.3);
      border-left-color: var(--bull);
      background: var(--bull-dim);
    }

    .callout--bull .callout__title {
      color: var(--bull);
    }

    .callout--bear {
      border-color: rgba(255, 95, 102, 0.3);
      border-left-color: var(--bear);
      background: var(--bear-dim);
    }

    .callout--bear .callout__title {
      color: var(--bear);
    }

    .callout--warn {
      border-color: rgba(240, 169, 59, 0.3);
      border-left-color: var(--warn);
      background: var(--warn-dim);
    }

    .callout--warn .callout__title {
      color: var(--warn);
    }

    .callout--gold {
      border-color: var(--accent-line);
      border-left-color: var(--accent);
      background: var(--accent-dim);
    }

    .callout--gold .callout__title {
      color: var(--accent-soft);
    }

    .callout--neutral {
      border-left-color: var(--text-faint);
    }

    .callout--neutral .callout__title {
      color: var(--text-soft);
    }

    /* --- Riferimenti numerici --------------------------------------------- */

    .stats {
      margin: 0 0 28px;
      padding: 18px 20px 16px;
      border: 1px solid var(--line);
      border-radius: var(--r-lg);
      background: rgba(255, 255, 255, 0.022);
    }

    .stats__title {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--text-faint);
      margin-bottom: 14px;
    }

    .stats__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
      gap: 10px;
    }

    .stat {
      padding: 12px 13px;
      border-radius: var(--r-sm);
      border: 1px solid var(--line);
      background: rgba(0, 0, 0, 0.24);
    }

    .stat__label {
      font-size: 10.5px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-faint);
    }

    .stat__value {
      margin-top: 5px;
      font-size: 17px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .stat__note {
      margin-top: 4px;
      font-size: 10.5px;
      color: var(--text-faint);
      line-height: 1.4;
    }

    .stat--gold .stat__value {
      color: var(--accent);
    }

    .stat--bull .stat__value {
      color: var(--bull);
    }

    .stat--bear .stat__value {
      color: var(--bear);
    }

    .stat--warn .stat__value {
      color: var(--warn);
    }

    .stats__caption,
    .scen__caption {
      display: flex;
      align-items: flex-start;
      gap: 7px;
      margin-top: 13px;
      padding-top: 11px;
      border-top: 1px solid var(--line);
      font-size: 11px;
      line-height: 1.5;
      color: var(--text-faint);
    }

    .stats__caption app-icon,
    .scen__caption app-icon {
      margin-top: 2px;
    }

    .scen__caption app-icon {
      color: var(--warn);
    }

    /* --- Scenari ---------------------------------------------------------- */

    .scen {
      margin: 0 0 28px;
    }

    .scen__title,
    .bal__title,
    .tl__title {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--accent-deep);
      margin-bottom: 13px;
    }

    .scen__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(230px, 100%), 1fr));
      gap: 12px;
    }

    .scen__card {
      padding: 16px 17px;
      border-radius: var(--r-md);
      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.024);
      border-top: 2px solid var(--line-strong);
    }

    .scen__label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12.5px;
      font-weight: 700;
      margin-bottom: 9px;
    }

    .scen__text {
      font-size: 13.6px;
      line-height: 1.62;
      color: var(--text-muted);
    }

    .scen__card--bull {
      border-top-color: var(--bull);
    }

    .scen__card--bull .scen__label {
      color: var(--bull);
    }

    .scen__card--bear {
      border-top-color: var(--bear);
    }

    .scen__card--bear .scen__label {
      color: var(--bear);
    }

    .scen__card--warn {
      border-top-color: var(--warn);
    }

    .scen__card--warn .scen__label {
      color: var(--warn);
    }

    .scen__card--gold {
      border-top-color: var(--accent);
    }

    .scen__card--gold .scen__label {
      color: var(--accent-soft);
    }

    .scen__card--neutral .scen__label {
      color: var(--text-soft);
    }

    /* --- Bilancio a due colonne -------------------------------------------- */

    .bal {
      margin: 0 0 28px;
    }

    .bal__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
      gap: 12px;
    }

    .bal__side {
      padding: 17px 19px;
      border-radius: var(--r-md);
      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.022);
    }

    .bal__head {
      display: flex;
      align-items: center;
      gap: 9px;
      font-size: 13px;
      font-weight: 700;
      padding-bottom: 11px;
      margin-bottom: 12px;
      border-bottom: 1px solid var(--line);
    }

    .bal__side ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    .bal__side li {
      position: relative;
      padding-left: 16px;
      font-size: 13.8px;
      line-height: 1.58;
      color: var(--text-muted);
    }

    .bal__side li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: currentColor;
      opacity: 0.5;
    }

    .bal__side--bull {
      border-color: rgba(74, 210, 149, 0.24);
      background: var(--bull-dim);
    }

    .bal__side--bull .bal__head {
      color: var(--bull);
    }

    .bal__side--bear {
      border-color: rgba(255, 95, 102, 0.24);
      background: var(--bear-dim);
    }

    .bal__side--bear .bal__head {
      color: var(--bear);
    }

    .bal__side--warn {
      border-color: rgba(240, 169, 59, 0.24);
      background: var(--warn-dim);
    }

    .bal__side--warn .bal__head {
      color: var(--warn);
    }

    .bal__side--gold .bal__head {
      color: var(--accent-soft);
    }

    .bal__side--neutral .bal__head {
      color: var(--text-soft);
    }

    /* --- Cronologia -------------------------------------------------------- */

    .tl {
      margin: 0 0 28px;
    }

    .tl ol {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 16px;
      border-left: 1px solid var(--line-strong);
      padding-left: 20px;
    }

    .tl li {
      position: relative;
    }

    .tl li::before {
      content: '';
      position: absolute;
      left: -25px;
      top: 6px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 4px rgba(var(--accent-rgb), 0.12);
    }

    .tl__when {
      font-size: 10.5px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent-deep);
    }

    .tl__head {
      font-size: 14px;
      font-weight: 600;
      margin: 4px 0 4px;
    }

    .tl__text {
      font-size: 13.6px;
      line-height: 1.6;
      color: var(--text-muted);
    }

    /* --- Citazione e nota --------------------------------------------------- */

    .quote {
      margin: 0 0 26px;
      padding: 4px 0 4px 22px;
      border-left: 3px solid var(--accent-line);
    }

    .quote p {
      font-family: var(--ff-serif);
      font-size: 18px;
      font-style: italic;
      line-height: 1.66;
      color: var(--text);
    }

    .quote cite {
      display: block;
      margin-top: 9px;
      font-size: 12px;
      font-style: normal;
      color: var(--text-faint);
    }

    .note {
      display: flex;
      align-items: flex-start;
      gap: 9px;
      margin: 0 0 24px;
      padding: 12px 14px;
      border-radius: var(--r-sm);
      background: rgba(255, 255, 255, 0.02);
      border: 1px dashed var(--line-strong);
      font-size: 12.2px;
      line-height: 1.6;
      color: var(--text-faint);
    }

    .note app-icon {
      margin-top: 2px;
    }

    @media (max-width: 700px) {
      .para {
        font-size: 16.4px;
        line-height: 1.72;
      }

      .para--lead {
        font-size: 18px;
      }

      .h2 {
        font-size: 19px;
        margin: 32px 0 14px;
        scroll-margin-top: 96px;
      }

      .ulist li,
      .olist li {
        font-size: 14.6px;
      }

      .callout,
      .stats,
      .scen__card,
      .bal__side {
        padding: 15px 16px;
      }

      .callout__text,
      .callout__list li {
        font-size: 13.8px;
      }

      .stats__grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
      }

      .stat__value {
        font-size: 15.5px;
      }

      .quote {
        padding-left: 16px;
      }

      .quote p {
        font-size: 16.5px;
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
