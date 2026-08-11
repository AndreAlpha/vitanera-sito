/**
 * nove-millesimi-sotto-la-soglia-e-la-soglia-era-tonda
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const noveMillesimiSottoLaSoglia: Article = {
  slug: 'nove-millesimi-sotto-la-soglia-e-la-soglia-era-tonda',
  categories: ['debito-pubblico', 'obbligazioni', 'oro', 'usa'],
  title: 'Nove millesimi sotto la soglia, e la soglia era tonda',
  kicker: 'Debito pubblico · Asta a tre anni',
  dek:
    'Il Tesoro colloca 58 miliardi di titoli a tre anni al 4,291%, mezzo punto base sotto il quotato ' +
    'pre-asta. Un’ora fa questa scheda aveva scritto che sopra il 4,30% la lettura sarebbe caduta: ' +
    'mancano nove millesimi. È la terza soglia sfiorata oggi, e tutte e tre erano numeri tondi.',
  publishedAt: '2026-08-11T20:10:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: ['Asta', 'Stop-through', 'Soglie', 'Numeri tondi', 'Curva dei rendimenti'],
  instruments: ['XAU/USD', 'Treasury', 'Brent', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'L’asta a tre anni ha tolto un rischio invece di aggiungere una spinta, ed è la differenza che tiene ' +
      'ferma la forza. Il Tesoro ha collocato 58 miliardi al 4,291%, circa mezzo punto base sotto il ' +
      'quotato pre-asta — quindi con domanda migliore di quanto il mercato prezzasse pochi minuti prima — ' +
      'e dopo l’aggiudicazione il decennale è rientrato nell’area del 4,69% dopo aver trattato sopra ' +
      '4,72-4,73%. L’oro chiude la terza seduta positiva consecutiva, a 4.383 dollari sul contratto ' +
      'americano con più 0,49%, ma i 4.400 restano non presi per la terza volta in una giornata. Quello ' +
      'che l’asta dice è che sulla scadenza che prezza la Fed non è stato chiesto un premio nonostante un ' +
      'rendimento undici punti base sopra quello di luglio; quello che non dice è niente sulla parte lunga ' +
      'della curva, dove la tensione si è concentrata e dove le prove vere sono mercoledì e giovedì.',
    horizon: 'breve',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti: il risultato di un’asta del Tesoro è un esito ufficiale, la chiusura del contratto ' +
    'americano sull’oro è una chiusura vera e non una rilevazione intraday, e il confronto con l’asta di ' +
    'luglio usa numeri pubblicati. Media sulla lettura, per due ragioni dichiarate. La prima è che una ' +
    'buona ricezione su tre anni dice poco su dieci e trenta, che sono le scadenze dove la tensione di ' +
    'questi giorni si è concentrata: attribuirle il rientro del decennale è plausibile ma non dimostrato, ' +
    'e la prova arriva mercoledì e giovedì. La seconda riguarda la parte metodologica di questo testo: ' +
    'l’osservazione sulle soglie sfiorate poggia su una giornata sola e su tre casi, che è un campione ' +
    'troppo piccolo per chiamarla una regolarità.',
  takeaways: [
    'Il Tesoro statunitense ha collocato 58 miliardi di dollari di titoli a tre anni con rendimento di aggiudicazione al 4,291%, circa mezzo punto base sotto il livello quotato prima dell’asta: la domanda è stata migliore di quanto il mercato stesse prezzando pochi minuti prima.',
    'Il confronto con luglio dice la cosa che conta: allora l’asta aveva chiuso al 4,179% con un rapporto fra domanda e offerta di 2,60. Il rendimento è quindi undici punti base più alto, e a quel livello la domanda si è comunque presentata.',
    'Dopo l’aggiudicazione la pressione non si è intensificata: il decennale è rientrato nell’area del 4,69% dopo aver trattato sopra il 4,72-4,73% nel corso della giornata.',
    'L’oro chiude la terza seduta positiva consecutiva: 4.383 dollari sul contratto americano con più 0,49%, mentre lo spot era intorno a 4.394 nelle rilevazioni precedenti. I 4.400 restano non presi.',
    'Un’ora fa questa scheda aveva dichiarato che un rendimento di aggiudicazione sopra il 4,30% avrebbe smontato la lettura. Il risultato è 4,291%: nove millesimi sotto. È la terza soglia sfiorata e non toccata nella stessa giornata.',
  ],
  invalidation: [
    'Un decennale che chiude mercoledì sopra il 4,739%, cioè sopra il massimo registrato oggi: il livello non è tondo di proposito, ed è quello che direbbe che la buona ricezione dell’asta a tre anni non ha tolto pressione alla parte lunga della curva.',
    'Un’asta del decennale mercoledì alle 19:00 che si aggiudica sopra il quotato pre-asta invece che sotto: direbbe che la domanda di stasera era specifica della scadenza corta e non un giudizio sull’offerta complessiva del Tesoro, e toglierebbe alla lettura la sua gamba principale.',
    'Un biennale che si porta sopra il 4,237%, cioè sopra la rilevazione di questa mattina invece che sopra la soglia tonda del 4,25%: è un livello che il mercato ha già stabilito oggi, dista meno di un punto base, e basterebbe a dire che la scadenza che prezza la Fed ha smesso di stare ferma.',
    'Un oro che chiude mercoledì sotto i 4.357 dollari, cioè sotto il minimo di questa giornata: interromperebbe tre sedute positive consecutive e riporterebbe la configurazione a prima del rimbalzo del pomeriggio.',
    'Un indice dei prezzi mercoledì sopra il 3,4% annuo sul dato principale o sopra più 0,2% mensile su quello di fondo: è l’unico evento in calendario capace di riportare il decennale sopra il massimo di oggi in mezz’ora, e renderebbe irrilevante tutto quello che le due aste avranno detto.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto, 14:30 e 19:00 italiane',
    title: 'Indice dei prezzi al consumo, e asta del decennale',
    detail:
      'Due prove nella stessa giornata, e la seconda è quella che manca a questa lettura. Alle 14:30 l’indice dei prezzi di luglio, con consenso a più 0,1% mensile e più 3,4% annuo sul dato principale, più 0,2% e più 2,5% su quello di fondo. Alle 19:00 l’asta del decennale, giovedì quella del trentennale: sono le scadenze dove la tensione di questa settimana si è davvero concentrata, e dove una buona ricezione varrebbe molto più di quella di stasera. Giovedì alle 14:30 anche i prezzi alla produzione.',
  },
  sources: [
    { outlet: 'U.S. Department of the Treasury', title: 'Risultato dell’asta a tre anni' },
    { outlet: 'Barron’s' },
    { outlet: 'RTTNews' },
    { outlet: 'Reuters' },
    { outlet: 'The Wall Street Journal' },
    { outlet: 'Trading Economics' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Un’ora fa, in fondo all’analisi delle 19:25, era scritta questa condizione: un’asta a tre anni con un rendimento di aggiudicazione superiore al 4,30% avrebbe detto che il mercato chiedeva un premio sulla scadenza che prezza la Fed, e avrebbe contraddetto la lettura di un biennale immobile. Il Tesoro ha collocato 58 miliardi di dollari al 4,291%. Mancano nove millesimi di punto percentuale. La condizione non è scattata, e questo è il fatto della serata; ma è la terza volta in una giornata che una soglia dichiarata da questa scheda viene sfiorata e non toccata, e vale la pena guardare che cosa hanno in comune quelle tre soglie.',
    },
    {
      kind: 'stats',
      title: 'L’asta, e quello che c’era intorno',
      caption:
        'Esito ufficiale dell’asta e rilevazioni riferite dalle agenzie nella serata dell’11 agosto; la chiusura sull’oro è quella del contratto americano.',
      items: [
        {
          label: 'Asta 3 anni',
          value: '4,291%',
          tone: 'bull',
          note: '58 miliardi collocati, circa mezzo punto base sotto il quotato pre-asta',
        },
        {
          label: 'Soglia dichiarata',
          value: '4,30%',
          tone: 'bull',
          note: 'Scritta alle 19:25: nove millesimi più in alto, non raggiunta',
        },
        {
          label: 'Asta di luglio',
          value: '4,179%',
          tone: 'warn',
          note: 'Rapporto domanda-offerta 2,60: il rendimento è undici punti base più alto',
        },
        {
          label: 'Treasury 10 anni',
          value: '≈ 4,69%',
          tone: 'bull',
          note: 'Rientrato dopo aver trattato sopra il 4,72-4,73% in giornata',
        },
        {
          label: 'XAU/USD',
          value: '4.383 $',
          tone: 'bull',
          note: 'Chiusura del contratto americano, più 0,49%: terza seduta positiva di fila',
        },
        {
          label: 'Brent',
          value: '87,8-87,9 $',
          tone: 'bull',
          note: 'Circa 86,4 sulla serie di questo archivio; WTI a 82,2',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Che cosa ha risposto l’asta, e che cosa no',
      anchor: 'cosa-risponde',
    },
    {
      kind: 'paragraph',
      text: 'Il dettaglio tecnico è quello che porta l’informazione. Aggiudicarsi mezzo punto base sotto il livello quotato pochi minuti prima significa che la domanda si è presentata più forte di quanto il mercato si aspettasse: non è un giudizio sul livello dei tassi, è un giudizio sulla capacità del Tesoro di piazzare la propria carta a quel livello. E il confronto con luglio rende il fatto meno banale di quanto sembri — allora la stessa scadenza si era aggiudicata al 4,179%, quindi il rendimento è undici punti base più alto, e a quel prezzo i compratori si sono comunque fatti trovare.',
    },
    {
      kind: 'paragraph',
      text: 'Per la lettura tenuta in questo archivio conta perché testa proprio la scadenza giusta. Da tre giorni la tesi è che la tensione sui rendimenti non sia una riprezzatura della Federal Reserve: il biennale sta fermo fra il 4,20% e il 4,24% mentre il trentennale va ai massimi da vent’anni, e a salire è il compenso per l’inflazione attesa e non il costo del denaro. Un’asta a tre anni è la prova più diretta disponibile su quel punto, perché tre anni coprono l’intero orizzonte in cui una decisione di settembre e le successive entrano nel prezzo. Il mercato ha comprato senza chiedere un premio.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Le prove vere sono mercoledì e giovedì',
      text: 'Va detto subito quello che l’asta non dimostra, perché il testo ricevuto lo attribuisce con più generosità di quanta ne meriti. Il rientro del decennale sotto il 4,70% è coerente con una buona ricezione dell’offerta, ma un collocamento a tre anni non è un test della parte lunga della curva, che è esattamente dove la tensione di questa settimana si è concentrata. Le prove che contano sono l’asta del decennale di mercoledì alle 19:00 e quella del trentennale di giovedì. Fino ad allora quello di stasera è un rischio rimosso, non una conferma ottenuta.',
    },
    {
      kind: 'heading',
      text: 'Tre soglie sfiorate, e tutte e tre erano tonde',
      anchor: 'tre-soglie',
    },
    {
      kind: 'paragraph',
      text: 'Ecco il conto della giornata. Alle 10:45 questa scheda ha dichiarato che il recupero dei 4.400 dollari avrebbe autorizzato ad alzare la direzione: l’oro si è fermato a 4.386,13, quattordici dollari sotto. Alle 17:15 la stessa soglia è stata riproposta: il metallo è arrivato a 4.393,69, sei dollari sotto. Alle 19:25 la soglia era il 4,30% sull’asta: il risultato è 4,291%, nove millesimi sotto. Tre condizioni scritte in anticipo, tre avvicinamenti, zero attraversamenti. E tre numeri tondi.',
    },
    {
      kind: 'paragraph',
      text: 'Questo archivio ha una nota di metodo che dice perché non è una coincidenza, ed è la stessa che ha già usato per dire che le cifre tonde sono microstruttura e non supporto. Sui livelli finiti in zero si accumulano gli ordini in attesa, per la stessa pigrizia mentale che porta a arrotondare il pieno di benzina: chi vende mette l’ordine appena sotto la cifra tonda proprio perché sa che il muro di ordini limite può far rimbalzare il prezzo senza che il livello venga mai toccato. Un livello tondo attira il prezzo e resiste alla penetrazione, ed è quindi il posto peggiore dove mettere una soglia che si vuole davvero mettere alla prova. La spiegazione completa è in /metodologia.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Il bias non è solo del mercato: è di chi scrive la soglia',
      text: 'La parte scomoda è un’altra. Sull’oro il meccanismo descritto sopra si applica alla lettera, perché i 4.400 sono un livello su cui stanno ordini veri. Sull’asta no: un rendimento di aggiudicazione non si forma su un muro di stop, e il 4,30% non era un livello del mercato — era un numero che chi scrive ha scelto perché era tondo, invece di derivarlo da qualcosa. La stessa scorciatoia cognitiva che mette gli ordini sullo zero mette le soglie di invalidazione sullo zero, e il risultato è una condizione che ha buone probabilità di non scattare mai. Va aggiunta al problema di calibrazione registrato un’ora fa: non è solo che i controlli arrivano prima dell’evento decisivo, è anche che i livelli sono scelti dove è comodo scriverli.',
    },
    {
      kind: 'paragraph',
      text: 'Serve però anche il controesempio, altrimenti l’osservazione prova troppo. Nella stessa settimana due soglie ugualmente tonde sono state attraversate senza esitazione: gli 84 dollari sul Brent, superati e mai più restituiti, e il 4,70% sul decennale, superato ieri sera e tenuto per un giorno intero con un massimo a 4,739%. La differenza non è il numero, è quello che lo spingeva: quelle due sono state raggiunte da mercati in movimento, le tre di oggi da mercati che stavano già decelerando. Un livello tondo non è un muro; è un punto di attrazione, e una soglia messa lì misura anche l’attrazione oltre alla cosa che si voleva misurare.',
    },
    {
      kind: 'paragraph',
      text: 'La correzione è concreta, e comincia da questa analisi. Le condizioni scritte qui sotto non hanno un livello tondo: il decennale sopra il 4,739%, cioè il massimo di oggi; il biennale sopra il 4,237%, cioè la rilevazione di questa mattina invece del 4,25%; l’oro sotto i 4.357 dollari, il minimo della seduta. Sono numeri che il mercato ha già stabilito da solo, e due dei tre distano meno di quanto distasse la soglia tonda corrispondente.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Un rischio rimosso, e una barriera che regge',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'L’asta si aggiudica sotto il quotato pre-asta: il rischio di una collocazione debole capace di riportare i rendimenti sui massimi è stato tolto dal tavolo.',
          'Il decennale rientra nell’area del 4,69% dopo aver trattato sopra il 4,72-4,73%, quindi sotto la soglia del 4,70% che questo archivio segue.',
          'La chiusura del contratto americano a 4.383 dollari con più 0,49% è la terza seduta positiva consecutiva.',
          'Il Brent resta fra 87,8 e 87,9 dollari, ben sotto il picco vicino ai 90 della mattinata, e il Dollar Index è stabile.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'I 4.400 dollari non sono stati presi per la terza volta in una giornata: la barriera regge, e finché regge il massimo di 4.434-4.435 resta lontano.',
          'Il rendimento di aggiudicazione è undici punti base sopra quello di luglio: il repricing dei tassi delle ultime settimane è dentro il prezzo, non fuori.',
          'L’asta a tre anni non dice nulla sulla parte lunga, dove la tensione si è concentrata: il trentennale ha superato il 5,20% e il decennale ha toccato circa il 4,75% questa settimana.',
          'Su Hormuz non c’è alcun accordo: il traffico resta drasticamente ridotto e il rischio sul Bab el-Mandeb persiste dopo l’attacco che ha ucciso tre membri dell’equipaggio di una nave egiziana.',
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
      text: 'L’impostazione sull’orizzonte più stretto resta neutrale con inclinazione rialzista e forza bassa, dov’era dalle 17:15. La direzione non sale perché quello che è successo stasera è la rimozione di un rischio, non l’arrivo di una spinta: un’asta andata bene toglie una possibilità negativa dal ventaglio, e questo non è la stessa cosa di un fatto che spinge il metallo verso l’alto. La forza non sale perché la prova richiesta — i 4.435 dollari entro mercoledì — è più lontana adesso di quanto fosse alle 17:15, e perché i 4.400 hanno respinto il prezzo per la terza volta.',
    },
    {
      kind: 'paragraph',
      text: 'Sul ritracciamento del greggio vale la precisazione che il testo ricevuto fa da sé e che conviene tenere per intero: non è un problema risolto, è un premio di rischio che scende. Su Hormuz non c’è nessun accordo, i colloqui sono descritti come avanzati da giorni senza che il conteggio dei transiti si muova, e nel Bab el-Mandeb tre persone sono morte questa mattina. La differenza fra un premio che si sgonfia e un vincolo che si allenta è tutta la distanza fra un prezzo e una nave che passa.',
    },
    {
      kind: 'paragraph',
      text: 'Domani il quadro si decide due volte. Alle 14:30 l’indice dei prezzi, che è l’unico evento in calendario capace di riportare il decennale sopra il massimo di oggi in mezz’ora; alle 19:00 l’asta del decennale, che è la prova che questa lettura non ha ancora superato. Se entrambe vanno bene, la tesi dei tre giorni — tensione sulla parte lunga, Federal Reserve non ancora nel prezzo — avrà avuto la sua verifica migliore. Se la seconda va male dopo che la prima è andata bene, sarà il segnale che il problema non era mai l’inflazione ma l’offerta di titoli.',
    },
    {
      kind: 'note',
      text: 'Il risultato dell’asta e il confronto con quella di luglio sono esiti ufficiali riportati dalle fonti citate; la chiusura sull’oro è quella del contratto americano e non coincide con lo spot, che nelle rilevazioni precedenti della seduta stava intorno a 4.394 dollari. Le quotazioni del Brent appartengono alla serie che venerdì ha chiuso a 83,55 dollari, mentre le tacche di questo archivio sono fissate sulla serie che ha chiuso a 82,21: la conversione a circa 86,4 applica la stessa variazione percentuale ed è approssimata. Sul massimo di giornata del decennale le fonti non concordano sull’ultima cifra — questo archivio ha registrato 4,736% e 4,739% in due rilevazioni diverse, e un’agenzia lo arrotonda a circa 4,75%: le condizioni scritte qui usano il 4,739%, cioè il valore più alto fra quelli con tre decimali. I livelli di prezzo servono a rendere verificabile il ragionamento e non sono obiettivi.',
    },
  ],
};
