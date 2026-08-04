import { Category, CategoryFamily, CategoryFamilyInfo } from '../models/article.model';

/**
 * Configurazione del sito e testi legali condivisi.
 *
 * Ne restano tre, tutti brevi. Le versioni lunghe — il paragrafo per la modale
 * di primo accesso, i sette paragrafi di chiusura articolo, la nota sui
 * conflitti di interesse — sono state tolte: ripetevano parola per parola
 * sezioni che `legal.data.ts` già scrive per esteso in `/avvertenze`, e
 * comparivano su ogni schermata anche tre volte. Il testo integrale vive nella
 * sua pagina, raggiungibile dalla barra laterale e dal piè di pagina.
 */

export const SITE = {
  name: 'Vitanera',
  tagline: 'Osservatorio indipendente su macro, geopolitica e XAU/USD',
  description:
    'Analisi indipendenti su banche centrali, inflazione, geopolitica e oro. Contenuti a scopo informativo e didattico.',
  since: 2026,
} as const;

/** Una riga: l'unica avvertenza che compare dentro le pagine di contenuto. */
export const DISCLAIMER_SHORT =
  'Contenuto a scopo informativo e didattico. Non costituisce consulenza finanziaria né raccomandazione di investimento.';

/** Nota sui dati numerici, dove il sito ne mostra. */
export const DISCLAIMER_DATA =
  'I valori riportati sono riferimenti citati nelle analisi, non quotazioni in tempo reale.';

/** Nota su cookie e tracciamento. */
export const DISCLAIMER_COOKIE =
  'Il sito non utilizza cookie di profilazione né strumenti di tracciamento pubblicitario.';

export interface NavItem {
  readonly label: string;
  readonly path: string;
  readonly icon: string;
  readonly exact?: boolean;
}

export interface NavGroup {
  readonly label: string;
  readonly items: readonly NavItem[];
}

export const NAV: readonly NavGroup[] = [
  {
    label: 'Osservatorio',
    items: [
      { label: 'Panoramica', path: '/', icon: 'dashboard', exact: true },
      { label: 'Archivio analisi', path: '/analisi', icon: 'archive' },
      { label: 'Argomenti', path: '/argomenti', icon: 'layers', exact: true },
      { label: 'Esiti', path: '/esiti', icon: 'scale' },
    ],
  },
  {
    label: 'Calendario economico',
    items: [
      { label: 'Indici principali', path: '/calendario', icon: 'calendar', exact: true },
      { label: 'USA', path: '/calendario/usa', icon: 'dollar' },
      { label: 'Euro zona', path: '/calendario/euro-zona', icon: 'euro' },
      { label: 'Banche centrali', path: '/calendario/banche-centrali', icon: 'bank' },
    ],
  },
  {
    label: 'Scenari',
    items: [{ label: 'Orizzonti XAU/USD', path: '/orizzonti', icon: 'horizon' }],
  },
  {
    label: 'Strumenti',
    items: [
      { label: 'Metodologia', path: '/metodologia', icon: 'compass' },
      { label: 'Glossario', path: '/glossario', icon: 'book' },
    ],
  },
];

/**
 * Le pagine di trasparenza.
 *
 * Stanno fuori da `NAV` di proposito: sono sempre raggiungibili dal piede della
 * barra laterale e dal piè di pagina, ma non occupano una sezione di
 * navigazione con tanto di icone come se fossero contenuto da leggere.
 */
export const LEGAL_NAV: readonly NavItem[] = [
  { label: 'Avvertenze', path: '/avvertenze', icon: 'shield' },
  { label: 'Note legali', path: '/note-legali', icon: 'scale' },
  { label: 'Privacy', path: '/privacy', icon: 'lock' },
];

