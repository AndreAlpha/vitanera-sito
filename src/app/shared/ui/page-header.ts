import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from './icon';

/** Intestazione comune delle pagine interne. */
@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <header class="head anim-up">
      <div class="head__main">
        @if (icon(); as name) {
          <span class="head__icon"><app-icon [name]="name" [size]="22" /></span>
        }
        <div>
          <p class="eyebrow">{{ eyebrow() }}</p>
          <h1>{{ heading() }}</h1>
        </div>
      </div>
      @if (description(); as text) {
        <p class="head__desc">{{ text }}</p>
      }
      <div class="head__slot"><ng-content /></div>
      <div class="rule-gold head__rule"></div>
    </header>
  `,
  styles: `
    :host {
      display: block;
    }

    .head {
      padding: 12px 0 22px;
    }

    .head__main {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .head__icon {
      display: grid;
      place-items: center;
      width: 52px;
      height: 52px;
      flex: none;
      border-radius: 17px;
      border: 1px solid var(--accent-line);
      background: linear-gradient(
        140deg,
        rgba(var(--accent-rgb), 0.18),
        rgba(var(--accent-rgb), 0.03)
      );
      color: var(--accent);
    }

    h1 {
      margin-top: 5px;
      font-size: clamp(26px, 3.4vw, 38px);
      letter-spacing: -0.035em;
    }

    .head__desc {
      max-width: 78ch;
      margin-top: 16px;
      font-size: 14.5px;
      line-height: 1.7;
      color: var(--text-muted);
    }

    .head__slot:empty {
      display: none;
    }

    .head__slot {
      margin-top: 18px;
    }

    .head__rule {
      margin-top: 24px;
    }

    @media (max-width: 620px) {
      .head {
        padding: 6px 0 18px;
      }

      .head__main {
        gap: 12px;
      }

      .head__icon {
        width: 42px;
        height: 42px;
        border-radius: 14px;
      }

      .head__desc {
        margin-top: 13px;
        font-size: 13.6px;
      }

      .head__slot {
        margin-top: 15px;
      }

      .head__rule {
        margin-top: 20px;
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
