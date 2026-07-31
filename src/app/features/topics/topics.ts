import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORY_FAMILIES, categoriesOfFamily } from '../../core/config/site.config';
import { ContentService } from '../../core/services/content.service';
import { CalendarService } from '../../core/services/calendar.service';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

/**
 * Indice degli argomenti.
 *
 * Questa pagina serve a trovare una categoria in fretta, non a farsi ammirare:
 * erano ventinove schede con la piastrella dell'icona, e ventinove riquadri
 * affiancati si leggono uno per uno. Ora ogni famiglia è una sezione e ogni
 * categoria una riga separata da un filetto — nome, che cosa contiene, quante
 * analisi — su due colonne quando lo schermo lo consente.
 *
 * Resta indicato se la categoria corrisponde a un indicatore del calendario: è
 * il collegamento fra ciò che si legge e i numeri da cui nasce.
 */
@Component({
  selector: 'app-topics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, Icon],
  template: `
    <app-page-header
      eyebrow="Ventinove categorie in cinque famiglie"
      heading="Argomenti"
      icon="layers"
      [description]="intro"
    >
      <div class="facts">
        <span class="chip chip--accent">{{ total }} categorie</span>
        @if (published(); as n) {
          <span class="chip">{{ n }} analisi pubblicate</span>
        }
        <a class="chip facts__link" routerLink="/calendario">
          <app-icon name="calendar" [size]="12" />
          Calendario economico
        </a>
      </div>
    </app-page-header>

    @for (family of families; track family.slug) {
      <section class="block" [id]="family.slug" [attr.data-accent]="family.slug">
        <div class="sec-head">
          <h2 class="fam">
            <app-icon [name]="family.icon" [size]="15" />
            {{ family.name }}
          </h2>
          <p class="fam__note">{{ family.tagline }}</p>
        </div>

        <ul class="cats">
          @for (row of rowsOf(family.slug); track row.category.slug) {
            <li>
              <a class="cat" [routerLink]="['/argomenti', row.category.slug]">
                <app-icon class="cat__icon" [name]="row.category.icon" [size]="14" />

                <span class="cat__body">
                  <span class="cat__name">{{ row.category.name }}</span>
                  <span class="cat__tag">{{ row.category.tagline }}</span>
                </span>

                <span class="cat__meta">
                  @if (row.inCalendar) {
                    <span class="cat__cal">
                      <app-icon name="chart" [size]="12" />
                      nel calendario
                    </span>
                  }
                  <!-- Il conteggio compare solo se c'è qualcosa da contare:
                       con l'archivio vuoto, «nessuna analisi» sarebbe scritto
                       ventinove volte in colonna e non direbbe nulla che
                       l'assenza stessa non dica già. -->
                  @if (row.count) {
                    <span class="cat__count tnum">{{ row.count }} analisi</span>
                  }
                </span>
              </a>
            </li>
          }
        </ul>
      </section>
    }
  `,
  styles: `
    :host {
      display: block;
    }

    .facts {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-2);
    }

    .facts__link {
      transition:
        border-color var(--dur) var(--ease),
        color var(--dur) var(--ease);
    }

    .facts__link:hover {
      border-color: var(--accent-line);
      color: var(--accent-soft);
    }

    /* L'icona della famiglia sta sulla riga del titolo e ne prende l'altezza:
       serve a riconoscere la sezione scorrendo la pagina, non ad aprirla. */
    .fam {
      display: flex;
      align-items: center;
      gap: var(--s-2);
    }

    .fam app-icon {
      color: var(--accent);
    }

    .fam__note {
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-faint);
      text-align: right;
    }

    /* Due colonne di righe, non una griglia di schede: il filetto basta a
       separare due voci e lascia l'occhio libero di scorrere i nomi.

       Due, non tre: a 320px di minimo lo schermo largo ne faceva stare tre, e
       in un terzo di colonna «Richieste iniziali sussidi di disoccupazione»
       andava a capo tre volte. Un elenco che si legge in fretta ha bisogno che
       i nomi stiano su una riga, non che ce ne stiano di più per schermata. */
    .cats {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(440px, 100%), 1fr));
      column-gap: var(--s-8);
    }

    .cats li {
      display: flex;
    }

    .cat {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: var(--s-3);
      padding: var(--s-3) var(--s-2);
      border-top: 1px solid var(--line);
      transition: background var(--dur) var(--ease);
    }

    .cat:hover {
      background: var(--surface-hover);
    }

    /* Ogni icona stava in una piastrella di 34 pixel con bordo e fondo colorato:
       ventinove piastrelle erano il rumore principale della pagina. Resta il
       solo segno, spento, che si accende quando la riga è sotto il puntatore.
       Il margine di due pixel la allinea alla prima riga del nome. */
    .cat__icon {
      margin-top: 2px;
      color: var(--text-faint);
      transition: color var(--dur) var(--ease);
    }

    .cat:hover .cat__icon {
      color: var(--accent);
    }

    .cat__body {
      flex: 1;
      min-width: 12ch;
    }

    .cat__name {
      display: block;
      font-size: var(--t-sm);
      font-weight: 500;
      line-height: var(--lh-snug);
      transition: color var(--dur) var(--ease);
    }

    .cat:hover .cat__name {
      color: var(--accent-soft);
    }

    .cat__tag {
      display: block;
      margin-top: 2px;
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-muted);
    }

    /* Quando la riga si stringe, conteggio e rimando al calendario scendono
       sotto restando allineati a destra. */
    .cat__meta {
      flex: none;
      display: flex;
      align-items: center;
      gap: var(--s-3);
      margin-top: 2px;
      margin-left: auto;
      font-size: var(--t-micro);
      line-height: var(--lh-snug);
      color: var(--text-faint);
      white-space: nowrap;
    }

    .cat__cal {
      display: inline-flex;
      align-items: center;
      gap: var(--s-1);
    }

    .cat__count {
      min-width: 9ch;
      text-align: right;
    }

    @media (max-width: 620px) {
      .fam__note {
        text-align: left;
      }

      .cat {
        padding: var(--s-3) 0;
      }
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
