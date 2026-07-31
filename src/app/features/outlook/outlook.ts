import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService, formatDate } from '../../core/services/content.service';
import { Horizon } from '../../core/models/article.model';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { BiasBadge } from '../../shared/ui/bias-badge';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

interface HorizonBlock {
  readonly key: Horizon;
  readonly title: string;
  readonly range: string;
  readonly icon: string;
  readonly drivers: readonly string[];
  readonly watch: readonly string[];
  readonly limits: string;
}

const HORIZONS: readonly HorizonBlock[] = [
  {
    key: 'breve',
    title: 'Breve termine',
    range: 'Giorni · settimane',
    icon: 'bolt',
    drivers: [
      'Pubblicazione dei dati macro statunitensi, in particolare inflazione e mercato del lavoro.',
      'Comunicati e verbali delle banche centrali, con attenzione al grado di consenso interno.',
      'Notizie geopolitiche e reazione immediata di energia e valute.',
      'Posizionamento e prese di profitto dopo movimenti bruschi.',
    ],
    watch: [
      'Coerenza fra la direzione dell’oro e quella di dollaro e rendimenti reali.',
      'Divergenze: l’oro che non cede mentre i rendimenti salgono, o viceversa.',
      'Rientri rapidi dopo un impulso, segnale di scarsa convinzione.',
    ],
    limits:
      'È l’orizzonte più rumoroso: la maggior parte dei movimenti è reazione a notizie e non descrive un cambiamento di regime. Le letture di brevissimo periodo diventano obsolete nel giro di ore.',
  },
  {
    key: 'medio',
    title: 'Medio termine',
    range: 'Settimane · mesi',
    icon: 'layers',
    drivers: [
      'Traiettoria dell’inflazione e distanza dall’obiettivo della banca centrale.',
      'Percorso atteso dei tassi, incorporato nelle probabilità implicite di mercato.',
      'Andamento dei rendimenti reali, spesso considerati il costo opportunità dell’oro.',
      'Persistenza o rientro del premio al rischio geopolitico.',
    ],
    watch: [
      'Direzione della parte lunga della curva rispetto a quella breve.',
      'Comportamento del dollaro rispetto alle attese di politica monetaria.',
      'Tenuta o cedimento delle relazioni storiche fra oro, tassi e valuta.',
    ],
    limits:
      'Le relazioni fra mercati sono più leggibili, ma non sono leggi: un regime può cambiare rapidamente e rendere non più valida qualunque impostazione descritta.',
  },
  {
    key: 'lungo',
    title: 'Lungo termine',
    range: 'Trimestri · anni',
    icon: 'horizon',
    drivers: [
      'Credibilità della politica monetaria e ancoraggio delle aspettative di inflazione.',
      'Traiettoria del debito pubblico e premio richiesto per detenerlo.',
      'Comportamento delle banche centrali sul lato delle riserve.',
      'Frammentazione geopolitica e organizzazione degli scambi internazionali.',
    ],
    watch: [
      'Cambiamenti strutturali, non singoli dati mensili.',
      'Segnali provenienti dalla parte lunga della curva dei rendimenti.',
      'Modifiche durature nella domanda istituzionale di oro.',
    ],
    limits:
      'Su questo orizzonte nessuna analisi può avere valore predittivo: le variabili in gioco sono troppe e i punti di svolta si riconoscono quasi sempre a posteriori.',
  },
];

/**
 * Orizzonti XAU/USD.
 *
 * I tre orizzonti erano tre schede a tutta larghezza, ciascuna con la piastrella
 * dell'icona e la propria cornice: sembravano tre proposte in concorrenza, e la
 * prima — quella più rumorosa — sembrava anche la più importante. Ora sono tre
 * colonne pari sotto lo stesso filetto: a distinguerle sono la posizione e la
 * scala temporale scritta in testa, non il colore né il riquadro.
 */