/* -------------------------------------------------------------------------- */
/* Categorie dell'archivio                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Un'analisi può appartenere a più categorie. Per non presentarle come un elenco
 * piatto sono raccolte in famiglie, che è anche il modo in cui compaiono nella
 * pagina «Argomenti» e il criterio da cui deriva la tinta di ogni pagina.
 *
 * Le famiglie `lavoro`, `prezzi` e `attivita` raccolgono soprattutto categorie
 * che un indicatore del calendario dichiara: usarle porta il lettore anche a
 * uno storico di dati. `mercati` e `temi` sono invece puramente editoriali e
 * crescono con quello che si scrive.
 */
export const CATEGORY_FAMILIES: readonly CategoryFamilyInfo[] = [
  {
    slug: 'aree',
    name: 'Aree',
    tagline: 'Da dove arriva la notizia',
    icon: 'globe',
  },
  {
    slug: 'banche-centrali',
    name: 'Banche centrali',
    tagline: 'Chi decide il costo del denaro',
    icon: 'bank',
  },
  {
    slug: 'mercati',
    name: 'Mercati',
    tagline: 'Lo strumento di cui parla l’analisi',
    icon: 'coin',
  },
  {
    slug: 'temi',
    name: 'Temi',
    tagline: 'Il meccanismo che l’analisi descrive',
    icon: 'flow',
  },
  {
    slug: 'lavoro',
    name: 'Lavoro',
    tagline: 'Occupazione e sussidi',
    icon: 'users',
  },
  {
    slug: 'prezzi',
    name: 'Prezzi e inflazione',
    tagline: 'Consumo, produzione, spesa personale',
    icon: 'percent',
  },
  {
    slug: 'attivita',
    name: 'Attività economica',
    tagline: 'Crescita, industria, consumi',
    icon: 'chart',
  },
];

