import { BiasDirection, Horizon, Level } from '../models/article.model';

/**
 * Una delle tre letture della panoramica.
 *
 * Sono tre perché l'oro può salire nelle prossime ore e restare debole nel mese,
 * e una lettura sola costringe a scegliere quale delle due dire. Separandole,
 * una lettura intraday che si ribalta tre volte in un giorno non cancella più la
 * lettura di fondo, e chi legge vede subito su quale arco di tempo sta guardando.
 */
export interface SignalReading {
  readonly horizon: Horizon;
  readonly direction: BiasDirection;
  readonly strength: Level;
  /** Una riga sul perché: il meccanismo, non il prezzo. */
  readonly regime: string;
  /** Che cosa farebbe decadere questa lettura. Più di 10 caratteri. */
  readonly invalidation: string;
}

/**
 * Stato di un vincolo materiale.
 *
 * `fermo` è il caso normale e quello che interessa: il numero non si è mosso
 * nonostante tutto quello che è stato dichiarato intorno. `si-allenta` è quando
 * comincia a muoversi ma non abbastanza da non vincolare più. `sciolto` è quando
 * ha smesso di vincolare — e va detto, perché un vincolo che si scioglie cambia
 * la lettura quanto uno che regge.
 */
export type ConstraintState = 'fermo' | 'si-allenta' | 'sciolto';

/**
 * Un vincolo materiale, con accanto la preferenza dichiarata che lo contraddice.
 *
 * È il quadro descritto in `contenuti/studio/quadro-dei-vincoli.md`: le
 * preferenze sono opzionali e soggette ai vincoli, i vincoli non sono opzionali
 * né soggetti alle preferenze. Tradotto in questa scheda: da un lato quello che
 * viene dichiarato — annunci, intese, posizioni ufficiali — dall'altro il numero
 * materiale che quelle dichiarazioni non hanno spostato.
 *
 * Non è un doppione delle soglie di `SignalThreshold`. Una soglia dice quando
 * **questa lettura** muore; un vincolo dice che cosa tiene fermo il quadro a
 * prescindere da quello che si racconta, ed è la cosa che sopravvive a tre
 * cambi di impostazione intraday.
 *
 * Il caso che ha fatto nascere il campo: sei annunci di distensione su Hormuz in
 * quattro giorni, e un conteggio dei transiti fermo a otto navi contro le 130-140
 * al giorno di prima del conflitto. Erano frasi, e le frasi non spostano un
 * vincolo materiale.
 */
export interface SignalConstraint {
  /** Che cosa vincola: un fatto, non una posizione dichiarata. */
  readonly label: string;
  /** Il numero materiale adesso. Corto: sta accanto all'etichetta. */
  readonly value: string;
  /** Il termine di paragone che rende leggibile il valore, se serve. */
  readonly baseline?: string;
  /**
   * La preferenza dichiarata che dice il contrario. È l'altra metà del quadro:
   * senza, resta un numero e non si vede più perché è diagnostico.
   */
  readonly against: string;
  /**
   * Il flusso dati su cui si misura, e che cosa lo scioglierebbe. Deve essere
   * verificabile con un numero e una data, come le condizioni di invalidazione.
   */
  readonly watch: string;
  readonly state: ConstraintState;
}

/** Che cosa fa una soglia quando viene raggiunta. */
export type ThresholdKind = 'logora' | 'invalida';

/**
 * Una tacca su una scala: il livello, e che cosa succede quando ci si arriva.
 *
 * `logora` esiste per una ragione precisa, scritta nel registro degli esiti: la
 * lettura del 5 agosto fissava l'invalidazione al 4,70% e il decennale è passato
 * da 4,60% a 4,64% in sei ore, in salita a ogni controllo, mentre il registro
 * continuava a segnare «non scattata». Una soglia va messa anche dove la lettura
 * comincia a logorarsi, non solo dove finisce.
 */
export interface ThresholdMark {
  readonly at: number;
  /** Il livello come va scritto a video: `4,70%`, `4.200 $`. */
  readonly display: string;
  readonly kind: ThresholdKind;
  /** Che cosa comporta, in mezza riga. */
  readonly note: string;
}

