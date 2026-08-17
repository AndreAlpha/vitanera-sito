import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const aramcoConsegnaFuoriDalloStretto: Article = {
  slug: 'aramco-consegna-fuori-dallo-stretto-e-la-curva-non-si-muove',
  categories: ['rotte-e-approvvigionamento', 'petrolio', 'oro', 'usa'],
  title: 'Aramco consegna fuori dallo Stretto, e la curva non si muove',
  kicker: 'Rotte e approvvigionamento · Il conteggio che non conta i barili',
  dek:
    'Reuters riferisce che Saudi Aramco sta trattando carichi di settembre da consegnare con trasferimenti ' +
    'nave-nave al largo di Fujairah, così che i compratori non mandino le proprie petroliere attraverso ' +
    'Hormuz. Se il barile passa e la petroliera del compratore no, il conteggio dei transiti misura una ' +
    'cosa diversa da quella che questo archivio gli ha chiesto per due settimane.',
  publishedAt: '2026-08-17T17:50:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: ['Fujairah', 'Empire State', 'NAHB', 'Prezzi pagati', 'Trasferimenti nave-nave'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  certainty: 'media',
  certaintyNote:
    'Alta sui due dati americani, che sono diffusioni ufficiali e complete: il NAHB conferma 35 sulla ' +
    'propria fonte primaria, la Fed di New York pubblica l’indice a 20,6 con tutte le componenti. Media ' +
    'sul fatto che dà il titolo, e la ragione è precisa: quello di Aramco è un negoziato in corso ' +
    'riferito da Reuters, non un atto compiuto — l’unico atto compiuto del gruppo è la gara ADNOC, con ' +
    'almeno quattordici milioni di barili spot venduti. Bassa sulla conclusione che ne ricavo, cioè che ' +
    'il conteggio dei transiti sottostimi i barili consegnati: è una deduzione dal meccanismo descritto, ' +
    'e per confermarla servirebbe un dato di esportazioni che qui non c’è.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    horizon: 'medio',
    regime:
      'Due diffusioni americane sopra le attese e la curva non le prezza: il biennale resta attorno al ' +
      '4,155% e il decennale al 4,681%, entrambi leggermente più bassi in giornata, con la probabilità di ' +
      'un rialzo a settembre ferma attorno al 33% contro il 51,2% di un mese fa. Il rifiuto del prezzo è ' +
      'l’informazione, non il dato. Nello stesso tempo la gamba energetica riceve la sua spiegazione ' +
      'materiale: se Aramco consegna a est dello Stretto e ADNOC colloca quattordici milioni di barili ' +
      'spot, il Brent sotto i 90 dollari smette di essere un’anomalia e diventa la conseguenza di una ' +
      'valvola che funziona. La direzione non sale perché entrambe le gambe sono fatte di cose che non ' +
      'sono ancora successe fino in fondo — un negoziato riferito e una riprezzatura mancata — e una ' +
      'valvola che allenta il collo di bottiglia toglie premio al metallo tanto quanto gli toglie rischio.',
  },
  takeaways: [
    'Reuters riferisce che Saudi Aramco sta negoziando carichi di Arab Medium e Arab Heavy per settembre da consegnare tramite trasferimenti nave-nave al largo di Fujairah, permettendo ai compratori di ricevere il greggio senza mandare le proprie petroliere attraverso lo Stretto; usa inoltre Yanbu sul Mar Rosso e Sidi Kerir in Egitto per altre esportazioni.',
    'ADNOC ha collocato almeno quattordici milioni di barili spot a raffinerie asiatiche nella sua ultima gara: è l’unico atto compiuto del gruppo, mentre quello di Aramco è un negoziato in corso.',
    'Empire State di agosto a 20,6 contro 10,6 attesi e 15,6 di luglio, massimo da oltre quattro anni. Nuovi ordini 17,3, spedizioni 11,7, occupazione 9,3, ore lavorate 6,9. Prezzi pagati in salita a 58,6 da 52,3; prezzi ricevuti in calo a 22,7 da 27,6.',
    'NAHB di agosto a 35 contro 33 attesi e 34 di luglio non rivisto, con le condizioni di vendita correnti a 39 da 37. Ma l’indice è sotto 40 da sedici mesi consecutivi, la striscia più lunga dal 2012, e circa il 30% dei costruttori taglia i prezzi mentre quasi due terzi offrono incentivi.',
    'Nessuna delle due sorprese ha riprezzato la Fed: biennale attorno al 4,155%, decennale al 4,681%, probabilità di rialzo a settembre ferma attorno al 33% contro il 51,2% di un mese fa, con il dollaro sui minimi da oltre due mesi e l’oro a circa 4.388 dollari.',
  ],
  sources: [
    {
      outlet: 'Reuters',
      title:
        'Saudi Aramco tratta carichi di settembre con trasferimenti nave-nave al largo di Fujairah; ADNOC colloca almeno quattordici milioni di barili spot a raffinerie asiatiche',
      at: '17 agosto 2026',
    },
    {
      outlet: 'Federal Reserve Bank of New York',
      title: 'Empire State Manufacturing Survey, agosto 2026: indice generale a 20,6',
      at: '17 agosto 2026',
    },
    {
      outlet: 'NAHB',
      title:
        'NAHB/Wells Fargo Housing Market Index, agosto 2026: 35, con condizioni di vendita correnti a 39',
      at: '17 agosto 2026',
    },
    {
      outlet: 'Reuters',
      title:
        'Probabilità di un rialzo a settembre attorno al 33%, contro il 51,2% di un mese fa; rilevazioni su Treasury, Dollar Index, Brent e oro',
      at: '17 agosto 2026',
    },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Per due settimane questo archivio ha usato un solo numero come misura del vincolo su Hormuz: ' +
        'quante navi passano. È stato scelto perché è materiale, perché non si può dichiarare e perché ha ' +
        'continuato a scendere mentre le dichiarazioni salivano. Oggi arriva la notizia che obbliga a ' +
        'chiedersi che cosa quel numero stia davvero misurando, e non viene da una fonte ostile: viene ' +
        'dal venditore.',
    },
    {
      kind: 'heading',
      text: 'Il barile passa, la petroliera del compratore no',
      anchor: 'il-barile-passa',
    },
    {
      kind: 'paragraph',
      text:
        'Reuters riferisce che Saudi Aramco sta negoziando carichi di Arab Medium e Arab Heavy per ' +
        'settembre da consegnare con trasferimenti nave-nave al largo di Fujairah. Il punto tecnico è ' +
        'tutto lì: Fujairah sta sulla costa orientale degli Emirati, cioè fuori dallo Stretto, e un ' +
        'compratore asiatico che riceve il carico in quel punto non manda la propria petroliera dentro ' +
        'Hormuz. Aramco sta inoltre usando Yanbu sul Mar Rosso e Sidi Kerir in Egitto per altre ' +
        'esportazioni. Accanto, l’unico atto già compiuto: ADNOC ha collocato almeno quattordici milioni ' +
        'di barili spot a raffinerie asiatiche nella sua ultima gara.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Che cosa misura davvero il conteggio dei transiti',
      text:
        'Se il meccanismo funziona come descritto, il numero dei passaggi e il numero dei barili ' +
        'consegnati smettono di essere la stessa cosa. Il conteggio continua a misurare il traffico — ed è ' +
        'un traffico crollato, cinque navi sabato e nessuna domenica contro oltre 130 al giorno prima del ' +
        'conflitto — ma smette di misurare la scarsità, perché una parte del greggio raggiunge il ' +
        'compratore senza generare un transito del compratore. Non è un errore della fonte: è il vincolo ' +
        'che ha trovato una valvola, e la valvola va contata insieme al vincolo. Questo archivio aveva già ' +
        'registrato la stessa logica dal lato opposto, quando la Turchia ha sostituito il greggio russo e ' +
        'l’India ha imposto obiettivi di scorte: un fronte con una deviazione che funziona pesa meno di un ' +
        'fronte che non ce l’ha. La novità è che questa volta a deviare non è il compratore ma il ' +
        'venditore, e lo fa con gli stessi barili.',
    },
    {
      kind: 'paragraph',
      text:
        'Due cautele, e la prima è la più importante. Quello di Aramco è un negoziato in corso riportato ' +
        'da un’agenzia, non un atto dichiarato dalla compagnia: sulla scala usata qui è un gradino sotto la ' +
        'gara ADNOC, che invece è chiusa e quantificata. La seconda riguarda ciò che il resoconto non dice: ' +
        'come il greggio arrivi a Fujairah. Se ci arriva via mare dal Golfo, qualcuno quello Stretto lo ' +
        'attraversa comunque, e a cambiare è chi sopporta il rischio invece della quantità che passa. ' +
        'Finché quel passaggio non è documentato, la conclusione corretta è più stretta di quella che la ' +
        'notizia suggerisce: il rischio si sta ridistribuendo, e non è dimostrato che si stia riducendo.',
    },
    {
      kind: 'heading',
      text: 'Due dati sopra le attese, e nessuna riprezzatura',
      anchor: 'due-dati',
    },
    {
      kind: 'stats',
      title: 'Le due diffusioni americane di oggi',
      caption:
        'Valori pubblicati dalle fonti primarie citate. I livelli di mercato sono rilevazioni di una sessione in corso, non chiusure.',
      items: [
        {
          label: 'Empire State',
          value: '20,6',
          tone: 'bear',
          note: 'Contro 10,6 attesi e 15,6 di luglio: massimo da oltre quattro anni. Nuovi ordini 17,3, spedizioni 11,7, occupazione 9,3, ore lavorate 6,9',
        },
        {
          label: 'Prezzi pagati',
          value: '58,6',
          tone: 'bear',
          note: 'Da 52,3: è la componente che dovrebbe muovere i rendimenti, e non li ha mossi. I prezzi ricevuti vanno però nel verso opposto, a 22,7 da 27,6',
        },
        {
          label: 'NAHB',
          value: '35',
          tone: 'warn',
          note: 'Contro 33 attesi e 34 di luglio non rivisto, con le condizioni di vendita correnti a 39 da 37. Sotto 40 da sedici mesi, la striscia più lunga dal 2012',
        },
        {
          label: 'Treasury 2 e 10 anni',
          value: '4,155% e 4,681%',
          tone: 'bull',
          note: 'Entrambi leggermente più bassi in giornata, cioè il contrario di quello che due sorprese al rialzo dovrebbero produrre',
        },
        {
          label: 'Rialzo Fed a settembre',
          value: '≈ 33%',
          tone: 'bull',
          note: 'Contro il 51,2% di un mese fa: la sequenza di dati deboli delle settimane scorse non è stata rimessa in discussione',
        },
        {
          label: 'XAU/USD',
          value: '≈ 4.388 $',
          tone: 'bull',
          note: 'Più 0,3% circa, con il dollaro sui minimi da oltre due mesi e il Brent a 88,95 dopo un massimo intraday di 89,68',
        },
      ],
    },
    {
      kind: 'paragraph',
      text:
        'La domanda giusta non è se i due dati siano forti — lo sono, e l’Empire State lo è molto — ma ' +
        'perché non abbiano prodotto la conseguenza che il meccanismo prevede. Un’attività manifatturiera ' +
        'al massimo da quattro anni con i prezzi pagati in salita di sei punti dovrebbe spingere in alto la ' +
        'scadenza che prezza la banca centrale. Il biennale è invece leggermente più basso. Quando un ' +
        'prezzo rifiuta di seguire la notizia che dovrebbe muoverlo, l’informazione sta nel rifiuto: o la ' +
        'notizia era già scontata, o il canale che la trasporta è più debole di quanto si creda in questa ' +
        'fase. La regola sta in /metodologia, e questo archivio l’ha già applicata due volte questo mese ' +
        'nella direzione opposta, quando erano i dati deboli a non far scendere il decennale.',
    },
    {
      kind: 'balance',
      title: 'Come si compensano le due gambe',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Due sorprese al rialzo non hanno riprezzato la Fed: probabilità di rialzo a settembre ferma attorno al 33% contro il 51,2% di un mese fa, con il biennale e il decennale entrambi leggermente più bassi.',
          'Il dollaro resta sui minimi da oltre due mesi, quindi il canale valutario continua a lavorare a favore mentre quello dei dati avrebbe dovuto lavorare contro.',
          'La valvola logistica tiene il Brent sotto i 90 dollari: finché il greggio non alimenta le attese di inflazione, il premio geopolitico sostiene il rifugio senza il contrappeso dei rendimenti.',
          'Il livello assoluto del NAHB resta molto debole — sotto 40 da sedici mesi, con il 30% dei costruttori che taglia i prezzi — quindi la sorpresa è sul margine e non sul quadro.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'I prezzi pagati dell’Empire State salgono a 58,6 da 52,3: è la componente che alimenta le attese di inflazione, e una conferma nelle indagini nazionali cambierebbe il quadro dei tassi.',
          'L’Empire State è un’indagine di un solo distretto, quindi vale in entrambi i sensi: non basta a riprezzare la Fed, ma non basta nemmeno a escludere che le prossime indagini confermino.',
          'Una valvola che allenta il collo di bottiglia toglie premio al metallo tanto quanto gli toglie rischio: se il greggio smette di essere un problema, smette anche di essere un argomento per comprare oro.',
          'Il fatto che dà il titolo è un negoziato riferito e non un atto della compagnia, e il percorso del greggio fino a Fujairah non è documentato.',
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
        'La direzione resta neutrale con inclinazione rialzista e la forza resta media. Il testo di partenza ' +
        'considera i due dati leggermente sfavorevoli e la notizia su Aramco favorevole, e su entrambi i ' +
        'punti la conclusione qui è la stessa; quello che cambia è il peso relativo. La cosa più ' +
        'informativa della giornata non è che i dati siano usciti forti, ma che siano usciti forti senza ' +
        'conseguenze. Non è la prima volta questo mese che una diffusione non produce il movimento che le ' +
        'corrisponde — era già successo con il rapporto occupazionale privato che non aveva mosso il ' +
        'decennale — e quando la stessa cosa si ripete la spiegazione smette di essere l’eccezione del ' +
        'giorno e diventa una descrizione del regime.',
    },
    {
      kind: 'paragraph',
      text:
        'Sulla notizia di Aramco la lettura è più prudente di quella suggerita dal testo, e per una ' +
        'ragione che vale la pena scrivere. Una valvola che funziona è una buona notizia per l’economia e ' +
        'una notizia ambigua per il metallo: riduce il rischio di coda — Brent sopra i 95 dollari che ' +
        'spinge inflazione e rendimenti contro l’oro — ma riduce anche il premio di rifugio che sostiene ' +
        'l’oro adesso. Le due cose non si annullano e non si sommano; separano il canale energetico da ' +
        'quello geopolitico, che finora questo archivio ha spesso tenuto insieme. Il rischio su Hormuz ' +
        'resta dov’è, perché nessuno ha riaperto niente: quello che cambia è quanti barili quel rischio ' +
        'riesce ancora a togliere dal mercato.',
    },
    {
      kind: 'note',
      text:
        'Una precisazione sul valore probatorio dell’Empire State, perché non venga letta come una ' +
        'diffusione nazionale: misura un solo distretto della Federal Reserve ed è la prima indagine ' +
        'manifatturiera del mese, quindi anticipa e non conclude. Un dato parziale non va trattato come ' +
        'completo, ed è la stessa cautela applicata qui all’inizio del mese quando i componenti anticipati ' +
        'dell’indagine nazionale erano stati letti prima del totale. I livelli di prezzo citati servono a ' +
        'rendere verificabile il ragionamento e non sono obiettivi affidabili.',
    },
  ],
  invalidation: [
    'Un biennale che si porta sopra il 4,218%, cioè sopra il massimo del 12 agosto, entro venerdì 21 agosto: direbbe che le due sorprese hanno riprezzato la Fed con ritardo e che leggere il rifiuto del prezzo come informazione era sbagliato.',
    'Una conferma o una smentita ufficiale di Saudi Aramco sui trasferimenti nave-nave al largo di Fujairah entro venerdì 21 agosto: oggi il fatto centrale è un negoziato riferito da un’agenzia, e una presa di posizione della compagnia lo sposterebbe in una delle due categorie in cui adesso non sta.',
    'Un Dollar Index che chiude sopra 99,935, cioè sopra il massimo del 13 agosto, entro venerdì 21 agosto: toglierebbe il sostegno valutario che oggi compensa i due dati sopra le attese, e la lettura andrebbe portata a neutrale.',
    'Un Brent che chiude sopra gli 89,68 dollari del massimo di oggi entro venerdì 21 agosto: direbbe che la valvola descritta qui non sta contenendo il prezzo quanto questa analisi sostiene, e la gamba energetica del ragionamento cadrebbe.',
    'Un dato ufficiale di esportazioni saudite o emiratine di agosto che scenda in proporzione al crollo dei transiti, in uscita entro fine settembre: direbbe che il conteggio dei passaggi stava misurando correttamente anche i barili, e che la distinzione proposta qui fra traffico e scarsità non serviva.',
  ],
  nextEvent: {
    when: 'Mercoledì 19 agosto',
    title: 'Verbali della riunione del FOMC del 28-29 luglio',
    detail:
      'Arrivano due giorni dopo due diffusioni sopra le attese che non hanno spostato la probabilità di ' +
      'un rialzo a settembre, ferma attorno al 33% contro il 51,2% di un mese fa. È l’occasione per capire ' +
      'se il rifiuto del prezzo descritto qui regge anche davanti agli argomenti con cui il comitato è ' +
      'arrivato alla pausa: un tono più restrittivo del previsto, sommato ai prezzi pagati dell’Empire ' +
      'State in salita a 58,6, darebbe al canale dei tassi la spinta che i dati di oggi non gli hanno ' +
      'dato. Prima, martedì 18 agosto, escono i prezzi all’import e all’export di luglio.',
  },
};
