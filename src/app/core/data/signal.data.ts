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
  updatedAt: '2026-07-30T14:45:00+02:00',
  validityMinutes: 60,
  asset: 'XAU/USD',
  direction: 'neutrale-rialzista',
  strength: 'bassa',
  headline: 'L’oro sale quasi da solo: le conferme cross-asset si stanno sfaldando',
  stance:
    'Il PCE più morbido delle attese migliora il quadro di fondo, ma nell’immediato solo il dollaro debole accompagna ' +
    'l’oro: argento, platino, valute legate ai metalli e petrolio non confermano il movimento. Forza del segnale ' +
    'bassa-media: è una divergenza, non un trend.',
  favours: [
    'Restare fuori finché la divergenza non si risolve.',
    'Considerare valida l’impostazione rialzista solo con rottura e retest tenuto di 4.072, argento e platino che smettono di scendere e DXY ancora debole.',
  ],
  avoid: [
    'Inseguire il rialzo adesso: aumenta il rischio di falso breakout o di ritorno verso il basso.',
    'Impostazioni ribassiste: l’oro continua a tenere e il DXY non sta accelerando al rialzo.',
  ],
  invalidation:
    'Un DXY che accelera al rialzo oppure una discesa dell’oro coerente con il resto del comparto. Sotto 4.053 il ' +
    'quadro fondamentale rialzista sarebbe seriamente indebolito.',
  confirming: [
    'Core PCE 3,3%, sotto le attese',
    'DXY debole ≈ 100,65',
    'Rame ≈ +2,3%',
    'Rendimenti che non producono nuovi minimi dell’oro',
  ],
  contradicting: [
    'Argento ≈ −1,9%',
    'Platino ≈ −1,35%',
    'AUD/USD ≈ −0,36%',
    'WTI e Brent in correzione',
  ],
  sources: [
    'deterioramento-della-conferma-cross-asset',
    'pce-usa-piu-morbido-delle-attese',
    'petrolio-riparte-e-treasury-lunghi-a-nuovi-massimi',
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
