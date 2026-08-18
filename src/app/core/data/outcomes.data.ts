import { Outcome } from '../models/article.model';

/**
 * Registro degli esiti: come sono andate a finire le analisi pubblicate.
 *
 * Ogni analisi dichiara prima, sotto `invalidation`, l'elenco delle condizioni
 * che la renderebbero sbagliata. Questo archivio torna a controllarle una per
 * una quando il tempo è passato, e registra che cosa è successo davvero.
 *
 * Tre regole, e sono tutte e tre importanti:
 *
 * 1. **L'analisi non si tocca mai.** L'esito vive qui, in un file separato e in
 *    sola aggiunta. Se si potesse ritoccare l'analisi dopo aver visto come è
 *    andata, questo registro misurerebbe la memoria di chi lo compila e non le
 *    sue previsioni.
 * 2. **Il verdetto si ricava dalle condizioni, non dall'impressione.** Prima si
 *    ricontrolla ogni voce di `invalidation` con il numero che si è visto, poi
 *    si scrive il verdetto. Nell'ordine inverso si finisce sempre per giudicare
 *    «sostanzialmente giusta» qualunque lettura di cui si conosce già l'esito.
 * 3. **Anche il silenzio è un esito.** Un'analisi che nessuno ha ricontrollato
 *    in tempo utile si registra come `senza-verifica`. Ometterla farebbe di
 *    questo archivio una raccolta delle analisi che faceva comodo controllare.
 *
 * L'archivio si popola **in avanti**, un'analisi alla volta, prima di ogni nuova
 * pubblicazione. Non è stato riempito a posteriori con le ventidue analisi
 * precedenti di proposito: inventare esiti per analisi di cui si conosce già la
 * fine sarebbe esattamente l'errore che l'archivio esiste per impedire.
 */
