/**
 * meno-23-mila-posti-e-il-rialzo-di-settembre-passa-in-minoranza
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const nfpLuglioRialzoInMinoranza: Article = {
  slug: 'meno-23-mila-posti-e-il-rialzo-di-settembre-passa-in-minoranza',
  categories: ['nfp', 'fed', 'oro', 'tasso-di-disoccupazione'],
  title: 'Meno 23 mila posti, e il rialzo di settembre passa in minoranza',
  kicker: 'Lavoro · Il dato che quattro analisi avevano indicato',
  dek:
    'Il rapporto occupazionale di luglio segna meno 23.000 posti contro attese di circa 80.000, con maggio e ' +
    'giugno rivisti al ribasso di 103.000. La probabilità di un rialzo della Fed a settembre scende dal 55,1% ' +
    'al 41,7%: sotto la metà. L’oro sale del 2,84% mentre il Brent scende dell’1%, ed è quella divergenza — ' +
    'non il rialzo in sé — a dire che stavolta decide il canale dei tassi.',
  publishedAt: '2026-08-07T15:05:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: ['Rapporto occupazionale', 'Revisioni', 'Partecipazione', 'Soglia dichiarata', 'Canale dei tassi'],
  instruments: ['XAU/USD', 'Treasury', 'DXY', 'Brent'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'media',
    regime:
      'Il canale dei tassi ha cambiato lato. Per una settimana ha lavorato contro il metallo — greggio alto, ' +
      'inflazione attesa, rendimenti in salita — e da oggi lavora con lui: meno 23.000 posti, 103.000 tolti ai ' +
      'due mesi precedenti, salari in decelerazione e la probabilità di un rialzo a settembre scesa sotto la ' +
      'metà. La prova che sia questo il canale, e non il rifugio, è che l’oro sale mentre il Brent scende: il ' +
      'premio geopolitico si sta sgonfiando e il metallo guadagna lo stesso. La forza è media e non alta ' +
      'perché il dato è già nel prezzo e mercoledì esce l’indice dei prezzi.',
    horizon: 'medio',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti: è una diffusione dell’ufficio di statistica del lavoro statunitense, cioè una fonte ' +
    'primaria con numeri definitivi, e i prezzi vengono dal pannello abituale con l’ora accanto. Alta anche ' +
    'sulla direzione, e per una ragione che riguarda il metodo prima del mercato: questo archivio aveva ' +
    'indicato il rapporto di oggi come l’evento decisivo in quattro analisi diverse, scritte prima di sapere ' +
    'come sarebbe uscito. Media sulla durata: il dato è già nel prezzo, la partecipazione al 61,4% rende il ' +
    'quadro meno univoco di quanto sembri, e mercoledì l’indice dei prezzi può rimettere il rialzo sul tavolo.',
  takeaways: [
    'I posti di lavoro di luglio sono meno 23.000 contro attese di circa 80.000: il primo calo da mesi. Le revisioni pesano quanto il numero di copertina — giugno scende da 57.000 a 20.000, maggio da 129.000 a 63.000, in tutto 103.000 posti in meno.',
    'La disoccupazione cala al 4,1% dal 4,2%, meglio delle attese, ma per la ragione sbagliata: il tasso di partecipazione scende al 61,4%, il livello più basso da oltre cinque anni. Un mercato del lavoro che si svuota fa scendere il tasso senza che nessuno trovi lavoro.',
    'I salari decelerano: più 0,1% sul mese e più 3,2% sull’anno, contro attese di più 0,3% e più 3,5%. È la metà del dato che toglie alla Fed l’argomento inflazionistico per alzare.',
    'La probabilità di un rialzo a settembre passa dal 55,1% delle 14:20 al 41,7%: sotto la metà per la prima volta da giorni. A dicembre scende dall’82,7% al 73,8%.',
    'L’oro spot è a 4.360,97 dollari, più 2,84%, con un massimo di 4.371,89. Ma il fatto diagnostico è un altro: nella stessa ora il Brent scende dell’1,01% a 81,66. Il metallo sale mentre il premio geopolitico si sgonfia, e questo dice quale dei due canali sta lavorando.',
  ],
  invalidation: [
    'Un indice dei prezzi di mercoledì 12 agosto sopra le attese del 3,4% annuo, o un dato core sopra il 2,5%: rimetterebbe il rialzo sul tavolo e toglierebbe a questa lettura la sua unica gamba.',
    'Una probabilità di rialzo a settembre che risale sopra il 50%, cioè che torna a essere lo scenario più probabile: è il numero su cui questa lettura è costruita, e la metà è la linea che oggi è stata attraversata.',
    'Un oro spot che rientra sotto i 4.300 dollari, che cancellerebbe l’intero movimento di oggi e riporterebbe il prezzo dove era prima del dato.',
    'Un decennale che torna sopra il 4,70% mentre l’oro resta sopra i 4.300: direbbe che il mercato obbligazionario ha già smesso di credere alla lettura di oggi sul rapporto occupazionale.',
    'Prima di tutte queste, e senza aspettare la rottura: un Brent che torna sopra gli 84 dollari mentre l’oro sale con lui. Toglierebbe la prova su cui poggia il titolo di questa analisi — che a muovere il metallo siano i tassi e non il rischio — e riporterebbe il quadro a quello ambiguo di ieri.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto alle 14:30',
    title: 'Indice dei prezzi al consumo statunitense, luglio',
    detail:
      'Attese al 3,4% annuo dal 3,5%, con l’indice di fondo al 2,5% dal 2,6% e una variazione mensile dello 0,2% contro lo zero di giugno. È l’unico evento che può rimettere in discussione quello che è successo oggi: un mercato del lavoro che si contrae toglie alla Fed la ragione per alzare, ma un’inflazione che risale gliela restituisce, e in quel caso i due dati si annullano. Va guardata soprattutto la parte di fondo, perché è quella su cui il rincaro amministrato dei dazi — i prezzi minimi sul polisilicio in vigore dal 4 dicembre — comincerà a vedersi, e quel tipo di inflazione la produttività non la assorbe.',
  },
  sources: [
    { outlet: 'Bureau of Labor Statistics', title: 'The Employment Situation, luglio 2026' },
    { outlet: 'Quartz' },
    { outlet: 'Wall Street Journal', title: 'Consenso degli economisti a 83.000 posti' },
    { outlet: 'Barron’s', title: 'Consenso a 95.000 posti' },
    { outlet: 'Investing.com' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Alle 14:30 l’economia statunitense ha perso 23.000 posti di lavoro a luglio, contro attese che stavano fra gli 80.000 e i 95.000 a seconda del sondaggio. È il primo calo da mesi. Sotto il numero di copertina ce n’è uno più pesante: maggio e giugno sono stati rivisti al ribasso di 103.000 posti in tutto — giugno da 57.000 a 20.000, maggio da 129.000 a 63.000 — su una serie che era già stata rivista al ribasso una volta. Quattro analisi di questo archivio avevano indicato questo rapporto come l’evento che avrebbe deciso la lettura, e lo avevano scritto prima di sapere come sarebbe uscito.',
    },
    {
      kind: 'stats',
      title: 'Dove siamo',
      caption: 'Rilevazioni delle 14:49-14:57 del 7 agosto, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Posti di lavoro, luglio',
          value: '−23.000',
          tone: 'bull',
          note: 'Contro attese di circa 80.000; revisioni di maggio e giugno per −103.000',
        },
        {
          label: 'Rialzo Fed a settembre',
          value: '41,7%',
          tone: 'bull',
          note: 'Era 55,1% alle 14:20: sotto la metà. A dicembre 73,8% da 82,7%',
        },
        {
          label: 'XAU/USD spot',
          value: '4.360,97 $',
          tone: 'bull',
          note: 'Più 2,84%, massimo 4.371,89, da una chiusura di 4.240,69',
        },
        {
          label: 'Treasury 2 anni',
          value: '4,162%',
          tone: 'bull',
          note: 'Meno 8,3 punti base da 4,245%: è la scadenza che prezza settembre',
        },
        {
          label: 'Treasury 10 anni',
          value: '4,616%',
          tone: 'bull',
          note: 'Minimo 4,601%, un millesimo sopra la soglia dichiarata ieri',
        },
        {
          label: 'Dollar Index',
          value: '99,345',
          tone: 'bull',
          note: 'Minimo 99,280, sotto la soglia di 99,50 dichiarata ieri sera',
        },
        {
          label: 'Brent',
          value: '81,66 $',
          tone: 'warn',
          note: 'Meno 1,01%: scende mentre l’oro sale, ed è il fatto diagnostico',
        },
        {
          label: 'Transiti a Hormuz',
          value: '33 in quattro giorni',
          tone: 'bear',
          note: 'Contro 50 la settimana prima; quattro navi giovedì',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'La prova non è il rialzo dell’oro: è il petrolio che scende',
      anchor: 'la-prova',
    },
    {
      kind: 'paragraph',
      text: 'Un oro che sale del 2,84% dopo un dato debole sul lavoro non dimostra niente da solo. Il metallo sale per due ragioni molto diverse — perché il costo di tenerlo scende, o perché qualcuno cerca riparo — e per una settimana questo archivio ha ripetuto che le due cose andavano tenute separate, perché portano a conclusioni opposte su quanto duri il movimento.',
    },
    {
      kind: 'paragraph',
      text: 'Oggi si separano da sole. Nella stessa ora in cui l’oro guadagna 120 dollari, il Brent perde l’1,01% e scende a 81,66 da un massimo di giornata di 84,40. Il premio geopolitico si sta sgonfiando: il greggio ha smesso di prezzare la tensione regionale con la stessa intensità di ieri, e il metallo sale lo stesso. Se fosse una corsa al rifugio, i due prezzi salirebbero insieme, come è successo lunedì e martedì. Salgono in direzioni opposte, ed è la firma di un movimento sui tassi.',
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Il numero che ha attraversato la metà',
      text: 'La probabilità di un rialzo alla riunione del 16 settembre era al 55,1% alle 14:20, quando questo archivio ha pubblicato l’analisi precedente. Adesso è al 41,7%: tredici punti e mezzo in meno in mezz’ora, e soprattutto dall’altra parte del 50%. Fino a stamattina il rialzo era lo scenario più probabile e il quadro dell’archivio era costruito sul fatto che quel numero non si muovesse; adesso lo scenario più probabile è che la Fed resti ferma. Non è una sfumatura di probabilità: è il cambio del caso base.',
    },
    {
      kind: 'heading',
      text: 'Il dettaglio che complica il quadro',
      anchor: 'il-dettaglio',
    },
    {
      kind: 'paragraph',
      text: 'C’è una parte del rapporto che va nella direzione opposta, e vale la pena metterla davanti invece che in fondo: la disoccupazione è scesa al 4,1% dal 4,2%, meglio delle attese. Preso da solo sarebbe un dato di forza, e chi volesse difendere il rialzo di settembre partirebbe da lì.',
    },
    {
      kind: 'paragraph',
      text: 'Non regge, e la ragione è nella riga sotto. Il tasso di partecipazione è sceso al 61,4%, il livello più basso da oltre cinque anni. Il tasso di disoccupazione è un rapporto fra chi cerca lavoro e chi è nella forza lavoro: se il denominatore si svuota perché la gente smette di cercare, il tasso migliora senza che nessuno sia stato assunto. Con meno 23.000 posti nella rilevazione presso le imprese, un tasso in calo nella rilevazione presso le famiglie descrive un mercato che si restringe, non uno che tiene. E i salari lo confermano dalla terza angolazione: più 0,1% sul mese e più 3,2% sull’anno contro attese di più 0,3% e più 3,5%. Tre misure diverse dello stesso rapporto, e nessuna delle tre dice che il mercato del lavoro sia forte.',
    },
    {
      kind: 'heading',
      text: 'Perché stavolta l’impostazione passa a rialzista',
      anchor: 'perche-rialzista',
    },
    {
      kind: 'paragraph',
      text: 'Tre ore fa, davanti a un testo che chiedeva di passare a rialzista sulla base di un oro che stava estendendo il rialzo, questo archivio ha rifiutato. La ragione scritta allora era che non esisteva una soglia dichiarata dietro quel passaggio: il prezzo si muoveva nella direzione che l’analisi precedente aveva già descritto, e muovere l’impostazione perché il movimento continua significa inseguire il grafico. Adesso il passaggio si fa, e conviene essere espliciti sul perché la differenza non è di comodo.',
    },
    {
      kind: 'paragraph',
      text: 'La differenza è che oggi c’era un test, ed era stato dichiarato in anticipo quattro volte. Il quadro di aggiornamento che questo archivio usa, descritto in /metodologia, dice che il peso di una prova dipende da quanto era specifica la previsione prima di vederla: un dato che si sarebbe potuto usare per confermare qualunque lettura non sposta niente, un dato di cui si era scritto prima quale esito avrebbe rovesciato la lettura e quale l’avrebbe rafforzata sposta molto. Il rapporto di oggi era della seconda specie. L’analisi delle 18:47 di ieri diceva che un dato nettamente sotto le attese avrebbe restituito all’oro il canale che allora gli era contro; quella delle 10:35 di stamattina che un dato nettamente sopra avrebbe rimesso i tassi davanti al rifugio. Sono usciti meno 23.000 posti. La prima ha ragione, la seconda non è stata smentita, e il canale è cambiato di lato nel modo in cui era stato descritto.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Un vincolo che si scioglie, e va detto come quando reggeva',
      text: 'Da giorni la scheda dell’indicatore porta un vincolo chiamato «mercato del lavoro statunitense che rallenta», tenuto a «si allenta» contro sette prese di posizione restrittive di membri della Fed che non riuscivano a spostarlo. Oggi non rallenta: si contrae, con 103.000 posti tolti ai due mesi precedenti e 23.000 persi a luglio. Il vincolo è sciolto, e con esso la parte del quadro che teneva in piedi l’ipotesi di un rialzo a settembre. È la stessa disciplina applicata al Brent ieri sera, quando la soglia degli 82 dollari è caduta contro chi l’aveva scritta: un vincolo che si scioglie va registrato con la stessa prontezza con cui lo si usava quando reggeva.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Il canale dei tassi, per la prima volta dalla parte del metallo',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Il rialzo di settembre non è più lo scenario più probabile: 41,7% contro il 55,1% di mezz’ora prima, e a dicembre 73,8% da 82,7%.',
          'Tutta la curva breve si è mossa insieme: biennale a 4,162% da 4,245%, decennale a 4,616% da 4,67%, Dollar Index a 99,345 da 99,808. Il costo di tenere oro scende su tre misure contemporaneamente.',
          'I salari decelerano su entrambe le letture, mensile e annua: è la parte del rapporto che toglie alla Fed l’argomento per alzare, non solo la scusa.',
          'Il quadro geopolitico non è migliorato: i transiti a Hormuz sono 33 in quattro giorni contro 50 nella settimana prima, e la clausola di difesa collettiva firmata alla Mecca resta sul tavolo. Il sostegno da rifugio non è sparito, si è solo messo in secondo piano.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Il dato è già nel prezzo: 120 dollari in mezz’ora sono il movimento, non l’attesa del movimento. Chi legge questa analisi lo fa con il rialzo già avvenuto.',
          'La disoccupazione è scesa al 4,1%, e finché la partecipazione non viene letta da tutti come la spiegazione, quella cifra resta un appiglio per chi difende il rialzo.',
          'Mercoledì esce l’indice dei prezzi, atteso al 3,4% annuo: un dato sopra le attese restituisce alla Fed la ragione che il lavoro le ha appena tolto, e i due si annullano.',
          'Il premio geopolitico si sta sgonfiando: se il Brent continua a scendere, il metallo perde la seconda gamba proprio mentre poggia tutto il peso sulla prima.',
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
      text: 'L’impostazione su XAU/USD passa a rialzista con forza media, sull’orizzonte dei giorni. È il primo rialzista pieno di questa settimana, ed è il quarto cambio di direzione in ventiquattro ore: neutrale-ribassista ieri sera con il Brent oltre gli 82, ancora ribassista stanotte, neutrale-rialzista alle 10:35 con il superamento dei 4.300, rialzista adesso. Detto così sembra un’impostazione che insegue; guardato dalle condizioni, ogni passaggio è stato deciso da una soglia scritta prima, e tre di quelle soglie sono state attraversate contro chi le aveva scritte.',
    },
    {
      kind: 'paragraph',
      text: 'La forza resta media e non alta per due ragioni che non hanno a che fare con la convinzione sul meccanismo. La prima è che il movimento è già avvenuto: un’analisi pubblicata mezz’ora dopo il dato non sta prevedendo il rialzo, sta dicendo che cosa lo tiene in piedi, ed è una cosa più modesta. La seconda è che mercoledì esce l’indice dei prezzi, e il canale che si è aperto oggi è lo stesso che quel dato può richiudere: se l’inflazione risale, la Fed si ritrova con un mercato del lavoro che si contrae e prezzi che salgono, cioè con la sola configurazione in cui il rialzo di settembre torna difendibile nonostante meno 23.000 posti. Vale la pena ricordare che stamattina questo archivio ha pubblicato la ragione per cui quella configurazione non è remota: i prezzi minimi all’importazione sul polisilicio, in vigore dal 4 dicembre, sono un rincaro deciso per atto e non dalla domanda, e la produttività non lo assorbe perché non passa dai salari.',
    },
    {
      kind: 'note',
      text: 'I dati sull’occupazione sono la diffusione dell’ufficio di statistica del lavoro statunitense delle 14:30 del 7 agosto; il consenso di circa 80.000 posti è quello che questo archivio usava, mentre i sondaggi citati danno 83.000 (Wall Street Journal) e 95.000 (Barron’s). I livelli di mercato sono rilevazioni delle 14:49-14:57 e servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi. I riferimenti sull’oro sono sul prezzo spot; il contratto future scambia una sessantina di dollari più in alto. Il conteggio dei transiti a Hormuz è di fonte Reuters, letta su US News.',
    },
  ],
};
