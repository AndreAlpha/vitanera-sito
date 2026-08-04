import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../core/models/article.model';
import { ContentService } from '../../core/services/content.service';
import { BiasBadge } from './bias-badge';
import { Icon } from './icon';
import { Timestamp } from './timestamp';

/**
 * Scheda di anteprima di un'analisi.
 *
 * Portava, sotto ogni copia, la riga «Contenuto informativo · non è consulenza
 * finanziaria»: in una griglia da nove schede erano nove volte la stessa frase
 * nella stessa schermata. L'avvertenza sta nel piè di pagina e in apertura
 * d'archivio, una volta sola.
 */
@Component({
  selector: 'app-article-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, BiasBadge, Timestamp],
  template: `
    <a
      class="card card--link art"
      [class.art--feature]="feature()"
      [routerLink]="['/analisi', article().slug]"
    >
      <p class="art__kicker">
        <app-icon [name]="primaryIcon()" [size]="12" />
        {{ primaryName() }}
        @if (verdict(); as v) {
          <span class="art__verdict" [attr.data-verdict]="v.key">{{ v.label }}</span>
        }
      </p>

      <h3 class="art__title">{{ article().title }}</h3>
      <p class="art__dek">{{ article().dek }}</p>

      @if (feature() && article().takeaways.length) {
        <ul class="art__points">
          @for (t of article().takeaways.slice(0, 3); track t) {
            <li>{{ t }}</li>
          }
        </ul>
      }

      <div class="art__foot">
        @if (article().bias; as bias) {
          <app-bias-badge
            [direction]="bias.direction"
            [strength]="bias.strength"
            [prefix]="bias.asset"
          />
        }
        @for (c of secondary(); track c.slug) {
          <span class="chip">{{ c.short }}</span>
        }
        @if (hidden(); as n) {
          <span class="chip" [attr.title]="hiddenNames()">+{{ n }}</span>
        }

        <span class="art__when">
          <app-timestamp [iso]="article().publishedAt" />
          · {{ article().readingMinutes }} min
        </span>
      </div>
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
      padding: var(--s-card);
    }

    .art__kicker {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      font-size: var(--t-micro);
      font-weight: 600;
      letter-spacing: 0.09em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: var(--s-3);
    }

    /* Il verdetto è l'unica cosa nell'occhiello che non parla di categoria:
       spinto a destra, così non si confonde con il nome della sezione. */
    .art__verdict {
      margin-left: auto;
      padding: 1px var(--s-2);
      border: 1px solid currentColor;
      color: var(--text-faint);
      letter-spacing: 0.06em;
    }

    .art__verdict[data-verdict='confermata'] {
      color: var(--up);
    }

    .art__verdict[data-verdict='invalidata'] {
      color: var(--down);
    }

    .art__verdict[data-verdict='parziale'] {
      color: var(--warn);
    }

    .art__title {
      font-size: var(--t-md);
      font-weight: 600;
      line-height: var(--lh-snug);
      transition: color var(--dur) var(--ease);
    }

    .art--feature .art__title {
      font-size: var(--t-xl);
    }

    .art:hover .art__title {
      color: var(--accent-soft);
    }

    .art__dek {
      margin-top: var(--s-2);
      font-size: var(--t-sm);
      line-height: var(--lh-base);
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
      gap: var(--s-2);
      margin-top: var(--s-4);
      padding-top: var(--s-4);
      border-top: 1px solid var(--line);
    }

    .art__points li {
      position: relative;
      padding-left: var(--s-4);
      font-size: var(--t-sm);
      line-height: var(--lh-snug);
      color: var(--text-soft);
    }

    .art__points li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 5px;
      height: 1px;
      background: var(--accent);
    }

    .art__foot {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-2);
      margin-top: auto;
      padding-top: var(--s-4);
    }

    .art__when {
      margin-left: auto;
      display: inline-flex;
      align-items: center;
      gap: var(--s-1);
      font-size: var(--t-micro);
      color: var(--text-faint);
      white-space: nowrap;
    }

    @media (max-width: 620px) {
      .art--feature .art__title {
        font-size: var(--t-lg);
      }
    }
  `,
})
export class ArticleCard {
  private readonly content = inject(ContentService);

  readonly article = input.required<Article>();
  readonly feature = input<boolean>(false);

  private readonly primary = computed(() => this.content.primaryCategory(this.article()));

  /** Le categorie oltre la principale, nell'ordine dichiarato. */
  private readonly others = computed(() => this.content.categoriesOf(this.article()).slice(1));

  /**
   * L'esito, se l'analisi e stata ricontrollata.
   *
   * Sta nell'occhiello e non nel piede perche e la sola informazione che cambia
   * il modo in cui si sceglie se aprire o no una scheda vecchia: senza, una
   * lettura invalidata e indistinguibile da una che ha retto.
   */
  protected readonly verdict = computed(() => {
    const o = this.content.outcomeOf(this.article().slug);
    if (!o) {
      return null;
    }
    const labels = {
      confermata: 'confermata',
      parziale: 'parziale',
      invalidata: 'invalidata',
      'senza-verifica': 'non verificata',
    } as const;
    return { key: o.verdict, label: labels[o.verdict] };
  });

  protected readonly primaryName = computed(() => this.primary()?.name ?? 'Analisi');
  protected readonly primaryIcon = computed(() => this.primary()?.icon ?? 'archive');

  // La scheda in evidenza è più larga e regge una pastiglia in più senza crescere.
  protected readonly secondary = computed(() => this.others().slice(0, this.feature() ? 3 : 2));

  protected readonly hidden = computed(() => this.others().length - this.secondary().length);

  protected readonly hiddenNames = computed(() =>
    this.others()
      .slice(this.secondary().length)
      .map((c) => c.name)
      .join(' · '),
  );
}
