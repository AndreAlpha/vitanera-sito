import { MarketReference } from '../models/article.model';

/**
 * Valori di riferimento citati nelle analisi pubblicate.
 *
 * ATTENZIONE: non sono quotazioni in tempo reale, non provengono da un feed di
 * mercato e non devono essere utilizzati a fini operativi. Servono unicamente a
 * dare contesto immediato a ciò che si legge negli articoli e vanno aggiornati
 * a mano insieme alle pubblicazioni.
 *
 * Sono di conseguenza vuoti finché l'archivio è vuoto: un quadro di mercato
 * senza analisi che lo citino sarebbe un numero senza fonte. La panoramica
 * omette del tutto il blocco quando non c'è nulla da mostrare.
 *
 * Per i dati macroeconomici — quelli sì completi di storico e fonte — la
 * sezione di riferimento è il calendario economico.
 */
export const MARKET_REFERENCES: readonly MarketReference[] = [
  {
    symbol: 'YEMEN',
    name: 'Escalation in Yemen e valutazione delle Nazioni Unite',
    value: 'rischio più alto dal 2022',
    change: 'due morti e quattordici feriti a Marib; trenta militari il giorno prima',
    tone: 'bear',
    icon: 'alert',
    note: 'Missili balistici e droni Houthi su campi per sfollati e quartieri residenziali di Marib il 7 agosto, un giorno dopo gli attacchi ai campi militari fra Marib e Hadramawt. L’inviato speciale delle Nazioni Unite Hans Grundberg dice che quegli attacchi, presi insieme ai rinnovati assalti al naviglio nel Mar Rosso e nel Golfo di Aden, lasciano lo Yemen al rischio più alto di conflitto su larga scala dalla tregua dell’aprile 2022. Gli Houthi rivendicano dicendo di aver colpito schieramenti sauditi dopo aver rilevato un ammassamento militare: la stessa escalation descritta dai due lati opposti. Tutto questo è arrivato a mercati chiusi, quindi il primo prezzo che può reagire è quello di lunedì.',
  },
  {
    symbol: 'RISERVE CN',
    name: 'Riserve auree della banca centrale cinese, fine luglio',
    value: '76,08 mln oz',
    change: 'da 75,44: più 640.000 once, quasi venti tonnellate',
    tone: 'gold',
    icon: 'archive',
    note: 'Ventunesimo mese consecutivo di acquisti e maggior incremento mensile da ottobre 2023, quando furono 740.000 once. Il dato che conta più del totale è il ritmo: a marzo la banca centrale aveva aggiunto 160.000 once, e da allora la cifra è cresciuta ogni mese fino a quadruplicare. Il valore delle riserve sale a 306,35 miliardi di dollari da 303,72. Sono acquisti di luglio, quindi precedono i fatti del 7 agosto e non ne sono una reazione: quello che gli eventi di oggi cambiano è la probabilità che la serie continui, non la sua causa.',
  },
  {
    symbol: 'SANZIONI',
    name: 'Provvedimento del Senato su Russia e Iran',
    value: '86 a 11',
    change: 'approvato dal solo Senato, deve passare alla Camera',
    tone: 'warn',
    icon: 'scale',
    note: 'Il provvedimento intitolato al senatore Lindsey Graham, morto di recente, autorizza dazi fino al 100% sulle importazioni dai cinque maggiori acquirenti di petrolio e gas russi e fino al 500% sulle merci russe che entrano negli Stati Uniti; estende inoltre l’Iran Sanctions Act del 1996 e colpisce la flotta ombra russa. Era fermo da tempo ed è passato quasi all’unanimità. Per l’oro taglia in due direzioni: aumenta il rischio geopolitico e commerciale, ma il suo canale principale sarebbe il prezzo dell’energia, che sopra gli 84 dollari di Brent lavora contro il metallo attraverso i rendimenti.',
  },
  {
    symbol: 'ATTESE',
    name: 'Inflazione attesa dalle famiglie, indagine New York Fed di luglio',
    value: '3,6% · 3,3% · 3,0%',
    change: 'a uno, tre e cinque anni; solo la prima scende, da 3,7%',
    tone: 'warn',
    icon: 'gauge',
    note: 'Diffusione del 7 agosto, riportata da Reuters. Il numero a un anno cala di un decimo, quelli a tre e cinque anni non si muovono, e il mese prima erano saliti: due rilevazioni lette insieme non descrivono un rientro ma una sosta sopra l’obiettivo del 2%. È la parte ferma a contare, perché una banca centrale non combatte l’inflazione passata ma quella attesa. Nella stessa indagine le attese sui prezzi della benzina a un anno restano elevate e quelle sui prezzi delle case ferme al 3,2%; le famiglie vedono più probabile perdere il lavoro, ma anche più facile ritrovarne uno.',
  },
  {
    symbol: 'CPC',
    name: 'Terminale Caspian Pipeline Consortium, Mar Nero',
    value: 'caricamenti fermi',
    change: 'richiusi il 5 agosto; erano circa 730.000 barili al giorno',
    tone: 'bear',
    icon: 'flow',
    note: 'Quattro petroliere in caricamento colpite da droni in quattro giorni a fine luglio, attrezzature gravemente danneggiate, flussi kazaki verso il terminale interrotti e produzione tagliata. Dopo una ripresa breve il terminale ha richiuso il 5 agosto, con gli armatori riluttanti ad accettare i viaggi e un gruppo di trasporto che ha sospeso le operazioni il 4. È il terzo collo di bottiglia dopo Hormuz e il Mar Rosso, e ha lo stesso meccanismo: non si chiude il passaggio, si chiude la disponibilità a percorrerlo.',
  },
  {
    symbol: 'ADNOC',
    name: 'Navi ADNOC colpite nello Stretto di Hormuz',
    value: 'quindici',
    change: 'tre questa settimana, un morto e venti feriti',
    tone: 'bear',
    icon: 'alert',
    note: 'Dichiarazione della compagnia petrolifera statale di Abu Dhabi del 7 agosto, riportata da Gulf News: quindici navi colpite da missili o droni dall’inizio del conflitto, impatto significativo sulle operazioni, misure di protezione per personale e mezzi. È la prima volta che un produttore del Golfo quantifica un danno operativo invece di annunciare un’intenzione, ed è la ragione per cui vale più dei sei annunci diplomatici che in quattro giorni non avevano mosso il prezzo. I numeri sono quelli forniti dall’azienda e non risultano da una verifica indipendente. Dallo Stretto passa circa un quinto del consumo mondiale di petrolio.',
  },
  {
    symbol: 'NFP',
    name: 'Posti di lavoro non agricoli, luglio',
    value: '−23.000',
    change: 'attese circa 80.000; primo calo da mesi',
    tone: 'bull',
    icon: 'users',
    note: 'Diffusione dell’ufficio di statistica del lavoro delle 14:30 del 7 agosto. Le revisioni pesano più del numero di copertina: giugno scende da 57.000 a 20.000 e maggio da 129.000 a 63.000, in tutto 103.000 posti in meno su una serie già rivista una volta. La disoccupazione cala al 4,1% dal 4,2%, ma per la ragione sbagliata — la partecipazione scende al 61,4%, minimo da oltre cinque anni, cioè il tasso migliora perché la forza lavoro si svuota. I salari decelerano a più 0,1% mensile e più 3,2% annuo contro attese di più 0,3% e più 3,5%. Il tono è favorevole all’oro perché toglie alla Fed la ragione per alzare.',
  },
  {
    symbol: 'POLISILICIO',
    name: 'Dazi e prezzi minimi sul polisilicio',
    value: '21 $/kg',
    change: 'più un dazio del 15%, in vigore dal 4 dicembre',
    tone: 'warn',
    icon: 'scale',
    note: 'Proclamazione firmata il 6 agosto con la Section 232. Oltre al prezzo minimo sul polisilicio ci sono 100 dollari al chilo su lingotti e wafer e 0,22 e 0,38 dollari per watt su celle e moduli. La parte che conta non è la percentuale ma il pavimento: un dazio segue il prezzo di mercato al ribasso, un prezzo minimo no. La quota statunitense della capacità produttiva mondiale è passata dal 50% del 2005 a meno del 2% nel 2024.',
  },
  {
    symbol: 'ASSICURAZIONI',
    name: 'Copertura di guerra sul transito a Hormuz',
    value: 'decade se si paga',
    change: 'clausola del Lloyd’s Market Association, fine luglio',
    tone: 'bear',
    icon: 'shield',
    note: 'È il vincolo che spiega meccanicamente le otto navi. L’ente iraniano che incasserebbe le commissioni — l’Autorità dello Stretto del Golfo Persico, costituita a maggio — è sotto sanzioni statunitensi, e la clausola introdotta a fine luglio fa decadere la copertura contro il rischio di guerra alle navi che pagano pedaggi o oneri di transito. Una fonte assicurativa citata da Reuters lo chiama un comma 22: se paghi non sei assicurato, se non paghi non passi.',
  },
  {
    symbol: 'XAU/USD',
    name: 'Oro spot',
    value: '4.342,18 $',
    change: 'chiusura, più 2,39%, fra 4.229,88 e 4.371,89',
    tone: 'bull',
    icon: 'coin',
    note: 'Chiusura spot del 7 agosto. Il metallo porta a casa quasi tutto il movimento del rapporto occupazionale — 101 dollari sulla giornata, su una escursione di 142 — ma il massimo resta quello delle 15:00 e in otto ore non è stato più avvicinato: è un balzo, non ancora una tendenza. Attenzione alla serie, perché oggi ha confuso più volte: il contratto future scambia una sessantina di dollari sopra lo spot, quindi un future a 4.414 corrisponde a uno spot intorno a 4.354, e i «4.400» che si leggono in giro non sono un livello che questa scheda abbia mai visto. Tutte le soglie qui sono sullo spot.',
  },
  {
    symbol: 'SUSSIDI',
    name: 'Richieste iniziali di sussidio, settimanali',
    value: '199.000',
    change: 'attese 202.000-204.000',
    tone: 'bear',
    icon: 'users',
    note: 'Da 198.000 riviste: i licenziamenti restano bassi, ed è la metà del dato favorevole al dollaro. L’altra metà dice il contrario — le richieste continuative salgono da 1,777 a 1,801 milioni, cioè chi perde il lavoro fatica di più a ritrovarlo.',
  },
  {
    symbol: 'PRODUTTIVITA',
    name: 'Produttività e costo del lavoro per unità prodotta',
    value: '+1,4%',
    change: 'atteso +0,7%, costo del lavoro +1,3%',
    tone: 'bull',
    icon: 'chart',
    note: 'È il dato che nessuno ha prezzato. Finché la produttività cresce più del costo del lavoro per unità, i salari possono salire senza finire nei prezzi: viene a mancare la base contabile del timore che la Fed dichiara, cioè un’inflazione che si radica nei salari. Serie trimestrale e molto rivista: una lettura non fa una tendenza.',
  },
  {
    symbol: 'ARGENTO',
    name: 'Argento spot',
    value: 'in rialzo con l’oro',
    change: 'il movimento resta di comparto',
    tone: 'bull',
    icon: 'spark',
    note: 'È il dettaglio che qualifica il movimento: quando anche il metallo più piccolo e più volatile sale, di solito si sta guardando un afflusso di ordini sull’intero comparto, non una riprezzatura dei tassi.',
  },
  {
    symbol: 'ADP',
    name: 'Occupazione privata statunitense, luglio',
    value: '44.000',
    change: 'attese 70.000',
    tone: 'bull',
    icon: 'users',
    note: 'Ritmo più debole degli ultimi sei mesi, con giugno rivisto da 98.000 a 95.000. La lettura di allora — raffreddamento delle assunzioni, non crisi — è stata smentita dal dato ufficiale del 7 agosto: meno 23.000 posti e 103.000 tolti ai due mesi precedenti. La rilevazione privata aveva colto la direzione e sottostimato l’ampiezza, il che è il suo difetto noto quando la serie ufficiale viene rivista.',
  },
  {
    symbol: 'HORMUZ',
    name: 'Stretto di Hormuz, transiti',
    value: '33 in quattro giorni',
    change: 'fermo dal 5 agosto, contro 130-140 al giorno',
    tone: 'bear',
    icon: 'map',
    note: 'Dopo due giorni fermo, il metro scelto il 5 agosto ha un numero fresco, e va nella direzione opposta alla riapertura: 33 navi da lunedì a giovedì contro 50 nella settimana precedente, con quattro transiti giovedì 6 agosto — fra cui la superpetroliera Nissos Kea, circa due milioni di barili di greggio Basrah caricati in Iraq. Quattro al giorno è metà della soglia di otto, contro le 130-140 di prima del conflitto. Sette annunci di distensione in cinque giorni non hanno fatto risalire il traffico: lo hanno accompagnato mentre scendeva.',
  },
  {
    symbol: 'MAR ROSSO',
    name: 'Attacchi alle petroliere saudite',
    value: 'l’ottavo dal 22 luglio',
    change: 'nessuna conferma saudita, per prassi',
    tone: 'bear',
    icon: 'alert',
    note: 'Un secondo collo di bottiglia, su rotte diverse e con un attore che non siede al tavolo di Hormuz. Due precisazioni che cambiano la lettura: la petroliera Wafa è l’ottava rivendicata dall’inizio del blocco houthi del 22 luglio, quindi non è un episodio isolato; e l’assenza di conferma saudita non è un indizio contrario, perché Riad per prassi non commenta gli attacchi delle milizie legate a Teheran. Fonti di sicurezza regionali confermano l’attacco, l’entità dei danni resta non verificata.',
  },
  {
    symbol: 'IRAN',
    name: 'Bozza iraniana sulla gestione dello Stretto',
    value: 'multe fino al 20%',
    change: 'divieto a navi USA e israeliane, commissioni in rial',
    tone: 'bear',
    icon: 'map',
    note: 'Pubblicata dall’agenzia di stato Fars e descritta come bozza iniziale, in esame e non approvata. Prevede anche l’esclusione dei Paesi che hanno danneggiato l’Iran finché il danno non è risarcito. Le commissioni di servizio in rial contraddicono la ricostruzione dell’intesa Iran-Oman, che escludeva pedaggi: sui costi di transito, uno dei quattro punti aperti, le due carte dicono il contrario l’una dell’altra. Arriva dal Parlamento mentre a trattare è l’esecutivo, ed è la configurazione in cui una posizione massimalista dice poco sull’esito.',
  },
  {
    symbol: 'FED FUNDS',
    name: 'Tasso ufficiale della Federal Reserve',
    value: '3,50%-3,75%',
    change: 'settembre al 55,1%, dicembre all’82,7%',
    tone: 'bear',
    icon: 'bank',
    note: 'Il rapporto occupazionale ha spostato in mezz’ora quello che sette prese di posizione restrittive non erano riuscite a muovere in una settimana: la probabilità di un rialzo alla riunione del 16 settembre è passata dal 55,1% delle 14:20 al 41,7%, cioè dall’altra parte della metà, e il caso base è diventato una Fed ferma. Alle 15:55 italiane è risalita al 43,7%: due dei tredici punti e mezzo sono già stati restituiti. Il caso base non cambia — servirebbe il 50% — ma è questo il numero da guardare per sapere se la lettura del dato regge fino all’indice dei prezzi di mercoledì.',
  },
  {
    symbol: 'PCE',
    name: 'Indice dei prezzi PCE statunitense, giugno',
    value: '3,7%',
    change: 'core al 3,3%',
    tone: 'bear',
    icon: 'percent',
    note: 'Sono i due numeri con cui Lisa Cook definisce l’inflazione ancora «troppo alta» e giustifica la disponibilità a votare un rialzo. Il timore che dichiara non è il livello in sé, ma che si radichi nei salari e nei prezzi.',
  },
  {
    symbol: 'JOLTS',
    name: 'Offerte di lavoro statunitensi, giugno',
    value: '7,359 mln',
    change: 'attese 7,440 mln',
    tone: 'bull',
    icon: 'users',
    note: 'Maggio rivisto al ribasso a 7,537 milioni e tasso di posti vacanti dal 4,6% al 4,4%. Assunzioni e licenziamenti stabili: raffreddamento graduale, non crisi occupazionale.',
  },
  {
    symbol: 'ISM',
    name: 'ISM manifatturiero, indice principale',
    value: '55,6',
    change: 'massimo da oltre quattro anni',
    tone: 'bear',
    icon: 'gauge',
    note: 'Atteso 54,0, precedente 53,3, con occupazione, ordini ed esportazioni in espansione. È il dato che ha fatto invertire il rialzo dell’oro.',
  },
  {
    symbol: 'US2Y',
    name: 'Treasury a 2 anni',
    value: '4,208%',
    change: 'meno 3,7 punti base, risalito di 5,0 dal minimo di 4,158%',
    tone: 'bull',
    icon: 'arrow-down',
    note: 'È la scadenza dove si prezza per prima una decisione di settembre, ed è quella da guardare per sapere se la lettura del dato regge. Dopo il rapporto era sceso a 4,158%, meno 8,7 punti base; alle 17:18 è a 4,202%, cioè ne ha restituiti 4,4, poco meno di metà. Resta sotto il 4,245% di ieri, quindi il movimento non è annullato, ma è la gamba che si sta consumando più in fretta, e il 4,25% è il livello oltre il quale il canale dei tassi torna a lavorare contro il metallo.',
  },
  {
    symbol: 'US10Y',
    name: 'Treasury a 10 anni',
    value: '4,655%',
    change: 'meno 1,5 punti base, fra 4,601% e 4,690%',
    tone: 'warn',
    icon: 'arrow-flat',
    note: 'Il decennale aveva percorso in mezz’ora tutta la distanza fra le due tacche dichiarate — massimo 4,690% stamattina, minimo 4,601% dopo il dato, un millesimo sopra la soglia del 4,60% che una condizione di ieri sera chiedeva di superare. Alle 18:20 è a 4,655%, cioè un punto base e mezzo sotto la chiusura di ieri: del calo seguito al rapporto occupazionale non resta quasi niente. Sulla scadenza lunga il mercato ha già smesso di prezzare il dato di stamattina.',
  },
  {
    symbol: 'US30Y',
    name: 'Treasury a 30 anni',
    value: '≈ 5,25%',
    change: 'massimi dal 2007',
    tone: 'bear',
    icon: 'percent',
    note: 'Prezzava tre cose insieme: inflazione persistente, fabbisogno del Tesoro e credibilità restrittiva della Fed. Il piano di rifinanziamento ne toglie una — le aste lunghe non crescono — e restano le altre due.',
  },
  {
    symbol: 'DXY',
    name: 'Dollar Index',
    value: '99,435',
    change: 'meno 0,37%, minimo di giornata 99,280, da 99,808',
    tone: 'bull',
    icon: 'arrow-down',
    note: 'Per due sedute il dollaro era stato la gamba che non si muoveva: quota 100 mai toccata, ma nemmeno un cedimento. Dopo il rapporto occupazionale si è mosso, e ha attraversato la soglia di 99,50 che una condizione dichiarata ieri sera indicava come una delle due metà di un’invalidazione. È la terza conferma indipendente dello stesso movimento, dopo la curva breve e la probabilità di rialzo: quando dollaro, biennale e prezzi a termine si muovono insieme nella stessa direzione, il canale è quello monetario e non quello del rischio.',
  },
  {
    symbol: 'PETROLIO',
    name: 'Greggio Brent',
    value: '82,21 $',
    change: 'chiusura, meno 0,34%, fra 81,52 e 84,40',
    tone: 'warn',
    icon: 'arrow-down',
    note: 'La giornata del greggio riassume la settimana meglio di qualunque commento. Massimo a 84,40 in mattinata; minimo a 81,52 nel primo pomeriggio, sui segnali di distensione fra Iran e Paesi del Golfo; ritorno a 83,65 dopo che ADNOC ha dichiarato quindici navi colpite, un morto e venti feriti; chiusura a 82,21 con il segno meno. Il premio di rischio si è formato e sgonfiato quattro volte in due giorni, e l’ultima ha cancellato in sei ore l’effetto di un danno operativo dichiarato da chi lo subisce. La chiusura sta ventuno centesimi sopra gli 82 dollari, che è la tacca di invalidazione scritta alle 17:25.',
  },
  {
    symbol: 'GOLFO',
    name: 'Patto di difesa della Mecca',
    value: 'attacco a uno, attacco a tutti',
    change: 'firmato, ma senza obblighi militari specifici',
    tone: 'warn',
    icon: 'shield',
    note: 'Firmato alla Mecca — non a Gedda, come indicavano le prime fonti — da bin Salman, Erdogan e Sharif. Il testo contiene la clausola di difesa collettiva, il comunicato non contiene alcuna specifica sugli obblighi militari, non abroga le intese esistenti ed è dichiarato aperto ad altri Paesi della regione. Il negoziato durava da quasi un anno: non è una reazione a questa settimana, è una trattativa lunga che l’escalation ha accelerato. Un alto funzionario saudita si aspetta attacchi coordinati imminenti da milizie irachene e Houthi.',
  },
  {
    symbol: 'TESORO USA',
    name: 'Rifinanziamento trimestrale di agosto',
    value: '125 mld $',
    change: 'aste invariate per diversi trimestri',
    tone: 'bull',
    icon: 'print',
    note: '58 miliardi a tre anni, 42 a dieci, 25 a trenta, più riacquisti fino a 38 miliardi. I 68 miliardi di fabbisogno in più non passano dalle scadenze lunghe: lo shock di offerta che frenava l’oro è rinviato.',
  },
];

/**
 * Riferimenti secondari.
 *
 * Resta vuoto finché non c'è un valore da mettere: la panoramica concatena i
 * due array in un'unica griglia, quindi la distinzione non si vede più a video
 * e non ha senso riempirlo per simmetria. Il DXY è citato nell'ultima analisi,
 * ma senza un numero: senza numero non è un riferimento.
 */
export const MARKET_STRIP: readonly MarketReference[] = [];
