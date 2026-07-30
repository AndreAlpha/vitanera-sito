import { Article } from '../models/article.model';

/**
 * Archivio delle analisi pubblicate.
 *
 * I testi riportano opinioni personali dell'autore basate su informazioni
 * disponibili al momento della redazione. Non sono consulenza finanziaria e non
 * vanno usati come base per decisioni di investimento (vedi /avvertenze).
 */

const AUTHOR = 'A cura di Vitanera';

/* ========================================================================== */
/* 1 — Fondamentali                                                           */
/* ========================================================================== */

const fedFerma: Article = {
  slug: 'fed-ferma-quadro-piu-instabile-per-oro-e-mercati',
  category: 'fondamentali',
  featured: true,
  kicker: 'FOMC · Decisione sui tassi',
  title: 'Fed ferma, ma quadro più instabile per oro e mercati',
  dek:
    'La Federal Reserve ha mantenuto i tassi al 3,50–3,75%, con tre membri favorevoli a un rialzo, mentre la nuova ' +
    'escalation tra Stati Uniti e Iran ha riportato il petrolio sotto pressione. È una combinazione ambigua ma ' +
    'rilevante per XAU/USD.',
  publishedAt: '2026-07-30T08:40:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: ['Fed', 'FOMC', 'Tassi', 'PCE', 'Geopolitica', 'Petrolio'],
  instruments: ['XAU/USD', 'DXY', 'US10Y', 'Brent', 'WTI'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    regime: 'Sollievo per il mancato rialzo, senza conferma di un movimento direzionale.',
  },
  certainty: 'media',
  certaintyNote:
    'La decisione della Fed, il dissenso interno e la ripresa delle ostilità sono fatti confermati. La direzione ' +
    'duratura di XAU/USD è però ancora incerta, perché il mercato deve assorbire i dati PCE e PIL di oggi.',
  takeaways: [
    'Tassi invariati al 3,50–3,75% con una votazione di 9 a 3: tre membri erano favorevoli a un rialzo.',
    'L’oro è salito fino a circa 4.116 dollari per poi rientrare verso 4.060: il primo impulso è stato in parte riassorbito.',
    'La probabilità di un rialzo a settembre scende da circa l’81% al 64–65%, ma resta elevata.',
    'Il Brent risale intorno a 91,80 dollari con la ripresa degli attacchi USA-Iran; i flussi però non risultano interrotti.',
    'Il quadro diventa direzionale soltanto dopo i dati PCE e PIL attesi oggi alle 14:30 italiane.',
  ],
  nextEvent: {
    when: '30 luglio · 14:30 ora italiana',
    title: 'PCE, PIL USA e richieste di sussidio',
    detail:
      'Uno scostamento anche modesto potrebbe produrre un movimento brusco, perché arriva il giorno successivo a una Fed divisa.',
  },
  invalidation: [
    'Un cessate il fuoco verificabile o una normalizzazione dei flussi petroliferi.',
    'Un PCE molto più debole delle attese, che renderebbe nettamente più rialzista l’oro.',
    'Un PCE core sorprendentemente elevato.',
    'Un rialzo simultaneo e persistente di DXY e rendimento reale USA.',
    'Una rottura geopolitica concreta dei flussi attraverso Hormuz o Bab el-Mandeb, che renderebbe il rapporto tra petrolio, inflazione e oro molto meno lineare.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'La Federal Reserve ha mantenuto i tassi al 3,50–3,75%, con tre membri favorevoli a un rialzo, mentre la nuova ' +
        'escalation tra Stati Uniti e Iran ha riportato il petrolio sotto pressione. È una combinazione ambigua ma ' +
        'rilevante per XAU/USD.',
    },
    { kind: 'heading', text: 'Fatti confermati', anchor: 'fatti-confermati' },
    {
      kind: 'paragraph',
      text:
        'La Fed ha lasciato invariato il costo del denaro con una votazione di 9 a 3. Il dissenso di tre membri verso ' +
        'un aumento segnala che una parte consistente del FOMC considera ancora l’inflazione troppo elevata.',
    },
    {
      kind: 'list',
      title: 'Dopo la decisione',
      items: [
        'L’oro è salito inizialmente di circa il 2%, toccando area 4.116 dollari, perché il mercato aveva temuto un rialzo immediato.',
        'Successivamente è tornato verso 4.060 dollari: il primo impulso rialzista è stato quindi in parte riassorbito.',
        'Le probabilità attribuite dal mercato a un rialzo a settembre sono scese da circa l’81% al 64–65%, ma restano comunque elevate.',
      ],
    },
    {
      kind: 'stats',
      title: 'Riferimenti citati nell’analisi',
      caption:
        'Valori riportati nel testo al momento della redazione. Non sono quotazioni in tempo reale né dati forniti a fini operativi.',
      items: [
        { label: 'Tassi Fed', value: '3,50–3,75%', tone: 'neutral', note: 'Invariati' },
        {
          label: 'Votazione FOMC',
          value: '9 – 3',
          tone: 'warn',
          note: 'Tre dissensi verso un rialzo',
        },
        { label: 'XAU/USD', value: '4.116 → 4.060', tone: 'gold', note: 'Massimo e rientro' },
        { label: 'Rialzo a settembre', value: '64–65%', tone: 'bear', note: 'Da circa 81%' },
        { label: 'Brent', value: '≈ 91,80 $', tone: 'bull', note: 'In risalita' },
      ],
    },
    {
      kind: 'paragraph',
      text:
        'Nel frattempo gli attacchi tra Stati Uniti e Iran sono ripresi. Brent e WTI sono risaliti, con il Brent ' +
        'intorno a 91,80 dollari, mentre restano sotto osservazione lo Stretto di Hormuz e Bab el-Mandeb. Per ora il ' +
        'petrolio continua a transitare: non c’è ancora la conferma di un’interruzione strutturale dell’offerta.',
    },
    { kind: 'heading', text: 'Perché conta per XAU/USD', anchor: 'perche-conta' },
    { kind: 'paragraph', text: 'Il mercato sta affrontando due forze opposte.' },
    {
      kind: 'balance',
      title: 'Le due forze in campo',
      left: {
        title: 'Favorevoli all’oro',
        tone: 'bull',
        items: [
          'Nessun rialzo immediato della Fed.',
          'Dollaro e rendimenti a breve inizialmente più deboli.',
          'Rischio geopolitico in aumento.',
          'Timori sulla stabilità dei mercati azionari e obbligazionari.',
        ],
      },
      right: {
        title: 'Sfavorevoli all’oro',
        tone: 'bear',
        items: [
          'Tre dissidenti favorevoli a tassi più alti.',
          'Probabilità ancora consistente di un rialzo a settembre.',
          'Petrolio elevato, che può mantenere alta l’inflazione.',
          'Rischio di ripresa dei rendimenti reali USA e del dollaro.',
        ],
      },
    },
    {
      kind: 'paragraph',
      text:
        'La reazione dell’oro dice quindi una cosa precisa: il mercato ha comprato il sollievo per il mancato rialzo, ' +
        'ma non si fida ancora di costruire un movimento rialzista lineare.',
    },
    { kind: 'heading', text: 'Effetto probabile', anchor: 'effetto-probabile' },
    {
      kind: 'scenarios',
      title: 'Immediato, prima dei dati USA',
      caption: 'Lettura per singolo mercato. Descrizione di ipotesi, non indicazioni operative.',
      items: [
        {
          label: 'XAU/USD',
          tone: 'gold',
          text:
            'Neutrale-rialzista ma molto fragile. La geopolitica e l’assenza di un rialzo Fed sostengono l’oro, ma ' +
            'sopra il mercato pesa il rischio che inflazione e rendimenti tornino a salire. Il rientro da 4.116 verso ' +
            '4.060 mostra prese di profitto e assenza, per ora, di una conferma rialzista definitiva.',
        },
        {
          label: 'Petrolio',
          tone: 'bull',
          text:
            'Rialzista finché proseguono gli attacchi, ma senza un blocco effettivo delle esportazioni il rialzo ' +
            'potrebbe restare molto volatile.',
        },
        {
          label: 'Dollaro',
          tone: 'neutral',
          text:
            'Neutrale o debole nel brevissimo periodo, ma potrebbe rafforzarsi rapidamente con dati USA superiori ' +
            'alle attese.',
        },
        {
          label: 'Treasury',
          tone: 'warn',
          text:
            'Possibile nuova divergenza tra rendimenti brevi e lunghi. I tassi a breve possono scendere se ' +
            'diminuisce il rischio di un rialzo immediato; quelli lunghi possono invece restare elevati per ' +
            'inflazione, petrolio e premio per il rischio fiscale.',
        },
      ],
    },
    { kind: 'heading', text: 'Nei prossimi giorni', anchor: 'prossimi-giorni' },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Il quadro diventa rialzista per l’oro soltanto qualora',
      items: [
        'L’inflazione USA rallenti più del previsto.',
        'Il mercato riduca ulteriormente la probabilità di un rialzo Fed.',
        'DXY e rendimento reale USA scendano.',
        'La tensione geopolitica resti elevata senza provocare un nuovo shock inflazionistico incontrollato.',
      ],
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Diventa invece ribassista per l’oro qualora',
      text: 'Petrolio e inflazione convincano il mercato che la Fed dovrà alzare i tassi a settembre.',
    },
    { kind: 'heading', text: 'Prossimo evento decisivo', anchor: 'prossimo-evento' },
    {
      kind: 'paragraph',
      text: 'Oggi, 30 luglio alle 14:30 ora italiana, sono attesi PCE, PIL USA e richieste di sussidio.',
    },
    {
      kind: 'list',
      title: 'Le attese principali indicano',
      items: [
        'PCE headline mensile circa −0,1%.',
        'PCE core mensile +0,2%.',
        'PCE core annuale circa 3,3%.',
        'Rallentamento del PCE headline annuale rispetto al 4,1% di maggio.',
      ],
    },
    {
      kind: 'paragraph',
      text:
        'Uno scostamento anche modesto potrebbe produrre un movimento brusco, perché arriva il giorno successivo a ' +
        'una Fed divisa.',
    },
    { kind: 'heading', text: 'Scenari operativi macro', anchor: 'scenari-macro' },
    {
      kind: 'scenarios',
      caption:
        'Ipotesi condizionate all’esito dei dati. Non sono previsioni affidabili e non rappresentano indicazioni di acquisto o vendita.',
      items: [
        {
          label: 'PCE inferiore alle attese',
          tone: 'bull',
          text: 'Oro rialzista, dollaro e rendimenti in calo; diminuiscono le probabilità di rialzo Fed.',
        },
        {
          label: 'PCE in linea',
          tone: 'neutral',
          text: 'Oro probabilmente laterale e guidato da petrolio, geopolitica e livelli tecnici.',
        },
        {
          label: 'PCE core superiore alle attese o PIL molto forte',
          tone: 'bear',
          text:
            'Oro inizialmente ribassista, dollaro e rendimento USA a 2 anni in rialzo; tornano a crescere le ' +
            'probabilità di una stretta a settembre.',
        },
      ],
    },
    { kind: 'heading', text: 'Livello di certezza', anchor: 'livello-certezza' },
    {
      kind: 'paragraph',
      text:
        'Certezza media. La decisione Fed, il dissenso interno e la ripresa delle ostilità sono fatti confermati. La ' +
        'direzione duratura di XAU/USD è però ancora incerta perché il mercato deve assorbire i dati PCE e PIL di oggi.',
    },
  ],
};

