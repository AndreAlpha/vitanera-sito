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
];
