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
  updatedAt: '2026-08-07T21:20:00+02:00',
  checkedAt: '2026-08-07T23:25:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'rialzista',
      strength: 'bassa',
      regime:
        'L’oro tiene la maggior parte del movimento del dato — 4.346,88 dollari, più 2,50%, contro un massimo ' +
        'di 4.371,89 — ma tutto il resto lo sta restituendo. Il Brent è a 83,65 con più 1,41%, cioè a ' +
        'trentacinque centesimi dalla tacca degli 84 oltre la quale ricomincia a spingere i rendimenti contro ' +
        'il metallo; il biennale è risalito a 4,208% dal minimo di 4,158%; il decennale a 4,655% è a un punto ' +
        'base e mezzo dalla chiusura di ieri. La direzione regge perché nessuna soglia dichiarata è stata ' +
        'toccata, non perché il quadro sia migliorato. A mercati chiusi il conto è questo: l’oro finisce a ' +
        '4.342,18, più 2,39%, quasi trenta dollari sotto il massimo delle 15:00 e senza averlo più avvicinato; ' +
        'il Brent chiude a 82,21, meno 0,34%, cioè negativo sulla giornata e ventuno centesimi sopra la tacca ' +
        'che invalida questa lettura. Il metallo entra nel fine settimana con la direzione intatta e con ' +
        'entrambe le gambe più sottili di quanto fossero alle 17:25.',
      invalidation:
        'Un Brent che rientra sotto gli 82 dollari entro la seduta, che direbbe che la dichiarazione di ADNOC è stata letta come rumore; un oro spot che rientra sotto i 4.300 dollari; oppure una probabilità di rialzo a settembre che risale sopra il 50%.',
    },
    {
      horizon: 'medio',
      direction: 'rialzista',
      strength: 'media',
      regime:
        'Il vincolo sul mercato del lavoro si è sciolto — meno 23.000 posti e 103.000 tolti ai due mesi ' +
        'precedenti — e la probabilità di un rialzo a settembre è passata dall’altra parte della metà, al 43,7% ' +
        'da 55,1%. Sopra ci si è aggiunto un premio di rischio con un fatto materiale dietro: ADNOC dichiara ' +
        'quindici navi colpite nello Stretto di Hormuz dall’inizio del conflitto, tre questa settimana, con un ' +
        'morto e venti feriti. È il primo produttore del Golfo che quantifica un danno operativo invece di ' +
        'annunciare un’intenzione, e vale più di sei comunicati. Ma sopra gli 84 dollari quello stesso premio ' +
        'smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui.',
      invalidation:
        'Un indice dei prezzi mercoledì 12 agosto sopra le attese del 3,4% annuo, o un dato di fondo sopra il 2,5%, che con il greggio di nuovo in salita rimetterebbe il rialzo di settembre sul tavolo; una probabilità di rialzo a settembre di nuovo sopra il 50%; oppure un oro spot che rientra sotto i 4.300 dollari. Prima di tutte queste, un Brent sopra gli 84 dollari con il biennale che risale sopra il 4,25%.',
    },
    {
      horizon: 'lungo',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'La gamba della domanda strutturale ha smesso di essere un’affermazione ed è tornata a essere un ' +
        'numero: la banca centrale cinese ha aggiunto 640.000 once a luglio, quasi venti tonnellate, il ' +
        'ventunesimo mese di fila e il maggior acquisto da ottobre 2023, con il ritmo che accelera da marzo. ' +
        'Attorno, tre atti americani nella stessa giornata allargano la portata dello stesso strumento — dazi ' +
        'secondari votati dal Senato, sanzioni sui binari di pagamento iraniani, e il passaggio procedurale che ' +
        'la Corte Suprema aveva indicato per rimuovere una governatrice della Fed. Contro tutto questo restano ' +
        'le aspettative di inflazione ferme al 3,3% e al 3,0% su tre e cinque anni, che tengono in vita il caso ' +
        'per tassi alti: è la ragione per cui la lettura non passa a rialzista.',
      invalidation:
        'Una lettura di agosto delle riserve cinesi con acquisti sotto le 160.000 once di marzo, o un mese senza acquisti, in uscita all’inizio di settembre; la bocciatura alla Camera del provvedimento sulle sanzioni, o una versione senza dazi secondari sull’energia; aspettative a tre e cinque anni che scendono nell’indagine di agosto; il ritorno stabile del decennale sopra il 5%; oppure la revoca dei dazi sul polisilicio prima del 4 dicembre.',
    },
  ],
  headline: 'Venti tonnellate a luglio, ventunesimo mese di fila',
  stance:
    'I dati ufficiali cinesi portano le riserve auree a 76,08 milioni di once da 75,44: 640.000 once comprate ' +
    'in luglio, quasi venti tonnellate, il maggior acquisto da ottobre 2023 e il ventunesimo mese consecutivo, ' +
    'con il ritmo che accelera da marzo. Nella stessa giornata il Senato approva 86 a 11 dazi fino al 100% sui ' +
    'maggiori acquirenti di energia russa, il Tesoro sanziona due borse di criptovalute usate da entità ' +
    'iraniane, e la Casa Bianca compie il passaggio che la Corte Suprema aveva indicato per rimuovere una ' +
    'governatrice della Fed. Gli acquisti di luglio non sono una reazione a tutto questo — li precedono — ma ' +
    'sono tre ragioni in più perché la serie continui.',
  favours: [
    'Guardare il ritmo degli acquisti e non solo il totale: 160.000 once a marzo e 640.000 a luglio dicono più dei ventuno mesi consecutivi',
    'Tenere separate le due scale: sulla giornata comanda il rapporto occupazionale, su settimane e mesi comanda chi compra e a quali condizioni',
    'Distinguere un provvedimento votato da una camera da una legge: la differenza è la Camera dei rappresentanti, e non è una formalità',
  ],
  avoid: [
    'Leggere gli acquisti di luglio come una reazione ai voti di oggi: li precedono di settimane, e chiamarla causa sarebbe raccontare una coincidenza di calendario',
    'Dare per scontato che dazi secondari sull’energia aiutino l’oro: il loro canale principale è il prezzo del greggio, che sopra gli 84 dollari lavora contro il metallo',
  ],
  confirming: [
    'Riserve auree cinesi a 76,08 mln di once da 75,44: quasi venti tonnellate in luglio',
    'Ventunesimo mese consecutivo di acquisti, con il ritmo in aumento da marzo',
    'Oro in chiusura a 4.342,18 $, più 2,39%: la settimana si chiude sopra i 4.300',
    'Rialzo Fed a settembre al 43,7% e Dollar Index 99,435, entrambi sotto le soglie',
  ],
  contradicting: [
    'Il Brent chiude a 82,21 $, meno 0,34%: il premio formato sull’annuncio di ADNOC è rientrato tutto',
    'Ventuno centesimi separano quella chiusura dalla tacca che invalida la lettura intraday',
    'Il provvedimento sulle sanzioni ha passato il solo Senato: non è legge',
    'Nessun nuovo massimo dalle 15:00: la punta resta 4.371,89',
    'Aspettative a tre e cinque anni ferme al 3,3% e al 3,0%, contro un obiettivo del 2%',
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
        'Sette annunci di distensione in quattro giorni — l’apertura di Bessent, la smentita iraniana, la ' +
        'minaccia rilanciata, la richiesta di controllo sugli ingressi, la trattativa «durata tutto il ' +
        'giorno», le coordinate concordate con l’Oman e infine Teheran che dice che quel tavolo riguarda la ' +
        'gestione delle rotte e non la riapertura. L’ottavo, del 7 agosto, non scioglie il nodo ma lo ' +
        'ridisegna dai due lati: un funzionario americano dice che Washington sosterrà solo un’intesa ' +
        'temporanea senza impedimenti e senza pedaggi, mentre Teheran ripete che la riapertura è subordinata ' +
        'alla rimozione del blocco navale e alla fine degli attacchi. Le due condizioni si escludono a vicenda ' +
        'esattamente come cinque giorni fa.',
      watch:
        'Il conteggio ha finalmente un numero fresco, e va nella direzione opposta alla riapertura: 33 navi da ' +
        'lunedì a giovedì contro 50 nella settimana precedente, con quattro transiti giovedì 6 agosto — fra cui ' +
        'la superpetroliera Nissos Kea con circa due milioni di barili caricati in Iraq. Quattro al giorno è ' +
        'la metà della soglia di otto che questo archivio segue dal 5 agosto. Il traffico non risale: cala. ' +
        'Adesso si sa anche perché, e non è più una deduzione: ADNOC dichiara quindici proprie navi colpite da ' +
        'missili o droni dall’inizio del conflitto, tre soltanto questa settimana, con un morto e venti feriti.',
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
      value: 'Brent 82,21 $ in chiusura',
      baseline: 'meno 0,34%, dopo un massimo di 84,40 e un minimo di 81,52',
      against:
        'In quattro giorni: una minaccia americana a Teheran, un piano di attacchi contro l’energia iraniana, ' +
        'una smentita, un missile houthi contro una petroliera saudita e una ritorsione iraniana annunciata ' +
        'agli impianti energetici del Golfo. A ognuna di queste il prezzo aveva reagito meno della precedente; ' +
        'quello che lo ha mosso, alla fine, è stata l’assenza di una conferma sull’intesa Iran-Oman.',
      watch:
        'In quarantotto ore il premio si è formato sopra gli 82 dollari su una bozza parlamentare iraniana, si ' +
        'è sgonfiato a 81,52 sui segnali di distensione, si è riformato a 83,65 sulla dichiarazione di ADNOC — ' +
        'quindici navi colpite, un morto, venti feriti — ed è rientrato di nuovo entro la chiusura, a 82,21 ' +
        'con il segno meno. Quattro movimenti in due giorni, e l’ultimo cancella un fatto materiale nel giro ' +
        'di sei ore: non è un vincolo che si scioglie, è un prezzo che oscilla intorno a una soglia. I due ' +
        'numeri restano gli 82 dollari, che la chiusura sfiora da ventuno centesimi, e gli 84, sopra i quali ' +
        'il greggio smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui.',
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
      label: 'Brent',
      now: 82.21,
      display: '82,21 $',
      marks: [
        {
          at: 82,
          display: '82 $',
          kind: 'invalida',
          note: 'sotto questo livello il premio si è sgonfiato per la settima volta in sette giorni, e la lettura perde la gamba geopolitica',
        },
        {
          at: 84,
          display: '84 $',
          kind: 'logora',
          note: 'sopra questo livello il greggio smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui',
        },
      ],
    },
    {
      label: 'Treasury a 10 anni',
      now: 4.655,
      display: '4,655%',
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
      now: 4342.18,
      display: '4.342,18 $',
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
    'washington-allarga-la-mano-pechino-compra-venti-tonnellate',
    'le-aspettative-a-un-anno-scendono-quelle-a-cinque-anni-no',
    'meno-23-mila-posti-e-il-rialzo-di-settembre-passa-in-minoranza',
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
