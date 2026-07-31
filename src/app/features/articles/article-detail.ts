import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { ContentService, formatDateTime } from '../../core/services/content.service';
import { ContentBlock } from './content-block';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { ArticleCard } from '../../shared/ui/article-card';
import { BiasBadge } from '../../shared/ui/bias-badge';
import { Icon } from '../../shared/ui/icon';
import { Timestamp } from '../../shared/ui/timestamp';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, ContentBlock, RiskNotice, ArticleCard, BiasBadge, Timestamp],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss',
  // Un'analisi può stare in parecchie categorie: la riga di testata deve andare
  // a capo invece di schiacciare la data di pubblicazione.
  styles: `
    .hero__top {
      flex-wrap: wrap;
    }

    .hero__cats {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 7px;
      min-width: 0;
    }

    .hero__cat {
      border-color: var(--line);
      color: var(--text-muted);
      transition:
        color 0.25s var(--ease),
        border-color 0.25s var(--ease);
    }

    .hero__cat:hover {
      color: var(--accent-soft);
      border-color: var(--accent-line);
    }
  `,
  host: { '(window:scroll)': 'onScroll()' },
})
export class ArticleDetail {
  private readonly content = inject(ContentService);

  readonly slug = input.required<string>();

  protected readonly article = computed(() => this.content.bySlug(this.slug()));
  protected readonly toc = computed(() => {
    const a = this.article();
    return a ? this.content.toc(a) : [];
  });
  protected readonly related = computed(() => {
    const a = this.article();
    return a ? this.content.related(a) : [];
  });
  protected readonly categories = computed(() => {
    const a = this.article();
    return a ? this.content.categoriesOf(a) : [];
  });
  protected readonly primary = computed(() => this.categories()[0] ?? null);
  protected readonly secondary = computed(() => this.categories().slice(1));
  protected readonly published = computed(() => {
    const a = this.article();
    return a ? formatDateTime(a.publishedAt) : '';
  });

  protected readonly progress = signal(0);
  protected readonly activeAnchor = signal('');
  protected readonly copied = signal(false);

  protected onScroll(): void {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    this.progress.set(max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0);

    let current = '';
    for (const entry of this.toc()) {
      const el = document.getElementById(entry.anchor);
      if (el && el.getBoundingClientRect().top < 180) {
        current = entry.anchor;
      }
    }
    this.activeAnchor.set(current);
  }

  protected print(): void {
    window.print();
  }

  protected async copyLink(): Promise<void> {
    try {
      await navigator.clipboard.writeText(window.location.href);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2200);
    } catch {
      // Alcuni browser bloccano la scrittura negli appunti: nessuna azione.
    }
  }

  protected horizonLabel(h: string): string {
    switch (h) {
      case 'breve':
        return 'Breve termine';
      case 'medio':
        return 'Medio termine';
      default:
        return 'Lungo termine';
    }
  }
}
