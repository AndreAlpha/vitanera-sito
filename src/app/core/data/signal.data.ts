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
  updatedAt: '2026-08-07T14:20:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'I quattro canali hanno smesso di contraddirsi: l’oro sale a 4.312,33 con un massimo di 4.327,70, il ' +
        'greggio è rientrato a 82,03 dal massimo di 84,40, il decennale è sceso a 4,664% e il dollaro a 99,752. ' +
        'Non è più il rifugio che vince contro il canale energetico, come alle 10:35: adesso nessuno dei due ' +
        'canali lavora contro il metallo. È una configurazione più pulita, e ha una scadenza dichiarata alle ' +
        '14:30.',
      invalidation:
        'Un oro spot che rientra sotto i 4.300 dollari, che ributterebbe indietro la soglia superata stamattina; un rapporto occupazionale nettamente sopra le attese di circa 80.000 posti con salari in accelerazione; oppure un decennale che torna sopra il 4,70%.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale-rialzista',
      strength: 'bassa',
      regime:
        'Il premio geopolitico ha smesso di essere una serie di annunci e ha preso una forma scritta: la ' +
        'clausola di difesa collettiva firmata alla Mecca da Arabia Saudita, Turchia e Pakistan non si ritira ' +
        'come si ritira un comunicato, e il nodo su Hormuz resta dov’era — sanzioni, clausola assicurativa, ' +
        'transiti a otto navi. Manca però la parte che conta per davvero, gli obblighi militari, che il ' +
        'comunicato non indica: è una promessa senza procedura, e finché resta tale il premio è di quelli che ' +
        'si prezzano ma non si misurano.',
      invalidation:
        'Un testo attuativo che limiti l’impegno alla consultazione senza automatismi; un oro spot che rientra sotto i 4.300 dollari; un Brent che torna sotto gli 80, che direbbe che l’energia non prezza più il rischio regionale; oppure un rapporto occupazionale nettamente sopra le attese di circa 80.000 posti. Prima di tutte queste, un decennale sopra il 4,70% con l’oro ancora sopra i 4.300.',
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
  headline: 'Alla Mecca la clausola c’è, gli obblighi militari no',
  stance:
    'Arabia Saudita, Turchia e Pakistan hanno firmato alla Mecca un accordo che dichiara l’attacco a uno come ' +
    'attacco a tutti. Stamattina questo archivio aveva scritto che la differenza fra un impegno operativo e una ' +
    'cornice di consultazione era tutta: la risposta è che il testo ha la forma del primo e, per ora, il ' +
    'contenuto del secondo — nessuna specifica sugli obblighi militari. Il negoziato durava da quasi un anno, ' +
    'quindi non è una reazione a questa settimana. Sui prezzi l’oro è a 4.312,33 con un massimo di 4.327,70 ' +
    'mentre il greggio rientra a 82,03: la giornata però la decide il rapporto occupazionale delle 14:30.',
  favours: [
    'Distinguere la promessa dalla procedura: una clausola di difesa collettiva vincola politicamente, ma senza obblighi scritti non produce comportamenti prevedibili',
    'Tenere separate le due scadenze: il patto conta sui giorni e sulle settimane, il rapporto occupazionale conta sul quarto d’ora',
  ],
  avoid: [
    'Leggere la firma come una reazione all’escalation: la trattativa durava da quasi un anno, gli eventi l’hanno accelerata e non generata',
    'Costruire una lettura che pretenda di sopravvivere al dato delle 14:30 senza averlo visto: questa nasce con una scadenza dichiarata',
  ],
  confirming: [
    'Clausola di difesa collettiva firmata, non più annunciata',
    'Oro spot 4.312,33 $, massimo di giornata 4.327,70',
    'Decennale 4,664% e Dollar Index 99,752, entrambi in calo',
  ],
  contradicting: [
    'Nessun obbligo militare specifico nel comunicato',
    'Brent rientrato a 82,03 $ dal massimo di 84,40',
    'Il rapporto occupazionale esce fra pochi minuti',
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
      value: 'otto navi',
      baseline: 'contro 130-140 al giorno prima del conflitto',
      against:
        'Sei annunci di distensione in quattro giorni — l’apertura di Bessent, la smentita iraniana, la ' +
        'minaccia rilanciata, la richiesta di controllo sugli ingressi, la trattativa «durata tutto il ' +
        'giorno» e le coordinate concordate con l’Oman — e adesso il settimo, che è il primo a smontare i ' +
        'precedenti: Teheran dice che quel tavolo riguarda la gestione delle rotte, non la riapertura.',
      watch:
        'Il conteggio dei transiti, fermo a otto navi dal 5 agosto e mai aggiornato da allora. Finché non ' +
        'risale, la riapertura è un’intenzione e non un fatto — e adesso nemmeno l’intenzione è più quella ' +
        'che si era capita.',
      state: 'fermo',
    },
    {
      label: 'Mercato del lavoro statunitense che rallenta',
      value: 'ADP 44.000',
      baseline: 'attese 70.000, con JOLTS a 7,359 milioni contro 7,440',
      against:
        'Sette prese di posizione restrittive in una settimana: i tre membri del FOMC che chiedevano un rialzo ' +
        'immediato, poi Schmid e Kashkari, poi la governatrice Cook, e ora il presidente Warsh secondo una ' +
        'ricostruzione del Financial Times. Le prime sei non avevano spostato di un punto quello che il ' +
        'mercato prezza; la settima lo ha spostato di 2,3 punti, e la differenza è che il presidente decide ' +
        'l’ordine del giorno. La preferenza di chi controlla il calendario è essa stessa un vincolo.',
      watch:
        'La probabilità di un rialzo a settembre, risalita a 56,7% da 54,4% ma ancora sotto il 57% di quattro ' +
        'giorni fa, e il rapporto occupazionale di domani: nettamente sopra le attese di circa 80.000 posti ' +
        'allenterebbe il vincolo, nettamente sotto lo rimetterebbe al suo posto.',
      state: 'si-allenta',
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
      value: 'Brent 81,99 $',
      baseline: 'rientrato dal massimo di 84,40, contro 79,45 di due giorni fa',
      against:
        'In quattro giorni: una minaccia americana a Teheran, un piano di attacchi contro l’energia iraniana, ' +
        'una smentita, un missile houthi contro una petroliera saudita e una ritorsione iraniana annunciata ' +
        'agli impianti energetici del Golfo. A ognuna di queste il prezzo aveva reagito meno della precedente; ' +
        'quello che lo ha mosso, alla fine, è stata l’assenza di una conferma sull’intesa Iran-Oman.',
      watch:
        'Gli 82 dollari di Brent sono stati superati il 6 agosto, dopo la tacca di logoramento a 80 passata il ' +
        'giorno prima, e adesso si conosce l’innesco: la pubblicazione della bozza iraniana sulla gestione dello ' +
        'Stretto. Il vincolo ha smesso di vincolare, ma su una base fragile — un testo non approvato — e da qui ' +
        'la domanda non è se il premio si paghi, è quanto duri senza che alla bozza segua una norma.',
      state: 'sciolto',
    },
  ],
  thresholds: [
    {
      label: 'Rialzo Fed a settembre',
      now: 55.1,
      display: '55,1%',
      marks: [
        {
          at: 62,
          display: '62%',
          kind: 'logora',
          note: 'il primo segno che le parole dei falchi spostano il numero oltre il punto di partenza, e non solo verso di esso',
        },
        {
          at: 67,
          display: '67%',
          kind: 'invalida',
          note: 'il ritorno al livello di qualche giorno fa: la lettura poggia sul fatto che quel numero non si muova, e a quel punto si sarebbe mosso di dieci punti',
        },
      ],
    },
    {
      label: 'Brent',
      now: 82.03,
      display: '82,03 $',
      marks: [
        {
          at: 82,
          display: '82 $',
          kind: 'invalida',
          note: 'sopra questo livello l’effetto inflazionistico torna a pesare più della domanda di rifugio',
        },
      ],
    },
    {
      label: 'Treasury a 10 anni',
      now: 4.664,
      display: '4,664%',
      marks: [
        {
          at: 4.68,
          display: '4,68%',
          kind: 'logora',
          note: 'con l’oro ancora sopra i 4.250 segnala il logoramento, senza aspettare la rottura',
        },
        {
          at: 4.7,
          display: '4,70%',
          kind: 'invalida',
          note: 'insieme alla perdita dei 4.200 dollari fa decadere la lettura intraday',
        },
      ],
    },
    {
      label: 'XAU/USD',
      now: 4312.33,
      display: '4.312,33 $',
      marks: [
        {
          at: 4160,
          display: '4.160 $',
          kind: 'invalida',
          note: 'il supporto tecnico indicato dalla fonte citata: sotto di lì decade anche la lettura sui giorni',
        },
        {
          at: 4200,
          display: '4.200 $',
          kind: 'logora',
          note: 'una perdita rapida di questa soglia, accompagnata dal decennale sopra il 4,70%',
        },
      ],
    },
  ],
  sources: [
    'un-attacco-a-uno-e-un-attacco-a-tutti-il-patto-e-firmato',
    'un-dazio-con-il-prezzo-minimo-e-la-data-prima-della-fed',
    'hormuz-il-pedaggio-che-nessuno-puo-pagare',
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
