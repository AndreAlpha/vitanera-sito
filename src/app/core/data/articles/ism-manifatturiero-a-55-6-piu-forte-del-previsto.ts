/**
 * ism-manifatturiero-a-55-6-piu-forte-del-previsto
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const ismManifatturieroFortissimo: Article = {
  slug: 'ism-manifatturiero-a-55-6-piu-forte-del-previsto',
  categories: ['ism', 'usa', 'fed', 'oro'],
  title: 'ISM manifatturiero a 55,6: molto più forte del previsto',
  kicker: 'Dati USA · ISM manifatturiero',
  dek:
    'Il dato principale è arrivato ed è una sorpresa nettamente positiva: 55,6 contro 54,0 atteso, con ' +
    'l’occupazione manifatturiera tornata sopra la soglia di espansione. È molto più forte di quanto ' +
    'apparisse dai soli componenti disponibili poco fa, e per l’oro cambia il segno della lettura.',
  publishedAt: '2026-08-03T16:15:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['ISM', 'Occupazione', 'Prezzi pagati', 'Fed', 'Spesa per costruzioni'],
  instruments: ['XAU/USD', 'DXY', 'Treasury', 'Brent'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'media',
    regime:
      'Crescita industriale statunitense più robusta del previsto e occupazione manifatturiera tornata in ' +
      'espansione, con prezzi ancora sopra 70. Il petrolio debole continua a sostenere l’oro per via ' +
      'indiretta, ma non basta più a mantenere l’inclinazione rialzista.',
    horizon: 'medio',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sul dato, che è pubblicato e completo in tutte le sue componenti; medio-alta sulla direzione ' +
    'teorica dell’impatto, che resta una deduzione da confrontare con i prezzi. È il rovescio della lettura ' +
    'di poco fa, quando il numero principale mancava e il giudizio poggiava sui soli componenti.',
  takeaways: [
    'L’ISM Manufacturing PMI di luglio è salito a 55,6, contro 54,0 atteso e 53,3 precedente: una sorpresa nettamente positiva sulla crescita industriale statunitense.',
    'L’occupazione manifatturiera è tornata in espansione a 52,8, dal 49,7 precedente.',
    'Nuovi ordini a 56,7 dal 56,0; prezzi pagati a 71,1, sopra il 70,3 atteso pur scendendo dal 73,0; spesa per costruzioni a −0,1%, contro il +0,2% atteso.',
    'Il dato principale è molto più forte di quanto apparisse dai soli componenti inizialmente disponibili: la lettura di poco fa va corretta, non confermata.',
    'Bias fondamentale da lieve rialzista a neutrale, con rischio ribassista intraday: il petrolio debole continua a sostenere l’oro, ma l’ISM a 55,6 è abbastanza forte da contrastare quel beneficio.',
  ],
  invalidation: [
    'Dollaro e rendimenti non riescono a recuperare nonostante il dato.',
    'XAU/USD assorbe l’ISM e torna sopra i massimi precedenti.',
    'In entrambi i casi il mercato starebbe dando più peso al calo del petrolio e al rischio geopolitico che alla forza manifatturiera.',
  ],
  nextEvent: {
    when: 'Nei prossimi giorni',
    title: 'JOLTS, ADP e payroll',
    detail:
      'L’ISM alza l’importanza dei prossimi dati sul lavoro. Se confermassero forza, il mercato potrebbe aumentare le probabilità di una Fed più restrittiva, creando un ostacolo più serio per XAU/USD.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il dato principale è arrivato, ed è molto più forte del previsto. L’ISM Manufacturing PMI di luglio è salito a 55,6, contro il 54,0 atteso e il 53,3 precedente: una sorpresa nettamente positiva sulla crescita industriale statunitense. Anche l’occupazione manifatturiera è tornata in espansione.',
    },
    {
      kind: 'stats',
      title: 'Il quadro completo',
      caption: 'Dati pubblicati di luglio, non quotazioni in tempo reale.',
      items: [
        {
          label: 'ISM manifatturiero',
          value: '55,6',
          tone: 'bear',
          note: 'Atteso 54,0, precedente 53,3',
        },
        {
          label: 'Occupazione ISM',
          value: '52,8',
          tone: 'bear',
          note: 'Dal 49,7: sopra 50 torna in espansione',
        },
        {
          label: 'Nuovi ordini',
          value: '56,7',
          tone: 'bear',
          note: 'Dal 56,0',
        },
        {
          label: 'Prezzi pagati',
          value: '71,1',
          tone: 'warn',
          note: 'Sopra il 70,3 atteso, pur scendendo dal 73,0',
        },
        {
          label: 'Spesa per costruzioni',
          value: '−0,1%',
          tone: 'bull',
          note: 'Contro il +0,2% atteso: l’unica voce in controtendenza',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'I componenti dicevano un’altra cosa',
      text: 'Il numero principale è molto più forte di quanto lasciassero intendere i soli componenti disponibili poco dopo l’uscita. La lettura precedente, costruita su quelli, va corretta: è il motivo per cui un dato parziale non andrebbe trattato come se fosse completo.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La combinazione è sfavorevole all’oro, e lo è su quattro fronti che si sommano.',
    },
    {
      kind: 'list',
      items: [
        'Crescita statunitense più robusta: minore urgenza per la Fed di allentare.',
        'Occupazione manifatturiera sopra 50: si riducono i timori di un indebolimento del mercato del lavoro.',
        'Prezzi ancora oltre 70: le pressioni inflazionistiche restano elevate.',
        'Possibile recupero di dollaro e rendimenti dei Treasury.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Il dato non implica automaticamente un rialzo dei tassi. Rafforza però l’argomento dei membri della Fed più aggressivi, e rende meno accomodanti le dichiarazioni con cui Williams definiva la politica «ben posizionata».',
    },
    {
      kind: 'heading',
      text: 'Effetto probabile immediato',
      anchor: 'effetto',
    },
    {
      kind: 'scenarios',
      caption: 'Effetti attesi dalla lettura del dato, non movimenti già osservati.',
      items: [
        {
          label: 'Oro',
          tone: 'bear',
          text: 'Pressione ribassista e rischio di restituzione del rialzo iniziale.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Sostegno rialzista.',
        },
        {
          label: 'Treasury',
          tone: 'bear',
          text: 'Rendimenti potenzialmente in recupero, soprattutto sulla scadenza a 2 anni.',
        },
        {
          label: 'Petrolio',
          tone: 'neutral',
          text: 'Lieve sostegno dalla maggiore attività economica, ma resta dominato da Iran e Hormuz.',
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
      text: 'L’ISM alza l’importanza dei prossimi dati sul lavoro. Se JOLTS, ADP e payroll confermassero forza, il mercato potrebbe aumentare le probabilità di una Fed più restrittiva, e per XAU/USD sarebbe un ostacolo più serio di quello di oggi.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias fondamentale passa da lieve rialzista a neutrale, con rischio ribassista intraday. La debolezza del petrolio continua a ridurre l’inflazione attesa e a sostenere l’oro per via indiretta, ma l’ISM a 55,6 è abbastanza forte da contrastare quel beneficio: le due spinte ora si annullano invece di sommarsi.',
    },
    {
      kind: 'note',
      text: 'Il dato è la parte solida di questa lettura; la direzione dell’impatto è una deduzione da verificare sui prezzi. Se dollaro e rendimenti non recuperano, o se l’oro assorbe il dato e torna sopra i massimi precedenti, significa che il mercato sta pesando di più il petrolio e la geopolitica della forza manifatturiera.',
    },
  ],
};
