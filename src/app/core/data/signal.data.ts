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
  updatedAt: '2026-08-02T16:06:00+02:00',
  // Scheda di sintesi: la tabella darebbe 180-240 minuti. Allungata di un
  // gradino perché conferma la lettura precedente invece di ribaltarla e
  // poggia su un dato pubblicato, non su una reazione di prezzo. Si ferma
  // comunque prima della riapertura degli scambi di domenica sera, che resta
  // il momento in cui la sintesi va rifatta.
  validityMinutes: 360,
  asset: 'XAU/USD',
  direction: 'neutrale',
  strength: 'bassa',
  headline: 'Banche centrali di nuovo compratrici, rendimenti ancora il freno',
  stance:
    'Il World Gold Council ha rivisto al ribasso il primo trimestre ma registra un forte recupero nel ' +
    'secondo, intorno alle 289 tonnellate, con Polonia e Cina fra i principali acquirenti: è un supporto ' +
    'strutturale di medio periodo, non un catalizzatore intraday. Su Fed, dati macro, dollaro e dossier ' +
    'iraniano non risultano fatti nuovi. I fondamentali restano bilanciati e la lettura conferma il ' +
    'neutrale del controllo precedente.',
  favours: [
    'Distinguere il supporto strutturale delle banche centrali dal movimento della singola seduta',
    'Restare sull’attesa finché uno dei due piatti non si muove davvero',
  ],
  avoid: [
    'Leggere le 289 tonnellate come un catalizzatore immediato per l’intraday',
    'Dare per acquisito il vantaggio rialzista, che è soltanto condizionato',
  ],
  invalidation:
    'L’equilibrio si rompe verso il basso se i rendimenti statunitensi salgono ancora senza un fatto geopolitico nuovo, e verso l’alto se le tensioni si riaccendono o se dollaro e rendimenti si indeboliscono.',
  confirming: ['Acquisti banche centrali 2T ≈ 289 t', 'Premio geopolitico ancora presente'],
  contradicting: [
    'Rendimenti Treasury su livelli elevati',
    'Fed ferma al 3,50%-3,75%, nessun segnale di allentamento',
    'Primo trimestre rivisto al ribasso',
  ],
  sources: [
    'banche-centrali-tornano-a-comprare-oro-rendimenti-freno',
    'attacco-sospeso-non-cancellato-iran-smentisce',
    'trump-cancella-attacco-iran-accordo-non-chiuso',
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
