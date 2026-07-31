import { CalendarArea, IndicatorMeta } from '../models/calendar.model';

/**
 * Testi e attributi redazionali degli indicatori del calendario economico.
 *
 * Questo file si scrive a mano e non viene mai rigenerato: `npm run calendario`
 * riscrive soltanto lo storico dei valori (`calendar.series.ts`) e gli
 * appuntamenti di banca centrale (`calendar.events.ts`).
 *
 * `unit` e `decimals` decidono come si scrive il numero; `surprise` decide come
 * si legge uno scostamento dal consenso — se un dato sopra le attese racconta
 * un'economia più forte, più inflazione o più debolezza. Serve solo a colorare
 * la differenza fra previsto ed effettivo: non è un'indicazione operativa.
 */

/* -------------------------------------------------------------------------- */
/* Aree                                                                        */
/* -------------------------------------------------------------------------- */

export interface AreaMeta {
  readonly area: CalendarArea;
  readonly slug: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly icon: string;
  readonly bank: string;
  /** Fuso orario in cui i dati vengono diffusi, per il lettore. */
  readonly localZone: string;
}

export const AREAS: readonly AreaMeta[] = [
  {
    area: 'usa',
    slug: 'usa',
    name: 'USA',
    tagline: 'Venti indicatori, dalla Federal Reserve ai consumi',
    description:
      'Gli indicatori statunitensi che muovono con maggiore frequenza dollaro, rendimenti e metalli preziosi. ' +
      'Per ciascuno sono riportati lo storico delle diffusioni — data e ora, valore atteso dal consenso e valore ' +
      'effettivo — e la data della prossima uscita.',
    icon: 'dollar',
    bank: 'Federal Reserve',
    localZone: 'New York',
  },
  {
    area: 'euro',
    slug: 'euro-zona',
    name: 'Euro zona',
    tagline: 'Nove indicatori dell’area della moneta unica',
    description:
      'Gli indicatori dell’area euro diffusi da Eurostat e dalla Banca centrale europea. Le stime dei prezzi e del ' +
      'prodotto interno lordo escono in più tempi — stima rapida, seconda stima, dato definitivo — e lo storico le ' +
      'riporta tutte, ciascuna con il proprio stadio.',
    icon: 'euro',
    bank: 'Banca centrale europea',
    localZone: 'Francoforte',
  },
];

/* -------------------------------------------------------------------------- */
/* Indicatori                                                                  */
/* -------------------------------------------------------------------------- */

const BLS = { source: 'Bureau of Labor Statistics', sourceUrl: 'https://www.bls.gov' };
const BEA = { source: 'Bureau of Economic Analysis', sourceUrl: 'https://www.bea.gov' };
const FED = { source: 'Federal Reserve', sourceUrl: 'https://www.federalreserve.gov' };
const DOL = { source: 'Department of Labor', sourceUrl: 'https://www.dol.gov' };
const CENSUS = { source: 'Census Bureau', sourceUrl: 'https://www.census.gov' };
const CB = { source: 'The Conference Board', sourceUrl: 'https://www.conference-board.org' };
const EUROSTAT = {
  source: 'Eurostat',
  sourceUrl: 'https://ec.europa.eu/eurostat',
};
const ECB = { source: 'Banca centrale europea', sourceUrl: 'https://www.ecb.europa.eu' };

