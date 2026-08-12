/**
 * otto-navi-e-adesso-la-previsione-ha-un-conteggio
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const ottoNaviEIlConteggio: Article = {
  slug: 'otto-navi-e-adesso-la-previsione-ha-un-conteggio',
  categories: ['rotte-e-approvvigionamento', 'oro', 'petrolio', 'medio-oriente'],
  title: 'Otto navi, e adesso la previsione ha un conteggio',
  kicker: 'Rotte e approvvigionamento · Il vincolo misurato',
  dek:
    'Martedì dallo Stretto sono passati otto mercantili e uno solo è uscito: il livello più basso della ' +
    'settimana. Ieri sera questa scheda aveva declassato la previsione dell’agenzia americana perché era ' +
    'una previsione. Oggi arriva il numero, e dice la stessa cosa.',
  publishedAt: '2026-08-12T11:00:00+02:00',
  author: AUTHOR,
  readingMinutes: 9,
  tags: ['Kpler', 'Transiti', 'IEA', 'Collins', 'Scorte API'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    regime:
      'La forza sale da bassa a media, e non per il prezzo: sale perché la ragione dichiarata per tenerla ' +
      'bassa è stata rimossa dai fatti. Dal 17:15 di ieri la lettura poggiava sul rientro del greggio, e ' +
      'quel rientro si è annullato — il Brent è alla sesta seduta consecutiva di rialzo, intorno a 89,5 ' +
      'dollari. L’oro è salito lo stesso, a 4.400,44 con più 0,77%, e lo ha fatto con il Dollar Index in ' +
      'rialzo a 99,89 e il greggio in rialzo: è domanda rifugio, non una configurazione macro favorevole. ' +
      'Sotto ci sono due numeri contati e non previsti: otto mercantili in transito martedì con uno solo ' +
      'in uscita, il livello più basso della settimana, e un decennale rientrato a 4,682% dai 4,735% di ' +
      'ieri. Non sale a rialzista perché alle 14:30 arriva l’indice dei prezzi, e perché due voci della ' +
      'Fed in due giorni hanno aperto a un rialzo di settembre — nessuna delle due con diritto di voto.',
    horizon: 'breve',
  },
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti, che sono conteggi di navigazione riportati da due fornitori diversi, un rapporto ' +
    'ufficiale dell’agenzia internazionale per l’energia, un’intervista a verbale e prezzi osservati. ' +
    'Vanno però dichiarate due crepe. La prima: i due fornitori non danno lo stesso numero — otto transiti ' +
    'per uno, undici per l’altro — quindi il livello non è affidabile e quello che si può usare è la ' +
    'direzione, che è la stessa per entrambi. La seconda: l’aumento di 9,1 milioni di barili nelle scorte ' +
    'americane è una rilevazione dell’associazione di settore e non il dato ufficiale, che esce più tardi; ' +
    'è citato come contrappeso e non come misura. Media sulla lettura, per la ragione di sempre in questi ' +
    'giorni: l’indice dei prezzi delle 14:30 può riscrivere il quadro in mezz’ora, e questa analisi è ' +
    'scritta prima.',
  takeaways: [
    'I dati Kpler riportati da Reuters danno otto mercantili in transito nello Stretto di Hormuz martedì, il livello più basso della settimana e sotto la media dei dieci giorni di circa dodici. Uno solo è uscito. Prima dell’escalation di fine febbraio erano 130-140 al giorno.',
    'L’agenzia internazionale per l’energia taglia ancora la produzione mondiale attesa nel 2026: meno 4,3 milioni di barili al giorno, circa il 4%, contro i meno 3,7 stimati un mese fa, per un’offerta globale a circa 102,02 milioni. È la seconda agenzia in due giorni a rivedere nella stessa direzione.',
    'Il Brent è alla sesta seduta consecutiva di rialzo, intorno a 89,5 dollari con il WTI a circa 83,9: il rientro di ieri pomeriggio si è annullato del tutto. In direzione opposta, le scorte americane rilevate dall’associazione di settore salgono di 9,1 milioni di barili.',
    'XAU/USD riprende quota 4.400 — 4.400,44 con più 0,77% — e lo fa con il Dollar Index in rialzo a 99,89 e il greggio in rialzo. Il decennale è intanto rientrato a 4,682% dai 4,735% di ieri.',
    'Susan Collins della Fed di Boston dice al Financial Times che sarebbe pronta a sostenere un rialzo già a settembre se le pressioni sui prezzi persistessero, citando il caro energia. Come Venable il giorno prima, quest’anno non vota al FOMC.',
  ],
  invalidation: [
    'Un conteggio dei transiti di mercoledì sopra i dodici al giorno della media a dieci giorni: direbbe che gli otto di martedì erano varianza di campionamento e non un peggioramento, esattamente come le due navi di venerdì scorso che questa scheda aveva dovuto correggere.',
    'Un oro che chiude sotto i 4.363 dollari, cioè sotto il minimo di questa giornata: direbbe che il recupero di stamattina era posizionamento prima del dato e non domanda rifugio, e la forza andrebbe riportata a bassa.',
    'Un decennale che torna sopra il 4,735% di ieri con il Dollar Index sopra 99,89: è la combinazione che questa lettura dichiara assente, e la sua comparsa toglierebbe la ragione principale per cui la forza sale.',
    'Un indice dei prezzi alle 14:30 sopra il 3,4% annuo con il biennale che si porta sopra il 4,237%: è la trasmissione che manca da sei giorni, e renderebbe le due dichiarazioni della Fed qualcosa di più di due preferenze senza voto.',
    'Il dato ufficiale sulle scorte che conferma l’aumento di 9,1 milioni di barili: direbbe che al racconto sull’offerta scarsa esiste un contrappeso misurato, e che il Brent alla sesta seduta di rialzo sta prezzando la logistica invece dei barili disponibili.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto, 14:30 italiane',
    title: 'Indice dei prezzi al consumo statunitense di luglio',
    detail:
      'Il consenso riportato da Reuters è di più 0,1% mensile e più 3,4% annuo sul dato principale, più 0,2% e più 2,5% su quello di fondo; escono insieme i Real Earnings. La riga da guardare resta la componente energetica: con il Brent alla sesta seduta di rialzo, è lì che si vede se il canale descritto da due agenzie e da due voci della Fed è già attivo o è ancora una previsione. Alle 19:00 l’asta del decennale da 39 miliardi, che è la prova sulla parte lunga della curva rimandata da ieri; giovedì il trentennale e i prezzi alla produzione.',
  },
  sources: [
    { outlet: 'Reuters' },
    { outlet: 'International Energy Agency', title: 'Rapporto mensile sul mercato petrolifero' },
    { outlet: 'Financial Times', title: 'Intervista a Susan Collins' },
    { outlet: 'The Wall Street Journal' },
    { outlet: 'Investing.com' },
    { outlet: 'Bureau of Labor Statistics', title: 'Calendario delle diffusioni' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Ieri sera, chiudendo l’analisi sulla previsione dell’agenzia americana per l’energia, questa scheda aveva scritto una frase che oggi va rimessa sul tavolo: resta una previsione, e qui una previsione a diciassette mesi vale meno di un transito contato — l’agenzia dichiara un’attesa, non toglie una nave dal conteggio. Stamattina il conteggio è arrivato. Martedì dallo Stretto di Hormuz sono passati otto mercantili, il livello più basso della settimana, e uno solo è uscito.',
    },
    {
      kind: 'stats',
      title: 'La mattinata in sei numeri',
      caption:
        'Conteggi di navigazione e rilevazioni riferiti dalle agenzie nella mattinata del 12 agosto; i prezzi non sono chiusure ufficiali.',
      items: [
        {
          label: 'Transiti Hormuz',
          value: '8 navi',
          tone: 'bear',
          note: 'Martedì, serie Kpler: minimo della settimana, contro una media a dieci giorni di ≈ 12. Una sola in uscita',
        },
        {
          label: 'Offerta mondiale 2026',
          value: '−4,3 mln b/g',
          tone: 'bear',
          note: 'Revisione dell’agenzia internazionale: era −3,7 un mese fa. Offerta a ≈ 102,02 mln',
        },
        {
          label: 'Brent',
          value: '≈ 89,5 $',
          tone: 'bear',
          note: 'Sesta seduta consecutiva di rialzo; circa 88,1 sulla serie di questo archivio. WTI ≈ 83,9',
        },
        {
          label: 'Scorte USA, stima di settore',
          value: '+9,1 mln barili',
          tone: 'bull',
          note: 'Aumento inatteso, rilevazione preliminare: il contrappeso che nessuno sta prezzando',
        },
        {
          label: 'XAU/USD',
          value: '4.400,44 $',
          tone: 'bull',
          note: 'Più 0,77%, con il Dollar Index in rialzo a 99,89: sale contro il cambio, non grazie al cambio',
        },
        {
          label: 'Treasury 10 anni',
          value: '4,682%',
          tone: 'bull',
          note: 'Dai 4,735% di ieri: rientra sotto la soglia del 4,70%',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Il conteggio dice quello che la previsione diceva',
      anchor: 'conteggio-e-previsione',
    },
    {
      kind: 'paragraph',
      text: 'La distinzione che questo archivio applica da una settimana — le preferenze dichiarate da una parte, i vincoli materiali dall’altra — serve esattamente a giornate come questa. Ieri due enti avevano scritto che il problema dell’offerta durerà: l’agenzia americana con una previsione fino a fine 2027, e la lettura pubblicata qui l’aveva classificata per quello che era, un’attesa dichiarata. Oggi il numero contato va nella stessa direzione, e non è una conferma qualunque: è la misura su cui questa scheda ha costruito tutto il ragionamento su Hormuz dal 5 agosto.',
    },
    {
      kind: 'paragraph',
      text: 'Otto transiti sono anche il livello che era stato scelto come soglia il 5 agosto, e ci si torna dopo una settimana in cui la media si era stabilizzata più in alto. Il dettaglio che pesa più del totale è però un altro: una sola nave in uscita. Il traffico che conta per il prezzo del greggio è quello che porta barili fuori dal Golfo, e un giorno con un’unica uscita non è uno Stretto rallentato, è uno Stretto che per quel giorno non ha esportato.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il livello non è affidabile, la direzione sì',
      text: 'Va detto subito, perché questo archivio ha già sbagliato una volta esattamente qui. L’11 agosto aveva dovuto correggersi: le due navi contate venerdì erano un minimo di campionamento e non il livello, e la media a dieci giorni le collocava molto più in alto. Oggi i due fornitori non concordano fra loro — otto transiti secondo una serie, undici contro quattordici del giorno prima secondo l’altra. Il numero puntuale non regge, quindi non va usato come regge. Quello che regge è che entrambe le serie scendono, e che la media a dieci giorni è passata da circa undici a circa dodici mentre il dato giornaliero peggiora: una media che sale con un dato che scende descrive un traffico che si sta concentrando in pochi giorni buoni.',
    },
    {
      kind: 'heading',
      text: 'Due agenzie in due giorni, e la seconda taglia più della prima',
      anchor: 'due-agenzie',
    },
    {
      kind: 'paragraph',
      text: 'L’agenzia internazionale per l’energia rivede la produzione mondiale attesa nel 2026 a meno 4,3 milioni di barili al giorno, circa il 4%, contro i meno 3,7 milioni stimati appena un mese fa: l’offerta globale scende a circa 102,02 milioni. È una revisione di 600.000 barili al giorno in un mese, e arriva ventiquattro ore dopo quella dell’agenzia americana. Due istituzioni che lavorano su dati diversi e con mandati diversi si muovono nella stessa direzione nello stesso momento.',
    },
    {
      kind: 'paragraph',
      text: 'La convergenza vale più della somma, ed è la ragione per cui oggi la classificazione di ieri va aggiornata invece che ripetuta. Una previsione isolata resta una preferenza dichiarata; due previsioni indipendenti che convergono e un conteggio di navigazione che le segue sono tre osservazioni che puntano allo stesso posto. Non diventano un fatto sul 2027 — nessuno sa che cosa succederà nel 2027 — ma smettono di essere l’opinione di un ente.',
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Il numero che va nella direzione opposta, e nessuno lo sta prezzando',
      text: 'Nella stessa mattinata le scorte americane di greggio risultano in aumento di 9,1 milioni di barili secondo la rilevazione dell’associazione di settore. È molto, è inatteso, ed è l’unico dato della giornata che dice il contrario di tutti gli altri: tre fonti descrivono meno offerta e i serbatoi americani si riempiono. Le spiegazioni possibili sono due e non sono equivalenti — o si sta attingendo a scorte costruite prima, e allora è un ammortizzatore che si consuma, oppure la domanda sta cedendo, e allora il problema dell’offerta conta meno di quanto le agenzie scrivano. La rilevazione è però preliminare e non ufficiale: il dato che decide esce più tardi, ed è nelle condizioni di invalidazione qui sotto.',
    },
    {
      kind: 'heading',
      text: 'I 4.400 sono stati presi, e non è quello il fatto',
      anchor: 'i-4400-presi',
    },
    {
      kind: 'paragraph',
      text: 'L’oro è a 4.400,44 dollari con più 0,77%, quindi la soglia sfiorata tre volte ieri è stata superata. Questa scheda però ieri sera ha scritto che quel livello smetteva di essere considerato informativo, perché è un numero tondo e sui numeri tondi si accumulano gli ordini in attesa. Sarebbe comodo dimenticarlo adesso che il livello è stato preso, e non si fa: una regola che vale finché conviene non è una regola.',
    },
    {
      kind: 'paragraph',
      text: 'Il fatto informativo è un altro, e non dipende da nessuna soglia. L’oro sale dello 0,77% mentre il Dollar Index sale a 99,89 e il Brent sale per la sesta seduta di fila. Un metallo che guadagna contro un dollaro che guadagna non sta rispondendo al cambio; un metallo che guadagna mentre il greggio corre non sta rispondendo al canale dei tassi, che quel greggio dovrebbe alimentare contro di lui. Quello che resta è la domanda rifugio, ed è la prima volta in questa fase che si vede isolata dagli altri due canali.',
    },
    {
      kind: 'heading',
      text: 'La terza voce che nomina il Medio Oriente, la seconda che non vota',
      anchor: 'terza-voce',
    },
    {
      kind: 'paragraph',
      text: 'Susan Collins, presidente della Fed di Boston, dice al Financial Times che pur avendo sostenuto la pausa di luglio sarebbe pronta ad appoggiare una stretta già a settembre se i dati mostrassero pressioni sui prezzi persistenti, e cita esplicitamente l’impatto del caro energia sulle famiglie e il rischio che la guerra con l’Iran prolunghi il problema del costo della vita. È la terza banca centrale in tre giorni a mettere il Medio Oriente dentro il proprio ragionamento sui prezzi, dopo il riassunto delle opinioni della Banca del Giappone e la presidente ad interim della Fed di Atlanta.',
    },
    {
      kind: 'paragraph',
      text: 'La scala usata qui non cambia, e va applicata anche quando il messaggio è più forte. Collins quest’anno non vota al FOMC, esattamente come Venable ieri: sono due preferenze dichiarate da chi non ha il voto, contro un solo atto a verbale in tutta la settimana — il dissenso di Hammack per venticinque punti base alla riunione del 29 luglio. Il conto operativo resta uno a due in favore delle dichiarazioni, e la probabilità di un rialzo a settembre resta intorno alla metà, cioè dove stava prima che qualcuna delle due parlasse.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Un vincolo che si stringe, e un dato in arrivo che può cancellarlo',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Il metallo sale dello 0,77% con il Dollar Index in rialzo e il greggio alla sesta seduta positiva: è domanda rifugio isolata dagli altri due canali.',
          'Il decennale rientra a 4,682% dai 4,735% di ieri, quindi sotto la soglia del 4,70% seguita qui.',
          'Il conteggio dei transiti scende a otto con una sola nave in uscita, e due agenzie energetiche convergono sulla durata del problema.',
          'Le due voci della Fed che hanno aperto a un rialzo di settembre non votano: la probabilità implicita resta dov’era prima che parlassero.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Il Brent è alla sesta seduta di rialzo intorno a 89,5 dollari, circa 88,1 sulla serie usata qui: il canale energia-tassi ha più carburante, non meno.',
          'L’indice dei prezzi alle 14:30 può trasformare due dichiarazioni senza voto in una riprezzatura vera in mezz’ora.',
          'Il massimo di 4.434-4.435 dollari resta a trentacinque dollari, e la soglia appena superata è un livello tondo su cui questo archivio non si appoggia più.',
          'Alle 19:00 l’asta del decennale da 39 miliardi: la prova sulla parte lunga della curva rimandata da ieri non è ancora stata superata.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'La direzione sull’orizzonte più stretto resta neutrale con inclinazione rialzista, ma la forza sale da bassa a media, ed è la prima volta in cinque pubblicazioni che questa scheda muove qualcosa. La ragione non è il prezzo: è che la motivazione scritta per tenere la forza bassa è stata rimossa dai fatti. Dalle 17:15 di ieri era questa — il motore di tutto è il rientro del greggio, e il rientro del greggio poggia su un annuncio senza accordo. Quel rientro si è annullato per intero, il Brent è tornato a 89,5, e l’oro è salito lo stesso. Una lettura che poggiava su una gamba caduta e che regge comunque non sta poggiando su quella gamba.',
    },
    {
      kind: 'paragraph',
      text: 'Non sale a rialzista per due ragioni, entrambe con un orario. La prima sono le 14:30, quando l’indice dei prezzi può fare in mezz’ora quello che due dichiarazioni della Fed non hanno fatto in due giorni: portare il biennale sopra il 4,237% e trasformare una preferenza in una riprezzatura. La seconda sono le 19:00, con l’asta del decennale: la parte lunga della curva è dove la tensione di questa settimana si è concentrata, e quella prova è ancora da fare. Fino ad allora la lettura descrive un premio di rischio che si forma per la prima volta senza aiuto dal cambio, e non un cambio di regime.',
    },
    {
      kind: 'note',
      text: 'I cinque controlli ricevuti questa mattina sono stati letti come un’analisi sola perché descrivono la stessa finestra pre-dato e la stessa configurazione, con i prezzi che si spostano di pochi dollari fra l’uno e l’altro: pubblicarli separati avrebbe lasciato in archivio cinque voci quasi identiche. I conteggi dei transiti provengono da due fornitori distinti che danno numeri diversi per lo stesso giorno, otto e undici: nel testo si usa la direzione e non il livello. L’aumento delle scorte americane è una rilevazione dell’associazione di settore e non il dato ufficiale. Le quotazioni del Brent appartengono alla serie che venerdì 7 agosto ha chiuso a 83,55 dollari, mentre le tacche di questo archivio sono fissate sulla serie che ha chiuso a 82,21: la conversione a circa 88,1 applica la stessa variazione percentuale ed è approssimata. La data di inizio dell’escalation citata dalla fonte è la fine di febbraio. I livelli di prezzo servono a rendere verificabile il ragionamento e non sono obiettivi.',
    },
  ],
};
