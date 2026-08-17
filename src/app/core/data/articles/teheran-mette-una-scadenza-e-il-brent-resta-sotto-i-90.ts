import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const teheranMetteUnaScadenza: Article = {
  slug: 'teheran-mette-una-scadenza-e-il-brent-resta-sotto-i-90',
  categories: ['premio-di-rischio', 'oro', 'petrolio', 'medio-oriente'],
  title: 'Teheran mette una scadenza, e il Brent resta sotto i 90',
  kicker: 'Premio di rischio · La minaccia con una data',
  dek:
    'Un alto funzionario iraniano dice a Reuters che il Paese è pronto a passare da una postura difensiva ' +
    'a una offensiva se la diplomazia non produrrà risultati in alcune settimane. Nessuna delle posizioni ' +
    'iraniane registrate qui dal 5 agosto aveva un termine — e il greggio, nella stessa giornata, tratta ' +
    'a 88,95 dollari.',
  publishedAt: '2026-08-17T16:45:00+02:00',
  author: AUTHOR,
  readingMinutes: 6,
  tags: ['Iran', 'Hormuz', 'Minacce dichiarate', 'Sondaggio Reuters', 'Pausa della Fed'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  certainty: 'media',
  certaintyNote:
    'Media sul fatto centrale, e la ragione è il tipo di fonte: la minaccia arriva da un alto funzionario ' +
    'iraniano non nominato che parla a Reuters, cioè la categoria che questo archivio classifica come ' +
    'riportata e non confermata. Alta invece sui due elementi che la accompagnano — il sondaggio Reuters ' +
    'del 12-17 agosto, che è pubblicato e attribuibile, e i prezzi, che sono rilevazioni di una sessione ' +
    'aperta. Bassa sulla conclusione operativa: la storia di questa fase dice che una minaccia dichiarata ' +
    'non ha ancora mai spostato il conteggio dei transiti né il prezzo del barile, e chiedere a questa di ' +
    'fare eccezione significherebbe scommettere contro la propria serie.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    horizon: 'medio',
    regime:
      'La direzione non sale a rialzista, e la ragione è la natura del fatto nuovo invece della sua ' +
      'gravità. Una postura offensiva annunciata è una preferenza dichiarata: è opzionale, e può essere ' +
      'ritirata senza costo dalla stessa voce che l’ha espressa. Il vincolo materiale — cinque transiti ' +
      'sabato, nessuno domenica, contro oltre 130 al giorno prima del conflitto — non si è mosso di una ' +
      'nave per effetto della dichiarazione, e il barile nemmeno: il Brent è a 88,95 dollari, sotto il ' +
      'massimo di 89,40 già toccato stamattina. Quello che sostiene davvero il metallo resta il canale ' +
      'americano, e lì il quadro migliora in modo misurabile: il sondaggio Reuters del 12-17 agosto dà ' +
      'la maggioranza degli economisti sulla pausa per tutto il resto del 2026, con il dollaro sui minimi ' +
      'da due mesi. La forza è media perché due canali spingono nello stesso verso senza che nessuno dei ' +
      'due sia ancora un fatto compiuto.',
  },
  takeaways: [
    'Un alto funzionario iraniano dice a Reuters che Teheran è pronta a una risposta militare «tempestiva e precisa» se Washington continuerà il blocco navale e non rispetterà gli impegni dell’intesa provvisoria di giugno, e fissa un termine di alcune settimane per vedere progressi.',
    'La parte davvero nuova non è la minaccia ma la data: le dichiarazioni iraniane raccolte in questo archivio dal 5 agosto in poi elencavano condizioni senza mai attaccarci una scadenza. Un termine è l’unica parte di una preferenza dichiarata che si può verificare.',
    'Non c’è alcun atto materiale successivo alla dichiarazione, e la distinzione va tenuta: il conteggio dei transiti resta quello del fine settimana — cinque navi sabato, nessuna domenica, contro oltre 130 al giorno prima del conflitto.',
    'Il greggio non prezza la minaccia: Brent a 88,95 dollari con più 0,5% e WTI a 82,65 con più 0,3%, sotto gli 89,40 già toccati in giornata. Reuters attribuisce il contenimento alla capacità di ADNOC e Saudi Aramco di usare rotte alternative.',
    'Il sondaggio Reuters del 12-17 agosto dà la grande maggioranza degli economisti sulla Fed ferma al 3,50-3,75% per tutto il resto del 2026, contro un mercato che prezza ancora il 30-33% di probabilità di un rialzo a settembre: consenso professionale e prezzo non coincidono, e la distanza è il margine di manovra.',
  ],
  sources: [
    {
      outlet: 'Reuters',
      title:
        'Alto funzionario iraniano: pronti a una risposta militare «tempestiva e precisa» e a passare a una postura offensiva se la diplomazia fallisce, con un termine di alcune settimane',
      at: '17 agosto 2026',
    },
    {
      outlet: 'Reuters',
      title:
        'Sondaggio fra economisti del 12-17 agosto: maggioranza attesa per Fed ferma al 3,50-3,75% per il resto del 2026',
      at: '17 agosto 2026',
    },
    {
      outlet: 'Reuters',
      title:
        'Transiti nello Stretto di Hormuz nel fine settimana; Brent e WTI contenuti dalle rotte alternative di ADNOC e Saudi Aramco',
      at: '17 agosto 2026',
    },
    {
      outlet: 'Investing.com',
      title: 'Rilevazioni su XAU/USD nell’area 4.389-4.404 dollari',
    },
    {
      outlet: 'Federal Reserve',
      title:
        'Calendario degli interventi: l’ultimo discorso resta quello di Lisa Cook del 5 agosto; la riunione chiusa odierna del Board riguarda i tassi di sconto delle Reserve Banks',
    },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Teheran ha alzato di un gradino il linguaggio su Hormuz, e questa volta ha aggiunto qualcosa che ' +
        'nelle dichiarazioni precedenti non c’era. Un alto funzionario iraniano ha detto a Reuters che il ' +
        'Paese è pronto a una risposta militare «tempestiva e precisa» se Washington continuerà il blocco ' +
        'navale, e che è disposto a passare da una postura difensiva a una offensiva. Accanto, un termine: ' +
        'alcune settimane per vedere progressi diplomatici, oltre le quali le azioni nello Stretto e nella ' +
        'regione potrebbero aumentare. La minaccia è la parte che si legge; la scadenza è la parte che si ' +
        'può verificare.',
    },
    {
      kind: 'heading',
      text: 'Che cosa è nuovo, e che cosa no',
      anchor: 'che-cosa-e-nuovo',
    },
    {
      kind: 'paragraph',
      text:
        'La minaccia in sé non è nuova, e vale la pena dirlo prima di tutto il resto. Il 6 agosto questo ' +
        'archivio ha pubblicato una dichiarazione iraniana più concreta di questa — Teheran avvertiva i ' +
        'Paesi del Golfo che avrebbe risposto a un nuovo attacco americano colpendo le loro infrastrutture ' +
        'energetiche, cioè indicava i bersagli — e la registrò come la minaccia più diretta arrivata fino a ' +
        'quel momento. Il Brent, quel giorno, scese a 79,08 dollari. Da allora l’elenco delle condizioni ' +
        'iraniane per la riapertura si è allungato più volte senza che il conteggio dei transiti si ' +
        'muovesse: sette annunci di distensione in quattro giorni, e due rivendicazioni di sovranità che si ' +
        'escludevano a vicenda sulla stessa acqua a ventiquattr’ore di distanza, con le navi ferme.',
    },
    {
      kind: 'paragraph',
      text:
        'Quello che non c’era è il termine. Fino a ieri le posizioni iraniane erano elenchi di requisiti — ' +
        'accettazione delle condizioni, fine della guerra, sblocco di asset, una compensazione — senza ' +
        'alcun momento in cui si potesse dire se erano state soddisfatte o no. «Alcune settimane» è vago, ' +
        'ma è comunque un orologio, e un orologio è l’unica parte di una posizione dichiarata che produce ' +
        'un fatto osservabile: fra qualche settimana o l’escalation ci sarà, o non ci sarà, e in entrambi i ' +
        'casi si sarà imparato qualcosa. È per questo che questa dichiarazione entra in archivio mentre le ' +
        'precedenti dello stesso tipo, negli ultimi giorni, non ci sono entrate.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Perché una minaccia resta una preferenza',
      text:
        'Il metodo seguito qui separa quello che viene dichiarato da quello che viene misurato, e non per ' +
        'diffidenza verso chi parla: le posizioni dichiarate sono opzionali e possono essere ritirate senza ' +
        'costo, i vincoli materiali no. Una postura offensiva annunciata appartiene alla prima categoria ' +
        'finché non produce un atto; il conteggio dei transiti appartiene alla seconda. In questa fase i ' +
        'due si sono mossi in modo indipendente decine di volte, e ogni volta ha avuto ragione il secondo. ' +
        'La spiegazione per esteso è in /metodologia.',
    },
    {
      kind: 'stats',
      title: 'Lunedì 17 agosto, pomeriggio',
      caption:
        'Rilevazioni di una sessione in corso, non chiusure. I conteggi dei transiti sono cifre giornaliere di un fornitore privato e non una misura ufficiale.',
      items: [
        {
          label: 'Transiti Hormuz',
          value: '5 sabato, 0 domenica',
          tone: 'bear',
          note: 'Contro trentuno nel fine settimana precedente e oltre 130 al giorno prima del conflitto: il vincolo non si è mosso dopo la dichiarazione',
        },
        {
          label: 'Brent',
          value: '≈ 88,95 $',
          tone: 'bull',
          note: 'Più 0,5%, sotto gli 89,40 già toccati in giornata: il canale che trasformerebbe la minaccia in un problema per l’oro resta chiuso',
        },
        {
          label: 'WTI',
          value: '≈ 82,65 $',
          tone: 'bull',
          note: 'Più 0,3%. Reuters attribuisce il contenimento alla capacità di ADNOC e Saudi Aramco di usare rotte alternative',
        },
        {
          label: 'XAU/USD',
          value: '≈ 4.388 $',
          tone: 'warn',
          note: 'Più 0,3% secondo Reuters, con rilevazioni Investing fra 4.389 e 4.404: i 4.400 sono stati attraversati in seduta ma non tenuti',
        },
        {
          label: 'Rialzo Fed a settembre',
          value: '30-33%',
          tone: 'bull',
          note: 'Prezzo di mercato, quindi circa due terzi di probabilità di pausa. Il sondaggio fra economisti è più netto: fermi per tutto il resto del 2026',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Il consenso si sposta più del prezzo',
      anchor: 'il-consenso',
    },
    {
      kind: 'paragraph',
      text:
        'Il secondo fatto della giornata è di natura completamente diversa, ed è quello con il fondamento ' +
        'più solido: un sondaggio Reuters condotto fra il 12 e il 17 agosto trova la grande maggioranza ' +
        'degli economisti intervistati ad attendersi la Federal Reserve ferma al 3,50-3,75% per tutto il ' +
        'resto del 2026. Non è una decisione della banca centrale e non va confusa con una: è la ' +
        'fotografia di che cosa si aspettano dei professionisti, ed è arrivata dopo una sequenza di ' +
        'diffusioni che questo archivio ha seguito una per una — un rapporto occupazionale in contrazione, ' +
        'un indice dei prezzi e uno alla produzione senza accelerazione, vendite al dettaglio in calo dello ' +
        '0,6% e una fiducia dei consumatori a 51,0.',
    },
    {
      kind: 'paragraph',
      text:
        'La cosa interessante è che il mercato è meno convinto degli economisti. Il prezzo dei futures ' +
        'assegna ancora il 30-33% di probabilità a un rialzo a settembre, cioè circa due terzi alla pausa; ' +
        'gli economisti la danno praticamente per scontata fino a fine anno. Quella distanza non è un ' +
        'errore di qualcuno: è il premio che il mercato continua a pagare per la possibilità che il ' +
        'comitato sorprenda, e finché resta lì c’è ancora spazio perché la riprezzatura prosegua a favore ' +
        'del metallo senza bisogno di un dato nuovo. È il canale che ha spinto l’oro stamattina, ed è ' +
        'l’unico dei due che oggi si può misurare.',
    },
    {
      kind: 'note',
      text:
        'Due precisazioni sul quadro monetario di oggi, perché è facile contarle come segnali e non lo ' +
        'sono. Non risultano nuovi interventi del Board sulla politica monetaria: sul sito ufficiale ' +
        'l’ultimo discorso resta quello di Lisa Cook del 5 agosto. E la riunione chiusa del Board di oggi ' +
        'riguarda i tassi di sconto delle Reserve Banks, che è una procedura regolare e non una decisione ' +
        'del FOMC sui Fed Fund. I livelli di prezzo citati in questa analisi servono a rendere verificabile ' +
        'il ragionamento e non sono obiettivi affidabili.',
    },
    {
      kind: 'balance',
      title: 'Le due gambe della lettura',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'La minaccia alza il pavimento del premio geopolitico senza passare dal prezzo del barile: il Brent a 88,95 dollari resta sotto la soglia oltre la quale il greggio smette di sostenere il rifugio e torna ad alimentare rendimenti e attese di inflazione.',
          'Il consenso degli economisti si è spostato sulla pausa per tutto il resto del 2026, e il prezzo di mercato non lo ha ancora seguito per intero: fra il 30-33% dei futures e la quasi certezza del sondaggio c’è dello spazio.',
          'Il dollaro è sui minimi da circa due mesi e i rendimenti sono in lieve calo: le due condizioni che rendono meno costoso tenere un metallo senza cedole si presentano insieme.',
          'Il vincolo materiale continua a peggiorare nella forma affidabile, cioè su più rilevazioni consecutive e non su un numero isolato: trentuno transiti, poi cinque, poi nessuno.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Il fatto nuovo è una dichiarazione di un funzionario non nominato, cioè la categoria di fonte più debole fra quelle usate in questo archivio, e non è seguito da alcun atto materiale.',
          'Il precedente esatto è già registrato: il 6 agosto una minaccia iraniana più specifica di questa — con i bersagli indicati — coincise con un Brent che scendeva a 79,08 dollari.',
          'I 4.400 sono stati attraversati in seduta e non tenuti, per la seconda volta oggi: la rilevazione Reuters è 4.388, sotto il livello, e il test dichiarato stamattina resta non superato.',
          'Il sondaggio è un’aspettativa e non una decisione: i verbali del FOMC di mercoledì possono spostare il prezzo di mercato in entrambe le direzioni, e la distanza fra consenso e prezzo si può chiudere anche dal lato sbagliato.',
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
        'La direzione resta neutrale con inclinazione rialzista e la forza sale a media, e la differenza ' +
        'rispetto a come il fatto si presenta merita di essere detta per intero. Letta dal titolo, questa è ' +
        'la notizia più aggressiva arrivata dall’Iran da settimane, e porterebbe a scrivere rialzista senza ' +
        'esitazione. Letta con la serie che questo archivio ha costruito, è la ennesima posizione ' +
        'dichiarata in una fase che ne ha prodotte moltissime, tutte seguite da un conteggio dei transiti ' +
        'immobile e da un barile che non le ha prezzate. Alzare la direzione su una dichiarazione, dopo ' +
        'averla tenuta ferma su sette dichiarazioni precedenti, significherebbe cambiare metro in corsa.',
    },
    {
      kind: 'paragraph',
      text:
        'Quello che sostiene la lettura, e che giustifica la forza media invece che bassa, è l’altra gamba: ' +
        'il canale monetario. Lì non ci sono dichiarazioni ma numeri, e vanno tutti nella stessa direzione ' +
        'da una settimana. La configurazione utile per il metallo è precisamente quella di adesso — ' +
        'rischio geopolitico alto e greggio contenuto — perché il premio di rifugio arriva senza il ' +
        'contrappeso dei rendimenti. È una configurazione che si rompe da sola quando il petrolio si muove, ' +
        'ed è per questo che il numero da guardare nei prossimi giorni non è l’oro ma il Brent.',
    },
    {
      kind: 'paragraph',
      text:
        'La scadenza iraniana entra in questa lettura come un appuntamento e non come una spinta. Fra ' +
        'qualche settimana produrrà un fatto in un verso o nell’altro, e sarà la prima volta in questa fase ' +
        'che una posizione dichiarata avrà una data con cui confrontarsi. Fino ad allora vale la regola ' +
        'che ha retto per due settimane: quello che si può misurare batte quello che si può annunciare.',
    },
  ],
  invalidation: [
    'Un atto materiale attribuito all’Iran — un attacco a una nave o a un’infrastruttura energetica riportato da Reuters o da un’agenzia ufficiale — entro venerdì 21 agosto: trasformerebbe la posizione dichiarata in un vincolo, e la classificazione data qui, cioè una preferenza che non prezza, risulterebbe sbagliata.',
    'Un Brent che chiude sopra gli 89,40 dollari del massimo toccato oggi entro venerdì 21 agosto: direbbe che il mercato del greggio ha cominciato a prezzare la minaccia, cioè l’opposto dell’osservazione centrale di questa analisi.',
    'Un oro che chiude sotto i 4.388 dollari della rilevazione su cui questa lettura è scritta entro mercoledì 19 agosto: direbbe che nemmeno una minaccia esplicita accompagnata da un dollaro sui minimi di due mesi produce domanda di protezione, e la direzione andrebbe portata a neutrale.',
    'Una probabilità di rialzo a settembre sopra il 33%, cioè sopra il limite superiore dell’intervallo rilevato oggi, entro venerdì 21 agosto: direbbe che la distanza fra il consenso degli economisti e il prezzo di mercato si sta chiudendo dal lato sbagliato, e cadrebbe la gamba misurabile di questa lettura.',
    'Una smentita o un ridimensionamento del termine da parte del ministero degli Esteri iraniano o dell’agenzia ufficiale entro venerdì 21 agosto: direbbe che la scadenza era retorica, e verrebbe meno l’unico elemento per cui questa dichiarazione è stata trattata diversamente dalle precedenti.',
  ],
  nextEvent: {
    when: 'Mercoledì 19 agosto',
    title: 'Verbali della riunione del FOMC del 28-29 luglio',
    detail:
      'È l’appuntamento che mette alla prova la gamba misurabile di questa lettura, cioè la distanza fra ' +
      'un consenso di economisti quasi unanime sulla pausa e un prezzo di mercato che assegna ancora il ' +
      '30-33% a un rialzo. I verbali dicono con quali argomenti quella riunione è arrivata alla pausa, ' +
      'compresi i tre dissensi per un rialzo di venticinque punti base. Un tono più restrittivo del ' +
      'previsto allargherebbe quella distanza invece di chiuderla, e toglierebbe al metallo il solo canale ' +
      'che oggi si può misurare. Prima, martedì 18 agosto alle 14:30, escono i prezzi all’import e ' +
      'all’export di luglio.',
  },
};
