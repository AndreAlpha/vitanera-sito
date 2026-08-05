/**
 * attacco-houthi-nel-mar-rosso-il-secondo-collo-di-bottiglia
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const attaccoMarRosso: Article = {
  slug: 'attacco-houthi-nel-mar-rosso-il-secondo-collo-di-bottiglia',
  categories: ['rotte-e-approvvigionamento', 'petrolio', 'oro', 'medio-oriente'],
  title: 'Attacco nel Mar Rosso: il secondo collo di bottiglia',
  kicker: 'Rotte · Il fronte che mancava',
  dek:
    'Gli Houthi rivendicano un missile contro una petroliera saudita vicino a Yanbu, e il greggio smette di ' +
    'scendere. Per quattro giorni «rischio sulle rotte» ha voluto dire Hormuz: questo è un altro stretto, ' +
    'un altro attore, e non dipende da come finiscono i colloqui con Teheran.',
  publishedAt: '2026-08-05T13:20:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Mar Rosso', 'Houthi', 'Petrolio', 'Rotte energetiche', 'Premio di rischio'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'Il rischio geopolitico torna a sostenere il metallo proprio mentre la stessa notizia, alzando il ' +
      'greggio, minaccia il canale dei tassi che lo reggeva. I due sostegni si scambiano il posto e in parte ' +
      'si annullano: dollaro debole e rendimenti bassi tengono ancora, ma su un piede solo.',
    horizon: 'breve',
  },
  certainty: 'media',
  certaintyNote:
    'Alta sul rimbalzo del petrolio, che è un prezzo osservato e riportato. Media sul fatto che lo ha ' +
    'innescato: l’attacco è una rivendicazione degli Houthi e i danni alla nave non sono verificati — è la ' +
    'prima condizione di invalidazione che questa analisi si dà. Media anche sull’effetto duraturo per ' +
    'l’oro, perché dipende da quanto sale il greggio, non da quanto è grave l’episodio.',
  takeaways: [
    'Gli Houthi hanno dichiarato di aver colpito con un missile una petroliera saudita vicino al porto di Yanbu, sul Mar Rosso.',
    'La notizia ha interrotto almeno in parte il forte ribasso del greggio provocato dalle speranze di accordo fra Stati Uniti e Iran: Brent a 80,87 dollari con circa +1,9%, WTI a 76,67 con circa +1,2%.',
    'XAU/USD resta sostenuto vicino ai massimi di un mese, con il decennale al 4,60-4,61% e il Dollar Index vicino a 99,85: i due sostegni del metallo non sono ancora venuti meno.',
    'Le trattative sono ancora descritte dalla Casa Bianca come positive e non c’è un accordo firmato; dalla Federal Reserve non risultano nuove comunicazioni ufficiali rilevanti.',
    'Il punto non è la gravità dell’episodio ma la sua posizione: una distensione con Teheran non elimina automaticamente il rischio sulle rotte energetiche, perché il Mar Rosso non è Hormuz.',
  ],
  invalidation: [
    'Una smentita dell’attacco, o danni alla nave irrilevanti.',
    'La mancata prosecuzione degli attacchi nei giorni successivi.',
    'Un Brent nuovamente sotto i 79 dollari.',
    'Un accordo verificabile sulla riapertura di Hormuz.',
    'Nella direzione opposta: altri attacchi alle rotte saudite o un Brent sopra gli 82 dollari, che alzerebbero il rischio di risalita dei rendimenti.',
  ],
  nextEvent: {
    when: 'Oggi alle 14:15 e alle 14:30',
    title: 'ADP sul lavoro privato e rifinanziamento del Tesoro',
    detail:
      'Restano i due appuntamenti che possono spostare il canale dei tassi, ed è quello il canale su cui l’attacco di oggi si scarica indirettamente: un ADP forte o emissioni lunghe in aumento, sommati a un greggio che risale, toglierebbero all’oro entrambe le gambe insieme.',
  },
  sources: [{ outlet: 'Reuters' }, { outlet: 'Federal Reserve' }],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Gli Houthi hanno dichiarato di aver colpito con un missile una petroliera saudita vicino al porto di Yanbu, sul Mar Rosso. La notizia ha interrotto, almeno in parte, il forte ribasso del greggio che le speranze di accordo fra Stati Uniti e Iran avevano prodotto in tre sedute.',
    },
    {
      kind: 'stats',
      title: 'Dove sono i prezzi',
      caption: 'Valori citati al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Brent',
          value: '80,87 $',
          tone: 'warn',
          note: 'Circa +1,9%, sopra la soglia degli 80',
        },
        {
          label: 'WTI',
          value: '76,67 $',
          tone: 'warn',
          note: 'Circa +1,2%',
        },
        {
          label: 'Treasury a 10 anni',
          value: '4,60-4,61%',
          tone: 'bull',
          note: 'Ancora nettamente sotto i livelli precedenti',
        },
        {
          label: 'Dollar Index',
          value: '≈ 99,85',
          tone: 'bull',
          note: 'Sempre debole, sotto quota 100',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Un fronte che questo archivio non guardava',
      anchor: 'secondo-collo',
    },
    {
      kind: 'paragraph',
      text: 'Vale la pena fermarsi su dove è successo. Per quattro giorni, qui dentro, «rischio sulle rotte energetiche» ha voluto dire una cosa sola: lo Stretto di Hormuz, il conteggio delle navi che ci passano, i termini della trattativa fra Washington e Teheran. Yanbu sta sul Mar Rosso, dall’altra parte della penisola arabica, e chi ha rivendicato l’attacco non siede a quel tavolo.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Un intervallo di confidenza troppo stretto',
      text: 'È la forma classica dell’errore di calibrazione: non sbagliare la previsione, ma restringere talmente il ventaglio degli scenari da lasciarne fuori uno intero. Il greggio è sceso di quasi il 10% scontando «accordo su Hormuz uguale rischio rotte risolto» — una frase che tiene solo se Hormuz è l’unico collo di bottiglia. Il metodo con cui questo sito prova a tenere aperti gli scenari alternativi è descritto in /metodologia.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'Lo sviluppo complica il segnale rialzista pulito delle ore precedenti, e lo complica in un modo particolare: non lo indebolisce, lo sdoppia.',
    },
    {
      kind: 'balance',
      title: 'Le due facce dello stesso attacco',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Torna un premio geopolitico, questa volta su petrolio e metallo insieme.',
          'Dollaro ancora debole e rendimenti ancora bassi: i sostegni precedenti non sono venuti meno.',
        ],
      },
      right: {
        title: 'Contro l’oro',
        tone: 'bear',
        items: [
          'Un greggio che continua a salire riaccende i timori d’inflazione.',
          'Rendimenti e attese di stretta Fed tornerebbero a salire, e il canale dei tassi si chiuderebbe.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'I due canali si scambiano il posto',
      anchor: 'canali',
    },
    {
      kind: 'paragraph',
      text: 'Da due giorni la lettura pubblicata qui diceva una cosa precisa: a sostenere l’oro sono i tassi, non la domanda di bene rifugio. Oggi quella frase va girata a metà. Il rifugio torna, ma è lo stesso evento a minacciare i tassi, e le due cose non si sommano — la prima agisce subito, la seconda con un ritardo che dipende da quanto sale il greggio.',
    },
    {
      kind: 'paragraph',
      text: 'Per adesso prevale il sostegno: il decennale resta al 4,60-4,61% e il Dollar Index vicino a 99,85, entrambi dove erano stamattina. Ma è un equilibrio che ha una soglia dichiarata, non un orizzonte: sopra gli 82 dollari di Brent il secondo effetto comincia a pesare più del primo.',
    },
    {
      kind: 'heading',
      text: 'Che cosa non è cambiato',
      anchor: 'invariato',
    },
    {
      kind: 'paragraph',
      text: 'Le trattative vengono ancora descritte dalla Casa Bianca come positive, un accordo firmato non c’è, e l’Iran continua a contestare parte della ricostruzione americana. Dalla Federal Reserve non risultano nuove comunicazioni rilevanti. Il quadro diplomatico, insomma, è fermo dov’era: a muoversi è stato il prezzo, e per una ragione che con quel tavolo non c’entra.',
    },
    {
      kind: 'scenarios',
      title: 'Effetto immediato probabile',
      caption: 'Effetti attesi, da confrontare con i prezzi.',
      items: [
        {
          label: 'Oro',
          tone: 'bull',
          text: 'Sostenuto dal rischio geopolitico, vicino ai massimi di un mese.',
        },
        {
          label: 'Petrolio',
          tone: 'warn',
          text: 'Di nuovo volatile e orientato al rialzo nel brevissimo.',
        },
        {
          label: 'Dollaro',
          tone: 'bull',
          text: 'Ancora debole, con il Dollar Index vicino a 99,85.',
        },
        {
          label: 'Rendimenti USA',
          tone: 'warn',
          text: 'Per ora bassi, ma vulnerabili a un recupero se il greggio estende il rimbalzo.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias su XAU/USD resta inclinato al rialzo ma perde linearità, e la forza scende: la lettura di stamattina aveva messo fra le sue condizioni di invalidazione proprio un Brent sopra gli 80 dollari, e quella condizione è scattata. Non per il fallimento dei colloqui, come si immaginava, ma per un attacco su un’altra rotta — il che è un modo per dire che la mappa dei rischi era più stretta della realtà.',
    },
    {
      kind: 'note',
      text: 'L’attacco è una rivendicazione degli Houthi riportata dalle agenzie citate nel testo, e i danni alla nave non risultano verificati. I livelli di prezzo servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};
