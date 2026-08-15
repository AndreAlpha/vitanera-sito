import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const unPortoSiFermaLAltroNo: Article = {
  slug: 'un-porto-si-ferma-l-altro-no-e-la-turchia-cambia-fornitore',
  categories: ['rotte-e-approvvigionamento', 'petrolio', 'russia-ucraina', 'oro'],
  title: 'Un porto si ferma, l’altro no, e la Turchia ha già cambiato fornitore',
  kicker: 'Rotte e approvvigionamento · Correzione su Ust-Luga',
  dek:
    'Reuters chiarisce che a Ust-Luga l’attacco del 14 agosto ha danneggiato l’impianto di condensato di ' +
    'Novatek senza fermare le esportazioni di petrolio: l’unica interruzione vera resta Sheskharis. E il ' +
    'primo numero che misura la conseguenza dice una cosa scomoda per la lettura rialzista — la Turchia ' +
    'non sta pagando di più quel barile, ne sta comprando un altro.',
  publishedAt: '2026-08-15T18:20:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: ['Ust-Luga', 'Sheskharis', 'Turchia', 'Novatek', 'Sostituzione'],
  instruments: ['Brent', 'WTI', 'XAU/USD'],
  horizons: ['medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sul fondamento: la correzione è una precisazione pubblicata dalla stessa agenzia che aveva dato ' +
    'la notizia, e i due tonnellaggi di giugno e luglio sono cifre riportate, non deduzioni. Bassa su un ' +
    'numero solo, quello di agosto, che è una stima a mese in corso e va trattato come tale. Media sulla ' +
    'conclusione, che resta una catena: dalla sostituzione dei barili turchi alla debolezza della ' +
    'trasmissione sul prezzo ci sono due passaggi, e nessuno dei due è ancora misurato da una quotazione.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    horizon: 'medio',
    regime:
      'Sull’arco dei giorni la direzione non si muove, ma una delle ragioni che la sostenevano si ' +
      'assottiglia. Il rischio sull’offerta russa risulta più piccolo di come era stato contato: a ' +
      'Ust-Luga le esportazioni di petrolio non si sono mai fermate, quindi resta una sola interruzione ' +
      'vera, e per quell’unica interruzione esiste già una deviazione che funziona — la Turchia ha ' +
      'sostituito il greggio del Mar Nero con Brasile e Guyana invece di rincorrerlo. Un fronte con un ' +
      'percorso alternativo pesa meno di un fronte senza: è la differenza fra il Mar Nero e Hormuz, e ' +
      'tenerli sullo stesso piano gonfia il premio invece di misurarlo.',
  },
  takeaways: [
    'Reuters ha chiarito che l’attacco del 14 agosto a Ust-Luga ha danneggiato l’impianto di trattamento del condensato di Novatek, ma le operazioni di esportazione di petrolio dal terminale non sono state interrotte; le autorità russe dichiarano di aver gestito rapidamente gli effetti dell’incendio.',
    'Resta una sola interruzione fisica: Sheskharis, a Novorossiysk, dove i carichi di greggio sono davvero sospesi su un terminale che movimenta circa 700.000 barili al giorno fra Urals, Siberian Light e KEBCO. Reuters non indica ancora una tempistica per la ripresa.',
    'Il primo numero che misura la conseguenza arriva da Ankara: le importazioni turche dai porti russi del Mar Nero scendono da circa 1,2 milioni di tonnellate a giugno a 900.000 a luglio, con agosto stimato attorno a 200.000. La Turchia compensa aumentando gli acquisti da Brasile e Guyana.',
    'Quel numero viene letto come escalation e per il prezzo del greggio dice il contrario: un compratore che sostituisce non è un compratore che rincara il barile scarso. La sostituzione assorbe lo shock invece di trasmetterlo.',
    'La differenza con Hormuz è tutta qui: per il Mar Nero esiste una deviazione che funziona, per lo Stretto no. Due fronti simultanei non sono due fronti equivalenti.',
  ],
  sources: [
    {
      outlet: 'Reuters',
      title:
        'Precisazione sull’attacco a Ust-Luga: danneggiato l’impianto di condensato Novatek, esportazioni di petrolio non interrotte',
      at: '15 agosto 2026',
    },
    {
      outlet: 'Reuters',
      title:
        'Sospensione dei carichi di greggio al terminale di Sheskharis, Novorossiysk; importazioni turche di greggio russo dal Mar Nero',
    },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Nel fine settimana il rischio sull’offerta russa è stato contato due volte, e una delle due era ' +
        'sbagliata. Reuters ha precisato che l’attacco del 14 agosto a Ust-Luga ha danneggiato l’impianto ' +
        'di trattamento del condensato di Novatek ma non ha interrotto le esportazioni di petrolio dal ' +
        'terminale, e che le autorità russe dichiarano di aver gestito rapidamente gli effetti ' +
        'dell’incendio. Resta quindi una sola interruzione vera, quella di Sheskharis. È una correzione ' +
        'che vale più di una notizia nuova, perché arriva dalla stessa fonte che aveva dato la prima ' +
        'versione.',
    },
    {
      kind: 'heading',
      text: 'I due porti, e perché distinguerli non era pedanteria',
      anchor: 'i-due-porti',
    },
    {
      kind: 'stats',
      title: 'Che cosa si è fermato e che cosa no',
      caption:
        'I tonnellaggi turchi sono cifre riportate; quella di agosto è una stima a mese in corso. Non sono quotazioni in tempo reale.',
      items: [
        {
          label: 'Ust-Luga, Baltico',
          value: 'export operativo',
          tone: 'bull',
          note: 'Danneggiato l’impianto di condensato di Novatek; le operazioni di esportazione di petrolio non sono state interrotte e l’incendio è stato gestito',
        },
        {
          label: 'Sheskharis, Mar Nero',
          value: 'carichi sospesi',
          tone: 'bear',
          note: 'Circa 700.000 barili al giorno fra Urals, Siberian Light e KEBCO; serbatoi pieni, ricezione fermata, nessuna tempistica dichiarata per la ripresa',
        },
        {
          label: 'Turchia, giugno',
          value: '≈ 1,2 mln t',
          tone: 'neutral',
          note: 'Importazioni dai porti russi: è il termine di paragone da cui si misura il resto',
        },
        {
          label: 'Turchia, luglio',
          value: '900.000 t',
          tone: 'warn',
          note: 'Circa un quarto in meno di giugno, quindi il calo era cominciato prima dell’attacco a Sheskharis',
        },
        {
          label: 'Turchia, agosto',
          value: '≈ 200.000 t',
          tone: 'bear',
          note: 'Stima sui flussi dal Mar Nero: un sesto del livello di giugno. Ankara compensa con Brasile e Guyana',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'La correzione conferma il metro, e per una volta lo fa dalla fonte',
      text:
        'La mattina del 14 agosto questo archivio ha rifiutato di trattare Ust-Luga come una perdita ' +
        'accertata di barili, classificandola come rischio su capacità attiva, e ha scritto in chiaro la ' +
        'condizione che avrebbe cambiato quella classificazione: una dichiarazione ufficiale russa, di ' +
        'Transneft o dell’operatore del porto, che quantificasse una riduzione dei caricamenti. Quella ' +
        'condizione non è mai scattata, e adesso si sa perché — non c’era niente da quantificare. È la ' +
        'conferma più netta che il metro abbia ricevuto finora, e va detto che cosa la rende diversa dalle ' +
        'altre: di solito una lettura viene confermata da un prezzo che si muove come previsto, cioè da un ' +
        'indizio; questa volta è la fonte che precisa il proprio stesso resoconto. Sul metro usato qui, ' +
        'una smentita pubblicata batte qualunque conferma di mercato.',
    },
    {
      kind: 'paragraph',
      text:
        'La correzione non riduce però la capacità complessivamente a rischio, la riassegna. I due porti ' +
        'hanno una taglia simile — Ust-Luga valeva circa 700.000 barili al giorno nel 2025 e con Primorsk ' +
        'circa il 40% dell’export marittimo russo, Sheskharis dichiara una capacità di circa 700.000 ' +
        'barili al giorno e a luglio ne ha movimentati quasi un milione — e quello che cambia è quale metà ' +
        'si è fermata davvero. Un solo terminale fermo invece di due è metà del danno che sembrava, non ' +
        'un danno inesistente.',
    },
    {
      kind: 'heading',
      text: 'Il numero che ribalta la lettura',
      anchor: 'il-numero-turco',
    },
    {
      kind: 'paragraph',
      text:
        'La conseguenza misurabile arriva da Ankara, e nella forma che questo archivio preferisce: un ' +
        'flusso, non un annuncio. Le importazioni turche dai porti russi passano da circa 1,2 milioni di ' +
        'tonnellate a giugno a 900.000 a luglio, con agosto stimato attorno a 200.000 tonnellate dal Mar ' +
        'Nero. La Turchia compensa aumentando gli acquisti da Brasile e Guyana. Il primo modo di leggerlo ' +
        'è quello immediato: i flussi russi verso un compratore importante stanno crollando, quindi il ' +
        'quadro peggiora. Il secondo è quello che conta per il prezzo, e va nel verso opposto.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Un compratore che sostituisce non è un compratore che rincara',
      text:
        'Il premio geopolitico sul greggio si forma quando qualcuno deve procurarsi lo stesso barile in un ' +
        'mercato dove ce n’è meno: è la competizione fra compratori a spostare il prezzo, non il danno in ' +
        'sé. Se la Turchia risolve il problema comprando in Brasile e in Guyana, quel barile russo non ' +
        'viene inseguito da nessuno e lo shock resta sull’offerta russa invece di diventare un prezzo ' +
        'mondiale. È la stessa distinzione registrata qui il 13 agosto sul lato del bilancio da cui arriva ' +
        'un movimento: allora il greggio scendeva dal lato della domanda e non da quello dell’offerta, e ' +
        'il prezzo diceva una cosa diversa da quella che sembrava. Qui l’offerta si riduce ma la domanda ' +
        'trova un’altra porta, e il risultato per la quotazione è più vicino a niente che a uno shock.',
    },
    {
      kind: 'note',
      text:
        'Due cautele sul numero, perché è quello su cui poggia tutto il ragionamento. La prima: quello di ' +
        'agosto è una stima a mese in corso e non un dato consuntivato, quindi la caduta da 900.000 a ' +
        '200.000 tonnellate va trattata come una direzione e non come una misura. La seconda: un ' +
        'tonnellaggio mensile e un flusso giornaliero non sono la stessa grandezza, e il calo di luglio su ' +
        'giugno è cominciato prima dell’attacco a Sheskharis, quindi non gli si può attribuire per intero. ' +
        'I livelli citati servono a rendere verificabile il ragionamento e non sono obiettivi affidabili.',
    },
    {
      kind: 'heading',
      text: 'Due fronti non sono due fronti equivalenti',
      anchor: 'due-fronti',
    },
    {
      kind: 'paragraph',
      text:
        'La lettura naturale di questo fine settimana è che il rischio fisico sull’offerta energetica ' +
        'abbia ora due fronti contemporanei, il Golfo Persico e il Mar Nero, e che sommandoli si ottenga ' +
        'un rischio doppio. La somma è però l’operazione sbagliata, perché i due fronti si distinguono ' +
        'esattamente su quello che conta: l’esistenza di una deviazione. Per il greggio russo del Mar Nero ' +
        'la deviazione esiste, ha un nome e ha già dei numeri — Brasile, Guyana, e un compratore che si è ' +
        'spostato in due mesi. Per Hormuz non esiste: venerdì non è stata osservata alcuna petroliera con ' +
        'greggio attraversare lo Stretto, e i barili che non passano da lì non passano da nessun’altra ' +
        'parte, perché è il collo di bottiglia stesso a essere il problema.',
    },
    {
      kind: 'balance',
      title: 'Che cosa cambia il quadro dell’offerta',
      left: {
        title: 'Resta in piedi',
        tone: 'bear',
        items: [
          'Sheskharis è fermo davvero, senza tempistica dichiarata per la ripresa, ed è l’unica interruzione fisica del fine settimana con una conseguenza operativa.',
          'Il meccanismo descritto il 14 agosto non è decaduto: con i serbatoi pieni e le navi ferme, la pressione risale la catena fino ai giacimenti e la produzione può essere costretta a scendere.',
          'Hormuz resta senza deviazione: nessuna petroliera con greggio osservata in transito venerdì, e nessun elemento nuovo che riduca il premio su quel fronte.',
        ],
      },
      right: {
        title: 'Si assottiglia',
        tone: 'bull',
        items: [
          'A Ust-Luga le esportazioni di petrolio non si sono mai fermate: il conto dei terminali interrotti passa da due a uno.',
          'La deviazione turca funziona e ha già due mesi di numeri dietro: la sostituzione assorbe lo shock invece di trasmetterlo al prezzo mondiale.',
          'Il calo delle importazioni turche era cominciato a luglio, prima dell’attacco: parte di quel movimento è una scelta commerciale e non l’effetto di un drone.',
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
        'La direzione resta neutrale con inclinazione rialzista, e la forza resta bassa, ma la ragione ' +
        'cambia e conviene dirlo. Fino a ieri il fronte russo era una delle gambe che sostenevano il ' +
        'premio; dopo la correzione e dopo il numero turco è la gamba più debole delle due, perché è ' +
        'l’unica delle due ad avere una strada alternativa già percorsa. Questo non toglie niente a ' +
        'Hormuz, dove la strada alternativa non c’è, e non rende benigno un terminale fermo: sposta il ' +
        'peso da una parte all’altra della stessa lettura.',
    },
    {
      kind: 'paragraph',
      text:
        'Il canale che resta da sorvegliare è sempre lo stesso, e la correzione lo rende un po’ meno ' +
        'probabile: se il greggio non accelera, il rischio geopolitico sostiene il rifugio senza ' +
        'alimentare le attese di inflazione, che è la configurazione in cui il metallo lavora meglio. La ' +
        'variabile decisiva alla riapertura non è quindi il numero di fronti aperti ma una quotazione: ' +
        'fino a che punto il Brent decide di prezzare un’interruzione che ha già una deviazione.',
    },
  ],
  invalidation: [
    'Una dichiarazione dell’operatore del terminale o di Transneft sulla ripresa dei carichi a Sheskharis accompagnata da dati di tracciamento navale sui volumi di luglio, cioè vicino a un milione di barili al giorno, entro mercoledì 19 agosto: chiuderebbe l’unica interruzione vera e toglierebbe per intero la gamba del Mar Nero.',
    'Importazioni turche dai porti russi del Mar Nero che risalgono sopra le 900.000 tonnellate su base mensile nella rilevazione di settembre: direbbe che le 200.000 stimate per agosto erano l’effetto momentaneo dell’interruzione e non una sostituzione dei fornitori, e cadrebbe l’argomento centrale di questa analisi.',
    'Una dichiarazione russa o una nuova precisazione che quantifichi una riduzione dei caricamenti di greggio a Ust-Luga: rovescerebbe la correzione su cui questa lettura è costruita e riporterebbe il conto dei terminali fermi a due.',
    'Un Brent che chiude sopra i 92 dollari entro venerdì 21 agosto senza alcun fatto nuovo su Hormuz: direbbe che il mercato prezza il fronte del Mar Nero come una perdita di offerta vera, e la tesi dell’assorbimento per sostituzione risulterebbe sbagliata.',
    'Un numero ufficiale russo — ministero o Transneft — che dichiari una riduzione dell’estrazione entro fine agosto: farebbe passare la catena dai serbatoi pieni alla produzione ridotta, che è il passaggio che questa analisi considera non ancora avvenuto.',
  ],
  nextEvent: {
    when: 'Entro mercoledì 19 agosto',
    title: 'La ripresa dei carichi a Sheskharis, o la sua assenza',
    detail:
      'È il solo numero che decide la taglia di questo fronte. Il precedente utile è un attacco allo ' +
      'stesso terminale a inizio marzo, che aveva prodotto una sospensione di cinque giorni: contando da ' +
      'giovedì, quel termine scade a metà settimana. Una ripresa dichiarata entro allora archivia ' +
      'l’episodio; un silenzio che si prolunga sposta la questione dai carichi alla produzione, che è ' +
      'l’unico passaggio in grado di trasformare un terminale fermo in barili in meno sul mercato.',
  },
};
