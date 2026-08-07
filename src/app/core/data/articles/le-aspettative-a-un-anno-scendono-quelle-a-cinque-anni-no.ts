/**
 * le-aspettative-a-un-anno-scendono-quelle-a-cinque-anni-no
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const aspettativeUnAnnoCinqueAnni: Article = {
  slug: 'le-aspettative-a-un-anno-scendono-quelle-a-cinque-anni-no',
  categories: ['aspettative-di-inflazione', 'usa', 'fed', 'oro'],
  title: 'Le aspettative a un anno scendono, quelle a cinque anni no',
  kicker: 'Aspettative · Il numero che la banca centrale guarda davvero',
  dek:
    'L’indagine di luglio della Federal Reserve di New York dà l’inflazione attesa a un anno al 3,6% dal 3,7%, ' +
    'ma a tre anni resta 3,3% e a cinque 3,0%, entrambe invariate. È la parte che non si muove a contare: una ' +
    'banca centrale non combatte l’inflazione passata ma quella attesa, e finché quei due numeri stanno dove ' +
    'sono, il caso per i tassi alti sopravvive a qualunque singolo dato debole sul lavoro.',
  publishedAt: '2026-08-07T18:20:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: [
    'Aspettative di inflazione',
    'New York Fed',
    'CPC',
    'Colli di bottiglia',
    'Shock di offerta',
  ],
  instruments: ['XAU/USD', 'Brent', 'Treasury', 'DXY'],
  horizons: ['medio', 'lungo'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'Le aspettative di inflazione delle famiglie si sono fermate invece di scendere: un decimo in meno a un ' +
      'anno, niente a tre e a cinque, dopo un mese in cui erano salite. Per l’oro il fatto taglia in due ' +
      'direzioni e va detto così invece di sceglierne una: aspettative alte e appiccicose sostengono la ' +
      'domanda di copertura, e insieme tengono in vita il caso per tassi alti, che è il costo di tenerlo. La ' +
      'seconda metà pesa più della prima in questo regime, ed è la ragione per cui la lettura di fondo non ' +
      'passa a rialzista dietro un rapporto occupazionale debole.',
    horizon: 'lungo',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti: la diffusione della Federal Reserve di New York è di oggi ed è riportata da Reuters con ' +
    'una firma, i numeri sulle rotte vengono da più testate indipendenti e i prezzi hanno l’ora accanto. ' +
    'Media sulla conclusione, e il punto debole è dichiarabile in una riga: che le aspettative sull’energia ' +
    'restino alte per via delle rotte colpite è una lettura plausibile, non una misura — l’indagine non chiede ' +
    'alle famiglie perché. Bassa su qualunque conclusione tratta da un mese solo: una rilevazione ferma non è ' +
    'una tendenza, e l’indagine di agosto esce fra un mese.',
  takeaways: [
    'L’indagine sulle aspettative dei consumatori della Federal Reserve di New York, diffusa oggi, dà l’inflazione attesa a un anno al 3,6% dal 3,7% di giugno. A tre anni resta al 3,3% e a cinque al 3,0%: entrambe invariate.',
    'Il mese scorso le stesse aspettative a breve e medio termine erano salite. Due mesi letti insieme non descrivono un rientro: descrivono una sosta sopra l’obiettivo del 2%.',
    'Dentro l’indagine c’è anche il meccanismo: le attese sui prezzi della benzina a un anno restano elevate, e quelle sui prezzi delle case ferme al 3,2%. Le famiglie non si aspettano sollievo dal lato dell’energia.',
    'Una ragione per non aspettarselo c’è, ed è su una rotta che questo archivio non aveva ancora guardato: al terminale del Caspian Pipeline Consortium sul Mar Nero quattro petroliere sono state colpite da droni in quattro giorni, i caricamenti sono stati sospesi con attrezzature gravemente danneggiate, e dopo una breve ripresa il terminale ha richiuso il 5 agosto. Passavano di lì circa 730.000 barili al giorno.',
    'Sul lavoro l’indagine concorda con il rapporto di oggi solo in parte: le famiglie vedono più probabile che la disoccupazione salga e che il posto si perda, ma giudicano migliorata la probabilità di ritrovarne uno, e hanno alzato il giudizio sulla propria situazione finanziaria.',
  ],
  invalidation: [
    'Aspettative a tre e cinque anni che scendono nell’indagine di agosto, in uscita all’inizio di settembre: toglierebbero la premessa su cui questa lettura poggia per intero.',
    'Un indice dei prezzi mercoledì 12 agosto sotto il 3,4% annuo con la componente di fondo sotto il 2,5%: direbbe che l’inflazione realizzata converge anche senza che le aspettative si muovano, e che a guardare le seconde si stava guardando la variabile sbagliata.',
    'Una ripresa stabile dei caricamenti al terminale del Caspian Pipeline Consortium sopra i 730.000 barili al giorno per almeno due settimane, che toglierebbe uno dei due shock di offerta descritti qui.',
    'Una probabilità di rialzo della Fed a settembre che scende sotto il 30%: direbbe che il mercato ha smesso di dare peso alle aspettative appiccicose, qualunque cosa dica l’indagine.',
    'Prima di tutte queste, e senza aspettare la rottura: un Brent stabilmente sopra gli 84 dollari. A quel livello l’energia smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui, e questa lettura passerebbe da neutrale-rialzista a sfavorevole senza che nessuno degli altri numeri si sia mosso.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto alle 14:30',
    title: 'Indice dei prezzi al consumo statunitense, luglio',
    detail:
      'Attese al 3,4% annuo dal 3,5%, con l’indice di fondo al 2,5% dal 2,6%. Per questa lettura la domanda non è se il dato scenda, ma se scenda mentre le aspettative restano dove sono: sarebbe la configurazione in cui l’inflazione realizzata converge e quella attesa no, cioè quella in cui una banca centrale ha più difficoltà a giustificare un allentamento. Va guardata la componente di fondo più della copertina, perché è quella che l’energia non sporca.',
  },
  sources: [
    {
      outlet: 'Reuters',
      title: 'NY Fed finds little change in inflation expectations in July, di Michael S. Derby',
    },
    {
      outlet: 'Federal Reserve Bank of New York',
      title: 'Survey of Consumer Expectations, luglio 2026',
    },
    { outlet: 'Euronews' },
    { outlet: 'Caspian News' },
    { outlet: 'Investing.com' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'La Federal Reserve di New York ha diffuso oggi l’indagine di luglio sulle aspettative dei consumatori. L’inflazione attesa a un anno scende al 3,6% dal 3,7% di giugno; a tre anni resta al 3,3% e a cinque al 3,0%, entrambe invariate. Il titolo che ne è uscito dice «poco cambiato», ed è esatto: è la parte che non si è mossa a portare l’informazione, perché è quella su cui una banca centrale costruisce la propria decisione.',
    },
    {
      kind: 'stats',
      title: 'Dove siamo',
      caption:
        'Indagine di luglio della New York Fed; prezzi rilevati fra le 17:51 e le 18:17 del 7 agosto.',
      items: [
        {
          label: 'Inflazione attesa a 1 anno',
          value: '3,6%',
          tone: 'bull',
          note: 'Da 3,7% a giugno: un decimo in meno',
        },
        {
          label: 'Inflazione attesa a 3 anni',
          value: '3,3%',
          tone: 'bear',
          note: 'Invariata, e lontana dall’obiettivo del 2%',
        },
        {
          label: 'Inflazione attesa a 5 anni',
          value: '3,0%',
          tone: 'bear',
          note: 'Invariata: è l’orizzonte su cui si giudica la credibilità',
        },
        {
          label: 'Caricamenti CPC',
          value: 'sospesi',
          tone: 'bear',
          note: 'Richiusi il 5 agosto; erano circa 730.000 barili al giorno',
        },
        {
          label: 'Brent',
          value: '83,65 $',
          tone: 'warn',
          note: 'Più 1,41%: trentacinque centesimi sotto la tacca degli 84',
        },
        {
          label: 'XAU/USD spot',
          value: '4.346,88 $',
          tone: 'bull',
          note: 'Più 2,50%, massimo di giornata 4.371,89',
        },
        {
          label: 'Treasury 2 anni',
          value: '4,208%',
          tone: 'warn',
          note: 'Minimo 4,158%: più di metà del calo restituita',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Un decimo non è un rientro',
      anchor: 'non-e-un-rientro',
    },
    {
      kind: 'paragraph',
      text: 'La tentazione, in una giornata come questa, è di leggere ogni numero che esce come una conferma di quello che si è già concluso al mattino. Il rapporto occupazionale è stato debole, la probabilità di un rialzo è scesa sotto la metà, e adesso arriva un’indagine in cui l’inflazione attesa a un anno cala di un decimo: sembra la terza tessera dello stesso mosaico. È esattamente il modo in cui si smette di raccogliere informazione — si continua a contare le tessere che stanno bene e si smette di guardare quelle che non stanno, e il metodo che questo archivio segue lo classifica come il difetto più costoso di tutti, descritto in /metodologia.',
    },
    {
      kind: 'paragraph',
      text: 'Guardata senza quella lente, l’indagine dice tre cose e solo una è favorevole. Il numero a un anno scende di un decimo, che su una serie mensile è dentro il rumore. I numeri a tre e cinque anni non si muovono affatto, e stanno al 3,3% e al 3,0% contro un obiettivo dichiarato del 2%. E il mese prima le stesse aspettative a breve e medio termine erano salite: due rilevazioni lette insieme non descrivono un rientro, descrivono una sosta sopra l’obiettivo.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Perché il numero a cinque anni pesa più di quello a un anno',
      text: 'L’aspettativa a un anno si muove con il prezzo della benzina e con quello che si vede al supermercato: è quasi un indicatore ritardato dell’inflazione appena passata. Quella a cinque anni misura un’altra cosa, cioè se la gente crede che la banca centrale riporterà i prezzi dove ha promesso. Al 3,0% la risposta è no, e lo era anche il mese scorso, e quello prima. È il motivo per cui una singola diffusione debole sul lavoro non chiude la partita: nessuno allenta la politica monetaria mentre il pubblico dichiara di non credere all’obiettivo.',
    },
    {
      kind: 'heading',
      text: 'Il terzo collo di bottiglia',
      anchor: 'terzo-collo-di-bottiglia',
    },
    {
      kind: 'paragraph',
      text: 'Nella stessa indagine c’è un dettaglio che di solito non fa notizia e qui serve: le attese sui prezzi della benzina a un anno restano elevate. Le famiglie non si aspettano sollievo dal lato dell’energia, ed è coerente con il fatto che le aspettative complessive non scendano. Vale la pena chiedersi se abbiano torto.',
    },
    {
      kind: 'paragraph',
      text: 'Non ce l’hanno, e la ragione sta su una rotta che questo archivio non aveva ancora guardato. Mentre l’attenzione era su Hormuz, il terminale del Caspian Pipeline Consortium sul Mar Nero — da cui esce il greggio kazako — è stato colpito da quattro attacchi con droni contro petroliere in caricamento nell’arco di quattro giorni. I caricamenti sono stati sospesi con attrezzature gravemente danneggiate, il Kazakistan ha fermato i flussi verso il terminale e tagliato la produzione, e dopo una ripresa breve il terminale ha richiuso il 5 agosto. All’inizio del mese ci passavano circa 730.000 barili al giorno.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Due rotte lontanissime, lo stesso meccanismo',
      text: 'Il dettaglio che rende questa vicenda parente di quella di Hormuz non è il drone: è chi si ferma. Nel Golfo la copertura contro il rischio di guerra decade per chi paga i pedaggi iraniani, e le navi non partono; nel Mar Nero gli armatori rifiutano i viaggi verso il terminale e un gruppo di trasporto ha sospeso le operazioni il 4 agosto. In nessuno dei due casi a chiudersi è il passaggio: a chiudersi è la disponibilità a percorrerlo. È una distinzione che conta, perché un passaggio si riapre con un accordo e una disponibilità si ricostruisce molto più lentamente.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Aspettative appiccicose: due effetti opposti sullo stesso metallo',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Aspettative di inflazione ferme sopra l’obiettivo sono la ragione classica per cui si tiene un’attività reale invece di un titolo a reddito fisso.',
          'Gli shock di offerta che le alimentano sono ricorrenti e su rotte diverse: Hormuz, Mar Rosso e adesso il Mar Nero. Tre in poche settimane non sono un episodio.',
          'La produttività statunitense all’1,4% contro un costo del lavoro per unità all’1,3% assorbe la pressione salariale: l’inflazione che resta è quella da offerta, che la banca centrale può solo subire.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Le stesse aspettative tengono in vita il caso per tassi alti, e i tassi alti sono il costo di tenere un metallo che non paga cedole.',
          'Il rapporto occupazionale ha spostato la probabilità di un rialzo a settembre al 43,7%, non a zero: con le aspettative ferme, quel numero ha una ragione per risalire.',
          'Il Brent a 83,65 è a trentacinque centesimi dalla tacca oltre la quale l’energia smette di sostenere il metallo e ricomincia a spingere i rendimenti contro di lui.',
          'Il biennale a 4,208% ha già restituito più di metà del calo seguito al dato di stamattina.',
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
      text: 'L’impostazione che questa analisi descrive è neutrale con inclinazione rialzista, forza bassa, sull’orizzonte delle settimane. È deliberatamente meno favorevole all’oro di quanto lo siano le due analisi di oggi pomeriggio, e non perché il quadro sia peggiorato: perché è un altro orizzonte. Sul giorno il rapporto occupazionale comanda, e comanda a favore del metallo. Sui mesi comanda se la banca centrale possa considerare chiusa la partita sull’inflazione, e la risposta che arriva oggi è no — con l’aggravante che la ragione per cui è no non dipende dalla politica monetaria, perché una rotta chiusa non si riapre alzando o abbassando i tassi.',
    },
    {
      kind: 'paragraph',
      text: 'La forza resta bassa e va difesa così: è una rilevazione mensile, e una rilevazione ferma non è una tendenza. Se l’indagine di agosto mostrasse le aspettative a tre e cinque anni in calo, tutto quello che è scritto qui perderebbe la premessa, ed è la prima delle condizioni dichiarate sotto. Il valore di questa lettura non è la certezza, è che dice in anticipo quale numero guardare per sapere che si è sbagliata.',
    },
    {
      kind: 'note',
      text: 'I dati sulle aspettative sono la diffusione del 7 agosto della Federal Reserve di New York, riportata da Reuters; l’indagine registra ciò che le famiglie dichiarano di attendersi e non è una previsione dell’istituto. Il collegamento fra le attese elevate sui prezzi della benzina e le interruzioni sulle rotte è una lettura di questo archivio, non un risultato dell’indagine, che alle famiglie non chiede le ragioni. I fatti sul terminale del Caspian Pipeline Consortium sono ricostruiti da più testate e riguardano un arco che va dal 21 luglio al 5 agosto. I livelli di mercato sono rilevazioni delle 17:51-18:17 e servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};
