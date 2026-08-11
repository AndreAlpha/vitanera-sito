/**
 * sei-navi-lunedi-e-una-media-di-undici
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const seiNaviLunediMediaUndici: Article = {
  slug: 'sei-navi-lunedi-e-una-media-di-undici',
  categories: ['rotte-e-approvvigionamento', 'petrolio', 'medio-oriente', 'oro'],
  title: 'Sei navi lunedì, e una media di undici',
  kicker: 'Rotte · Il conteggio trova una fonte',
  dek:
    'I dati Kpler danno per la prima volta una serie al conteggio dei transiti a Hormuz: sei navi lunedì, ' +
    'ma una media di circa undici negli ultimi dieci giorni. È sopra la soglia di otto che questo archivio ' +
    'segue dal 5 agosto, e obbliga a correggere una lettura costruita su rilevazioni sparse.',
  publishedAt: '2026-08-11T08:15:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: ['Hormuz', 'Kpler', 'Transiti', 'Risarcimenti', 'Brent'],
  instruments: ['XAU/USD', 'Brent', 'WTI'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'bassa',
    regime:
      'Due fatti che tirano in verso opposto, e il netto è vicino a zero. Da un lato il conteggio dei ' +
      'transiti — il metro che questo archivio segue dal 5 agosto con una soglia di otto navi al giorno — ' +
      'trova finalmente una fonte con una serie: Kpler dà sei navi lunedì, ma una media di circa undici ' +
      'negli ultimi dieci giorni. Undici è sopra la soglia, e obbliga a dire che le due navi di venerdì ' +
      'erano un minimo e non il livello. Dall’altro lato la trattativa si irrigidisce: alle richieste ' +
      'iraniane di risarcimento Washington risponde chiedendo a sua volta risarcimenti per vittime e ' +
      'feriti, e due pretese simmetriche sono più difficili da chiudere di una sola. Il greggio resta ' +
      'sopra gli 88 dollari, sui massimi dal 31 luglio: la strada per cui questa vicenda arriva all’oro ' +
      'passa ancora dall’inflazione attesa, non dal rifugio.',
    horizon: 'medio',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti: i numeri sui transiti vengono da un fornitore di dati nominato, Kpler, e sono ' +
    'riportati da Reuters con la scomposizione fra navi in entrata e in uscita; le esportazioni nette e i ' +
    'prezzi del greggio sono altrettanto espliciti; la richiesta di risarcimenti è una posizione ' +
    'dichiarata. Media sulla lettura, e la ragione va detta perché riguarda questo archivio prima che il ' +
    'mercato: per sei giorni il conteggio è stato usato come metro principale sulla base di rilevazioni ' +
    'sparse e di seconda mano, e la media di dieci giorni che compare oggi lo colloca in un punto diverso ' +
    'da quello descritto. Non cambia la conclusione di fondo — il traffico resta al 90% sotto il normale — ' +
    'ma cambia quanto ci si poteva fidare della soglia.',
  takeaways: [
    'I dati Kpler pubblicati stamattina e riportati da Reuters mostrano che lunedì sono transitate dallo Stretto di Hormuz sei navi: quattro in entrata e due in uscita.',
    'Il numero che conta di più non è quello del giorno ma la media: circa undici transiti al giorno negli ultimi dieci giorni, contro i 130-140 di prima del conflitto. È sopra la soglia di otto che questo archivio segue dal 5 agosto.',
    'Le esportazioni nette di greggio e prodotti raffinati attraverso lo Stretto sono scese a circa 3 milioni di barili al giorno, dai 4,4 milioni della settimana precedente: è un calo di quasi un terzo, e misura barili invece che scafi.',
    'Sul piano negoziale il quadro si irrigidisce: alle richieste di risarcimento avanzate da Teheran, Trump risponde chiedendo all’Iran risarcimenti per le vittime e i feriti attribuiti ad azioni iraniane. Due pretese simmetriche allargano la distanza invece di ridurla.',
    'Il greggio resta sui massimi dal 31 luglio: Brent intorno agli 88,09 dollari e WTI a 82,52, dopo il rialzo di circa il 5% di lunedì.',
  ],
  invalidation: [
    'Una media dei transiti a dieci giorni che scende stabilmente sotto le otto navi al giorno nella prossima rilevazione Kpler: riporterebbe il metro dove questo archivio lo aveva collocato, e direbbe che la media di undici era il residuo di una settimana migliore.',
    'Esportazioni nette attraverso lo Stretto che risalgono sopra i 4 milioni di barili al giorno: sarebbe la normalizzazione misurata in barili, che è la misura giusta, e toglierebbe la premessa a questa lettura.',
    'Il ritiro di una delle due richieste di risarcimento, o un incontro diretto fra le parti: sarebbe il primo passo strutturale verso la riapertura da quando la vicenda è cominciata.',
    'Un Brent che rientra sotto gli 84 dollari sulla serie di questo archivio, cioè sotto gli 85,4 su quella citata dalle agenzie: direbbe che il mercato dell’energia ha smesso di prezzare lo stallo descritto qui.',
    'Un indice dei prezzi statunitense mercoledì 12 agosto sopra il 3,4% annuo sul dato principale, o sopra più 0,2% mensile su quello di fondo: sposterebbe il comando al canale americano, dove il conteggio delle navi conta molto meno.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto, 14:30 italiane',
    title: 'Indice dei prezzi al consumo statunitense di luglio',
    detail:
      'È il numero che decide se il greggio sopra gli 88 dollari resta un problema di offerta o diventa un problema di inflazione. Il consenso riportato da Reuters è di più 0,1% mensile sul dato principale e più 0,2% su quello di fondo, con la probabilità di un rialzo a settembre intorno alla metà. Un dato caldo trasformerebbe lo stallo di Hormuz in una riprezzatura della Fed, che è il canale per cui la vicenda smette di sostenere il metallo e comincia a pesargli contro. Giovedì 13 i prezzi alla produzione.',
  },
  sources: [
    { outlet: 'Reuters' },
    { outlet: 'Kpler', title: 'Dati sui transiti nello Stretto di Hormuz' },
    { outlet: 'Bureau of Labor Statistics', title: 'Calendario delle diffusioni' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Dal 5 agosto questo archivio misura la riapertura dello Stretto di Hormuz su un numero solo, e lo ha ripetuto undici volte: quante navi passano in un giorno, con una soglia di otto sotto la quale il transito non è normalizzato. È stata una scelta utile, perché ha impedito di scambiare sette annunci di distensione per un fatto. Ma quel numero è sempre arrivato in forma sparsa e di seconda mano — otto navi, poi trentatré in quattro giorni, poi due venerdì. Stamattina Kpler pubblica una serie, e la serie dice qualcosa di diverso: lunedì sono passate sei navi, quattro in entrata e due in uscita, ma la media degli ultimi dieci giorni è di circa undici al giorno.',
    },
    {
      kind: 'stats',
      title: 'Il conteggio, adesso con una fonte',
      caption:
        'Dati Kpler riportati da Reuters; il confronto con il periodo precedente al conflitto è quello indicato dalla stessa fonte.',
      items: [
        {
          label: 'Transiti lunedì',
          value: 'sei navi',
          tone: 'bear',
          note: 'Quattro in entrata e due in uscita',
        },
        {
          label: 'Media dieci giorni',
          value: '≈ undici al giorno',
          tone: 'warn',
          note: 'Sopra la soglia di otto seguita da questo archivio dal 5 agosto',
        },
        {
          label: 'Prima del conflitto',
          value: '130-140 al giorno',
          tone: 'bear',
          note: 'Il traffico resta circa il 90% sotto il livello normale',
        },
        {
          label: 'Esportazioni nette',
          value: '≈ 3 mln barili/giorno',
          tone: 'bear',
          note: 'Da 4,4 milioni la settimana precedente: quasi un terzo in meno',
        },
        {
          label: 'Brent',
          value: '88,09 $',
          tone: 'bear',
          note: 'Massimo dal 31 luglio, dopo il rialzo di circa il 5% di lunedì',
        },
        {
          label: 'WTI',
          value: '82,52 $',
          tone: 'bear',
          note: 'Anch’esso sui massimi dal 31 luglio',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Una media cambia la lettura di una soglia',
      anchor: 'media-cambia-lettura',
    },
    {
      kind: 'paragraph',
      text: 'Undici è sopra otto, e questo obbliga a una correzione che conviene fare subito e per esteso. La soglia degli otto transiti era stata scelta il 5 agosto come linea sotto la quale il passaggio non si può dire normalizzato, e da allora ogni rilevazione disponibile è finita sotto: le otto navi iniziali, i quattro al giorno ricavati dalle trentatré in quattro giorni, le due di venerdì. Su quella base questo archivio ha scritto più volte che il traffico non risaliva ma calava. La media di dieci giorni dice invece che il livello ordinario di questo periodo è stato più alto della soglia, e che le due navi di venerdì erano un minimo e non la misura.',
    },
    {
      kind: 'paragraph',
      text: 'Non è una smentita della conclusione di fondo, e va detto anche questo: undici navi contro le 130-140 di prima del conflitto significano un traffico ridotto di circa il 90%, cioè uno Stretto che resta in regime di eccezione. Ma è una correzione su come quel regime è stato descritto. Contare un giorno per volta, quando i giorni oscillano fra due e undici, produce un racconto che si muove con l’ultima rilevazione invece che con il fenomeno. La differenza fra le due cose è la stessa che c’è fra una fotografia e una serie storica, e per sei giorni qui c’erano soltanto fotografie.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il numero giusto non era il conteggio, erano i barili',
      text: 'C’è una seconda misura nella stessa nota, e vale più della prima: le esportazioni nette di greggio e prodotti raffinati attraverso lo Stretto sono scese a circa 3 milioni di barili al giorno dai 4,4 della settimana precedente. Conta i barili invece degli scafi, e la differenza non è cosmetica — una superpetroliera e una piccola nave prodotti valgono un transito ciascuna, ma non lo stesso greggio. Un calo di quasi un terzo in una settimana su una misura di volume dice della strozzatura più di quanto ne dica qualunque conteggio di navi, e da oggi questo archivio guarda anche quella.',
    },
    {
      kind: 'heading',
      text: 'Due richieste di risarcimento invece di una',
      anchor: 'due-richieste',
    },
    {
      kind: 'paragraph',
      text: 'Sul piano negoziale la giornata peggiora, e in un modo preciso. L’8 agosto questo archivio aveva registrato che la condizione iraniana per riaprire lo Stretto era diventata una compensazione statunitense, e aveva annotato che era di natura diversa dagli altri quattro punti aperti: quelli sono questioni tecniche che un negoziato chiude con una formula, un risarcimento è una posizione politica che nessun tavolo tecnico ha il mandato di concedere. Adesso Washington risponde chiedendo all’Iran risarcimenti per le vittime e i feriti attribuiti ad azioni iraniane.',
    },
    {
      kind: 'paragraph',
      text: 'Due pretese simmetriche non si annullano: si sommano. Quando una parte sola chiede un risarcimento, esiste almeno la possibilità che l’altra lo conceda in cambio di qualcosa; quando lo chiedono entrambe, la concessione di ciascuna diventa un’ammissione di colpa verso l’altra, e il costo politico di muoversi per primi cresce per tutti e due. È il motivo per cui questa notizia allunga la distanza dalla riapertura più di quanto farebbe un attacco in più: gli attacchi si contano, le posizioni di principio no.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Un vincolo meno stretto di come era descritto, e un negoziato più fermo',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Le due richieste simmetriche di risarcimento allontanano la riapertura più di quanto farebbe un episodio militare in più.',
          'Le esportazioni nette scendono di quasi un terzo in una settimana, da 4,4 a circa 3 milioni di barili al giorno: la strozzatura si stringe sulla misura che conta.',
          'Il greggio resta sui massimi dal 31 luglio senza restituire il rialzo del 5% di lunedì: per la prima volta in nove giorni il premio non si sgonfia entro la seduta.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'La media dei transiti a dieci giorni è di circa undici al giorno, sopra la soglia di otto: il passaggio è meno bloccato di come questo archivio lo ha descritto.',
          'Un greggio che resta sopra gli 88 dollari alimenta l’inflazione attesa, ed è il canale per cui la vicenda si gira contro il metallo.',
          'Il conteggio dei giorni singoli oscilla fra due e undici: usarlo come segnale produce un racconto che cambia con l’ultima rilevazione.',
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
      text: 'L’impostazione sull’orizzonte dei giorni resta neutrale con forza bassa. I due fatti della mattina si elidono quasi esattamente: il vincolo materiale è meno stretto di come era stato raccontato, ma la strada per scioglierlo è più lunga di ieri. Quello che non cambia è il canale: finché il greggio sta sopra gli 88 dollari, la vicenda di Hormuz arriva all’oro attraverso l’inflazione attesa e non attraverso la domanda di rifugio, e su quel canale un premio energetico più alto è un problema e non un aiuto.',
    },
    {
      kind: 'paragraph',
      text: 'La cosa da portarsi dietro riguarda però il metodo, e vale oltre questa mattina. Un metro scelto bene — le navi invece degli annunci — non basta se le rilevazioni arrivano una alla volta e da fonti diverse: si finisce per misurare la varianza del campionamento e scambiarla per il fenomeno. Da qui in avanti il conteggio di questo archivio ha una fonte con una serie, e accanto ha la misura in barili. Sono due numeri invece di uno, ed è il minimo per poter dire se una strozzatura si sta stringendo o allentando.',
    },
    {
      kind: 'note',
      text: 'I dati sui transiti e sulle esportazioni nette sono quelli attribuiti a Kpler e riportati da Reuters; la media di dieci giorni è indicata dalla stessa fonte e non è ricalcolata qui. Il confronto con i 130-140 transiti giornalieri precedenti al conflitto è il riferimento usato da questo archivio dal 5 agosto. I livelli di greggio sono rilevazioni della sessione asiatica e non chiusure ufficiali: servono a rendere verificabile il ragionamento e non sono obiettivi. La richiesta di risarcimenti è una posizione dichiarata e non un atto formale, e nessuna delle due parti ha finora ritirato la propria.',
    },
  ],
};
