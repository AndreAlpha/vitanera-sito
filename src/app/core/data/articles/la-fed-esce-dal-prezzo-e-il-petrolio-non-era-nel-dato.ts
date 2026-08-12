/**
 * la-fed-esce-dal-prezzo-e-il-petrolio-non-era-nel-dato
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const laFedEsceDalPrezzo: Article = {
  slug: 'la-fed-esce-dal-prezzo-e-il-petrolio-non-era-nel-dato',
  categories: ['variazione-ipc', 'ipc-core', 'oro', 'usa'],
  title: 'La Fed esce dal prezzo, e il petrolio non era nel dato',
  kicker: 'Prezzi al consumo · Il dato che doveva decidere due cose',
  dek:
    'L’indice dei prezzi di luglio esce esattamente sul consenso e la probabilità di un rialzo a settembre ' +
    'crolla dal 52% al 37,7%: la condizione dichiarata il 10 agosto è scattata. Ma il dato misura luglio, ' +
    'e la corsa del Brent da 79 a 90 dollari è di agosto.',
  publishedAt: '2026-08-12T16:05:00+02:00',
  author: AUTHOR,
  readingMinutes: 8,
  tags: ['Indice dei prezzi', 'Effetto base', 'Dissensi', 'Biennale', 'Calibrazione'],
  instruments: ['XAU/USD', 'Treasury', 'DXY', 'Brent'],
  horizons: ['medio', 'lungo'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    regime:
      'La scadenza a due anni si è mossa per la prima volta in sei giorni, e lo ha fatto verso il basso: ' +
      '4,180% con meno 3,8 punti base, portandosi dietro la probabilità di un rialzo a settembre, scesa al ' +
      '37,7% dal 52% del 10 agosto. La ragione dichiarata allora per abbassare questa lettura era proprio ' +
      'quel numero sopra la metà, e la condizione scritta per uscirne — un rientro sotto il 50% dopo ' +
      'l’indice dei prezzi — è scattata. La direzione risale quindi per una soglia dichiarata in anticipo ' +
      'e non per una rilettura. La forza sale a media perché anche il motivo dato per tenerla bassa è ' +
      'decaduto: era che il biennale non confermava nulla, e adesso conferma. Non sale oltre perché il ' +
      'canale energetico non è stato messo alla prova da questa diffusione e nel frattempo si è ' +
      'irrigidito: il Brent ha toccato 90,06 dollari stamattina e l’agenzia internazionale ha tagliato ' +
      'ancora l’offerta mondiale attesa nel 2026.',
    horizon: 'medio',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti, e questa volta senza riserve: l’indice dei prezzi è una diffusione ufficiale, la ' +
    'probabilità viene dai contratti a termine sui Fed Fund, i prezzi sono rilevazioni lette una per una ' +
    'alle 15:50, e il conteggio dei dissensi viene dal comunicato della banca centrale. Media sulla ' +
    'conclusione, per una ragione che si può dire in una riga: il canale monetario ha girato a favore del ' +
    'metallo oggi, quello energetico non è stato messo alla prova e nel frattempo è peggiorato. La lettura ' +
    'poggia su una gamba sola, e la seconda ha appuntamento a settembre.',
  takeaways: [
    'L’indice dei prezzi al consumo di luglio, diffuso alle 14:30, è a più 0,1% mensile e 3,4% annuo, in calo dal 3,5% di giugno; il dato di fondo è a più 0,2% mensile e 2,5% annuo, dal 2,6%. Entrambi i tassi annui scendono di un decimo.',
    'La probabilità di un rialzo alla riunione del 16 settembre scende al 37,7%, contro il 62,3% attribuito alla permanenza nella fascia corrente del 3,50-3,75%. Era al 52% la sera del 10 agosto.',
    'Il biennale scende a 4,180% con meno 3,8 punti base: è il primo movimento in sei giorni della scadenza che questo archivio aveva dichiarato come misura decisiva, e va nel verso opposto a quello temuto.',
    'L’oro spot sale a 4.429,54 dollari con più 1,41% e un massimo di giornata a 4.441,01: per la prima volta in questa fase si muovono a favore del metallo tassi, cambio e attese sulla Fed insieme.',
    'La componente energetica decelera — più 14,7% annuo contro più 15,7% di giugno — ma luglio non contiene il Brent a 90 dollari, che è un fatto di agosto. Su quel canale questa diffusione non poteva dire niente.',
  ],
  invalidation: [
    'Una probabilità di rialzo a settembre che risale sopra il 48% entro venerdì, cioè sopra il livello di ieri mattina invece che sopra la metà tonda: direbbe che il crollo di oggi era la reazione di mezz’ora al titolo e non una riprezzatura.',
    'Un biennale che torna sopra il 4,218%, il massimo di questa giornata: annullerebbe l’unico movimento che questa lettura usa come prova, e la misura scelta l’11 agosto tornerebbe a non dire niente.',
    'Un oro spot che chiude la settimana sotto i 4.362,57 dollari, il minimo di oggi: direbbe che il balzo dopo il dato era una reazione di giornata e non un cambio di configurazione.',
    'Un’asta del decennale stasera alle 19:00 che si aggiudica sopra il quotato pre-asta invece che sotto: la parte lunga della curva è dove la tensione non è rientrata, e un collocamento debole rimetterebbe i rendimenti contro il metallo a prescindere dalla Fed.',
    'Un indice dei prezzi di agosto, in uscita a settembre, con la componente energetica in aumento su base mensile: è il test che quello di oggi non poteva fare, ed è il solo modo di sapere se le due revisioni delle agenzie energetiche stanno entrando nei prezzi al consumo.',
  ],
  nextEvent: {
    when: 'Oggi alle 19:00 italiane',
    title: 'Asta del decennale statunitense da 39 miliardi di dollari',
    detail:
      'È la prova sulla parte lunga della curva rimandata da ieri, quando il collocamento a tre anni si era aggiudicato al 4,291% senza chiedere un premio, con un rapporto fra domanda e offerta di 2,71 contro 2,60 della precedente. Tre anni non sono però un test di dieci, e la tensione di questa settimana si è concentrata proprio dove il collocamento di stasera va a misurare. Giovedì l’asta del trentennale e i prezzi alla produzione.',
  },
  sources: [
    {
      outlet: 'Bureau of Labor Statistics',
      title: 'Indice dei prezzi al consumo di luglio, diffuso il 12 agosto',
    },
    {
      outlet: 'Trading Economics',
      title: 'Tasso di inflazione e inflazione di fondo, Stati Uniti',
    },
    { outlet: 'Investing.com', title: 'Monitor sui tassi Fed su futures CME, e quotazioni' },
    { outlet: 'Federal Reserve', title: 'Comunicato del FOMC del 29 luglio 2026' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il 10 agosto in serata questo archivio ha abbassato a neutrale la lettura sui giorni, e lo ha fatto per un numero solo: la probabilità di un rialzo a settembre era risalita al 52%, sopra la metà, e quella soglia era stata scritta il 7 agosto come la condizione che avrebbe smontato la lettura precedente. Accanto al giudizio era stata messa la condizione speculare per uscirne — «una probabilità di rialzo a settembre che rientra sotto il 50% dopo l’indice dei prezzi di mercoledì». È rientrata, e non di poco: 37,7%.',
    },
    {
      kind: 'stats',
      title: 'La giornata, letta alle 15:50',
      caption:
        'Diffusione ufficiale per l’indice dei prezzi; le quotazioni sono rilevazioni del 12 agosto e non chiusure ufficiali.',
      items: [
        {
          label: 'Rialzo a settembre',
          value: '37,7%',
          tone: 'bull',
          note: 'Contro il 62,3% attribuito alla permanenza al 3,50-3,75%. Era 52% il 10 agosto sera',
        },
        {
          label: 'Indice dei prezzi',
          value: '3,4% annuo',
          tone: 'bull',
          note: 'Più 0,1% mensile, in calo dal 3,5% di giugno. Fondo a 2,5% annuo dal 2,6%',
        },
        {
          label: 'Treasury 2 anni',
          value: '4,180%',
          tone: 'bull',
          note: 'Meno 3,8 punti base: primo movimento in sei giorni, con un massimo di 4,218%',
        },
        {
          label: 'Treasury 10 anni',
          value: '4,662%',
          tone: 'bull',
          note: 'Dai 4,735% di ieri, quindi sotto la soglia del 4,70% seguita qui',
        },
        {
          label: 'XAU/USD',
          value: '4.429,54 $',
          tone: 'bull',
          note: 'Più 1,41%, con un massimo di giornata a 4.441,01 e un minimo a 4.362,57',
        },
        {
          label: 'Brent',
          value: '88,43 $',
          tone: 'bear',
          note: 'Massimo di giornata a 90,06; circa 87,0 sulla serie di questo archivio',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Una lettura smontata dalla cosa che aveva indicato',
      anchor: 'condizione-scattata',
    },
    {
      kind: 'paragraph',
      text: 'La condizione nominava esplicitamente l’evento, l’evento è arrivato all’ora prevista, e il numero si è mosso di quattordici punti in un’ora e mezza. Non capita spesso, e vale la pena fermarsi un secondo su che cosa significa: una lettura è stata dichiarata sbagliata dal preciso fatto che era stato scritto in anticipo per dichiararla sbagliata. È l’unica prova che un archivio di questo tipo possa davvero produrre, e in dieci giorni è la prima volta che arriva così pulita.',
    },
    {
      kind: 'paragraph',
      text: 'Vale la pena notare anche la parte che non era sbagliata. Quella lettura diceva di non scendere sotto il neutrale perché il biennale non confermava nulla, e in sei giorni quella scadenza non ha mai superato il 4,239% — per poi scendere a 4,180% proprio sul dato. La parte prudente ha retto, la parte decisa no: è la configurazione opposta a quella dell’11 agosto, quando erano le ragioni della prudenza a essere giuste e la direzione a essere stata alzata troppo presto.',
    },
    {
      kind: 'heading',
      text: 'Il biennale si è mosso, dopo sei giorni fermo',
      anchor: 'il-biennale',
    },
    {
      kind: 'paragraph',
      text: 'L’11 agosto, dopo aver visto la soglia del 50% attraversata quattro volte in quattro giorni, questo archivio aveva smesso di seguirla e aveva scelto un’altra misura: la scadenza a due anni, che è dove una decisione di settembre entra per prima nel prezzo. Da allora quel rendimento non si era mosso — fra il 4,20% e il 4,24% per sei giorni, attraverso un rapporto sull’occupazione, due dichiarazioni della Fed, un’asta e due revisioni di agenzie energetiche. Il giorno stesso in cui la scheda scriveva che una regola che non si attiva mai è indistinguibile da una regola scritta male, la regola si è attivata.',
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Tre canali insieme, per la prima volta',
      text: 'La composizione di oggi è quella che questo archivio cercava da una settimana e non aveva mai trovato. Il biennale scende, il decennale rientra a 4,662% dai 4,735% di ieri, il Dollar Index scende a 99,615 e l’oro sale dell’1,41%. Fino a ieri il metallo saliva contro almeno uno dei tre — contro il dollaro martedì, contro il greggio stamattina — e ogni volta la lettura andava scritta come forza relativa isolata. Oggi non serve: si muovono tutti nello stesso verso, ed è il motivo per cui la forza può salire senza appoggiarsi a una spiegazione.',
    },
    {
      kind: 'heading',
      text: 'Il dato non poteva rispondere alla seconda domanda',
      anchor: 'il-mese-sbagliato',
    },
    {
      kind: 'paragraph',
      text: 'Qui c’è l’errore da registrare, ed è di costruzione. Per sei giorni questo archivio ha indicato l’indice dei prezzi del 12 agosto come l’evento che avrebbe detto se lo shock energetico stesse entrando nell’inflazione, e cinque analisi hanno scritto una condizione su quel dato. Ma l’indice di luglio misura luglio, e la corsa del Brent da 79 a 90 dollari è avvenuta interamente ad agosto.',
    },
    {
      kind: 'paragraph',
      text: 'La componente energetica di luglio infatti decelera: più 14,7% annuo contro più 15,7% di giugno, con la benzina che passa da più 26,7% a più 24,6%. Non è una smentita del canale descritto da due agenzie energetiche in due giorni — è una diffusione che quel canale non poteva contenere. Un test che non può distinguere fra le due ipotesi che deve separare non ha potere di discriminazione, per quanto solidi siano i suoi numeri, ed è una cosa diversa dall’avere torto: è il quadro sulla calibrazione descritto in /metodologia, applicato a una condizione invece che a una previsione.',
    },
    {
      kind: 'paragraph',
      text: 'Il test giusto esiste ed è già in calendario: l’indice dei prezzi di agosto, che esce a settembre e sarà il primo a contenere un mese intero di greggio sopra gli 85 dollari. Da oggi l’appuntamento sulla questione energetica è quello, e le condizioni di questa analisi lo dicono.',
    },
    {
      kind: 'heading',
      text: 'Il conto sulla Fed era sbagliato',
      anchor: 'tre-dissensi',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Tre atti a verbale, non uno',
      text: 'Le ultime due analisi hanno pesato le voci della banca centrale contando «due preferenze dichiarate da chi non ha il voto contro un solo atto a verbale», e identificando quell’atto nel dissenso di Beth Hammack alla riunione del 29 luglio. Il comunicato ufficiale di quella riunione dice altro: a votare contro furono in tre — Beth Hammack, Neel Kashkari e Lorie Logan, tutti per un rialzo di venticinque punti base. Gli atti a verbale erano quindi tre e non uno, e il conto era sbagliato di due terzi nella direzione che rendeva più comoda la conclusione. Le analisi pubblicate non si toccano: la correzione vale da qui in avanti, e rende il quadro della Fed meno rassicurante di come è stato descritto — anche oggi che il mercato prezza il contrario.',
    },
    {
      kind: 'paragraph',
      text: 'La distinzione fra chi vota e chi no resta valida come criterio, e anzi è proprio quella a rendere significativa la correzione: tre dissensi non sono tre opinioni, sono tre persone che al momento di alzare la mano hanno chiesto tassi più alti mentre il Comitato li lasciava fermi. Contro quel fondo, un mercato che oggi prezza il rialzo di settembre a poco più di un terzo sta scommettendo che quei tre restino minoranza anche fra cinque settimane.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Un canale che gira, e uno che non è stato misurato',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'La probabilità di un rialzo a settembre scende al 37,7% dal 52%: la condizione dichiarata il 10 agosto è scattata, e la ragione di quell’abbassamento è decaduta.',
          'Il biennale scende a 4,180% dopo sei giorni fermo: la misura scelta come decisiva si muove, e a favore del metallo.',
          'Decennale a 4,662% e Dollar Index a 99,615: per la prima volta in questa fase tassi, cambio e attese si muovono insieme dalla stessa parte.',
          'L’indice dei prezzi scende di un decimo su entrambi i tassi annui, principale e di fondo: non è un dato caldo, per quanto sia uscito sul consenso.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Il canale energetico non è stato misurato da questa diffusione, e nel frattempo è peggiorato: l’agenzia internazionale taglia l’offerta 2026 a meno 4,3 milioni di barili al giorno da meno 3,7.',
          'Il Brent ha toccato 90,06 dollari stamattina, circa 88,6 sulla serie di questo archivio: il pavimento del prezzo si è alzato mentre l’inflazione misurata scendeva.',
          'Al FOMC del 29 luglio i dissensi per un rialzo erano tre e non uno: il fondo restrittivo del Comitato è più consistente di come questo archivio l’aveva contato.',
          'Alle 19:00 l’asta del decennale: la prova sulla parte lunga della curva non è ancora stata superata, e tre anni non sono un test di dieci.',
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
      text: 'La lettura sui giorni torna a neutrale con inclinazione rialzista e la forza sale a media. Entrambi i movimenti hanno la stessa struttura, ed è quella che questo archivio cerca di tenere: non si muovono perché il prezzo si è mosso, ma perché sono decadute le ragioni scritte in anticipo per tenerli fermi. La direzione era stata abbassata per la probabilità sopra la metà, ed è tornata sotto; la forza era stata tenuta bassa perché il biennale non confermava, e ha confermato.',
    },
    {
      kind: 'paragraph',
      text: 'Quello che resta da guardare non è più la Fed di settembre — quel numero ha parlato oggi e ci vorrà un altro dato per rimetterlo in discussione — ma le due cose che questa diffusione ha lasciato aperte. La prima è stasera alle 19:00, e riguarda se la parte lunga della curva si comporta come quella corta. La seconda è a settembre, e riguarda se un greggio che ha passato agosto sopra gli 85 dollari finisce nei prezzi al consumo: è il test che oggi non si è tenuto, e da oggi ha una data.',
    },
    {
      kind: 'note',
      text: 'I dati dell’indice dei prezzi sono la diffusione ufficiale dell’ufficio di statistica del lavoro del 12 agosto, letti su Trading Economics alle 15:50 perché la pagina originale non è risultata raggiungibile al momento del controllo. La probabilità di rialzo è ricavata dai contratti a termine sui Fed Fund ed è una lettura di mercato, non una previsione della banca centrale; si riferisce alla riunione del 16 settembre. Le quotazioni sono rilevazioni delle 15:50 e non chiusure ufficiali: servono a rendere verificabile il ragionamento e non sono obiettivi. Le quotazioni del Brent appartengono alla serie che venerdì 7 agosto ha chiuso a 83,55 dollari, mentre le tacche di questo archivio sono fissate sulla serie che ha chiuso a 82,21: la conversione a circa 87,0 applica la stessa variazione percentuale ed è approssimata. Il conteggio dei dissensi viene dal comunicato del FOMC del 29 luglio, che li nomina uno per uno.',
    },
  ],
};
