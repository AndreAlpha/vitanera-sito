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

export const MARKET_SIGNAL: OperationalSignal = {
  updatedAt: '2026-07-30T16:33:00+02:00',
  validityMinutes: 120,
  asset: 'XAU/USD',
  direction: 'rialzista',
  strength: 'alta',
  headline: 'Inversione intraday dell’oro: dollaro sotto 100 e correlati finalmente allineati',
  stance:
    'XAU/USD è risalito verso 4.095–4.104 e stavolta non sale da solo: dollaro in accelerazione ribassista sotto ' +
    '100, rendimenti in calo, metalli, valute correlate e azionario si muovono nella stessa direzione. Lo short del ' +
    'controllo precedente è invalidato e il quadro macro della mattina — PCE mensile in raffreddamento e PIL sotto ' +
    'le attese — resta coerente. Unica contraddizione il petrolio, ancora negativo.',
  favours: [
    'Long su pullback o retest tenuto in area 4.090–4.095.',
    'In alternativa, breakout pulito sopra 4.104 seguito da retest.',
  ],
  avoid: [
    'Inseguire una candela già estesa senza ritorno.',
    'Impostazioni short contro questo allineamento.',
  ],
  invalidation:
    'Un ritorno sotto 4.078–4.080 indebolirebbe il segnale; la perdita decisa di 4.065–4.070, insieme a un recupero ' +
    'del DXY, annullerebbe il cambio rialzista.',
  confirming: [
    'DXY sotto 100, nuovi minimi intraday',
    'US 2Y ≈ 4,23%',
    'Platino +2,5 / +3%',
    'Nasdaq +2,26%',
  ],
  contradicting: ['WTI ≈ −0,8%', 'Brent ≈ −1,1%'],
  sources: [
    'inversione-intraday-con-i-correlati-allineati',
    'rottura-di-correlazione-ribassista-dopo-apertura-usa',
    'oro-sopra-4100-ma-i-rendimenti-lunghi-non-cedono',
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
