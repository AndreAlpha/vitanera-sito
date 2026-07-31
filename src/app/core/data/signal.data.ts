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
  updatedAt: '2026-08-01T01:12:00+02:00',
  // La lettura è scritta per la riapertura di lunedì e il testo lo dice
  // esplicitamente («alla riapertura non inseguirei un eventuale gap»): la
  // durata segue quell'orizzonte invece della tabella, e scade poco dopo il
  // ritorno degli scambi, che è il momento in cui va rifatta.
  validityMinutes: 2880,
  asset: 'XAU/USD',
  direction: 'neutrale-rialzista',
  strength: 'bassa',
  headline: 'Un piano di attacchi sull’energia iraniana, non ancora un ordine',
  stance:
    'Reuters e Axios riferiscono di una campagna statunitense e israeliana in valutazione contro le ' +
    'infrastrutture energetiche iraniane, possibile già nel fine settimana, ma senza il via libera ' +
    'definitivo. Il petrolio era già sostenuto dalle difficoltà di transito a Hormuz. Il bias risale da ' +
    'ribassista a neutrale con rischio rialzista, non oltre: manca l’ordine di attacco.',
  favours: [
    'Attendere la conferma della notizia prima di considerare valido il rialzo',
    'Il premio di rischio sull’energia, che ha una causa diretta e verificabile',
  ],
  avoid: [
    'Inseguire un eventuale gap rialzista alla riapertura di lunedì',
    'Leggere un piano riportato dalla stampa come se fosse un fatto avvenuto',
  ],
  invalidation:
    'Il via libera non arriva e l’oro restituisce subito l’eventuale gap: il mercato torna su rendimenti elevati e quadro Fed.',
  confirming: ['Brent ≈ 90,12 $ (+1,2%)', 'WTI ≈ 84,67 $ (+1,3%)'],
  contradicting: ['Oro spot ≈ 4.049,83 (−1,3%)', 'Nessun ordine di attacco confermato'],
  sources: ['attacchi-energia-iraniana-piano-non-ordine'],
};

export const DIRECTION_LABEL: Record<BiasDirection, string> = {
  rialzista: 'Rialzista',
  'neutrale-rialzista': 'Neutro con inclinazione rialzista',
  neutrale: 'Neutro',
  'neutrale-ribassista': 'Neutro con inclinazione ribassista',
  ribassista: 'Ribassista',
};

export const STRENGTH_VALUE: Record<Level, number> = { bassa: 1, media: 2, alta: 3 };
