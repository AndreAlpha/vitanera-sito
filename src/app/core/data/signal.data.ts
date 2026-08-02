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
  updatedAt: '2026-08-02T16:13:00+02:00',
  // L'analisi ragiona tutta «alla riapertura» e quell'indicazione vince sulla
  // tabella: la lettura vale fino a poco prima del ritorno degli scambi di
  // domenica sera, che è anche il `nextEvent` dell'articolo.
  validityMinutes: 360,
  asset: 'XAU/USD',
  direction: 'neutrale-ribassista',
  strength: 'bassa',
  headline: 'Più offerta e una nave fuori da Hormuz: il premio di rischio si sgonfia',
  stance:
    'OPEC+ alza le quote di circa 188.000 barili al giorno da settembre e una metaniera di QatarEnergy esce ' +
    'da Hormuz, primo transito dall’11 luglio: entrambe le novità riducono il premio di rischio sul ' +
    'petrolio. Per l’oro l’effetto è meno lineare, perché un greggio più debole può frenare i rendimenti ' +
    'statunitensi e compensare la perdita di domanda rifugio. Il neutrale della sintesi precedente si ' +
    'inclina leggermente al ribasso, senza diventare ribassista.',
  favours: [
    'Tenere separate le due catene: meno premio rifugio da una parte, rendimenti potenzialmente più bassi dall’altra',
    'Guardare al petrolio, che è il mercato su cui la notizia agisce più direttamente',
  ],
  avoid: [
    'Trattare un singolo transito come la prova che Hormuz è tornata normale',
    'Dare per scontato che le quote concordate si traducano in altrettanta offerta effettiva',
  ],
  invalidation:
    'Nuovi problemi a Hormuz invalidano immediatamente lo scenario di normalizzazione; lo stesso vale se i negoziati falliscono o se l’offerta effettiva resta molto sotto le quote concordate.',
  confirming: [
    'OPEC+ +188.000 b/g da settembre',
    'Primo transito da Hormuz dall’11 luglio',
    'Borse del Golfo in rialzo domenica',
  ],
  contradicting: [
    'Offerta effettiva forse sotto le quote',
    'Opzione militare ancora implicitamente aperta',
    'Iran in stato di elevata preparazione',
  ],
  sources: [
    'opec-alza-le-quote-e-una-metaniera-esce-da-hormuz',
    'banche-centrali-tornano-a-comprare-oro-rendimenti-freno',
    'attacco-sospeso-non-cancellato-iran-smentisce',
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
