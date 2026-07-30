import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../core/models/article.model';
import { ContentService } from '../../core/services/content.service';
import { BiasBadge } from './bias-badge';
import { Icon } from './icon';
import { Timestamp } from './timestamp';

/**
 * Scheda di anteprima di un'analisi.
 * Ogni variante riporta comunque l'avvertenza sintetica.
 */
@Component({
  selector: 'app-article-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, BiasBadge, Timestamp],
  template: `
    <a
      class="card card--hover art"
      [class.art--feature]="feature()"
      [routerLink]="['/analisi', article().slug]"
    >
      <div class="art__top">
        <span class="chip chip--gold chip--sm">
          <app-icon [name]="categoryIcon()" [size]="12" />
          {{ categoryName() }}
        </span>
        <span class="art__date"
          ><app-timestamp [iso]="article().publishedAt" [withIcon]="true"
        /></span>
      </div>

      <p class="art__kicker">{{ article().kicker }}</p>
      <h3 class="art__title">{{ article().title }}</h3>
      <p class="art__dek">{{ article().dek }}</p>

      @if (feature() && article().takeaways.length) {
        <ul class="art__points">
          @for (t of article().takeaways.slice(0, 3); track t) {
            <li><app-icon name="check" [size]="13" />{{ t }}</li>
          }
        </ul>
      }

      <div class="art__meta">
        @if (article().bias; as bias) {
          <app-bias-badge
            [direction]="bias.direction"
            [strength]="bias.strength"
            [prefix]="bias.asset"
          />
        }
        <span class="chip chip--sm chip--neutral">
          <app-icon name="target" [size]="11" />
          Certezza {{ article().certainty }}
        </span>
        <span class="art__read">
          <app-icon name="clock" [size]="12" />
          {{ article().readingMinutes }} min
        </span>
      </div>

      <p class="art__legal">
        <app-icon name="alert" [size]="11" />
        Contenuto informativo · non è consulenza finanziaria
      </p>

      <span class="art__cta">
        Leggi l’analisi
        <app-icon name="arrow-right" [size]="14" />
      </span>
    </a>
  `,
  styles: `
    :host {
      display: block;
      height: 100%;
    }

    .art {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 20px 22px 18px;
      overflow: hidden;
    }

    .art::after {
      content: '';
      position: absolute;
      inset: 0 0 auto;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--accent-line), transparent);
      opacity: 0;
      transition: opacity 0.4s var(--ease);
    }

    .art:hover::after {
      opacity: 1;
    }

    .art__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 14px;
    }

    .art__date {
      font-size: 11px;
      color: var(--text-faint);
      white-space: nowrap;
    }

    .art__kicker {
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--accent-deep);
      margin-bottom: 7px;
    }

    .art__title {
      font-size: 18px;
      line-height: 1.24;
      margin-bottom: 9px;
      transition: color 0.25s var(--ease);
    }

    .art--feature .art__title {
      font-size: 23px;
    }

    .art:hover .art__title {
      color: var(--accent-soft);
    }

    .art__dek {
      font-size: 13.2px;
      line-height: 1.62;
      color: var(--text-muted);
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .art--feature .art__dek {
      -webkit-line-clamp: 4;
      line-clamp: 4;
    }

    .art__points {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 7px;
      margin-top: 15px;
      padding: 14px 15px;
      border-radius: var(--r-md);
      background: rgba(255, 255, 255, 0.025);
      border: 1px solid var(--line);
    }

    .art__points li {
      display: flex;
      gap: 8px;
      font-size: 12.3px;
      line-height: 1.5;
      color: var(--text-soft);
    }

    .art__points app-icon {
      margin-top: 2px;
      color: var(--accent);
    }

    .art__meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 7px;
      margin-top: auto;
      padding-top: 16px;
    }

    .art__read {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 11px;
      color: var(--text-faint);
    }

    .art__legal {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 12px;
      padding-top: 11px;
      border-top: 1px solid var(--line);
      font-size: 10.5px;
      color: var(--text-faint);
    }

    .art__legal app-icon {
      color: var(--warn);
      opacity: 0.8;
    }

    .art__cta {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      margin-top: 12px;
      font-size: 12.5px;
      font-weight: 600;
      color: var(--accent);
      transition: gap 0.3s var(--ease);
    }

    .art:hover .art__cta {
      gap: 12px;
    }
  `,
})
export class ArticleCard {
  private readonly content = inject(ContentService);

  readonly article = input.required<Article>();
  readonly feature = input<boolean>(false);

  protected readonly categoryName = computed(
    () => this.content.categoryBySlug(this.article().category)?.name ?? 'Analisi',
  );

  protected readonly categoryIcon = computed(
    () => this.content.categoryBySlug(this.article().category)?.icon ?? 'archive',
  );
}
