import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RiskNotice } from '../../shared/legal/risk-notice';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';

/**
 * Metodologia.
 *
 * È la pagina più lunga del sito ed era anche la più affollata: un riquadro
 * rosso, uno ambrato, sei caselle numerate, tre colonne di scale e quattro
 * schede con la piastrella dell'icona. Ora è una colonna sola larga quanto la
 * misura di lettura, con cinque titoli di pari livello ed elenchi separati da
 * un filetto: il testo si legge dall'alto in basso senza scavalcare cornici.
 */
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
    <section class="block">
      <div class="sec-head">
        <h2>Che cosa questo sito non è</h2>
      </div>

      <ul class="notlist">
        @for (item of notList; track item) {
          <li>{{ item }}</li>
        }
      </ul>

      <p class="note">
        Le stesse avvertenze sono riportate per esteso nella pagina
        <a routerLink="/avvertenze">Avvertenze e rischi</a>.
      </p>
    </section>

    <!-- Come si forma un giudizio --------------------------------------------- -->
    <section class="block">
      <div class="sec-head">
        <h2>Come si forma un giudizio</h2>
      </div>

      <p class="lead">
        Quello che segue non descrive il formato di un’analisi ma il modo in cui viene deciso che
        cosa scriverci dentro. Sono regole prese da chi fa questo mestiere da più tempo, tenute
        perché reggono alla prova più semplice: dicono in anticipo che cosa dovrebbe succedere se
        fossero sbagliate.
      </p>

      <ol class="steps">
        @for (p of principles; track p.title) {
          <li>
            <p class="steps__title">{{ p.title }}</p>
            <p class="steps__text">{{ p.text }}</p>
          </li>
        }
      </ol>

      <p class="fineprint method__note">
        <app-icon name="info" [size]="13" />
        <span>
          Nessuno di questi principi rende un’analisi giusta. Servono a renderla
          <strong>verificabile</strong>: è la ragione per cui ogni testo dichiara le proprie
          condizioni di invalidazione, e per cui esiste il
          <a class="link" routerLink="/esiti">registro degli esiti</a>.
        </span>
      </p>
    </section>

    <!-- Struttura di un'analisi ---------------------------------------------- -->
    <section class="block">
      <div class="sec-head">
        <h2>Struttura di un’analisi</h2>
      </div>

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
      <div class="sec-head">
        <h2>Le etichette usate</h2>
      </div>

      <section class="scale">
        <h3>Bias</h3>
        <p>
          Indica l’inclinazione descritta nel testo per lo strumento indicato, non una posizione
          consigliata. La scala va da ribassista a rialzista, con due gradini intermedi di segno
          neutro.
        </p>
        <div class="scale__chips">
          <span class="chip chip--down">ribassista</span>
          <span class="chip chip--down">neutrale · ribassista</span>
          <span class="chip chip--flat">neutrale</span>
          <span class="chip chip--up">neutrale · rialzista</span>
          <span class="chip chip--up">rialzista</span>
        </div>
      </section>

      <section class="scale">
        <h3>Forza del segnale</h3>
        <p>
          Quanto le informazioni disponibili concordano fra loro. Una forza elevata non implica
          alcuna probabilità di successo: implica soltanto che le fonti considerate raccontano la
          stessa cosa.
        </p>
        <div class="scale__chips">
          <span class="chip">bassa</span>
          <span class="chip">media</span>
          <span class="chip">alta</span>
        </div>
      </section>

      <section class="scale">
        <h3>Livello di certezza</h3>
        <p>
          Riguarda la solidità dei fatti su cui poggia il testo, non l’esito del mercato. Anche con
          certezza alta il risultato può essere opposto a quello descritto.
        </p>
        <div class="scale__chips">
          <span class="chip">bassa</span>
          <span class="chip">media</span>
          <span class="chip">alta</span>
        </div>
        <p>
          Vale la pena dirlo per esteso, perché è la confusione più facile: un prezzo osservato e un
          dato pubblicato sono fatti solidi anche quando la lettura che se ne ricava è fragile. Per
          questo ogni analisi, nella sezione che chiude il testo, dichiara <strong>due</strong>
          livelli e non uno — quanto sono solidi i fatti, e quanta fiducia merita l’effetto di
          mercato che se ne deduce. Il secondo è quasi sempre più basso del primo, ed è il numero
          che conta di più.
        </p>
      </section>
    </section>

    <!-- Fonti e limiti --------------------------------------------------------- -->
    <section class="block">
      <div class="sec-head">
        <h2>Fonti, dati e limiti</h2>
      </div>

      <ul class="limits">
        @for (c of limits; track c.title) {
          <li>
            <h3><app-icon [name]="c.icon" [size]="14" />{{ c.title }}</h3>
            <p>{{ c.text }}</p>
          </li>
        }
      </ul>
    </section>

    <!-- Invalidazione ---------------------------------------------------------- -->
    <section class="block">
      <div class="sec-head">
        <h2>Perché ogni analisi dichiara la propria invalidazione</h2>
      </div>

      <div class="invalid">
        <p>
          Alla fine di ciascun testo viene indicato che cosa renderebbe la lettura non più
          sostenibile. È un impegno di trasparenza: rende verificabile a posteriori il ragionamento
          e riduce il rischio di riscritture comode dopo l’esito. Non descrive livelli operativi e
          non suggerisce alcun comportamento.
        </p>
        <p>
          Quando le condizioni di invalidazione si verificano, il contenuto resta pubblicato così
          com’è: non viene modificato per farlo sembrare corretto. Eventuali aggiornamenti vengono
          indicati come tali.
        </p>
        <p>
          A distanza di tempo quelle condizioni vengono ricontrollate una per una, e il risultato —
          compreso quando è brutto — finisce nel <a routerLink="/esiti">registro degli esiti</a>, in
          un archivio separato che non tocca l’analisi. Lì si vede anche il confronto fra il livello
          di certezza dichiarato prima e come è andata dopo.
        </p>
      </div>
    </section>

    <app-risk-notice />
  `,
  styles: `
    /* Una pagina di sola lettura: la colonna non supera la misura, così le righe
       restano corte anche su uno schermo largo. */
    :host {
      display: block;
      max-width: var(--measure);
    }

    app-risk-notice {
      display: block;
      margin-top: var(--s-section);
    }

    .lead {
      margin-bottom: var(--s-5);
      font-size: var(--t-md);
      line-height: var(--lh-loose);
      color: var(--text-muted);
    }

    /* --- Che cosa non è -------------------------------------------------------
       Era un riquadro rosso in sfumatura con sei pallini rossi: il tono
       d'allarme era più forte di quello delle avvertenze vere. Sei righe
       separate da un filetto dicono la stessa cosa senza alzare la voce.
       ------------------------------------------------------------------------ */

    .notlist {
      list-style: none;
    }

    .notlist li {
      padding: var(--s-3) 0;
      border-top: 1px solid var(--line);
      font-size: var(--t-base);
      line-height: var(--lh-base);
      color: var(--text-soft);
    }

    .note {
      margin-top: var(--s-4);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .note a {
      color: var(--text-muted);
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .note a:hover {
      color: var(--text-soft);
    }

    /* --- Passaggi -------------------------------------------------------------
       Sei caselle affiancate suggerivano sei cose da confrontare; sono invece
       sei momenti in fila, e un elenco numerato lo dice meglio.
       ------------------------------------------------------------------------ */

    .steps {
      counter-reset: step;
      list-style: none;
    }

    .steps li {
      display: grid;
      grid-template-columns: var(--s-7) 1fr;
      align-items: baseline;
      padding: var(--s-4) 0;
      border-top: 1px solid var(--line);
    }

    .steps li::before {
      counter-increment: step;
      content: counter(step, decimal-leading-zero);
      grid-column: 1;
      grid-row: 1;
      font-size: var(--t-xs);
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      color: var(--accent);
    }

    .method__note {
      margin-top: var(--s-5);
    }

    .steps__title {
      grid-column: 2;
      font-size: var(--t-base);
      font-weight: 500;
    }

    .steps__text {
      grid-column: 2;
      margin-top: var(--s-1);
      font-size: var(--t-sm);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    /* --- Scale ---------------------------------------------------------------- */

    .scale {
      padding: var(--s-5) 0;
      border-top: 1px solid var(--line);
    }

    .scale h3 {
      font-size: var(--t-base);
    }

    .scale p {
      margin-top: var(--s-2);
      font-size: var(--t-sm);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    .scale__chips {
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-2);
      margin-top: var(--s-3);
    }

    /* --- Limiti ----------------------------------------------------------------
       Le quattro schede avevano una piastrella di 40 pixel per un'icona di 17:
       l'icona ora sta accanto al titolo, alla sua misura.
       -------------------------------------------------------------------------- */

    .limits {
      list-style: none;
    }

    .limits li {
      padding: var(--s-4) 0;
      border-top: 1px solid var(--line);
    }

    .limits h3 {
      display: flex;
      align-items: center;
      gap: var(--s-2);
      font-size: var(--t-base);
    }

    .limits h3 app-icon {
      color: var(--accent);
    }

    .limits p {
      margin-top: var(--s-2);
      font-size: var(--t-sm);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    /* --- Invalidazione ---------------------------------------------------------- */

    .invalid p {
      font-size: var(--t-base);
      line-height: var(--lh-loose);
      color: var(--text-muted);
    }

    .invalid p + p {
      margin-top: var(--s-3);
    }

    @media (max-width: 620px) {
      .lead {
        font-size: var(--t-base);
      }

      .steps li {
        grid-template-columns: var(--s-6) 1fr;
      }
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

  /**
   * I principi con cui si decide che cosa scrivere, non come impaginarlo.
   *
   * Sono sei e non trenta di proposito: un elenco lungo di buone intenzioni non
   * vincola nessuno. Questi sei si riconoscono nei testi pubblicati, e quando
   * un'analisi li viola si vede — è il motivo per cui vale la pena scriverli.
   */
  protected readonly principles = [
    {
      title: 'I vincoli prima delle intenzioni',
      text: 'Che cosa un decisore dichiari di voler fare conta meno di che cosa può permettersi di fare. Le preferenze sono opzionali e cambiano; i vincoli materiali — riserve, rotte, scadenze elettorali, fabbisogno di finanziamento — no. Un’analisi che poggia su una dichiarazione è più fragile di una che poggia su un vincolo, e va dichiarata come tale.',
    },
    {
      title: 'Prima la frequenza di base, poi il caso specifico',
      text: 'Prima di chiedersi quanto sia particolare la situazione di oggi, ci si chiede quante volte una situazione così è finita in un certo modo. Partire dal caso specifico porta quasi sempre a considerarlo più eccezionale di quanto sia.',
    },
    {
      title: 'Aggiornare per gradi, non ribaltare',
      text: 'Una notizia nuova sposta una lettura, raramente la capovolge. Quanto la sposta dipende da quanto era attesa: un dato in linea con le attese non cambia quasi nulla anche quando fa muovere il prezzo, una smentita ufficiale su una notizia data per certa cambia molto.',
    },
    {
      title: 'Distinguere il processo dal risultato',
      text: 'Una lettura può essere ragionata bene e finire male, e viceversa. Giudicare una decisione dal suo esito — quando l’esito dipende anche dal caso — porta a cambiare metodo dopo ogni perdita e a tenere le abitudini peggiori dopo ogni guadagno.',
    },
    {
      title: 'Dichiarare prima che cosa dimostrerebbe l’errore',
      text: 'Ogni analisi scrive, prima di sapere come andrà, le condizioni che la renderebbero sbagliata. Senza quell’elenco qualunque esito si può raccontare come una conferma parziale, e non resta niente da imparare.',
    },
    {
      title: 'Un numero non verificato non viene riportato',
      text: 'I valori citati vengono da fonti pubbliche indicate nel testo. Quando una notizia è riportata ma non confermata, la differenza fra le due cose viene detta esplicitamente invece di essere lasciata intuire dal tono.',
    },
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
