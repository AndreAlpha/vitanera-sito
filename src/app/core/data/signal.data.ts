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
  updatedAt: '2026-08-04T20:05:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'rialzista',
      strength: 'alta',
      regime:
        'Il movimento del dopo-JOLTS ha retto tutta la seduta invece di esaurirsi nei minuti successivi ' +
        'al dato, e i tre correlati dicono la stessa cosa.',
      invalidation: 'XAU/USD sotto i 4.070 dollari, oppure il decennale nuovamente sopra il 4,70%.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'La catena greggio giù, inflazione attesa giù, rendimenti giù regge finché Hormuz resta chiuso a ' +
        'metà: è un equilibrio, non una tendenza.',
      invalidation:
        'Un forte rimbalzo del petrolio, oppure dati ADP e payroll nettamente superiori alle attese.',
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
  headline: 'L’oro tiene il rialzo del dopo-JOLTS, e la spinta arriva dai tassi',
  stance:
    'XAU/USD sale verso i 4.092 dollari e il future Comex chiude a 4.095,40 con +1,53%: non è stata una ' +
    'fiammata post-dato, il movimento ha retto tutta la seduta. Con lui salgono argento, platino e palladio, ' +
    'mentre il Brent perde il 3,9% a 80,47 e il decennale arretra verso il 4,66%. La catena è coerente — ' +
    'greggio giù, inflazione attesa giù, rendimenti giù, costo-opportunità del metallo giù — e dice che a ' +
    'sostenere l’oro sono i tassi, non il rifugio. Hormuz resta un’aspettativa, non un accordo.',
  favours: [
    'Guardare ai rendimenti per capire quanto dura: è quello il canale, non la geopolitica',
    'Dare peso al fatto che il movimento sia durato invece di esaurirsi nei minuti dopo il dato',
  ],
  avoid: [
    'Considerare acquisita la svolta monetaria: resta circa il 57% di probabilità di rialzo a settembre',
    'Trattare l’area dei 4.100 dollari come un obiettivo invece che come il test immediato',
  ],
  confirming: [
    'XAU/USD ≈ 4.092 $, Comex 4.095,40 $ (+1,53%)',
    'Brent 80,47 $, −3,9%',
    'Decennale ≈ 4,66%',
  ],
  contradicting: [
    'Rialzo Fed a settembre ancora al 57%',
    'Hormuz non regolarmente operativo',
    'Area 4.100 $ ancora da superare',
  ],
  sources: [
    'oro-estende-il-rialzo-il-canale-e-quello-dei-tassi',
    'iran-chiede-il-controllo-sugli-ingressi-a-hormuz',
    'jolts-piu-debole-delle-attese-oro-su-rendimenti-giu',
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
