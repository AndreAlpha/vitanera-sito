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
  updatedAt: '2026-08-19T09:10:00+02:00',
  checkedAt: '2026-08-19T10:47:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'ribassista',
      strength: 'bassa',
      regime:
        'La prima seduta liquida dopo tre giorni di mercati chiusi ha risposto a due domande, e le due ' +
        'risposte non concordano. Alla prima — il premio accumulato in sette letture geopolitiche esiste? — ' +
        'ha risposto no: l’oro ha aperto intorno a 4.373 dollari, cioè sotto i 4.376,59 della chiusura di ' +
        'venerdì, senza alcun salto. Alla seconda — la combinazione temuta si forma? — ha risposto ancora ' +
        'no, e questa volta a favore del metallo: il Brent è salito fino a 89,40 dollari e i rendimenti sono ' +
        'scesi lo stesso, con il decennale a 4,684% sotto la chiusura di venerdì, il biennale a 4,156% e il ' +
        'dollaro a 99,52. L’oro è a 4.391,07 con più 0,4% perché il rendimento alternativo è scivolato, non ' +
        'perché una nave non è passata. La forza sale a media per la qualità della prova, non per ' +
        'l’ampiezza del movimento: per la prima volta in una settimana la catena causale è osservata invece ' +
        'che dedotta a mercati chiusi. Riverificato alle 11:45, e la forza resta media per una ragione che ' +
        'va detta invece di essere nascosta in un numero. Il test dichiarato stamattina era una tenuta ' +
        'sopra i 4.400 dollari, e lo spot è a 4.400,15: quindici centesimi sopra, in una sola rilevazione, ' +
        'senza che la fascia 4.435-4.450 sia stata avvicinata. Alzare la forza qui significherebbe usare la ' +
        'soglia quando conviene, dopo che questo archivio si era rifiutato di alzarla l’11 agosto per ' +
        'quattordici dollari mancanti. Conta di più il motore, che non si è mosso: fra le 09:20 e le 11:45 ' +
        'il biennale è passato da 4,156% a 4,155%, il decennale da 4,684% a 4,681%, la probabilità di un ' +
        'rialzo a settembre da circa il 30% al 29%, e nel frattempo non è uscita alcuna diffusione ' +
        'macroeconomica. Nove dollari sul metallo contro tre millesimi di punto sul decennale: la ' +
        'separazione fra greggio e curva regge — Brent di nuovo a 89,40 e poi 89,28, WTI a 81,74 — ma il ' +
        'canale monetario sta fermo mentre il prezzo sale, e questo è un rialzo che si allontana dalla ' +
        'propria spiegazione invece di avvicinarvisi. La mattina del 18 agosto la direzione scende a ' +
        'neutrale, e il meccanismo che la fa scendere è quello dichiarato da cinque letture: il Brent ha ' +
        'chiuso a 90,87 e ha esteso a 91,49, il decennale ha superato il 4,695% chiudendo al 4,712% e sta ' +
        'ora al 4,726%, il trentennale ha toccato il 5,321%, e il metallo è passato da 4.431,09 della ' +
        'sessione asiatica a 4.391,14. La clausola era scritta bene e ha agito con un giorno di ritardo. ' +
        'Non scende sotto il neutrale per due ragioni misurabili: il movimento è di mezzo punto ' +
        'percentuale, e la gamba monetaria non ha ceduto — pausa a settembre attorno al 65%, dollaro a ' +
        '99,60 dopo un rialzo di un decimo, biennale fermo attorno al 4,16%. Il caso pienamente ' +
        'sfavorevole richiede che ceda anche quella. Riverificato alle 11:25 senza pubblicare, perché non ' +
        'c’è un fatto nuovo da pubblicare: la direzione resta neutrale e la forza resta media, ma il quadro ' +
        'va registrato lo stesso, perché per tre ore il prezzo non ha confermato il proprio meccanismo. Le ' +
        'due cause indicate alle 08:40 si sono mosse in versi opposti fra loro — decennale a circa 4,740% e ' +
        'trentennale a 5,327%, massimo dal 2007, contro un Brent sceso da 91,49 a 91,22 — e il metallo, ' +
        'invece di seguire l’una o l’altra, è risalito a 4.397,42 con meno 0,4%, sei dollari sopra la ' +
        'rilevazione del mattino. Reuters continua ad attribuire la pressione a rendimenti alti e petrolio ' +
        'caro, e la spiegazione regge sulla giornata; sulle ultime tre ore no. Quello che è cambiato davvero ' +
        'sta in un numero solo, e non è il prezzo dell’oro: il decennale è a un punto base dal 4,75% ' +
        'dichiarato ieri sera come livello oltre il quale il costo-opportunità smette di essere assorbibile ' +
        'con il solo sostegno del cambio. Non è scattato, e un quasi non vale un sì: questo archivio si era ' +
        'già astenuto per quattordici dollari l’11 agosto e per quindici centesimi ieri mattina. ' +
        'Nel pomeriggio il dubbio si scioglie dal lato ' +
        'previsto: la rilevazione Reuters delle 16:45 dà l’oro attorno a 4.388 dollari con più 0,3%, con ' +
        'Investing fra 4.389 e 4.404. I 4.400 sono stati attraversati due volte in una giornata e non ' +
        'tenuti nessuna delle due, che è il comportamento tipico di un livello tondo su cui si accumulano ' +
        'ordini. La forza resta media e la direzione non scende, perché il rientro è di una dozzina di ' +
        'dollari e i due sostegni sono ancora al loro posto — dollaro sui minimi da circa due mesi e ' +
        'rendimenti in lieve calo — ma il test dichiarato stamattina resta non superato, e adesso è stato ' +
        'mancato due volte. In serata il quadro si rovescia, e per una ragione che questa scheda aveva ' +
        'scritto in anticipo invece di trovarla adesso. L’oro passa a 4.409,94 dollari con più 0,78% e poi ' +
        'a 4.426,52 con più 1,2%, mentre il decennale è tornato al 4,70% e il trentennale sta al 5,29%: è ' +
        'la condizione composta dichiarata l’11 agosto — un oro sopra i 4.400 con il decennale ancora sopra ' +
        'il 4,70% — mancata allora per quattordici dollari e diventata ineseguibile il giorno dopo, quando ' +
        'il rendimento scivolò sotto la soglia mentre il metallo era ancora in viaggio. Oggi le due gambe ' +
        'ci sono insieme, con ventisei dollari di margine invece di quindici centesimi. La direzione sale ' +
        'quindi a rialzista, e la forza resta media perché la prova è tecnica e non causale: dice che il ' +
        'metallo assorbe un costo-opportunità ai massimi da quasi vent’anni, non chi lo stia comprando. ' +
        'Il sostegno che rende possibile l’assorbimento è uno solo ed è il cambio, con il Dollar Index a ' +
        '99,42, minimo da giugno: è quello il numero da guardare, non l’oro. Il pomeriggio del 18 agosto ' +
        'aggiunge la seconda mancata trasmissione della giornata, e va contata perché è di segno opposto ' +
        'alla prima. Alle 14:30 escono quattro dati americani e tre sono favorevoli al metallo — prezzi ' +
        'all’importazione a meno 0,4% sul mese contro attese di più 0,1% con giugno rivisto da più 0,3% a ' +
        'meno 0,3%, prezzi all’esportazione a meno 1,3%, avvii di costruzione a 1,239 milioni contro ' +
        '1,34-1,35 — e nessuno dei quattro anelli della catena si forma: il biennale sale di due o tre ' +
        'punti base invece di scendere, il decennale passa da 4,740% a circa 4,739%, il Dollar Index resta ' +
        'a 99,63 e l’oro resta fra 4.393 e 4.395 dollari con meno 0,5%. Stamattina il prezzo non aveva ' +
        'seguito le cause che lo spingevano giù; adesso non segue nemmeno quelle che lo spingerebbero su. ' +
        'La direzione resta neutrale e la forza resta media proprio per questo: quando un mercato non ' +
        'prezza né in un verso né nell’altro, la lettura da tenere è quella che dice che non sta guardando ' +
        'lì. Nel corso della sera quella sospensione si scioglie, e si scioglie dal lato peggiore: la ' +
        'direzione scende sotto il neutrale. Il metallo perde i 4.381 dollari indicati stamattina come ' +
        'primo supporto — 4.369,82 alle 19:11, chiusura a 4.364,90 con meno 1,1% — e li perde mentre due ' +
        'cose che avrebbero dovuto sostenerlo accadono insieme: un risk-off azionario vero, con gli indici ' +
        'americani vicini ai minimi di due settimane e i semiconduttori fra meno 3,7% e meno 5,4%, e un ' +
        'rientro dei rendimenti dai massimi, con il decennale dal 4,7478% a circa 4,708% e il trentennale ' +
        'dal 5,3371% a 5,2868%. Due rifiuti nello stesso giorno smettono di essere rumore. La spiegazione ' +
        'che regge è che il prezzo stia guardando il livello assoluto del rendimento alternativo e non la ' +
        'sua variazione, e quel livello non è rientrato: l’inflazione di pareggio ferma al 2,27% su cinque ' +
        'anni e al 2,30% su dieci dice che il rendimento reale a dieci anni sta attorno al 2,4%, ed è ' +
        'quella la grandezza da battere. La forza resta media e non sale ad alta per due ragioni ' +
        'misurabili che vanno contate con la stessa serietà: i rendimenti hanno mollato i massimi, e la ' +
        'ripresa dei carichi sauditi dentro lo Stretto può togliere una parte del premio di scarsità sul ' +
        'barile. Il caso pienamente ribassista richiede che nessuna delle due cose si confermi. La notte fra il 18 e il 19 agosto non cambia la direzione e aggiunge una ripetizione che vale più di un livello. Il metallo ha chiuso la fase americana a 4.344,82 dollari con meno 1,61%, perdendo i 4.350 dopo i 4.381, ed è risalito soltanto a 4.342,33 con più 0,2% nella sessione asiatica per poi tornare a circa 4.337,6 alle 09:06. Nel frattempo i sostegni si sono rafforzati invece di cedere: decennale a 4,702%, trentennale a 5,282%, biennale attorno al 4,17%, Dollar Index a 99,65 vicino ai minimi di più mesi, e in Asia un risk-off vero con il Nikkei a circa meno 2,6%, l’indice MSCI Asia-Pacifico esclusa Giappone a meno 1,7% e il Kospi oltre il meno 5% in alcune rilevazioni. È la terza seduta consecutiva in cui il metallo non usa un rientro dei rendimenti e la quarta occasione in cui non usa un risk-off: una volta è rumore, tre volte sono una descrizione. Nella stessa notte due missili balistici lanciati verso il traffico marittimo nello Stretto sono stati intercettati e sono caduti in mare, e il greggio li ha registrati con un più 0,5% sul WTI: un attacco che non toglie capacità non muove il prezzo, e la chiusura americana era comunque precedente al lancio. Riverificato alle 10:47 senza pubblicare, perché non c’è un fatto nuovo da pubblicare: la direzione resta ribassista e la forza scende da media a bassa. Quello che è cambiato è proprio la ragione che teneva alta la forza. Per tre sedute questo archivio ha registrato un metallo che non usava i propri sostegni; stamattina li usa, e per la prima volta i tre si muovono insieme nel verso giusto — oro a 4.359,58 dollari con più 0,6%, Dollar Index a 99,55, decennale a 4,686% e trentennale a 5,268%. La direzione non si muove perché la misura per muoverla era stata scritta in anticipo e chiede una chiusura: i 4.365 dollari dichiarati alle 04:25, e alle 10:47 ne mancano 5,42 con la seduta aperta. Vale quello che questo archivio ha già fatto per quattordici dollari l’11 agosto, per quindici centesimi il 17 e per due millesimi di punto sul decennale il 18: un quasi non vale un sì, e una soglia che si onora quando conviene smette di misurare. Il resto del controllo non aggiunge fatti: Brent a 91,44 e WTI a 85,45 sono gli stessi numeri delle 09:10, il collocamento ventennale e i verbali erano già in archivio, e la probabilità di pausa si sposta di tre punti al 67% senza che sia uscita alcuna diffusione.',
      invalidation:
        'Un oro che recupera i 4.365 dollari in chiusura entro giovedì 20 agosto: è il limite superiore della fascia persa nella notte, ed è un livello stabilito dal mercato invece che tondo. Sopra quel prezzo la direzione andrebbe riportata a neutrale, perché il metallo avrebbe restituito la rottura invece di consolidarla. Oppure un Brent che chiude sotto gli 88 dollari entro venerdì 21 agosto: sarebbe il segno che gli adattamenti al blocco stanno togliendo premio davvero, e la gamba energetica di questa lettura cadrebbe. Nell’altro verso, un oro che chiude sotto i 4.320 dollari entro venerdì 21 direbbe che il rendimento reale agisce più in fretta di quanto una forza media ammetta, e la lettura andrebbe portata ad alta invece che rivista.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale-ribassista',
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
        'pendenza. Il 15 agosto in serata la gamba dell’offerta si sgonfia invece di gonfiarsi, e per una ' +
        'volta la correzione arriva dalla fonte e non dal prezzo: Reuters precisa che a Ust-Luga l’attacco ' +
        'del 14 agosto ha danneggiato l’impianto di condensato di Novatek senza interrompere le ' +
        'esportazioni di petrolio, quindi i terminali russi fermi passano da due a uno e resta soltanto ' +
        'Sheskharis. Nello stesso momento arriva il primo numero che misura la conseguenza, e va nel verso ' +
        'opposto a quello atteso: le importazioni turche dai porti russi scendono da circa 1,2 milioni di ' +
        'tonnellate a giugno a 900.000 a luglio, con agosto stimato attorno a 200.000, perché Ankara ha ' +
        'sostituito con Brasile e Guyana. Un compratore che sostituisce non rincara il barile scarso: lo ' +
        'shock resta sull’offerta russa invece di diventare un prezzo mondiale. Sull’arco dei giorni il ' +
        'fronte del Mar Nero è quindi la gamba più debole delle due, perché è l’unica che ha una ' +
        'deviazione già percorsa, mentre per Hormuz una deviazione non esiste. Il 16 agosto quella ' +
        'osservazione riceve un secondo caso, e con un atto invece che con un flusso: l’India ha imposto ' +
        'alle proprie raffinerie nuovi obiettivi di produzione domestica di GPL per aumentare le scorte e ' +
        'ridurre la vulnerabilità alle interruzioni dal Medio Oriente. Un compratore che sostituisce e uno ' +
        'che accumula fanno la stessa cosa al premio geopolitico: lo attenuano, perché ogni misura di ' +
        'sicurezza energetica presa a valle rende il collo di bottiglia a monte meno capace di muovere il ' +
        'prezzo mondiale. Nella stessa giornata Reuters ricostruisce le opzioni con cui Washington ' +
        'potrebbe stringere sull’Iran — raffinerie indipendenti cinesi, banche cinesi, spedizionieri, ' +
        'aviazione, dazi secondari sui Paesi terzi — ma nessuna è pubblicata, quindi su questo orizzonte ' +
        'non entra: restano preferenze dichiarate, e lo strumento dei dazi secondari è già in archivio dal ' +
        '7 agosto nella sua versione russa, approvata dal Senato 86 a 11 e ancora ferma alla Camera. Il 17 ' +
        'agosto arrivano due elementi su questo orizzonte, e vanno tenuti separati per solidità. Il primo è ' +
        'una diffusione statistica: il PIL giapponese del secondo trimestre cresce dell’1,1% annualizzato ' +
        'contro il 2,0% atteso, con consumi privati fermi contro un più 0,5% previsto e investimenti delle ' +
        'imprese a meno 1,2% contro un più 0,4%. Sono le voci che la Banca del Giappone ha dichiarato di ' +
        'guardare, quindi il dato agisce contro l’attesa di una stretta a settembre e accorcia l’elenco dei ' +
        'rendimenti globali che un metallo senza cedole deve battere — ma il cambio si è mosso nel verso ' +
        'opposto, con lo yen più forte dello 0,2% a 159,06 e il dollaro a 99,52, perché il mercato sta ' +
        'pesando i dati americani deboli più di quello giapponese. Il secondo è un annuncio, e resta tale: ' +
        'l’Unione europea dichiara di voler proporre in autunno il pacchetto di sanzioni più ampio ' +
        'dall’inizio della guerra, con circa un terzo di entità russe in più, ma senza calendario né settori ' +
        'e quindi senza contenuto energetico verificabile. Sull’orizzonte dei giorni conta il primo, non il ' +
        'secondo. Nel pomeriggio del 17 agosto arrivano gli altri due elementi che questa lettura registra, ' +
        'e vanno tenuti separati per solidità come i precedenti. Il primo è geopolitico e dichiarato: un ' +
        'alto funzionario iraniano non nominato dice a Reuters che Teheran è pronta a una risposta militare ' +
        '«tempestiva e precisa» e a passare da una postura difensiva a una offensiva se il blocco navale ' +
        'continuerà, con un termine di alcune settimane per vedere progressi diplomatici. Sulla scala usata ' +
        'qui resta una preferenza dichiarata e non sposta la direzione — il conteggio dei transiti è fermo a ' +
        'cinque navi sabato e nessuna domenica, e il Brent è a 88,95 dollari con più 0,5% invece di rompere ' +
        'i 90 — ma cambia una cosa che le sette dichiarazioni precedenti non cambiavano: adesso c’è una ' +
        'data, e una data è l’unica parte di una posizione dichiarata che produce un fatto verificabile. Il ' +
        'secondo elemento è quello con il fondamento più solido, ed è una rilevazione invece di una voce: il ' +
        'sondaggio Reuters condotto fra il 12 e il 17 agosto trova la grande maggioranza degli economisti ad ' +
        'attendersi la Federal Reserve ferma al 3,50-3,75% per tutto il resto del 2026. Non è una decisione ' +
        'e non va contata come tale, ma è la prima misura organizzata del fatto che il consenso ' +
        'professionale ha finito di riprezzare la sequenza di dati deboli seguita qui una diffusione alla ' +
        'volta. Il punto operativo sta nella distanza: il prezzo di mercato assegna ancora il 30-33% a un ' +
        'rialzo a settembre, il sondaggio quasi zero, e finché quella distanza esiste la riprezzatura può ' +
        'proseguire a favore del metallo senza bisogno di un dato nuovo. In serata arrivano le due ' +
        'diffusioni che avrebbero potuto chiudere quella distanza dal lato sbagliato, e non lo fanno: ' +
        'l’Empire State di agosto esce a 20,6 contro 10,6 attesi e 15,6 di luglio, massimo da oltre ' +
        'quattro anni, con nuovi ordini a 17,3, occupazione a 9,3 e soprattutto prezzi pagati in salita a ' +
        '58,6 da 52,3; il NAHB sale a 35 contro 33 attesi, con le condizioni di vendita correnti a 39 da ' +
        '37. Sono due sorprese al rialzo, la seconda delle quali su un livello che resta comunque molto ' +
        'depresso — sotto 40 da sedici mesi, la striscia più lunga dal 2012, con il 30% dei costruttori ' +
        'che taglia i prezzi. Il punto non è la loro forza ma la loro conseguenza mancata: il biennale ' +
        'resta attorno al 4,155% e la probabilità di rialzo attorno al 33%, cioè dove stavano prima. ' +
        'Vale la cautela che questo archivio applica alle indagini parziali: l’Empire State misura un ' +
        'solo distretto ed è la prima indagine manifatturiera del mese, quindi anticipa e non conclude, e ' +
        'la stessa parzialità che le impedisce di riprezzare la Fed le impedisce anche di essere ' +
        'archiviata. La componente da seguire è quella dei prezzi pagati, perché è l’unica che tocca il ' +
        'canale su cui questa lettura poggia. Nella stessa serata la gamba energetica riceve una ' +
        'spiegazione materiale invece di una dichiarata: Reuters riferisce che Saudi Aramco sta trattando ' +
        'carichi di settembre con consegne nave-nave al largo di Fujairah, fuori dallo Stretto, e che ' +
        'ADNOC ha collocato almeno quattordici milioni di barili spot a raffinerie asiatiche. È il primo ' +
        'meccanismo che spiega perché il Brent resti sotto i 90 dollari con i transiti quasi azzerati, e ' +
        'va contato in due sensi: toglie il rischio di coda di un greggio che spinge i rendimenti contro ' +
        'il metallo, e toglie insieme una parte del premio che oggi lo sostiene. Fra la sera del 17 e la ' +
        'mattina del 18 agosto quella valvola smette di contenere: il Brent chiude a 90,87 dollari e ' +
        'estende a 91,49, cioè supera la soglia dichiarata il giorno prima come prova che le consegne ' +
        'fuori dallo Stretto stessero funzionando. Sull’orizzonte dei giorni il quadro cambia quindi in ' +
        'un punto solo ma decisivo: la combinazione sorvegliata da cinque letture — Brent sopra i 90 con ' +
        'il decennale sopra il 4,695% — si è formata su due chiusure e ha prodotto la sua conseguenza, ' +
        'con il metallo sotto i 4.400. Il premio di rischio non è aumentato di intensità, ha cambiato ' +
        'canale: con il greggio oltre i 91 ogni fatto geopolitico entra due volte nel prezzo dell’oro, e ' +
        'quello dell’inflazione attesa sta prevalendo su quello del rifugio. La direzione sui giorni resta ' +
        'sopra il neutrale soltanto perché la scadenza che prezza la banca centrale non si è mossa — ' +
        'biennale attorno al 4,16%, pausa a settembre attorno al 65% — ed è l’ultima delle tre gambe a ' +
        'reggere. Va aggiunto un vincolo che il solo prezzo del greggio non cattura: l’agenzia ' +
        'internazionale per l’energia stima la capacità di raffinazione mediorientale ancora 2,2 milioni ' +
        'di barili al giorno sotto i livelli precedenti alla guerra, con quella russa vicina ai minimi ' +
        'ventennali. Se il collo di bottiglia è nella trasformazione e non nell’estrazione, benzina e ' +
        'gasolio possono restare cari con il Brent fermo, e la soglia dei 90 dollari usata qui come ' +
        'interruttore fra i due canali misura meno di quanto si credesse. Il pomeriggio del 18 agosto porta ' +
        'su questo orizzonte il primo blocco di dati dopo quattro giorni, e conferma la separazione fra i ' +
        'due mesi invece di scioglierla. I prezzi all’importazione di luglio scendono dello 0,4% sul mese ' +
        'contro attese di più 0,1%, con giugno rivisto da più 0,3% a meno 0,3% e la variazione annua a più ' +
        '5,9% da più 7,1%; quelli all’esportazione scendono dell’1,3% contro attese attorno a più 0,2%, con ' +
        'l’annuo a più 8,2% da più 10,2%. Il calo è quasi tutto energia — carburanti importati a meno 7,2% ' +
        'sul mese, petrolio e prodotti petroliferi a meno 7,5% — e al netto dei carburanti l’indice sale ' +
        'invece dello 0,4% sul mese e del 4,5% sull’anno. Nella stessa diffusione l’edilizia si spacca: ' +
        'avvii di costruzione a 1,239 milioni annualizzati contro 1,34-1,35 attesi, meno 12,4% sul mese e ' +
        'meno 13,5% sull’anno con le unifamiliari a 808.000, ma permessi a 1,443 milioni contro circa ' +
        '1,370, più 5,0% sul mese. Alle 15:15 il calendario di questo sito registra anche la produzione ' +
        'industriale di luglio a più 0,2% contro più 0,3% atteso, con giugno però rivisto al rialzo da più ' +
        '0,1% a più 0,3%, quindi con un livello sopra e non sotto le attese. Nessuno dei cinque rafforza il ' +
        'caso per un rialzo e due lo indeboliscono, ma la direzione non sale, e la ragione è la stessa da ' +
        'una settimana: la voce che fa scendere l’indice è il carburante importato, cioè esattamente quella ' +
        'che ad agosto sta salendo. Sono dati che misurano il mese in cui il Brent stava sotto gli 85 ' +
        'dollari, e il mercato lo ha mostrato senza ambiguità non muovendo il decennale di un punto base. ' +
        'Alle 16:00 arriva il quinto dato e la conferma dell’ultimo: le vendite immobiliari in corso di ' +
        'luglio scendono del 2,3% sul mese contro un consenso fra più 0,1% e più 0,3%, con l’indice a 71,2 ' +
        'da 72,9, il livello più basso da gennaio, cali in tutte e quattro le regioni e giugno rivisto a ' +
        'meno 4,8% da meno 5,4%. Sommando i due mesi la caduta è del 7,0% contro un meno 2,2% su base ' +
        'annua: il deterioramento è recente e concentrato. È l’unica diffusione della giornata che non ' +
        'misura una finestra chiusa, perché conta contratti firmati e non transazioni concluse, quindi ' +
        'anticipa di uno o due mesi. La sera del 18 agosto questa lettura scende però da ' +
        'neutrale-rialzista a neutrale, e la ragione non è il prezzo ma il fatto che la giornata ha tolto ' +
        'la spiegazione a cui la direzione era appesa. La lettura sui giorni poggiava sulla banca centrale ' +
        'che esce dal prezzo, e la banca centrale è uscita ancora: cinque diffusioni morbide, probabilità ' +
        'di un rialzo a settembre scesa attorno al 31% con pausa attorno al 70%, dollaro fermo a 99,58. Il ' +
        'metallo ha chiuso lo stesso a 4.364,90 dollari con meno 1,1%, vicino ai minimi. Il numero che ' +
        'spiega perché è arrivato in serata ed è il primo di questo tipo in archivio: l’inflazione di ' +
        'pareggio ricavata dai titoli indicizzati resta al 2,27% su cinque anni e al 2,30% su dieci, ' +
        'quindi il rialzo dei rendimenti lunghi non è inflazione attesa e il rendimento reale a dieci ' +
        'anni, per differenza con il nominale a circa 4,708%, sta attorno al 2,41%. È la grandezza su cui ' +
        'un dato debole non agisce, perché abbassa insieme il rendimento nominale e l’inflazione attesa e ' +
        'lascia la differenza dov’era. La direzione non scende sotto il neutrale perché la gamba monetaria ' +
        'non ha ceduto e perché i rendimenti hanno cominciato a rientrare dai massimi; ma la ragione per ' +
        'tenerla sopra è decaduta, e va detto invece di essere lasciata dov’era. Nella notte fra il 18 e il 19 agosto la direzione scende sotto il neutrale, e la ragione è un fatto nuovo più una serie. Il fatto: il margine del gasolio americano sul greggio ha superato per la prima volta i cento dollari al barile, a circa 102,20, con scorte di distillati ai livelli di agosto più bassi dal 1996 e una lavorazione mondiale di luglio circa cinque milioni di barili al giorno sotto quella di un anno prima. È la misura dell’ipotesi scritta qui il 18 agosto alle 08:40 — se il collo di bottiglia si sposta dall’estrazione alla trasformazione, i carburanti restano cari con il barile fermo — e sposta la pressione energetica su un canale che una soglia sul Brent non intercetta. Con l’inflazione di pareggio ferma al 2,27% su cinque anni e al 2,30% su dieci, quella pressione entra come rendimento reale e non come inflazione attesa, cioè nella forma peggiore per il metallo. La serie: negli ultimi due collocamenti sulle scadenze lunghe il Tesoro si è aggiudicato sopra il quotato di mercato in entrambi i casi, con domanda pari o sotto la propria media, e stasera alle 19:00 arriva il terzo — sedici miliardi a vent’anni — un’ora prima dei verbali del FOMC. Due casi non sono una serie statistica e va detto, ma sono gli unici due della fase in cui la parte lunga è tesa, e concordano. La forza resta media perché la stessa serata può smentire entrambe le gambe.',
      invalidation:
        'Un’inflazione di pareggio a cinque anni sopra il 2,50% entro venerdì 21 agosto, contro il 2,27% del 18 sera: direbbe che il rincaro dei prodotti raffinati è entrato nelle attese e non nel rendimento reale, e il segno di questa lettura si rovescerebbe senza che il margine sul gasolio si muova di un dollaro. Oppure un collocamento a vent’anni che si aggiudica sotto il quotato di mercato con domanda sopra la media delle ultime dieci aste sulla stessa scadenza: interromperebbe la serie di due su due, che è la seconda gamba della direzione. Oppure un’inflazione di pareggio a dieci anni sopra il 2,60% entro venerdì 21 agosto: direbbe che il mercato ha cominciato a prezzare il barile sopra i 90 dollari nell’inflazione attesa, e il rialzo dei rendimenti lunghi tornerebbe a essere un argomento a favore del metallo invece che contro. È la condizione che rovescerebbe questa lettura, e la sola che possa riportarla sopra il neutrale senza bisogno di un dato nuovo. Oppure, nel verso opposto, un pareggio a dieci anni sotto il 2,10% con il nominale ancora sopra il 4,70%: porterebbe il rendimento reale sopra il 2,60% e la direzione andrebbe portata sotto il neutrale anche sui giorni. Oppure una probabilità di rialzo a settembre che supera il 40% entro venerdì 21 agosto, cioè il livello che corrisponde a una pausa sotto il 60%: aggiungerebbe la gamba monetaria alle due già ostili, ed è la sola configurazione in cui questo archivio non ha mai visto il metallo reggere. Oppure un biennale che si porta sopra il 4,218%, il massimo del 12 agosto, dopo esserci arrivato a otto millesimi nel pomeriggio del 18: direbbe che la tensione ha smesso di essere confinata alla parte lunga ed è diventata una riprezzatura della banca centrale. Resta infine l’indice dei prezzi all’importazione di agosto, a metà settembre, con la componente carburanti di nuovo in aumento sul mese dopo il meno 7,2% di luglio: è il test che le diffusioni di questa finestra non possono fare.',
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
        'quella che comprano le riserve ufficiali, non contro la seduta di giovedì. Il 17 agosto alle ' +
        '22:00 la gamba fiscale riceve la metà che le mancava, e per questo la lettura di fondo si tocca ' +
        'dopo giorni in cui era stata lasciata dov’era. Finora il premio a termine era stato spiegato qui ' +
        'solo dal lato dell’offerta — disavanzo cumulato oltre i 1.799 miliardi, collocamenti del Tesoro, ' +
        'e da lunedì l’emissione societaria legata agli investimenti in intelligenza artificiale. I dati ' +
        'sui capitali internazionali di giugno guardano invece a chi quei titoli dovrebbe comprarli, e ' +
        'dicono che la domanda marginale si è raffreddata proprio sulla duration lunga: acquisti esteri ' +
        'netti di titoli a lungo termine a 207,1 miliardi da 262,8, e dopo gli aggiustamenti a 172,7 da ' +
        '232,7. Sul solo Treasury il dettaglio è più severo — investitori privati esteri a 16,6 miliardi ' +
        'da 53,6, istituzioni ufficiali estere venditrici nette per 9,8 dopo acquisti per 3,0. Non è una ' +
        'fuga: il flusso complessivo resta in entrata a 133,5 miliardi contro 132,2, e va detto perché ' +
        'separa la questione del debito da quella del dollaro. È però la prima misura di domanda a ' +
        'sostegno di una pendenza che finora poggiava solo su misure di offerta, e se il raffreddamento ' +
        'prosegue la parte lunga resta alta a prescindere da che cosa faccia il petrolio. Due limiti da ' +
        'tenere: la rilevazione misura giugno ed esce a metà agosto, quindi non spiega alcun prezzo ' +
        'corrente, e per questa serie non esiste un consenso affidabile, quindi il confronto utile è con ' +
        'il mese precedente e non con un’attesa. Il 18 agosto il dettaglio per Paese di quella stessa ' +
        'diffusione aggiunge la cosa che mancava, cioè i nomi: le detenzioni estere complessive scendono a ' +
        '9,299 trilioni da 9,371, e il calo è concentrato nei tre maggiori detentori — Giappone da 1,143 a ' +
        '1,116 trilioni, Regno Unito da 948,6 a 939,9 miliardi, Cina da 659,3 a 633,4 miliardi. Il dato ' +
        'cinese è quello che porta la storia più lunga: è il livello più basso dal settembre 2008, e su base ' +
        'annua la riduzione supera il 13%. Accostato all’altra serie che questa scheda segue da settimane ' +
        '— ventuno mesi consecutivi di acquisti d’oro della stessa banca centrale, con 640.000 once nel ' +
        'solo luglio — dà per la prima volta le due metà dello stesso scambio: che cosa quella riserva compra ' +
        'e che cosa lascia. L’accostamento resta però un’inferenza e va tenuto come tale: le due misure ' +
        'riguardano mesi diversi, giugno per il debito e luglio per il metallo, nessuna delle due fonti ' +
        'dichiara una sostituzione, e le taglie non sono confrontabili — venti tonnellate valgono una ' +
        'frazione dei venticinque miliardi usciti dalla posizione in Treasury. Quello che regge senza ' +
        'forzature è più stretto e basta a spostare la gamba: nello stesso trimestre lo stesso detentore ' +
        'ufficiale ha ridotto la carta americana e aumentato il metallo. Va tenuto anche il limite in senso ' +
        'opposto, perché è ciò che impedisce di chiamarla fuga: le detenzioni estere complessive restano più ' +
        'alte del 2,3% rispetto a dodici mesi prima. Il 19 agosto si aggiunge una gamba nuova, che non cambia il segno ma cambia ciò che lo sostiene. In cinque giorni il mercato dell’energia ha prodotto sei adattamenti distinti al blocco dello Stretto: la sostituzione turca del greggio russo con Brasile e Guyana, gli obiettivi indiani di produzione domestica di GPL, le consegne saudite nave-nave al largo di Fujairah, i carichi Aramco ripresi dentro Hormuz fra il 12 e il 16 agosto, la deviazione delle compagnie di shipping cinesi lontano da Hormuz e dal Bab el-Mandeb, e infine l’approvazione irakena di meccanismi di esportazione che saltano del tutto il passaggio, con i primi contratti attesi dal 1° settembre. Nessuno dei sei ha un volume dichiarato, ed è per questo che la forza non sale; ma insieme riducono l’insostituibilità del collo di bottiglia, e per il metallo questo taglia la gamba energetica del premio lasciando intatta quella del rifugio. Nella configurazione di queste settimane, in cui è proprio il canale energetico a lavorare contro l’oro attraverso il rendimento reale, il taglio arriva dal lato giusto. Va tenuto il limite in senso opposto: nello stesso giorno i transiti sono scesi a sei navi da nove, con una petroliera vuota in entrata e nessun grande carico di greggio, quindi il vincolo materiale stringe adesso e si allenterà dopo.',
      invalidation:
        'Una lettura di agosto delle riserve cinesi con acquisti sotto le 160.000 once di marzo, o un mese senza acquisti, in uscita all’inizio di settembre; la bocciatura alla Camera del provvedimento sulle sanzioni, o una versione senza dazi secondari sull’energia; aspettative a tre e cinque anni che scendono nell’indagine di agosto; il ritorno stabile del decennale sopra il 5%; la revoca dei dazi sul polisilicio prima del 4 dicembre; sulla gamba istituzionale, un atto formale di rimozione della governatrice Cook prima del 16 settembre, oppure una probabilità di rialzo a settembre che si muove di più di cinque punti su una notizia riguardante la composizione del Board; oppure, sulla gamba geopolitica, un conteggio dei transiti a Hormuz sopra le otto navi al giorno con il Brent sotto gli 80 dollari, che sarebbe la de-escalation vera; sulla gamba fiscale, il prossimo rifinanziamento trimestrale che allarga le aste a lunga scadenza rispetto ai 125 miliardi rimasti invariati, oppure conti federali di agosto con spese sotto i 667 miliardi, che direbbero che il record di luglio era calendario e non traiettoria.',
    },
  ],
  headline:
    'Il premio sul gasolio supera i cento dollari per la prima volta, e stasera il Tesoro colloca a vent’anni un’ora prima dei verbali',
  stance:
    'La notte porta un primato che questo archivio aspettava senza saperlo: il margine del gasolio ' +
    'americano sul greggio ha superato i cento dollari al barile, a circa 102,20, con scorte di ' +
    'distillati ai livelli di agosto più bassi dal 1996 e una lavorazione mondiale di luglio circa ' +
    'cinque milioni di barili al giorno sotto quella di un anno prima. È la misura dell’ipotesi ' +
    'scritta qui il 18 agosto alle 08:40 — se il collo di bottiglia si sposta dall’estrazione alla ' +
    'trasformazione, i carburanti restano cari con il barile fermo — e sposta la pressione ' +
    'energetica su un canale che nessuna soglia sul Brent intercetta. Conta contro il metallo per ' +
    'una ragione precisa e reversibile: con l’inflazione di pareggio ferma al 2,27% su cinque anni e ' +
    'al 2,30% su dieci, quella pressione entra come rendimento reale invece che come inflazione ' +
    'attesa. Il prezzo lo conferma: l’oro ha chiuso a 4.344,82 dollari con meno 1,61%, ha perso i ' +
    '4.350 dopo i 4.381, e stamattina sta a circa 4.337,6 nonostante rendimenti in calo — decennale ' +
    '4,702%, trentennale 5,282% — dollaro a 99,65 vicino ai minimi di più mesi e un risk-off ' +
    'asiatico con il Nikkei a meno 2,6%. È la terza seduta in cui i sostegni non diventano prezzo. ' +
    'Sul fronte materiale i transiti a Hormuz scendono a sei navi da nove, con una petroliera vuota ' +
    'in entrata e nessun grande carico di greggio, mentre l’Iraq approva meccanismi di esportazione ' +
    'che saltano lo Stretto dal 1° settembre: il vincolo stringe adesso e si allenterà dopo. Due ' +
    'missili balistici verso il traffico marittimo sono stati intercettati e non hanno tolto un ' +
    'barile. Stasera due prove a un’ora di distanza: il collocamento da sedici miliardi a vent’anni ' +
    'alle 19:00 e i verbali del FOMC alle 20:00, con gli ultimi due collocamenti lunghi aggiudicati ' +
    'entrambi sopra il mercato.',
  favours: [
    'Contare che cosa è già successo prima di stimare che cosa succederà: gli ultimi due collocamenti su scadenze lunghe si sono aggiudicati entrambi sopra il quotato di mercato con domanda pari o sotto la propria media, ed è il solo tasso di base disponibile per giudicare l’asta di stasera. Due casi non sono una serie, e dirlo fa parte della misura',
    'Chiedere a un attacco quanta capacità toglie invece di quanto è grande: due missili balistici intercettati e caduti in mare tolgono zero barili, e il greggio li ha registrati con mezzo punto percentuale. L’arma cambia il livello dichiarato del conflitto, non l’offerta',
    'Guardare la composizione e non il conteggio: sei transiti a Hormuz contro nove sono un calo di un terzo, ma la nave più grande in entrata era una petroliera vuota e in uscita passavano soltanto prodotti raffinati. Contati in barili invece che in scafi, quei sei valgono meno di quanto il numero suggerisca',
    'Ricordare che il primato di un prezzo non è ancora una conseguenza: fra il margine del gasolio a 102,20 dollari e il prezzo dell’oro ci sono tre anelli — trasmissione ai prezzi al consumo, reazione delle attese, reazione dei rendimenti reali — e nessuno dei tre è stato osservato',
    'Separare le due componenti di un rendimento invece di guardarne il livello: il trentennale ai massimi dal 2007 ammetteva due spiegazioni opposte per il metallo, e l’inflazione di pareggio ferma al 2,27% su cinque anni e al 2,30% su dieci ne chiude una. Un numero che si ricava per differenza fra due serie pubblicate vale più di una settimana di attribuzioni riportate',
    'Scomporre una notizia sull’offerta invece di giudicarla a occhio: tre navi da circa due milioni di barili in cinque giorni fanno 1,2 milioni al giorno, e accanto ai 670.000 attesi ad agosto da Sidi Kerir danno meno di due milioni di flusso saudita misurabile. La taglia si stima prima di decidere se la notizia conta',
    'Leggere il livello e non solo la variazione quando la revisione è più grande della sorpresa: produzione industriale a più 0,2% contro più 0,3% atteso ma con giugno rivisto da più 0,1% a più 0,3%, e grado di utilizzo al 76,3% con il mese prima rivisto da 76,1% a 76,2%. Due dati usciti sotto il consenso lasciano il livello sopra il punto in cui lo si attendeva',
    'Chiedere quanto spesso accade prima di chiedere quanto sia grave: l’abbattimento del drone sulla Romania è il quarto episodio del 2026, e la frequenza ridimensiona un fatto che la sola gravità farebbe sembrare inedito. Il tasso di base va cercato prima della reazione, non dopo',
    'Ricordare che una deterrenza che funziona sottrae premio invece di aggiungerlo: la procedura di sorveglianza aerea ha rilevato, intercettato e abbattuto senza vittime e senza reazioni dell’Alleanza, e questo rende meno probabile l’evento da cui ci si ripara. È il verso contro-intuitivo già annotato sul patto della Mecca, applicato al caso rovesciato',
    'Distinguere la qualità della misura da quella della fonte, e dirlo quando le due non coincidono: «nessuna spedizione visibile di greggio attraverso Hormuz» è la misura giusta, perché conta barili invece di scafi, e arriva dal dato meno verificabile di tutti, cioè un conteggio giornaliero di un fornitore privato. Le due metà vanno registrate insieme invece di scegliere quella che conviene',
    'Trattare il fine settimana per quello che è: fra la chiusura del venerdì e la riapertura non esiste alcuna rilevazione con liquidità dietro, quindi un fatto emerso di sabato aumenta l’ampiezza attesa del primo movimento e non il suo verso. Il quadro di metodo sul rischio del fine settimana dice di stimare l’ampiezza, non di indovinare la direzione',
    'Cercare il qualificatore dentro la stessa fonte prima che altrove: il comunicato del Census pubblica il totale e le due misure che ne tolgono le voci volatili, e il confronto fra meno 0,6% e meno 0,2% dice da solo quanto del calo stia in auto e carburanti, senza bisogno di una ricostruzione riportata',
    'Chiedere a un attacco a un’infrastruttura una cosa sola, cioè quanta capacità toglie al mercato: la raffineria di Jazan era ferma da fine luglio e il rimbalzo è rientrato in un’ora, Ust-Luga lavora e va trattata diversamente. Lo stesso metro deve poter dare risposte opposte, altrimenti non è un metro',
    'Cercare la controprova nella misura più dura disponibile: la scarsità di greggio è stata raccontata qui per sei giorni con conteggi di navi, e il primo conteggio di barili nei serbatoi dice il contrario',
    'Muovere una lettura quando decade la ragione scritta in anticipo per tenerla su, anche quando è stata scritta un’ora prima: la forza intraday scende perché due dei tre canali che la giustificavano si sono chiusi',
    'Ancorare le condizioni ai livelli che il mercato ha stabilito nella giornata — 4.362,57, 4.441,01, 99,910, 4,688% — invece che ai numeri tondi su cui si accumulano gli ordini',
    'Correggere per iscritto e subito: l’asta di stasera era da 42 miliardi e non da 39, e la correzione è stata pubblicata a parte invece di essere infilata nel testo sbagliato',
  ],
  avoid: [
    'Scrivere una condizione senza numero: il primo verdetto di invalidazione del registro è arrivato da un’analisi le cui tre condizioni dicevano «un forte calo dei rendimenti», «un dollaro in discesa» e «un XAU/USD capace di superare con decisione i massimi della mattinata». Sono scattate tutte e tre, e con gli stessi dati sarebbero potute non scattare nessuna: a decidere non è il mercato ma chi rilegge',
    'Attribuire un movimento a un evento che non si è ancora tenuto: un controllo intermedio ha collocato l’asta a vent’anni al 20 agosto, il calendario del Tesoro la dà al 19, e con la parte lunga sotto tensione una data sbagliata produce una causa sbagliata che poi nessuno torna a controllare',
    'Trattare come univoca una notizia che spinge in due versi: la sospensione dei dazi al Canada toglie domanda di rifugio e toglie insieme una spinta ai prezzi importati, e senza l’elenco delle merci colpite non si può nemmeno dire su quale metà dell’indice agisca',
    'Usare per spiegare un movimento una notizia che è arrivata dopo il movimento: i carichi sauditi sono stati caricati fra il 12 e il 16 agosto e riferiti il 18, e in quella stessa finestra il Brent è salito da 87,07 a 90,87 dollari. Quando l’ora del fatto precede l’ora del prezzo, la causa va cercata altrove, e la notizia serve al massimo a togliere un rischio di coda',
    'Scrivere una condizione su una grandezza che il dato citato non contiene: chiedere se un aumento di 17,4 milioni di barili fosse un rilascio di riserva strategica era impossibile da verificare, perché il numero era quello delle scorte commerciali, che la riserva strategica la escludono per costruzione. Una condizione che non può essere vera occupa un posto su cinque e gonfia la quota di quelle che reggono',
    'Chiamare morbido un rapporto perché due sue voci mancano il consenso di un decimo, quando le stesse due voci portano revisioni al rialzo di uno e due decimi sul mese precedente: la variazione misura il rumore di un mese, il livello misura dove si trova la produzione',
    'Scrivere condizioni a mercati chiusi senza contare che solo una seduta può risolverle: in due giorni di fine settimana sono state pubblicate sei analisi e nessuna ha avuto un prezzo con cui misurarsi, quindi l’arretrato del registro è di sei letture e trenta condizioni che la prima seduta utile giudicherà tutte insieme. Non è un argomento per non pubblicare, è un argomento per aspettarselo invece di scoprirlo',
    'Contare l’intensità di un’escalation come se fosse un effetto sull’offerta: l’incursione più vasta della guerra non ha colpito né terminali né raffinerie, mentre l’attacco molto più piccolo di venerdì ha fermato i carichi di un terminale da 700.000 barili al giorno. La domanda da porre a un attacco è quanta capacità toglie, non quanto è grande',
    'Moltiplicare una sola osservazione per il numero di analisi che l’hanno usata: le cinque letture di venerdì hanno dichiarato in gran parte le stesse otto soglie — 4.351,07, 4.400 e 4.408,59 sull’oro, 89,06 e 90 sul Brent, 33,0% e 29,3% sulla probabilità di settembre — e una sola chiusura di seduta le ha risolte tutte nello stesso verso, producendo cinque verdetti «confermata» che valgono come uno. Quando più analisi dello stesso giorno condividono la soglia, la seconda deve dichiararne una che la prima non stia già misurando',
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
    'Per la prima volta in quattro sedute il metallo usa i propri sostegni, ed è la sola cosa cambiata rispetto alle 09:10: alle 10:47 l’oro è a 4.359,58 dollari con più 0,6% mentre il Dollar Index scende a 99,55, il decennale a 4,686% e il trentennale a 5,268%. I 4.350 persi nella notte sono stati ripresi con quasi dieci dollari di margine',
    'La probabilità di una pausa a settembre sale al 67% dal 64% delle 09:10, quindi il canale monetario continua a muoversi nel verso favorevole al metallo e si allontana dalla tacca del 40% di rialzo dichiarata come soglia. Va però contato per quello che è: non è uscita alcuna diffusione, quindi sono tre punti di prezzo e non di dato',
    'I sostegni si sono rafforzati invece di cedere, ed è la ragione per cui la debolezza resta relativa: decennale a 4,702% e trentennale a 5,282% dai picchi vicini al 4,75% e al 5,3371%, biennale attorno al 4,17%, Dollar Index a 99,65 vicino ai minimi di più mesi e probabilità di una pausa a settembre attorno al 64%',
    'Il mercato dell’energia ha prodotto sei adattamenti distinti al blocco in cinque giorni, e il sesto è il primo che salta del tutto il passaggio: l’Iraq ha approvato meccanismi di esportazione che aggirano lo Stretto, con i primi contratti attesi dal 1° settembre, mentre le compagnie di shipping cinesi deviano lontano da Hormuz e dal Bab el-Mandeb',
    'Due missili balistici lanciati verso il traffico marittimo nello Stretto sono stati intercettati dalle difese emiratine e sono caduti in mare: nessuna nave colpita, nessun barile perso, e una deterrenza che funziona toglie premio invece di darlo',
    'La sospensione per tre giorni dei dazi al 50% su circa venti miliardi di dollari di merci canadesi toglie, se confermata da un accordo, una spinta futura ai prezzi importati — cioè alla sola parte dell’inflazione americana ancora in crescita, a più 4,5% sull’anno al netto dei carburanti',
    'Il rialzo dei rendimenti lunghi non è inflazione attesa, ed è la prima misura diretta di una ' +
      'domanda aperta da una settimana: l’inflazione di pareggio ricavata dai titoli indicizzati resta al ' +
      '2,27% su cinque anni e al 2,30% su dieci, appena sopra l’obiettivo dichiarato del 2%. Per il ' +
      'metallo è la metà buona di una notizia cattiva: nessuno sta prezzando il barile sopra i 90 dollari ' +
      'come inflazione futura',
    'Le vendite immobiliari in corso di luglio scendono del 2,3% sul mese contro un consenso fra più ' +
      '0,1% e più 0,3%, con l’indice a 71,2 da 72,9, il livello più basso da gennaio, cali in tutte e ' +
      'quattro le regioni e giugno rivisto a meno 4,8% da meno 5,4%. Sommando i due mesi la caduta è del ' +
      '7,0% contro un meno 2,2% su base annua: il deterioramento è recente e concentrato',
    'Il grado di utilizzo degli impianti americani è al 76,3%, 3,1 punti sotto la media storica del ' +
      '79,4%: nel settore industriale non c’è pressione da capacità, quindi un’eventuale accelerazione ' +
      'dei prezzi ad agosto non potrà essere attribuita a strozzature interne e non risponderà a un ' +
      'rialzo dei tassi',
    'Saudi Aramco ha ripreso alcuni carichi dai terminali dentro lo Stretto — tre navi da circa due ' +
      'milioni di barili ciascuna a Juaymah e Ras Tanura fra il 12 e il 16 agosto — con trasferimenti ' +
      'nave-nave a Fujairah e rotte via Yanbu e Sidi Kerir. Riduce il rischio di coda di un greggio che ' +
      'si impenna perché il maggiore esportatore non riesce fisicamente a caricare',
    'La gamba monetaria continua a lavorare nel verso giusto e non ha ceduto in nessun momento della ' +
      'giornata: probabilità di un rialzo a settembre attorno al 31% con pausa al 70%, contro il 48% di ' +
      'una settimana fa, e Dollar Index fermo a 99,58 senza alcuna accelerazione',
    'Il blocco delle 14:30 non rafforza il caso per un rialzo e in due punti lo indebolisce: prezzi ' +
      'all’importazione di luglio a meno 0,4% sul mese contro attese di più 0,1%, con giugno rivisto da ' +
      'più 0,3% a meno 0,3% e la variazione annua a più 5,9% da più 7,1%; prezzi all’esportazione a ' +
      'meno 1,3% contro circa più 0,2%, con l’annuo a più 8,2% da più 10,2%',
    'Il canale su cui i tassi alti mordono per primi continua a cedere: avvii di costruzione a 1,239 ' +
      'milioni annualizzati contro 1,34-1,35 attesi, meno 12,4% sul mese e meno 13,5% sull’anno, con le ' +
      'unifamiliari a 808.000 e meno 15,7% su base annua, e il mese precedente rivisto da 1,427 a 1,415 ' +
      'milioni',
    'Alle 11:25 del 18 agosto il metallo non ha seguito il proprio meccanismo, ed è la ragione per cui ' +
      'la direzione non scende: XAU/USD è a 4.397,42 dollari con meno 0,4%, sei dollari sopra la ' +
      'rilevazione delle 08:40, mentre il decennale saliva a circa 4,740% e il trentennale a 5,327%. Il ' +
      'primo supporto dichiarato stamattina, 4.381 dollari, non è stato avvicinato, e i futures di ' +
      'dicembre sono a 4.452,90',
    'La domanda strutturale per il metallo ha adesso le due metà invece di una: la banca centrale cinese ' +
      'compra oro da ventuno mesi consecutivi — 640.000 once nel solo luglio — e nello stesso trimestre ha ' +
      'portato le proprie detenzioni di Treasury a 633,4 miliardi, minimo dal settembre 2008 e oltre il 13% ' +
      'in meno su base annua. È la domanda meno sensibile al prezzo che esista, e continua con il ' +
      'costo-opportunità ai massimi da quasi vent’anni',
    'Il raffreddamento non è un caso isolato ma riguarda i tre maggiori detentori nello stesso mese: ' +
      'Giappone da 1,143 a 1,116 trilioni, Regno Unito da 948,6 a 939,9 miliardi, Cina da 659,3 a 633,4. La ' +
      'domanda marginale si è raffreddata più dello stock, con acquisti netti su base transazionale a 6,8 ' +
      'miliardi contro i 56,6 di maggio',
    'La gamba monetaria non ha ceduto ed è la sola rimasta: la probabilità di una pausa a settembre resta attorno al 65% contro il 52,2% di rialzo di una settimana fa, il biennale è fermo attorno al 4,16% e il dollaro è salito di un solo decimo a 99,60, restando vicino ai minimi degli ultimi due mesi. Il problema per il metallo non è il dollaro',
    'La distinzione fra dichiarato e misurato ha retto anche sotto pressione: la nave colpita in uscita dallo Stretto è segnalata da un’autorità marittima e non da una rivendicazione, ma il responsabile non è identificato — quindi resta un evento di sicurezza della navigazione e non un atto di guerra con una controparte, ed è la ragione per cui la condizione dichiarata il 17 agosto su un atto «attribuito all’Iran» non è scattata',
    'Il flusso complessivo di capitale estero verso gli Stati Uniti resta in entrata: 133,5 miliardi a giugno contro 132,2 di maggio secondo i dati TIC. La lettura sul debito lungo va tenuta separata da quella sul dollaro, e la seconda non è in discussione',
    'La prova composta dichiarata l’11 agosto si verifica per la prima volta, ed è il fatto della serata: l’oro passa a 4.409,94 e poi a 4.426,52 dollari con più 1,2% mentre il decennale è tornato al 4,70%. La condizione chiedeva le due cose insieme — un rialzo contro il rendimento alternativo, non grazie al suo calo — e in sei giorni non si erano mai presentate nello stesso momento',
    'Il margine è di ventisei dollari sopra i 4.400 invece dei quindici centesimi delle 11:45, e i futures americani di dicembre sono a 4.484,10: la differenza fra una punta e una tenuta è l’unico contenuto informativo che un livello tondo può avere',
    'Il Dollar Index scende a 99,42, minimo da giugno: è il canale che sta pagando al posto dei rendimenti il costo di tenere un metallo senza cedole, e finché resta lì l’assorbimento è possibile',
    'Due diffusioni americane sopra le attese non hanno riprezzato la Fed, ed è il fatto della serata: Empire State di agosto a 20,6 contro 10,6 attesi, massimo da oltre quattro anni, e NAHB a 35 contro 33. Il biennale resta attorno al 4,155%, il decennale al 4,681%, entrambi leggermente più bassi in giornata, e la probabilità di un rialzo a settembre è ferma attorno al 33% contro il 51,2% di un mese fa',
    'La gamba energetica ha finalmente un meccanismo invece di una coincidenza: Reuters riferisce che Saudi Aramco tratta carichi di settembre con consegne nave-nave al largo di Fujairah — fuori dallo Stretto — e che ADNOC ha collocato almeno quattordici milioni di barili spot a raffinerie asiatiche. Spiega perché il Brent resti a 88,95 dollari con i transiti quasi azzerati',
    'Il livello assoluto del NAHB resta molto depresso e ridimensiona la sorpresa: sotto 40 da sedici mesi consecutivi, la striscia più lunga dal 2012, con circa il 30% dei costruttori che taglia i prezzi e quasi due terzi che offrono incentivi. La sorpresa è sul margine, non sul quadro',
    'Il consenso professionale ha finito di riprezzare, ed è la prima misura organizzata invece di una deduzione: il sondaggio Reuters del 12-17 agosto trova la grande maggioranza degli economisti ad attendersi la Federal Reserve ferma al 3,50-3,75% per tutto il resto del 2026, dopo rapporto occupazionale in contrazione, indice dei prezzi e prezzi alla produzione senza accelerazione, vendite al dettaglio a meno 0,6% e fiducia a 51,0',
    'La distanza fra consenso e prezzo è il margine che resta da percorrere: il mercato assegna ancora il 30-33% di probabilità a un rialzo a settembre, cioè circa due terzi alla pausa, mentre il sondaggio la dà quasi per esclusa fino a fine anno. Finché quella distanza esiste la riprezzatura può proseguire senza bisogno di un dato nuovo',
    'La minaccia iraniana alza il pavimento del premio senza passare dal barile, che è la configurazione in cui il metallo lavora meglio: Teheran si dichiara pronta a una postura offensiva e il Brent resta a 88,95 dollari con più 0,5%, sotto gli 89,40 già toccati in giornata, con il WTI a 82,65. Reuters attribuisce il contenimento alle rotte alternative di ADNOC e Saudi Aramco',
    'Per la prima volta una posizione iraniana ha un orologio: il termine di alcune settimane per vedere progressi diplomatici è l’unica parte di una dichiarazione che produce un fatto verificabile a una data, e nessuna delle sette dichiarazioni contate qui dal 5 agosto ne aveva uno',
    'Il livello dichiarato stamattina è stato raggiunto: alle 11:45 l’oro spot è a 4.400,15 dollari con più 0,6% secondo Reuters, contro i 4.391 delle 09:20, e i futures americani di dicembre sono a 4.456,50 con più 0,4%. È la prima volta dall’11 agosto che lo spot torna sopra quella soglia',
    'La separazione fra greggio e curva regge alla seconda verifica della giornata, ed è la condizione che l’archivio aveva scritto per essere smentito: il Brent ha toccato di nuovo 89,40 dollari e tratta poi attorno a 89,28, con il WTI sceso verso 81,74, mentre il decennale è sceso ancora a 4,681% e il biennale a 4,155%. Terza rilevazione consecutiva in cui il petrolio sale e la curva no',
    'Il vincolo materiale non si è allentato di una nave rispetto alla rilevazione del fine settimana: cinque transiti a Hormuz sabato, nessuno registrato domenica, contro oltre 130 al giorno prima del conflitto, con i colloqui fra Stati Uniti e Iran ancora fermi',
    'La combinazione sorvegliata da cinque letture consecutive non si è formata, ed era la condizione dichiarata per essere smentiti: il Brent è salito fino a 89,40 dollari con circa più 1%, e i rendimenti sono scesi lo stesso — decennale a 4,684% sotto il 4,695% della chiusura di venerdì, biennale a 4,156% con meno due punti base, Dollar Index a 99,52. Petrolio in rialzo e curva in calo nella stessa seduta',
    'Il canale monetario spinge da tre lati e con un numero che si muove da un mese: la probabilità di un rialzo a settembre è attorno al 30% contro circa il 47% di un mese fa, ricavata dai futures sui Fed Fund. L’oro è a 4.391,07 con più 0,4% e i futures di dicembre a 4.448,10',
    'Il vincolo materiale peggiora nella forma che questo archivio ha detto di considerare affidabile — una discesa su più rilevazioni e non il numero di un giorno: trentuno transiti a Hormuz nel fine settimana precedente, cinque sabato, nessuno registrato domenica, contro oltre 130 al giorno prima del conflitto',
    'Si assottiglia anche la seconda arteria: quarantanove transiti di navi commodity nel Bab el-Mandeb contro cinquantacinque del fine settimana precedente, e nessuna spedizione petrolifera saudita tracciata attraverso lo stretto. La via che evita Hormuz non sta assorbendo il traffico dirottato',
    'Prima intercettazione armata di questa escalation dentro lo spazio aereo dell’Alleanza: alle 05:01 del 16 agosto un F-18 spagnolo della sorveglianza aerea ha abbattuto un drone entrato in Romania dal lato moldavo, circa 24 km a nord di Galați, con frammenti in zona disabitata e nessuna vittima. Il perimetro della guerra si allarga a un Paese membro, e con esso il rischio di errore di calcolo',
    'La notte porta anche un impianto industriale colpito in Ucraina — ArcelorMittal a Kryvyi Rih, due morti e quattordici feriti — e una rivendicazione ucraina su un impianto di carburante per missili nella regione di Rostov: l’intensità cresce da entrambe le parti nella stessa giornata',
    'Nella notte fra sabato 15 e domenica 16 agosto l’Ucraina ha lanciato una delle più vaste incursioni aeree della guerra sul territorio russo — 822 droni intercettati e circa seicento diretti su Mosca secondo il ministero della Difesa russo, attacchi confermati da Reuters nell’area della capitale compresi Podolsk e Domodedovo, almeno sei morti secondo AP — mentre la Russia colpiva Kyiv con missili e droni. Quarto fronte simultaneo, e nessuno dei quattro sta allentando',
    'A Sheskharis i carichi di greggio risultano ancora sospesi e non emerge una conferma affidabile di ripresa: l’unica interruzione fisica del fine settimana resta aperta al terzo giorno, contro il precedente di inizio marzo che si era chiuso in cinque',
    'Il porto yemenita di Mocha ha sospeso tutte le attività commerciali e marittime: lo annuncia il suo direttore sabato 15 agosto, dopo oltre venticinque missili houthi negli ultimi giorni, con sette morti e circa sedici milioni di dollari di danni. Per la prima volta su questo fronte c’è una conseguenza operativa dichiarata da un’autorità, e non soltanto una rivendicazione',
    'Reuters riferisce almeno undici morti negli attacchi israeliani nel sud del Libano, l’episodio più grave da quando è in vigore la tregua mediata dagli Stati Uniti, con Hezbollah che annuncia una risposta: è un terzo fronte contemporaneo, e il primo libanese che entra in questo archivio',
    'I due fatti di sabato sera non passano per il prezzo del greggio — Mocha è un porto commerciale, il Libano non esporta petrolio — quindi aggiungono domanda di protezione senza alimentare le attese di inflazione: è la configurazione in cui il metallo lavora meglio, e in questa settimana non si era ancora presentata',
    'Una terza nave ADNOC è stata attaccata venerdì 14 agosto mentre attraversava lo Stretto, secondo la comunicazione della compagnia tramite l’agenzia ufficiale emiratina WAM, e Reuters la conta come terzo incidente su navi ADNOC in meno di una settimana: nessun ferito, situazione riportata sotto controllo. La serie contata dal 28 febbraio si allunga e la frequenza aumenta invece di calare',
    'Teheran alza la posta e la alza nel verso che allontana la riapertura: il vice ministro degli Esteri Gharibabadi dichiara che Hormuz sarà aperto o chiuso esclusivamente sotto il comando dell’Iran e che il blocco continuerà a essere fatto rispettare, mentre il ministro Araqchi dice che sulla ripresa dei negoziati con Washington non è stata presa alcuna decisione',
    'Il presidente americano invita a mettere in conto prezzi della benzina più alti finché continuerà il conflitto, con il prezzo alla pompa a circa 4,08 dollari per gallone e più 29% sull’anno: è la prima volta che il costo energetico della pressione viene accettato in pubblico invece che minimizzato, e rende meno probabile una chiusura rapida',
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
    'La soglia dichiarata alle 04:25 non è stata raggiunta e non è nemmeno arrivata a scadenza: i 4.365 dollari erano chiesti in chiusura, alle 10:47 ne mancano 5,42 e la seduta è aperta. La stessa analisi aveva scritto che la fascia 4.350-4.365 va guardata sulla chiusura e non sull’intraday, e che finché non la riprende ogni rimbalzo è restituzione di un movimento e non inversione',
    'Il rientro dei rendimenti non ha ancora attraversato nulla: a 4,686% il decennale resta sei millesimi di punto sopra la tacca del 4,68% superata il 10 agosto, quindi la descrizione per cui il rendimento ci è rimasto sopra da allora regge ancora, e il trentennale a 5,268% è a cinque punti base e mezzo dal 5,213% della chiusura del 13 agosto',
    'Il canale energetico non si è mosso di una virgola dal controllo precedente: Brent a 91,44 dollari e WTI a 85,45 sono gli stessi numeri delle 09:10, quarta seduta consecutiva di rialzo, con i colloqui fra Washington e Teheran fermi e versioni opposte sull’apertura dello Stretto',
    'Il margine del gasolio americano sul greggio ha superato per la prima volta i cento dollari al barile, a circa 102,20, con scorte di distillati ai livelli di agosto più bassi dal 1996 e una lavorazione mondiale di luglio circa cinque milioni di barili al giorno sotto quella di un anno prima: la pressione energetica ha trovato un canale che nessuna soglia sul Brent intercetta',
    'Il metallo non usa i propri sostegni per la terza seduta consecutiva: chiusura a 4.344,82 dollari con meno 1,61%, rimbalzo a 4.342,33 con più 0,2% e ritorno a circa 4.337,6, mentre in Asia il Nikkei perde il 2,6%, l’indice MSCI Asia-Pacifico esclusa Giappone l’1,7% e il Kospi oltre il 5%',
    'Il vincolo materiale stringe invece di allentarsi: sei transiti commodity a Hormuz martedì contro nove il giorno prima e una media recente di undici, con una petroliera molto grande vuota in entrata e in uscita soltanto prodotti raffinati. Nel Bab el-Mandeb i transiti salgono a trenta da diciannove ma non risulta tracciata alcuna spedizione petrolifera saudita',
    'Il greggio sale per la quarta seduta consecutiva senza bisogno di un fatto nuovo: Brent a 91,44 dollari con più 0,5% e WTI a 85,45 con più 0,6%, sostenuti dall’incertezza sui flussi e dallo stallo diplomatico invece che da una perdita di capacità misurabile',
    'Il rendimento reale a dieci anni sta attorno al 2,41%, per differenza fra il nominale a circa ' +
      '4,708% e il pareggio al 2,30%: è la grandezza che un’attività senza cedole deve battere, ed è la ' +
      'sola su cui un dato debole non agisce, perché abbassa insieme il nominale e l’inflazione attesa ' +
      'lasciando la differenza dov’era',
    'Il livello di 4.381 dollari, primo supporto indicato la mattina del 18 agosto, è stato ' +
      'attraversato: oro spot a 4.369,82 alle 19:11 e chiusura a 4.364,90 con meno 1,1%, con i futures di ' +
      'dicembre regolati a 4.420,60. La fascia successiva indicata è quella fra 4.350 e 4.320',
    'Il metallo ha rifiutato due sostegni simultanei nella stessa seduta, ed è il fatto che pesa di ' +
      'più: un risk-off azionario vero — indici americani vicini ai minimi di due settimane, Nasdaq a ' +
      'circa meno 1,0%, semiconduttori fra meno 3,7% e meno 5,4% — e un rientro dei rendimenti dai ' +
      'massimi, con il decennale dal 4,7478% a circa 4,708% e il trentennale dal 5,3371% a 5,2868%',
    'Il movimento sui rendimenti non è soltanto americano: anche i titoli di Stato giapponesi ed ' +
      'europei sono sotto pressione, quindi il rendimento alternativo sale in ogni valuta e non esiste ' +
      'un mercato in cui il costo-opportunità del metallo si stia riducendo',
    'Il greggio chiude sopra la soglia per la terza seduta consecutiva: Brent regolato a 91,02 dollari ' +
      'con più 0,17% e WTI a 84,94 con più 0,52%, massimi di chiusura dal 24 luglio. Lo stallo resta ' +
      'dichiarato — nessun colloquio previsto con Teheran, Stretto dichiarato chiuso — e la ripresa dei ' +
      'carichi sauditi vale meno di due milioni di barili al giorno misurabili',
    'La trasmissione non è avvenuta in nessuno dei quattro anelli, ed è il fatto della giornata: il ' +
      'biennale sale di due o tre punti base invece di scendere, il decennale passa da 4,740% a circa ' +
      '4,739%, il Dollar Index resta a 99,63 e l’oro resta fra 4.393 e 4.395 dollari con meno 0,5%. Un ' +
      'blocco favorevole che non muove la scadenza su cui la banca centrale si prezza non è stato ' +
      'prezzato',
    'Il calo dei prezzi all’importazione è quasi tutto una voce sola e riguarda il mese sbagliato: ' +
      'carburanti importati a meno 7,2% sul mese e petrolio e prodotti petroliferi a meno 7,5%, mentre ' +
      'al netto dei carburanti l’indice sale dello 0,4% sul mese e del 4,5% sull’anno. La componente ' +
      'che scende è quella che ad agosto sta salendo',
    'Due dati vanno nel verso opposto al blocco: permessi edilizi a 1,443 milioni contro circa 1,370 ' +
      'attesi, più 5,0% sul mese con le unifamiliari a 894.000, e produzione industriale di luglio a ' +
      'più 0,2% contro più 0,3% ma con giugno rivisto al rialzo da più 0,1% a più 0,3%, quindi con il ' +
      'livello sopra e non sotto le attese',
    'Il decennale è a un punto base dal 4,75%, la soglia dichiarata il 17 agosto sera come livello ' +
      'oltre il quale il costo-opportunità smette di essere assorbibile con il solo sostegno del cambio: ' +
      'circa 4,740% alle 11:25, ed è la distanza più corta mai registrata da questa tacca. Il ' +
      'trentennale segna 5,327%, massimo dal 2007, e il Brent resta a 91,22 con la terza seduta ' +
      'consecutiva di rialzo e i massimi dal 30 luglio',
    'La gamba monetaria comincia a muoversi nel verso ostile, ed era la sola rimasta a reggere: la ' +
      'probabilità di un rialzo a settembre sale in una fascia fra il 35% e il 37%, quindi la pausa ' +
      'scende fra il 63% e il 65%, contro il limite del 60% dichiarato il 17 agosto. Non è però il ' +
      'cambio a spingerla, perché il Dollar Index resta attorno a 99,6, vicino ai minimi delle ultime ' +
      'settimane',
    'Lo stesso dato che sui trimestri sostiene il metallo, sui giorni lo schiaccia: una domanda estera più ' +
      'fredda per la duration lunga è una ragione non monetaria perché il decennale resti al 4,726% e il ' +
      'trentennale al 5,321%, ed è quello che sta tenendo l’oro sotto i 4.400',
    'Il nesso fra le due serie cinesi è un’inferenza e non un fatto dichiarato: le detenzioni di ' +
      'Treasury sono di giugno e gli acquisti d’oro di luglio, nessuna delle due fonti parla di ' +
      'sostituzione, e venti tonnellate valgono una frazione dei venticinque miliardi usciti dalla posizione ' +
      'in Treasury',
    'Non c’è alcuna fuga dai titoli americani e leggerla così sarebbe una forzatura: le detenzioni ' +
      'estere complessive restano più alte del 2,3% rispetto a dodici mesi prima, e tutta la lettura poggia ' +
      'sulla distinzione fra raffreddamento della domanda e deflusso',
    'La combinazione dichiarata da cinque letture consecutive si è formata e ha prodotto il suo effetto: Brent a 90,87 in chiusura e decennale al 4,712% il 17 agosto, poi 91,49 e 4,726% il 18, con l’oro sceso da 4.431,09 a 4.391,14. La clausola di salvezza dell’archivio è stata usata, e ha funzionato contro la lettura',
    'Il premio di rischio ha cambiato segno invece di intensità: con il greggio sopra i 91 dollari ogni nuovo fatto geopolitico entra nel prezzo dell’oro due volte, come rifugio e come inflazione attesa, e la seconda sta prevalendo. Una nave colpita, i transiti a sei navi senza petroliere grandi né metaniere, e la minaccia americana all’Oman non hanno sostenuto il metallo',
    'La minaccia all’Oman colpisce l’intermediario: Muscat era il solo canale diplomatico rimasto per riaprire lo Stretto, e trasformarlo in bersaglio riduce lo spazio negoziale mentre i transiti sono al minimo. Un premio che sale mentre si chiude la via per scioglierlo non è una notizia favorevole a chi lo incassa attraverso il petrolio',
    'La domanda estera per la duration lunga si è raffreddata già a giugno: acquisti esteri netti di titoli americani a lungo termine a 207,1 miliardi da 262,8, Treasury comprati dai privati esteri per 16,6 miliardi da 53,6, e istituzioni ufficiali estere venditrici nette per 9,8 dopo acquisti per 3,0. Se il raffreddamento continua, la parte lunga resta alta a prescindere dal petrolio',
    'Il vincolo energetico non è più solo il greggio: l’agenzia internazionale per l’energia stima la capacità di raffinazione mediorientale ancora 2,2 milioni di barili al giorno sotto i livelli precedenti alla guerra, con quella russa vicina ai minimi ventennali. Benzina e gasolio possono restare cari con il barile fermo, e sono quelli che entrano negli indici dei prezzi',
    'Il trentennale al 5,29% non è un livello nuovo e va detto contro la presentazione che ne viene fatta: il 5,28% era già stato registrato qui il 10 e l’11 agosto, e la formula «massimi dal 2007» compare in quattro analisi precedenti. Un punto base sopra un massimo già visto è lo stesso massimo che dura, non una novità',
    'Il costo-opportunità non sta scendendo e i sostegni sono due invece di tre: il decennale al 4,70% è a un millesimo dai 4,701% che questa scheda ha dichiarato come invalidazione, quindi la lettura corrente e la propria smentita non sono mai state così vicine',
    'La gamba nuova nella spiegazione della parte lunga è la meno governabile: accanto alle prospettive fiscali e all’offerta di debito compare la forte emissione di obbligazioni societarie legata agli investimenti in intelligenza artificiale, che è domanda privata di capitale e non risponde a decisioni di bilancio',
    'La sola spiegazione candidata per chi stia comprando a questi livelli — un ritorno della domanda istituzionale e ufficiale — è dichiarata dagli analisti come inferenza e non come dato, e i colloqui del segretario all’Energia con le raffinerie sono un’iniziativa annunciata e non un aumento di produzione osservato',
    'I prezzi pagati dell’Empire State salgono a 58,6 da 52,3, ed è la componente che alimenta le attese di inflazione: oggi non ha mosso i rendimenti, ma una conferma nelle indagini nazionali cambierebbe il canale dei tassi su cui l’intera lettura poggia. I prezzi ricevuti vanno però nel verso opposto, a 22,7 da 27,6',
    'La valvola logistica taglia in due sensi e il secondo è sfavorevole: se Aramco e ADNOC riescono a consegnare aggirando lo Stretto, il collo di bottiglia perde la capacità di togliere barili al mercato, e con essa una parte del premio di rifugio che oggi sostiene il metallo. Un rischio che non produce scarsità non si paga',
    'Il meccanismo di Fujairah è un negoziato riferito da un’agenzia e non un atto dichiarato dalla compagnia, e il resoconto non dice come il greggio arrivi fin lì: se ci arriva via mare dal Golfo, qualcuno lo Stretto lo attraversa comunque e a cambiare è chi sopporta il rischio, non quanto passa',
    'La probabilità di un rialzo a settembre è arrivata al 33%, cioè esattamente sulla soglia di logoramento dichiarata ieri sera: non l’ha superata, ma non c’è più distanza fra il numero e il livello che farebbe decadere la gamba misurabile della lettura sui giorni',
    'Il fatto più rumoroso della giornata è anche quello con la fonte più debole: la minaccia arriva da un alto funzionario iraniano non nominato che parla a Reuters, e non è seguita da alcun atto materiale. Il conteggio dei transiti resta quello del fine settimana — cinque navi sabato, nessuna domenica — e non si è mosso di una nave per effetto della dichiarazione',
    'Il precedente esatto è già in archivio e va nel verso opposto: il 6 agosto una minaccia iraniana più specifica di questa, con i bersagli indicati — le infrastrutture energetiche dei Paesi del Golfo — coincise con un Brent che scendeva a 79,08 dollari. Quella lettura fu registrata con certezza bassa, e il suo esito è confermata',
    'I 4.400 sono stati attraversati due volte in una giornata e non tenuti nessuna delle due: la rilevazione Reuters delle 16:45 è circa 4.388 dollari con più 0,3%, con Investing fra 4.389 e 4.404, dopo i 4.400,15 delle 11:45. Il test dichiarato al mattino resta non superato',
    'Un sondaggio è un’aspettativa e non una decisione: i verbali del FOMC di mercoledì 19 agosto possono spostare il prezzo di mercato in entrambe le direzioni, e la distanza fra consenso e prezzo si può chiudere anche dal lato che toglie al metallo il solo canale oggi misurabile',
    'Il canale su cui l’intero rialzo poggia è fermo mentre il prezzo sale, ed è il dato più scomodo della riverifica: in due ore e mezza il biennale è passato da 4,156% a 4,155%, il decennale da 4,684% a 4,681%, la probabilità di un rialzo a settembre da circa il 30% al 29%, e nel frattempo non è uscita alcuna diffusione macroeconomica. Nove dollari sul metallo contro tre millesimi di punto sul decennale: il rialzo si sta allontanando dalla propria spiegazione',
    'I 4.400 sono stati toccati e non tenuti, e il modo in cui sono stati toccati è quello che l’archivio aveva descritto: 4.400,15 dollari, cioè quindici centesimi sopra un numero tondo classificato l’11 agosto come punto di attrazione e non come muro, perché è lì che si accumulano gli ordini in attesa. Il test scritto stamattina chiedeva una tenuta, la fascia 4.435-4.450 non è stata avvicinata, e questo archivio si era rifiutato di alzare la direzione l’11 agosto quando alla stessa soglia mancavano quattordici dollari',
    'Il premio geopolitico accumulato in sette letture a mercati chiusi non esisteva all’apertura: l’oro spot ha aperto intorno a 4.373 dollari, cioè sotto i 4.376,59 della chiusura di venerdì, con i futures di settembre fra 4.379 e 4.381. Nessun salto, ed è la misura più diretta della desensibilizzazione che questo archivio ha annotato da Jazan in poi',
    'Il test dichiarato non è superato: i 4.396,88 del massimo di venerdì e i 4.400 sono ancora sopra il prezzo, e il Brent è a un dollaro dai 90. Se li rompe tirandosi dietro il decennale verso il 4,70%, la separazione osservata stamattina si rivela temporanea',
    'Il PIL giapponese del secondo trimestre esce all’1,1% annualizzato contro il 2,0% atteso, con consumi fermi e investimenti a meno 1,2%, ma il cambio si muove nel verso opposto: yen più forte dello 0,2% a 159,06 e dollaro a 99,52, perché il mercato pesa i dati americani deboli più di quello giapponese. È un dato senza canale proprio',
    'L’annuncio dell’Unione europea sul pacchetto di sanzioni più ampio dall’inizio della guerra — circa un terzo di entità russe in più secondo Kaja Kallas — resta senza calendario e senza settori, quindi senza contenuto energetico verificabile: appartiene alla stessa categoria delle cinque opzioni americane del 16 agosto e delle misure annunciate dal Tesoro il 14 e mai pubblicate',
    'L’episodio romeno è il quarto dello stesso tipo nel 2026, cioè circa uno ogni due mesi: la categoria è già stata prezzata tre volte quest’anno senza lasciare un premio duraturo, e la novità autentica è più stretta di come si presenta — questa volta un caccia ha aperto il fuoco. Il drone non è inoltre attribuito ufficialmente: la Romania non indica la Russia, e un portavoce dell’Alleanza dice soltanto che «sembra essere russo»',
    'La procedura ha funzionato per intero e l’Alleanza non ha annunciato nulla — nessuna clausola invocata, nessuna misura militare: su questa scala una deterrenza che riesce toglie premio invece di darlo, perché rende meno probabile l’evento da cui ci si ripara. È la stessa regola scritta qui per il patto della Mecca, applicata al caso rovesciato',
    'Nemmeno i bersagli della notte producono barili: ArcelorMittal a Kryvyi Rih è acciaio, e il propellente per missili di Rostov non è greggio da esportazione ed è una rivendicazione di parte. Terza volta in tre giorni che il conteggio non si muove',
    'L’incursione di questa notte non ha colpito né un terminale né una raffineria: sullo stesso fronte che venerdì aveva fermato Sheskharis, e con mezzi di un ordine di grandezza superiori, sono stati scelti bersagli che non producono barili. Su cinque fatti geopolitici in due giorni il canale del greggio si è acceso una volta sola, e un premio alimentato dalla sola intensità ha un tetto',
    'La scala di quell’attacco è dichiarata e non misurata: gli 822 droni e i circa seicento su Mosca vengono dal ministero della Difesa russo, cioè da una parte in guerra che riferisce il rendimento della propria contraerea, con un interesse in entrambe le direzioni. Quello che regge senza riserve è più stretto — i raid nell’area di Mosca confermati da Reuters e i sei morti riportati da AP citando le autorità',
    'L’India ha imposto alle proprie raffinerie nuovi obiettivi di produzione domestica di GPL per aumentare le scorte: è il secondo grande importatore in ventiquattro ore che riduce la propria esposizione invece di rincorrere il barile, dopo la sostituzione turca, e ogni misura di sicurezza energetica a valle attenua la capacità del collo di bottiglia a monte di muovere il prezzo mondiale',
    'Le misure americane contro l’Iran ricostruite il 16 agosto sono opzioni allo studio e non provvedimenti: nessuna designazione di OFAC o del Tesoro su raffinerie indipendenti cinesi, banche cinesi o dazi secondari risulta pubblicata. Lo strumento è inoltre già in archivio nella sua versione russa, approvata dal Senato 86 a 11 il 7 agosto e ancora ferma alla Camera',
    'La gamba dell’offerta russa era contata due volte e una delle due era sbagliata: Reuters precisa che a Ust-Luga l’attacco del 14 agosto ha danneggiato l’impianto di condensato di Novatek senza interrompere le esportazioni di petrolio, quindi i terminali fermi passano da due a uno e resta soltanto Sheskharis',
    'La sostituzione assorbe lo shock invece di trasmetterlo: le importazioni turche dai porti russi scendono da circa 1,2 milioni di tonnellate a giugno a 900.000 a luglio, con agosto stimato attorno a 200.000, e Ankara compensa con Brasile e Guyana. Il fronte del Mar Nero ha una deviazione già percorsa, Hormuz no, e sommare i due gonfia il premio invece di misurarlo',
    'Il bilancio delle vittime a Mocha non è un dato nuovo: almeno sette morti erano già stati contati qui il 9 agosto e ieri era arrivata una cifra di quattro vittime civili, quindi i sette di oggi sono con ogni probabilità gli stessi. Tre conteggi sovrapposti per lo stesso luogo in una settimana non si sommano, e il solo fatto non ripetuto è la chiusura',
    'La stessa accettazione del costo energetico alimenta il canale contrario, ed è il rischio principale di questa fase: la benzina alla pompa è il punto in cui il greggio diventa una spesa osservata ogni settimana dalle famiglie, e venerdì le attese di inflazione a un anno del Michigan sono salite al 4,3% riportando la probabilità di un rialzo a settembre al 31,6% dal 29,3%. Le attese a lungo termine restano ferme al 3,3%: finché stanno lì il canale è un rischio e non un fatto',
    'Il numero su cui poggia la parte più citata del fine settimana non è verificabile: due transiti venerdì è una cifra giornaliera attribuita a un fornitore privato, cioè la stessa categoria che questa scheda aveva elencato come non confermabile su fonte indipendente dodici ore prima, e le due navi del 7 agosto si erano già rivelate un minimo di campionamento',
    'Nessuno dei fatti del fine settimana porta una perdita di offerta quantificata: né ADNOC né il governo emiratino hanno dichiarato riduzioni di caricamenti dopo il terzo attacco, e per le due chiazze nel Golfo e lo sversamento di circa 2.000 chilometri quadrati al largo dell’Oman non esiste alcuna stima in barili',
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
        'accordo utilizzabile e le navi non si muovono. Il 15 agosto si aggiunge un elemento che agisce sullo ' +
        'stesso vincolo da un lato nuovo, e non è un annuncio: Reuters documenta due nuove chiazze di petrolio ' +
        'nel Golfo — una presso l’isola iraniana di Qeshm, collegata alla Minoan Pioneer danneggiata in un ' +
        'sospetto attacco, una presso Sirri Island — e uno sversamento stimato via satellite in circa 2.000 ' +
        'chilometri quadrati al largo dell’Oman, dove la petroliera Caroline Bezengi si è arenata con greggio ' +
        'russo a bordo, aggiungendo che le tensioni geopolitiche stanno già ostacolando le operazioni di ' +
        'bonifica. Non toglie barili misurati e non va contato come offerta: alza il costo e la difficoltà di ' +
        'operare su quelle acque, cioè lavora sulla stessa leva della clausola assicurativa. Il numero che lo ' +
        'renderebbe verificabile è uno solo, e non è la cronaca del recupero: un rialzo dichiarato dei premi ' +
        'per il rischio bellico sulle rotte del Golfo.',
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
        'propri danni a uno Stato che indica l’autore mentre quell’autore sta trattando. Il 14 agosto la serie ' +
        'si allunga di nuovo e la frequenza aumenta: ADNOC comunica tramite l’agenzia ufficiale emiratina WAM ' +
        'che una terza propria nave è stata attaccata venerdì in transito nello Stretto, senza feriti, e ' +
        'Reuters la conta come terzo incidente in meno di una settimana. Per lo stesso venerdì il conteggio ' +
        'attribuito a Kpler dà due navi più una metaniera vuota in entrata e nessuna spedizione visibile di ' +
        'greggio: la seconda metà è la misura giusta perché conta barili invece di scafi, ma arriva dalla ' +
        'fonte meno verificabile, e il numero del giorno non regge una condizione. Quello che resta solido è ' +
        'il confronto con le 130-140 di prima del conflitto. Il fine settimana del 15-16 agosto dà però al ' +
        'conteggio la forma che questo archivio considera affidabile, cioè una discesa su più rilevazioni ' +
        'invece del numero di un giorno: trentuno transiti nel fine settimana precedente, cinque sabato, ' +
        'nessuno registrato domenica. Il limite della misura resta dichiarato — alcune navi navigano con il ' +
        'transponder spento, quindi «zero registrate» non è zero passaggi — ma la direzione su tre punti non ' +
        'è varianza di campionamento. Nella stessa rilevazione si assottiglia la via alternativa: ' +
        'quarantanove transiti di navi commodity nel Bab el-Mandeb contro cinquantacinque, e nessuna ' +
        'spedizione petrolifera saudita tracciata. ' +
        'Il 18 agosto arriva il primo elemento in senso contrario da tre settimane, e va contato per ' +
        'quello che pesa invece che per quanto suona: Saudi Aramco ha ripreso alcuni carichi da terminali ' +
        'situati dentro lo Stretto, con tre navi da circa due milioni di barili ciascuna caricate a ' +
        'Juaymah e Ras Tanura fra il 12 e il 16 agosto e altre dichiarate in attesa più avanti nel mese. ' +
        'Sei milioni di barili in cinque giorni valgono circa 1,2 milioni al giorno; sommati ai 670.000 ' +
        'attesi ad agosto da Sidi Kerir danno meno di due milioni al giorno di flusso saudita misurabile, ' +
        'contro un traffico che prima del conflitto contava 130-140 navi al giorno. Il vincolo resta ' +
        'quindi fermo e non passa a «si allenta», per due ragioni: la taglia è marginale, e i carichi ' +
        'sono avvenuti mentre il Brent saliva da 87,07 a 90,87 dollari, quindi non hanno prodotto ' +
        'l’effetto che ci si aspetterebbe da un allentamento vero. Va aggiunto il limite di sempre sulla ' +
        'fonte: è una ricostruzione di agenzia basata su dati di tracciamento, non un comunicato della ' +
        'compagnia. ' +
        'Il 19 agosto il conteggio peggiora e l’adattamento accelera nello stesso giorno. I transiti commodity scendono a sei navi martedì contro nove il giorno prima e una media recente di circa undici, e la composizione dice più del numero: fra le navi entrate c’era una petroliera molto grande vuota con due tanker minori, in uscita due navi di prodotti raffinati e una post-Panamax, quindi nessun grande carico di greggio e nessun gas liquefatto. Le principali compagnie di shipping cinesi tengono le proprie petroliere lontane sia da Hormuz sia dal Bab el-Mandeb, dove i transiti del fine settimana salgono a trenta da diciannove senza però alcuna spedizione petrolifera saudita tracciata. Nella stessa giornata l’Iraq approva meccanismi di esportazione che aggirano del tutto lo Stretto, con i primi contratti attesi dal 1° settembre: è il sesto adattamento registrato in cinque giorni e il primo che riguarda un esportatore finora quasi interamente dipendente da quel passaggio. Il vincolo resta quindi fermo e non passa a «si allenta», perché la data è futura e i volumi non sono dichiarati; ma è la prima volta che l’allentamento ha un calendario invece di una possibilità.',
      state: 'fermo',
    },
    {
      label: 'Capacità di esportazione russa sul Mar Nero',
      value: 'carichi sospesi a Sheskharis',
      baseline: '≈ 700.000 b/g di capacità dichiarata, quasi un milione movimentati a luglio',
      against:
        'La lettura che ha accompagnato questi due giorni, cioè due fronti fisici contemporanei sull’offerta ' +
        'energetica — Golfo Persico e Mar Nero — trattati come grandezze sommabili. Il conto era però ' +
        'gonfiato di una unità: Reuters ha precisato che a Ust-Luga l’attacco del 14 agosto ha danneggiato ' +
        'l’impianto di condensato di Novatek senza interrompere le esportazioni di petrolio, quindi i ' +
        'terminali fermi sono uno e non due.',
      watch:
        'Due numeri, e nessuno dei due è una quotazione. Il primo è la ripresa dei carichi: il precedente ' +
        'utile è un attacco allo stesso terminale a inizio marzo, che aveva prodotto una sospensione di ' +
        'cinque giorni, quindi il termine informativo scade a metà settimana. Il secondo è il tonnellaggio ' +
        'turco, che è la prima misura della conseguenza e dice l’opposto di quanto sembra: le importazioni ' +
        'dai porti russi passano da circa 1,2 milioni di tonnellate a giugno a 900.000 a luglio, con agosto ' +
        'stimato attorno a 200.000, perché Ankara ha sostituito con Brasile e Guyana. Un compratore che ' +
        'sostituisce non rincara il barile scarso: finché la deviazione funziona, questo vincolo pesa meno ' +
        'di quello su Hormuz, dove una deviazione non esiste. Lo stringerebbe davvero un dato ufficiale ' +
        'russo di estrazione in calo, che è il passaggio dai serbatoi pieni alla produzione ridotta. Al 16 ' +
        'agosto i carichi risultano ancora sospesi e nessuna ripresa è stata comunicata: siamo al terzo ' +
        'giorno contro i cinque del precedente di marzo. Nella stessa notte il fronte ha prodotto ' +
        'l’incursione aerea più vasta della guerra senza colpire alcun bersaglio energetico, il che ' +
        'conferma la lettura per sottrazione: l’intensità degli attacchi e la capacità sottratta al ' +
        'mercato sono due grandezze indipendenti, e su questo fronte si sono mosse in versi opposti in ' +
        'quarantott’ore.',
      state: 'si-allenta',
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
        'rotta — ma non entra in questo conto: è un porto commerciale yemenita e non esporta greggio. Il ' +
        '15 agosto quel porto chiude: il direttore sospende tutte le attività commerciali e marittime dopo ' +
        'oltre venticinque missili houthi, con sette morti e circa sedici milioni di dollari di danni. La ' +
        'conclusione sul conto non cambia, perché continua a non esportare greggio, e resta la ragione per ' +
        'cui questa chiusura non è un evento di offerta; quello che cambia è la corsia di servizio, perché ' +
        'l’imbocco meridionale della rotta che evita lo Stretto adesso ha un porto fermo invece di un ' +
        'porto colpito.',
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
      now: 33,
      display: '≈ 33%',
      marks: [
        {
          at: 40,
          display: '40%',
          kind: 'logora',
          note: 'corrisponde a una probabilità di pausa che scende sotto il 60%, cioè la soglia dichiarata il 17 agosto dalla lettura sul PIL giapponese. È diventata la prima tacca utile perché le due precedenti sono state entrambe raggiunte in ventiquattro ore: il 33% dichiarato la sera del 17 è scattato, e il 35% del mattino è stato raggiunto il 18. Alle 11:25 del 18 la fascia rilevata è 35-37% e restano fra tre e cinque punti. Sopra il 40% la gamba monetaria si aggiungerebbe alle due già ostili — petrolio e parte lunga — ed è la sola configurazione in cui questo archivio non ha mai visto il metallo reggere',
        },
        {
          at: 50,
          display: '50%',
          kind: 'invalida',
          note: 'attraversata quattro volte in quattro giorni e due volte nei due sensi in quarantotto ore: superata in salita la sera del 10 agosto, ridiscesa il pomeriggio dell’11. Una soglia che oscilla così non misura un cambio di regime, e la lettura sui giorni non la segue più in automatico. Il numero è ora attorno al 35% contro il 52,2% di una settimana fa',
        },
      ],
    },
    {
      label: 'Brent',
      now: 91.44,
      display: '91,44 $',
      marks: [
        {
          at: 87.07,
          display: '87,07 $',
          kind: 'invalida',
          note: 'chiusura di giovedì: un rientro sotto questo livello riporterebbe la sospensione dei carichi a Novorossiysk nella categoria dei rimbalzi che rientrano, dove è stata collocata Jazan, e la gamba di offerta del rialzo cadrebbe',
        },
        {
          at: 88,
          display: '88 $',
          kind: 'invalida',
          note: 'soglia dichiarata la sera del 18 agosto insieme alla ripresa dei carichi sauditi dentro lo Stretto: una chiusura sotto questo livello direbbe che i tre carichi da Juaymah e Ras Tanura stanno togliendo premio di scarsità davvero, e la gamba energetica della lettura ribassista di breve cadrebbe. Il regolamento del 18 agosto è a 91,02 dollari, quindi la distanza è di poco più di tre dollari',
        },
        {
          at: 89.06,
          display: '89,06 $',
          kind: 'logora',
          note: 'massimo di mercoledì 12 agosto, dichiarato come condizione da tre analisi e mancato per ventisette centesimi alla chiusura di venerdì: superato lunedì 17 in apertura di settimana, con un massimo a 89,40. Il canale energetico si è quindi riaperto, ma senza portarsi dietro i rendimenti, che nella stessa seduta sono scesi',
        },
        {
          at: 89.68,
          display: '89,68 $',
          kind: 'logora',
          note: 'massimo intraday di lunedì 17 agosto, e la soglia dichiarata dalla lettura sulle rotte: una chiusura sopra questo livello direbbe che le consegne fuori dallo Stretto non stanno contenendo il prezzo quanto l’analisi sostiene, e la gamba energetica del ragionamento cadrebbe',
        },
        {
          at: 90,
          display: '90 $',
          kind: 'invalida',
          note: 'era la prima gamba della combinazione dichiarata da cinque letture consecutive, e la seconda era un decennale sopra il 4,695%. Entrambe si sono presentate sulle chiusure del 17 agosto — Brent a 90,87 e decennale al 4,712% — e la conseguenza è arrivata la mattina dopo con l’oro sotto i 4.400. La soglia ha fatto il suo lavoro con un giorno di ritardo, e adesso è alle spalle del prezzo',
        },
        {
          at: 92,
          display: '92 $',
          kind: 'logora',
          note: 'è il livello dichiarato il 15 agosto come quello oltre il quale il mercato prezzerebbe il fronte del Mar Nero come perdita di offerta vera. Con il Brent che consolida sopra i 91 diventa la prima tacca ancora davanti al prezzo, e alle 11:25 del 18 agosto la distanza è di settantotto centesimi',
        },
        {
          at: 95,
          display: '95 $',
          kind: 'invalida',
          note: 'soglia dichiarata il 15 agosto: oltre questo livello il canale dell’inflazione prevarrebbe in modo netto su quello del rifugio, e la lettura andrebbe portata sotto il neutrale su tutti gli orizzonti invece che sul solo breve',
        },
      ],
    },
    {
      label: 'Treasury a 2 anni',
      now: 4.17,
      display: '≈ 4,17%',
      marks: [
        {
          at: 4.25,
          display: '4,25%',
          kind: 'invalida',
          note: 'è la seconda metà della regola del 5 agosto: sopra questo livello, con il Brent oltre gli 84, il canale dei tassi torna a lavorare contro il metallo e la lettura decade. Era la scadenza che non si muoveva mentre la parte lunga andava ai massimi da vent’anni, e il pomeriggio del 18 agosto quella descrizione smette di valere: il biennale sale di due o tre punti base a circa 4,21% su un blocco di dati favorevoli al metallo, cioè nel verso opposto, e arriva a otto millesimi dal 4,218% del 12 agosto',
        },
      ],
    },
    {
      label: 'Treasury a 10 anni',
      now: 4.686,
      display: '≈ 4,686%',
      marks: [
        {
          at: 4.68,
          display: '4,68%',
          kind: 'logora',
          note: 'superata nel pomeriggio del 10 agosto: segnalava il logoramento senza aspettare la rottura, e il rendimento ci è rimasto sopra da allora',
        },
        {
          at: 4.701,
          display: '4,701%',
          kind: 'invalida',
          note: 'massimo di venerdì 14 agosto, scelto al posto del 4,70% tondo per la ragione di sempre: è il livello che il mercato ha stabilito. È stato superato in chiusura il 17 agosto, al 4,712%, insieme al Brent sopra i 90: la combinazione dichiarata da cinque letture si è formata su due chiusure, e la mattina del 18 il metallo ha perso i 4.400. Questa tacca è ora alle spalle del prezzo e ha smesso di dire qualcosa in avanti',
        },
        {
          at: 4.75,
          display: '4,75%',
          kind: 'invalida',
          note: 'è la soglia dichiarata il 17 agosto sera: il livello oltre il quale il costo-opportunità smette di essere assorbibile con il solo sostegno del cambio. Con il decennale a circa 4,740% alle 11:25 del 18 agosto la distanza si riduce a un punto base, la più corta mai registrata da questa tacca. Resta la prima ancora davanti al prezzo, e non è scattata: la lettura non si muove finché il livello non viene superato. Alle 15:20, dopo quattro diffusioni americane più morbide delle attese, il rendimento è a circa 4,739%: la distanza non si è mossa di un millesimo, ed è la misura più pulita della mancata trasmissione. In serata la tacca viene sfiorata e non toccata: il massimo di giornata è 4,7478%, cioè due millesimi di punto sotto, e il rendimento rientra poi a circa 4,708%. È la distanza più corta mai registrata, e la condizione resta non scattata: un quasi non vale un sì, e questo archivio si era già astenuto per quattordici dollari l’11 agosto e per quindici centesimi il 17',
        },
      ],
    },
    {
      label: 'Dollar Index',
      now: 99.55,
      display: '≈ 99,55',
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
      label: 'Treasury a 30 anni',
      now: 5.268,
      display: '≈ 5,268%',
      marks: [
        {
          at: 5.213,
          display: '5,213%',
          kind: 'invalida',
          note: 'chiusura del 13 agosto: un rientro sotto questo livello toglierebbe alla lettura il suo oggetto invece di smentirla, perché l’oro non starebbe più assorbendo alcun costo-opportunità eccezionale e la forza relativa misurata in serata smetterebbe di essere misurabile',
        },
        {
          at: 5.4,
          display: '5,40%',
          kind: 'logora',
          note: 'è la soglia dichiarata il 10 agosto insieme a un biennale fermo sotto il 4,25%: sopra quel livello il premio a termine smetterebbe di essere una pendenza e diventerebbe un evento. Il 5,29% di lunedì 17 agosto è un punto base sopra il 5,28% già registrato il 10 e l’11, quindi è lo stesso massimo che dura invece di un massimo nuovo. Il 5,327% delle 11:25 del 18 aggiunge sei millesimi al massimo del mattino e lascia poco più di sette centesimi alla tacca. Il massimo di giornata arriva poi a 5,3371%, massimo dal 2007, prima di rientrare a 5,2868% in chiusura: la tacca resta a poco più di sei centesimi e il picco non è stato mantenuto',
        },
      ],
    },
    {
      label: 'XAU/USD',
      now: 4359.58,
      display: '4.359,58 $',
      marks: [
        {
          at: 4376.59,
          display: '4.376,59 $',
          kind: 'invalida',
          note: 'chiusura di venerdì, e il livello sotto cui l’oro ha aperto lunedì mattina a circa 4.373 dollari: una chiusura di lunedì sotto questo livello annullerebbe il recupero della mattina e riporterebbe la forza a bassa. È anche la misura del salto che non c’è stato, dopo sette letture geopolitiche in tre giorni',
        },
        {
          at: 4381,
          display: '4.381 $',
          kind: 'invalida',
          note: 'primo supporto tecnico indicato da Reuters il 18 agosto: attraversato la sera stessa, con lo spot a 4.369,82 alle 19:11 e la chiusura a 4.364,90. La conseguenza dichiarata era l’apertura della fascia 4.320-4.351 e il passaggio della direzione sotto il neutrale, e il passaggio è stato fatto. La tacca è ora alle spalle del prezzo',
        },
        {
          at: 4320,
          display: '4.320 $',
          kind: 'invalida',
          note: 'limite inferiore della fascia aperta dalla rottura di 4.381, e la prima tacca ancora davanti al prezzo: una chiusura sotto questo livello entro venerdì 21 agosto direbbe che il rendimento reale attorno al 2,4% agisce più in fretta di quanto una forza media ammetta, e la lettura di breve andrebbe portata ad alta invece che rivista. Dalla chiusura di 4.364,90 la distanza è di poco meno di quarantacinque dollari',
        },
        {
          at: 4350,
          display: '4.350 $',
          kind: 'invalida',
          note: 'perso nella notte fra il 18 e il 19 agosto insieme alla chiusura a 4.344,82 dollari con meno 1,61%, dopo che nel pomeriggio del 18 era stato perso il livello di 4.381. È la seconda soglia attraversata in meno di dodici ore. Riattraversata verso l’alto nella mattina del 19: alle 10:47 lo spot è a 4.359,58 dollari, quasi dieci sopra. È il solo livello d’archivio che il prezzo abbia ripreso, ed è il bordo basso di una fascia che l’analisi delle 04:25 aveva già dichiarato di voler guardare sulla chiusura e non sull’intraday',
        },
        {
          at: 4365,
          display: '4.365 $',
          kind: 'logora',
          note: 'limite superiore della fascia che il metallo deve riprendere per smettere di essere in correzione, dichiarato la notte del 19 agosto e scelto perché è un livello stabilito dal mercato invece che tondo. Alle 10:47 la distanza si è ridotta a 5,42 dollari, da poco meno di ventotto delle 09:06, e resta la prima tacca davanti al prezzo verso l’alto. La condizione chiede però una chiusura sopra questo livello, e con la seduta aperta non è ancora arrivata a scadenza: fra qui e la chiusura ci sono il collocamento delle 19:00 e i verbali delle 20:00',
        },
        {
          at: 4400,
          display: '4.400 $',
          kind: 'logora',
          note: 'tenuto per una giornata intera e riperso: superato in serata il 17 agosto con ventisei dollari di margine, fino a 4.431,09 nella sessione asiatica, e abbandonato la mattina del 18 con il metallo a 4.391,14. In tre giorni il livello è stato toccato senza tenuta due volte, tenuto una e riperso: è il comportamento di un numero tondo su cui si accumulano ordini, non quello di un supporto. Adesso è la soglia da riprendere, non quella da difendere',
        },
      ],
    },
    {
      label: 'Inflazione di pareggio a 5 anni',
      now: 2.27,
      display: '≈ 2,27%',
      marks: [
        {
          at: 2.5,
          display: '2,50%',
          kind: 'invalida',
          note: 'è la scadenza che reagirebbe per prima a uno shock energetico, e per questo conta più di quella a dieci anni in questa fase. Sopra il 2,50% il rincaro dei prodotti raffinati sarebbe entrato nelle attese invece che nel rendimento reale, e il margine del gasolio a 102,20 dollari passerebbe da argomento contro il metallo ad argomento a favore senza muoversi di un dollaro',
        },
      ],
    },
    {
      label: 'WTI',
      now: 85.45,
      display: '85,45 $',
      marks: [
        {
          at: 88,
          display: '88 $',
          kind: 'invalida',
          note: 'soglia dichiarata la notte del 19 agosto: oltre tre dollari sopra gli 85,34 rilevati nella sessione asiatica dopo il lancio dei due missili. Una chiusura sopra questo livello direbbe che il mercato del greggio ha prezzato l’escalation con ritardo, e che leggerne la reazione a meno di due ore era prematuro',
        },
      ],
    },
    {
      label: 'Inflazione di pareggio a 10 anni',
      now: 2.3,
      display: '≈ 2,30%',
      marks: [
        {
          at: 2.1,
          display: '2,10%',
          kind: 'invalida',
          note: 'sotto questo livello, con il decennale nominale ancora sopra il 4,70%, il rendimento reale supererebbe il 2,60% e la lettura sui giorni andrebbe portata sotto il neutrale. È la tacca che misura il caso in cui il mercato smette del tutto di prezzare inflazione mentre il costo del denaro resta dov’è',
        },
        {
          at: 2.6,
          display: '2,60%',
          kind: 'invalida',
          note: 'è la tacca che rovescerebbe la lettura invece di logorarla, ed è la prima misura di questo tipo entrata in archivio il 18 agosto: sopra il 2,60% il mercato avrebbe cominciato a prezzare il barile sopra i 90 dollari nell’inflazione attesa, e il rialzo dei rendimenti lunghi tornerebbe a essere un argomento a favore del metallo invece che contro. Il pareggio a cinque anni, che reagirebbe per primo a uno shock energetico, è ancora più basso, al 2,27%',
        },
      ],
    },
  ],
  sources: [
    'due-aste-su-due-sopra-il-mercato-e-stasera-il-ventennale',
    'cento-dollari-di-premio-sul-gasolio-e-l-ipotesi-ha-un-numero',
    'sei-navi-e-l-iraq-si-apre-una-via-che-salta-lo-stretto',
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
