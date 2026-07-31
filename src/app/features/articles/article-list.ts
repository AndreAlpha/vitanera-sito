import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article, Category, CategorySlug } from '../../core/models/article.model';
import { ContentService } from '../../core/services/content.service';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { ArticleCard } from '../../shared/ui/article-card';
import { BiasBadge } from '../../shared/ui/bias-badge';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';
import { Timestamp } from '../../shared/ui/timestamp';

/**
 * Elenco delle analisi: serve sia l'archivio completo sia una singola categoria.
 *
 * Gli impaginati sono due soltanto — griglia di schede per l'archivio, elenco a
 * righe per una categoria — perché con ventinove categorie un taglio grafico
 * per ciascuna renderebbe il sito disordinato invece che vario.
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

  protected readonly activeTag = signal<string | null>(null);

  private readonly categoryInfo = computed(() => {
    const slug = this.category();
    return slug ? this.content.categoryBySlug(slug) : null;
  });

  /**
   * Uno slug sconosciuto ricade sull'archivio completo: meglio mostrare tutto
   * che una pagina che si contraddice fra intestazione ed elenco.
   */
  protected readonly articles = computed(() => {
    const info = this.categoryInfo();
    return info ? this.content.byCategory(info.slug) : this.content.articles();
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

  protected readonly layout = computed<'elenco' | 'griglia'>(() =>
    this.categoryInfo() ? 'elenco' : 'griglia',
  );

  protected readonly layoutNote = computed(() =>
    this.layout() === 'elenco'
      ? 'Elenco numerato dalla pubblicazione più recente: per ciascuna analisi i punti chiave, l’orientamento dichiarato e il livello di certezza.'
      : 'Griglia dell’archivio: una scheda per analisi, dalla più recente.',
  );

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

  protected readonly emptyTitle = computed(() =>
    this.activeTag() ? 'Nessuna analisi con questo tema' : 'Ancora nessuna pubblicazione',
  );

  protected readonly emptyText = computed(() => {
    const tag = this.activeTag();
    if (tag) {
      return `Nessuna delle analisi pubblicate riporta il tema «${tag}». Togli il filtro per vedere tutto ciò che è disponibile.`;
    }

    const info = this.categoryInfo();
    if (info) {
      return `L’archivio riparte da zero e su «${info.name}» non c’è ancora nulla. Le analisi di questo argomento compariranno qui, senza periodicità prestabilita.`;
    }

    return 'L’archivio riparte da zero: al momento non è stata pubblicata alcuna analisi. Le prossime compariranno qui, senza periodicità prestabilita.';
  });

  protected toggleTag(tag: string): void {
    this.activeTag.update((current) => (current === tag ? null : tag));
  }

  /** Numerazione decrescente dell'elenco: la più recente ha il numero più alto. */
  protected index(i: number): string {
    return `${this.filtered().length - i}`.padStart(2, '0');
  }

  /**
   * Le altre categorie dell'analisi: su una pagina di categoria dicono al
   * lettore da dove altro può ritrovare lo stesso testo.
   */
  protected otherCategories(article: Article): readonly Category[] {
    const current = this.category();
    return this.content
      .categoriesOf(article)
      .filter((c) => c.slug !== current)
      .slice(0, 3);
  }
}
