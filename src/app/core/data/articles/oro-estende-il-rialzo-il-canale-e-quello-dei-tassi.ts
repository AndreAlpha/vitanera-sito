/**
 * oro-estende-il-rialzo-il-canale-e-quello-dei-tassi
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const oroEstendeCanaleTassi: Article = {
  slug: 'oro-estende-il-rialzo-il-canale-e-quello-dei-tassi',
  categories: ['usa', 'tasso-di-interesse', 'fed', 'geopolitica'],
  title: 'L’oro estende il rialzo, e il canale è quello dei tassi',
  kicker: 'Correlazioni · Conferma cross-asset',
  dek:
    'XAU/USD arriva verso i 4.092 dollari e il future Comex chiude a 4.095,40 con un rialzo dell’1,53%: non ' +
    'è stata una fiammata post-dato. Il petrolio giù di quasi il 4% e il decennale al 4,66% dicono da dove ' +
    'arriva davvero la spinta.',
  publishedAt: '2026-08-04T20:05:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Oro', 'Rendimenti', 'Petrolio', 'Metalli preziosi', 'Fed'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'alta',
    regime:
      'Catena coerente e verificata sui prezzi: petrolio in forte calo, minore pressione inflazionistica, ' +
      'rendimenti più bassi, minore costo-opportunità del metallo. Si aggiunge il raffreddamento graduale ' +
      'del lavoro indicato dal JOLTS. La spinta arriva dai tassi più che dalla domanda rifugio.',
  },
  certainty: 'media',
  certaintyNote:
    'Medio-alta sulla lettura immediata, che poggia su prezzi osservati e concordanti; media sulla durata, ' +
    'perché la distensione su Hormuz resta un’aspettativa e le attese sulla Fed restano molto sensibili ai ' +
    'prossimi dati sul lavoro.',
  takeaways: [
    'XAU/USD ha esteso il rialzo fino a circa 4.092 dollari, guadagnando circa l’1%, e il future Comex ha chiuso a 4.095,40 dollari con un rialzo dell’1,53%.',
    'Non è rimasto un movimento momentaneo subito dopo il JOLTS: l’oro ha mantenuto e ampliato i guadagni per tutta la seduta.',
    'Nello stesso intervallo il Brent è sceso del 3,9% a 80,47 dollari e il WTI del 4,6% a 76,67, mentre il rendimento del decennale è arretrato verso il 4,66%; forti rialzi anche per argento, platino e palladio.',
    'La distensione su Hormuz resta un’aspettativa: Stati Uniti e Qatar parlano di progressi, ma l’Iran continua a chiedere il controllo dei traffici in entrata e lo stretto non è tornato regolarmente operativo.',
    'Reuters indica ancora circa il 57% di probabilità di un rialzo Fed a settembre: la svolta monetaria non è affatto acquisita, e l’area dei 4.100 dollari è il test immediato.',
  ],
  invalidation: [
    'XAU/USD sotto i 4.070 dollari.',
    'Il rendimento del decennale nuovamente sopra il 4,70%.',
    'Un forte rimbalzo del petrolio.',
    'Dati ADP o payroll nettamente superiori alle attese.',
  ],
  nextEvent: {
    when: 'Nei prossimi giorni',
    title: 'ADP e payroll statunitensi',
    detail:
      'Le aspettative sulla Fed restano molto sensibili a questi due dati. Numeri nettamente superiori alle attese riporterebbero in alto rendimenti e dollaro, togliendo all’oro il canale che oggi lo sta sostenendo.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Dopo il JOLTS più debole, XAU/USD ha esteso il rialzo fino a circa 4.092 dollari, guadagnando circa l’1%, e il future Comex ha chiuso a 4.095,40 dollari con un rialzo dell’1,53%. Il punto non è il livello: è che il movimento non si è esaurito nei minuti successivi al dato, come spesso accade, ma è stato mantenuto e ampliato.',
    },
    {
      kind: 'stats',
      title: 'La seduta in cinque numeri',
      caption:
        'Valori citati dalle fonti al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'XAU/USD',
          value: '≈ 4.092 $',
          tone: 'bull',
          note: 'Circa +1%',
        },
        {
          label: 'Future Comex',
          value: '4.095,40 $',
          tone: 'bull',
          note: 'Chiusura, +1,53%',
        },
        {
          label: 'Brent',
          value: '80,47 $',
          tone: 'bull',
          note: '−3,9%',
        },
        {
          label: 'WTI',
          value: '76,67 $',
          tone: 'bull',
          note: '−4,6%',
        },
        {
          label: 'Treasury a 10 anni',
          value: '≈ 4,66%',
          tone: 'bull',
          note: 'Arretrato dall’area del 4,70%',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Si è mosso tutto il comparto',
      text: 'Forti rialzi anche per argento, platino e palladio. Come per la discesa di ieri, quando cede o sale l’intero comparto dei preziosi il movimento non nasce da qualcosa di specifico dell’oro: viene dal lato del dollaro e dei tassi.',
    },
    {
      kind: 'heading',
      text: 'La catena che regge il movimento',
      anchor: 'catena',
    },
    {
      kind: 'paragraph',
      text: 'Il quadro cross-asset è diventato più coerente, e la sequenza si legge in un verso solo: petrolio in forte calo, quindi minore pressione inflazionistica, quindi rendimenti più bassi, quindi minore costo-opportunità dell’oro. A questo si aggiunge il raffreddamento graduale del mercato del lavoro indicato dal JOLTS.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Sono i tassi, non il rifugio',
      text: 'È la distinzione che conta per capire quanto può durare. Il rialzo dell’oro è sostenuto soprattutto dal canale tassi e rendimenti, non dalla domanda di bene rifugio: dipende quindi da dove vanno i rendimenti, non da come finisce Hormuz.',
    },
    {
      kind: 'heading',
      text: 'Cosa non è ancora acquisito',
      anchor: 'aspettative',
    },
    {
      kind: 'paragraph',
      text: 'La distensione su Hormuz resta un’aspettativa e non un accordo definitivo: Stati Uniti e Qatar parlano di progressi, ma l’Iran continua a chiedere il controllo dei traffici in entrata e una supervisione di quelli in uscita, e lo stretto non è ancora tornato regolarmente operativo.',
    },
    {
      kind: 'paragraph',
      text: 'Sul fronte monetario il mercato sta prezzando una probabilità più bassa di una stretta immediata, ma Reuters indica ancora circa il 57% di probabilità di un rialzo a settembre. La svolta non è affatto acquisita, e le aspettative restano molto sensibili ai prossimi dati sul lavoro.',
    },
    {
      kind: 'heading',
      text: 'Effetto probabile nei prossimi giorni',
      anchor: 'prossimi-giorni',
    },
    {
      kind: 'scenarios',
      caption: 'Effetti attesi, condizionati alla tenuta del quadro descritto.',
      items: [
        {
          label: 'Oro',
          tone: 'bull',
          text: 'Sostenuto finché rendimenti e petrolio restano sotto pressione.',
        },
        {
          label: 'Dollaro',
          tone: 'bull',
          text: 'Rischio di moderata debolezza, quindi favorevole al metallo.',
        },
        {
          label: 'Treasury',
          tone: 'bull',
          text: 'Rendimenti ancora vulnerabili al ribasso.',
        },
        {
          label: 'Petrolio',
          tone: 'warn',
          text: 'Molto volatile e dipendente da conferme diplomatiche concrete, che finora non ci sono.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias su XAU/USD è rialzista sull’orizzonte intraday, con forza medio-alta. Il segnale è ora confermato insieme da oro in rialzo, petrolio in calo e rendimenti più bassi. L’area dei 4.100 dollari è il test immediato: un superamento stabile rafforzerebbe ulteriormente il movimento.',
    },
    {
      kind: 'note',
      text: 'I livelli riportati provengono dalle fonti citate nel testo e servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi, e l’area dei 4.100 dollari è un riferimento di controllo, non una previsione. Dalla Federal Reserve non risultano nuove decisioni o comunicazioni monetarie rilevanti.',
    },
  ],
};
