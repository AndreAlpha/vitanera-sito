import { BiasDirection, Horizon, Level } from '../models/article.model';

/**
 * Una delle tre letture della panoramica.
 *
 * Sono tre perché l'oro può salire nelle prossime ore e restare debole nel mese,
 * e una lettura sola costringe a scegliere quale delle due dire. Separandole,
 * una lettura intraday che si ribalta tre volte in un giorno non cancella più la
 * lettura di fondo, e chi legge vede subito su quale arco di tempo sta guardando.
 */
export interface SignalReading {
  readonly horizon: Horizon;
  readonly direction: BiasDirection;
  readonly strength: Level;
  /** Una riga sul perché: il meccanismo, non il prezzo. */
  readonly regime: string;
  /** Che cosa farebbe decadere questa lettura. Più di 10 caratteri. */
  readonly invalidation: string;
}

/**
 * Stato di un vincolo materiale.
 *
 * `fermo` è il caso normale e quello che interessa: il numero non si è mosso
 * nonostante tutto quello che è stato dichiarato intorno. `si-allenta` è quando
 * comincia a muoversi ma non abbastanza da non vincolare più. `sciolto` è quando
 * ha smesso di vincolare — e va detto, perché un vincolo che si scioglie cambia
 * la lettura quanto uno che regge.
 */
export type ConstraintState = 'fermo' | 'si-allenta' | 'sciolto';

/**
 * Un vincolo materiale, con accanto la preferenza dichiarata che lo contraddice.
 *
 * È il quadro descritto in `contenuti/studio/quadro-dei-vincoli.md`: le
 * preferenze sono opzionali e soggette ai vincoli, i vincoli non sono opzionali
 * né soggetti alle preferenze. Tradotto in questa scheda: da un lato quello che
 * viene dichiarato — annunci, intese, posizioni ufficiali — dall'altro il numero
 * materiale che quelle dichiarazioni non hanno spostato.
 *
 * Non è un doppione delle soglie di `SignalThreshold`. Una soglia dice quando
 * **questa lettura** muore; un vincolo dice che cosa tiene fermo il quadro a
 * prescindere da quello che si racconta, ed è la cosa che sopravvive a tre
 * cambi di impostazione intraday.
 *
 * Il caso che ha fatto nascere il campo: sei annunci di distensione su Hormuz in
 * quattro giorni, e un conteggio dei transiti fermo a otto navi contro le 130-140
 * al giorno di prima del conflitto. Erano frasi, e le frasi non spostano un
 * vincolo materiale.
 */
export interface SignalConstraint {
  /** Che cosa vincola: un fatto, non una posizione dichiarata. */
  readonly label: string;
  /** Il numero materiale adesso. Corto: sta accanto all'etichetta. */
  readonly value: string;
  /** Il termine di paragone che rende leggibile il valore, se serve. */
  readonly baseline?: string;
  /**
   * La preferenza dichiarata che dice il contrario. È l'altra metà del quadro:
   * senza, resta un numero e non si vede più perché è diagnostico.
   */
  readonly against: string;
  /**
   * Il flusso dati su cui si misura, e che cosa lo scioglierebbe. Deve essere
   * verificabile con un numero e una data, come le condizioni di invalidazione.
   */
  readonly watch: string;
  readonly state: ConstraintState;
}

/** Che cosa fa una soglia quando viene raggiunta. */
export type ThresholdKind = 'logora' | 'invalida';

/**
 * Una tacca su una scala: il livello, e che cosa succede quando ci si arriva.
 *
 * `logora` esiste per una ragione precisa, scritta nel registro degli esiti: la
 * lettura del 5 agosto fissava l'invalidazione al 4,70% e il decennale è passato
 * da 4,60% a 4,64% in sei ore, in salita a ogni controllo, mentre il registro
 * continuava a segnare «non scattata». Una soglia va messa anche dove la lettura
 * comincia a logorarsi, non solo dove finisce.
 */
