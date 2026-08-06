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
