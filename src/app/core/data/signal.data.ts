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
  updatedAt: '2026-08-04T20:05:00+02:00',
  // Base 30-45 di un controllo cross-asset, portata a 90 da tre ragioni della
  // regola: i correlati sono allineati, è la terza conferma consecutiva della
  // stessa direzione, e il movimento è durato invece di esaurirsi dopo il dato.
  // Scade alle 21:35, poco prima della chiusura americana.
  validityMinutes: 90,
  asset: 'XAU/USD',
  direction: 'rialzista',
  strength: 'alta',
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
  invalidation:
    'XAU/USD sotto i 4.070 dollari, il decennale nuovamente sopra il 4,70%, un forte rimbalzo del petrolio, oppure dati ADP e payroll nettamente superiori alle attese.',
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
