import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

@Component({
  selector: 'app-methodology',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeader, RiskNotice, Icon],
  template: `
    <app-page-header
      eyebrow="Come sono costruite le analisi"
      heading="Metodologia"
      icon="compass"
      description="Struttura, vocabolario e limiti dichiarati dei contenuti pubblicati. Serve a rendere verificabile ciò
        che si legge e a chiarire, una volta di più, che cosa questo sito non è."
    />

    <!-- Che cosa non è ------------------------------------------------------- -->
    <section class="card card--pad isnot">
      <p class="isnot__title">
        <app-icon name="close" [size]="16" />
        Che cosa questo sito non è
      </p>
      <div class="isnot__grid">
        @for (item of notList; track item) {
          <p class="isnot__item"><span></span>{{ item }}</p>
        }
      </div>
      <p class="isnot__note">
        Le stesse avvertenze sono riportate per esteso nella pagina
        <a routerLink="/avvertenze">Avvertenze e rischi</a>.
      </p>
    </section>

    <!-- Struttura di un'analisi ---------------------------------------------- -->
    <section class="block">
      <h2>Struttura di un’analisi</h2>
      <p class="lead">
        Ogni contenuto segue lo stesso ordine, così che sia possibile distinguere immediatamente i
        fatti dalle interpretazioni.
      </p>
      <ol class="steps">
        @for (s of steps; track s.title) {
          <li>
            <p class="steps__title">{{ s.title }}</p>
            <p class="steps__text">{{ s.text }}</p>
          </li>
        }
      </ol>
    </section>

    <!-- Vocabolario ----------------------------------------------------------- -->
    <section class="block">
      <h2>Le etichette usate</h2>
      <div class="scale">
        <div class="scale__col">
          <p class="scale__label">Bias</p>
          <p class="scale__text">
            Indica l’inclinazione descritta nel testo per lo strumento indicato, non una posizione
            consigliata. La scala va da ribassista a rialzista, con due gradini intermedi di segno
            neutro.
          </p>
          <div class="scale__chips">
            <span class="chip chip--bear chip--sm">ribassista</span>
            <span class="chip chip--bear chip--sm">neutrale · ribassista</span>
            <span class="chip chip--neutral chip--sm">neutrale</span>
            <span class="chip chip--bull chip--sm">neutrale · rialzista</span>
            <span class="chip chip--bull chip--sm">rialzista</span>
          </div>
        </div>

        <div class="scale__col">
          <p class="scale__label">Forza del segnale</p>
          <p class="scale__text">
            Quanto le informazioni disponibili concordano fra loro. Una forza elevata non implica
            alcuna probabilità di successo: implica soltanto che le fonti considerate raccontano la
            stessa cosa.
          </p>
          <div class="scale__chips">
            <span class="chip chip--sm">bassa</span>
            <span class="chip chip--sm">media</span>
            <span class="chip chip--sm">alta</span>
          </div>
        </div>

        <div class="scale__col">
          <p class="scale__label">Livello di certezza</p>
          <p class="scale__text">
            Riguarda la solidità dei fatti su cui poggia il testo, non l’esito del mercato. Anche
            con certezza alta il risultato può essere opposto a quello descritto.
          </p>
          <div class="scale__chips">
            <span class="chip chip--sm">bassa</span>
            <span class="chip chip--sm">media</span>
            <span class="chip chip--sm">alta</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Fonti e limiti --------------------------------------------------------- -->
    <section class="block">
      <h2>Fonti, dati e limiti</h2>
      <div class="cards">
        @for (c of limits; track c.title) {
          <article class="card card--pad limit">
            <span class="limit__icon"><app-icon [name]="c.icon" [size]="17" /></span>
            <h3>{{ c.title }}</h3>
            <p>{{ c.text }}</p>
          </article>
        }
      </div>
    </section>

    <!-- Invalidazione ---------------------------------------------------------- -->
    <section class="card card--pad invalid">
      <p class="invalid__title">
        <app-icon name="target" [size]="16" />
        Perché ogni analisi dichiara la propria invalidazione
      </p>
      <p>
        Alla fine di ciascun testo viene indicato che cosa renderebbe la lettura non più
        sostenibile. È un impegno di trasparenza: rende verificabile a posteriori il ragionamento e
        riduce il rischio di riscritture comode dopo l’esito. Non descrive livelli operativi e non
        suggerisce alcun comportamento.
      </p>
      <p>
        Quando le condizioni di invalidazione si verificano, il contenuto resta pubblicato così
        com’è: non viene modificato per farlo sembrare corretto. Eventuali aggiornamenti vengono
        indicati come tali.
      </p>
    </section>

    <app-risk-notice variant="full" />
  `,
  styles: `
    :host {
      display: block;
    }

    section {
      margin-bottom: 34px;
    }

    h2 {
      font-size: 21px;
      margin-bottom: 12px;
    }

    .lead {
      font-size: 14.5px;
      line-height: 1.7;
      color: var(--text-muted);
      max-width: 78ch;
      margin-bottom: 20px;
    }

    /* --- Che cosa non è ---------------------------------------------------- */

    .isnot {
      border-color: rgba(255, 95, 102, 0.24);
      background: linear-gradient(180deg, rgba(255, 95, 102, 0.07), rgba(255, 95, 102, 0.012));
    }

    .isnot__title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      font-weight: 700;
      color: var(--bear);
      margin-bottom: 16px;
    }

    .isnot__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 10px 24px;
    }

    .isnot__item {
      display: flex;
      gap: 11px;
      font-size: 13.4px;
      line-height: 1.6;
      color: var(--text-muted);
    }

    .isnot__item span {
      width: 6px;
      height: 6px;
      margin-top: 8px;
      flex: none;
      border-radius: 50%;
      background: var(--bear);
      opacity: 0.7;
    }

    .isnot__note {
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 95, 102, 0.16);
      font-size: 12px;
      color: var(--text-faint);
    }

    .isnot__note a {
      color: var(--gold-soft);
      text-decoration: underline;
    }

    /* --- Passaggi ----------------------------------------------------------- */

    .steps {
      counter-reset: step;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 14px;
    }

    .steps li {
      position: relative;
      padding: 18px 20px 18px 20px;
      border: 1px solid var(--line);
      border-radius: var(--r-md);
      background: rgba(255, 255, 255, 0.022);
    }

    .steps li::before {
      counter-increment: step;
      content: '0' counter(step);
      display: block;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.1em;
      color: var(--gold-deep);
      margin-bottom: 9px;
    }

    .steps__title {
      font-size: 14.5px;
      font-weight: 700;
      letter-spacing: -0.015em;
      margin-bottom: 7px;
    }

    .steps__text {
      font-size: 13px;
      line-height: 1.62;
      color: var(--text-muted);
    }

    /* --- Scale --------------------------------------------------------------- */

    .scale {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 16px;
    }

    .scale__col {
      padding: 18px 20px;
      border: 1px solid var(--line);
      border-radius: var(--r-md);
      background: rgba(255, 255, 255, 0.022);
    }

    .scale__label {
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--gold-deep);
      margin-bottom: 10px;
    }

    .scale__text {
      font-size: 13px;
      line-height: 1.64;
      color: var(--text-muted);
    }

    .scale__chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 14px;
    }

    /* --- Limiti --------------------------------------------------------------- */

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
    }

    .limit__icon {
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border-radius: 13px;
      border: 1px solid var(--gold-line);
      background: var(--gold-dim);
      color: var(--gold);
      margin-bottom: 14px;
    }

    .limit h3 {
      font-size: 15.5px;
      margin-bottom: 8px;
    }

    .limit p {
      font-size: 13px;
      line-height: 1.64;
      color: var(--text-muted);
    }

    /* --- Invalidazione --------------------------------------------------------- */

    .invalid {
      border-color: var(--gold-line);
      background: linear-gradient(180deg, rgba(233, 185, 73, 0.07), rgba(233, 185, 73, 0.012));
    }

    .invalid__title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      font-weight: 700;
      color: var(--gold-soft);
      margin-bottom: 14px;
    }

    .invalid p + p {
      margin-top: 11px;
    }

    .invalid p {
      font-size: 13.6px;
      line-height: 1.68;
      color: var(--text-muted);
      max-width: 84ch;
    }
  `,
})
export class Methodology {
  protected readonly notList = [
    'Non è una testata giornalistica registrata presso un tribunale.',
    'Non è un servizio di consulenza finanziaria o di consulenza in materia di investimenti.',
    'Non è un servizio di segnali operativi, alert o gestione di portafogli.',
    'Non è ricerca in materia di investimenti ai sensi della normativa europea.',
    'Non è una fonte di dati di mercato: i valori citati non sono in tempo reale.',
    'Non è affiliato a broker, intermediari o società di gestione del risparmio.',
  ];

