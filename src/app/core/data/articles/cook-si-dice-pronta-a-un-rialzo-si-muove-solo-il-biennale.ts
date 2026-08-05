/**
 * cook-si-dice-pronta-a-un-rialzo-si-muove-solo-il-biennale
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const cookProntaAUnRialzo: Article = {
  slug: 'cook-si-dice-pronta-a-un-rialzo-si-muove-solo-il-biennale',
  categories: ['fed', 'oro', 'tasso-di-interesse', 'usa'],
  title: 'Cook si dice pronta a un rialzo, si muove solo il biennale',
  kicker: 'Federal Reserve · La sesta voce restrittiva',
  dek:
    'La governatrice Lisa Cook, che nell’ultima riunione aveva votato per lasciare i tassi fermi, dice ora di essere ' +
    'pronta a sostenere un rialzo se l’inflazione non riprende presto a scendere. La probabilità di settembre resta ' +
    'al 57%. L’unico rendimento che si è mosso è quello a due anni.',
  publishedAt: '2026-08-05T23:10:00+02:00',
  author: AUTHOR,
  readingMinutes: 5,
  tags: ['Federal Reserve', 'Lisa Cook', 'PCE', 'Curva dei rendimenti', 'Vincoli e preferenze'],
  instruments: ['XAU/USD', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    regime:
      'Una governatrice della Fed dichiara di essere disposta a votare un rialzo, ed è la voce restrittiva più ' +
      'pesante arrivata finora perché è l’unica che sia anche un cambio della propria posizione. Il prezzo che ' +
      'dovrebbe registrarla — la probabilità di un rialzo a settembre — resta al 57%, e il decennale scende di un ' +
      'punto base. Si è mosso il biennale, cioè la scadenza dove un rialzo si vedrebbe per primo: il mercato l’ha ' +
      'sentita, ma non abbastanza da riprezzare la decisione.',
    horizon: 'medio',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti: le dichiarazioni sono di una governatrice in carica e attribuite alla Federal Reserve, i dati ' +
    'di inflazione citati sono pubblicati, i livelli di prezzo sono osservati e riportati dalla fonte. Media, e non ' +
    'più di media, sull’effetto: la stessa notizia dovrebbe far scendere l’oro attraverso rendimenti e dollaro, e ' +
    'nelle ore successive né gli uni né l’altro si sono mossi in quella direzione. Un effetto atteso che non si ' +
    'presenta va registrato come tale, non spiegato con il ritardo.',
  takeaways: [
    'La governatrice della Federal Reserve Lisa Cook ha dichiarato di essere pronta a sostenere un nuovo rialzo dei tassi se l’inflazione non riprendesse presto a scendere, definendola ancora «troppo alta» e indicando i rischi sui prezzi come oggi superiori a quelli sul mercato del lavoro.',
    'Il punto che la distingue dalle altre prese di posizione restrittive è che Cook aveva votato per lasciare i tassi fermi nell’ultima riunione: non è un falco che si ripete, è una posizione che si sposta.',
    'I numeri che cita sono il PCE al 3,7% e il PCE core al 3,3% di giugno, con il timore esplicito che l’inflazione si radichi nei salari e nei prezzi.',
    'La probabilità di mercato di un rialzo a settembre è rimasta intorno al 57%, sotto il 67% di qualche giorno prima: la sesta voce restrittiva in pochi giorni non ha spostato il numero, e la deriva di quel numero continua ad andare nella direzione opposta alla retorica.',
    'L’unico rendimento che ha reagito è il biennale, risalito verso il 4,21%, mentre il decennale è sceso al 4,63% interrompendo quattro letture consecutive in aumento; l’oro tiene intorno a 4.253 dollari dopo un massimo vicino a 4.265 e il dollaro resta debole a 99,75.',
  ],
  invalidation: [
    'Una probabilità di rialzo a settembre che risale al 67% da cui era partita: è la condizione principale, perché la lettura poggia proprio sul fatto che quel numero non si muova. Il 62%, a metà strada, è la soglia che segnala il logoramento prima della rottura.',
    'Il biennale in ulteriore accelerazione, sopra il 4,25%.',
    'Il rendimento del decennale sopra il 4,70%.',
    'Un Dollar Index sopra l’area 100-100,20.',
    'XAU/USD sotto i 4.160 dollari, il supporto tecnico indicato dalla fonte citata.',
  ],
  nextEvent: {
    when: 'Venerdì',
    title: 'Rapporto occupazionale statunitense',
    detail:
      'Cook ha detto che i rischi sui prezzi sono ormai superiori a quelli sul lavoro. Il rapporto di venerdì è il primo dato che può contraddirla o darle ragione con un numero, ed è anche l’unica cosa in calendario che possa ragionevolmente muovere il 57%. Attese intorno a 80.000 posti complessivi: sopra, la sua tesi trova un appoggio; sotto, la Fed resta stretta fra un’inflazione che non scende e un mercato del lavoro che rallenta.',
  },
  sources: [{ outlet: 'Federal Reserve' }, { outlet: 'Reuters' }],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'La governatrice della Federal Reserve Lisa Cook ha dichiarato di essere pronta a sostenere un nuovo rialzo dei tassi qualora l’inflazione non riprendesse presto a scendere. L’ha definita ancora «troppo alta» — PCE al 3,7% e PCE core al 3,3% a giugno — e ha detto che i rischi sul fronte dei prezzi sono oggi superiori a quelli sul mercato del lavoro, avvertendo che la Fed non può permettersi di aspettare troppo perché l’inflazione potrebbe radicarsi nei salari e nei prezzi.',
    },
    {
      kind: 'stats',
      title: 'Dove sono i numeri',
      caption:
        'Valori citati dalle fonti al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Rialzo Fed a settembre',
          value: '≈ 57%',
          tone: 'warn',
          note: 'Invariato dopo l’intervento, e sotto il 67% di qualche giorno prima',
        },
        {
          label: 'Treasury a 2 anni',
          value: '≈ 4,21%',
          tone: 'bear',
          note: 'L’unico rendimento che si è mosso in risposta',
        },
        {
          label: 'Treasury a 10 anni',
          value: '≈ 4,63%',
          tone: 'bull',
          note: 'Un punto base in meno: si interrompono quattro salite consecutive',
        },
        {
          label: 'XAU/USD',
          value: '≈ 4.253 $',
          tone: 'bull',
          note: 'Massimo vicino a 4.265 dopo un rialzo superiore al 4%',
        },
        {
          label: 'Dollar Index',
          value: '≈ 99,75',
          tone: 'bull',
          note: 'Resta debole e sotto quota 100 anche dopo l’intervento',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'La sesta voce, e la prima che cambia idea',
      anchor: 'sesta-voce',
    },
    {
      kind: 'paragraph',
      text: 'Conviene contarle, perché il conteggio è diventato il punto. Questo archivio ha registrato in pochi giorni i tre membri del FOMC che la settimana scorsa avevano chiesto un rialzo immediato, poi nel pomeriggio Jeff Schmid e Neel Kashkari, e adesso Cook. Sei prese di posizione restrittive, e un numero di mercato che nel frattempo è passato dal 67% al 57%, cioè si è mosso nella direzione contraria a tutte e sei.',
    },
    {
      kind: 'paragraph',
      text: 'Cook però non è la sesta ripetizione della stessa cosa, ed è giusto dirlo. Le altre cinque erano posizioni note che venivano riaffermate; qui una governatrice che nell’ultima riunione aveva votato per lasciare i tassi fermi dichiara di essere disposta a votare diversamente. È l’unica di queste dichiarazioni che contenga un cambiamento, e sul piano dell’informazione vale più delle altre cinque messe insieme.',
    },
    {
      kind: 'heading',
      text: 'Il numero che continua a non muoversi',
      anchor: 'numero-fermo',
    },
    {
      kind: 'paragraph',
      text: 'E nonostante questo, la probabilità che il mercato attribuisce a un rialzo di settembre resta intorno al 57%. È la stessa cifra scritta qui alle 17:30, quando gli interventi restrittivi erano due e non tre, ed è ancora sotto il 67% di qualche giorno fa. In poco più di ventiquattro ore quel numero ha assorbito un JOLTS più fiacco, un ADP molto sotto le attese, tre interventi restrittivi e ora l’apertura di una governatrice a un rialzo: quattro notizie che spingono in direzioni opposte e nessuno spostamento.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il vincolo alla sua prova più difficile',
      text: 'La lettura usata ieri e oggi sull’Iran e sulla Fed è sempre la stessa: le preferenze sono opzionali, i vincoli no. Cook sta dicendo che cosa sarebbe disposta a fare; il mercato sta prezzando che cosa il quadro la costringerà a fare, e non cambia stima perché il vincolo — un mercato del lavoro che rallenta, con l’ADP a 44.000 posti contro 70.000 attesi — non è cambiato. La differenza rispetto a stamattina è che stavolta la preferenza dichiarata era la più credibile possibile: un voto che si sposta, non un discorso. Il vincolo ha retto anche a quella. È l’osservazione che vale la pena tenere, molto più della singola frase di Cook. Il metodo è descritto in /metodologia.',
    },
    {
      kind: 'heading',
      text: 'Dove il mercato l’ha invece registrata',
      anchor: 'biennale',
    },
    {
      kind: 'paragraph',
      text: 'Sarebbe però sbagliato scrivere che non è successo niente, e il posto dove guardare è la scadenza giusta. Il biennale è risalito verso il 4,21%: è la parte della curva che riflette il percorso dei tassi nei prossimi trimestri, cioè esattamente il punto in cui un rialzo di settembre si vedrebbe per primo. Il decennale, che sconta molte più cose, è sceso al 4,63%, interrompendo quattro letture consecutive in aumento.',
    },
    {
      kind: 'paragraph',
      text: 'Le due cose insieme dicono qualcosa di più preciso di «il mercato ha ignorato Cook»: il mercato l’ha sentita, l’ha messa nel prezzo dove andava messa, e la quantità che le ha attribuito è piccola. Vale anche al contrario, ed è la parte scomoda per la lettura rialzista sull’oro: il decennale che smette di salire toglie l’unico argomento contrario che questo archivio aveva registrato quattro volte di fila nella stessa giornata.',
    },
    {
      kind: 'heading',
      text: 'Le tre vie d’uscita che Cook indica da sé',
      anchor: 'vie-uscita',
    },
    {
      kind: 'paragraph',
      text: 'C’è un’ultima cosa nel suo intervento, ed è quella che i titoli hanno lasciato fuori. Cook non ha detto che un rialzo sia deciso: ha elencato tre condizioni che potrebbero far scendere l’inflazione senza bisogno di intervenire.',
    },
    {
      kind: 'list',
      title: 'Che cosa toglierebbe la necessità del rialzo, secondo Cook',
      items: [
        'Un calo del petrolio nei prossimi mesi.',
        'L’esaurimento dell’effetto dei dazi sui prezzi.',
        'L’allentamento delle pressioni legate agli investimenti nell’intelligenza artificiale.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'La prima delle tre è già in corso, ed è documentata in questo stesso archivio: il Brent è tornato sotto gli 80 dollari, con le scorte americane in aumento e un’intesa tecnica su Hormuz che avanza. Chi legge solo la parte restrittiva dell’intervento sta quindi togliendo dalle parole di Cook la condizione che le rende reversibili — ed è la stessa asimmetria di lettura che il mercato, a giudicare dal 57% fermo, non sta commettendo.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Che cosa cambia, e che cosa no',
      left: {
        title: 'Contro l’oro',
        tone: 'bear',
        items: [
          'Una governatrice votante apre a un rialzo: il rischio restrittivo smette di essere solo retorica regionale.',
          'Il biennale sale: la parte della curva sensibile alla politica monetaria si è mossa nella direzione sfavorevole.',
          'Il metallo arriva a questo intervento dopo un rialzo superiore al 4%, cioè con poco margine per assorbire una notizia contraria.',
        ],
      },
      right: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Il 57% non si muove: la decisione che conta non è stata riprezzata.',
          'Il decennale scende al 4,63% e il dollaro resta debole a 99,75: i due canali di trasmissione non hanno confermato la notizia.',
          'Cook stessa indica tre vie che eviterebbero il rialzo, e la prima — il petrolio — è già in corso.',
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
          tone: 'warn',
          text: 'Sostenuto finché tiene l’area 4.200-4.210, ma con un rischio di correzione più concreto di stamattina dopo un rialzo superiore al 4%.',
        },
        {
          label: 'Rendimenti USA',
          tone: 'warn',
          text: 'Pressione al rialzo concentrata sulla parte breve: è lì che un rialzo di settembre verrebbe prezzato, non sul decennale.',
        },
        {
          label: 'Dollaro',
          tone: 'bull',
          text: 'Ancora debole sotto quota 100, ma con un motivo in più per recuperare se il 57% comincia a salire.',
        },
        {
          label: 'Petrolio',
          tone: 'bull',
          text: 'Impatto diretto limitato, ma il suo calo è una delle tre condizioni che Cook indica per evitare l’intervento.',
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
      text: 'L’impostazione su XAU/USD resta inclinata al rialzo, con forza media, e non torna decisamente rialzista pur essendo rientrato il principale elemento contrario registrato alle 19:15: il decennale ha smesso di salire, e con il dollaro ancora sotto quota 100 il canale dei tassi ha ripreso a collaborare. La ragione è che il fatto nuovo della giornata spinge nella direzione opposta, ed è un fatto serio: nessuna delle notizie favorevoli all’oro arrivate oggi contiene un cambio di posizione dentro il consiglio della banca centrale, e questa sì.',
    },
    {
      kind: 'paragraph',
      text: 'Quello che tiene la lettura inclinata al rialzo non è quindi l’ottimismo sul metallo, è l’asimmetria fra ciò che viene dichiarato e ciò che viene prezzato: sei voci restrittive e un numero fermo al 57%, con la deriva che va nella direzione opposta. Finché quel numero non si muove, la retorica restrittiva è un rischio da tenere presente e non un cambio di regime. Il giorno in cui comincia a salire, questa lettura va rifatta da capo — ed è per questo che la sua risalita verso il 67% sta scritta fra le condizioni di invalidazione prima di qualunque livello di prezzo.',
    },
    {
      kind: 'note',
      text: 'Le dichiarazioni di Lisa Cook sono un intervento pubblico di un membro del consiglio della Federal Reserve e non una decisione di politica monetaria: il FOMC si riunisce a settembre. La probabilità di rialzo è una lettura di mercato, non una previsione della banca centrale. I livelli di prezzo servono a rendere verificabile il ragionamento e non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};
