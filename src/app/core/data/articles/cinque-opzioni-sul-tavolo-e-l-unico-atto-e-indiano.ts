import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const cinqueOpzioniSulTavolo: Article = {
  slug: 'cinque-opzioni-sul-tavolo-e-l-unico-atto-e-indiano',
  categories: ['dazi-e-commercio', 'petrolio', 'medio-oriente', 'asia'],
  title: 'Cinque opzioni sul tavolo, e l’unico atto compiuto è indiano',
  kicker: 'Dazi e commercio · Opzioni contro atti',
  dek:
    'Reuters ricostruisce come Washington potrebbe stringere sull’Iran: raffinerie indipendenti cinesi, ' +
    'banche cinesi, spedizionieri, aviazione, dazi secondari sui Paesi terzi. Nessuna di queste misure è ' +
    'stata pubblicata. L’unico provvedimento davvero adottato nella giornata non è americano: l’India ha ' +
    'imposto alle raffinerie nuovi obiettivi di produzione di GPL.',
  publishedAt: '2026-08-16T12:05:00+02:00',
  author: AUTHOR,
  readingMinutes: 6,
  tags: ['Dazi secondari', 'Raffinerie teapot', 'OFAC', 'India', 'Sicurezza energetica'],
  instruments: ['Brent', 'XAU/USD', 'Treasury'],
  horizons: ['medio', 'lungo'],
  certainty: 'bassa',
  certaintyNote:
    'Bassa, ed è la prima volta che questo archivio usa questo livello: il fondamento della parte nuova ' +
    'è una ricostruzione giornalistica di misure allo studio, e di un provvedimento allo studio si ' +
    'conosce l’esistenza ma non l’esito. Alta invece su due cose sole, che vanno tenute separate dal ' +
    'resto: l’amministrazione ha dichiarato di voler intensificare la pressione, e il Tesoro conduce da ' +
    'tempo una campagna contro vendite di petrolio, banche ombra e reti di evasione — questo lo ' +
    'confermano le sue stesse fonti. Media sull’unico atto della giornata, la misura indiana, che è ' +
    'adottata ma i cui effetti sulle scorte sono ancora da misurare.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    horizon: 'medio',
    regime:
      'Sull’arco dei giorni la lettura non si muove, perché un elenco di opzioni non è un vincolo. Quello ' +
      'che cambia è la forma del rischio: se le misure diventassero effettive avrebbero due canali ' +
      'opposti, uno che riduce le esportazioni iraniane e spinge il greggio contro il metallo, e uno che ' +
      'trasforma la crisi in uno scontro economico con la Cina e quindi alimenta la domanda di riparo. ' +
      'Finché nulla è pubblicato restano preferenze dichiarate, e su questa scala pesano quanto i sei ' +
      'annunci di distensione su Hormuz che non hanno mosso di una nave il conteggio dei transiti.',
  },
  takeaways: [
    'Reuters ha ricostruito le opzioni con cui gli Stati Uniti potrebbero aumentare la pressione economica sull’Iran: misure contro le raffinerie indipendenti cinesi, provvedimenti contro banche cinesi usate nelle transazioni iraniane, una stretta su spedizionieri e cambiavalute, restrizioni nell’aviazione, e dazi secondari contro i Paesi che continuano a commerciare con Tehran.',
    'Nessuna di queste misure risulta pubblicata: non ci sono designazioni nuove di questo tipo da OFAC o dal Tesoro, quindi non sono state sanzionate banche cinesi né introdotti dazi secondari. Sono opzioni allo studio.',
    'Quello che è confermato è più stretto e già noto: l’amministrazione ha dichiarato di voler intensificare la pressione, e il Tesoro conduce da tempo una campagna contro vendite di petrolio, banche ombra e reti di evasione delle sanzioni.',
    'Lo strumento dei dazi secondari non è nuovo in questo archivio: il 7 agosto il Senato ne ha approvati 86 a 11 fino al 100% sui maggiori acquirenti di energia russa, e quel provvedimento deve ancora passare alla Camera. Nuovo è il bersaglio, non l’attrezzo.',
    'L’unico provvedimento davvero adottato nella giornata è indiano: nuovi obiettivi di produzione domestica di GPL imposti alle raffinerie, per aumentare le scorte e ridurre la vulnerabilità alle interruzioni delle importazioni dal Medio Oriente.',
  ],
  sources: [
    {
      outlet: 'Reuters',
      title:
        'Le opzioni allo studio per aumentare la pressione economica sull’Iran: raffinerie indipendenti cinesi, banche, spedizionieri, aviazione, dazi secondari',
      at: '16 agosto 2026',
    },
    {
      outlet: 'Reuters',
      title:
        'L’India impone alle raffinerie nuovi obiettivi di produzione domestica di GPL per aumentare le scorte',
      at: '16 agosto 2026',
    },
    {
      outlet: 'U.S. Department of the Treasury',
      title:
        'Campagna contro vendite di petrolio iraniano, shadow banking e reti di evasione delle sanzioni',
    },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Reuters ha messo in fila oggi le strade con cui Washington potrebbe stringere sull’Iran nei ' +
        'prossimi giorni, e alcune arriverebbero molto lontano dall’Iran: le raffinerie indipendenti ' +
        'cinesi che comprano greggio iraniano, le banche cinesi usate per quelle transazioni, gli ' +
        'spedizionieri, l’aviazione, e i dazi secondari contro chiunque continui a commerciare con ' +
        'Tehran. È materiale importante, e per usarlo bene serve una distinzione che questo archivio ' +
        'applica da tre settimane: fra quello che è deciso e quello che è soltanto valutato.',
    },
    {
      kind: 'heading',
      text: 'Che cosa è deciso e che cosa è allo studio',
      anchor: 'deciso-e-allo-studio',
    },
    {
      kind: 'scenarios',
      title: 'Tre colonne, e conviene non mescolarle',
      caption:
        'La collocazione in una colonna o nell’altra è il contenuto informativo di questa analisi, non una premessa.',
      items: [
        {
          label: 'Già in corso',
          tone: 'warn',
          text: 'L’amministrazione ha dichiarato di voler intensificare la pressione economica, e il Tesoro conduce da tempo una campagna contro le vendite di petrolio iraniano, il sistema bancario ombra e le reti di evasione delle sanzioni. Lo confermano le sue stesse fonti ufficiali, e la finalità dichiarata è restringere l’accesso dell’Iran ai ricavi petroliferi e ai circuiti finanziari internazionali. È il livello di base, e non è una novità di oggi.',
        },
        {
          label: 'Allo studio',
          tone: 'neutral',
          text: 'Misure più aggressive contro le raffinerie indipendenti cinesi che acquistano greggio iraniano; possibili provvedimenti contro banche cinesi usate nelle transazioni; una stretta su spedizionieri e cambiavalute; nuove restrizioni nell’aviazione; e dazi secondari contro i Paesi terzi. Quest’ultima strada è quella con la portata più larga, perché sposterebbe la crisi dal piano iraniano a quello commerciale fra Stati Uniti e Cina.',
        },
        {
          label: 'Pubblicato',
          tone: 'bull',
          text: 'Niente. Non risultano designazioni nuove di questo tipo da OFAC o dal Tesoro. Non sono state sanzionate banche cinesi, non sono stati introdotti dazi secondari, e nessuna raffineria cinese è stata colpita da un provvedimento in vigore. La colonna che conta per un vincolo materiale è oggi vuota.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'L’attrezzo è vecchio di nove giorni, il bersaglio è nuovo',
      text:
        'I dazi secondari non entrano oggi in questo archivio. Il 7 agosto il Senato ha approvato 86 a 11 ' +
        'un provvedimento che autorizza dazi fino al 100% sui cinque maggiori acquirenti di energia russa e ' +
        'fino al 500% sulle merci russe, e quel testo deve ancora passare alla Camera: era stato registrato ' +
        'qui come uno dei tre modi di allargare la stessa mano. Quello che Reuters riporta oggi è lo stesso ' +
        'strumento puntato su un secondo bersaglio, i partner commerciali di Tehran. La differenza fra le ' +
        'due versioni è tutta nel loro stato: una ha un voto dietro e un passaggio parlamentare davanti, ' +
        'l’altra non ha niente. Su questa scala quella distanza è l’intero contenuto della notizia, e ' +
        'confonderla produrrebbe la stessa illusione già misurata su Hormuz — dove sei annunci di ' +
        'distensione in quattro giorni non hanno spostato di una nave il conteggio dei transiti.',
    },
    {
      kind: 'heading',
      text: 'L’unico atto della giornata, e non è americano',
      anchor: 'l-unico-atto',
    },
    {
      kind: 'paragraph',
      text:
        'Nello stesso giorno l’India ha imposto alle proprie raffinerie nuovi obiettivi di produzione ' +
        'domestica di GPL, per aumentare le scorte e ridurre la vulnerabilità alle interruzioni delle ' +
        'importazioni dal Medio Oriente. Il testo ricevuto lo colloca fra le note a margine, e vale la ' +
        'pena spostarlo al centro: è il solo provvedimento della giornata che sia stato adottato invece ' +
        'che valutato. Un governo ha dato un obiettivo vincolante a delle imprese, e quell’obiettivo ' +
        'produrrà scorte misurabili.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Perché un atto indiano conta più di cinque opzioni americane',
      text:
        'Non per la sua taglia, che è piccola, ma per la sua natura e per il verso in cui punta. È la ' +
        'seconda volta in ventiquattro ore che un grande importatore reagisce alla crisi riducendo la ' +
        'propria esposizione invece di rincorrere il barile: ieri era la Turchia, che ha portato le ' +
        'importazioni dai porti russi del Mar Nero da circa 1,2 milioni di tonnellate a giugno a una ' +
        'stima di 200.000 per agosto sostituendo con Brasile e Guyana. Un compratore che sostituisce e un ' +
        'compratore che accumula scorte fanno la stessa cosa al premio geopolitico: lo attenuano. Ogni ' +
        'misura di sicurezza energetica presa a valle rende il collo di bottiglia a monte un po’ meno ' +
        'capace di muovere il prezzo mondiale, e per l’oro questo taglia la gamba energetica del premio ' +
        'mentre lascia intatta quella del rifugio.',
    },
    {
      kind: 'note',
      text:
        'Questa è la sesta analisi pubblicata da quando i mercati hanno chiuso venerdì, e nessuna delle ' +
        'sei ha avuto un prezzo con cui misurarsi. Ha una conseguenza sul registro degli esiti che ' +
        'conviene dichiarare invece di scoprire fra una settimana: le condizioni scritte a mercati chiusi ' +
        'possono essere risolte soltanto da una seduta, quindi in questi due giorni si è accumulato un ' +
        'arretrato di affermazioni verificabili e nessuna verifica possibile. La prima seduta utile non ' +
        'giudicherà una lettura ma sei, e conviene aspettarsela.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text:
        'Direzione neutrale con inclinazione rialzista e forza bassa, invariate: un elenco di opzioni non ' +
        'sposta un vincolo, e questa analisi non chiede di essere letta come se lo facesse. Il valore di ' +
        'questa ricostruzione è un altro: dice quali strumenti sono sul tavolo, e quindi che cosa andrà ' +
        'guardato se qualcuno li prende in mano. Fra i cinque, i due che contano per l’oro non sono quelli ' +
        'che colpiscono l’Iran ma quelli che colpiscono la Cina — banche e dazi secondari — perché sono i ' +
        'soli che aggiungono una componente di avversione al rischio invece di limitarsi a togliere ' +
        'barili.',
    },
    {
      kind: 'paragraph',
      text:
        'La ragione è meccanica ed era già stata scritta qui il 7 agosto a proposito della versione russa ' +
        'dello stesso strumento: dazi secondari che colpiscono insieme commercio, energia e rapporti fra ' +
        'grandi economie producono la configurazione in cui la domanda di riparo cresce. Sanzioni che ' +
        'riducono soltanto l’export iraniano fanno invece salire il greggio, e con esso le attese di ' +
        'inflazione e i rendimenti che un metallo senza cedole deve battere. Sono due esiti opposti dello ' +
        'stesso titolo di giornale, e l’unico modo di distinguerli in anticipo è guardare quale delle ' +
        'cinque opzioni viene pubblicata per prima.',
    },
  ],
  invalidation: [
    'Una designazione pubblicata da OFAC o dal Tesoro che colpisca una raffineria indipendente cinese o una banca cinese entro venerdì 21 agosto: farebbe passare la questione dalle opzioni agli atti, e questa lettura andrebbe alzata di grado invece che tenuta ferma.',
    'Un voto della Camera sul provvedimento approvato dal Senato il 7 agosto, in un verso o nell’altro: direbbe se lo strumento dei dazi secondari ha una gamba legislativa, ed è lo stesso attrezzo su un bersaglio diverso.',
    'Un annuncio ufficiale cinese di ritorsione, oppure una sospensione degli acquisti di greggio iraniano dichiarata da una raffineria indipendente cinese, entro venerdì 21 agosto: sposterebbe la questione dalle opzioni americane alle reazioni, che è il piano su cui si forma davvero la componente di avversione al rischio.',
    'Nuovi obiettivi di sicurezza energetica dichiarati da un altro grande importatore — Cina, Giappone o Corea del Sud — entro fine agosto: confermerebbe che la misura indiana è l’inizio di una serie e non un caso isolato, e la gamba lenta di questa lettura si irrobustirebbe.',
    'L’assenza di qualunque provvedimento pubblicato entro venerdì 21 agosto: riporterebbe l’intera ricostruzione nella categoria degli annunci senza contenuto, dove questo archivio ha già collocato le misure di isolamento economico annunciate dal segretario al Tesoro il 14 agosto e mai pubblicate.',
  ],
  nextEvent: {
    when: 'Entro venerdì 21 agosto',
    title: 'La prima designazione pubblicata, o la sua assenza',
    detail:
      'Il canale da guardare non è la stampa ma il bollettino: una designazione di OFAC ha una data, un ' +
      'nome e un testo, e trasforma un’opzione in un vincolo. Il dettaglio che deciderà la lettura non è ' +
      'se arriva, ma quale arriva per prima — una misura sull’export iraniano spinge il greggio contro il ' +
      'metallo, una misura su banche cinesi o dazi secondari fa l’opposto. Se entro venerdì non compare ' +
      'niente, la ricostruzione di oggi va contata come un annuncio senza contenuto.',
  },
};