export interface ThresholdMark {
  readonly at: number;
  /** Il livello come va scritto a video: `4,70%`, `4.200 $`. */
  readonly display: string;
  readonly kind: ThresholdKind;
  /** Che cosa comporta, in mezza riga. */
  readonly note: string;
}

/**
 * Quanto manca perché una lettura sia sbagliata, su una scala.
 *
 * Le condizioni di invalidazione sono già scritte in prosa in ogni `reading`,
 * ma «il decennale sopra il 4,70%» accanto a «il decennale è al 4,64%» non dice
 * a colpo d'occhio che mancano sei punti base. Qui i due numeri stanno sulla
 * stessa scala e la distanza si vede.
 *
 * La scala non si dichiara: si ricava dal valore corrente e dalle tacche, con un
 * margine ai lati. Un minimo e un massimo scritti a mano sarebbero due numeri in
 * più da tenere allineati a ogni pubblicazione, e sbagliarli sposterebbe il
 * pallino senza che nulla lo segnali.
 */
export interface SignalThreshold {
  /** Che cosa si sta guardando: `Treasury a 10 anni`, `XAU/USD`. */
  readonly label: string;
  /** Il valore corrente, per la posizione sulla scala. */
  readonly now: number;
  /** Lo stesso valore come va scritto a video. */
  readonly display: string;
  /** Le tacche, in ordine crescente. Almeno una. */
  readonly marks: readonly ThresholdMark[];
}

/**
 * Indicatore operativo sull'oro mostrato in panoramica.
 *
 * Sintetizza le ultime pubblicazioni in tre letture, una per orizzonte. Va
 * aggiornato a mano ogni volta che viene pubblicata una nuova analisi.
 *
 * **Non scade.** C'era una durata dichiarata, `validityMinutes`, dopo la quale
 * la panoramica passava da sola a «in attesa di notizie». È stata tolta: era
 * precisione finta. Nessuno sa davvero se una lettura vale novanta minuti o
 * duecento, e un indicatore che si dichiara valido fino alle 21:35 sta
 * promettendo qualcosa che non può mantenere. Al suo posto c'è la data e l'ora
 * dell'ultimo aggiornamento, scritta grande: quanto sia vecchia, e se quello che
 * dice regga ancora, lo decide chi legge — che è l'unico ad avere davanti il
 * mercato di adesso.
 *
 * Resta un riepilogo editoriale di quanto scritto negli articoli: non è
 * consulenza finanziaria né un segnale di acquisto o vendita.
 */
export interface OperationalSignal {
  /**
   * Identico come stringa al `publishedAt` dell'analisi più recente: è quel
   * momento che l'indicatore fotografa, non il momento in cui qualcuno lo ha
   * ricopiato.
   */
  readonly updatedAt: string;
  /**
   * Quando le conferme e le contraddizioni sono state ricontrollate l'ultima
   * volta, se è successo dopo la pubblicazione dell'analisi.
   *
   * Serve perché `updatedAt` fa due mestieri e ne può fare uno solo: dice **quale
   * analisi** l'indicatore riassume, ed è vincolato a coincidere con il suo
   * `publishedAt`. Quando il quadro viene riverificato senza pubblicare nulla —
   * il prezzo si è mosso nella direzione già descritta, nessun fatto nuovo — quel
   * campo non si può muovere, e senza questo la panoramica direbbe di essere
   * ferma a ore prima mentre i numeri accanto sono di adesso.
   *
   * Si omette quando coincide con `updatedAt`: una riga in più che ripete la
   * stessa ora è rumore.
   */
  readonly checkedAt?: string;
  readonly asset: string;
  /** Le tre letture, in ordine di orizzonte crescente. */
  readonly readings: readonly SignalReading[];
  readonly headline: string;
  readonly stance: string;
  readonly favours: readonly string[];
  readonly avoid: readonly string[];
  readonly confirming: readonly string[];
  readonly contradicting: readonly string[];
  /**
   * I vincoli materiali sotto la lettura, con la preferenza che ciascuno
   * contraddice. Cambiano molto più lentamente di tutto il resto della scheda.
   */
  readonly constraints: readonly SignalConstraint[];
  /** Le soglie dichiarate dalle letture, messe su una scala. */
  readonly thresholds: readonly SignalThreshold[];
  /** Slug delle analisi da cui deriva la lettura. */
  readonly sources: readonly string[];
}

