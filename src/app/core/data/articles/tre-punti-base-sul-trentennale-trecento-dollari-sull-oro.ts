/**
 * tre-punti-base-sul-trentennale-trecento-dollari-sull-oro
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const trePuntiBaseSulTrentennale: Article = {
  slug: 'tre-punti-base-sul-trentennale-trecento-dollari-sull-oro',
  categories: ['obbligazioni', 'oro', 'correlazioni', 'usa'],
  title: 'Tre punti base sul trentennale, trecento dollari sull’oro',
  kicker: 'Obbligazioni · La parte lunga contro la parte corta',
  dek:
    'Il trentennale statunitense è vicino al 5,28%, il livello più alto da quasi vent’anni. Questo archivio ' +
    'lo aveva già scritto il 4 agosto al 5,25%, e allora era la ragione per cui l’oro restava fermo a 4.062 ' +
    'dollari. Oggi l’oro è a 4.386. Il freno era descritto con più forza di quanta ne avesse.',
  publishedAt: '2026-08-11T14:20:00+02:00',
  author: AUTHOR,
  readingMinutes: 8,
  tags: ['Trentennale', 'Curva dei rendimenti', 'Premio a termine', 'Brent', 'Autocorrezione'],
  instruments: ['XAU/USD', 'Treasury', 'Brent', 'WTI', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'bassa',
    regime:
      'L’oro ha attraversato la configurazione più ostile della fase — trentennale vicino al 5,28%, cioè ai ' +
      'massimi da quasi vent’anni, e Brent che tocca i 90 dollari — e ne è uscito a 4.386,13, venti dollari ' +
      'sopra il controllo delle 10:45. È forza relativa, ed è misurabile. Ma la direzione resta neutrale, e ' +
      'la ragione è scritta in questo archivio da stamattina: la condizione che avrebbe autorizzato ad ' +
      'alzarla chiedeva il recupero dei 4.400 dollari, e il metallo si è fermato quattordici dollari sotto. ' +
      'Il quadro dei tassi spiega perché la tenuta non sorprende: la tensione è tutta sulla parte lunga della ' +
      'curva, mentre il biennale è a 4,237%, due millesimi sotto la rilevazione precedente e tredici sotto ' +
      'la soglia del 4,25%. Quello che il mercato sta prezzando è inflazione, non una Fed che reagisce.',
    horizon: 'breve',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti, che sono prezzi riferiti dalle agenzie e un confronto con un’analisi pubblicata qui il 4 ' +
    'agosto, quindi verificabile riga per riga. Media sulla lettura del meccanismo, e conviene dire dove sta ' +
    'il buco: sostenere che la parte lunga stia prezzando inflazione e non la Fed è una deduzione ricavata ' +
    'dalla forma della curva — trentennale ai massimi, biennale fermo — e la misura che la chiuderebbe, il ' +
    'tasso di inflazione implicito nei titoli indicizzati, questo archivio non ce l’ha. Finché manca, il ' +
    'ragionamento resta un’inferenza dalla scadenza corta a quella lunga, non una misura diretta.',
  takeaways: [
    'Il rendimento del Treasury a 30 anni è arrivato vicino al 5,28%, il livello più alto da quasi vent’anni. Non è un fatto nuovo: il 4 agosto questo archivio aveva pubblicato lo stesso record al 5,25%, e allora spiegava perché l’oro restasse fermo poco sopra i 4.062 dollari.',
    'Oggi lo stesso rendimento, tre punti base più su, convive con un oro a 4.386,13 dollari: trecentoventiquattro dollari più in alto, più 8% in una settimana. Il freno esisteva ma è stato descritto con più forza di quanta ne avesse.',
    'La curva dice dove sta la tensione: il trentennale ai massimi, il decennale a circa 4,71% dopo un massimo di 4,736%, e il biennale a 4,237%, due millesimi sotto la rilevazione di stamattina e tredici sotto la soglia del 4,25% dichiarata qui il 5 agosto.',
    'Il Brent ha toccato 90,03 dollari — circa 88,6 sulla serie di questo archivio — e li ha restituiti fino a 87,51 dopo segnali descritti come più costruttivi nei colloqui Oman-Iran, senza alcun accordo sostanziale. È l’ottavo annuncio in una settimana, ed è il primo a cui il prezzo paga quasi tre punti percentuali.',
    'La probabilità di un rialzo a settembre resta intorno al 52%, contro circa il 44% subito dopo il rapporto occupazionale. Nessuna nuova riprezzatura: la direzione è ferma dove l’aveva portata la serata di ieri.',
  ],
  invalidation: [
    'Un oro che recupera i 4.400 dollari entro la chiusura di mercoledì con il decennale ancora sopra il 4,70%: è la condizione scritta qui alle 10:45, oggi mancata per quattordici dollari, e se scatta significa che la direzione andava alzata e questa lettura è stata troppo prudente.',
    'Un biennale sopra il 4,25% con il Brent oltre gli 84 dollari sulla serie di questo archivio: è la regola a due gambe del 5 agosto, la prima gamba è dentro da tre giorni, e la caduta della seconda direbbe che la Fed sta entrando nel prezzo dove finora non è entrata.',
    'Un oro sotto i 4.300 dollari con il Dollar Index sopra 100: è il deterioramento vero, e nessuna delle due gambe è presente — il metallo è ottantasei dollari sopra, il dollaro è a 99,8.',
    'Un Brent che riconquista i 90 dollari sulla serie delle agenzie, cioè circa 88,6 su quella usata qui, e li tiene oltre la chiusura di mercoledì mentre l’oro scende sotto i 4.350: sarebbe la prova di stabilità che oggi è fallita, e riporterebbe in vita la catena descritta nel testo ricevuto.',
    'Un indice dei prezzi mercoledì 12 agosto sopra il 3,4% annuo sul dato principale, o sopra più 0,2% mensile su quello di fondo: darebbe alla parte lunga della curva la conferma che le manca e trascinerebbe con sé anche la scadenza a due anni, che è l’unico modo perché questa lettura risulti sbagliata dal lato dei tassi.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto, 14:30 italiane',
    title: 'Indice dei prezzi al consumo statunitense di luglio',
    detail:
      'È il dato che può chiudere la domanda lasciata aperta qui. Se il rialzo dei rendimenti lunghi è premio per l’inflazione, un indice sopra le attese lo conferma e allarga ancora la distanza fra le due estremità della curva; se invece porta con sé anche il biennale sopra il 4,25%, allora la Fed entra nel prezzo e la lettura di questa scheda cade dal lato dei tassi. Il consenso riportato da Reuters resta di più 0,1% mensile sul dato principale e più 0,2% su quello di fondo. Giovedì 13, alla stessa ora, i prezzi alla produzione.',
  },
  sources: [
    { outlet: 'Reuters' },
    { outlet: 'Investing.com' },
    { outlet: 'Bureau of Labor Statistics', title: 'Calendario delle diffusioni' },
    { outlet: 'Federal Reserve', title: 'Elenco degli interventi del Board' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il rendimento del Treasury statunitense a trent’anni è arrivato vicino al 5,28%, il livello più alto da quasi vent’anni. Questo archivio ha già pubblicato quel record: il 4 agosto, con il titolo «Rendimenti a 30 anni di nuovo sui massimi dal 2007», e il numero era 5,25%. Dal 2007 a oggi sono diciannove anni, quindi «massimi dal 2007» e «massimi da quasi vent’anni» sono la stessa frase. Il fatto nuovo non è il livello. È che quel giorno il livello serviva a spiegare perché l’oro restasse fermo poco sopra i 4.062 dollari, e oggi lo stesso livello convive con un oro a 4.386,13.',
    },
    {
      kind: 'stats',
      title: 'Gli stessi rendimenti, una settimana dopo',
      caption:
        'Rilevazioni riferite dalle agenzie nella giornata dell’11 agosto, confrontate con quelle pubblicate qui il 4 agosto; non sono chiusure ufficiali né quotazioni in tempo reale.',
      items: [
        {
          label: 'Treasury 30 anni',
          value: '≈ 5,28%',
          tone: 'bear',
          note: 'Era ≈ 5,25% il 4 agosto: tre punti base di differenza in una settimana',
        },
        {
          label: 'XAU/USD',
          value: '4.386,13 $',
          tone: 'bull',
          note: 'Era ≈ 4.062 il 4 agosto: più 324 dollari, cioè più 8%',
        },
        {
          label: 'Treasury 2 anni',
          value: '4,237%',
          tone: 'bull',
          note: 'Due millesimi sotto la rilevazione delle 10:45, tredici sotto la soglia del 4,25%',
        },
        {
          label: 'Treasury 10 anni',
          value: '≈ 4,71%',
          tone: 'warn',
          note: 'Massimo di seduta a 4,736%, poi il rientro: sopra il 4,70% ma sotto il 4,75%',
        },
        {
          label: 'Brent',
          value: '87,51 $',
          tone: 'warn',
          note: 'Dopo un massimo di 90,03; circa 86,1 e 88,6 sulla serie di questo archivio',
        },
        {
          label: 'Dollar Index',
          value: '≈ 99,8',
          tone: 'bull',
          note: 'Fermo per la terza rilevazione consecutiva, sotto quota 100',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Lo stesso rendimento, trecento dollari di differenza',
      anchor: 'stesso-rendimento',
    },
    {
      kind: 'paragraph',
      text: 'L’analisi del 4 agosto diceva una cosa precisa, ed è quella che va rimessa in discussione: il mercato obbligazionario stava assorbendo buona parte della domanda rifugio, e per questo la tensione su Hormuz non si vedeva sul prezzo dell’oro. Chi cerca protezione, era il ragionamento, la trova in uno strumento che paga una cedola invece che in uno che non paga nulla. Il ragionamento non è sbagliato in sé — il costo-opportunità esiste ed è la prima cosa che l’oro deve battere. Sbagliata era la forza con cui veniva usato: come spiegazione sufficiente di una stasi, quando poteva reggere al massimo il ruolo di ostacolo parziale.',
    },
    {
      kind: 'paragraph',
      text: 'Una precisazione va fatta subito, perché altrimenti il confronto prova troppo. Fra il 4 e l’11 agosto sono successe parecchie cose che non c’entrano con la curva: un rapporto occupazionale a meno 23.000 posti con 103.000 revisionati via, ventuno mesi consecutivi di acquisti della banca centrale cinese, uno Stretto di Hormuz che continua a non riaprire. I trecentoventiquattro dollari non sono opera del trentennale, e nessuno sostiene il contrario. La conclusione che il confronto autorizza è più stretta e più utile: quel livello di rendimento, da solo, non basta a tenere fermo il metallo. Il 4 agosto era stato scritto come se bastasse.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Che cosa serviva per accorgersene prima',
      text: 'Una spiegazione che copre tutto il fatto osservato non lascia spazio a niente altro, ed è proprio per questo che va guardata due volte. Il 4 agosto l’oro era fermo e il trentennale sui massimi: la coincidenza era vera, il nesso plausibile, e la lettura si è chiusa lì. Sarebbe bastato chiedersi quale numero l’avrebbe smentita — un oro che sale con il trentennale allo stesso livello — per scoprire che sette giorni dopo sarebbe arrivato. Il metodo è descritto in /metodologia: la domanda non è se una spiegazione funziona, ma che cosa dovrebbe succedere perché non funzioni più.',
    },
    {
      kind: 'heading',
      text: 'La curva si allarga, e il pezzo che manca è la Fed',
      anchor: 'curva-si-allarga',
    },
    {
      kind: 'paragraph',
      text: 'La forma della curva dice qualcosa di più preciso, e il testo ricevuto la descrive bene: la tensione è concentrata sulla parte lunga. Il trentennale vicino al 5,28%, il decennale a circa 4,71% dopo aver toccato 4,736% in seduta, e il biennale a 4,237% — cioè due millesimi sotto la rilevazione di stamattina e tredici sotto la soglia del 4,25% che questo archivio segue dal 5 agosto. Le due estremità si stanno allontanando.',
    },
    {
      kind: 'paragraph',
      text: 'Quella distanza è diagnostica, perché le due scadenze non prezzano la stessa cosa. Il titolo a due anni prezza le prossime riunioni: è la scadenza in cui una decisione di settembre entra per prima, ed è il motivo per cui la regola di questo archivio la usa come seconda gamba. Il trentennale prezza vent’anni di inflazione media e il compenso che serve a portarsi il rischio di tenere un titolo così a lungo. Quando il primo sta fermo e il secondo sale ai massimi, l’aumento non riguarda il costo del denaro deciso dalla banca centrale: riguarda l’inflazione attesa e il premio richiesto per sopportarla.',
    },
    {
      kind: 'paragraph',
      text: 'La differenza conta per l’oro più di quanto sembri, e ribalta un pezzo della catena descritta nel testo ricevuto. Quella catena dice: petrolio su, aspettative di inflazione su, rendimenti lunghi su, Fed più restrittiva, pressione sull’oro. I primi tre passaggi sono in corso e verificabili. Il quarto non lo è: lo strumento che prezza una Fed più restrittiva è il biennale, e il biennale oggi è sceso di due millesimi. E il quinto passaggio dipende dal quarto, perché l’oro non è penalizzato dal rendimento nominale ma da quello reale — cioè da quanto resta al netto dell’inflazione attesa. Un rendimento lungo che sale perché sale l’inflazione attesa lascia il rendimento reale dov’era, e non toglie niente al metallo.',
    },
    {
      kind: 'paragraph',
      text: 'C’è poi un elemento che rende la lettura meno speculativa di quanto sembri, e viene dai conti pubblici. Il 4 agosto le cose prezzate insieme dalla parte lunga erano tre: inflazione persistente, maggiore fabbisogno del Tesoro e credibilità restrittiva della Fed. Una delle tre è caduta il giorno dopo, quando il rifinanziamento trimestrale ha lasciato invariate le aste a lunga scadenza — 125 miliardi ripartiti come nei trimestri precedenti, con i 68 miliardi di fabbisogno in più che non passano da lì. Delle altre due, quella monetaria è misurata dal biennale e il biennale non si muove. Resta la prima, da sola, a tenere il trentennale dove sta.',
    },
    {
      kind: 'heading',
      text: 'Novanta dollari, e l’ottavo annuncio',
      anchor: 'novanta-dollari',
    },
    {
      kind: 'paragraph',
      text: 'Sul greggio la giornata ha una forma netta. Il Brent è salito fino a 89,81 dollari — massimo dal 31 luglio, con il WTI a 84,28 — ha poi toccato 90,03 con il WTI a 84,61, e da lì è rientrato a 87,51 e 82,09. Sulla serie usata da questo archivio, che venerdì ha chiuso a 82,21 contro gli 83,55 delle agenzie, i tre numeri valgono circa 88,4, 88,6 e 86,1. La tacca degli 84 dollari resta quindi superata di due dollari abbondanti anche dopo il rientro: la prima gamba della regola del 5 agosto non si è mossa.',
    },
    {
      kind: 'paragraph',
      text: 'La causa del rientro riferita da Reuters sono segnali descritti come più costruttivi nei colloqui fra Oman e Iran sulla gestione dello Stretto, con la precisazione che un accordo sostanziale non c’è. È l’ottavo annuncio di distensione in una settimana, e l’elenco è tenuto in questa scheda dal 5 agosto: l’apertura di Bessent, la smentita iraniana, la minaccia rilanciata, la richiesta di controllo sugli ingressi, la trattativa «durata tutto il giorno», le coordinate concordate, la precisazione di Teheran che quel tavolo non è la riapertura, e adesso questo.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Un fatto che va contro la lettura tenuta qui',
      text: 'Questo archivio sostiene da giorni che il mercato ha smesso di pagare per la distensione annunciata, e ieri ne aveva la prova: una dichiarazione di Bessent sullo stesso tema aveva mosso il Brent dell’1% nella direzione sbagliata. Oggi il prezzo paga quasi tre punti percentuali per un annuncio senza accordo, ed è il movimento più grosso da quando l’elenco esiste. Ci sono due letture possibili, e con una sola giornata non si separano: o la desensibilizzazione si è interrotta, oppure il rientro è il fallimento di un test a novanta dollari e l’annuncio è la storia che gli è stata attaccata sopra a cose fatte. Il numero che le distingue non è il prezzo, è il conteggio dei transiti nello Stretto.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Una tenuta misurabile, e una soglia mancata per quattordici dollari',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Il metallo ha attraversato la configurazione più ostile della fase — trentennale ai massimi da vent’anni e Brent a 90 dollari — e ne esce a 4.386,13, venti dollari sopra il controllo delle 10:45.',
          'Il biennale è a 4,237%, sceso di due millesimi: lo strumento che prezzerebbe una Fed più restrittiva non si muove, e senza quello la catena descritta nel testo si ferma al terzo passaggio.',
          'Il Dollar Index è a 99,8 per la terza rilevazione consecutiva, sotto quota 100: manca la gamba valutaria di ogni condizione di deterioramento.',
          'Il rifinanziamento trimestrale ha tolto una delle tre gambe che tenevano su il trentennale, e le aste lunghe non crescono.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'I 4.400 dollari non sono stati recuperati: 4.386,13 è quattordici dollari sotto la soglia che questo archivio aveva dichiarato stamattina come prova che la forza relativa non era esaurita.',
          'Il decennale ha toccato 4,736% in seduta, il valore più alto della fase, e resta sopra il 4,70%.',
          'Il Brent, anche dopo il rientro, sta due dollari sopra la tacca degli 84 sulla serie di questo archivio: la gamba energetica della regola del 5 agosto è dentro da tre giorni.',
          'La probabilità di un rialzo a settembre resta al 52%, sopra la metà: il caso base non è più una Fed ferma.',
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
      text: 'L’impostazione intraday resta neutrale con forza bassa, e la ragione va detta per intero perché è scomoda. Tutto quello che si è visto oggi spinge verso l’alto: il metallo ha assorbito un trentennale ai massimi da vent’anni e un greggio a novanta dollari, e ne è uscito più su di dove stava a metà mattina. Ma alle 10:45 questa scheda ha scritto qual era la prova da chiedere — il recupero dei 4.400 dollari con il decennale ancora sopra il 4,70% — e la prova non è arrivata per quattordici dollari. Alzare la direzione adesso significherebbe usare la soglia quando conviene e ignorarla quando manca poco, che è esattamente il modo in cui un registro di condizioni smette di misurare qualcosa.',
    },
    {
      kind: 'paragraph',
      text: 'È anche l’errore opposto e simmetrico a quello commesso stamattina alle 9:45, quando un breakout in sessione sottile era stato preso per una riprezzatura e la direzione era stata alzata senza che una condizione lo autorizzasse. Un’ora dopo la prima invalidazione scattava. Le due cose insieme dicono la stessa regola vista dai due lati: la direzione si muove quando un numero dichiarato prima lo consente, non quando il quadro sembra promettente.',
    },
    {
      kind: 'paragraph',
      text: 'Resta la parte che non dipende dalle soglie, e vale più della lettura del giorno: la spiegazione con cui questo archivio giustificava il 4 agosto la stasi dell’oro non regge alla prova di una settimana. Non perché il costo-opportunità sia sparito, ma perché era stato scritto come causa sufficiente di una cosa che aveva molte cause. Domani alle 14:30 arriva l’unico dato che può separarle: se l’indice dei prezzi porta con sé il biennale, la Fed entra nel prezzo e la lettura di questa scheda cade dal lato dei tassi; se invece muove solo la parte lunga, la distanza fra le due estremità della curva si allarga ancora e il metallo continuerà a non pagarla.',
    },
    {
      kind: 'note',
      text: 'I livelli citati sono rilevazioni riferite dalle agenzie nella giornata dell’11 agosto e non sono chiusure ufficiali: servono a rendere verificabile il ragionamento e non sono obiettivi. Le quotazioni del Brent appartengono alla serie che venerdì ha chiuso a 83,55 dollari, mentre le tacche di questo archivio sono fissate sulla serie che ha chiuso a 82,21: le conversioni a 88,4, 88,6 e 86,1 applicano la stessa variazione percentuale e sono approssimate. Il confronto con il 4 agosto usa i numeri pubblicati allora in questo archivio, che erano a loro volta valori riferiti dalle fonti. La distinzione fra rendimento nominale e rendimento reale è ricavata dalla forma della curva e non da una misura diretta del tasso di inflazione implicito, che qui non è disponibile. La probabilità di rialzo attribuita alla Fed è una lettura di mercato ricavata dai contratti a termine, non una previsione della banca centrale.',
    },
  ],
};
