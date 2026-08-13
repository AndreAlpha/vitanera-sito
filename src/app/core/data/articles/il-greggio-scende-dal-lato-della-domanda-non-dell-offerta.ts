import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const ilGreggioScendeDalLatoDellaDomanda: Article = {
  slug: 'il-greggio-scende-dal-lato-della-domanda-non-dell-offerta',
  categories: ['petrolio', 'oro', 'correlazioni', 'asia'],
  title: 'Il greggio scende dal lato della domanda, non dell’offerta',
  kicker: 'Petrolio · Il bilancio cambia lato',
  dek:
    'OPEC e agenzia internazionale hanno tagliato mercoledì le previsioni sulla domanda mondiale del 2026, ' +
    'non l’offerta. Per una settimana questo archivio ha letto il greggio come una storia di barili che non ' +
    'passano: la ragione per cui il prezzo scende adesso è un’altra, e non vuol dire la stessa cosa.',
  publishedAt: '2026-08-13T08:20:00+02:00',
  author: AUTHOR,
  readingMinutes: 8,
  tags: ['OPEC', 'Domanda petrolifera', 'Banca del Giappone', 'Oro'],
  instruments: ['Brent', 'WTI', 'XAU/USD', 'DXY', 'Treasury'],
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti: le revisioni di OPEC e agenzia internazionale sono rapporti mensili pubblicati, ' +
    'l’indice dei prezzi alla produzione giapponese è una statistica ufficiale con il suo consenso, e i ' +
    'prezzi sono rilevazioni con l’ora. Media sulla lettura, per una ragione precisa: la distinzione fra ' +
    'un prezzo che scende per meno domanda e uno che scende per più offerta è corretta in teoria ma non ' +
    'si misura direttamente, si ricava da quello che le due agenzie dichiarano di aver rivisto. E i numeri ' +
    'del greggio di stamattina sono molto più piccoli di come vengono raccontati: il Brent è sceso a 87,64 ' +
    'in Asia ed è già risalito a 88,80, cioè meno 0,20% e non meno 1,5%.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    horizon: 'breve',
    regime:
      'La gamba monetaria non solo tiene, si rafforza: la probabilità di un rialzo a settembre scende ancora ' +
      'al 34,7% dal 35,7% di ieri sera, e il decennale arretra a 4,668% dalla chiusura di 4,692%. Il ' +
      'problema è che l’oro ha smesso di rispondere. Stanotte ha stampato un massimo nuovo a 4.449,71 ' +
      'dollari, sopra i 4.441,01 di ieri, e da lì ha lasciato settantadue dollari: adesso è a 4.378,07 con ' +
      'meno 0,69%, sotto i 4.400 e sotto la chiusura di ieri. Due sedute in cui il sostegno dichiarato ' +
      'migliora e il metallo scende sono il segnale che quel sostegno non è quello che lo sta muovendo.',
  },
  takeaways: [
    'OPEC ha tagliato mercoledì la crescita attesa della domanda mondiale nel 2026 a 580.000 barili al giorno, dai 780.000 stimati nel rapporto di luglio. L’agenzia internazionale prevede addirittura una contrazione dei consumi di circa 1,6 milioni di barili al giorno.',
    'È un cambio di lato del bilancio: per una settimana questo archivio ha letto il greggio come una storia di offerta — transiti, blocchi, revisioni della produzione — e la ragione dichiarata del calo di adesso sta sull’altro lato.',
    'Il movimento del greggio è però molto più piccolo di come viene descritto: il Brent ha toccato 87,64 dollari nella seduta asiatica ed è già a 88,80, cioè meno 0,20% sulla chiusura di 88,98 e non meno 1,5%.',
    'L’oro ha stampato un massimo nuovo a 4.449,71 dollari e ha poi lasciato settantadue dollari: a 4.378,07 con meno 0,69% è sotto i 4.400 e sotto la chiusura di ieri, mentre la probabilità di un rialzo Fed a settembre scende ancora al 34,7%.',
    'L’inflazione all’ingrosso giapponese di luglio è al 7,2% annuo, ma va letta al contrario di come viene presentata: ha mancato le attese del 7,4% e decelera dal 7,3% di giugno, con i prezzi all’importazione in yen che rallentano al 29,1% dal 30,1%.',
  ],
  sources: [
    { outlet: 'Reuters' },
    { outlet: 'OPEC', title: 'Rapporto mensile sul mercato petrolifero, agosto 2026' },
    { outlet: 'International Energy Agency', title: 'Rapporto mensile sul mercato petrolifero' },
    { outlet: 'Bank of Japan', title: 'Indice dei prezzi delle merci alle imprese, luglio 2026' },
    { outlet: 'CNBC' },
    { outlet: 'Investing.com' },
    { outlet: 'Bureau of Labor Statistics' },
  ],
  invalidation: [
    'Un oro che chiude oggi sotto i 4.362,57 dollari, il minimo di mercoledì: sarebbe la terza seduta consecutiva di cedimento con il sostegno monetario intatto, e a quel punto la direzione andrebbe portata a neutrale invece di essere tenuta con forza bassa.',
    'Una probabilità di rialzo a settembre che risale sopra il 37,7% delle 15:50 di ieri: toglierebbe la sola gamba rimasta, e la toglierebbe dal lato in cui la lettura è più esposta.',
    'Un Brent che torna sopra gli 89,06 del massimo odierno entro la chiusura: direbbe che il taglio delle previsioni sulla domanda è già stato assorbito e che il premio geopolitico continua a comandare il prezzo, cioè che il cambio di lato descritto qui non conta.',
    'I prezzi alla produzione di luglio, oggi alle 14:30, sopra il consenso con il decennale che si riporta sopra il 4,692% della chiusura di ieri: sarebbe il canale energia-prezzi che entra dai costi, e renderebbe il calo del greggio irrilevante per la parte che conta.',
    'Un conteggio dei transiti a Hormuz sopra i dodici al giorno pubblicato oggi: direbbe che il vincolo materiale si sta allentando davvero, e allora il calo del greggio non sarebbe di domanda ma di offerta che torna.',
  ],
  nextEvent: {
    when: 'Giovedì 13 agosto, 14:30 italiane',
    title: 'Prezzi alla produzione statunitensi di luglio e richieste di sussidio',
    detail:
      'I prezzi alla produzione misurano luglio e quindi non contengono il Brent di agosto: hanno lo stesso ' +
      'limite dell’indice al consumo di ieri, ed è bene saperlo prima invece che dopo. Quello che possono ' +
      'dire è se il greggio entra dai costi prima che dai consumi. Escono insieme le richieste di sussidio: ' +
      'l’ultimo dato ufficiale sulle iniziali è 199.000 e le continuative erano 1,801 milioni, con un ' +
      'consenso intorno a 1,800. Alle 19:00 il collocamento del trentennale, dove il rapporto fra domanda ' +
      'e offerta va guardato prima del rendimento.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Mercoledì, mentre l’attenzione era sull’indice dei prezzi americano e sull’asta del decennale, due ' +
        'rapporti mensili hanno cambiato il lato del bilancio petrolifero da cui arrivano le revisioni. ' +
        'L’OPEC ha tagliato la crescita attesa della domanda mondiale nel 2026 a 580.000 barili al giorno, ' +
        'dai 780.000 stimati appena un mese prima; l’agenzia internazionale per l’energia si spinge oltre e ' +
        'prevede una contrazione dei consumi di circa 1,6 milioni di barili al giorno. Nella notte il ' +
        'greggio è sceso, e la ragione che ne viene data non è più quella che questo archivio ha usato per ' +
        'una settimana.',
    },
    {
      kind: 'stats',
      caption:
        'Rapporti mensili di mercoledì e rilevazioni delle 08:15 di giovedì; i prezzi non sono chiusure ufficiali.',
      items: [
        {
          label: 'Domanda 2026, OPEC',
          value: '+580.000 b/g',
          note: 'Crescita attesa, tagliata dai 780.000 del rapporto di luglio',
        },
        {
          label: 'Domanda 2026, AIE',
          value: '−1,6 mln b/g',
          note: 'Contrazione dei consumi attesa: non un rallentamento, un calo',
        },
        {
          label: 'Brent',
          value: '88,80 $',
          note: 'Meno 0,20% sulla chiusura di 88,98, dopo un minimo asiatico a 87,64 e un massimo a 89,06',
        },
        {
          label: 'XAU/USD',
          value: '4.378,07 $',
          note: 'Meno 0,69%, sotto la chiusura di 4.408,59. Massimo notturno 4.449,71, minimo 4.375,74',
        },
        {
          label: 'Rialzo settembre',
          value: '34,7%',
          note: 'In calo dal 35,7% di ieri sera; alla permanenza al 3,50-3,75% è attribuito il 65,3%',
        },
        {
          label: 'Prezzi ingrosso Giappone',
          value: '+7,2%',
          note: 'Annuo di luglio, sotto le attese del 7,4% e in calo dal 7,3% di giugno',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Perché il lato conta più del segno',
      anchor: 'perche-il-lato-conta',
    },
    {
      kind: 'paragraph',
      text:
        'Un prezzo del petrolio che scende sembra sempre la stessa notizia, e non lo è. Se scende perché ' +
        'torna offerta — le navi ripassano, i barili arrivano — allora il vincolo che questo archivio conta ' +
        'da una settimana si sta allentando, e con lui il premio geopolitico che ha sostenuto l’oro. Se ' +
        'scende perché cala la domanda attesa, il vincolo sull’offerta resta esattamente dov’era e quello ' +
        'che si sta indebolendo è l’economia che consuma quei barili. Le due cose portano lo stesso prezzo ' +
        'e significati opposti, e questa mattina i due rapporti dicono chiaramente quale delle due è.',
    },
    {
      kind: 'paragraph',
      text:
        'La differenza si vede nel modo più semplice guardando che cosa non è cambiato. Lo Stretto di ' +
        'Hormuz resta compromesso, i transiti restano una frazione di quelli di prima del conflitto, i ' +
        'negoziati restano fermi: nessuno dei numeri che questo archivio segue dal 5 agosto si è mosso ' +
        'nella direzione della normalizzazione. Quello che si è mosso è la stima di quanti barili il mondo ' +
        'vorrà comprare, e l’OPEC l’ha tagliata di duecentomila barili al giorno in un mese.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Per l’oro il canale è lo stesso, e la conclusione no',
      text:
        'La catena che questo archivio segue è: greggio su, inflazione attesa su, banca centrale più ' +
        'restrittiva, rendimenti su, oro sotto pressione. Su quella catena conta il livello del prezzo, non ' +
        'la sua causa, e quindi un Brent più basso allenta la pressione comunque. Ma la seconda catena — ' +
        'quella del premio di rischio, che dal 5 agosto è la ragione principale per cui il metallo sale — ' +
        'dipende invece dalla causa, e su quella un calo di domanda non toglie niente. Il risultato è che ' +
        'la stessa notizia è moderatamente favorevole sul canale dei tassi e neutra su quello del rifugio, ' +
        'che è l’opposto di come verrebbe letta se il prezzo scendesse perché le navi ripassano.',
    },
    {
      kind: 'heading',
      text: 'Il movimento è più piccolo di come viene raccontato',
      anchor: 'movimento-piccolo',
    },
    {
      kind: 'paragraph',
      text:
        'Va poi ridimensionata la taglia del fatto, perché il racconto e i numeri non coincidono. Il Brent ' +
        'ha effettivamente toccato 87,64 dollari nella seduta asiatica, ma da lì è già risalito a 88,80: ' +
        'sulla chiusura di 88,98 è meno 0,20%, non l’uno e mezzo per cento che il minimo suggeriva. ' +
        'L’intervallo della giornata va da 87,64 a 89,06, quindi il greggio ha percorso il proprio ' +
        'intervallo in entrambi i sensi e si è fermato in alto. Un calo che rientra entro poche ore ' +
        'assomiglia molto poco a una riprezzatura e molto a una reazione a un titolo, che è esattamente la ' +
        'distinzione che questa scheda ha applicato a sé stessa due volte ieri.',
    },
    {
      kind: 'heading',
      text: 'L’oro ha smesso di rispondere a quello che lo sostiene',
      anchor: 'oro-non-risponde',
    },
    {
      kind: 'paragraph',
      text:
        'È il fatto della mattina, ed è scomodo. La probabilità di un rialzo a settembre è scesa ancora, al ' +
        '34,7% dal 35,7% di ieri sera e dal 52% del 10 agosto; il decennale è arretrato a 4,668% dalla ' +
        'chiusura di 4,692%. Il canale monetario, che dalle 16:52 di ieri è l’unica gamba dichiarata sotto ' +
        'questa lettura, non solo regge ma migliora. E l’oro scende: 4.378,07 dollari con meno 0,69%, sotto ' +
        'i 4.400 e sotto la chiusura di ieri.',
    },
    {
      kind: 'paragraph',
      text:
        'Il dettaglio che rende il quadro più netto è il massimo notturno. Il metallo è salito a 4.449,71 ' +
        'dollari, cioè sopra i 4.441,01 di mercoledì, e da quel punto ha lasciato settantadue dollari nel ' +
        'giro di poche ore. Un massimo nuovo che non tiene vale meno di un massimo mancato, perché dice ' +
        'che a quel prezzo si è presentata offerta. Sommato alla seduta di ieri pomeriggio — sei ore di ' +
        'cedimento senza una sola ripresa — fa due sessioni in cui il sostegno dichiarato migliora e il ' +
        'prezzo va nell’altro verso.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Quando una lettura va tenuta e quando va cambiata',
      text:
        'La regola applicata in questo archivio è muovere una lettura quando decade la ragione scritta in ' +
        'anticipo per tenerla, non quando si muove il prezzo. Applicata alla lettera, oggi quella ragione ' +
        'non è decaduta: la gamba monetaria è dove era e anzi un po’ meglio, quindi la direzione resta ' +
        'neutrale con inclinazione rialzista e la forza resta bassa. Ma la regola ha un limite che va ' +
        'nominato adesso invece che dopo: se il prezzo continua a non rispondere alla ragione dichiarata, ' +
        'prima o poi non è più il prezzo a sbagliare. Per questo la prima condizione di invalidazione qui ' +
        'sotto è scritta su una terza seduta di cedimento, e non su un livello: è il numero di sedute, non ' +
        'la profondità, che deciderebbe.',
    },
    {
      kind: 'heading',
      text: 'Il Giappone va letto al contrario di come viene presentato',
      anchor: 'giappone',
    },
    {
      kind: 'paragraph',
      text:
        'L’indice dei prezzi delle merci alle imprese giapponese è salito del 7,2% annuo a luglio, e il ' +
        'numero è alto in assoluto. Ma le due cose che si dicono di solito su questo dato — che resta ' +
        'elevatissimo e che rafforza il caso per un rialzo della Banca del Giappone a settembre — vanno ' +
        'entrambe messe accanto a quello che il dato ha fatto rispetto alle attese e al mese prima. Ha ' +
        'mancato il consenso, che era al 7,4%, e decelera dal 7,3% di giugno, che era il massimo da marzo ' +
        '2023. Anche i prezzi all’importazione in yen, il 29,1% annuo che viene citato come cifra ' +
        'impressionante, rallentano dal 30,1% di giugno.',
    },
    {
      kind: 'paragraph',
      text:
        'Resta vero che gli analisti si attendono un movimento dall’1,00% all’1,25% alla riunione del 17-18 ' +
        'settembre, e che il costo delle importazioni è la fonte di pressione principale su quell’economia. ' +
        'Ma un dato che manca le attese e decelera su entrambe le misure è un argomento più debole per un ' +
        'rialzo, non più forte, e va contato per quello che è. Per l’oro il canale resta comunque indiretto ' +
        'e a due sensi: una banca centrale giapponese più restrittiva sostiene lo yen e indebolisce il ' +
        'dollaro, ma allunga l’elenco dei rendimenti globali che il metallo deve battere.',
    },
    {
      kind: 'balance',
      title: 'Una gamba che migliora e un prezzo che non la segue',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'La probabilità di un rialzo a settembre scende ancora al 34,7%, e il decennale arretra a 4,668% dalla chiusura di 4,692%.',
          'Il taglio delle previsioni sulla domanda allenta il canale energia-inflazione, che è l’ultimo argomento restrittivo rimasto al mercato.',
          'Il vincolo sull’offerta non si è allentato: Hormuz resta compromesso, i transiti restano una frazione di quelli di prima del conflitto, i negoziati sono fermi.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Il metallo è a 4.378,07 con meno 0,69%, sotto i 4.400 e sotto la chiusura di ieri, dopo aver lasciato settantadue dollari dal massimo notturno di 4.449,71.',
          'Sono due sedute consecutive in cui il sostegno dichiarato migliora e il prezzo scende: la ragione scritta e il movimento osservato hanno smesso di coincidere.',
          'Il Brent ha già recuperato quasi tutto il calo notturno, a 88,80 contro un minimo di 87,64: il sollievo sul canale dei prezzi è più piccolo di come viene raccontato.',
        ],
      },
    },
    {
      kind: 'note',
      text:
        'Le revisioni sulla domanda provengono dai rapporti mensili di OPEC e agenzia internazionale per ' +
        'l’energia pubblicati mercoledì 12 agosto; il confronto dell’OPEC è con la stima del rapporto di ' +
        'luglio. Da non confondere con la revisione dell’offerta della stessa agenzia internazionale, meno ' +
        '4,3 milioni di barili al giorno, che questo archivio ha pubblicato mercoledì mattina: sono due ' +
        'numeri diversi su due lati diversi del bilancio. I dati giapponesi sono l’indice dei prezzi delle ' +
        'merci alle imprese di luglio della Banca del Giappone. Le quotazioni sono rilevazioni delle 08:15 ' +
        'del 13 agosto e non sono chiusure ufficiali; il Brent citato appartiene alla serie che venerdì 7 ' +
        'agosto ha chiuso a 83,55 dollari, mentre le tacche di questo archivio sono fissate sulla serie che ' +
        'ha chiuso a 82,21. I prezzi alla produzione statunitensi e le richieste di sussidio non sono ' +
        'ancora usciti al momento della scrittura e non vengono quindi trattati come pubblicati. I livelli ' +
        'di prezzo servono a rendere verificabile il ragionamento e non sono obiettivi.',
    },
  ],
};
