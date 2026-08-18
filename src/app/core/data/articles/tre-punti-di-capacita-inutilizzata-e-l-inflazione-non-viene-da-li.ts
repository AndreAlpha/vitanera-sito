import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const trePuntiDiCapacitaInutilizzata: Article = {
  slug: 'tre-punti-di-capacita-inutilizzata-e-l-inflazione-non-viene-da-li',
  categories: ['variazione-produzione-industriale', 'produzione-industriale', 'usa', 'oro'],
  title: 'Tre punti di capacità inutilizzata, e l’inflazione non viene da lì',
  kicker: 'Produzione industriale · Il margine che resta',
  dek:
    'La produzione industriale di luglio sale dello 0,2% contro attese di più 0,3%, ma giugno viene ' +
    'rivisto da più 0,1% a più 0,3%: il livello finisce sopra le attese, non sotto. Il numero che conta ' +
    'davvero è però l’altro, e questo archivio non lo aveva mai pubblicato: gli impianti americani ' +
    'lavorano al 76,3% della capacità, tre punti sotto la media storica.',
  publishedAt: '2026-08-18T16:25:00+02:00',
  author: AUTHOR,
  readingMinutes: 8,
  tags: [
    'Produzione industriale',
    'Utilizzo della capacità',
    'Revisioni',
    'Manifattura',
    'Beni di consumo',
  ],
  instruments: ['XAU/USD', 'Treasury', 'DXY', 'Brent'],
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sui due numeri, che arrivano dal rapporto mensile della banca centrale americana sulla ' +
    'produzione industriale. Alle 15:20 la produzione era stata registrata qui come dato di seconda ' +
    'mano, preso dal calendario economico di questo sito e non dal comunicato, con la riserva dichiarata ' +
    'per iscritto: adesso arriva dalla fonte, con il dettaglio per settore e con il grado di utilizzo ' +
    'accanto, e quella riserva decade. Media sulla lettura dell’impatto, per due ragioni che vanno dette ' +
    'insieme: poggia su una rilevazione a intervallo dell’oro fra 4.390 e 4.395 dollari, e soprattutto ' +
    'su una reazione che non c’è stata, cioè su un’assenza. Un’assenza si misura peggio di un movimento, ' +
    'e sopporta più di una spiegazione.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'bassa',
    horizon: 'medio',
    regime:
      'Il rapporto contiene due cose che tirano in versi opposti e nessuna delle due è grande. Da un ' +
      'lato il livello della produzione di luglio finisce sopra le attese, perché il decimo mancato ' +
      'sull’headline vale meno dei due decimi con cui è stato rivisto giugno: chi legge solo la ' +
      'variazione conclude che il dato è debole, chi legge il livello conclude il contrario. Dall’altro ' +
      'il grado di utilizzo degli impianti al 76,3% resta tre punti sotto la media storica del 79,4%, e ' +
      'toglie alla banca centrale un argomento restrittivo che nessuno stava usando ma che sarebbe ' +
      'diventato importante se il rincaro del barile fosse arrivato in un’industria già tirata. La forza ' +
      'è bassa e non media perché entrambe le sorprese valgono un decimo di punto e perché il mercato ' +
      'non le ha prezzate: nella mezz’ora successiva alla diffusione il decennale è rimasto attorno al ' +
      '4,74%, il cambio nella fascia 99,5-99,6 e il metallo fra 4.390 e 4.395 dollari.',
  },
  takeaways: [
    'La produzione industriale di luglio sale dello 0,2% sul mese contro attese di più 0,3%, ma il mese precedente viene rivisto da più 0,1% a più 0,3%: la revisione vale il doppio della sorpresa, quindi il livello di luglio è più alto di quello che ci si attendeva prima della diffusione. Su base annua la crescita è dell’1,1%.',
    'Il grado di utilizzo degli impianti è al 76,3% contro il 76,4% atteso, con il mese precedente rivisto al rialzo da 76,1% a 76,2%. È lo stesso schema del dato principale: sorpresa di un decimo verso il basso, revisione verso l’alto.',
    'Il 76,3% resta 3,1 punti sotto la media storica del 79,4%. Tradotto: il settore industriale americano ha margine da vendere, e un’eventuale accelerazione dei prezzi di agosto non potrà essere attribuita a strozzature della capacità interna.',
    'Dentro il rapporto la composizione dice più del totale: beni per le imprese a più 0,8% e difesa e spazio a più 1,8%, mentre i beni di consumo scendono dello 0,4%. Manifattura a più 0,2%, estrattivo a più 0,2%, servizi di pubblica utilità a più 0,5%.',
    'La reazione è mancata su tutti i mercati: XAU/USD resta fra 4.390 e 4.395 dollari a circa meno 0,5% sulla giornata, il decennale attorno al 4,74% e il trentennale fra il 5,32% e il 5,33%, il Dollar Index fra 99,5 e 99,6, il Brent sopra i 91 dollari. La probabilità di un rialzo a settembre resta fra il 34% e il 35%, contro circa il 48% di una settimana fa.',
  ],
  sources: [
    {
      outlet: 'Federal Reserve',
      title:
        'Produzione industriale e utilizzo della capacità, luglio 2026: produzione a più 0,2% sul mese e più 1,1% sull’anno, utilizzo degli impianti al 76,3%',
      at: '18 agosto 2026',
    },
    {
      outlet: 'Reuters',
      title:
        'Rilevazione su XAU/USD a 4.392,86 dollari nel pomeriggio del 18 agosto, con petrolio e rendimenti dei Treasury indicati come principali venti contrari',
      at: '18 agosto 2026',
    },
    {
      outlet: 'CME Group',
      title: 'Quotazione del Brent attorno a 90,95 dollari nelle rilevazioni del pomeriggio',
      at: '18 agosto 2026',
    },
    {
      outlet: 'National Association of Realtors',
      title:
        'Calendario ufficiale delle diffusioni: indice delle vendite immobiliari in corso di luglio previsto per le 16:00 italiane',
      at: '18 agosto 2026',
    },
  ],
  invalidation: [
    'Una revisione della produzione industriale di luglio sotto il più 0,2% odierno nella diffusione di metà settembre: toglierebbe l’argomento del livello, che è l’unica ragione per cui questa lettura si rifiuta di chiamare debole un dato uscito sotto il consenso.',
    'Un grado di utilizzo degli impianti che si porta sopra il 77,0% entro la diffusione di ottobre: ridurrebbe il margine descritto qui a poco più di due punti, e la misura su cui poggia l’argomento centrale perderebbe gran parte della sua ampiezza.',
    'Una produzione manifatturiera di agosto sopra il più 0,4% sul mese, cioè al doppio del passo di luglio: rimetterebbe in gioco l’ipotesi di un settore industriale che accelera, che è esattamente quella che il grado di utilizzo esclude oggi.',
    'Un indice dei prezzi alla produzione di agosto con i beni di consumo in aumento sul mese dopo il meno 0,4% di luglio: direbbe che la contrazione registrata oggi era offerta che si adegua a una domanda già servita e non domanda che si ferma, e il segno di questo rapporto cambierebbe.',
    'Verbali del FOMC di luglio, mercoledì 19 agosto, in cui la capacità produttiva o le strozzature dell’offerta compaiano fra le ragioni dichiarate a sostegno di un rialzo: direbbero che chi decide guarda un vincolo che questo rapporto non trova, e l’argomento centrale di questa analisi sarebbe smentito dalla fonte più autorevole disponibile.',
  ],
  nextEvent: {
    when: 'Mercoledì 19 agosto, 20:00 italiane',
    title: 'Verbali della riunione del FOMC del 28-29 luglio',
    detail:
      'Il rapporto di oggi dice che l’industria americana ha tre punti di margine e non genera pressione ' +
      'da capacità. I verbali dicono se chi decide la pensa allo stesso modo. La cosa da cercare non è ' +
      'il tono ma una parola: se fra le ragioni dei tre dissensi per un rialzo compaiono capacità, ' +
      'strozzature o vincoli di offerta, il margine misurato oggi non entra nella decisione e questa ' +
      'lettura vale meno di quanto sembri.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Alle 15:15 la banca centrale americana ha pubblicato il rapporto mensile sulla produzione ' +
        'industriale. L’analisi delle 15:20 ne aveva già registrato il numero principale, ma prendendolo ' +
        'dal calendario economico di questo sito invece che dal comunicato, e lo aveva scritto con la ' +
        'riserva del caso: un numero di seconda mano finché non lo si confronta con la fonte. Adesso il ' +
        'confronto è fatto, il numero regge, e insieme al numero arriva il resto del rapporto. È il ' +
        'resto a essere interessante, perché contiene una misura che questo archivio non aveva mai ' +
        'pubblicato in tre settimane passate a discutere di inflazione.',
    },
    {
      kind: 'heading',
      text: 'I due numeri, e le due revisioni',
      anchor: 'i-due-numeri',
    },
    {
      kind: 'stats',
      title: 'Produzione industriale e utilizzo della capacità, luglio 2026',
      caption:
        'Diffusione della Federal Reserve delle 15:15 italiane. Sono dati mensili riferiti a luglio, non quotazioni: il rapporto esce con circa tre settimane di ritardo sul mese che misura.',
      items: [
        {
          label: 'Produzione, mese',
          value: '+0,2%',
          tone: 'neutral',
          note: 'Contro più 0,3% atteso, ma con giugno rivisto da più 0,1% a più 0,3%: la revisione vale due decimi, la sorpresa uno',
        },
        {
          label: 'Produzione, anno',
          value: '+1,1%',
          tone: 'neutral',
          note: 'Rispetto a luglio 2025. La crescita continua, quindi il rapporto non contiene alcun segnale di contrazione',
        },
        {
          label: 'Utilizzo capacità',
          value: '76,3%',
          tone: 'bull',
          note: 'Contro 76,4% atteso, con il mese precedente rivisto da 76,1% a 76,2%: stesso schema del dato principale',
        },
        {
          label: 'Media storica',
          value: '79,4%',
          tone: 'bull',
          note: 'Il riferimento di lungo periodo della stessa serie: il livello di luglio resta 3,1 punti sotto',
        },
        {
          label: 'Manifattura',
          value: '+0,2%',
          tone: 'neutral',
          note: 'Sul mese, in linea con il totale: la parte che risponde più direttamente al costo del denaro non accelera né frena',
        },
        {
          label: 'Estrattivo, utilities',
          value: '+0,2% / +0,5%',
          tone: 'neutral',
          note: 'I servizi di pubblica utilità sono la componente più forte del rapporto dopo la difesa, ed è anche quella che dipende di più dal clima',
        },
      ],
    },
    {
      kind: 'note',
      text:
        'Le due diffusioni hanno la stessa forma, ed è quella che decide come vanno lette. In entrambe ' +
        'il valore di luglio manca il consenso di un decimo, e in entrambe il mese precedente viene ' +
        'rivisto al rialzo di uno o due decimi. Chi guarda la variazione trova due sorprese negative; ' +
        'chi guarda il livello trova che luglio si colloca sopra il punto in cui lo si attendeva, perché ' +
        'parte da un giugno più alto di quello che era stato pubblicato. Le due letture non valgono ' +
        'uguale: la variazione misura il rumore di un mese, il livello misura dove si trova la ' +
        'produzione. Ed è per questo che chiamare morbido questo rapporto è una scorciatoia.',
    },
    {
      kind: 'heading',
      text: 'Il margine che nessuno guarda',
      anchor: 'il-margine',
    },
    {
      kind: 'paragraph',
      text:
        'Il grado di utilizzo della capacità produttiva dice quanta parte degli impianti esistenti sta ' +
        'lavorando. È una misura noiosa quando l’economia è ferma e diventa la misura decisiva quando ' +
        'arriva uno shock di costi, perché risponde a una domanda sola: se le materie prime rincarano, ' +
        'l’industria può assorbire il colpo aumentando i volumi oppure deve girarlo sul prezzo finale? ' +
        'Con gli impianti vicini alla saturazione la risposta è la seconda, e lo shock diventa ' +
        'inflazione. Con 3,1 punti di margine sulla media storica la risposta è la prima, e lo shock ' +
        'resta un costo che comprime i margini di chi produce prima di arrivare a chi compra.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Perché questo numero conta oggi e non il mese scorso',
      text:
        'Fino a due settimane fa questa misura sarebbe stata un dettaglio. Adesso non lo è, perché la ' +
        'domanda aperta di tutto l’archivio è una sola: il Brent sopra i 90 dollari renderà i dati ' +
        'd’inflazione di agosto diversi da quelli benigni di luglio? Il grado di utilizzo non risponde ' +
        'a quella domanda, ma ne toglie una metà. Dice che se l’accelerazione arriverà non verrà da ' +
        'un’industria che non riesce a stare dietro agli ordini, perché quell’industria ha tre punti di ' +
        'capacità inutilizzata. Verrà dal barile, cioè da un canale su cui una banca centrale può fare ' +
        'poco e contro cui alzare i tassi è la risposta meno efficace che esista.',
    },
    {
      kind: 'heading',
      text: 'Dentro il rapporto',
      anchor: 'dentro-il-rapporto',
    },
    {
      kind: 'stats',
      title: 'Le componenti di luglio, variazione sul mese',
      caption:
        'Dettaglio per destinazione economica del rapporto della Federal Reserve. Il totale a più 0,2% è una media che nasconde uno scarto di oltre due punti fra la voce più forte e la più debole.',
      items: [
        {
          label: 'Difesa e spazio',
          value: '+1,8%',
          tone: 'neutral',
          note: 'La componente più forte del rapporto, e la meno legata al ciclo: dipende da commesse pubbliche decise mesi prima',
        },
        {
          label: 'Beni per le imprese',
          value: '+0,8%',
          tone: 'bear',
          note: 'Quattro volte il totale. È la voce che anticipa gli investimenti, e la sua forza è l’argomento più solido contro una lettura debole del rapporto',
        },
        {
          label: 'Beni di consumo',
          value: '−0,4%',
          tone: 'bull',
          note: 'Nel verso opposto, e nella stessa settimana in cui le vendite al dettaglio di luglio sono uscite a meno 0,6%: due misure diverse dello stesso rallentamento',
        },
      ],
    },
    {
      kind: 'paragraph',
      text:
        'La composizione racconta un’industria che produce per le imprese e per lo Stato mentre smette ' +
        'di produrre per le famiglie. È lo stesso spacco che questo archivio ha già visto due volte in ' +
        'quattro giorni: vendite al dettaglio di luglio a meno 0,6% contro attese di più 0,1%, avvii di ' +
        'costruzione a meno 12,4% sul mese con i permessi edilizi a più 5,0%. Ogni volta la parte che ' +
        'riguarda chi compra cede e la parte che riguarda chi investe tiene. Per la banca centrale è la ' +
        'configurazione più scomoda, perché il canale su cui i tassi mordono sta già mordendo mentre ' +
        'quello su cui non mordono continua a correre.',
    },
    {
      kind: 'heading',
      text: 'La reazione, di nuovo assente',
      anchor: 'la-reazione',
    },
    {
      kind: 'stats',
      title: 'La fotografia delle 16:15',
      caption:
        'Rilevazioni riportate nel controllo del pomeriggio, alcune date a intervallo. Sono riferimenti per rendere verificabile il ragionamento, non quotazioni in tempo reale.',
      items: [
        {
          label: 'XAU/USD',
          value: '≈ 4.390-4.395 $',
          tone: 'bear',
          note: 'Reuters lo rileva a 4.392,86, circa meno 0,5% sulla giornata e sotto i 4.400 per la seconda seduta',
        },
        {
          label: 'Treasury 10 anni',
          value: '≈ 4,74%',
          tone: 'bear',
          note: 'Invariato rispetto alla rilevazione precedente alla diffusione: il dato industriale non ha spostato la curva',
        },
        {
          label: 'Treasury 30 anni',
          value: '5,32-5,33%',
          tone: 'bear',
          note: 'Ancora sul massimo da diciannove anni. È la scadenza dove la tensione non rientra, e non l’ha toccata nemmeno questa diffusione',
        },
        {
          label: 'Dollar Index',
          value: '99,5-99,6',
          tone: 'neutral',
          note: 'Nessuna accelerazione del cambio dopo il dato, in nessuno dei due versi',
        },
        {
          label: 'Rialzo a settembre',
          value: '34-35%',
          tone: 'bull',
          note: 'Contro circa il 48% di una settimana fa: la riprezzatura è avvenuta, ma prima di oggi e non per questo rapporto',
        },
        {
          label: 'Brent',
          value: '> 91 $',
          tone: 'bear',
          note: 'CME lo quota attorno a 90,95, altre rilevazioni intraday fra 91,0 e 91,2. Nessuna reazione autonoma al dato: il greggio guarda Hormuz',
        },
      ],
    },
    {
      kind: 'balance',
      title: 'Che cosa il rapporto toglie, che cosa non tocca',
      left: {
        title: 'Toglie',
        tone: 'bull',
        items: [
          'L’argomento della capacità: con il 76,3% e 3,1 punti di margine sulla media storica, l’industria non è il posto da cui può partire un’accelerazione dei prezzi.',
          'Una parte dell’argomento dei consumi: i beni di consumo scendono dello 0,4% sul mese, quarta misura consecutiva a dire che la domanda delle famiglie sta rallentando.',
          'La riserva dichiarata alle 15:20 su un numero preso dal calendario invece che dal comunicato: adesso viene dalla fonte, con il dettaglio per settore accanto.',
        ],
      },
      right: {
        title: 'Non tocca',
        tone: 'bear',
        items: [
          'Il livello: giugno rivisto da più 0,1% a più 0,3% mette la produzione di luglio sopra le attese, non sotto. Il dato non è debole, è misto.',
          'Il canale che sta muovendo il prezzo dell’oro, cioè il costo-opportunità: il decennale non si è spostato e il trentennale è rimasto sul massimo da diciannove anni.',
          'Il mese misurato: come tutte le diffusioni di questa finestra, il rapporto fotografa luglio, cioè il mese prima del barile sopra i 90 dollari.',
          'I beni per le imprese a più 0,8% e la difesa a più 1,8%, che sono il contrappeso interno al rapporto e il motivo per cui non lo si può leggere come un segnale di rallentamento generale.',
        ],
      },
    },
    {
      kind: 'note',
      text:
        'Alle 16:00 era attesa anche la pubblicazione dell’indice delle vendite immobiliari in corso di ' +
        'luglio, e il calendario ufficiale dell’associazione degli agenti immobiliari americani ne ' +
        'conferma data e orario. Al momento di questo controllo il numero non risulta ancora ' +
        'verificabile né sulla pagina dell’associazione né sui calendari finanziari, che continuano a ' +
        'mostrare il campo vuoto. Il consenso disponibile era fra più 0,3% e più 0,6% sul mese dopo il ' +
        'meno 5,4% di giugno. Resta quindi in attesa di conferma ufficiale, e qui non viene stimato.',
    },
    {
      kind: 'note',
      text:
        'I livelli citati in questa analisi — i 4.400 dollari sull’oro, i 91 sul Brent, il 77,0% sul ' +
        'grado di utilizzo — servono a rendere verificabile il ragionamento e a fissare le condizioni ' +
        'che lo renderebbero sbagliato. Non sono obiettivi né previsioni di prezzo.',
    },
    {
      kind: 'scenarios',
      title: 'Che cosa guardare adesso',
      items: [
        {
          label: 'I verbali di mercoledì',
          tone: 'warn',
          text:
            'Interessa una parola sola, e non è il tono generale: se fra le ragioni dei tre dissensi ' +
            'per un rialzo del 29 luglio compaiono capacità, strozzature o vincoli di offerta, allora ' +
            'chi decide guarda un vincolo che il rapporto di oggi non trova, e l’argomento centrale di ' +
            'questa analisi vale meno. Se non compaiono, il margine misurato oggi diventa un ostacolo ' +
            'in più al caso restrittivo.',
        },
        {
          label: 'La produzione di agosto, a metà settembre',
          tone: 'neutral',
          text:
            'È la prima diffusione di questa serie che conterrà il barile sopra i 90 dollari, e la sola ' +
            'che possa dire se il rincaro entra nei volumi o nei margini. Il numero da guardare non è ' +
            'la variazione della produzione ma di nuovo il grado di utilizzo: se sale mentre i costi ' +
            'salgono, l’industria sta assorbendo; se scende, sta rinunciando a produrre, ed è un caso ' +
            'peggiore di quello che il solo dato sui prezzi mostrerebbe.',
        },
        {
          label: 'La composizione, non il totale',
          tone: 'bull',
          text:
            'Beni per le imprese a più 0,8% contro beni di consumo a meno 0,4% è uno scarto di 1,2 ' +
            'punti dentro lo stesso mese. Finché resta così ampio, ogni lettura fondata sul totale a ' +
            'più 0,2% sta usando una media fra due economie che si muovono in versi opposti — e la ' +
            'media nasconde esattamente la parte che i tassi alti stanno fermando.',
        },
      ],
    },
  ],
};