/* ========================================================================== */
/* 2 — Correlazioni                                                           */
/* ========================================================================== */

const regimeOstile: Article = {
  slug: 'regime-piu-ostile-alloro-ma-non-ancora-pienamente-ribassista',
  category: 'correlazioni',
  featured: true,
  kicker: 'Correlazioni · Dollaro, rendimenti, energia',
  title: 'Regime più ostile all’oro, ma non ancora pienamente ribassista',
  dek:
    'Petrolio, dollaro e rendimenti Treasury si muovono insieme verso l’alto. L’oro però non cede in proporzione: ' +
    'la domanda di protezione geopolitica sta assorbendo, almeno per ora, la pressione monetaria.',
  publishedAt: '2026-07-30T11:10:00+02:00',
  author: AUTHOR,
  readingMinutes: 5,
  tags: ['Correlazioni', 'Treasury', 'Dollaro', 'Petrolio', 'Metalli'],
  instruments: ['XAU/USD', 'DXY', 'US02Y', 'US10Y', 'US30Y', 'Brent', 'WTI', 'XAG/USD', 'XPT/USD'],
  horizons: ['breve'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'media',
    regime: 'Conflitto tra pressione monetaria ribassista e domanda geopolitica difensiva.',
  },
  certainty: 'media',
  certaintyNote:
    'La lettura si basa sugli ultimi prezzi e aggiornamenti affidabili disponibili al momento della redazione.',
  takeaways: [
    'Il cambiamento rilevante è l’allineamento verso l’alto di petrolio, dollaro e rendimenti Treasury.',
    'Il trentennale USA a circa 5,24% è il massimo dal 2007: contesto sfavorevole a un’attività priva di rendimento.',
    'L’oro tiene area 4.060–4.065 nonostante i rendimenti: divergenza moderatamente positiva.',
    'Senza conferme aggiuntive non esiste un trend ribassista già validato, ma nemmeno un rialzo affidabile.',
  ],
  invalidation: [
    'Un arretramento simultaneo di dollaro e rendimenti reali, che toglierebbe la principale pressione ribassista.',
    'Una discesa dell’oro coerente con l’aumento di DXY, decennale e petrolio: verrebbe meno la divergenza descritta.',
    'Un’attenuazione verificabile del rischio geopolitico, con conseguente calo della domanda di protezione.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Bias XAU/USD neutro–ribassista, forza del segnale media. Il regime è di conflitto tra pressione monetaria ' +
        'ribassista e domanda geopolitica difensiva.',
    },
    {
      kind: 'paragraph',
      text: 'Il cambiamento rilevante è l’allineamento di petrolio, dollaro e rendimenti Treasury verso l’alto.',
    },
    { kind: 'heading', text: 'I tre fronti che pesano sull’oro', anchor: 'tre-fronti' },
    {
      kind: 'scenarios',
      items: [
        {
          label: 'Treasury',
          tone: 'bear',
          text:
            'Il Treasury USA a 10 anni è salito intorno al 4,64%, mentre il 2 anni è vicino al 4,29%. La parte lunga ' +
            'della curva sta mostrando la pressione maggiore: il trentennale ha raggiunto circa 5,24%, massimo dal ' +
            '2007. È un segnale chiaramente negativo per un’attività priva di rendimento come l’oro.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text:
            'Il dollaro si è ripreso dopo l’iniziale reazione alla Fed, sostenuto dalle aspettative di tassi più ' +
            'elevati e dalla domanda di rifugio geopolitica. Anche questo contrasta i rialzi di XAU/USD.',
        },
        {
          label: 'Petrolio',
          tone: 'warn',
          text:
            'Il petrolio è tornato a salire con decisione: Brent circa 91,80 dollari (+1,17%) e WTI circa 84,85 ' +
            '(+0,46%), a causa dei nuovi attacchi USA-Iran e dei rischi sulle rotte marittime. Il rialzo alimenta ' +
            'aspettative d’inflazione e di politica Fed più restrittiva.',
        },
      ],
    },
    {
      kind: 'stats',
      title: 'Quadro dei riferimenti',
      caption:
        'Valori citati nel testo al momento della redazione, non quotazioni in tempo reale. Le variazioni percentuali sono quelle indicate dalle fonti consultate.',
      items: [
        { label: 'US 10Y', value: '≈ 4,64%', tone: 'bear' },
        { label: 'US 2Y', value: '≈ 4,29%', tone: 'bear' },
        { label: 'US 30Y', value: '≈ 5,24%', tone: 'bear', note: 'Massimo dal 2007' },
        { label: 'Brent', value: '≈ 91,80 $', tone: 'warn', note: '+1,17%' },
        { label: 'WTI', value: '≈ 84,85 $', tone: 'warn', note: '+0,46%' },
        { label: 'XAU/USD', value: '4.060–4.065 $', tone: 'gold', note: 'Tenuta dell’area' },
      ],
    },
    {
      kind: 'paragraph',
      text:
        'Nonostante questi ostacoli, l’oro rimane intorno a 4.060–4.065 dollari e non sta cedendo in proporzione ' +
        'all’aumento dei rendimenti. Questa è una divergenza moderatamente positiva: indica che la domanda di ' +
        'protezione geopolitica sta assorbendo, almeno per ora, la pressione proveniente da dollaro e Treasury.',
    },
    {
      kind: 'balance',
      title: 'Conferme e controindicazioni',
      left: {
        title: 'Conferme ribassiste',
        tone: 'bear',
        items: [
          'DXY in recupero.',
          'Treasury in rialzo lungo tutta la curva.',
          'Petrolio in rialzo.',
          'Argento leggermente debole.',
          'Platino intorno a −0,4%.',
        ],
      },
      right: {
        title: 'Elementi contrari',
        tone: 'bull',
        items: [
          'Tenuta dell’oro nonostante il forte aumento dei rendimenti.',
          'Rischio geopolitico ancora elevato.',
        ],
      },
    },
    { kind: 'heading', text: 'Implicazione operativa', anchor: 'implicazione' },
    {
      kind: 'paragraph',
      text: 'Non c’è al momento una conferma sufficiente per inseguire un movimento direzionale aggressivo.',
    },
    {
      kind: 'list',
      items: [
        'I long sull’oro diventerebbero più affidabili soltanto con rendimenti e dollaro in arretramento, oppure con una nuova escalation geopolitica capace di far prevalere nettamente la domanda di rifugio.',
        'Il segnale short si rafforzerebbe qualora XAU/USD iniziasse a scendere mentre DXY, decennale e petrolio continuano a salire: significherebbe che la protezione geopolitica non è più sufficiente.',
        'Finché l’oro resiste, il quadro resta da vendita sui rialzi con prudenza, non da trend ribassista già confermato.',
      ],
    },
    {
      kind: 'callout',
      tone: 'neutral',
      title: 'Sessione azionaria statunitense',
      text:
        'Le borse USA non sono ancora nella fascia operativa richiesta delle 15:30 italiane; i futures indicano un ' +
        'tentativo di recupero, ma il Nasdaq arriva da una fase di correzione e volatilità elevata.',
    },
    {
      kind: 'note',
      text: 'La lettura si basa sugli ultimi prezzi e aggiornamenti affidabili disponibili al momento della redazione.',
    },
  ],
};

