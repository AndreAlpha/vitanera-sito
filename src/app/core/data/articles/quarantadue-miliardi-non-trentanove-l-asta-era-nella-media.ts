import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const quarantadueMiliardiNonTrentanove: Article = {
  slug: 'quarantadue-miliardi-non-trentanove-l-asta-era-nella-media',
  categories: ['debito-pubblico', 'obbligazioni', 'oro', 'usa'],
  title: 'Quarantadue miliardi, non trentanove: l’asta era nella media',
  kicker: 'Debito pubblico · Una correzione con i numeri',
  dek:
    'Il collocamento di stasera era da 42 miliardi e non da 39, e il rapporto fra domanda e offerta — che ' +
    'quaranta minuti fa risultava indisponibile — è 2,53 contro una media di 2,48 sulle ultime dieci aste. ' +
    'L’analisi delle 19:40 ha quindi sbagliato una cifra e ha inclinato la lettura dalla parte sbagliata.',
  publishedAt: '2026-08-12T20:08:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: ['Asta decennale', 'Correzione', 'Dollaro', 'Domanda'],
  instruments: ['Treasury', 'XAU/USD', 'DXY'],
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sui numeri dell’asta, che sono il risultato pubblicato di un collocamento avvenuto: dimensione, ' +
    'rendimento di aggiudicazione, rapporto fra domanda e offerta e media delle ultime dieci aste. Media ' +
    'sulla lettura, e per una ragione che resta identica a quella di quaranta minuti fa: due delle ' +
    'affermazioni che circolano su questa asta — che non ci sia stato scarto rispetto al quotato pre-asta ' +
    'e che gli operatori primari abbiano assorbito una quota inferiore al solito — non sono state ' +
    'verificate qui, perché la fonte che riporta i numeri di domanda non le contiene. Sono plausibili e ' +
    'coerenti con il rapporto 2,53, e restano non confermate.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    horizon: 'breve',
    regime:
      'La correzione toglie un elemento contrario e il prezzo ne aggiunge un altro, quindi la lettura non ' +
      'si muove. Toglie: l’asta non ha mostrato domanda debole, con un rapporto fra domanda e offerta di ' +
      '2,53 contro una media di 2,48 sulle ultime dieci — modestamente sopra, non sotto. Aggiunge: l’oro ' +
      'è sceso sotto i 4.400 dollari, a 4.399,20, e il Dollar Index ha toccato 99,910, cioè sopra il ' +
      'massimo che quaranta minuti fa era stato scritto come condizione di invalidazione. Resta in piedi ' +
      'la gamba monetaria, che è dove era: biennale a 4,184%, probabilità di un rialzo a settembre al 35,7%.',
  },
  takeaways: [
    'Il collocamento di stasera era da 42 miliardi di dollari, non da 39: i 39 miliardi al 4,580% erano l’asta precedente, che era una riapertura. L’analisi delle 19:40 ha riportato la cifra sbagliata, presa dal controllo del mattino che la dava come attesa.',
    'Il rapporto fra domanda e offerta è 2,53, contro una media di 2,48 sulle ultime dieci aste: domanda modestamente sopra la media. Era il numero che quaranta minuti fa risultava indisponibile, ed è quello che decide se un’asta è andata bene.',
    'Il confronto con il mese scorso resta però meno favorevole: allora il rapporto era 2,59, quindi più alto, e il rendimento era dieci punti base e mezzo più basso. L’asta non è andata male, è andata normalmente e a un prezzo più caro.',
    'L’oro è sceso sotto i 4.400 dollari, a 4.399,20 con più 0,71%: quarantadue dollari sotto il massimo di 4.441,01, e il livello che il controllo ricevuto indica come struttura intatta è stato attraversato mentre lo scriveva.',
    'Il Dollar Index ha toccato 99,910, quindi sopra i 99,895 scritti alle 19:40 come condizione di invalidazione; adesso è a 99,867 e la condizione chiedeva una chiusura, non un massimo.',
  ],
  sources: [
    { outlet: 'RTTNews', title: 'Ten-Year Note Auction Attracts Modestly Above Average Demand' },
    { outlet: 'Investing.com' },
    { outlet: 'Reuters' },
    { outlet: 'MarketWatch' },
    { outlet: 'The Wall Street Journal' },
  ],
  invalidation: [
    'Un Dollar Index che chiude sopra i 99,910 del massimo odierno, aggiornato rispetto ai 99,895 di quaranta minuti fa: l’indice ci è già passato attraverso in seduta, e manca solo la chiusura.',
    'Un oro che chiude sotto i 4.362,57 dollari, il minimo di questa giornata: cancellerebbe per intero il movimento prodotto dal dato delle 14:30.',
    'Un biennale che torna sopra il 4,218%, insieme massimo di oggi e chiusura di ieri: è l’unica gamba rimasta, e senza quella non resta niente sotto la direzione.',
    'Il collocamento del trentennale di giovedì alle 19:00 con un rapporto fra domanda e offerta sotto la propria media delle ultime dieci aste: sarebbe la debolezza sulla parte lunga che quello di stasera non ha mostrato, e su una scadenza dove peserebbe di più.',
    'I prezzi alla produzione di luglio, giovedì alle 14:30, sopra il consenso con il decennale che si porta sopra il 4,688% del massimo odierno.',
  ],
  nextEvent: {
    when: 'Giovedì 13 agosto, 14:30 italiane',
    title: 'Prezzi alla produzione statunitensi di luglio e richieste di sussidio',
    detail:
      'I prezzi alla produzione misurano luglio, quindi hanno lo stesso limite dell’indice al consumo di ' +
      'oggi: non contengono il Brent di agosto. Quello che possono dire è se il greggio entra dai costi ' +
      'prima che dai consumi. Escono insieme le richieste di sussidio, iniziali e continuative. Alle 19:00 ' +
      'il collocamento del trentennale, che è la prova sulla scadenza dove il premio a termine pesa di ' +
      'più, e stavolta il rapporto fra domanda e offerta va guardato prima del rendimento. In mattinata il ' +
      'conteggio dei transiti di mercoledì a Hormuz.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Quaranta minuti fa questa scheda ha pubblicato il risultato del collocamento del decennale ' +
        'scrivendo due cose che vanno corrette, e conviene farlo subito e per esteso invece di lasciarle ' +
        'lì. La prima è una cifra: l’asta era da 42 miliardi di dollari e non da 39. La seconda è più ' +
        'importante, perché non è un numero ma un’inclinazione: mancando il rapporto fra domanda e offerta, ' +
        'la lettura era stata appoggiata sul confronto fra il rendimento di aggiudicazione e quello del ' +
        'mercato secondario, e quel confronto suggeriva una domanda fiacca. Il rapporto adesso c’è, ed è ' +
        '2,53 contro una media di 2,48 sulle ultime dieci aste.',
    },
    {
      kind: 'stats',
      caption:
        'Risultato del collocamento delle 19:00 e rilevazioni delle 20:05; i prezzi non sono chiusure ufficiali.',
      items: [
        {
          label: 'Asta 10 anni',
          value: '42 mld $',
          note: 'Non 39. Rendimento di aggiudicazione 4,683%, rapporto domanda-offerta 2,53',
        },
        {
          label: 'Media dieci aste',
          value: '2,48',
          note: 'Il rapporto di stasera è sopra questa media: domanda modestamente superiore al solito',
        },
        {
          label: 'Asta precedente',
          value: '39 mld $',
          note: 'Era una riapertura, aggiudicata al 4,580% con un rapporto di 2,59: più alto di stasera',
        },
        {
          label: 'XAU/USD',
          value: '4.399,20 $',
          note: 'Più 0,71%. Sotto i 4.400, e quarantadue dollari sotto il massimo di 4.441,01',
        },
        {
          label: 'Dollar Index',
          value: '99,867',
          note: 'Più 0,15%, con un massimo salito a 99,910: sopra i 99,895 scritti alle 19:40 come condizione',
        },
        {
          label: 'Treasury 10 anni',
          value: '4,677%',
          note: 'Intervallo 4,631-4,688%: l’asta non ha riacceso la pressione verso il 4,735% di ieri',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Da dove veniva il 39, e perché è passato',
      anchor: 'da-dove-veniva-il-39',
    },
    {
      kind: 'paragraph',
      text:
        'La cifra sbagliata ha una provenienza precisa, e vale la pena dirla perché è il tipo di errore che ' +
        'si ripete. I 39 miliardi comparivano nel controllo ricevuto stamattina come dimensione attesa del ' +
        'collocamento di stasera, sono entrati nell’analisi delle 11:00 come appuntamento successivo, di lì ' +
        'in quella delle 16:52 e infine in quella delle 19:40, dove sono stati scritti accanto a un ' +
        'risultato vero senza che nessuno tornasse a controllarli. Erano invece la dimensione dell’asta ' +
        '**precedente**, che era una riapertura da 39 miliardi aggiudicata al 4,580%.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Un numero atteso che diventa un numero riportato',
      text:
        'Il meccanismo è quello di una cifra che entra nell’archivio come previsione, viene ricopiata tre ' +
        'volte perché è comoda averla, e alla quarta compare accanto a un risultato ufficiale, prendendo ' +
        'in prestito la sua autorevolezza. Nessuno dei tre passaggi intermedi era sbagliato quando è stato ' +
        'scritto: erano attese dichiarate come tali. Sbagliato è stato l’ultimo, dove l’attesa e il fatto ' +
        'sono finiti nella stessa frase senza che la prima venisse riverificata. La regola che ne segue è ' +
        'stretta e va scritta: quando arriva il risultato di un evento annunciato, si ricontrollano tutti ' +
        'i suoi parametri, non solo quello che l’evento doveva produrre.',
    },
    {
      kind: 'heading',
      text: 'La domanda non era debole, e non era nemmeno forte',
      anchor: 'la-domanda',
    },
    {
      kind: 'paragraph',
      text:
        'Il rapporto fra domanda e offerta misura quanti dollari di offerte sono arrivati per ogni dollaro ' +
        'collocato, ed è il numero con cui si dice se un’asta è andata bene. Stasera è 2,53 contro una ' +
        'media di 2,48 sulle ultime dieci: sopra la media, quindi la descrizione corretta è domanda ' +
        'modestamente superiore al solito. L’analisi delle 19:40 non aveva questo numero e lo aveva detto ' +
        'apertamente, rifiutando di scrivere «coda» e «asta debole»; ma aveva comunque costruito il titolo ' +
        'sul confronto con il mercato secondario, che è un indizio molto più fragile. Dichiarare ' +
        'un’incertezza e poi appoggiarsi lo stesso all’indizio debole è un modo di avere ragione sulla ' +
        'forma e torto sulla sostanza.',
    },
    {
      kind: 'paragraph',
      text:
        'Il quadro completo però non è quello del controllo ricevuto, che parla di asta «solida». Rispetto ' +
        'al mese scorso il rapporto è **sceso**, da 2,59 a 2,53, e il rendimento è salito di dieci punti ' +
        'base e mezzo. Sono due confronti diversi e dicono due cose diverse: contro la media delle ultime ' +
        'dieci aste il Tesoro ha fatto un po’ meglio del solito, contro sé stesso di trenta giorni fa ha ' +
        'fatto un po’ peggio e ha pagato di più. La sintesi onesta non è «solida» e non è «debole»: è ' +
        'normale, a un prezzo che è salito.',
    },
    {
      kind: 'balance',
      title: 'Che cosa cambia e che cosa no rispetto a quaranta minuti fa',
      left: {
        title: 'Va tolto dal conto contrario',
        tone: 'bull',
        items: [
          'La domanda all’asta non era debole: 2,53 contro una media di 2,48 sulle ultime dieci. Il confronto col mercato secondario, usato alle 19:40, era l’indizio sbagliato.',
          'Il decennale non ha riacceso la pressione: resta a 4,677% dentro un intervallo fra 4,631% e 4,688%, lontano dal 4,735% di ieri.',
          'La gamba monetaria non si è mossa: biennale a 4,184%, probabilità di un rialzo a settembre al 35,7%, nessuna risalita in tutto il pomeriggio.',
        ],
      },
      right: {
        title: 'Va aggiunto al conto contrario',
        tone: 'bear',
        items: [
          'L’oro è sceso sotto i 4.400 dollari, a 4.399,20: quarantadue sotto il massimo, e continua a cedere da oltre cinque ore senza una sola ripresa.',
          'Il Dollar Index ha toccato 99,910, oltre i 99,895 scritti quaranta minuti fa come condizione di invalidazione: manca solo che ci chiuda sopra.',
          'Il rapporto domanda-offerta è comunque sceso rispetto al mese scorso, da 2,59 a 2,53, con un rendimento di dieci punti base e mezzo più alto.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text:
        'La direzione resta neutrale con inclinazione rialzista e la forza resta bassa, ma per un motivo ' +
        'diverso da quello di quaranta minuti fa: allora la lettura reggeva su una gamba sola con tre ' +
        'elementi contrari, adesso uno di quei tre si è rivelato inesistente e ne è comparso un altro. Il ' +
        'saldo è lo stesso e il contenuto è cambiato, che è una cosa che vale la pena distinguere invece ' +
        'di nasconderla dietro un’etichetta che non si muove.',
    },
    {
      kind: 'paragraph',
      text:
        'La ragione per cui non si sale è il prezzo, non più l’asta. L’oro ha attraversato i 4.400 dollari ' +
        'mentre il controllo ricevuto li indicava come prova che la struttura rialzista è intatta, e il ' +
        'dollaro ha stampato un massimo sopra il livello che questa scheda aveva appena dichiarato come ' +
        'condizione per decadere. Sono due fatti piccoli e nella stessa direzione, e arrivano dopo cinque ' +
        'ore in cui il metallo non ha avuto una sola ripresa. La riprezzatura della Fed regge; quello che ' +
        'non regge è l’idea che il mercato la stia ancora pagando.',
    },
    {
      kind: 'note',
      text:
        'La dimensione dell’asta, il rendimento di aggiudicazione, il rapporto fra domanda e offerta e la ' +
        'media delle ultime dieci aste provengono dal resoconto del collocamento; la ripartizione fra ' +
        'operatori primari, acquirenti indiretti e diretti e il confronto con il quotato pre-asta non ' +
        'compaiono in quella fonte e non vengono quindi riportati come fatti, benché il controllo ricevuto ' +
        'li citi. L’analisi delle 19:40 resta in archivio con la cifra sbagliata: le analisi pubblicate su ' +
        'questo sito non si modificano mai, e le correzioni si scrivono dopo e a parte, perché un archivio ' +
        'in cui i testi si aggiustano quando si scopre come è andata non misura più niente. L’intervallo ' +
        'del decennale citato qui è 4,631-4,688%, contro il 4,645-4,700% del controllo ricevuto: le due ' +
        'rilevazioni non concordano e viene usata quella verificata direttamente. Le quotazioni sono delle ' +
        '20:05 e non sono chiusure ufficiali. I livelli di prezzo servono a rendere verificabile il ' +
        'ragionamento e non sono obiettivi.',
    },
  ],
};
