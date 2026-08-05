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
  updatedAt: '2026-08-05T23:10:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'Il metallo tiene intorno a 4.253 dollari dopo un massimo a 4.265 e un rialzo superiore al 4%, e nelle ' +
        'ultime ore il canale che lo giustificava ha ripreso a collaborare: il decennale è sceso al 4,63%, prima ' +
        'discesa dopo quattro letture consecutive in salita, e il dollaro resta a 99,75. Contro restano ' +
        'l’estensione del movimento e un biennale che ha cominciato a salire.',
      invalidation:
        'Una perdita rapida dei 4.200 dollari accompagnata dal decennale sopra il 4,70%; prima ancora, un decennale che torna sopra il 4,68% con l’oro ancora sopra i 4.250, che segnalerebbe il logoramento senza aspettare la rottura.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'Sei prese di posizione restrittive della Fed in pochi giorni, l’ultima delle quali è una governatrice che ' +
        'nell’ultima riunione aveva votato per lasciare i tassi fermi, e la probabilità di un rialzo a settembre ' +
        'resta al 57%, sotto il 67% di qualche giorno fa. Finché quel numero non si muove la retorica restrittiva ' +
        'è un rischio e non un cambio di regime; il petrolio in calo, che Cook stessa indica come prima via ' +
        'd’uscita dal rialzo, lavora nella stessa direzione.',
      invalidation:
        'Una probabilità di rialzo a settembre che risale al 67% da cui era partita — con il 62% come primo segno che si sta muovendo —, il biennale sopra il 4,25% o un Dollar Index sopra l’area 100-100,20; sul metallo, XAU/USD sotto i 4.160 dollari.',
    },
    {
      horizon: 'lungo',
      direction: 'neutrale',
      strength: 'bassa',
      regime:
        'Gli acquisti delle banche centrali sostengono da sotto e la parte lunga della curva ha ora una ' +
        'variabile in meno, perché il Tesoro si è impegnato a non ingrossare le aste per diversi trimestri. ' +
        'Restano gli altri due freni: rendimenti reali alti e un rialzo Fed a settembre ancora dato al 57%.',
      invalidation:
        'Una svolta monetaria confermata dalle riunioni, oppure il ritorno stabile del decennale sopra il 5%.',
    },
  ],
  headline: 'Una governatrice della Fed apre a un rialzo, e il 57% non si muove',
  stance:
    'Lisa Cook, che nell’ultima riunione aveva votato per lasciare i tassi fermi, si dice pronta a sostenere un ' +
    'rialzo se l’inflazione non riprende a scendere: è la sesta presa di posizione restrittiva in pochi giorni e ' +
    'l’unica che contenga un cambio di posizione, non una ripetizione. La probabilità di un rialzo a settembre ' +
    'resta però al 57%, sotto il 67% di qualche giorno fa. L’unico rendimento che l’ha registrata è il biennale, ' +
    'risalito verso il 4,21%, mentre il decennale è sceso al 4,63% e il dollaro è rimasto debole: l’oro tiene ' +
    'intorno a 4.253 dollari.',
  favours: [
    'Misurare la svolta restrittiva sulla probabilità di rialzo a settembre, non sul numero degli interventi pubblici',
    'Guardare il biennale invece del decennale quando la notizia riguarda la decisione di settembre',
  ],
  avoid: [
    'Leggere l’apertura di Cook come un rialzo deciso: lei stessa elenca tre condizioni che lo eviterebbero',
    'Inseguire il metallo sopra i 4.250 dopo un più 4%, con la parte breve della curva che ha cominciato a salire',
  ],
  confirming: [
    'Rialzo Fed a settembre fermo al 57%',
    'Decennale sceso al 4,63%, prima discesa dopo quattro salite',
    'DXY debole ≈ 99,75',
  ],
  contradicting: [
    'Biennale risalito verso il 4,21%',
    'Cook, che aveva votato per fermarsi, apre al rialzo',
    'Oro esteso: più 4% e massimo a 4.265',
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
      label: 'Treasury a 2 anni',
      now: 4.21,
      display: '4,21%',
      marks: [
        {
          at: 4.25,
          display: '4,25%',
          kind: 'invalida',
          note: 'è la scadenza in cui un rialzo di settembre si prezzerebbe per primo: oltre qui la lettura sui giorni decade',
        },
      ],
    },
    {
      label: 'Treasury a 10 anni',
      now: 4.63,
      display: '4,63%',
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
      now: 4253,
      display: '≈ 4.253 $',
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
    'cook-si-dice-pronta-a-un-rialzo-si-muove-solo-il-biennale',
    'coordinate-concordate-a-hormuz-il-sesto-annuncio-e-diverso',
    'adp-debole-e-tesoro-fermo-ma-il-decennale-non-si-muove',
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