/* ========================================================================== */
/* 3 — Geopolitica                                                            */
/* ========================================================================== */
/* Scheda di sintesi: riorganizza in chiave geopolitica gli elementi già       */
/* contenuti nelle due analisi precedenti. Non introduce fatti ulteriori.      */

const chokepoint: Article = {
  slug: 'hormuz-e-bab-el-mandeb-rischio-non-ancora-blocco',
  category: 'geopolitica',
  kicker: 'Rotte marittime · Scheda di sintesi',
  title: 'Hormuz e Bab el-Mandeb: rischio elevato, ma non ancora blocco',
  dek:
    'Sintesi del fronte geopolitico così come emerge dalle due analisi del 30 luglio: gli attacchi sono ripresi e il ' +
    'petrolio è risalito, ma finché i flussi transitano manca la conferma di un’interruzione strutturale dell’offerta.',
  publishedAt: '2026-07-30T12:00:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Geopolitica', 'Hormuz', 'Bab el-Mandeb', 'Petrolio', 'Rischio'],
  instruments: ['Brent', 'WTI', 'XAU/USD'],
  horizons: ['breve', 'medio'],
  certainty: 'bassa',
  certaintyNote:
    'Scheda compilativa: riorganizza elementi già pubblicati. L’evoluzione di un contesto geopolitico è per natura ' +
    'poco prevedibile e le informazioni disponibili possono essere incomplete o superate in tempi molto rapidi.',
  takeaways: [
    'Gli attacchi tra Stati Uniti e Iran sono ripresi; Brent e WTI sono risaliti.',
    'Stretto di Hormuz e Bab el-Mandeb restano sotto osservazione, ma il petrolio continua a transitare.',
    'Senza interruzione verificabile dei flussi, il premio al rischio resta reversibile e molto volatile.',
    'Per l’oro l’effetto è duplice: sostegno da domanda di protezione, freno da inflazione e rendimenti.',
  ],
  invalidation: [
    'Un cessate il fuoco verificabile o una normalizzazione dei flussi petroliferi.',
    'Una rottura geopolitica concreta dei flussi attraverso Hormuz o Bab el-Mandeb, che renderebbe il rapporto tra petrolio, inflazione e oro molto meno lineare.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Il fronte geopolitico è tornato a essere una variabile di primo piano per i mercati. Questa scheda raccoglie ' +
        'in un unico punto gli elementi già presenti nelle analisi pubblicate il 30 luglio, senza aggiungere fatti ' +
        'ulteriori rispetto a quelli lì citati.',
    },
    { kind: 'heading', text: 'Il quadro dei fatti', anchor: 'quadro-fatti' },
    {
      kind: 'list',
      items: [
        'Gli attacchi tra Stati Uniti e Iran sono ripresi.',
        'Brent e WTI sono risaliti, con il Brent intorno a 91,80 dollari.',
        'Restano sotto osservazione lo Stretto di Hormuz e Bab el-Mandeb.',
        'Per ora il petrolio continua a transitare: non c’è ancora la conferma di un’interruzione strutturale dell’offerta.',
      ],
    },
    { kind: 'heading', text: 'Perché il passaggio conta', anchor: 'perche-conta-passaggio' },
    {
      kind: 'paragraph',
      text:
        'La differenza fra rischio percepito e interruzione effettiva è ciò che separa un premio geopolitico ' +
        'reversibile da uno shock di offerta. Finché i carichi transitano, il rialzo del greggio incorpora ' +
        'principalmente una probabilità: può rientrare rapidamente se la tensione si attenua.',
    },
    {
      kind: 'balance',
      title: 'Le due letture possibili',
      left: {
        title: 'Rischio che resta premio',
        tone: 'warn',
        items: [
          'Flussi ancora regolari attraverso i due passaggi.',
          'Rialzo del petrolio volatile e reversibile.',
          'Effetto sull’oro prevalentemente di breve periodo.',
        ],
      },
      right: {
        title: 'Rischio che diventa shock',
        tone: 'bear',
        items: [
          'Blocco effettivo o riduzione verificabile delle esportazioni.',
          'Impatto diretto e persistente sulle aspettative d’inflazione.',
          'Relazione tra petrolio, inflazione e oro molto meno lineare.',
        ],
      },
    },
    { kind: 'heading', text: 'Effetto sull’oro', anchor: 'effetto-oro' },
    {
      kind: 'paragraph',
      text:
        'Per XAU/USD il fronte geopolitico agisce in due direzioni opposte. Sostiene il metallo attraverso la domanda ' +
        'di protezione, ma può penalizzarlo indirettamente: un petrolio elevato mantiene alta l’inflazione e alimenta ' +
        'aspettative di politica monetaria più restrittiva, con rendimenti reali e dollaro in rialzo.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Cosa osservare, senza trarne indicazioni operative',
      items: [
        'Conferme verificabili sulla regolarità o sull’interruzione dei transiti.',
        'Comportamento del Brent rispetto ai livelli citati nelle analisi.',
        'Reazione simultanea di dollaro e rendimenti reali statunitensi.',
      ],
    },
    {
      kind: 'note',
      text:
        'Scheda compilativa costruita sugli elementi riportati nelle analisi “Fed ferma, ma quadro più instabile per ' +
        'oro e mercati” e “Regime più ostile all’oro, ma non ancora pienamente ribassista”.',
    },
  ],
};