/**
 * Quanto manca perché una lettura sia sbagliata, su una scala.
 *
 * Le condizioni di invalidazione sono già scritte in prosa in ogni `reading`,
 * ma «il decennale sopra il 4,70%» accanto a «il decennale è al 4,64%» non dice
 * a colpo d'occhio che mancano sei punti base. Qui i due numeri stanno sulla
 * stessa scala e la distanza si vede.
 *
 * La scala non si dichiara: si ricava dal valore corrente e dalle tacche, con un
 * margine ai lati. Un minimo e un massimo scritti a mano sarebbero due numeri in
 * più da tenere allineati a ogni pubblicazione, e sbagliarli sposterebbe il
 * pallino senza che nulla lo segnali.
 */
export interface SignalThreshold {
  /** Che cosa si sta guardando: `Treasury a 10 anni`, `XAU/USD`. */
  readonly label: string;
  /** Il valore corrente, per la posizione sulla scala. */
  readonly now: number;
  /** Lo stesso valore come va scritto a video. */
  readonly display: string;
  /** Le tacche, in ordine crescente. Almeno una. */
  readonly marks: readonly ThresholdMark[];
}

/**
 * Indicatore operativo sull'oro mostrato in panoramica.
 *
 * Sintetizza le ultime pubblicazioni in tre letture, una per orizzonte. Va
 * aggiornato a mano ogni volta che viene pubblicata una nuova analisi.
 *
 * **Non scade.** C'era una durata dichiarata, `validityMinutes`, dopo la quale
 * la panoramica passava da sola a «in attesa di notizie». È stata tolta: era
 * precisione finta. Nessuno sa davvero se una lettura vale novanta minuti o
 * duecento, e un indicatore che si dichiara valido fino alle 21:35 sta
 * promettendo qualcosa che non può mantenere. Al suo posto c'è la data e l'ora
 * dell'ultimo aggiornamento, scritta grande: quanto sia vecchia, e se quello che
 * dice regga ancora, lo decide chi legge — che è l'unico ad avere davanti il
 * mercato di adesso.
 *
 * Resta un riepilogo editoriale di quanto scritto negli articoli: non è
 * consulenza finanziaria né un segnale di acquisto o vendita.
 */
export interface OperationalSignal {
  /**
   * Identico come stringa al `publishedAt` dell'analisi più recente: è quel
   * momento che l'indicatore fotografa, non il momento in cui qualcuno lo ha
   * ricopiato.
   */
  readonly updatedAt: string;
  /**
   * Quando le conferme e le contraddizioni sono state ricontrollate l'ultima
   * volta, se è successo dopo la pubblicazione dell'analisi.
   *
   * Serve perché `updatedAt` fa due mestieri e ne può fare uno solo: dice **quale
   * analisi** l'indicatore riassume, ed è vincolato a coincidere con il suo
   * `publishedAt`. Quando il quadro viene riverificato senza pubblicare nulla —
   * il prezzo si è mosso nella direzione già descritta, nessun fatto nuovo — quel
   * campo non si può muovere, e senza questo la panoramica direbbe di essere
   * ferma a ore prima mentre i numeri accanto sono di adesso.
   *
   * Si omette quando coincide con `updatedAt`: una riga in più che ripete la
   * stessa ora è rumore.
   */
  readonly checkedAt?: string;
  readonly asset: string;
  /** Le tre letture, in ordine di orizzonte crescente. */
  readonly readings: readonly SignalReading[];
  readonly headline: string;
  readonly stance: string;
  readonly favours: readonly string[];
  readonly avoid: readonly string[];
  readonly confirming: readonly string[];
  readonly contradicting: readonly string[];
  /**
   * I vincoli materiali sotto la lettura, con la preferenza che ciascuno
   * contraddice. Cambiano molto più lentamente di tutto il resto della scheda.
   */
  readonly constraints: readonly SignalConstraint[];
  /** Le soglie dichiarate dalle letture, messe su una scala. */
  readonly thresholds: readonly SignalThreshold[];
  /** Slug delle analisi da cui deriva la lettura. */
  readonly sources: readonly string[];
}

/**
 * `null` quando non esiste alcuna lettura in corso: è lo stato in cui si trova
 * il sito finché non viene pubblicata la prima analisi. La panoramica mostra in
 * quel caso il riquadro «in attesa di notizie» al posto dell'indicatore.
 */
