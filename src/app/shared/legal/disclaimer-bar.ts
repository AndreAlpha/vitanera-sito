import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../ui/icon';

/**
 * Barra permanente in cima al sito. Non è chiudibile: l'avvertenza deve
 * restare visibile in ogni pagina e in ogni momento della navigazione.
 */
@Component({
  selector: 'app-disclaimer-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    <div class="bar no-print" role="note">
      <app-icon name="alert" [size]="13" />
      <p>
        <strong>Avvertenza permanente.</strong>
        <span class="d-md">Vitanera non è una testata giornalistica registrata.</span>
        I contenuti sono informativi e didattici e
        <strong>non costituiscono consulenza finanziaria</strong> né raccomandazione di
        investimento.
      </p>
      <a routerLink="/avvertenze">
        Dettagli
        <app-icon name="chevron-right" [size]="12" />
      </a>
    </div>
  `,
  styles: `
    :host {
      display: block;
      position: relative;
      z-index: 60;
    }

    .bar {
      display: flex;
      align-items: center;
      gap: 10px;
      min-height: var(--alert-h);
      padding: 6px 22px;
      background: linear-gradient(
        90deg,
        rgba(240, 169, 59, 0.14),
        rgba(169, 118, 31, 0.06) 60%,
        transparent
      );
      border-bottom: 1px solid rgba(240, 169, 59, 0.2);
      color: var(--text-soft);
      font-size: 11.8px;
      line-height: 1.35;
    }

    .bar > app-icon {
      color: var(--warn);
      flex: none;
    }

    .bar p {
      flex: 1;
      min-width: 0;
    }

    .bar strong {
      color: var(--gold-soft);
      font-weight: 700;
    }

    .bar a {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      flex: none;
      font-weight: 700;
      color: var(--gold);
      border-bottom: 1px solid transparent;
      transition: border-color 0.25s var(--ease);
    }

    .bar a:hover {
      border-bottom-color: var(--gold);
    }

    @media (max-width: 900px) {
      .d-md {
        display: none;
      }

      .bar {
        padding: 6px 14px;
        font-size: 11px;
      }
    }
  `,
})
export class DisclaimerBar {}
