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
  updatedAt: '2026-08-06T14:55:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'neutrale-rialzista',
      strength: 'bassa',
      regime:
        'Il primo anello della catena che reggeva il metallo si è girato: il Brent è tornato sopra gli 80 ' +
        'dollari e il WTI verso i 76, perché la conferma dell’intesa Iran-Oman continua a non arrivare. È la ' +
        'tacca di logoramento fissata ieri mattina, superata in ventiquattro ore. I due dati statunitensi del ' +
        'pomeriggio si compensano e il mercato li ha lasciati passare con un punto base di reazione: fino al ' +
        'rapporto occupazionale non c’è una spinta nuova in nessuna delle due direzioni.',
      invalidation:
        'Una perdita rapida dei 4.200 dollari accompagnata dal decennale sopra il 4,70%; prima ancora, un decennale che torna sopra il 4,68% con l’oro ancora sopra i 4.250, che segnalerebbe il logoramento senza aspettare la rottura.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'La stessa asimmetria si ripete in due domini diversi: sei prese di posizione restrittive della Fed e ' +
        'una probabilità di rialzo a settembre ferma al 57%, e adesso una minaccia iraniana esplicita agli ' +
        'impianti energetici del Golfo con il Brent che scende invece di salire. Quello che viene dichiarato ha ' +
        'smesso di spostare quello che viene prezzato, e finché è così il metallo resta sostenuto dal canale dei ' +
        'tassi con un pavimento geopolitico sotto. Il rischio non è la direzione, è la sequenza: un attacco vero ' +
        'farebbe salire l’oro per rifugio e poi scendere per rendimenti.',
      invalidation:
        'Un Brent sopra gli 82 dollari, o un attacco effettivo contro gli impianti del Golfo che trasformi la minaccia in un fatto; una probabilità di rialzo a settembre che risale al 67% da cui era partita, con il 62% come primo segno che si sta muovendo; il decennale sopra il 4,70% o un Dollar Index sopra l’area 100-100,20.',
    },
    {
      horizon: 'lungo',
      direction: 'neutrale',
      strength: 'bassa',
      regime:
        'Gli acquisti delle banche centrali sostengono da sotto e la parte lunga della curva ha una variabile ' +
        'in meno, perché il Tesoro si è impegnato a non ingrossare le aste per diversi trimestri. Se ne ' +
        'aggiunge una seconda: la produttività statunitense è cresciuta dell’1,4% annualizzato contro un costo ' +
        'del lavoro per unità prodotta all’1,3%, e finché la prima cresce più del secondo la pressione ' +
        'salariale viene assorbita invece che trasmessa ai prezzi — è la base contabile che manca al timore ' +
        'della Fed di un’inflazione che si radica nei salari. Resta l’unico freno vero: rendimenti reali alti ' +
        'con un rialzo a settembre ancora dato al 57%.',
      invalidation:
        'Una svolta monetaria confermata dalle riunioni, il ritorno stabile del decennale sopra il 5%, oppure una revisione che riporti la produttività sotto la crescita del costo del lavoro per unità.',
    },
  ],
  headline: 'Due dati passano con un punto base di reazione, il Brent torna sopra gli 80',
  stance:
    'Sussidi iniziali a 199.000 sotto le attese e produttività all’1,4% contro un costo del lavoro per unità ' +
    'all’1,3%: due rilevazioni leggibili che si compensano, e il decennale si è mosso da 4,65% a 4,64%. Il ' +
    'mercato non le sta ignorando, sta aspettando il rapporto occupazionale di domani. Nel frattempo il Brent è ' +
    'tornato sopra gli 80 dollari — la tacca di logoramento fissata ieri mattina — perché la conferma ' +
    'dell’intesa Iran-Oman non arriva: la forza della lettura intraday scende, la direzione no.',
  favours: [
    'Aspettare il rapporto occupazionale invece di leggere una direzione in un punto base di movimento',
    'Guardare il Brent fra gli 80 e gli 82 dollari: è la fascia in cui il sostegno dell’oro si logora senza rompersi',
  ],
  avoid: [
    'Leggere i sussidi a 199.000 come un segnale sul dollaro: il dato è arrivato migliore delle attese e il dollaro non lo ha comprato',
    'Trattare una lettura trimestrale di produttività come una tendenza: è fra le serie più volatili e più riviste del quadro americano',
  ],
  confirming: [
    'Produttività +1,4% contro costo del lavoro +1,3%',
    'Sussidi continuativi in aumento a 1,801 mln',
    'XAU/USD stabile intorno a 4.258 $',
  ],
  contradicting: [
    'Brent di nuovo sopra gli 80 $, WTI verso 76',
    'Sussidi iniziali 199.000, sotto le attese',
    'Intesa Iran-Oman ancora senza conferma definitiva',
  ],
  constraints: [
    {
      label: 'Transiti nello Stretto di Hormuz',
      value: 'otto navi',
      baseline: 'contro 130-140 al giorno prima del conflitto',
      against:
        'Sei annunci di distensione in quattro giorni: l’apertura di Bessent, la smentita iraniana, la ' +
        'minaccia rilanciata, la richiesta di controllo sugli ingressi, la trattativa «durata tutto il ' +
        'giorno» e ora le coordinate concordate con l’Oman.',
      watch:
        'Il conteggio dei transiti quarantotto ore dopo la dichiarazione congiunta. Finché non risale, la ' +
        'riapertura è un’intenzione e non un fatto.',
      state: 'fermo',
    },
    {
      label: 'Mercato del lavoro statunitense che rallenta',
      value: 'ADP 44.000',
      baseline: 'attese 70.000, con JOLTS a 7,359 milioni contro 7,440',
      against:
        'Sei prese di posizione restrittive in pochi giorni: i tre membri del FOMC che chiedevano un rialzo ' +
        'immediato, poi Schmid e Kashkari, e ora la governatrice Cook, che nell’ultima riunione aveva votato ' +
        'per fermarsi e adesso si dice pronta a votare un rialzo. È la preferenza dichiarata più credibile ' +
        'possibile — un voto che si sposta, non un discorso — e non ha spostato di un punto quello che il ' +
        'mercato prezza che saranno costretti a fare.',
      watch:
        'La probabilità di un rialzo a settembre, ferma al 57% e sotto il 67% di qualche giorno fa, e il ' +
        'rapporto occupazionale di venerdì: nettamente sopra le attese di circa 80.000 posti allenterebbe il ' +
        'vincolo.',
      state: 'fermo',
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
      value: 'Brent sopra 80 $',
      baseline: 'da 79,08 di ieri mattina, WTI verso i 76',
      against:
        'In quattro giorni: una minaccia americana a Teheran, un piano di attacchi contro l’energia iraniana, ' +
        'una smentita, un missile houthi contro una petroliera saudita e una ritorsione iraniana annunciata ' +
        'agli impianti energetici del Golfo. A ognuna di queste il prezzo aveva reagito meno della precedente; ' +
        'quello che lo ha mosso, alla fine, è stata l’assenza di una conferma sull’intesa Iran-Oman.',
      watch:
        'Gli 82 dollari di Brent. La tacca di logoramento a 80 è stata superata in ventiquattro ore: il premio ' +
        'ha ricominciato a essere pagato, e sopra gli 82 l’effetto inflazionistico torna a pesare sull’oro più ' +
        'del rifugio.',
      state: 'si-allenta',
    },
  ],
  thresholds: [
    {
      label: 'Rialzo Fed a settembre',
      now: 57,
      display: '57%',
      marks: [
        {
          at: 62,
          display: '62%',
          kind: 'logora',
          note: 'metà strada verso il livello di partenza: il primo segno che le parole dei falchi hanno cominciato a spostare il numero',
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
      now: 80.1,
      display: 'sopra 80 $',
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
      now: 4.64,
      display: '4,64%',
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
      now: 4258,
      display: '≈ 4.258 $',
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
    'sussidi-e-produttivita-un-punto-base-di-reazione',
    'iran-minaccia-gli-impianti-del-golfo-il-greggio-scende',
    'cook-si-dice-pronta-a-un-rialzo-si-muove-solo-il-biennale',
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
