import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DISCLAIMER_SHORT } from '../../core/config/site.config';

/**
 * Avvertenza sintetica: una riga e un rimando.
 *
 * Era un componente a tre varianti — riga, riquadro ambrato, testo esteso in
 * sette paragrafi — e le ultime due comparivano dodici volte in giro per il
 * sito, ripetendo parola per parola ciò che sta già in `/avvertenze`. Ne resta
 * una forma sola: la si mette dove il lettore incontra un giudizio (un'analisi,
 * uno scenario, la metodologia), e il testo completo vive nella sua pagina.
 */
@Component({
  selector: 'app-risk-notice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <p class="notice">
      {{ short }}
      <a routerLink="/avvertenze">Avvertenze complete</a>
    </p>
  `,
  styles: `
    :host {
      display: block;
    }

    .notice {
      padding-top: var(--s-4);
      border-top: 1px solid var(--line);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .notice a {
      color: var(--text-muted);
      text-decoration: underline;
      text-underline-offset: 3px;
      white-space: nowrap;
    }

    .notice a:hover {
      color: var(--text-soft);
    }
  `,
})
export class RiskNotice {
  protected readonly short = DISCLAIMER_SHORT;
}