export const INDICATOR_META: readonly IndicatorMeta[] = [
  /* ======================================================================== */
  /* USA                                                                      */
  /* ======================================================================== */
  {
    key: 'tasso-di-interesse',
    area: 'usa',
    name: 'Tasso di interesse',
    short: 'Tasso di interesse',
    unit: '%',
    decimals: 2,
    cadence: 'riunione',
    surprise: 'neutro',
    ...FED,
    what: 'Limite superiore dell’intervallo obiettivo per i federal funds, deciso dal FOMC in otto riunioni all’anno.',
    why:
      'È il prezzo del denaro a brevissimo termine e la base di ogni altro rendimento in dollari. Quando sale, ' +
      'tenere un’attività che non paga cedole — l’oro — costa di più; quando scende, costa di meno.',
    categories: ['usa', 'fed', 'tasso-di-interesse'],
  },
  {
    key: 'tasso-di-disoccupazione',
    area: 'usa',
    name: 'Tasso di disoccupazione',
    short: 'Disoccupazione',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'debolezza',
    ...BLS,
    what: 'Quota di persone in cerca di lavoro sul totale della forza lavoro, rilevata con l’indagine sulle famiglie.',
    why:
      'La piena occupazione è metà del mandato della Federal Reserve. Una risalita del tasso sposta le attese verso ' +
      'tassi più bassi, di norma a favore dell’oro e a sfavore del dollaro.',
    categories: ['usa', 'tasso-di-disoccupazione', 'fed'],
  },
  {
    key: 'richieste-iniziali-sussidi',
    area: 'usa',
    name: 'Richieste iniziali sussidi di disoccupazione',
    short: 'Sussidi iniziali',
    unit: 'K',
    decimals: 0,
    cadence: 'settimanale',
    surprise: 'debolezza',
    ...DOL,
    what: 'Nuove domande di indennità di disoccupazione presentate nella settimana, in migliaia.',
    why:
      'È il dato sul lavoro più tempestivo che esista: esce ogni giovedì e riferisce di una settimana appena ' +
      'conclusa. Serve a cogliere i punti di svolta prima che compaiano nei dati mensili.',
    categories: ['usa', 'richieste-iniziali-sussidi'],
  },
  {
    key: 'nfp',
    area: 'usa',
    name: 'Buste paga settore non agricolo (NFP)',
    short: 'NFP',
    unit: 'K',
    decimals: 0,
    cadence: 'mensile',
    surprise: 'crescita',
    ...BLS,
    what: 'Variazione mensile del numero di occupati alle dipendenze fuori dall’agricoltura, in migliaia.',
    why:
      'È il singolo dato macroeconomico che più spesso muove dollaro, rendimenti e oro nello stesso istante. Esce ' +
      'di norma il primo venerdì del mese, insieme al tasso di disoccupazione.',
    categories: ['usa', 'nfp'],
  },
  {
    key: 'ipc',
    area: 'usa',
    name: 'Indice dei prezzi al consumo (IPC)',
    short: 'Indice IPC',
    unit: 'pt',
    decimals: 2,
    cadence: 'mensile',
    surprise: 'inflazione',
    ...BLS,
    what: 'Livello dell’indice dei prezzi al consumo per tutti i consumatori urbani, non destagionalizzato.',
    why:
      'È il numero da cui si ricava l’inflazione e a cui sono agganciate pensioni, contratti e titoli di Stato ' +
      'indicizzati. Il livello dice dove sono arrivati i prezzi; la variazione dice a che velocità ci stanno andando.',
    categories: ['usa', 'ipc'],
  },
  {
    key: 'variazione-ipc',
    area: 'usa',
    name: 'Variazione IPC',
    short: 'IPC a/a',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'inflazione',
    ...BLS,
    what: 'Variazione dell’indice dei prezzi al consumo rispetto allo stesso mese dell’anno precedente.',
    why:
      'È il numero che viene comunemente chiamato «inflazione». Determina il tono della conferenza stampa ' +
      'successiva della Federal Reserve e, con essa, l’intera curva delle attese sui tassi.',
    categories: ['usa', 'variazione-ipc', 'ipc'],
  },
  {
    key: 'ipc-core',
    area: 'usa',
    name: 'IPC Core',
    short: 'IPC Core a/a',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'inflazione',
    ...BLS,
    what: 'Inflazione al consumo su base annua, esclusi alimentari ed energia.',
    why:
      'Alimentari ed energia oscillano per ragioni che la politica monetaria non controlla. Togliendoli si vede ' +
      'quanto la spinta sui prezzi sia entrata nella parte stabile del paniere — affitti e servizi in testa.',
    categories: ['usa', 'ipc-core'],
  },
  {
    key: 'variazione-ipc-core',
    area: 'usa',
    name: 'Variazione IPC Core',
    short: 'IPC Core m/m',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'inflazione',
    ...BLS,
    what: 'Variazione mensile dell’indice dei prezzi al consumo al netto di alimentari ed energia.',
    why:
      'La lettura annua si muove lentamente perché trascina dodici mesi di storia. Quella mensile dice che cosa sta ' +
      'succedendo adesso: è la prima a girare quando la tendenza cambia.',
    categories: ['usa', 'variazione-ipc-core', 'ipc-core'],
  },
  {
    key: 'pce',
    area: 'usa',
    name: 'Indice dei prezzi per i consumi personali (PCE)',
    short: 'PCE a/a',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'inflazione',
    ...BEA,
    what: 'Variazione annua dell’indice dei prezzi della spesa per consumi personali, tutte le voci comprese.',
    why:
      'A differenza dell’IPC tiene conto del fatto che le famiglie sostituiscono i beni rincarati con altri, e ' +
      'copre anche la spesa sanitaria pagata da terzi. È la misura su cui la Federal Reserve fissa il proprio obiettivo.',
    categories: ['usa', 'pce', 'fed'],
  },
  {
    key: 'pce-core-annuale',
    area: 'usa',
    name: 'PCE Core Annuale',
    short: 'PCE Core a/a',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'inflazione',
    ...BEA,
    what: 'Variazione annua dell’indice dei prezzi dei consumi personali al netto di alimentari ed energia.',
    why:
      'È il numero più vicino a ciò che la Federal Reserve intende quando dice «obiettivo del 2%». Nelle proiezioni ' +
      'trimestrali del FOMC è proprio questa la variabile di cui i membri indicano il valore atteso.',
    categories: ['usa', 'pce-core-annuale', 'pce', 'fed'],
  },
  {
    key: 'pce-core-trimestrale',
    area: 'usa',
    name: 'PCE Core Trimestrale',
    short: 'PCE Core trim.',
    unit: '%',
    decimals: 1,
    cadence: 'trimestrale',
    surprise: 'inflazione',
    ...BEA,
    what:
      'Deflatore dei consumi personali al netto di alimentari ed energia, calcolato sui conti trimestrali e ' +
      'annualizzato.',
    why:
      'Esce insieme al PIL e viene rivisto a ogni stima successiva. Permette di vedere l’inflazione di fondo con la ' +
      'stessa lente con cui si guarda la crescita, sullo stesso trimestre.',
    categories: ['usa', 'pce-core-trimestrale', 'pce'],
  },
  {
    key: 'variazione-pce-core',
    area: 'usa',
    name: 'Variazione PCE Core',
    short: 'PCE Core m/m',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'inflazione',
    ...BEA,
    what: 'Variazione mensile dell’indice PCE al netto di alimentari ed energia.',
    why:
      'È il passo con cui si muove l’inflazione preferita dalla banca centrale. Tre o quattro letture consecutive ' +
      'attorno allo 0,2% corrispondono, annualizzate, all’obiettivo dichiarato.',
    categories: ['usa', 'variazione-pce-core', 'pce-core-annuale'],
  },
  {
    key: 'variazione-ipp',
    area: 'usa',
    name: 'Variazione IPP',
    short: 'IPP m/m',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'inflazione',
    ...BLS,
    what: 'Variazione mensile dei prezzi che i produttori nazionali ricevono per la propria merce.',
    why:
      'I rincari a monte tendono a scaricarsi a valle: l’indice dei prezzi alla produzione anticipa spesso quello ' +
      'al consumo. Alcune sue voci entrano inoltre direttamente nel calcolo del PCE.',
    categories: ['usa', 'variazione-ipp'],
  },
  {
    key: 'variazione-ipp-core',
    area: 'usa',
    name: 'Variazione IPP Core (PPI)',
    short: 'IPP Core m/m',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'inflazione',
    ...BLS,
    what: 'Variazione mensile dei prezzi alla produzione al netto di alimentari ed energia.',
    why:
      'Toglie dalle statistiche di produzione le due voci che rispondono alle materie prime più che al ciclo. ' +
      'Quel che resta è la parte della pressione sui costi che tende a durare.',
    categories: ['usa', 'variazione-ipp-core', 'variazione-ipp'],
  },
  {
    key: 'fiducia-consumatori',
    area: 'usa',
    name: 'Rapporto sulla fiducia dei consumatori',
    short: 'Fiducia consumatori',
    unit: 'pt',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'crescita',
    ...CB,
    what: 'Indice del Conference Board sul giudizio delle famiglie riguardo a situazione presente e attese, base 1985 = 100.',
    why:
      'I consumi valgono circa due terzi dell’economia americana. La componente relativa alle attese, in ' +
      'particolare, tende a girare prima della spesa effettiva.',
    categories: ['usa', 'fiducia-consumatori'],
  },
  {
    key: 'produzione-industriale',
    area: 'usa',
    name: 'Indice di produzione industriale',
    short: 'Produzione ind. a/a',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'crescita',
    ...FED,
    what:
      'Variazione annua dell’indice di produzione industriale, che misura il volume prodotto da manifattura, ' +
      'estrazione e utilities.',
    why:
      'L’industria pesa meno del terziario ma è la parte del ciclo più sensibile ai tassi e alla domanda estera: ' +
      'gira prima, e con oscillazioni più ampie.',
    categories: ['usa', 'produzione-industriale'],
  },
  {
    key: 'variazione-produzione-industriale',
    area: 'usa',
    name: 'Variazione produzione industriale',
    short: 'Produzione ind. m/m',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'crescita',
    ...FED,
    what: 'Variazione mensile dell’indice di produzione industriale.',
    why:
      'È la lettura su cui gli analisti esprimono il consenso e su cui il mercato reagisce. Va guardata insieme al ' +
      'grado di utilizzo degli impianti, diffuso nello stesso comunicato.',
    categories: ['usa', 'variazione-produzione-industriale', 'produzione-industriale'],
  },
  {
    key: 'pil',
    area: 'usa',
    name: 'PIL',
    short: 'PIL trim. ann.',
    unit: '%',
    decimals: 1,
    cadence: 'trimestrale',
    surprise: 'crescita',
    ...BEA,
    what:
      'Variazione del prodotto interno lordo sul trimestre precedente, espressa in ragione d’anno. Esce in tre ' +
      'stime successive: preliminare, seconda, definitiva.',
    why:
      'È la sintesi più ampia dello stato dell’economia. Conta non solo il numero, ma quale stima sia: la ' +
      'preliminare muove i mercati, le successive li muovono solo se rivedono parecchio.',
    categories: ['usa', 'pil'],
  },
  {
    key: 'variazione-vendite-dettaglio',
    area: 'usa',
    name: 'Variazione vendite al dettaglio',
    short: 'Vendite m/m',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'crescita',
    ...CENSUS,
    what: 'Variazione mensile del giro d’affari del commercio al dettaglio e della ristorazione.',
    why:
      'È il primo riscontro concreto e mensile sulla spesa delle famiglie. Va letto tenendo conto che è espresso ' +
      'in valore: quando i prezzi salgono, una parte dell’aumento non corrisponde a maggiori volumi.',
    categories: ['usa', 'variazione-vendite-dettaglio'],
  },
  {
    key: 'vendite-dettaglio-essenziali',
    area: 'usa',
    name: 'Vendite al dettaglio beni essenziali',
    short: 'Vendite core m/m',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'crescita',
    ...CENSUS,
    what: 'Variazione mensile delle vendite al dettaglio escluse le automobili.',
    why:
      'Le immatricolazioni sono poche e costose: da sole possono ribaltare il dato complessivo. Tolte quelle, si ' +
      'vede l’andamento di fondo della spesa corrente delle famiglie.',
    categories: ['usa', 'vendite-dettaglio-essenziali', 'variazione-vendite-dettaglio'],
  },

  /* ======================================================================== */
  /* Euro zona                                                                */
  /* ======================================================================== */
  {
    key: 'tasso-di-interesse',
    area: 'euro',
    name: 'Tasso di interesse',
    short: 'Tasso di interesse',
    unit: '%',
    decimals: 2,
    cadence: 'riunione',
    surprise: 'neutro',
    ...ECB,
    what:
      'Tasso sulle operazioni di rifinanziamento principali, deciso dal Consiglio direttivo in otto riunioni di ' +
      'politica monetaria all’anno.',
    why:
      'Insieme al tasso sui depositi determina il costo del denaro nell’area euro ed è il principale motore del ' +
      'cambio euro-dollaro, a sua volta legato al prezzo dell’oro espresso in dollari.',
    categories: ['europa', 'bce', 'tasso-di-interesse'],
  },
  {
    key: 'tasso-di-disoccupazione',
    area: 'euro',
    name: 'Tasso di disoccupazione',
    short: 'Disoccupazione',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'debolezza',
    ...EUROSTAT,
    what: 'Quota di persone in cerca di lavoro sulla forza lavoro dei paesi dell’area euro, dato destagionalizzato.',
    why:
      'La BCE non ha un mandato sull’occupazione come la Federal Reserve, ma un mercato del lavoro teso alimenta i ' +
      'salari e da lì i prezzi dei servizi: è la via per cui l’occupazione entra nelle decisioni sui tassi.',
    categories: ['europa', 'tasso-di-disoccupazione'],
  },
  {
    key: 'ipc',
    area: 'euro',
    name: 'Indice dei prezzi al consumo (IPC)',
    short: 'IPC a/a',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'inflazione',
    ...EUROSTAT,
    what:
      'Inflazione al consumo dell’area euro su base annua, misurata con l’indice armonizzato IPCA. Esce prima come ' +
      'stima rapida a fine mese, poi come dato definitivo.',
    why:
      'È l’obiettivo dichiarato della BCE: il 2% a medio termine si riferisce esattamente a questo numero. Eurostat ' +
      'non diffonde in calendario il livello dell’indice, ma la sua variazione annua.',
    categories: ['europa', 'ipc', 'bce'],
  },
  {
    key: 'variazione-ipc',
    area: 'euro',
    name: 'Variazione IPC',
    short: 'IPC m/m',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'inflazione',
    ...EUROSTAT,
    what: 'Variazione mensile dell’indice armonizzato dei prezzi al consumo dell’area euro.',
    why:
      'Nell’area euro la stagionalità dei prezzi è marcata — saldi, energia, pacchetti vacanza. La lettura mensile ' +
      'va quindi confrontata con lo stesso mese degli anni precedenti, non con quello appena trascorso.',
    categories: ['europa', 'variazione-ipc', 'ipc'],
  },
  {
    key: 'ipc-core',
    area: 'euro',
    name: 'IPC Core',
    short: 'IPC Core a/a',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'inflazione',
    ...EUROSTAT,
    what: 'Inflazione dell’area euro su base annua al netto di energia, alimentari, alcolici e tabacchi.',
    why:
      'È la misura che il Consiglio direttivo cita più spesso per giustificare la propria posizione: separa i ' +
      'rincari importati dall’estero da quelli generati all’interno dell’area.',
    categories: ['europa', 'ipc-core', 'bce'],
  },
  {
    key: 'variazione-produzione-industriale',
    area: 'euro',
    name: 'Variazione produzione industriale',
    short: 'Produzione ind. m/m',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'crescita',
    ...EUROSTAT,
    what: 'Variazione mensile del volume della produzione industriale dell’area euro, dato corretto per i giorni lavorativi.',
    why:
      'L’industria pesa nell’area euro più che negli Stati Uniti, e in particolare in Germania e in Italia. È ' +
      'perciò un tassello più rilevante del ciclo europeo di quanto lo sia di quello americano.',
    categories: ['europa', 'variazione-produzione-industriale'],
  },
  {
    key: 'pil-annuale',
    area: 'euro',
    name: 'PIL Annuale',
    short: 'PIL a/a',
    unit: '%',
    decimals: 1,
    cadence: 'trimestrale',
    surprise: 'crescita',
    ...EUROSTAT,
    what:
      'Variazione del prodotto interno lordo rispetto allo stesso trimestre dell’anno precedente, in stima rapida, ' +
      'seconda e terza stima.',
    why:
      'Smorza gli effetti stagionali e le oscillazioni di un singolo trimestre: è la lettura con cui si giudica se ' +
      'l’area euro stia davvero crescendo o solo rimbalzando.',
    categories: ['europa', 'pil-annuale', 'pil'],
  },
  {
    key: 'pil-trimestrale',
    area: 'euro',
    name: 'PIL Trimestrale',
    short: 'PIL t/t',
    unit: '%',
    decimals: 1,
    cadence: 'trimestrale',
    surprise: 'crescita',
    ...EUROSTAT,
    what: 'Variazione del prodotto interno lordo rispetto al trimestre precedente, non annualizzata.',
    why:
      'È la lettura più tempestiva sul passo della crescita europea. Attenzione al confronto con gli Stati Uniti: ' +
      'il PIL americano viene pubblicato in ragione d’anno, cioè moltiplicato per circa quattro.',
    categories: ['europa', 'pil-trimestrale', 'pil'],
  },
  {
    key: 'indice-vendite-dettaglio',
    area: 'euro',
    name: 'Indice delle vendite al dettaglio',
    short: 'Vendite a/a',
    unit: '%',
    decimals: 1,
    cadence: 'mensile',
    surprise: 'crescita',
    ...EUROSTAT,
    what:
      'Variazione annua dell’indice del volume delle vendite al dettaglio dell’area euro, al netto dell’effetto dei ' +
      'prezzi.',
    why:
      'Essendo un indice di volume, e non di valore, dice quanta merce è stata effettivamente venduta: è la lettura ' +
      'dei consumi europei che l’inflazione non gonfia.',
    categories: ['europa', 'indice-vendite-dettaglio'],
  },
];

