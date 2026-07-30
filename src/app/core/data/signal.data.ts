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
  updatedAt: '2026-07-30T16:20:00+02:00',
  validityMinutes: 60,
  asset: 'XAU/USD',
  direction: 'ribassista',
  strength: 'media',
  headline: 'L’oro perde 4.070–4.080 dopo l’apertura USA mentre i correlati restano forti',
  stance:
    'Il quadro macro della mattina resta favorevole all’oro — PCE mensile in raffreddamento e PIL sotto le attese — ' +
    'ma nel brevissimo XAU/USD ha rotto al ribasso ignorando azionario risk-on, rame e valute legate ai metalli. ' +
    'Confermano la discesa i Treasury ancora elevati e il petrolio in calo, che toglie anche il premio geopolitico. ' +
    'Forza medio-alta: è una rottura di correlazione, non ancora una conferma ribassista cross-asset.',
  favours: [
    'Restare fuori dal lato rialzista finché XAU/USD non recupera il livello appena perso e non lo trasforma di nuovo in supporto.',
    'Considerare lo short solo dopo la rottura di un Key Level e un retest fallito dal basso.',
  ],
  avoid: [
    'Aprire posizioni rialziste solo perché il DXY e alcuni metalli restano favorevoli.',
    'Inseguire il crollo: la conclusione è attendere pullback o retest su un Key Level rotto.',
  ],
  invalidation:
    'Un recupero dell’area 4.070–4.080 trasformata nuovamente in supporto, oppure una reazione sul grafico a 5 ' +
    'minuti in corrispondenza di un Key Level.',
  confirming: [
    'US 2Y ≈ 4,29%, sopra l’ultimo controllo',
    'US 10Y ≈ 4,67 – 4,68%',
    'WTI ≈ −1,35%',
    'Brent ≈ −1,56%',
  ],
  contradicting: ['Nasdaq +1,6%', 'S&P 500 ≈ +1%', 'Rame +2,1 / +2,8%', 'Platino ancora positivo'],
  sources: [
    'rottura-di-correlazione-ribassista-dopo-apertura-usa',
    'oro-sopra-4100-ma-i-rendimenti-lunghi-non-cedono',
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
