/**
 * quindici-navi-colpite-e-il-greggio-riparte
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const adnocQuindiciNavi: Article = {
  slug: 'quindici-navi-colpite-e-il-greggio-riparte',
  categories: ['rotte-e-approvvigionamento', 'petrolio', 'medio-oriente', 'oro'],
  title: 'Quindici navi colpite, e il greggio riparte',
  kicker: 'Rotte · Il costo dichiarato da chi lo paga',
  dek:
    'ADNOC dichiara che quindici sue navi sono state colpite da missili o droni nello Stretto di Hormuz ' +
    'dall’inizio del conflitto, tre soltanto questa settimana, con un morto e venti feriti. Il Brent è passato ' +
    'da meno 1,01% a più 1,02% in poco più di due ore. Per sei giorni il premio di rischio non si era formato ' +
    'contro sei annunci diplomatici: si forma adesso, contro un’azienda che dichiara quanto le sta costando.',
  publishedAt: '2026-08-07T17:25:00+02:00',
  author: AUTHOR,
  readingMinutes: 6,
  tags: ['ADNOC', 'Hormuz', 'Premio di rischio', 'Vincoli', 'Divergenza oro-greggio'],
  instruments: ['Brent', 'XAU/USD', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'media',
    regime:
      'La direzione non cambia, la ragione sì, e le due ragioni hanno vite diverse. Alle 15:05 questo archivio ' +
      'aveva scritto che l’oro saliva mentre il greggio scendeva, e che quella divergenza era la prova che a ' +
      'muovere il metallo fossero i tassi e non il rischio. Due ore dopo la divergenza si è chiusa: il Brent è ' +
      'a 83,33 dollari, più 1,02%, e sale insieme all’oro. Il canale dei tassi regge ma si è consumato — il ' +
      'biennale ha restituito metà del calo — e quello che ha preso il suo posto è un premio di rischio, che ' +
      'questo archivio ha visto sgonfiarsi cinque volte in una settimana.',
    horizon: 'medio',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti che reggono la lettura: la dichiarazione di ADNOC è di un’azienda che parla dei propri ' +
    'mezzi e dei propri morti, non una ricostruzione di stampa, ed è riportata con i numeri; i prezzi sono ' +
    'rilevazioni con l’ora accanto. Media sulla conclusione, e per una ragione precisa: che il premio si sia ' +
    'formato è un fatto misurato, che duri è esattamente ciò che questo archivio ha visto non accadere sei ' +
    'volte in sei giorni. Va segnalato inoltre che un commento attribuito al presidente della Fed di Richmond ' +
    'sul rapporto occupazionale non è stato verificato: non entra in questa lettura.',
  takeaways: [
    'ADNOC, la compagnia petrolifera statale di Abu Dhabi, dichiara che quindici sue navi sono state colpite da missili o droni nello Stretto di Hormuz dall’inizio del conflitto, tre soltanto questa settimana, con un morto e venti feriti fra gli equipaggi.',
    'L’azienda dice che gli attacchi stanno avendo un impatto significativo sulle operazioni e che sta prendendo misure per proteggere personale e mezzi, continuando a servire i clienti «per quanto possibile». Dallo Stretto passa circa un quinto del consumo mondiale di petrolio.',
    'Il greggio ha girato: il Brent è a 83,33 dollari, più 1,02%, dopo essere stato a 81,66 e meno 1,01% alle 14:57. Sono due punti percentuali di inversione in poco più di due ore.',
    'Questo chiude la divergenza su cui poggiava l’analisi delle 15:05: l’oro saliva mentre il greggio scendeva, e quella era la prova che a muoverlo fossero i tassi. Adesso salgono insieme — oro a 4.354,98 dollari, più 2,70% — e la prova non c’è più.',
    'Il canale dei tassi regge ma si è consumato: il biennale è a 4,202% dopo un minimo di 4,158%, cioè ha restituito metà del calo, e la probabilità di un rialzo a settembre è risalita al 43,7% dal 41,7%.',
  ],
  invalidation: [
    'Un Brent che rientra sotto gli 82 dollari entro la seduta: direbbe che il mercato ha letto la dichiarazione di ADNOC come rumore, e che il premio si è già sgonfiato per la settima volta in sette giorni.',
    'Un oro spot che rientra sotto i 4.300 dollari, che cancellerebbe il movimento del rapporto occupazionale e con esso l’altra gamba di questa lettura.',
    'Una probabilità di rialzo a settembre che risale sopra il 50%, cioè che torna a essere lo scenario più probabile.',
    'Un indice dei prezzi mercoledì 12 agosto sopra le attese del 3,4% annuo, o un dato di fondo sopra il 2,5%: con il greggio di nuovo in salita, sarebbe la combinazione che rimette il rialzo di settembre sul tavolo.',
    'Prima di tutte queste, e senza aspettare la rottura: un Brent sopra gli 84 dollari con il biennale che risale sopra il 4,25%. Sarebbe il premio energetico che smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui, che è la regola dichiarata da questo archivio il 5 agosto e mai cambiata.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto alle 14:30',
    title: 'Indice dei prezzi al consumo statunitense, luglio',
    detail:
      'Attese al 3,4% annuo dal 3,5%, con l’indice di fondo al 2,5% dal 2,6%. Resta l’unico appuntamento con una data certa, e da oggi conta il doppio: se il greggio tiene i livelli di adesso, il dato di mercoledì misura un mese in cui l’energia era più bassa, ma la Fed lo leggerà avendo davanti un Brent risalito. La vicenda di Hormuz una data non ce l’ha, e non l’ha mai avuta.',
  },
  sources: [
    { outlet: 'ADNOC', title: 'Dichiarazione del 7 agosto sugli attacchi a navi e personale' },
    { outlet: 'Gulf News' },
    { outlet: 'Investing.com' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'ADNOC, la compagnia petrolifera statale di Abu Dhabi, ha dichiarato che quindici sue navi sono state colpite da missili o droni nello Stretto di Hormuz dall’inizio del conflitto, tre soltanto questa settimana, con un morto e venti feriti fra gli equipaggi. Dice che gli attacchi stanno avendo un impatto significativo sulle operazioni e che sta prendendo tutte le misure necessarie, in coordinamento con le autorità, per proteggere persone e mezzi continuando a servire i clienti «per quanto possibile». Nella stessa giornata il Brent ha girato di segno.',
    },
    {
      kind: 'stats',
      title: 'Dove siamo',
      caption: 'Rilevazioni delle 15:55-17:20 del 7 agosto, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Navi ADNOC colpite',
          value: 'quindici',
          tone: 'bear',
          note: 'Dall’inizio del conflitto; tre questa settimana, un morto e venti feriti',
        },
        {
          label: 'Brent',
          value: '83,33 $',
          tone: 'warn',
          note: 'Più 1,02%: alle 14:57 era 81,66 con meno 1,01%',
        },
        {
          label: 'XAU/USD spot',
          value: '4.354,98 $',
          tone: 'bull',
          note: 'Più 2,70%, massimo di giornata 4.371,89',
        },
        {
          label: 'Treasury 2 anni',
          value: '4,202%',
          tone: 'warn',
          note: 'Minimo 4,158%: metà del calo del dato è stata restituita',
        },
        {
          label: 'Dollar Index',
          value: '99,435',
          tone: 'bull',
          note: 'Meno 0,37%, ancora sotto la soglia di 99,50',
        },
        {
          label: 'Rialzo Fed a settembre',
          value: '43,7%',
          tone: 'bull',
          note: 'Da 41,7%: sotto la metà, ma in risalita',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Perché questa dichiarazione non è il settimo annuncio',
      anchor: 'non-e-un-annuncio',
    },
    {
      kind: 'paragraph',
      text: 'Da sei giorni la lettura di questo archivio su Hormuz poggia su una distinzione sola: le preferenze — quello che i decisori dichiarano di volere — non spostano niente, i vincoli materiali sì. È il quadro descritto in /metodologia, ed è il motivo per cui la riapertura dello Stretto qui viene misurata sul conteggio delle navi e non sul numero dei comunicati. Sei annunci di distensione in quattro giorni non hanno mosso il traffico di una unità, e a ognuno di quegli annunci il prezzo del greggio aveva reagito meno del precedente.',
    },
    {
      kind: 'paragraph',
      text: 'La dichiarazione di ADNOC sta dall’altra parte di quella distinzione, e conviene dire con precisione perché. Non è un governo che annuncia un’intenzione, e non è la stampa che ricostruisce un piano: è l’azienda che possiede le navi che dice quante gliene hanno colpite e quanti uomini ha perso. Nessuno dichiara un danno operativo ai propri clienti per posizionarsi in un negoziato: il costo lo paga chi parla, e questo rende la dichiarazione diagnostica in un modo in cui un comunicato congiunto non lo è. È la stessa asimmetria per cui, nell’altra direzione, un conteggio di transiti fermo vale più di sette dichiarazioni di progresso.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il vincolo che si scioglie una seconda volta, e per un motivo diverso',
      text: 'Il 6 agosto il vincolo «il premio di rischio sul greggio non si forma» si era sciolto sopra gli 82 dollari, e l’innesco era stato una bozza parlamentare iraniana. Questa mattina il premio si era rigonfiato al contrario, con il Brent sceso a 81,52 sui segnali di distensione fra Iran e Paesi del Golfo. Adesso si riforma una terza volta in due giorni, e stavolta l’innesco è un fatto materiale invece di un documento. Un vincolo che si scioglie e si riforma tre volte in quarantotto ore non è un vincolo: è un prezzo che oscilla. Va detto, perché è la parte più debole di questa lettura.',
    },
    {
      kind: 'heading',
      text: 'La prova di due ore fa non vale più',
      anchor: 'la-prova-scaduta',
    },
    {
      kind: 'paragraph',
      text: 'Alle 15:05, mezz’ora dopo il rapporto occupazionale, questo archivio ha pubblicato un’analisi il cui argomento centrale era una divergenza: l’oro saliva del 2,84% mentre il Brent scendeva dell’1,01%, e siccome una corsa al rifugio farebbe salire entrambi, quel disaccordo era la firma di un movimento sui tassi. Su quella base l’impostazione era passata a rialzista.',
    },
    {
      kind: 'paragraph',
      text: 'Quella prova adesso non c’è più. Il Brent è a 83,33 dollari, più 1,02%: in poco più di due ore ha percorso due punti percentuali nella direzione opposta, e sale insieme all’oro. Il fatto che la conclusione resti la stessa non autorizza a fingere che il ragionamento sia intatto — una lettura giusta per la ragione sbagliata è fragile esattamente quanto una lettura sbagliata, e si rompe senza preavviso quando la ragione vera viene meno.',
    },
    {
      kind: 'balance',
      title: 'Le due gambe, e quanto pesano davvero',
      left: {
        title: 'Il canale dei tassi',
        tone: 'warn',
        items: [
          'Regge ma si è consumato: il biennale è a 4,202% dopo un minimo di 4,158%, cioè ha restituito metà del calo seguito al dato.',
          'La probabilità di un rialzo a settembre è risalita al 43,7% dal 41,7%: resta sotto la metà, quindi il caso base non cambia, ma la direzione della correzione è una sola.',
          'Il Dollar Index a 99,435 è l’unica delle tre misure che non ha ancora restituito quasi nulla, ed è la conferma che tiene meglio.',
          'Ha una scadenza dichiarata e vicina: mercoledì alle 14:30.',
        ],
      },
      right: {
        title: 'Il premio di rischio',
        tone: 'bear',
        items: [
          'Poggia su un fatto materiale e quantificato, che è la specie di prova che questo archivio pesa di più.',
          'Ma è la stessa gamba che si è sgonfiata cinque volte in una settimana, ogni volta più in fretta della precedente.',
          'Nessuno dei nodi che tengono chiuso lo Stretto si è mosso: sanzioni sull’ente che incasserebbe i pedaggi, clausola assicurativa che toglie la copertura a chi paga, transiti a 33 navi in quattro giorni contro 50 la settimana prima.',
          'Sopra gli 84 dollari smette di sostenere il metallo e ricomincia a lavorargli contro attraverso i rendimenti: è la regola dichiarata il 5 agosto, e mancano 67 centesimi.',
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
      text: 'L’impostazione su XAU/USD resta rialzista con forza media, sull’orizzonte dei giorni. Resta rialzista perché nessuna delle soglie dichiarate stamattina è stata toccata e perché entrambe le gambe spingono ancora nella stessa direzione. Non sale ad alta, e la ragione non è prudenza generica: sono due sostegni parziali invece di uno solido. Il canale dei tassi ha restituito metà del suo movimento in tre ore; il premio di rischio è quello che in questa stessa settimana si è formato e sgonfiato tre volte. Sommare due gambe che zoppicano non fa una gamba sana.',
    },
    {
      kind: 'paragraph',
      text: 'C’è un punto che vale oltre la giornata. La condizione di logoramento scritta alle 15:05 diceva: un Brent che torna sopra gli 84 dollari mentre l’oro sale con lui toglierebbe la prova su cui poggia quell’analisi. È stata scritta due ore fa per uno scenario che sembrava lontano, e adesso dista sessantasette centesimi. Non è ancora scattata e non va registrata come se lo fosse — è la stessa disciplina che stamattina alle 08:58 ha tenuto in piedi una lettura per un dollaro e dodici — ma il senso di dichiarare una soglia in anticipo è anche questo: accorgersi di quanto ci si è avvicinati mentre si guardava altrove.',
    },
    {
      kind: 'note',
      text: 'La dichiarazione di ADNOC è riportata da Gulf News e attribuita all’azienda: i numeri sulle navi colpite e sulle vittime sono quelli forniti dalla compagnia e non risultano da una verifica indipendente. Il testo grezzo da cui nasce questa analisi attribuiva inoltre al presidente della Fed di Richmond un giudizio sul rapporto occupazionale — un mercato del lavoro «né debole né teso» — che questo archivio non è riuscito a verificare: nessuna delle fonti consultate riporta quelle parole per la giornata del 7 agosto, e per questo non entrano nella lettura. I livelli citati sono rilevazioni delle 15:55-17:20 e servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi. I riferimenti sull’oro sono sul prezzo spot.',
    },
  ],
};
