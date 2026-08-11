/**
 * l-agenzia-mette-una-data-sul-vincolo-e-arriva-al-2027
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const agenziaMetteUnaDataSulVincolo: Article = {
  slug: 'l-agenzia-mette-una-data-sul-vincolo-e-arriva-al-2027',
  categories: ['rotte-e-approvvigionamento', 'petrolio', 'medio-oriente', 'oro'],
  title: 'L’agenzia mette una data sul vincolo, e arriva al 2027',
  kicker: 'Rotte e approvvigionamento · Previsione ufficiale sull’energia',
  dek:
    'L’agenzia americana per l’energia assume transiti a Hormuz fortemente limitati per tutto agosto e ' +
    'circa 600.000 barili al giorno di capacità indisponibile fino a fine 2027. Alza la previsione sul ' +
    'Brent di undici dollari — e il risultato resta sotto il prezzo di stasera.',
  publishedAt: '2026-08-11T21:55:00+02:00',
  author: AUTHOR,
  readingMinutes: 8,
  tags: ['EIA', 'Hormuz', 'Scorte', 'Effetto base', 'Previsioni'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['medio', 'lungo'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'bassa',
    regime:
      'Per la prima volta il vincolo che questo archivio conta ogni giorno ha una durata scritta da un ente ' +
      'ufficiale: l’agenzia americana per l’energia assume transiti fortemente limitati a Hormuz per tutto ' +
      'agosto, una ripresa solo graduale da settembre e circa 600.000 barili al giorno di capacità ' +
      'indisponibile fino alla fine del 2027. Alza di conseguenza la previsione sul Brent del terzo ' +
      'trimestre a circa 85 dollari, undici sopra la stima del mese scorso. Ma resta una previsione, e ' +
      'questo archivio la classifica sotto un transito contato: l’ente dichiara un’attesa, non toglie una ' +
      'nave dal conto. E il numero rivisto è comunque sotto gli 88,67 dollari a cui il Brent scambia ' +
      'stasera, quindi il mercato sta già prezzando più di quanto l’agenzia preveda. La direzione sui ' +
      'giorni non si muove perché non si è mosso il biennale, e la misura è quella.',
    horizon: 'medio',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sul fondamento, che è una pubblicazione ufficiale dell’agenzia statistica americana per ' +
    'l’energia con numeri verificabili riga per riga. Va però tenuta ferma una distinzione che questo ' +
    'archivio applica alle banche centrali e vale allo stesso modo qui: il fatto solido è che l’agenzia ' +
    'ha dichiarato quelle attese, non che il mondo si comporterà così. Media sulla lettura, e le ragioni ' +
    'sono due. La prima è che l’argomento centrale — un prezzo che si stabilizza in alto smette di ' +
    'alimentare la variazione annua dei prezzi entro dodici mesi — è aritmetica corretta ma non dice ' +
    'quanto ci vorrà, e nel frattempo il livello pesa sui costi. La seconda riguarda i dati di mercato di ' +
    'questa serata, che non tornano fra loro: sulla chiusura del contratto americano sull’oro esistono due ' +
    'valori incompatibili, ed è dichiarato nella nota in fondo.',
  takeaways: [
    'L’agenzia statunitense per l’informazione sull’energia pubblica l’aggiornamento mensile e assume che i transiti attraverso lo Stretto di Hormuz restino fortemente limitati per tutto agosto, con una ripresa soltanto graduale da settembre.',
    'Stima circa 5,5 milioni di barili al giorno rimasti fuori produzione in Medio Oriente a luglio, e prevede che circa 600.000 barili al giorno di capacità restino indisponibili fino alla fine del 2027. È il primo numero che mette una durata sul vincolo seguito qui dal 5 agosto.',
    'Sulle scorte la revisione è pesante: riduzione delle scorte mondiali di circa 4,2 milioni di barili al giorno nel secondo trimestre, e un ulteriore calo medio di 3,8 milioni nel terzo.',
    'La previsione sul Brent per il terzo trimestre sale a circa 85 dollari, undici sopra quella del mese precedente. Resta però sotto gli 88,67 a cui il greggio scambia stasera, più 1,1%, con il WTI a 83,17.',
    'XAU/USD è intorno a 4.376 dollari dopo il massimo di 4.434,84 della sessione asiatica: terzo prezzo consecutivo più basso in serata. La probabilità di un rialzo della Fed a settembre resta intorno alla metà.',
  ],
  invalidation: [
    'Un Brent che chiude mercoledì sopra gli 88,67 dollari di questa sera, cioè sopra il massimo serale invece che sopra i 90 tondi: direbbe che il mercato sta prezzando più della revisione dell’agenzia e non meno, e toglierebbe il fondamento all’argomento centrale di questa lettura.',
    'Un biennale che si porta sopra il 4,237%, cioè sopra la rilevazione di questa mattina: è la misura dichiarata da questo archivio nel pomeriggio, non si è mossa attraverso quattro notizie in una sera, e la sua caduta direbbe che la Fed sta entrando nel prezzo.',
    'Un indice dei prezzi mercoledì sopra il 3,4% annuo sul dato principale con la componente energetica in aumento su base mensile: sarebbe il canale che questa analisi dice non ancora attivo, misurato dove si misura davvero.',
    'Un oro spot sotto i 4.357 dollari, il minimo di questa giornata, entro la chiusura di mercoledì: interromperebbe la sequenza di sedute positive e direbbe che la componente rifugio della notizia non ha alcun peso.',
    'Una nuova revisione al rialzo della previsione sul Brent nell’aggiornamento di settembre dell’agenzia: confermerebbe che quella di oggi inseguiva il mercato invece di anticiparlo, e che il prezzo resta la misura migliore della previsione.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto, 14:30 italiane',
    title: 'Indice dei prezzi al consumo statunitense di luglio',
    detail:
      'È il posto dove l’argomento di questa analisi si misura invece di restare una deduzione. Il consenso è di più 0,1% mensile e più 3,4% annuo sul dato principale, più 0,2% e più 2,5% su quello di fondo. La riga da guardare non è il numero di copertina ma la componente energetica: se il greggio a 88 dollari sta già entrando nei prezzi al consumo, il canale che l’agenzia descrive è attivo adesso; se non si vede, la revisione riguarda i costi delle imprese e non ancora l’inflazione misurata. Alle 19:00 dello stesso giorno l’asta del decennale, giovedì quella del trentennale e i prezzi alla produzione.',
  },
  sources: [
    {
      outlet: 'U.S. Energy Information Administration',
      title: 'Short-Term Energy Outlook, 11 agosto',
    },
    { outlet: 'Reuters' },
    { outlet: 'Federal Reserve' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Da sei giorni questo archivio misura una cosa sola su Hormuz, e la misura contando: undici navi al giorno di media contro le 130-140 di prima del conflitto, tre milioni di barili di esportazioni nette contro 4,4. È un vincolo materiale, e finora nessuno gli aveva messo una data. Stasera l’agenzia statunitense per l’informazione sull’energia lo ha fatto: transiti fortemente limitati per tutto agosto, ripresa soltanto graduale da settembre, e circa 600.000 barili al giorno di capacità che restano indisponibili fino alla fine del 2027.',
    },
    {
      kind: 'stats',
      title: 'La revisione, in cinque numeri',
      caption:
        'Stime e previsioni dell’aggiornamento mensile dell’11 agosto; i prezzi sono rilevazioni della stessa serata e non chiusure ufficiali.',
      items: [
        {
          label: 'Capacità ferma a luglio',
          value: '≈ 5,5 mln b/g',
          tone: 'bear',
          note: 'Produzione mediorientale rimasta fuori mercato nel mese',
        },
        {
          label: 'Capacità ferma al 2027',
          value: '≈ 0,6 mln b/g',
          tone: 'bear',
          note: 'La parte che l’agenzia non si aspetta di recuperare: è il numero che conta',
        },
        {
          label: 'Scorte mondiali',
          value: '−4,2 mln b/g',
          tone: 'bear',
          note: 'Nel secondo trimestre; previsto un ulteriore −3,8 medio nel terzo',
        },
        {
          label: 'Brent, previsione Q3',
          value: '≈ 85 $',
          tone: 'warn',
          note: 'Undici dollari sopra la stima del mese scorso, ma sotto il prezzo di stasera',
        },
        {
          label: 'Brent adesso',
          value: '88,67 $',
          tone: 'bear',
          note: 'Più 1,1%; circa 87,3 sulla serie di questo archivio. WTI a 83,17',
        },
        {
          label: 'XAU/USD',
          value: '≈ 4.376 $',
          tone: 'warn',
          note: 'Dopo il massimo di 4.434,84: terzo prezzo consecutivo più basso in serata',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Una durata è più informativa di un livello',
      anchor: 'una-durata',
    },
    {
      kind: 'paragraph',
      text: 'Fra i numeri pubblicati, quello che conta non è il più grande. I 5,5 milioni di barili al giorno fermi a luglio descrivono l’interruzione acuta, e di quella il mercato sa già tutto: è la ragione per cui il Brent è passato da 79 a 90 dollari in una settimana. I 600.000 barili al giorno che l’agenzia non si aspetta di recuperare fino alla fine del 2027 sono un’altra cosa. Non entrano nel prezzo di domani, entrano nella traiettoria: dicono che una parte della capacità perduta viene considerata strutturale e non ciclica.',
    },
    {
      kind: 'paragraph',
      text: 'Per questo archivio il salto è di natura, non di grado. Fino a stasera lo Stretto era un conteggio giornaliero che si poteva leggere in due modi opposti — un’emergenza che rientra fra due settimane, o un regime nuovo — e la differenza non era decidibile con i dati disponibili. Un ente pubblico che scrive «fino alla fine del 2027» prende posizione su quella domanda, e lo fa nel documento che le imprese energetiche usano per pianificare. Le due letture non restano equivalenti.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Resta però una previsione, e qui le previsioni valgono meno dei conteggi',
      text: 'Va detto subito, perché è la regola che questo archivio applica alle banche centrali e non c’è motivo di sospenderla per un’agenzia statistica. Il fatto solido è che l’agenzia ha dichiarato quelle attese; non è un fatto che il mondo si comporterà così. Nella scala usata qui — una dichiarazione è una preferenza, un atto è un vincolo — una previsione a diciassette mesi sta più vicina alla prima. Il numero che continua a decidere è il conteggio dei transiti, e quello stasera non è cambiato. Il quadro con cui si separano le due cose è in /metodologia.',
    },
    {
      kind: 'heading',
      text: 'Undici dollari di revisione, e il mercato è già più avanti',
      anchor: 'undici-dollari',
    },
    {
      kind: 'paragraph',
      text: 'C’è poi un dettaglio che ribalta il tono con cui la notizia si legge. L’agenzia ha alzato la previsione sul Brent del terzo trimestre a circa 85 dollari, undici sopra quella del mese precedente: in termini di revisione è enorme. Ma il Brent stasera scambia a 88,67. Il numero rivisto resta quindi quasi quattro dollari sotto il prezzo corrente, e questo non è un dettaglio: significa che il mercato aveva già prezzato la revisione prima che venisse pubblicata, ed è la situazione che questo archivio ha imparato a riconoscere — una notizia che arriva dopo il movimento non spiega il movimento.',
    },
    {
      kind: 'paragraph',
      text: 'Una precisazione onesta serve, perché altrimenti l’argomento prova troppo. Quella dell’agenzia è una media di trimestre, e il trimestre comprende un luglio in cui il Brent stava molto più in basso — 82,21 dollari alla chiusura del 7 agosto sulla serie usata qui. Una media di 85 con un luglio a 81 implica un agosto-settembre intorno agli 87, cioè più o meno dove siamo adesso. Quindi la previsione non dice che il prezzo scenderà: dice che resterà dov’è. Che è comunque diverso da quello che il testo ricevuto ne ricava.',
    },
    {
      kind: 'heading',
      text: 'Un prezzo alto che resta fermo non è inflazione che accelera',
      anchor: 'effetto-base',
    },
    {
      kind: 'paragraph',
      text: 'Qui sta l’anello debole della catena, ed è lo stesso tipo di anello trovato due giorni fa nel ragionamento sui rendimenti lunghi. Il ragionamento è: petrolio strutturalmente più alto, quindi inflazione più persistente, quindi Federal Reserve più restrittiva, quindi pressione sull’oro. Il primo passaggio è corretto e la revisione dell’agenzia lo rafforza. Il secondo non segue, perché l’indice dei prezzi misura una variazione e non un livello.',
    },
    {
      kind: 'paragraph',
      text: 'Un greggio che sale da 79 a 88 dollari spinge l’inflazione mentre sale. Un greggio che resta a 88 smette di spingerla: dopo dodici mesi il confronto avviene contro un mese in cui il prezzo era già alto, e il contributo alla variazione annua va a zero da solo, senza che nessuno faccia niente. È l’effetto base, e la previsione dell’agenzia — livello alto, stabile, con una capacità mancante di 600.000 barili al giorno che non cresce nel tempo — descrive esattamente uno scenario di questo tipo. Un pavimento più alto, non una salita continua.',
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Che cosa resterebbe comunque negativo per l’oro',
      text: 'L’argomento non ripulisce il campo, e va detto dove regge lo scenario opposto. Primo: nei prossimi mesi, prima che l’effetto base entri, il contributo energetico all’indice dei prezzi è positivo e può essere grosso — l’appuntamento è domani alle 14:30. Secondo: un livello permanentemente più alto alza i costi di produzione lungo tutta la catena, e quella trasmissione è lenta ma non si esaurisce. Terzo: se il pavimento sale ancora, l’aritmetica dell’effetto base ricomincia da capo. La distinzione fra livello e variazione dice che cosa aspettarsi fra dodici mesi, non che cosa succede domani.',
    },
    {
      kind: 'heading',
      text: 'Due fronti nuovi che non passano da Hormuz',
      anchor: 'due-fronti',
    },
    {
      kind: 'paragraph',
      text: 'Nella stessa serata il Brent è risalito a 88,67 dollari con più 1,1% e il WTI a 83,17 con più 1,3%: il rientro dai 90 di questo pomeriggio non si è trasformato in una correzione. E le cause riferite non sono solo Hormuz — vengono citate nuove interruzioni in Libia e un attacco ucraino a una raffineria russa. Sono due fonti di offerta interrotta che non hanno niente a che vedere con lo Stretto e con l’Iran.',
    },
    {
      kind: 'paragraph',
      text: 'Conta perché questo archivio ha raccontato la crisi energetica di agosto come una storia a un fronte con un’appendice sul Mar Rosso, e già il 9 agosto aveva dovuto correggersi scoprendo che i due colli di bottiglia erano in serie e non in parallelo. Libia e raffinazione russa sono un terzo e un quarto elemento, indipendenti dai primi due: se l’offerta si interrompe in quattro posti scollegati, la domanda smette di essere quando riapre lo Stretto e diventa quanta capacità inutilizzata resta nel sistema. È la domanda a cui i 600.000 barili al giorno provano a rispondere.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Una revisione grossa, e un mercato che era già lì',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Un ente pubblico mette per iscritto che il vincolo su Hormuz dura fino a settembre e lascia strascichi fino al 2027: il premio geopolitico ha ora una durata dichiarata da una fonte terza.',
          'La previsione rivista resta sotto il prezzo corrente: il mercato aveva già scontato la notizia, quindi non c’è un nuovo shock da assorbire.',
          'Un prezzo che si stabilizza in alto smette di alimentare la variazione annua dei prezzi entro dodici mesi, e con essa il caso per tassi più alti.',
          'La probabilità di un rialzo a settembre resta intorno alla metà e il biennale non si muove da cinque giorni.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Nei prossimi mesi, prima che l’effetto base entri, la componente energetica dell’indice dei prezzi può essere grossa: si misura domani alle 14:30.',
          'Il Brent risale a 88,67 dollari e il rientro dai 90 non diventa una correzione: circa 87,3 sulla serie di questo archivio, oltre tre dollari sopra la tacca degli 84.',
          'Le interruzioni sono ora su quattro fronti scollegati — Hormuz, Mar Rosso, Libia, raffinazione russa — e la capacità inutilizzata nel sistema si assottiglia.',
          'L’oro segna il terzo prezzo consecutivo più basso in serata, a circa 4.376 dollari dopo il massimo di 4.434,84, e chiude sotto la zona dei massimi.',
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
      text: 'La lettura sui giorni resta neutrale con forza bassa, per la terza pubblicazione consecutiva e per la stessa ragione dichiarata nel pomeriggio: la misura scelta è la scadenza a due anni, e non si è mossa attraverso quattro notizie in una sera — le vendite di case, la Fed di Atlanta, l’asta a tre anni e adesso la revisione dell’agenzia. Vale la pena registrare che una regola che non si attiva mai è indistinguibile da una regola scritta male: se il biennale non si muove nemmeno domani con l’indice dei prezzi, la misura andrà cambiata invece di essere riconfermata.',
    },
    {
      kind: 'paragraph',
      text: 'Sul contenuto, la revisione dell’agenzia è la notizia più sostanziale della giornata e va tenuta separata dal suo effetto immediato, che è vicino a zero. Il suo valore sta nell’aver trasformato una domanda aperta — emergenza o regime nuovo — in una posizione dichiarata da chi ha i dati sulla capacità. La direzione in cui spinge l’oro resta ambigua per costruzione, e quando una notizia spinge in due sensi la risposta non è una direzione forte con forza bassa: è il neutrale, che è dove la lettura sta.',
    },
    {
      kind: 'note',
      text: 'I numeri dell’aggiornamento mensile sull’energia sono previsioni e stime dell’agenzia, non consuntivi: il fatto verificabile è che sono stati pubblicati oggi, non che si realizzeranno. Le quotazioni del Brent appartengono alla serie che venerdì ha chiuso a 83,55 dollari, mentre le tacche di questo archivio sono fissate sulla serie che ha chiuso a 82,21: la conversione a circa 87,3 applica la stessa variazione percentuale ed è approssimata. Sulla chiusura del contratto americano sull’oro le fonti di questa serata non concordano: una indica 4.383 dollari e un’altra 4.441,10 con più 0,49% e più 0,5% rispettivamente, e i due valori non possono essere entrambi la liquidazione della stessa sessione. Questo archivio non sceglie fra i due e continua a fissare tutte le soglie sullo spot, che nelle ultime rilevazioni è intorno a 4.376 dollari. Il riferimento alla media mobile a cento giorni è riportato dalla fonte e non è un livello calcolato qui. Le interruzioni in Libia e l’attacco alla raffineria russa sono riferiti dall’agenzia di stampa e non risultano quantificati in barili.',
    },
  ],
};
