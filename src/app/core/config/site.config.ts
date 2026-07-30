import { Category } from '../models/article.model';

/**
 * Configurazione del sito e — soprattutto — testi legali riutilizzati ovunque.
 *
 * Le avvertenze sono centralizzate qui perché devono comparire in modo
 * identico e coerente in ogni punto del sito: barra superiore, modale di primo
 * accesso, intestazione e chiusura di ogni articolo, schede in elenco, piè di
 * pagina, pagine legali e versione stampata.
 */

export const SITE = {
  name: 'Vitanera',
  tagline: 'Osservatorio indipendente su macro, geopolitica e XAU/USD',
  description:
    'Analisi indipendenti su banche centrali, inflazione, geopolitica e oro. Contenuti a scopo informativo e didattico.',
  email: 'and.camp96@gmail.com',
  since: 2026,
} as const;

/** Frase brevissima, per barre e badge. */
export const DISCLAIMER_MICRO =
  'Contenuti informativi · Non è una testata giornalistica · Non è consulenza finanziaria';

/** Una riga, per schede ed elenchi. */
export const DISCLAIMER_SHORT =
  'Contenuto a scopo informativo e didattico. Non costituisce consulenza finanziaria né raccomandazione di investimento.';

/** Paragrafo, per intestazione articoli e modale. */
export const DISCLAIMER_MEDIUM =
  'Vitanera non è una testata giornalistica ai sensi della L. 62/2001 e non è registrata presso alcun tribunale. ' +
  'Quanto pubblicato ha finalità esclusivamente informative, divulgative e didattiche e non costituisce consulenza ' +
  'finanziaria, raccomandazione di investimento, ricerca in materia di investimenti né sollecitazione al pubblico ' +
  'risparmio. Le opinioni espresse sono personali e possono rivelarsi errate.';

/** Blocco esteso, usato in chiusura di ogni articolo. */
export const DISCLAIMER_LONG: readonly string[] = [
  'Vitanera è un progetto personale e indipendente. Non è una testata giornalistica ai sensi della L. 7 marzo 2001 n. 62, non è registrata presso alcun tribunale, non ha un direttore responsabile e non è aggiornata con periodicità prestabilita: non può pertanto essere considerata un prodotto editoriale ai sensi della normativa vigente.',
  'I contenuti hanno finalità esclusivamente informative, divulgative e didattiche. Non costituiscono in alcun modo consulenza finanziaria, consulenza in materia di investimenti, gestione di portafogli, raccomandazione personalizzata o generale, ricerca in materia di investimenti ai sensi del Regolamento (UE) n. 596/2014 e del Regolamento delegato (UE) 2016/958, né sollecitazione all’investimento o al pubblico risparmio.',
  'L’autore non è un consulente finanziario abilitato, non è iscritto all’Albo unico dei consulenti finanziari (OCF) e non è un soggetto vigilato da CONSOB, Banca d’Italia o altra autorità. Nessun rapporto di consulenza, mandato o incarico si instaura con la semplice lettura del sito.',
  'Le analisi riflettono opinioni personali basate su informazioni ritenute attendibili al momento della redazione, ma non ne è garantita l’accuratezza, la completezza o l’attualità. I dati citati provengono da fonti pubbliche, non sono quotazioni in tempo reale e possono contenere errori, ritardi o imprecisioni.',
  'Gli strumenti citati — oro, valute, indici, obbligazioni, materie prime, derivati, CFD e prodotti a leva — comportano un elevato rischio di perdita, anche superiore al capitale investito nel caso di strumenti a leva. I risultati passati non sono indicativi di quelli futuri e nessuno scenario descritto rappresenta una previsione affidabile.',
  'Ogni decisione di investimento è assunta dal lettore in piena autonomia, sotto la propria esclusiva responsabilità e a proprio rischio. Prima di operare è opportuno rivolgersi a un consulente finanziario abilitato e valutare la propria situazione patrimoniale, la propria esperienza e la propria tolleranza al rischio.',
  'L’autore declina ogni responsabilità per danni diretti, indiretti, incidentali o consequenziali derivanti dall’uso, dall’interpretazione o dall’affidamento riposto nei contenuti pubblicati, nonché per eventuali errori, omissioni, interruzioni o indisponibilità del sito.',
];

/** Nota specifica sui dati numerici mostrati nel sito. */
export const DISCLAIMER_DATA =
  'I valori riportati sono riferimenti citati all’interno delle analisi, non quotazioni in tempo reale. ' +
  'Non sono forniti a fini operativi e possono differire in modo anche significativo dai prezzi di mercato correnti.';

/** Nota sui potenziali conflitti di interesse. */
export const DISCLAIMER_CONFLICT =
  'L’autore può detenere, direttamente o indirettamente, posizioni sugli strumenti citati e può modificarle in qualsiasi momento senza preavviso.';

/** Nota sull’uso dell’archiviazione locale del browser. */
export const DISCLAIMER_COOKIE =
  'Il sito non utilizza cookie di profilazione né strumenti di tracciamento pubblicitario. Viene impiegata la sola memoria locale del browser per ricordare la presa visione delle avvertenze.';

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
      { label: 'Fondamentali', path: '/fondamentali', icon: 'bank' },
      { label: 'Correlazioni', path: '/correlazioni', icon: 'flow' },
      { label: 'Geopolitica', path: '/geopolitica', icon: 'globe' },
    ],
  },
  {
    label: 'Scenari',
    items: [
      { label: 'Orizzonti XAU/USD', path: '/orizzonti', icon: 'horizon' },
      { label: 'Archivio analisi', path: '/analisi', icon: 'archive' },
    ],
  },
  {
    label: 'Strumenti',
    items: [
      { label: 'Metodologia', path: '/metodologia', icon: 'compass' },
      { label: 'Glossario', path: '/glossario', icon: 'book' },
    ],
  },
  {
    label: 'Trasparenza',
    items: [
      { label: 'Avvertenze e rischi', path: '/avvertenze', icon: 'shield' },
      { label: 'Note legali', path: '/note-legali', icon: 'scale' },
      { label: 'Privacy e cookie', path: '/privacy', icon: 'lock' },
    ],
  },
];

export const CATEGORIES: readonly Category[] = [
  {
    slug: 'fondamentali',
    name: 'Fondamentali',
    icon: 'bank',
    tagline: 'Banche centrali, inflazione, dati macro',
    description:
      'Lettura dei fatti macroeconomici confermati — decisioni di politica monetaria, inflazione, crescita, occupazione — e del modo in cui possono incidere sul quadro di XAU/USD.',
  },
  {
    slug: 'correlazioni',
    name: 'Correlazioni',
    icon: 'flow',
    tagline: 'Dollaro, rendimenti, petrolio, metalli',
    description:
      'Osservazione delle relazioni fra oro, dollaro, curva dei rendimenti, energia e metalli industriali, con attenzione a conferme e divergenze fra i mercati.',
  },
  {
    slug: 'geopolitica',
    name: 'Geopolitica',
    icon: 'globe',
    tagline: 'Rischio, rotte commerciali, energia',
    description:
      'Eventi geopolitici rilevanti per i flussi di energia e per la domanda di protezione, con particolare attenzione ai colli di bottiglia del commercio marittimo.',
  },
  {
    slug: 'previsioni',
    name: 'Orizzonti',
    icon: 'horizon',
    tagline: 'Breve, medio e lungo termine',
    description:
      'Ipotesi di scenario su orizzonti diversi, con esplicitazione delle condizioni che le confermerebbero e di quelle che le renderebbero non più valide.',
  },
];
