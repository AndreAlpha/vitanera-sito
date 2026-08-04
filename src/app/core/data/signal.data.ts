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
  updatedAt: '2026-08-04T12:35:00+02:00',
  // Base di 30-45 per un controllo intraday cross-asset, alzata a 120 perché
  // tutti e quattro i riferimenti puntano nella stessa direzione e la lettura
  // conferma la precedente invece di ribaltarla. Scade alle 14:35, con margine
  // prima del JOLTS delle 16:00 indicato come prossimo test.
  validityMinutes: 120,
  asset: 'XAU/USD',
  direction: 'neutrale-ribassista',
  strength: 'media',
  headline: 'Il rischio Hormuz si scarica su petrolio e rendimenti, non sull’oro',
  stance:
    'Il Brent amplia il recupero a 86,04 dollari e il WTI a 82,06, mentre il decennale risale al 4,705% e il ' +
    'Dollar Index torna appena sopra quota 100. L’oro resta quasi fermo a 4.053 dollari: i transiti a Hormuz ' +
    'sono ancora estremamente ridotti, ma il premio di rischio si sta pagando sull’energia e sui tassi ' +
    'invece che sul metallo. Stessa direzione della lettura precedente, che attribuiva il freno alla parte ' +
    'lunga della curva, con una conferma in più: qui il canale che lo alimenta è il petrolio.',
  favours: [
    'Verificare la persistenza dei livelli, non il loro superamento: Brent e decennale sono già sulla soglia',
    'Trattare la catena petrolio → inflazione attesa → rendimenti come il meccanismo che sta decidendo',
  ],
  avoid: [
    'Aspettarsi domanda rifugio sull’oro finché azioni europee e futures statunitensi restano positivi',
    'Estendere oltre il JOLTS delle 16:00 una lettura costruita su prezzi intraday',
  ],
  invalidation:
    'Il petrolio restituisce il recupero, il decennale torna sotto il 4,68% circa, il Dollar Index scende sotto quota 100 oppure l’oro supera con decisione l’area dei 4.100 dollari.',
  confirming: ['Brent 86,04 $, circa +2,7%', 'Decennale 4,705%, +2,2 pb', 'DXY appena sopra 100'],
  contradicting: [
    'Transiti a Hormuz ancora estremamente ridotti',
    'Nessun panico: azioni e futures positivi',
    'Persistenza dei livelli ancora da verificare',
  ],
  sources: [
    'rischio-hormuz-si-paga-in-petrolio-e-rendimenti-non-in-oro',
    'rendimenti-a-30-anni-di-nuovo-sui-massimi-dal-2007',
    'nave-colpita-nello-stretto-di-hormuz',
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