export const MARKET_SIGNAL: OperationalSignal | null = {
  updatedAt: '2026-08-12T11:00:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'La forza sale da bassa a media, e non per il prezzo: sale perché la ragione dichiarata ieri per ' +
        'tenerla bassa è stata rimossa dai fatti. Quella ragione era il rientro del greggio, e il rientro ' +
        'si è annullato per intero — il Brent è alla sesta seduta consecutiva di rialzo, intorno a 89,5 ' +
        'dollari. L’oro è salito lo stesso, a 4.400,44 con più 0,77%, e lo ha fatto con il Dollar Index in ' +
        'rialzo a 99,89: sale contro il cambio e contro il greggio, quindi è domanda rifugio isolata dagli ' +
        'altri due canali, la prima volta in questa fase. Sotto ci sono due numeri contati e non ' +
        'previsti: otto mercantili in transito martedì con una sola nave in uscita, minimo della ' +
        'settimana, e un decennale rientrato a 4,682% dai 4,735% di ieri. Non sale a rialzista per due ' +
        'ragioni con un orario: le 14:30 dell’indice dei prezzi e le 19:00 dell’asta del decennale.',
      invalidation:
        'Un oro che chiude sotto i 4.363 dollari, il minimo di questa giornata, che direbbe che il recupero era posizionamento prima del dato e non domanda rifugio; oppure un decennale che torna sopra il 4,735% di ieri con il Dollar Index sopra 99,89, che è la combinazione dichiarata assente. Un indice dei prezzi sopra il 3,4% annuo con il biennale che si porta sopra il 4,237% porterebbe la direzione sotto il neutrale, perché renderebbe le due dichiarazioni della Fed una riprezzatura invece che due preferenze.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale',
      strength: 'bassa',
      regime:
        'La regola scritta nel pomeriggio ha avuto la sua prima prova, e la prova consisteva nel non fare ' +
        'niente. La probabilità di un rialzo a settembre ha attraversato la soglia del 50% quattro volte ' +
        'in quattro giorni — 55,1%, 41,7%, 43,7%, 44%, 48-50%, 52%, 48% — e due volte nei due sensi in ' +
        'quarantotto ore: non misura un cambio di regime, misura il rumore intorno a una linea scelta ' +
        'perché era tonda. La misura di riferimento è quindi diventata la scadenza a due anni, ferma fra ' +
        'il 4,20% e il 4,24% da cinque giorni. In serata sono arrivate tre informazioni che tirano in ' +
        'versi diversi: vendite di case esistenti in calo per il secondo mese a 4,06 milioni annualizzati ' +
        'ma appena sopra il consenso, occupazione privata settimanale in decelerazione a più 8.300 da più ' +
        '11.000, e una presa di posizione restrittiva sull’inflazione dalla presidente ad interim della ' +
        'Fed di Atlanta, che quest’anno non vota. Il biennale non si è mosso, quindi la direzione non si ' +
        'muove: quando il saldo delle notizie è una questione di giudizio e il numero no, decide il ' +
        'numero. Alle 19:00 è arrivata la conferma più diretta disponibile: l’asta a tre anni si è ' +
        'aggiudicata al 4,291%, sotto il quotato pre-asta e undici punti base sopra quella di luglio, ' +
        'quindi sull’intero orizzonte in cui una decisione di settembre entra nel prezzo il mercato ha ' +
        'comprato senza chiedere un premio. In serata l’agenzia americana per l’energia mette per la prima ' +
        'volta una durata sul vincolo di Hormuz — transiti limitati per tutto agosto, ripresa graduale da ' +
        'settembre, circa 600.000 barili al giorno di capacità indisponibile fino a fine 2027 — e alza la ' +
        'previsione sul Brent del terzo trimestre di undici dollari, a circa 85. Resta però sotto gli ' +
        '88,67 a cui il greggio scambia adesso: il mercato aveva già prezzato la revisione. E un prezzo ' +
        'che si stabilizza in alto smette di alimentare la variazione annua dei prezzi entro dodici mesi, ' +
        'quindi la catena che porta dal greggio a una Fed più restrittiva ha un anello debole. Il ' +
        'biennale, che è la misura, non si è mosso attraverso quattro notizie in una sera: se non si ' +
        'muove nemmeno con l’indice dei prezzi di mercoledì, la misura andrà cambiata invece di essere ' +
        'riconfermata.',
      invalidation:
        'Un biennale sopra il 4,25%, che è la misura scelta per sostituire una soglia che oscilla: sarebbe la riprezzatura vera e porterebbe la direzione sotto il neutrale. Nell’altro verso, una probabilità di rialzo a settembre che dopo l’indice dei prezzi di mercoledì resta sotto il 50% per due giorni consecutivi rimetterebbe in piedi la gamba caduta. Oppure un Brent che rientra sotto gli 84 dollari sulla serie di questo archivio insieme a un conteggio dei transiti verificabile in aumento.',
    },
    {
      horizon: 'lungo',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'La gamba della domanda strutturale ha smesso di essere un’affermazione ed è tornata a essere un ' +
        'numero: la banca centrale cinese ha aggiunto 640.000 once a luglio, quasi venti tonnellate, il ' +
        'ventunesimo mese di fila e il maggior acquisto da ottobre 2023, con il ritmo che accelera da marzo. ' +
        'Attorno, tre atti americani nella stessa giornata allargano la portata dello stesso strumento — dazi ' +
        'secondari votati dal Senato, sanzioni sui binari di pagamento iraniani, e il passaggio procedurale che ' +
        'la Corte Suprema aveva indicato per rimuovere una governatrice della Fed. Quest’ultimo ha ora una ' +
        'data: il 10 agosto alla governatrice Cook sono state date tre settimane per rispondere alle ' +
        'contestazioni sui mutui, e il termine scade prima della riunione del 16 settembre. Cambia poco nel ' +
        'segno e molto nella verificabilità — fino a ieri era uno sfondo permanente, adesso è una condizione ' +
        'con una scadenza. Si aggiunge ora una seconda ' +
        'gamba lenta, di natura diversa: la struttura di sicurezza regionale si formalizza, con Ankara che ' +
        'dichiara la clausola della Mecca tecnicamente equivalente all’Articolo 5, l’Egitto indicato come ' +
        'possibile futuro membro e un interesse turco per le rotte del Mar Rosso. Alza il pavimento del premio ' +
        'geopolitico, ma in modo ambiguo: una deterrenza che riesce toglie premio invece di darlo. Contro ' +
        'tutto questo restano le aspettative di inflazione ferme al 3,3% e al 3,0% su tre e cinque anni, che ' +
        'tengono in vita il caso per tassi alti: è la ragione per cui la lettura non passa a rialzista.',
      invalidation:
        'Una lettura di agosto delle riserve cinesi con acquisti sotto le 160.000 once di marzo, o un mese senza acquisti, in uscita all’inizio di settembre; la bocciatura alla Camera del provvedimento sulle sanzioni, o una versione senza dazi secondari sull’energia; aspettative a tre e cinque anni che scendono nell’indagine di agosto; il ritorno stabile del decennale sopra il 5%; la revoca dei dazi sul polisilicio prima del 4 dicembre; sulla gamba istituzionale, un atto formale di rimozione della governatrice Cook prima del 16 settembre, oppure una probabilità di rialzo a settembre che si muove di più di cinque punti su una notizia riguardante la composizione del Board; oppure, sulla gamba geopolitica, un conteggio dei transiti a Hormuz sopra le otto navi al giorno con il Brent sotto gli 80 dollari, che sarebbe la de-escalation vera.',
    },
  ],
  headline: 'Otto navi martedì e una sola in uscita: la previsione trova il suo conteggio',
  stance:
    'Dallo Stretto martedì sono passati otto mercantili, minimo della settimana, e uno solo è uscito. Ieri ' +
    'sera questa scheda aveva declassato la previsione dell’agenzia americana perché era una previsione: ' +
    'oggi arriva il numero contato e va nella stessa direzione, mentre l’agenzia internazionale taglia ' +
    'l’offerta mondiale attesa nel 2026 di altri 600.000 barili al giorno rispetto a un mese fa. Il Brent ' +
    'è alla sesta seduta di rialzo intorno a 89,5 dollari e l’oro sale lo stesso, a 4.400,44 con più ' +
    '0,77%, con il Dollar Index in rialzo a 99,89: è domanda rifugio isolata dal cambio e dai tassi, la ' +
    'prima volta in questa fase. La forza sale quindi da bassa a media. Restano due appuntamenti che ' +
    'possono riscrivere tutto: l’indice dei prezzi alle 14:30 e l’asta del decennale alle 19:00.',
  favours: [
    'Alzare la forza quando cade la ragione dichiarata per tenerla bassa, non quando sale il prezzo: il rientro del greggio si è annullato e la lettura ha retto lo stesso',
    'Distinguere un conteggio da una previsione anche quando dicono la stessa cosa: sono tre osservazioni indipendenti che convergono, non una tesi che si conferma da sola',
    'Guardare la composizione invece della soglia: un oro che sale con il dollaro in rialzo e il greggio in rialzo è domanda rifugio, e non dipende da nessun livello tondo',
  ],
  avoid: [
    'Usare il livello puntuale dei transiti: i due fornitori danno otto e undici per lo stesso giorno, quindi regge la direzione e non il numero — è l’errore già commesso l’11 agosto',
    'Contare due dichiarazioni della Fed come se fossero due voti: né Collins né Venable votano quest’anno, e la probabilità di settembre è dove stava prima che parlassero',
    'Trattare i 4.400 ripresi come il fatto della giornata: è un numero tondo, e questa scheda ha smesso di appoggiarcisi ventiquattro ore fa',
  ],
  confirming: [
    'L’oro sale dello 0,77% a 4.400,44 mentre il Dollar Index sale a 99,89 e il greggio corre: domanda rifugio isolata dagli altri due canali',
    'Il decennale rientra a 4,682% dai 4,735% di ieri, quindi sotto la soglia del 4,70%',
    'Otto transiti martedì con una sola nave in uscita, e due agenzie energetiche che convergono sulla durata del problema',
    'Le scorte americane rilevate dall’associazione di settore salgono di 9,1 milioni di barili: un contrappeso che il prezzo non sta scontando',
    'Le due voci della Fed che hanno aperto a un rialzo di settembre non votano quest’anno',
  ],
  contradicting: [
    'Il Brent è alla sesta seduta consecutiva di rialzo intorno a 89,5 dollari, circa 88,1 sulla serie usata qui: il canale energia-tassi ha più carburante, non meno',
    'L’agenzia internazionale taglia l’offerta mondiale attesa nel 2026 a meno 4,3 milioni di barili al giorno, da meno 3,7 di un mese fa',
    'L’indice dei prezzi alle 14:30 può trasformare due dichiarazioni senza voto in una riprezzatura in mezz’ora',
    'Alle 19:00 l’asta del decennale da 39 miliardi: la prova sulla parte lunga della curva è ancora da fare',
    'Il massimo di 4.434-4.435 dollari resta a trentacinque dollari di distanza',
    'La media dei transiti a dieci giorni sale a circa dodici mentre il dato giornaliero peggiora: il traffico si concentra in pochi giorni buoni',
  ],
  constraints: [
    {
      label: 'Transito assicurabile nello Stretto di Hormuz',
      value: 'copertura che decade',
      baseline: 'clausola del Lloyd’s Market Association, fine luglio',
      against:
        'Un’intesa Iran-Oman descritta come vicina da Washington per una settimana, e un pacchetto di ' +
        'commissioni su cui le tre parti restano lontanissime: l’Iran chiede il 5-7% del valore del carico, ' +
        'l’Oman discute di circa il 3%, gli Stati Uniti non ne vogliono nessuna. A luglio il consiglio ' +
        'dell’Organizzazione marittima internazionale aveva chiesto che il passaggio resti libero da pedaggi.',
      watch:
        'Due atti tecnici, entrambi con una firma sopra: una deroga statunitense alle sanzioni sull’Autorità ' +
        'dello Stretto del Golfo Persico, e il ritiro o la modifica della clausola che fa decadere la copertura ' +
        'contro il rischio di guerra a chi paga. Finché restano dove sono, un accordo annunciato non è un ' +
        'accordo utilizzabile e le navi non si muovono.',
      state: 'fermo',
    },
    {
      label: 'Transiti nello Stretto di Hormuz',
      value: 'due navi venerdì',
      baseline: 'contro una soglia di otto al giorno e 130-140 prima del conflitto',
      against:
        'Sette annunci di distensione in quattro giorni — l’apertura di Bessent, la smentita iraniana, la ' +
        'minaccia rilanciata, la richiesta di controllo sugli ingressi, la trattativa «durata tutto il ' +
        'giorno», le coordinate concordate con l’Oman e infine Teheran che dice che quel tavolo riguarda la ' +
        'gestione delle rotte e non la riapertura. L’8 agosto il nodo smette di essere vago e viene nominato: ' +
        'le Guardie Rivoluzionarie dichiarano che la riapertura non dipende dai negoziati con l’Oman ma ' +
        'dall’accettazione americana delle condizioni iraniane, e il ministro degli Esteri Araqchi conferma ' +
        'che l’intesa sulla rotta è «molto vicina» aggiungendo che la riapertura richiede altro, fra cui una ' +
        'compensazione statunitense. È il quinto punto aperto, e non somiglia agli altri quattro: quelli sono ' +
        'questioni tecniche, questo è un risarcimento politico che nessun tavolo tecnico ha il mandato di ' +
        'concedere. L’11 agosto in serata la configurazione si ripete e peggiora: mentre i colloqui vengono ' +
        'descritti come in fase avanzata, Teheran ribadisce ufficialmente che lo Stretto resta chiuso ' +
        'finché gli Stati Uniti non soddisfano le sue condizioni, che ora comprendono anche la fine della ' +
        'guerra e lo sblocco di asset iraniani. Il tavolo progredisce e l’elenco delle condizioni si ' +
        'allunga, ed è il sesto punto aperto in quattro giorni.',
      watch:
        'Il conteggio non risale: si quarta. Venerdì 7 agosto dallo Stretto sono transitate due navi secondo ' +
        'Reuters, contro le 33 da lunedì a giovedì della stessa settimana e le 50 di quella precedente. Due ' +
        'in un giorno è un quarto della soglia di otto che questo archivio segue dal 5 agosto, e le 130-140 ' +
        'di prima del conflitto sono ormai un altro mondo. Nella stessa mattina il segretario al Tesoro ' +
        'Bessent sostiene che lo Stretto potrebbe diventare progressivamente meno importante per gli Stati ' +
        'Uniti, con parte del greggio deviata su condotte terrestri: il mercato non compra la lettura e il ' +
        'Brent sale dell’1%. Sei giorni prima una sua dichiarazione sullo stesso tema aveva fatto scendere il ' +
        'greggio del 4%. ' +
        'Adesso si sa anche perché, e non è più una deduzione: ADNOC dichiara quindici proprie navi colpite da ' +
        'missili o droni dall’inizio del conflitto, tre soltanto questa settimana, con un morto e venti ' +
        'feriti. L’8 agosto il governo degli Emirati accusa l’Iran per nome di aver colpito con un missile ' +
        'un’altra nave collegata alla compagnia, senza feriti: l’attribuzione passa da un’azienda che conta i ' +
        'propri danni a uno Stato che indica l’autore mentre quell’autore sta trattando.',
      state: 'fermo',
    },
    {
      label: 'Capacità saudita sulla costa del Mar Rosso',
      value: 'Jazan ferma due volte in due settimane',
      baseline: 'circa 400.000 barili al giorno di raffinazione',
      against:
        'È il vincolo che l’archivio non stava misurando, ed è nato da una lettura incompleta scritta qui il ' +
        '5 agosto: il Mar Rosso era stato descritto come «un altro stretto, un altro attore», cioè come un ' +
        'fronte indipendente da Hormuz. Indipendente lo è sul piano diplomatico, perché chi colpisce non ' +
        'siede al tavolo di Teheran, ma non lo è sul piano materiale: quella costa è il modo con cui il ' +
        'greggio attraversa la penisola ed evita lo Stretto. I due colli di bottiglia sono in serie, non in ' +
        'parallelo.',
      watch:
        'Due numeri, e nessuno dei due è il conteggio dei transiti. Primo: se e quando Jazan dichiara il ' +
        'ripristino della piena capacità, dopo lo stop del 27 luglio e l’incendio del 9 agosto rivendicato ' +
        'dagli Houthi. Secondo: se la campagna si estende a Yanbu o alla rotta est-ovest, che è il resto ' +
        'della stessa via di fuga. Aramco dichiara per ora interruzioni produttive senza impatto materiale ' +
        'complessivo, e finché quella formula regge il vincolo non stringe davvero. L’attacco al porto di ' +
        'Mocha, nello stesso giorno, allarga il quadro fino a Bab el-Mandeb — l’altra estremità della ' +
        'rotta — ma non entra in questo conto: è un porto commerciale yemenita e non esporta greggio.',
      state: 'si-allenta',
    },
    {
      label: 'Mercato del lavoro statunitense che rallenta',
      value: 'meno 23.000 posti',
      baseline: 'attese circa 80.000; maggio e giugno rivisti per 103.000 in meno',
      against:
        'Sette prese di posizione restrittive in una settimana: i tre membri del FOMC che chiedevano un rialzo ' +
        'immediato, poi Schmid e Kashkari, poi la governatrice Cook, e infine il presidente Warsh secondo una ' +
        'ricostruzione del Financial Times. Nessuna delle sette era riuscita a spostare il numero oltre il 57%. ' +
        'Un solo dato lo ha portato al 41,7%: la preferenza di chi decide l’ordine del giorno vale meno di una ' +
        'diffusione statistica, ed è la dimostrazione più netta che questo archivio abbia raccolto.',
      watch:
        'Non rallenta più: si contrae. I posti di luglio sono meno 23.000 contro attese di circa 80.000, la ' +
        'partecipazione scende al 61,4% — minimo da oltre cinque anni — e i salari decelerano a più 3,2% ' +
        'annuo. Il vincolo è sciolto, e a rimetterlo in piedi può essere solo l’indice dei prezzi di mercoledì ' +
        '12 agosto: sopra il 3,4% annuo la Fed si ritrova con un motivo per alzare che il lavoro non le dà più.',
      state: 'sciolto',
    },
    {
      label: 'Emissioni del Tesoro a lunga scadenza',
      value: '125 mld $',
      baseline: 'aste invariate per diversi trimestri',
      against:
        'Un fabbisogno cresciuto di 68 miliardi faceva attendere aste più grosse proprio sulle scadenze ' +
        'lunghe, ed era una delle tre gambe che tenevano il trentennale sui massimi dal 2007.',
      watch:
        'Il prossimo rifinanziamento trimestrale. Fino ad allora lo shock di offerta che frenava l’oro è ' +
        'rinviato, e alla parte lunga della curva resta una variabile in meno.',
      state: 'sciolto',
    },
    {
      label: 'Premio di rischio sul greggio che non si forma',
      value: 'Brent 82,21 $ in chiusura',
      baseline: 'meno 0,34%, dopo un massimo di 84,40 e un minimo di 81,52',
      against:
        'In quattro giorni: una minaccia americana a Teheran, un piano di attacchi contro l’energia iraniana, ' +
        'una smentita, un missile houthi contro una petroliera saudita e una ritorsione iraniana annunciata ' +
        'agli impianti energetici del Golfo. A ognuna di queste il prezzo aveva reagito meno della precedente; ' +
        'quello che lo ha mosso, alla fine, è stata l’assenza di una conferma sull’intesa Iran-Oman.',
      watch:
        'In quarantotto ore il premio si è formato sopra gli 82 dollari su una bozza parlamentare iraniana, si ' +
        'è sgonfiato a 81,52 sui segnali di distensione, si è riformato a 83,65 sulla dichiarazione di ADNOC — ' +
        'quindici navi colpite, un morto, venti feriti — ed è rientrato di nuovo entro la chiusura, a 82,21 ' +
        'con il segno meno. Quattro movimenti in due giorni, e l’ultimo cancella un fatto materiale nel giro ' +
        'di sei ore: non è un vincolo che si scioglie, è un prezzo che oscilla intorno a una soglia. I due ' +
        'numeri restano gli 82 dollari, che la chiusura sfiora da ventuno centesimi, e gli 84, sopra i quali ' +
        'il greggio smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui. ' +
        'Domenica 9 agosto arriva un indizio in più, e non dal greggio: le borse del Golfo, le uniche aperte, ' +
        'chiudono a più 0,1% e meno 0,1% dopo due infrastrutture colpite in un giorno. Non è il Brent, ma è il ' +
        'quadrante più esposto, e non ha riprezzato niente.',
      state: 'sciolto',
    },
  ],
  thresholds: [
    {
      label: 'Rialzo Fed a settembre',
      now: 48,
      display: '≈ 48%',
      marks: [
        {
          at: 50,
          display: '50%',
          kind: 'invalida',
          note: 'attraversata quattro volte in quattro giorni e due volte nei due sensi in quarantotto ore: superata in salita la sera del 10 agosto, ridiscesa il pomeriggio dell’11. Una soglia che oscilla così non misura un cambio di regime, e la lettura sui giorni non la segue più in automatico',
        },
      ],
    },
    {
      label: 'Brent',
      now: 88.1,
      display: '≈ 88,1 $',
      marks: [
        {
          at: 82,
          display: '82 $',
          kind: 'invalida',
          note: 'sotto questo livello il premio geopolitico si sgonfia e la lettura perde la sua gamba energetica',
        },
        {
          at: 84,
          display: '84 $',
          kind: 'logora',
          note: 'sopra questo livello il greggio smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui',
        },
      ],
    },
    {
      label: 'Treasury a 2 anni',
      now: 4.23,
      display: '≈ 4,23%',
      marks: [
        {
          at: 4.25,
          display: '4,25%',
          kind: 'invalida',
          note: 'è la seconda metà della regola del 5 agosto: sopra questo livello, con il Brent oltre gli 84, il canale dei tassi torna a lavorare contro il metallo e la lettura decade. È la scadenza che non si muove mentre la parte lunga va ai massimi da vent’anni',
        },
      ],
    },
    {
      label: 'Treasury a 10 anni',
      now: 4.682,
      display: '4,682%',
      marks: [
        {
          at: 4.68,
          display: '4,68%',
          kind: 'logora',
          note: 'superata nel pomeriggio del 10 agosto: segnalava il logoramento senza aspettare la rottura, e il rendimento ci è rimasto sopra da allora',
        },
        {
          at: 4.7,
          display: '4,70%',
          kind: 'invalida',
          note: 'superata e mantenuta per un giorno intero, con un massimo di seduta a 4,739%, e restituita nel pomeriggio dell’11 agosto: alle 16:50 il rendimento è a 4,686%, quindi sotto. La condizione chiedeva comunque anche un oro sotto i 4.350, che non è mai arrivato',
        },
      ],
    },
    {
      label: 'XAU/USD',
      now: 4400.44,
      display: '4.400,44 $',
      marks: [
        {
          at: 4300,
          display: '4.300 $',
          kind: 'invalida',
          note: 'sotto questo livello il movimento del rapporto occupazionale è cancellato per intero, e con esso la ragione della lettura',
        },
        {
          at: 4400,
          display: '4.400 $',
          kind: 'invalida',
          note: 'superata la mattina del 12 agosto a 4.400,44, dopo tre avvicinamenti falliti il giorno prima. Il fatto informativo non è però il livello, che è tondo e quindi attira ordini: è la composizione, cioè un oro che sale mentre salgono sia il dollaro sia il greggio. Le condizioni nuove restano derivate dai livelli che il mercato ha già stabilito',
        },
      ],
    },
  ],
  sources: [
    'otto-navi-e-adesso-la-previsione-ha-un-conteggio',
    'l-agenzia-mette-una-data-sul-vincolo-e-arriva-al-2027',
    'nove-millesimi-sotto-la-soglia-e-la-soglia-era-tonda',
  ],
};

export const DIRECTION_LABEL: Record<BiasDirection, string> = {
  rialzista: 'Rialzista',
  'neutrale-rialzista': 'Neutro con inclinazione rialzista',
  neutrale: 'Neutro',
  'neutrale-ribassista': 'Neutro con inclinazione ribassista',
  ribassista: 'Ribassista',
};

export const STRENGTH_VALUE: Record<Level, number> = { bassa: 1, media: 2, alta: 3 };

/** Etichette dei tre orizzonti, con l'arco di tempo scritto per esteso. */
export const HORIZON_LABEL: Record<Horizon, string> = {
  breve: 'Intraday',
  medio: 'Medio termine',
  lungo: 'Lungo termine',
};

export const HORIZON_SPAN: Record<Horizon, string> = {
  breve: 'prossimi minuti o ore',
  medio: 'prossimi giorni',
  lungo: 'prossime settimane o mesi',
};
