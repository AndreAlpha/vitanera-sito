/**
 * oro-inverte-il-rialzo-dopo-il-dato-ism
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const oroInverteDopoIsm: Article = {
  slug: 'oro-inverte-il-rialzo-dopo-il-dato-ism',
  categories: ['usa', 'tasso-di-interesse', 'asia', 'fed'],
  title: 'L’oro inverte il rialzo dopo l’ISM',
  kicker: 'Correlazioni · Reazione al dato ISM',
  dek:
    'XAU/USD è passato dal rialzo iniziale a circa −0,3%, vicino ai 4.030 dollari, e con lui sono scesi ' +
    'argento, platino e palladio. Nello stesso pomeriggio la Bank of Korea annuncia che tornerà a comprare ' +
    'oro dopo dodici anni: una notizia strutturale che però non tocca la pressione di oggi.',
  publishedAt: '2026-08-03T17:10:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['ISM', 'Bank of Korea', 'Banche centrali', 'Metalli preziosi', 'Dollaro'],
  instruments: ['XAU/USD', 'XAG/USD', 'DXY', 'Treasury', 'Brent'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'media',
    regime:
      'Il prezzo ha reagito nella direzione coerente con un ISM al massimo da oltre quattro anni: il mercato ' +
      'sta pesando più la forza dell’economia statunitense e il rischio di tassi elevati che il calo del ' +
      'petrolio. La domanda ufficiale coreana sostiene il quadro di fondo, non quello della giornata.',
  },
  certainty: 'alta',
  certaintyNote:
    'Il fondamento è solido: il movimento dei prezzi è osservato e riferito da Reuters, l’ISM è pubblicato e ' +
    'la Bank of Korea ha annunciato. La lettura complessiva resta però medio-alta, perché le quantità che ' +
    'Seul acquisterà non sono note e perché i riferimenti di prezzo sono approssimati.',
  takeaways: [
    'Dopo il dato manifatturiero, XAU/USD è passato dal rialzo iniziale a circa −0,3%, vicino ai 4.030 dollari.',
    'Sono scesi anche argento, platino e palladio: la pressione non riguarda soltanto l’oro ma l’intero comparto dei preziosi.',
    'L’ISM manifatturiero di luglio a 55,6 è il massimo da oltre quattro anni, con occupazione, ordini ed esportazioni in espansione; i costi restano elevati anche se la loro crescita ha rallentato leggermente.',
    'La Bank of Korea acquisterà oro dai produttori nazionali per la prima volta dal 2013, nell’ambito della gestione delle riserve: le quantità non sono ancora note.',
    'Bias intraday neutrale-ribassista: il mercato sta dando più peso alla forza americana e al rischio di tassi elevati che al calo del petrolio.',
  ],
  invalidation: [
    'L’oro recupera rapidamente il livello precedente al dato mentre DXY e rendimenti restano deboli.',
    'Una nuova escalation concreta su Iran e Hormuz riporta forte domanda di bene rifugio.',
  ],
  nextEvent: {
    when: 'Nei prossimi giorni',
    title: 'Dati sul lavoro statunitensi',
    detail:
      'Se anche questi risultassero forti, aumenterebbe il rischio di una discesa verso i 4.000 dollari. La domanda delle banche centrali può offrire sostegno più avanti, ma non è un catalizzatore intraday.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'La verifica sui prezzi è arrivata, e va nella direzione del dato. Dopo l’ISM manifatturiero molto più forte del previsto, XAU/USD è passato dal rialzo iniziale a circa −0,3%, vicino ai 4.030 dollari.',
    },
    {
      kind: 'stats',
      title: 'I riferimenti della giornata',
      caption:
        'Valori citati nelle fonti al momento della scrittura, approssimati e non quotazioni in tempo reale.',
      items: [
        {
          label: 'XAU/USD',
          value: '≈ −0,3%',
          tone: 'bear',
          note: 'Vicino ai 4.030 dollari, dopo un rialzo iniziale',
        },
        {
          label: 'ISM manifatturiero',
          value: '55,6',
          tone: 'bear',
          note: 'Massimo da oltre quattro anni',
        },
        {
          label: 'Bank of Korea',
          value: 'dal 2013',
          tone: 'bull',
          note: 'Primo ritorno agli acquisti dopo dodici anni',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Non è un movimento del solo oro',
      text: 'Sono scesi anche argento, platino e palladio. Quando cede l’intero comparto dei preziosi il movimento non nasce da qualcosa di specifico dell’oro, ma dal lato del dollaro e dei tassi: è la conferma più utile contenuta in questa reazione.',
    },
    {
      kind: 'paragraph',
      text: 'Dal lato della Federal Reserve, invece, non è arrivato nulla di nuovo: nessuna comunicazione monetaria rilevante dopo l’ultimo controllo. Il movimento è quindi tutto del dato, non delle parole.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La reazione del prezzo conferma che il mercato sta dando più peso alla forza dell’economia statunitense e al rischio di tassi elevati che al calo del petrolio. È esattamente la gerarchia che nella lettura precedente era ancora da verificare.',
    },
    {
      kind: 'list',
      items: [
        'Economia statunitense più forte: meno urgenza di allentare la politica monetaria.',
        'Inflazione industriale ancora alta: maggiore rischio di una Fed restrittiva.',
        'Dollaro e rendimenti possono recuperare.',
        'L’oro, che non offre interessi, perde attrattiva quando i rendimenti salgono.',
      ],
    },
    {
      kind: 'heading',
      text: 'La Bank of Korea torna a comprare',
      anchor: 'bank-of-korea',
    },
    {
      kind: 'paragraph',
      text: 'La banca centrale coreana ha annunciato che acquisterà oro dai produttori nazionali per la prima volta dal 2013, nell’ambito della gestione delle riserve. È una notizia strutturalmente positiva per la domanda ufficiale, e si aggiunge al filone degli acquisti delle banche centrali.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Struttura, non giornata',
      text: 'Le quantità non sono ancora note, e un acquisto graduale dai produttori interni non sposta il prezzo nel pomeriggio in cui viene annunciato. Non basta quindi a contrastare la pressione immediata dell’ISM: sono due orizzonti diversi che non vanno sommati.',
    },
    {
      kind: 'heading',
      text: 'Effetto probabile immediato',
      anchor: 'effetto',
    },
    {
      kind: 'scenarios',
      caption: 'Effetti attesi e, per l’oro, già osservati.',
      items: [
        {
          label: 'Oro',
          tone: 'bear',
          text: 'Pressione ribassista confermata dai prezzi, non più solo dedotta.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Rischio di recupero.',
        },
        {
          label: 'Treasury',
          tone: 'bear',
          text: 'Rendimenti potenzialmente più alti, soprattutto sulle scadenze brevi.',
        },
        {
          label: 'Petrolio',
          tone: 'neutral',
          text: 'Ancora debole, ma il suo effetto favorevole all’oro è stato momentaneamente superato dai dati statunitensi.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Nei prossimi giorni',
      anchor: 'prossimi-giorni',
    },
    {
      kind: 'paragraph',
      text: 'Se anche i prossimi dati sul lavoro risultassero forti, aumenterebbe il rischio di una discesa verso i 4.000 dollari. La domanda delle banche centrali, coreana compresa, può offrire sostegno più avanti: non è però un catalizzatore intraday e non va usata per leggere le prossime ore.',
    },
    {
      kind: 'note',
      text: 'I livelli di prezzo riportati sono approssimati e servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi. I fatti su prezzi, ISM e Bank of Korea provengono da Reuters, la conferma sull’assenza di nuove comunicazioni monetarie dalla Federal Reserve.',
    },
  ],
};
