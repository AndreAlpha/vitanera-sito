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
  updatedAt: '2026-08-05T13:20:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'neutrale-rialzista',
      strength: 'bassa',
      regime:
        'Il rifugio torna a sostenere il metallo proprio mentre lo stesso attacco, alzando il greggio, ' +
        'minaccia il canale dei tassi che lo reggeva: i due sostegni si scambiano il posto invece di ' +
        'sommarsi. Dollaro a 99,85 e decennale al 4,60% tengono ancora, ma su un piede solo.',
      invalidation:
        'Un Brent sopra gli 82 dollari, che farebbe pesare l’effetto inflazionistico più della domanda di rifugio; oppure un ritorno sotto i 79, che toglierebbe anche il premio geopolitico.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'La catena greggio giù, inflazione attesa giù, rendimenti giù ha ora due minacce e non una: i ' +
        'transiti a Hormuz fermi a otto navi contro 130-140, e un secondo collo di bottiglia sul Mar Rosso ' +
        'che non dipende dai colloqui con Teheran. Un accordo su Hormuz non chiuderebbe il dossier rotte.',
      invalidation:
        'Un conteggio dei transiti che risale verso i livelli precedenti al conflitto insieme alla fine degli attacchi nel Mar Rosso; oppure dati ADP e payroll nettamente superiori alle attese.',
    },
    {
      horizon: 'lungo',
      direction: 'neutrale',
      strength: 'bassa',
      regime:
        'Gli acquisti delle banche centrali sostengono da sotto, ma i rendimenti reali restano alti e ' +
        'un rialzo Fed a settembre è ancora dato al 57%.',
      invalidation:
        'Una svolta monetaria confermata dalle riunioni, oppure il ritorno stabile del decennale sopra il 5%.',
    },
  ],
  headline: 'Una petroliera colpita nel Mar Rosso: il rischio rotte non era solo Hormuz',
  stance:
    'Gli Houthi rivendicano un missile contro una petroliera saudita vicino a Yanbu, e il greggio smette di ' +
    'scendere: Brent a 80,87 con circa +1,9%, WTI a 76,67. Il punto non è la gravità dell’episodio ma dove ' +
    'è avvenuto — un altro stretto, un altro attore, e nessuna dipendenza dai colloqui con Teheran. Per ' +
    'l’oro il rifugio torna proprio mentre lo stesso rialzo del greggio minaccia il canale dei tassi che lo ' +
    'sosteneva: decennale al 4,60-4,61% e dollaro a 99,85 tengono ancora, ma i due sostegni non si sommano.',
  favours: [
    'Tenere separati i due colli di bottiglia: un accordo su Hormuz non chiude il dossier delle rotte',
    'Guardare gli 82 dollari di Brent come la soglia oltre cui l’inflazione pesa più del rifugio',
  ],
  avoid: [
    'Leggere il rimbalzo del greggio come un segnale sulla trattativa: viene da tutt’altra rotta',
    'Trattare come confermati i danni alla nave, che restano una rivendicazione non verificata',
  ],
  confirming: [
    'Brent 80,87 $, circa +1,9%',
    'Decennale ancora al 4,60-4,61%',
    'Dollar Index ≈ 99,85, sotto quota 100',
  ],
  contradicting: [
    'Attacco rivendicato, danni non verificati',
    'Casa Bianca: trattative ancora positive',
    'ADP alle 14:15 e rifinanziamento del Tesoro alle 14:30',
  ],
  sources: [
    'attacco-houthi-nel-mar-rosso-il-secondo-collo-di-bottiglia',
    'trump-dichiara-una-trattativa-durata-tutto-il-giorno',
    'hormuz-non-ha-riaperto-otto-navi-contro-130-al-giorno',
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
