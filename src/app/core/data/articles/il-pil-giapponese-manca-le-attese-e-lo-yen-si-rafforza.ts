import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const ilPilGiapponeseMancaLeAttese: Article = {
  slug: 'il-pil-giapponese-manca-le-attese-e-lo-yen-si-rafforza',
  categories: ['banche-centrali-estere', 'valute', 'asia', 'oro'],
  title: 'Il PIL giapponese manca le attese, e lo yen si rafforza lo stesso',
  kicker: 'Banche centrali estere · Un dato che non trasmette',
  dek:
    'Il secondo trimestre giapponese cresce dell’1,1% annualizzato contro il 2,0% atteso, con consumi ' +
    'fermi e investimenti in calo: sulla carta è un dato che complica la stretta della Banca del ' +
    'Giappone. Lo yen però si rafforza e il dollaro scende, cioè il cambio si muove nel verso opposto a ' +
    'quello che il dato suggerirebbe.',
  publishedAt: '2026-08-17T06:40:00+02:00',
  author: AUTHOR,
  readingMinutes: 5,
  tags: ['PIL Giappone', 'Banca del Giappone', 'Yen', 'Consumi privati', 'Canale valutario'],
  instruments: ['USD/JPY', 'XAU/USD', 'DXY'],
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sul dato, che è una diffusione statistica con le sue componenti e i suoi scostamenti dal ' +
    'consenso, e sui livelli di cambio, che sono prezzi osservati in una sessione aperta. Media sulla ' +
    'lettura per la banca centrale, che resta una deduzione: consumi e salari sono fra le cose che ' +
    'l’istituto ha dichiarato di guardare, ma nessuna comunicazione collega ancora questo trimestre al ' +
    'percorso dei tassi. Bassa sull’effetto per l’oro, e il testo spiega perché: il dato non ha un canale ' +
    'proprio, perché quello valutario si è mosso dal lato americano.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    horizon: 'medio',
    regime:
      'Sull’arco dei giorni il dato toglie linearità all’ipotesi di una stretta giapponese, e questo ' +
      'sottrae una voce dall’elenco dei rendimenti globali che un metallo senza cedole deve battere: è ' +
      'marginalmente favorevole. Nella stessa direzione non va però il cambio, che è l’unico canale ' +
      'attraverso cui il Giappone raggiunge davvero il prezzo dell’oro, e che stamattina si muove per ' +
      'ragioni americane. Un dato debole che dovrebbe indebolire lo yen e invece lo trova più forte è un ' +
      'dato senza trasmissione: va registrato, non prezzato.',
  },
  takeaways: [
    'Il PIL giapponese del secondo trimestre cresce dell’1,1% annualizzato contro il 2,0% atteso, e dello 0,3% sul trimestre contro lo 0,5% previsto. Il trimestre precedente è stato rivisto a circa più 1,9% annualizzato.',
    'La composizione è più debole del totale: i consumi privati restano fermi contro un più 0,5% atteso, e gli investimenti delle imprese scendono dell’1,2% contro un più 0,4% previsto.',
    'Sono proprio consumi e salari le voci che la Banca del Giappone ha dichiarato di osservare prima di decidere un altro rialzo: il dato rende meno lineare l’ipotesi di una stretta aggressiva, senza toglierle il problema dell’inflazione e di uno yen debole.',
    'La reazione valutaria va però nel verso opposto a quello che il dato suggerirebbe: lo yen si rafforza dello 0,2% a circa 159,06 per dollaro e il Dollar Index scende dello 0,1% a circa 99,52, vicino ai minimi del mese. Reuters attribuisce il movimento al peso maggiore dato ai dati americani deboli.',
    'La probabilità di una pausa della Federal Reserve a settembre resta attorno al 66,9%: è il numero che sta muovendo il cambio, non il PIL giapponese.',
  ],
  sources: [
    {
      outlet: 'Cabinet Office del Giappone',
      title: 'Prima stima del prodotto interno lordo del secondo trimestre 2026',
      at: '17 agosto 2026',
    },
    {
      outlet: 'Reuters',
      title:
        'Reazione dei cambi al PIL giapponese: il mercato dà più peso ai dati americani deboli. Yen a 159,06, Dollar Index a 99,52',
      at: '17 agosto 2026',
    },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Il secondo trimestre giapponese è uscito nettamente sotto le attese, e la parte interessante non ' +
        'è il numero ma quello che il cambio ha fatto subito dopo. Un dato così, che indebolisce ' +
        'l’argomento per un altro rialzo della banca centrale, dovrebbe far scendere lo yen; lo yen si è ' +
        'invece rafforzato, e il dollaro è scivolato ancora. È il tipo di reazione che dice più sul canale ' +
        'che sul fatto.',
    },
    {
      kind: 'heading',
      text: 'Il dato, e la sua composizione',
      anchor: 'il-dato',
    },
    {
      kind: 'stats',
      title: 'PIL giapponese, secondo trimestre 2026',
      caption:
        'Prima stima, quindi soggetta a revisione. I livelli di cambio sono rilevazioni della sessione asiatica, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Crescita annualizzata',
          value: '+1,1%',
          tone: 'warn',
          note: 'Contro un più 2,0% atteso: nove decimi di scarto dal consenso, e il trimestre precedente è stato rivisto a circa più 1,9%',
        },
        {
          label: 'Trimestre su trimestre',
          value: '+0,3%',
          tone: 'warn',
          note: 'Contro un più 0,5% previsto: la crescita non si ferma, rallenta',
        },
        {
          label: 'Consumi privati',
          value: 'fermi',
          tone: 'bear',
          note: 'Contro un più 0,5% atteso: è la voce che la banca centrale ha dichiarato di guardare prima di decidere un altro rialzo',
        },
        {
          label: 'Investimenti delle imprese',
          value: '− 1,2%',
          tone: 'bear',
          note: 'Contro un più 0,4% previsto: la componente che si è mossa di più, e nel verso sbagliato',
        },
        {
          label: 'Yen',
          value: '≈ 159,06 per dollaro',
          tone: 'warn',
          note: 'Più forte dello 0,2%: il verso opposto a quello che un dato debole per la banca centrale suggerirebbe',
        },
        {
          label: 'Dollar Index',
          value: '≈ 99,52',
          tone: 'bull',
          note: 'Meno 0,1%, vicino ai minimi del mese: è da qui che arriva il movimento del cambio',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Che cosa cambia per la banca centrale, e che cosa no',
      text:
        'Il 10 agosto questo archivio ha letto il riassunto delle opinioni della Banca del Giappone come ' +
        'un’intenzione dichiarata e non un atto: la direzione era scritta, la data no. L’esito registrato ' +
        'due giorni dopo aggiungeva che quello che si era mosso era l’attesa di mercato, che aveva ' +
        'anticipato il prossimo rialzo da dicembre a settembre. Questo dato agisce esattamente su ' +
        'quell’attesa, e agisce contro: consumi fermi e investimenti in calo sono le voci che l’istituto ' +
        'aveva indicato come proprie condizioni, e arrivano entrambe più debolmente del previsto. Resta ' +
        'quello che il dato non tocca, e non è poco: l’inflazione giapponese e la debolezza dello yen sono ' +
        'i due problemi che spingono nella direzione opposta, e nessuno dei due si è attenuato stamattina.',
    },
    {
      kind: 'heading',
      text: 'Un dato che non ha trasmesso',
      anchor: 'non-ha-trasmesso',
    },
    {
      kind: 'paragraph',
      text:
        'Qui sta la parte che vale la pena registrare. Se il mercato avesse prezzato il PIL giapponese, lo ' +
        'yen si sarebbe indebolito: una banca centrale che rallenta la propria stretta rende la sua valuta ' +
        'meno attraente. È successo il contrario — yen più forte dello 0,2% a 159,06, Dollar Index a 99,52 ' +
        'in calo — e Reuters dà la ragione senza girarci intorno: il mercato sta dando più peso ai dati ' +
        'americani deboli della settimana scorsa che al trimestre giapponese. Il numero che governa il ' +
        'cambio stamattina non è l’1,1% di Tokyo, è il 66,9% di probabilità che la Federal Reserve resti ' +
        'ferma a settembre.',
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Per l’oro è un fatto senza canale proprio',
      text:
        'Il Giappone raggiunge il prezzo dell’oro per due vie, e stamattina nessuna delle due funziona come ' +
        'il dato suggerirebbe. La prima è l’elenco dei rendimenti globali che un metallo senza cedole deve ' +
        'battere: una stretta giapponese meno probabile ne accorcia l’elenco, ed è marginalmente ' +
        'favorevole. La seconda è il cambio, ed è quella che conta davvero, perché l’oro è quotato in ' +
        'dollari: uno yen più debole significherebbe un dollaro più forte e quindi un metallo più caro per ' +
        'chi non paga in dollari. Ma lo yen si è rafforzato e il dollaro è scivolato, e per una ragione che ' +
        'non ha nulla a che vedere con Tokyo. Il dato va quindi archiviato come informazione sul percorso ' +
        'della banca centrale giapponese, non come catalizzatore: è la differenza fra un fatto e un fatto ' +
        'con un canale.',
    },
    {
      kind: 'note',
      text:
        'Il calendario economico di questo sito copre Stati Uniti e area euro, quindi per questa diffusione ' +
        'non esiste una serie storica consultabile qui: le categorie di questa analisi rimandano alla banca ' +
        'centrale e al cambio, non a uno storico di dati. I livelli citati sono rilevazioni della sessione ' +
        'asiatica e servono a rendere verificabile il ragionamento, non sono obiettivi affidabili.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text:
        'Direzione neutrale con inclinazione rialzista e forza bassa: invariate, e questa volta la forza ' +
        'bassa non è prudenza generica ma la conseguenza diretta dell’osservazione. Un dato che dovrebbe ' +
        'muovere una valuta in un verso e la trova mossa nel verso opposto da un’altra causa non ha un peso ' +
        'proprio da assegnare. Il quadro che sostiene il metallo resta quello americano — pausa della ' +
        'Federal Reserve prezzata attorno a due terzi, dollaro vicino ai minimi del mese — e il trimestre ' +
        'giapponese entra come una voce in più su un percorso lento, non come un catalizzatore.',
    },
    {
      kind: 'paragraph',
      text:
        'Il momento in cui questo dato conterà davvero è dichiarabile in anticipo, ed è la riunione di ' +
        'settembre: questo archivio aveva registrato che gli analisti attendono un movimento dall’1,00% ' +
        'all’1,25% al 17-18 settembre. Se quella riunione arriva senza rialzo e con un riferimento ' +
        'esplicito a consumi e investimenti, allora il trimestre di oggi sarà stato l’input di una ' +
        'decisione invece che una statistica assorbita in una notte.',
    },
  ],
  invalidation: [
    'Una comunicazione della Banca del Giappone — verbale, riassunto delle opinioni o intervento del governatore — che colleghi esplicitamente questo trimestre al percorso dei tassi entro la riunione del 17-18 settembre: farebbe passare il dato da statistica assorbita a input dichiarato di una decisione, e la lettura andrebbe alzata di grado.',
    'Uno yen che si indebolisce oltre 161 per dollaro entro venerdì 21 agosto: direbbe che il canale valutario ha finito per prezzare il dato giapponese con qualche giorno di ritardo, e cadrebbe l’osservazione centrale di questa lettura, cioè che il dato non ha trasmesso.',
    'Un Dollar Index che risale sopra 99,855, la chiusura di giovedì 13 agosto: toglierebbe la gamba americana che oggi spiega il movimento del cambio, e allora il trimestre giapponese tornerebbe a essere la causa candidata di quello che si vede sullo yen.',
    'Una revisione della prima stima del PIL del secondo trimestre sopra il più 2,0% annualizzato atteso: il dato di oggi è preliminare, e una revisione che lo riporti sul consenso cancellerebbe la premessa di tutta questa analisi.',
    'Una probabilità di pausa della Federal Reserve a settembre che scende sotto il 60% entro venerdì 21 agosto: sposterebbe il peso dal canale americano a quello giapponese, che è l’opposto di quanto descritto qui, e il cambio tornerebbe a essere leggibile dal lato di Tokyo.',
  ],
  nextEvent: {
    when: '17-18 settembre',
    title: 'Riunione della Banca del Giappone',
    detail:
      'È la data in cui si vede se il trimestre di oggi ha contato. Questo archivio aveva registrato che ' +
      'gli analisti attendono un movimento dall’1,00% all’1,25%: un rialzo confermato nonostante consumi ' +
      'fermi e investimenti in calo direbbe che la banca centrale guarda l’inflazione e lo yen più della ' +
      'crescita, una pausa motivata con quelle due voci direbbe il contrario. Prima di allora il dato da ' +
      'guardare non è giapponese ma americano, perché è da lì che il cambio si sta muovendo.',
  },
};
