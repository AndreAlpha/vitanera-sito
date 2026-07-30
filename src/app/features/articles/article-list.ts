import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategorySlug } from '../../core/models/article.model';
import { ContentService } from '../../core/services/content.service';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { ArticleCard } from '../../shared/ui/article-card';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

@Component({
  selector: 'app-article-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, ArticleCard, RiskNotice, Icon],
  template: `
    <app-page-header
      [eyebrow]="eyebrow()"
      [heading]="heading()"
      [description]="description()"
      [icon]="icon()"
    >
      <div class="filters">
        <button
          type="button"
          class="chip"
          [class.chip--gold]="!activeTag()"
          (click)="activeTag.set(null)"
        >
          Tutti i temi
          <span class="count">{{ articles().length }}</span>
        </button>
        @for (tag of tags(); track tag) {
          <button
            type="button"
            class="chip"
            [class.chip--gold]="activeTag() === tag"
            (click)="toggleTag(tag)"
          >
            {{ tag }}
          </button>
        }
      </div>
    </app-page-header>

    <app-risk-notice variant="card" title="Come leggere questa sezione" />

    @if (filtered().length) {
      <div class="grid">
        @for (article of filtered(); track article.slug) {
          <app-article-card
            [article]="article"
            [feature]="article.featured === true && !activeTag()"
          />
        }
      </div>
    } @else {
      <div class="empty card card--pad">
        <app-icon name="archive" [size]="26" />
        <p class="empty__title">Nessuna analisi in questa selezione</p>
        <p class="empty__text">
          La sezione è attiva ma non contiene ancora contenuti corrispondenti al filtro scelto. Le
          pubblicazioni non seguono alcuna periodicità prestabilita.
        </p>
        <a class="btn btn--ghost btn--sm" routerLink="/analisi">Vedi tutte le analisi</a>
      </div>
    }

    <section class="sections">
      <p class="eyebrow">Altre sezioni</p>
      <div class="sections__grid">
        @for (c of categories; track c.slug) {
          @if (c.slug !== category()) {
            <a
              class="card card--hover sec"
              [routerLink]="['/', c.slug === 'previsioni' ? 'orizzonti' : c.slug]"
            >
              <span class="sec__icon"><app-icon [name]="c.icon" [size]="17" /></span>
              <span class="sec__body">
                <span class="sec__name">{{ c.name }}</span>
                <span class="sec__tag">{{ c.tagline }}</span>
              </span>
              <app-icon name="chevron-right" [size]="15" />
            </a>
          }
        }
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }

    .filters .chip {
      cursor: pointer;
      transition:
        border-color 0.25s var(--ease),
        color 0.25s var(--ease),
        background 0.25s var(--ease);
    }

    .filters .chip:hover {
      border-color: var(--gold-line);
      color: var(--gold-soft);
    }

    .count {
      margin-left: 5px;
      opacity: 0.6;
      font-variant-numeric: tabular-nums;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 18px;
      margin-top: 24px;
    }

    .empty {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      margin-top: 24px;
      color: var(--text-muted);
    }

    .empty app-icon {
      color: var(--gold-deep);
    }

    .empty__title {
      font-size: 16px;
      font-weight: 700;
      color: var(--text);
    }

    .empty__text {
      font-size: 13.5px;
      line-height: 1.65;
      max-width: 62ch;
    }

    .sections {
      margin-top: 46px;
      padding-top: 28px;
      border-top: 1px solid var(--line);
    }

    .sections__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 12px;
      margin-top: 14px;
    }

    .sec {
      display: flex;
      align-items: center;
      gap: 13px;
      padding: 15px 17px;
      color: var(--text-muted);
    }

    .sec__icon {
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      flex: none;
      border-radius: 12px;
      border: 1px solid var(--gold-line);
      background: var(--gold-dim);
      color: var(--gold);
    }

    .sec__body {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
    }

    .sec__name {
      font-size: 14px;
      font-weight: 600;
      color: var(--text);
    }

    .sec__tag {
      font-size: 11.5px;
      color: var(--text-faint);
    }
  `,
})
export class ArticleList {
  private readonly content = inject(ContentService);

  /** Valorizzata dai dati di rotta; `null` per l'archivio completo. */
  readonly category = input<CategorySlug | null>(null);

  protected readonly categories = this.content.categories;
  protected readonly activeTag = signal<string | null>(null);

  protected readonly articles = computed(() => {
    const slug = this.category();
    return slug ? this.content.byCategory(slug) : this.content.articles();
  });

  protected readonly tags = computed(() => {
    const set = new Set<string>();
    for (const a of this.articles()) {
      for (const t of a.tags) {
        set.add(t);
      }
    }
    return [...set].sort((a, b) => a.localeCompare(b, 'it'));
  });

  protected readonly filtered = computed(() => {
    const tag = this.activeTag();
    return tag ? this.articles().filter((a) => a.tags.includes(tag)) : this.articles();
  });

  private readonly categoryInfo = computed(() => {
    const slug = this.category();
    return slug ? this.content.categoryBySlug(slug) : null;
  });

  protected readonly heading = computed(() => this.categoryInfo()?.name ?? 'Archivio analisi');

  protected readonly eyebrow = computed(
    () => this.categoryInfo()?.tagline ?? 'Tutte le pubblicazioni',
  );

  protected readonly icon = computed(() => this.categoryInfo()?.icon ?? 'archive');

  protected readonly description = computed(
    () =>
      this.categoryInfo()?.description ??
      'Tutte le analisi pubblicate, dalla più recente. Le pubblicazioni non seguono alcuna periodicità prestabilita ' +
        'e hanno finalità esclusivamente informative e didattiche.',
  );

  protected toggleTag(tag: string): void {
    this.activeTag.update((current) => (current === tag ? null : tag));
  }
}
