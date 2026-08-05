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
  /** Slug delle analisi da cui deriva la lettura. */
  readonly sources: readonly string[];
}

/**
 * `null` quando non esiste alcuna lettura in corso: è lo stato in cui si trova
 * il sito finché non viene pubblicata la prima analisi. La panoramica mostra in
 * quel caso il riquadro «in attesa di notizie» al posto dell'indicatore.
 */
export const MARKET_SIGNAL: OperationalSignal | null = {
  updatedAt: '2026-08-05T17:30:00+02:00',
  checkedAt: '2026-08-05T18:20:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'rialzista',
      strength: 'media',
      regime:
        'Il rialzo è proseguito fino a circa 4.259 dollari, oltre +4% in una seduta, e continua a coinvolgere ' +
        'anche l’argento. Nel frattempo il decennale è al 4,63% e le attese sulla Fed non si sono riprezzate: ' +
        'la corsa si allunga senza che il meccanismo che dovrebbe spiegarla dia segno di essersi mosso. Resta un ' +
        'rialzo di flusso e di dollaro debole, e ogni dollaro in più lo rende più esteso, non più solido.',
      invalidation:
        'Un ritorno rapido sotto i 4.200-4.210 dollari, il decennale sopra il 4,70% o un Dollar Index in deciso recupero sopra quota 100; oppure, in senso opposto, una probabilità di rialzo sotto il 50%, che smentirebbe proprio la lettura del flusso.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'Il Tesoro finanzia i 68 miliardi di fabbisogno in più senza toccare le aste a dieci e trent’anni: lo ' +
        'shock di offerta che frenava l’oro è rinviato di diversi trimestri. In direzione contraria il fronte dei ' +
        'falchi si allarga — Schmid e Kashkari dopo i tre del FOMC — senza però spostare di un punto il prezzo ' +
        'che il mercato dà al rialzo di settembre. Restano aperti i due colli di bottiglia sulle rotte.',
      invalidation:
        'Un rapporto occupazionale di venerdì nettamente sopra le attese di circa 80.000 posti, o salari orari in riaccelerazione; oppure un XAU/USD incapace di tenere l’area 4.150-4.170.',
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
  headline: 'L’oro estende oltre 4.250, e il meccanismo che dovrebbe spiegarlo resta fermo',
  stance:
    'Al controllo delle 18:20 il rialzo è proseguito fino a circa 4.259 dollari, oltre +4% nella seduta, con ' +
    'l’argento che continua a seguire: dollaro meno sostenuto e decennale al 4,63%. Non è arrivato nessun fatto ' +
    'nuovo — nessun dato macro, nessun comunicato della Fed, nessuna riapertura verificabile di Hormuz — e le ' +
    'attese su un rialzo di settembre non si sono riprezzate. La lettura pubblicata alle 17:30 regge quindi ' +
    'proprio nella sua parte scomoda: il prezzo sale, il meccanismo no, e dopo un più 4% l’estensione conta più ' +
    'della conferma.',
  favours: [
    'Distinguere l’ampiezza del movimento dalla sua solidità: sale tutto il comparto, ma nessuna attesa si è mossa',
    'Aspettare il rapporto occupazionale di venerdì, che è l’unico appuntamento in grado di riprezzare la Fed',
  ],
  avoid: [
    'Leggere il più 4% come conferma della catena sui tassi: il decennale è dove stava a metà giornata',
    'Trattare l’estensione come forza: dopo una corsa di questa ampiezza il rischio di rientro cresce, non cala',
  ],
  confirming: [
    'XAU/USD ≈ 4.259 $, oltre +4%',
    'Sale anche l’argento: movimento di comparto',
    'Dollaro meno sostenuto',
  ],
  contradicting: [
    'Decennale al 4,63%, fermo da metà giornata',
    'Attese sulla Fed senza riprezzatura',
    'Nessun fatto nuovo dalle 17:30',
  ],
  sources: [
    'oro-sfiora-4200-ma-le-attese-sulla-fed-non-si-muovono',
    'adp-debole-e-tesoro-fermo-ma-il-decennale-non-si-muove',
    'attacco-houthi-nel-mar-rosso-il-secondo-collo-di-bottiglia',
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
