import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../ui/icon';
import {
  DISCLAIMER_CONFLICT,
  DISCLAIMER_LONG,
  DISCLAIMER_MEDIUM,
  DISCLAIMER_SHORT,
} from '../../core/config/site.config';

export type RiskNoticeVariant = 'line' | 'card' | 'full';

/**
 * Avvertenza sul rischio riutilizzabile in tutto il sito.
 *
 * - `line`  → una riga discreta, per schede ed elenchi
 * - `card`  → riquadro con titolo, per apertura articolo e sezioni
 * - `full`  → testo esteso, per chiusura articolo e pagine legali
 */
@Component({
  selector: 'app-risk-notice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    @switch (variant()) {
      @case ('line') {
        <p class="line">
          <app-icon name="alert" [size]="13" />
          <span>{{ short }}</span>
        </p>
      }
      @case ('card') {
        <aside class="notice" [class.notice--tight]="tight()">
          <div class="notice__head">
            <app-icon name="shield" [size]="16" />
            <span>{{ heading() }}</span>
          </div>
          <p class="notice__body">{{ medium }}</p>
          <a class="notice__link" routerLink="/avvertenze">
            Avvertenze complete e informativa sui rischi
            <app-icon name="arrow-right" [size]="14" />
          </a>
        </aside>
      }
      @case ('full') {
        <section class="full">
          <header class="full__head">
            <app-icon name="scale" [size]="18" />
            <div>
              <h3>{{ heading() }}</h3>
              <p class="full__sub">
                Leggere con attenzione prima di utilizzare i contenuti del sito.
              </p>
            </div>
          </header>
          <div class="full__body">
            @for (p of paragraphs; track $index) {
              <p>{{ p }}</p>
            }
            <p class="full__conflict"><strong>Conflitti di interesse.</strong> {{ conflict }}</p>
          </div>
          <div class="full__foot">
            <a class="btn btn--ghost btn--sm" routerLink="/avvertenze">Avvertenze e rischi</a>
            <a class="btn btn--ghost btn--sm" routerLink="/note-legali">Note legali</a>
            <a class="btn btn--ghost btn--sm" routerLink="/privacy">Privacy e cookie</a>
          </div>
        </section>
      }
    }
  `,
  styles: `
    :host {
      display: block;
    }

    .line {
      display: flex;
      align-items: flex-start;
      gap: 7px;
      font-size: 11.5px;
      line-height: 1.45;
      color: var(--text-faint);
    }

    .line app-icon {
      margin-top: 2px;
      color: var(--warn);
      opacity: 0.85;
    }

    .notice {
      border: 1px solid rgba(240, 169, 59, 0.28);
      background:
        linear-gradient(180deg, rgba(240, 169, 59, 0.07), rgba(240, 169, 59, 0.015)),
        rgba(20, 17, 12, 0.6);
      border-radius: var(--r-md);
      padding: 16px 18px;
    }

    .notice--tight {
      padding: 12px 14px;
    }

    .notice__head {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--warn);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .notice__body {
      font-size: 13px;
      line-height: 1.62;
      color: var(--text-muted);
    }

    .notice__link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 10px;
      font-size: 12px;
      font-weight: 600;
      color: var(--gold-soft);
      transition: gap 0.25s var(--ease);
    }

    .notice__link:hover {
      gap: 10px;
    }

    .full {
      border: 1px solid var(--line);
      border-radius: var(--r-lg);
      background: rgba(255, 255, 255, 0.02);
      padding: 24px;
    }

    .full__head {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--line);
      color: var(--gold);
    }

    .full__head h3 {
      font-size: 15px;
      letter-spacing: -0.01em;
      color: var(--text);
    }

    .full__sub {
      font-size: 12px;
      color: var(--text-faint);
      margin-top: 3px;
    }

    .full__body {
      display: flex;
      flex-direction: column;
      gap: 11px;
      padding-top: 16px;
    }

    .full__body p {
      font-size: 12.5px;
      line-height: 1.68;
      color: var(--text-muted);
      text-align: justify;
      hyphens: auto;
    }

    .full__conflict strong {
      color: var(--text-soft);
    }

    .full__foot {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 18px;
      padding-top: 16px;
      border-top: 1px solid var(--line);
    }

    @media (max-width: 620px) {
      .notice {
        padding: 14px 15px;
      }

      .full {
        padding: 18px 16px;
      }

      /* Su colonna stretta il testo giustificato apre buchi fra le parole. */
      .full__body p {
        text-align: left;
        hyphens: none;
      }

      .full__foot .btn {
        flex: 1 0 100%;
      }
    }
  `,
})
export class RiskNotice {
  readonly variant = input<RiskNoticeVariant>('card');
  readonly tight = input<boolean>(false);
  readonly title = input<string | null>(null);

  protected readonly short = DISCLAIMER_SHORT;
  protected readonly medium = DISCLAIMER_MEDIUM;
  protected readonly conflict = DISCLAIMER_CONFLICT;
  protected readonly paragraphs = DISCLAIMER_LONG;

  protected readonly heading = computed(
    () =>
      this.title() ??
      (this.variant() === 'full' ? 'Avvertenze legali e informativa sui rischi' : 'Avvertenza'),
  );
}