/* -------------------------------------------------------------------------- */
/* Ricerche leggere                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Titoli di pagina e briciole di pane hanno bisogno del solo nome di un'area o
 * di un indicatore. Passano di qui — e non da `calendar.data.ts` — perché quel
 * modulo trascina con sé l'intero storico dei valori, che finirebbe nel primo
 * pacchetto scaricato dal browser invece che nella pagina che lo usa davvero.
 */
export function areaBySlug(slug: string): AreaMeta | null {
  return AREAS.find((a) => a.slug === slug) ?? null;
}

export function metaBySlug(areaSlug: string, key: string): IndicatorMeta | null {
  const area = areaBySlug(areaSlug);
  return area ? (INDICATOR_META.find((m) => m.area === area.area && m.key === key) ?? null) : null;
}

/* -------------------------------------------------------------------------- */
/* Chi parla                                                                   */
/* -------------------------------------------------------------------------- */

export interface Person {
  readonly name: string;
  readonly role: string;
}

/**
 * Cognomi che compaiono nel calendario, risolti in nome e ruolo.
 *
 * L'elenco copre chi interviene con maggiore frequenza. Per un cognome non
 * presente il sito mostra il solo cognome con l'indicazione dell'istituto: è
 * preferibile un'informazione parziale a un'attribuzione sbagliata.
 */
