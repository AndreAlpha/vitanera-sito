/**
 * tesoro-alza-il-fabbisogno-iran-raffredda-la-distensione
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const tesoroFabbisognoEIran: Article = {
  slug: 'tesoro-alza-il-fabbisogno-iran-raffredda-la-distensione',
  categories: ['debito-pubblico', 'obbligazioni', 'usa', 'medio-oriente'],
  title: 'Il Tesoro alza il fabbisogno, l’Iran raffredda la distensione',
  kicker: 'Debito USA · Piano di rifinanziamento',
  dek:
    'Washington prevede di indebitarsi per 739 miliardi di dollari nel terzo trimestre, 68 in più della stima ' +
    'di maggio, e mercoledì dirà come. Nel frattempo Teheran smentisce che esistano negoziati, proprio mentre ' +
    'il mercato ha fatto crollare il petrolio sull’ipotesi opposta.',
  publishedAt: '2026-08-03T22:40:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Tesoro USA', 'Emissioni', 'Iran', 'Hormuz', 'Petrolio'],
  instruments: ['XAU/USD', 'Treasury', 'WTI', 'Brent', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'bassa',
    regime:
      'Due forze opposte in equilibrio instabile: il petrolio in forte calo abbassa le aspettative ' +
      'inflazionistiche e i rendimenti, mentre la forza dell’ISM e il maggiore fabbisogno del Tesoro premono ' +
      'nella direzione contraria. Al rialzo resta soltanto un rischio geopolitico non prezzato.',
    horizon: 'medio',
  },
  certainty: 'media',
  certaintyNote:
    'Medio-alta sui fatti — la revisione del Tesoro, le dichiarazioni iraniane e il crollo del greggio sono ' +
    'riportati e verificabili — ma media sull’effetto finale, perché petrolio e rendimenti stanno producendo ' +
    'forze opposte e la composizione delle emissioni non sarà nota prima di mercoledì.',
  takeaways: [
    'Il Tesoro statunitense ha alzato la previsione di indebitamento netto del terzo trimestre a 739 miliardi di dollari, 68 miliardi in più della stima di maggio.',
    'Mercoledì arriva il piano trimestrale di rifinanziamento, con scadenze e dimensioni delle aste: è lì che si vedrà se l’aumento pesa davvero sull’oro.',
    'L’Iran ribadisce che non sono in corso negoziati con gli Stati Uniti e che non esistono incontri programmati; con l’Oman ci sono contatti per un passaggio temporaneamente sicuro a Hormuz, ma non per una riapertura piena.',
    'La smentita contrasta con l’ottimismo che oggi ha fatto crollare il WTI di circa il 7% e portato il Brent verso gli 83-84 dollari, con i rendimenti giù per il calo delle aspettative inflazionistiche.',
    'Bias neutrale con un lieve rischio rialzista geopolitico, ma fragile sul lato dei rendimenti: petrolio e debito spingono in direzioni opposte.',
  ],
  invalidation: [
    'Per il rischio rialzista: una conferma concreta di negoziati fra Stati Uniti e Iran e una riapertura stabile di Hormuz.',
    'Per la pressione ribassista da debito: mercoledì il Tesoro lascia invariate le aste a lunga scadenza e concentra il finanziamento sui titoli brevi.',
  ],
  nextEvent: {
    when: 'Mercoledì',
    title: 'Piano trimestrale di rifinanziamento del Tesoro',
    detail:
      'Scadenze e dimensioni delle aste. Se l’aumento fosse concentrato sui Treasury bill a breve termine, l’impatto sull’oro sarebbe probabilmente limitato.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il Tesoro statunitense ha alzato la previsione di indebitamento netto per il terzo trimestre a 739 miliardi di dollari. Sono 68 miliardi in più rispetto alla stima di maggio, e mercoledì arriverà il piano trimestrale di rifinanziamento con i dettagli su scadenze e dimensioni delle aste.',
    },
    {
      kind: 'stats',
      title: 'La revisione',
      caption: 'Previsioni del Tesoro riportate dalle fonti, non dati di mercato.',
      items: [
        {
          label: 'Fabbisogno del terzo trimestre',
          value: '739 mld $',
          tone: 'bear',
          note: 'Indebitamento netto previsto',
        },
        {
          label: 'Rispetto alla stima di maggio',
          value: '+68 mld $',
          tone: 'bear',
          note: 'È l’entità della revisione',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'Più emissioni di debito possono significare maggiore offerta di Treasury, e la catena che ne segue è nota — soprattutto se ad aumentare fossero le emissioni a lunga scadenza.',
    },
    {
      kind: 'list',
      items: [
        'Rendimenti statunitensi potenzialmente più alti.',
        'Possibile sostegno al dollaro.',
        'Pressione ribassista sull’oro, che non paga interessi.',
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Per ora è un rischio per mercoledì, non un fatto di oggi',
      text: 'La composizione delle emissioni non è ancora nota, ed è quella a decidere. Se l’aumento venisse concentrato sui Treasury bill a breve termine, l’impatto sull’oro sarebbe probabilmente limitato: il fabbisogno più alto conta meno di come lo si finanzia.',
    },
    {
      kind: 'heading',
      text: 'Iran: il mercato ha corso troppo?',
      anchor: 'iran',
    },
    {
      kind: 'paragraph',
      text: 'Teheran ha ribadito che non sono in corso negoziati con gli Stati Uniti e che non esistono incontri programmati. Sono invece in corso contatti con l’Oman per un passaggio temporaneamente sicuro nello Stretto di Hormuz, ma l’Iran afferma che lo stretto non potrà riaprire completamente finché continua quella che definisce aggressione statunitense.',
    },
    {
      kind: 'stats',
      title: 'Quanto ha corso l’ottimismo oggi',
      caption: 'Movimenti di giornata citati dalle fonti, non quotazioni in tempo reale.',
      items: [
        {
          label: 'WTI',
          value: '≈ −7%',
          tone: 'warn',
          note: 'In giornata',
        },
        {
          label: 'Brent',
          value: '83-84 $',
          tone: 'warn',
          note: 'Il livello verso cui si è spinto',
        },
        {
          label: 'Rendimenti Treasury',
          value: 'in calo',
          tone: 'bull',
          note: 'Per la discesa delle aspettative inflazionistiche',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Il prezzo sconta una distensione che nessuno ha annunciato',
      text: 'Il crollo del greggio poggia su un’aspettativa di intesa che la controparte smentisce. Non significa che l’intesa non arriverà, ma che oggi il mercato sta pagando qualcosa che al momento non esiste — e questo è, di per sé, un rischio di volatilità.',
    },
    {
      kind: 'heading',
      text: 'Lettura per l’oro',
      anchor: 'lettura',
    },
    {
      kind: 'paragraph',
      text: 'L’effetto immediato è misto. Il forte calo del petrolio riduce i timori d’inflazione, abbassa i rendimenti e può sostenere XAU/USD. La forza dell’ISM e il nuovo fabbisogno del Tesoro impediscono però, per ora, una lettura nettamente rialzista: sono due spinte che si annullano invece di sommarsi.',
    },
    {
      kind: 'heading',
      text: 'Nei prossimi giorni',
      anchor: 'prossimi-giorni',
    },
    {
      kind: 'paragraph',
      text: 'Aumenta il rischio di volatilità. Se il mercato prendesse atto che una vera trattativa fra Stati Uniti e Iran non esiste, petrolio e domanda di bene rifugio potrebbero recuperare insieme. Per l’oro sarebbe inizialmente positivo, ma un forte rimbalzo del greggio riporterebbe poi in alto rendimenti e aspettative sui tassi: lo stesso movimento, prima favorevole e poi contrario.',
    },
    {
      kind: 'note',
      text: 'I riferimenti su fabbisogno, dichiarazioni iraniane e movimenti del greggio provengono dalle agenzie citate nel testo. I livelli di prezzo servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};
