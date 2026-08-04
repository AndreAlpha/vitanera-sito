/**
 * attacchi-energia-iraniana-piano-non-ordine
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const attacchiEnergiaIraniana: Article = {
  slug: 'attacchi-energia-iraniana-piano-non-ordine',
  categories: ['geopolitica', 'asia', 'usa'],
  title: 'Attacchi all’energia iraniana: per ora un piano, non un ordine',
  kicker: 'Geopolitica · Rischio di offerta',
  dek:
    'Reuters e Axios riferiscono che Stati Uniti e Israele valutano una campagna contro le infrastrutture ' +
    'energetiche iraniane, forse già nel fine settimana. Manca però il via libera definitivo, e la distanza ' +
    'fra un piano riportato dalla stampa e un ordine di attacco è ciò che tiene la lettura sul neutrale.',
  publishedAt: '2026-08-01T01:12:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Iran', 'Hormuz', 'Petrolio', 'Premio di rischio', 'Bene rifugio'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'DXY', 'Treasury'],
  horizons: ['breve'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'Premio geopolitico in formazione su una notizia non confermata, con il petrolio già sostenuto dalle ' +
      'difficoltà di transito attraverso Hormuz.',
  },
  certainty: 'media',
  certaintyNote:
    'Alta sull’importanza che la notizia avrebbe se si realizzasse, medio-bassa sulla sua realizzazione: ' +
    'esiste un piano riportato da più testate, non un ordine di attacco. È questa distanza a tenere la ' +
    'lettura sul neutrale invece di spingerla al rialzo.',
  takeaways: [
    'Reuters, riprendendo un’indiscrezione di CBS News, riferisce che Stati Uniti e Israele stanno pianificando una campagna di attacchi contro infrastrutture energetiche iraniane, potenzialmente già durante il fine settimana.',
    'Axios conferma che l’azione è in valutazione, ma sottolinea che non è stata presa alcuna decisione finale: Donald Trump non avrebbe dato il via libera definitivo.',
    'Non risultano nuove decisioni monetarie della Federal Reserve: le comunicazioni del 31 luglio riguardano la regolamentazione bancaria.',
    'Il petrolio era già sostenuto dalle difficoltà di transito attraverso Hormuz; una campagna diretta contro l’energia iraniana alzerebbe il rischio di danni all’offerta e di una risposta iraniana.',
    'Il bias passa da ribassista a neutrale con rischio rialzista geopolitico, non a rialzista confermato.',
  ],
  invalidation: [
    'Il via libera non arriva e la notizia perde forza durante il fine settimana: il premio geopolitico si riduce alla riapertura.',
    'L’oro restituisce subito l’eventuale gap di apertura e il mercato torna a concentrarsi su rendimenti elevati e quadro Fed.',
    'L’energia sale ma trascina con sé rendimenti statunitensi e aspettative sulla Fed, soffocando la domanda rifugio.',
  ],
  nextEvent: {
    when: 'Lunedì 3 agosto',
    title: 'Riapertura dei mercati',
    detail:
      'È il momento in cui si vedrà se il piano è diventato un ordine e se l’eventuale premio geopolitico regge oltre il primo impulso.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Reuters, riprendendo un’indiscrezione di CBS News, riferisce che Stati Uniti e Israele stanno pianificando una campagna di attacchi contro infrastrutture energetiche iraniane, potenzialmente già durante il fine settimana. Sarebbe stata discussa anche la possibilità di concludere gli attacchi prima della riapertura dei mercati di lunedì.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Un piano, non un ordine',
      text: 'L’attacco non è confermato: Donald Trump non avrebbe dato il via libera definitivo. Axios conferma che l’azione è in valutazione e potrebbe avvenire nei prossimi giorni, ma sottolinea che non è stata ancora presa una decisione finale. Tutto ciò che segue vale per uno scenario possibile, non per un fatto avvenuto.',
    },
    {
      kind: 'paragraph',
      text: 'Sul fronte monetario non c’è invece nulla di nuovo: le comunicazioni della Federal Reserve pubblicate il 31 luglio riguardano principalmente la regolamentazione bancaria, non i tassi né la politica monetaria. Il quadro dei rendimenti resta quello di prima, ed è un dettaglio che conta, perché è la sponda contro cui il premio geopolitico dovrà misurarsi.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La chiusura precedente alla piena diffusione dell’indiscrezione fotografa un quadro già inclinato: oro in arretramento, energia in rialzo.',
    },
    {
      kind: 'stats',
      title: 'Alla chiusura precedente',
      caption:
        'Riferimenti citati nell’analisi per rendere verificabile il ragionamento, non quotazioni in tempo reale.',
      items: [
        { label: 'Oro spot', value: '4.049,83', tone: 'bear', note: '−1,3%' },
        { label: 'Brent', value: '90,12 $', tone: 'bull', note: '+1,2%' },
        { label: 'WTI', value: '84,67 $', tone: 'bull', note: '+1,3%' },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Il petrolio era già sostenuto dalle difficoltà di transito attraverso Hormuz. Una campagna diretta contro infrastrutture energetiche iraniane alzerebbe nettamente il rischio di danni all’offerta e di una risposta iraniana contro impianti, petroliere o rotte marittime. È il canale per cui una notizia militare arriva fino al prezzo dell’oro: prima come domanda di protezione, poi come spinta sull’inflazione attesa e quindi sui rendimenti.',
    },
    {
      kind: 'heading',
      text: 'I tre scenari alla riapertura',
      anchor: 'scenari',
    },
    {
      kind: 'scenarios',
      caption:
        'Ipotesi condizionate, non previsioni: nessuna delle tre è più probabile per il fatto di essere descritta.',
      items: [
        {
          label: 'Nessuna autorizzazione',
          tone: 'bear',
          text: 'La notizia perde forza durante il fine settimana e l’eventuale premio geopolitico si riduce alla riapertura.',
        },
        {
          label: 'Attacchi limitati',
          tone: 'warn',
          text: 'Senza danni importanti all’offerta: probabile primo movimento rialzista di oro e petrolio, ma con rischio di successivo riassorbimento.',
        },
        {
          label: 'Attacchi e risposta iraniana',
          tone: 'bull',
          text: 'Su energia o Hormuz: probabile apertura in gap rialzista del petrolio e domanda rifugio iniziale sull’oro. Successivamente, però, il rialzo dell’energia potrebbe spingere anche rendimenti statunitensi e aspettative sulla Fed verso l’alto, frenando XAU/USD.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Interpretazione operativa',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias passa da ribassista a neutrale con rischio rialzista geopolitico. Non è ancora rialzista confermato perché, per ora, esiste un piano riportato dalla stampa ma non un ordine di attacco: è una differenza che nel giro di un fine settimana può valere l’intero movimento.',
    },
    {
      kind: 'paragraph',
      text: 'Alla riapertura un eventuale gap non andrebbe inseguito. Vale la pena guardare che cosa servirebbe perché il rialzo abbia una base, e che cosa invece riporterebbe il mercato dove stava.',
    },
    {
      kind: 'balance',
      left: {
        title: 'La conferma richiederebbe',
        tone: 'bull',
        items: [
          'Notizia dell’attacco effettivamente confermata.',
          'Oro che mantiene il rialzo dopo il primo impulso.',
          'Petrolio forte.',
          'DXY e Treasury non in accelerazione tale da soffocare la domanda rifugio.',
        ],
      },
      right: {
        title: 'Riporterebbe la pressione ribassista',
        tone: 'bear',
        items: [
          'Nessun via libera all’operazione.',
          'Oro che restituisce subito il possibile gap.',
          'Ritorno rapido del mercato su rendimenti elevati e quadro Fed.',
        ],
      },
    },
    {
      kind: 'note',
      text: 'I livelli citati sono riferimenti alla chiusura precedente, riportati per rendere verificabile il ragionamento. Non sono obiettivi, non sono quotazioni in tempo reale e non descrivono livelli operativi.',
    },
  ],
};
