import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DRIVERS, MARKET_REFERENCES, MARKET_STRIP } from '../../core/data/markets.data';
import { DISCLAIMER_DATA, SITE } from '../../core/config/site.config';
import { ContentService, formatDate } from '../../core/services/content.service';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { ArticleCard } from '../../shared/ui/article-card';
import { Icon } from '../../shared/ui/icon';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, ArticleCard, RiskNotice],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly content = inject(ContentService);

  protected readonly site = SITE;
  protected readonly references = MARKET_REFERENCES;
  protected readonly strip = MARKET_STRIP;
  protected readonly drivers = DRIVERS;
  protected readonly dataNote = DISCLAIMER_DATA;

  protected readonly latest = this.content.latest;
  protected readonly categories = this.content.categories;

  protected readonly others = computed(() => this.content.articles().slice(1));

  protected readonly lastUpdate = computed(() => {
    const a = this.content.latest();
    return a ? formatDate(a.publishedAt) : '—';
  });

  /** Distribuzione delle analisi pubblicate per sezione. */
  protected readonly distribution = computed(() => {
    const total = this.content.articles().length || 1;
    return this.categories.map((c) => {
      const count = this.content.countByCategory(c.slug);
      return { name: c.name, icon: c.icon, count, share: Math.round((count / total) * 100) };
    });
  });

  protected readonly horizons = [
    {
      key: 'breve',
      title: 'Breve termine',
      range: 'Giorni · settimane',
      icon: 'bolt',
      text:
        'Dominano dati macro in uscita, reazione ai comunicati delle banche centrali e notizie geopolitiche. È ' +
        'l’orizzonte più rumoroso e meno affidabile.',
    },
    {
      key: 'medio',
      title: 'Medio termine',
      range: 'Settimane · mesi',
      icon: 'layers',
      text:
        'Pesano la traiettoria dell’inflazione, il percorso atteso dei tassi e la direzione dei rendimenti reali. ' +
        'Le correlazioni tornano più leggibili.',
    },
    {
      key: 'lungo',
      title: 'Lungo termine',
      range: 'Trimestri · anni',
      icon: 'horizon',
      text:
        'Contano fattori strutturali: credibilità monetaria, debito pubblico, riserve delle banche centrali e ' +
        'frammentazione geopolitica.',
    },
  ];
}
