/**
 * sussidi-e-produttivita-un-punto-base-di-reazione
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const sussidiEProduttivita: Article = {
  slug: 'sussidi-e-produttivita-un-punto-base-di-reazione',
  categories: ['richieste-iniziali-sussidi', 'produttivita', 'oro', 'usa'],
  title: 'Sussidi e produttività: un punto base di reazione',
  kicker: 'Lavoro e produttività · L’attesa prima del dato',
  dek:
    'Due rilevazioni statunitensi nello stesso pomeriggio, entrambe leggibili, e il decennale si muove di un punto ' +
    'base. Il mercato non sta ignorando i dati: ne sta aspettando un altro. Intanto il Brent è tornato sopra gli 80 ' +
    'dollari, cioè sopra la soglia che questo archivio aveva messo ieri mattina.',
  publishedAt: '2026-08-06T14:55:00+02:00',
  author: AUTHOR,
  readingMinutes: 5,
  tags: ['Sussidi', 'Produttività', 'Costo del lavoro', 'NFP', 'Reazione al dato'],
  instruments: ['XAU/USD', 'Treasury', 'Brent', 'WTI'],
  horizons: ['breve', 'medio', 'lungo'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'I due dati si compensano — meno licenziamenti da una parte, produttività forte e costo del lavoro contenuto ' +
      'dall’altra — e il mercato li ha lasciati passare in attesa del rapporto occupazionale. La forza scende però ' +
      'da media a bassa per una ragione precisa: il Brent è tornato sopra gli 80 dollari, che è la soglia di ' +
      'logoramento fissata ieri mattina, e con il greggio che risale la catena che sosteneva il metallo comincia a ' +
      'lavorare al contrario.',
    horizon: 'breve',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti: sono due rilevazioni pubblicate, con attese dichiarate e revisioni indicate, e la reazione dei ' +
    'prezzi è osservata. Media sulla lettura della produttività, perché una serie trimestrale volatile e soggetta a ' +
    'revisione non fa una tendenza con una lettura sola. Bassa, invece, sulla previsione di che cosa farà il ' +
    'mercato domani: l’unica cosa che questa analisi può dire con onestà è che finora non ha voluto decidere.',
  takeaways: [
    'Le richieste iniziali di sussidio sono salite appena a 199.000 da 198.000 riviste, sotto le 202.000-204.000 attese: i licenziamenti restano bassi, ed è un dato leggermente favorevole al dollaro e quindi sfavorevole all’oro.',
    'Le richieste continuative sono però aumentate da 1,777 a 1,801 milioni: chi perde il lavoro fatica di più a ritrovarlo, che è la metà del dato che va nella direzione opposta.',
    'La produttività statunitense è cresciuta dell’1,4% annualizzato contro il +0,7% previsto, con il costo del lavoro per unità prodotta a +1,3%: è la combinazione che permette ai salari di salire senza finire nei prezzi.',
    'La reazione è stata di un punto base: il decennale da circa 4,65% a 4,64%, future azionari quasi invariati, XAU/USD sempre intorno a 4.258 dollari.',
    'Il Brent è tornato sopra gli 80 dollari e il WTI vicino a 76, perché manca ancora la conferma definitiva dell’intesa Iran-Oman: è la soglia di logoramento che questo archivio aveva fissato ieri mattina, ed è stata superata in ventiquattro ore.',
  ],
  invalidation: [
    'Un rapporto occupazionale di domani nettamente sopra le attese di circa 80.000 posti, o salari orari in riaccelerazione nello stesso rapporto.',
    'Un Brent sopra gli 82 dollari: sopra quel livello l’effetto inflazionistico del greggio pesa più della domanda di rifugio.',
    'Il rendimento del decennale sopra il 4,70%, o un Dollar Index sopra l’area 100-100,20.',
    'XAU/USD sotto i 4.200 dollari.',
    'Prima di tutte queste: un decennale che torna sopra il 4,68% con l’oro ancora sopra i 4.250, che segnalerebbe il logoramento senza aspettare la rottura.',
  ],
  nextEvent: {
    when: 'Domani alle 14:30',
    title: 'Rapporto occupazionale statunitense',
    detail:
      'È il dato che questo archivio indica come decisivo da tre pubblicazioni consecutive, e la reazione di oggi è il mercato che dice la stessa cosa. Attese intorno a 80.000 posti complessivi. La domanda utile non sarà se il numero è forte o debole, ma se il prezzo resta dove il numero lo spinge: quello che oggi non si è potuto misurare, perché il prezzo non si è mosso affatto, domani sarà leggibile.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Due rilevazioni statunitensi nello stesso pomeriggio. Le richieste iniziali di sussidio sono salite appena a 199.000 da 198.000 riviste, sotto le 202.000-204.000 attese: pochi licenziamenti, un dato leggermente favorevole al dollaro. La produttività è cresciuta dell’1,4% annualizzato contro il +0,7% previsto, con il costo del lavoro per unità prodotta fermo a +1,3%. Il rendimento decennale, dopo entrambe, si è mosso di un punto base.',
    },
    {
      kind: 'stats',
      title: 'I numeri del pomeriggio',
      caption: 'Valori citati al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Sussidi iniziali',
          value: '199.000',
          tone: 'bear',
          note: 'Da 198.000 riviste, contro 202.000-204.000 attese: licenziamenti ancora bassi',
        },
        {
          label: 'Sussidi continuativi',
          value: '1,801 mln',
          tone: 'bull',
          note: 'Da 1,777 milioni: chi esce dal lavoro fatica di più a rientrarci',
        },
        {
          label: 'Produttività',
          value: '+1,4%',
          tone: 'bull',
          note: 'Annualizzata, contro un +0,7% previsto',
        },
        {
          label: 'Costo del lavoro per unità',
          value: '+1,3%',
          tone: 'bull',
          note: 'Sotto la crescita della produttività: è il punto che conta',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Il dato che nessuno ha guardato',
      anchor: 'produttivita',
    },
    {
      kind: 'paragraph',
      text: 'Di questi quattro numeri, quello che merita più attenzione di quanta ne abbia ricevuta è l’ultimo, ed è anche il meno spettacolare. Se in un trimestre si produce l’1,4% in più per ora lavorata e quell’ora costa l’1,3% in più a parità di prodotto, la differenza fra le due cifre è lo spazio in cui i salari possono salire senza che qualcuno debba alzare un prezzo. È l’unico modo in cui l’inflazione scende senza che il mercato del lavoro si rompa.',
    },
    {
      kind: 'paragraph',
      text: 'Vale la pena dire perché conta proprio adesso. Da una settimana questo archivio registra membri della Federal Reserve che chiedono di stringere perché temono che l’inflazione si radichi nei salari — è testualmente l’argomento della governatrice Cook. Una produttività che cresce più del costo del lavoro per unità è la smentita di quel timore, non nella retorica ma nella contabilità. E arriva da una serie trimestrale, quindi non agisce sulla seduta: agisce sul pavimento, e su un orizzonte di mesi.',
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Una lettura sola non è una tendenza',
      text: 'Detto questo, la produttività è fra le serie più volatili e più riviste del quadro macroeconomico americano: un trimestre al doppio delle attese può essere un cambio di regime o un rimbalzo che la revisione successiva riporta indietro. Il modo giusto di trattarlo è come una prima evidenza da mettere accanto alle successive, non come una conclusione — la stessa disciplina con cui qui sono state trattate le coordinate concordate a Hormuz. Il metodo è descritto in /metodologia.',
    },
    {
      kind: 'heading',
      text: 'Le due metà del dato sul lavoro',
      anchor: 'due-meta',
    },
    {
      kind: 'balance',
      title: 'Sussidi iniziali contro sussidi continuativi',
      left: {
        title: 'Chi perde il lavoro',
        tone: 'bear',
        items: [
          '199.000 richieste iniziali, sotto le 202.000-204.000 attese.',
          'I licenziamenti restano bassi: le imprese non stanno tagliando.',
          'È la metà favorevole al dollaro, e quindi contraria all’oro.',
        ],
      },
      right: {
        title: 'Chi il lavoro lo cerca',
        tone: 'bull',
        items: [
          'Le richieste continuative salgono da 1,777 a 1,801 milioni.',
          'Chi esce dal lavoro impiega più tempo a rientrarci: le assunzioni rallentano.',
          'È coerente con l’ADP a 44.000 e con il JOLTS più fiacco delle attese.',
        ],
      },
    },
    {
      kind: 'paragraph',
      text: 'Le due metà raccontano lo stesso mercato del lavoro visto da due lati: non si licenzia, ma non si assume. È esattamente il raffreddamento graduale descritto qui lunedì dopo il JOLTS e mercoledì dopo l’ADP, e la coerenza fra tre rilevazioni diverse conta più di ciascuna presa da sola.',
    },
    {
      kind: 'heading',
      text: 'Un punto base',
      anchor: 'un-punto-base',
    },
    {
      kind: 'paragraph',
      text: 'La reazione è la parte più informativa della giornata, ed è quasi nulla: il decennale da circa 4,65% a 4,64%, i future azionari quasi invariati, l’oro sempre intorno a 4.258 dollari. Un dato migliore delle attese sui sussidi avrebbe dovuto spingere il dollaro in su e il metallo in giù, e non è successo niente.',
    },
    {
      kind: 'paragraph',
      text: 'Quello che si guarda in casi come questo non è il numero ma se il prezzo resta dove il numero lo ha spinto: un dato favorevole al dollaro che non regge dice che la notizia era già scontata e che la direzione di fondo è un’altra. Oggi però quel controllo non si può fare, perché il prezzo non si è spostato abbastanza da poterci tornare sopra. È l’altra faccia della stessa moneta: il mercato non ha rifiutato il dato, lo ha lasciato passare.',
    },
    {
      kind: 'paragraph',
      text: 'La ragione più semplice è anche la più probabile: c’è una sola domanda aperta, e questi non erano i numeri che la chiudono. Il rapporto occupazionale di domani è indicato come decisivo dalle ultime tre analisi pubblicate qui — dopo l’ADP, dopo l’intervento di Cook e ieri mattina sul Golfo — e il mercato oggi ha dato loro ragione nel modo più chiaro possibile, cioè non muovendosi.',
    },
    {
      kind: 'heading',
      text: 'Il Brent è tornato sopra gli 80',
      anchor: 'brent-80',
    },
    {
      kind: 'paragraph',
      text: 'C’è invece una cosa che si è mossa, ed è quella che cambia la forza della lettura. Il Brent è risalito sopra gli 80 dollari e il WTI verso i 76, perché la conferma definitiva dell’intesa Iran-Oman continua a non arrivare. Ieri mattina, con il Brent a 79,08, qui era stata messa una soglia a 80 dollari con una motivazione esplicita: il ritorno sopra quel livello avrebbe detto che il premio di rischio ricomincia a essere pagato.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'La soglia di logoramento ha funzionato',
      text: 'Vale la pena registrarlo, perché è la prima volta che succede. Le condizioni di invalidazione di questo archivio hanno due tacche: una dove la lettura muore e una, prima, dove comincia a logorarsi. Quella di invalidazione sul greggio è a 82 dollari e non è stata toccata; quella di logoramento era a 80 ed è stata superata in ventiquattro ore. La conseguenza non è cambiare direzione — sarebbe una reazione eccessiva a tre dollari di greggio — ma abbassare la forza da media a bassa. È esattamente il movimento graduato per cui la seconda tacca era stata aggiunta.',
    },
    {
      kind: 'scenarios',
      title: 'Effetto probabile',
      caption: 'Effetti attesi, da confrontare con i prezzi.',
      items: [
        {
          label: 'Oro',
          tone: 'warn',
          text: 'In consolidamento dopo l’allungo: sostenuto sopra i 4.200-4.210, ma senza una spinta nuova fino al dato di domani.',
        },
        {
          label: 'Rendimenti USA',
          tone: 'warn',
          text: 'La discesa è frenata dal greggio che risale: il 4,64% è più un equilibrio in attesa che una direzione.',
        },
        {
          label: 'Petrolio',
          tone: 'bear',
          text: 'Di nuovo sopra gli 80 dollari finché l’intesa resta senza conferma: è l’elemento che oggi lavora contro il metallo.',
        },
        {
          label: 'Dollaro',
          tone: 'warn',
          text: 'Non ha comprato il dato migliore delle attese sui sussidi, il che è di per sé un’informazione.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'L’impostazione su XAU/USD resta inclinata al rialzo ma la forza scende da media a bassa. Non per i dati di oggi, che si compensano e che il mercato ha lasciato passare, ma per il greggio: la catena che ha retto il metallo per quattro sedute — petrolio giù, inflazione attesa giù, rendimenti e dollaro giù — ha il primo anello che si è girato. Finché il Brent resta fra gli 80 e gli 82 dollari è un logoramento e non una rottura, ed è per questo che la direzione non cambia.',
    },
    {
      kind: 'paragraph',
      text: 'Sull’orizzonte lungo, invece, oggi è arrivato qualcosa di favorevole che nessuno ha prezzato: se la produttività cresce più del costo del lavoro per unità, l’argomento con cui la Federal Reserve giustifica il rischio di un rialzo — l’inflazione che si radica nei salari — perde la sua base contabile. È una lettura sola e va confermata, ma è il primo dato in una settimana che agisce su quel piano invece che sulla seduta.',
    },
    {
      kind: 'note',
      text: 'Le cifre citate sono quelle riportate nel testo di partenza, senza attribuzione a una testata: le rilevazioni su sussidi, produttività e costo del lavoro sono soggette a revisione nelle settimane successive. I livelli di prezzo servono a rendere verificabile il ragionamento e non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};
