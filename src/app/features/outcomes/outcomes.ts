import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService, formatDate } from '../../core/services/content.service';
import { Verdict } from '../../core/models/article.model';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

const VERDICT_LABEL: Record<Verdict, string> = {
  confermata: 'Confermata',
  parziale: 'Parziale',
  invalidata: 'Invalidata',
  'senza-verifica': 'Senza verifica',
};

const VERDICT_ICON: Record<Verdict, string> = {
  confermata: 'check',
  parziale: 'scale',
  invalidata: 'close',
  'senza-verifica': 'clock',
};

/**
 * Registro degli esiti.
 *
 * Ogni analisi dichiara prima l'elenco delle condizioni che la renderebbero
 * sbagliata. Questa pagina è il posto dove quelle condizioni vengono
 * ricontrollate a cose fatte, una per una, e dove il risultato resta scritto
 * anche quando è brutto.
 *
 * Due scelte di impianto, entrambe deliberate:
 *
 * - **Il verdetto è mostrato accanto alle condizioni da cui deriva.** Un
 *   verdetto da solo è un'opinione; con sotto l'elenco di che cosa è scattato e
 *   che cosa no, è un conto che chiunque può rifare.
 * - **Le analisi ancora da controllare sono contate in cima.** Se restassero
 *   invisibili, questa pagina misurerebbe solo le analisi che qualcuno ha avuto
 *   voglia di verificare, che è il modo più semplice di avere sempre ragione.
 */
