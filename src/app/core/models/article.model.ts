/**
 * Modello dei contenuti editoriali di Vitanera.
 *
 * Nota: tutti i contenuti descritti da questi tipi hanno finalità informative e
 * didattiche. Nessun campo di questo modello — bias, scenari, orizzonti — va
 * inteso come raccomandazione di investimento o segnale operativo.
 */

/**
 * Categorie dichiarate dagli indicatori del calendario economico.
 *
 * Sono le uniche che fanno da ponte fra un'analisi e uno storico di dati: la
 * scheda di un indicatore mostra fra gli «argomenti collegati» le categorie che
 * dichiara, e da lì si arriva alle analisi che le usano. Il collegamento passa
 * solo da qui, e uno slug plausibile ma sbagliato non dà errore — manda il
 * lettore su una serie che non contiene il numero che ha appena letto.
 *
 * Non si inventano: esistono perché `calendar.meta.ts` le dichiara. Aggiungerne
 * una qui senza che nessun indicatore la dichiari la rende una categoria
 * editoriale travestita.
 */
export type IndicatorCategorySlug =
  // Aree coperte dal calendario
  | 'usa'
  | 'europa'
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

/**
 * Categorie puramente editoriali: nessuno storico dietro, nessun indicatore che
 * le dichiari.
 *
 * Questo elenco **cresce con quello che si scrive**. Nasce dalle analisi
 * pubblicate, non da una tassonomia decisa a tavolino: quando un'analisi tratta
 * qualcosa che qui non c'è, la risposta giusta è aggiungere una voce, non
 * forzare la categoria che le somiglia di più. Una categoria forzata sposta
 * un'analisi nell'archivio sbagliato e non si nota mai più.
 */
export type EditorialCategorySlug =
  // Aree non coperte dal calendario
  | 'asia'
  | 'medio-oriente'
  | 'russia-ucraina'
  // Banche centrali fuori dal calendario
  | 'banche-centrali-estere'
  // Mercati: lo strumento di cui l'analisi parla
  | 'oro'
  | 'petrolio'
  | 'valute'
  | 'obbligazioni'
  // Temi: il meccanismo che l'analisi descrive
  | 'correlazioni'
  | 'premio-di-rischio'
  | 'rotte-e-approvvigionamento'
  | 'assicurazioni-marittime'
  | 'interventi-valutari'
  | 'riserve-auree'
  | 'debito-pubblico'
  | 'dazi-e-commercio'
  // Dati americani che il calendario non copre
  | 'fiducia-michigan'
  | 'ism'
  | 'jolts'
  | 'adp'
  | 'produttivita'
  | 'aspettative-di-inflazione'
  | 'mercato-immobiliare';

/**
 * Categorie dell'archivio: un'analisi può appartenere a più categorie
 * contemporaneamente, e la prima determina la tinta della pagina.
 */
export type CategorySlug = IndicatorCategorySlug | EditorialCategorySlug;

/** Famiglia a cui appartiene una categoria, usata per raggrupparle a video. */
export type CategoryFamily =
  'aree' | 'banche-centrali' | 'mercati' | 'temi' | 'lavoro' | 'prezzi' | 'attivita';

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
  /**
   * Se un indicatore del calendario dichiara questa categoria, e quindi se
   * usarla porta il lettore anche a uno storico di dati.
   *
   * Non è decorativo: è la differenza fra una categoria che collega l'analisi a
   * una serie e una che la colloca soltanto in archivio. Il valore è verificato
   * dai test contro `calendar.meta.ts`, così non può mentire.
   */
  readonly series: boolean;
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
  /**
   * Su quale arco di tempo vale la direzione descritta.
   *
   * Senza questo campo una lettura intraday e una lettura di settimane si
   * leggono uguali, e messe in fila sembrano contraddirsi anche quando dicono
   * cose compatibili: l'oro può salire nelle prossime ore e restare debole nel
   * mese. È anche il campo con cui la panoramica separa le sue tre letture.
   */
  readonly horizon: Horizon;
}

export interface NextEvent {
  readonly when: string;
  readonly title: string;
  readonly detail?: string;
}

/**
 * Una fonte consultata per scrivere l'analisi.
 *
 * Il testo cita le testate in prosa — «Reuters riferisce che…» — ma in prosa non
 * sono verificabili né elencabili. Qui diventano un elenco: chi l'ha detto, che
 * cosa, e dove si legge.
 */
export interface SourceRef {
  /** La testata o l'ente: `Reuters`, `Bloomberg`, `World Gold Council`. */
  readonly outlet: string;
  /** Titolo o oggetto della notizia, se aiuta a ritrovarla. */
  readonly title?: string;
  readonly url?: string;
  /** Quando è stata pubblicata o consultata, in forma leggibile. */
  readonly at?: string;
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
  /** Le fonti consultate, nell'ordine in cui contano. */
  readonly sources?: readonly SourceRef[];
  readonly blocks: readonly Block[];
  readonly featured?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Esito di un'analisi                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Come è andata a finire.
 *
 * `confermata` e `invalidata` sono i due casi netti. `parziale` è quando
 * qualcuna delle condizioni di invalidazione è scattata e altre no: succede
 * spesso ed è il caso più informativo, perché dice quale parte del ragionamento
 * ha retto. `senza-verifica` è la confessione onesta che nessuno è tornato a
 * guardare in tempo utile — vale come esito e va contata come tale, altrimenti
 * il registro misura solo le analisi che faceva comodo controllare.
 */
export type Verdict = 'confermata' | 'invalidata' | 'parziale' | 'senza-verifica';

/** Una singola condizione di invalidazione, ricontrollata a posteriori. */
export interface CheckedCondition {
  /** Il testo della condizione, ripreso da `Article.invalidation`. */
  readonly condition: string;
  readonly triggered: boolean;
  /** Che cosa si è visto: il numero, la data, il fatto. */
  readonly evidence: string;
}

/**
 * L'esito di un'analisi già pubblicata.
 *
 * Vive in un archivio suo e **non modifica mai l'analisi**: un'analisi resta
 * com'era il giorno in cui è stata scritta, altrimenti il registro degli esiti
 * misurerebbe la memoria di chi lo compila invece delle sue previsioni.
 *
 * Il verdetto non è un'impressione: si ricava ricontrollando una per una le
 * condizioni che l'analisi aveva dichiarato prima di sapere come sarebbe andata.
 * È l'unico modo per non cadere nel giudizio a posteriori — la tendenza a
 * ricordare come «sostanzialmente giusta» qualunque lettura di cui si conosce
 * già l'esito.
 */
export interface Outcome {
  /** Lo slug dell'analisi giudicata. Deve esistere in archivio. */
  readonly slug: string;
  readonly checkedAt: string;
  readonly verdict: Verdict;
  /**
   * Le condizioni di `Article.invalidation`, ricontrollate una per una.
   * Vuoto solo per `senza-verifica`.
   */
  readonly conditions: readonly CheckedCondition[];
  /** Che cosa è successo davvero, coi numeri. */
  readonly what: string;
  /** Che cosa cambia nel metodo, se cambia qualcosa. Facoltativo e raro. */
  readonly lesson?: string;
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
