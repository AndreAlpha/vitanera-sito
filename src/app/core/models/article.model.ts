/**
 * Modello dei contenuti editoriali di Vitanera.
 *
 * Nota: tutti i contenuti descritti da questi tipi hanno finalità informative e
 * didattiche. Nessun campo di questo modello — bias, scenari, orizzonti — va
 * inteso come raccomandazione di investimento o segnale operativo.
 */

/**
 * Categorie dell'archivio.
 *
 * Sono di tre famiglie — area geografica, tema e indicatore macroeconomico — e
 * un'analisi può appartenere a più categorie contemporaneamente: un commento
 * all'inflazione americana sta insieme in `usa`, `ipc` e `variazione-ipc`.
 */
export type CategorySlug =
  // Aree e temi
  | 'usa'
  | 'europa'
  | 'asia'
  | 'geopolitica'
  // Banche centrali
  | 'fed'
  | 'bce'
  | 'tasso-di-interesse'
  // Lavoro
  | 'tasso-di-disoccupazione'
  | 'richieste-iniziali-sussidi'
  | 'nfp'
  // Prezzi
  | 'ipc'
  | 'variazione-ipc'
  | 'ipc-core'
  | 'variazione-ipc-core'
  | 'pce'
  | 'pce-core-annuale'
  | 'pce-core-trimestrale'
  | 'variazione-pce-core'
  | 'variazione-ipp'
  | 'variazione-ipp-core'
  // Attività economica
  | 'fiducia-consumatori'
  | 'produzione-industriale'
  | 'variazione-produzione-industriale'
  | 'pil'
  | 'pil-annuale'
  | 'pil-trimestrale'
  | 'variazione-vendite-dettaglio'
  | 'vendite-dettaglio-essenziali'
  | 'indice-vendite-dettaglio';

/** Famiglia a cui appartiene una categoria, usata per raggrupparle a video. */
export type CategoryFamily = 'aree' | 'banche-centrali' | 'lavoro' | 'prezzi' | 'attivita';

export type Tone = 'gold' | 'bull' | 'bear' | 'warn' | 'neutral';

export type BiasDirection =
  'rialzista' | 'neutrale-rialzista' | 'neutrale' | 'neutrale-ribassista' | 'ribassista';

export type Level = 'bassa' | 'media' | 'alta';

export type Horizon = 'breve' | 'medio' | 'lungo';

export interface Category {
  readonly slug: CategorySlug;
  readonly name: string;
  /** Nome accorciato per pastiglie ed elenchi stretti. */
  readonly short: string;
  readonly family: CategoryFamily;
  readonly icon: string;
  readonly tagline: string;
  readonly description: string;
}

export interface CategoryFamilyInfo {
  readonly slug: CategoryFamily;
  readonly name: string;
  readonly tagline: string;
  readonly icon: string;
}

export interface StatItem {
  readonly label: string;
  readonly value: string;
  readonly tone?: Tone;
  readonly note?: string;
}

export interface ScenarioItem {
  readonly label: string;
  readonly tone: Tone;
  readonly text: string;
}

export interface TimelineItem {
  readonly when: string;
  readonly title: string;
  readonly text: string;
  readonly tone?: Tone;
}

export interface BalanceSide {
  readonly title: string;
  readonly tone: Tone;
  readonly items: readonly string[];
}

/* -------------------------------------------------------------------------- */
/* Blocchi di contenuto                                                       */
/* -------------------------------------------------------------------------- */

export interface ParagraphBlock {
  readonly kind: 'paragraph';
  readonly text: string;
  /** Paragrafo di apertura, reso con corpo maggiore. */
  readonly lead?: boolean;
}

export interface HeadingBlock {
  readonly kind: 'heading';
  readonly text: string;
  /** Ancora per l'indice laterale; se assente viene derivata dal testo. */
  readonly anchor?: string;
}

export interface ListBlock {
  readonly kind: 'list';
  readonly items: readonly string[];
  readonly title?: string;
  readonly tone?: Tone;
  readonly ordered?: boolean;
}

export interface CalloutBlock {
  readonly kind: 'callout';
  readonly tone: Tone;
  readonly title: string;
  readonly text?: string;
  readonly items?: readonly string[];
}

export interface StatsBlock {
  readonly kind: 'stats';
  readonly title?: string;
  readonly caption?: string;
  readonly items: readonly StatItem[];
}

export interface ScenariosBlock {
  readonly kind: 'scenarios';
  readonly title?: string;
  readonly caption?: string;
  readonly items: readonly ScenarioItem[];
}

export interface BalanceBlock {
  readonly kind: 'balance';
  readonly title?: string;
  readonly left: BalanceSide;
  readonly right: BalanceSide;
}

export interface TimelineBlock {
  readonly kind: 'timeline';
  readonly title?: string;
  readonly items: readonly TimelineItem[];
}

export interface QuoteBlock {
  readonly kind: 'quote';
  readonly text: string;
  readonly cite?: string;
}

export interface NoteBlock {
  readonly kind: 'note';
  readonly text: string;
}

export type Block =
  | ParagraphBlock
  | HeadingBlock
  | ListBlock
  | CalloutBlock
  | StatsBlock
  | ScenariosBlock
  | BalanceBlock
  | TimelineBlock
  | QuoteBlock
  | NoteBlock;

/* -------------------------------------------------------------------------- */
/* Articolo                                                                    */
/* -------------------------------------------------------------------------- */

export interface Bias {
  readonly asset: string;
  readonly direction: BiasDirection;
  readonly strength: Level;
  readonly regime: string;
}

export interface NextEvent {
  readonly when: string;
  readonly title: string;
  readonly detail?: string;
}

export interface Article {
  readonly slug: string;
  /**
   * Categorie a cui l'analisi appartiene, dalla più caratterizzante alla più
   * generica. La prima determina la tinta della pagina e la pastiglia in
   * evidenza sulle schede; le altre servono a ritrovarla dall'archivio.
   */
  readonly categories: readonly CategorySlug[];
  readonly title: string;
  /** Occhiello sopra il titolo. */
  readonly kicker: string;
  /** Sommario di apertura. */
  readonly dek: string;
  readonly publishedAt: string;
  readonly updatedAt?: string;
  readonly author: string;
  readonly readingMinutes: number;
  readonly tags: readonly string[];
  readonly instruments: readonly string[];
  readonly horizons: readonly Horizon[];
  readonly bias?: Bias;
  readonly certainty: Level;
  readonly certaintyNote?: string;
  /** Punti chiave mostrati in apertura. */
  readonly takeaways: readonly string[];
  /** Condizioni che renderebbero non più valida la lettura proposta. */
  readonly invalidation?: readonly string[];
  readonly nextEvent?: NextEvent;
  readonly blocks: readonly Block[];
  readonly featured?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Supporto                                                                    */
/* -------------------------------------------------------------------------- */

export interface TocEntry {
  readonly anchor: string;
  readonly text: string;
}

export interface MarketReference {
  readonly symbol: string;
  readonly name: string;
  readonly value: string;
  readonly change: string;
  readonly tone: Tone;
  readonly icon: string;
  readonly note: string;
}

export interface GlossaryEntry {
  readonly term: string;
  readonly letter: string;
  readonly definition: string;
  readonly why: string;
  readonly related?: readonly string[];
}

export interface LegalDocument {
  readonly slug: string;
  readonly title: string;
  readonly intro: string;
  readonly updatedAt: string;
  readonly sections: readonly LegalSection[];
}

export interface LegalSection {
  readonly heading: string;
  readonly paragraphs?: readonly string[];
  readonly bullets?: readonly string[];
}
