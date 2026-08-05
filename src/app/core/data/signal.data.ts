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
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'rialzista',
      strength: 'media',
      regime:
        'Il movimento è ampio — oro a 4.199,8 con oltre +3%, argento sopra il +4% — ma la probabilità di un rialzo ' +
        'Fed a settembre resta al 57%, la stessa di ieri e la stessa dopo due interventi restrittivi. Sale il ' +
        'prezzo senza che si riprezzi il meccanismo: è un rialzo di flusso e di dollaro debole, non di attese.',
      invalidation:
        'Un ritorno stabile sotto i 4.170-4.175 dollari, il decennale sopra il 4,70% o un Dollar Index sopra quota 100; oppure, in senso opposto, una probabilità di rialzo sotto il 50%, che smentirebbe proprio la lettura del flusso.',
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
  headline: 'L’oro sfiora 4.200, ma la probabilità di rialzo resta ferma al 57%',
  stance:
    'XAU/USD ha accelerato fino a circa 4.199,8 dollari, oltre +3% e massimo dal 22 giugno, con l’argento sopra ' +
    'il +4%: dollaro debole e rendimenti vicini ai minimi della settimana. Nello stesso pomeriggio Schmid e ' +
    'Kashkari hanno chiesto una Fed più restrittiva, e la probabilità che il mercato attribuisce a un rialzo di ' +
    'settembre è rimasta al 57%, dov’era ieri. In ventiquattro ore quel numero ha assorbito un JOLTS fiacco, un ' +
    'ADP molto sotto le attese e due interventi da falco senza spostarsi: il rialzo dell’oro non nasce da una ' +
    'riprezzatura della Fed, e va trattato per quello che è.',
  favours: [
    'Guardare il 57% e non le dichiarazioni: le preferenze dei singoli membri non sono ancora diventate un prezzo',
    'Considerare l’ampiezza del movimento, argento compreso, come indizio di flusso più che di riprezzatura',
  ],
  avoid: [
    'Leggere il più 3% come conferma della catena sui tassi: quella catena oggi non ha prodotto nulla',
    'Trattare i 4.200 come una soglia in sé: è una cifra tonda dove si accumulano ordini, non un livello che tiene',
  ],
  confirming: [
    'XAU/USD ≈ 4.199,8 $, oltre +3%',
    'Argento oltre +4%: sale tutto il comparto',
    'Decennale vicino ai minimi della settimana',
  ],
  contradicting: [
    'Rialzo Fed a settembre fermo al 57%',
    'Schmid e Kashkari chiedono di stringere',
    'Brent ancora sopra gli 80 dollari',
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
