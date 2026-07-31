import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { SITE } from '../../core/config/site.config';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

const ICONS: Record<string, string> = {
  avvertenze: 'shield',
  'note-legali': 'scale',
  privacy: 'lock',
};

/**
 * Pagine di trasparenza: avvertenze, note legali, privacy.
 *
 * È l'unico posto del sito dove l'avvertenza sta per intero, quindi il testo
 * non si tocca: si lavora soltanto sulla lettura. Colonna alla misura di
 * lettura, sezioni separate da un filetto e nessun riquadro ambrato attorno ai
 * paragrafi — un fondo colorato su un documento di dieci sezioni stanca prima
 * della fine del primo capoverso, e qui l'obiettivo è che si arrivi in fondo.
 *
 * Nella colonna laterale la cosa più utile è passare da un documento all'altro:
 * i tre rimandi stanno su una guida verticale e quello corrente è marcato da un
 * filetto d'accento, così si vede dov'è chi legge senza aggiungere un riquadro.
 */
@Component({
  selector: 'app-legal-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, Icon],
  template: `
    @if (document(); as doc) {
      <app-page-header
        eyebrow="Trasparenza"
        [heading]="doc.title"
        [icon]="icon()"
        [description]="doc.intro"
      >
        <p class="meta">
          <span>Ultimo aggiornamento: {{ doc.updatedAt }}</span>
          <span aria-hidden="true">·</span>
          <span>Documento informativo, non un parere legale</span>
        </p>
      </app-page-header>

      <div class="layout print-legal">
        <article class="doc">
          @for (section of doc.sections; track section.heading) {
            <section class="sec">
              <h2>{{ section.heading }}</h2>
              @if (section.paragraphs?.length) {
                @for (p of section.paragraphs; track $index) {
                  <p>{{ p }}</p>
                }
              }
              @if (section.bullets?.length) {
                <ul>
                  @for (b of section.bullets; track b) {
                    <li>{{ b }}</li>
                  }
                </ul>
              }
            </section>
          }

          <section class="sec">
            <h2>Contatti</h2>
            <p>
              Per segnalazioni, richieste di rettifica o chiarimenti è possibile scrivere a
              <a href="mailto:{{ site.email }}">{{ site.email }}</a
              >. Ogni segnalazione di inesattezza viene valutata e, se fondata, il contenuto viene
              corretto indicando l’intervento.
            </p>
          </section>
        </article>

        <aside class="side no-print">
          <nav class="docs" aria-label="Documenti di trasparenza">
            <p class="eyebrow docs__label">Documenti</p>
            @for (d of documents; track d.slug) {
              <a
                class="docs__link"
                [class.docs__link--active]="d.slug === doc.slug"
                [attr.aria-current]="d.slug === doc.slug ? 'page' : null"
                [routerLink]="'/' + d.slug"
              >
                <app-icon [name]="iconFor(d.slug)" [size]="14" />
                {{ d.title }}
              </a>
            }
          </nav>

          <div class="card card--pad brief">
            <p class="brief__label">In breve</p>
            <ul class="brief__list">
              <li>Non è una testata giornalistica registrata.</li>
              <li>Non è consulenza finanziaria.</li>
              <li>L’autore non è un soggetto abilitato o vigilato.</li>
              <li>Investire può comportare la perdita del capitale.</li>
            </ul>
          </div>
        </aside>
      </div>
    } @else {
      <p class="missing">Documento non disponibile.</p>
    }
  `,
  styles: `
    :host {
      display: block;
    }

    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-2);
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    /* --- Documento ------------------------------------------------------- */

    .layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 236px;
      gap: var(--s-8);
      align-items: start;
    }

    .doc {
      max-width: var(--measure);
    }

    .sec + .sec {
      margin-top: var(--s-6);
      padding-top: var(--s-6);
      border-top: 1px solid var(--line);
    }

    .sec h2 {
      font-size: var(--t-md);
      font-weight: 600;
      margin-bottom: var(--s-3);
    }

    .sec p {
      font-size: var(--t-base);
      line-height: var(--lh-loose);
      color: var(--text-soft);
    }

    .sec p + p {
      margin-top: var(--s-3);
    }

    .sec a {
      color: var(--accent);
      text-decoration: underline;
      text-underline-offset: 3px;
      transition: color var(--dur) var(--ease);
    }

    .sec a:hover {
      color: var(--accent-soft);
    }

    .sec ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--s-3);
      margin-top: var(--s-4);
    }

    .sec li {
      position: relative;
      padding-left: var(--s-4);
      font-size: var(--t-base);
      line-height: var(--lh-base);
      color: var(--text-soft);
    }

    /* Un trattino grigio invece del pallino d'accento: in un documento con
       quindici elenchi puntati l'accento diventava carta da parati. */
    .sec li::before {
      content: '';
      position: absolute;
      left: 0;
      top: var(--s-3);
      width: 5px;
      height: 1px;
      background: var(--text-faint);
    }

    /* --- Colonna laterale -------------------------------------------------- */

    .side {
      position: sticky;
      top: calc(var(--topbar-h) + var(--s-5));
      display: flex;
      flex-direction: column;
      gap: var(--s-6);
    }

    .docs {
      display: flex;
      flex-direction: column;
    }

    .docs__label {
      margin-bottom: var(--s-3);
    }

    .docs__link {
      display: flex;
      align-items: center;
      gap: var(--s-3);
      padding: var(--s-3);
      border-left: 2px solid var(--line);
      font-size: var(--t-sm);
      color: var(--text-muted);
      transition:
        background var(--dur) var(--ease),
        border-color var(--dur) var(--ease),
        color var(--dur) var(--ease);
    }

    .docs__link app-icon {
      color: var(--text-faint);
    }

    .docs__link:hover {
      background: var(--surface-hover);
      border-left-color: var(--line-strong);
      color: var(--text);
    }

    .docs__link--active,
    .docs__link--active:hover {
      border-left-color: var(--accent);
      color: var(--accent-soft);
      font-weight: 500;
    }

    .docs__link--active app-icon {
      color: var(--accent);
    }

    /* --- In breve ------------------------------------------------------------
       Resta perché è l'unica sintesi del documento, ma è un riquadro come gli
       altri: il fondo ambra pieno la faceva gridare più del testo che riassume.
       ------------------------------------------------------------------------ */

    .brief__label {
      font-size: var(--t-xs);
      font-weight: 600;
      color: var(--text-soft);
      margin-bottom: var(--s-3);
    }

    .brief__list {
      list-style: none;
    }

    .brief__list li {
      padding: var(--s-2) 0;
      border-top: 1px solid var(--line-soft);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-muted);
    }

    .brief__list li:first-child {
      padding-top: 0;
      border-top: 0;
    }

    .brief__list li:last-child {
      padding-bottom: 0;
    }

    .missing {
      padding: var(--s-9) 0;
      color: var(--text-muted);
    }

    /* Giustificato solo dove la riga è lunga abbastanza da reggerlo: su colonna
       stretta i buchi fra le parole si notano più delle parole. */
    @media (min-width: 621px) {
      .sec p {
        text-align: justify;
        hyphens: auto;
      }
    }

    @media (max-width: 1000px) {
      .layout {
        grid-template-columns: minmax(0, 1fr);
        gap: var(--s-6);
      }

      .side {
        position: static;
        padding-top: var(--s-6);
        border-top: 1px solid var(--line);
      }
    }

    @media (max-width: 620px) {
      .sec + .sec {
        margin-top: var(--s-5);
        padding-top: var(--s-5);
      }

      .sec p,
      .sec li {
        font-size: var(--t-sm);
      }
    }
  `,
})
export class LegalPage {
  private readonly content = inject(ContentService);

  /** Valorizzato dai dati di rotta. */
  readonly documentSlug = input<string>('avvertenze');

  protected readonly site = SITE;
  protected readonly documents = this.content.legalDocuments;

  protected readonly document = computed(
    () => this.documents.find((d) => d.slug === this.documentSlug()) ?? null,
  );

  protected readonly icon = computed(() => this.iconFor(this.documentSlug()));

  protected iconFor(slug: string): string {
    return ICONS[slug] ?? 'scale';
  }
}
