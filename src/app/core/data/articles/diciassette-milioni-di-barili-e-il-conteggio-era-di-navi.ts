import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const diciassetteMilioniDiBarili: Article = {
  slug: 'diciassette-milioni-di-barili-e-il-conteggio-era-di-navi',
  categories: ['rotte-e-approvvigionamento', 'petrolio', 'oro', 'usa'],
  title: 'Diciassette milioni di barili, e il conteggio era di navi',
  kicker: 'Rotte e approvvigionamento · Il contrappeso misurato',
  dek:
    'Le scorte commerciali americane di greggio salgono di 17,4 milioni di barili in una settimana, il maggior ' +
    'aumento da gennaio 2023, contro un consenso che si aspettava un calo. Per sei giorni questo archivio ha ' +
    'misurato la scarsità contando navi in uno stretto: è la prima volta che qualcuno conta i barili arrivati.',
  publishedAt: '2026-08-12T16:52:00+02:00',
  author: AUTHOR,
  readingMinutes: 9,
  tags: ['Scorte EIA', 'Petrolio', 'Hormuz', 'Dollaro', 'Fed'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'DXY', 'Treasury'],
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sul dato, che è una diffusione ufficiale settimanale dell’agenzia statunitense per l’energia, ' +
    'confermata da due rilevazioni indipendenti e accompagnata dal livello complessivo delle scorte. Media ' +
    'sulla lettura, e per una ragione che va detta: la diffusione dà la variazione, non la sua composizione. ' +
    'Un aumento di questa taglia può venire da importazioni in arrivo, da lavorazioni in calo nelle ' +
    'raffinerie, da esportazioni scese o da un rilascio di riserve strategiche, e le quattro spiegazioni ' +
    'hanno significati opposti per il prezzo. Qui il numero viene usato per quello che dimostra — che il ' +
    'racconto sulla scarsità non si sta vedendo nei serbatoi americani — e non per quello che spiegherebbe.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    horizon: 'medio',
    regime:
      'Il canale monetario continua a lavorare per il metallo — la probabilità di un rialzo a settembre ' +
      'scende ancora, al 35,7%, e il biennale resta a 4,184% — ma i due canali che alle 16:05 erano stati ' +
      'contati come favorevoli si sono chiusi entro l’ora. Il dollaro ha restituito per intero il calo del ' +
      'pomeriggio, a 99,709 con variazione di giornata quasi nulla, e l’oro ha lasciato undici dollari dal ' +
      'massimo. Sopra tutto arriva il numero delle 16:30: le scorte americane salgono di 17,4 milioni di ' +
      'barili, quasi il doppio della stima di settore e contro un consenso che ne attendeva 1,7 in meno.',
  },
  takeaways: [
    'Le scorte commerciali statunitensi di greggio salgono di 17,422 milioni di barili nella settimana al 7 agosto, a 424,4 milioni complessivi: è il maggior aumento settimanale da gennaio 2023. Il consenso attendeva un calo di 1,7 milioni, e la rilevazione preliminare dell’associazione di settore ne aveva indicati 9,1.',
    'È la quinta condizione di invalidazione scritta stamattina alle 11:00, ed è scattata con un margine quasi doppio rispetto a quello che la condizione nominava.',
    'Per sei giorni la scarsità è stata misurata qui contando transiti in uno stretto. Un transito è un flusso stimato da un fornitore privato; una scorta è uno stock ufficiale. Sulla scala dei vincoli usata in questo archivio, il secondo pesa più del primo — e dice il contrario.',
    'Il dollaro ha restituito tutto: 99,709 contro i 99,615 su cui era stata scritta l’analisi delle 16:05, con variazione di giornata quasi nulla dopo un minimo a 99,500. L’oro spot lascia undici dollari dal massimo, a 4.418,15.',
    'Resta il canale che non si è chiuso: la probabilità di un rialzo a settembre scende ancora, dal 37,7% delle 15:50 al 35,7%, e il biennale resta a 4,184% dopo il calo del dato.',
  ],
  sources: [
    {
      outlet: 'U.S. Energy Information Administration',
      title: 'Weekly Petroleum Status Report',
    },
    { outlet: 'Investing.com' },
    { outlet: 'Trading Economics' },
    { outlet: 'Reuters' },
    { outlet: 'The Wall Street Journal' },
  ],
  invalidation: [
    'Il dettaglio settimanale che attribuisse l’aumento a un rilascio di riserve strategiche invece che a importazioni, lavorazioni o domanda: cambierebbe il significato del numero senza cambiarne la taglia, perché una riserva che si svuota non è offerta che abbonda.',
    'Un Brent che torna sopra i 90,06 dollari del massimo odierno entro la chiusura di venerdì: direbbe che il mercato ha guardato il numero e ha deciso che i barili nei serbatoi americani non c’entrano con i barili che non passano da Hormuz.',
    'Un oro che chiude sotto i 4.362,57 dollari, il minimo di questa giornata: toglierebbe anche il canale monetario, che è l’unico rimasto in piedi.',
    'Una probabilità di rialzo a settembre che risale sopra il 37,7% delle 15:50 entro venerdì, cioè sopra la lettura di un’ora fa invece che sopra un livello tondo: direbbe che la discesa si è fermata e che il canale monetario ha smesso di lavorare.',
    'Un’asta del decennale alle 19:00 che si aggiudica sopra il quotato pre-asta, con il rendimento riportato sopra il 4,688% del massimo odierno: riporterebbe la parte lunga della curva contro il metallo a prescindere da tutto il resto.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto, 19:00 italiane',
    title: 'Collocamento di titoli del Tesoro statunitense a dieci anni, 39 miliardi',
    detail:
      'È la prova sulla parte lunga della curva rimandata due volte, e l’unico appuntamento che oggi può ' +
      'ancora spostare il quadro. Giovedì il trentennale e i prezzi alla produzione di luglio alle 14:30, ' +
      'che sono il dato su cui verificare se il greggio di agosto sta entrando nei costi prima di entrare ' +
      'nei prezzi al consumo. Il dettaglio della diffusione sulle scorte — importazioni, lavorazioni, ' +
      'esportazioni, riserve strategiche — è pubblicato nella stessa tabella settimanale e va letto lì.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Alle 16:30 l’agenzia statunitense per l’energia ha pubblicato la rilevazione settimanale sulle ' +
        'scorte di greggio, e il numero è di quelli che non si possono arrotondare. Nella settimana ' +
        'conclusa il 7 agosto le scorte commerciali sono salite di 17,422 milioni di barili, portando il ' +
        'totale a 424,4 milioni: è il maggior aumento settimanale dal gennaio 2023. Il consenso si ' +
        'aspettava un calo di 1,7 milioni, e la rilevazione preliminare dell’associazione di settore — ' +
        'quella che ieri sera e stamattina questo archivio ha citato due volte come «il contrappeso che ' +
        'nessuno sta prezzando» — ne aveva indicati 9,1. Il contrappeso c’era, ed era quasi il doppio.',
    },
    {
      kind: 'stats',
      caption:
        'Diffusione ufficiale delle 16:30 e prezzi rilevati fra le 16:44 e le 16:50; non sono chiusure ufficiali.',
      items: [
        {
          label: 'Scorte USA',
          value: '+17,4 mln',
          note: 'Barili, settimana al 7 agosto, a 424,4 milioni complessivi. Consenso −1,7; stima di settore +9,1; settimana precedente +2,5',
        },
        {
          label: 'Brent',
          value: '88,53 $',
          note: 'Meno 0,43% dopo un massimo di 90,06 e un minimo di 88,14. Circa 87,1 sulla serie usata in questo archivio',
        },
        {
          label: 'XAU/USD',
          value: '4.418,15 $',
          note: 'Più 1,14% sulla chiusura di 4.368,15, ma undici dollari sotto la lettura delle 15:50. Intervallo 4.362,57-4.441,01',
        },
        {
          label: 'Dollar Index',
          value: '99,709',
          note: 'Variazione di giornata quasi nulla, dopo un minimo a 99,500 e un massimo a 99,795: il calo del pomeriggio è stato restituito per intero',
        },
        {
          label: 'Rialzo settembre',
          value: '35,7%',
          note: 'Dal 37,7% delle 15:50 e dal 52% del 10 agosto. Alla permanenza al 3,50-3,75% è attribuito il 64,3%',
        },
        {
          label: 'Treasury 2 anni',
          value: '4,184%',
          note: 'Meno 3,4 punti base sulla chiusura di 4,218%, che è anche il massimo odierno. Il decennale è a 4,670%',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Il conteggio era di navi, e questo è un conteggio di barili',
      anchor: 'navi-e-barili',
    },
    {
      kind: 'paragraph',
      text:
        'Vale la pena essere espliciti su che cosa questo numero fa a quello che è stato scritto qui. Dal 5 ' +
        'agosto la tesi sulla scarsità di greggio poggia su tre gambe: la previsione dell’agenzia americana ' +
        'che dà 600.000 barili al giorno indisponibili fino a fine 2027, la revisione dell’agenzia ' +
        'internazionale che porta l’offerta mondiale attesa nel 2026 a meno 4,3 milioni di barili al giorno, ' +
        'e il conteggio dei transiti nello Stretto di Hormuz, sceso a otto navi martedì con una sola in ' +
        'uscita. Le tre gambe erano state anche messe in ordine, con una regola dichiarata: una previsione a ' +
        'diciassette mesi vale meno di un transito contato, perché l’agenzia dichiara un’attesa mentre il ' +
        'conteggio toglie una nave dal numero.',
    },
    {
      kind: 'paragraph',
      text:
        'Quella regola adesso si applica un gradino più in basso, e il gradino non è dalla parte comoda. Un ' +
        'transito è un flusso stimato da un fornitore privato su segnali di navigazione, e i due fornitori ' +
        'che questo archivio usa non concordano fra loro nemmeno sullo stesso giorno — otto contro undici ' +
        'per martedì. Una scorta è uno stock: non si stima, si misura, la pubblica l’ente statistico del ' +
        'governo che sarebbe il primo a soffrire di un errore, e viene con accanto il livello complessivo ' +
        'che permette di controllarne la coerenza nel tempo. Sulla scala dei vincoli materiali usata in ' +
        'questo archivio, il barile nel serbatoio batte la nave contata, e il barile nel serbatoio dice il ' +
        'contrario.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Non è la stessa domanda, ed è per questo che è informativa',
      text:
        'Le due misure non si contraddicono nel senso stretto, e sarebbe disonesto presentarle così. I ' +
        'transiti misurano un flusso attraverso un collo di bottiglia specifico; le scorte misurano quanto ' +
        'greggio sta fermo nei serbatoi di un solo Paese, che per giunta è il maggior produttore mondiale e ' +
        'importa una quota decrescente del proprio fabbisogno dal Golfo. Barili scarsi a Hormuz e barili ' +
        'abbondanti a Cushing possono convivere benissimo. Ma è esattamente questo il punto da dire ad alta ' +
        'voce: per sei giorni questo archivio ha usato un flusso attraverso uno stretto per ragionare su un ' +
        'vincolo di offerta globale, e non aveva mai controllato se quel vincolo stesse arrivando al mercato ' +
        'che fissa il prezzo. Adesso il controllo c’è, ed è negativo.',
    },
    {
      kind: 'heading',
      text: 'Quattro spiegazioni, e non sono equivalenti',
      anchor: 'quattro-spiegazioni',
    },
    {
      kind: 'paragraph',
      text:
        'Che cosa produca un aumento di questa taglia, la diffusione non lo dice nel titolo. Le strade sono ' +
        'quattro e portano a conclusioni diverse. Se sono arrivate più importazioni, il greggio circola più ' +
        'di quanto le tre gambe della tesi lascino credere. Se le raffinerie hanno lavorato meno, il ' +
        'problema si sposta a valle e riguarda i margini, non i barili. Se le esportazioni sono scese, i ' +
        'barili sono rimasti dentro per una ragione commerciale o logistica e il mondo fuori resta corto ' +
        'come prima. Se è stato rilasciato greggio dalle riserve strategiche, allora non è offerta che ' +
        'abbonda ma un ammortizzatore che si consuma, e il numero significa il contrario di quello che ' +
        'sembra.',
    },
    {
      kind: 'scenarios',
      items: [
        {
          label: 'Il prezzo',
          tone: 'bear',
          text:
            'Il Brent scende dello 0,43% a 88,53 dollari, dopo essere arrivato a 90,06 in mattinata. È una ' +
            'reazione contenuta per un dato di questa dimensione, e va letta insieme alla giornata: il ' +
            'greggio era già in ritirata dai massimi prima delle 16:30.',
        },
        {
          label: 'L’oro',
          tone: 'warn',
          text:
            'Il metallo resta in guadagno sulla giornata, più 1,14% a 4.418,15 dollari, ma ha lasciato ' +
            'undici dollari rispetto alla rilevazione delle 15:50 e ventitré rispetto al massimo di ' +
            '4.441,01. Il massimo non è stato riavvicinato dopo il dato sulle scorte.',
        },
        {
          label: 'La curva',
          tone: 'bull',
          text:
            'La parte breve continua a prezzare meno Fed — biennale a 4,184%, meno 3,4 punti base — mentre ' +
            'il decennale scende solo di 1,4 punti a 4,670%. La divergenza fra le due scadenze descritta ' +
            'stamattina resta, e stasera l’asta la mette alla prova.',
        },
        {
          label: 'Il dollaro',
          tone: 'bear',
          text:
            'È il dato che cambia di più rispetto a un’ora fa. Il Dollar Index è a 99,709 con variazione ' +
            'di giornata quasi nulla: ha toccato 99,500 e da lì è risalito. Il calo su cui poggiava una ' +
            'parte della lettura delle 16:05 non esiste più.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Due canali su tre si sono chiusi in un’ora',
      anchor: 'due-canali-su-tre',
    },
    {
      kind: 'paragraph',
      text:
        'Alle 16:05 questa scheda ha pubblicato che, per la prima volta in tutta la fase, tassi, cambio e ' +
        'attese sulla Fed si muovevano insieme a favore del metallo: probabilità di rialzo al 37,7%, ' +
        'biennale a 4,180%, dollaro a 99,615, oro a 4.429,54. Quarantacinque minuti dopo due di quei ' +
        'quattro numeri sono tornati indietro. Il dollaro ha restituito il calo per intero e l’oro ha ' +
        'lasciato undici dollari; il terzo canale invece si è rafforzato, perché la probabilità di un ' +
        'rialzo è scesa ancora, al 35,7%, e il biennale è rimasto giù.',
    },
    {
      kind: 'paragraph',
      text:
        'Va registrato come correzione e non come aggiornamento di prezzo, perché la differenza è di ' +
        'sostanza. Quella lettura non diceva «l’oro sale», diceva «l’oro sale con tutti e tre i canali ' +
        'dalla stessa parte», e la composizione era l’argomento. Se due dei tre si chiudono entro l’ora, ' +
        'quello che resta è un canale solo — quello monetario — che però è anche il più solido dei tre, ' +
        'perché poggia su una diffusione statistica invece che su un movimento di cambio. La direzione ' +
        'quindi non cambia; cambia la ragione per cui la si tiene, e questo va scritto adesso, non quando ' +
        'converrà.',
    },
    {
      kind: 'balance',
      title: 'Un dato ufficiale contro una tesi, e un canale che regge',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'La probabilità di un rialzo a settembre scende ancora, al 35,7% dal 37,7% delle 15:50 e dal 52% del 10 agosto: la discesa non si è fermata al primo titolo.',
          'Il biennale resta a 4,184%, sotto la chiusura di 4,218% che è anche il massimo odierno: la misura scelta l’11 agosto continua a confermare.',
          'Un aumento record delle scorte toglie pressione al canale energia-inflazione, che è la sola ragione rimasta al mercato per prezzare una Fed più restrittiva.',
          'Il decennale scende a 4,670%, sotto la soglia del 4,70% seguita qui e sotto il massimo odierno di 4,688%.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Il dollaro ha restituito per intero il calo del pomeriggio: 99,709, con variazione di giornata quasi nulla dopo un minimo a 99,500.',
          'L’oro ha lasciato undici dollari dalla lettura delle 15:50 e ventitré dal massimo di 4.441,01, senza riavvicinarlo dopo il dato.',
          'Il premio geopolitico che ha sostenuto il metallo per una settimana poggia su una scarsità che i serbatoi americani non stanno confermando.',
          'Alle 19:00 l’asta del decennale da 39 miliardi: la prova sulla parte lunga della curva è ancora da fare, per la terza volta.',
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
        'La direzione resta neutrale con inclinazione rialzista e la forza resta media, ma le due cose ' +
        'poggiano ora su una gamba sola invece che su tre, ed è giusto che il lettore lo sappia. Il canale ' +
        'monetario funziona e si è rafforzato durante il pomeriggio: un dato di inflazione sul consenso, ' +
        'una probabilità di rialzo che scende di sedici punti in due giorni, una scadenza a due anni che ' +
        'conferma. A questo si aggiunge, e non toglie, il numero delle scorte: meno pressione sul greggio ' +
        'significa meno carburante per l’unico argomento restrittivo rimasto alla Fed.',
    },
    {
      kind: 'paragraph',
      text:
        'Non sale a rialzista per la ragione opposta e simmetrica. La stessa diffusione che indebolisce ' +
        'l’argomento restrittivo indebolisce anche il premio geopolitico, che è quello che ha portato il ' +
        'metallo da 4.060 a 4.440 dollari in sei sedute. Un mercato che smette di credere alla scarsità di ' +
        'greggio ha meno ragioni per pagare un rifugio, e i due effetti tirano l’oro in versi opposti con ' +
        'forze che non è possibile pesare oggi. Quando lo stesso fatto spinge in due direzioni, la ' +
        'direzione da scrivere sta in mezzo — e la forza bassa non è il posto dove si nasconde ' +
        'un’ambiguità di direzione.',
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'La condizione era scritta stamattina, e non è un caso',
      text:
        'Alle 11:00 questa scheda ha elencato cinque condizioni che avrebbero invalidato la propria ' +
        'lettura, e la quinta era: «il dato ufficiale sulle scorte che conferma l’aumento di 9,1 milioni ' +
        'di barili». È scattata, e con un margine quasi doppio rispetto a quello che nominava. Vale la ' +
        'pena notare che cosa questo dice del metodo più che del mercato: la condizione era stata scritta ' +
        'sapendo che il dato preliminare andava contro la tesi del pezzo, ed è stata messa in elenco lo ' +
        'stesso. L’esito di quell’analisi sarà registrato quando saranno risolte anche le altre quattro ' +
        'condizioni, che scadono con la chiusura di oggi e con il conteggio dei transiti di mercoledì: ' +
        'chiuderlo adesso significherebbe giudicare al buio due condizioni su cinque, ed è l’errore che ' +
        'questo registro ha già commesso una volta ieri sera.',
    },
    {
      kind: 'note',
      text:
        'Il dato sulle scorte è la diffusione settimanale dell’agenzia statunitense per l’energia relativa ' +
        'alla settimana conclusa il 7 agosto, letta attraverso due rilevazioni indipendenti che concordano ' +
        'sulla cifra — 17,422 e 17,423 milioni di barili — e sul livello complessivo di 424,4 milioni; il ' +
        'documento originale in formato PDF non si è lasciato leggere direttamente. La composizione ' +
        'dell’aumento non è stata verificata e nel testo non le viene attribuita una causa. Le quotazioni ' +
        'sono rilevazioni fra le 16:44 e le 16:50 e non sono chiusure ufficiali. Il Brent citato appartiene ' +
        'alla serie che venerdì 7 agosto ha chiuso a 83,55 dollari, mentre le tacche di questo archivio ' +
        'sono fissate sulla serie che ha chiuso a 82,21: la conversione a circa 87,1 applica la stessa ' +
        'variazione percentuale ed è approssimata. Il prezzo dell’oro citato è lo spot: il contratto future ' +
        'americano scambia una sessantina di dollari sopra, a 4.482,00 con un massimo di 4.500,90, e tutte ' +
        'le soglie di questo archivio restano fissate sullo spot. Il livello del WTI a circa 83,8 dollari ' +
        'proviene dal controllo ricevuto e non è stato riverificato dopo la diffusione. I livelli di prezzo ' +
        'servono a rendere verificabile il ragionamento e non sono obiettivi.',
    },
  ],
};
