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
        <div class="meta">
          <span class="chip chip--sm chip--neutral">
            <app-icon name="clock" [size]="11" />
            Ultimo aggiornamento: {{ doc.updatedAt }}
          </span>
          <span class="chip chip--sm chip--warn">
            <app-icon name="alert" [size]="11" />
            Documento informativo, non un parere legale
          </span>
        </div>
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

          <section class="sec sec--final">
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
          <nav class="side__card">
            <p class="side__label">Documenti</p>
            @for (d of documents; track d.slug) {
              <a
                class="side__link"
                [class.side__link--active]="d.slug === document()?.slug"
                [routerLink]="'/' + d.slug"
              >
                <app-icon [name]="iconFor(d.slug)" [size]="14" />
                {{ d.title }}
              </a>
            }
          </nav>

          <div class="side__card side__card--warn">
            <p class="side__label side__label--warn">
              <app-icon name="alert" [size]="13" />
              In breve
            </p>
            <ul class="side__points">
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
      gap: 8px;
    }

    .layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 260px;
      gap: 40px;
      align-items: start;
    }

    .doc {
      max-width: 84ch;
    }

    .sec {
      padding-bottom: 24px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--line);
    }

    .sec:last-child {
      border-bottom: 0;
    }

    .sec h2 {
      font-size: 16.5px;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
      color: var(--accent-soft);
    }

    .sec p {
      font-size: 13.6px;
      line-height: 1.75;
      color: var(--text-muted);
      text-align: justify;
      hyphens: auto;
    }

    .sec p + p {
      margin-top: 11px;
    }

    .sec a {
      color: var(--accent-soft);
      text-decoration: underline;
    }

    .sec ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 9px;
      margin-top: 13px;
    }

    .sec li {
      position: relative;
      padding-left: 18px;
      font-size: 13.4px;
      line-height: 1.66;
      color: var(--text-muted);
    }

    .sec li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent);
      opacity: 0.7;
    }

    .sec--final {
      padding: 18px 20px;
      border: 1px solid var(--accent-line);
      border-radius: var(--r-md);
      background: var(--accent-dim);
    }

    .side {
      position: sticky;
      top: 100px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .side__card {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 16px 17px;
      border: 1px solid var(--line);
      border-radius: var(--r-md);
      background: rgba(255, 255, 255, 0.025);
    }

    .side__label {
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--text-faint);
      margin-bottom: 8px;
    }

    .side__label--warn {
      display: flex;
      align-items: center;
      gap: 7px;
      color: var(--warn);
    }

    .side__link {
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 8px 10px;
      border-radius: var(--r-sm);
      font-size: 12.5px;
      color: var(--text-muted);
      transition:
        background 0.2s var(--ease),
        color 0.2s var(--ease);
    }

    .side__link:hover {
      background: rgba(255, 255, 255, 0.04);
      color: var(--text);
    }

    .side__link--active {
      background: var(--accent-dim);
      color: var(--accent-soft);
    }

    .side__card--warn {
      border-color: rgba(240, 169, 59, 0.26);
      background: rgba(240, 169, 59, 0.06);
    }

    .side__points {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 7px;
    }

    .side__points li {
      position: relative;
      padding-left: 14px;
      font-size: 11.5px;
      line-height: 1.5;
      color: var(--text-muted);
    }

    .side__points li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 7px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--warn);
    }

    .missing {
      padding: 60px 0;
      color: var(--text-muted);
    }

    @media (max-width: 1000px) {
      .layout {
        grid-template-columns: minmax(0, 1fr);
        gap: 26px;
      }

      .side {
        position: static;
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