@Component({
  selector: 'app-outlook',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, RiskNotice, Icon, BiasBadge],
  template: `
    <app-page-header
      eyebrow="Breve, medio e lungo termine"
      heading="Orizzonti XAU/USD"
      icon="horizon"
      description="Questa pagina descrive il modo in cui vengono organizzate le riflessioni su orizzonti temporali diversi.
        Non contiene previsioni: contiene ipotesi condizionate, i fattori che le sostengono e ciò che le renderebbe non
        più valide."
    >
      <!-- Era un riquadro ambrato con l'icona d'allarme, il terzo avviso della
           stessa schermata. Resta la frase, appoggiata a un filetto: chi legge
           la deve trovare, non subire. -->
      <p class="caveat">
        <strong>Nessun contenuto di questa pagina è una previsione affidabile</strong> né
        un’indicazione di acquisto o vendita. Gli scenari descritti possono non realizzarsi e sono
        soggetti a revisione senza preavviso.
      </p>
    </app-page-header>

    <!-- Lettura corrente derivata dalle analisi pubblicate ------------------ -->
    <section class="block">
      <p class="eyebrow cur__eyebrow">Ricavata dalle analisi pubblicate</p>
      <div class="sec-head">
        <h2>Impostazione descritta al momento</h2>
        <a class="link" routerLink="/analisi"
          >Archivio <app-icon name="arrow-right" [size]="13"
        /></a>
      </div>

      <div class="cur__grid">
        @for (item of currentReadings(); track item.slug) {
          <a class="card card--link cur" [routerLink]="['/analisi', item.slug]">
            <p class="cur__date">{{ item.date }}</p>
            <p class="cur__title">{{ item.title }}</p>
            @if (item.direction; as dir) {
              <app-bias-badge [direction]="dir" [strength]="item.strength" prefix="XAU/USD ·" />
            }
            <p class="cur__regime">{{ item.regime }}</p>
            <span class="cur__cta"
              >Leggi l’analisi <app-icon name="arrow-right" [size]="13"
            /></span>
          </a>
        } @empty {
          <p class="card card--pad cur__void">
            Nessuna analisi ha ancora dichiarato un’impostazione su XAU/USD. Gli orizzonti descritti
            più sotto restano validi come quadro di riferimento; la lettura del momento comparirà
            qui con la prima pubblicazione.
          </p>
        }
      </div>

      <p class="fineprint cur__note">
        <app-icon name="info" [size]="13" />
        <span>
          Le impostazioni riportate sono quelle dichiarate negli articoli alla data di
          pubblicazione. Non vengono aggiornate automaticamente e possono essere già superate.
        </span>
      </p>
    </section>

    <!-- I tre orizzonti, affiancati e di pari peso ---------------------------- -->
    <div class="block hz__grid">
      @for (h of horizons; track h.key) {
        <section class="hz">
          <p class="hz__range">
            <app-icon [name]="h.icon" [size]="13" />
            {{ h.range }}
          </p>
          <h2 class="hz__title">{{ h.title }}</h2>

          <p class="hz__label">Cosa muove il quadro</p>
          <ul class="hz__list">
            @for (d of h.drivers; track d) {
              <li>{{ d }}</li>
            }
          </ul>

          <p class="hz__label">Cosa viene osservato</p>
          <ul class="hz__list">
            @for (w of h.watch; track w) {
              <li>{{ w }}</li>
            }
          </ul>

          <p class="hz__limits"><strong>Limiti dichiarati.</strong> {{ h.limits }}</p>
        </section>
      }
    </div>

    <app-risk-notice />
  `,
  styles: `
    :host {
      display: block;
    }

    app-risk-notice {
      display: block;
      margin-top: var(--s-section);
    }

    /* --- Avvertenza in apertura --------------------------------------------- */

    .caveat {
      max-width: var(--measure);
      padding-left: var(--s-4);
      border-left: 1px solid var(--warn-line);
      font-size: var(--t-sm);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    .caveat strong {
      font-weight: 500;
      color: var(--text);
    }

    /* --- Impostazione descritta al momento ----------------------------------- */

    .cur__eyebrow {
      margin-bottom: var(--s-2);
    }

    .cur__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
      gap: var(--s-4);
    }

    .cur {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--s-3);
      padding: var(--s-card);
    }

    /* La data era in maiuscoletto spaziato: una seconda etichetta gridata in una
       sezione che ne ha già una. */
    .cur__date {
      font-size: var(--t-micro);
      color: var(--text-faint);
    }

    .cur__title {
      font-size: var(--t-md);
      font-weight: 600;
      line-height: var(--lh-snug);
      letter-spacing: -0.02em;
      transition: color var(--dur) var(--ease);
    }

    .cur:hover .cur__title {
      color: var(--accent-soft);
    }

    .cur__regime {
      font-size: var(--t-sm);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    .cur__cta {
      display: inline-flex;
      align-items: center;
      gap: var(--s-1);
      margin-top: auto;
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--accent);
    }

    .cur__void {
      grid-column: 1 / -1;
      max-width: var(--measure);
      font-size: var(--t-sm);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    .cur__note {
      max-width: var(--measure);
    }

    /* --- I tre orizzonti ------------------------------------------------------
       Tre colonne uguali: stessa larghezza, stesso filetto in testa, stesso
       accento. L'ordine breve → medio → lungo è l'unica gerarchia dichiarata.
       ------------------------------------------------------------------------ */

    .hz__grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: var(--s-7);
    }

    .hz {
      max-width: var(--measure);
      padding-top: var(--s-5);
      border-top: 1px solid var(--line);
    }

    .hz__range {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      font-size: var(--t-xs);
      color: var(--text-faint);
    }

    .hz__range app-icon {
      color: var(--accent);
    }

    .hz__title {
      margin-top: var(--s-2);
      font-size: var(--t-lg);
    }

    /* Etichetta interna in tondo: le due che stavano qui erano maiuscole
       spaziate, moltiplicate per tre colonne facevano sei richiami. */
    .hz__label {
      margin-top: var(--s-5);
      margin-bottom: var(--s-3);
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--text-soft);
    }

    .hz__list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--s-3);
    }

    .hz__list li {
      position: relative;
      padding-left: var(--s-4);
      font-size: var(--t-sm);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    /* Un trattino al posto del pallino: i due elenchi si distinguono per
       l'etichetta che li introduce, non per il colore del segno. */
    .hz__list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 5px;
      height: 1px;
      background: var(--accent);
    }

    .hz__limits {
      margin-top: var(--s-5);
      padding-top: var(--s-4);
      border-top: 1px solid var(--line-soft);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .hz__limits strong {
      font-weight: 500;
      color: var(--text-soft);
    }

    /* Sotto i mille pixel tre colonne diventano tre strettoie: si impilano, e il
       filetto in testa a ciascuna continua a separarle. */
    @media (max-width: 1000px) {
      .hz__grid {
        grid-template-columns: 1fr;
        gap: var(--s-6);
      }
    }

    @media (max-width: 620px) {
      .caveat {
        font-size: var(--t-xs);
      }

      .cur {
        padding: var(--s-4);
      }
    }
  `,
})
export class Outlook {
  private readonly content = inject(ContentService);

  protected readonly horizons = HORIZONS;

  protected readonly currentReadings = computed(() =>
    this.content
      .articles()
      .filter((a) => a.bias)
      .map((a) => ({
        slug: a.slug,
        title: a.title,
        date: formatDate(a.publishedAt),
        direction: a.bias?.direction ?? null,
        strength: a.bias?.strength ?? null,
        regime: a.bias?.regime ?? '',
      })),
  );
}
