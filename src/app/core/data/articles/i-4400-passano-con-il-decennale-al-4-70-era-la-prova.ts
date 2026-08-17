import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const i4400PassanoConIlDecennaleAl470: Article = {
  slug: 'i-4400-passano-con-il-decennale-al-4-70-era-la-prova',
  categories: ['correlazioni', 'oro', 'obbligazioni', 'usa'],
  title: 'I 4.400 passano con il decennale al 4,70%, ed era la prova richiesta',
  kicker: 'Correlazioni · La condizione scritta l’11 agosto',
  dek:
    'L’oro arriva a 4.426,52 dollari mentre il decennale torna al 4,70% e il trentennale sta al 5,29%. È ' +
    'esattamente la coppia di numeri che questo archivio aveva dichiarato l’11 agosto come prova della ' +
    'forza relativa, mancata allora per quattordici dollari e diventata poi ineseguibile. Oggi entrambe le ' +
    'gambe ci sono nello stesso momento.',
  publishedAt: '2026-08-17T19:20:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: [
    'Premio a termine',
    'Forza relativa',
    'Soglie',
    'Emissioni corporate',
    'Domanda ufficiale',
  ],
  instruments: ['XAU/USD', 'Treasury', 'DXY', 'Brent', 'WTI'],
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sui numeri, che sono tutti rilevazioni di prezzo attribuite alla stessa fonte: oro a 4.409,94 e ' +
    'poi 4.426,52 dollari, decennale al 4,70%, trentennale al 5,29%, Dollar Index a 99,42, Brent a 88,85. ' +
    'Media sulla lettura, e la ragione è che la prova superata è tecnica e non causale: dice che l’oro ' +
    'sale contro un rendimento alternativo che sale, non perché. Bassa sui due elementi che il testo ' +
    'aggiunge in coda — la domanda istituzionale in ripresa è dichiarata dagli analisti come inferenza e ' +
    'non come dato, e i colloqui con le raffinerie sono un’iniziativa annunciata e non un aumento di ' +
    'produzione osservato — che infatti restano fuori dall’argomento portante.',
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'media',
    horizon: 'breve',
    regime:
      'La direzione sale a rialzista per una ragione sola, ed è la disciplina di questo archivio invece ' +
      'della notizia del giorno. L’11 agosto era stata scritta la prova da chiedere al metallo — un oro ' +
      'sopra i 4.400 dollari con il decennale ancora sopra il 4,70%, cioè un rialzo contro il rendimento ' +
      'alternativo e non grazie al suo calo — e quel giorno mancò per quattordici dollari; il 12 agosto ' +
      'la condizione divenne ineseguibile perché il decennale scivolò sotto la soglia mentre l’oro era ' +
      'ancora in viaggio. Oggi le due gambe sono presenti nello stesso momento: 4.426,52 dollari con il ' +
      'decennale tornato al 4,70% e il trentennale al 5,29%. La forza resta media perché la ' +
      'configurazione che la sostiene è la più fragile fra quelle possibili: il dollaro sui minimi da ' +
      'giugno regge da solo un metallo che sta pagando un costo-opportunità ai massimi da quasi vent’anni.',
  },
  takeaways: [
    'XAU/USD passa da circa 4.409,94 dollari con più 0,78% a circa 4.426,52 con più 1,2%, con i futures americani di dicembre a 4.484,10: la fascia 4.435-4.450 indicata come resistenza successiva è ormai a ridosso.',
    'Il decennale è tornato al 4,70% e il trentennale sta al 5,29%. Insieme al prezzo dell’oro completano la condizione dichiarata l’11 agosto e mai verificatasi finora: salire sopra i 4.400 mentre il rendimento alternativo sale, non mentre scende.',
    'Reuters attribuisce la tensione sulla parte lunga a prospettive fiscali in peggioramento, offerta di debito elevata e forte emissione di obbligazioni societarie legata agli investimenti in intelligenza artificiale — non a un nuovo irrigidimento atteso dalla banca centrale.',
    'Il Dollar Index scende a 99,42, minimo da giugno, e la probabilità di un rialzo a settembre resta fra il 31% e il 33% contro circa il 55% di una settimana fa: è il canale che oggi sta pagando il conto del costo-opportunità.',
    'Sul greggio nessuna fiammata: Brent fra 88,6 e 88,85 dollari e WTI fra 82,2 e 82,50, ancora sotto i 90. Il rischio su Hormuz sostiene il rifugio senza passare per l’inflazione.',
  ],
  sources: [
    {
      outlet: 'Reuters',
      title:
        'Rilevazioni su XAU/USD a 4.409,94 e 4.426,52 dollari, futures di dicembre a 4.484,10, Dollar Index a 99,42, decennale al 4,70% e trentennale al 5,29%',
      at: '17 agosto 2026',
    },
    {
      outlet: 'Reuters',
      title:
        'Il rialzo della parte lunga attribuito a prospettive fiscali, offerta di debito ed emissioni societarie legate agli investimenti in intelligenza artificiale',
      at: '17 agosto 2026',
    },
    {
      outlet: 'Reuters',
      title:
        'Analisi sul rialzo di circa il 9% in agosto e sui primi segnali di ritorno della domanda istituzionale e ufficiale; media mobile a 200 giorni intorno a 4.504 dollari',
      at: '17 agosto 2026',
    },
    {
      outlet: 'Reuters',
      title:
        'Chris Wright, segretario all’Energia: colloqui con le raffinerie americane per aumentare la produzione di carburanti, con la benzina sopra 4,06 dollari per gallone',
      at: '17 agosto 2026',
    },
    {
      outlet: 'U.S. Census Bureau',
      title:
        'Prossima diffusione sull’edilizia: Housing Starts e Building Permits di luglio, 18 agosto',
    },
    {
      outlet: 'Federal Reserve',
      title:
        'Riunione chiusa del Board sulla revisione dei tassi di sconto delle Reserve Banks; al momento del controllo nessun comunicato finale pubblicato',
    },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Il fatto della serata non è il livello del trentennale, ed è la prima cosa da dire perché è quella ' +
        'in cui è più facile sbagliarsi. Il 5,29% viene presentato come la novità, ma questo archivio ha ' +
        'registrato il trentennale a 5,28% il 10 agosto e di nuovo l’11, con la stessa formula — il livello ' +
        'più alto da quasi vent’anni — usata in quattro analisi diverse. Un punto base sopra un livello già ' +
        'visto non è una novità. La novità è dall’altra parte del confronto: l’oro è a 4.426,52 dollari, e ' +
        'per la prima volta ci arriva mentre il rendimento alternativo sta in alto invece che mentre scende.',
    },
    {
      kind: 'heading',
      text: 'La condizione scritta l’11 agosto, e perché conta',
      anchor: 'la-condizione',
    },
    {
      kind: 'paragraph',
      text:
        'L’11 agosto alle 10:45 questo archivio ha scritto la prova da chiedere al metallo, e l’ha scritta ' +
        'in una forma composta di proposito: un oro che recupera i 4.400 dollari con il decennale ancora ' +
        'sopra il 4,70%. La seconda gamba non era un dettaglio, era tutto il senso della prova. Salire ' +
        'mentre i rendimenti scendono non dice niente sul metallo, perché scende il costo di tenerlo; ' +
        'salire mentre i rendimenti restano alti dice che qualcuno lo sta comprando pagando quel costo. ' +
        'Quel giorno la prova mancò per quattordici dollari, e il metallo si fermò a 4.386,13.',
    },
    {
      kind: 'paragraph',
      text:
        'Il giorno dopo la condizione fece di peggio che fallire: divenne ineseguibile. Il decennale ' +
        'rientrò sotto il 4,70% mentre l’oro era ancora in viaggio, quindi anche prendendo i 4.400 il ' +
        'metallo non lo avrebbe più fatto contro rendimenti alti. Fu registrato allora che una condizione ' +
        'inapplicabile è peggio di una falsa, perché non dice niente e sembra dire qualcosa. Oggi quella ' +
        'condizione torna eseguibile e si verifica: 4.426,52 dollari con il decennale al 4,70%. Sei giorni ' +
        'dopo, e dopo che i 4.400 erano stati mancati o attraversati senza tenuta in ognuna delle occasioni ' +
        'precedenti.',
    },
    {
      kind: 'stats',
      title: 'Lunedì 17 agosto, seconda serata',
      caption:
        'Rilevazioni di una sessione in corso e non chiusure, tutte attribuite alla stessa agenzia. I due valori sull’oro sono due momenti successivi dello stesso pomeriggio.',
      items: [
        {
          label: 'XAU/USD',
          value: '4.409,94 → 4.426,52 $',
          tone: 'bull',
          note: 'Da più 0,78% a più 1,2% nel giro del pomeriggio, con i futures di dicembre a 4.484,10: la fascia 4.435-4.450 è a ridosso',
        },
        {
          label: 'Treasury 10 anni',
          value: '≈ 4,70%',
          tone: 'bear',
          note: 'È la seconda gamba della condizione dell’11 agosto, e questa volta c’è: l’oro sale mentre il rendimento alternativo sta in alto',
        },
        {
          label: 'Treasury 30 anni',
          value: '5,29%',
          tone: 'bear',
          note: 'Un punto base sopra il 5,28% già registrato il 10 e l’11 agosto: non è un livello nuovo, è lo stesso livello che dura',
        },
        {
          label: 'Dollar Index',
          value: '99,42',
          tone: 'bull',
          note: 'Minimo da giugno. È il canale che oggi paga il conto del costo-opportunità al posto dei rendimenti',
        },
        {
          label: 'Rialzo Fed a settembre',
          value: '31-33%',
          tone: 'bull',
          note: 'Contro circa il 55% di una settimana fa. Il numero non si è mosso oggi nonostante due diffusioni sopra le attese',
        },
        {
          label: 'Brent e WTI',
          value: '≈ 88,85 $ e 82,50 $',
          tone: 'bull',
          note: 'Ancora sotto i 90 dollari: il rischio su Hormuz sostiene il rifugio senza passare per il canale dell’inflazione',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Perché la direzione sale adesso e non stamattina',
      text:
        'Stamattina i 4.400 sono stati attraversati due volte e non tenuti, e la direzione non è stata ' +
        'alzata: fu scritto che alzarla su una rilevazione a quindici centesimi sopra un numero tondo ' +
        'avrebbe significato usare la soglia quando conviene. La stessa disciplina obbliga adesso al ' +
        'contrario. La prova dichiarata sei giorni fa è soddisfatta su entrambe le gambe e con ventisei ' +
        'dollari di margine invece di quindici centesimi, e l’archivio aveva messo per iscritto che se ' +
        'quella condizione fosse scattata avrebbe voluto dire che la direzione andava alzata. Rifiutarsi ' +
        'ora sarebbe lo stesso errore di stamattina, guardato dall’altra parte.',
    },
    {
      kind: 'heading',
      text: 'Che cosa sta alzando la parte lunga',
      anchor: 'la-parte-lunga',
    },
    {
      kind: 'paragraph',
      text:
        'La spiegazione riportata aggiunge una gamba che in questo archivio non c’era. Alle prospettive ' +
        'fiscali in peggioramento e all’offerta di debito — le due che qui sono state seguite per una ' +
        'settimana, dal rendiconto del Tesoro al collocamento del trentennale al 5,216% — si aggiunge la ' +
        'forte emissione di obbligazioni societarie legata agli investimenti in intelligenza artificiale. ' +
        'Conta perché cambia la natura della pressione: le prime due sono offerta pubblica e si affrontano ' +
        'con decisioni di bilancio, la terza è domanda privata di capitale e non risponde a nessuna ' +
        'decisione politica. Un premio a termine alimentato anche da lì è più difficile da far rientrare.',
    },
    {
      kind: 'paragraph',
      text:
        'La parte che serve alla lettura è però negativa, e va detta senza attenuarla: quale che sia la ' +
        'causa, il costo-opportunità di tenere un metallo senza cedole resta ai massimi da quasi ' +
        'vent’anni. L’oro lo sta pagando perché il dollaro glielo sta rimborsando — 99,42, minimo da ' +
        'giugno — e perché la scadenza che prezza la banca centrale non ha seguito la parte lunga. Sono ' +
        'due sostegni, non tre, e il secondo è già stato messo alla prova oggi da due diffusioni sopra le ' +
        'attese senza cedere. È una configurazione che regge finché regge il cambio.',
    },
    {
      kind: 'balance',
      title: 'Le due gambe della lettura',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'La prova dichiarata l’11 agosto è soddisfatta su entrambe le gambe per la prima volta: 4.426,52 dollari con il decennale al 4,70%, cioè un rialzo contro il rendimento alternativo invece che grazie al suo calo.',
          'Il margine è di ventisei dollari sopra i 4.400 e non di una manciata di centesimi: è la differenza fra un livello attraversato e un livello tenuto, dopo due tentativi falliti nella stessa giornata.',
          'Il dollaro è sui minimi da giugno a 99,42 e la probabilità di un rialzo a settembre resta fra il 31% e il 33% contro circa il 55% di una settimana fa, senza muoversi nemmeno davanti a due diffusioni sopra le attese.',
          'Il greggio resta sotto i 90 dollari, quindi il premio geopolitico continua a sostenere il rifugio senza il contrappeso delle attese di inflazione.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Il costo-opportunità è ai massimi da quasi vent’anni e non sta scendendo: il trentennale al 5,29% è un punto base sopra un livello già visto il 10 agosto, cioè un massimo che dura invece di rientrare.',
          'La gamba nuova della spiegazione è la meno governabile: un premio a termine alimentato anche dalle emissioni societarie per gli investimenti in intelligenza artificiale non risponde a decisioni di bilancio.',
          'I sostegni sono due e non tre, e uno solo è di prezzo: se il dollaro recuperasse verso quota 100 mentre il decennale sale oltre il 4,75%, la stessa configurazione che oggi tiene si rovescerebbe in fretta.',
          'I due elementi aggiunti in coda non reggono peso: la domanda istituzionale in ripresa è un’inferenza dichiarata degli analisti, e i colloqui con le raffinerie sono un’iniziativa annunciata e non un aumento di produzione osservato.',
        ],
      },
    },
    {
      kind: 'note',
      text:
        'Due cose di oggi non entrano in questa lettura e vanno classificate per non essere contate due ' +
        'volte. La riunione chiusa del Board della Federal Reserve riguarda la revisione dei tassi di ' +
        'sconto delle Reserve Banks ed è procedura regolare, e al momento del controllo non risulta ' +
        'pubblicato alcun comunicato finale: nessuna decisione di politica monetaria è quindi uscita. E ' +
        'non sono uscite nuove diffusioni macroeconomiche dopo l’indagine manifatturiera di New York e ' +
        'l’indice dei costruttori; la prossima sull’edilizia è domani, 18 agosto, con avvii di ' +
        'costruzione e permessi di luglio. I livelli di prezzo citati servono a rendere verificabile il ' +
        'ragionamento e non sono obiettivi affidabili.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text:
        'La direzione sale a rialzista, la forza resta media, e le due cose insieme dicono esattamente ' +
        'quello che si vede. Sale perché una prova scritta in anticipo, in una forma che poteva fallire e ' +
        'che è già fallita due volte, si è verificata su entrambe le gambe; e un registro che dichiara le ' +
        'condizioni e poi non le onora quando scattano smette di misurare qualcosa dopo la prima volta. ' +
        'Non sale oltre perché la prova è tecnica: dice che il metallo assorbe un costo-opportunità alto, ' +
        'non spiega chi lo stia comprando. La spiegazione candidata — un ritorno della domanda ' +
        'istituzionale e ufficiale — è oggi un’inferenza di analisti, e questo archivio ha una regola su ' +
        'quanto valgono le inferenze finché non arriva un numero.',
    },
    {
      kind: 'paragraph',
      text:
        'La cosa da guardare da qui non è l’oro ma il cambio, ed è il rovesciamento più utile di questa ' +
        'lettura. Per due settimane la domanda è stata se il canale dei tassi avrebbe schiacciato il ' +
        'metallo; oggi il canale dei tassi è ostile quanto può esserlo e il metallo sale lo stesso, quindi ' +
        'la variabile che decide si è spostata. Finché il Dollar Index resta sui minimi da giugno la ' +
        'configurazione tiene; il giorno in cui recupera, l’oro si troverà a pagare un costo-opportunità ' +
        'ai massimi da vent’anni senza più il rimborso che oggi lo compensa. La fascia 4.435-4.450 e poi ' +
        'la media mobile a duecento giorni intorno a 4.504 dollari sono i due riferimenti tecnici ' +
        'successivi, ma non sono la cosa che decide.',
    },
  ],
  invalidation: [
    'Un oro che chiude mercoledì 19 agosto sotto i 4.409,94 dollari della prima rilevazione di questo controllo: direbbe che il superamento è stato una punta come le due di stamattina e non una tenuta, e la direzione andrebbe riportata a neutrale con inclinazione rialzista.',
    'Un decennale che si porta sopra il 4,75% entro venerdì 21 agosto: è il livello oltre il quale il costo-opportunità smette di essere assorbibile con il solo sostegno del cambio, e la forza andrebbe riportata a bassa.',
    'Un trentennale che scende sotto il 5,213% della chiusura del 13 agosto entro venerdì 21 agosto: toglierebbe il fatto stesso su cui la forza relativa è misurata, perché l’oro non starebbe più assorbendo alcun costo-opportunità eccezionale, e questa lettura perderebbe il suo argomento invece di essere smentita.',
    'Un dato pubblicato sugli acquisti ufficiali di oro di agosto in calo rispetto alle 640.000 once di luglio, in uscita all’inizio di settembre: smentirebbe l’inferenza degli analisti sul ritorno della domanda istituzionale, che è la sola spiegazione candidata oggi disponibile per chi stia comprando a questi livelli.',
    'Una rilevazione settimanale dell’agenzia statunitense per l’energia che mostri lavorazioni delle raffinerie in calo entro fine agosto: direbbe che i colloqui annunciati dal segretario all’Energia non hanno prodotto offerta, e la gamba che alleggerisce il canale dell’inflazione andrebbe tolta dal conto.',
  ],
  nextEvent: {
    when: 'Mercoledì 19 agosto',
    title: 'Verbali della riunione del FOMC del 28-29 luglio',
    detail:
      'È l’appuntamento che mette alla prova il solo sostegno di prezzo rimasto a questa lettura. La ' +
      'configurazione di oggi poggia sul fatto che la scadenza che prezza la banca centrale non ha ' +
      'seguito la parte lunga, e il dollaro sui minimi da giugno è la conseguenza di quella separazione. ' +
      'Un tono più restrittivo del previsto la chiuderebbe: riporterebbe su la probabilità di un rialzo a ' +
      'settembre, oggi fra il 31% e il 33%, e con essa il cambio — lasciando l’oro a pagare un ' +
      'costo-opportunità ai massimi da quasi vent’anni senza il rimborso che oggi lo compensa. Prima, ' +
      'domani 18 agosto, escono avvii di costruzione e permessi edilizi di luglio.',
  },
};
