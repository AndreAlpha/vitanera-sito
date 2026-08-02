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
  updatedAt: '2026-08-02T18:20:00+02:00',
  // Massimo della tabella per una scheda di sintesi, e coincide con
  // l'orizzonte dichiarato dal testo: la verifica dell'intervento avviene
  // alla riapertura degli scambi, che è anche il `nextEvent` dell'articolo.
  // La lettura scade poco prima, perché è lì che va rifatta.
  validityMinutes: 240,
  asset: 'XAU/USD',
  direction: 'neutrale-rialzista',
  strength: 'bassa',
  headline: 'Intervento coordinato sullo yen: il sostegno all’oro arriva dal dollaro',
  stance:
    'Reuters riferisce del primo intervento congiunto Stati Uniti-Giappone dal 2011 a sostegno dello yen, ' +
    'con acquisti per un importo giapponese vicino a 59 miliardi di dollari e liquidità presa da una linea ' +
    'della Fed invece che da vendite di Treasury. Un dollaro più debole con rendimenti non spinti più in ' +
    'alto sarebbe favorevole all’oro e compensa in parte il premio geopolitico che Iran, Hormuz e OPEC+ ' +
    'continuano a sgonfiare. Il bias si inclina appena al rialzo.',
  favours: [
    'Verificare il DXY prima dello yen: è il passaggio da cui dipende l’effetto sull’oro',
    'Trattare la struttura dell’operazione, non l’importo, come l’elemento che conta',
  ],
  avoid: [
    'Dare per acquisito l’importo finché manca l’annuncio ufficiale giapponese',
    'Leggere uno yen più forte come sinonimo automatico di dollaro più debole',
  ],
  invalidation:
    'L’intervento si rivela inefficace, il DXY torna forte, i rendimenti statunitensi accelerano oppure chiarimenti ufficiali ridimensionano il coinvolgimento statunitense.',
  confirming: [
    'Intervento giapponese ≈ 59 mld $',
    'Liquidità dalla linea Fed, non da vendite di Treasury',
    'PBoC «appropriatamente accomodante»',
  ],
  contradicting: [
    'Annuncio ufficiale giapponese ancora atteso',
    'Premio geopolitico in riduzione su Iran e Hormuz',
    'OPEC+ +188.000 b/g da settembre',
  ],
  sources: [
    'intervento-coordinato-usa-giappone-sullo-yen',
    'opec-alza-le-quote-e-una-metaniera-esce-da-hormuz',
    'banche-centrali-tornano-a-comprare-oro-rendimenti-freno',
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
