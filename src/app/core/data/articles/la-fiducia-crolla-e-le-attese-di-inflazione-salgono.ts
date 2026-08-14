import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const laFiduciaCrolla: Article = {
  slug: 'la-fiducia-crolla-e-le-attese-di-inflazione-salgono',
  categories: ['fiducia-michigan', 'oro', 'usa', 'tasso-di-interesse'],
  title: 'La fiducia crolla, e le attese di inflazione salgono',
  kicker: 'Fiducia Michigan · Il dato che non è accomodante',
  dek:
    'L’indagine dell’Università del Michigan scende a 51,0 da 55,2, meno 8% in un mese. Ma le attese di ' +
    'inflazione a un anno salgono al 4,3%, e il mercato lo ha notato: la probabilità di un rialzo a ' +
    'settembre è risalita al 31,6% dal 29,3% di due ore fa. L’oro sale lo stesso, e non per la Fed.',
  publishedAt: '2026-08-14T16:10:00+02:00',
  author: AUTHOR,
  readingMinutes: 8,
  tags: ['Fiducia dei consumatori', 'Attese di inflazione', 'Stagflazione', 'Dollaro'],
  instruments: ['XAU/USD', 'DXY', 'Treasury'],
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sul dato, letto sul sito delle Surveys of Consumers dell’Università del Michigan, che è la fonte ' +
    'primaria e riporta indice, mese precedente, attese di inflazione e la dichiarazione della direttrice ' +
    'dell’indagine. Alta anche sui prezzi, che sono rilevazioni dirette a mercato aperto. Media sulla ' +
    'lettura del canale: attribuire alla componente sulle attese di inflazione la risalita della ' +
    'probabilità di rialzo è una deduzione dal fatto che le due cose sono avvenute nella stessa ora, e ' +
    'nella stessa ora è successo dell’altro. La misura resta preliminare e viene rivista a fine mese.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    horizon: 'breve',
    regime:
      'La direzione sale da neutrale a neutrale con inclinazione rialzista, e la ragione è che è caduta ' +
      'la riserva scritta due ore fa. Alle 14:50 la lettura era stata portata a neutrale osservando che ' +
      'la risposta dell’oro al dato sui consumi aveva meno di un’ora di vita: adesso ne ha due, il ' +
      'metallo è passato da 4.376,10 a 4.392,33 e il massimo di giornata si è spostato a 4.396,88. La ' +
      'forza però resta bassa, e per un motivo che il dato di oggi rende esplicito: l’indagine del ' +
      'Michigan non è un dato accomodante. La fiducia crolla dell’8%, ma le attese di inflazione a un ' +
      'anno salgono al 4,3%, e la probabilità di un rialzo a settembre è risalita al 31,6% dal 29,3% di ' +
      'due ore fa mentre il biennale rientrava a 4,136% dal minimo di 4,117%. Il metallo sta quindi ' +
      'salendo sul cambio, non sui tassi: il Dollar Index è a 99,410, nuovo minimo di giornata.',
  },
  takeaways: [
    'L’indice di fiducia dei consumatori dell’Università del Michigan scende a 51,0 nella lettura preliminare di agosto, da 55,2 di luglio: meno 8% in un mese, e finiscono due mesi consecutivi di miglioramento.',
    'Le attese di inflazione a un anno salgono al 4,3% dal 4,2%; quelle a lungo termine restano al 3,3%. È la combinazione che rende il dato ambiguo invece che accomodante.',
    'Il mercato ha letto la seconda metà del questionario: la probabilità di un rialzo a settembre è risalita al 31,6% dal 29,3% di due ore fa, e il biennale è rientrato a 4,136% dopo essere sceso a 4,117% sul dato dei consumi.',
    'Il calo è generalizzato ma non uniforme: la direttrice dell’indagine segnala cali particolarmente ripidi fra gli elettori repubblicani, e riduzioni più marcate fra i consumatori anziani, le famiglie a reddito più basso e chi non ha una laurea.',
    'L’oro sale comunque a 4.392,33 dollari con più 0,95% e un massimo a 4.396,88: il canale che funziona in questo momento è quello del cambio, con il Dollar Index a 99,410 e in calo dello 0,45%.',
  ],
  sources: [
    {
      outlet: 'University of Michigan, Surveys of Consumers',
      title: 'Preliminary Results for August 2026',
      at: '14 agosto 2026',
    },
    {
      outlet: 'Investing.com',
      title: 'Rilevazioni di prezzo e probabilità implicite sui Fed Funds',
    },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Alle 16:00 l’Università del Michigan ha pubblicato la lettura preliminare di agosto della propria ' +
        'indagine sui consumatori, e a prima vista è la seconda conferma della giornata: l’indice di ' +
        'fiducia scende a 51,0 da 55,2, cioè circa l’8% in un mese, e la direttrice dell’indagine scrive ' +
        'che finiscono due mesi consecutivi di miglioramento. Dopo le vendite al dettaglio uscite due ore ' +
        'prima sembrerebbe lo stesso segnale ripetuto. Non lo è, e la differenza sta nella seconda metà ' +
        'del questionario.',
    },
    {
      kind: 'heading',
      text: 'La prima metà del dato e la seconda dicono cose diverse',
    },
    {
      kind: 'paragraph',
      text:
        'L’indagine del Michigan misura due cose che di solito si muovono insieme e che oggi si sono ' +
        'mosse in senso opposto. La fiducia scende, e scende parecchio. Le attese di inflazione a un anno ' +
        'invece salgono, al 4,3% dal 4,2% di luglio; quelle a lungo termine restano ferme al 3,3%. Un ' +
        'consumatore che si aspetta prezzi più alti e allo stesso tempo si sente peggio non descrive una ' +
        'domanda che rallenta e basta: descrive una domanda che rallenta mentre i prezzi non danno tregua.',
    },
    {
      kind: 'stats',
      title: 'L’indagine di agosto, in preliminare',
      caption:
        'Fonte primaria: University of Michigan, Surveys of Consumers, risultati preliminari di agosto 2026. La lettura definitiva esce a fine mese.',
      items: [
        {
          label: 'Indice di fiducia',
          value: '51,0',
          tone: 'bull',
          note: 'Da 55,2 di luglio, circa meno 8%: finiscono due mesi consecutivi di miglioramento',
        },
        {
          label: 'Attese a un anno',
          value: '4,3%',
          tone: 'bear',
          note: 'Dal 4,2% di luglio. È la componente che rende il dato ambiguo invece che accomodante',
        },
        {
          label: 'Attese a lungo termine',
          value: '3,3%',
          tone: 'neutral',
          note: 'Invariate. La misura che si radica più lentamente non si è mossa, ed è la più importante delle due',
        },
        {
          label: 'Rialzo Fed a settembre',
          value: '31,6%',
          tone: 'bear',
          note: 'Risalito dal 29,3% delle 14:50: dopo questo dato il mercato ha tolto, non aggiunto, probabilità di pausa',
        },
        {
          label: 'Treasury 2 anni',
          value: '4,136%',
          tone: 'bear',
          note: 'Rientrato dal minimo di 4,117% toccato sul dato dei consumi, e a soli 0,4 punti base sotto la chiusura',
        },
        {
          label: 'XAU/USD',
          value: '4.392,33 $',
          tone: 'bull',
          note: 'Più 0,95% sulla chiusura di 4.351,07, con un massimo a 4.396,88: sale mentre la parte breve rientra',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il numero che rovescia la lettura',
      text:
        'Il testo grezzo di questa analisi riportava la probabilità di un rialzo a settembre «scesa ' +
        'intorno al 31%», e la citava come una conferma. Il confronto giusto non è con la settimana ' +
        'scorsa ma con due ore fa: alle 14:50, subito dopo le vendite al dettaglio, questa scheda ha ' +
        'registrato il 29,3%, che era la prima volta sotto il 30% in tutta la fase. Adesso è 31,6%. Non è ' +
        'scesa: è risalita di oltre due punti, e nella stessa ora il biennale è rientrato dal minimo di ' +
        '4,117% a 4,136%. Un dato che fa crollare la fiducia dell’8% e insieme alza le probabilità di una ' +
        'stretta ha una sola spiegazione semplice, ed è la riga sulle attese di inflazione. È anche il ' +
        'motivo per cui questa scheda non tratta la lettura del Michigan come il seguito naturale delle ' +
        'vendite al dettaglio.',
    },
    {
      kind: 'heading',
      text: 'Chi ha smesso di avere fiducia',
    },
    {
      kind: 'paragraph',
      text:
        'La direttrice dell’indagine segnala che il calo è generalizzato ma non uniforme. Le riduzioni ' +
        'più ripide da un mese all’altro riguardano gli elettori repubblicani; sono più marcate anche fra ' +
        'i consumatori più anziani, fra le famiglie a reddito più basso e fra chi non ha una laurea. È un ' +
        'dettaglio che di solito resta fuori dalle riprese e che conta per due ragioni. La prima è ' +
        'diagnostica: quando il calo si concentra nel gruppo politicamente più vicino all’amministrazione ' +
        'in carica, la componente di umore politico dell’indice — che c’è, ed è nota — sta lavorando meno ' +
        'del solito, quindi il segnale economico è più pulito di quanto la volatilità dell’indice ' +
        'suggerisca. La seconda è distributiva: reddito basso e assenza di laurea sono i gruppi la cui ' +
        'spesa reagisce prima ai prezzi, ed è coerente con vendite al dettaglio che scendono.',
    },
    {
      kind: 'heading',
      text: 'L’oro sale sul cambio, non sui tassi',
    },
    {
      kind: 'paragraph',
      text:
        'Il metallo è a 4.392,33 dollari, in rialzo dello 0,95%, dopo un massimo a 4.396,88 che è il più ' +
        'alto della giornata e sedici dollari sotto la chiusura di mercoledì. Rispetto alle 14:50, quando ' +
        'questa scheda ha pubblicato 4.376,10, ha guadagnato altri sedici dollari. Ma i due canali che ' +
        'dovrebbero portarlo lì si sono separati: la parte breve della curva ha smesso di scendere e le ' +
        'attese sulla banca centrale sono risalite, mentre il dollaro ha continuato a cedere e segna ' +
        '99,410, nuovo minimo di giornata a meno 0,45%.',
    },
    {
      kind: 'callout',
      tone: 'neutral',
      title: 'Perché la distinzione non è pedanteria',
      text:
        'Per quattro sedute questo archivio ha descritto un metallo che non rispondeva a niente, e alle ' +
        '14:50 ha registrato che il canale di trasmissione aveva ripreso a funzionare. Adesso si vede ' +
        'quale dei due canali sta funzionando davvero. Se l’oro salisse perché la Fed è più lontana da un ' +
        'rialzo, la salita avrebbe sotto una riprezzatura monetaria — e quella riprezzatura, in questa ' +
        'ora, è andata nell’altro verso. Se sale perché il dollaro scende, poggia su una gamba sola, e ' +
        'una gamba sola è esattamente la configurazione che il 12 agosto è durata meno di un’ora. Non ' +
        'toglie niente al movimento di oggi: dice dove guardare per sapere se regge.',
    },
    {
      kind: 'balance',
      title: 'Un dato che spinge in due direzioni',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'La fiducia dei consumatori scende dell’8% in un mese e cancella circa quaranta per cento del recupero delle due letture precedenti: la domanda interna si sta indebolendo su due misure indipendenti nella stessa giornata.',
          'Il Dollar Index scende a 99,410, nuovo minimo di giornata e terza seduta consecutiva di calo: il cambio continua a lavorare a favore del metallo.',
          'Il calo di fiducia si concentra nei gruppi la cui spesa reagisce prima ai prezzi, il che rende più probabile che le vendite al dettaglio deboli non siano un episodio isolato.',
          'Le attese di inflazione a lungo termine restano ferme al 3,3%: la misura che conta di più per la credibilità della banca centrale non si è mossa.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Le attese di inflazione a un anno salgono al 4,3%, ed è il motivo per cui questo dato non è accomodante quanto sembra dal titolo.',
          'La probabilità di un rialzo a settembre risale al 31,6% dal 29,3% di due ore fa: la riprezzatura monetaria ha fatto un passo indietro proprio mentre il metallo saliva.',
          'Il biennale rientra a 4,136% dal minimo di 4,117%: la scadenza su cui la trasmissione si misura per prima ha smesso di confermare.',
          'Il metallo resta sotto i 4.408,59 della chiusura di mercoledì e la settimana non è ancora positiva: il recupero, per ora, ha riportato il prezzo dove era giovedì sera.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
    },
    {
      kind: 'paragraph',
      text:
        'Sull’orizzonte più stretto la direzione sale a neutrale con inclinazione rialzista, e la forza ' +
        'resta bassa. Il primo movimento perché è caduta la riserva scritta due ore fa — la risposta del ' +
        'metallo non era di un’ora ma di due, e nel frattempo si è estesa. Il secondo perché il dato di ' +
        'oggi, letto per intero invece che dal titolo, toglie tanto quanto dà: la fiducia crolla ma le ' +
        'attese di inflazione salgono, e il mercato dei tassi ha reagito alla seconda parte più che alla ' +
        'prima.',
    },
    {
      kind: 'paragraph',
      text:
        'Sull’orizzonte dei giorni la lettura non cambia, e questo dato è il primo della settimana che ' +
        'non la rafforza. Quattro diffusioni consecutive avevano spinto nella stessa direzione senza mai ' +
        'contraddirsi; la quinta contiene una componente che spinge nell’altra. Non basta a invertire ' +
        'niente — le attese a lungo termine sono ferme, e sono quelle che contano per la credibilità — ma ' +
        'è il primo elemento contrario da mercoledì, e va registrato come tale invece che assorbito nel ' +
        'racconto della giornata.',
    },
  ],
  invalidation: [
    'Una probabilità di rialzo a settembre che torna sotto il 29,3% delle 14:50 entro lunedì: direbbe che la risalita al 31,6% era la reazione di un’ora alla riga sulle attese di inflazione e non una riprezzatura vera.',
    'Un oro che chiude sotto i 4.351,07 dollari della chiusura di giovedì: annullerebbe per intero il recupero descritto qui e riporterebbe la direzione almeno a neutrale.',
    'Un Dollar Index che torna sopra 99,855, cioè sopra la chiusura di ieri, mentre l’oro resta sopra i 4.390: toglierebbe la gamba del cambio, che in questa analisi è indicata come l’unica che sta davvero spingendo.',
    'La lettura definitiva del Michigan, a fine mese, con l’indice rivisto sopra 54,0 oppure con le attese a un anno riportate al 4,2%: il dato usato qui è preliminare e la revisione può cambiare entrambe le metà del ragionamento.',
    'Un biennale che scende sotto il 4,117% del minimo odierno: direbbe che la parte breve ha ripreso a confermare e che il metallo non sta salendo solo sul cambio.',
  ],
  nextEvent: {
    when: 'Fine agosto, data da calendario dell’indagine',
    title: 'Lettura definitiva della fiducia dei consumatori del Michigan',
    detail:
      'Il 51,0 è preliminare e si basa su una parte del campione. La revisione di fine mese dirà se il ' +
      'calo dell’8% regge e, soprattutto, se le attese di inflazione a un anno restano al 4,3%: è quella ' +
      'riga, non l’indice, ad avere mosso i tassi oggi. Prima di allora il 16 settembre porta nello ' +
      'stesso giorno la riunione della Federal Reserve e le vendite al dettaglio di agosto con la ' +
      'revisione di luglio.',
  },
};
