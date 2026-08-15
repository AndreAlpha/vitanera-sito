import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const mochaChiudeEIlLibanoApreUnTerzoFronte: Article = {
  slug: 'mocha-chiude-e-il-libano-apre-un-terzo-fronte',
  categories: ['premio-di-rischio', 'rotte-e-approvvigionamento', 'medio-oriente', 'oro'],
  title: 'Mocha chiude, e il Libano apre un terzo fronte',
  kicker: 'Premio di rischio · Un porto fermo, senza barili',
  dek:
    'Il direttore del porto di Mocha ha sospeso tutte le attività commerciali e marittime dopo oltre ' +
    'venticinque missili houthi. Nello stesso giorno undici morti negli attacchi israeliani nel sud del ' +
    'Libano, il fronte più grave dalla tregua. Due fatti che spingono l’oro da un lato solo — ed è ' +
    'proprio questo a renderli, insieme, più chiari e più fragili di quelli di ieri.',
  publishedAt: '2026-08-15T21:35:00+02:00',
  author: AUTHOR,
  readingMinutes: 6,
  tags: ['Mocha', 'Bab el-Mandeb', 'Houthi', 'Libano', 'Hezbollah'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury'],
  horizons: ['breve', 'medio'],
  certainty: 'media',
  certaintyNote:
    'Alta sui due fatti nuovi: la sospensione delle attività è annunciata dal direttore del porto, e i ' +
    'morti nel sud del Libano sono riportati da Reuters. Bassa sui conteggi che li accompagnano, e va ' +
    'detto perché: per Mocha questo archivio ha ora ricevuto tre bilanci diversi in una settimana, e i ' +
    'sette morti citati oggi sono con ogni probabilità gli stessi già contati il 9 agosto. Media sulla ' +
    'direzione dell’impatto: il canale è pulito, ma la grandezza non è misurata da nessuno e i mercati ' +
    'sono chiusi.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    horizon: 'breve',
    regime:
      'Alla riapertura questi due fatti agiscono su un canale solo, e in un verso solo: aggiungono ' +
      'domanda di protezione senza toccare il prezzo di un barile. È una configurazione più pulita di ' +
      'quella di ieri, dove la stessa notizia sosteneva il rifugio e alimentava l’inflazione attesa. Ma ' +
      'la pulizia non è forza: un premio che si forma su fatti privi di una grandezza misurabile si ' +
      'sgonfia appena quei fatti smettono di fare notizia, ed è già successo tre volte in questo archivio ' +
      'nelle ultime due settimane.',
  },
  takeaways: [
    'Il direttore del porto di Mocha ha annunciato sabato 15 agosto la sospensione di tutte le attività commerciali e marittime, dopo che l’infrastruttura è stata colpita da oltre venticinque missili houthi negli ultimi giorni: sette morti e circa sedici milioni di dollari di danni.',
    'È il passo che i due episodi precedenti non avevano: prima c’erano missili e vittime, adesso c’è la chiusura di un porto. Il metro usato qui dà però la stessa risposta di prima, perché Mocha non esporta greggio: una chiusura che toglie zero barili non è un evento di offerta.',
    'Sul bilancio delle vittime serve cautela: questo archivio ha già contato almeno sette morti a Mocha il 9 agosto, e ieri ha ricevuto una cifra di sei missili e quattro vittime civili. Tre conteggi diversi per lo stesso luogo in una settimana non si sommano.',
    'Reuters riferisce almeno undici morti negli attacchi israeliani nel sud del Libano, uno degli episodi più gravi da quando è in vigore la tregua mediata dagli Stati Uniti; Hezbollah annuncia una risposta. È il primo fronte libanese che entra in questo archivio.',
    'La differenza con ieri è il canale: benzina e greggio spingono l’oro in due direzioni, un porto commerciale fermo e una frontiera che si riaccende in una sola. Configurazione più chiara, e proprio per questo senza una taglia da misurare.',
  ],
  sources: [
    {
      outlet: 'Reuters',
      title:
        'Almeno undici morti negli attacchi israeliani nel sud del Libano; Hezbollah annuncia una risposta',
      at: '15 agosto 2026',
    },
    {
      outlet: 'Direzione del porto di Mocha',
      title:
        'Sospensione delle attività commerciali e marittime dopo oltre venticinque missili houthi: sette morti, circa 16 milioni di dollari di danni',
      at: '15 agosto 2026',
    },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Per una settimana questo archivio ha trattato Mocha come un attacco senza un prezzo: un porto ' +
        'commerciale yemenita colpito due volte, con vittime, e nessun barile in meno sul mercato. Sabato ' +
        'quel porto ha chiuso. Il direttore ha annunciato la sospensione di tutte le attività commerciali ' +
        'e marittime dopo oltre venticinque missili houthi negli ultimi giorni, con sette morti e circa ' +
        'sedici milioni di dollari di danni. È il passo che mancava, e va misurato con lo stesso metro con ' +
        'cui sono stati misurati gli altri — che è l’unico modo perché quel metro conti qualcosa.',
    },
    {
      kind: 'heading',
      text: 'Il metro dà la stessa risposta di prima',
      anchor: 'lo-stesso-metro',
    },
    {
      kind: 'paragraph',
      text:
        'La domanda che questo archivio pone a un’infrastruttura colpita è una sola: quanta capacità toglie ' +
        'al mercato. È il metro che ieri ha permesso di separare Sheskharis, dove i carichi si sono ' +
        'fermati davvero, da Jazan, che era già ferma da fine luglio, e da Ust-Luga, dove le esportazioni ' +
        'di petrolio non si sono mai interrotte. Applicato a Mocha, quel metro dà zero: è un porto ' +
        'commerciale, non un terminale di esportazione energetica, e la sua chiusura non sottrae greggio a ' +
        'nessuno. La conclusione scomoda va accettata per intero — un’escalation può essere autentica, ' +
        'documentata e irrilevante per il canale del petrolio nello stesso momento.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Un bilancio che non si somma',
      text:
        'I sette morti citati oggi vanno guardati bene prima di essere contati. Il 9 agosto questo ' +
        'archivio ha registrato almeno sette morti a Mocha con gravi danni alle banchine, e in serata una ' +
        'seconda ondata di missili e droni sullo stesso porto; ieri è arrivata una cifra diversa, sei ' +
        'missili balistici e quattro vittime civili. Oggi il conteggio è di oltre venticinque missili ' +
        '«negli ultimi giorni» con sette morti complessivi. Sono tre bilanci per lo stesso luogo in una ' +
        'settimana, con finestre temporali che si sovrappongono: sommarli produrrebbe un’escalation ' +
        'inventata. Il fatto nuovo e non ripetuto è uno solo, e non è un numero di vittime: è la chiusura, ' +
        'dichiarata da chi ha l’autorità per dichiararla. Accanto ci sta il dato sui danni, sedici milioni ' +
        'di dollari, che è la prima grandezza economica mai attribuita a questo fronte.',
    },
    {
      kind: 'paragraph',
      text:
        'Quello che la chiusura aggiunge davvero è di natura logistica, e ha un posto preciso nel quadro ' +
        'già descritto. All’inizio di agosto questo archivio ha corretto una propria lettura riconoscendo ' +
        'che il Mar Rosso e Hormuz non sono due fronti indipendenti ma due colli di bottiglia in serie: ' +
        'quella costa è il modo con cui il greggio attraversa la penisola ed evita lo Stretto. Mocha sta ' +
        'all’estremità meridionale di quella rotta, sull’imbocco di Bab el-Mandeb. Un porto fermo lì non ' +
        'chiude lo stretto e non equivale alla sua chiusura, ma restringe ulteriormente la corsia di ' +
        'servizio di una rotta che al capo opposto arriva a Yanbu e a Jazan.',
    },
    {
      kind: 'heading',
      text: 'Il terzo fronte, e perché conta pur non avendo un prezzo',
      anchor: 'il-terzo-fronte',
    },
    {
      kind: 'paragraph',
      text:
        'Nella stessa giornata Reuters riferisce almeno undici morti negli attacchi israeliani nel sud del ' +
        'Libano, uno degli episodi più sanguinosi da quando è in vigore il quadro di tregua mediato dagli ' +
        'Stati Uniti. Israele dichiara che il bombardamento è seguito al fuoco di Hezbollah che aveva ' +
        'ferito tre soldati nella zona di sicurezza; Hezbollah avverte che gli attacchi riceveranno una ' +
        'risposta. È la prima volta che questo fronte entra in questo archivio, e va classificato per ' +
        'quello che è: un aumento della probabilità che il conflitto si allarghi, non una guerra aperta e ' +
        'non un fatto energetico. Il Libano non esporta greggio e non ha uno stretto.',
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Un canale solo, e per una volta senza il canale contrario',
      text:
        'Qui c’è la differenza che conta rispetto alle analisi delle ultime ventiquattro ore, e riguarda ' +
        'la forma dell’effetto e non la sua taglia. Ieri l’escalation arrivava con un canale contrario ' +
        'incorporato: la benzina alla pompa a 4,08 dollari per gallone alimenta le attese di inflazione, ' +
        'quindi la stessa notizia che sostiene il rifugio fa salire il rendimento che il metallo deve ' +
        'battere, ed è per questo che la direzione sta a metà invece che in alto. Un porto commerciale ' +
        'chiuso e una frontiera che si riaccende non hanno quel canale: non spostano il prezzo di un ' +
        'barile, quindi non passano per l’inflazione attesa e non toccano la parte lunga della curva. ' +
        'Aggiungono domanda di protezione e nient’altro. Questa è la configurazione in cui il metallo ' +
        'lavora meglio — ed è anche la più facile da restituire, perché non poggia su alcuna quantità.',
    },
    {
      kind: 'note',
      text:
        'Anche stasera le serie non coincidono, e conviene dichiararlo invece di scegliere: sull’oro spot ' +
        'la chiusura di venerdì è 4.376,59 dollari con più 0,59% sulla serie usata in questo archivio, ' +
        'mentre un’altra rilevazione dà circa 4.379,95 con più 0,7%; il contratto a termine americano è ' +
        'indicato a 4.437,30 con più 0,4%, e resta una grandezza diversa dallo spot, non una sua ' +
        'correzione. Il Brent ha chiuso nell’area degli 88,5 dollari e il WTI fra 82 e 83. Tutti i livelli ' +
        'citati servono a rendere verificabile il ragionamento e non sono obiettivi affidabili.',
    },
    {
      kind: 'balance',
      title: 'Come si presenta la riapertura',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Tre fronti attivi contemporaneamente — Hormuz senza distensione, Bab el-Mandeb con un porto fermo, il sud del Libano riaperto — e nessun elemento nuovo che riduca il premio su nessuno dei tre.',
          'La chiusura di Mocha è dichiarata da un’autorità portuale, quindi è un fatto operativo e non una rivendicazione: su questo metro vale più di un annuncio.',
          'Nessuno dei due fatti nuovi passa per il prezzo del greggio, quindi la domanda di protezione arriva senza il contrappeso dei rendimenti che ha frenato il metallo tutta la settimana.',
          'La probabilità di una pausa della Federal Reserve a settembre resta attorno ai due terzi dopo i dati deboli di venerdì, e il dollaro ha chiuso la terza seduta consecutiva in calo.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Nessuna delle due notizie ha una grandezza misurabile in barili: un premio senza quantità è il primo a essere restituito, come è già successo a Jazan nel giro di un’ora.',
          'Il bilancio delle vittime a Mocha non è un dato nuovo ma con ogni probabilità lo stesso del 9 agosto, quindi la parte dell’escalation che sembra più grave è in realtà già contata.',
          'Il decennale ha chiuso a 4,695% con un massimo a 4,701%: il costo-opportunità resta al livello più alto della fase, e non è stato toccato da nulla di quanto è successo nel fine settimana.',
          'Due letture intraday scritte su una reazione di poche ore sono state smentite dalla chiusura in questa stessa settimana: la stessa cautela vale per un premio atteso alla riapertura.',
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
      text:
        'La direzione resta neutrale con inclinazione rialzista e la forza resta bassa, e le due cose ' +
        'vanno lette insieme. Il rischio geopolitico è aumentato di nuovo e questa volta in un modo che ' +
        'non porta con sé il proprio contrappeso: è la ragione per cui la configurazione alla riapertura è ' +
        'la più favorevole al metallo fra quelle descritte in questo fine settimana. Ma la forza non sale, ' +
        'perché nessuno dei due fatti ha una taglia, e un premio senza taglia non si può dimensionare — si ' +
        'può soltanto osservare quanto dura.',
    },
    {
      kind: 'paragraph',
      text:
        'Il criterio per lunedì resta quello dichiarato da giorni, e ha il vantaggio di essere un numero e ' +
        'non un giudizio: se il rischio geopolitico sale e il Brent resta sotto i 90 dollari, la ' +
        'configurazione lavora per l’oro; se invece le interruzioni spingessero il greggio sopra i 90-95 e ' +
        'con esso le scadenze lunghe e le attese di inflazione, il beneficio del rifugio verrebbe ' +
        'compensato dal costo di tenerlo. Su tre fatti geopolitici in due giorni, nessuno dei quali ha ' +
        'ancora incontrato una quotazione, questa è l’unica cosa che si può dire con precisione.',
    },
  ],
  invalidation: [
    'Un annuncio dell’autorità portuale di Mocha sulla ripresa delle attività commerciali entro venerdì 21 agosto: ridurrebbe la chiusura a un’interruzione di pochi giorni e toglierebbe l’unico fatto operativo nuovo di questa lettura.',
    'Una stima quantificata del tonnellaggio o dei barili deviati da Bab el-Mandeb attribuibile alla chiusura, pubblicata da un’autorità o da un servizio di tracciamento: farebbe passare l’episodio dalla logistica all’offerta, che è la categoria che questa analisi esclude esplicitamente.',
    'Un oro che apre lunedì e chiude sotto i 4.376,59 dollari della chiusura di venerdì, restituendo per intero il premio del fine settimana: direbbe che tre fatti geopolitici in due giorni non producono domanda di protezione, e la direzione andrebbe portata a neutrale.',
    'Una tregua ribadita o una de-escalation dichiarata fra Israele e Hezbollah entro venerdì 21 agosto, oppure l’assenza di qualunque risposta di Hezbollah entro quella data: direbbe che il fronte libanese era un episodio e non un’apertura, e la terza gamba di questa lettura cadrebbe.',
    'Un decennale che apre sopra il 4,701% del massimo di venerdì con l’oro che non sale: direbbe che il premio di rifugio è già interamente assorbito dal costo-opportunità, e la forza di questa lettura andrebbe azzerata invece che tenuta bassa.',
  ],
  nextEvent: {
    when: 'Lunedì 17 agosto, apertura asiatica',
    title: 'Il primo prezzo su tre fronti aperti insieme',
    detail:
      'Cinque fatti geopolitici sono arrivati fra venerdì sera e sabato notte senza incontrare un mercato ' +
      'aperto: il terzo attacco a una nave ADNOC, gli sversamenti nel Golfo, la sospensione dei carichi a ' +
      'Sheskharis con la correzione su Ust-Luga, la chiusura di Mocha e l’escalation in Libano. Lunedì ' +
      'vengono arbitrati tutti insieme, e le due misure da guardare nell’ordine sono il Brent contro i 90 ' +
      'dollari e il decennale contro il 4,701%. La domanda giusta non è se l’oro apre in guadagno, ma se ' +
      'lo fa con i rendimenti fermi.',
  },
};
