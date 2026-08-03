import { BiasDirection, Level } from '../models/article.model';

/**
 * Indicatore operativo sull'oro mostrato in panoramica.
 *
 * Sintetizza le ultime pubblicazioni di ogni sezione — fondamentali,
 * correlazioni, geopolitica — in una sola lettura. Va aggiornato a mano ogni
 * volta che viene pubblicata una nuova analisi: `updatedAt` fa fede.
 *
 * Trascorsi `validityMinutes` minuti dall'aggiornamento, l'indicatore scade
 * automaticamente e la panoramica passa allo stato «in attesa di notizie».
 *
 * La durata non è fissa: si sceglie a ogni pubblicazione in base a quanto regge
 * la lettura. Un controllo intraday cross-asset vale poche decine di minuti, un
 * dato macro o una decisione di banca centrale reggono l'intera seduta. Il
 * valore è mostrato anche al lettore, quindi va tenuto tondo.
 *
 * Resta un riepilogo editoriale di quanto scritto negli articoli: non è
 * consulenza finanziaria né un segnale di acquisto o vendita.
 */
export interface OperationalSignal {
  readonly updatedAt: string;
  readonly validityMinutes: number;
  readonly asset: string;
  readonly direction: BiasDirection;
  readonly strength: Level;
  readonly headline: string;
  readonly stance: string;
  readonly favours: readonly string[];
  readonly avoid: readonly string[];
  readonly invalidation: string;
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
  updatedAt: '2026-08-03T17:10:00+02:00',
  // Una reazione di prezzo starebbe nella fascia intraday dei 30-45 minuti, ma
  // qui si allunga a 60: la lettura conferma la precedente invece di ribaltarla
  // e i correlati sono allineati — scendono anche argento, platino e palladio.
  // Non si va oltre perché resta una reazione di prezzo, non un fatto nuovo.
  validityMinutes: 60,
  asset: 'XAU/USD',
  direction: 'neutrale-ribassista',
  strength: 'media',
  headline: 'L’oro ha invertito il rialzo dopo l’ISM, e con lui tutto il comparto dei preziosi',
  stance:
    'XAU/USD è passato dal rialzo iniziale a circa −0,3%, vicino ai 4.030 dollari, e sono scesi anche ' +
    'argento, platino e palladio: quando cede l’intero comparto il movimento viene dal dollaro e dai tassi, ' +
    'non da qualcosa di specifico dell’oro. Il mercato sta quindi pesando più la forza americana e il rischio ' +
    'di tassi elevati che il calo del petrolio, e dalla Fed non è arrivata nessuna nuova comunicazione. La ' +
    'Bank of Korea torna a comprare oro dopo dodici anni, ma è sostegno strutturale, non di giornata.',
  favours: [
    'Leggere la discesa dell’intero comparto dei preziosi come conferma che il canale è dollaro e tassi',
    'Tenere separati i due orizzonti: l’ISM muove il pomeriggio, la domanda ufficiale coreana i mesi',
  ],
  avoid: [
    'Usare l’annuncio della Bank of Korea per contrastare la pressione di oggi: le quantità non sono note',
    'Trattare 4.030 e 4.000 dollari come obiettivi invece che come riferimenti approssimati',
  ],
  invalidation:
    'L’oro recupera rapidamente il livello precedente al dato mentre DXY e rendimenti restano deboli, oppure una nuova escalation concreta su Iran e Hormuz riporta forte domanda di bene rifugio.',
  confirming: [
    'XAU/USD ≈ −0,3%, vicino a 4.030 $',
    'In calo anche argento, platino e palladio',
    'ISM 55,6, massimo da oltre quattro anni',
  ],
  contradicting: [
    'Bank of Korea di nuovo acquirente dal 2013',
    'Petrolio ancora debole',
    'Recupero di dollaro e rendimenti ancora da verificare',
  ],
  sources: [
    'oro-inverte-il-rialzo-dopo-il-dato-ism',
    'ism-manifatturiero-a-55-6-piu-forte-del-previsto',
    'intervento-sullo-yen-washington-ha-venduto-euro',
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