@Component({
  selector: 'app-outcomes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeader, Icon, RouterLink, RiskNotice],
  template: `
    <app-page-header
      eyebrow="Come sono andate a finire"
      heading="Esiti"
      icon="scale"
      description="Ogni analisi dichiara, prima di sapere come andrà, l’elenco delle condizioni che la
        renderebbero sbagliata. Qui quelle condizioni vengono ricontrollate a distanza di tempo, una per una,
        con il numero che si è visto. Il verdetto si ricava da lì, non da come ce la si ricorda."
    />

    <section class="record" aria-label="Riepilogo del registro">
      <div class="record__grid">
        <div class="stat">
          <span class="stat__value tnum">{{ record().confermate }}</span>
          <span class="stat__label">Confermate</span>
        </div>
        <div class="stat">
          <span class="stat__value tnum">{{ record().parziali }}</span>
          <span class="stat__label">Parziali</span>
        </div>
        <div class="stat">
          <span class="stat__value tnum">{{ record().invalidate }}</span>
          <span class="stat__label">Invalidate</span>
        </div>
        <div class="stat">
          <span class="stat__value tnum">{{ record().senzaVerifica }}</span>
          <span class="stat__label">Senza verifica</span>
        </div>
        <div class="stat stat--muted">
          <span class="stat__value tnum">{{ record().daControllare }}</span>
          <span class="stat__label">Ancora da controllare</span>
        </div>
      </div>
    </section>

    @if (calibration().length) {
      <section class="panel" aria-labelledby="calibrazione">
        <h2 id="calibrazione" class="panel__title">Calibrazione</h2>
        <p class="panel__note">
          Ogni analisi dichiara qualcosa prima di sapere come andrà. Qui quelle dichiarazioni
          vengono confrontate con l’esito. Sono <strong>due</strong> e misurano cose diverse: la
          seconda è quella che più assomiglia a «quanto ci credo».
        </p>

        @for (blocco of calibration(); track blocco.chiave) {
          <div class="calib__group">
            <h3 class="calib__title">{{ blocco.titolo }}</h3>
            <p class="calib__hint">{{ blocco.nota }}</p>
            <dl class="calib">
              @for (row of blocco.righe; track row.livello) {
                <div class="calib__row">
                  <dt class="calib__level">{{ row.livello }}</dt>
                  <dd class="calib__value">
                    @if (row.quota !== null) {
                      <span class="tnum">{{ row.quota }}%</span> confermate
                      <span class="calib__of tnum"
                        >({{ row.confermate }} su {{ row.verificate }})</span
                      >
                    } @else {
                      <span class="calib__of">nessuna verificata</span>
                    }
                  </dd>
                </div>
              }
            </dl>
          </div>
        }
      </section>
    }

    @if (rows().length) {
      <ol class="outcomes">
        @for (row of rows(); track row.outcome.slug) {
          <li class="outcome">
            <div class="outcome__head">
              <span class="verdict" [attr.data-verdict]="row.outcome.verdict">
                <app-icon [name]="row.icon" [size]="13" />
                {{ row.label }}
              </span>
              <span class="outcome__when tnum">Controllata il {{ row.checked }}</span>
            </div>

            @if (row.article) {
              <a class="outcome__title" [routerLink]="['/analisi', row.outcome.slug]">
                {{ row.article.title }}
              </a>
              <p class="outcome__meta">
                {{ row.article.kicker }} · pubblicata il {{ row.published }} · certezza dichiarata
                {{ row.article.certainty }}
              </p>
            } @else {
              <p class="outcome__title">{{ row.outcome.slug }}</p>
            }

            <p class="outcome__what">{{ row.outcome.what }}</p>

            @if (row.outcome.conditions.length) {
              <ul class="conds">
                @for (c of row.outcome.conditions; track c.condition) {
                  <li class="cond" [class.cond--on]="c.triggered">
                    <app-icon [name]="c.triggered ? 'check' : 'arrow-flat'" [size]="12" />
                    <span class="cond__text">{{ c.condition }}</span>
                    <span class="cond__evidence">{{ c.evidence }}</span>
                  </li>
                }
              </ul>
            }

            @if (row.outcome.lesson) {
              <p class="outcome__lesson">
                <strong>Che cosa cambia.</strong> {{ row.outcome.lesson }}
              </p>
            }
          </li>
        }
      </ol>
    } @else {
      <p class="empty">
        Nessun esito registrato per ora. Il registro si popola in avanti, un’analisi alla volta: non
        è stato riempito a posteriori perché assegnare un verdetto a un’analisi di cui si conosce
        già la fine è esattamente l’errore che questa pagina esiste per impedire.
      </p>
    }

    <app-risk-notice />
  `,
  styles: `
    :host {
      display: block;
    }

    .record {
      margin-bottom: var(--s-7);
    }

    .record__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
      gap: 1px;
      background: var(--line);
      border: 1px solid var(--line);
    }

    .stat {
      display: flex;
      flex-direction: column;
      gap: var(--s-1);
      padding: var(--s-3) var(--s-4);
      background: var(--surface);
    }

    .stat--muted .stat__value {
      color: var(--text-soft);
    }

    .stat__value {
      font-size: var(--t-xl);
      line-height: var(--lh-tight);
      font-weight: 600;
    }

    .stat__label {
      font-size: var(--t-micro);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-soft);
    }

    .panel {
      border-left: 2px solid var(--accent);
      padding-left: var(--s-4);
      margin-bottom: var(--s-7);
    }

    .panel__title {
      margin: 0 0 var(--s-1);
      font-size: var(--t-md);
      color: var(--accent-deep);
    }

    .panel__note {
      margin: 0 0 var(--s-3);
      font-size: var(--t-sm);
      color: var(--text-soft);
      max-width: var(--measure);
    }

    .calib {
      margin: 0;
    }

    .calib__group + .calib__group {
      margin-top: var(--s-5);
    }

    .calib__title {
      margin: 0 0 var(--s-1);
      font-size: var(--t-sm);
      font-weight: 600;
    }

    .calib__hint {
      margin: 0 0 var(--s-2);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-soft);
      max-width: var(--measure);
    }

    .calib__level {
      text-transform: capitalize;
    }

    .calib__row {
      display: flex;
      justify-content: space-between;
      gap: var(--s-4);
      padding: var(--s-2) 0;
      border-top: 1px solid var(--line);
    }

    .calib__level {
      font-weight: 600;
      font-size: var(--t-sm);
    }

    .calib__value {
      margin: 0;
      font-size: var(--t-sm);
    }

    .calib__of {
      color: var(--text-soft);
    }

    .outcomes {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .outcome {
      padding: var(--s-5) 0;
      border-top: 1px solid var(--line);
    }

    .outcome__head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--s-3);
      margin-bottom: var(--s-2);
    }

    .verdict {
      display: inline-flex;
      align-items: center;
      gap: var(--s-1);
      padding: 2px var(--s-2);
      border: 1px solid var(--line-strong);
      font-size: var(--t-micro);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-soft);
    }

    .verdict[data-verdict='confermata'] {
      color: var(--up);
      border-color: var(--up-line);
    }

    .verdict[data-verdict='invalidata'] {
      color: var(--down);
      border-color: var(--down-line);
    }

    .verdict[data-verdict='parziale'] {
      color: var(--warn);
      border-color: var(--warn-line);
    }

    .outcome__when {
      font-size: var(--t-xs);
      color: var(--text-soft);
    }

    .outcome__title {
      display: block;
      font-family: var(--ff-serif);
      font-size: var(--t-lg);
      margin: 0 0 2px;
    }

    .outcome__meta {
      margin: 0 0 var(--s-3);
      font-size: var(--t-xs);
      color: var(--text-soft);
    }

    .outcome__what {
      margin: 0 0 var(--s-3);
      max-width: var(--measure);
    }

    .conds {
      list-style: none;
      margin: 0 0 var(--s-3);
      padding: 0;
    }

    .cond {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: baseline;
      gap: var(--s-2);
      padding: var(--s-1) 0;
      border-top: 1px dotted var(--line);
      font-size: var(--t-sm);
      color: var(--text-soft);
    }

    .cond--on {
      color: var(--text);
    }

    .cond--on .cond__evidence {
      color: var(--down);
    }

    .cond__evidence {
      font-size: var(--t-xs);
      text-align: right;
    }

    .outcome__lesson {
      margin: 0;
      font-size: var(--t-sm);
      border-left: 2px solid var(--accent-line);
      padding-left: var(--s-3);
      max-width: var(--measure);
    }

    .empty {
      border: 1px solid var(--line);
      padding: var(--s-5) var(--s-card);
      color: var(--text-soft);
      max-width: var(--measure);
    }

    @media (max-width: 40rem) {
      .cond {
        grid-template-columns: auto 1fr;
      }

      .cond__evidence {
        grid-column: 2;
        text-align: left;
      }
    }
  `,
})
export class Outcomes {
  private readonly content = inject(ContentService);

  protected readonly record = this.content.record;
  protected readonly calibration = this.content.calibration;

  protected readonly rows = computed(() =>
    this.content.outcomes().map((outcome) => {
      const article = this.content.bySlug(outcome.slug);
      return {
        outcome,
        article,
        label: VERDICT_LABEL[outcome.verdict],
        icon: VERDICT_ICON[outcome.verdict],
        checked: formatDate(outcome.checkedAt),
        published: article ? formatDate(article.publishedAt) : '',
      };
    }),
  );
}