  protected readonly steps = [
    {
      title: 'Fatti confermati',
      text: 'Che cosa è successo davvero, con i numeri riportati dalle fonti consultate e senza interpretazioni.',
    },
    {
      title: 'Perché conta',
      text: 'In che modo quei fatti si collegano al quadro di XAU/USD, distinguendo le forze favorevoli da quelle contrarie.',
    },
    {
      title: 'Effetto descritto',
      text: 'Come i diversi mercati stanno reagendo o potrebbero reagire, con il grado di fragilità della lettura.',
    },
    {
      title: 'Scenari condizionati',
      text: 'Ipotesi legate a un evento futuro, ciascuna con la propria condizione di attivazione. Non sono previsioni.',
    },
    {
      title: 'Livello di certezza',
      text: 'Dichiarazione esplicita di quanto sia solido il fondamento fattuale del testo.',
    },
    {
      title: 'Invalidazione',
      text: 'Elenco delle circostanze che renderebbero la lettura non più sostenibile.',
    },
  ];

  protected readonly limits = [
    {
      icon: 'chart',
      title: 'Dati',
      text: 'Provengono da fonti pubbliche consultate al momento della redazione. Non sono in tempo reale, possono essere arrotondati, ritardati o imprecisi e non vanno usati a fini operativi.',
    },
    {
      icon: 'clock',
      title: 'Tempo',
      text: 'Ogni testo è legato al momento in cui è stato scritto. Non viene aggiornato in automatico e può risultare superato nel giro di poche ore.',
    },
    {
      icon: 'alert',
      title: 'Errore',
      text: 'Le analisi possono essere sbagliate, anche quando i fatti riportati sono corretti. Le relazioni fra mercati non sono leggi e cambiano nel tempo.',
    },
    {
      icon: 'shield',
      title: 'Responsabilità',
      text: 'Nessuna decisione di investimento dovrebbe basarsi su questi contenuti. Per operare occorre rivolgersi a un consulente finanziario abilitato.',
    },
  ];
}
