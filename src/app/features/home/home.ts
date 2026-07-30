import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MARKET_REFERENCES, MARKET_STRIP } from '../../core/data/markets.data';
import { DISCLAIMER_DATA, SITE } from '../../core/config/site.config';
import { ContentService } from '../../core/services/content.service';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { ArticleCard } from '../../shared/ui/article-card';
import { Icon } from '../../shared/ui/icon';
import { Timestamp } from '../../shared/ui/timestamp';
import { OperationalSignalCard } from './operational-signal';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, ArticleCard, RiskNotice, Timestamp, OperationalSignalCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly content = inject(ContentService);

  protected readonly site = SITE;
  protected readonly references = MARKET_REFERENCES;
  protected readonly strip = MARKET_STRIP;
  protected readonly dataNote = DISCLAIMER_DATA;

  protected readonly latest = this.content.latest;
  protected readonly categories = this.content.categories;

  protected readonly others = computed(() => this.content.articles().slice(1, 5));

  protected categoryName(slug: string): string {
    return this.categories.find((c) => c.slug === slug)?.name ?? 'Analisi';
  }

  protected routeFor(slug: string): string {
    return slug === 'previsioni' ? '/orizzonti' : `/${slug}`;
  }

  /** Tinta della sezione, per far vedere in anteprima il suo colore. */
  protected accentFor(slug: string): string {
    return slug === 'previsioni' ? 'orizzonti' : slug;
  }
}
