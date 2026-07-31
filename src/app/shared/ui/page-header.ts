import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from './icon';

/**
 * Intestazione comune delle pagine interne.
 *
 * L'icona c'è ancora, ma alta quanto il sopratitolo che accompagna: era una
 * piastrella di 52 pixel in sfumatura, seguita da un filetto dorato, e su ogni
 * pagina rubava la scena al titolo che doveva soltanto introdurre.
 */
@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <header class="head anim-in">
      @if (eyebrow() || icon()) {
        <p class="eyebrow head__eyebrow">
          @if (icon(); as name) {
            <app-icon [name]="name" [size]="13" />
          }
          {{ eyebrow() }}
        </p>
      }
      <h1>{{ heading() }}</h1>
      @if (description(); as text) {
        <p class="head__desc">{{ text }}</p>
      }
      <div class="head__slot"><ng-content /></div>
    </header>
  `,
  styles: `
    :host {
      display: block;
    }

    .head {
      padding-bottom: var(--s-7);
      margin-bottom: var(--s-7);
      border-bottom: 1px solid var(--line);
    }

    .head__eyebrow {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      margin-bottom: var(--s-3);
      color: var(--accent);
    }

    h1 {
      font-size: var(--t-2xl);
      font-weight: 600;
      letter-spacing: -0.025em;
      max-width: 26ch;
    }

    .head__desc {
      max-width: var(--measure);
      margin-top: var(--s-4);
      font-size: var(--t-base);
      line-height: var(--lh-loose);
      color: var(--text-muted);
    }

    .head__slot:empty {
      display: none;
    }

    .head__slot {
      margin-top: var(--s-5);
    }

    @media (max-width: 620px) {
      .head {
        padding-bottom: var(--s-6);
        margin-bottom: var(--s-6);
      }

      h1 {
        font-size: var(--t-xl);
      }

      .head__desc {
        font-size: var(--t-sm);
      }
    }
  `,
})
export class PageHeader {
  readonly eyebrow = input<string>('');
  readonly heading = input.required<string>();
  readonly description = input<string | null>(null);
  readonly icon = input<string | null>(null);
}