/* ========================================================================== */
/* 4 — Correlazioni · controllo cross-asset                                   */
/* ========================================================================== */

const crossAsset: Article = {
  slug: 'xauusd-cambio-rilevante-nella-lettura-cross-asset',
  category: 'correlazioni',
  featured: true,
  kicker: 'Correlazioni · Controllo cross-asset',
  title: 'XAU/USD — cambio rilevante nella lettura cross-asset',
  dek:
    'L’oro ha smesso di seguire la pressione ribassista dei rendimenti: XAU/USD è tornato in area 4.062–4.087 dollari ' +
    'mentre il Treasury decennale resta vicino al 4,70%. È una divergenza significativa rispetto al controllo precedente.',
  publishedAt: '2026-07-30T12:45:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Correlazioni', 'Cross-asset', 'Dollaro', 'Treasury', 'Petrolio', 'Metalli'],
  instruments: [
    'XAU/USD',
    'DXY',
    'EUR/USD',
    'US02Y',
    'US10Y',
    'WTI',
    'Brent',
    'XAG/USD',
    'XPT/USD',
  ],
  horizons: ['breve'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    regime:
      'Rottura temporanea della correlazione inversa con i rendimenti: l’oro assorbe tassi elevati.',
  },
  certainty: 'media',
  certaintyNote:
    'La divergenza è osservabile sui prezzi disponibili al momento del controllo, ma è per definizione intraday: ' +
    'può rientrare rapidamente se il dollaro riprende a salire.',
  takeaways: [
    'Bias intraday neutro con inclinazione rialzista, forza del segnale media.',
    'XAU/USD è tornato in area 4.062–4.087 dollari, stabile o positivo.',
    'Il Treasury 10Y resta vicino al 4,70% e il 2Y intorno al 4,28%: rendimenti ancora elevati.',
    'L’oro assorbe rendimenti elevati senza produrre nuovi minimi: divergenza significativa.',
    'Argento e platino restano deboli: il comparto dei metalli preziosi non conferma pienamente il recupero.',
  ],
  invalidation: [
    'Un nuovo massimo dei rendimenti accompagnato da DXY in accelerazione e dal ritorno dell’oro sotto i minimi recenti.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Bias intraday: neutro con inclinazione rialzista. Forza del segnale: media.',
    },
    {
      kind: 'paragraph',
      text:
        'Rispetto al controllo precedente, l’oro ha smesso di seguire la pressione ribassista dei rendimenti: XAU/USD ' +
        'è tornato in area 4.062–4.087 dollari, stabile o positivo, mentre il Treasury 10Y resta vicino a 4,70% e il ' +
        '2Y intorno a 4,28%. Questa è una divergenza significativa: l’oro sta assorbendo rendimenti elevati senza ' +
        'produrre nuovi minimi.',
    },
    {
      kind: 'stats',
      title: 'Riferimenti del controllo',
      caption:
        'Valori rilevati al momento del controllo. Non sono quotazioni in tempo reale e non sono forniti a fini operativi.',
      items: [
        { label: 'XAU/USD', value: '4.062 – 4.087 $', tone: 'gold', note: 'Stabile o positivo' },
        { label: 'US 10Y', value: '≈ 4,70%', tone: 'bear', note: 'Vicino ai massimi' },
        { label: 'US 2Y', value: '≈ 4,28%', tone: 'bear' },
        { label: 'DXY', value: '≈ 100,80', tone: 'neutral', note: 'Sostanzialmente fermo' },
        { label: 'EUR/USD', value: 'quasi stabile', tone: 'neutral' },
      ],
    },
    { kind: 'heading', text: 'Lettura cross-asset', anchor: 'lettura-cross-asset' },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Strumenti che confermano',
      items: [
        'DXY sostanzialmente fermo vicino a 100,80: manca un nuovo impulso rialzista del dollaro.',
        'EUR/USD è quasi stabile, quindi il mercato valutario non conferma un rafforzamento aggressivo dell’USD.',
        'WTI e Brent sono tornati sostenuti dal rischio geopolitico e dalle tensioni sulle rotte energetiche: aumenta la componente inflazionistica e di ricerca di protezione favorevole all’oro.',
      ],
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Strumenti che contraddicono',
      items: [
        'Rendimenti USA ancora elevati e in rialzo, soprattutto sulla parte lunga della curva.',
        'Argento e platino restano deboli, quindi il comparto dei metalli preziosi non conferma pienamente il recupero di XAU/USD.',
      ],
    },
    { kind: 'heading', text: 'Implicazione operativa', anchor: 'implicazione-operativa' },
    {
      kind: 'paragraph',
      text:
        'Non è più un contesto pulito da sell automatico sui pullback. La tenuta dell’oro nonostante il 10Y vicino ai ' +
        'massimi segnala possibile domanda rifugio e una temporanea rottura della correlazione inversa con i rendimenti.',
    },
    {
      kind: 'callout',
      tone: 'gold',
      title: 'Favorito',
      items: [
        'Long solo dopo breakout e retest confermato dei massimi intraday.',
        'Evitare short finché XAU/USD continua a tenere mentre DXY resta piatto.',
      ],
    },
    {
      kind: 'note',
      text:
        'Lettura intraday, riferita al momento del controllo. Perde rapidamente validità al variare di dollaro e ' +
        'rendimenti.',
    },
  ],
};

