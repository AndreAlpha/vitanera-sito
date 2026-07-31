import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MARKET_REFERENCES, MARKET_STRIP } from '../../core/data/markets.data';
import { CATEGORY_FAMILIES, DISCLAIMER_DATA, SITE } from '../../core/config/site.config';
import { ContentService } from '../../core/services/content.service';
import {
  CalendarService,
  calendarDate,
  calendarDayLabel,
  calendarTime,
} from '../../core/services/calendar.service';
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
  protected readonly calendar = inject(CalendarService);

  protected readonly site = SITE;
  protected readonly references = MARKET_REFERENCES;
  protected readonly strip = MARKET_STRIP;
  protected readonly dataNote = DISCLAIMER_DATA;
  protected readonly families = CATEGORY_FAMILIES;

  protected readonly latest = this.content.latest;
  protected readonly empty = this.content.empty;

  protected readonly others = computed(() => this.content.articles().slice(1, 5));

  /** Categorie con almeno un'analisi: finché l'archivio è vuoto non compaiono. */
  protected readonly activeCategories = computed(() => this.content.activeCategories().slice(0, 8));

  /** Le prossime uscite del calendario, di entrambe le aree. */
  protected readonly upcoming = computed(() => this.calendar.upcoming(undefined, 6));

  protected readonly nextEvents = computed(() => this.calendar.nextEvents(undefined, 4));

  protected readonly indicatorCount = this.calendar.indicators.length;
  protected readonly releaseCount = computed(() => this.calendar.releaseCount());

  protected categoryName(slug: string): string {
    return this.content.categoryBySlug(slug)?.name ?? 'Analisi';
  }

  /** Categoria principale di un'analisi, per la riga di elenco. */
  protected primaryName(article: { categories: readonly string[] }): string {
    return this.categoryName(article.categories[0] ?? '');
  }

  protected areaPath(area: 'usa' | 'euro'): string {
    return this.calendar.areaPath(area);
  }

  protected day(iso: string): string {
    return calendarDayLabel(iso);
  }

  protected time(iso: string): string {
    return calendarTime(iso);
  }

  protected date(iso: string): string {
    return calendarDate(iso);
  }
}
