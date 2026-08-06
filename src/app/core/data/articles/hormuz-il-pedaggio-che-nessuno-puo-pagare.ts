/**
 * hormuz-il-pedaggio-che-nessuno-puo-pagare
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const hormuzPedaggioAssicurazione: Article = {
  slug: 'hormuz-il-pedaggio-che-nessuno-puo-pagare',
  categories: ['rotte-e-approvvigionamento', 'petrolio', 'medio-oriente', 'oro'],
  title: 'Hormuz: il pedaggio che nessuno può pagare',
  kicker: 'Rotte · Sanzioni, assicurazioni e pagamenti',
  dek:
    'Quattro fonti dell’industria marittima dicono a Reuters che l’intesa in discussione non è praticabile. ' +
    'Non per ragioni politiche: l’autorità iraniana che incasserebbe le commissioni è sotto sanzioni ' +
    'statunitensi, e da fine luglio una clausola del Lloyd’s Market Association toglie la copertura di guerra ' +
    'alle navi che pagano pedaggi nello Stretto. È la prima spiegazione meccanica delle otto navi.',
  publishedAt: '2026-08-06T21:55:00+02:00',
  author: AUTHOR,
  readingMinutes: 5,
  tags: ['Hormuz', 'Assicurazioni', 'Sanzioni', 'Transiti', 'Vincoli materiali'],
  instruments: ['Brent', 'WTI', 'XAU/USD', 'Treasury', 'DXY'],
  horizons: ['medio', 'lungo'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'media',
    regime:
      'La riapertura dello Stretto non è ferma solo per la politica: il meccanismo di pagamento che l’intesa ' +
      'richiede è insieme esposto alle sanzioni e non assicurabile, quindi un annuncio diplomatico non ' +
      'rimetterebbe in moto le navi. Finché il transito non si normalizza il greggio resta alto, e da lì passano ' +
      'inflazione attesa, rendimenti e costo-opportunità: è il canale che oggi pesa sull’oro più del rifugio.',
    horizon: 'medio',
  },
  certainty: 'media',
  certaintyNote:
    'Alta sui fatti istituzionali, che sono datati e verificabili: la clausola del Lloyd’s Market Association è ' +
    'di fine luglio, la presa di posizione del consiglio dell’Organizzazione marittima internazionale è di ' +
    'luglio, e l’autorità iraniana costituita a maggio è sotto sanzioni statunitensi. Media sul giudizio ' +
    'centrale — che l’intesa non sia praticabile — perché arriva da quattro fonti dell’industria non ' +
    'identificate e riguarda un testo ancora in trattativa. Bassa sulla durata: una deroga americana o una ' +
    'riscrittura delle commissioni scioglierebbe il nodo in fretta, e questa lettura poggia sul fatto che non ' +
    'siano ancora arrivate.',
  takeaways: [
    'Secondo Reuters, che cita quattro fonti dell’industria marittima e un alto funzionario iraniano, l’intesa in discussione fra Iran e Oman sul passaggio nello Stretto di Hormuz non è praticabile nella forma attuale.',
    'Il nodo non è politico ma operativo: l’Autorità dello Stretto del Golfo Persico, costituita dall’Iran a maggio per gestire la via d’acqua, è sotto sanzioni statunitensi, e pagarle le commissioni esporrebbe compagnie di navigazione e operatori petroliferi a un problema di conformità.',
    'A fine luglio il Lloyd’s Market Association ha introdotto una clausola che fa decadere la copertura contro il rischio di guerra per le navi che pagano pedaggi, commissioni o oneri di transito nello Stretto: una fonte assicurativa la descrive come un comma 22.',
    'Sulle commissioni le tre parti sono lontane: l’Iran chiede fra il 5% e il 7% del valore del carico, l’Oman discute di circa il 3%, Washington non ne vuole nessuna. A luglio il consiglio dell’Organizzazione marittima internazionale aveva chiesto che il passaggio resti libero da pedaggi e oneri.',
    'Il greggio ha chiuso la giornata in rialzo del 4,22% a 82,80 dollari con un massimo a 83,47, mentre l’oro spot arretrava dello 0,18% a 4.239,42 dollari: il canale energetico continua a prevalere su quello del rifugio.',
  ],
  invalidation: [
    'Un conteggio dei transiti che risale sopra le otto navi: è la condizione che questo archivio ha dichiarato per prima e non ha mai cambiato, ed è l’unica che misura il passaggio invece di descriverlo.',
    'Una deroga statunitense esplicita alle sanzioni sull’Autorità dello Stretto del Golfo Persico, oppure il ritiro della clausola del Lloyd’s Market Association: toglierebbero il comma 22 su cui questa lettura poggia.',
    'Un’intesa che azzeri le commissioni, portando la richiesta iraniana dal 5-7% a nessun pedaggio, in linea con quanto chiedono Washington e l’Organizzazione marittima internazionale.',
    'Un Brent che torna sotto gli 80 dollari: direbbe che il mercato non crede al blocco operativo, e toglierebbe la premessa sul canale energetico.',
    'Prima di tutte queste, e senza aspettare la rottura: un Brent che resta sopra gli 82 dollari mentre l’oro spot risale sopra i 4.300, che segnalerebbe il rifugio di nuovo in vantaggio sul costo-opportunità.',
  ],
  nextEvent: {
    when: 'Domani alle 14:30',
    title: 'Rapporto occupazionale statunitense',
    detail:
      'È l’appuntamento che fa maturare insieme le tre letture pubblicate oggi, perché tutte e tre poggiano sullo stesso canale: il greggio alto arriva all’oro attraverso i rendimenti. Un dato forte sommerebbe l’effetto tassi all’effetto energetico e porterebbe il decennale oltre il 4,68%, sfiorato tre volte oggi senza mai passarlo. Un dato debole restituirebbe all’oro il sostegno che ha perso. Sul fronte dello Stretto non c’è una data: le sanzioni si tolgono con un atto, non con un annuncio.',
  },
  sources: [
    {
      outlet: 'Reuters',
      title: 'Proposed Hormuz passage deal not feasible for shipping industry, sources say',
    },
    { outlet: 'Lloyd’s Market Association' },
    { outlet: 'Organizzazione marittima internazionale' },
    { outlet: 'Investing.com' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Quattro fonti dell’industria marittima hanno detto a Reuters che l’intesa in discussione fra Iran e Oman per regolare il passaggio nello Stretto di Hormuz non è praticabile nella forma attuale. La ragione non è quella che questo archivio ha inseguito per cinque giorni — la distanza fra le posizioni politiche — ma una molto più concreta: il meccanismo di pagamento che l’intesa richiede è insieme esposto alle sanzioni e non assicurabile.',
    },
    {
      kind: 'stats',
      title: 'Le tre cifre che non si incontrano',
      caption: 'Posizioni negoziali riportate da Reuters, non termini concordati.',
      items: [
        {
          label: 'Richiesta iraniana',
          value: '5-7%',
          tone: 'bear',
          note: 'Del valore del carico, per ogni nave che usa lo Stretto',
        },
        {
          label: 'Ipotesi omanita',
          value: '≈ 3%',
          tone: 'warn',
          note: 'La quota in discussione dalla parte di Mascate',
        },
        {
          label: 'Posizione americana',
          value: 'nessun pedaggio',
          tone: 'bull',
          note: 'In linea con la presa di posizione dell’OMI di luglio',
        },
        {
          label: 'Brent',
          value: '82,80 $',
          tone: 'bear',
          note: 'Più 4,22%, massimo di giornata 83,47, chiusura di ieri 79,45',
        },
        {
          label: 'XAU/USD spot',
          value: '4.239,42 $',
          tone: 'warn',
          note: 'Meno 0,18%, escursione fra 4.223,46 e 4.304,15',
        },
        {
          label: 'Transiti a Hormuz',
          value: 'otto navi',
          tone: 'bear',
          note: 'Fermo dal 5 agosto, contro 130-140 al giorno',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Il comma 22 di chi deve far passare una nave',
      anchor: 'comma-22',
    },
    {
      kind: 'paragraph',
      text: 'A incassare le commissioni sarebbe l’Autorità dello Stretto del Golfo Persico, l’ente che l’Iran ha costituito a maggio per gestire la via d’acqua. Quell’ente è sotto sanzioni statunitensi: per una compagnia di navigazione o per un operatore petrolifero, pagarlo significa aprire un problema di conformità che può arrivare al congelamento degli attivi.',
    },
    {
      kind: 'paragraph',
      text: 'La seconda metà del nodo è arrivata a fine luglio, e viene da dove di solito non si guarda. Il Lloyd’s Market Association ha introdotto una clausola che fa decadere la copertura contro il rischio di guerra per le navi che paghino pedaggi, commissioni o oneri di transito nello Stretto. Una fonte assicurativa citata da Reuters lo chiama per quello che è: un comma 22. Se paghi sei fuori dalle sanzioni per un verso e fuori dall’assicurazione per l’altro; se non paghi, non passi.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Un pedaggio con un altro nome',
      text: 'L’industria contesta la sostanza prima che la cifra: un onere obbligatorio per attraversare lo Stretto è «un pedaggio a tutti gli effetti», e stabilirebbe un precedente capace di indebolire il quadro giuridico internazionale sul transito negli stretti usati per la navigazione. A luglio il consiglio dell’Organizzazione marittima internazionale si era espresso nello stesso senso: diritto di passaggio non discriminatorio e senza impedimenti per tutte le navi, e passaggio libero da pedaggi e oneri.',
    },
    {
      kind: 'heading',
      text: 'La risposta alla domanda che l’archivio faceva da cinque giorni',
      anchor: 'la-risposta',
    },
    {
      kind: 'paragraph',
      text: 'Dal 5 agosto questo archivio misura la riapertura dello Stretto su un numero solo, il conteggio dei transiti, e quel numero non si muove: otto navi contro le 130-140 al giorno di prima del conflitto. Nel frattempo si sono accumulati sette annunci di distensione e, oggi, una bozza iraniana che andava nella direzione opposta. La domanda restava aperta: perché le navi non passano, se tutti dicono che l’accordo è vicino?',
    },
    {
      kind: 'paragraph',
      text: 'Questa è la prima risposta meccanica. Non passano perché il transito, alle condizioni in discussione, non è assicurabile né conforme — e nessun armatore muove una nave contro il proprio assicuratore. È il quadro di metodo che questo archivio usa da giorni, applicato a un livello più profondo: le preferenze dichiarate dai governi restano opzionali, i vincoli materiali no, e una clausola contrattuale di mercato è un vincolo materiale quanto una mina. Il metodo è descritto in /metodologia.',
    },
    {
      kind: 'paragraph',
      text: 'Ne discende una distinzione che conviene tenere ferma nelle prossime settimane: un accordo annunciato e un accordo utilizzabile da armatori, assicuratori e banche sono due eventi diversi, e solo il secondo sposta il conteggio. Il primo può arrivare in qualunque momento e non significherebbe niente per il greggio; il secondo richiede una deroga esplicita alle sanzioni e la revoca o la modifica della clausola assicurativa, cioè due atti tecnici con una firma sopra.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Le due spinte, con una base più solida di stamattina',
      left: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Se lo Stretto non si normalizza, l’offerta energetica resta limitata e il greggio alto: da lì passano inflazione attesa, rendimenti e costo-opportunità.',
          'Il Brent ha chiuso a 82,80 dollari, sopra la soglia oltre la quale l’effetto inflazionistico pesa più del rifugio, con un massimo di giornata a 83,47.',
          'L’ostacolo è contrattuale e sanzionatorio, non retorico: non si scioglie con una dichiarazione, ed è la differenza rispetto alla bozza parlamentare di stamattina.',
        ],
      },
      right: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Uno Stretto che non riapre è tensione geopolitica che dura, e la domanda di rifugio non sparisce.',
          'Una deroga americana alle sanzioni è un atto rapido: il nodo può sciogliersi più in fretta di quanto un ostacolo strutturale suggerisca.',
          'L’oro ha perso solo lo 0,18% in una giornata in cui il greggio ha guadagnato il 4,22%: la trasmissione c’è ma non è violenta.',
        ],
      },
    },
    {
      kind: 'scenarios',
      title: 'Effetto probabile',
      caption: 'Effetti attesi, da confrontare con i prezzi.',
      items: [
        {
          label: 'Petrolio',
          tone: 'bear',
          text: 'Sostenuto finché la distinzione fra accordo annunciato e accordo utilizzabile resta aperta. È una base più solida di quella di stamattina, perché una clausola assicurativa non è una posizione negoziale.',
        },
        {
          label: 'Oro',
          tone: 'warn',
          text: 'Sotto pressione attraverso i rendimenti finché il Brent resta sopra gli 82 dollari, ma con un pavimento da rifugio che uno Stretto bloccato non toglie.',
        },
        {
          label: 'Rendimenti USA',
          tone: 'bear',
          text: 'Il canale energetico continua a spingerli: il decennale ha sfiorato tre volte il 4,68% senza passarlo, e il rapporto di domani è ciò che può deciderlo.',
        },
        {
          label: 'Navigazione e assicurazioni',
          tone: 'bear',
          text: 'È il comparto in cui il vincolo si vede per primo: finché la copertura di guerra decade a chi paga, il conteggio dei transiti non ha ragione di salire.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'L’impostazione su XAU/USD resta neutrale con inclinazione ribassista, la stessa dichiarata alle 18:47 e alle 19:40, ma la forza torna da bassa a media. Alle 19:40 era stata abbassata perché il rialzo del greggio poggiava su una bozza parlamentare pubblicata durante un negoziato, cioè su un documento che il metodo usato qui insegna a scontare. Questa notizia sostituisce quella base con una più solida: le sanzioni e una clausola del mercato assicurativo londinese non sono posizioni negoziali, sono condizioni operative.',
    },
    {
      kind: 'paragraph',
      text: 'La cosa da portarsi dietro riguarda però il metro. Per cinque giorni la scelta di misurare la riapertura sul conteggio delle navi invece che sugli annunci è sembrata pedante, e oggi si scopre perché non lo era: fra gli annunci e le navi c’era un ostacolo di cui nessuno dei comunicati parlava, e che nessuno dei comunicati poteva rimuovere. Un indicatore che sta fermo mentre tutti dicono che si sta muovendo non è un indicatore difettoso — è quello che segnala l’esistenza di una causa che non è ancora stata nominata.',
    },
    {
      kind: 'note',
      text: 'Le percentuali sulle commissioni sono posizioni negoziali riportate da Reuters e attribuite a fonti dell’industria, non termini concordati. I livelli di prezzo sono rilevazioni delle 21:55 del 6 agosto sui mercati statunitensi in chiusura e servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi. I riferimenti sull’oro sono sul prezzo spot. Il conteggio degli otto transiti risale al 5 agosto e non è stato aggiornato.',
    },
  ],
};