/* ========================================================================== */
/* 5 — Fondamentali · controllo su energia e curva dei rendimenti             */
/* ========================================================================== */

const petrolioTreasury: Article = {
  slug: 'petrolio-riparte-e-treasury-lunghi-a-nuovi-massimi',
  category: 'fondamentali',
  featured: true,
  kicker: 'Controllo macro · Energia e curva',
  title: 'Il petrolio riparte e i Treasury lunghi segnano nuovi massimi',
  dek:
    'Il mercato ha riaggiunto premio geopolitico dopo una nuova ondata di attacchi statunitensi in Iran, ma la novità ' +
    'più rilevante per XAU/USD è obbligazionaria: il trentennale americano tocca il 5,24%, massimo da diciannove anni.',
  publishedAt: '2026-07-30T13:15:00+02:00',
  author: AUTHOR,
  readingMinutes: 5,
  tags: ['Fed', 'Petrolio', 'Treasury', 'Geopolitica', 'PCE', 'Dollaro'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'US30Y', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'media',
    regime:
      'Inflazione da energia e tassi alti più a lungo: la domanda rifugio frena la discesa ma non produce rialzo.',
  },
  certainty: 'media',
  certaintyNote:
    'Attacchi, livelli di greggio e trentennale e decisione della Fed sono fatti confermati. La direzione netta di ' +
    'XAU/USD resta però condizionata al dato PCE, non ancora pubblicato al momento del controllo.',
  takeaways: [
    'Nuova ondata di attacchi statunitensi contro infrastrutture militari iraniane: il premio geopolitico è tornato sui prezzi.',
    'Il Brent è risalito in area 92 dollari e il WTI è tornato sopra 85.',
    'Il Treasury a 30 anni è salito fino a circa 5,24%: massimo da 19 anni.',
    'La decisione Fed viene letta come “hawkish hold”: tassi fermi al 3,50–3,75% ma tre membri favorevoli a un rialzo.',
    'L’oro resta sostenuto in area 4.060 dollari senza accelerare in proporzione all’escalation.',
  ],
  nextEvent: {
    when: 'In giornata · PCE USA di giugno',
    title: 'Core PCE atteso a +0,2% mensile e +3,3% annuale',
    detail:
      'Un dato superiore renderebbe più credibile un nuovo rialzo Fed; un dato inferiore potrebbe far scendere dollaro e rendimenti.',
  },
  invalidation: [
    'Una rapida de-escalation del conflitto.',
    'Una nuova discesa del Brent sotto 89–90 dollari.',
    'Un PCE sensibilmente più debole delle attese.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Rispetto all’ultimo controllo, il mercato ha riaggiunto premio geopolitico dopo una nuova ondata di attacchi ' +
        'statunitensi contro infrastrutture militari iraniane.',
    },
    { kind: 'heading', text: 'Fatti confermati', anchor: 'fatti-confermati' },
    {
      kind: 'paragraph',
      text:
        'Il Brent è risalito in area 92 dollari al barile, dopo essere sceso sotto 90 nel controllo precedente; anche ' +
        'il WTI è tornato sopra 85 dollari. Le tensioni restano concentrate sullo Stretto di Hormuz e sulle rotte ' +
        'energetiche regionali.',
    },
    {
      kind: 'paragraph',
      text:
        'La novità più importante per XAU/USD è però obbligazionaria: il rendimento del Treasury USA a 30 anni è salito ' +
        'fino a circa 5,24%, massimo da 19 anni. Il mercato interpreta la decisione Fed come un “hawkish hold”: tassi ' +
        'invariati al 3,50%–3,75%, ma tre membri favorevoli a un rialzo e nessuna guida rassicurante sui prossimi mesi.',
    },
    {
      kind: 'paragraph',
      text:
        'L’oro rimane sostenuto nell’area 4.060 dollari, ma non sta accelerando proporzionalmente all’escalation ' +
        'geopolitica. Il Dollar Index si mantiene intorno a 100,9, sostenuto sia dalla domanda rifugio sia dal rischio ' +
        'che la Fed debba mantenere una linea restrittiva.',
    },
    {
      kind: 'stats',
      title: 'Riferimenti del controllo',
      caption:
        'Valori rilevati al momento della redazione. Non sono quotazioni in tempo reale e non sono forniti a fini operativi.',
      items: [
        { label: 'Brent', value: '≈ 92 $', tone: 'warn', note: 'Da sotto 90' },
        { label: 'WTI', value: '> 85 $', tone: 'warn' },
        { label: 'US 30Y', value: '≈ 5,24%', tone: 'bear', note: 'Massimo da 19 anni' },
        { label: 'Tassi Fed', value: '3,50–3,75%', tone: 'neutral', note: 'Hawkish hold' },
        { label: 'XAU/USD', value: '≈ 4.060 $', tone: 'gold', note: 'Sostenuto, senza accelerare' },
        {
          label: 'DXY',
          value: '≈ 100,9',
          tone: 'neutral',
          note: 'Domanda rifugio e attese sui tassi',
        },
      ],
    },
    { kind: 'heading', text: 'Perché conta per XAU/USD', anchor: 'perche-conta' },
    { kind: 'paragraph', text: 'Il cambiamento rispetto all’ultimo controllo è questo:' },
    {
      kind: 'list',
      items: [
        'Prima il petrolio stava correggendo e il rischio di blocco energetico sembrava ridimensionarsi.',
        'Ora il greggio è tornato a salire e i rendimenti lunghi stanno raggiungendo nuovi massimi.',
      ],
    },
    {
      kind: 'paragraph',
      text:
        'Questo rafforza lo scenario di inflazione da energia e tassi alti più a lungo, che tende a frenare l’oro. La ' +
        'domanda rifugio impedisce per ora una discesa netta, ma non è sufficiente a produrre un rialzo pulito.',
    },
    { kind: 'heading', text: 'Interpretazione', anchor: 'interpretazione' },
    {
      kind: 'paragraph',
      text: 'Bias fondamentale immediato: neutrale con pressione ribassista crescente.',
    },
    {
      kind: 'balance',
      title: 'Conferme contrapposte',
      left: {
        title: 'Conferme rialziste per l’oro',
        tone: 'bull',
        items: [
          'Escalation USA-Iran.',
          'Instabilità delle rotte energetiche.',
          'Contesto di rischio-off.',
        ],
      },
      right: {
        title: 'Conferme ribassiste',
        tone: 'bear',
        items: [
          'Brent sopra 92 dollari.',
          'Treasury trentennale a 5,24%.',
          'Dollaro stabile o forte.',
          'Fed percepita come più restrittiva.',
        ],
      },
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Forza del segnale',
      text: 'Medio-alta sul rischio di volatilità; media sulla direzione netta.',
    },
    { kind: 'heading', text: 'Impatto probabile', anchor: 'impatto-probabile' },
    {
      kind: 'scenarios',
      caption: 'Lettura per singolo mercato. Descrizione di ipotesi, non indicazioni operative.',
      items: [
        {
          label: 'Oro',
          tone: 'gold',
          text: 'Probabile fase volatile e laterale: la salita dei rendimenti limita i tentativi di breakout rialzista.',
        },
        {
          label: 'Petrolio',
          tone: 'bull',
          text: 'Nuovamente rialzista finché proseguono gli attacchi o resta concreto il rischio sulle esportazioni del Golfo.',
        },
        {
          label: 'Dollaro',
          tone: 'neutral',
          text: 'Moderatamente sostenuto, sia come rifugio sia dalle aspettative sui tassi.',
        },
        {
          label: 'Treasury',
          tone: 'bear',
          text: 'Pressione rialzista sui rendimenti lunghi: resta il principale vento contrario per XAU/USD.',
        },
      ],
    },
    { kind: 'heading', text: 'Prossimo catalizzatore', anchor: 'prossimo-catalizzatore' },
    {
      kind: 'paragraph',
      text:
        'Il mercato attende il PCE USA di giugno. Le stime raccolte prima della pubblicazione indicano un Core PCE ' +
        'intorno al +0,2% mensile e +3,3% annuale.',
    },
    {
      kind: 'scenarios',
      items: [
        {
          label: 'PCE superiore alle attese',
          tone: 'bear',
          text: 'Renderebbe più credibile un nuovo rialzo della Fed e sarebbe probabilmente negativo per l’oro.',
        },
        {
          label: 'PCE inferiore alle attese',
          tone: 'bull',
          text: 'Potrebbe far scendere dollaro e rendimenti e liberare il movimento rialzista di XAU/USD.',
        },
      ],
    },
  ],
};

export const ARTICLES: readonly Article[] = [
  petrolioTreasury,
  crossAsset,
  chokepoint,
  regimeOstile,
  fedFerma,
];
