/**
 * rischio-hormuz-si-paga-in-petrolio-e-rendimenti-non-in-oro
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const rischioHormuzSiPagaAltrove: Article = {
  slug: 'rischio-hormuz-si-paga-in-petrolio-e-rendimenti-non-in-oro',
  categories: ['correlazioni', 'petrolio', 'obbligazioni', 'oro'],
  title: 'Il rischio Hormuz si paga in petrolio e rendimenti, non in oro',
  kicker: 'Correlazioni · Cambio di reazione',
  dek:
    'Il Brent amplia il recupero fino a 86,04 dollari e il decennale statunitense torna al 4,705%, mentre ' +
    'l’oro resta quasi fermo a 4.053. Il premio geopolitico continua a esistere, ma si sta scaricando ' +
    'sull’energia e sui tassi invece che sul metallo.',
  publishedAt: '2026-08-04T12:35:00+02:00',
  author: AUTHOR,
  readingMinutes: 3,
  tags: ['Hormuz', 'Brent', 'Rendimenti', 'JOLTS', 'Costo-opportunità'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'media',
    regime:
      'Rischio geopolitico che si trasmette a petrolio e rendimenti invece che alla domanda rifugio: con il ' +
      'Brent sopra gli 86 dollari e il decennale al 4,705% sale il costo-opportunità di detenere oro, e la ' +
      'tensione su Hormuz non riesce a compensarlo.',
    horizon: 'breve',
  },
  certainty: 'media',
  certaintyNote:
    'Medio-alta sul cambiamento cross-asset, media sulla durata del movimento. I prezzi citati sono ' +
    'osservabili; è l’interpretazione — che il rischio si stia scaricando su energia e tassi invece che ' +
    'sull’oro — a restare una lettura, per quanto coerente con tutti e quattro i riferimenti.',
  takeaways: [
    'Il Brent ha ampliato il recupero fino a circa +2,7%, a 86,04 dollari, mentre il WTI è salito di circa +2,1%, a 82,06.',
    'I transiti nello Stretto di Hormuz restano estremamente ridotti e il mercato fisico del petrolio è ancora sotto pressione, nonostante le ipotesi diplomatiche.',
    'Il rendimento del Treasury decennale è risalito di circa 2,2 punti base al 4,705% e il Dollar Index è tornato appena sopra quota 100.',
    'L’oro è rimasto quasi fermo intorno a 4.053 dollari, senza beneficiare pienamente della tensione geopolitica.',
    'Il bias intraday passa da lieve rialzista a neutrale con inclinazione ribassista: il rischio geopolitico si sta traducendo in petrolio e rendimenti più alti anziché in domanda rifugio.',
  ],
  invalidation: [
    'Il petrolio restituisce il recupero.',
    'Il decennale torna sotto il 4,68% circa.',
    'Il Dollar Index scende sotto quota 100.',
    'L’oro supera con decisione l’area dei 4.100 dollari.',
  ],
  nextEvent: {
    when: 'Oggi alle 16:00',
    title: 'JOLTS statunitense',
    detail:
      'Un dato forte spingerebbe rendimenti e dollaro più in alto, con effetto negativo sull’oro; un dato debole aprirebbe a un calo dei rendimenti e a un recupero di XAU/USD.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Non è arrivata una nuova decisione della Federal Reserve o del Tesoro, ma nel quadro cross-asset è cambiato qualcosa di significativo: il rischio geopolitico sta tornando a tradursi soprattutto in petrolio e rendimenti più alti, anziché in forte domanda rifugio per l’oro.',
    },
    {
      kind: 'stats',
      title: 'I riferimenti al momento del controllo',
      caption: 'Valori citati nell’analisi, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Brent',
          value: '86,04 $',
          tone: 'bear',
          note: 'Recupero ampliato fino a circa +2,7%',
        },
        {
          label: 'WTI',
          value: '82,06 $',
          tone: 'bear',
          note: 'In rialzo di circa +2,1%',
        },
        {
          label: 'Treasury 10 anni',
          value: '4,705%',
          tone: 'bear',
          note: 'Risalito di circa 2,2 punti base',
        },
        {
          label: 'Dollar Index',
          value: 'appena sopra 100',
          tone: 'bear',
          note: 'Tornato sopra la soglia dopo i minimi recenti',
        },
        {
          label: 'XAU/USD',
          value: '≈ 4.053 $',
          tone: 'warn',
          note: 'Quasi fermo, senza beneficiare della tensione',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Il contesto fisico non è cambiato: i transiti nello Stretto di Hormuz rimangono estremamente ridotti e il mercato del petrolio resta sotto pressione, nonostante le ipotesi diplomatiche circolate nei giorni scorsi. Quello che è cambiato è dove il mercato sta mettendo il prezzo di quel rischio.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La combinazione è meno favorevole all’oro rispetto all’ultimo controllo, e il motivo sta in una catena di tre passaggi che si tengono in fila.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Il petrolio in rialzo alza l’inflazione attesa.',
        'L’inflazione attesa più alta spinge in su i rendimenti statunitensi.',
        'Rendimenti più alti aumentano il costo-opportunità di detenere oro, che non paga cedola.',
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'La tensione c’è, il panico no',
      text: 'Il rischio geopolitico continua a offrire sostegno all’oro, ma al momento non sta generando panico sui mercati: azioni europee e futures statunitensi restano positivi. È la differenza fra un premio di rischio che esiste e un premio di rischio che si fa pagare.',
    },
    {
      kind: 'heading',
      text: 'I livelli sono già sulla soglia',
      anchor: 'soglie',
    },
    {
      kind: 'paragraph',
      text: 'Il segnale diventerebbe più ribassista se il Brent restasse sopra gli 86 dollari, se il decennale superasse stabilmente il 4,70% e se il dollaro continuasse a recuperare. Vale la pena notare che i primi due livelli sono già stati toccati: 86,04 e 4,705% stanno appena oltre la soglia indicata. Quello che manca non è il livello, è la persistenza, ed è esattamente la cosa che si può verificare solo lasciando passare le prossime ore.',
    },
    {
      kind: 'heading',
      text: 'Il prossimo test',
      anchor: 'prossimo-test',
    },
    {
      kind: 'balance',
      title: 'JOLTS statunitense, oggi alle 16:00',
      left: {
        title: 'Dato forte',
        tone: 'bear',
        items: [
          'Rendimenti e dollaro potenzialmente più alti.',
          'Negativo per l’oro, che vedrebbe salire ancora il rendimento alternativo.',
          'Confermerebbe la direzione descritta qui.',
        ],
      },
      right: {
        title: 'Dato debole',
        tone: 'bull',
        items: [
          'Possibile calo dei rendimenti.',
          'Spazio per un recupero di XAU/USD.',
          'È la via da cui questa lettura verrebbe smentita.',
        ],
      },
    },
    {
      kind: 'paragraph',
      text: 'Sul fronte monetario non risultano nuove comunicazioni ufficiali della Federal Reserve. Il Tesoro pubblicherà invece i dettagli del rifinanziamento trimestrale domani, mercoledì 5 agosto, alle 14:30 italiane: è il secondo appuntamento da tenere d’occhio, perché la composizione delle emissioni incide direttamente sulla parte della curva che qui sta facendo il danno.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias intraday su XAU/USD passa da lieve rialzista a neutrale con inclinazione ribassista. Non perché la tensione geopolitica sia rientrata — non lo è — ma perché il canale attraverso cui arrivava all’oro si è chiuso: adesso passa dal petrolio ai rendimenti, e i rendimenti giocano contro.',
    },
    {
      kind: 'note',
      text: 'I livelli citati servono a rendere verificabile il ragionamento e sono riferiti al momento del controllo: non sono quotazioni in tempo reale né obiettivi di prezzo affidabili.',
    },
  ],
};
