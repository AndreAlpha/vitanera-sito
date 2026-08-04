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
  updatedAt: '2026-08-04T16:30:00+02:00',
  // Un dato pubblicato regge la seduta: fascia 90-120. Si prende il massimo
  // perché i correlati sono allineati per la prima volta in due giorni — oro,
  // dollaro e rendimenti confermano insieme. Non oltre, perché il testo
  // qualifica il bias come intraday e la direzione si è mossa due volte oggi.
  validityMinutes: 120,
  asset: 'XAU/USD',
  direction: 'rialzista',
  strength: 'media',
  headline: 'Offerte di lavoro sotto le attese, e stavolta i tre canali confermano insieme',
  stance:
    'Le offerte di lavoro di giugno scendono a 7,359 milioni contro 7,440 attesi, con maggio rivisto al ' +
    'ribasso e il tasso di posti vacanti dal 4,6% al 4,4%; assunzioni e licenziamenti restano però stabili, ' +
    'quindi è raffreddamento graduale e non crisi. La reazione è coerente: oro verso 4.080-4.085 dollari, ' +
    'decennale dal 4,70% verso il 4,64%, DXY sotto quota 100 a 99,89. È la prima volta in due giorni che le ' +
    'tre gambe si muovono insieme invece di annullarsi, e attenua il segnale restrittivo dell’ISM.',
  favours: [
    'Dare peso alla contemporaneità delle conferme più che all’entità del dato, che è modesta',
    'Leggere il quadro come industria che corre e lavoro che no: due richieste diverse per la Fed',
  ],
  avoid: [
    'Trasformare una singola rilevazione mensile in una tendenza del mercato del lavoro',
    'Ignorare che assunzioni a 5,3 milioni e licenziamenti stabili non descrivono un’occupazione in crisi',
  ],
  invalidation:
    'XAU/USD che non riesce a mantenersi sopra i 4.070 dollari circa, il decennale che torna sopra il 4,70%, il DXY nuovamente sopra quota 100, oppure nuovi sviluppi diplomatici concreti che riducano fortemente la domanda di bene rifugio.',
  confirming: [
    'Offerte di lavoro 7,359 mln contro 7,440 attese',
    'Decennale dal 4,70% al 4,64% circa',
    'DXY ≈ 99,89, sotto quota 100',
  ],
  contradicting: [
    'Assunzioni stabili a 5,3 mln, licenziamenti fermi',
    'ISM 55,6 ancora sul tavolo',
    'Una sola rilevazione mensile',
  ],
  sources: [
    'jolts-piu-debole-delle-attese-oro-su-rendimenti-giu',
    'petrolio-inverte-bruscamente-bessent-apre-su-hormuz',
    'rendimenti-a-30-anni-di-nuovo-sui-massimi-dal-2007',
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