export const OUTCOMES: readonly Outcome[] = [
  {
    slug: 'l-agenzia-mette-una-data-sul-vincolo-e-arriva-al-2027',
    checkedAt: '2026-08-12T15:50:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un Brent che chiude mercoledì sopra gli 88,67 dollari di questa sera, cioè sopra il massimo serale invece che sopra i 90 tondi: direbbe che il mercato sta prezzando più della revisione dell’agenzia e non meno, e toglierebbe il fondamento all’argomento centrale di questa lettura.',
        triggered: false,
        evidence:
          'Alle 15:50 del 12 agosto il Brent è a 88,43 dollari con meno 0,54%, contro una chiusura ' +
          'precedente di 88,91 (Investing.com). La chiusura di mercoledì non è ancora avvenuta, quindi la ' +
          'condizione è registrata come non scattata sul prezzo osservato e non sul termine dichiarato. Da ' +
          'annotare che l’intervallo di giornata arriva a 90,06: il livello è stato toccato in seduta ma ' +
          'la condizione chiede la chiusura.',
      },
      {
        condition:
          'Un biennale che si porta sopra il 4,237%, cioè sopra la rilevazione di questa mattina: è la misura dichiarata da questo archivio nel pomeriggio, non si è mossa attraverso quattro notizie in una sera, e la sua caduta direbbe che la Fed sta entrando nel prezzo.',
        triggered: false,
        evidence:
          'È andata nella direzione opposta, e nettamente. Dopo l’indice dei prezzi il biennale scende a ' +
          '4,180% con meno 3,8 punti base, con un intervallo di giornata fra 4,170% e 4,218% ' +
          '(Investing.com, 15:50 del 12 agosto): il massimo della giornata resta diciannove millesimi ' +
          'sotto la soglia. La misura scelta si è mossa per la prima volta in sei giorni, e verso il basso.',
      },
      {
        condition:
          'Un indice dei prezzi mercoledì sopra il 3,4% annuo sul dato principale con la componente energetica in aumento su base mensile: sarebbe il canale che questa analisi dice non ancora attivo, misurato dove si misura davvero.',
        triggered: false,
        evidence:
          'Non scattata su nessuna delle due gambe. L’indice dei prezzi di luglio, diffuso il 12 agosto ' +
          'alle 14:30, è a più 0,1% mensile e 3,4% annuo, in calo dal 3,5% di giugno: esattamente sulla ' +
          'soglia e non sopra. E la componente energetica va nel verso opposto a quello richiesto — più ' +
          '14,7% annuo contro più 15,7% di giugno, con la benzina a più 24,6% da più 26,7% e il gasolio a ' +
          'più 39,1% da più 42,9% (Trading Economics, letto alle 15:50). La cronaca del giorno riporta un ' +
          'indice energetico in calo dell’1,5% sul mese. Resta però il limite che questa verifica ha ' +
          'scoperto: il dato misura luglio, mentre la corsa del Brent da 79 a 90 dollari è avvenuta ad ' +
          'agosto. Il canale descritto qui non poteva comparire in questo dato.',
      },
      {
        condition:
          'Un oro spot sotto i 4.357 dollari, il minimo di questa giornata, entro la chiusura di mercoledì: interromperebbe la sequenza di sedute positive e direbbe che la componente rifugio della notizia non ha alcun peso.',
        triggered: false,
        evidence:
          'Mancata per cinque dollari e cinquantasette centesimi. Il minimo di giornata dell’oro spot è ' +
          '4.362,57 dollari; alle 15:50 il metallo è a 4.429,54 con più 1,41%, e il massimo di giornata è ' +
          '4.441,01 (Investing.com). La sequenza di sedute positive non si è interrotta.',
      },
      {
        condition:
          'Una nuova revisione al rialzo della previsione sul Brent nell’aggiornamento di settembre dell’agenzia: confermerebbe che quella di oggi inseguiva il mercato invece di anticiparlo, e che il prezzo resta la misura migliore della previsione.',
        triggered: false,
        evidence:
          'Non giudicabile: l’aggiornamento mensile dell’agenzia americana esce a settembre e al controllo ' +
          'non è pubblicato. La condizione era scritta apposta con una scadenza lontana e resta il solo ' +
          'debito aperto di questa analisi.',
      },
    ],
    what:
      'Nessuna delle cinque condizioni è scattata, e l’argomento centrale ha retto meglio di quanto la ' +
      'lettura stessa si aspettasse. L’analisi sosteneva che la catena dal greggio all’inflazione ha un ' +
      'anello debole, perché l’indice dei prezzi misura una variazione e non un livello: il dato di luglio ' +
      'esce con la componente energetica in decelerazione su base annua e il biennale scende di quasi ' +
      'quattro punti base. La verifica ha però trovato un limite nella costruzione stessa del test, e va ' +
      'detto perché vale più del verdetto: questo archivio ha indicato per sei giorni l’indice dei prezzi ' +
      'del 12 agosto come l’evento che avrebbe deciso se lo shock energetico stesse entrando ' +
      'nell’inflazione, ma quel dato misura luglio, e la corsa del Brent da 79 a 90 dollari è avvenuta ad ' +
      'agosto. La domanda posta non poteva ricevere risposta da questa diffusione. Il test giusto è ' +
      'l’indice dei prezzi di agosto, che esce a settembre.',
  },
  {
    slug: 'hormuz-entra-nel-percorso-dei-prezzi-e-chi-lo-dice-non-vota',
    checkedAt: '2026-08-12T15:50:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Un biennale che si porta sopra il 4,25%: è la misura dichiarata in questo archivio tre ore prima di questa analisi come quella che decide la direzione sui giorni, e la sua caduta direbbe che il quadro si è mosso mentre questa lettura sosteneva il contrario.',
        triggered: false,
        evidence:
          'Il biennale scende a 4,180% dopo l’indice dei prezzi, con meno 3,8 punti base e un intervallo ' +
          'di giornata fra 4,170% e 4,218% (Investing.com, 15:50 del 12 agosto). Il massimo della giornata ' +
          'resta trentadue millesimi sotto la soglia.',
      },
      {
        condition:
          'Un indice dei prezzi mercoledì 12 agosto sopra il 3,4% annuo sul dato principale, o sopra più 0,2% mensile su quello di fondo: la parte di inflazione che Venable attribuisce al Medio Oriente arriverebbe nel dato, e la prudenza di questa lettura risulterebbe eccessiva nel verso sbagliato.',
        triggered: false,
        evidence:
          'Il dato è uscito esattamente sulle due soglie, non sopra: 3,4% annuo sul principale, in calo dal ' +
          '3,5% di giugno, e più 0,2% mensile sul dato di fondo, con il fondo annuo al 2,5% da 2,6% ' +
          '(Trading Economics, letto alle 15:50; il titolo di cronaca del giorno riporta «più 0,1% a ' +
          'luglio, come atteso, con il tasso annuo al 3,4%»). Una condizione scritta con «sopra» e un dato ' +
          'che stampa il numero esatto non scattano: vedi la lezione.',
      },
      {
        condition:
          'Un oro sopra i 4.435 dollari o sotto i 4.357 entro la chiusura di mercoledì, cioè fuori dall’intervallo in cui il metallo si è mosso in questa giornata: direbbe che una delle tre notizie contava più di quanto le viene riconosciuto qui.',
        triggered: true,
        evidence:
          'Scattata dal lato alto. L’oro spot ha toccato 4.441,01 dollari nell’intervallo di giornata del ' +
          '12 agosto, cioè sei dollari sopra la soglia dei 4.435, ed è a 4.429,54 con più 1,41% alle 15:50 ' +
          '(Investing.com). Il lato basso non è stato toccato: il minimo è 4.362,57, cinque dollari e ' +
          'cinquantasette centesimi sopra i 4.357. Il metallo è quindi uscito dall’intervallo dichiarato, ' +
          'e nella direzione che l’analisi indicava come «una delle tre notizie contava più di quanto le ' +
          'viene riconosciuto qui».',
      },
      {
        condition:
          'Un’asta a tre anni con un rendimento di aggiudicazione superiore al 4,30%, contro il 4,179% della precedente: sarebbe una richiesta di premio sulla scadenza che prezza la Fed, e contraddirebbe la lettura di un biennale immobile.',
        triggered: false,
        evidence:
          'L’asta si è tenuta la sera stessa dell’11 agosto e si è aggiudicata al 4,291%, nove millesimi ' +
          'sotto la soglia, con un rapporto fra domanda e offerta di 2,71 contro 2,60 della precedente e ' +
          'una media di circa 2,64 sulle ultime dieci. Non è stato chiesto alcun premio.',
      },
      {
        condition:
          'Una nuova dichiarazione restrittiva da un membro con diritto di voto al FOMC entro mercoledì: renderebbe irrilevante la distinzione fra voci che votano e voci che non votano su cui si regge una parte di questa analisi.',
        triggered: false,
        evidence:
          'Non risultano nuove dichiarazioni restrittive da membri votanti fra la pubblicazione e il ' +
          'controllo: le ricerche sui discorsi della Federal Reserve del 12 agosto non restituiscono ' +
          'interventi successivi a quello della governatrice Cook del 5 agosto. La distinzione fra chi ' +
          'vota e chi non vota regge quindi come criterio, ma il conto su cui era stata applicata era ' +
          'sbagliato: vedi il commento.',
      },
    ],
    what:
      'Una condizione su cinque è scattata, ed è quella sull’oro: il metallo ha toccato 4.441,01 dollari, ' +
      'sei sopra la soglia dei 4.435 che l’analisi aveva indicato come il livello oltre il quale una delle ' +
      'notizie di quella sera valeva più di quanto le venisse riconosciuto. Le altre quattro hanno retto, e ' +
      'due in modo netto: il biennale è sceso a 4,180% invece di salire, e l’asta a tre anni si è ' +
      'aggiudicata sotto la soglia. C’è però una correzione da registrare che riguarda il cuore ' +
      'dell’analisi e che non si può fare sul testo, perché un’analisi pubblicata non si tocca. Questa ' +
      'lettura, e quella che l’ha seguita, hanno costruito il proprio giudizio sulla Fed contando «due ' +
      'preferenze dichiarate da chi non ha il voto contro un solo atto a verbale», identificando ' +
      'quell’atto nel dissenso di Beth Hammack del 29 luglio. Il comunicato ufficiale di quella riunione ' +
      'dice altro: a votare contro furono in tre — Beth Hammack, Neel Kashkari e Lorie Logan — tutti per ' +
      'un rialzo di venticinque punti base. Gli atti a verbale erano quindi tre, non uno, e il conto che ' +
      'sorreggeva la lettura era sbagliato di due terzi nella direzione che rendeva la conclusione più ' +
      'comoda.',
    lesson:
      'Una condizione ancorata al consenso è una condizione messa dove il dato ha più probabilità di ' +
      'atterrare, e quindi non può né confermare né smentire. È lo stesso difetto dei livelli tondi ' +
      'registrato l’11 agosto, applicato alle previsioni invece che ai prezzi, ed è la terza volta in due ' +
      'giorni. La dimostrazione è che l’archivio ha scritto sulla stessa diffusione due condizioni ' +
      'speculari — «sopra il 3,4% annuo» qui e in altre tre analisi, «sotto il 3,4% annuo» in quella del ' +
      '10 agosto sul rialzo di settembre — e il dato ha stampato esattamente 3,4%, con il dato di fondo ' +
      'esattamente a più 0,2% mensile: nessuna delle due è scattata. Cinque analisi hanno aspettato per ' +
      'giorni un evento che, per come le condizioni erano scritte, non poteva decidere niente. La regola ' +
      'che se ne ricava è di ancorare la condizione a una distanza dal consenso e non al consenso — «due ' +
      'decimi sopra la stima» invece di «sopra la stima» — così che il caso più probabile stia dentro la ' +
      'zona neutra per costruzione e non per caso.',
  },
  {
    slug: 'sei-navi-lunedi-e-una-media-di-undici',
    checkedAt: '2026-08-12T15:50:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Una media dei transiti a dieci giorni che scende stabilmente sotto le otto navi al giorno nella prossima rilevazione Kpler: riporterebbe il metro dove questo archivio lo aveva collocato, e direbbe che la media di undici era il residuo di una settimana migliore.',
        triggered: false,
        evidence:
          'La media a dieci giorni resta sopra le otto: le rilevazioni riportate fra l’11 e il 12 agosto ' +
          'la collocano intorno a undici-dodici transiti al giorno, mentre il dato giornaliero peggiora — ' +
          'sei navi lunedì, otto martedì. Il conteggio del mercoledì non è ancora disponibile al ' +
          'controllo. Va aggiunta una cautela che questa verifica ha trovato e che l’archivio non aveva: ' +
          'secondo i servizi di tracciamento circa venti petroliere navigano con il transponder spento, ' +
          'quindi il flusso reale può essere superiore a quello contato. È un limite della misura, non un ' +
          'suo movimento.',
      },
      {
        condition:
          'Esportazioni nette attraverso lo Stretto che risalgono sopra i 4 milioni di barili al giorno: sarebbe la normalizzazione misurata in barili, che è la misura giusta, e toglierebbe la premessa a questa lettura.',
        triggered: false,
        evidence:
          'Non verificabile con le fonti raggiungibili: non risulta pubblicata una rilevazione delle ' +
          'esportazioni nette successiva ai circa 3 milioni di barili al giorno riportati l’11 agosto. ' +
          'Registrata come non scattata sulla direzione descritta, non su un numero nuovo.',
      },
      {
        condition:
          'Il ritiro di una delle due richieste di risarcimento, o un incontro diretto fra le parti: sarebbe il primo passo strutturale verso la riapertura da quando la vicenda è cominciata.',
        triggered: false,
        evidence:
          'Nessun ritiro e nessun incontro diretto risultano riportati fra l’11 e il 12 agosto. Al ' +
          'contrario, la cronaca del 12 agosto descrive lo Stretto come ancora di fatto chiuso al traffico ' +
          'commerciale e le speranze di un accordo rapido in ulteriore riduzione.',
      },
      {
        condition:
          'Un Brent che rientra sotto gli 84 dollari sulla serie di questo archivio, cioè sotto gli 85,4 su quella citata dalle agenzie: direbbe che il mercato dell’energia ha smesso di prezzare lo stallo descritto qui.',
        triggered: false,
        evidence:
          'Molto lontano. Alle 15:50 del 12 agosto il Brent è a 88,43 dollari, cioè circa 87,0 sulla serie ' +
          'usata in questo archivio, con un intervallo di giornata fra 88,14 e 90,06 (Investing.com). Il ' +
          'minimo della giornata resta quasi tre dollari sopra la soglia delle agenzie.',
      },
      {
        condition:
          'Un indice dei prezzi statunitense mercoledì 12 agosto sopra il 3,4% annuo sul dato principale, o sopra più 0,2% mensile su quello di fondo: sposterebbe il comando al canale americano, dove il conteggio delle navi conta molto meno.',
        triggered: false,
        evidence:
          'Il dato è uscito esattamente sulle due soglie e non sopra: 3,4% annuo sul principale, in calo ' +
          'dal 3,5% di giugno, e più 0,2% mensile sul dato di fondo (Trading Economics, letto alle 15:50 ' +
          'del 12 agosto). Il comando non si è spostato al canale americano.',
      },
    ],
    what:
      'Nessuna delle cinque condizioni è scattata, e la lettura ha retto su tutti i fronti che dichiarava. ' +
      'Il conteggio dei transiti non è risalito ma nemmeno crollato sotto la soglia delle otto navi di ' +
      'media, le esportazioni nette non sono tornate sopra i quattro milioni di barili, nessuna delle due ' +
      'richieste di risarcimento è stata ritirata, il Brent resta a 88,43 dollari contro gli 85,4 che ' +
      'avrebbero smontato la premessa, e l’indice dei prezzi è uscito esattamente sulla soglia. La ' +
      'verifica aggiunge però un limite alla misura su cui questa analisi si regge, e conviene scriverlo ' +
      'accanto al verdetto invece che al posto suo: i servizi di tracciamento segnalano circa venti ' +
      'petroliere che navigano con il transponder spento, il che significa che il conteggio delle navi ' +
      'sottostima il flusso reale di una quantità non nota. La conclusione di fondo non cambia — un ' +
      'traffico ridotto di circa il 90% resta un regime di eccezione — ma la precisione del metro è ' +
      'inferiore a quella che sei giorni di analisi gli hanno attribuito.',
  },
  {
    slug: 'il-rialzo-di-settembre-torna-in-maggioranza',
    checkedAt: '2026-08-12T15:50:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Una probabilità di rialzo a settembre che rientra sotto il 50% dopo l’indice dei prezzi di mercoledì: rimetterebbe in piedi la gamba che questa lettura dichiara caduta, e riporterebbe la direzione sui giorni dov’era.',
        triggered: true,
        evidence:
          'Scattata, e con margine. Dopo l’indice dei prezzi del 12 agosto la probabilità di un rialzo ' +
          'alla riunione del 16 settembre scende al 37,7%, contro il 62,3% attribuito alla permanenza ' +
          'nella fascia corrente del 3,50-3,75% (Investing.com sui futures sui Fed Fund del CME, letto ' +
          'alle 15:50). Il numero era intorno alla metà nella mattinata e al 52% la sera del 10 agosto: la ' +
          'gamba che questa lettura dichiarava caduta è tornata in piedi, ed è successo esattamente dopo ' +
          'l’evento che la condizione nominava.',
      },
      {
        condition:
          'Un biennale che sale sopra il 4,25% confermando la riprezzatura: sarebbe la conferma che oggi manca, e allora la direzione non resterebbe neutrale ma scenderebbe.',
        triggered: false,
        evidence:
          'La conferma non è mai arrivata, e adesso è arrivata la smentita: il biennale scende a 4,180% ' +
          'con meno 3,8 punti base dopo il dato, con un massimo di giornata a 4,218% (Investing.com, ' +
          '15:50 del 12 agosto). In sei giorni quella scadenza non ha mai superato il 4,239%.',
      },
      {
        condition:
          'Un oro spot che rompe i massimi di venerdì, circa 4.372 dollari, con il Dollar Index sotto 99,4: direbbe che il metallo ha prezzato la riprezzatura della Fed e l’ha ignorata, e renderebbe sbagliato l’abbassamento della direzione.',
        triggered: false,
        evidence:
          'Metà condizione soddisfatta e metà no, quindi non scattata. L’oro ha rotto i massimi di venerdì ' +
          'con ampio margine — 4.429,54 dollari alle 15:50, con un massimo di giornata a 4.441,01 — ma il ' +
          'Dollar Index è a 99,615 con meno 0,10% e un minimo di giornata a 99,500, quindi sopra la soglia ' +
          'del 99,4 che la condizione richiede. Mancano undici centesimi di indice sul minimo.',
      },
      {
        condition:
          'Un Brent che rientra sotto gli 84 dollari sulla serie di questo archivio, cioè sotto gli 85,4 su quella citata dalle agenzie, con un annuncio verificabile sulla riapertura dello Stretto: toglierebbe il motore alla riprezzatura descritta qui.',
        triggered: false,
        evidence:
          'Nessuna delle due gambe. Il Brent è a 88,43 dollari, circa 87,0 sulla serie usata qui, con un ' +
          'massimo di giornata a 90,06; e nessun annuncio verificabile sulla riapertura dello Stretto ' +
          'risulta pubblicato, con la cronaca del 12 agosto che descrive le speranze di accordo in ' +
          'ulteriore riduzione.',
      },
      {
        condition:
          'Un indice dei prezzi mercoledì 12 agosto sotto il 3,4% annuo sul dato principale e sotto più 0,2% mensile su quello di fondo: sarebbe il modo più rapido perché tutto questo si riveli un’oscillazione di due giorni.',
        triggered: false,
        evidence:
          'Il dato è uscito esattamente sui due livelli, non sotto: 3,4% annuo sul principale e più 0,2% ' +
          'mensile sul dato di fondo (Trading Economics, letto alle 15:50). È la condizione speculare a ' +
          'quella scritta in quattro altre analisi, e il numero esatto le ha fatte fallire tutte insieme — ' +
          'ma il mercato ha reagito come se il dato fosse morbido, perché entrambi i tassi annui scendono ' +
          'di un decimo rispetto a giugno.',
      },
    ],
    what:
      'Una condizione su cinque è scattata, ed è la prima: la probabilità di un rialzo a settembre è ' +
      'scesa al 37,7% dopo l’indice dei prezzi, contro il 52% su cui questa analisi aveva abbassato la ' +
      'direzione sui giorni la sera del 10 agosto. La lettura è quindi sbagliata nel punto che aveva ' +
      'dichiarato come il suo, e lo è per la ragione che aveva scritto: il numero è tornato sotto la ' +
      'metà dopo l’evento che la condizione nominava. Vale la pena notare che la cautela messa accanto a ' +
      'quel giudizio ha invece funzionato — l’analisi diceva di non scendere oltre il neutrale perché il ' +
      'biennale non confermava nulla, e il biennale in sei giorni non ha mai superato il 4,239%, per poi ' +
      'scendere a 4,180% proprio sul dato. La parte prudente ha retto, la parte decisa no. E c’è un ' +
      'dettaglio che l’ultima condizione rende visibile: il dato è uscito esattamente sui livelli scritti ' +
      'e formalmente non l’ha soddisfatta, ma il mercato lo ha letto come morbido perché entrambi i tassi ' +
      'annui scendono di un decimo. Fra la condizione e il mercato, ha avuto ragione il mercato.',
  },
  {
    slug: 'la-boj-apre-a-un-ritmo-piu-rapido-e-nomina-il-medio-oriente',
    checkedAt: '2026-08-12T15:50:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un rialzo effettivo della Banca del Giappone alla prossima riunione, o l’annuncio di una data: sposterebbe il documento dalla categoria delle intenzioni dichiarate a quella dei fatti, e renderebbe troppo prudente la forza bassa scritta qui.',
        triggered: false,
        evidence:
          'Nessun rialzo e nessuna data annunciata fra il 10 e il 12 agosto. Si è però mosso quello che ' +
          'l’analisi diceva di guardare: gli operatori hanno anticipato a settembre l’attesa del prossimo ' +
          'rialzo, che prima era collocata a dicembre, citando il tono del riassunto delle opinioni di ' +
          'luglio e l’intervento valutario congiunto. È un’attesa di mercato, non un atto della banca ' +
          'centrale, quindi la condizione resta non scattata per come è scritta.',
      },
      {
        condition:
          'Uno yen che si rafforza sotto quota 140 contro dollaro con il Dollar Index sotto 99: sarebbe la conferma che il canale valutario descritto qui funziona davvero, e la lettura andrebbe alzata di grado invece che lasciata dov’è.',
        triggered: false,
        evidence:
          'La seconda gamba non c’è: il Dollar Index è a 99,615 alle 15:50 del 12 agosto, con un minimo di ' +
          'giornata a 99,500, quindi mai sotto 99 (Investing.com). La condizione è una congiunzione e ' +
          'cade indipendentemente dal livello dello yen, per il quale non risulta comunque una rilevazione ' +
          'sotto quota 140 nelle fonti raggiungibili.',
      },
      {
        condition:
          'Un Dollar Index che risale sopra 100 nonostante il verbale: direbbe che il mercato ha letto il documento come rumore, e che il canale su cui questa lettura poggia non esiste.',
        triggered: false,
        evidence:
          'Il Dollar Index non ha mai raggiunto quota 100 nella finestra: alle 15:50 del 12 agosto è a ' +
          '99,615 con meno 0,10%, e il massimo di giornata è 99,795 (Investing.com). Nei tre giorni ' +
          'coperti dalla lettura è rimasto in una fascia stretta fra 99,5 e 99,9.',
      },
      {
        condition:
          'Un decennale giapponese che rompe il 3% entro la settimana, cioè quasi venti punti base sopra il livello di oggi: sarebbe una riprezzatura vera del ritmo, non la conferma di un tono, e trascinerebbe anche la parte lunga americana.',
        triggered: false,
        evidence:
          'Non raggiunto, ma si è mosso nella direzione giusta: il decennale giapponese sale di 4,5 punti ' +
          'base al 2,850%, dai 2,805% citati nell’analisi. Restano quindi quindici punti base dal 3%, e la ' +
          'settimana dichiarata dalla condizione scade venerdì 14: la condizione è registrata come non ' +
          'scattata al controllo, con il termine ancora aperto.',
      },
      {
        condition:
          'Un indice dei prezzi statunitense mercoledì 12 agosto sopra le attese del 3,4% annuo, o un dato di fondo sopra il 2,5%: riporterebbe il comando al canale americano, dove un verbale giapponese conta molto poco.',
        triggered: false,
        evidence:
          'Il dato è uscito esattamente sulle due attese e non sopra: 3,4% annuo sul principale, in calo ' +
          'dal 3,5% di giugno, e 2,5% sul dato di fondo, in calo dal 2,6% (Trading Economics, letto alle ' +
          '15:50 del 12 agosto). Il comando non è tornato al canale americano.',
      },
    ],
    what:
      'Nessuna delle cinque condizioni è scattata, e questa è la prima volta che questo esito viene ' +
      'chiuso con una prova per ciascuna invece che con un rinvio: era in attesa dal 10 agosto proprio ' +
      'dell’indice dei prezzi che è uscito oggi. La lettura sosteneva che il riassunto delle opinioni ' +
      'della Banca del Giappone fosse un’intenzione dichiarata e non un fatto, e che la forza andasse ' +
      'tenuta bassa finché non compariva un atto. Due giorni dopo la classificazione regge: nessun ' +
      'rialzo, nessuna data, il decennale giapponese salito di quattro punti base e mezzo su venti ' +
      'necessari, il dollaro fermo in una fascia di quattro decimi. Quello che si è mosso è l’attesa di ' +
      'mercato, che ha spostato il prossimo rialzo da dicembre a settembre: è esattamente il canale che ' +
      'l’analisi descriveva, misurato dove diceva di misurarlo, ma resta un’aspettativa e non un atto — ' +
      'la stessa distinzione che il documento aveva ricevuto.',
  },
  {
    slug: 'nove-millesimi-sotto-la-soglia-e-la-soglia-era-tonda',
    checkedAt: '2026-08-12T10:55:00+02:00',
    verdict: 'senza-verifica',
    conditions: [],
    what:
      'Questo è il primo esito registrato come non verificabile, ed è una scelta invece di un ripiego. ' +
      'L’analisi ha orizzonte breve ed è vecchia di quattordici ore, quindi il suo termine è passato e va ' +
      'chiusa; ma nessuna delle cinque condizioni che aveva dichiarato è oggi giudicabile. Tre si ' +
      'risolvono nelle prossime ore e non prima: la chiusura di mercoledì sul decennale, la chiusura di ' +
      'mercoledì sull’oro, e l’indice dei prezzi delle 14:30. Una si risolve alle 19:00 con l’asta del ' +
      'decennale, che al momento del controllo non si è ancora tenuta. L’ultima, il biennale sopra il ' +
      '4,237%, non ha alcuna rilevazione nuova nelle fonti disponibili stamattina: non è che non sia ' +
      'scattata, è che non c’è il numero per dirlo. Scrivere «confermata» sarebbe stato meccanicamente ' +
      'possibile — nessuna condizione risulta soddisfatta — e sarebbe stato il quinto verdetto ' +
      'consecutivo di quel tipo con la condizione decisiva ancora pendente, cioè esattamente il problema ' +
      'di calibrazione registrato ieri sera nel registro. Questa voce lo applica invece di ripeterlo: la ' +
      'lettura sull’asta a tre anni e sulle soglie tonde resta interessante, ma non è stata messa alla ' +
      'prova, e un archivio che lo dichiara vale più di uno che accumula conferme non testate.',
  },
  {
    slug: 'tre-morti-su-una-nave-e-il-prezzo-va-nell-altro-verso',
    checkedAt: '2026-08-11T19:20:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un Brent che riconquista i 90 dollari sulle serie delle agenzie — circa 88,6 su quella di questo archivio — entro la chiusura di mercoledì: direbbe che il rientro di oggi era rumore, che l’annuncio senza accordo non valeva tre dollari, e con esso cadrebbe l’asimmetria descritta qui.',
        triggered: false,
        evidence:
          'Il Brent resta fra 87 e 88 dollari, quindi fra due e tre sotto il massimo di 90,03, e il rientro ' +
          'non è stato riassorbito nelle due ore successive alla pubblicazione. La scadenza dichiarata è ' +
          'però la chiusura di mercoledì e non è ancora arrivata.',
      },
      {
        condition:
          'Un decennale che torna sopra il 4,70% con l’oro sotto i 4.350 dollari: rimetterebbe in piedi la trasmissione dello shock energetico ai tassi, che è la ragione principale per cui la direzione sale oggi.',
        triggered: false,
        evidence:
          'La seconda gamba non si avvicina: l’oro è nell’area 4.380-4.390 dollari, circa 4.385 secondo ' +
          'Kitco dopo la diffusione sulle vendite di case, quindi oltre trenta sopra la soglia. Sul ' +
          'decennale non risulta una rilevazione nuova rispetto al 4,686% delle 16:50, e la condizione ' +
          'chiede comunque entrambe le gambe.',
      },
      {
        condition:
          'Un oro che chiude mercoledì sotto i 4.357 dollari, cioè sotto il minimo di questa giornata: direbbe che il recupero fino a 4.393,69 era un rimbalzo dentro la seduta e non un cambio di configurazione.',
        triggered: false,
        evidence:
          'Non giudicabile in via definitiva: la chiusura di mercoledì non è arrivata. Al controllo l’oro ' +
          'sta fra 4.380 e 4.390 dollari, quindi sopra la soglia di una trentina di dollari.',
      },
      {
        condition:
          'Un oro sopra i 4.435 dollari, il massimo di oggi, entro la chiusura di mercoledì: direbbe che questa lettura, ferma a forza bassa, è stata troppo prudente e che il recupero valeva più di quanto le viene riconosciuto.',
        triggered: false,
        evidence:
          'Non raggiunto: il metallo si è mosso al ribasso rispetto ai 4.393,69 della pubblicazione, ' +
          'fermandosi intorno a 4.385. Restano cinquanta dollari dalla soglia, e anche qui la scadenza ' +
          'dichiarata corre fino a mercoledì.',
      },
      {
        condition:
          'Una probabilità di rialzo a settembre che torna sopra il 52% dopo l’indice dei prezzi di mercoledì: il numero è stato su entrambi i lati della metà due volte in quarantotto ore, e un attraversamento che stavolta tiene direbbe che la riprezzatura è vera e che l’oscillazione descritta qui era la lettura sbagliata.',
        triggered: false,
        evidence:
          'Non giudicabile: la condizione è esplicitamente successiva all’indice dei prezzi di mercoledì, ' +
          'che non è pubblicato. Il numero resta intorno al 48%, cioè fermo rispetto al controllo delle ' +
          '17:15.',
      },
    ],
    what:
      'Nessuna delle cinque condizioni è scattata nelle due ore successive alla pubblicazione, e i prezzi ' +
      'si sono mossi pochissimo: oro fra 4.380 e 4.390 dollari contro i 4.393,69 della scrittura, Brent ' +
      'fra 87 e 88, Dollar Index a 99,81, probabilità di settembre al 48%. La parte sostanziale ' +
      'dell’analisi — l’asimmetria fra un danno che non viene pagato e una speranza che vale tre dollari ' +
      '— non è stata messa alla prova da nessun fatto nuovo, perché nella finestra non ci sono stati né ' +
      'attacchi né annunci. Il verdetto va quindi letto per quello che è: la lettura non è stata smentita, ' +
      'non che sia stata confermata da qualcosa.',
    lesson:
      'Quattro esiti consecutivi registrati come «confermata» con la condizione decisiva ancora pendente ' +
      'sono un problema di calibrazione, non una serie di letture azzeccate. In tutti e quattro i casi la ' +
      'condizione che avrebbe potuto smentire davvero è la stessa — l’indice dei prezzi di mercoledì 12 ' +
      'agosto — e in tutti e quattro il controllo è stato fatto prima. Quello che il registro sta ' +
      'misurando in questo momento non è la capacità di prevedere ma il tempo trascorso in una fase di ' +
      'calma. La correzione non è controllare più tardi, perché un’analisi di orizzonte breve non chiusa ' +
      'subito diventa impossibile da giudicare onestamente: è dichiarare, quando la condizione decisiva ha ' +
      'una data futura nota, una seconda scadenza di verifica dentro l’analisi stessa, così che il ' +
      'registro distingua fra «non scattata al controllo» e «non scattata dopo l’evento che doveva farla ' +
      'scattare». Finché quella distinzione non esiste, i verdetti di questi quattro giorni vanno letti ' +
      'con lo sconto che meritano.',
  },
  {
    slug: 'tre-punti-base-sul-trentennale-trecento-dollari-sull-oro',
    checkedAt: '2026-08-11T17:10:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un oro che recupera i 4.400 dollari entro la chiusura di mercoledì con il decennale ancora sopra il 4,70%: è la condizione scritta qui alle 10:45, oggi mancata per quattordici dollari, e se scatta significa che la direzione andava alzata e questa lettura è stata troppo prudente.',
        triggered: false,
        evidence:
          'Non scattata, ma per una ragione che merita di essere scritta invece che archiviata: non è più ' +
          'eseguibile. L’oro è risalito a 4.393,69 dollari, quindi ancora sotto i 4.400, e nel frattempo il ' +
          'decennale è rientrato a circa 4,686% dopo un massimo di 4,739% — cioè sotto il 4,70% che la ' +
          'seconda gamba richiede. Anche se il metallo prendesse i 4.400 domani, non lo farebbe più contro ' +
          'rendimenti in salita, che era l’unica cosa che la condizione voleva misurare.',
      },
      {
        condition:
          'Un biennale sopra il 4,25% con il Brent oltre gli 84 dollari sulla serie di questo archivio: è la regola a due gambe del 5 agosto, la prima gamba è dentro da tre giorni, e la caduta della seconda direbbe che la Fed sta entrando nel prezzo dove finora non è entrata.',
        triggered: false,
        evidence:
          'Il biennale è andato nella direzione opposta: da 4,237% a circa 4,23%. La gamba energetica resta ' +
          'dentro — il Brent a 87,22 vale circa 85,8 sulla serie usata qui, quindi sopra gli 84 — ma quella ' +
          'monetaria continua a non arrivare, per il quinto giorno. Una precisazione sulla condizione ' +
          'stessa: la regola a due gambe non è del 5 agosto ma del 9, quando è stata scritta in «Due ' +
          'infrastrutture in un giorno»; il 5 agosto era stata dichiarata la sola soglia del 4,25%.',
      },
      {
        condition:
          'Un oro sotto i 4.300 dollari con il Dollar Index sopra 100: è il deterioramento vero, e nessuna delle due gambe è presente — il metallo è ottantasei dollari sopra, il dollaro è a 99,8.',
        triggered: false,
        evidence:
          'Nessuna delle due gambe, e la distanza è aumentata. Il minimo di giornata dell’oro è intorno a ' +
          '4.357 dollari, cioè cinquantasette sopra la soglia, e la rilevazione del pomeriggio è 4.393,69. ' +
          'Il Dollar Index è a 99,81, sotto quota 100 per la quarta rilevazione consecutiva.',
      },
      {
        condition:
          'Un Brent che riconquista i 90 dollari sulla serie delle agenzie, cioè circa 88,6 su quella usata qui, e li tiene oltre la chiusura di mercoledì mentre l’oro scende sotto i 4.350: sarebbe la prova di stabilità che oggi è fallita, e riporterebbe in vita la catena descritta nel testo ricevuto.',
        triggered: false,
        evidence:
          'Il Brent non è tornato sui 90 dollari: dal massimo di 90,03 è sceso a 87,22 con meno 0,6%, e il ' +
          'movimento si è esteso nel pomeriggio invece di rientrare. Il WTI è a 81,77. La seconda gamba ' +
          'non si è mai presentata: l’oro non è sceso sotto i 4.350 in nessun momento della giornata.',
      },
      {
        condition:
          'Un indice dei prezzi mercoledì 12 agosto sopra il 3,4% annuo sul dato principale, o sopra più 0,2% mensile su quello di fondo: darebbe alla parte lunga della curva la conferma che le manca e trascinerebbe con sé anche la scadenza a due anni, che è l’unico modo perché questa lettura risulti sbagliata dal lato dei tassi.',
        triggered: false,
        evidence:
          'Non giudicabile: il dato esce mercoledì 12 agosto alle 14:30 italiane e al momento del controllo ' +
          'non è pubblicato.',
      },
    ],
    what:
      'Nessuna delle cinque condizioni è scattata, e la parte sostanziale dell’analisi ha retto entro la ' +
      'stessa giornata. La tesi era che la tensione fosse concentrata sulla parte lunga della curva e che ' +
      'la Fed non stesse entrando nel prezzo: nel pomeriggio il decennale ha restituito i massimi ' +
      'rientrando a 4,686%, il biennale è sceso ancora a circa 4,23%, e la probabilità di un rialzo a ' +
      'settembre è tornata sotto la metà, al 48% dal 52%. Il verdetto va però letto con la stessa cautela ' +
      'della volta precedente: la condizione decisiva è quella sull’indice dei prezzi, che esce domani, e ' +
      '«confermata» qui significa non scattata a oggi.',
    lesson:
      'Una condizione composta — un livello su uno strumento insieme a un livello su un altro — può ' +
      'diventare inapplicabile invece che vera o falsa, e questo archivio non lo aveva previsto. La prima ' +
      'condizione chiedeva un oro sopra i 4.400 con il decennale ancora sopra il 4,70%: serviva a ' +
      'distinguere una forza vera da un rimbalzo, perché salire contro rendimenti in aumento è ' +
      'un’informazione e salire mentre scendono no. Il decennale è sceso sotto la soglia mentre l’oro era ' +
      'ancora in viaggio, e la prova non si può più eseguire. Una condizione inapplicabile è peggio di una ' +
      'falsa, perché non dice niente e sembra dire qualcosa. La regola che se ne ricava è di scrivere le ' +
      'condizioni composte con la gamba di contesto espressa come intervallo di validità e non come ' +
      'requisito — «finché il decennale resta sopra il 4,70%» invece di «con il decennale sopra il 4,70%» — ' +
      'così che quando il contesto cambia la condizione decada dichiaratamente invece di restare in ' +
      'sospeso.',
  },
  {
    slug: 'settanta-dollari-indietro-e-la-condizione-scatta',
    checkedAt: '2026-08-11T14:15:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un oro che recupera i 4.400 dollari entro la chiusura di mercoledì con il decennale ancora sopra il 4,70%: direbbe che la forza relativa non è esaurita e che questo ritracciamento era tecnico, e renderebbe sbagliato l’abbassamento della direzione.',
        triggered: false,
        evidence:
          'Mancata per quattordici dollari, ed è il numero più interessante del controllo. Dopo il minimo ' +
          'relativo nell’area dei 4.370 il metallo è risalito a 4.371,92 e poi a 4.386,13: il decennale ' +
          'sta sopra il 4,70% come la condizione richiede, ma la soglia sull’oro non è stata toccata. Il ' +
          'termine dichiarato — la chiusura di mercoledì — non è ancora arrivato, quindi la condizione ' +
          'resta aperta e questa registrazione vale per quello che si osserva ora.',
      },
      {
        condition:
          'Un oro sotto i 4.300 dollari con il Dollar Index sopra 100: è il deterioramento vero che questo archivio segue da sei giorni, e nessuna delle due gambe è oggi presente.',
        triggered: false,
        evidence:
          'Nessuna delle due gambe, e a distanza. L’oro è a 4.386,13, ottantasei dollari sopra la soglia e ' +
          'più alto di quando la condizione è stata scritta; il Dollar Index è fermo intorno a 99,8, sotto ' +
          'quota 100 per la terza rilevazione consecutiva.',
      },
      {
        condition:
          'Un decennale sopra il 4,75% con l’oro sotto i 4.350: sarebbe la trasmissione dello shock energetico ai tassi e poi al metallo, cioè il canale che oggi si vede per la prima volta ma con ampiezze troppo piccole per chiamarlo così.',
        triggered: false,
        evidence:
          'Il decennale ha toccato 4,736% in seduta — il valore più alto della fase, un punto e mezzo base ' +
          'sopra la rilevazione delle 10:45 — per poi rientrare a circa 4,71%. Resta quindi sotto il 4,75% ' +
          'in entrambe le rilevazioni, e l’oro non è mai sceso sotto i 4.350: il minimo relativo è ' +
          'nell’area dei 4.370. La congiunzione tiene per la quinta volta in tre giorni.',
      },
      {
        condition:
          'Un Brent che rientra sotto gli 84 dollari sulla serie di questo archivio, cioè sotto gli 85,4 su quella citata dalle agenzie: toglierebbe il motore a tutta la catena descritta qui.',
        triggered: false,
        evidence:
          'Il greggio è andato nella direzione opposta: massimo a 90,03 dollari con il WTI a 84,61, poi il ' +
          'rientro a 87,51 e 82,09 sui segnali dai colloqui Oman-Iran. Anche il valore più basso della ' +
          'giornata vale circa 86,1 sulla serie di questo archivio, quindi oltre due dollari sopra la tacca ' +
          'degli 84.',
      },
      {
        condition:
          'Un indice dei prezzi mercoledì 12 agosto sopra il 3,4% annuo sul dato principale, o sopra più 0,2% mensile su quello di fondo: amplificherebbe esattamente il movimento che comincia oggi, e questa lettura risulterebbe troppo prudente invece che troppo generosa.',
        triggered: false,
        evidence:
          'Non giudicabile: l’ufficio di statistica del lavoro conferma la diffusione per mercoledì 12 ' +
          'agosto alle 14:30 italiane, e al momento del controllo il dato non è pubblicato.',
      },
    ],
    what:
      'Nessuna delle cinque condizioni è scattata, e la lettura che dichiarava neutrale con forza bassa ha ' +
      'retto la giornata. Il metallo è a 4.386,13 dollari, venti sopra il valore su cui l’analisi era stata ' +
      'scritta, dopo aver attraversato un trentennale vicino al 5,28% e un Brent che ha toccato i 90 ' +
      'dollari: la parte dell’analisi che rifiutava di scendere sotto il neutrale su un ritracciamento di ' +
      'settanta dollari è quella che il mercato ha premiato. Due precisazioni servono a non far dire al ' +
      'verdetto più di quello che vale. La prima è che due condizioni su cinque hanno una scadenza ancora ' +
      'aperta — il recupero dei 4.400 corre fino alla chiusura di mercoledì, l’indice dei prezzi esce ' +
      'mercoledì alle 14:30 — e «confermata» qui significa non scattata a oggi, non chiusa per sempre. La ' +
      'seconda è che la condizione più vicina a scattare era quella che avrebbe smentito l’analisi dal lato ' +
      'del rialzo: i 4.400 sono mancati per quattordici dollari. La lettura ha avuto ragione, ma sul filo, e ' +
      'dal lato in cui era stata prudente.',
  },
  {
    slug: 'l-oro-rompe-i-4400-con-il-dollaro-in-salita',
    checkedAt: '2026-08-11T10:40:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Un oro spot che rientra sotto i 4.372 dollari entro la chiusura di mercoledì: restituirebbe il livello rotto stanotte e direbbe che il movimento era una ricopertura in sessione sottile, non una riprezzatura.',
        triggered: true,
        evidence:
          'Scattata poco più di un’ora dopo la pubblicazione. Dopo il massimo di 4.434,84 dollari l’oro è ' +
          'sceso a circa 4.365,65 con meno 0,5%, quindi sotto i 4.372: quasi settanta dollari di ' +
          'ritracciamento e un ritorno anche sotto i 4.400. Reuters attribuisce il calo a prese di ' +
          'profitto e all’attesa dell’indice dei prezzi. Il termine dichiarato — la chiusura di mercoledì ' +
          '— non era ancora arrivato, ma l’evento sì.',
      },
      {
        condition:
          'Un oro sotto i 4.300 dollari con il Dollar Index sopra 100 e il biennale sopra il 4,25%: è la combinazione che questo archivio segue da sei giorni come il deterioramento vero, e nessuna delle tre gambe è oggi presente.',
        triggered: false,
        evidence:
          'Nessuna delle tre gambe. L’oro è a 4.365,65, sessantacinque dollari sopra la soglia; il Dollar ' +
          'Index è quasi invariato a 99,83, sotto quota 100; il biennale non ha una rilevazione nuova ' +
          'rispetto al 4,239% precedente. Il deterioramento vero resta lontano.',
      },
      {
        condition:
          'Un decennale che si porta sopra il 4,75% mentre l’oro perde i 4.400: sarebbe la trasmissione dello shock energetico ai tassi e poi al metallo, cioè lo scenario che il rialzo di stanotte ha finora smentito.',
        triggered: false,
        evidence:
          'Metà condizione soddisfatta e metà no, quindi non scattata. L’oro ha perso i 4.400, ma il ' +
          'decennale è a circa 4,721% con più 2,3 punti base: sopra il 4,70%, che è la soglia di allarme, ' +
          'ma quasi tre punti base sotto il 4,75% che questa condizione richiede. È la congiunzione che ' +
          'tiene, per la quarta volta in tre giorni.',
      },
      {
        condition:
          'Un indice dei prezzi mercoledì 12 agosto sopra il 3,4% annuo sul dato principale, o sopra più 0,2% mensile su quello di fondo: riporterebbe il comando al canale americano e renderebbe irrilevante la forza relativa descritta qui.',
        triggered: false,
        evidence:
          'Non giudicabile: il dato esce mercoledì 12 agosto alle 14:30 italiane e al momento del ' +
          'controllo non è pubblicato.',
      },
      {
        condition:
          'Una probabilità di rialzo a settembre che rientra sotto il 50% mentre l’oro continua a salire: direbbe che il movimento era una riprezzatura della Fed e non forza relativa del metallo, e toglierebbe il fondamento a questa lettura pur lasciando intatto il prezzo.',
        triggered: false,
        evidence:
          'Non scattata in nessuna delle due gambe: non risulta una nuova rilevazione della probabilità ' +
          'sotto il 50% rispetto al 52% del controllo precedente, e soprattutto l’oro non ha continuato a ' +
          'salire — è sceso. La condizione descriveva uno scenario che non si è verificato.',
      },
    ],
    what: 'Una condizione su cinque è scattata, e la lettura risulta parziale a settantacinque minuti dalla pubblicazione. L’analisi delle 9:45 aveva portato l’impostazione intraday a rialzista perché i 4.372 dollari erano stati superati contro il dollaro invece che grazie al dollaro; la prima condizione dichiarata prevedeva il rientro sotto quel livello, ed è arrivato con l’oro a 4.365,65 dopo un massimo di 4.434,84. Nella stessa finestra il Brent è salito a 89,12 e il decennale a 4,721%. La parte che ha retto è quella difensiva: le tre condizioni costruite con una congiunzione — oro sotto 4.300 con dollaro sopra 100, decennale sopra il 4,75% con oro sotto 4.400 — non sono scattate, e nessuna è vicina.',
    lesson:
      'Quando ogni ragione elencata per dichiarare una forza bassa punta nella stessa direzione, non è incertezza sulla durata: è un’indicazione sulla direzione. L’analisi delle 9:45 metteva per iscritto tre motivi per non fidarsi del breakout — trenta dollari già restituiti, mercato a pronti dei Treasury chiuso, ricoperture di posizioni corte — e tutti e tre dicevano che il movimento non avrebbe tenuto. Erano stati usati per abbassare la forza e lasciare la direzione al rialzo; andavano usati per non alzare la direzione. La forza bassa serve a dire quanto si crede a una lettura, non a comprare il diritto di scriverne una che le proprie stesse note contraddicono.',
  },
  {
    slug: 'il-brent-passa-gli-84-il-biennale-resta-fermo',
    checkedAt: '2026-08-10T20:15:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un biennale che supera il 4,25% mentre il Brent resta sopra gli 84 dollari sulla serie di questo archivio: sono le due gambe insieme, ed è il solo scenario in cui il premio energetico smette di essere neutro per il metallo.',
        triggered: false,
        evidence:
          'Il Brent resta sopra la sua gamba — 86,11 dollari, circa 84,7 sulla serie di questo archivio — ' +
          'ma il biennale non si è mosso: circa 4,22% nelle ultime rilevazioni, tre punti base sotto il ' +
          '4,25%. In tre ore, con il decennale salito fino al 4,703%, la scadenza breve è rimasta ferma ' +
          'dov’era. La congiunzione ha retto per la seconda volta nella stessa giornata.',
      },
      {
        condition:
          'Un decennale che chiude stabilmente sopra il 4,70% con il Dollar Index sopra 100: sarebbe la conferma che l’irripidimento non è un episodio e che il costo di detenzione è salito davvero.',
        triggered: false,
        evidence:
          'È la condizione che si è avvicinata di più, e per una gamba sola. Il decennale ha raggiunto ' +
          'circa il 4,70% con un massimo intraday di 4,703%, dal 4,658% precedente: il livello è stato ' +
          'toccato. Manca però tutto il resto della condizione — non c’è una chiusura stabile sopra quel ' +
          'livello, e il Dollar Index è a 99,76, cioè sotto quota 100. Anche qui la congiunzione ha fatto ' +
          'il lavoro per cui era stata scritta.',
      },
      {
        condition:
          'Un oro spot sotto i 4.300 dollari: cancellerebbe il movimento del rapporto occupazionale e renderebbe sbagliata la lettura dell’assorbimento descritta qui.',
        triggered: false,
        evidence:
          'Non solo non scattata: l’oro è andato nella direzione opposta. Alle 19:15 lo spot è risalito a ' +
          '4.356,79 dollari, più 0,4%, dopo essere rimasto per buona parte della giornata fra i 4.330 e i ' +
          '4.335. Sono cinquantasette dollari sopra la soglia, e il massimo di venerdì a 4.371,63 — il più ' +
          'alto dal 17 giugno — è tornato a meno di quindici dollari.',
      },
      {
        condition:
          'Un Brent che rientra sotto gli 84 dollari sulla serie di questo archivio, cioè sotto gli 85,4 su quella citata dalle agenzie: direbbe che il superamento di oggi è stato l’ottavo premio formato e riassorbito in otto giorni, e toglierebbe la premessa.',
        triggered: false,
        evidence:
          'Il Brent è rimasto a 86,11 dollari, più 3,06%, e il WTI a 80,73 con più 3,26%: nessun rientro. ' +
          'Per la prima volta in otto giorni un premio energetico formato in giornata non si è sgonfiato ' +
          'entro la seduta, e l’Iran continua a subordinare la riapertura dello Stretto a concessioni ' +
          'statunitensi.',
      },
      {
        condition:
          'Un indice dei prezzi statunitense mercoledì 12 agosto sopra il 3,4% annuo sul dato principale, o sopra più 0,2% mensile su quello di fondo: sposterebbe il movimento dalla parte lunga a quella breve, che è esattamente la differenza descritta in questa analisi.',
        triggered: false,
        evidence:
          'Non giudicabile: il dato esce mercoledì 12 agosto alle 14:30 italiane e al momento del ' +
          'controllo non è pubblicato. È la condizione che l’analisi indicava come decisiva, e resta ' +
          'interamente davanti.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la tesi ha avuto la prova più severa possibile nel giro di tre ore. L’analisi sosteneva che il metallo stesse assorbendo perché il canale veloce — la curva breve, dove si prezza una decisione di settembre — era chiuso, mentre a muoversi era soltanto il premio a termine sulla parte lunga. Nelle tre ore successive il decennale è arrivato fino al 4,703%, cioè esattamente al livello che questo archivio aveva indicato come campanello d’allarme, e l’oro invece di cedere è salito a 4.356,79 dollari con più 0,4%. Il biennale, nel frattempo, non si è mosso di un punto base. Va però registrata un’incoerenza che l’analisi non aveva previsto e che merita un occhio: nella stessa finestra la probabilità di un rialzo a settembre ricavata dai futures è passata da circa il 44% a circa il 48-50%, con l’81% per almeno un rialzo entro dicembre. Cinque punti di riprezzatura sul percorso dei tassi senza che la scadenza a due anni si muova sono due misure della stessa cosa che dicono cose diverse, e finché non concordano nessuna delle due è un segnale.',
  },
  {
    slug: 'il-petrolio-arriva-ai-tassi-e-mancano-due-punti-base',
    checkedAt: '2026-08-10T17:10:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un biennale sopra il 4,25% con il Brent sopra gli 84 dollari sulla serie di questo archivio: sono le due gambe della regola del 5 agosto, e sarebbe la prima volta che scattano insieme. A quel punto il premio energetico avrebbe smesso di essere neutro per il metallo.',
        triggered: false,
        evidence:
          'È scattata una gamba su due, e la condizione ne chiede due. Il Brent è salito a 86,11 dollari ' +
          'con più 3,1%, che sulla serie di questo archivio vale circa 84,7: la tacca degli 84 è stata ' +
          'superata per la prima volta dal 5 agosto. Il biennale però è a circa 4,22%, tre punti base ' +
          'sotto il 4,25% richiesto, e sta perfino un filo più in basso del 4,228% rilevato al momento ' +
          'della pubblicazione. La congiunzione ha fatto il lavoro per cui era stata scritta.',
      },
      {
        condition:
          'Un Dollar Index che supera quota 100 con l’oro spot sotto i 4.300 dollari: chiuderebbe il canale monetario che finora ha tenuto in piedi la correzione come consolidamento invece che come riprezzatura.',
        triggered: false,
        evidence:
          'Nessuna delle due gambe. Il dollaro è descritto come moderatamente più forte ma non risulta ' +
          'alcuna rilevazione sopra quota 100, e l’oro è a circa 4.335 dollari, trentacinque sopra la ' +
          'soglia. Il canale monetario resta aperto.',
      },
      {
        condition:
          'Un oro che torna sopra i massimi di venerdì, circa 4.372 dollari, con il biennale che rientra sotto il 4,21%: direbbe che l’aggancio descritto qui era un rumore di poche ore e che la separazione di stamattina reggeva.',
        triggered: false,
        evidence:
          'Non scattata, ma è la condizione che si è avvicinata dal lato inatteso: il biennale è sceso ' +
          'verso il 4,22%, cioè a un punto base dalla seconda gamba, mentre l’oro è rimasto a 4.335 e non ' +
          'ha avvicinato i massimi. L’aggancio fra greggio e curva breve descritto nell’analisi si è ' +
          'quindi allentato invece di rafforzarsi, ma senza che il metallo ne approfittasse.',
      },
      {
        condition:
          'Un Brent che rientra sotto gli 82 dollari sulla serie citata dalle agenzie insieme a un conteggio dei transiti sopra le otto navi al giorno: sarebbe la de-escalation vera, e toglierebbe il primo anello della catena descritta qui.',
        triggered: false,
        evidence:
          'Andata nella direzione opposta su entrambe le gambe: il Brent è salito a 86,11 dollari invece ' +
          'di scendere sotto 82, e il traffico attraverso lo Stretto resta molto limitato, con l’Iran che ' +
          'continua a subordinare la riapertura a condizioni poste agli Stati Uniti.',
      },
      {
        condition:
          'Un indice dei prezzi statunitense mercoledì 12 agosto sopra il 3,4% annuo sul dato principale, o sopra più 0,2% mensile su quello di fondo: renderebbe questa analisi irrilevante prima ancora che sbagliata, perché il comando tornerebbe al canale americano e la catena energetica diventerebbe un dettaglio.',
        triggered: false,
        evidence:
          'Non giudicabile: il dato esce mercoledì 12 agosto e al momento del controllo non è pubblicato. ' +
          'Il consenso Reuters sul dato annuo principale resta intorno al 3,4%, sceso dal 3,5%.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, ma il valore di questo esito non è nel verdetto: è che l’analisi aveva classificato in anticipo i due rami possibili e in tre ore si è realizzato quello che aveva descritto. Il testo diceva che se il Brent avesse superato gli 84 con il biennale fermo sotto il 4,25% il quadro non sarebbe cambiato, perché è il premio di rischio che sale e si esaurisce; e che solo la salita congiunta avrebbe trasformato il petrolio da problema geopolitico a problema di inflazione. Il Brent è arrivato a 86,11 dollari, circa 84,7 sulla serie di questo archivio, superando la tacca per la prima volta in cinque giorni; il biennale è rimasto a 4,22%. A muoversi è stato il decennale, fino a 4,696%, cioè la parte lunga e non quella dove si prezza una decisione di settembre. La previsione condizionale ha funzionato meglio della previsione di direzione, ed è il primo caso in questo registro in cui si può dirlo con dei numeri.',
    lesson:
      'Una condizione scritta con una congiunzione vale più di due condizioni separate, e questo esito lo dimostra invece di sostenerlo. Se la regola del 5 agosto avesse elencato «Brent sopra 84» e «biennale sopra 4,25%» come due voci indipendenti, oggi il registro segnerebbe «parziale» e la lettura risulterebbe metà sbagliata; scritta come una condizione sola con due gambe, dice la cosa giusta — che il premio energetico da solo non basta, ed è precisamente quanto si è visto otto volte in otto giorni. Quando due fatti contano solo insieme, vanno scritti in una condizione sola.',
  },
  {
    slug: 'il-petrolio-prezza-hormuz-l-oro-no',
    checkedAt: '2026-08-10T15:30:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un oro spot che rompe stabilmente sotto i 4.300 dollari mentre il Dollar Index risale sopra 100 e il biennale supera il 4,25%: sarebbe il deterioramento vero, cioè la correzione che smette di essere presa di profitto e diventa riprezzatura del canale monetario.',
        triggered: false,
        evidence:
          'Nessuna delle tre gambe. L’oro è a circa 4.333 dollari, trentatré sopra la soglia; il Dollar ' +
          'Index a 99,70, sotto quota 100; il biennale a 4,228%, due punti base sotto il 4,25%. Tutte e ' +
          'tre si sono però mosse nella direzione della condizione nel pomeriggio, il che è diverso da ' +
          'essere lontane.',
      },
      {
        condition:
          'Un Brent che accelera oltre gli 88 dollari sulla serie citata oggi, con il decennale che rompe il 4,70%: sarebbe la prova che il premio energetico ha smesso di sostenere il metallo e ha ricominciato ad alimentare i rendimenti contro di lui, che è il rischio principale segnalato in questa analisi.',
        triggered: false,
        evidence:
          'Non scattata su nessuna delle due gambe: il Brent è tornato intorno agli 85 dollari sulla serie ' +
          'citata, tre sotto la soglia degli 88, e il decennale è a 4,664%, quattro punti base sotto il ' +
          '4,70%. Il rischio segnalato dall’analisi ha però cominciato a manifestarsi in forma più lieve, ' +
          'sul biennale invece che sul decennale.',
      },
      {
        condition:
          'Un conteggio dei transiti che risale sopra le otto navi al giorno con il Brent che rientra sotto gli 80: sarebbe la de-escalation vera, e toglierebbe insieme la gamba energetica e la premessa di questa lettura.',
        triggered: false,
        evidence:
          'Nessuna delle due: il traffico attraverso lo Stretto resta descritto come molto limitato, ' +
          'l’ultimo conteggio noto è di due navi venerdì, e il Brent è salito invece che sceso. L’Iran ' +
          'ripete che l’accordo tecnico con l’Oman è nelle fasi finali ma che la riapertura vera richiede ' +
          'concessioni statunitensi su sanzioni e minacce militari.',
      },
      {
        condition:
          'Un oro che supera i massimi di venerdì, circa 4.372 dollari, con il Dollar Index sotto 99,4 e i rendimenti in nuovo calo: renderebbe sbagliata la scelta di lasciare la forza bassa, perché direbbe che il metallo stava solo aspettando e non ignorando.',
        triggered: false,
        evidence:
          'Non scattata, e la giornata è andata dall’altra parte su tutte e tre le gambe: l’oro è sceso a ' +
          '4.333 invece di salire sopra 4.372, il Dollar Index è risalito a 99,70 invece di scendere sotto ' +
          '99,4, e i rendimenti sono saliti invece di calare. La scelta della forza bassa ha retto nel modo ' +
          'più netto possibile.',
      },
      {
        condition:
          'Un indice dei prezzi statunitense mercoledì 12 agosto sopra le attese — sopra il 3,4% annuo sul dato principale o sopra il 2,5% su quello di fondo, oppure sopra più 0,2% mensile di fondo: riporterebbe il comando al canale dei tassi, dove la separazione descritta qui conta molto meno.',
        triggered: false,
        evidence:
          'Non giudicabile: il dato esce mercoledì 12 agosto e al momento del controllo non è pubblicato. ' +
          'Va però registrata una novità che riguarda proprio la soglia: il consenso Reuters sul dato ' +
          'annuo principale è sceso a 3,4% dal 3,5% precedente, quindi la stessa condizione è oggi più ' +
          'facile da soddisfare di quando è stata scritta.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la lettura ha retto alla lettera. Ma la tesi centrale — che il canale geopolitico arrivi all’energia e non ai tassi — ha cominciato a girarsi nel giro di quattro ore, ed è la cosa più informativa di questo esito. L’analisi diceva che il greggio in salita era neutro per l’oro finché non trascinava i rendimenti, e indicava proprio quel trascinamento come il rischio principale: nel pomeriggio il Brent è tornato verso gli 85 dollari e il biennale è passato da 4,204% a 4,228%, con il Dollar Index a 99,70 e il decennale a 4,664%. Le condizioni erano scritte su livelli lontani — 4.300 sull’oro, 88 sul Brent, 4,70% sul decennale — e nessuno di quei livelli è stato avvicinato; il meccanismo, però, ha cominciato a cambiare molto prima. Un’analisi può essere confermata dalle proprie soglie e superata dal proprio contenuto nella stessa giornata.',
    lesson:
      'Le condizioni vanno messe anche sul meccanismo, non solo sui livelli. Questa lettura si reggeva su una separazione fra due canali, e nessuna delle cinque condizioni chiedeva che quella separazione restasse: chiedevano tutte che un prezzo raggiungesse una soglia. Il risultato è un esito «confermata» su un’analisi il cui argomento centrale era già in discussione quattro ore dopo. Quando la tesi è una relazione fra due strumenti, almeno una condizione deve essere scritta su quella relazione — «il biennale che si muove insieme al greggio per due sedute» — e non soltanto sui punti di rottura di ciascuno.',
  },
  {
    slug: 'washington-abbassa-il-tono-e-mocha-viene-colpita-di-nuovo',
    checkedAt: '2026-08-10T15:30:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un ritorno americano alla minaccia esplicita — un ultimatum, una data, un dispiegamento annunciato — che cancellerebbe in un giorno la componente distensiva descritta qui, esattamente come il 3 agosto una minaccia aveva cancellato una distensione della settimana prima.',
        triggered: false,
        evidence:
          'Non scattata sul fronte iraniano, che è quello a cui la condizione si riferisce: nessun ' +
          'ultimatum, nessuna data, nessun dispiegamento annunciato verso Teheran. La linea descritta ' +
          'come deliberatamente contenuta è rimasta tale per l’intera giornata. Un ultimatum con una data ' +
          'è invece arrivato, ma su un altro fronte e verso un altro destinatario: le tre settimane date ' +
          'alla governatrice Cook. Non è ciò che la condizione chiedeva e non viene contato qui.',
      },
      {
        condition:
          'Un attacco houthi che passa dal porto alle navi commerciali o alle petroliere in transito a Bab el-Mandeb: sposterebbe l’episodio dalla categoria in cui questa lettura lo mette, cioè quella che non tocca l’offerta di greggio.',
        triggered: false,
        evidence:
          'Nessun attacco a navi commerciali o petroliere in transito riportato nelle sedici ore ' +
          'successive. Gli obiettivi sono rimasti a terra, che è la categoria in cui questa lettura aveva ' +
          'collocato l’episodio.',
      },
      {
        condition:
          'Una risposta militare dichiarata di Arabia Saudita, Turchia o Pakistan sotto il patto della Mecca: è la prima occasione in cui quella clausola potrebbe essere invocata, e il suo uso varrebbe più di qualunque tono dichiarato a Washington.',
        triggered: false,
        evidence:
          'Nessuna invocazione della clausola e nessuna risposta militare dichiarata da alcuno dei tre ' +
          'firmatari. Il patto resta quello che questo archivio aveva descritto il 9 agosto: una cornice ' +
          'senza documento attuativo e senza automatismo.',
      },
      {
        condition:
          'Un Brent che apre lunedì e resta sotto gli 82 dollari: direbbe che il mercato ha letto la serata come distensiva nel suo insieme, e che il peso dato qui a Mocha e a Gaza era eccessivo.',
        triggered: false,
        evidence:
          'Nettamente non scattata, ed è la condizione meglio datata delle cinque. Il Brent ha aperto a ' +
          '84,79 dollari con più 1,44% ed è tornato verso gli 85 nel pomeriggio: non è mai stato vicino ' +
          'agli 82 in nessun momento della seduta. Il mercato non ha letto la serata come distensiva.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un Brent sopra gli 84 dollari con il biennale che risale sopra il 4,25%. È la regola dichiarata da questo archivio il 5 agosto e mai cambiata — oltre quella soglia il premio energetico smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui.',
        triggered: false,
        evidence:
          'Non scattata, ma è la volta che ci è andata più vicino da quando la regola esiste. Sulla serie ' +
          'usata da questo archivio il Brent vale circa 83,85 dollari, quindici centesimi sotto la prima ' +
          'gamba; il biennale è a 4,228%, due punti base sotto la seconda. Per la prima volta entrambe si ' +
          'avvicinano nella stessa seduta, e la condizione resta non scattata per un margine che sta ' +
          'dentro l’errore di conversione fra le due serie del Brent.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata. La lettura sosteneva che le tre notizie della domenica sera si annullassero e che nessuna fosse un fatto materiale: il primo prezzo lo ha confermato nel modo più diretto, perché il Brent ha aperto a 84,79 e non ha mai avvicinato gli 82 che avrebbero detto il contrario. Ha però confermato anche l’altra metà, quella scomoda: il greggio è salito per Hormuz e non per Mocha né per il tono di Washington, cioè per il vincolo materiale e non per le tre notizie di cui l’analisi parlava. Quanto alla quinta condizione, è la volta in cui il margine si è ridotto di più da quando la regola del 5 agosto esiste — quindici centesimi su una gamba e due punti base sull’altra.',
  },
  {
    slug: 'due-infrastrutture-in-un-giorno-solo-una-ha-un-prezzo',
    checkedAt: '2026-08-10T15:30:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un Brent che apre lunedì e chiude sotto gli 82 dollari: direbbe che due infrastrutture colpite in un giorno non producono alcun premio, e che il canale geopolitico è chiuso a prescindere dai fatti.',
        triggered: false,
        evidence:
          'Il Brent ha aperto a 84,79 dollari con più 1,44% e nel pomeriggio è tornato verso gli 85. La ' +
          'chiusura di lunedì non era ancora avvenuta al momento del controllo, ma la condizione chiede ' +
          'entrambe le cose e il prezzo si trova due o tre dollari sopra la soglia: perché scattasse ' +
          'servirebbe un crollo del 3% nelle ore rimanenti. Registrata come non scattata sulla base del ' +
          'prezzo osservato, non della chiusura.',
      },
      {
        condition:
          'Un attacco a un nodo dell’esportazione energetica — Yanbu, Ras Tanura, un terminale di carico — con danno operativo dichiarato da chi lo subisce: sposterebbe l’episodio nella categoria in cui questa lettura non lo mette.',
        triggered: false,
        evidence:
          'Nessun attacco a Yanbu, a Ras Tanura o a un terminale di carico, e nessun danno operativo ' +
          'dichiarato da un operatore energetico. La seconda ondata houthi di domenica sera ha colpito di ' +
          'nuovo Mocha, cioè lo stesso porto commerciale che questa analisi collocava fuori dalla ' +
          'categoria rilevante per l’offerta.',
      },
      {
        condition:
          'Una conferma saudita che l’incendio di Jazan sia stato causato dall’attacco rivendicato, con la capacità ferma oltre la settimana: renderebbe la giornata più grave di come è descritta qui.',
        triggered: false,
        evidence:
          'Nessuna conferma saudita dell’attribuzione nelle quarantotto ore successive, e nessuna ' +
          'dichiarazione sulla capacità dell’impianto. L’attribuzione resta dove l’analisi l’aveva ' +
          'lasciata: un incendio confermato dal ministero dell’Energia e una rivendicazione houthi, senza ' +
          'il nesso fra i due.',
      },
      {
        condition:
          'Un annuncio di tregua sullo Yemen, o un ritorno al tavolo negoziale sotto egida delle Nazioni Unite entro la settimana: toglierebbe la premessa nel modo più diretto.',
        triggered: false,
        evidence:
          'Non scattata, e la settimana non è finita. Nella finestra è andata nella direzione opposta: una ' +
          'seconda ondata di missili e droni sullo stesso porto la sera di domenica, riferita da Reuters ' +
          'alle 20:18 UTC. Nessun annuncio di tregua e nessun ritorno al tavolo.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un Brent sopra gli 84 dollari con il biennale che risale sopra il 4,25%. È la regola dichiarata il 5 agosto e mai cambiata — oltre quella soglia il premio energetico smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui.',
        triggered: false,
        evidence:
          'Non scattata per un margine minimo su entrambe le gambe: sulla serie di questo archivio il ' +
          'Brent vale circa 83,85 dollari e il biennale è a 4,228%, quindi quindici centesimi e due punti ' +
          'base sotto le rispettive tacche. È la lettura più vicina allo scatto da quando la regola esiste.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la tesi ha retto nella parte che le stava più a cuore. L’analisi sosteneva che l’episodio letale della giornata — il porto di Mocha, con almeno sette morti — non avrebbe avuto un prezzo, mentre quello senza feriti, la raffineria di Jazan, ne aveva uno; e che il premio si aggiorna di quanto vale la cosa e non di quanto la cosa colpisce. Lunedì il greggio è salito, ma per l’incertezza sulla riapertura dello Stretto, che è il canale dell’offerta, e non per la seconda ondata su Mocha arrivata nel frattempo. La distinzione fra le due scale, che era il punto di quell’analisi, si è rivelata quella giusta.',
  },
  {
    slug: 'un-drone-su-jazan-e-la-via-di-fuga-da-hormuz',
    checkedAt: '2026-08-10T15:30:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Una smentita saudita dell’attribuzione houthi, o una ricostruzione indipendente che attribuisca l’incendio a un guasto industriale: toglierebbe il fatto militare su cui questa lettura poggia.',
        triggered: false,
        evidence:
          'Nessuna smentita e nessuna ricostruzione indipendente nelle quarantotto ore successive. ' +
          'L’attribuzione resta non confermata da Riyadh, che è la situazione di partenza e non un ' +
          'peggioramento: la condizione chiedeva una smentita, non l’assenza di conferma.',
      },
      {
        condition:
          'Il ripristino dichiarato della piena capacità di Jazan, circa 400.000 barili al giorno, entro la settimana: direbbe che l’episodio non ha prodotto un danno operativo.',
        triggered: false,
        evidence:
          'Nessuna dichiarazione di ripristino, e la settimana non è finita. Aramco non ha aggiornato la ' +
          'formula usata finora, quella delle interruzioni produttive senza impatto materiale ' +
          'complessivo.',
      },
      {
        condition:
          'Un Brent che apre lunedì e chiude sotto gli 82 dollari: direbbe che nemmeno un impianto colpito e rivendicato produce un premio, dopo che quindici navi colpite dichiarate da ADNOC non l’avevano prodotto.',
        triggered: false,
        evidence:
          'Apertura a 84,79 dollari con più 1,44% e ritorno verso gli 85 nel pomeriggio: il premio si è ' +
          'formato e per la prima volta in una settimana non si è sgonfiato entro la seduta. La chiusura ' +
          'non era ancora avvenuta al controllo, ma il prezzo si trova due o tre dollari sopra la soglia.',
      },
      {
        condition:
          'Un conteggio dei transiti a Hormuz sopra le otto navi al giorno insieme a un’accettazione americana delle condizioni iraniane: sarebbe la riapertura vera, e renderebbe irrilevante la via di fuga di cui parla questa analisi.',
        triggered: false,
        evidence:
          'Non scattata su nessuna delle due gambe, e su entrambe è andata nella direzione opposta. Il ' +
          'conteggio noto è di due navi venerdì, cioè un quarto della soglia; e l’Iran ripete che ' +
          'l’accordo tecnico con l’Oman non equivale alla riapertura, che richiede concessioni ' +
          'statunitensi su sanzioni e minacce militari. La via di fuga di cui parla l’analisi è più ' +
          'rilevante di quando è stata scritta, non meno.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un Brent sopra gli 84 dollari con il biennale che risale sopra il 4,25%. È la regola dichiarata il 5 agosto e mai cambiata — oltre quella soglia il premio energetico smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui.',
        triggered: false,
        evidence:
          'Non scattata: circa 83,85 dollari sulla serie di questo archivio contro gli 84 richiesti, e ' +
          '4,228% contro il 4,25%. Entrambe le gambe a ridosso e nessuna delle due oltre.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata. L’analisi sosteneva che colpire la costa saudita del Mar Rosso non aggiungesse un fronte ma togliesse l’alternativa a quello già aperto, perché i due colli di bottiglia sono in serie e non in parallelo: lunedì il mercato ha prezzato esattamente quello, con il Brent che sale sull’incertezza dello Stretto mentre il traffico resta a due navi al giorno. La quarta condizione è quella che dice di più, perché è andata nel verso opposto su entrambe le gambe — il conteggio è sceso invece di salire e l’Iran ha ribadito che l’accordo tecnico non è la riapertura. È la conferma più forte fra le quattro registrate oggi, e viene dal vincolo materiale invece che da un prezzo.',
  },
  {
    slug: 'cinquantamila-soldati-dichiarati-e-un-decimo-di-punto-nel-golfo',
    checkedAt: '2026-08-10T10:40:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Una conferma indipendente del dispiegamento — da Seul, dagli Stati Uniti o dalla NATO, oppure un’ammissione di Pyongyang: sposterebbe la dichiarazione dalla categoria delle affermazioni a quella dei fatti, e renderebbe il numero un dato invece di una stima.',
        triggered: false,
        evidence:
          'Nessuna conferma nelle sedici ore successive: né Seul né Washington né la NATO hanno riscontrato ' +
          'la cifra, e Pyongyang non si è pronunciata. La dichiarazione ucraina resta l’unica fonte del ' +
          'numero, esattamente come al momento della pubblicazione.',
      },
      {
        condition:
          'Una risposta militare o diplomatica significativa di Corea del Sud, NATO o Stati Uniti: è la soglia che l’analisi indica come necessaria perché questo canale diventi un driver, e superarla renderebbe sbagliata la scelta di lasciarlo fuori dalla direzione.',
        triggered: false,
        evidence:
          'Nessuna reazione di terzi. Nella stessa finestra la sola presa di posizione americana rilevante ' +
          'è andata in direzione opposta e su un altro teatro: Trump ha descritto ad Axios la linea ' +
          'sull’Iran come deliberatamente contenuta. La scelta di tenere il canale nordcoreano fuori dalla ' +
          'direzione ha retto.',
      },
      {
        condition:
          'Un indice saudita che nella prossima seduta si muove di più dell’1% in una delle due direzioni: direbbe che la chiusura piatta di domenica era attesa di un’informazione e non indifferenza al rischio, e che leggerla come non-riprezzatura era prematuro.',
        triggered: false,
        evidence:
          'È la condizione più debole delle cinque, e va detto: nessuna rilevazione della seduta di lunedì ' +
          'del listino saudita è stata reperita al momento del controllo. Registrata come non scattata ' +
          'perché nulla indica che lo sia, non perché sia stata verificata. Il resto della mattina va nella ' +
          'stessa direzione della lettura — il greggio prezza Hormuz e i beni rifugio no — ma è un altro ' +
          'mercato e non sostituisce la misura chiesta.',
      },
      {
        condition:
          'Un oro spot che rientra sotto i 4.300 dollari, cancellando il movimento del rapporto occupazionale su cui poggia la sola gamba rimasta a questa inclinazione.',
        triggered: false,
        evidence:
          'Non scattata, e con un margine misurato: il minimo della sessione è stato 4.322,28 dollari alle ' +
          'quattro del mattino, ventidue dollari sopra la soglia, con risalita a 4.330,46 in mattinata ' +
          'europea. La correzione c’è stata — meno 0,5% sul minimo — ma si è fermata prima del livello che ' +
          'avrebbe cancellato il movimento del rapporto occupazionale.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un Brent sopra gli 84 dollari con il biennale che risale sopra il 4,25%. È la regola dichiarata da questo archivio il 5 agosto e mai cambiata — oltre quella soglia il premio energetico smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui.',
        triggered: false,
        evidence:
          'Non scattata, e per la gamba dei tassi in modo netto: il biennale è a 4,206%, quattro punti base ' +
          'sotto il 4,25%, e nella sessione non lo ha mai avvicinato. Sul greggio la risposta dipende dalla ' +
          'serie, ed è la scoperta scomoda del controllo: le quotazioni di lunedì — 84,79 all’apertura, ' +
          '84,38 in mattinata — appartengono alla serie che venerdì ha chiuso a 83,55, non a quella usata ' +
          'da questo archivio dal 5 agosto, che ha chiuso a 82,21 ed è quella su cui la soglia degli 84 è ' +
          'stata fissata. Applicando la stessa variazione a quest’ultima il Brent vale circa 83 dollari, ' +
          'cioè sotto la tacca. La condizione richiede comunque entrambe le gambe, e quella dei tassi non ' +
          'si è mossa.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e questa volta il verdetto è stato pagato dai prezzi invece che dal fine settimana. La tesi centrale era che il canale geopolitico fosse stretto e che l’inclinazione dell’oro reggesse per la sola gamba monetaria: la riapertura di lunedì l’ha separata in chiaro, con il Brent più 1,4% sull’incertezza di Hormuz e l’oro che scende dello 0,3% invece di seguirlo. La scelta di portare la lettura intraday da rialzista a neutrale-rialzista, contro il testo ricevuto, è stata la parte che ha retto meglio: il metallo non è salito. La parte più debole è la terza condizione, ancorata a un indice azionario di cui non è stata trovata una rilevazione: era una misura elegante e si è rivelata poco reperibile, che è un difetto di progettazione della condizione e non un esito.',
    lesson:
      'Una condizione vale quanto la reperibilità del dato che la chiude, non quanto la sua eleganza. La chiusura domenicale del Golfo era stata una scoperta buona — il fine settimana non è senza prezzo — ma trasformarla in una soglia sull’indice saudita ha prodotto una condizione che al controllo successivo non si è potuta misurare, mentre le quattro ancorate a oro, Brent e biennale si sono chiuse in un minuto. Le soglie vanno messe su serie che questo archivio già rileva a ogni controllo; una misura nuova si cita come osservazione, non la si promuove a condizione finché non è entrata nella rilevazione ordinaria.',
  },
  {
    slug: 'marib-sotto-i-missili-e-il-rischio-piu-alto-dal-2022',
    checkedAt: '2026-08-10T10:45:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un Brent che lunedì apre e resta sotto gli 82 dollari: direbbe che nemmeno un’escalation con questo timbro produce un premio, e che il canale geopolitico è chiuso a prescindere dai fatti.',
        triggered: false,
        evidence:
          'Nettamente non scattata, ed è la condizione che l’analisi aveva scritto meglio, perché datava se ' +
          'stessa all’apertura di lunedì. Il Brent ha aperto a 84,79 dollari, più 1,44%, e in mattinata ' +
          'europea è a 84,38: sulla serie di questo archivio corrispondono a circa 83, comunque sopra la ' +
          'soglia in entrambe le letture. Il canale geopolitico non è chiuso: produce un premio, e lo ' +
          'produce sull’energia.',
      },
      {
        condition:
          'Un oro spot che rientra sotto i 4.300 dollari, cancellando il movimento del rapporto occupazionale insieme a qualunque premio di rischio.',
        triggered: false,
        evidence:
          'Non scattata: minimo a 4.322,28 dollari alle quattro del mattino, ventidue sopra la soglia, e ' +
          'risalita a 4.330,46. Il movimento del rapporto occupazionale è stato conservato in tutte le ' +
          'rilevazioni della sessione.',
      },
      {
        condition:
          'Un annuncio di tregua o un ritorno al tavolo negoziale sotto egida delle Nazioni Unite entro la settimana: toglierebbe la premessa di questa lettura nel modo più diretto possibile.',
        triggered: false,
        evidence:
          'Non solo non scattata: nella finestra è successo l’opposto, e due volte. Domenica gli Houthi ' +
          'hanno colpito la raffineria di Jazan e il porto di Mocha, e in serata Reuters ha riferito una ' +
          'seconda ondata di missili e droni sullo stesso porto. Nessun annuncio di tregua e nessun ritorno ' +
          'al tavolo.',
      },
      {
        condition:
          'Un indice dei prezzi mercoledì 12 agosto sopra le attese del 3,4% annuo: riporterebbe il comando al canale dei tassi, dove un’escalation regionale conta molto meno.',
        triggered: false,
        evidence:
          'Non giudicabile: il dato esce mercoledì 12 agosto e al momento del controllo non è pubblicato. ' +
          'Registrata come non scattata perché non lo è, non perché sia stata verificata. È la stessa ' +
          'condizione che resta aperta su quattro analisi consecutive di questo archivio.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un Brent sopra gli 84 dollari con il biennale che risale sopra il 4,25%. A quel punto il premio energetico prodotto dall’escalation smetterebbe di sostenere il metallo e ricomincerebbe ad alimentare i rendimenti contro di lui, che è la regola dichiarata da questo archivio il 5 agosto.',
        triggered: false,
        evidence:
          'Non scattata, ma è la condizione che si è avvicinata di più ed è giusto dirlo. Il biennale è a ' +
          '4,206%, quattro punti base sotto la sua metà della soglia, e non l’ha mai avvicinata. Sul ' +
          'greggio, sulla serie usata da questo archivio il Brent vale circa 83 dollari e resta sotto gli ' +
          '84; sulla serie citata dalle agenzie lunedì lo ha superato all’apertura. La condizione richiede ' +
          'entrambe le gambe e la seconda non si è mossa, ma la prima metà è ormai a ridosso.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata. L’analisi sosteneva che l’escalation yemenita fosse un peggioramento dentro uno stato già noto e non un cambio di stato, e che il metro fosse il premio sul greggio: quel premio si è formato, con il Brent più 1,4% all’apertura di lunedì, mentre l’oro restava fermo. La lettura ha quindi avuto ragione sul canale e non sul grado — l’escalation è proseguita per due giorni, con Jazan, Mocha e una seconda ondata sullo stesso porto, senza mai alzare il segnale sull’oro. Resta interamente davanti la sola condizione che l’analisi indicava come capace di cambiare il quadro, l’indice dei prezzi di mercoledì.',
  },
  {
    slug: 'la-riapertura-ha-un-prezzo-non-sul-tavolo-dell-oman',
    checkedAt: '2026-08-09T18:00:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un conteggio dei transiti che risale sopra le otto navi al giorno: è il metro che questo archivio segue dal 5 agosto e l’unico che misura il passaggio invece di descriverlo.',
        triggered: false,
        evidence:
          'Nessun conteggio nuovo nelle ventiquattro ore successive: l’ultimo resta quello di 33 navi da lunedì ' +
          'a giovedì della settimana scorsa, cioè quattro al giorno, la metà della soglia. Registrata come non ' +
          'scattata perché non è arrivato nulla che la facesse scattare, non perché sia stata rimisurata.',
      },
      {
        condition:
          'Una dichiarazione congiunta Iran-Oman pubblicata insieme a un’accettazione americana esplicita delle condizioni iraniane: sono le due metà che oggi mancano, e questa lettura poggia sul fatto che servano insieme.',
        triggered: false,
        evidence:
          'È la condizione che ha avuto la verifica migliore, e viene da un prezzo invece che da un silenzio. ' +
          'Domenica 9 agosto le borse del Golfo — le uniche aperte, perché la loro settimana va da domenica a ' +
          'giovedì — hanno chiuso caute proprio in attesa di chiarezza sull’accordo Oman-Iran: indice saudita ' +
          'più 0,1%, Qatar meno 0,1%. Un giorno dopo la pubblicazione, nessuna dichiarazione congiunta e ' +
          'nessuna accettazione americana; e gli operatori regionali stanno ancora aspettando, che è la tesi ' +
          'dell’analisi verificata dal lato di chi ci vive dentro.',
      },
      {
        condition:
          'Una smentita iraniana della ricostruzione degli Emirati sul missile, o una verifica indipendente che l’attacco non sia avvenuto: toglierebbe la gamba dell’escalation da questa giornata.',
        triggered: false,
        evidence:
          'Nessuna smentita iraniana nelle ventiquattro ore successive, e nessuna verifica indipendente in ' +
          'senso contrario. Nella stessa finestra l’escalation è andata nella direzione opposta, con l’incendio ' +
          'alla raffineria Aramco di Jazan rivendicato dagli Houthi e l’attacco al porto yemenita di Mocha con ' +
          'almeno sette morti.',
      },
      {
        condition:
          'Un Brent che rientra sotto gli 80 dollari: direbbe che il mercato dell’energia ha smesso di prezzare lo stallo che questa lettura descrive.',
        triggered: false,
        evidence:
          'Non giudicabile con un prezzo: l’analisi è stata pubblicata sabato pomeriggio, a mercati dell’energia ' +
          'già chiusi, e da allora il Brent non ha avuto un solo scambio. L’ultimo valore resta la chiusura di ' +
          'venerdì 7 agosto a 82,21 dollari, due e ventuno sopra la soglia. Registrata come non scattata perché ' +
          'non lo è, non perché sia stata messa alla prova.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un Brent sopra gli 84 dollari con il biennale che risale sopra il 4,25%. È la regola dichiarata da questo archivio il 5 agosto e mai cambiata — oltre quella soglia il premio energetico smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui.',
        triggered: false,
        evidence:
          'Stessa situazione, e vale per entrambe le gambe: né il Brent né il biennale hanno avuto un prezzo ' +
          'dopo la pubblicazione. Gli ultimi valori sono la chiusura del 7 agosto a 82,21 dollari e il 4,208% ' +
          'del biennale, cioè entrambi sotto le rispettive tacche, ma sono di prima che questa lettura ' +
          'esistesse.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e per una volta il verdetto non poggia soltanto sul fatto che i mercati fossero chiusi. Due delle cinque hanno avuto una verifica vera. La seconda — quella che porta la tesi, cioè che l’intesa non arrivi perché il prezzo chiesto da Teheran non è sul tavolo dell’Oman — è stata confermata da un prezzo: le borse del Golfo hanno chiuso domenica praticamente ferme, più 0,1% l’indice saudita e meno 0,1% quello del Qatar, dichiaratamente in attesa di chiarezza su quell’accordo. Un giorno dopo, nessuna dichiarazione congiunta e nessuna accettazione americana. La terza è stata verificata al contrario: non solo nessuna smentita iraniana, ma un’escalation ulteriore, con Jazan e Mocha colpite nella stessa domenica. Le altre tre restano formalmente non scattate senza essere state messa alla prova: il conteggio dei transiti non è stato rimisurato, e le due condizioni ancorate al Brent non hanno avuto un solo scambio da venerdì sera.',
    lesson:
      'Il fine settimana non è senza prezzo, e questo archivio lo ha trattato così per due giorni di fila. Le borse del Golfo lavorano da domenica a giovedì: mentre Londra e New York sono chiuse, Riad e Doha scambiano, e sono i mercati degli operatori materialmente più esposti a Hormuz, a Jazan e al Mar Rosso. Non sostituiscono il Brent — un indice azionario di un Paese esportatore ha i suoi flussi e i suoi titoli bancari — ma sono un’osservazione con un numero, datata, e nel quadrante giusto. Correggono in parte la lezione registrata due esiti fa: le condizioni ancorate a un prezzo vanno datate in sedute, e nel contare quelle sedute la domenica del Golfo va inclusa invece di essere data per persa.',
  },
  {
    slug: 'meno-23-mila-posti-e-il-rialzo-di-settembre-passa-in-minoranza',
    checkedAt: '2026-08-09T02:20:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un indice dei prezzi di mercoledì 12 agosto sopra le attese del 3,4% annuo, o un dato core sopra il 2,5%: rimetterebbe il rialzo sul tavolo e toglierebbe a questa lettura la sua unica gamba.',
        triggered: false,
        evidence:
          'Non giudicabile: il dato esce mercoledì 12 agosto e al momento del controllo non era pubblicato. È ' +
          'la condizione che l’analisi stessa indicava come decisiva, e resta interamente davanti. Registrata ' +
          'come non scattata perché non lo è, non perché sia stata verificata.',
      },
      {
        condition:
          'Una probabilità di rialzo a settembre che risale sopra il 50%, cioè che torna a essere lo scenario più probabile: è il numero su cui questa lettura è costruita, e la metà è la linea che oggi è stata attraversata.',
        triggered: false,
        evidence:
          'Il numero è rimasto in minoranza per tutta la finestra: 43,7% alle 15:55 del 7 agosto, dopo il ' +
          'minimo del 41,7% toccato subito dopo il dato e contro il 55,1% delle 14:20. Da allora non esiste ' +
          'una riprezzatura, perché i mercati dei tassi sono rimasti chiusi: la linea della metà non è stata ' +
          'riattraversata e non ha nemmeno avuto occasione di esserlo.',
      },
      {
        condition:
          'Un oro spot che rientra sotto i 4.300 dollari, che cancellerebbe l’intero movimento di oggi e riporterebbe il prezzo dove era prima del dato.',
        triggered: false,
        evidence:
          'Nessun rientro: l’oro spot ha chiuso il 7 agosto a 4.342,18 dollari, più 2,39%, quarantadue sopra ' +
          'la soglia, e da allora non c’è stato un altro prezzo. Il movimento del rapporto occupazionale è ' +
          'stato conservato per intero fino alla chiusura, pur senza mai riavvicinare il massimo di 4.371,89 ' +
          'segnato alle 15:00.',
      },
      {
        condition:
          'Un decennale che torna sopra il 4,70% mentre l’oro resta sopra i 4.300: direbbe che il mercato obbligazionario ha già smesso di credere alla lettura di oggi sul rapporto occupazionale.',
        triggered: false,
        evidence:
          'Il decennale non ha più avvicinato quel livello dopo la pubblicazione: sceso a un minimo di 4,601% ' +
          'subito dopo il dato, ha chiuso a 4,655%, cioè quattro decimi e mezzo di punto percentuale sotto la ' +
          'soglia. Il massimo di 4,690% del 7 agosto è della mattinata, cioè di prima che questa lettura ' +
          'esistesse.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un Brent che torna sopra gli 84 dollari mentre l’oro sale con lui. Toglierebbe la prova su cui poggia il titolo di questa analisi — che a muovere il metallo siano i tassi e non il rischio — e riporterebbe il quadro a quello ambiguo di ieri.',
        triggered: false,
        evidence:
          'Il Brent non è tornato sopra gli 84 dollari dopo la pubblicazione: è risalito a 83,65 sulla ' +
          'dichiarazione di ADNOC e ha chiuso a 82,21, meno 0,34%. Il massimo di 84,40 è della mattinata. La ' +
          'prova su cui poggia il titolo ha quindi retto: nella seduta il metallo è salito mentre il greggio ' +
          'chiudeva in negativo, che è la separazione fra il canale dei tassi e quello del rischio che ' +
          'l’analisi sosteneva.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la tesi centrale ha avuto la conferma che chiedeva. L’analisi sosteneva che a muovere l’oro fossero i tassi e non il rischio geopolitico, e nella stessa seduta il metallo ha chiuso a 4.342,18 dollari, più 2,39%, mentre il Brent chiudeva a 82,21 con il segno meno: le due gambe si sono separate esattamente nel verso descritto. La probabilità di un rialzo a settembre è rimasta in minoranza al 43,7% e il decennale ha chiuso più in basso di dov’era. Va però detto quanto poco di questo verdetto sia stato guadagnato nei due giorni successivi: la finestra dichiarata era di giorni, ma i giorni trascorsi sono stati un sabato e una domenica, e ogni numero citato qui è della sola seduta del 7 agosto. La condizione che l’analisi stessa chiamava decisiva — l’indice dei prezzi — è ancora interamente davanti.',
    lesson:
      'È il terzo esito consecutivo chiuso sui dati di una sola giornata, e la ragione non è la fretta: è che l’orizzonte è stato contato in giorni di calendario mentre il mercato conta in sedute. Un’analisi pubblicata di venerdì pomeriggio con orizzonte «giorni» arriva al lunedì avendo avuto un’ora e mezza di contrattazioni per essere smentita, non due giorni. Il registro non se ne accorge, perché confronta `checkedAt` con `publishedAt` e vede quarantotto ore. Le condizioni ancorate a un prezzo vanno quindi datate in sedute — «entro la chiusura di lunedì», non «entro un paio di giorni» — altrimenti un fine settimana regala a ogni lettura di venerdì una conferma che nessun prezzo ha messo alla prova.',
  },
  {
    slug: 'quindici-navi-colpite-e-il-greggio-riparte',
    checkedAt: '2026-08-08T17:25:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un Brent che rientra sotto gli 82 dollari entro la seduta: direbbe che il mercato ha letto la dichiarazione di ADNOC come rumore, e che il premio si è già sgonfiato per la settima volta in sette giorni.',
        triggered: false,
        evidence:
          'Non scattata, e per ventuno centesimi. La seduta si è chiusa e il Brent ha chiuso a 82,21 dollari, ' +
          'meno 0,34%: dal momento della pubblicazione, con il greggio a 83,65, il prezzo è sceso per tutta la ' +
          'sera senza mai passare sotto la soglia. Il minimo di giornata, 81,52, è del primo pomeriggio, cioè ' +
          'di prima che questa lettura esistesse.',
      },
      {
        condition:
          'Un oro spot che rientra sotto i 4.300 dollari, che cancellerebbe il movimento del rapporto occupazionale e con esso l’altra gamba di questa lettura.',
        triggered: false,
        evidence:
          'Nessun rientro: l’oro spot ha chiuso il 7 agosto a 4.342,18 dollari, più 2,39%, quarantadue ' +
          'dollari sopra la soglia. Il massimo delle 15:00, 4.371,89, non è più stato avvicinato, ma nemmeno ' +
          'il livello di invalidazione è mai stato messo in discussione.',
      },
      {
        condition:
          'Una probabilità di rialzo a settembre che risale sopra il 50%, cioè che torna a essere lo scenario più probabile.',
        triggered: false,
        evidence:
          'Il numero è rimasto in minoranza: 43,7% alle 15:55 del 7 agosto, dopo essere sceso al 41,7% dal ' +
          '55,1% delle 14:20. Ne ha restituiti due dei tredici e mezzo persi, e resta sei punti e tre decimi ' +
          'sotto la metà.',
      },
      {
        condition:
          'Un indice dei prezzi mercoledì 12 agosto sopra le attese del 3,4% annuo, o un dato di fondo sopra il 2,5%: con il greggio di nuovo in salita, sarebbe la combinazione che rimette il rialzo di settembre sul tavolo.',
        triggered: false,
        evidence:
          'Non giudicabile: il dato esce mercoledì 12 agosto e al momento del controllo non era pubblicato. ' +
          'Registrata come non scattata perché non lo è, non perché sia stata verificata.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un Brent sopra gli 84 dollari con il biennale che risale sopra il 4,25%. Sarebbe il premio energetico che smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui, che è la regola dichiarata da questo archivio il 5 agosto e mai cambiata.',
        triggered: false,
        evidence:
          'Nessuna delle due metà. Il Brent non ha superato gli 84 dollari dopo la pubblicazione — il massimo ' +
          'di 84,40 è della mattinata — e ha chiuso a 82,21; il biennale ha chiuso a 4,208%, quattro decimi di ' +
          'punto base sotto la tacca del 4,25%.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, ma il verdetto va letto con due riserve dichiarate. La prima: la condizione principale ha retto per ventuno centesimi. La lettura sosteneva che quindici navi colpite dichiarate da chi le possiede fossero un fatto materiale capace di reggere dove sei annunci diplomatici avevano fallito, e la prova richiesta era che il Brent non tornasse sotto gli 82 entro la seduta. Non ci è tornato, ma ha chiuso in negativo sulla giornata dopo essere risalito a 83,65 sulla notizia: il premio si è formato e riassorbito nel giro di sei ore, cioè si è comportato esattamente come i sei annunci che la lettura riteneva diversi. La tesi regge alla lettera e il meccanismo su cui poggia si è già consumato. La seconda riserva: una condizione su cinque, quella sull’indice dei prezzi, matura mercoledì e non è stata giudicata. Quello che ha retto senza margini di lettura è l’altra gamba, quella monetaria — l’oro a 4.342,18 in chiusura e la probabilità di rialzo ferma al 43,7% — che però non era la gamba di cui questa analisi parlava.',
    lesson:
      'È il terzo esito consecutivo in cui la condizione decisiva si decide su meno di un dollaro, e qui il margine è di ventuno centesimi su una soglia di 82. Il registro segna «confermata» tre volte mentre le letture passavano tutte a filo, e questo dice qualcosa sulla soglia e non sulle letture: una tacca posta dove il prezzo sta già oscillando misura il rumore, non la tesi. Gli 82 dollari erano nati il 5 agosto come il livello oltre il quale l’effetto inflazionistico supera il sostegno da rifugio, e in tre giorni il Brent ci è passato sopra e sotto sette volte. Una soglia attraversata di continuo va sostituita da una condizione sul comportamento — quante volte il premio si forma e rientra, e in quante ore — perché è quella la cosa che questa settimana ha misurato davvero.',
  },
  {
    slug: 'un-attacco-a-uno-e-un-attacco-a-tutti-il-patto-e-firmato',
    checkedAt: '2026-08-08T10:30:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un testo attuativo che limiti l’impegno alla consultazione senza automatismi: renderebbe la clausola una dichiarazione di intenti, e toglierebbe la ragione per cui questa firma conta più dell’annuncio di stamattina.',
        triggered: false,
        evidence:
          'Nessun testo attuativo pubblicato nelle venti ore successive. Il testo integrale dell’accordo ' +
          'resta non pubblico: quello che si conosce è il comunicato congiunto, che contiene la clausola di ' +
          'difesa collettiva e nessuna specifica sugli obblighi militari. La condizione chiedeva un documento ' +
          'che riducesse l’impegno alla consultazione, e quel documento non esiste ancora.',
      },
      {
        condition:
          'Un oro spot che torna sotto i 4.300 dollari: è la soglia dichiarata ieri sera e superata stamattina, e un rientro la rimetterebbe in discussione.',
        triggered: false,
        evidence:
          'Nessun rientro. Le rilevazioni spot registrate dopo la pubblicazione salgono soltanto: 4.312,33 ' +
          'dollari alle 14:19, massimo di giornata 4.371,89 dopo il rapporto occupazionale, chiusura del ' +
          '7 agosto a 4.342,18 con più 2,39%. Il minimo della finestra resta la rilevazione di pubblicazione, ' +
          'dodici dollari sopra la soglia.',
      },
      {
        condition:
          'Un rapporto occupazionale nettamente sopra le attese di circa 80.000 posti, con salari orari in accelerazione: riporterebbe il canale dei tassi davanti a quello del rifugio in un quarto d’ora, e su questo la lettura non ha difese.',
        triggered: false,
        evidence:
          'Uscito dieci minuti dopo la pubblicazione, e nella direzione opposta per entrambe le metà. I posti ' +
          'di luglio sono meno 23.000 contro attese di circa 80.000, con giugno rivisto da 57.000 a 20.000 e ' +
          'maggio da 129.000 a 63.000; i salari decelerano a più 0,1% mensile e più 3,2% annuo contro attese ' +
          'di più 0,3% e più 3,5%. La condizione era scritta come il rischio principale della lettura, ed è ' +
          'l’unica che si è risolta con un dato pubblicato.',
      },
      {
        condition:
          'Un Brent che torna sotto gli 80 dollari: direbbe che il mercato dell’energia non prezza più il rischio regionale che questo patto certifica.',
        triggered: false,
        evidence:
          'Mai sceso sotto quel livello. Il 7 agosto il Brent oscilla fra 81,52 e 84,40 e chiude a 82,21, meno ' +
          '0,34%: il minimo della giornata resta un dollaro e mezzo sopra la soglia, e la chiusura ventuno ' +
          'centesimi sopra gli 82 dollari.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un decennale sopra il 4,70% con l’oro spot ancora sopra i 4.300, che segnalerebbe i tassi di nuovo in vantaggio senza che il metallo abbia ceduto.',
        triggered: false,
        evidence:
          'Il decennale non ha mai raggiunto il 4,70% nella finestra: il massimo del 7 agosto è 4,690%, ed è ' +
          'della mattina, cioè prima di questa pubblicazione. Dopo il rapporto occupazionale è sceso a 4,601% ' +
          'e ha chiuso a 4,655%, un punto base e mezzo sotto la chiusura precedente. La tacca di logoramento ' +
          'era stata sfiorata prima che questa lettura esistesse, e da allora si è allontanata.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e conviene dire subito quanto costa poco questa conferma. La lettura era neutrale con inclinazione rialzista e forza bassa, e la forza bassa era dichiarata per una ragione precisa: il rapporto occupazionale usciva dieci minuti dopo e poteva cancellare tutto. È uscito, ed è andato dalla parte della lettura con un margine largo — meno 23.000 posti contro 80.000 attesi, 103.000 tolti ai due mesi precedenti, salari in decelerazione — quindi la condizione che avrebbe ucciso l’analisi si è risolta a suo favore invece di essere evitata per poco. L’oro è salito a un massimo di 4.371,89 e ha chiuso a 4.342,18, il Brent non si è mai avvicinato agli 80 dollari, il decennale ha chiuso più in basso di dov’era. La parte che resta davvero non giudicata è la sola che riguardava il patto: il testo attuativo non è stato pubblicato, e senza quello la domanda se la clausola sia un impegno o una cornice è ancora dove era alle 14:20.',
    lesson:
      'Quattro condizioni su cinque erano prezzi e si sono giudicate in un minuto; la quinta era subordinata alla pubblicazione di un documento, e quel documento può non uscire mai. Una condizione scritta nella forma «una volta pubblicati, se i termini si rivelassero…» non è verificabile né in un verso né nell’altro finché l’antecedente non si avvera, e nel frattempo il registro la segna come non scattata — cioè come se avesse retto, mentre in realtà non è stata messa alla prova. Quando la tesi riguarda la sostanza di un atto, la condizione va ancorata a qualcosa che accade comunque entro l’orizzonte dichiarato: una data di ratifica, un passaggio parlamentare, un’esercitazione congiunta. Altrimenti l’unica parte dell’analisi che parlava del suo soggetto è anche l’unica che l’esito non misura.',
  },
  {
    slug: 'un-patto-a-gedda-e-il-rifugio-torna-in-vantaggio',
    checkedAt: '2026-08-08T10:30:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un oro spot che torna sotto i 4.300 dollari: farebbe rientrare la soglia appena superata, e con essa la ragione per cui questa lettura esiste.',
        triggered: false,
        evidence:
          'Nessun rientro sotto la soglia in tutta la finestra. Dopo i 4.304,72 dollari delle 10:38 le ' +
          'rilevazioni spot registrate sono 4.312,33 alle 14:19, un massimo di 4.371,89 dopo il rapporto ' +
          'occupazionale e una chiusura a 4.342,18, più 2,39%. La soglia era stata superata di quattro ' +
          'dollari e settantadue alla pubblicazione, ed è stata lasciata alle spalle di quarantadue alla ' +
          'chiusura.',
      },
      {
        condition:
          'Un rapporto occupazionale nettamente sopra le attese di circa 80.000 posti, con salari orari in accelerazione: riporterebbe il canale dei tassi in vantaggio su quello del rifugio nello spazio di un quarto d’ora.',
        triggered: false,
        evidence:
          'Il contrario, su entrambe le metà: meno 23.000 posti contro attese di circa 80.000, primo calo da ' +
          'mesi, con 103.000 posti tolti alle revisioni di maggio e giugno; salari a più 0,1% mensile e più ' +
          '3,2% annuo contro attese di più 0,3% e più 3,5%. Il canale dei tassi si è mosso nella direzione ' +
          'opposta a quella descritta dalla condizione — biennale da 4,245% a un minimo di 4,158%, Dollar ' +
          'Index sotto 99,50 — cioè a favore del rifugio.',
      },
      {
        condition:
          'Un Brent che torna sotto gli 80 dollari: toglierebbe il premio geopolitico su cui poggia metà di questa lettura, e renderebbe il rialzo del metallo una faccenda di tassi e non di rischio.',
        triggered: false,
        evidence:
          'Il Brent non è mai sceso sotto gli 80 dollari: escursione del 7 agosto fra 81,52 e 84,40, chiusura ' +
          'a 82,21 con meno 0,34%. Il premio si è formato e sgonfiato quattro volte nella giornata senza mai ' +
          'avvicinarsi alla soglia dichiarata.',
      },
      {
        condition:
          'Termini del patto che, una volta pubblicati, si rivelino una cornice di consultazione senza impegni operativi: ridimensionerebbero il segnale sul modo in cui Riad prezza il rischio regionale.',
        triggered: false,
        evidence:
          'I termini non sono stati pubblicati: il testo integrale dell’accordo resta non pubblico. Quello ' +
          'che è uscito nel pomeriggio è il comunicato congiunto, e va nella direzione opposta a quella della ' +
          'condizione — contiene la clausola di difesa collettiva, cioè la formulazione più forte che un ' +
          'accordo di sicurezza possa avere, non una cornice di consultazione. Ma non contiene alcuna ' +
          'specifica sugli obblighi militari, quindi la metà della condizione che parlava di impegni ' +
          'operativi resta senza risposta.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un decennale sopra il 4,70% con l’oro spot ancora sopra i 4.300. Direbbe che il canale dei tassi sta riprendendo il sopravvento senza che il metallo abbia ancora ceduto, cioè che questa lettura si sta consumando.',
        triggered: false,
        evidence:
          'La tacca è stata sfiorata e poi abbandonata. Alla pubblicazione il decennale era a 4,677% con un ' +
          'massimo di giornata a 4,690%, cioè un punto base sotto la soglia; dopo il rapporto occupazionale è ' +
          'sceso a un minimo di 4,601% e ha chiuso a 4,655%. Il massimo dell’intera finestra resta un ' +
          'centesimo di punto percentuale sotto il 4,70%.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e per una volta il conteggio dice quasi tutto. La tesi non era sul patto — l’analisi lo diceva esplicitamente — ma sulla soglia dei 4.300 dollari scritta la sera prima, quando l’oro stava sessanta dollari più in basso: sopra quel livello, con il Brent ancora sopra gli 82, il rifugio torna in vantaggio sul costo-opportunità. Nelle ventiquattro ore successive il metallo non è mai rientrato sotto la soglia e ha chiuso quarantadue dollari sopra, mentre le tre condizioni che avrebbero potuto ucciderla — greggio sotto gli 80, decennale sopra il 4,70%, un rapporto occupazionale forte — sono andate tutte dalla parte opposta. La quarta condizione, l’unica che riguardava il patto, non è stata giudicata: i termini non sono pubblici e quello che è uscito nel pomeriggio è un comunicato che ha la forma dell’impegno e non ne ha il contenuto.',
  },
  {
    slug: 'hormuz-il-pedaggio-che-nessuno-puo-pagare',
    checkedAt: '2026-08-07T10:30:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Un conteggio dei transiti che risale sopra le otto navi: è la condizione che questo archivio ha dichiarato per prima e non ha mai cambiato, ed è l’unica che misura il passaggio invece di descriverlo.',
        triggered: false,
        evidence:
          'Il conteggio non è stato aggiornato: resta quello di otto navi del 5 agosto. Il tracker ' +
          'indipendente basato su PortWatch, consultato alle 22:50 del 6 agosto, era fermo a due transiti ' +
          'del 2 agosto contro una base di 73 al giorno, e al giorno 159 di chiusura dello Stretto.',
      },
      {
        condition:
          'Una deroga statunitense esplicita alle sanzioni sull’Autorità dello Stretto del Golfo Persico, oppure il ritiro della clausola del Lloyd’s Market Association: toglierebbero il comma 22 su cui questa lettura poggia.',
        triggered: false,
        evidence:
          'Nessuna deroga e nessun ritiro. Al contrario, la verifica del 6 agosto ha trovato che il quadro ' +
          'sanzionatorio è più esteso di quanto l’analisi sapesse: il 29 luglio il Tesoro statunitense aveva ' +
          'già designato due entità iraniane che gestiscono l’«assicurazione» obbligatoria per il transito.',
      },
      {
        condition:
          'Un’intesa che azzeri le commissioni, portando la richiesta iraniana dal 5-7% a nessun pedaggio, in linea con quanto chiedono Washington e l’Organizzazione marittima internazionale.',
        triggered: false,
        evidence:
          'Nessuna intesa sulle commissioni. La dichiarazione congiunta Iran-Oman risulta ancora «in revisione ' +
          'e in fase finale di stesura» secondo il portavoce degli Esteri iraniano, con la condizione aggiunta ' +
          'che nessuna terza parte ostacoli il processo.',
      },
      {
        condition:
          'Un Brent che torna sotto gli 80 dollari: direbbe che il mercato non crede al blocco operativo, e toglierebbe la premessa sul canale energetico.',
        triggered: false,
        evidence:
          'Il Brent non è mai tornato sotto quel livello nella finestra: dopo la pubblicazione ha chiuso il ' +
          '6 agosto a 83,60 con un massimo a 83,78, e il 7 agosto oscilla fra 82,96 e 84,40, con 83,14 alle ' +
          '10:27 (Investing.com). Il minimo della finestra resta quasi tre dollari sopra la soglia.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un Brent che resta sopra gli 82 dollari mentre l’oro spot risale sopra i 4.300, che segnalerebbe il rifugio di nuovo in vantaggio sul costo-opportunità.',
        triggered: true,
        evidence:
          'Scattata la mattina del 7 agosto, ed entrambe le metà con un numero. XAU/USD spot è a 4.304,72 ' +
          'dollari alle 10:38 con un massimo di giornata a 4.316,57, da una chiusura di 4.240,69; il Brent ' +
          'nello stesso momento è a 83,14, con un minimo di giornata a 82,96 che non è mai sceso sotto gli 82 ' +
          '(Investing.com). Alle 08:58 il massimo era 4.298,88, cioè un dollaro e dodici sotto la soglia: il ' +
          'controllo di quell’ora aveva registrato la condizione come non scattata, ed è scattata due ore dopo.',
      },
    ],
    what: 'Una condizione su cinque è scattata, ed è quella scritta per accorgersi del logoramento prima della rottura. La lettura sosteneva che il greggio alto lavorasse contro l’oro attraverso i rendimenti, e che il nodo su Hormuz — sanzioni più clausola assicurativa — tenesse alto il greggio: la seconda metà ha retto per intero, perché nessuno dei tre fatti diplomatici si è mosso e il Brent non è mai sceso sotto gli 82. La prima metà no. Con il greggio a 83,14 l’oro spot è passato da 4.240 a 4.304 in una mattina, cioè il rifugio ha ripreso il sopravvento sul costo-opportunità mentre il canale energetico spingeva ancora nella direzione opposta. La tesi sul perché lo Stretto non riapre resta in piedi; quella su che cosa ne consegua per il metallo si sta consumando.',
    lesson:
      'La soglia di logoramento ha fatto per la prima volta il suo mestiere in tempo reale e in tutte e due le direzioni. Alle 08:58 del 7 agosto l’oro aveva segnato 4.298,88, un dollaro e dodici sotto la cifra dichiarata, e il controllo di quell’ora ha rifiutato di cambiare lettura: due ore dopo la soglia è stata superata e la lettura è cambiata. È la prova che serviva sul fatto che una tacca scritta prima vale in entrambi i versi — impedisce di cambiare idea troppo presto tanto quanto obbliga a cambiarla quando il numero arriva. Resta un difetto noto e non risolto: le condizioni sull’oro delle due analisi precedenti sono scritte su livelli del contratto future, che scambia una sessantina di dollari sopra lo spot, mentre le soglie dell’indicatore sono sullo spot. Finché le due serie convivono nell’archivio, giudicare quelle condizioni richiede di decidere ogni volta quale numero valga.',
  },
  {
    slug: 'iran-pubblica-la-bozza-su-hormuz-il-rialzo-ha-un-nome',
    checkedAt: '2026-08-07T14:50:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Un conteggio dei transiti che risale sopra le otto navi: è la condizione che questo archivio ha dichiarato per prima e non ha mai cambiato, ed è l’unica che misura il passaggio invece di descriverlo.',
        triggered: false,
        evidence:
          'Non è risalito: è sceso, e per la prima volta da tre giorni con un numero fresco. Il 7 agosto ' +
          'Reuters — letta su US News — conta 33 navi da lunedì a giovedì contro 50 nella settimana ' +
          'precedente, e quattro transiti giovedì 6, fra cui la superpetroliera Nissos Kea con circa due ' +
          'milioni di barili di greggio Basrah caricati in Iraq. Quattro al giorno è la metà degli otto della ' +
          'soglia, contro le oltre cento al giorno di prima della guerra.',
      },
      {
        condition:
          'L’approvazione del testo da parte del Parlamento iraniano, che lo trasformerebbe da posizione negoziale in norma, oppure il suo ritiro dall’ordine del giorno.',
        triggered: false,
        evidence:
          'Né l’una né l’altro: il testo è ancora dov’era. Il 7 agosto Press TV lo dà in esame alla ' +
          'commissione Sicurezza nazionale e politica estera, e un membro dell’ufficio di presidenza precisa ' +
          'che «è una proposta iniziale discussa in commissione e non è ancora la relazione finale della ' +
          'commissione»; il Parlamento ha invitato esperti a mandare osservazioni prima della stesura ' +
          'definitiva. È esattamente la condizione di sospensione che l’analisi aveva descritto.',
      },
      {
        condition:
          'Un Brent che torna sotto gli 80 dollari: direbbe che il premio riaperto oggi si è già sgonfiato, e con esso la ragione di questa lettura.',
        triggered: false,
        evidence:
          'Mai sceso sotto quel livello nella finestra. Dopo la pubblicazione il Brent ha toccato 84,40 il ' +
          '7 agosto e il minimo della giornata è 81,52; alle 14:57 è a 81,66, meno 1,01% (Investing.com). Il ' +
          'premio si è ridotto ma non si è sgonfiato: resta un dollaro e mezzo sopra la soglia.',
      },
      {
        condition:
          'Una dichiarazione congiunta Iran-Oman che escluda esplicitamente commissioni di transito: mostrerebbe che la bozza era posizionamento interno e non la posizione del tavolo.',
        triggered: false,
        evidence:
          'Nessuna dichiarazione congiunta. Teheran definisce l’intesa con l’Oman «in fase finale», e il punto ' +
          'che resta aperto è il consenso statunitense; il pacchetto riportato resta impraticabile per le ' +
          'sanzioni e per le clausole assicurative sui pagamenti. Il testo annunciato per il 5 agosto non è ' +
          'stato emesso nemmeno due giorni dopo.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un Brent che resta sopra gli 82 dollari mentre l’oro risale sopra i 4.320, che segnalerebbe che il legame fra greggio e metallo si sta allentando.',
        triggered: true,
        evidence:
          'Scattata alle 14:20 del 7 agosto, con entrambe le metà misurate nello stesso momento: l’oro spot ha ' +
          'segnato un massimo di 4.327,70 dollari mentre il Brent era a 82,03, cioè ancora sopra la soglia ' +
          '(Investing.com). Dieci minuti dopo il rapporto occupazionale ha rotto il legame del tutto, ma la ' +
          'tacca di logoramento aveva già segnalato che si stava allentando prima che il dato uscisse.',
      },
    ],
    what: 'Quattro condizioni su cinque hanno retto, e sono tutte quelle sulla vicenda iraniana: la bozza non è stata né approvata né ritirata, la dichiarazione congiunta con l’Oman non è arrivata, il Brent non è tornato sotto gli 80. Su questo la lettura ha avuto ragione per intero, e aveva ragione anche sul modo di scontare il documento — un testo che dopo un giorno è ancora «una proposta iniziale» in commissione è il tipo di carta che il metodo usato qui classifica come poco diagnostico. Il conteggio dei transiti, per la prima volta aggiornato con un dato fresco, dà 33 navi in quattro giorni contro 50 nella settimana prima: si muove nella direzione che la lettura descriveva, e più in fretta. A cedere è la conseguenza sull’oro. La tacca di logoramento è scattata alle 14:20, e alle 14:30 il rapporto occupazionale ha spazzato via il canale attraverso cui il greggio arrivava al metallo: l’oro è passato da 4.293 a 4.371 dollari mentre il Brent scendeva. La diagnosi sul greggio era giusta, la deduzione sull’oro no.',
  },
  {
    slug: 'il-brent-supera-gli-82-dollari-la-soglia-e-caduta',
    checkedAt: '2026-08-07T14:50:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Un Brent che torna sotto gli 80 dollari: toglierebbe la premessa, perché il livello è tutto quello su cui questa lettura poggia.',
        triggered: false,
        evidence:
          'Il Brent non è mai sceso sotto gli 80 dollari nella finestra. Dalla pubblicazione ha toccato un ' +
          'massimo di 84,40 e un minimo di 81,52 il 7 agosto; alle 14:57 è a 81,66, meno 1,01% ' +
          '(Investing.com). La premessa della lettura è rimasta in piedi per tutta la durata.',
      },
      {
        condition:
          'Un rapporto occupazionale domani nettamente sotto le attese di circa 80.000 posti, che riporterebbe i rendimenti al ribasso e restituirebbe all’oro il canale che oggi gli è contro.',
        triggered: true,
        evidence:
          'Scattata alle 14:30 del 7 agosto, e con un margine che non lascia margini. I posti di luglio sono ' +
          'meno 23.000 contro attese di circa 80.000 (Wall Street Journal a 83.000, Barron’s a 95.000), primo ' +
          'calo da mesi; giugno è rivisto da 57.000 a 20.000 e maggio da 129.000 a 63.000, cioè 103.000 posti ' +
          'in meno sui due mesi. I rendimenti sono scesi come la condizione prevedeva: il decennale da 4,67% a ' +
          '4,616% e il biennale da 4,245% a 4,162%, meno 8,3 punti base.',
      },
      {
        condition:
          'XAU/USD che supera il massimo di giornata di 4.363,60 dollari mentre il Brent resta sopra gli 82: direbbe che il rifugio vince comunque, cioè il contrario di questa lettura.',
        triggered: false,
        evidence:
          'Non scattata, e per la seconda metà. L’oro ha superato quel livello — massimo di 4.371,89 dollari ' +
          'spot il 7 agosto — ma non con il Brent sopra gli 82: l’ultima rilevazione in cui il greggio era ' +
          'sopra la soglia è quella delle 14:20, a 82,03, e in quel momento l’oro era a 4.312,33 con un ' +
          'massimo di 4.327,70. Quando il metallo ha passato il livello, dopo le 14:30, il Brent era già ' +
          'sceso. Non è il rifugio ad aver vinto contro il canale energetico: è il canale energetico che si è ' +
          'tolto di mezzo mentre l’oro saliva per un’altra ragione.',
      },
      {
        condition:
          'Il rendimento del decennale che torna sotto il 4,60%, o un Dollar Index che scende sotto 99,50.',
        triggered: true,
        evidence:
          'Scattata sulla seconda metà. Il Dollar Index è a 99,345 alle 14:56 del 7 agosto, con un minimo di ' +
          'giornata di 99,280 da una chiusura di 99,808: sotto 99,50 di quasi due decimi. Il decennale invece ' +
          'no, per un millesimo: minimo di giornata 4,601% contro la soglia del 4,60%.',
      },
      {
        condition:
          'Prima di tutte queste, e senza aspettare la rottura: un Brent che resta sopra gli 82 dollari mentre l’oro risale sopra i 4.320, che segnalerebbe che il legame descritto si sta allentando.',
        triggered: true,
        evidence:
          'Scattata alle 14:20 del 7 agosto, dieci minuti prima del dato: l’oro spot ha segnato un massimo di ' +
          '4.327,70 dollari con il Brent a 82,03, entrambe le metà vere nello stesso momento (Investing.com). ' +
          'La tacca di logoramento ha fatto quello per cui era stata scritta — segnalare l’allentamento prima ' +
          'della rottura — con un anticipo di dieci minuti sull’evento che ha rotto tutto.',
      },
    ],
    what: 'Tre condizioni su cinque sono scattate, e la lettura è finita esattamente come aveva dichiarato che sarebbe finita se il rapporto occupazionale fosse uscito debole. La premessa ha retto — il Brent non è mai tornato sotto gli 80 — e per quasi venti ore anche la conseguenza: il 6 agosto sera e la mattina del 7 il greggio alto ha continuato a spingere i rendimenti, con il decennale a 4,690% e il biennale a 4,254%, cioè sopra e a un soffio dalle due tacche che l’analisi indicava. Poi sono usciti meno 23.000 posti contro 80.000 attesi, con 103.000 posti tolti a maggio e giugno, e il canale si è invertito in un quarto d’ora: rendimenti giù, dollaro sotto 99,50, oro da 4.293,50 a un massimo di 4.371,89. L’analisi non ha sbagliato il meccanismo, ha perso la scommessa su quale dei due capi della catena si sarebbe mosso per primo — e lo aveva scritto, nominando il rapporto occupazionale come il proprio prossimo appuntamento e come la seconda delle proprie condizioni di invalidazione.',
    lesson:
      'Due condizioni di questa stessa giornata sono state decise da un millesimo, e in versi opposti. Stamattina alle 08:58 l’oro si è fermato a 4.298,88 contro una soglia di 4.300 e la condizione è stata registrata come non scattata; adesso il decennale si ferma a 4,601% contro una soglia del 4,60% e vale lo stesso. La differenza è che questa condizione era scritta con un «oppure» — il decennale sotto il 4,60% oppure il Dollar Index sotto 99,50 — e la seconda metà è scattata larga, mentre la condizione sull’oro a 4.363,60 era scritta con un «mentre» ed è morta perché una delle due metà non c’era più. Una condizione composta con «oppure» sopravvive ai millesimi, una composta con «mentre» ci muore: sono due strumenti diversi e vanno scelti sapendo quale si sta usando, perché la stessa vicenda letta con l’uno o con l’altro produce due verdetti diversi.',
  },
  {
    slug: 'teheran-i-colloqui-con-oman-non-sono-la-riapertura',
    checkedAt: '2026-08-06T18:45:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Una dichiarazione congiunta Iran-Oman che contenga la riapertura dello Stretto, e non soltanto la gestione delle rotte.',
        triggered: false,
        evidence:
          'Nessuna dichiarazione congiunta emessa. L’annuncio era atteso per mercoledì 5 agosto secondo la ' +
          'ricostruzione americana, e a due giorni di distanza il testo risulta ancora «in revisione e in fase ' +
          'finale di stesura»: l’intesa riportata il 6 agosto da Al Hadath e Al Arabiya, ripresa da Xinhua, ' +
          'attende l’approvazione del Consiglio supremo di sicurezza nazionale iraniano. Riguarda inoltre una ' +
          'rotta temporanea di sessanta giorni, non la riapertura.',
      },
      {
        condition:
          'Un conteggio dei transiti che risale sopra le otto navi: è la condizione che questo archivio ha dichiarato per prima e non ha mai cambiato.',
        triggered: false,
        evidence:
          'Il conteggio sul metro di questo archivio non è stato aggiornato dal 5 agosto. Le due rilevazioni ' +
          'indipendenti disponibili misurano cose diverse e nessuna delle due mostra una risalita: PortWatch, ' +
          'via straits.live aggiornato alle 16:34 UTC del 6 agosto, dà due transiti il 2 agosto contro una base ' +
          'di 73 al giorno; Lloyd’s List Intelligence dà 84 transiti nella settimana al 2 agosto. Entrambe si ' +
          'fermano prima della finestra.',
      },
      {
        condition:
          'La rimozione del blocco statunitense dei porti iraniani, che è la condizione posta da Teheran e l’unica delle quattro che si può leggere con una data.',
        triggered: false,
        evidence:
          'Nessuna rimozione annunciata. Il blocco resta la condizione che Teheran pone e che non compare fra i ' +
          'punti dell’intesa riportata: quella riguarda rotte, sminamento e assenza di pedaggi.',
      },
      {
        condition:
          'Un Brent sopra gli 82 dollari: è la parte della lettura che cede per prima, perché a quel punto l’effetto inflazionistico pesa più del sostegno da rifugio.',
        triggered: true,
        evidence:
          'Scattata un’ora e sette minuti dopo la pubblicazione. Il Brent è a 82,74 dollari alle 18:22 del ' +
          '6 agosto (Investing.com) e a 82,61 con un rialzo del 3,98% alla stessa ora (TradingEconomics), con ' +
          'un massimo di giornata a 82,91 da una chiusura di 79,45. È la parte della lettura che l’analisi ' +
          'stessa indicava come quella che cede per prima, ed è ceduta per prima.',
      },
      {
        condition:
          'Nella direzione opposta: petrolio, Dollar Index e rendimenti che salgono insieme — decennale sopra il 4,70% e DXY sopra l’area 100-100,20. Confermerebbe il peggioramento del quadro geopolitico e toglierebbe comunque all’oro il sostegno su cui questa lettura poggia.',
        triggered: false,
        evidence:
          'I tre salgono davvero insieme, ma nessuno dei due livelli dichiarati è stato raggiunto: il decennale ' +
          'è al 4,673% con un massimo di giornata a 4,679% — un millesimo sotto la tacca di logoramento e ' +
          'ventisette centesimi di punto base sotto la soglia — e il Dollar Index è a 99,860 con un massimo a ' +
          '99,900, dieci centesimi sotto quota 100 (Investing.com, 18:39). La condizione è scritta sui livelli ' +
          'e sui livelli non è scattata.',
      },
    ],
    what: 'Una condizione su cinque è scattata, ed è quella che l’analisi aveva indicato come la prima a cedere. La lettura sosteneva che il ridimensionamento iraniano sostenesse l’oro per via del rifugio ma lo colpisse più forte per via del greggio, e che la seconda spinta fosse la più grande: in un’ora e sette minuti il Brent è passato dagli 80 e rotti dollari a 82,74, cioè oltre la soglia che l’analisi stessa aveva dichiarato come punto di cedimento. La parte diplomatica ha retto in pieno — nessuna dichiarazione congiunta, transiti non aggiornati, blocco dei porti al suo posto — e la parte sui prezzi ha ceduto esattamente dove era scritto che avrebbe ceduto.',
    lesson:
      'È il primo caso in cui una condizione di invalidazione scatta mentre l’analisi che la dichiarava è ancora la più recente in archivio, e mostra a che cosa serva davvero distinguere la soglia che logora da quella che uccide. Le altre quattro condizioni misuravano fatti diplomatici che su un orizzonte di ore non potevano muoversi: la sola verificabile in fretta era il livello del greggio, ed è quella che ha deciso. Quando una lettura poggia su due canali con tempi diversi — il rifugio in ore, i tassi in giorni — la condizione che conta è quella sul canale veloce, e va scritta sapendo che sarà l’unica a poter rispondere prima del controllo successivo.',
  },
  {
    slug: 'warsh-apre-a-un-rialzo-e-il-numero-fermo-si-muove',
    checkedAt: '2026-08-06T17:10:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Una probabilità di rialzo a settembre che sale sopra il 62%: è la tacca oltre la quale questa lettura si logora, ed è la prima volta in quattro giorni che quel numero si muove verso di essa.',
        triggered: false,
        evidence:
          'Il numero è descritto intorno al 57%, in aumento rispetto al giorno precedente ma ancora sotto i livelli della settimana scorsa: ha smesso di salire dopo i 56,7% dell’indiscrezione e resta più di cinque punti sotto la tacca.',
      },
      {
        condition: 'Il biennale che resta sopra il 4,22% e prosegue oltre il 4,25%.',
        triggered: false,
        evidence:
          'Nessuna lettura puntuale disponibile: il controllo successivo dichiara esplicitamente di non avere una rilevazione affidabile al minuto sul biennale e di non voler attribuire movimenti a una singola notizia. Registrata come non scattata perché nulla indica il superamento, non perché sia stata verificata.',
      },
      {
        condition: 'Il decennale stabilmente sopra l’area 4,65-4,70%.',
        triggered: false,
        evidence:
          'Il decennale è risalito verso il 4,64%, cioè al bordo inferiore dell’area e senza stabilizzarsi sopra: un punto base sotto il primo dei due livelli.',
      },
      {
        condition: 'Un Dollar Index che recupera insieme ai rendimenti, sopra l’area 100-100,20.',
        triggered: false,
        evidence:
          'Nessuna lettura puntuale del Dollar Index, per la stessa ragione dichiarata sul biennale. Nessun recupero sopra quota 100 riportato da alcuna fonte nella finestra.',
      },
      {
        condition:
          'Nella direzione opposta: CPI e PPI contenuti, o un rapporto occupazionale di domani che confermi un marcato indebolimento del lavoro. Confermerebbero la direzione ma toglierebbero senso a questa lettura, che poggia proprio sul fatto che il quadro sia diviso.',
        triggered: false,
        evidence:
          'Nessuno dei tre dati è uscito: CPI e PPI sono più avanti nel calendario e il rapporto occupazionale esce domani alle 14:30.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la parte scomoda della lettura ha retto. La tesi era che il movimento di 2,3 punti fosse reale ma piccolo, e che cambiare direzione a più di cinque punti dalla tacca dichiarata sarebbe stato rinnegare una soglia scritta il giorno prima. Nelle ore successive quel numero ha smesso di salire — resta intorno al 57% — mentre il decennale si è fermato al 4,64%. Il canale dei tassi si è girato due volte in una giornata senza mai superare nessuna delle soglie dichiarate: è il caso in cui la disciplina delle tacche fa quello per cui esiste, cioè impedire tre cambi di lettura in un pomeriggio.',
  },
  {
    slug: 'sussidi-e-produttivita-un-punto-base-di-reazione',
    checkedAt: '2026-08-06T16:25:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un rapporto occupazionale di domani nettamente sopra le attese di circa 80.000 posti, o salari orari in riaccelerazione nello stesso rapporto.',
        triggered: false,
        evidence:
          'Non ancora giudicabile: il rapporto esce domani alle 14:30 e al momento del controllo non era pubblicato. Registrata come non scattata perché non lo è, non perché sia stata verificata.',
      },
      {
        condition:
          'Un Brent sopra gli 82 dollari: sopra quel livello l’effetto inflazionistico del greggio pesa più della domanda di rifugio.',
        triggered: false,
        evidence:
          'Il Brent è a 80,34 dollari, in calo dagli 80,99 del controllo delle 15:30 e dal massimo di giornata a 81,40: si è avvicinato agli 82 senza toccarli, e poi è rientrato.',
      },
      {
        condition:
          'Il rendimento del decennale sopra il 4,70%, o un Dollar Index sopra l’area 100-100,20.',
        triggered: false,
        evidence:
          'Il decennale è risalito verso il 4,64% dopo la notizia su Warsh, sei punti base sotto la soglia. Nessun recupero del dollaro sopra quota 100 riportato.',
      },
      {
        condition: 'XAU/USD sotto i 4.200 dollari.',
        triggered: false,
        evidence:
          'Nessuna discesa: il metallo è vicino a 4.260 dollari, sopra i 4.244 del controllo delle 15:30 e ancora positivo nella giornata.',
      },
      {
        condition:
          'Prima di tutte queste: un decennale che torna sopra il 4,68% con l’oro ancora sopra i 4.250, che segnalerebbe il logoramento senza aspettare la rottura.',
        triggered: false,
        evidence:
          'Il decennale si è fermato al 4,64%: quattro punti base sotto la tacca di logoramento, nonostante il recupero seguito alla notizia sul presidente della Fed.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la tesi centrale ha avuto una conferma di un tipo che non era previsto. La lettura diceva che il mercato non stava ignorando i dati ma ne stava aspettando un altro, e che un punto base di movimento non era leggibile in nessuna direzione. Poche ore dopo è bastata un’indiscrezione sul presidente della Fed per muovere il biennale di quattro punti base e la probabilità di un rialzo a settembre di 2,3 punti: il mercato era fermo perché quei dati non erano la sua domanda, non perché fosse immobile.',
  },
  {
    slug: 'adp-debole-e-tesoro-fermo-ma-il-decennale-non-si-muove',
    checkedAt: '2026-08-06T15:30:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un NFP di venerdì nettamente sopra le attese di circa 80.000 posti, o una disoccupazione sotto il 4,2%.',
        triggered: false,
        evidence:
          'Il dato non esiste ancora: il rapporto occupazionale esce domani, venerdì 7 agosto alle 14:30. ' +
          'Registrata come non scattata perché il numero non è stato pubblicato, non perché sia stato verificato.',
      },
      {
        condition: 'Salari orari in riaccelerazione nello stesso rapporto.',
        triggered: false,
        evidence:
          'Stesso rapporto, stessa ragione: non pubblicato al momento del controllo. Le due condizioni ' +
          'maturano ventitré ore dopo questa verifica.',
      },
      {
        condition: 'Il rendimento del decennale sopra il 4,70%.',
        triggered: false,
        evidence:
          'Il decennale non ha mai avvicinato quel livello nella finestra: chiusura del 5 agosto a 4,617% e, ' +
          'il 6 agosto, escursione fra 4,609% e 4,653% con 4,642% alle 15:27 (Investing.com). Il massimo ' +
          'osservato resta 4,7 punti base sotto la soglia. Del 5 agosto dopo le 15:25 non c’è un’escursione ' +
          'puntuale sulle fonti raggiungibili: il giudizio poggia sulla chiusura di quel giorno e sull’intera ' +
          'seduta successiva.',
      },
      {
        condition: 'Un Dollar Index in deciso recupero sopra quota 100.',
        triggered: false,
        evidence:
          'Nessun recupero: il 6 agosto il Dollar Index si muove fra 99,510 e 99,692, chiusura precedente ' +
          '99,546 e 99,660 alle 15:28 (Investing.com). Il massimo della finestra resta 31 centesimi sotto ' +
          'quota 100, e il dollaro non ha comprato nemmeno il dato sui sussidi migliore delle attese.',
      },
      {
        condition: 'XAU/USD incapace di tenere l’area 4.150-4.170.',
        triggered: false,
        evidence:
          'Il metallo non si è mai avvicinato a quell’area: il 6 agosto oscilla fra 4.230,89 e 4.304,15, con ' +
          '4.243,69 alle 15:26 e chiusura precedente a 4.247,02 (Investing.com). Il minimo della finestra è ' +
          'sessanta dollari sopra il bordo alto dell’area di tenuta.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, ma il verdetto va letto per quello che dice davvero: tre condizioni su cinque hanno retto con una lettura puntuale, e due non sono state giudicate perché il dato che le decide esce domani. La tesi centrale era che due notizie favorevoli all’oro non stessero passando dal canale dei tassi. In ventiquattro ore quel canale ha continuato a non trasmettere, e anzi si è mosso nel verso opposto: dal 4,617% di chiusura del 5 agosto il decennale è salito a 4,642%, mentre l’oro guadagnava comunque terreno fino ai 4.243,69 dollari e il Brent risaliva da 79,45 a 80,99. La lettura regge quindi su tutte le soglie dichiarate, ma la domanda che l’analisi si era posta — se il mercato avesse già scontato il rallentamento o stesse solo scartando l’ADP — resta esattamente dove era: la separa il rapporto di domani, non questo controllo.',
    lesson:
      'È il primo esito chiuso con le fonti aperte invece che con quello che si sapeva al momento, e cambia una conclusione precedente. Il controllo del 6 agosto sull’analisi di Cook aveva concluso che le condizioni espresse come livelli di prezzo sono fragili, perché tre su quattro non avevano una lettura puntuale. Qui i livelli di prezzo sono tre su cinque e li ha avuti tutti e tre. Non erano quindi le condizioni a essere mal poste: era la verifica a essere fatta senza andare a cercare i numeri. Quello che resta davvero non verificabile è un’altra cosa, e nessuna fonte lo risolve: una condizione ancorata a un dato che esce dopo il controllo — qui due su cinque, appese al rapporto occupazionale di domani — non si giudica per definizione, e su un orizzonte di giorni va messa solo sapendo che l’analisi andrà ricontrollata due volte.',
  },
  {
    slug: 'iran-minaccia-gli-impianti-del-golfo-il-greggio-scende',
    checkedAt: '2026-08-06T14:50:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un Brent sopra gli 82 dollari: è la soglia oltre la quale la spinta inflazionistica pesa sull’oro più della domanda di rifugio, ed è quella che questo archivio usa da quattro giorni.',
        triggered: false,
        evidence:
          'Il Brent è risalito sopra gli 80 dollari, con il WTI vicino a 76, ma non ha raggiunto gli 82. La soglia di logoramento fissata insieme a questa, a 80 dollari, è invece stata superata in poco più di ventiquattro ore.',
      },
      {
        condition:
          'Un attacco effettivo contro impianti energetici del Golfo, o una conferma saudita dei danni alle petroliere rivendicati dagli Houthi: farebbe della minaccia un fatto, e questa lettura poggia sul fatto che non lo sia.',
        triggered: false,
        evidence:
          'Nessun attacco riportato contro gli impianti del Golfo e nessuna conferma saudita dei danni: la minaccia iraniana resta una ricostruzione condizionata a un attacco americano che non è avvenuto.',
      },
      {
        condition:
          'Un conteggio dei transiti a Hormuz che risale sopra le otto navi, oppure una dichiarazione congiunta che chiude i quattro punti aperti: toglierebbe il premio di rischio invece di limitarsi a non pagarlo.',
        triggered: false,
        evidence:
          'Al contrario: manca ancora la conferma definitiva dell’intesa Iran-Oman, ed è proprio questa assenza la ragione con cui il rialzo del greggio viene spiegato. Nessun aggiornamento sul conteggio dei transiti.',
      },
      {
        condition:
          'Il rendimento del decennale sopra il 4,70%, o un Dollar Index sopra l’area 100-100,20.',
        triggered: false,
        evidence:
          'Il decennale è passato da circa 4,65% a 4,64% dopo i dati del pomeriggio, sei punti base sotto la soglia. Nessuna lettura puntuale del Dollar Index, che però non ha comprato un dato sui sussidi migliore delle attese.',
      },
      {
        condition:
          'Dati statunitensi abbastanza forti da riportare la probabilità di un rialzo Fed a settembre sopra il 67% da cui era partita.',
        triggered: false,
        evidence:
          'I due dati usciti nel pomeriggio vanno in direzioni opposte — sussidi iniziali sotto le attese, richieste continuative in aumento e produttività sopra il costo del lavoro per unità — e il mercato non li ha prezzati: un punto base sul decennale e future azionari invariati.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, ma il conteggio non dice tutto. La lettura sosteneva che il premio di rischio non venisse pagato, e in poco più di ventiquattro ore il Brent è tornato dai 79,08 dollari a sopra gli 80: la tacca di logoramento fissata insieme alle condizioni è stata superata, quella di invalidazione a 82 no. È la prima volta che quella distinzione produce qualcosa di osservabile — la tesi regge alla lettera mentre il meccanismo su cui poggia comincia a girarsi — ed è la ragione per cui la forza della lettura successiva scende da media a bassa senza che la direzione cambi.',
  },
  {
    slug: 'cook-si-dice-pronta-a-un-rialzo-si-muove-solo-il-biennale',
    checkedAt: '2026-08-06T08:35:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Una probabilità di rialzo a settembre che risale al 67% da cui era partita: è la condizione principale, perché la lettura poggia proprio sul fatto che quel numero non si muova. Il 62%, a metà strada, è la soglia che segnala il logoramento prima della rottura.',
        triggered: false,
        evidence:
          'Nessuna riprezzatura riportata nelle nove ore successive. Il controllo della mattina dopo tratta ancora una Fed più restrittiva come rischio futuro — «dati USA forti capaci di riportare il mercato verso una Fed più restrittiva» — e non come cosa avvenuta: se il numero si fosse mosso, sarebbe un fatto e non un rischio.',
      },
      {
        condition: 'Il biennale in ulteriore accelerazione, sopra il 4,25%.',
        triggered: false,
        evidence:
          'Nessuna accelerazione riportata: i rendimenti sono descritti come spinti verso il basso dai negoziati su Hormuz. Non c’è però una lettura puntuale del biennale, quindi la condizione è registrata come non scattata sulla direzione, non su un numero.',
      },
      {
        condition: 'Il rendimento del decennale sopra il 4,70%.',
        triggered: false,
        evidence:
          'Nessun recupero: i rendimenti statunitensi restano descritti in calo, e il decennale veniva dal 4,63% della sera prima, sette punti base sotto la soglia.',
      },
      {
        condition: 'Un Dollar Index sopra l’area 100-100,20.',
        triggered: false,
        evidence:
          'Nessun recupero del dollaro: resta descritto come spinto al ribasso dalla distensione diplomatica, e veniva da 99,75.',
      },
      {
        condition:
          'XAU/USD sotto i 4.160 dollari, il supporto tecnico indicato dalla fonte citata.',
        triggered: false,
        evidence:
          'Nessuna discesa verso quel livello: il metallo è descritto ancora sostenuto dalla catena petrolio-rendimenti-dollaro, e veniva dai 4.253 dollari della sera prima.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata. La tesi era che sei prese di posizione restrittive non avessero spostato il prezzo della decisione di settembre, e nelle nove ore successive quel prezzo non si è mosso: nessuna riprezzatura riportata, dollaro e rendimenti ancora spinti al ribasso dalla trattativa su Hormuz. Il biennale, la scadenza su cui l’analisi aveva deliberatamente spostato la soglia, non ha proseguito la risalita oltre il 4,21% da cui era partito.',
    lesson:
      'Quattro condizioni su cinque erano livelli di prezzo, e al momento del controllo tre di quei livelli non avevano una lettura puntuale: si sono potute giudicare solo sulla direzione descritta. Una condizione è verificabile quanto il flusso di dati che ci sarà al momento di verificarla, e qui quel flusso è il controllo successivo. Conviene quindi ancorare almeno una condizione a qualcosa che il testo dopo citerà quasi certamente — il livello del greggio, un attacco avvenuto o no, il conteggio dei transiti — invece che a numeri che potrebbero non essere riportati.',
  },
  {
    slug: 'coordinate-concordate-a-hormuz-il-sesto-annuncio-e-diverso',
    checkedAt: '2026-08-05T23:05:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un conteggio dei transiti ancora fermo alle otto navi quarantotto ore dopo la dichiarazione congiunta.',
        triggered: false,
        evidence:
          'Non ancora giudicabile: la dichiarazione congiunta non è stata emessa, quindi le quarantotto ore non hanno cominciato a decorrere. Registrata come non scattata perché non lo è, non perché sia stata verificata.',
      },
      {
        condition:
          'La dichiarazione congiunta che non arriva, o un testo che non contiene la rotta concordata.',
        triggered: false,
        evidence:
          'Nessun testo pubblicato nelle quattro ore successive, e nessuna notizia che l’intesa sia stata ritirata: l’intenzione dichiarata resta in piedi esattamente com’era.',
      },
      {
        condition: 'Un blocco americano esplicito all’intesa.',
        triggered: false,
        evidence:
          'Nessuna presa di posizione americana sull’intesa nella serata: l’unico intervento statunitense della serata è quello della governatrice Cook, e riguarda i tassi.',
      },
      {
        condition:
          'Nuovi attacchi alle rotte marittime, o un Brent nuovamente sopra gli 82 dollari.',
        triggered: false,
        evidence:
          'Nessun nuovo attacco riportato e nessun ritorno sopra gli 82 dollari: il greggio resta descritto in distensione, tanto che il suo calo compare fra le condizioni che la Fed indica per evitare un rialzo.',
      },
      {
        condition:
          'Sul metallo: una perdita rapida dei 4.200 dollari accompagnata dal decennale sopra il 4,70%.',
        triggered: false,
        evidence:
          'Nessuna delle due metà: XAU/USD è intorno a 4.253 dollari dopo un massimo vicino a 4.265, e il decennale è al 4,63%, sette punti base sotto la soglia.',
      },
      {
        condition:
          'Prima di quella soglia: un decennale sopra il 4,68% mentre l’oro resta sopra i 4.250. Non ucciderebbe la lettura, ma segnalerebbe che si sta logorando, ed è la soglia che l’analisi precedente non aveva.',
        triggered: false,
        evidence:
          'Il decennale è sceso al 4,63% dal 4,64%, interrompendo la serie di quattro letture consecutive in aumento: la soglia di logoramento non solo non è stata raggiunta, la direzione che doveva intercettare si è invertita.',
      },
    ],
    what: 'Nessuna delle sei condizioni è scattata. La parte diplomatica non si è mossa in nessuna delle due direzioni — nessuna dichiarazione congiunta, nessun blocco americano — mentre la parte sui prezzi ha girato a favore: il decennale è sceso dal 4,64% al 4,63% e l’oro ha tenuto intorno a 4.253 dollari dopo un massimo a 4.265, con il dollaro ancora debole a 99,75. L’elemento contrario su cui poggiava metà della lettura, cioè il canale dei tassi che si stava girando, è rientrato nelle quattro ore successive.',
    lesson:
      'La soglia di logoramento aggiunta a questa analisi ha funzionato come strumento — ha guardato dove la lettura si indeboliva invece che dove moriva — ma era sulla scadenza sbagliata. Tutte e sei le condizioni misuravano il decennale, e il decennale è sceso; l’unico rendimento che si è mosso in risposta al fatto nuovo della serata è il biennale, che nessuna condizione nominava. Quando la tesi riguarda le decisioni di una banca centrale, la condizione va messa sulla scadenza in cui quella decisione si prezzerebbe per prima, non su quella che si cita più spesso.',
  },
  {
    slug: 'oro-sfiora-4200-ma-le-attese-sulla-fed-non-si-muovono',
    checkedAt: '2026-08-05T19:10:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition: 'Un ritorno stabile sotto i 4.170-4.175 dollari.',
        triggered: false,
        evidence:
          'Nessun ritorno: il metallo ha esteso oltre i 4.250 dollari e resta descritto come sostenuto sopra l’area 4.200-4.210.',
      },
      {
        condition: 'Il rendimento del decennale in forte recupero, sopra il 4,70%.',
        triggered: false,
        evidence:
          'Il decennale è risalito al 4,64% e il quinquennale è tornato intorno al 4,35%: un recupero c’è, ma resta sei punti base sotto la soglia dichiarata.',
      },
      {
        condition: 'Un Dollar Index in inversione rialzista sopra quota 100.',
        triggered: false,
        evidence:
          'Nessuna inversione: il dollaro resta descritto come vulnerabile, senza recupero sopra la soglia.',
      },
      {
        condition: 'Dati sul lavoro e salari di venerdì molto più forti delle attese.',
        triggered: false,
        evidence:
          'Non giudicabile: il rapporto occupazionale esce venerdì e al momento del controllo non era ancora pubblicato.',
      },
      {
        condition:
          'Nella direzione opposta: una probabilità di rialzo a settembre che scende nettamente sotto il 50%. Confermerebbe la direzione ma smentirebbe questa lettura, che poggia proprio sul fatto che quel numero non si muove.',
        triggered: false,
        evidence:
          'Nessuna riprezzatura riportata: le attese sul rialzo di settembre restano dove erano, ed è quanto la lettura sosteneva.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la parte scomoda della lettura ha avuto la sua prima conferma vera. La tesi era che il rialzo non stesse riprezzando il proprio meccanismo: in due ore il metallo è salito ancora, oltre i 4.250, mentre il decennale invece di scendere è passato dal 4,62% al 4,64% e il quinquennale è tornato al 4,35%. Lo scarto fra prezzo e canale dei tassi si è quindi allargato, non chiuso.',
    lesson:
      'La condizione sui rendimenti era fissata al 4,70%, cioè al livello in cui la lettura muore. Il decennale è andato da 4,60-4,61% a 4,64% in sei ore, in salita a ogni controllo, e il registro non se ne accorge: segna «non scattata» mentre il canale su cui poggia tutta l’analisi si sta girando contro. Una soglia va messa anche dove la lettura comincia a logorarsi, non solo dove finisce, altrimenti l’esito registra «confermata» per tutto il tempo in cui la tesi si stava indebolendo.',
  },
  {
    slug: 'attacco-houthi-nel-mar-rosso-il-secondo-collo-di-bottiglia',
    checkedAt: '2026-08-05T15:20:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition: 'Una smentita dell’attacco, o danni alla nave irrilevanti.',
        triggered: false,
        evidence:
          'Nessuna smentita nelle due ore successive e nessuna verifica indipendente dei danni: la rivendicazione resta in piedi esattamente com’era, cioè non confermata e non smentita.',
      },
      {
        condition: 'La mancata prosecuzione degli attacchi nei giorni successivi.',
        triggered: false,
        evidence:
          'Non giudicabile a due ore di distanza: la condizione misura i giorni successivi, che non sono ancora trascorsi. Registrata come non scattata perché non lo è, non perché sia stata verificata.',
      },
      {
        condition: 'Un Brent nuovamente sotto i 79 dollari.',
        triggered: false,
        evidence:
          'Nessun ritorno sotto quel livello riportato. Il greggio non ha reagito né all’ADP né al piano di rifinanziamento del Tesoro, e resta mosso da Iran, Hormuz e Houthi: il premio geopolitico non si è sgonfiato.',
      },
      {
        condition: 'Un accordo verificabile sulla riapertura di Hormuz.',
        triggered: false,
        evidence: 'Nessun accordo annunciato nel pomeriggio.',
      },
      {
        condition:
          'Nella direzione opposta: altri attacchi alle rotte saudite o un Brent sopra gli 82 dollari, che alzerebbero il rischio di risalita dei rendimenti.',
        triggered: false,
        evidence:
          'Nessun nuovo attacco riportato e nessun superamento degli 82 dollari: il rischio di risalita dei rendimenti per via del greggio non si è materializzato.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, ma il conteggio va letto per quello che è: due ore sono poche, e la tesi centrale — il Mar Rosso come collo di bottiglia separato da Hormuz — non ha ancora avuto modo di essere messa alla prova. Quello che si può dire è che il premio geopolitico non si è sgonfiato: nel pomeriggio sono usciti un ADP debole e un piano del Tesoro benigno, due notizie che avrebbero potuto spostare l’attenzione altrove, e il greggio non le ha seguite.',
    lesson:
      'Una delle cinque condizioni chiedeva di guardare «i giorni successivi», mentre l’analisi si dichiarava di orizzonte breve. Una condizione che matura dopo la lettura che dovrebbe invalidare non serve a niente al momento del controllo: o si accorcia, o si accetta che quell’analisi vada ricontrollata due volte, a scadenze diverse.',
  },
  {
    slug: 'trump-dichiara-una-trattativa-durata-tutto-il-giorno',
    checkedAt: '2026-08-05T13:25:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition: 'Una nuova smentita netta da parte iraniana.',
        triggered: false,
        evidence:
          'Nessuna smentita nuova: Teheran continua a contestare parte della ricostruzione americana, e la Casa Bianca descrive ancora le trattative come positive.',
      },
      {
        condition: 'Transiti fermi alle otto navi, senza risalita verso i 130-140 al giorno.',
        triggered: true,
        evidence:
          'Nessun aumento riportato nelle tre ore successive: il conteggio disponibile resta quello di otto navi.',
      },
      {
        condition: 'Il fallimento dichiarato dei colloqui.',
        triggered: false,
        evidence: 'I colloqui non sono stati dichiarati falliti da nessuna delle due parti.',
      },
      {
        condition: 'Un rimbalzo del Brent sopra gli 80-82 dollari.',
        triggered: true,
        evidence:
          'Il Brent è risalito a 80,87 dollari, circa +1,9%, dopo l’attacco rivendicato dagli Houthi contro una petroliera saudita nel Mar Rosso.',
      },
      {
        condition:
          'Un ADP molto superiore alle attese, o un aumento aggressivo delle emissioni Treasury a lunga scadenza.',
        triggered: false,
        evidence:
          'Nessuno dei due era ancora uscito alle 13:25: l’ADP è atteso alle 14:15 e il piano di rifinanziamento alle 14:30.',
      },
    ],
    what: 'Due condizioni su cinque sono scattate, e la lettura regge solo a metà. Il quadro diplomatico non si è mosso — nessuna smentita nuova, nessun fallimento dichiarato — ma il Brent è tornato sopra gli 80 dollari, a 80,87. La parte che ha ceduto è quindi quella sui prezzi, non quella sul giudizio politico.',
    lesson:
      'Il rimbalzo del greggio era stato scritto come soglia di invalidazione perché doveva segnalare il fallimento della distensione. È scattato per un motivo che non c’entrava: un attacco a una petroliera nel Mar Rosso, cioè su una rotta diversa da Hormuz. Una condizione espressa come livello di prezzo si verifica in un secondo ma non dice per quale causa si è mossa: quando serve misurare una tesi, meglio affiancarle una condizione che nomini il meccanismo.',
  },
  {
    slug: 'hormuz-non-ha-riaperto-otto-navi-contro-130-al-giorno',
    checkedAt: '2026-08-05T10:35:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition: 'Un conteggio dei transiti che risale verso i livelli precedenti al conflitto.',
        triggered: false,
        evidence:
          'Il conteggio è fermo: due ore dopo restano otto navi contro le circa 130-140 al giorno di prima della guerra.',
      },
      {
        condition: 'Un accordo ufficiale e verificabile sulla riapertura dello stretto.',
        triggered: false,
        evidence:
          'Nessun accordo firmato: Trump dichiara una trattativa «molto positiva», ma l’Iran continua a negare un’intesa imminente.',
      },
      {
        condition:
          'Un forte rimbalzo del petrolio, che riporterebbe in alto inflazione attesa e rendimenti.',
        triggered: false,
        evidence:
          'Il greggio è sceso ancora invece di rimbalzare: Brent a 79,04 dollari da 79,6, WTI a 75,19 da 75,9.',
      },
      {
        condition: 'Il rendimento del decennale nuovamente sopra il 4,70%.',
        triggered: false,
        evidence:
          'Rendimenti e attese di rialzo Fed si sono ulteriormente ammorbiditi rispetto al 4,60-4,62% della mattina.',
      },
      {
        condition: 'Un dato ADP nettamente superiore alle attese.',
        triggered: false,
        evidence:
          'L’ADP esce alle 14:15 di oggi: non era ancora pubblicato al momento del controllo.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata. Il vincolo su cui poggiava la lettura — otto navi contro 130-140 al giorno — non si è mosso di una unità in due ore, mentre sul fronte delle dichiarazioni la distensione ha fatto un altro passo avanti: è esattamente l’asimmetria che l’analisi descriveva. Il greggio ha continuato a scendere e i rendimenti ad allentarsi, quindi anche il canale dei tassi ha retto.',
  },
  {
    slug: 'iran-chiede-il-controllo-sugli-ingressi-a-hormuz',
    checkedAt: '2026-08-05T09:20:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition: 'Un accordo ufficiale e verificabile sulla riapertura dello stretto.',
        triggered: false,
        evidence:
          'Nessun accordo definitivo a quindici ore di distanza: Teheran continua a contestare la ricostruzione americana dei colloqui.',
      },
      {
        condition: 'Una ripresa stabile dei transiti.',
        triggered: false,
        evidence:
          'Al contrario: il conteggio pubblicato la mattina dopo indica otto navi contro le 130-140 al giorno di prima del conflitto.',
      },
      {
        condition: 'Un petrolio che resta sotto gli 80 dollari senza rimbalzare.',
        triggered: true,
        evidence:
          'Il Brent è sceso ancora invece di rimbalzare: da 79,8 dollari a 78,85-79, con il WTI intorno a 75.',
      },
    ],
    what: 'Sulla diplomazia l’analisi ha visto giusto: nessun accordo, nessuna ripresa dei transiti, e il conteggio delle otto navi ha poi quantificato quanto la riapertura fosse lontana. Ha sbagliato però la conseguenza che ne traeva sul prezzo. La tesi era che un ribasso del greggio costruito su un’intesa non chiusa fosse fragile e vulnerabile a un rimbalzo; in due sedute il rimbalzo non è arrivato e il Brent è sceso ancora, dai 79,8 dollari della pubblicazione a 78,85-79.',
    lesson:
      'Un prezzo che sconta un’aspettativa non confermata non è per questo prossimo a correggere: può continuare a scontarla a lungo. Il vincolo dice dove finirà il fiume, non quando — e su un orizzonte breve la seconda domanda è quella che conta.',
  },
  {
    slug: 'oro-estende-il-rialzo-il-canale-e-quello-dei-tassi',
    checkedAt: '2026-08-05T08:30:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition: 'XAU/USD sotto i 4.070 dollari.',
        triggered: false,
        evidence:
          'Nessun ritorno sotto quel livello: dai 4.092 dollari della pubblicazione il metallo è salito fino a circa 4.127.',
      },
      {
        condition: 'Il rendimento del decennale nuovamente sopra il 4,70%.',
        triggered: false,
        evidence: 'Il decennale è sceso ancora, dal 4,66% verso il 4,62%.',
      },
      {
        condition: 'Un forte rimbalzo del petrolio.',
        triggered: false,
        evidence:
          'Il greggio si è stabilizzato senza rimbalzare: Brent intorno a 79,6 dollari da 80,47, WTI vicino a 75,9 da 76,67.',
      },
      {
        condition: 'Dati ADP o payroll nettamente superiori alle attese.',
        triggered: false,
        evidence: 'Nessuno dei due era ancora stato pubblicato al momento del controllo.',
      },
    ],
    what: 'Le quattro condizioni hanno retto tutte. La catena descritta — greggio giù, rendimenti giù, oro su — ha continuato a funzionare per un’altra sessione: l’oro ha superato i 4.100 dollari che l’analisi indicava come test immediato, il decennale è arretrato di altri quattro punti base e il dollaro è rimasto debole. La probabilità di un rialzo Fed a settembre è scesa verso il 57-59%.',
  },
  {
    slug: 'otto-navi-e-adesso-la-previsione-ha-un-conteggio',
    checkedAt: '2026-08-13T08:15:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Un conteggio dei transiti di mercoledì sopra i dodici al giorno della media a dieci giorni: direbbe che gli otto di martedì erano varianza di campionamento e non un peggioramento, esattamente come le due navi di venerdì scorso che questa scheda aveva dovuto correggere.',
        triggered: false,
        evidence:
          'Nessun conteggio giornaliero per mercoledì 12 agosto risulta pubblicato dai due fornitori seguiti qui, alla mattina del 13 agosto. Le ultime cifre restano quelle di martedì: otto transiti secondo Kpler, undici secondo LSEG contro quattordici del giorno prima, con una media a cinque giorni di circa tredici e il valore giornaliero più basso dal 5 agosto. La condizione chiedeva che comparisse un numero sopra dodici, e quel numero non è comparso — ma va detto con la stessa chiarezza che non è comparso nemmeno il suo contrario.',
      },
      {
        condition:
          'Un oro che chiude sotto i 4.363 dollari, cioè sotto il minimo di questa giornata: direbbe che il recupero di stamattina era posizionamento prima del dato e non domanda rifugio, e la forza andrebbe riportata a bassa.',
        triggered: false,
        evidence:
          'Lo spot ha chiuso mercoledì 12 agosto a 4.408,59 dollari, quarantacinque sopra la soglia. Il minimo di 4.362,57 era stato toccato in mattinata, prima dell’indice dei prezzi, e non alla chiusura.',
      },
      {
        condition:
          'Un decennale che torna sopra il 4,735% di ieri con il Dollar Index sopra 99,89: è la combinazione che questa lettura dichiara assente, e la sua comparsa toglierebbe la ragione principale per cui la forza sale.',
        triggered: false,
        evidence:
          'Metà condizione si è verificata e l’altra metà no, quindi la condizione no. Il Dollar Index ha superato i 99,89 — massimo di giornata 99,910 e chiusura a 99,899 — ma il decennale non si è mai avvicinato al 4,735%: massimo 4,688% e chiusura a 4,692%, quindi oltre quattro punti base sotto.',
      },
      {
        condition:
          'Un indice dei prezzi alle 14:30 sopra il 3,4% annuo con il biennale che si porta sopra il 4,237%: è la trasmissione che manca da sei giorni, e renderebbe le due dichiarazioni della Fed qualcosa di più di due preferenze senza voto.',
        triggered: false,
        evidence:
          'Nessuno dei due lati si è verificato. L’indice dei prezzi è uscito esattamente a 3,4% annuo, cioè sul consenso e non sopra, e il biennale è andato nella direzione opposta: massimo di giornata 4,218% contro i 4,237% richiesti, e chiusura a 4,184% con meno 3,4 punti base.',
      },
      {
        condition:
          'Il dato ufficiale sulle scorte che conferma l’aumento di 9,1 milioni di barili: direbbe che al racconto sull’offerta scarsa esiste un contrappeso misurato, e che il Brent alla sesta seduta di rialzo sta prezzando la logistica invece dei barili disponibili.',
        triggered: true,
        evidence:
          'Le scorte commerciali americane di greggio sono salite di 17,422 milioni di barili nella settimana chiusa il 7 agosto, a 424,4 milioni complessivi: il maggior aumento settimanale dal gennaio 2023, contro un consenso che attendeva un calo di 1,7 milioni. Non solo confermano i 9,1 milioni della rilevazione di settore, li quasi raddoppiano.',
      },
    ],
    what: 'Quattro condizioni su cinque hanno retto e una è scattata, ed è quella che l’analisi stessa aveva indicato come il contrappeso che nessuno stava prezzando. Il resto della giornata è andato nella direzione descritta: l’indice dei prezzi è uscito sul consenso, il biennale è sceso invece di salire, la probabilità di un rialzo a settembre è passata dal 52% al 35,7%. Il conteggio dei transiti, che era il perno del pezzo, non ha ricevuto né conferma né smentita perché il numero di mercoledì non è stato pubblicato.',
    lesson:
      'Una condizione può fallire non perché il mondo non si sia mosso, ma perché nessuno ha pubblicato il numero che serviva per giudicarla. Il conteggio dei transiti dipende da due fornitori privati che diffondono quando vogliono e non concordano fra loro, e costruirci sopra una condizione di invalidazione significa affidare il verdetto a un terzo che non ha nessun obbligo verso questo archivio. Le condizioni vanno ancorate a serie con un orario di pubblicazione dichiarato — un dato statistico, un risultato d’asta, una chiusura di mercato — oppure va messo in conto in anticipo che restino non verificabili. Vale anche l’osservazione opposta, ed è il motivo per cui il verdetto non è più severo: l’assenza del numero non è una prova a favore della lettura, è solo assenza.',
  },
  {
    slug: 'l-asta-si-aggiudica-sopra-il-mercato-e-il-dollaro-torna-su',
    checkedAt: '2026-08-13T18:30:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Un Dollar Index che chiude sopra i 99,895 del massimo odierno: direbbe che il calo dopo l’indice dei prezzi non è stato solo restituito ma annullato, e che il cambio è tornato a lavorare contro il metallo.',
        triggered: true,
        evidence:
          'Il Dollar Index ha chiuso mercoledì 12 agosto a 99,899, cioè quattro millesimi sopra il livello dichiarato, dopo un massimo di giornata a 99,910. È scattata, e per il margine più stretto che questo registro abbia mai misurato.',
      },
      {
        condition:
          'Un oro che chiude sotto i 4.362,57 dollari, il minimo di questa giornata: cancellerebbe per intero il movimento prodotto dal dato e toglierebbe la ragione della direzione.',
        triggered: false,
        evidence:
          'Lo spot ha chiuso mercoledì a 4.408,59 dollari, quarantasei sopra la soglia. Il minimo di 4.362,57 era stato toccato in mattinata, prima dell’indice dei prezzi, e non in chiusura.',
      },
      {
        condition:
          'Un biennale che torna sopra il 4,218%, che è insieme il massimo di oggi e la chiusura di ieri: è l’unica gamba rimasta in piedi, e sopra quel livello non c’è più niente sotto la lettura.',
        triggered: false,
        evidence:
          'Il biennale ha chiuso mercoledì a 4,184% con meno 3,4 punti base, e il massimo di quella giornata è stato esattamente 4,218%: toccato, mai superato. La gamba ha retto.',
      },
      {
        condition:
          'I prezzi alla produzione di luglio, giovedì alle 14:30, sopra il consenso con il decennale che si porta sopra il 4,688% del massimo odierno: sarebbe il canale energia-prezzi che entra dal lato dei costi dopo aver mancato quello dei consumi.',
        triggered: false,
        evidence:
          'Nessuna delle due metà si è verificata, e la prima è andata nella direzione opposta. I prezzi alla produzione di luglio sono usciti piatti sul mese contro attese di più 0,2%, quindi sotto il consenso e non sopra, con il dato di fondo a più 0,2% contro più 0,3%. Il decennale è sceso invece di salire: massimo di giovedì 4,684% e quotazione a 4,641% con meno 5,1 punti base.',
      },
      {
        condition:
          'Un conteggio dei transiti di mercoledì sopra le otto navi di martedì: darebbe alla dichiarazione di Washington un aggancio materiale che oggi non ha, e toglierebbe forza al premio geopolitico letto qui come non riscattato.',
        triggered: false,
        evidence:
          'Il conteggio giornaliero di mercoledì 12 agosto non risulta pubblicato da nessuno dei due fornitori seguiti qui, a trenta ore di distanza. Vale la stessa nota registrata sull’analisi delle 11:00 dello stesso giorno: il numero non è comparso, e la sua assenza non è una prova a favore della lettura.',
      },
    ],
    what: 'Una condizione su cinque, ed è quella del cambio. Il resto della giornata successiva è andato nella direzione che l’analisi descriveva: i prezzi alla produzione sono usciti sotto il consenso, il decennale è sceso di cinque punti base invece di salire, il biennale non ha mai superato il proprio massimo. La lettura reggeva su una gamba sola, quella monetaria, e quella gamba non ha ceduto in nessun momento.',
    lesson:
      'Il Dollar Index ha chiuso a 99,899. Questa analisi, delle 19:40, aveva messo la condizione a 99,895 ed è scattata per quattro millesimi; quella pubblicata ventotto minuti dopo aveva alzato lo stesso livello a 99,910, perché nel frattempo il massimo di giornata si era spostato, e sullo stesso identico numero di chiusura non scatta per undici millesimi. Due condizioni scritte a mezz’ora di distanza sulla stessa grandezza danno verdetti opposti, e la differenza non sta nel mercato ma nell’ora in cui è stata scritta la regola. Ancorare una condizione al massimo corrente ha il pregio di usare un livello che il mercato ha stabilito invece di un numero tondo, ma ha questo difetto: il livello si sposta mentre la giornata avanza, e chi scrive più tardi si dà automaticamente un margine più largo. Quando due analisi ravvicinate misurano la stessa cosa, l’ancora va fissata una volta sola.',
  },
  {
    slug: 'quarantadue-miliardi-non-trentanove-l-asta-era-nella-media',
    checkedAt: '2026-08-13T20:28:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Un Dollar Index che chiude sopra i 99,910 del massimo odierno, aggiornato rispetto ai 99,895 di quaranta minuti fa: l’indice ci è già passato attraverso in seduta, e manca solo la chiusura.',
        triggered: false,
        evidence:
          'La chiusura di mercoledì 12 agosto è 99,899, undici millesimi sotto la condizione. Nella seduta di giovedì l’indice ha toccato un massimo di 99,990 senza chiudere: alle 20:26 è a 99,852, sotto la chiusura della vigilia. Nessuna chiusura sopra 99,910 nella finestra.',
      },
      {
        condition:
          'Un oro che chiude sotto i 4.362,57 dollari, il minimo di questa giornata: cancellerebbe per intero il movimento prodotto dal dato delle 14:30.',
        triggered: false,
        evidence:
          'La chiusura di mercoledì è 4.408,59. Giovedì il future COMEX di agosto ha chiuso a 4.363,60, cioè un dollaro sopra la soglia, e lo spot alle 20:26 è a 4.356,73 con un minimo a 4.351,45 ma senza chiusura. La condizione chiede una chiusura e nessuna chiusura sotto 4.362,57 è stata registrata: manca per un dollaro.',
      },
      {
        condition:
          'Un biennale che torna sopra il 4,218%, insieme massimo di oggi e chiusura di ieri: è l’unica gamba rimasta, e senza quella non resta niente sotto la direzione.',
        triggered: false,
        evidence:
          'Il biennale ha chiuso mercoledì a 4,184% ed è sceso ancora giovedì, a 4,149% dopo il collocamento del trentennale. La gamba monetaria non ha ceduto in nessun momento della finestra.',
      },
      {
        condition:
          'Il collocamento del trentennale di giovedì alle 19:00 con un rapporto fra domanda e offerta sotto la propria media delle ultime dieci aste: sarebbe la debolezza sulla parte lunga che quello di stasera non ha mostrato, e su una scadenza dove peserebbe di più.',
        triggered: true,
        evidence:
          'Il collocamento di giovedì 13 agosto, 25 miliardi aggiudicati al 5,216%, ha un rapporto fra domanda e offerta di 2,39 contro 2,44 dell’asta precedente e circa 2,43 di media sulle ultime dieci. Sotto la media. Nella stessa direzione l’aggiudicazione è arrivata quattro decimi di punto base sopra il 5,212% quotato alla chiusura delle offerte, e gli operatori primari hanno assorbito l’11,6% contro circa 10,6% di media. I numeri di domanda provengono da un servizio di dati di mercato e non dal comunicato del Tesoro, che non risultava raggiungibile: le tre quote di ripartizione sommano esattamente a 100,0, che è un controllo di congruenza e non una conferma.',
      },
      {
        condition:
          'I prezzi alla produzione di luglio, giovedì alle 14:30, sopra il consenso con il decennale che si porta sopra il 4,688% del massimo odierno.',
        triggered: false,
        evidence:
          'I prezzi alla produzione di luglio sono usciti a 0,0% sul mese contro un consenso di più 0,2%, quindi sotto e non sopra il consenso. Il decennale ha toccato un massimo di 4,684% e ha chiuso a 4,629%, in calo di 6,3 punti base. Entrambe le gambe della condizione mancano.',
      },
    ],
    what: 'Una condizione su cinque, ed è l’unica delle cinque che l’analisi non poteva verificare quando l’ha scritta. Le altre quattro erano ancorate a prezzi e a un dato macro, e nessuna è scattata: il dollaro non ha chiuso sopra la soglia, il biennale è sceso invece di salire, i prezzi alla produzione sono usciti sotto il consenso e il decennale con loro. La quinta era ancorata al risultato di un’asta che si sarebbe tenuta il giorno dopo, ed è quella che ha ceduto. Vale la pena notare che l’oro ha mancato la propria condizione per un dollaro sul future di agosto: la lettura è stata salvata da uno scarto che non ha nessun significato economico.',
    lesson:
      'Questa è la terza condizione in due giorni ancorata a un numero che al momento della scrittura non esisteva ancora, e stavolta è scattata: il rapporto fra domanda e offerta è uscito, è sotto la media, e il verdetto lo decide lui. Ma il registro deve annotare l’altra metà. Nell’attesa di quel numero l’analisi delle 19:15 del 13 agosto ha giudicato lo stesso collocamento usando un sostituto — un livello pre-asta riportato in mattinata al posto del quotato alla chiusura delle offerte — e ha concluso il contrario di quello che il numero vero avrebbe detto. La regola che vieta quel sostituto era già scritta in questo archivio il 12 agosto alle 19:40, in un riquadro che si rifiutava di scrivere «coda» senza il dato giusto. Scrivere la regola non basta, e nemmeno dichiarare l’incertezza accanto alla conclusione: finché il numero decisivo manca, la conclusione non si scrive in forma attenuata, non si scrive.',
  },
  {
    slug: 'due-dati-a-favore-e-l-oro-perde-l-uno-per-cento',
    checkedAt: '2026-08-14T23:50:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Un oro che chiude domani sopra i 4.408,59 dollari della chiusura di mercoledì, cioè che riprende per intero quello che ha perso oggi: direbbe che la seduta era posizionamento prima del collocamento del trentennale e non debolezza relativa, e la direzione tornerebbe neutrale-rialzista.',
        triggered: false,
        evidence:
          'L’oro ha chiuso venerdì 14 agosto a 4.376,59 dollari, in rialzo dello 0,59%, con un massimo di giornata a 4.396,88. Non ha mai toccato i 4.408,59: mancano dodici dollari dal massimo e trentadue dalla chiusura.',
      },
      {
        condition:
          'Il collocamento del trentennale delle 19:00 con un rapporto fra domanda e offerta sopra la propria media delle ultime dieci aste, seguito da un decennale sotto il 4,600% del minimo odierno: sarebbe la parte lunga che smette di essere un freno, e a quel punto la mancata risposta del metallo perderebbe la sua spiegazione più semplice.',
        triggered: false,
        evidence:
          'Il comunicato del Tesoro dà un rapporto fra domanda e offerta di 2,39, sotto la media di circa 2,43 delle ultime dieci aste: la prima gamba della condizione va nel verso opposto. Anche la seconda manca, perché il minimo del decennale venerdì è stato 4,625% e non è mai sceso sotto il 4,600%.',
      },
      {
        condition:
          'Una probabilità di rialzo a settembre che scende sotto il 30%: oggi è al 35,0% ed è ferma da tre giorni fra il 34 e il 36. Un movimento vero su quel numero rimetterebbe in gioco la direzione, perché è la misura su cui questa lettura ha poggiato per due giorni.',
        triggered: true,
        evidence:
          'Alle 14:50 di venerdì 14 agosto, dopo le vendite al dettaglio uscite a meno 0,6% contro attese di più 0,1%, la probabilità implicita di un rialzo a settembre è scesa al 29,3%: prima volta sotto il 30% in tutta la fase. In serata è risalita al 31,6% sulla componente delle attese di inflazione dell’indagine del Michigan, ma la condizione chiedeva la discesa sotto la soglia e la discesa c’è stata.',
      },
      {
        condition:
          'I prezzi al consumo di agosto, in uscita a settembre, con la componente energetica in aumento sul mese: è il test che né quello di luglio né i prezzi alla produzione di oggi potevano fare, e porterebbe la lettura sotto il neutrale invece che sopra.',
        triggered: false,
        evidence:
          'L’indice dei prezzi al consumo di agosto esce a settembre e non è ancora disponibile. La condizione non è scattata perché il dato non esiste ancora, non perché sia stato smentito: è un rinvio, non una verifica.',
      },
      {
        condition:
          'Un Brent che torna sopra gli 89,06 dollari del massimo di ieri: oggi è arrivato a toccare 85,87 ed è già risalito a 88,04, quindi il calo di cui si parla è meno stabile di come viene descritto.',
        triggered: false,
        evidence:
          'Il Brent ha chiuso venerdì a 88,60 dollari con più 1,76%, dopo un massimo di giornata di 88,79. Gli 89,06 non sono stati toccati per ventisette centesimi, pur con tre interruzioni di offerta nella stessa settimana.',
      },
    ],
    what: 'Una condizione su cinque, ed è quella monetaria. La lettura poggiava sull’osservazione che quattro elementi favorevoli non producessero effetto sul prezzo, e chiedeva un movimento vero sulla probabilità di rialzo per rimettere in gioco la direzione: quel movimento è arrivato il giorno dopo, con il 29,3% sulle vendite al dettaglio. Le altre quattro hanno retto, e due di esse — l’oro sopra 4.408,59 e il Brent sopra 89,06 — sono mancate per dodici dollari e per ventisette centesimi. La parte che aveva previsto male è quella che dava per improbabile un movimento sulle attese sulla Fed.',
  },
  {
    slug: 'il-numero-mancante-e-arrivato-e-l-asta-aveva-una-coda',
    checkedAt: '2026-08-14T23:50:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Il risultato ufficiale del collocamento, pubblicato dal Tesoro statunitense, con un rapporto fra domanda e offerta pari o superiore a 2,43 oppure con un’aggiudicazione al di sotto del quotato alla chiusura delle offerte: direbbe che i numeri usati qui sono sbagliati e che l’analisi delle 19:15 aveva ragione.',
        triggered: false,
        evidence:
          'Il comunicato del Tesoro, letto il 14 agosto sul risultato d’asta con CUSIP 912810UW6, dà un rapporto fra domanda e offerta di 2,39 — 59.801.010.300 $ di offerte contro 25.000.015.300 $ collocati — quindi sotto il 2,43 richiesto. Le quote calcolate sui dollari aggiudicati sono 11,51% agli operatori primari, 21,64% ai diretti e 66,85% agli indiretti, e coincidono a meno del secondo decimale con quelle usate nell’analisi. L’aggiudicazione al 5,216% resta sopra e non sotto il quotato di 5,212%.',
      },
      {
        condition:
          'Un oro che chiude sopra i 4.408,59 dollari della vigilia entro la seduta di venerdì: cancellerebbe la prima chiusura negativa dopo quattro positive e toglierebbe il fondamento all’abbassamento della direzione.',
        triggered: false,
        evidence:
          'Chiusura di venerdì 14 agosto a 4.376,59 dollari, con un massimo di giornata a 4.396,88: il livello non è mai stato raggiunto.',
      },
      {
        condition:
          'Le vendite al dettaglio di luglio, venerdì alle 14:30, sotto il consenso con l’oro che scende comunque: lascerebbe senza appoggio anche la rotazione verso il rischio, cioè l’ultima delle spiegazioni rimaste, e imporrebbe di cercarne una nuova.',
        triggered: false,
        evidence:
          'La prima gamba è scattata: le vendite al dettaglio di luglio sono uscite a meno 0,6% contro attese di più 0,1%, sette decimi sotto il consenso. La seconda no, e in modo netto: l’oro è salito dello 0,59% chiudendo a 4.376,59 contro i 4.351,07 della vigilia. La condizione chiedeva entrambe le cose.',
      },
      {
        condition:
          'Un Brent che torna sopra gli 89,06 dollari del massimo odierno entro venerdì: direbbe che la rivendicazione su Jazan ha un contenuto di offerta che qui è stato escluso.',
        triggered: false,
        evidence:
          'Massimo del Brent venerdì a 88,79 dollari, chiusura a 88,60 con più 1,76%. Gli 89,06 non sono stati raggiunti, e il rialzo della giornata è arrivato dopo la sospensione dei carichi a Novorossiysk e non dalla rivendicazione su Jazan.',
      },
      {
        condition:
          'Una comunicazione ufficiale saudita o di Aramco che dichiari un danno con effetto sulla produzione o sulle esportazioni: la lettura data qui poggia sul fatto che l’impianto è fermo da fine luglio, e un danno operativo dichiarato la smentirebbe.',
        triggered: false,
        evidence:
          'Nessuna comunicazione di Aramco o delle autorità saudite su danni con effetto sulla produzione o sulle esportazioni nelle ventisette ore successive alla pubblicazione. Le autorità non hanno commentato la rivendicazione.',
      },
    ],
    what: 'Nessuna condizione su cinque. L’analisi correggeva quella pubblicata settantacinque minuti prima sostenendo che il collocamento del trentennale avesse trovato domanda sotto la media invece che solida, e aveva messo come prima condizione il comunicato ufficiale del Tesoro, che allora non era raggiungibile. Il comunicato è arrivato il giorno dopo e ha confermato i tre numeri a meno del secondo decimale. Le altre quattro condizioni hanno retto: l’oro non ha ripreso i 4.408,59, il Brent non ha toccato gli 89,06 nemmeno con tre interruzioni di offerta nella stessa settimana, le vendite al dettaglio sono uscite sotto il consenso ma il metallo è salito invece di scendere, e nessuna comunicazione saudita ha dichiarato danni.',
  },
  {
    slug: 'il-trentennale-si-colloca-al-prezzo-piu-alto-dal-2001',
    checkedAt: '2026-08-14T23:50:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Il rapporto fra domanda e offerta dell’asta, quando sarà pubblicato, sotto la propria media delle ultime dieci: direbbe che il rendimento di aggiudicazione ha nascosto una domanda debole, e che il collocamento è riuscito solo perché il prezzo era già stato alzato abbastanza.',
        triggered: true,
        evidence:
          'Il comunicato del Tesoro dà 2,39, contro 2,44 dell’asta precedente e circa 2,43 di media sulle ultime dieci. Gli operatori primari hanno assorbito l’11,51% contro circa 10,6% di media, e l’aggiudicazione è arrivata quattro decimi di punto base sopra il quotato alla chiusura delle offerte.',
      },
      {
        condition:
          'Un trentennale che torna sopra il 5,247% della chiusura di ieri entro venerdì: direbbe che il mercato ha guardato il risultato e ha chiesto comunque di più, cioè che il sollievo di stasera era tecnico.',
        triggered: true,
        evidence:
          'Il trentennale ha chiuso venerdì 14 agosto a 5,261%, in rialzo di cinque punti base, con un massimo di giornata a 5,271%: sopra il 5,247% richiesto e a un decimo di punto base dal massimo delle cinquantadue settimane, 5,281%.',
      },
      {
        condition:
          'Un decennale che risale sopra il 4,684% del massimo odierno: la parte lunga ha guidato il calo di oggi, e un ritorno su quel livello toglierebbe il fondamento a questa lettura.',
        triggered: true,
        evidence:
          'Il decennale ha chiuso venerdì a 4,695%, in rialzo di 5,4 punti base sulla chiusura di 4,641%, con un massimo di giornata a 4,701%. Il livello è stato superato in chiusura e non solo in seduta.',
      },
      {
        condition:
          'Le vendite al dettaglio di venerdì alle 14:30 sopra il consenso con il biennale che si porta sopra il 4,218%: sarebbe la domanda interna che rimette in gioco un rialzo di settembre, e la riprezzatura di questa settimana andrebbe rifatta al contrario.',
        triggered: false,
        evidence:
          'Le vendite al dettaglio sono uscite a meno 0,6% contro attese di più 0,1%, quindi sotto e non sopra il consenso: la prima gamba della condizione va nel verso opposto a quello richiesto, e il biennale è sceso fino a 4,117% invece di salire sopra il 4,218%.',
      },
      {
        condition:
          'Un oro che chiude sotto i 4.351,45 dollari del minimo odierno: la lettura di fondo sul metallo resta positiva perché poggia su domanda ufficiale e traiettoria del debito, e una chiusura sotto quel livello direbbe che neanche quelle stanno più sostenendo il prezzo.',
        triggered: true,
        evidence:
          'L’oro ha chiuso giovedì 13 agosto a 4.351,07 dollari, trentotto centesimi sotto il livello indicato. La chiusura sotto quel minimo è arrivata la sera stessa in cui la condizione era stata scritta.',
      },
    ],
    what: 'Quattro condizioni su cinque, ed è il verdetto più severo registrato finora. L’analisi aveva letto il collocamento del trentennale come solido confrontando il rendimento di aggiudicazione con un livello pre-asta riportato in mattinata; il comunicato del Tesoro ha poi mostrato domanda sotto la media, il metallo ha chiuso sotto il minimo indicato la sera stessa, e il giorno dopo entrambe le scadenze lunghe hanno superato i livelli dichiarati chiudendo a 4,695% e 5,261%. L’unica condizione che ha retto è quella agganciata alle vendite al dettaglio, e ha retto perché il dato è uscito nel verso opposto a quello ipotizzato: il consumo è calato invece di crescere.',
    lesson:
      'Il confronto fra questo esito e quello dell’analisi pubblicata settantacinque minuti dopo è la misura più chiara che questo registro abbia prodotto. La prima aveva dichiarato la propria incertezza sul giudizio della domanda e si era appoggiata lo stesso all’indizio debole: quattro condizioni su cinque scattate. La seconda aveva rifiutato quell’indizio, aveva usato i numeri veri e aveva messo come prima condizione il comunicato ufficiale che ancora mancava: nessuna condizione scattata. Le due analisi guardavano lo stesso evento a un’ora e un quarto di distanza, con la stessa informazione disponibile a chiunque, e la differenza fra un verdetto e l’altro sta per intero nell’avere accettato o rifiutato un sostituto al numero che serviva. La regola che ne esce non è nuova — era già scritta il 12 agosto — ma adesso ha un prezzo misurato accanto.',
  },
  {
    slug: 'sedici-attacchi-alle-navi-e-il-blocco-senza-scadenza',
    checkedAt: '2026-08-15T09:20:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Una risposta ufficiale iraniana che rivendichi o smentisca l’attacco alle due navi di ADNOC: qui l’episodio è registrato come accusa emiratina non ancora contestata, e una posizione di Teheran ne cambierebbe lo stato.',
        triggered: false,
        evidence:
          'Teheran ha parlato dello Stretto e non dell’episodio, ed è la distinzione che tiene in piedi la condizione. Sabato 15 agosto il vice ministro degli Esteri Kazem Gharibabadi ha dichiarato che Hormuz sarà aperto o chiuso esclusivamente sotto il comando dell’Iran e che il blocco continuerà a essere fatto rispettare, e il ministro degli Esteri Abbas Araqchi ha detto che non è stata presa alcuna decisione sulla ripresa dei negoziati con Washington. Nessuna delle due dichiarazioni rivendica o smentisce l’attacco alle due navi di giovedì: lo stato dell’episodio resta quello di un’accusa emiratina non contestata.',
      },
      {
        condition:
          'Un conteggio dei transiti nello Stretto, venerdì o lunedì, sopra la media di agosto di circa dodici navi al giorno: direbbe che la frequenza degli attacchi non sta riducendo il passaggio e che il vincolo materiale si sta allentando invece di stringersi.',
        triggered: false,
        evidence:
          'Va nel verso opposto, con la cautela che questo archivio ha dichiarato lo stesso giorno. Il conteggio attribuito a Kpler per venerdì 14 agosto è di due navi, più una metaniera vuota diretta nel Golfo, senza spedizioni visibili di greggio. Due è un sesto della media di agosto richiesta dalla condizione. Ma è una cifra giornaliera di un fornitore privato, cioè esattamente la categoria che la scheda operativa del 14 agosto alle 23:55 elencava fra quelle non confermabili su una fonte indipendente: la condizione è registrata come non scattata sulla direzione, non sul livello. Il conteggio di lunedì non è ancora disponibile.',
      },
      {
        condition:
          'Un Brent che chiude sopra i 90 dollari entro lunedì: sposterebbe il canale energetico dal sostegno al rifugio alla pressione sui rendimenti, e la direzione di questa lettura andrebbe rivista al ribasso invece che al rialzo.',
        triggered: false,
        evidence:
          'La chiusura di venerdì è 88,60 dollari con più 1,76% e un massimo di giornata a 88,79, quindi un dollaro e ventuno sotto la soglia; su un’altra rilevazione la stessa chiusura vale 88,52. Restano da contare le sedute di lunedì, e il termine della condizione è ancora aperto.',
      },
      {
        condition:
          'Le misure annunciate da Bessent pubblicate entro la prossima settimana con un contenuto operativo verificabile: farebbero passare quell’annuncio dalla colonna delle dichiarazioni a quella dei fatti, che è la distinzione su cui questa analisi poggia.',
        triggered: false,
        evidence:
          'Nessuna pubblicazione con contenuto operativo risulta al controllo: l’annuncio del segretario al Tesoro resta senza testo. Il termine dichiarato copre l’intera settimana successiva e scade il 21 agosto, quindi la condizione è aperta per costruzione.',
      },
      {
        condition:
          'Un oro che chiude sopra i 4.400 dollari entro venerdì: toglierebbe il fondamento all’osservazione centrale, cioè che il metallo non risponde neanche a un’escalation materiale.',
        triggered: false,
        evidence:
          'È l’unica condizione con il termine scaduto, e si chiude per tre dollari e dodici centesimi: il massimo di venerdì è 4.396,88 dollari e la chiusura 4.376,59, con più 0,59%. L’oro non ha superato i 4.400 in nessun momento della giornata in cui veniva contato il sedicesimo attacco.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e l’osservazione centrale ha retto sul filo. L’analisi sosteneva che l’escalation fosse reale e misurabile — almeno sedici attacchi a navi collegate ad ADNOC dal 28 febbraio — e che il metallo non la stesse prezzando: l’oro ha chiuso a 4.376,59 dollari senza mai toccare i 4.400 che la condizione indicava come smentita, mancandoli per tre dollari e dodici. Nelle ore successive la frequenza degli attacchi è aumentata invece di diminuire, con una terza nave ADNOC colpita venerdì secondo l’agenzia ufficiale emiratina WAM, e il conteggio dei transiti è scivolato a due navi per venerdì. Su quest’ultimo numero il verdetto poggia sulla direzione e non sul livello: è una cifra giornaliera di un fornitore privato, e questo archivio ha già dovuto correggersi due volte per aver preso un conteggio simile per il livello invece che per la varianza del campionamento.',
  },
  {
    slug: 'il-livello-non-ha-retto-e-ust-luga-non-e-jazan',
    checkedAt: '2026-08-15T09:20:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Le vendite al dettaglio di luglio, oggi alle 14:30, sotto il consenso con l’oro che recupera comunque i 4.400 dollari entro la chiusura: toglierebbe insieme la rotazione verso il rischio e le prese di profitto, cioè entrambe le spiegazioni su cui questa analisi poggia.',
        triggered: false,
        evidence:
          'Prima gamba dentro, seconda mancata per tre dollari e dodici centesimi. Le vendite al dettaglio di luglio sono uscite a meno 0,6% contro attese di più 0,1%, sette decimi sotto il consenso; l’oro è salito ma si è fermato a un massimo di 4.396,88 e ha chiuso a 4.376,59. La condizione chiede entrambe le cose e cade sulla seconda.',
      },
      {
        condition:
          'Un Brent che chiude sopra gli 89,06 dollari del massimo di mercoledì: sposterebbe il canale energetico dal sostegno alla pressione, e la lettura sull’oro andrebbe rivista guardando i rendimenti invece del rifugio.',
        triggered: false,
        evidence:
          'Chiusura a 88,60 dollari con un massimo di 88,79: quarantasei centesimi sotto la soglia, pur con tre interruzioni di offerta nella stessa settimana e la sospensione dei carichi a Novorossiysk nel pomeriggio.',
      },
      {
        condition:
          'Una dichiarazione ufficiale russa, di Transneft o dell’operatore del porto, che quantifichi una riduzione dei caricamenti a Ust-Luga: farebbe passare l’episodio da rischio su capacità attiva a perdita accertata di barili, che è la categoria che qui è stata esplicitamente esclusa.',
        triggered: false,
        evidence:
          'Nessuna dichiarazione su Ust-Luga, e la conseguenza operativa è arrivata da un altro porto: la sospensione dei carichi dichiarata in serata riguarda il terminale di Sheskharis a Novorossiysk, sul Mar Nero, non lo scalo baltico che questa condizione nomina. La distinzione fra rischio su capacità attiva e perdita accertata regge quindi per Ust-Luga e si è sciolta altrove.',
      },
      {
        condition:
          'Un oro che chiude la settimana sopra i 4.408,59 dollari della chiusura di mercoledì: annullerebbe per intero la rottura descritta qui e riporterebbe la direzione di breve almeno a neutrale.',
        triggered: false,
        evidence:
          'Termine scaduto e condizione chiusa: la settimana si chiude a 4.376,59 dollari, trentadue sotto il livello, e il massimo di venerdì si è fermato a 4.396,88. La rottura descritta la mattina del 14 agosto non è stata annullata.',
      },
      {
        condition:
          'Un Dollar Index che torna sopra 100,00 mentre l’oro resta sotto i 4.300: rimetterebbe in piedi la spiegazione meccanica del cambio, e la debolezza relativa descritta qui perderebbe la sua parte più solida.',
        triggered: false,
        evidence:
          'Nessuna delle due gambe, e a distanza. Il Dollar Index scende per la terza seduta consecutiva, con rilevazioni fra 99,390 di minimo e 99,487, quindi mai vicino a quota 100; l’oro chiude settantasei dollari sopra i 4.300.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e due si chiudono definitivamente perché il loro termine era la fine della settimana. L’analisi era stata scritta la mattina di venerdì sulla rottura del livello dichiarato in anticipo, e sosteneva due cose: che l’oro fosse in ritardo relativo, e che l’attacco a Ust-Luga fosse un rischio su capacità attiva e non una perdita accertata di barili. La prima ha retto per tre dollari e dodici centesimi, che è il margine con cui il metallo ha mancato i 4.400 nella seduta in cui i dati americani gli davano ragione. La seconda ha retto per una ragione che vale più del verdetto: la conseguenza operativa è arrivata la sera stessa, ma da Novorossiysk e non da Ust-Luga, cioè da un terminale diverso da quello che la condizione nominava. Distinguere i due porti non era pedanteria.',
  },
  {
    slug: 'il-consumatore-si-ferma-e-l-oro-finalmente-risponde',
    checkedAt: '2026-08-15T09:20:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un oro che chiude sotto i 4.351,07 dollari della chiusura di giovedì: annullerebbe per intero la risposta al dato e direbbe che la reazione era di mezz’ora, non una riprezzatura.',
        triggered: false,
        evidence:
          'La chiusura di venerdì è 4.376,59 dollari con più 0,59%, quindi venticinque dollari e cinquantadue sopra il livello: la risposta al dato non è stata restituita nelle ore successive, che è esattamente quello che la condizione metteva alla prova.',
      },
      {
        condition:
          'Una probabilità di rialzo a settembre che torna sopra il 33,0% di stamattina entro lunedì: direbbe che il 29,3% era la reazione al titolo e non un movimento vero sulla misura.',
        triggered: false,
        evidence:
          'Il numero è risalito ma si è fermato sotto: 31,6% dopo la componente sulle attese di inflazione dell’indagine del Michigan delle 16:00, contro il 33,0% che la condizione richiede. Un punto e quattro decimi di margine, e il termine di lunedì è ancora aperto.',
      },
      {
        condition:
          'La revisione delle vendite al dettaglio di luglio, in uscita con il dato di agosto il 16 settembre, che riporti la variazione complessiva in territorio positivo: il meno 0,6% ha un margine di ±0,4% e il mese precedente era già dentro il rumore.',
        triggered: false,
        evidence:
          'Non giudicabile al controllo: la revisione esce il 16 settembre insieme al dato di agosto, cioè nello stesso giorno della riunione della Federal Reserve. È il debito aperto di questa analisi, e la condizione era stata scritta con quella scadenza in chiaro.',
      },
      {
        condition:
          'Un biennale che torna sopra il 4,159% del massimo odierno: è la scadenza su cui la trasmissione descritta qui si misura per prima, e un rientro toglierebbe il primo anello della catena.',
        triggered: false,
        evidence:
          'Il biennale è scivolato fino a 4,117% ed è rientrato a 4,136% dopo l’indagine del Michigan: non risulta alcuna rilevazione sopra il 4,159% nella parte restante della seduta. Il primo anello della catena ha tenuto.',
      },
      {
        condition:
          'Un Brent che chiude sopra gli 89,06 dollari del massimo di mercoledì entro lunedì: riaprirebbe il canale energetico verso l’inflazione attesa, che oggi si è chiuso, e sposterebbe il segno della lettura.',
        triggered: false,
        evidence:
          'Il canale si è riaperto in parte ma non è arrivato alla soglia: dopo la sospensione dei carichi a Novorossiysk il Brent ha chiuso a 88,60 dollari con più 1,76% e un massimo di 88,79, quarantasei centesimi sotto. Il termine di lunedì resta aperto.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, ed è l’analisi che fra quelle di venerdì ha avuto il verdetto più solido nel merito. Sosteneva che il metallo avesse ripreso a rispondere ai dati dopo quattro sedute in cui non lo faceva, e che la trasmissione passasse dal biennale: l’oro ha chiuso in guadagno a 4.376,59 invece di restituire la reazione, il biennale non è mai rientrato sopra il 4,159% del massimo di quella mattina, e la probabilità di un rialzo a settembre si è fermata al 31,6% contro il 33,0% dichiarato come smentita. Due condizioni restano aperte per costruzione, con un termine che corre fino a lunedì, e una fino al 16 settembre.',
  },
  {
    slug: 'la-fiducia-crolla-e-le-attese-di-inflazione-salgono',
    checkedAt: '2026-08-15T09:20:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Una probabilità di rialzo a settembre che torna sotto il 29,3% delle 14:50 entro lunedì: direbbe che la risalita al 31,6% era la reazione di un’ora alla riga sulle attese di inflazione e non una riprezzatura vera.',
        triggered: false,
        evidence:
          'Il numero è rimasto dove l’indagine lo aveva portato: 31,6% in chiusura di settimana, contro il 29,3% che la condizione richiede come rientro. La risalita non è stata restituita nelle ore successive, quindi la lettura data qui sulla componente inflazione ha retto entro la seduta. Il termine di lunedì è ancora aperto.',
      },
      {
        condition:
          'Un oro che chiude sotto i 4.351,07 dollari della chiusura di giovedì: annullerebbe per intero il recupero descritto qui e riporterebbe la direzione almeno a neutrale.',
        triggered: false,
        evidence:
          'Chiusura a 4.376,59 dollari con più 0,59%: il recupero della seconda metà di venerdì è arrivato intatto alla chiusura, con un minimo di giornata di 4.311,22 toccato nella notte e mai riavvicinato dopo il dato.',
      },
      {
        condition:
          'Un Dollar Index che torna sopra 99,855, cioè sopra la chiusura di ieri, mentre l’oro resta sopra i 4.390: toglierebbe la gamba del cambio, che in questa analisi è indicata come l’unica che sta davvero spingendo.',
        triggered: false,
        evidence:
          'Nessuna delle due gambe. Il Dollar Index ha chiuso la terza seduta consecutiva in calo, con rilevazioni fra 99,390 di minimo e 99,487, quindi oltre tre decimi sotto la soglia; e l’oro non è rimasto sopra i 4.390, chiudendo a 4.376,59 dopo un massimo di 4.396,88. La gamba del cambio ha continuato a spingere per tutta la seduta.',
      },
      {
        condition:
          'La lettura definitiva del Michigan, a fine mese, con l’indice rivisto sopra 54,0 oppure con le attese a un anno riportate al 4,2%: il dato usato qui è preliminare e la revisione può cambiare entrambe le metà del ragionamento.',
        triggered: false,
        evidence:
          'Non giudicabile: la lettura definitiva dell’indagine esce a fine agosto e al controllo non è pubblicata. Resta il debito aperto di questa analisi, dichiarato con la sua scadenza al momento della scrittura.',
      },
      {
        condition:
          'Un biennale che scende sotto il 4,117% del minimo odierno: direbbe che la parte breve ha ripreso a confermare e che il metallo non sta salendo solo sul cambio.',
        triggered: false,
        evidence:
          'Il 4,117% è rimasto il minimo della giornata e non è stato bucato: dopo l’indagine del Michigan il biennale è rientrato a 4,136%. La parte breve non ha aggiunto conferme nella parte finale della seduta, che è la ragione per cui la lettura teneva la forza dove l’aveva messa.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata. L’analisi era la sola di venerdì a registrare un elemento contrario — la fiducia del Michigan che crolla a 51,0 mentre le attese di inflazione a un anno salgono al 4,3% — e sosteneva che il mercato dei tassi avesse letto la seconda metà dell’indagine invece della prima. Il numero le ha dato ragione fino alla chiusura: la probabilità di un rialzo a settembre è rimasta al 31,6% invece di rientrare sotto il 29,3%, e il biennale non è più scivolato sotto il minimo di 4,117%. Due condizioni non sono giudicabili per costruzione, e una — la revisione definitiva dell’indagine a fine mese — è il solo modo per mettere alla prova il dato preliminare su cui l’intera lettura poggia.',
  },
  {
    slug: 'il-terzo-attacco-in-due-giorni-e-il-primo-che-toglie-barili',
    checkedAt: '2026-08-15T09:20:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Una comunicazione dell’operatore del terminale o di Transneft che dichiari la ripresa dei carichi a Sheskharis entro lunedì: ridurrebbe l’episodio a una sospensione di poche ore, e la differenza di natura descritta qui rispetto a Jazan e Ust-Luga si assottiglierebbe.',
        triggered: false,
        evidence:
          'Nessuna comunicazione sulla ripresa dei carichi risulta al controllo, trentasei ore dopo la sospensione. Il termine dichiarato è lunedì e la condizione resta aperta: il precedente citato nell’analisi, un attacco allo stesso terminale a inizio marzo, aveva prodotto una sospensione di cinque giorni.',
      },
      {
        condition:
          'Dati di tracciamento navale che mostrino carichi in uscita da Novorossiysk nei prossimi giorni sui volumi di luglio: direbbe che i serbatoi si sono svuotati senza che la produzione venisse toccata, e la catena descritta qui non si sarebbe attivata.',
        triggered: false,
        evidence:
          'Nessuna rilevazione di carichi in uscita sui volumi di luglio — circa un milione di barili al giorno — risulta pubblicata nelle trentasei ore successive. La condizione è registrata come non scattata sull’assenza del dato e non su un numero contrario, che è una distinzione che questo registro ha imparato a dichiarare.',
      },
      {
        condition:
          'Un Brent che chiude sotto gli 87,07 dollari della vigilia entro lunedì: annullerebbe la risalita e riporterebbe l’episodio nella categoria dei rimbalzi che rientrano, dove questo archivio ha collocato Jazan.',
        triggered: false,
        evidence:
          'La risalita non è rientrata: il Brent ha chiuso a 88,60 dollari con più 1,76% sulla chiusura di 87,07, cioè un dollaro e cinquantatré sopra la soglia, con un massimo di 88,79. È il contrario di quello che era successo a Jazan, dove il rimbalzo si era esaurito in un’ora.',
      },
      {
        condition:
          'Un oro che chiude sotto i 4.351,07 dollari della chiusura di giovedì: toglierebbe il fondamento alla parte di questa lettura che tiene la direzione sopra il neutrale.',
        triggered: false,
        evidence:
          'Chiusura a 4.376,59 dollari con più 0,59%, venticinque e cinquantadue sopra il livello. La direzione sopra il neutrale ha conservato il suo fondamento fino alla chiusura di settimana.',
      },
      {
        condition:
          'Un Brent stabilmente sopra i 90 dollari accompagnato da un decennale che torna sopra il 4,70%: sarebbe la conferma che il canale energetico ha cambiato segno, e la lettura di breve andrebbe portata sotto il neutrale invece che tenuta sopra.',
        triggered: false,
        evidence:
          'La seconda gamba si è avvicinata più della prima, e va detto. Il decennale ha chiuso a 4,695% con un massimo di 4,701%, quindi ha attraversato il 4,70% in seduta senza mantenerlo; il Brent è rimasto un dollaro e quaranta sotto i 90. La congiunzione non si è formata, ma per la prima volta una delle due gambe ha toccato il proprio livello.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e l’argomento centrale ha retto nel modo più diretto possibile. L’analisi distingueva la sospensione dei carichi a Sheskharis dai due attacchi precedenti — Jazan, ferma da fine luglio, e Ust-Luga, colpita senza danni quantificati — sostenendo che solo la prima toglie barili al mercato, e prevedeva che la differenza si vedesse nel prezzo. Il Brent ha chiuso a 88,60 dollari con più 1,76% invece di restituire il rialzo entro l’ora come era successo a Jazan, nessuna ripresa dei carichi è stata comunicata a trentasei ore dalla sospensione, e l’oro ha tenuto la chiusura di giovedì con venticinque dollari di margine. Il dato più informativo è però nella quinta condizione: il decennale ha toccato 4,701% in seduta, cioè ha attraversato per la prima volta il livello che tre analisi consecutive avevano indicato come metà della combinazione da temere, e non lo ha mantenuto.',
    lesson:
      'Cinque analisi chiuse insieme, cinque verdetti «confermata», nessuna condizione scattata su venticinque: è un risultato che va guardato con sospetto invece che con soddisfazione, e la ragione sta nella costruzione delle condizioni e non nella qualità delle letture. Le cinque analisi sono state scritte nello stesso giorno e hanno dichiarato in gran parte le stesse soglie — i 4.351,07 di chiusura di giovedì sull’oro, i 4.400 e i 4.408,59 come rottura al rialzo, gli 89,06 e i 90 dollari sul Brent, il 33,0% e il 29,3% sulla probabilità di settembre — quindi le venticinque condizioni sono in realtà otto numeri contati più volte, e una sola chiusura di seduta le ha risolte tutte nello stesso verso. Un registro che funziona non può moltiplicare per cinque una singola osservazione: quando più analisi dello stesso giorno condividono la soglia, la seconda e la terza dovrebbero dichiararne una diversa — un livello che la prima non stava già misurando — altrimenti il conteggio degli esiti misura quante volte è stato scritto lo stesso numero e non quante volte quel numero ha avuto ragione.',
  },
  {
    slug: 'la-terza-nave-e-washington-mette-in-conto-la-benzina',
    checkedAt: '2026-08-17T09:10:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un conteggio dei transiti di lunedì pari o superiore a otto navi pubblicato da una fonte ricontrollabile: direbbe che le due di venerdì erano un minimo di campionamento, esattamente come quelle del 7 agosto che questo archivio ha dovuto correggere, e cadrebbe il fatto centrale di questa lettura.',
        triggered: false,
        evidence:
          'Il conteggio di lunedì non è ancora pubblicato al controllo, e quello di domenica va nella direzione opposta: nessuna nave commerciale registrata nei dati Kpler, contro cinque sabato e trentuno nel fine settimana precedente. Le due navi di venerdì non erano quindi un minimo di campionamento ma un punto di una discesa. Resta la cautela dichiarata dall’analisi stessa: sono cifre giornaliere di un fornitore privato, e alcune navi possono transitare con il transponder spento, quindi «zero registrate» non è zero passaggi.',
      },
      {
        condition:
          'Un oro che apre lunedì sopra i 4.396,88 dollari del massimo di venerdì e chiude sopra quel livello: direbbe che l’escalation è entrata nel prezzo e che la forza bassa dichiarata qui era troppo prudente.',
        triggered: false,
        evidence:
          'La prima gamba è mancata in modo netto: l’oro spot ha aperto intorno a 4.373 dollari, cioè sotto la chiusura di venerdì di 4.376,59 e ventiquattro dollari sotto il livello richiesto, con i futures di settembre nell’area 4.379-4.381. Alle 09:20 il metallo è risalito a 4.391,07 con più 0,4%, quindi ancora sotto i 4.396,88. La condizione chiede apertura e chiusura sopra quel livello e cade sulla prima.',
      },
      {
        condition:
          'Un Brent che apre lunedì sopra i 90 dollari mentre il decennale resta sopra il 4,695% della chiusura di venerdì: è la combinazione sorvegliata da quattro giorni, e per la prima volta arriverebbe come salto del fine settimana invece che dentro una seduta. In quel caso la direzione va portata sotto il neutrale.',
        triggered: false,
        evidence:
          'Nessuna delle due gambe, ed è la condizione più informativa del gruppo. Il Brent ha aperto fra 88,7 e 88,8 dollari, poi è salito fino a 89,40 con circa più 1% e tratta intorno a 89,20: sempre sotto i 90. Il decennale è andato nella direzione opposta a quella richiesta, a 4,684% con circa meno un punto base, quindi sotto il 4,695% della chiusura di venerdì. La combinazione sorvegliata per quattro giorni non si è formata: il greggio è salito e i rendimenti sono scesi.',
      },
      {
        condition:
          'Una dichiarazione di ADNOC o del governo emiratino che quantifichi una riduzione di caricamenti o di esportazioni dopo il terzo attacco: farebbe passare l’episodio da fatto contato a perdita accertata di barili, che è la categoria che questa analisi non rivendica.',
        triggered: false,
        evidence:
          'Nessuna dichiarazione di ADNOC o del governo emiratino che quantifichi caricamenti o esportazioni risulta pubblicata nelle sessanta ore successive. L’episodio resta un fatto contato e non una perdita accertata, che è esattamente la classificazione che l’analisi aveva scelto.',
      },
      {
        condition:
          'Una benzina americana media che rientra sotto i 4,00 dollari per gallone entro venerdì prossimo, o una dichiarazione americana che ritira l’accettazione del costo energetico: toglierebbe il canale dell’inflazione attesa che qui impedisce alla lettura di essere pienamente rialzista.',
        triggered: false,
        evidence:
          'Nessuna rilevazione nuova del prezzo medio alla pompa e nessuna dichiarazione che ritiri l’accettazione del costo energetico risultano al controllo. Il termine dichiarato corre fino a venerdì 21 agosto e la condizione resta aperta per costruzione.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e per una volta il verdetto poggia sulla condizione che contava invece che sull’assenza di notizie. L’analisi aveva scritto come terza condizione la combinazione sorvegliata da quattro giorni — Brent sopra i 90 dollari con il decennale sopra il 4,695% — e la prima seduta liquida ha risposto separando le due gambe: il greggio è salito fino a 89,40 e il decennale è scivolato a 4,684%. Anche la condizione sull’oro si chiude in modo pulito: il metallo ha aperto a circa 4.373 dollari, cioè sotto la chiusura di venerdì, quindi l’escalation non è entrata nel prezzo all’apertura come la condizione ipotizzava. Il conteggio dei transiti è invece peggiorato ancora, a zero navi registrate domenica, con la stessa cautela sulla fonte che l’analisi aveva dichiarato per prima.',
  },
  {
    slug: 'l-attacco-piu-grande-della-guerra-e-i-barili-non-si-muovono',
    checkedAt: '2026-08-17T09:10:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un attacco ucraino a una raffineria o a un terminale di esportazione russo con una conseguenza operativa dichiarata dall’operatore entro venerdì 21 agosto: sposterebbe questo fronte dalla colonna del rifugio a quella dell’offerta, e cadrebbe l’osservazione centrale di questa lettura.',
        triggered: false,
        evidence:
          'Nessun attacco a una raffineria o a un terminale di esportazione russo con conseguenza operativa dichiarata risulta al controllo. L’unico bersaglio industriale rivendicato resta l’impianto di carburante per missili nella regione di Rostov, che non è capacità di esportazione di greggio e per il quale nessun operatore ha dichiarato nulla. Il termine corre fino a venerdì 21 agosto.',
      },
      {
        condition:
          'Un conteggio dei droni lanciati questa notte pubblicato da una fonte che non sia il ministero della Difesa russo: renderebbe misurata una scala che oggi è soltanto dichiarata, e se risultasse molto inferiore agli 822 la definizione di «una delle più vaste della guerra» andrebbe rivista.',
        triggered: false,
        evidence:
          'Nessun conteggio indipendente dei droni lanciati risulta pubblicato. La scala dell’attacco resta quindi una cifra dichiarata da una parte in guerra, che è la riserva su cui l’analisi aveva abbassato la propria certezza a media.',
      },
      {
        condition:
          'Un oro che apre lunedì e chiude sotto i 4.376,59 dollari della chiusura di venerdì: direbbe che cinque fatti geopolitici in due giorni non producono domanda di protezione, e la direzione andrebbe portata a neutrale.',
        triggered: false,
        evidence:
          'La prima metà della condizione si è verificata e la seconda no. L’oro ha aperto intorno a 4.373 dollari, cioè sotto i 4.376,59 della chiusura di venerdì: nessun salto, e per qualche ora la lettura più severa sembrava giusta. Alle 09:20 il metallo è però a 4.391,07 con più 0,4%, quindi sopra il livello, e la chiusura di lunedì non è ancora avvenuta. La condizione chiede entrambe le cose e al controllo non è scattata.',
      },
      {
        condition:
          'Un Brent che apre sopra i 90 dollari sulla sola escalation russo-ucraina, senza alcun fatto nuovo su Hormuz: direbbe che il mercato prezza questo attacco come un evento di offerta, cioè l’opposto della lettura data qui.',
        triggered: false,
        evidence:
          'Il Brent ha aperto fra 88,7 e 88,8 dollari, quindi sotto la soglia, ed è poi salito fino a 89,40 restando sotto i 90. Va aggiunto che la seconda gamba non era comunque soddisfatta: un fatto nuovo su Hormuz c’era, ed è il conteggio dei transiti a zero navi registrate domenica, che Reuters collega esplicitamente al rialzo del greggio insieme allo stallo dei negoziati.',
      },
      {
        condition:
          'Nessuna nuova ondata di attacchi su obiettivi russi entro mercoledì 19 agosto, accompagnata da un annuncio di tregua o dalla ripresa dei negoziati: direbbe che quella di questa notte era un’operazione isolata e non un’intensificazione, e il premio andrebbe ridotto invece che mantenuto.',
        triggered: false,
        evidence:
          'Nessun annuncio di tregua e nessuna ripresa dei negoziati risultano al controllo, e la condizione richiede entrambe le cose insieme all’assenza di nuove ondate. Il termine dichiarato è mercoledì 19 agosto e resta aperto.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la parte misurabile dell’osservazione centrale ha retto: il fronte russo-ucraino non ha prodotto barili in meno, e il Brent non ha aperto sopra i 90 dollari come farebbe se il mercato leggesse quell’attacco come un evento di offerta. La terza condizione merita però di essere letta per intero, perché la sua prima metà si è verificata: l’oro ha aperto sotto la chiusura di venerdì, a circa 4.373 dollari, e per alcune ore la lettura che questa analisi indicava come propria smentita — cinque fatti geopolitici che non producono domanda di protezione — è stata la descrizione giusta di quello che si vedeva. Il recupero a 4.391,07 è arrivato dopo, e non dal canale geopolitico: è arrivato con il decennale a 4,684% e il dollaro a 99,52.',
  },
  {
    slug: 'un-drone-abbattuto-sulla-romania-e-il-quarto-del-2026',
    checkedAt: '2026-08-17T09:10:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Una misura militare dichiarata dall’Alleanza in risposta all’episodio entro venerdì 21 agosto — un rafforzamento della sorveglianza aerea, una richiesta formale di consultazioni fra alleati, o un dispiegamento annunciato: farebbe passare l’incidente da contenuto a reazione, e la forza di questa lettura andrebbe alzata invece che tenuta bassa.',
        triggered: false,
        evidence:
          'Nessuna misura militare dell’Alleanza risulta annunciata nelle sedici ore successive: né rafforzamento della sorveglianza aerea, né richiesta di consultazioni, né dispiegamenti. L’episodio resta nella categoria dell’incidente contenuto in cui l’analisi lo aveva collocato. Il termine corre fino a venerdì 21 agosto.',
      },
      {
        condition:
          'Un’attribuzione ufficiale del drone alla Russia da parte della Romania o dell’Alleanza: cambierebbe lo stato dell’episodio da non attribuito ad attribuito, che è una delle due gambe su cui questa lettura poggia.',
        triggered: false,
        evidence:
          'Nessuna attribuzione ufficiale risulta pubblicata: resta la formula del portavoce dell’Alleanza secondo cui il drone «sembra essere russo», che è la stessa su cui l’analisi aveva abbassato la certezza. Lo stato dell’episodio non è cambiato.',
      },
      {
        condition:
          'Un quinto episodio dello stesso tipo in Romania o in un altro Paese dell’Alleanza entro fine agosto: porterebbe la frequenza del 2026 oltre il ritmo di uno ogni due mesi, e allora il tasso di base andrebbe usato per alzare la lettura invece che per ridimensionarla.',
        triggered: false,
        evidence:
          'Nessun nuovo episodio di intrusione nello spazio aereo di un Paese dell’Alleanza risulta segnalato al controllo. Il termine dichiarato è la fine di agosto e la condizione resta aperta per costruzione: il tasso di base di uno ogni due mesi regge per ora.',
      },
      {
        condition:
          'Una dichiarazione ufficiale russa o ucraina che quantifichi in barili la perdita dell’impianto di carburante per missili nella regione di Rostov: sposterebbe quella rivendicazione dalla categoria degli annunci a quella dell’offerta, dove questa analisi dice esplicitamente che non appartiene.',
        triggered: false,
        evidence:
          'Nessuna quantificazione in barili è stata pubblicata da alcuna delle due parti. La rivendicazione su Rostov resta un annuncio, e la classificazione data dall’analisi regge.',
      },
      {
        condition:
          'Un oro che apre lunedì in salto di oltre venti dollari sopra i 4.376,59 della chiusura di venerdì e mantiene il guadagno fino alla chiusura: direbbe che sette fatti geopolitici in tre giorni sono stati prezzati per intero, e che la forza bassa dichiarata qui era troppo prudente.',
        triggered: false,
        evidence:
          'Non c’è stato alcun salto, e nemmeno un guadagno all’apertura: l’oro spot ha aperto intorno a 4.373 dollari, cioè circa tre dollari e mezzo sotto la chiusura di venerdì, con i futures di settembre fra 4.379 e 4.381. Il salto di oltre venti dollari richiesto dalla condizione non si è avvicinato, e questa è la condizione del gruppo che la prima seduta liquida ha risolto in modo definitivo.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la quinta si chiude in modo definitivo: la prima seduta liquida dopo il fine settimana non ha prodotto alcun salto sull’oro. Il metallo ha aperto a circa 4.373 dollari, sotto la chiusura di venerdì, contro un salto di oltre venti dollari che la condizione indicava come prova del fatto che il premio geopolitico fosse stato prezzato per intero. La lettura data qui — un episodio contenuto, non attribuito, quarto della sua serie nel 2026, con una procedura di deterrenza che ha funzionato e che quindi sottrae premio invece di aggiungerlo — è quella che il prezzo di apertura descrive. Le altre quattro condizioni restano non scattate ma con i termini aperti fino a venerdì e a fine agosto.',
    lesson:
      'Sette analisi in tre giorni hanno dichiarato tutte un rischio geopolitico in aumento, e la prima risposta liquida è stata un’apertura dell’oro tre dollari e mezzo sotto la chiusura di venerdì: nessun salto, con il Brent sotto i 90 dollari. Il premio che l’archivio ha descritto accumularsi per tre giorni non esisteva all’apertura. Il rialzo è arrivato dopo, a 4.391,07, ed è arrivato con il decennale a 4,684% — sotto la chiusura di venerdì — il biennale a 4,156% e il dollaro a 99,52: cioè dal canale monetario, non da quello geopolitico. La lezione non è che i sette fatti fossero falsi, perché erano tutti documentati; è che contarli non dice niente su quale canale li porterà nel prezzo, e che scrivere «rischio aumentato» sette volte di seguito senza un prezzo con cui misurarsi accumula convinzione nella scrittura e non premio nel mercato. La domanda da porre in cima a ogni lettura geopolitica non è quanto il rischio sia salito, ma attraverso quale canale dovrebbe arrivare e quale numero lo mostrerebbe.',
  },
  {
    slug: 'il-breve-scende-e-il-lungo-sale',
    checkedAt: '2026-08-17T11:45:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un decennale che chiude lunedì o martedì sotto il 4,641% della chiusura di giovedì: direbbe che la salita della parte lunga di venerdì era una coda di seduta e non una richiesta di premio, e la parte centrale di questa lettura cadrebbe.',
        triggered: false,
        evidence:
          'Alle 11:45 di lunedì il decennale è a circa 4,681%, quindi quattro punti base sopra la soglia, e la chiusura non è ancora avvenuta. Va però registrata la direzione, perché è quella che conta per il termine ancora aperto: dal 4,695% della chiusura di venerdì al 4,684% delle 09:20 al 4,681% di adesso, la scadenza si sta muovendo verso la condizione invece che allontanarsene. Il termine corre fino a martedì.',
      },
      {
        condition:
          'Un oro che chiude sotto i 4.351,07 dollari della chiusura di giovedì entro martedì: annullerebbe il recupero della seconda metà di venerdì e riporterebbe la direzione almeno a neutrale.',
        triggered: false,
        evidence:
          'Il metallo è andato nella direzione opposta e di parecchio: alle 11:45 lo spot è a 4.400,15 dollari con più 0,6% secondo Reuters, cioè quarantanove dollari sopra la soglia. Nessuna rilevazione della sessione si è avvicinata al livello.',
      },
      {
        condition:
          'Un Brent che chiude sopra i 90 dollari con il decennale sopra il 4,70%: è la combinazione che questa scheda ha indicato da tre giorni come quella che porta la lettura di breve sotto il neutrale, e venerdì entrambe le gambe si sono avvicinate senza arrivarci.',
        triggered: false,
        evidence:
          'Non scattata su nessuna delle due gambe, ed è la terza seduta consecutiva in cui la combinazione non si forma. Il Brent ha toccato di nuovo 89,40 dollari e tratta poi attorno a 89,28, quindi sotto i 90; il decennale è a 4,681%, sotto il 4,70%. Le due gambe continuano a muoversi in senso opposto invece che insieme, che è l’osservazione su cui questa lettura poggiava.',
      },
      {
        condition:
          'La ripresa dei carichi a Sheskharis dichiarata dall’operatore entro martedì, con il Brent che rientra sotto gli 87,07 della chiusura di giovedì: toglierebbe la gamba di offerta al rialzo del greggio e ridurrebbe l’episodio a una sospensione di poche ore.',
        triggered: false,
        evidence:
          'Nessuna dichiarazione di ripresa dei carichi risulta al controllo, e la seconda gamba è comunque distante: il Brent a 89,28 dollari sta oltre due dollari sopra gli 87,07 richiesti. La sospensione è al quarto giorno, contro i cinque del precedente di inizio marzo. Il termine corre fino a martedì.',
      },
      {
        condition:
          'Una probabilità di rialzo a settembre che torna sopra il 35,0% di giovedì entro venerdì prossimo: cancellerebbe per intero la riprezzatura di questa settimana, che è la gamba più solida della lettura.',
        triggered: false,
        evidence:
          'La probabilità è attorno al 29%, sei punti sotto la soglia e in calo rispetto al 30% circa delle 09:20 di stamattina: si muove nella direzione opposta a quella che invaliderebbe la lettura. Il termine resta aperto fino a venerdì e comprende i verbali del FOMC di mercoledì, che sono l’unico appuntamento in grado di riportarla su.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la gamba più solida della lettura — la riprezzatura della Fed — si è rafforzata invece di indebolirsi: la probabilità di un rialzo a settembre è attorno al 29% contro il 35,0% di giovedì. La prima condizione merita però di essere letta per la direzione invece che per il verdetto, perché è quella che porta l’argomento centrale dell’analisi. La tesi era che il breve scendesse e il lungo salisse, cioè che la parte lunga della curva stesse chiedendo un premio invece di seguire la banca centrale; la condizione per smentirla era un decennale sotto il 4,641% entro martedì. Alle 11:45 di lunedì siamo a 4,681%, ancora quattro punti base sopra, ma la sequenza va tutta in una direzione: 4,695% venerdì in chiusura, 4,684% stamattina alle 09:20, 4,681% adesso. La separazione fra le due estremità della curva si sta chiudendo dal lato lungo, e con il termine aperto fino a martedì questa è la condizione da guardare.',
  },
  {
    slug: 'mocha-chiude-e-il-libano-apre-un-terzo-fronte',
    checkedAt: '2026-08-17T11:45:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un annuncio dell’autorità portuale di Mocha sulla ripresa delle attività commerciali entro venerdì 21 agosto: ridurrebbe la chiusura a un’interruzione di pochi giorni e toglierebbe l’unico fatto operativo nuovo di questa lettura.',
        triggered: false,
        evidence:
          'Nessun annuncio di ripresa risulta pubblicato al controllo: la sospensione dichiarata sabato dal direttore del porto è al terzo giorno. Il termine corre fino a venerdì 21 agosto.',
      },
      {
        condition:
          'Una stima quantificata del tonnellaggio o dei barili deviati da Bab el-Mandeb attribuibile alla chiusura, pubblicata da un’autorità o da un servizio di tracciamento: farebbe passare l’episodio dalla logistica all’offerta, che è la categoria che questa analisi esclude esplicitamente.',
        triggered: false,
        evidence:
          'Nessuna stima in tonnellate o in barili è stata pubblicata. Esiste il conteggio dei transiti del fine settimana — quarantanove navi commodity nel Bab el-Mandeb contro cinquantacinque del precedente, nessuna spedizione petrolifera saudita tracciata — ma è un conteggio di scafi, non una quantificazione di carico, e nessuna fonte lo attribuisce alla chiusura di Mocha. La classificazione data dall’analisi, logistica e non offerta, regge.',
      },
      {
        condition:
          'Un oro che apre lunedì e chiude sotto i 4.376,59 dollari della chiusura di venerdì, restituendo per intero il premio del fine settimana: direbbe che tre fatti geopolitici in due giorni non producono domanda di protezione, e la direzione andrebbe portata a neutrale.',
        triggered: false,
        evidence:
          'La prima metà si è verificata e la seconda va nel verso opposto. L’oro ha aperto intorno a 4.373 dollari, cioè sotto il livello, ma alle 11:45 è a 4.400,15 con più 0,6%, ventitré dollari e mezzo sopra la chiusura di venerdì, e la chiusura di lunedì non è ancora avvenuta. La condizione chiede l’apertura e la chiusura insieme, e al controllo non è scattata.',
      },
      {
        condition:
          'Una tregua ribadita o una de-escalation dichiarata fra Israele e Hezbollah entro venerdì 21 agosto, oppure l’assenza di qualunque risposta di Hezbollah entro quella data: direbbe che il fronte libanese era un episodio e non un’apertura, e la terza gamba di questa lettura cadrebbe.',
        triggered: false,
        evidence:
          'Nessuna tregua ribadita e nessuna de-escalation dichiarata risultano al controllo, e la seconda gamba — l’assenza di risposta di Hezbollah — non è giudicabile prima del termine, che è venerdì 21 agosto. La condizione resta aperta per costruzione.',
      },
      {
        condition:
          'Un decennale che apre sopra il 4,701% del massimo di venerdì con l’oro che non sale: direbbe che il premio di rifugio è già interamente assorbito dal costo-opportunità, e la forza di questa lettura andrebbe azzerata invece che tenuta bassa.',
        triggered: false,
        evidence:
          'È l’unica condizione del gruppo con il termine ormai chiuso, perché chiedeva l’apertura di lunedì, e si risolve nel verso opposto su entrambe le gambe. Il decennale ha aperto sotto la soglia — 4,684% alle 09:20, 4,681% alle 11:45, quindi anche sotto il 4,695% della chiusura di venerdì — e l’oro è salito, da circa 4.373 dollari in apertura a 4.400,15. La configurazione descritta, premio di rifugio assorbito dal costo-opportunità, non si è formata.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la quinta si chiude in modo definitivo perché il suo termine era l’apertura di lunedì: chiedeva un decennale sopra il 4,701% con l’oro fermo, e sono arrivate le due cose opposte — decennale a 4,681% e oro a 4.400,15 dollari. Il rischio principale che l’analisi si era dichiarata, un premio di rifugio interamente assorbito dal costo-opportunità, non si è materializzato. Le altre quattro restano non scattate con i termini aperti, e su due di esse va detto che il tempo non ha ancora prodotto informazione: la chiusura di Mocha è al terzo giorno senza annunci e la risposta di Hezbollah non è arrivata né è stata esclusa. Una nota di igiene del registro: la terza condizione poggia sui 4.376,59 della chiusura di venerdì, cioè esattamente la soglia dichiarata anche dall’analisi delle 09:20 di oggi e da altre due letture del fine settimana. Quattro analisi di giorni diversi che si misurano sullo stesso numero producono quattro verdetti che valgono come uno, ed è il problema di sovrapposizione già registrato in questa scheda il 15 agosto.',
  },
  {
    slug: 'il-salto-non-c-e-stato-e-l-oro-sale-sui-tassi',
    checkedAt: '2026-08-17T11:45:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un oro che chiude lunedì sotto i 4.376,59 dollari della chiusura di venerdì: annullerebbe per intero il recupero della mattina e direbbe che il rialzo era una reazione di apertura e non una riprezzatura, riportando la forza a bassa.',
        triggered: false,
        evidence:
          'Alle 11:45 l’oro spot è a circa 4.400,15 dollari con più 0,6% secondo Reuters, quindi ventitré dollari e mezzo sopra il livello, e il recupero della mattina si è esteso invece di essere annullato: dai 4.391 delle 09:20 il metallo ha guadagnato altri nove dollari. La chiusura di lunedì non è ancora avvenuta e il termine resta aperto.',
      },
      {
        condition:
          'Un Brent che chiude sopra i 90 dollari con il decennale che torna sopra il 4,695%: è la combinazione che questa lettura dichiara non formata, e la sua formazione porterebbe la direzione sotto il neutrale.',
        triggered: false,
        evidence:
          'Nessuna delle due gambe. Il Brent ha toccato di nuovo 89,40 dollari e tratta poi attorno a 89,28, con il WTI sceso verso 81,74; il decennale è a circa 4,681%, quattordici millesimi sotto il 4,695% richiesto e in calo rispetto al 4,684% delle 09:20. La separazione fra petrolio e curva che questa analisi indicava come la sua informazione centrale ha retto altre due ore e mezza.',
      },
      {
        condition:
          'Un decennale che torna sopra il 4,701% del massimo di venerdì entro mercoledì 19 agosto: toglierebbe la gamba monetaria su cui l’intero rialzo poggia, e senza quella il premio geopolitico da solo non ha mai mosso il metallo in questa fase.',
        triggered: false,
        evidence:
          'Il decennale è a circa 4,681%, due punti base sotto il valore delle 09:20 e venti millesimi sotto la soglia: si muove nella direzione opposta a quella che invaliderebbe la lettura. Il termine corre fino a mercoledì 19 agosto e comprende i verbali del FOMC.',
      },
      {
        condition:
          'Una probabilità di rialzo a settembre che risale sopra il 35% dopo i verbali del FOMC di mercoledì 19 agosto: direbbe che la riprezzatura su cui l’oro sta salendo era incompleta, e la forza andrebbe riportata a bassa.',
        triggered: false,
        evidence:
          'La condizione non è ancora eseguibile, perché i verbali escono mercoledì 19 agosto e al controllo non sono stati pubblicati. Il numero nel frattempo scende invece di salire: circa 29% contro il 30% delle 09:20 e il 47% di un mese fa, senza che nel frattempo sia uscita una sola diffusione macroeconomica.',
      },
      {
        condition:
          'Un ritorno di spedizioni petrolifere saudite tracciate attraverso il Bab el-Mandeb entro venerdì 21 agosto: direbbe che l’assottigliamento della seconda arteria era un effetto di fine settimana e non una restrizione, e la parte logistica di questa lettura si indebolirebbe.',
        triggered: false,
        evidence:
          'Nessun ritorno di spedizioni petrolifere saudite tracciate risulta segnalato al controllo. Il conteggio dei transiti a Hormuz resta quello del fine settimana — cinque navi sabato, nessuna registrata domenica, contro oltre 130 al giorno prima del conflitto — e nessuna fonte riporta una ripresa sull’arteria alternativa. Il termine corre fino a venerdì 21 agosto.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la prova che l’analisi aveva dichiarato è arrivata nella sua forma più debole possibile. Il test scritto alle 09:20 era che una tenuta sopra i 4.400 dollari avrebbe riaperto la fascia 4.435-4.450 e imposto di alzare la forza: alle 11:45 lo spot è a 4.400,15, cioè quindici centesimi sopra la soglia, in una sola rilevazione e senza che la fascia superiore sia stata avvicinata. L’analisi chiedeva che il metallo tenesse sopra quel livello, non che lo toccasse, e questo archivio ha classificato l’11 agosto i 4.400 come punto di attrazione invece che come muro, perché è esattamente lì che si accumulano gli ordini in attesa. La parte che conta di più è però un’altra, e riguarda il canale su cui l’intero rialzo poggia: in due ore e mezza il biennale è passato da 4,156% a 4,155%, il decennale da 4,684% a 4,681%, la probabilità di un rialzo a settembre da circa il 30% al 29%, e nel frattempo non è uscita alcuna diffusione macroeconomica. Nove dollari sul metallo contro tre millesimi di punto sul decennale: la direzione descritta dall’analisi ha retto, la spinta che le veniva attribuita non si è mossa.',
    lesson:
      'L’11 agosto questo archivio ha scritto una nota di metodo sui livelli tondi — sono punti di attrazione e non muri, perché è lì che si accumulano gli ordini in attesa — e ne aveva tratto la regola di ancorare le condizioni ai livelli che il mercato ha stabilito da sé. Poi ha continuato a usare i 4.400 come soglia dichiarata: l’11 agosto alle 10:45 e alle 17:15, il 14 agosto sulla chiusura di venerdì, e stamattina come test dell’intera lettura. Oggi il livello è stato toccato per quindici centesimi mentre i tre numeri che dovrebbero spiegarlo si muovevano di frazioni, ed è il caso esatto che la nota descriveva: la soglia ha misurato l’attrazione del numero tondo invece della forza del canale monetario. Il correttivo non è nuovo, è quello già scritto e mai eseguito — i 4.396,88 del massimo di venerdì, i 4.441,01 del 12 agosto — e vale a maggior ragione quando la cifra tonda è comoda perché è quella di cui parlano tutti. Una soglia scelta per essere citabile non è una soglia scelta per essere informativa.',
  },
  {
    slug: 'due-chiazze-e-duemila-chilometri-quadrati',
    checkedAt: '2026-08-17T16:35:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un provvedimento delle autorità costiere, dell’Oman o dell’Iran, oppure dell’Organizzazione marittima internazionale, che introduca un’area di esclusione o una restrizione alla navigazione intorno a Qeshm o a Sirri entro venerdì prossimo: farebbe passare gli incidenti da rischio operativo a vincolo di transito, e la forza di questa lettura andrebbe alzata.',
        triggered: false,
        evidence:
          'Nessuna area di esclusione e nessuna restrizione alla navigazione risultano introdotte da alcuna delle autorità indicate. Il termine corre fino a venerdì 21 agosto. Va annotato che nelle stesse ore Teheran ha alzato il linguaggio dichiarandosi pronta a una postura offensiva, cioè si è mossa la parte dichiarata del quadro e non quella regolamentare: è esattamente la distinzione su cui l’analisi aveva costruito la propria cautela.',
      },
      {
        condition:
          'Una stima quantificata dei barili perduti dalla Minoan Pioneer o dalla Caroline Bezengi, pubblicata da un armatore o da un’autorità: collocherebbe l’episodio nella categoria dello shock di offerta, che questa analisi esclude esplicitamente.',
        triggered: false,
        evidence:
          'Nessuna stima in barili è stata pubblicata da armatori o autorità in due giorni. La classificazione data dall’analisi — costo operativo e non perdita di offerta — regge, ed è il tipo di condizione che si chiude per assenza di pubblicazione invece che per smentita.',
      },
      {
        condition:
          'Un aumento dei premi per il rischio bellico sulle rotte del Golfo dichiarato dal mercato assicurativo — una nuova circolare del Lloyd’s Market Association o un rialzo delle tariffe riportato da un intermediario: sarebbe il primo prezzo sul meccanismo descritto qui, e la lettura passerebbe da deduzione a misura.',
        triggered: false,
        evidence:
          'Nessuna circolare del Lloyd’s Market Association e nessun rialzo delle tariffe riportato da intermediari risultano al controllo. Il meccanismo assicurativo descritto dall’analisi resta quindi una deduzione e non una misura, come l’analisi stessa dichiarava.',
      },
      {
        condition:
          'Un Brent che chiude sopra i 95 dollari entro venerdì prossimo con il decennale sopra il 4,70%: il canale dell’inflazione prevarrebbe su quello del rifugio e la direzione andrebbe rivista al ribasso.',
        triggered: false,
        evidence:
          'Non scattata su nessuna delle due gambe, e con ampio margine: il Brent è a circa 88,95 dollari con più 0,5% — oltre sei dollari sotto la soglia — dopo un massimo di giornata a 89,40, e i rendimenti sono in lieve calo. Il termine corre fino a venerdì 21 agosto.',
      },
      {
        condition:
          'Un oro che chiude la settimana sotto i 4.351,07 dollari della chiusura di giovedì 13 agosto: toglierebbe il fondamento residuo per tenere la direzione sopra il neutrale.',
        triggered: false,
        evidence:
          'Il metallo è andato nella direzione opposta: Reuters lo rileva attorno a 4.388 dollari con più 0,3% e Investing nell’area 4.389-4.404, quindi fra trentasette e cinquantatré dollari sopra la soglia, e la settimana non è ancora chiusa.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata a due giorni dalla pubblicazione, e il modo in cui non sono scattate è più informativo del verdetto. Tre delle cinque chiedevano che qualcuno pubblicasse un numero — barili perduti, tariffe assicurative, un provvedimento di navigazione — e in due giorni nessuno l’ha fatto: l’analisi aveva collocato gli sversamenti nella categoria del costo operativo invece che dello shock di offerta proprio perché quei numeri non esistevano, e continuano a non esistere. Le due condizioni di prezzo si sono chiuse con margine largo e nel verso favorevole: Brent a 88,95 dollari contro una soglia a 95, oro fra 4.388 e 4.404 contro una soglia a 4.351,07. La lettura che teneva la forza bassa proprio perché il meccanismo descritto non aveva ancora un prezzo resta quella giusta.',
  },
  {
    slug: 'un-porto-si-ferma-l-altro-no-e-la-turchia-cambia-fornitore',
    checkedAt: '2026-08-17T16:35:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Una dichiarazione dell’operatore del terminale o di Transneft sulla ripresa dei carichi a Sheskharis accompagnata da dati di tracciamento navale sui volumi di luglio, cioè vicino a un milione di barili al giorno, entro mercoledì 19 agosto: chiuderebbe l’unica interruzione vera e toglierebbe per intero la gamba del Mar Nero.',
        triggered: false,
        evidence:
          'Nessuna dichiarazione di ripresa da parte dell’operatore o di Transneft risulta al controllo, e nessun dato di tracciamento sui volumi. La sospensione dei carichi è al quarto giorno, contro i cinque del precedente di inizio marzo sullo stesso terminale: il confronto che l’analisi indicava come metro resta valido e il termine corre fino a mercoledì 19 agosto.',
      },
      {
        condition:
          'Importazioni turche dai porti russi del Mar Nero che risalgono sopra le 900.000 tonnellate su base mensile nella rilevazione di settembre: direbbe che le 200.000 stimate per agosto erano l’effetto momentaneo dell’interruzione e non una sostituzione dei fornitori, e cadrebbe l’argomento centrale di questa analisi.',
        triggered: false,
        evidence:
          'La condizione non è ancora eseguibile: la rilevazione mensile di settembre non esiste al 17 agosto, e l’analisi lo sapeva quando l’ha scritta. È registrata come non scattata sullo stato osservabile, non sul termine, che è il più lungo dei cinque.',
      },
      {
        condition:
          'Una dichiarazione russa o una nuova precisazione che quantifichi una riduzione dei caricamenti di greggio a Ust-Luga: rovescerebbe la correzione su cui questa lettura è costruita e riporterebbe il conto dei terminali fermi a due.',
        triggered: false,
        evidence:
          'Nessuna quantificazione russa sui caricamenti di Ust-Luga è stata pubblicata in due giorni. La correzione su cui l’analisi era costruita — l’attacco del 14 agosto ha danneggiato l’impianto di condensato senza interrompere le esportazioni di petrolio — non è stata rovesciata, e i terminali russi fermi restano uno.',
      },
      {
        condition:
          'Un Brent che chiude sopra i 92 dollari entro venerdì 21 agosto senza alcun fatto nuovo su Hormuz: direbbe che il mercato prezza il fronte del Mar Nero come una perdita di offerta vera, e la tesi dell’assorbimento per sostituzione risulterebbe sbagliata.',
        triggered: false,
        evidence:
          'Non scattata, e nessuna delle due gambe si avvicina. Il Brent è a circa 88,95 dollari dopo un massimo di 89,40, quindi oltre tre dollari sotto la soglia; e la seconda gamba è comunque venuta meno, perché un fatto nuovo su Hormuz c’è — la dichiarazione iraniana di disponibilità a una postura offensiva, con un termine di alcune settimane. La condizione chiedeva l’assenza di quel fatto e al controllo non è più eseguibile nella sua forma piena.',
      },
      {
        condition:
          'Un numero ufficiale russo — ministero o Transneft — che dichiari una riduzione dell’estrazione entro fine agosto: farebbe passare la catena dai serbatoi pieni alla produzione ridotta, che è il passaggio che questa analisi considera non ancora avvenuto.',
        triggered: false,
        evidence:
          'Nessun numero ufficiale russo sulla riduzione dell’estrazione risulta pubblicato. Il passaggio dai serbatoi pieni alla produzione ridotta, che l’analisi indicava come non ancora avvenuto, non è avvenuto nemmeno adesso. Il termine corre fino a fine agosto.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e la tesi centrale — uno shock che resta sull’offerta russa invece di diventare un prezzo mondiale, perché il compratore sostituisce invece di inseguire il barile — ha retto due giorni senza essere contraddetta da nulla. Il Brent è a 88,95 dollari, tre sotto la soglia dei 92 e sei sotto i 95 della lettura sorella dello stesso giorno. Una precisazione sulla quarta condizione, perché è quella che si è degradata invece di risolversi: chiedeva un Brent sopra i 92 dollari «senza alcun fatto nuovo su Hormuz», e un fatto nuovo su Hormuz è arrivato oggi pomeriggio con la dichiarazione iraniana sulla postura offensiva. La gamba di contesto è quindi caduta mentre la gamba di prezzo era ancora lontana, e la condizione non è più eseguibile nella sua forma piena: è il difetto delle condizioni composte già registrato in questo archivio il 12 agosto, e la regola che se ne era ricavata — scrivere la gamba di contesto come intervallo di validità e non come requisito — non è stata applicata qui.',
  },
  {
    slug: 'cinque-opzioni-sul-tavolo-e-l-unico-atto-e-indiano',
    checkedAt: '2026-08-17T17:40:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Una designazione pubblicata da OFAC o dal Tesoro che colpisca una raffineria indipendente cinese o una banca cinese entro venerdì 21 agosto: farebbe passare la questione dalle opzioni agli atti, e questa lettura andrebbe alzata di grado invece che tenuta ferma.',
        triggered: false,
        evidence:
          'Nessuna designazione di OFAC o del Tesoro contro raffinerie indipendenti cinesi o banche cinesi risulta pubblicata a trenta ore dall’analisi. Le cinque opzioni ricostruite da Reuters il 16 agosto restano opzioni. Il termine corre fino a venerdì 21 agosto.',
      },
      {
        condition:
          'Un voto della Camera sul provvedimento approvato dal Senato il 7 agosto, in un verso o nell’altro: direbbe se lo strumento dei dazi secondari ha una gamba legislativa, ed è lo stesso attrezzo su un bersaglio diverso.',
        triggered: false,
        evidence:
          'Nessun voto della Camera risulta calendarizzato o tenuto. Il provvedimento sui dazi secondari fino al 100% sui maggiori acquirenti di energia russa, approvato dal Senato 86 a 11, resta fermo dove era il 7 agosto: undici giorni senza movimento.',
      },
      {
        condition:
          'Un annuncio ufficiale cinese di ritorsione, oppure una sospensione degli acquisti di greggio iraniano dichiarata da una raffineria indipendente cinese, entro venerdì 21 agosto: sposterebbe la questione dalle opzioni americane alle reazioni, che è il piano su cui si forma davvero la componente di avversione al rischio.',
        triggered: false,
        evidence:
          'Nessun annuncio cinese di ritorsione e nessuna sospensione dichiarata da raffinerie indipendenti risultano al controllo. Il piano delle reazioni resta vuoto quanto quello dei provvedimenti, che è la simmetria su cui l’analisi aveva tenuto ferma la lettura.',
      },
      {
        condition:
          'Nuovi obiettivi di sicurezza energetica dichiarati da un altro grande importatore — Cina, Giappone o Corea del Sud — entro fine agosto: confermerebbe che la misura indiana è l’inizio di una serie e non un caso isolato, e la gamba lenta di questa lettura si irrobustirebbe.',
        triggered: false,
        evidence:
          'Nessuno fra Cina, Giappone e Corea del Sud ha dichiarato nuovi obiettivi di sicurezza energetica. Va però annotato un movimento adiacente che la condizione non cattura, perché guarda dal lato sbagliato del mercato: oggi Reuters riferisce che Saudi Aramco sta trattando consegne nave-nave al largo di Fujairah e che ADNOC ha collocato almeno quattordici milioni di barili spot a raffinerie asiatiche. Non sono importatori che si assicurano, sono venditori che aggirano; la condizione resta non scattata, ma il fenomeno che voleva misurare — la crisi che produce misure logistiche durature — si sta manifestando dall’altra parte del contratto.',
      },
      {
        condition:
          'L’assenza di qualunque provvedimento pubblicato entro venerdì 21 agosto: riporterebbe l’intera ricostruzione nella categoria degli annunci senza contenuto, dove questo archivio ha già collocato le misure di isolamento economico annunciate dal segretario al Tesoro il 14 agosto e mai pubblicate.',
        triggered: false,
        evidence:
          'Il termine è venerdì 21 agosto e non è ancora arrivato, quindi la condizione non può essere scattata al controllo del 17. Va detto però che è l’unica del gruppo costruita per verificarsi da sola: se entro venerdì non viene pubblicato nulla, scatterà senza che accada niente, e allo stato attuale nulla è stato pubblicato.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata a trenta ore dalla pubblicazione, e l’osservazione centrale ha retto in modo netto: le cinque opzioni americane contro l’Iran restano opzioni, il provvedimento del Senato resta fermo alla Camera da undici giorni, e la Cina non ha reagito perché non c’è nulla a cui reagire. Due cose meritano di essere segnalate oltre al verdetto. La prima è che la quinta condizione è costruita per scattare per assenza: se entro venerdì 21 agosto non viene pubblicato alcun provvedimento, si verificherà senza che sia successo niente, ed è oggi la condizione più vicina a farlo — un modo utile di scrivere una condizione, perché mette un termine anche all’attesa. La seconda riguarda la quarta: chiedeva un altro grande importatore che dichiarasse obiettivi di sicurezza energetica, e oggi il movimento è arrivato dal lato opposto del contratto, con Aramco che tratta consegne fuori dallo Stretto e ADNOC che colloca quattordici milioni di barili spot. La condizione guardava i compratori e a muoversi sono stati i venditori: non scatta, ma indica che il fenomeno era stato inquadrato più stretto di quanto fosse.',
  },
  {
    slug: 'il-pil-giapponese-manca-le-attese-e-lo-yen-si-rafforza',
    checkedAt: '2026-08-18T08:20:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Una comunicazione della Banca del Giappone — verbale, riassunto delle opinioni o intervento del governatore — che colleghi esplicitamente questo trimestre al percorso dei tassi entro la riunione del 17-18 settembre: farebbe passare il dato da statistica assorbita a input dichiarato di una decisione, e la lettura andrebbe alzata di grado.',
        triggered: false,
        evidence:
          'Nessuna comunicazione dell’istituto risulta pubblicata: né verbali, né riassunto delle opinioni, né interventi del governatore che colleghino il trimestre al percorso dei tassi. Il termine corre fino alla riunione del 17-18 settembre. Va però annotato che il mercato si è mosso al posto dell’istituto: nella notte fra il 17 e il 18 agosto il decennale giapponese è salito al 2,945%, massimo dal settembre 1996, e Reuters attribuisce il movimento anche alla crescente convinzione di una stretta già a settembre. È un’aspettativa di mercato, non una comunicazione, e la condizione chiedeva la seconda.',
      },
      {
        condition:
          'Uno yen che si indebolisce oltre 161 per dollaro entro venerdì 21 agosto: direbbe che il canale valutario ha finito per prezzare il dato giapponese con qualche giorno di ritardo, e cadrebbe l’osservazione centrale di questa lettura, cioè che il dato non ha trasmesso.',
        triggered: false,
        evidence:
          'Nessuna rilevazione sul cambio oltre quota 161 risulta ai controlli successivi, e gli elementi disponibili puntano nella direzione opposta: un decennale giapponese al massimo da trent’anni sull’attesa di una stretta sostiene lo yen invece di indebolirlo. Il termine corre fino a venerdì 21 agosto.',
      },
      {
        condition:
          'Un Dollar Index che risale sopra 99,855, la chiusura di giovedì 13 agosto: toglierebbe la gamba americana che oggi spiega il movimento del cambio, e allora il trimestre giapponese tornerebbe a essere la causa candidata di quello che si vede sullo yen.',
        triggered: false,
        evidence:
          'Il Dollar Index si è mosso nella direzione opposta per tutta la giornata del 17 agosto, fino a 99,42 e poi 99,51 in chiusura, cioè al minimo da giugno, ed è risalito soltanto a circa 99,60 il 18 agosto. Resta oltre due decimi sotto la soglia, e la gamba americana che spiega il cambio non è stata tolta.',
      },
      {
        condition:
          'Una revisione della prima stima del PIL del secondo trimestre sopra il più 2,0% annualizzato atteso: il dato di oggi è preliminare, e una revisione che lo riporti sul consenso cancellerebbe la premessa di tutta questa analisi.',
        triggered: false,
        evidence:
          'Nessuna revisione della prima stima è stata pubblicata: il dato resta il più 1,1% annualizzato del preliminare, contro il più 2,0% atteso. La premessa dell’analisi regge.',
      },
      {
        condition:
          'Una probabilità di pausa della Federal Reserve a settembre che scende sotto il 60% entro venerdì 21 agosto: sposterebbe il peso dal canale americano a quello giapponese, che è l’opposto di quanto descritto qui, e il cambio tornerebbe a essere leggibile dal lato di Tokyo.',
        triggered: false,
        evidence:
          'La probabilità di una pausa è attorno al 65% il 18 agosto, cioè circa il 35% a un rialzo, e resta quindi cinque punti sopra la soglia. Il margine si è però assottigliato rispetto al 69% circa di lunedì mattina, e il termine corre fino a venerdì 21 agosto: è la condizione più vicina a scattare del gruppo.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata a poco più di ventiquattro ore, e l’osservazione centrale — un dato giapponese che non trasmette al cambio perché il mercato pesa di più il quadro americano — ha retto: il Dollar Index è sceso a 99,42 e ha chiuso a 99,51, minimo da giugno, quindi il movimento sul cambio ha continuato a spiegarsi dal lato di Washington. C’è però un elemento che l’analisi non aveva previsto e che va registrato perché ne allarga il tema invece di smentirlo: nella notte il decennale giapponese è salito al 2,945%, massimo dal settembre 1996, sull’attesa di una stretta della Banca del Giappone già a settembre. Tokyo ha quindi cominciato a contare, ma attraverso i rendimenti invece che attraverso il cambio — cioè per una via che questa lettura non guardava. La prima condizione chiedeva una comunicazione dell’istituto e continua a non essere soddisfatta, perché a muoversi è stata l’aspettativa di mercato e non la banca centrale; la distinzione regge, ma la prossima verifica dovrà guardare anche la curva giapponese e non solo il cambio.',
  },
  {
    slug: 'teheran-mette-una-scadenza-e-il-brent-resta-sotto-i-90',
    checkedAt: '2026-08-18T08:20:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Un atto materiale attribuito all’Iran — un attacco a una nave o a un’infrastruttura energetica riportato da Reuters o da un’agenzia ufficiale — entro venerdì 21 agosto: trasformerebbe la posizione dichiarata in un vincolo, e la classificazione data qui, cioè una preferenza che non prezza, risulterebbe sbagliata.',
        triggered: false,
        evidence:
          'Un atto materiale c’è stato, ma manca esattamente la parte che la condizione richiedeva. La mattina del 18 agosto UK Maritime Trade Operations segnala una nave colpita da un proiettile non identificato in uscita dallo Stretto, con danni alla sala macchine e un membro dell’equipaggio coinvolto: il fatto è riportato da un’autorità, quindi soddisfa la prima metà, ma il responsabile non è identificato e nessun governo lo ha attribuito. La rivendicazione houthi di lanci contro una nave militare saudita è di un altro attore, è dichiarata e non verificata. La condizione chiedeva un atto «attribuito all’Iran» e al controllo non lo è: resta non scattata, ed è la distinzione fra un evento di sicurezza della navigazione e un atto di guerra con una controparte.',
      },
      {
        condition:
          'Un Brent che chiude sopra gli 89,40 dollari del massimo toccato oggi entro venerdì 21 agosto: direbbe che il mercato del greggio ha cominciato a prezzare la minaccia, cioè l’opposto dell’osservazione centrale di questa analisi.',
        triggered: true,
        evidence:
          'Scattata in poche ore e con ampio margine: il Brent ha chiuso lunedì 17 agosto a 90,87 dollari con più 2,35, cioè un dollaro e mezzo sopra la soglia, e il 18 agosto ha esteso a 91,49 con il WTI a 85,25. Reuters collega esplicitamente il rialzo allo stallo della diplomazia, ai transiti ridottissimi e alle minacce iraniane: è precisamente il mercato del greggio che comincia a prezzare la minaccia, cioè quello che l’analisi sosteneva non stesse accadendo.',
      },
      {
        condition:
          'Un oro che chiude sotto i 4.388 dollari della rilevazione su cui questa lettura è scritta entro mercoledì 19 agosto: direbbe che nemmeno una minaccia esplicita accompagnata da un dollaro sui minimi di due mesi produce domanda di protezione, e la direzione andrebbe portata a neutrale.',
        triggered: false,
        evidence:
          'Non scattata, ma per tre dollari e per un giorno. L’oro ha chiuso il 17 agosto a 4.421,94 con più 1,05% ed è sceso il 18 agosto a 4.391,14 con meno 0,5%, quindi 3,14 dollari sopra la soglia, e la chiusura di mercoledì 19 non è ancora avvenuta. È la condizione da guardare al prossimo controllo.',
      },
      {
        condition:
          'Una probabilità di rialzo a settembre sopra il 33%, cioè sopra il limite superiore dell’intervallo rilevato oggi, entro venerdì 21 agosto: direbbe che la distanza fra il consenso degli economisti e il prezzo di mercato si sta chiudendo dal lato sbagliato, e cadrebbe la gamba misurabile di questa lettura.',
        triggered: true,
        evidence:
          'Scattata il 18 agosto: la probabilità di un rialzo a settembre è attorno al 35%, cioè circa il 65% di pausa, contro il 52,2% di rialzo di una settimana fa. Il numero ha superato il 33% dichiarato come limite dopo essere rimasto fermo attorno al 31% alla chiusura del 17 agosto. La distanza fra il sondaggio degli economisti, quasi unanime sulla pausa per il resto del 2026, e il prezzo di mercato si sta chiudendo dal lato che toglie sostegno al metallo.',
      },
      {
        condition:
          'Una smentita o un ridimensionamento del termine da parte del ministero degli Esteri iraniano o dell’agenzia ufficiale entro venerdì 21 agosto: direbbe che la scadenza era retorica, e verrebbe meno l’unico elemento per cui questa dichiarazione è stata trattata diversamente dalle precedenti.',
        triggered: false,
        evidence:
          'Nessuna smentita né ridimensionamento: Teheran si è mossa nella direzione opposta, annunciando il passaggio a una postura militare «pienamente offensiva», mentre l’intesa temporanea è arrivata a scadenza senza progressi e Washington ne ha escluso l’estensione. Il termine dichiarato non è stato ritirato, è stato superato dai fatti.',
      },
    ],
    what: 'Due condizioni su cinque sono scattate, ed è il primo verdetto parziale di questa fase dopo una lunga serie di conferme. Entrambe colpiscono l’osservazione centrale, non un dettaglio: l’analisi sosteneva che la minaccia iraniana fosse una preferenza dichiarata che il mercato non stava prezzando, e in ventiquattro ore il Brent è passato da 88,95 a 90,87 in chiusura e poi a 91,49, mentre la probabilità di un rialzo a settembre è salita dal 31% al 35% circa. Il greggio ha cominciato a prezzare esattamente quello che l’analisi diceva non stesse prezzando. Merita però di essere letta anche la prima condizione, che non è scattata: un atto materiale c’è stato — una nave colpita in uscita dallo Stretto, segnalata da un’autorità marittima — ma senza attribuzione, e la condizione chiedeva un atto «attribuito all’Iran». La cautela sulla fonte, che al momento della scrittura sembrava una prudenza formale, si è rivelata la parte più solida del testo: la minaccia iraniana resta una posizione dichiarata anche adesso che una nave è stata colpita, perché nessuno ha detto chi l’abbia colpita.',
    lesson:
      'La classificazione del fatto ha retto e la previsione sul prezzo no, e le due cose vanno tenute separate perché insegnano l’opposto. Trattare la minaccia iraniana come preferenza dichiarata invece che come vincolo era giusto, e lo è ancora: a ventiquattro ore di distanza nessuno ha attribuito l’attacco alla nave, e il conteggio dei transiti si è mosso da otto a sei senza che una sola dichiarazione lo spostasse. Quello che era sbagliato è la deduzione successiva, cioè che una preferenza non prezzata dal mercato continuasse a non essere prezzata. Il greggio non aspetta l’attribuzione per muoversi: prezza la probabilità di un’interruzione, e quella probabilità sale anche con un attore ignoto. La regola da correggere non è «distinguere il dichiarato dal misurato» — quella funziona — ma la scorciatoia che ne era stata tratta, cioè che ciò che è dichiarato non entri nel prezzo. Entra, e passa dal mercato che quota il rischio invece che dal mercato che quota il rifugio.',
  },
  {
    slug: 'aramco-consegna-fuori-dallo-stretto-e-la-curva-non-si-muove',
    checkedAt: '2026-08-18T08:20:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition:
          'Un biennale che si porta sopra il 4,218%, cioè sopra il massimo del 12 agosto, entro venerdì 21 agosto: direbbe che le due sorprese hanno riprezzato la Fed con ritardo e che leggere il rifiuto del prezzo come informazione era sbagliato.',
        triggered: false,
        evidence:
          'Il biennale resta attorno al 4,16% nelle rilevazioni del 17 e del 18 agosto, quindi oltre cinque punti base sotto la soglia. La lettura del rifiuto del prezzo regge sulla scadenza che prezza la banca centrale: le due diffusioni sopra le attese non l’hanno riprezzata nemmeno con un giorno di ritardo, e la tensione è rimasta confinata alla parte lunga.',
      },
      {
        condition:
          'Una conferma o una smentita ufficiale di Saudi Aramco sui trasferimenti nave-nave al largo di Fujairah entro venerdì 21 agosto: oggi il fatto centrale è un negoziato riferito da un’agenzia, e una presa di posizione della compagnia lo sposterebbe in una delle due categorie in cui adesso non sta.',
        triggered: false,
        evidence:
          'Nessuna presa di posizione della compagnia risulta pubblicata. Il negoziato sulle consegne al largo di Fujairah resta quello che era al momento della scrittura: un fatto riferito da un’agenzia e non dichiarato dalla società. Il termine corre fino a venerdì 21 agosto.',
      },
      {
        condition:
          'Un Dollar Index che chiude sopra 99,935, cioè sopra il massimo del 13 agosto, entro venerdì 21 agosto: toglierebbe il sostegno valutario che oggi compensa i due dati sopra le attese, e la lettura andrebbe portata a neutrale.',
        triggered: false,
        evidence:
          'Il Dollar Index ha chiuso il 17 agosto a 99,51, minimo da giugno, ed è risalito soltanto a circa 99,60 il 18 agosto: resta oltre tre decimi sotto la soglia. Il sostegno valutario non è stato tolto, ed è la ragione per cui il metallo ha assorbito la parte lunga più a lungo di quanto la lettura si aspettasse.',
      },
      {
        condition:
          'Un Brent che chiude sopra gli 89,68 dollari del massimo di oggi entro venerdì 21 agosto: direbbe che la valvola descritta qui non sta contenendo il prezzo quanto questa analisi sostiene, e la gamba energetica del ragionamento cadrebbe.',
        triggered: true,
        evidence:
          'Scattata nel giro di poche ore: il Brent ha chiuso lunedì 17 agosto a 90,87 dollari, cioè un dollaro e diciannove centesimi sopra la soglia, e il 18 agosto ha esteso a 91,49 con un WTI a 85,25. La valvola logistica descritta dall’analisi — consegne nave-nave al largo di Fujairah e gara ADNOC — non ha contenuto il prezzo: lo ha contenuto finché la diplomazia non è arrivata a scadenza, e non oltre.',
      },
      {
        condition:
          'Un dato ufficiale di esportazioni saudite o emiratine di agosto che scenda in proporzione al crollo dei transiti, in uscita entro fine settembre: direbbe che il conteggio dei passaggi stava misurando correttamente anche i barili, e che la distinzione proposta qui fra traffico e scarsità non serviva.',
        triggered: false,
        evidence:
          'Nessun dato ufficiale di esportazioni di agosto è disponibile: il termine corre fino a fine settembre. Il conteggio dei transiti è intanto sceso ancora, a sei navi lunedì 17 agosto contro una media a dieci giorni di undici, e per la prima volta senza alcuna petroliera grande né metaniera — un dettaglio che va nella direzione opposta alla tesi della valvola, perché sono esattamente le navi che portano i barili.',
      },
    ],
    what: 'Una condizione su cinque è scattata, ed è quella che l’analisi indicava come la caduta della propria gamba energetica: il Brent ha chiuso a 90,87 dollari lo stesso giorno della pubblicazione, un dollaro e diciannove centesimi sopra la soglia dichiarata, e il giorno dopo ha esteso a 91,49. La tesi centrale era che le consegne fuori dallo Stretto contenessero il prezzo; il prezzo non è stato contenuto. Va detto però che cosa ha retto, perché è la parte più interessante. La distinzione fra traffico e scarsità non è stata smentita da nulla, e anzi ha ricevuto una conferma indiretta scomoda: lunedì sono transitate sei navi e nessuna era una petroliera grande o una metaniera, il che significa che il conteggio complessivo dei passaggi e quello dei barili si stanno separando ancora di più. E la lettura sul rifiuto del prezzo dopo i due dati sopra le attese ha retto per intero: il biennale è rimasto attorno al 4,16% e il dollaro sotto quota 99,94. L’analisi aveva quindi ragione su come si misura e torto su quanto sarebbe durato.',
  },
  {
    slug: 'i-4400-passano-con-il-decennale-al-4-70-era-la-prova',
    checkedAt: '2026-08-18T08:20:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition:
          'Un oro che chiude mercoledì 19 agosto sotto i 4.409,94 dollari della prima rilevazione di questo controllo: direbbe che il superamento è stato una punta come le due di stamattina e non una tenuta, e la direzione andrebbe riportata a neutrale con inclinazione rialzista.',
        triggered: false,
        evidence:
          'Non scattata soltanto perché il termine non è arrivato, e va detto così invece di registrarla come una tenuta. Il metallo ha chiuso il 17 agosto a 4.421,94, quindi sopra il livello, ma la mattina del 18 agosto è a 4.391,14 con meno 0,5%: diciotto dollari e ottanta sotto la soglia, con un giorno intero ancora davanti prima della chiusura di mercoledì. La condizione è la più vicina a scattare del gruppo e al momento il prezzo sta dalla parte sbagliata.',
      },
      {
        condition:
          'Un decennale che si porta sopra il 4,75% entro venerdì 21 agosto: è il livello oltre il quale il costo-opportunità smette di essere assorbibile con il solo sostegno del cambio, e la forza andrebbe riportata a bassa.',
        triggered: false,
        evidence:
          'Il decennale è salito al 4,712% in chiusura il 17 agosto e sta attorno al 4,724-4,728% il 18: si è avvicinato di due punti base alla soglia senza raggiungerla, e mancano poco più di due centesimi di punto. Il termine corre fino a venerdì 21 agosto.',
      },
      {
        condition:
          'Un trentennale che scende sotto il 5,213% della chiusura del 13 agosto entro venerdì 21 agosto: toglierebbe il fatto stesso su cui la forza relativa è misurata, perché l’oro non starebbe più assorbendo alcun costo-opportunità eccezionale, e questa lettura perderebbe il suo argomento invece di essere smentita.',
        triggered: false,
        evidence:
          'Andata nella direzione opposta e di parecchio: il trentennale ha chiuso fra il 5,295% e il 5,310% il 17 agosto e ha toccato il 5,321% il 18, massimo dal giugno 2007. Il costo-opportunità eccezionale su cui la lettura poggia non solo non è rientrato, è aumentato di oltre un decimo di punto.',
      },
      {
        condition:
          'Un dato pubblicato sugli acquisti ufficiali di oro di agosto in calo rispetto alle 640.000 once di luglio, in uscita all’inizio di settembre: smentirebbe l’inferenza degli analisti sul ritorno della domanda istituzionale, che è la sola spiegazione candidata oggi disponibile per chi stia comprando a questi livelli.',
        triggered: false,
        evidence:
          'Nessun dato sugli acquisti ufficiali di agosto è disponibile: la diffusione è attesa all’inizio di settembre. L’inferenza degli analisti sul ritorno della domanda istituzionale resta quindi né confermata né smentita, come al momento della scrittura.',
      },
      {
        condition:
          'Una rilevazione settimanale dell’agenzia statunitense per l’energia che mostri lavorazioni delle raffinerie in calo entro fine agosto: direbbe che i colloqui annunciati dal segretario all’Energia non hanno prodotto offerta, e la gamba che alleggerisce il canale dell’inflazione andrebbe tolta dal conto.',
        triggered: false,
        evidence:
          'Nessuna rilevazione settimanale successiva è disponibile al controllo. Va però annotato un elemento che arriva da un’altra fonte e che pesa sulla stessa gamba: l’agenzia internazionale per l’energia stima la capacità di raffinazione mediorientale ancora 2,2 milioni di barili al giorno sotto i livelli precedenti alla guerra, con quella russa vicina ai minimi ventennali. Il vincolo sulla raffinazione è quindi più stretto di quanto i colloqui annunciati possano allentare in tempi brevi.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata, e questo verdetto è tecnicamente corretto e sostanzialmente fuorviante: va letto insieme al prezzo, altrimenti dice il contrario di quello che è successo. L’analisi aveva alzato la direzione a rialzista con l’oro a 4.426,52 dollari; tredici ore dopo il metallo è a 4.391,14, cioè trentacinque dollari più in basso, e ha perso i 4.400 che aveva appena conquistato. Nessuna condizione lo registra perché tutte e cinque hanno termini che scadono da mercoledì in poi. La più vicina è la prima, che chiede una chiusura di mercoledì sotto i 4.409,94: il prezzo è già diciotto dollari sotto quel livello, ma la chiusura non è arrivata. Le altre due di mercato si sono mosse entrambe contro la lettura senza raggiungere le soglie — decennale dal 4,70% al 4,728% contro una soglia al 4,75%, trentennale dal 5,29% al 5,321% mentre la condizione chiedeva un rientro sotto il 5,213%.',
    lesson:
      'Una lettura di orizzonte breve non può avere la propria condizione principale ancorata a una chiusura di due giorni dopo: muore prima che la condizione possa parlare. È l’errore commesso qui, ed è visibile nel confronto fra i due campi dell’analisi stessa — orizzonte dichiarato «breve», cioè prossimi minuti o ore, e prima invalidazione fissata alla chiusura di mercoledì. Il risultato è un «confermata» che accompagna un metallo sceso di trentacinque dollari. Questo archivio aveva già registrato il problema in forma generale — una condizione che matura dopo la lettura che dovrebbe misurare — e non lo ha applicato quando contava. La regola operativa è semplice e va usata: il termine di una condizione non deve superare l’orizzonte della lettura che la dichiara. Per un breve significa la chiusura della stessa seduta o la rilevazione successiva, non due giorni.',
  },
];
