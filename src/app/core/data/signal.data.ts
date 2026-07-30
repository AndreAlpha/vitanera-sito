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

export const MARKET_SIGNAL: OperationalSignal = {
  updatedAt: '2026-07-30T13:15:00+02:00',
  validityMinutes: 60,
  asset: 'XAU/USD',
  direction: 'neutrale-ribassista',
  strength: 'media',
  headline: 'Il petrolio riparte e i rendimenti lunghi frenano l’oro',
  stance:
    'Fase volatile e laterale: la domanda rifugio impedisce una discesa netta ma non basta a produrre un rialzo ' +
    'pulito, con il trentennale americano al 5,24% e il Brent tornato in area 92. Forza del segnale medio-alta sul ' +
    'rischio di volatilità, media sulla direzione netta.',
  favours: [
    'Attendere il dato PCE prima di prendere direzione: è il catalizzatore dichiarato dalla lettura.',
    'Trattare l’area come laterale e volatile, non come inizio di un movimento direzionale.',
  ],
  avoid: [
    'Inseguire un breakout rialzista mentre i rendimenti lunghi segnano nuovi massimi.',
    'Considerare la sola domanda rifugio sufficiente a sostenere un rialzo pulito.',
  ],
  invalidation:
    'Una rapida de-escalation, una nuova discesa del Brent sotto 89–90 dollari oppure un PCE sensibilmente più ' +
    'debole delle attese.',
  confirming: [
    'Escalation USA-Iran',
    'Instabilità delle rotte energetiche',
    'Contesto di rischio-off',
    'Tenuta dell’oro in area 4.060',
  ],
  contradicting: [
    'Brent sopra 92 dollari',
    'Treasury 30Y a 5,24%, massimo da 19 anni',
    'Dollaro stabile o forte ≈ 100,9',
    'Fed percepita più restrittiva',
  ],
  sources: [
    'petrolio-riparte-e-treasury-lunghi-a-nuovi-massimi',
    'xauusd-cambio-rilevante-nella-lettura-cross-asset',
    'hormuz-e-bab-el-mandeb-rischio-non-ancora-blocco',
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
