/**
 * nave-colpita-nello-stretto-di-hormuz
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const naveColpitaHormuz: Article = {
  slug: 'nave-colpita-nello-stretto-di-hormuz',
  categories: ['geopolitica', 'asia', 'usa', 'tasso-di-interesse'],
  title: 'Nave colpita nello Stretto di Hormuz',
  kicker: 'Geopolitica · Incidente a Hormuz',
  dek:
    'Un mercantile è stato colpito da un proiettile mentre resta totale incertezza sui presunti colloqui fra ' +
    'Stati Uniti e Iran. Il greggio recupera parte del crollo e l’oro sale verso i 4.060 dollari: il rischio ' +
    'sulle rotte energetiche non era rientrato.',
  publishedAt: '2026-08-04T08:45:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Hormuz', 'Iran', 'Petrolio', 'Bene rifugio', 'Trasporti marittimi'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'DXY', 'Treasury'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'Il premio geopolitico rientra in scena dopo essere stato quasi azzerato in una sola seduta, e il ' +
      'greggio lo conferma risalendo. Manca però il resto del quadro difensivo: le azioni asiatiche tengono, ' +
      'il decennale risale invece di scendere e il dollaro resta vicino ai minimi di due mesi.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sull’incidente e sul recupero del petrolio, che sono fatti riportati e misurabili; media ' +
    'sull’impatto duraturo sull’oro, perché l’episodio appare isolato e il resto dei mercati non lo sta ' +
    'trattando come l’inizio di un’escalation.',
  takeaways: [
    'Una nave mercantile è stata colpita da un proiettile nell’area dello Stretto di Hormuz.',
    'Resta totale incertezza sui colloqui: Washington sostiene che i contatti siano in corso, Teheran nega negoziati diretti e precisa che quelli con l’Oman riguardano soltanto la gestione dei passaggi marittimi.',
    'Dopo il crollo della seduta precedente il petrolio recupera parzialmente: Brent a 84,89 dollari con circa +1,3%, WTI a 81,11 con circa +1%.',
    'L’oro sale di circa lo 0,2%, vicino ai 4.060 dollari, sostenuto dalla tensione geopolitica mentre il mercato aspetta i prossimi dati sul lavoro statunitense.',
    'I mercati asiatici restano relativamente positivi e il DXY è vicino ai minimi di due mesi: per ora nessuno sta prezzando una nuova escalation su larga scala, anche se il decennale è leggermente risalito.',
  ],
  invalidation: [
    'Un chiarimento ufficiale che ridimensioni l’attacco.',
    'Un accordo verificabile fra Stati Uniti e Iran.',
    'Un petrolio che torna rapidamente sui minimi nonostante l’incidente: vorrebbe dire che il mercato non attribuisce all’episodio alcun valore di segnale.',
  ],
  nextEvent: {
    when: 'Nei prossimi giorni',
    title: 'Dati sul lavoro statunitensi',
    detail:
      'È l’appuntamento che il mercato sta aspettando e che può riportare i rendimenti al centro della lettura sull’oro, togliendo spazio al premio geopolitico.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Una nave mercantile è stata colpita da un proiettile nell’area dello Stretto di Hormuz. Arriva mentre resta totale incertezza sui presunti colloqui fra Stati Uniti e Iran, e mentre il mercato aveva appena finito di prezzare il loro esito positivo.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il rischio sulle rotte energetiche non era rientrato',
      text: 'È questo il significato dell’episodio, al di là della sua dimensione. L’ottimismo diplomatico che nella seduta precedente aveva fatto crollare il greggio poggiava sull’idea che la questione fosse in via di soluzione: un colpo su una nave dice che non lo è.',
    },
    {
      kind: 'heading',
      text: 'Le due versioni restano incompatibili',
      anchor: 'versioni',
    },
    {
      kind: 'paragraph',
      text: 'Washington sostiene che i contatti siano in corso. Teheran continua a negare negoziati diretti e aggiunge una precisazione che vale più di una smentita generica: i colloqui con l’Oman riguardano soltanto la gestione dei passaggi marittimi, non un negoziato politico. È la stessa distinzione che l’Iran fa da giorni, e nessuna delle due parti ha finora prodotto una conferma verificabile.',
    },
    {
      kind: 'heading',
      text: 'Come hanno reagito i prezzi',
      anchor: 'prezzi',
    },
    {
      kind: 'stats',
      title: 'Il recupero dopo il crollo',
      caption:
        'Valori citati dalle fonti al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Brent',
          value: '84,89 $',
          tone: 'warn',
          note: 'Circa +1,3%',
        },
        {
          label: 'WTI',
          value: '81,11 $',
          tone: 'warn',
          note: 'Circa +1%',
        },
        {
          label: 'XAU/USD',
          value: '≈ 4.060 $',
          tone: 'bull',
          note: 'Circa +0,2%, sostenuto dalla tensione geopolitica',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'scenarios',
      caption: 'Effetti attesi; per oro e petrolio già in parte osservati.',
      items: [
        {
          label: 'Oro',
          tone: 'bull',
          text: 'Moderatamente positivo per domanda di bene rifugio.',
        },
        {
          label: 'Petrolio',
          tone: 'warn',
          text: 'Rischio di ulteriore recupero, dopo un crollo che diversi analisti avevano già giudicato eccessivo.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Possibile sostegno rifugio, che limita parte del vantaggio per XAU/USD.',
        },
        {
          label: 'Treasury',
          tone: 'neutral',
          text: 'Effetto misto: rendimenti più bassi in caso di avversione al rischio, più alti se il petrolio riaccende le aspettative d’inflazione.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Cosa sta prezzando il mercato',
      anchor: 'aspettative',
    },
    {
      kind: 'paragraph',
      text: 'La possibilità di un accordo resta un’aspettativa non confermata. I mercati asiatici sono ancora relativamente positivi e il Dollar Index rimane vicino ai minimi di due mesi: gli investitori, per ora, non stanno prezzando una nuova escalation su larga scala. Il rendimento del Treasury decennale è però leggermente risalito.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Una condizione su tre',
      text: 'Il quadro difensivo completo vorrebbe petrolio in recupero, azioni deboli e rendimenti in discesa. È arrivata la prima, mentre le azioni tengono e il decennale sale: è la ragione per cui la lettura si sposta di poco e non di molto.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias su XAU/USD diventa lievemente rialzista, con il rischio geopolitico nuovamente in aumento. Non è ancora un segnale forte: l’incidente appare isolato e i mercati azionari non mostrano vero panico. Lo diventerebbe con ulteriori attacchi alle navi, con restrizioni concrete ai transiti, oppure con una smentita definitiva dei colloqui accompagnata da nuove operazioni militari.',
    },
    {
      kind: 'note',
      text: 'L’incidente e i movimenti di prezzo provengono dalle agenzie citate nel testo. I livelli riportati servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};
