import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

/**
 * Glossario.
 *
 * Un glossario si scorre: prima era una griglia di riquadri con la piastrella
 * della lettera iniziale, e per leggere venti definizioni si saltava da una
 * colonna all'altra. Ora è un elenco di voci separate da un filetto — termine a
 * sinistra, definizione a destra — nell'impianto di una lista di definizioni.
 *
 * Ricerca e lettere restano appiccicate sotto la barra superiore: sono l'unico
 * modo di arrivare a un termine senza scorrere, e devono restare a portata
 * anche a metà elenco.
 */
@Component({
  selector: 'app-glossary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeader, Icon],
  template: `
    <app-page-header
      eyebrow="Definizioni divulgative"
      heading="Glossario"
      icon="book"
      description="Spiegazioni sintetiche dei termini che ricorrono nelle analisi. Sono semplificazioni a scopo
        didattico: non sostituiscono fonti normative, manuali accademici o il parere di un professionista abilitato."
    />

    <div class="tools">
      <label class="search">
        <app-icon name="search" [size]="14" />
        <input
          type="search"
          placeholder="Filtra i termini…"
          aria-label="Filtra i termini del glossario"
          [value]="query()"
          (input)="onQuery($event)"
        />
      </label>

      <div class="letters" role="group" aria-label="Filtra per lettera iniziale">
        <button
          type="button"
          class="chip"
          [class.chip--accent]="!letter()"
          [attr.aria-pressed]="!letter()"
          (click)="letter.set(null)"
        >
          Tutte
        </button>
        @for (l of letters(); track l) {
          <button
            type="button"
            class="chip"
            [class.chip--accent]="letter() === l"
            [attr.aria-pressed]="letter() === l"
            (click)="toggleLetter(l)"
          >
            {{ l }}
          </button>
        }
      </div>
    </div>

    @if (filtered().length) {
      <dl class="terms">
        @for (entry of filtered(); track entry.term) {
          <div class="term">
            <dt>{{ entry.term }}</dt>
            <dd class="term__def">{{ entry.definition }}</dd>
            <dd class="term__why"><strong>Perché conta.</strong> {{ entry.why }}</dd>
            @if (entry.related?.length) {
              <dd class="term__rel">
                @for (r of entry.related; track r) {
                  <span class="chip">{{ r }}</span>
                }
              </dd>
            }
          </div>
        }
      </dl>
    } @else {
      <p class="empty">Nessun termine corrisponde alla ricerca.</p>
    }
  `,
  styles: `
    :host {
      display: block;
    }

    /* Sotto la barra superiore, non dentro l'intestazione: da qui non si
       muove nemmeno quando l'elenco è scorso fino in fondo. */
    .tools {
      position: sticky;
      top: var(--topbar-h);
      z-index: 10;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-3);
      padding: var(--s-3) 0;
      background: var(--bg);
      border-bottom: 1px solid var(--line);
    }

    .search {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      flex: 1 1 240px;
      max-width: 320px;
      padding: var(--s-2) var(--s-3);
      border-radius: var(--r-md);
      border: 1px solid var(--line);
      background: var(--surface);
      color: var(--text-faint);
      transition:
        border-color var(--dur) var(--ease),
        color var(--dur) var(--ease);
    }

    .search:focus-within {
      border-color: var(--accent-line);
      color: var(--accent-soft);
    }

    .search input {
      flex: 1;
      min-width: 0;
      border: 0;
      outline: none;
      background: none;
      font: inherit;
      font-size: var(--t-sm);
      color: var(--text);
    }

    .letters {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-1);
    }

    .letters .chip {
      cursor: pointer;
      min-width: 26px;
      justify-content: center;
      transition:
        border-color var(--dur) var(--ease),
        color var(--dur) var(--ease);
    }

    .letters .chip:hover {
      border-color: var(--accent-line);
      color: var(--accent-soft);
    }

    /* Il margine automatico della lista di definizioni non serve: il ritmo lo
       danno l'imbottitura delle voci e i filetti. */
    .terms {
      margin: 0;
    }

    /* Termine a sinistra, spiegazione a destra: la colonna dei termini è
       l'indice, e si legge dall'alto in basso senza attraversare i riquadri. */
    .term {
      display: grid;
      grid-template-columns: minmax(0, 180px) minmax(0, 1fr);
      gap: var(--s-3) var(--s-6);
      padding: var(--s-5) 0;
      border-top: 1px solid var(--line);
    }

    /* Il filetto della prima voce sarebbe doppio: il filo della barra dei
       filtri fa già da bordo superiore dell'elenco. */
    .term:first-child {
      border-top: 0;
    }

    .term dt {
      font-size: var(--t-md);
      font-weight: 600;
      line-height: var(--lh-snug);
      letter-spacing: -0.01em;
    }

    .term dd {
      grid-column: 2;
      margin: 0;
      max-width: var(--measure);
    }

    .term__def {
      font-size: var(--t-base);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    .term__why {
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .term__why strong {
      font-weight: 500;
      color: var(--text-muted);
    }

    .term__rel {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-2);
    }

    .empty {
      padding: var(--s-8) 0;
      font-size: var(--t-base);
      color: var(--text-muted);
    }

    @media (max-width: 720px) {
      /* Il campo di ricerca prende tutta la riga, le lettere vanno sotto. */
      .search {
        flex: 1 0 100%;
        max-width: none;
      }

      /* Sotto i 16px Safari su iOS ingrandisce la pagina al fuoco del campo. */
      .search input {
        font-size: 16px;
      }

      .letters .chip {
        min-width: 30px;
        padding: var(--s-1) var(--s-2);
      }

      /* Una colonna sola: il termine fa da titolo della sua voce. */
      .term {
        grid-template-columns: 1fr;
        gap: var(--s-2);
        padding: var(--s-4) 0;
      }

      .term dd {
        grid-column: 1;
      }
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
