import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { Icon } from '../../shared/ui/icon';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, RiskNotice],
  template: `
    <section class="nf">
      <span class="nf__code">404</span>
      <h1>Questa pagina non esiste</h1>
      <p class="nf__text">
        L’indirizzo richiesto non corrisponde ad alcun contenuto pubblicato. Può essere stato
        rimosso, rinominato o non essere mai esistito.
      </p>

      <div class="nf__actions">
        <a class="btn btn--gold" routerLink="/">Torna alla panoramica</a>
        <a class="btn btn--ghost" routerLink="/analisi">Archivio analisi</a>
      </div>

      <div class="nf__links">
        <p class="eyebrow">Sezioni disponibili</p>
        <div class="nf__grid">
          @for (c of categories; track c.slug) {
            <a
              class="nf__link"
              [routerLink]="['/', c.slug === 'previsioni' ? 'orizzonti' : c.slug]"
            >
              <app-icon [name]="c.icon" [size]="15" />
              {{ c.name }}
            </a>
          }
          <a class="nf__link" routerLink="/glossario"
            ><app-icon name="book" [size]="15" />Glossario</a
          >
          <a class="nf__link" routerLink="/metodologia"
            ><app-icon name="compass" [size]="15" />Metodologia</a
          >
          <a class="nf__link" routerLink="/avvertenze"
            ><app-icon name="shield" [size]="15" />Avvertenze</a
          >
        </div>
      </div>
    </section>

    <app-risk-notice variant="card" />
  `,
  styles: `
    :host {
      display: block;
    }

    .nf {
      padding: 60px 0 40px;
      max-width: 70ch;
    }

    .nf__code {
      display: inline-block;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.2em;
      color: var(--accent-deep);
      margin-bottom: 14px;
    }

    h1 {
      font-size: clamp(28px, 4vw, 42px);
      letter-spacing: -0.035em;
    }

    .nf__text {
      margin-top: 16px;
      font-size: 15px;
      line-height: 1.7;
      color: var(--text-muted);
    }

    .nf__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 24px;
    }

    .nf__links {
      margin-top: 40px;
      padding-top: 24px;
      border-top: 1px solid var(--line);
    }

    .nf__grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 14px;
    }

    .nf__link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 15px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.025);
      font-size: 12.5px;
      color: var(--text-muted);
      transition:
        border-color 0.25s var(--ease),
        color 0.25s var(--ease);
    }

    .nf__link:hover {
      border-color: var(--accent-line);
      color: var(--accent-soft);
    }

    .nf__link app-icon {
      color: var(--accent-deep);
    }
  `,
})
export class NotFound {
  private readonly content = inject(ContentService);
  protected readonly categories = this.content.categories;
}