export const CATEGORIES: readonly Category[] = [
  /* ---------------------------------------------------------------- Aree -- */
  {
    slug: 'usa',
    name: 'USA',
    short: 'USA',
    family: 'aree',
    series: true,
    icon: 'dollar',
    tagline: 'Stati Uniti',
    description:
      'Tutto ciò che riguarda l’economia statunitense: dati diffusi da BLS, BEA, Census e Federal Reserve, e il modo in cui vengono letti dal mercato.',
  },
  {
    slug: 'europa',
    name: 'Europa',
    short: 'Europa',
    family: 'aree',
    series: true,
    icon: 'map',
    tagline: 'Area euro e Unione europea',
    description:
      'Dati e decisioni dell’area euro: statistiche Eurostat, indagini della Commissione, politica monetaria della Banca centrale europea.',
  },
  {
    slug: 'asia',
    name: 'Asia',
    short: 'Asia',
    family: 'aree',
    series: false,
    icon: 'compass',
    tagline: 'Cina, Giappone, area del Pacifico',
    description:
      'Economie asiatiche e loro effetti sui prezzi delle materie prime, sulle valute e sulla domanda globale.',
  },
  {
    slug: 'medio-oriente',
    name: 'Medio Oriente',
    short: 'Medio Oriente',
    family: 'aree',
    series: false,
    icon: 'compass',
    tagline: 'Golfo Persico, Iran, rotte del greggio',
    description:
      'Il quadrante da cui passa la maggior parte del petrolio scambiato via mare. Le sue crisi arrivano ai mercati prima attraverso l’energia e le rotte, poi attraverso l’inflazione attesa e i rendimenti.',
  },

  /* ---------------------------------------------------- Banche centrali -- */
  {
    slug: 'fed',
    name: 'Fed',
    short: 'Fed',
    family: 'banche-centrali',
    series: true,
    icon: 'bank',
    tagline: 'Federal Reserve e FOMC',
    description:
      'Decisioni del FOMC, verbali, proiezioni economiche e interventi dei membri del Consiglio direttivo della Federal Reserve.',
  },
  {
    slug: 'bce',
    name: 'Bce',
    short: 'Bce',
    family: 'banche-centrali',
    series: true,
    icon: 'euro',
    tagline: 'Banca centrale europea',
    description:
      'Riunioni di politica monetaria del Consiglio direttivo, conferenze stampa, bollettini economici e interventi dei membri del Comitato esecutivo.',
  },
  {
    slug: 'tasso-di-interesse',
    name: 'Tasso di interesse',
    short: 'Tassi',
    family: 'banche-centrali',
    series: true,
    icon: 'percent',
    tagline: 'Il costo ufficiale del denaro',
    description:
      'Il tasso di riferimento fissato dalla banca centrale: è la variabile da cui dipendono rendimenti, cambio e valutazione degli attivi che non pagano cedola, oro compreso.',
  },

  /* ----------------------------------------------------------- Mercati -- */
  {
    slug: 'oro',
    name: 'Oro',
    short: 'Oro',
    family: 'mercati',
    series: false,
    icon: 'coin',
    tagline: 'Il metallo e ciò che lo muove',
    description:
      'Prezzo dell’oro e forze che lo determinano: rendimenti reali, dollaro, domanda di protezione, acquisti ufficiali. È lo strumento attorno a cui ruota l’osservatorio.',
  },
  {
    slug: 'petrolio',
    name: 'Petrolio',
    short: 'Petrolio',
    family: 'mercati',
    series: false,
    icon: 'bolt',
    tagline: 'Brent, WTI e il prezzo dell’energia',
    description:
      'Il greggio è il canale più rapido fra una crisi geopolitica e l’inflazione attesa: quando sale, i rendimenti tendono a seguirlo, e il costo di tenere oro cambia di conseguenza.',
  },
  {
    slug: 'valute',
    name: 'Valute',
    short: 'Valute',
    family: 'mercati',
    series: false,
    icon: 'flow',
    tagline: 'Dollaro, yen, euro e i loro cambi',
    description:
      'Il mercato dei cambi e l’indice del dollaro. L’oro è quotato in dollari: metà di ogni suo movimento è un movimento della valuta in cui si misura.',
  },
  {
    slug: 'obbligazioni',
    name: 'Obbligazioni',
    short: 'Bond',
    family: 'mercati',
    series: false,
    icon: 'chart',
    tagline: 'Treasury, curva dei rendimenti, emissioni',
    description:
      'Il mercato del debito pubblico e la curva dei rendimenti. È il termometro che dice quanto costa non tenere un attivo che paga cedola — cioè quanto costa tenere oro.',
  },

  /* -------------------------------------------------------------- Temi -- */
  {
    slug: 'correlazioni',
    name: 'Correlazioni',
    short: 'Correlazioni',
    family: 'temi',
    series: false,
    icon: 'flow',
    tagline: 'Controlli cross-asset e catene causali',
    description:
      'Analisi che verificano se più mercati stanno dicendo la stessa cosa. Servono a distinguere un movimento con una catena causale dietro da una fiammata isolata.',
  },
  {
    slug: 'premio-di-rischio',
    name: 'Premio di rischio',
    short: 'Premio rischio',
    family: 'temi',
    series: false,
    icon: 'shield',
    tagline: 'Quanto il mercato paga per proteggersi',
    description:
      'La quota di prezzo che riflette una minaccia e non un fatto compiuto. Si forma in fretta su notizie non confermate e si sgonfia con la stessa rapidità.',
  },
  {
    slug: 'rotte-e-approvvigionamento',
    name: 'Rotte e approvvigionamento',
    short: 'Rotte',
    family: 'temi',
    series: false,
    icon: 'map',
    tagline: 'Stretti, transiti, quote di produzione',
    description:
      'Colli di bottiglia del commercio marittimo e decisioni sull’offerta di greggio. Quando il transito si complica, il prezzo si muove prima che cambi qualunque dato macro.',
  },
  {
    slug: 'interventi-valutari',
    name: 'Interventi valutari',
    short: 'Interventi',
    family: 'temi',
    series: false,
    icon: 'bank',
    tagline: 'Quando le autorità entrano sul cambio',
    description:
      'Operazioni con cui tesori e banche centrali intervengono direttamente sul mercato dei cambi. Conta più la struttura dell’operazione — chi partecipa, quale valuta si vende — dell’importo.',
  },
  {
    slug: 'riserve-auree',
    name: 'Riserve auree',
    short: 'Riserve',
    family: 'temi',
    series: false,
    icon: 'archive',
    tagline: 'Acquisti ufficiali di oro',
    description:
      'Gli acquisti delle banche centrali. Sono un sostegno strutturale alla domanda, non un catalizzatore di giornata: si leggono su trimestri, non su sedute.',
  },
  {
    slug: 'debito-pubblico',
    name: 'Debito pubblico',
    short: 'Debito',
    family: 'temi',
    series: false,
    icon: 'scale',
    tagline: 'Fabbisogno, emissioni, premio fiscale',
    description:
      'Quanto debito un tesoro deve collocare e a quale prezzo. Un fabbisogno più alto delle attese alza i rendimenti a lungo senza che la banca centrale abbia deciso nulla.',
  },

  /* ------------------------------------------------------------- Lavoro -- */
  {
    slug: 'jolts',
    name: 'Offerte di lavoro (JOLTS)',
    short: 'JOLTS',
    family: 'lavoro',
    series: false,
    icon: 'users',
    tagline: 'Posti vacanti, assunzioni, dimissioni',
    description:
      'Rilevazione mensile del Bureau of Labor Statistics sui posti di lavoro vacanti. Non è nel calendario di questo sito, ma è fra i dati che spostano di più le attese sulla Fed.',
  },
  {
    slug: 'tasso-di-disoccupazione',
    name: 'Tasso di disoccupazione',
    short: 'Disoccupazione',
    family: 'lavoro',
    series: true,
    icon: 'users',
    tagline: 'Quota di forza lavoro senza impiego',
    description:
      'Percentuale di persone in cerca di occupazione sul totale della forza lavoro. È metà del mandato della Federal Reserve e pesa sulle attese di politica monetaria.',
  },
  {
    slug: 'richieste-iniziali-sussidi',
    name: 'Richieste iniziali sussidi di disoccupazione',
    short: 'Sussidi',
    family: 'lavoro',
    series: true,
    icon: 'users',
    tagline: 'Il termometro settimanale del lavoro',
    description:
      'Nuove domande di indennità di disoccupazione presentate ogni settimana negli Stati Uniti: il dato più tempestivo sullo stato del mercato del lavoro.',
  },
  {
    slug: 'nfp',
    name: 'Buste paga settore non agricolo (NFP)',
    short: 'NFP',
    family: 'lavoro',
    series: true,
    icon: 'users',
    tagline: 'Posti di lavoro creati ogni mese',
    description:
      'Variazione mensile degli occupati alle dipendenze fuori dall’agricoltura. È il dato macro che più frequentemente muove dollaro, rendimenti e oro nello stesso istante.',
  },

  /* ------------------------------------------------------------- Prezzi -- */
  {
    slug: 'ipc',
    name: 'Indice dei prezzi al consumo (IPC)',
    short: 'IPC',
    family: 'prezzi',
    series: true,
    icon: 'chart',
    tagline: 'Il livello dei prezzi al consumo',
    description:
      'Indice che misura il livello dei prezzi di un paniere di beni e servizi acquistati dalle famiglie. È la base su cui si calcola l’inflazione.',
  },
  {
    slug: 'variazione-ipc',
    name: 'Variazione IPC',
    short: 'Var. IPC',
    family: 'prezzi',
    series: true,
    icon: 'flow',
    tagline: 'Inflazione al consumo',
    description:
      'Variazione dell’indice dei prezzi al consumo rispetto all’anno precedente: è il numero comunemente chiamato «inflazione».',
  },
  {
    slug: 'ipc-core',
    name: 'IPC Core',
    short: 'IPC Core',
    family: 'prezzi',
    series: true,
    icon: 'chart',
    tagline: 'Inflazione al netto di alimentari ed energia',
    description:
      'Inflazione al consumo esclusi alimentari ed energia, le due voci più volatili. È la misura che le banche centrali guardano per capire quanto la spinta sui prezzi sia radicata.',
  },
  {
    slug: 'variazione-ipc-core',
    name: 'Variazione IPC Core',
    short: 'Var. IPC Core',
    family: 'prezzi',
    series: true,
    icon: 'flow',
    tagline: 'Passo mensile dell’inflazione di fondo',
    description:
      'Variazione mensile dell’indice dei prezzi al consumo al netto di alimentari ed energia: dice se l’inflazione di fondo sta accelerando o rallentando adesso.',
  },
  {
    slug: 'pce',
    name: 'Indice dei prezzi per i consumi personali (PCE)',
    short: 'PCE',
    family: 'prezzi',
    series: true,
    icon: 'coin',
    tagline: 'La misura preferita dalla Fed',
    description:
      'Indice dei prezzi della spesa per consumi personali. Rispetto all’IPC tiene conto del fatto che le famiglie sostituiscono i beni rincarati con altri: è la misura su cui la Federal Reserve fissa il proprio obiettivo del 2%.',
  },
  {
    slug: 'pce-core-annuale',
    name: 'PCE Core Annuale',
    short: 'PCE Core a/a',
    family: 'prezzi',
    series: true,
    icon: 'coin',
    tagline: 'L’obiettivo del 2% della Fed',
    description:
      'Variazione annua dell’indice PCE al netto di alimentari ed energia. È il singolo numero più vicino a ciò che la Federal Reserve intende quando parla del proprio obiettivo di inflazione.',
  },
  {
    slug: 'pce-core-trimestrale',
    name: 'PCE Core Trimestrale',
    short: 'PCE Core trim.',
    family: 'prezzi',
    series: true,
    icon: 'coin',
    tagline: 'Inflazione di fondo nei conti trimestrali',
    description:
      'Il deflatore dei consumi personali al netto di alimentari ed energia calcolato sui conti trimestrali, diffuso insieme al PIL e rivisto a ogni stima successiva.',
  },
  {
    slug: 'variazione-pce-core',
    name: 'Variazione PCE Core',
    short: 'Var. PCE Core',
    family: 'prezzi',
    series: true,
    icon: 'flow',
    tagline: 'Passo mensile del PCE di fondo',
    description:
      'Variazione mensile del PCE al netto di alimentari ed energia: il ritmo con cui l’inflazione preferita dalla Fed si muove da un mese all’altro.',
  },
  {
    slug: 'variazione-ipp',
    name: 'Variazione IPP',
    short: 'Var. IPP',
    family: 'prezzi',
    series: true,
    icon: 'factory',
    tagline: 'Prezzi alla produzione',
    description:
      'Variazione dei prezzi che i produttori ricevono per la loro merce. Anticipa spesso i prezzi al consumo, perché i rincari a monte tendono a scaricarsi a valle.',
  },
  {
    slug: 'variazione-ipp-core',
    name: 'Variazione IPP Core (PPI)',
    short: 'Var. IPP Core',
    family: 'prezzi',
    series: true,
    icon: 'factory',
    tagline: 'Prezzi alla produzione di fondo',
    description:
      'Prezzi alla produzione al netto di alimentari ed energia: la componente meno esposta agli scossoni delle materie prime e quindi più indicativa della tendenza.',
  },

  /* ---------------------------------------------------------- Attività -- */
  {
    slug: 'ism',
    name: 'Indagine ISM',
    short: 'ISM',
    family: 'attivita',
    series: false,
    icon: 'factory',
    tagline: 'Manifattura vista dai responsabili acquisti',
    description:
      'Indagine mensile dell’Institute for Supply Management. Non è nel calendario di questo sito, ma le sue componenti — prezzi pagati, nuovi ordini, occupazione — anticipano spesso i dati ufficiali.',
  },
  {
    slug: 'fiducia-consumatori',
    name: 'Rapporto sulla fiducia dei consumatori',
    short: 'Fiducia',
    family: 'attivita',
    series: true,
    icon: 'gauge',
    tagline: 'Come le famiglie vedono i prossimi mesi',
    description:
      'Indagine sul giudizio delle famiglie riguardo alla situazione economica presente e alle attese. Precede spesso i cambiamenti nella spesa per consumi.',
  },
  {
    slug: 'produzione-industriale',
    name: 'Indice di produzione industriale',
    short: 'Produzione ind.',
    family: 'attivita',
    series: true,
    icon: 'factory',
    tagline: 'Quanto produce l’industria',
    description:
      'Misura del volume prodotto da industria manifatturiera, estrattiva e utilities. È la parte del ciclo economico più sensibile ai tassi e alla domanda estera.',
  },
  {
    slug: 'variazione-produzione-industriale',
    name: 'Variazione produzione industriale',
    short: 'Var. produzione',
    family: 'attivita',
    series: true,
    icon: 'factory',
    tagline: 'Passo mensile dell’industria',
    description:
      'Variazione mensile della produzione industriale: dice se l’attività industriale sta accelerando o frenando rispetto al mese precedente.',
  },
  {
    slug: 'pil',
    name: 'PIL',
    short: 'PIL',
    family: 'attivita',
    series: true,
    icon: 'chart',
    tagline: 'La crescita complessiva',
    description:
      'Prodotto interno lordo: il valore di tutti i beni e servizi finali prodotti. È la sintesi più ampia dello stato dell’economia, diffusa in più stime successive.',
  },
  {
    slug: 'pil-annuale',
    name: 'PIL Annuale',
    short: 'PIL a/a',
    family: 'attivita',
    series: true,
    icon: 'chart',
    tagline: 'Crescita sui dodici mesi',
    description:
      'Variazione del prodotto interno lordo rispetto allo stesso trimestre dell’anno precedente: la lettura che smorza gli effetti stagionali.',
  },
  {
    slug: 'pil-trimestrale',
    name: 'PIL Trimestrale',
    short: 'PIL t/t',
    family: 'attivita',
    series: true,
    icon: 'chart',
    tagline: 'Crescita sul trimestre precedente',
    description:
      'Variazione del prodotto interno lordo rispetto al trimestre precedente: la lettura più tempestiva sul passo della crescita.',
  },
  {
    slug: 'variazione-vendite-dettaglio',
    name: 'Variazione vendite al dettaglio',
    short: 'Var. vendite',
    family: 'attivita',
    series: true,
    icon: 'basket',
    tagline: 'Quanto spendono le famiglie',
    description:
      'Variazione mensile del giro d’affari del commercio al dettaglio. Poiché i consumi valgono circa due terzi dell’economia americana, è un tassello centrale del quadro.',
  },
  {
    slug: 'vendite-dettaglio-essenziali',
    name: 'Vendite al dettaglio beni essenziali',
    short: 'Vendite core',
    family: 'attivita',
    series: true,
    icon: 'basket',
    tagline: 'Consumi al netto delle auto',
    description:
      'Vendite al dettaglio escluse le automobili, la voce che da sola può stravolgere il dato complessivo. È la lettura più stabile della spesa delle famiglie.',
  },
  {
    slug: 'indice-vendite-dettaglio',
    name: 'Indice delle vendite al dettaglio',
    short: 'Indice vendite',
    family: 'attivita',
    series: true,
    icon: 'basket',
    tagline: 'Il volume del commercio al dettaglio',
    description:
      'Indice del volume delle vendite al dettaglio nell’area euro, diffuso da Eurostat: la misura con cui si segue la tenuta dei consumi europei.',
  },
];

/** Categorie di una famiglia, nell'ordine in cui sono dichiarate. */
export function categoriesOfFamily(family: CategoryFamily): readonly Category[] {
  return CATEGORIES.filter((c) => c.family === family);
}