/**
 * `null` quando non esiste alcuna lettura in corso: è lo stato in cui si trova
 * il sito finché non viene pubblicata la prima analisi. La panoramica mostra in
 * quel caso il riquadro «in attesa di notizie» al posto dell'indicatore.
 */
export const MARKET_SIGNAL: OperationalSignal | null = {
  updatedAt: '2026-08-07T15:05:00+02:00',
  checkedAt: '2026-08-07T16:20:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'rialzista',
      strength: 'bassa',
      regime:
        'Il canale dei tassi ha cambiato lato in mezz’ora. Il rapporto occupazionale dà meno 23.000 posti ' +
        'contro attese di circa 80.000, con 103.000 tolti a maggio e giugno, e tutta la curva breve si è mossa ' +
        'insieme: biennale a 4,162% da 4,245%, decennale a 4,616%, Dollar Index a 99,345 sotto la soglia di ' +
        '99,50 dichiarata ieri sera. L’oro spot è a 4.360,97 con un massimo di 4.371,89. La prova che sia il ' +
        'canale dei tassi e non il rifugio è che nella stessa ora il Brent scende dell’1,01% a 81,66: il metallo ' +
        'sale mentre il premio geopolitico si sgonfia. Ricontrollato alle 16:20 la direzione regge e la forza ' +
        'no: l’oro ha restituito 37 dollari dal massimo, il biennale è risalito di 3,3 punti base dal minimo e ' +
        'il Brent è tornato sopra gli 82. Nessuna delle tre soglie dichiarate è stata toccata, ma si sono ' +
        'avvicinate tutte e tre insieme, e la prova per divergenza è la prima cosa che si è consumata.',
      invalidation:
        'Un oro spot che rientra sotto i 4.300 dollari, che cancellerebbe l’intero movimento del dato; una probabilità di rialzo a settembre che risale sopra il 50%, cioè che torna a essere lo scenario più probabile; oppure un decennale che torna sopra il 4,70% con l’oro ancora sopra i 4.300.',
    },
    {
      horizon: 'medio',
      direction: 'rialzista',
      strength: 'media',
      regime:
        'Il vincolo sul mercato del lavoro si è sciolto, e con esso l’ipotesi che reggeva il rialzo di ' +
        'settembre: la probabilità è passata dal 55,1% al 41,7%, cioè dall’altra parte della metà, e a dicembre ' +
        'dall’82,7% al 73,8%. Non è una sfumatura di probabilità, è il cambio del caso base. I salari ' +
        'decelerano su entrambe le letture — più 0,1% sul mese, più 3,2% sull’anno — e tolgono alla banca ' +
        'centrale l’argomento inflazionistico, non solo la scusa. Il premio geopolitico non è sparito ma è ' +
        'passato in secondo piano: i transiti a Hormuz restano 33 in quattro giorni contro 50 la settimana ' +
        'prima, e la clausola firmata alla Mecca resta sul tavolo senza obblighi militari.',
      invalidation:
        'Un indice dei prezzi mercoledì 12 agosto sopra le attese del 3,4% annuo, o un dato di fondo sopra il 2,5%, che restituirebbe alla Fed la ragione che il lavoro le ha appena tolto; una probabilità di rialzo a settembre di nuovo sopra il 50%; oppure un oro spot che rientra sotto i 4.300 dollari. Prima di tutte queste, un Brent che torna sopra gli 84 dollari mentre l’oro sale con lui: toglierebbe la prova che a muovere il metallo siano i tassi e non il rischio.',
    },
    {
      horizon: 'lungo',
      direction: 'neutrale-rialzista',
      strength: 'bassa',
      regime:
        'Le tre gambe di prima reggono: acquisti delle banche centrali sotto il prezzo, aste del Tesoro che non ' +
        'crescono per diversi trimestri, e una produttività statunitense all’1,4% annualizzato contro un costo ' +
        'del lavoro per unità all’1,3%, che assorbe la pressione salariale invece di trasmetterla. Se ne ' +
        'aggiunge una quarta, ed è di segno diverso: i prezzi minimi all’importazione sul polisilicio, in vigore ' +
        'dal 4 dicembre, sono un’inflazione decisa per atto e non dalla domanda, che la produttività non può ' +
        'assorbire perché non passa dai salari. Il freno resta lo stesso — rendimenti reali alti — ma ora ' +
        'dipende da come la Fed tratterà un rincaro che non ha creato lei.',
      invalidation:
        'Una svolta monetaria confermata dalle riunioni, il ritorno stabile del decennale sopra il 5%, una revisione che riporti la produttività sotto la crescita del costo del lavoro per unità, oppure la revoca dei dazi sul polisilicio prima del 4 dicembre — o prezzi di mercato che restano sopra i pavimenti fissati, nel qual caso il provvedimento non vincola nulla.',
    },
  ],
  headline: 'Il rialzo di settembre passa in minoranza: 41,7%',
  stance:
    'Il rapporto occupazionale di luglio dà meno 23.000 posti contro attese di circa 80.000, con maggio e ' +
    'giugno rivisti al ribasso di 103.000 in tutto. La probabilità di un rialzo a settembre è scesa dal 55,1% ' +
    'al 41,7%: per la prima volta il caso base è che la Fed resti ferma. L’oro spot è a 4.360,97 dollari, più ' +
    '2,84%, ma il fatto che conta è un altro — nella stessa ora il Brent scende dell’1,01% a 81,66. Il metallo ' +
    'sale mentre il premio geopolitico si sgonfia, ed è la firma di un movimento sui tassi e non sul rifugio. ' +
    'Questo dato era stato indicato come decisivo da quattro analisi, tutte scritte prima di conoscerlo.',
  favours: [
    'Leggere la divergenza fra oro e greggio come la prova di quale canale stia lavorando: se salissero insieme sarebbe rifugio, e durerebbe quanto la tensione',
    'Guardare le revisioni prima del numero di copertina: 103.000 posti tolti a maggio e giugno pesano più dei 23.000 persi a luglio',
    'Leggere il calo della disoccupazione al 4,1% insieme alla partecipazione al 61,4%: il tasso migliora perché la forza lavoro si svuota, non perché qualcuno viene assunto',
  ],
  avoid: [
    'Trattare il movimento come ancora da fare: 120 dollari sono arrivati in mezz’ora, e chi legge lo fa con il rialzo già avvenuto',
    'Dare per chiusa la partita sulla Fed prima dell’indice dei prezzi di mercoledì: un dato sopra le attese le restituisce la ragione che il lavoro le ha appena tolto',
  ],
  confirming: [
    'Meno 23.000 posti contro attese di circa 80.000, e 103.000 tolti ai due mesi precedenti',
    'Rialzo Fed a settembre al 43,7%: risalito da 41,7% ma ancora sotto la metà',
    'Oro spot 4.334,72 $ alle 16:06, più 2,22%: tre quarti del movimento del dato tengono',
    'Dollar Index 99,430 e biennale 4,191%, entrambi sotto i livelli di ieri',
  ],
  contradicting: [
    'L’oro ha restituito 37 dollari dal massimo di 4.371,89',
    'Brent di nuovo a 82,52 $, sopra la soglia e positivo sulla giornata',
    'Biennale risalito di 3,3 punti base dal minimo di 4,158%',
    'La disoccupazione scende al 4,1%, meglio delle attese del 4,2%',
    'L’indice dei prezzi di mercoledì è atteso al 3,4% annuo',
  ],
  constraints: [
    {
      label: 'Transito assicurabile nello Stretto di Hormuz',
      value: 'copertura che decade',
      baseline: 'clausola del Lloyd’s Market Association, fine luglio',
      against:
        'Un’intesa Iran-Oman descritta come vicina da Washington per una settimana, e un pacchetto di ' +
        'commissioni su cui le tre parti restano lontanissime: l’Iran chiede il 5-7% del valore del carico, ' +
        'l’Oman discute di circa il 3%, gli Stati Uniti non ne vogliono nessuna. A luglio il consiglio ' +
        'dell’Organizzazione marittima internazionale aveva chiesto che il passaggio resti libero da pedaggi.',
      watch:
        'Due atti tecnici, entrambi con una firma sopra: una deroga statunitense alle sanzioni sull’Autorità ' +
        'dello Stretto del Golfo Persico, e il ritiro o la modifica della clausola che fa decadere la copertura ' +
        'contro il rischio di guerra a chi paga. Finché restano dove sono, un accordo annunciato non è un ' +
        'accordo utilizzabile e le navi non si muovono.',
      state: 'fermo',
    },
    {
      label: 'Transiti nello Stretto di Hormuz',
      value: '33 navi in quattro giorni',
      baseline: 'contro 50 la settimana prima e 130-140 al giorno prima del conflitto',
      against:
        'Sei annunci di distensione in quattro giorni — l’apertura di Bessent, la smentita iraniana, la ' +
        'minaccia rilanciata, la richiesta di controllo sugli ingressi, la trattativa «durata tutto il ' +
        'giorno» e le coordinate concordate con l’Oman — e adesso il settimo, che è il primo a smontare i ' +
        'precedenti: Teheran dice che quel tavolo riguarda la gestione delle rotte, non la riapertura.',
      watch:
        'Il conteggio ha finalmente un numero fresco, e va nella direzione opposta alla riapertura: 33 navi da ' +
        'lunedì a giovedì contro 50 nella settimana precedente, con quattro transiti giovedì 6 agosto — fra cui ' +
        'la superpetroliera Nissos Kea con circa due milioni di barili caricati in Iraq. Quattro al giorno è ' +
        'la metà della soglia di otto che questo archivio segue dal 5 agosto. Il traffico non risale: cala.',
      state: 'fermo',
    },
    {
      label: 'Mercato del lavoro statunitense che rallenta',
      value: 'meno 23.000 posti',
      baseline: 'attese circa 80.000; maggio e giugno rivisti per 103.000 in meno',
      against:
        'Sette prese di posizione restrittive in una settimana: i tre membri del FOMC che chiedevano un rialzo ' +
        'immediato, poi Schmid e Kashkari, poi la governatrice Cook, e infine il presidente Warsh secondo una ' +
        'ricostruzione del Financial Times. Nessuna delle sette era riuscita a spostare il numero oltre il 57%. ' +
        'Un solo dato lo ha portato al 41,7%: la preferenza di chi decide l’ordine del giorno vale meno di una ' +
        'diffusione statistica, ed è la dimostrazione più netta che questo archivio abbia raccolto.',
      watch:
        'Non rallenta più: si contrae. I posti di luglio sono meno 23.000 contro attese di circa 80.000, la ' +
        'partecipazione scende al 61,4% — minimo da oltre cinque anni — e i salari decelerano a più 3,2% ' +
        'annuo. Il vincolo è sciolto, e a rimetterlo in piedi può essere solo l’indice dei prezzi di mercoledì ' +
        '12 agosto: sopra il 3,4% annuo la Fed si ritrova con un motivo per alzare che il lavoro non le dà più.',
      state: 'sciolto',
    },
    {
      label: 'Emissioni del Tesoro a lunga scadenza',
      value: '125 mld $',
      baseline: 'aste invariate per diversi trimestri',
      against:
        'Un fabbisogno cresciuto di 68 miliardi faceva attendere aste più grosse proprio sulle scadenze ' +
        'lunghe, ed era una delle tre gambe che tenevano il trentennale sui massimi dal 2007.',
      watch:
        'Il prossimo rifinanziamento trimestrale. Fino ad allora lo shock di offerta che frenava l’oro è ' +
        'rinviato, e alla parte lunga della curva resta una variabile in meno.',
      state: 'sciolto',
    },
    {
      label: 'Premio di rischio sul greggio che non si forma',
      value: 'Brent 82,52 $',
      baseline: 'risalito dal minimo di 81,52, di nuovo positivo sulla giornata',
      against:
        'In quattro giorni: una minaccia americana a Teheran, un piano di attacchi contro l’energia iraniana, ' +
        'una smentita, un missile houthi contro una petroliera saudita e una ritorsione iraniana annunciata ' +
        'agli impianti energetici del Golfo. A ognuna di queste il prezzo aveva reagito meno della precedente; ' +
        'quello che lo ha mosso, alla fine, è stata l’assenza di una conferma sull’intesa Iran-Oman.',
      watch:
        'Il premio si è formato il 6 agosto sopra gli 82 dollari, ha toccato 84,40, è sceso fino a 81,52 sulla ' +
        'scia dei segnali di distensione fra Iran e Paesi del Golfo, e alle 16:20 è già tornato a 82,52, ' +
        'positivo sulla giornata. Lo sgonfiamento è durato meno di due ore: è la stessa fragilità che ' +
        'l’analisi del 6 agosto attribuiva alla base del premio, applicata stavolta al suo rientro. Da qui il ' +
        'numero da guardare resta il ritorno sopra gli 84 dollari, che direbbe che il rischio regionale torna ' +
        'a prezzarsi e che a muovere l’oro non sono più soltanto i tassi.',
      state: 'sciolto',
    },
  ],
  thresholds: [
    {
      label: 'Rialzo Fed a settembre',
      now: 43.7,
      display: '43,7%',
      marks: [
        {
          at: 50,
          display: '50%',
          kind: 'invalida',
          note: 'sopra la metà il rialzo torna a essere lo scenario più probabile, ed è l’unica gamba su cui questa lettura poggia',
        },
      ],
    },
    {
      label: 'Treasury a 10 anni',
      now: 4.642,
      display: '4,642%',
      marks: [
        {
          at: 4.68,
          display: '4,68%',
          kind: 'logora',
          note: 'la tacca sfiorata stamattina con un massimo di 4,690%: segnala il logoramento senza aspettare la rottura',
        },
        {
          at: 4.7,
          display: '4,70%',
          kind: 'invalida',
          note: 'con l’oro ancora sopra i 4.300 direbbe che il mercato obbligazionario ha già smesso di credere al dato di oggi',
        },
      ],
    },
    {
      label: 'XAU/USD',
      now: 4334.72,
      display: '4.334,72 $',
      marks: [
        {
          at: 4300,
          display: '4.300 $',
          kind: 'invalida',
          note: 'sotto questo livello il movimento del rapporto occupazionale è cancellato per intero, e con esso la ragione della lettura',
        },
      ],
    },
  ],
  sources: [
    'meno-23-mila-posti-e-il-rialzo-di-settembre-passa-in-minoranza',
    'un-attacco-a-uno-e-un-attacco-a-tutti-il-patto-e-firmato',
    'un-dazio-con-il-prezzo-minimo-e-la-data-prima-della-fed',
  ],
};

export const DIRECTION_LABEL: Record<BiasDirection, string> = {
  rialzista: 'Rialzista',
  'neutrale-rialzista': 'Neutro con inclinazione rialzista',
  neutrale: 'Neutro',
  'neutrale-ribassista': 'Neutro con inclinazione ribassista',
  ribassista: 'Ribassista',
};

export const STRENGTH_VALUE: Record<Level, number> = { bassa: 1, media: 2, alta: 3 };

/** Etichette dei tre orizzonti, con l'arco di tempo scritto per esteso. */
export const HORIZON_LABEL: Record<Horizon, string> = {
  breve: 'Intraday',
  medio: 'Medio termine',
  lungo: 'Lungo termine',
};

export const HORIZON_SPAN: Record<Horizon, string> = {
  breve: 'prossimi minuti o ore',
  medio: 'prossimi giorni',
  lungo: 'prossime settimane o mesi',
};
