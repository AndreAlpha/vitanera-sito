import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORY_FAMILIES, categoriesOfFamily } from '../../core/config/site.config';
import { ContentService } from '../../core/services/content.service';
import { CalendarService } from '../../core/services/calendar.service';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

/**
 * Indice degli argomenti.
 *
 * Le categorie sono ventinove: presentate di fila sarebbero un muro. Sono
 * perciò raccolte in cinque famiglie, e ciascuna scheda dichiara quante analisi
 * contiene e se esiste un indicatore del calendario che le corrisponde — è il
 * collegamento fra ciò che si legge e i numeri da cui nasce.
 */
@Component({
  selector: 'app-topics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, Icon, RiskNotice],
  template: `
    <app-page-header
      eyebrow="Ventinove categorie in cinque famiglie"
      heading="Argomenti"
      icon="layers"
      [description]="intro"
    >
      <div class="head-facts">
        <span class="chip chip--sm chip--gold">
          <app-icon name="layers" [size]="11" />
          {{ total }} categorie
        </span>
        @if (published(); as n) {
          <span class="chip chip--sm chip--neutral">
            <app-icon name="archive" [size]="11" />
            {{ n }} analisi pubblicate
          </span>
        }
        <a class="chip chip--sm chip--neutral" routerLink="/calendario">
          <app-icon name="calendar" [size]="11" />
          Calendario economico
        </a>
      </div>
    </app-page-header>

    @for (family of families; track family.slug) {
      <section class="block" [attr.data-accent]="family.slug">
        <div class="sec-head">
          <div>
            <p class="eyebrow">{{ family.tagline }}</p>
            <h2>
              <app-icon [name]="family.icon" [size]="19" />
              {{ family.name }}
            </h2>
          </div>
        </div>

        <div class="grid">
          @for (row of rowsOf(family.slug); track row.category.slug) {
            <a class="card card--hover topic" [routerLink]="['/argomenti', row.category.slug]">
              <div class="topic__head">
                <span class="topic__icon"><app-icon [name]="row.category.icon" [size]="17" /></span>
                <h3>{{ row.category.name }}</h3>
              </div>
              <p class="topic__tag">{{ row.category.tagline }}</p>
              <div class="topic__foot">
                <span class="topic__count">
                  @if (row.count) {
                    {{ row.count }} {{ row.count === 1 ? 'analisi' : 'analisi' }}
                  } @else {
                    nessuna analisi
                  }
                </span>
                @if (row.inCalendar) {
                  <span class="topic__data">
                    <app-icon name="chart" [size]="11" />
                    nel calendario
                  </span>
                }
              </div>
            </a>
          }
        </div>
      </section>
    }

    <app-risk-notice variant="card" title="Avvertenza sempre valida" />
  `,
  styles: `
    :host {
      display: block;
    }

    .head-facts {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .sec-head h2 {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .sec-head h2 app-icon {
      color: var(--accent);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 12px;
    }

    .topic {
      display: flex;
      flex-direction: column;
      padding: 15px 17px 13px;
    }

    .topic__head {
      display: flex;
      align-items: center;
      gap: 11px;
    }

    .topic__icon {
      display: grid;
      place-items: center;
      width: 34px;
      height: 34px;
      flex: none;
      border-radius: 11px;
      border: 1px solid var(--accent-line);
      background: rgba(var(--accent-rgb), 0.09);
      color: var(--accent);
    }

    .topic__head h3 {
      font-size: 13.8px;
      line-height: 1.28;
      letter-spacing: -0.012em;
      transition: color 0.25s var(--ease);
    }

    .topic:hover .topic__head h3 {
      color: var(--accent-soft);
    }

    .topic__tag {
      margin-top: 10px;
      font-size: 12px;
      line-height: 1.55;
      color: var(--text-muted);
    }

    .topic__foot {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin-top: auto;
      padding-top: 12px;
      font-size: 10.8px;
      color: var(--text-faint);
    }

    .topic__data {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 1px 8px;
      border-radius: var(--r-pill);
      border: 1px solid var(--accent-line);
      color: var(--accent);
    }
  `,
})
export class Topics {
  private readonly content = inject(ContentService);
  private readonly calendar = inject(CalendarService);

  protected readonly families = CATEGORY_FAMILIES;
  protected readonly total = this.content.categories.length;

  protected readonly intro =
    'Ogni analisi può appartenere a più categorie contemporaneamente: un commento all’inflazione americana ' +
    'si ritrova insieme sotto USA, IPC e Variazione IPC. Le categorie che corrispondono a un indicatore ' +
    'macroeconomico rimandano anche al relativo storico nel calendario.';

  protected readonly published = computed(() => this.content.articles().length);

  protected rowsOf(family: (typeof CATEGORY_FAMILIES)[number]['slug']) {
    return categoriesOfFamily(family).map((category) => ({
      category,
      count: this.content.countByCategory(category.slug),
      inCalendar: this.calendar.indicators.some((i) => i.categories.includes(category.slug)),
    }));
  }
}
