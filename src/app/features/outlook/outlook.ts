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
      <div class="warn-strip">
        <app-icon name="alert" [size]="15" />
        <p>
          <strong>Nessun contenuto di questa pagina è una previsione affidabile</strong> né
          un’indicazione di acquisto o vendita. Gli scenari descritti possono non realizzarsi e sono
          soggetti a revisione senza preavviso.
        </p>
      </div>
    </app-page-header>

    <!-- Lettura corrente derivata dalle analisi pubblicate ------------------ -->
    <section class="current">
      <div class="sec-head">
        <div>
          <p class="eyebrow">Ricavata dalle analisi pubblicate</p>
          <h2>Impostazione descritta al momento</h2>
        </div>
        <a class="link" routerLink="/analisi"
          >Archivio <app-icon name="arrow-right" [size]="13"
        /></a>
      </div>

      <div class="current__grid">
        @for (item of currentReadings(); track item.slug) {
          <a class="card card--hover cur" [routerLink]="['/analisi', item.slug]">
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
          <p class="card current__void">
            Nessuna analisi ha ancora dichiarato un’impostazione su XAU/USD. Gli orizzonti descritti
            più sotto restano validi come quadro di riferimento; la lettura del momento comparirà
            qui con la prima pubblicazione.
          </p>
        }
      </div>

      <p class="current__legal">
        <app-icon name="info" [size]="13" />
        Le impostazioni riportate sono quelle dichiarate negli articoli alla data di pubblicazione.
        Non vengono aggiornate automaticamente e possono essere già superate.
      </p>
    </section>

    <!-- I tre orizzonti ------------------------------------------------------ -->
    @for (h of horizons; track h.key) {
      <section class="hz card card--pad">
        <header class="hz__head">
          <span class="hz__icon"><app-icon [name]="h.icon" [size]="20" /></span>
          <div>
            <p class="eyebrow">{{ h.range }}</p>
            <h2>{{ h.title }}</h2>
          </div>
        </header>

        <div class="hz__grid">
          <div>
            <p class="hz__label">Cosa muove il quadro</p>
            <ul class="hz__list">
              @for (d of h.drivers; track d) {
                <li><span class="dot"></span>{{ d }}</li>
              }
            </ul>
          </div>
          <div>
            <p class="hz__label">Cosa viene osservato</p>
            <ul class="hz__list">
              @for (w of h.watch; track w) {
                <li><span class="dot dot--soft"></span>{{ w }}</li>
              }
            </ul>
          </div>
        </div>

        <p class="hz__limits">
          <app-icon name="alert" [size]="14" />
          <span><strong>Limiti dichiarati.</strong> {{ h.limits }}</span>
        </p>
      </section>
    }

    <app-risk-notice variant="full" />
  `,
  styles: `
    :host {
      display: block;
    }

    section {
      margin-bottom: 26px;
    }

    .warn-strip {
      display: flex;
      align-items: flex-start;
      gap: 11px;
      padding: 14px 16px;
      border: 1px solid rgba(240, 169, 59, 0.3);
      border-radius: var(--r-md);
      background: rgba(240, 169, 59, 0.07);
      max-width: 82ch;
    }

    .warn-strip app-icon {
      margin-top: 2px;
      color: var(--warn);
      flex: none;
    }

    .warn-strip p {
      font-size: 12.8px;
      line-height: 1.62;
      color: var(--text-muted);
    }

    .warn-strip strong {
      color: var(--accent-soft);
    }

    .sec-head {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 18px;
    }

    .sec-head h2 {
      margin-top: 5px;
      font-size: 21px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12.5px;
      font-weight: 600;
      color: var(--accent);
    }

    .current__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
      gap: 14px;
    }

    .current__void {
      grid-column: 1 / -1;
      padding: 22px 24px;
      max-width: 74ch;
      font-size: 13.4px;
      line-height: 1.68;
      color: var(--text-muted);
    }

    .cur {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding: 18px 20px;
    }

    .cur__date {
      font-size: 10.5px;
      letter-spacing: 0.13em;
      text-transform: uppercase;
      color: var(--text-faint);
    }

    .cur__title {
      font-size: 15.5px;
      font-weight: 700;
      line-height: 1.35;
      letter-spacing: -0.02em;
    }

    .cur__regime {
      font-size: 12.5px;
      line-height: 1.6;
      color: var(--text-muted);
    }

    .cur__cta {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: auto;
      font-size: 12px;
      font-weight: 600;
      color: var(--accent);
    }

    .current__legal {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-top: 14px;
      font-size: 11.5px;
      line-height: 1.55;
      color: var(--text-faint);
    }

    .current__legal app-icon {
      margin-top: 2px;
    }

    .hz__head {
      display: flex;
      align-items: center;
      gap: 14px;
      padding-bottom: 18px;
      margin-bottom: 20px;
      border-bottom: 1px solid var(--line);
    }

    .hz__icon {
      display: grid;
      place-items: center;
      width: 46px;
      height: 46px;
      flex: none;
      border-radius: 15px;
      border: 1px solid var(--accent-line);
      background: linear-gradient(
        140deg,
        rgba(var(--accent-rgb), 0.18),
        rgba(var(--accent-rgb), 0.03)
      );
      color: var(--accent);
    }

    .hz__head h2 {
      margin-top: 4px;
      font-size: 20px;
    }

    .hz__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
      gap: 26px;
    }

    .hz__label {
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--accent-deep);
      margin-bottom: 12px;
    }

    .hz__list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .hz__list li {
      display: flex;
      gap: 11px;
      font-size: 13.6px;
      line-height: 1.62;
      color: var(--text-muted);
    }

    .dot {
      width: 6px;
      height: 6px;
      margin-top: 8px;
      flex: none;
      border-radius: 50%;
      background: var(--accent);
    }

    .dot--soft {
      background: var(--text-faint);
    }

    .hz__limits {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-top: 22px;
      padding-top: 16px;
      border-top: 1px solid var(--line);
      font-size: 12.3px;
      line-height: 1.6;
      color: var(--text-faint);
    }

    .hz__limits app-icon {
      margin-top: 2px;
      color: var(--warn);
      flex: none;
    }

    .hz__limits strong {
      color: var(--text-soft);
    }

    @media (max-width: 620px) {
      .warn-strip {
        padding: 12px 14px;
      }

      .hz {
        padding: 18px 16px;
      }

      .hz__head {
        gap: 12px;
        padding-bottom: 14px;
        margin-bottom: 16px;
      }

      .hz__icon {
        width: 40px;
        height: 40px;
        border-radius: 13px;
      }

      .hz__head h2 {
        font-size: 18px;
      }

      .hz__grid {
        gap: 20px;
      }

      .cur {
        padding: 16px 16px;
      }

      .sec-head {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
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
