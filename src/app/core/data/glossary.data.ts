import { GlossaryEntry } from '../models/article.model';

/**
 * Glossario divulgativo. Le definizioni hanno finalità didattiche e semplificano
 * volutamente concetti complessi: non sostituiscono fonti normative, manuali
 * accademici o il parere di un professionista abilitato.
 */
export const GLOSSARY: readonly GlossaryEntry[] = [
  {
    term: 'XAU/USD',
    letter: 'X',
    definition:
      'Prezzo di un’oncia troy d’oro espresso in dollari statunitensi sul mercato a pronti.',
    why: 'È il riferimento centrale del sito: risente insieme di politica monetaria, dollaro, rendimenti reali e rischio geopolitico.',
    related: ['Rendimento reale', 'DXY'],
  },
  {
    term: 'FOMC',
    letter: 'F',
    definition:
      'Federal Open Market Committee, l’organo della Federal Reserve che decide l’orientamento della politica monetaria statunitense.',
    why: 'Le sue decisioni e il grado di consenso interno incidono direttamente sulle aspettative di tasso e quindi sull’oro.',
    related: ['Dissenso', 'Fed funds'],
  },
  {
    term: 'Fed funds',
    letter: 'F',
    definition:
      'Intervallo obiettivo del tasso a cui le banche si prestano riserve overnight; è lo strumento principale di politica monetaria della Fed.',
    why: 'Definisce il costo del denaro di riferimento e orienta l’intera struttura dei rendimenti.',
  },
  {
    term: 'Fed di New York',
    letter: 'F',
    definition:
      'Una delle dodici Banche federali di riserva. Il suo presidente siede stabilmente nel FOMC ed è la sede che esegue le operazioni di mercato aperto decise dal comitato.',
    why: 'Rende le sue dichiarazioni più rappresentative dell’orientamento del comitato rispetto a quelle di un presidente regionale che vota a rotazione.',
    related: ['FOMC', 'Fed funds'],
  },
  {
    term: 'Dissenso',
    letter: 'D',
    definition:
      'Voto contrario di uno o più membri del comitato rispetto alla decisione approvata; viene reso pubblico insieme all’esito.',
    why: 'Un numero elevato di dissensi segnala una divisione interna e rende meno prevedibili le decisioni successive.',
  },
  {
    term: 'JOLTS',
    letter: 'J',
    definition:
      'Rilevazione mensile statunitense su posti di lavoro vacanti, assunzioni e dimissioni, pubblicata dal Bureau of Labor Statistics.',
    why: 'Misura la domanda di lavoro prima che si veda nelle buste paga: un numero forte alimenta l’attesa di tassi più alti e pesa sull’oro attraverso i rendimenti.',
    related: ['Fed funds', 'Treasury'],
  },
  {
    term: 'PCE',
    letter: 'P',
    definition:
      'Personal Consumption Expenditures price index, l’indice dei prezzi legato alla spesa per consumi delle famiglie statunitensi.',
    why: 'È l’indicatore di inflazione preferito dalla Federal Reserve, quindi ha un peso elevato nelle aspettative di tasso.',
    related: ['PCE core'],
  },
  {
    term: 'PCE core',
    letter: 'P',
    definition:
      'Versione del PCE che esclude le componenti alimentari ed energetiche, più volatili.',
    why: 'Viene considerata una misura più stabile della tendenza di fondo dei prezzi.',
  },
  {
    term: 'DXY',
    letter: 'D',
    definition:
      'Indice che misura il valore del dollaro statunitense rispetto a un paniere di valute principali.',
    why: 'Un dollaro più forte tende a rendere l’oro più costoso per chi detiene altre valute, con effetto in genere sfavorevole.',
  },
  {
    term: 'Rendimento reale',
    letter: 'R',
    definition: 'Rendimento nominale di un titolo al netto dell’inflazione attesa.',
    why: 'È spesso considerato il costo opportunità di detenere oro, che non produce cedole né dividendi.',
    related: ['Treasury', 'XAU/USD'],
  },
  {
    term: 'Costo-opportunità',
    letter: 'C',
    definition:
      'Il rendimento a cui si rinuncia scegliendo un impiego invece di un altro. Per l’oro è quanto avrebbe reso la stessa somma investita in titoli di Stato.',
    why: 'L’oro non paga cedola: quando i rendimenti salgono, tenerlo costa di più in termini relativi. È il motivo per cui i tassi in rialzo lo frenano anche mentre il rischio geopolitico cresce.',
    related: ['Rendimento reale', 'Treasury'],
  },
  {
    term: 'Treasury',
    letter: 'T',
    definition:
      'Titoli di Stato emessi dal Tesoro statunitense, distinti per scadenza (2, 10, 30 anni e altre).',
    why: 'Il loro rendimento è il termine di paragone per gran parte delle attività finanziarie globali.',
  },
  {
    term: 'Curva dei rendimenti',
    letter: 'C',
    definition:
      'Rappresentazione dei rendimenti dei titoli di Stato in funzione della loro scadenza.',
    why: 'Movimenti diversi fra parte breve e parte lunga segnalano aspettative differenti su politica monetaria, inflazione e rischio fiscale.',
  },
  {
    term: 'Punto base',
    letter: 'P',
    definition: 'Centesimo di punto percentuale: cento punti base fanno l’1%.',
    why: 'È l’unità con cui si misurano i movimenti dei rendimenti e le decisioni sui tassi. Un calo di 5-6 punti base sul decennale è uno spostamento piccolo, ma abbastanza leggibile da contare per l’oro.',
    related: ['Treasury', 'Curva dei rendimenti'],
  },
  {
    term: 'Premio per il rischio fiscale',
    letter: 'P',
    definition:
      'Rendimento aggiuntivo richiesto dagli investitori per detenere debito pubblico percepito come più rischioso sul piano dei conti pubblici.',
    why: 'Può mantenere elevati i rendimenti a lunga scadenza anche quando le aspettative sui tassi a breve scendono.',
  },
  {
    term: 'Effetto base',
    letter: 'E',
    definition:
      'Il fatto che l’inflazione annua confronti il prezzo di oggi con quello di dodici mesi fa. Quando il mese di confronto era già alto, lo stesso prezzo produce una variazione più bassa: il contributo si esaurisce da solo, senza che il prezzo scenda.',
    why: 'È la ragione per cui uno shock energetico che si stabilizza in alto smette di alimentare l’inflazione misurata entro un anno, mentre continua a pesare sui costi. Per l’oro la distinzione è decisiva: un prezzo del greggio che sale spinge i rendimenti contro il metallo, un prezzo che resta fermo su un livello alto smette di farlo anche se il livello resta scomodo.',
    related: ['Aspettative di inflazione', 'Brent', 'Rendimento reale'],
  },
  {
    term: 'Premio a termine',
    letter: 'P',
    definition:
      'La parte di un rendimento a lunga scadenza che non si spiega con i tassi a breve attesi nel frattempo: è il compenso richiesto per impegnare denaro per vent’anni invece di rinnovare un titolo breve, e comprende l’inflazione media attesa lungo tutto quel periodo.',
    why: 'È il modo per capire che cosa sta salendo davvero quando salgono i rendimenti lunghi. Se sale anche la scadenza a due anni, il mercato sta prezzando una banca centrale più restrittiva; se la scadenza corta sta ferma e si muove solo quella lunga, sta prezzando inflazione. Per l’oro la differenza è decisiva, perché il metallo è penalizzato dal rendimento reale e non da quello nominale: un premio a termine che cresce perché cresce l’inflazione attesa non gli toglie niente.',
    related: ['Curva dei rendimenti', 'Rendimento reale', 'Aspettative di inflazione'],
  },
  {
    term: 'Rifinanziamento trimestrale',
    letter: 'R',
    definition:
      'Annuncio con cui il Tesoro statunitense dice non quanto si indebiterà, ma con quali titoli: dimensione di ogni asta e ripartizione fra le scadenze.',
    why: 'È la parte che i rendimenti guardano davvero. Lo stesso fabbisogno pesa in modo molto diverso sulla parte lunga della curva a seconda che venga coperto con titoli a tre mesi o a trent’anni, e solo il secondo caso alza il rendimento alternativo che l’oro deve battere.',
    related: ['Treasury', 'Curva dei rendimenti', 'Premio per il rischio fiscale'],
  },
  {
    term: 'Premio di rischio geopolitico',
    letter: 'P',
    definition:
      'Parte del prezzo che riflette la possibilità di un evento politico o militare, non un fatto già avvenuto.',
    why: 'Si forma su notizie ancora da confermare e si riassorbe in fretta se l’evento non si realizza: è la ragione per cui un rialzo su indiscrezioni vale meno di un rialzo su un fatto.',
    related: ['Bene rifugio', 'Stretto di Hormuz'],
  },
  {
    term: 'Aspettative di inflazione',
    letter: 'A',
    definition:
      'Quanta inflazione famiglie e mercati dichiarano di attendersi fra uno, tre o cinque anni. Si misurano con indagini — la principale è la Survey of Consumer Expectations della Federal Reserve di New York — e non vanno confuse con l’inflazione già avvenuta, che è un altro numero e racconta un’altra cosa.',
    why: 'Una banca centrale non combatte l’inflazione passata ma quella attesa: se il pubblico smette di credere all’obiettivo, i prezzi e i salari si adeguano a quella convinzione e l’obiettivo diventa più caro da raggiungere. Per l’oro contano soprattutto gli orizzonti lunghi, e tagliano in due direzioni: aspettative alte sostengono la domanda di copertura e insieme tengono in vita il caso per tassi alti, che è il costo di tenere un metallo che non paga cedole.',
    related: ['Costo-opportunità', 'Rendimento reale', 'Invalidazione'],
  },
  {
    term: 'Vincolo materiale',
    letter: 'V',
    definition:
      'Un fatto misurabile che limita quello che i decisori possono fare, a prescindere da quello che dichiarano di voler fare: un conteggio di navi, un livello di prezzo, un fabbisogno di finanziamento.',
    why: 'Le preferenze sono opzionali e si piegano ai vincoli, i vincoli no. È la ragione per cui qui la riapertura di uno stretto si misura sui transiti e non sugli annunci — e per cui, quando un vincolo si scioglie, va detto con la stessa nettezza con cui lo si era usato mentre reggeva.',
    related: ['Premio di rischio geopolitico', 'Stretto di Hormuz', 'Invalidazione'],
  },
  {
    term: 'Evento discreto',
    letter: 'E',
    definition:
      'Uno shock geopolitico improvviso e non programmato — un attacco, un’uccisione mirata, la chiusura di uno stretto — da tenere distinto sia dal ciclo dei dodici-diciotto mesi, fatto di elezioni e scadenze, sia dalle tendenze strutturali che si misurano in anni.',
    why: 'Le tre categorie si prezzano su orizzonti diversi, e scambiarle è l’errore più costoso nella lettura di una notizia. Un evento discreto si prezza in ore e va giudicato contro i vincoli materiali che impediscono all’escalation di andare oltre; una tendenza strutturale non lascia traccia sul primo scambio del giorno dopo. Un titolo di apertura fa sembrare la seconda la prima, ed è così che si costruisce un premio di rischio su qualcosa che il mercato ha già davanti da mesi.',
    related: ['Vincolo materiale', 'Premio di rischio geopolitico', 'Regime di mercato'],
  },
  {
    term: 'Desensibilizzazione',
    letter: 'D',
    definition:
      'La tendenza di un mercato a reagire sempre meno alla ripetizione della stessa notizia. La prima minaccia sposta il prezzo, la quinta quasi no: la reazione a un evento non ha un prezzo costante nel tempo, e il costo di continuare a comportarsi come se fosse la prima volta cresce fino a diventare insostenibile.',
    why: 'Serve a non leggere un mancato movimento come indifferenza o come errore del mercato: spesso è solo il quinto annuncio dello stesso tenore. Vale nei due sensi, ed è la parte che si dimentica — un mercato desensibilizzato smette di pagare per l’escalation annunciata ma anche per la distensione annunciata, e continua a prezzare soltanto le cose materiali. Il rovescio è che una desensibilizzazione spinta lascia scoperti se la minaccia si realizza davvero.',
    related: ['Premio di rischio geopolitico', 'Vincolo materiale', 'Evento discreto'],
  },
  {
    term: 'Gioco a due livelli',
    letter: 'G',
    definition:
      'Un negoziato internazionale si svolge su due tavoli insieme: quello con la controparte estera e quello interno, dove servono i voti per ratificare quello che si è concordato.',
    why: 'Spiega perché le posizioni massimaliste esibite durante una trattativa dicono poco su come finirà: servono spesso ad allargare il margine di manovra in patria, non a chiudere la porta all’estero. Per chi guarda i prezzi è un antidoto: un documento intransigente muove il greggio subito, ma non è una misura di quanto sia lontano l’accordo.',
    related: ['Vincolo materiale', 'Stretto di Hormuz', 'Premio di rischio geopolitico'],
  },
  {
    term: 'Copertura contro il rischio di guerra',
    letter: 'C',
    definition:
      'Assicurazione che copre una nave e il suo carico per danni da conflitti, mine, attacchi e sequestri. Nelle aree a rischio è la condizione senza la quale un armatore non manda una nave, e le sue clausole vengono riscritte in fretta quando cambia la situazione.',
    why: 'È il punto in cui la geopolitica diventa un vincolo materiale sul traffico e quindi sul prezzo del greggio. Una clausola che toglie la copertura a chi paga un pedaggio può bloccare una rotta più efficacemente di una dichiarazione politica, e nessun comunicato governativo la rimuove.',
    related: ['Stretto di Hormuz', 'Vincolo materiale', 'Premio di rischio geopolitico'],
  },
  {
    term: 'Prezzo minimo all’importazione',
    letter: 'P',
    definition:
      'Soglia sotto la quale una merce non può entrare in un Paese, fissata da un atto amministrativo. È cosa diversa da un dazio: il dazio è una percentuale che segue il prezzo di mercato anche quando scende, il prezzo minimo è un pavimento che non si muove.',
    why: 'Produce un rincaro che non nasce dalla domanda e non passa dai salari, quindi la crescita della produttività non lo assorbe. Per l’oro conta perché mette la banca centrale davanti a una scelta — guardare oltre lo shock di offerta o combatterlo — e nei due casi i rendimenti reali vanno in direzioni opposte.',
    related: ['Vincolo materiale', 'Rendimento reale', 'Costo-opportunità'],
  },
  {
    term: 'Brent',
    letter: 'B',
    definition:
      'Qualità di greggio del Mare del Nord usata come riferimento per gran parte dei mercati petroliferi.',
    why: 'Il suo prezzo influisce sulle aspettative di inflazione e, indirettamente, sulle scelte delle banche centrali.',
  },
  {
    term: 'WTI',
    letter: 'W',
    definition: 'West Texas Intermediate, il greggio di riferimento del mercato statunitense.',
    why: 'Confrontato con il Brent, aiuta a distinguere tensioni globali da dinamiche interne agli Stati Uniti.',
  },
  {
    term: 'Intervento valutario coordinato',
    letter: 'I',
    definition:
      'Operazione con cui due o più autorità monetarie comprano e vendono valuta nello stesso momento, per spostare un cambio ritenuto disallineato.',
    why: 'Vale più della somma degli importi, perché segnala che le parti sono d’accordo: il mercato reagisce anche prima di conoscere i numeri ufficiali.',
    related: ['DXY'],
  },
  {
    term: 'Linea di liquidità in dollari',
    letter: 'L',
    definition:
      'Strumento con cui la Federal Reserve fornisce dollari a un’altra banca centrale in cambio della sua valuta, per un periodo definito.',
    why: 'Permette a chi interviene sul cambio di procurarsi dollari senza vendere titoli del Tesoro statunitense, e quindi senza spingere al rialzo i rendimenti.',
    related: ['Treasury'],
  },
  {
    term: 'Facility FIMA',
    letter: 'F',
    definition:
      'Strumento della Federal Reserve che consente alle autorità monetarie estere di ottenere dollari a fronte dei titoli del Tesoro statunitense che già detengono, invece di venderli sul mercato.',
    why: 'È la variante su scala più ampia dello stesso principio della linea di liquidità: senza vendite forzate di Treasury viene meno la spinta al rialzo dei rendimenti, che resta il freno principale per l’oro.',
    related: ['Linea di liquidità in dollari', 'Treasury'],
  },
  {
    term: 'OPEC+',
    letter: 'O',
    definition:
      'Gruppo formato dai paesi dell’Organizzazione dei paesi esportatori di petrolio e da altri produttori, fra cui la Russia, che concordano quote di produzione comuni.',
    why: 'Le quote fissano l’offerta consentita, non quella effettiva: guerre e interruzioni possono far crescere la produzione reale molto meno di quanto la decisione lasci prevedere.',
    related: ['Brent', 'WTI'],
  },
  {
    term: 'Stretto di Hormuz',
    letter: 'S',
    definition:
      'Passaggio marittimo tra il Golfo Persico e il Golfo dell’Oman, tra i più rilevanti per il transito di greggio.',
    why: 'Un’interruzione dei transiti trasformerebbe un premio al rischio reversibile in uno shock di offerta.',
  },
  {
    term: 'Scorte commerciali di greggio',
    letter: 'S',
    definition:
      'Il petrolio conservato nei depositi commerciali di un Paese, escluse le riserve strategiche di Stato. Negli Stati Uniti la variazione settimanale è pubblicata ogni mercoledì dall’agenzia federale per l’energia.',
    why: 'È uno stock, non un flusso: misura quanto greggio è rimasto fermo, non quanto ne è passato da qualche parte. Per questo funziona da controprova su un racconto di scarsità costruito su conteggi di transiti o su previsioni di offerta — un vincolo che stringe davvero prima o poi si vede nei serbatoi. La variazione da sola però non dice la causa, che può essere più importazioni, meno lavorazioni, meno esportazioni o un rilascio di riserve.',
    related: ['Brent', 'Stretto di Hormuz', 'Premio di rischio geopolitico'],
  },
  {
    term: 'Bab el-Mandeb',
    letter: 'B',
    definition:
      'Stretto che collega il Mar Rosso al Golfo di Aden, snodo delle rotte tra Asia ed Europa.',
    why: 'È un secondo collo di bottiglia sorvegliato quando aumenta la tensione nell’area.',
  },
  {
    term: 'Bene rifugio',
    letter: 'B',
    definition:
      'Attività verso cui gli investitori tendono a spostarsi in fasi di incertezza o stress dei mercati.',
    why: 'L’oro è storicamente considerato tale, ma il comportamento non è né automatico né garantito.',
  },
  {
    term: 'Acquisti delle banche centrali',
    letter: 'A',
    definition:
      'Oro comprato dalle autorità monetarie per le proprie riserve ufficiali, misurato in tonnellate e rilevato a cadenza trimestrale da stime che vengono spesso riviste.',
    why: 'È una domanda che non dipende dal prezzo di breve periodo: sostiene il mercato nel medio termine ma non muove la singola seduta, e le revisioni possono cambiare il quadro a posteriori.',
    related: ['Bene rifugio'],
  },
  {
    term: 'Divergenza',
    letter: 'D',
    definition:
      'Situazione in cui due grandezze storicamente correlate si muovono in modo incoerente rispetto alla relazione attesa.',
    why: 'Può segnalare il prevalere di una forza diversa da quella dominante, ma può anche rivelarsi temporanea.',
  },
  {
    term: 'Regime di mercato',
    letter: 'R',
    definition:
      'Insieme di condizioni prevalenti — monetarie, di rischio, di liquidità — che determinano quali relazioni fra mercati risultano dominanti.',
    why: 'Riconoscere il regime aiuta a interpretare i dati, ma un regime può cambiare rapidamente e senza preavviso.',
  },
  {
    term: 'Invalidazione',
    letter: 'I',
    definition:
      'Insieme delle condizioni che, se si verificassero, renderebbero non più sostenibile una lettura proposta.',
    why: 'Esplicitarla è un esercizio di onestà intellettuale: rende verificabile ciò che si è scritto.',
  },
  {
    term: 'Volatilità',
    letter: 'V',
    definition:
      'Misura dell’ampiezza e della rapidità delle oscillazioni di prezzo in un dato periodo.',
    why: 'Una volatilità elevata amplifica sia i guadagni sia le perdite e rende meno affidabile qualsiasi lettura direzionale.',
  },
  {
    term: 'Difesa collettiva',
    letter: 'D',
    definition:
      'Clausola di un patto di sicurezza per cui un attacco armato contro uno dei firmatari è considerato un attacco contro tutti. La formula più nota è l’Articolo 5 del trattato atlantico, che però impegna ciascuna parte ad agire con i mezzi che essa stessa ritiene necessari: vincola politicamente senza stabilire un automatismo militare.',
    why: 'Per l’oro conta la distanza fra la solennità della formula e l’esistenza di una procedura. Una clausola senza comando integrato, esercitazioni e forze stazionate alza il premio di rischio percepito molto meno di quanto suggerisca il suo testo, e una deterrenza che funzionasse davvero lo ridurrebbe invece di alzarlo.',
    related: ['Premio di rischio', 'Invalidazione'],
  },
  {
    term: 'Rischio di gap',
    letter: 'R',
    definition:
      'Il salto di prezzo fra la chiusura di una seduta e l’apertura della successiva, quando nell’intervallo non è avvenuta alcuna contrattazione che possa attivare gli ordini di protezione. Si concentra sul fine settimana, perché fra il venerdì sera e la riapertura non esiste una rilevazione con liquidità dietro e le notizie si accumulano senza che nessuno le arbitri.',
    why: 'Per chi legge un’analisi scritta a mercati chiusi cambia la domanda da porsi. Un fatto nuovo emerso di sabato non ha ancora un prezzo, quindi allarga l’ampiezza attesa del primo movimento senza dire nulla sul suo verso: un rischio più alto non è una previsione più forte. La conseguenza pratica è che un vuoto di contrattazione non si attraversa — un ordine collocato venerdì viene eseguito al primo prezzo disponibile, che può essere molto più lontano di quanto pianificato — e che la risposta sensata è stimare l’ampiezza attesa del salto invece di indovinarne la direzione.',
    related: ['Volatilità', 'Regime di mercato', 'Invalidazione'],
  },
  {
    term: 'Sostituzione dell’offerta',
    letter: 'S',
    definition:
      'La possibilità, per chi compra una materia prima, di procurarsi lo stesso volume da un altro fornitore quando la fonte abituale si interrompe. Un’interruzione con una deviazione praticabile produce un cambio di rotta e di controparte; una senza deviazione produce un aumento di prezzo.',
    why: 'Serve a non sommare interruzioni che non sono sommabili. Il premio geopolitico sul greggio non nasce dal danno in sé ma dalla competizione fra compratori per un barile che è diventato scarso: se un importante acquirente risolve il problema comprando altrove, quel barile non viene inseguito e lo shock resta locale invece di diventare un prezzo mondiale. È la differenza fra un porto di esportazione fermo, che ha alternative, e uno stretto chiuso, che è esso stesso l’alternativa di tutti.',
    related: ['Premio di rischio geopolitico', 'Stretto di Hormuz', 'Vincolo materiale'],
  },
];
