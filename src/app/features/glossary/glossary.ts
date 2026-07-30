import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

@Component({
  selector: 'app-glossary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeader, RiskNotice, Icon],
  template: `
    <app-page-header
      eyebrow="Definizioni divulgative"
      heading="Glossario"
      icon="book"
      description="Spiegazioni sintetiche dei termini che ricorrono nelle analisi. Sono semplificazioni a scopo
        didattico: non sostituiscono fonti normative, manuali accademici o il parere di un professionista abilitato."
    >
      <div class="tools">
        <label class="search">
          <app-icon name="search" [size]="15" />
          <input
            type="search"
            placeholder="Filtra i termini…"
            aria-label="Filtra i termini del glossario"
            [value]="query()"
            (input)="onQuery($event)"
          />
        </label>
        <div class="letters">
          <button
            type="button"
            class="chip chip--sm"
            [class.chip--gold]="!letter()"
            (click)="letter.set(null)"
          >
            Tutte
          </button>
          @for (l of letters(); track l) {
            <button
              type="button"
              class="chip chip--sm"
              [class.chip--gold]="letter() === l"
              (click)="toggleLetter(l)"
            >
              {{ l }}
            </button>
          }
        </div>
      </div>
    </app-page-header>

    @if (filtered().length) {
      <div class="grid">
        @for (entry of filtered(); track entry.term) {
          <article class="card card--pad term">
            <div class="term__head">
              <span class="term__letter">{{ entry.letter }}</span>
              <h2>{{ entry.term }}</h2>
            </div>
            <p class="term__def">{{ entry.definition }}</p>
            <p class="term__why"><strong>Perché conta.</strong> {{ entry.why }}</p>
            @if (entry.related?.length) {
              <div class="term__rel">
                @for (r of entry.related; track r) {
                  <span class="chip chip--sm">{{ r }}</span>
                }
              </div>
            }
          </article>
        }
      </div>
    } @else {
      <p class="empty">Nessun termine corrisponde alla ricerca.</p>
    }

    <app-risk-notice variant="card" title="Nota sul glossario" />
  `,
  styles: `
    :host {
      display: block;
    }

    .tools {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 14px;
    }

    .search {
      display: flex;
      align-items: center;
      gap: 9px;
      height: 42px;
      padding: 0 16px;
      min-width: 260px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.035);
      color: var(--text-faint);
    }

    .search:focus-within {
      border-color: var(--gold-line);
      color: var(--gold-soft);
    }

    .search input {
      flex: 1;
      min-width: 0;
      border: 0;
      outline: none;
      background: none;
      font: inherit;
      font-size: 13px;
      color: var(--text);
    }

    .letters {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }

    .letters .chip {
      cursor: pointer;
      min-width: 28px;
      justify-content: center;
    }

    .letters .chip:hover {
      border-color: var(--gold-line);
      color: var(--gold-soft);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 14px;
      margin-bottom: 30px;
    }

    .term__head {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }

    .term__letter {
      display: grid;
      place-items: center;
      width: 30px;
      height: 30px;
      flex: none;
      border-radius: 10px;
      border: 1px solid var(--gold-line);
      background: var(--gold-dim);
      color: var(--gold);
      font-size: 13px;
      font-weight: 800;
    }

    .term h2 {
      font-size: 16px;
      letter-spacing: -0.02em;
    }

    .term__def {
      font-size: 13.6px;
      line-height: 1.66;
      color: var(--text-soft);
    }

    .term__why {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid var(--line);
      font-size: 12.6px;
      line-height: 1.6;
      color: var(--text-muted);
    }

    .term__why strong {
      color: var(--gold-deep);
    }

    .term__rel {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 12px;
    }

    .empty {
      padding: 40px 0 30px;
      font-size: 14px;
      color: var(--text-muted);
    }
  `,
})
export class Glossary {
  private readonly content = inject(ContentService);

  protected readonly query = signal('');
  protected readonly letter = signal<string | null>(null);
  protected readonly letters = this.content.glossaryLetters;

  protected readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const l = this.letter();
    return this.content.glossary.filter((e) => {
      const matchesLetter = !l || e.letter === l;
      const matchesQuery = !q || `${e.term} ${e.definition} ${e.why}`.toLowerCase().includes(q);
      return matchesLetter && matchesQuery;
    });
  });

  protected onQuery(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  protected toggleLetter(l: string): void {
    this.letter.update((current) => (current === l ? null : l));
  }
}
