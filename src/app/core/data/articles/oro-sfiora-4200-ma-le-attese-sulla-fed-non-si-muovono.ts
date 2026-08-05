/**
 * oro-sfiora-4200-ma-le-attese-sulla-fed-non-si-muovono
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const oroSfiora4200: Article = {
  slug: 'oro-sfiora-4200-ma-le-attese-sulla-fed-non-si-muovono',
  categories: ['fed', 'oro', 'tasso-di-interesse', 'usa'],
  title: 'L’oro sfiora 4.200, ma le attese sulla Fed non si muovono',
  kicker: 'Federal Reserve · Preferenze contro vincoli',
  dek:
    'XAU/USD accelera fino a circa 4.199,8 dollari, oltre +3% e massimo dal 22 giugno, con l’argento sopra il +4%. ' +
    'Nel frattempo due presidenti della Fed parlano da falchi e la probabilità di un rialzo a settembre resta dove ' +
    'stava ieri: 57%. Il rialzo dell’oro non nasce da un cambio di attese sui tassi.',
  publishedAt: '2026-08-05T17:30:00+02:00',
  author: AUTHOR,
  readingMinutes: 5,
  tags: ['Federal Reserve', 'Schmid', 'Kashkari', 'Argento', 'Numeri tondi'],
  instruments: ['XAU/USD', 'XAG/USD', 'Treasury', 'DXY'],
  horizons: ['breve'],
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'media',
    regime:
      'Il movimento è ampio e coinvolge tutto il comparto, ma il prezzo che dovrebbe spiegarlo — la probabilità di ' +
      'un rialzo Fed a settembre — è fermo al 57% da ieri, e non si è mosso nemmeno dopo due interventi restrittivi. ' +
      'Un rialzo che sale senza che si riprezzi il suo meccanismo è un rialzo di flusso, ed è quello il tipo che ' +
      'rientra in fretta.',
    horizon: 'breve',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti: il prezzo è osservato, le dichiarazioni sono riportate da una fonte dichiarata, e il 57% è ' +
    'una lettura di mercato pubblicata. Media sulla prosecuzione, e per una ragione precisa: la catena descritta ' +
    'passa dalle attese sui tassi, e le attese sui tassi non si sono mosse. Quando il movimento non porta con sé ' +
    'la riprezzatura del proprio meccanismo, il meccanismo non serve più a prevedere il seguito.',
  takeaways: [
    'XAU/USD ha accelerato fino a circa 4.199,8 dollari, oltre +3% nella seduta e massimo dal 22 giugno; l’argento è salito di oltre il 4%.',
    'Il movimento è accompagnato da un dollaro più debole e da rendimenti Treasury vicini ai minimi di una settimana.',
    'Jeff Schmid, della Fed di Kansas City, ha detto che l’inflazione resta troppo alta e che la politica monetaria potrebbe non essere abbastanza restrittiva; Neel Kashkari, della Fed di Minneapolis, continua a preferire rialzi graduali per evitare interventi più aggressivi in seguito.',
    'Nonostante i due interventi, il mercato continua a prezzare circa il 57% di probabilità di un rialzo a settembre: la stessa cifra di ieri, prima che parlassero.',
    'Il Brent resta sopra gli 80 dollari dopo l’attacco nel Mar Rosso, e sul lato dei prezzi è l’elemento che lavora contro la lettura.',
  ],
  invalidation: [
    'Un ritorno stabile sotto i 4.170-4.175 dollari.',
    'Il rendimento del decennale in forte recupero, sopra il 4,70%.',
    'Un Dollar Index in inversione rialzista sopra quota 100.',
    'Dati sul lavoro e salari di venerdì molto più forti delle attese.',
    'Nella direzione opposta: una probabilità di rialzo a settembre che scende nettamente sotto il 50%. Confermerebbe la direzione ma smentirebbe questa lettura, che poggia proprio sul fatto che quel numero non si muove.',
  ],
  nextEvent: {
    when: 'Venerdì',
    title: 'Rapporto occupazionale statunitense',
    detail:
      'La domanda non è più solo se il dato sarà debole, ma se stavolta sposterà il 57%. Da ieri quella cifra ha assorbito un JOLTS più fiacco, un ADP molto sotto le attese e due interventi restrittivi senza cambiare: è la misura di quanto il mercato consideri già deciso ciò che la Fed farà a settembre.',
  },
  sources: [{ outlet: 'Reuters' }],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Dopo l’ADP del primo pomeriggio l’oro ha accelerato fino a circa 4.199,8 dollari, oltre il 3% nella seduta e il livello più alto dal 22 giugno. Il dollaro si è indebolito, i rendimenti Treasury sono vicini ai minimi della settimana, e l’argento è salito di oltre il 4%: non è un movimento del solo metallo giallo, è tutto il comparto.',
    },
    {
      kind: 'stats',
      title: 'Dove sono i numeri',
      caption:
        'Valori citati dalla fonte al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'XAU/USD',
          value: '≈ 4.199,8 $',
          tone: 'bull',
          note: 'Oltre +3% nella seduta, massimo dal 22 giugno',
        },
        {
          label: 'Argento',
          value: 'oltre +4%',
          tone: 'bull',
          note: 'Sale più dell’oro: il movimento è di comparto',
        },
        {
          label: 'Rialzo Fed a settembre',
          value: '≈ 57%',
          tone: 'warn',
          note: 'La stessa probabilità di ieri, prima dei due interventi',
        },
        {
          label: 'Treasury a 10 anni',
          value: 'minimi di una settimana',
          tone: 'bull',
          note: 'Intorno al 4,62%, dove stava a metà giornata',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Il numero che non si è mosso',
      anchor: 'numero-fermo',
    },
    {
      kind: 'paragraph',
      text: 'Nel pomeriggio sono arrivate due dichiarazioni dalla Federal Reserve, e vanno entrambe nella stessa direzione. Jeff Schmid, presidente della Fed di Kansas City, ha detto che l’inflazione resta troppo alta e che la politica monetaria potrebbe non essere abbastanza restrittiva. Neel Kashkari, presidente della Fed di Minneapolis, continua a preferire rialzi graduali proprio per evitare di doverne fare di più aggressivi in seguito. Sono due voci che chiedono di stringere, e si aggiungono ai tre membri del FOMC che la settimana scorsa avevano chiesto un rialzo immediato.',
    },
    {
      kind: 'paragraph',
      text: 'La probabilità che il mercato attribuisce a un rialzo di settembre, dopo tutto questo, è circa il 57%. Era il 57-59% ieri sera dopo il JOLTS, ed è rimasta lì attraverso un ADP molto più debole delle attese e due interventi restrittivi. In poco più di ventiquattro ore quel numero ha assorbito notizie che spingevano in direzioni opposte senza spostarsi di nulla.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Preferenze e vincoli, applicati alla Fed',
      text: 'C’è un modo di leggerlo che questo archivio ha già usato sull’Iran e che qui torna identico: le preferenze sono opzionali, i vincoli no. Schmid e Kashkari stanno dicendo che cosa vorrebbero fare; il mercato sta prezzando che cosa saranno costretti a fare, e la stima non cambia perché il vincolo — un mercato del lavoro che rallenta — non è cambiato. Guardare le dichiarazioni e non il vincolo è il modo più rapido per farsi sorprendere in entrambe le direzioni. Il metodo è descritto in /metodologia.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La catena favorevole al metallo è quella nota: lavoro più debole, dollaro e rendimenti in calo, costo-opportunità dell’oro che scende. Sul dollaro e sui rendimenti funziona ancora. Ma c’è un anello che non si è mosso, ed è quello centrale: se le attese di rialzo restano dove stavano, non c’è stata alcuna riprezzatura della Fed, e il pezzo di catena che dovrebbe spiegare un più 3% non ha fornito nulla.',
    },
    {
      kind: 'heading',
      text: 'Da dove arriva allora il rialzo',
      anchor: 'da-dove-arriva',
    },
    {
      kind: 'paragraph',
      text: 'Restano due candidati, e sono entrambi più deboli di una riprezzatura dei tassi. Il primo è il dollaro, che si è indebolito e che agisce sul prezzo dell’oro per via diretta, senza passare dalle attese di politica monetaria. Il secondo è il flusso, e l’indizio è l’argento: un metallo molto più piccolo e molto più volatile che sale ancora di più. Quando tutto il comparto si muove insieme e più forte sul titolo meno liquido, di solito si sta guardando un afflusso di ordini, non un ragionamento.',
    },
    {
      kind: 'paragraph',
      text: 'Va aggiunto dove il movimento si è fermato: 4.199,8 dollari, cioè venti centesimi sotto una cifra tonda. Vale la stessa nota già scritta per i 4.100 e per l’area 4.150-4.170 — quei livelli non trattengono niente da soli, contano perché ci si accumulano ordini e stop. Fermarsi lì non dice che il rialzo sia finito, dice che l’ultimo tratto ha incontrato la parte di mercato che aspettava proprio quel numero.',
    },
    {
      kind: 'balance',
      title: 'Che cosa regge il movimento e che cosa no',
      left: {
        title: 'Lo sostiene',
        tone: 'bull',
        items: [
          'Dollaro più debole e rendimenti vicini ai minimi della settimana.',
          'Ampiezza: sale tutto il comparto, con l’argento oltre il +4%.',
          'Il dato sul lavoro che lo ha innescato è pubblicato, non riportato.',
        ],
      },
      right: {
        title: 'Non lo sostiene',
        tone: 'bear',
        items: [
          'Le attese di rialzo Fed sono ferme al 57%: nessuna riprezzatura.',
          'Due presidenti della Fed hanno appena chiesto di stringere di più.',
          'Il Brent sopra gli 80 dollari tiene viva la spinta inflazionistica.',
        ],
      },
    },
    {
      kind: 'scenarios',
      title: 'Effetto probabile',
      caption: 'Effetti attesi, da confrontare con i prezzi.',
      items: [
        {
          label: 'Oro',
          tone: 'bull',
          text: 'Ancora sostenuto, ma esposto a correzioni rapide dopo una salita superiore al 3%.',
        },
        {
          label: 'Dollaro',
          tone: 'bull',
          text: 'Debole finché i dati sul lavoro pesano più della retorica dei falchi.',
        },
        {
          label: 'Treasury',
          tone: 'warn',
          text: 'Rendimenti sotto pressione, ma con rischio di rimbalzo sulle dichiarazioni restrittive.',
        },
        {
          label: 'Petrolio',
          tone: 'warn',
          text: 'Brent sopra gli 80 dollari dopo l’attacco nel Mar Rosso: resta una fonte di rischio inflazionistico.',
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
      text: 'La direzione è rialzista e il movimento è vero: un più 3% con tutto il comparto che segue non si liquida come rumore. La forza però resta media e non alta, perché manca la conferma che conta. Due ore fa, qui, era stato scritto che il canale dei tassi non stava rispondendo; da allora l’oro è salito ancora e quel canale continua a non rispondere, con la probabilità di rialzo ferma al 57%. Il rialzo c’è, ma non arriva da dove la spiegazione dice che dovrebbe arrivare — e un movimento che non porta con sé la riprezzatura del proprio meccanismo è il tipo di movimento che restituisce terreno in fretta quando il flusso si esaurisce.',
    },
    {
      kind: 'note',
      text: 'Le dichiarazioni di Schmid e Kashkari sono riportate dalla fonte citata nel testo e non sono decisioni di politica monetaria: il FOMC si riunisce a settembre. La probabilità di rialzo è una lettura di mercato, non una previsione della banca centrale. I livelli di prezzo servono a rendere verificabile il ragionamento e non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};
