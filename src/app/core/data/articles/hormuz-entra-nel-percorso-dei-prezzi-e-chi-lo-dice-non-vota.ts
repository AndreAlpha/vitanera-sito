/**
 * hormuz-entra-nel-percorso-dei-prezzi-e-chi-lo-dice-non-vota
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const hormuzEntraNelPercorsoDeiPrezzi: Article = {
  slug: 'hormuz-entra-nel-percorso-dei-prezzi-e-chi-lo-dice-non-vota',
  categories: ['fed', 'medio-oriente', 'mercato-immobiliare', 'oro'],
  title: 'Hormuz entra nel percorso dei prezzi, e chi lo dice non vota',
  kicker: 'Fed · Una funzione di reazione che dipende da altri',
  dek:
    'La presidente ad interim della Fed di Atlanta dice che il percorso futuro dell’inflazione dipenderà ' +
    'molto dal Medio Oriente. Nella stessa giornata Teheran ribadisce che lo Stretto resta chiuso finché ' +
    'gli Stati Uniti non accettano le sue condizioni. Le due frasi vanno lette insieme.',
  publishedAt: '2026-08-11T19:25:00+02:00',
  author: AUTHOR,
  readingMinutes: 8,
  tags: ['Venable', 'Voto', 'Vendite di case', 'ADP settimanale', 'Asta triennale'],
  instruments: ['XAU/USD', 'Brent', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'bassa',
    regime:
      'Tre informazioni nuove e nessuna che sposti il numero che questo archivio ha dichiarato tre ore fa ' +
      'come misura di riferimento. Le vendite di case esistenti scendono per il secondo mese di fila, a ' +
      '4,06 milioni annualizzati da 4,13 con meno 1,7%, ma restano appena sopra il consenso di 4,05: ' +
      'attività debole senza sorpresa. L’occupazione privata settimanale rilevata da ADP rallenta a più ' +
      '8.300 da più 11.000, su una serie molto volatile e senza consenso pubblicato. E dalla Fed di ' +
      'Atlanta arriva una presa di posizione restrittiva sull’inflazione da una presidente ad interim che ' +
      'quest’anno non vota al FOMC. Il biennale, che è la misura scelta, non si è mosso; l’oro sta ' +
      'nell’area 4.380-4.390 dollari, il Dollar Index a 99,81 e la probabilità di un rialzo a settembre al ' +
      '48%. La direzione sui giorni resta quindi dov’era, e ci resta per la regola scritta prima e non ' +
      'per assenza di notizie.',
    horizon: 'medio',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sul fondamento principale, che è una diffusione ufficiale confermata da Reuters e ' +
    'dall’associazione nazionale degli agenti immobiliari, e sulle dichiarazioni della Fed di Atlanta, ' +
    'riportate da Reuters. Più bassa su una parte: la rilevazione settimanale ADP arriva da un ' +
    'aggregatore di calendario, non ha un consenso pubblicato e appartiene a una serie molto più volatile ' +
    'di quella mensile, quindi è citata come indizio e non come misura. Media sulla lettura, e la ragione ' +
    'è dichiarata: sostenere che una dichiarazione senza voto pesi meno di una con voto è un criterio di ' +
    'questo archivio applicato a un caso nuovo, non una regolarità misurata. Il risultato dell’asta a tre ' +
    'anni non compare qui perché al momento della scrittura non era pubblicato, e un numero non ancora ' +
    'uscito non si stima.',
  takeaways: [
    'Le vendite di case esistenti americane di luglio scendono per il secondo mese consecutivo a 4,06 milioni annualizzati da 4,13, con meno 1,7% mensile, ma restano appena sopra il consenso di 4,05 milioni. Prezzo mediano a 434.100 dollari, più 2% annuo; scorte in calo dell’1,9%.',
    'La presidente ad interim della Fed di Atlanta, Cheryl Venable, dichiara che l’inflazione resta troppo alta e che il percorso futuro dei prezzi dipenderà molto dagli sviluppi in Medio Oriente: una soluzione del conflitto ristabilirebbe i flussi di greggio e ridurrebbe le pressioni, un conflitto prolungato farebbe l’opposto.',
    'Lo stesso giorno l’Iran ribadisce ufficialmente che lo Stretto resta chiuso finché gli Stati Uniti non soddisfano le sue condizioni, fra cui la fine della guerra e lo sblocco di asset iraniani. Le due dichiarazioni descrivono la stessa variabile da due lati opposti del tavolo.',
    'Venable non vota al FOMC quest’anno ed è presidente ad interim: sulla scala usata in questo archivio è la voce più leggera fra quelle contate finora, e non equivale a una richiesta esplicita di rialzo.',
    'L’occupazione privata settimanale rilevata da ADP rallenta a più 8.300 da più 11.000. Nessuno dei tre elementi ha prodotto una reazione distinguibile: l’oro resta fra 4.380 e 4.390 dollari, il Dollar Index a 99,81, la probabilità di un rialzo a settembre al 48%.',
  ],
  invalidation: [
    'Un biennale che si porta sopra il 4,25%: è la misura dichiarata in questo archivio tre ore prima di questa analisi come quella che decide la direzione sui giorni, e la sua caduta direbbe che il quadro si è mosso mentre questa lettura sosteneva il contrario.',
    'Un indice dei prezzi mercoledì 12 agosto sopra il 3,4% annuo sul dato principale, o sopra più 0,2% mensile su quello di fondo: la parte di inflazione che Venable attribuisce al Medio Oriente arriverebbe nel dato, e la prudenza di questa lettura risulterebbe eccessiva nel verso sbagliato.',
    'Un oro sopra i 4.435 dollari o sotto i 4.357 entro la chiusura di mercoledì, cioè fuori dall’intervallo in cui il metallo si è mosso in questa giornata: direbbe che una delle tre notizie contava più di quanto le viene riconosciuto qui.',
    'Un’asta a tre anni con un rendimento di aggiudicazione superiore al 4,30%, contro il 4,179% della precedente: sarebbe una richiesta di premio sulla scadenza che prezza la Fed, e contraddirebbe la lettura di un biennale immobile.',
    'Una nuova dichiarazione restrittiva da un membro con diritto di voto al FOMC entro mercoledì: renderebbe irrilevante la distinzione fra voci che votano e voci che non votano su cui si regge una parte di questa analisi.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto, 14:30 italiane',
    title: 'Indice dei prezzi al consumo statunitense di luglio',
    detail:
      'Il consenso riportato è di più 0,1% mensile e più 3,4% annuo sul dato principale, più 0,2% mensile e più 2,5% annuo su quello di fondo. È il dato che mette alla prova proprio la frase della Fed di Atlanta: se la componente energetica comincia a farsi vedere, il canale Medio Oriente-prezzi smette di essere una previsione e diventa una misura. Alle 19:00 dello stesso giorno l’asta del decennale, giovedì quella del trentennale, e giovedì alle 14:30 i prezzi alla produzione.',
  },
  sources: [
    { outlet: 'Reuters' },
    { outlet: 'National Association of Realtors', title: 'Existing Home Sales, luglio' },
    { outlet: 'Kitco' },
    { outlet: 'Forex Factory', title: 'ADP Weekly Employment Change' },
    { outlet: 'U.S. Department of the Treasury', title: 'Calendario delle aste' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Due frasi dette nella stessa giornata da due parti che non si parlano. La prima è della presidente ad interim della Fed di Atlanta, Cheryl Venable: l’inflazione resta troppo alta, e il percorso futuro dei prezzi dipenderà molto dagli sviluppi imprevedibili in Medio Oriente — una soluzione del conflitto ristabilirebbe i flussi di greggio e ridurrebbe le pressioni, un conflitto prolungato farebbe l’opposto. La seconda è dell’Iran, che ribadisce ufficialmente che lo Stretto resta chiuso finché gli Stati Uniti non soddisfano le sue condizioni, fra cui la fine della guerra e lo sblocco di asset iraniani. Messe una accanto all’altra dicono una cosa sola: una parte del percorso dell’inflazione americana è nelle mani di chi ha appena ripetuto che non intende muoversi.',
    },
    {
      kind: 'stats',
      title: 'Che cosa è uscito, e che cosa si è mosso',
      caption:
        'Diffusioni e rilevazioni della giornata dell’11 agosto; i prezzi non sono chiusure ufficiali né quotazioni in tempo reale.',
      items: [
        {
          label: 'Vendite case esistenti',
          value: '4,06 mln',
          tone: 'bull',
          note: 'Annualizzate, contro 4,05 attese e 4,13 di giugno: meno 1,7% mensile, secondo calo di fila',
        },
        {
          label: 'Prezzo mediano',
          value: '434.100 $',
          tone: 'bear',
          note: 'Più 2% annuo, con scorte in calo dell’1,9%: l’attività scende, il prezzo no',
        },
        {
          label: 'ADP settimanale',
          value: '+8.300',
          tone: 'bull',
          note: 'Da più 11.000; serie molto volatile e senza consenso pubblicato',
        },
        {
          label: 'XAU/USD',
          value: '4.380-4.390 $',
          tone: 'warn',
          note: 'Circa 4.385 dopo la diffusione: nessuna reazione attribuibile al dato',
        },
        {
          label: 'Rialzo Fed a settembre',
          value: '≈ 48%',
          tone: 'warn',
          note: 'Invariato rispetto al controllo delle 17:15',
        },
        {
          label: 'Dollar Index',
          value: '≈ 99,81',
          tone: 'bull',
          note: 'Fermo per la quinta rilevazione consecutiva, sotto quota 100',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'La seconda banca centrale che nomina il quadrante',
      anchor: 'seconda-banca-centrale',
    },
    {
      kind: 'paragraph',
      text: 'Il 10 agosto questo archivio aveva registrato una prima volta: il riassunto delle opinioni della Banca del Giappone citava espressamente il petrolio e il Medio Oriente fra le fonti di pressione sui prezzi, e quel giorno era stato scritto che il canale energia-tassi passava dalle deduzioni alle cose messe per iscritto da chi decide. La dichiarazione di Venable è la seconda occorrenza in due giorni, e questa volta viene dalla banca centrale che conta davvero per l’oro, perché è quella che fissa il tasso nella valuta in cui il metallo è quotato.',
    },
    {
      kind: 'paragraph',
      text: 'La catena che descrive è, parola per parola, quella pubblicata qui dal 5 agosto: greggio più caro, pressioni sui prezzi più durature, politica monetaria costretta a restare stretta. Vederla ripetuta da chi siede dentro il sistema che decide non la rende vera — la catena era già verificabile o non lo era prima — ma cambia una cosa concreta: se la funzione di reazione della Fed contiene esplicitamente Hormuz, allora ogni notizia sullo Stretto smette di essere solo una questione di premio energetico e diventa anche una questione di tassi.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'La seconda volta pesa meno della prima, e va detto',
      text: 'C’è una tentazione, quando una tesi riceve conferme, di contarle e basta. Ma le due occorrenze non sono confrontabili. Quella del 10 agosto è un documento ufficiale del comitato che decide, pubblicato dopo la riunione; questa è una dichiarazione di una presidente ad interim che quest’anno non vota al FOMC e che non ha indicato se preferisca un rialzo alla prossima riunione. Sulla scala usata in questo archivio dal 6 agosto — una dichiarazione è una preferenza, un voto è un atto — è la voce più leggera fra tutte quelle contate finora. Sommarla alle altre sarebbe contare due cose diverse come se fossero la stessa.',
    },
    {
      kind: 'heading',
      text: 'Il dato di cui non si è accorto nessuno',
      anchor: 'dato-housing',
    },
    {
      kind: 'paragraph',
      text: 'Le vendite di case esistenti di luglio scendono a 4,06 milioni annualizzati da 4,13, meno 1,7% sul mese e secondo calo consecutivo. Il consenso però era 4,05, quindi il dato è tecnicamente una sorpresa positiva di un centesimo di milione: attività debole, ma non più debole di quanto ci si aspettasse. È il motivo per cui non c’è stata reazione — l’oro è rimasto fra 4.380 e 4.390 dollari, intorno a 4.385 secondo Kitco — e non un ritardo di trasmissione.',
    },
    {
      kind: 'paragraph',
      text: 'Vale comunque la pena registrarlo, e per una ragione che questo archivio ha già scritto: un effetto atteso che non si presenta va registrato, non spiegato con il ritardo. Un dato che esce e non muove niente è un’informazione sul mercato quanto un dato che lo muove — dice che quella variabile è già nel prezzo, o che nessuno la sta guardando. Qui è la prima delle due: il mercato immobiliare americano è debole da mesi e la sua debolezza non è più notizia.',
    },
    {
      kind: 'paragraph',
      text: 'Il dettaglio che merita più attenzione del numero di copertina è la composizione. Le transazioni scendono, ma il prezzo mediano sale del 2% annuo a 434.100 dollari e le scorte calano dell’1,9%. Non è un mercato che si sgonfia, è un mercato che si blocca: chi ha un mutuo a tasso basso non vende, quindi l’offerta si ritira insieme alla domanda e il prezzo resta su. Per la banca centrale è la configurazione più scomoda, perché il costo del denaro alto produce meno attività senza produrre meno inflazione — che è esattamente l’opposto di quello per cui viene usato.',
    },
    {
      kind: 'heading',
      text: 'Il numero che decide non si è mosso',
      anchor: 'numero-che-decide',
    },
    {
      kind: 'paragraph',
      text: 'Tre ore prima di questa analisi, in questo archivio è stata scritta una regola: la probabilità di un rialzo a settembre ha attraversato la soglia del 50% quattro volte in quattro giorni e due volte nei due sensi in quarantotto ore, quindi non misura un cambio di regime, e la misura che decide la direzione sui giorni è la scadenza a due anni. È la prima occasione in cui quella regola viene messa alla prova, e la prova consiste nel non fare niente: il biennale non si è mosso, quindi la direzione non si muove.',
    },
    {
      kind: 'paragraph',
      text: 'Conta perché le tre notizie di oggi tirano in versi diversi e sarebbe stato facile pesarle a piacere. Due sono marginalmente favorevoli all’oro — attività immobiliare debole, occupazione privata settimanale in decelerazione — e una è contraria, la presa di posizione sull’inflazione. Una regola scritta prima serve proprio nei casi come questo, dove il saldo delle notizie è una questione di giudizio e il numero no.',
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Un risultato che non viene stimato',
      text: 'L’asta da 58 miliardi di dollari di titoli a tre anni era in programma per le 19:00 italiane, ma al momento della scrittura il risultato competitivo non risulta ancora pubblicato: mancano rendimento di aggiudicazione, rapporto fra domanda e offerta e ripartizione fra le categorie di acquirenti. Non viene quindi considerata uscita, e nessuno di quei numeri viene ipotizzato. Il riferimento per il confronto è il 4,179% della precedente. Conta più di un’asta qualunque perché è la scadenza su cui questa lettura ha appena appoggiato la propria misura di riferimento.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Tre notizie, nessun repricing',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Le vendite di case esistenti scendono per il secondo mese di fila: la parte dell’economia americana più sensibile ai tassi continua a raffreddarsi.',
          'L’occupazione privata settimanale rallenta a più 8.300 da più 11.000, in linea con il tema di raffreddamento del lavoro emerso dal rapporto del 7 agosto.',
          'La probabilità di un rialzo a settembre resta al 48%, sotto la metà, e il Dollar Index a 99,81 per la quinta rilevazione consecutiva.',
          'Venable stessa descrive una contrazione dell’offerta di lavoro, che è la parte del rapporto di luglio meno commentata e la più difficile da leggere come forza.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Una nuova voce della Fed dichiara che l’inflazione resta troppo alta: si aggiunge a un elenco che questo archivio conta dal 3 agosto.',
          'Il prezzo mediano delle case sale del 2% annuo mentre le transazioni scendono: attività in meno senza inflazione in meno.',
          'L’Iran ribadisce ufficialmente le condizioni per riaprire lo Stretto, e la fine della guerra non è una formula che un tavolo tecnico chiude.',
          'Il Brent resta fra 87 e 88 dollari, quindi ampiamente sopra la tacca degli 84 sulla serie usata in questo archivio.',
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
      text: 'La lettura sui giorni resta neutrale con forza bassa, dov’era. Non è un non-aggiornamento: è l’applicazione di un criterio dichiarato in anticipo a una giornata in cui il saldo delle notizie era discutibile e la misura di riferimento no. Il biennale non si è mosso, e finché non si muove il resto è materiale per capire, non per decidere.',
    },
    {
      kind: 'paragraph',
      text: 'La cosa che resta oltre la giornata è invece la prima, e non riguarda il prezzo di oggi. Se la funzione di reazione della banca centrale americana contiene esplicitamente lo Stretto di Hormuz, allora il conteggio dei transiti — undici navi al giorno contro le 130-140 di prima del conflitto, tre milioni di barili contro 4,4 — smette di essere solo il termometro del premio energetico e diventa anche un dato di politica monetaria. È un motivo in più per continuare a contarli, ed è una connessione che fino a ieri esisteva soltanto in questo archivio.',
    },
    {
      kind: 'paragraph',
      text: 'Domani alle 14:30 il numero che mette alla prova esattamente quella frase. Se la componente energetica dell’indice dei prezzi comincia a farsi vedere, il canale che Venable descrive smette di essere una previsione e diventa una misura; se non si vede, resta una spiegazione plausibile per un’inflazione che ha altre cause. In mezzo c’è l’asta di stasera, il cui risultato non è ancora pubblicato e che non viene indovinato.',
    },
    {
      kind: 'note',
      text: 'I dati sulle vendite di case esistenti sono attribuiti nel testo ricevuto a Reuters e all’associazione nazionale degli agenti immobiliari e sono riportati come forniti; questo archivio non ha una serie storica propria su quell’indicatore con cui confrontarli. La rilevazione settimanale ADP proviene da un aggregatore di calendario, non ha un consenso pubblicato ed è una serie molto più volatile di quella mensile della stessa società. Le dichiarazioni di Cheryl Venable sono riportate da Reuters; è presidente ad interim della Federal Reserve di Atlanta e non ha diritto di voto al FOMC quest’anno. I livelli di prezzo citati sono rilevazioni della giornata dell’11 agosto e non sono chiusure ufficiali: servono a rendere verificabile il ragionamento e non sono obiettivi. Il risultato dell’asta a tre anni non era pubblicato al momento della scrittura e non viene stimato.',
    },
  ],
};
