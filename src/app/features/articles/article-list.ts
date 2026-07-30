import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategorySlug } from '../../core/models/article.model';
import { ContentService, formatTime } from '../../core/services/content.service';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { ArticleCard } from '../../shared/ui/article-card';
import { BiasBadge } from '../../shared/ui/bias-badge';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';
import { Timestamp } from '../../shared/ui/timestamp';

/**
 * Elenco delle analisi.
 *
 * Ogni sezione ha un proprio impaginato — dossier numerato, matrice
 * cross-asset, dispaccio cronologico, griglia d'archivio — costruito però sugli
 * stessi token di colore, spaziatura e tipografia, così che le pagine risultino
 * distinte ma coerenti fra loro.
 */
@Component({
  selector: 'app-article-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, ArticleCard, RiskNotice, Icon, BiasBadge, Timestamp],
  templateUrl: './article-list.html',
  styleUrl: './article-list.scss',
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

  /** Impaginato dedicato alla sezione. */
  protected readonly layout = computed(() => {
    switch (this.category()) {
      case 'fondamentali':
        return 'dossier';
      case 'correlazioni':
        return 'matrice';
      case 'geopolitica':
        return 'dispaccio';
      default:
        return 'griglia';
    }
  });

  protected readonly layoutNote = computed(() => {
    switch (this.layout()) {
      case 'dossier':
        return 'Dossier in ordine cronologico inverso: fatti confermati, effetti descritti e condizioni di invalidazione.';
      case 'matrice':
        return 'Matrice cross-asset: ogni scheda riporta gli strumenti osservati nel confronto.';
      case 'dispaccio':
        return 'Dispaccio cronologico: le schede sono ordinate per orario di pubblicazione.';
      default:
        return 'Tutte le pubblicazioni, dalla più recente.';
    }
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

  protected readonly otherSections = computed(() =>
    this.categories.filter((c) => c.slug !== this.category()),
  );

  protected toggleTag(tag: string): void {
    this.activeTag.update((current) => (current === tag ? null : tag));
  }

  /** Numerazione decrescente del dossier: la più recente ha il numero più alto. */
  protected index(i: number): string {
    return `${this.filtered().length - i}`.padStart(2, '0');
  }

  protected time(iso: string): string {
    return formatTime(iso);
  }

  protected routeFor(slug: string): string {
    return slug === 'previsioni' ? '/orizzonti' : `/${slug}`;
  }
}
