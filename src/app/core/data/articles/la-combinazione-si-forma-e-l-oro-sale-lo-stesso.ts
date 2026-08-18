import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const laCombinazioneSiFormaELOroSaleLoStesso: Article = {
  slug: 'la-combinazione-si-forma-e-l-oro-sale-lo-stesso',
  categories: ['correlazioni', 'oro', 'petrolio', 'obbligazioni'],
  title: 'La combinazione si forma, e l’oro sale lo stesso',
  kicker: 'Correlazioni · L’invalidazione più dichiarata dell’archivio',
  dek:
    'Il Brent chiude a 90,87 dollari e il decennale al 4,712%: sono le due gambe della combinazione che ' +
    'cinque letture consecutive hanno indicato come quella che porta la direzione sotto il neutrale. Si è ' +
    'formata per la prima volta, e l’oro ha chiuso in rialzo dell’1,05% a 4.421,94.',
  publishedAt: '2026-08-17T22:30:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: ['Combinazione sorvegliata', 'TIC', 'Domanda estera', 'Premio a termine', 'Duration'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti, e per due ragioni distinte. I prezzi sono chiusure di seduta e non rilevazioni ' +
    'intermedie — Brent a 90,87, WTI a 84,50, oro a 4.421,94, decennale al 4,712%, trentennale al ' +
    '5,295-5,310% — quindi la combinazione si è formata su numeri definitivi. E i flussi TIC sono una ' +
    'diffusione ufficiale mensile del Tesoro americano, completa e non rivista in serata. Media sulla ' +
    'lettura: una sola seduta in cui un meccanismo dichiarato non produce la propria conseguenza non ' +
    'basta a dichiararlo sbagliato, e i TIC misurano giugno mentre la tensione che spiegano è di agosto. ' +
    'Bassa sulla previsione di che cosa faccia il metallo da qui, perché la configurazione che lo ' +
    'sostiene è la più stretta di tutta questa fase.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    horizon: 'breve',
    regime:
      'La direzione scende da rialzista a neutrale con inclinazione rialzista, e non per il prezzo — che ' +
      'è salito — ma per disciplina. Dal 14 agosto cinque letture consecutive hanno dichiarato che un ' +
      'Brent sopra i 90 dollari accompagnato da un decennale sopra il 4,695% avrebbe portato la direzione ' +
      'sotto il neutrale. Stasera quella combinazione si è formata su due chiusure: 90,87 e 4,712%. Un ' +
      'registro che alza la direzione quando una prova scatta, come è stato fatto tre ore fa, deve ' +
      'abbassarla quando scatta un’invalidazione, altrimenti misura la convenienza e non il mercato. Non ' +
      'scende però sotto il neutrale, perché la conseguenza che quella combinazione prometteva non è ' +
      'arrivata: l’oro ha chiuso a 4.421,94 con più 1,05%. Il meccanismo aveva una premessa e una ' +
      'conclusione, la premessa si è avverata e la conclusione no, e questo è un fatto sul meccanismo ' +
      'prima che sul metallo.',
  },
  takeaways: [
    'Il Brent ha chiuso a 90,87 dollari con più 2,35 e il WTI a 84,50 con più 2,10: è il primo superamento dei 90 in chiusura, e Reuters lo collega allo stallo completo della diplomazia fra Stati Uniti e Iran, al traffico ridottissimo a Hormuz e alle nuove minacce iraniane.',
    'Nella stessa seduta il decennale è salito al 4,712% e il trentennale al 5,295%: le due gambe della combinazione dichiarata da cinque letture consecutive dal 14 agosto sono presenti insieme per la prima volta.',
    'L’oro è salito lo stesso: 4.421,94 dollari con più 1,05%, con il Dollar Index a 99,51, minimo da giugno, e la probabilità di un rialzo a settembre attorno al 31% contro circa il 55% di una settimana fa.',
    'Alle 22:00 i flussi TIC di giugno aggiungono il lato della domanda a una spiegazione che finora era stata solo di offerta: gli acquisti esteri netti di titoli americani a lungo termine scendono a 207,1 miliardi da 262,8, e dopo gli aggiustamenti a 172,7 da 232,7.',
    'Il dettaglio sui Treasury è più netto del totale: gli investitori privati esteri ne hanno comprati per 16,6 miliardi contro 53,6 di maggio, e le istituzioni ufficiali estere sono state venditrici nette per 9,8 miliardi dopo aver comprato per 3,0. Il flusso complessivo resta però in entrata, a 133,5 miliardi contro 132,2.',
  ],
  sources: [
    {
      outlet: 'Reuters',
      title:
        'Chiusure di seduta: Brent a 90,87 dollari, WTI a 84,50, oro spot a 4.421,94 con più 1,05%, Dollar Index a 99,51, decennale al 4,712% e trentennale vicino al 5,30%',
      at: '17 agosto 2026',
    },
    {
      outlet: 'U.S. Department of the Treasury',
      title:
        'Treasury International Capital, giugno 2026: flusso complessivo in entrata per 133,5 miliardi, acquisti esteri netti di titoli a lungo termine a 207,1 miliardi',
      at: '17 agosto 2026',
    },
    {
      outlet: 'Reuters',
      title:
        'Il rialzo della parte lunga attribuito a disavanzo, offerta di debito ed emissione societaria, non a un nuovo irrigidimento atteso dalla banca centrale',
      at: '17 agosto 2026',
    },
    {
      outlet: 'Federal Reserve',
      title:
        'Riunione chiusa del Board sulla revisione dei tassi di sconto delle Reserve Banks, senza esito che modifichi la politica monetaria',
    },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Dal 14 agosto questo archivio ha ripetuto in cinque letture consecutive quale configurazione ' +
        'avrebbe portato la direzione sull’oro sotto il neutrale: un Brent sopra i 90 dollari accompagnato ' +
        'da un decennale sopra il 4,695%. Era la frase più ripetuta di tutta la settimana, ed è stata ' +
        'scritta ogni volta come cosa che non si era formata. Stasera si è formata, su due chiusure e non ' +
        'su due punte intraday. E il metallo ha chiuso in rialzo dell’1,05%.',
    },
    {
      kind: 'heading',
      text: 'Che cosa era stato dichiarato, e che cosa è successo',
      anchor: 'che-cosa-era-stato-dichiarato',
    },
    {
      kind: 'stats',
      title: 'Chiusure di lunedì 17 agosto',
      caption:
        'Chiusure di seduta e non rilevazioni intermedie: è la ragione per cui questa combinazione conta più delle volte in cui i singoli livelli erano stati sfiorati.',
      items: [
        {
          label: 'Brent',
          value: '90,87 $',
          tone: 'bear',
          note: 'Più 2,35 dollari. È la prima chiusura sopra i 90, dopo che il livello era stato solo avvicinato per quattro sedute',
        },
        {
          label: 'WTI',
          value: '84,50 $',
          tone: 'bear',
          note: 'Più 2,10 dollari, in linea con il movimento del Brent',
        },
        {
          label: 'Treasury 10 anni',
          value: '4,712%',
          tone: 'bear',
          note: 'Sopra il 4,695% richiesto dalla condizione e sopra il 4,701% del massimo di venerdì: la seconda gamba della combinazione',
        },
        {
          label: 'Treasury 30 anni',
          value: '5,295-5,310%',
          tone: 'bear',
          note: 'Vicino ai massimi dal 2007, con il costo-opportunità che continua a non rientrare',
        },
        {
          label: 'XAU/USD',
          value: '4.421,94 $',
          tone: 'bull',
          note: 'Più 1,05%. È la conseguenza che la combinazione prometteva, con il segno rovesciato',
        },
        {
          label: 'Dollar Index',
          value: '99,51',
          tone: 'bull',
          note: 'Minimo da giugno, con la probabilità di un rialzo a settembre attorno al 31% contro circa il 55% di una settimana fa',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Perché la direzione scende mentre il prezzo sale',
      text:
        'Tre ore fa la direzione è stata alzata a rialzista perché una prova dichiarata l’11 agosto si era ' +
        'verificata. La stessa disciplina obbliga adesso al movimento opposto: la combinazione dichiarata ' +
        'cinque volte come invalidazione si è formata, e un registro che onora le condizioni solo quando ' +
        'gli danno ragione smette di misurare qualcosa alla prima occasione. La direzione scende quindi di ' +
        'un gradino. Non scende sotto il neutrale, come la condizione chiedeva alla lettera, e la ragione ' +
        'va detta perché è una correzione al testo stesso di quella condizione: il meccanismo che ' +
        'giustificava la clausola — petrolio caro che alimenta attese di inflazione, rendimenti che salgono, ' +
        'metallo che cede — ha avuto la sua premessa e non ha prodotto la sua conclusione. Portare la ' +
        'direzione sotto il neutrale significherebbe applicare una regola dopo averla vista fallire.',
    },
    {
      kind: 'heading',
      text: 'I flussi TIC: il lato della domanda che mancava',
      anchor: 'i-flussi-tic',
    },
    {
      kind: 'paragraph',
      text:
        'Alle 22:00 arriva la diffusione mensile del Tesoro americano sui capitali internazionali, e ' +
        'aggiunge alla spiegazione della parte lunga la metà che finora mancava. Per una settimana questo ' +
        'archivio ha attribuito la tensione sui rendimenti lunghi a tre cose dal lato dell’offerta: il ' +
        'disavanzo cumulato oltre i 1.799 miliardi, i collocamenti del Tesoro, e da ieri l’emissione ' +
        'societaria legata agli investimenti in intelligenza artificiale. Il TIC guarda dall’altra parte, ' +
        'cioè a chi quei titoli dovrebbe comprarli.',
    },
    {
      kind: 'paragraph',
      text:
        'Il quadro complessivo non è di fuga: il flusso in entrata resta di 133,5 miliardi contro 132,2 di ' +
        'maggio, praticamente stabile, e gli Stati Uniti continuano ad attrarre capitale estero. È dentro ' +
        'la scadenza lunga che il numero si muove. Gli acquisti esteri netti di titoli a lungo termine ' +
        'scendono a 207,1 miliardi da 262,8, e dopo gli aggiustamenti a 172,7 da 232,7. Sul Treasury il ' +
        'dettaglio è più severo: gli investitori privati esteri comprano per 16,6 miliardi contro i 53,6 ' +
        'di maggio, e le istituzioni ufficiali estere passano da acquisti per 3,0 miliardi a vendite nette ' +
        'per 9,8. Non è un rifiuto, è un raffreddamento della domanda marginale proprio sulla scadenza ' +
        'dove il Tesoro deve collocare di più.',
    },
    {
      kind: 'note',
      text:
        'Due limiti del dato, e vanno tenuti entrambi. Il TIC misura giugno e viene pubblicato a metà ' +
        'agosto: non può spiegare il movimento di questa seduta, e chi lo usasse per farlo racconterebbe ' +
        'una coincidenza. E per questa serie non esiste un consenso di mercato affidabile, quindi il ' +
        'confronto corretto è con il mese precedente e non con un’attesa. Serve come conferma indipendente ' +
        'di un meccanismo già descritto, non come causa di un prezzo. Va classificata anche la riunione ' +
        'chiusa del Board della Federal Reserve di oggi: riguarda la revisione dei tassi di sconto delle ' +
        'Reserve Banks, è procedura regolare e non è una decisione sui Fed Fund. I livelli di prezzo ' +
        'citati servono a rendere verificabile il ragionamento e non sono obiettivi affidabili.',
    },
    {
      kind: 'balance',
      title: 'Il conto della seduta',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'La combinazione dichiarata cinque volte come invalidazione si è formata e non ha prodotto il suo effetto: il metallo ha chiuso in rialzo dell’1,05% con il Brent a 90,87 e il decennale al 4,712%.',
          'Il dollaro è sui minimi da giugno a 99,51 e la probabilità di un rialzo a settembre resta attorno al 31% contro circa il 55% di una settimana fa: il canale monetario continua a pagare il costo-opportunità.',
          'La scadenza che prezza la banca centrale resta ferma attorno al 4,16%, quindi la tensione è tutta sulla parte lunga e non è una riprezzatura della Fed.',
          'Il flusso TIC complessivo resta in entrata a 133,5 miliardi: non c’è una fuga di capitali dagli Stati Uniti, e la lettura sul debito va tenuta separata da quella sul dollaro.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Il Brent ha chiuso sopra i 90 dollari per la prima volta: il canale che trasforma il rischio geopolitico in attese di inflazione è aperto, e questa volta su una chiusura e non su una punta.',
          'Il TIC dà una spiegazione di domanda al premio a termine che finora era stata solo di offerta: acquisti privati esteri di Treasury a 16,6 miliardi da 53,6 e istituzioni ufficiali venditrici nette per 9,8.',
          'Il trentennale resta fra il 5,295% e il 5,310%, cioè un costo-opportunità che non rientra da otto sedute: è una pendenza e non un evento, ed è per questo che logora.',
          'Una sola seduta non basta a dichiarare sbagliato un meccanismo: la premessa può produrre la conseguenza con qualche giorno di ritardo, ed è successo altre volte in questo archivio.',
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
        'Il fatto da registrare non è la chiusura dell’oro ma quella del Brent, e non per il livello: ' +
        'perché toglie a questo archivio la sua clausola di salvezza. Per cinque letture la lettura ' +
        'rialzista è stata tenuta in piedi anche dicendo, ogni volta, che sarebbe caduta se fosse ' +
        'arrivata quella combinazione. Adesso è arrivata. O la clausola era scritta male, o il metallo la ' +
        'sta smentendo: non c’è una terza possibilità, e distinguere fra le due richiede più di una ' +
        'seduta.',
    },
    {
      kind: 'paragraph',
      text:
        'La cosa utile da fare adesso non è scegliere fra le due, ma dire che cosa le separerebbe. Se il ' +
        'canale funziona con ritardo, nelle prossime sedute si vedrà il metallo cedere mentre il greggio ' +
        'resta sopra i 90 e la parte lunga non rientra: sarebbe la clausola giusta applicata con qualche ' +
        'ora di scarto. Se invece l’oro tiene sopra i 4.400 con il Brent oltre i 91 e il trentennale sopra ' +
        'il 5,30%, allora la clausola descriveva un mondo in cui il dollaro non stava sui minimi da due ' +
        'mesi, e va riscritta includendo il cambio. Il TIC, nel frattempo, dice una cosa scomoda per ' +
        'entrambe le ipotesi: la domanda estera per la duration lunga si è raffreddata già a giugno, e se ' +
        'quel raffreddamento continua la parte lunga resta alta a prescindere da che cosa faccia il ' +
        'petrolio.',
    },
  ],
  invalidation: [
    'Un oro che chiude sotto i 4.400 dollari entro mercoledì 19 agosto con il Brent ancora sopra i 90: direbbe che la combinazione dichiarata cinque volte era scritta bene e ha semplicemente agito con un giorno di ritardo, e la direzione andrebbe portata sotto il neutrale come quella clausola chiedeva.',
    'Un Dollar Index che chiude sopra 99,935, cioè sopra il massimo del 13 agosto, entro venerdì 21 agosto: toglierebbe il solo sostegno che oggi spiega perché il metallo abbia assorbito la combinazione, e la lettura perderebbe la sua eccezione invece della sua direzione.',
    'Un biennale che si porta sopra il 4,218%, cioè sopra il massimo del 12 agosto, entro venerdì 21 agosto: direbbe che la tensione ha smesso di essere confinata alla parte lunga ed è diventata una riprezzatura della banca centrale, che è il caso in cui questo archivio non ha mai visto il metallo reggere.',
    'Un trentennale che rientra sotto il 5,213% della chiusura del 13 agosto entro venerdì 21 agosto: toglierebbe l’oggetto stesso della lettura, perché non ci sarebbe più alcun costo-opportunità eccezionale da assorbire.',
    'Una diffusione TIC di luglio, in uscita a metà settembre, con acquisti esteri netti di titoli a lungo termine sopra i 262,8 miliardi di maggio: direbbe che il raffreddamento di giugno era un mese isolato e non una tendenza, e la gamba di domanda aggiunta stasera al premio a termine andrebbe tolta.',
  ],
  nextEvent: {
    when: 'Mercoledì 19 agosto',
    title: 'Verbali della riunione del FOMC del 28-29 luglio',
    detail:
      'Arrivano nel momento in cui la lettura poggia su una sola gamba, cioè un dollaro sui minimi da ' +
      'giugno reso possibile da una probabilità di rialzo a settembre attorno al 31%. I verbali dicono ' +
      'con quali argomenti quella riunione è arrivata alla pausa, e un tono più restrittivo del previsto ' +
      'toglierebbe proprio quel sostegno mentre il Brent sta sopra i 90 e il trentennale sopra il 5,29%: ' +
      'sarebbe la prima volta in questa fase che tutti e tre i canali spingono nella stessa direzione. ' +
      'Prima, martedì 18 agosto alle 14:30, escono i prezzi all’import e all’export di luglio insieme ai ' +
      'dati sull’edilizia residenziale.',
  },
};
