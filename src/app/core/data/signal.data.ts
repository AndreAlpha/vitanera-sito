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
  updatedAt: '2026-08-04T00:10:00+02:00',
  // Una scheda geopolitica starebbe fra i 180 e i 240 minuti, ma qui decide il
  // catalizzatore: il testo indica la riapertura asiatica come la verifica, e
  // la validità non può superarla. Pubblicata alle 00:10, scade all'01:40,
  // poco prima che i mercati asiatici riaprano.
  validityMinutes: 90,
  asset: 'XAU/USD',
  direction: 'neutrale',
  strength: 'bassa',
  headline: 'Trump minaccia Teheran e sostiene che si tratti, l’Iran nega entrambe le cose',
  stance:
    'Un’ultima possibilità di accordo, altrimenti un attacco molto pesante, con un riferimento esplicito alla ' +
    'possibile «decapitazione» della leadership iraniana: la minaccia arriva proprio dopo il crollo del ' +
    'greggio di lunedì, con il Brent a 83,77 dollari e il WTI a 80,34. Il mercato ha chiuso continuando a ' +
    'prezzare un accordo che nessuna fonte iraniana conferma. Per l’oro il rischio geopolitico torna a ' +
    'salire, ma ISM forte e maggiore offerta di Treasury restano dall’altra parte.',
  favours: [
    'Trattare la distensione come l’ipotesi di una parte sola, finché Teheran non conferma i colloqui',
    'Cercare le tre condizioni insieme — petrolio su, azioni giù, rendimenti giù — e non una alla volta',
  ],
  avoid: [
    'Leggere la minaccia come un segnale rialzista pulito: due canali contrari restano aperti',
    'Dimenticare che anche il dollaro raccoglie domanda rifugio, e che questo limita il rialzo dell’oro',
  ],
  invalidation:
    'Una conferma ufficiale dei colloqui fra Stati Uniti e Iran, un accordo verificabile, oppure la prosecuzione del calo del petrolio nonostante la minaccia: in quel caso il mercato non le sta dando credito.',
  confirming: [
    'Minaccia militare esplicita rilanciata da Trump',
    'Teheran nega negoziati e incontri programmati',
    'Brent 83,77 $ giudicato un ribasso eccessivo',
  ],
  contradicting: [
    'ISM 55,6, massimo da oltre quattro anni',
    'Fabbisogno del Tesoro a 739 mld $',
    'Domanda rifugio che può andare sul dollaro invece che sull’oro',
  ],
  sources: [
    'trump-alza-di-nuovo-la-minaccia-contro-teheran',
    'tesoro-alza-il-fabbisogno-iran-raffredda-la-distensione',
    'oro-inverte-il-rialzo-dopo-il-dato-ism',
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
