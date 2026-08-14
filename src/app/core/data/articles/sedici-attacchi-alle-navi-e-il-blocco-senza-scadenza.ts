import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const sediciAttacchiAlleNavi: Article = {
  slug: 'sedici-attacchi-alle-navi-e-il-blocco-senza-scadenza',
  categories: ['rotte-e-approvvigionamento', 'medio-oriente', 'petrolio', 'oro'],
  title: 'Sedici attacchi alle navi, e un blocco senza scadenza',
  kicker: 'Rotte e approvvigionamento · Anche l’escalation ha un conteggio',
  dek:
    'Due navi di ADNOC sono state colpite giovedì sera nello Stretto, il secondo episodio in meno di una ' +
    'settimana e almeno il sedicesimo dal 28 febbraio. Nella stessa giornata Washington dichiara di poter ' +
    'mantenere il blocco dei porti iraniani a tempo indefinito. Per due settimane questo archivio ha ' +
    'contato annunci di distensione contro transiti fermi: adesso il conteggio esiste anche dall’altra parte.',
  publishedAt: '2026-08-14T10:20:00+02:00',
  author: AUTHOR,
  readingMinutes: 8,
  tags: ['ADNOC', 'Stretto di Hormuz', 'Blocco navale', 'Goolsbee'],
  instruments: ['XAU/USD', 'Brent', 'Treasury'],
  horizons: ['breve', 'lungo'],
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti: l’attacco alle due navi di ADNOC è confermato dal ministero degli Esteri emiratino e ' +
    'ripreso da più testate, la dichiarazione di Hegseth è citata testualmente, l’intervento di Goolsbee è ' +
    'verificato, e i prezzi sono rilevazioni dirette. Media sull’effetto: la catena che porta da un attacco ' +
    'alle navi al prezzo dell’oro passa per il greggio, e giovedì il greggio è sceso del 2,1% mentre ' +
    'l’attacco avveniva. Il conteggio dei transiti di mercoledì e giovedì — cinque e nove navi — è ' +
    'attribuito a Kpler dalle agenzie ma non è stato verificato qui su una fonte indipendente: è riportato ' +
    'come tale e non è la base di nessuna conclusione.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'bassa',
    horizon: 'breve',
    regime:
      'L’escalation è reale e misurabile, e il metallo non la sta prezzando. Giovedì sera due navi vengono ' +
      'colpite nello Stretto, Washington dichiara il blocco senza scadenza, il Tesoro americano annuncia ' +
      'nuove misure, e l’oro chiude la seduta a 4.351,07 dollari, cioè al minimo e trentotto centesimi ' +
      'sotto il livello che l’analisi delle 19:15 aveva scritto come propria condizione di invalidazione. ' +
      'La direzione sull’orizzonte più stretto resta quindi neutrale con inclinazione ribassista, ' +
      'esattamente per la ragione che l’ha portata lì ieri sera: i motivi per salire continuano ad ' +
      'arrivare e il prezzo continua a non rispondere. Sul canale energetico il verso è ambiguo e va detto: ' +
      'un blocco senza scadenza sostiene il rifugio, ma se riporta il greggio verso i 95 dollari torna a ' +
      'lavorare contro il metallo attraverso l’inflazione e i rendimenti.',
  },
  takeaways: [
    'Gli Emirati accusano l’Iran di aver colpito due navi di ADNOC giovedì sera nello Stretto di Hormuz. Nessun ferito, situazione riportata sotto controllo, e nessuna risposta iraniana al momento della pubblicazione.',
    'È il secondo episodio in meno di una settimana e almeno il sedicesimo dal 28 febbraio: una campagna che nel complesso ha ucciso un membro d’equipaggio e ferito venti persone. Il ministero degli Esteri emiratino lo definisce «pirateria».',
    'Il segretario alla Difesa Hegseth dichiara che la Marina può mantenere il blocco «a tempo indefinito», ruotando le unità. Il segretario al Tesoro Bessent annuncia nuove misure per la prossima settimana, senza dettagli: resta un annuncio, non una sanzione operativa.',
    'Austan Goolsbee è la terza voce della Fed in due giorni: dati d’inflazione «un po’ migliori» e fiducia nel ritorno verso il 2% se dazi e petrolio rientrano, ma un’inflazione al 3% resta troppo alta. Non è un’apertura a tagli.',
    'L’oro ha chiuso a 4.351,07 dollari, trentotto centesimi sotto il minimo che l’analisi delle 19:15 aveva indicato come proprio livello di rottura. Il greggio è sceso del 2,1% a 87,07 nella stessa seduta in cui le navi venivano colpite.',
  ],
  sources: [
    {
      outlet: 'Reuters',
      title: 'UAE says Iran attacked two ADNOC vessels in Strait of Hormuz; no injuries',
      at: '13 agosto 2026',
    },
    {
      outlet: 'Al Jazeera',
      title: 'UAE accuses Iran of attacks on two ADNOC vessels in Strait of Hormuz',
    },
    { outlet: 'The National', title: 'UAE condemns attack on two Adnoc ships in Strait of Hormuz' },
    {
      outlet: 'Times of Israel',
      title: 'US can keep naval blockade on Iranian ports «indefinitely», Hegseth says',
    },
    {
      outlet: 'investingLive',
      title: 'Fed’s Goolsbee says inflation data improving, hopes tariff effects fade',
    },
    {
      outlet: 'Investing.com',
      title: 'Rilevazioni di prezzo su oro, Brent, Dollar Index e rendimenti',
    },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Per due settimane questa scheda ha tenuto un conteggio solo: quante volte veniva annunciata una ' +
        'distensione su Hormuz, contro quante navi passavano davvero. Sei annunci in quattro giorni e otto ' +
        'transiti al giorno, contro i 125-140 di prima del conflitto. Il conteggio serviva a distinguere ' +
        'quello che viene dichiarato da quello che viene misurato, e stava tutto dalla stessa parte: le ' +
        'parole promettevano una riapertura che i numeri non confermavano. Giovedì sera arriva un numero ' +
        'che sta dall’altra parte, ed è il sedici.',
    },
    {
      kind: 'heading',
      text: 'Due navi, e una campagna che dura da febbraio',
    },
    {
      kind: 'paragraph',
      text:
        'Gli Emirati Arabi Uniti accusano l’Iran di aver attaccato due navi della compagnia petrolifera di ' +
        'Stato ADNOC mentre transitavano nello Stretto giovedì sera. La compagnia conferma l’incidente e ' +
        'dichiara che la situazione è stata riportata sotto controllo; non risultano feriti. Il ministero ' +
        'degli Esteri emiratino usa la parola «pirateria» e definisce il tentativo iraniano di usare lo ' +
        'Stretto come strumento di coercizione economica una minaccia diretta alla stabilità della regione ' +
        'e all’approvvigionamento energetico mondiale. Al momento della pubblicazione l’Iran non aveva ' +
        'risposto.',
    },
    {
      kind: 'paragraph',
      text:
        'Il fatto singolo conta meno del conteggio che lo contiene. È il secondo episodio contro navi ' +
        'collegate ad ADNOC in meno di una settimana — il precedente è dell’8 agosto — ed è almeno il ' +
        'sedicesimo dal 28 febbraio, in una campagna condotta con missili e droni che nel complesso ha ' +
        'ucciso un membro d’equipaggio e ferito venti persone. Sedici episodi in cinque mesi e mezzo non ' +
        'sono un incidente: sono una frequenza, ed è la prima grandezza materiale che questo archivio può ' +
        'mettere sul lato dell’escalation invece che su quello degli annunci.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il metro vale in entrambi i versi',
      text:
        'La regola usata qui da due settimane è che una dichiarazione non sposta un vincolo materiale: ' +
        'sei annunci di distensione non hanno fatto passare una nave in più. La stessa regola va applicata ' +
        'adesso che le dichiarazioni vanno nel verso opposto. «Blocco a tempo indefinito» e «nuove misure ' +
        'la prossima settimana» sono due frasi, e finché restano frasi valgono quanto valevano le altre. ' +
        'Quello che è cambiato davvero è il numero degli attacchi alle navi, perché quello è un fatto ' +
        'contato: sedici dal 28 febbraio, due in una settimana. La differenza fra le due cose è la stessa ' +
        'di sempre, e riconoscerla quando l’escalation fa comodo alla lettura di fondo costa più che ' +
        'riconoscerla quando fa comodo la distensione.',
    },
    {
      kind: 'heading',
      text: 'Il blocco perde la scadenza',
    },
    {
      kind: 'paragraph',
      text:
        'Il segretario alla Difesa Pete Hegseth ha dichiarato che la Marina statunitense può mantenere il ' +
        'blocco dei porti iraniani per un periodo illimitato: «Indefinitamente la Marina degli Stati Uniti ' +
        'può mantenere un blocco del genere, perché ruoteremo le navi dentro e fuori, come abbiamo già ' +
        'fatto, e continueremo a farlo». La formulazione è tecnica e per questo pesa: non promette una ' +
        'volontà politica, descrive una capacità logistica. La strategia americana passa così da pressione ' +
        'a tempo determinato a una stretta senza data di scadenza dichiarata, mentre i negoziati restano ' +
        'fermi e Teheran continua a subordinare la riapertura dello Stretto a concessioni.',
    },
    {
      kind: 'paragraph',
      text:
        'Il segretario al Tesoro Scott Bessent ha annunciato per la prossima settimana nuove misure di ' +
        'isolamento economico contro l’Iran, senza fornirne il contenuto. Su questo la distinzione va ' +
        'tenuta ferma: è un annuncio, non una sanzione in vigore. Rientra nella stessa categoria delle sei ' +
        'dichiarazioni di distensione contate la settimana scorsa, con il segno rovesciato.',
    },
    {
      kind: 'stats',
      title: 'La seduta di giovedì, e la mattina dopo',
      caption:
        'Chiusure del 13 agosto e rilevazioni delle 10:30 del 14; i prezzi non sono chiusure ufficiali. ' +
        'Il conteggio dei transiti è attribuito a Kpler dalle agenzie e non è stato verificato qui.',
      items: [
        {
          label: 'XAU/USD, chiusura 13/8',
          value: '4.351,07 $',
          tone: 'bear',
          note: 'Trentotto centesimi sotto i 4.351,45 che l’analisi delle 19:15 aveva scritto come proprio livello di rottura',
        },
        {
          label: 'Brent, chiusura 13/8',
          value: '87,07 $',
          tone: 'neutral',
          note: 'Meno 2,1% nella seduta in cui le due navi venivano colpite: scorte e domanda hanno prevalso sul rischio',
        },
        {
          label: 'Attacchi a navi ADNOC',
          value: '≥ 16',
          tone: 'warn',
          note: 'Dal 28 febbraio, con missili e droni: un morto e venti feriti. Due negli ultimi sette giorni',
        },
        {
          label: 'Transiti a Hormuz',
          value: '5 → 9',
          tone: 'warn',
          note: 'Mercoledì e giovedì secondo Kpler, contro una media di agosto di circa 12 e 125-140 prima del conflitto',
        },
        {
          label: 'Rialzo Fed a settembre',
          value: '33,0%',
          tone: 'bull',
          note: 'Contro il 35,0% di ieri e circa il 55% di una settimana fa: la riprezzatura regge',
        },
        {
          label: 'Dollar Index',
          value: '99,637',
          tone: 'bull',
          note: 'Meno 0,22% sulla chiusura di 99,855, sul minimo di giornata: il cambio non è la causa della debolezza del metallo',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Goolsbee, terza voce in due giorni',
    },
    {
      kind: 'paragraph',
      text:
        'Austan Goolsbee, presidente della Fed di Chicago, ha detto che gli ultimi dati sull’inflazione ' +
        'sono «un po’ migliori» e che, se gli effetti dei dazi e del petrolio legato alla guerra iraniana ' +
        'finissero alle spalle, si tornerebbe su quella che ha chiamato la strada maestra, cioè ' +
        'un’inflazione che rientra verso il 2%. Ha aggiunto però che un livello complessivo intorno al 3% ' +
        'resta troppo alto.',
    },
    {
      kind: 'scenarios',
      title: 'Tre presidenti di Fed in quarantott’ore',
      caption:
        'Nessuno dei tre ha voto garantito sulla decisione di settembre: sono preferenze dichiarate, non atti a verbale.',
      items: [
        {
          label: 'Hammack',
          tone: 'bear',
          text: 'Chiede un rialzo immediato. È l’unica delle tre posizioni che ha già un atto dietro: il dissenso messo a verbale il 29 luglio.',
        },
        {
          label: 'Barkin',
          tone: 'neutral',
          text: 'Non è affatto certo che servano altri rialzi, e il livello attuale potrebbe già essere abbastanza restrittivo. Ma avverte che un’inflazione sopra obiettivo da anni può radicarsi.',
        },
        {
          label: 'Goolsbee',
          tone: 'bull',
          text: 'I dati sono un po’ migliori e la strada verso il 2% è aperta se dazi e petrolio rientrano. Con la stessa frase ricorda che il 3% è troppo alto: è un rinvio motivato, non un’apertura.',
        },
      ],
    },
    {
      kind: 'paragraph',
      text:
        'Il ventaglio si è allargato in due giorni, e il numero che lo riassume si è mosso poco: la ' +
        'probabilità di un rialzo a settembre è al 33,0%, contro il 35,0% di ieri e circa il 55% di una ' +
        'settimana fa. La riprezzatura prodotta dai prezzi al consumo e da quelli alla produzione non è ' +
        'stata contraddetta da nessuno dei tre interventi, ed è la gamba più solida che la lettura di ' +
        'fondo abbia in questo momento.',
    },
    {
      kind: 'heading',
      text: 'La correzione di un numero pubblicato qui',
    },
    {
      kind: 'paragraph',
      text:
        'L’analisi delle 20:30 di ieri ha scritto che il future dell’oro «di agosto» aveva chiuso a ' +
        '4.363,60 dollari. Il riferimento corretto per una chiusura di metà agosto non è il contratto di ' +
        'agosto, che a quel punto è in consegna, ma quello attivo: il settlement riportato dalle agenzie ' +
        'per il 13 agosto è 4.420,40 dollari, meno 1,1%, e la catena regge nei giorni successivi, perché ' +
        'stamattina lo stesso contratto è a 4.382,50. La direzione e l’ordine di grandezza della perdita ' +
        'restano quelli — poco più di un punto percentuale — ma il numero e l’etichetta del contratto ' +
        'erano sbagliati, e il testo pubblicato non si tocca.',
    },
    {
      kind: 'note',
      text:
        'È la seconda correzione in due giorni su un numero riportato da questa scheda, dopo quella sul ' +
        'livello pre-asta del trentennale. Le due hanno però una natura diversa: la prima riguardava un ' +
        'confronto sbagliato e ne rovesciava la conclusione, questa riguarda un contratto identificato ' +
        'male e non cambia nessuna lettura. Vengono registrate con lo stesso rilievo perché la distinzione ' +
        'la faccia chi legge, non chi scrive.',
    },
    {
      kind: 'balance',
      title: 'Un rischio che sale e un prezzo che non lo segue',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Sedici attacchi a navi di ADNOC dal 28 febbraio, due in una settimana: la frequenza sale ed è un fatto contato, non dichiarato.',
          'Un blocco navale dichiarato senza scadenza allontana la riapertura dello Stretto invece di avvicinarla, perché la trasforma in una concessione da negoziare.',
          'La probabilità di un rialzo a settembre scende al 33,0% e nessuno dei tre interventi di Fed di questi due giorni l’ha contraddetta.',
          'Il Dollar Index è a 99,637, sul minimo di giornata: il cambio non sta lavorando contro il metallo.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'L’oro ha chiuso a 4.351,07, cioè sotto il livello che l’analisi delle 19:15 aveva indicato come propria rottura, nella stessa sera in cui due navi venivano colpite.',
          'Il greggio è sceso del 2,1% mentre l’attacco avveniva: il canale che dovrebbe trasmettere il rischio al metallo non ha trasmesso niente.',
          'Le nuove misure americane sono un annuncio senza contenuto pubblicato, e su questa scala valgono quanto gli annunci di distensione già contati.',
          'Se il blocco senza scadenza riportasse il Brent verso i 95 dollari, il canale energetico tornerebbe a pesare sull’oro attraverso rendimenti e inflazione invece che sostenerlo.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
    },
    {
      kind: 'paragraph',
      text:
        'Sull’orizzonte più stretto la direzione resta neutrale con inclinazione ribassista e la forza ' +
        'resta bassa, e la ragione non è cambiata da ieri sera: continuano ad arrivare motivi per salire e ' +
        'il prezzo continua a non rispondere. La sera in cui due navi vengono colpite nello Stretto e ' +
        'Washington dichiara un blocco senza scadenza, il metallo chiude al minimo di giornata. Non è una ' +
        'previsione di discesa: è la constatazione che il canale del rifugio, in questa fase, non sta ' +
        'trasmettendo.',
    },
    {
      kind: 'paragraph',
      text:
        'Sull’orizzonte lungo la lettura non cambia e la sua gamba geopolitica si irrobustisce. Un blocco ' +
        'senza scadenza dichiarata e sedici attacchi in cinque mesi e mezzo descrivono una struttura di ' +
        'sicurezza regionale che si sta assestando su un livello di rischio più alto, e le riserve ' +
        'ufficiali comprano contro quella struttura, non contro la seduta di giovedì. È il tipo di ' +
        'grandezza che si misura sui trimestri e che il prezzo di una mattina non conferma né smentisce.',
    },
  ],
  invalidation: [
    'Una risposta ufficiale iraniana che rivendichi o smentisca l’attacco alle due navi di ADNOC: qui l’episodio è registrato come accusa emiratina non ancora contestata, e una posizione di Teheran ne cambierebbe lo stato.',
    'Un conteggio dei transiti nello Stretto, venerdì o lunedì, sopra la media di agosto di circa dodici navi al giorno: direbbe che la frequenza degli attacchi non sta riducendo il passaggio e che il vincolo materiale si sta allentando invece di stringersi.',
    'Un Brent che chiude sopra i 90 dollari entro lunedì: sposterebbe il canale energetico dal sostegno al rifugio alla pressione sui rendimenti, e la direzione di questa lettura andrebbe rivista al ribasso invece che al rialzo.',
    'Le misure annunciate da Bessent pubblicate entro la prossima settimana con un contenuto operativo verificabile: farebbero passare quell’annuncio dalla colonna delle dichiarazioni a quella dei fatti, che è la distinzione su cui questa analisi poggia.',
    'Un oro che chiude sopra i 4.400 dollari entro venerdì: toglierebbe il fondamento all’osservazione centrale, cioè che il metallo non risponde neanche a un’escalation materiale.',
  ],
  nextEvent: {
    when: 'Venerdì 14 agosto, 14:30 italiane',
    title: 'Vendite al dettaglio statunitensi di luglio',
    detail:
      'È il primo dato macro dopo i prezzi alla produzione e le richieste di sussidio, e serve a separare ' +
      'le due spiegazioni rimaste della debolezza del metallo: prese di profitto oppure rotazione verso ' +
      'il rischio. Se la domanda interna è forte, la seconda ha un fondamento misurabile; se è debole e ' +
      'l’oro continua a non salire, entrambe cadono. Tre analisi in archivio hanno una condizione ' +
      'agganciata a questa diffusione.',
  },
};
