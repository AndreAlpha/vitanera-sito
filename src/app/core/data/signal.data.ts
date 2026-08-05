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
  updatedAt: '2026-08-05T08:35:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'rialzista',
      strength: 'media',
      regime:
        'Il canale dei tassi funziona e si misura: decennale al 4,62%, dollaro debole, oro sopra i 4.100 ' +
        'con tutto il comparto dei preziosi. La forza scende di un gradino perché si è visto su che cosa poggia.',
      invalidation:
        'XAU/USD che perde rapidamente i 4.100 dollari, oppure il decennale nuovamente sopra il 4,70%.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'La catena greggio giù, inflazione attesa giù, rendimenti giù regge, ma il suo primo anello è un ' +
        'ribasso del petrolio che sconta una riapertura di Hormuz che nei transiti non si vede: otto navi ' +
        'contro le 130-140 al giorno di prima del conflitto.',
      invalidation:
        'Un conteggio dei transiti che risale verso i livelli precedenti al conflitto, un forte rimbalzo del petrolio, oppure dati ADP e payroll nettamente superiori alle attese.',
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
  headline:
    'Otto navi contro centotrenta: il ribasso del greggio sconta una riapertura che non c’è',
  stance:
    'Nello stretto sono passate otto navi, contro le 130-140 al giorno di prima del conflitto: la ' +
    'normalizzazione non è cominciata, e il petrolio che ha perso quasi il 10% in due sedute sta prezzando ' +
    'un’intenzione e non un transito. Sopra quel ribasso poggia tutto il resto, e nella mattinata il resto ' +
    'ha continuato a salire: XAU/USD verso i 4.175 dollari, massimo dal 7 luglio, con il decennale al 4,60% ' +
    'e il dollaro debole. La direzione è confermata dai prezzi; a essere sottile è ciò su cui si appoggia — ' +
    'e va detto che finora il greggio non ha dato alcun segno di volersi riprendere.',
  favours: [
    'Guardare il conteggio dei transiti prima del grafico dell’oro: è lì che si vede se la catena regge',
    'Tenere separate le posizioni dichiarate dalle navi che passano davvero',
  ],
  avoid: [
    'Leggere i 4.100 dollari come un supporto: contano perché ci si accumulano gli ordini, non da soli',
    'Considerare acquisita la svolta monetaria, con il rialzo di settembre ancora dato sopra la metà',
  ],
  confirming: [
    'XAU/USD ≈ 4.175 $, massimo dal 7 luglio',
    'Decennale ≈ 4,60%, dollaro debole',
    'Sale tutto il comparto dei preziosi',
  ],
  contradicting: [
    'Brent ≈ 78,85 $: scende ancora invece di rimbalzare',
    'Rialzo Fed a settembre ancora dato intorno al 59%',
    'Rifinanziamento del Tesoro alle 14:30 e ADP ancora da vedere',
  ],
  sources: [
    'hormuz-non-ha-riaperto-otto-navi-contro-130-al-giorno',
    'oro-estende-il-rialzo-il-canale-e-quello-dei-tassi',
    'iran-chiede-il-controllo-sugli-ingressi-a-hormuz',
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
