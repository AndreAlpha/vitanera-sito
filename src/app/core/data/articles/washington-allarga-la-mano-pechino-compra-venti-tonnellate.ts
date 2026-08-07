/**
 * washington-allarga-la-mano-pechino-compra-venti-tonnellate
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const washingtonPechinoVentiTonnellate: Article = {
  slug: 'washington-allarga-la-mano-pechino-compra-venti-tonnellate',
  categories: ['riserve-auree', 'dazi-e-commercio', 'oro', 'usa'],
  title: 'Washington allarga la mano, Pechino compra venti tonnellate',
  kicker: 'Riserve · Domanda strutturale e premio istituzionale',
  dek:
    'In una sola giornata il Senato approva 86 a 11 dazi fino al 100% sui maggiori acquirenti di energia russa, ' +
    'il Tesoro sanziona due borse di criptovalute usate da entità iraniane, e la Casa Bianca compie il ' +
    'passaggio procedurale che la Corte Suprema aveva indicato per rimuovere una governatrice della Fed. Gli ' +
    'stessi dati cinesi di oggi dicono che a luglio la banca centrale ha comprato quasi venti tonnellate d’oro: ' +
    'ventunesimo mese di fila, e il ritmo accelera da marzo.',
  publishedAt: '2026-08-07T21:20:00+02:00',
  author: AUTHOR,
  readingMinutes: 8,
  tags: ['Riserve auree', 'PBOC', 'Sanzioni', 'Indipendenza della banca centrale', 'Lisa Cook'],
  instruments: ['XAU/USD', 'DXY', 'Treasury'],
  horizons: ['medio', 'lungo'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    regime:
      'La gamba della domanda strutturale si rafforza e adesso ha un numero fresco: la banca centrale cinese ' +
      'ha aggiunto 640.000 once a luglio, quasi venti tonnellate, il ventunesimo mese consecutivo e il maggior ' +
      'acquisto da ottobre 2023, con il ritmo in aumento ogni mese da marzo. Attorno, tre atti americani che ' +
      'allargano la portata dello stesso strumento — dazi secondari, sanzioni sui binari di pagamento, ' +
      'pressione su una governatrice della banca centrale. La direzione resta neutrale-rialzista e non ' +
      'rialzista perché il provvedimento sulle sanzioni non è legge, e perché se lo diventasse il suo canale ' +
      'principale sarebbe il prezzo dell’energia, che in questo regime lavora contro il metallo.',
    horizon: 'lungo',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti: i dati sulle riserve sono la pubblicazione ufficiale della banca centrale cinese, il ' +
    'voto del Senato è agli atti con il suo conteggio, la lettera alla governatrice e la sentenza di giugno ' +
    'sono documentati. Media sulla conclusione, e per una ragione che va detta subito: gli acquisti di luglio ' +
    'sono stati decisi prima dei voti di oggi, quindi mettere le due cose nella stessa analisi descrive una ' +
    'coincidenza di calendario, non una causa. Quello che si può dire è più modesto e più solido — la serie ' +
    'era già lì, e oggi si aggiungono tre ragioni in più perché continui.',
  takeaways: [
    'I dati ufficiali cinesi pubblicati oggi portano le riserve auree a 76,08 milioni di once da 75,44 a fine giugno: 640.000 once in più, quasi venti tonnellate, il ventunesimo mese consecutivo di acquisti.',
    'È il maggior incremento mensile da ottobre 2023, e soprattutto il ritmo cresce da cinque mesi: a marzo erano 160.000 once, adesso quattro volte tante. Il valore delle riserve sale a 306,35 miliardi di dollari da 303,72.',
    'Il Senato ha approvato 86 a 11 il provvedimento sulle sanzioni a Russia e Iran intitolato al senatore Lindsey Graham, morto di recente: autorizza dazi fino al 100% sulle importazioni dai cinque maggiori acquirenti di energia russa e fino al 500% sulle merci russe. Deve ancora passare alla Camera.',
    'La Casa Bianca ha dato tre settimane alla governatrice della Fed Lisa Cook per rispondere alle accuse sui mutui. Il punto non è il tentativo in sé — è il secondo — ma che a fine giugno la Corte Suprema aveva indicato proprio il preavviso e il diritto di replica come i passaggi mancanti.',
    'Il Tesoro ha inoltre sanzionato la borsa di criptovalute di Dubai Shelbit, il suo fondatore e l’iraniana Aban Tether, indicate come snodi di uno schema da circa quattro miliardi di dollari per aggirare le sanzioni.',
  ],
  invalidation: [
    'Una lettura di agosto delle riserve cinesi che mostri acquisti inferiori alle 160.000 once di marzo, o un mese senza acquisti: interromperebbe la serie e toglierebbe la gamba che questa lettura rafforza. Il dato esce all’inizio di settembre.',
    'La bocciatura del provvedimento alla Camera, o una versione che tolga l’autorizzazione ai dazi secondari sull’energia: ridurrebbe il fatto a un voto simbolico di una sola camera.',
    'Il ritiro della lettera alla governatrice, o una pronuncia che chiuda la strada alla rimozione: toglierebbe il premio istituzionale descritto qui.',
    'Un oro spot che rientra stabilmente sotto i 4.300 dollari, che direbbe che il mercato non sta prezzando nulla di quanto sopra.',
    'Prima di tutte queste, e senza aspettare la rottura: un Brent stabilmente sopra gli 84 dollari. Se i dazi secondari sull’energia diventassero legge agirebbero proprio da lì, e a quel livello il canale energetico smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto alle 14:30',
    title: 'Indice dei prezzi al consumo statunitense, luglio',
    detail:
      'Attese al 3,4% annuo dal 3,5%, con l’indice di fondo al 2,5% dal 2,6%. Resta il primo appuntamento con una data certa, e per questa lettura conta in modo indiretto ma preciso: misura quanto margine ha la banca centrale prima che un’eventuale inflazione da dazi diventi un problema che non può ignorare. Un dato caldo non contraddice gli acquisti cinesi, ma rende più costoso tenere il metallo mentre quegli acquisti continuano.',
  },
  sources: [
    { outlet: 'Banca popolare cinese', title: 'Riserve ufficiali di fine luglio 2026' },
    { outlet: 'Reuters' },
    { outlet: 'CBS News' },
    { outlet: 'NBC News' },
    { outlet: 'Corte Suprema degli Stati Uniti', title: 'Trump contro Cook, 29 giugno 2026' },
    { outlet: 'Investing.com' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'I dati ufficiali pubblicati oggi da Pechino portano le riserve auree cinesi a 76,08 milioni di once, da 75,44 alla fine di giugno. Sono 640.000 once in più — quasi venti tonnellate — nel solo mese di luglio: il ventunesimo mese consecutivo di acquisti e il maggior incremento dall’ottobre del 2023. Il dettaglio che conta più del totale è però il ritmo: a marzo la banca centrale aveva aggiunto 160.000 once, e da allora la cifra è cresciuta ogni mese fino a quadruplicare.',
    },
    {
      kind: 'stats',
      title: 'Dove siamo',
      caption: 'Dati ufficiali di fine luglio; quotazione dell’oro delle 21:06 del 7 agosto.',
      items: [
        {
          label: 'Riserve auree cinesi',
          value: '76,08 mln oz',
          tone: 'bull',
          note: 'Da 75,44 a fine giugno: più 640.000 once, quasi venti tonnellate',
        },
        {
          label: 'Mesi consecutivi di acquisti',
          value: 'ventuno',
          tone: 'bull',
          note: 'Il ritmo cresce da marzo, quando furono 160.000 once',
        },
        {
          label: 'Valore delle riserve',
          value: '306,35 mld $',
          tone: 'neutral',
          note: 'Da 303,72 miliardi a fine giugno',
        },
        {
          label: 'Voto al Senato',
          value: '86 a 11',
          tone: 'warn',
          note: 'Dazi fino al 100% sugli acquirenti di energia russa, fino al 500% sulle merci russe',
        },
        {
          label: 'Tempo dato alla governatrice',
          value: 'tre settimane',
          tone: 'warn',
          note: 'Per rispondere alle accuse, dopo la sentenza di fine giugno',
        },
        {
          label: 'XAU/USD spot',
          value: '4.341,88 $',
          tone: 'bull',
          note: 'Più 2,39%, massimo di giornata 4.371,89 segnato alle 15:00',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Tre modi di allargare la stessa mano',
      anchor: 'tre-modi',
    },
    {
      kind: 'paragraph',
      text: 'Nella stessa giornata sono successe tre cose che a prima vista non c’entrano l’una con l’altra. Il Senato ha approvato con 86 voti contro 11 il provvedimento sulle sanzioni a Russia e Iran intitolato al senatore Lindsey Graham, morto di recente: autorizza il presidente a imporre dazi fino al 100% sulle importazioni dai cinque maggiori acquirenti di petrolio e gas russi, e fino al 500% sulle merci russe che entrano negli Stati Uniti. Il Tesoro ha sanzionato una borsa di criptovalute di Dubai, il suo fondatore e una borsa iraniana, indicate come snodi di uno schema da circa quattro miliardi di dollari per aggirare le sanzioni. E la Casa Bianca ha scritto alla governatrice della Federal Reserve Lisa Cook dandole tre settimane per rispondere alle accuse sui suoi mutui.',
    },
    {
      kind: 'paragraph',
      text: 'Quello che le tiene insieme non è un disegno: è che tutte e tre allargano la portata dello stesso strumento, cioè la capacità di uno Stato di far valere il proprio sistema finanziario e le proprie istituzioni su decisioni che vengono prese altrove. I dazi secondari colpiscono chi commercia con un terzo, non il terzo. Le sanzioni sui binari di pagamento colpiscono l’infrastruttura, non l’operazione. E la lettera alla governatrice riguarda chi decide i tassi, non i tassi. Chi gestisce riserve valutarie guarda esattamente questa categoria di eventi, perché descrive quanto sia sicuro tenere il proprio risparmio dentro il perimetro di qualcun altro.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il passaggio sulla governatrice è più serio di come viene raccontato',
      text: 'La versione corrente è che a giugno la Corte Suprema abbia bloccato il licenziamento e che ora il tentativo riparta contro quella decisione. Non è così, ed è la differenza che conta. La sentenza del 29 giugno, cinque a quattro, ha lasciato la governatrice al suo posto scrivendo che aveva diritto a un preavviso e alla possibilità di rispondere prima di una rimozione «per giusta causa» — e proprio per questo lasciava aperta la strada a un secondo tentativo una volta compiuti quei passaggi. La lettera di tre settimane non aggira la Corte: esegue la procedura che la Corte ha indicato. Il primo tentativo, nell’agosto del 2025, è stato l’unica volta nella storia della Federal Reserve in cui un presidente in carica ha cercato di rimuovere un governatore. Questo è il secondo, e arriva con l’ostacolo procedurale in via di rimozione anziché in piedi.',
    },
    {
      kind: 'heading',
      text: 'Perché la coincidenza non è una causa',
      anchor: 'non-e-una-causa',
    },
    {
      kind: 'paragraph',
      text: 'A questo punto la tentazione è di chiudere il cerchio: Washington allarga la mano, Pechino compra oro. È una frase che funziona e che qui non si può scrivere, per una ragione di date. Le venti tonnellate sono acquisti di luglio, decisi e regolati settimane prima dei voti di oggi. Un archivio che le presentasse come una reazione agli eventi di stamattina starebbe raccontando una coincidenza di calendario e chiamandola meccanismo — che è lo stesso errore già commesso qui con un’intervista realizzata il 31 luglio e uscita tre giorni dopo, mentre l’oro saliva da prima.',
    },
    {
      kind: 'paragraph',
      text: 'Quello che si può dire è più modesto e regge meglio. La serie era già lì prima di oggi: ventuno mesi consecutivi, con il ritmo che accelera da cinque. Non ha bisogno degli eventi di oggi per essere spiegata, e infatti li precede. Gli eventi di oggi non la causano: ne aumentano la probabilità di continuare, perché aggiungono tre casi concreti al ragionamento che la produce. Il quadro di metodo usato qui — descritto in /metodologia — dice che gli Stati accettano costi assoluti per guadagni relativi: comprare un’attività che non rende nulla è un costo, e ha senso solo se in cambio si riduce la dipendenza da qualcun altro. Ogni volta che quella dipendenza viene mostrata come utilizzabile, il costo diventa più facile da giustificare.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Domanda strutturale contro canale dei tassi',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'La prima delle gambe di fondo di questo archivio — gli acquisti delle banche centrali sotto il prezzo — ha adesso un numero fresco, e va nella direzione giusta: non solo continua, accelera.',
          'Ventuno mesi consecutivi rendono la serie difficile da liquidare come rumore: è la specie di dato che si giudica sul trimestre e non sulla seduta.',
          'Il premio istituzionale è tornato sul tavolo con un fatto e non con un timore: una lettera con una scadenza di tre settimane, dopo una sentenza che ha indicato la procedura.',
          'I dazi secondari, se diventassero legge, colpirebbero contemporaneamente commercio, energia e rapporti fra grandi economie: è la configurazione in cui la domanda di riparo cresce.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Il provvedimento non è legge: ha passato una camera e ne deve passare un’altra. Trattarlo come fatto compiuto è l’errore che questo archivio commette più spesso quando le notizie arrivano in fretta.',
          'Se diventasse legge, il suo canale principale sarebbe il prezzo dell’energia — ed è lo stesso canale che, sopra gli 84 dollari di Brent, in questo archivio lavora contro il metallo attraverso i rendimenti.',
          'Gli acquisti cinesi sono lenti per costruzione: venti tonnellate sono una frazione piccola degli scambi giornalieri, e non spostano un prezzo sulla singola seduta.',
          'La questione della governatrice si misura in settimane e ha già un precedente in cui non ha prodotto alcun effetto duraturo sui tassi.',
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
      text: 'L’impostazione descritta qui resta neutrale con inclinazione rialzista, ma la forza sale da bassa a media sull’orizzonte delle settimane. Sale perché la gamba della domanda strutturale ha smesso di essere un’affermazione generica ed è tornata a essere un numero: ventuno mesi, venti tonnellate, ritmo in accelerazione da marzo. Non passa a rialzista per due ragioni dicibili in una riga ciascuna. La prima è che un provvedimento votato da una camera non è una legge, e questo archivio ha una regola su come si trattano le cose riportate rispetto alle cose fatte. La seconda è che, proprio se quel provvedimento diventasse legge, il suo effetto principale passerebbe dal prezzo dell’energia — e sopra una certa soglia l’energia costosa non aiuta l’oro, gli lavora contro attraverso i rendimenti.',
    },
    {
      kind: 'paragraph',
      text: 'C’è infine una cosa da dire sull’orizzonte, perché è ciò che separa questa lettura da quelle pubblicate nel pomeriggio. Sulla giornata il rapporto occupazionale comanda ancora, e comanda a favore del metallo. Su settimane e mesi comanda chi compra e a quali condizioni, e la risposta di oggi è che il compratore più costante del mercato sta comprando più in fretta mentre le ragioni per farlo diventano più visibili. Nessuna delle due letture smentisce l’altra: misurano cose diverse su scale diverse, ed è il motivo per cui questo archivio ne tiene tre separate invece di sceglierne una.',
    },
    {
      kind: 'note',
      text: 'I dati sulle riserve sono la pubblicazione ufficiale di fine luglio della banca centrale cinese, ripresa dalle agenzie: misurano ciò che è stato comprato in luglio, non una reazione ai fatti del 7 agosto. Il provvedimento sulle sanzioni ha superato il solo Senato e non è legge. Le accuse alla governatrice della Federal Reserve sono contestate dall’interessata e nessun giudice le ha finora accolte come base per una rimozione. Il livello dell’oro è una rilevazione delle 21:06 e serve a rendere verificabile il ragionamento: non è una quotazione in tempo reale né un obiettivo. I riferimenti sull’oro sono sul prezzo spot; il contratto future scambia una sessantina di dollari più in alto, e i «4.400» che circolano oggi appartengono a quella seconda serie.',
    },
  ],
};