export const ROSTER: Readonly<Record<string, Person>> = {
  /* --- Federal Reserve — Consiglio dei governatori --------------------- */
  Warsh: { name: 'Kevin Warsh', role: 'Presidente della Federal Reserve' },
  Powell: { name: 'Jerome Powell', role: 'Consiglio dei governatori' },
  Jefferson: { name: 'Philip Jefferson', role: 'Vicepresidente' },
  Bowman: { name: 'Michelle Bowman', role: 'Vicepresidente per la vigilanza' },
  Barr: { name: 'Michael Barr', role: 'Consiglio dei governatori' },
  Cook: { name: 'Lisa Cook', role: 'Consiglio dei governatori' },
  Waller: { name: 'Christopher Waller', role: 'Consiglio dei governatori' },
  Kugler: { name: 'Adriana Kugler', role: 'Consiglio dei governatori' },
  Miran: { name: 'Stephen Miran', role: 'Consiglio dei governatori' },

  /* --- Federal Reserve — banche distrettuali --------------------------- */
  Williams: { name: 'John Williams', role: 'Presidente della Fed di New York' },
  Logan: { name: 'Lorie Logan', role: 'Presidente della Fed di Dallas' },
  Bostic: { name: 'Raphael Bostic', role: 'Presidente della Fed di Atlanta' },
  Daly: { name: 'Mary Daly', role: 'Presidente della Fed di San Francisco' },
  Goolsbee: { name: 'Austan Goolsbee', role: 'Presidente della Fed di Chicago' },
  Golsbee: { name: 'Austan Goolsbee', role: 'Presidente della Fed di Chicago' },
  Kashkari: { name: 'Neel Kashkari', role: 'Presidente della Fed di Minneapolis' },
  Barkin: { name: 'Thomas Barkin', role: 'Presidente della Fed di Richmond' },
  Collins: { name: 'Susan Collins', role: 'Presidente della Fed di Boston' },
  Harker: { name: 'Patrick Harker', role: 'Fed di Philadelphia' },
  Hammack: { name: 'Beth Hammack', role: 'Presidente della Fed di Cleveland' },
  Musalem: { name: 'Alberto Musalem', role: 'Presidente della Fed di St. Louis' },
  Schmid: { name: 'Jeffrey Schmid', role: 'Presidente della Fed di Kansas City' },
  Paulson: { name: 'Anna Paulson', role: 'Presidente della Fed di Philadelphia' },

  /* --- BCE — Comitato esecutivo ---------------------------------------- */
  Lagarde: { name: 'Christine Lagarde', role: 'Presidente della BCE' },
  Guindos: { name: 'Luis de Guindos', role: 'Vicepresidente della BCE' },
  Lane: { name: 'Philip Lane', role: 'Capo economista della BCE' },
  Schnabel: { name: 'Isabel Schnabel', role: 'Comitato esecutivo' },
  Cipollone: { name: 'Piero Cipollone', role: 'Comitato esecutivo' },
  Elderson: { name: 'Frank Elderson', role: 'Comitato esecutivo' },
  Buch: { name: 'Claudia Buch', role: 'Presidente del Consiglio di vigilanza' },

  /* --- BCE — governatori nazionali ------------------------------------- */
  Nagel: { name: 'Joachim Nagel', role: 'Governatore della Bundesbank' },
  Galhau: { name: 'François Villeroy de Galhau', role: 'Governatore della Banque de France' },
  Knot: { name: 'Klaas Knot', role: 'Governatore della banca centrale olandese' },
  Kazaks: { name: 'Mārtiņš Kazāks', role: 'Governatore della banca centrale lettone' },
  Vujčić: { name: 'Boris Vujčić', role: 'Governatore della banca centrale croata' },
  Rehn: { name: 'Olli Rehn', role: 'Governatore della banca centrale finlandese' },
  Muller: { name: 'Madis Müller', role: 'Governatore della banca centrale estone' },
  Escrivá: { name: 'José Luis Escrivá', role: 'Governatore del Banco de España' },
  Donnery: { name: 'Sharon Donnery', role: 'Governatrice della banca centrale irlandese' },
};
