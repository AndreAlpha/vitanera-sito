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
  updatedAt: '2026-08-14T23:55:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'neutrale-rialzista',
      strength: 'bassa',
      regime:
        'La direzione resta dov’era perché è quello che ha fatto il prezzo: l’oro chiude a 4.376,59 ' +
        'dollari con più 0,59% e la settimana in guadagno, con il dollaro in calo per la terza seduta e ' +
        'la probabilità di un rialzo a settembre scesa fino al 29,3% in giornata, prima volta sotto il ' +
        '30%. La forza resta bassa perché il rischio sorvegliato tutto il giorno si è materializzato in ' +
        'chiusura, e dal lato sbagliato rispetto a dove era puntata la sorveglianza: non il petrolio, che ' +
        'ha chiuso a 88,60 senza toccare gli 89,06, ma i rendimenti. Il decennale ha chiuso a 4,695% con ' +
        'un massimo a 4,701% e il trentennale a 5,261% con un massimo a 5,271%, entrambi in rialzo di ' +
        'cinque punti base in una seduta di dati deboli. Il rendimento alternativo che un metallo senza ' +
        'cedole deve battere è salito proprio mentre saliva il metallo, ed è una convivenza che di solito ' +
        'non dura: il livello da guardare alla riapertura è il 4,70% sul decennale.',
      invalidation:
        'Un decennale che chiude sopra il 4,70% e ci resta, con il Brent oltre i 90 dollari: è la combinazione indicata da tre giorni come quella che porta la lettura sotto il neutrale, e venerdì entrambe le gambe si sono avvicinate senza arrivarci. Oppure un oro che chiude sotto i 4.351,07 di giovedì, che annullerebbe il recupero della seconda metà di venerdì. Nell’altro verso, un decennale che rientra sotto il 4,641% della chiusura di giovedì direbbe che la salita della parte lunga era una coda di seduta, e la forza salirebbe.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'La condizione dichiarata il 10 agosto è scattata, ed è la ragione per cui questa lettura si ' +
        'muove. Allora la direzione era stata abbassata a neutrale per un numero solo — la probabilità di ' +
        'un rialzo a settembre risalita al 52%, sopra la metà — e accanto era stata scritta la condizione ' +
        'per uscirne: un rientro sotto il 50% dopo l’indice dei prezzi di mercoledì. Il dato è uscito alle ' +
        '14:30 esattamente sul consenso, più 0,1% mensile e 3,4% annuo in calo dal 3,5%, con il fondo a ' +
        '2,5% dal 2,6%, e la probabilità è scesa al 37,7%: quattordici punti in un’ora e mezza. La forza ' +
        'sale a media perché è decaduta anche la ragione data per tenerla bassa, cioè che il biennale non ' +
        'confermava nulla: quella scadenza si è mossa per la prima volta in sei giorni, a 4,180% con meno ' +
        '3,8 punti base. Non sale oltre perché il canale energetico non è stato misurato da questa ' +
        'diffusione — l’indice di luglio non contiene il Brent a 90 dollari, che è un fatto di agosto — e ' +
        'nel frattempo si è irrigidito: l’agenzia internazionale ha tagliato l’offerta mondiale attesa nel ' +
        '2026 a meno 4,3 milioni di barili al giorno da meno 3,7. Da correggere infine un conto che ' +
        'sorreggeva le due letture precedenti: al FOMC del 29 luglio i dissensi per un rialzo erano tre — ' +
        'Hammack, Kashkari e Logan — e non uno solo. Alle 16:30 arriva poi il numero che il canale ' +
        'energetico non aveva ancora ricevuto, e arriva dai serbatoi invece che dalle previsioni: le ' +
        'scorte commerciali americane salgono di 17,4 milioni di barili in una settimana, a 424,4 milioni ' +
        'complessivi, il maggior aumento dal gennaio 2023, contro un consenso che ne attendeva 1,7 in ' +
        'meno. Taglia in due sensi e per questo non muove la direzione: toglie carburante all’argomento ' +
        'restrittivo, ma toglie anche fondamento alla scarsità su cui poggia il premio geopolitico. Il 13 ' +
        'agosto quel quadro riceve una precisazione che ne cambia il verso: OPEC e agenzia internazionale ' +
        'hanno tagliato mercoledì le previsioni sulla domanda mondiale del 2026 — crescita a 580.000 ' +
        'barili al giorno dai 780.000 di luglio la prima, contrazione di circa 1,6 milioni la seconda — ' +
        'quindi il greggio scende dal lato della domanda e non da quello dell’offerta. Il vincolo su ' +
        'Hormuz resta dov’era; a cedere sono i consumi attesi. Per il canale dei tassi il sollievo è lo ' +
        'stesso perché conta il livello del prezzo, ma per il premio di rischio non toglie niente, ed è ' +
        'l’opposto di come andrebbe letta una discesa dovuta a navi che ripassano. Alle ' +
        '19:00 arriva infine la prova rimandata da tre giorni sulla parte lunga, e la supera senza brillare: ' +
        'il collocamento da 42 miliardi di titoli a dieci anni si aggiudica al 4,683% con un rapporto fra ' +
        'domanda e offerta di 2,53, sopra la media di 2,48 delle ultime dieci aste ma sotto il 2,59 del ' +
        'mese scorso, quando il rendimento era dieci punti base e mezzo più basso. Il costo del debito ' +
        'lungo sale mentre le attese sulla banca centrale scendono: sono due movimenti opposti, e il ' +
        'secondo non compensa il primo. Il 13 agosto quel conto riceve la sua prova: il collocamento del ' +
        'trentennale da 25 miliardi si aggiudica al 5,216%. Alle 19:15 questa scheda aveva letto quel ' +
        'rendimento come leggermente sotto il livello pre-asta e quindi come domanda solida; il numero ' +
        'corretto per il confronto è il quotato alla chiusura delle offerte, che era 5,212%, e ' +
        'l’aggiudicazione è arrivata quattro decimi di punto base sopra. Il rapporto fra domanda e offerta ' +
        'è 2,39 contro circa 2,43 di media, e gli operatori primari hanno preso l’11,6% contro circa ' +
        '10,6%. Il debito si colloca, e l’ipotesi estrema — un mercato che comincia a rifiutare la carta ' +
        'lunga americana — resta smentita. Ma si colloca al costo più alto su questa scadenza da circa un ' +
        'quarto di secolo, quasi sedici punti base sopra l’asta di un mese fa, e con la domanda ' +
        'leggermente sotto la propria media invece che sopra. La direzione della seduta l’ha comunque ' +
        'decisa il quadro macroeconomico e non l’asta: il trentennale chiude a 5,213% con meno 3,4 punti ' +
        'base e il decennale a 4,629% con meno 6,3. Il 14 agosto il comunicato del Tesoro rende quei numeri ' +
        'verificabili sulla fonte primaria: rapporto fra domanda e offerta 2,39, operatori primari ' +
        'all’11,51%, acquirenti indiretti al 66,85%, assegnato al massimo il 12,10%. Coincidono con ' +
        'quanto pubblicato la sera prima, e la correzione regge. Alle 14:30 del 14 agosto arriva l’ultimo ' +
        'tassello: le vendite al dettaglio di luglio scendono dello 0,6% contro attese di più 0,1%, ' +
        'primo calo dopo dieci mesi. Era l’argomento residuo di chi sosteneva che la domanda interna ' +
        'giustificasse un altro rialzo, e la probabilità di un aumento a settembre scende al 29,3%: ' +
        'quattro diffusioni consecutive — prezzi al consumo, prezzi alla produzione, sussidi e adesso ' +
        'consumo — nessuna delle quali ha contraddetto la riprezzatura. Resta separata la questione del ' +
        'debito lungo, che il dato non tocca: il decennale è invariato a 4,640%. Alle 16:00 arriva però il ' +
        'primo elemento contrario da mercoledì: la fiducia del Michigan scende a 51,0 ma le attese di ' +
        'inflazione a un anno salgono al 4,3%, e la probabilità di un rialzo risale al 31,6%. Le attese ' +
        'a lungo termine restano ferme al 3,3%, quindi la lettura non si muove — ma la sequenza di ' +
        'diffusioni che non si contraddicevano mai si è interrotta, e va contato. Venerdì in chiusura arriva ' +
        'la conferma sulla gamba fiscale, e arriva dal posto giusto: dopo un collocamento che aveva ' +
        'mostrato domanda sotto la media al costo più alto da un quarto di secolo, il mercato ha chiesto ' +
        'altri cinque punti base su entrambe le scadenze lunghe — decennale a 4,695%, trentennale a ' +
        '5,261% — in una giornata in cui tutto il resto diceva di scendere. Non è un evento, è una ' +
        'pendenza.',
      invalidation:
        'Una probabilità di rialzo a settembre che risale sopra il 48% entro venerdì, cioè sopra il livello di ieri mattina invece che sopra la metà tonda: direbbe che il crollo di oggi era la reazione di mezz’ora al titolo e non una riprezzatura. Oppure un biennale che torna sopra il 4,218%, il massimo di questa giornata, che annullerebbe l’unico movimento su cui la lettura poggia. Nell’altro verso, un indice dei prezzi di agosto in uscita a settembre con la componente energetica in aumento sul mese porterebbe la direzione sotto il neutrale: è il test che quello di luglio non poteva fare.',
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
        'tengono in vita il caso per tassi alti: è la ragione per cui la lettura non passa a rialzista. Il ' +
        '12 agosto si aggiunge una terza gamba, fiscale e misurata mensilmente: il rendiconto del Tesoro ' +
        'americano porta il disavanzo cumulato dell’anno fiscale a 1.799 miliardi in dieci mesi, oltre i ' +
        '1.775 dell’intero anno precedente, con le spese di luglio a più 22% e le entrate a meno 1%. Anche ' +
        'questa taglia in due sensi — più emissioni alzano il rendimento che il metallo deve battere, una ' +
        'traiettoria del debito che peggiora è la ragione per cui una riserva senza rischio di emittente ' +
        'viene comprata — e per questo non sposta il segno ma il numero di ragioni che lo sostengono. Nello ' +
        'stesso rendiconto le entrate doganali nette sono negative per 8,55 miliardi dopo 33,38 miliardi di ' +
        'rimborsi: la prima misura di quanto i dazi incassino davvero, contro due analisi che li avevano ' +
        'seguiti solo dal lato dell’annuncio. Il 13 agosto quella gamba riceve il suo primo prezzo di ' +
        'mercato: il collocamento del trentennale si aggiudica al 5,216%, il costo più alto su questa ' +
        'scadenza da circa un quarto di secolo e quasi sedici punti base sopra l’asta di un mese fa. Il ' +
        'debito continua a trovare compratori — l’ipotesi estrema di un rifiuto della carta lunga resta ' +
        'smentita — ma il premio richiesto sale in modo misurabile a ogni collocamento, ed è quella ' +
        'pendenza, non il singolo risultato, la cosa che agisce sui trimestri. Alle 20:30 quel prezzo ' +
        'risulta più alto di come era stato scritto un’ora prima: il rapporto fra domanda e offerta ' +
        'dell’asta è 2,39 contro circa 2,43 di media sulle ultime dieci, e l’aggiudicazione è arrivata ' +
        'sopra il quotato alla chiusura delle offerte invece che sotto. È la prima volta che il ' +
        'deterioramento fiscale si vede nel comportamento dei compratori e non soltanto nei rendiconti del ' +
        'Tesoro, ed è per questo che la gamba si rafforza mentre la lettura resta dov’è: uno scarto di ' +
        'quattro decimi di punto base e cinque centesimi di rapporto sono misure piccole, e quello che ' +
        'conta è che adesso abbiano il segno giusto. Il 14 agosto si irrobustisce anche la gamba di ' +
        'sicurezza regionale, e per una volta con un conteggio invece che con una dichiarazione: gli ' +
        'attacchi a navi collegate ad ADNOC sono almeno sedici dal 28 febbraio, due nell’ultima ' +
        'settimana, e Washington dichiara di poter mantenere il blocco dei porti iraniani senza una ' +
        'scadenza. È una struttura di rischio che si assesta su un livello più alto, ed è contro ' +
        'quella che comprano le riserve ufficiali, non contro la seduta di giovedì.',
      invalidation:
        'Una lettura di agosto delle riserve cinesi con acquisti sotto le 160.000 once di marzo, o un mese senza acquisti, in uscita all’inizio di settembre; la bocciatura alla Camera del provvedimento sulle sanzioni, o una versione senza dazi secondari sull’energia; aspettative a tre e cinque anni che scendono nell’indagine di agosto; il ritorno stabile del decennale sopra il 5%; la revoca dei dazi sul polisilicio prima del 4 dicembre; sulla gamba istituzionale, un atto formale di rimozione della governatrice Cook prima del 16 settembre, oppure una probabilità di rialzo a settembre che si muove di più di cinque punti su una notizia riguardante la composizione del Board; oppure, sulla gamba geopolitica, un conteggio dei transiti a Hormuz sopra le otto navi al giorno con il Brent sotto gli 80 dollari, che sarebbe la de-escalation vera; sulla gamba fiscale, il prossimo rifinanziamento trimestrale che allarga le aste a lunga scadenza rispetto ai 125 miliardi rimasti invariati, oppure conti federali di agosto con spese sotto i 667 miliardi, che direbbero che il record di luglio era calendario e non traiettoria.',
    },
  ],
  headline:
    'La curva si divide: il biennale scende al 4,117%, il decennale chiude a 4,695% e il trentennale a 5,261%',
  stance:
    'La settimana chiude sciogliendo la domanda che l’aveva tenuta aperta. Per quattro sedute il metallo ' +
    'non aveva risposto a niente: prezzi al consumo e alla produzione sotto le attese, richieste di ' +
    'sussidio in aumento, un collocamento del trentennale con domanda sotto la media, un dollaro in calo, ' +
    'e il prezzo che scendeva lo stesso fino a rompere nella notte i 4.351,45 dichiarati in anticipo come ' +
    'livello di rottura, con un minimo a 4.311,22. Alle 14:30 di venerdì le vendite al dettaglio di luglio ' +
    'escono a meno 0,6% contro attese di più 0,1% — primo calo dopo dieci mesi, 763,6 miliardi, con la ' +
    'revisione di giugno confermata a più 0,2% — e la catena trasmette in tutti i suoi passaggi: la ' +
    'probabilità di un rialzo a settembre scende al 29,3% e passa sotto il 30% per la prima volta in ' +
    'questa fase, il biennale va a 4,119%, il Dollar Index a 99,500 sul minimo, e l’oro sale dello 0,58% a ' +
    '4.376,10 con un massimo a 4.386,91. Va detto il limite che il comunicato dichiara da sé: delle tre ' +
    'misure pubblicate solo quella complessiva ha un intervallo di confidenza che non contiene lo zero, ' +
    'mentre il dato al netto delle auto e quello al netto di auto e carburanti sono marcati come non ' +
    'distinguibili da zero. Nel frattempo il canale energetico si è chiuso: il Brent, arrivato a 88,68 in ' +
    'mattinata sulla minaccia di blocco iraniano, è tornato negativo sulla giornata a 86,97.',
  favours: [
    'Cercare il qualificatore dentro la stessa fonte prima che altrove: il comunicato del Census pubblica il totale e le due misure che ne tolgono le voci volatili, e il confronto fra meno 0,6% e meno 0,2% dice da solo quanto del calo stia in auto e carburanti, senza bisogno di una ricostruzione riportata',
    'Chiedere a un attacco a un’infrastruttura una cosa sola, cioè quanta capacità toglie al mercato: la raffineria di Jazan era ferma da fine luglio e il rimbalzo è rientrato in un’ora, Ust-Luga lavora e va trattata diversamente. Lo stesso metro deve poter dare risposte opposte, altrimenti non è un metro',
    'Cercare la controprova nella misura più dura disponibile: la scarsità di greggio è stata raccontata qui per sei giorni con conteggi di navi, e il primo conteggio di barili nei serbatoi dice il contrario',
    'Muovere una lettura quando decade la ragione scritta in anticipo per tenerla su, anche quando è stata scritta un’ora prima: la forza intraday scende perché due dei tre canali che la giustificavano si sono chiusi',
    'Ancorare le condizioni ai livelli che il mercato ha stabilito nella giornata — 4.362,57, 4.441,01, 99,910, 4,688% — invece che ai numeri tondi su cui si accumulano gli ordini',
    'Correggere per iscritto e subito: l’asta di stasera era da 42 miliardi e non da 39, e la correzione è stata pubblicata a parte invece di essere infilata nel testo sbagliato',
  ],
  avoid: [
    'Trattare un conteggio giornaliero dei transiti come un fatto verificato: è la seconda volta in un giorno che una cifra quotidiana attribuita a un fornitore privato — cinque e nove mercoledì e giovedì, due venerdì — non risulta confermabile su nessuna fonte indipendente, mentre il dato di martedì, otto navi, si trova senza difficoltà. Quello che regge è la media a dieci giorni e il confronto con le 130 di prima del conflitto, non il numero del giorno',
    'Fondere il rendimento di aggiudicazione di un’asta con quello del mercato secondario: il 5,216% del collocamento del 13 agosto è il costo più alto su questa scadenza da circa un quarto di secolo, ma il trentennale scambiato sul secondario è a 5,238% e ha toccato 5,281% nell’ultimo anno. Sono due grandezze diverse e solo la prima porta quel primato',
    'Scambiare un flusso stimato per una misura: due fornitori danno otto e undici transiti per lo stesso martedì, mentre le scorte sono uno stock ufficiale che arriva con accanto il livello complessivo per verificarne la coerenza',
    'Contare come tre conferme indipendenti tre effetti della stessa riprezzatura: attese sulla Fed, biennale e dollaro dopo l’indice dei prezzi sono un movimento solo guardato da tre parti, e infatti due sono rientrati insieme',
    'Giudicare alle 08:15 se un movimento notturno è una riprezzatura o una reazione a un titolo: il calo del Brent era stato archiviato qui come rientrato entro poche ore, e in giornata è arrivato a meno 2,06% con un minimo sotto quello notturno. La sessione europea non era ancora cominciata, e il test era stato applicato troppo presto',
    'Affidare una condizione a un numero che pubblica un terzo quando vuole: il conteggio dei transiti di mercoledi non e uscito, e la condizione che ci poggiava sopra e rimasta senza verdetto ne in un verso ne nell’altro',
    'Ancorare una condizione al consenso: il dato è uscito esattamente sul 3,4% e su più 0,2%, e cinque analisi che avevano scritto «sopra» o «sotto» quei livelli non hanno potuto dire niente',
    'Ricopiare un numero atteso finché finisce accanto a un risultato ufficiale: i 39 miliardi erano la dimensione prevista, passata per tre analisi senza riverifica fino a comparire vicino al rendimento vero e a prenderne l’autorevolezza',
    'Dichiarare un’incertezza e poi appoggiarsi lo stesso all’indizio debole: alle 19:40 il rapporto domanda-offerta mancava, era stato detto, e il titolo era comunque costruito sul confronto col mercato secondario',
  ],
  confirming: [
    'La distanza fra quello che viene dichiarato e quello che viene misurato su Hormuz adesso ha due nomi e due numeri: il segretario all’Energia Chris Wright dice che le esportazioni attraverso lo Stretto hanno raggiunto una media a sette giorni di quasi 9 milioni di barili al giorno, mentre JPMorgan stima che il numero vero sia vicino a 4 milioni. È la stessa discrepanza già annotata qui fra ricostruzione ufficiale e tracciamento navale, con la differenza che entrambe le cifre sono ora attribuibili',
    'Il conteggio dei transiti verificabile resta quello di martedì: otto navi, il più basso dal 5 agosto, contro una media a dieci giorni di circa dodici e contro le 130 al giorno precedenti al 28 febbraio, cioè circa il 90% in meno. Il vincolo materiale non si è allentato',
    'Le vendite al dettaglio di luglio scendono dello 0,6% a 763,6 miliardi contro attese di più 0,1%: primo calo dopo dieci mesi di crescita, e toglie l’ultimo argomento a chi sosteneva che la domanda interna giustificasse un altro rialzo',
    'La probabilità di un rialzo a settembre scende al 29,3%, sotto il 30% per la prima volta in questa fase, dal 33,0% della mattina e da circa il 55% di una settimana fa: quattro diffusioni consecutive senza una sola che la contraddica',
    'Il biennale va a 4,119%, minimo di giornata e meno 2,1 punti base sulla chiusura: è la scadenza su cui la riprezzatura si misura per prima, e ha trasmesso subito',
    'Il Dollar Index scende a 99,487 con un minimo a 99,390, terza seduta consecutiva di calo: si allontana da quota 100, che era il livello a cui la debolezza del metallo aveva una spiegazione meccanica',
    'L’oro risponde per la prima volta in quattro sedute e alle 15:20 estende: più 0,80% a 4.385,71, a poco più di un dollaro dal massimo di giornata di 4.386,91. Ha ripreso la fascia 4.350-4.360 persa nella notte e si è avvicinato ai 4.408,59 di mercoledì',
    'Il comunicato del Tesoro conferma sulla fonte primaria la domanda sotto la media al collocamento del trentennale: rapporto 2,39 contro circa 2,43, operatori primari all’11,51%, assegnato al massimo il 12,10%',
    'Gli attacchi a navi collegate ad ADNOC sono almeno sedici dal 28 febbraio, due nell’ultima settimana, e Washington dichiara di poter mantenere il blocco dei porti iraniani senza scadenza: la struttura di rischio regionale si assesta più in alto',
    'Gli acquisti netti delle banche centrali sono stati 289 tonnellate nel secondo trimestre, oltre cinque volte le 57 del primo e il record della serie per un secondo trimestre, realizzati mentre il prezzo scendeva del 16%',
  ],
  contradicting: [
    'Il canale energetico si è riaperto nel pomeriggio, e va detto perché alle 15:20 questa scheda aveva registrato l’opposto: il Brent è risalito a 88,04 dollari con più 1,11%, dopo essere sceso a 86,97 e a 87,16 nel corso della giornata, ed è avviato alla prima settimana in guadagno su tre. Sopra i 90 dollari il rischio geopolitico smetterebbe di sostenere il rifugio e tornerebbe a spingere rendimenti e attese di inflazione contro il metallo',
    'L’oro è sceso dal massimo di 4.396,88 a 4.383,36 mentre il greggio risaliva: le due cose insieme sono la prima misura di quanto il canale energetico pesi in questa fase, ed è più di quanto il racconto della giornata suggerisse',
    'Il grosso del calo sta dove il comunicato stesso lo isola: il totale scende dello 0,6%, ma al netto di auto e carburanti il calo è di 0,2% e non è distinguibile da zero. Quattro decimi su sei stanno quindi in due sole voci, e la serie non è corretta per le variazioni di prezzo, quindi un calo dei prezzi alla pompa abbassa gli incassi delle stazioni di servizio senza che i consumi reali si muovano',
    'Viene riportata anche una misura più stretta, il cosiddetto gruppo di controllo — al netto di auto, benzina, materiali da costruzione e ristorazione — a meno 0,4% contro attese di più 0,3%, con giugno rivisto da più 0,5% a più 0,4%. Non è una serie che il Census pubblichi nel comunicato anticipato, che ne dà tre: totale, netto auto, netto auto e benzina. È un calcolo di terzi e qui resta non verificato',
    'Delle tre misure del comunicato solo il meno 0,6% complessivo è distinguibile da zero al 90%: il dato al netto delle auto, meno 0,3%, e quello al netto di auto e carburanti, meno 0,2%, sono marcati dal Census come non significativi, e la revisione arriva il 16 settembre',
    'Il prezzo resta sotto i 4.408,59 della chiusura di mercoledì: la settimana è ancora in perdita, e la reazione al dato ha meno di un’ora di vita in una seduta americana appena aperta',
    'La parte lunga della curva non ha seguito quella breve: il decennale è invariato a 4,640% e il trentennale resta sopra il 5,23%, quindi il premio richiesto sul debito lungo non è stato toccato dal dato sul consumo',
    'Il canale energetico si è chiuso: il Brent è tornato negativo sulla giornata a 86,97 dollari dopo un massimo a 88,68, quindi il premio geopolitico non sta fornendo sostegno al rifugio',
    'Questa settimana due letture intraday scritte su una reazione di poche ore sono state smentite dalla chiusura: la stessa cautela vale per la risposta descritta adesso',
    'Le nuove misure americane contro l’Iran restano un annuncio senza contenuto pubblicato, e su questa scala valgono quanto i sei annunci di distensione contati la settimana scorsa',
  ],
  constraints: [
    {
      label: 'Scarsità di greggio misurata nei serbatoi americani',
      value: 'più 17,4 mln barili in una settimana',
      baseline: 'a 424,4 mln complessivi; consenso meno 1,7, stima di settore più 9,1',
      against:
        'Tre osservazioni convergenti sulla scarsità, raccolte qui in due giorni e usate per alzare la ' +
        'forza della lettura: l’agenzia americana che dà 600.000 barili al giorno indisponibili fino a ' +
        'fine 2027, l’agenzia internazionale che porta l’offerta mondiale attesa nel 2026 a meno 4,3 ' +
        'milioni di barili al giorno da meno 3,7, e il conteggio dei transiti a Hormuz sceso a otto navi ' +
        'martedì con una sola in uscita. Due sono previsioni e la terza è un flusso stimato da un ' +
        'fornitore privato, con un secondo fornitore che per lo stesso giorno ne conta undici.',
      watch:
        'La diffusione settimanale dell’agenzia statunitense, ogni mercoledì. Il numero della settimana al ' +
        '7 agosto è il maggior aumento dal gennaio 2023 e arriva contro un consenso che attendeva un calo: ' +
        'sulla scala usata qui uno stock ufficiale batte un flusso stimato, e questa è la prima volta che ' +
        'la scarsità viene cercata dove si accumula invece che dove passa. Quello che scioglierebbe il ' +
        'dubbio nel verso opposto è la composizione, pubblicata nella stessa tabella: se l’aumento venisse ' +
        'da un rilascio di riserve strategiche non sarebbe offerta che abbonda ma un ammortizzatore che si ' +
        'consuma, e il numero significherebbe il contrario di quello che sembra.',
      state: 'sciolto',
    },
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
      value: 'otto navi martedì, una sola in uscita',
      baseline: 'contro una media a dieci giorni di ≈ 12 e 130-140 prima del conflitto',
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
        'allunga, ed è il sesto punto aperto in quattro giorni. Il 12 e il 13 agosto la serie arriva al suo ' +
        'esito più netto, e la simmetria vale più di ciascuna delle due voci: mercoledì il presidente ' +
        'americano scrive che gli Stati Uniti hanno «il controllo totale» dello Stretto e che il blocco ' +
        'navale è «un muro d’acciaio»; giovedì Hossein Taeb, rimesso a capo dei Basij da appena tre giorni, ' +
        'dichiara all’agenzia Fars che lo Stretto è «sotto la gestione e il controllo della Repubblica ' +
        'islamica» e che l’America è stata sconfitta ancora. Due rivendicazioni di sovranità che si ' +
        'escludono a vicenda sulla stessa acqua, a ventiquattr’ore di distanza, mentre il conteggio dei ' +
        'transiti non si muove di una nave. Nessuna delle due è verificabile e nessuna delle due sposta il ' +
        'numero: quello che aumenta è la probabilità che qualcuno provi a dimostrarla.',
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
        'rinviato, e alla parte lunga della curva resta una variabile in meno. Il 12 agosto arriva però il ' +
        'numero che può rimetterlo in gioco: il rendiconto del Tesoro porta il disavanzo cumulato ' +
        'dell’anno fiscale a 1.799 miliardi in dieci mesi, oltre i 1.775 dell’intero anno precedente, con ' +
        'le spese di luglio a più 22% contro entrate a meno 1%. Un disavanzo più grande non è ancora carta ' +
        'da collocare — lo diventa solo quando il rifinanziamento allarga le aste lunghe — ma è la ' +
        'condizione perché accada, e il vincolo passa da sciolto a in via di allentamento nel verso ' +
        'opposto: non si sta stringendo di nuovo, si sta preparando a farlo.',
      state: 'si-allenta',
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
      now: 31.6,
      display: '31,6%',
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
      now: 88.6,
      display: '≈ 88,6 $',
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
      now: 4.117,
      display: '4,117%',
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
      now: 4.695,
      display: '4,695%',
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
      label: 'Dollar Index',
      now: 99.41,
      display: '99,410',
      marks: [
        {
          at: 99.795,
          display: '99,795',
          kind: 'logora',
          note: 'era il massimo della giornata quando è stata scritta la lettura delle 16:52, ed è stato superato nel giro di un’ora: sopra questo livello il cambio ha smesso di aiutare il metallo',
        },
        {
          at: 99.935,
          display: '99,935',
          kind: 'invalida',
          note: 'massimo della giornata del 13 agosto: il livello si sposta ogni giorno perche e ancorato a quello che il mercato ha stabilito, non a una cifra tonda. Una chiusura sopra direbbe che il calo seguito all’indice dei prezzi non è stato solo restituito ma annullato, e la lettura intraday decade',
        },
      ],
    },
    {
      label: 'XAU/USD',
      now: 4376.59,
      display: '4.376,59 $',
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
    'il-breve-scende-e-il-lungo-sale',
    'il-terzo-attacco-in-due-giorni-e-il-primo-che-toglie-barili',
    'la-fiducia-crolla-e-le-attese-di-inflazione-salgono',
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
