/**
 * primi-dati-ism-prezzi-sopra-le-attese-ordini-in-aumento
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const primiComponentiIsm: Article = {
  slug: 'primi-dati-ism-prezzi-sopra-le-attese-ordini-in-aumento',
  categories: ['ism', 'usa', 'tasso-di-interesse', 'oro'],
  title: 'Primi dati ISM: prezzi sopra le attese, ordini in aumento',
  kicker: 'Dati USA · Primi componenti ISM',
  dek:
    'Alle 16:00 italiane sono usciti alcuni componenti del manifatturiero statunitense: prezzi pagati sopra ' +
    'le attese ma in discesa, nuovi ordini in aumento. Il dato ISM principale non è ancora verificabile, e ' +
    'dollaro e rendimenti non hanno ancora invertito la seduta.',
  publishedAt: '2026-08-03T16:05:00+02:00',
  author: AUTHOR,
  readingMinutes: 3,
  tags: ['ISM', 'Prezzi pagati', 'Nuovi ordini', 'PMI', 'Inflazione'],
  instruments: ['XAU/USD', 'DXY', 'Treasury', 'Brent'],
  horizons: ['breve'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'Componenti ISM leggermente sfavorevoli all’oro — ordini solidi e prezzi ancora alti — ma dollaro e ' +
      'rendimenti che nella seduta continuano a scendere: la lettura resta appena inclinata al rialzo e più ' +
      'fragile di prima, in attesa che il quadro cross-asset si pronunci.',
    horizon: 'breve',
  },
  certainty: 'media',
  certaintyNote:
    'Alta sui componenti già pubblicati, che sono numeri usciti e verificabili; media sull’impatto, perché ' +
    'manca ancora la conferma del dato ISM principale e la reazione completa del mercato. È una lettura presa ' +
    'a pochi minuti dall’uscita, con una parte del quadro ancora scoperta.',
  takeaways: [
    'Prezzi pagati ISM a 71,1, sopra il 70,0 atteso ma in calo dal 73,0 precedente.',
    'Nuovi ordini a 56,7, in aumento dal 56,0: la domanda industriale statunitense non sta cedendo.',
    'Poco prima, il PMI manifatturiero finale di S&P Global era risultato 53,9, appena sopra il 53,8 preliminare e atteso.',
    'Il dato ISM principale non è ancora comparso in modo affidabile nelle fonti ufficiali e nei calendari consultati: non viene riportato alcun numero non verificato.',
    'Lettura mista e leggermente sfavorevole all’oro, ma DXY e rendimenti risultano ancora in calo nella seduta: il dato non ha prodotto una vera inversione cross-asset. Bias intraday ancora neutrale con lieve inclinazione rialzista, più fragile.',
  ],
  invalidation: [
    'Oro in calo, DXY in recupero e Treasury a 2 e a 10 anni in salita nello stesso momento.',
    'Il dato ISM principale, una volta verificabile, smentisce il quadro suggerito dai componenti.',
    'I prezzi pagati vengono letti come una nuova accelerazione inflazionistica invece che come una discesa dal 73,0.',
  ],
  nextEvent: {
    when: 'Nei prossimi minuti',
    title: 'Dato ISM principale e reazione cross-asset',
    detail:
      'Servono il numero principale, quando sarà verificabile, e la direzione presa insieme da oro, dollaro e rendimenti: è lì che si vede se la lettura regge o si ribalta.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Alle 16:00 italiane sono stati pubblicati alcuni componenti del manifatturiero statunitense. Sono numeri parziali — il dato principale manca ancora — ma sufficienti a spostare di poco la lettura su XAU/USD.',
    },
    {
      kind: 'stats',
      title: 'I numeri usciti',
      caption:
        'Componenti pubblicati e verificati al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Prezzi pagati ISM',
          value: '71,1',
          tone: 'bear',
          note: 'Sopra il 70,0 atteso, ma in calo dal 73,0 precedente',
        },
        {
          label: 'Nuovi ordini ISM',
          value: '56,7',
          tone: 'bear',
          note: 'In aumento dal 56,0',
        },
        {
          label: 'PMI S&P Global finale',
          value: '53,9',
          tone: 'warn',
          note: 'Appena sopra il 53,8 preliminare e atteso',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il dato principale non è ancora verificabile',
      text: 'L’ISM Manufacturing PMI non è comparso in modo affidabile nelle pagine ufficiali e nei calendari consultati pochi minuti dopo l’uscita. Un numero non verificato non viene riportato: la lettura qui sotto poggia sui soli componenti già pubblicati.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La lettura iniziale è mista, ma nel complesso leggermente sfavorevole all’oro. Due elementi tirano nella stessa direzione e uno li attenua.',
    },
    {
      kind: 'balance',
      title: 'Come si distribuiscono i tre elementi',
      left: {
        title: 'Sfavorevoli all’oro',
        tone: 'bear',
        items: [
          'Ordini più forti: la domanda industriale statunitense non sta cedendo.',
          'Prezzi ancora molto elevati e sopra le attese: aumenta il rischio che la Fed debba restare restrittiva.',
        ],
      },
      right: {
        title: 'Che attenua',
        tone: 'bull',
        items: [
          'I prezzi sono comunque scesi dal 73,0 al 71,1: non è una nuova accelerazione inflazionistica netta.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Effetto probabile immediato',
      anchor: 'effetto-immediato',
    },
    {
      kind: 'scenarios',
      caption: 'Effetti attesi dalla lettura del dato, non movimenti già osservati.',
      items: [
        {
          label: 'Oro',
          tone: 'bear',
          text: 'Lieve pressione ribassista, o quantomeno maggiore volatilità.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Piccolo sostegno, coerente con ordini solidi e prezzi ancora alti.',
        },
        {
          label: 'Rendimenti USA',
          tone: 'bear',
          text: 'Rischio di rimbalzo, soprattutto sulla scadenza a 2 anni, che è la più sensibile alle attese sulla Fed.',
        },
        {
          label: 'Petrolio',
          tone: 'neutral',
          text: 'Effetto marginale: resta il dossier Iran a guidarlo.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Per ora nessuna inversione cross-asset',
      text: 'DXY e rendimenti dei Treasury risultano ancora in calo nella seduta. Il dato non ha prodotto una vera inversione: è la ragione per cui la lettura resta appena inclinata al rialzo invece di girare.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias intraday su XAU/USD resta neutrale con lieve inclinazione rialzista, ma più fragile di prima: si regge ora su una divergenza aperta fra ciò che il dato suggerisce e ciò che i prezzi stanno facendo.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Le tre condizioni che renderebbero il segnale davvero ribassista',
      items: ['Oro in discesa.', 'DXY in recupero.', 'Treasury a 2 e a 10 anni in salita.'],
      text: 'Contano solo se si presentano insieme e nei prossimi minuti: presa singolarmente, nessuna delle tre basta.',
    },
    {
      kind: 'note',
      text: 'I numeri riportati sono i componenti già pubblicati; il dato ISM principale è volutamente assente perché non ancora verificabile. Gli effetti descritti sono deduzioni da confrontare con i prezzi, non movimenti osservati.',
    },
  ],
};
