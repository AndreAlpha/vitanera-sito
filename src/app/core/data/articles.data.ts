import { Article } from '../models/article.model';

/**
 * Archivio delle analisi pubblicate.
 *
 * L'archivio è attualmente vuoto: il sito è stato riorganizzato attorno alle
 * nuove categorie e al calendario economico, e le pubblicazioni ripartono da
 * zero. Ogni pagina che elenca analisi è preparata per questo stato e mostra un
 * riquadro «ancora nessuna pubblicazione» invece di una griglia vuota.
 *
 * Per aggiungere un'analisi si inserisce un oggetto `Article` in questo array.
 * Il campo `categories` accetta più categorie: la prima determina la tinta della
 * pagina e la pastiglia mostrata in evidenza sulle schede, le altre servono a
 * ritrovare l'analisi dall'archivio e dalle pagine di argomento.
 *
 * L'ordine dell'archivio è calcolato da `publishedAt`, non dalla posizione
 * nell'array.
 *
 * I testi riportano opinioni personali dell'autore basate su informazioni
 * disponibili al momento della redazione. Non sono consulenza finanziaria e non
 * vanno usati come base per decisioni di investimento (vedi /avvertenze).
 */

/**
 * Firma di ogni analisi.
 *
 * È una costante e non una stringa ripetuta in ogni articolo perché la firma
 * compare in testata su ogni pagina di lettura: se un giorno cambia, deve
 * cambiare in un punto solo e non in trenta.
 */
export const AUTHOR = 'Vitanera';

const attacchiEnergiaIraniana: Article = {
  slug: 'attacchi-energia-iraniana-piano-non-ordine',
  categories: ['geopolitica', 'asia', 'usa'],
  title: 'Attacchi all’energia iraniana: per ora un piano, non un ordine',
  kicker: 'Geopolitica · Rischio di offerta',
  dek:
    'Reuters e Axios riferiscono che Stati Uniti e Israele valutano una campagna contro le infrastrutture ' +
    'energetiche iraniane, forse già nel fine settimana. Manca però il via libera definitivo, e la distanza ' +
    'fra un piano riportato dalla stampa e un ordine di attacco è ciò che tiene la lettura sul neutrale.',
  publishedAt: '2026-08-01T01:12:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Iran', 'Hormuz', 'Petrolio', 'Premio di rischio', 'Bene rifugio'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'DXY', 'Treasury'],
  horizons: ['breve'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'Premio geopolitico in formazione su una notizia non confermata, con il petrolio già sostenuto dalle ' +
      'difficoltà di transito attraverso Hormuz.',
  },
  certainty: 'media',
  certaintyNote:
    'Alta sull’importanza che la notizia avrebbe se si realizzasse, medio-bassa sulla sua realizzazione: ' +
    'esiste un piano riportato da più testate, non un ordine di attacco. È questa distanza a tenere la ' +
    'lettura sul neutrale invece di spingerla al rialzo.',
  takeaways: [
    'Reuters, riprendendo un’indiscrezione di CBS News, riferisce che Stati Uniti e Israele stanno pianificando una campagna di attacchi contro infrastrutture energetiche iraniane, potenzialmente già durante il fine settimana.',
    'Axios conferma che l’azione è in valutazione, ma sottolinea che non è stata presa alcuna decisione finale: Donald Trump non avrebbe dato il via libera definitivo.',
    'Non risultano nuove decisioni monetarie della Federal Reserve: le comunicazioni del 31 luglio riguardano la regolamentazione bancaria.',
    'Il petrolio era già sostenuto dalle difficoltà di transito attraverso Hormuz; una campagna diretta contro l’energia iraniana alzerebbe il rischio di danni all’offerta e di una risposta iraniana.',
    'Il bias passa da ribassista a neutrale con rischio rialzista geopolitico, non a rialzista confermato.',
  ],
  invalidation: [
    'Il via libera non arriva e la notizia perde forza durante il fine settimana: il premio geopolitico si riduce alla riapertura.',
    'L’oro restituisce subito l’eventuale gap di apertura e il mercato torna a concentrarsi su rendimenti elevati e quadro Fed.',
    'L’energia sale ma trascina con sé rendimenti statunitensi e aspettative sulla Fed, soffocando la domanda rifugio.',
  ],
  nextEvent: {
    when: 'Lunedì 3 agosto',
    title: 'Riapertura dei mercati',
    detail:
      'È il momento in cui si vedrà se il piano è diventato un ordine e se l’eventuale premio geopolitico regge oltre il primo impulso.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Reuters, riprendendo un’indiscrezione di CBS News, riferisce che Stati Uniti e Israele stanno pianificando una campagna di attacchi contro infrastrutture energetiche iraniane, potenzialmente già durante il fine settimana. Sarebbe stata discussa anche la possibilità di concludere gli attacchi prima della riapertura dei mercati di lunedì.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Un piano, non un ordine',
      text: 'L’attacco non è confermato: Donald Trump non avrebbe dato il via libera definitivo. Axios conferma che l’azione è in valutazione e potrebbe avvenire nei prossimi giorni, ma sottolinea che non è stata ancora presa una decisione finale. Tutto ciò che segue vale per uno scenario possibile, non per un fatto avvenuto.',
    },
    {
      kind: 'paragraph',
      text: 'Sul fronte monetario non c’è invece nulla di nuovo: le comunicazioni della Federal Reserve pubblicate il 31 luglio riguardano principalmente la regolamentazione bancaria, non i tassi né la politica monetaria. Il quadro dei rendimenti resta quello di prima, ed è un dettaglio che conta, perché è la sponda contro cui il premio geopolitico dovrà misurarsi.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La chiusura precedente alla piena diffusione dell’indiscrezione fotografa un quadro già inclinato: oro in arretramento, energia in rialzo.',
    },
    {
      kind: 'stats',
      title: 'Alla chiusura precedente',
      caption:
        'Riferimenti citati nell’analisi per rendere verificabile il ragionamento, non quotazioni in tempo reale.',
      items: [
        { label: 'Oro spot', value: '4.049,83', tone: 'bear', note: '−1,3%' },
        { label: 'Brent', value: '90,12 $', tone: 'bull', note: '+1,2%' },
        { label: 'WTI', value: '84,67 $', tone: 'bull', note: '+1,3%' },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Il petrolio era già sostenuto dalle difficoltà di transito attraverso Hormuz. Una campagna diretta contro infrastrutture energetiche iraniane alzerebbe nettamente il rischio di danni all’offerta e di una risposta iraniana contro impianti, petroliere o rotte marittime. È il canale per cui una notizia militare arriva fino al prezzo dell’oro: prima come domanda di protezione, poi come spinta sull’inflazione attesa e quindi sui rendimenti.',
    },
    {
      kind: 'heading',
      text: 'I tre scenari alla riapertura',
      anchor: 'scenari',
    },
    {
      kind: 'scenarios',
      caption:
        'Ipotesi condizionate, non previsioni: nessuna delle tre è più probabile per il fatto di essere descritta.',
      items: [
        {
          label: 'Nessuna autorizzazione',
          tone: 'bear',
          text: 'La notizia perde forza durante il fine settimana e l’eventuale premio geopolitico si riduce alla riapertura.',
        },
        {
          label: 'Attacchi limitati',
          tone: 'warn',
          text: 'Senza danni importanti all’offerta: probabile primo movimento rialzista di oro e petrolio, ma con rischio di successivo riassorbimento.',
        },
        {
          label: 'Attacchi e risposta iraniana',
          tone: 'bull',
          text: 'Su energia o Hormuz: probabile apertura in gap rialzista del petrolio e domanda rifugio iniziale sull’oro. Successivamente, però, il rialzo dell’energia potrebbe spingere anche rendimenti statunitensi e aspettative sulla Fed verso l’alto, frenando XAU/USD.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Interpretazione operativa',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias passa da ribassista a neutrale con rischio rialzista geopolitico. Non è ancora rialzista confermato perché, per ora, esiste un piano riportato dalla stampa ma non un ordine di attacco: è una differenza che nel giro di un fine settimana può valere l’intero movimento.',
    },
    {
      kind: 'paragraph',
      text: 'Alla riapertura un eventuale gap non andrebbe inseguito. Vale la pena guardare che cosa servirebbe perché il rialzo abbia una base, e che cosa invece riporterebbe il mercato dove stava.',
    },
    {
      kind: 'balance',
      left: {
        title: 'La conferma richiederebbe',
        tone: 'bull',
        items: [
          'Notizia dell’attacco effettivamente confermata.',
          'Oro che mantiene il rialzo dopo il primo impulso.',
          'Petrolio forte.',
          'DXY e Treasury non in accelerazione tale da soffocare la domanda rifugio.',
        ],
      },
      right: {
        title: 'Riporterebbe la pressione ribassista',
        tone: 'bear',
        items: [
          'Nessun via libera all’operazione.',
          'Oro che restituisce subito il possibile gap.',
          'Ritorno rapido del mercato su rendimenti elevati e quadro Fed.',
        ],
      },
    },
    {
      kind: 'note',
      text: 'I livelli citati sono riferimenti alla chiusura precedente, riportati per rendere verificabile il ragionamento. Non sono obiettivi, non sono quotazioni in tempo reale e non descrivono livelli operativi.',
    },
  ],
};

const cancellazioneAttaccoIran: Article = {
  slug: 'trump-cancella-attacco-iran-accordo-non-chiuso',
  categories: ['geopolitica', 'asia', 'usa', 'fed'],
  title: 'Trump cancella l’attacco all’Iran, ma l’accordo non è chiuso',
  kicker: 'Geopolitica · De-escalation annunciata',
  dek:
    'Nella notte fra 1 e 2 agosto Donald Trump ha annunciato di aver cancellato — non rinviato — il nuovo ' +
    'attacco statunitense contro l’Iran, citando progressi diplomatici e un’intesa preliminare su Hormuz e ' +
    'nucleare. Teheran però non ha ratificato nulla: resta una cornice negoziale, e il premio rifugio ' +
    'dell’oro si sgonfia su una promessa.',
  publishedAt: '2026-08-02T12:38:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Iran', 'Hormuz', 'De-escalation', 'Premio di rischio', 'Bene rifugio'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'DXY', 'Treasury'],
  horizons: ['breve'],
  bias: {
    asset: 'XAU/USD',
    direction: 'ribassista',
    strength: 'media',
    regime:
      'Premio geopolitico in riassorbimento su un annuncio di de-escalation non ancora ratificato da Teheran, ' +
      'con la Fed che resta restrittiva sullo sfondo.',
  },
  certainty: 'media',
  certaintyNote:
    'Alta sulla cancellazione dell’attacco programmato, che è un annuncio esplicito; media sulla conclusione ' +
    'dell’accordo, che nessuna delle due parti ha firmato; medio-alta sulla pressione ribassista iniziale per ' +
    'XAU/USD. La formulazione più prudente di Reuters — sospensione dell’azione militare nella speranza di ' +
    'un’intesa rapida — è ciò che tiene la certezza complessiva sul livello intermedio.',
  takeaways: [
    'Donald Trump ha annunciato di aver cancellato, e non soltanto rinviato, il nuovo attacco statunitense contro l’Iran, motivandolo con i progressi diplomatici e con un’intesa preliminare.',
    'L’intesa dovrebbe includere la riapertura completa dello Stretto di Hormuz e limiti alla minaccia nucleare iraniana; Israele avrebbe accettato di collaborare alla finalizzazione.',
    'Reuters usa una formulazione più prudente: Washington sospenderà l’azione militare nella speranza che l’accordo venga raggiunto rapidamente.',
    'Teheran non ha pubblicamente ratificato alcuna intesa definitiva e mantiene la minaccia di una risposta molto dura in caso di nuovi attacchi: esiste una cornice negoziale, non un accordo verificabile.',
    'Il bias fondamentale su XAU/USD passa a moderatamente ribassista alla riapertura, ma la de-escalation non è ancora considerabile strutturale.',
  ],
  invalidation: [
    'Teheran smentisce l’intesa o i negoziati falliscono.',
    'Nuovi attacchi contro navi o infrastrutture energetiche.',
    'Lo Stretto di Hormuz non viene effettivamente riaperto.',
    'L’oro assorbe rapidamente le vendite mentre DXY e rendimenti non riescono a salire.',
  ],
  nextEvent: {
    when: 'Domenica sera',
    title: 'Riapertura degli scambi',
    detail:
      'Il primo prezzo dopo l’annuncio dirà se la cancellazione viene letta come de-escalation o soltanto come una tregua provvisoria.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Nella notte fra 1 e 2 agosto 2026 Donald Trump ha annunciato di aver cancellato — non soltanto rinviato — il nuovo attacco statunitense contro l’Iran. La decisione è stata motivata dai progressi diplomatici e dalla definizione preliminare di un’intesa che dovrebbe includere la riapertura completa dello Stretto di Hormuz e limiti alla minaccia nucleare iraniana. Israele avrebbe accettato di collaborare alla finalizzazione dell’accordo.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Cancellato o sospeso: le due versioni non coincidono',
      text: 'Reuters usa una formulazione più prudente di quella dell’annuncio: Washington sospenderà l’azione militare nella speranza che venga raggiunto rapidamente un accordo. La differenza fra «cancellato» e «sospeso» non è verbale — è la differenza fra una decisione presa e una leva ancora in mano.',
    },
    {
      kind: 'paragraph',
      text: 'Resta poi un elemento non confermato, ed è quello decisivo: Teheran non ha pubblicamente ratificato un’intesa definitiva e mantiene la minaccia di una risposta molto dura in caso di nuovi attacchi. Per ora esiste una cornice negoziale, non un accordo concluso e verificabile.',
    },
    {
      kind: 'timeline',
      title: 'Come ci siamo arrivati',
      items: [
        {
          when: '29 luglio',
          title: 'La Fed lascia i tassi fermi',
          text: 'Corridoio al 3,50%-3,75% e inflazione ancora descritta come elevata. Non sono emerse decisioni monetarie successive.',
        },
        {
          when: '1 agosto',
          title: 'Il piano di attacchi riportato dalla stampa',
          text: 'Stati Uniti e Israele valutavano una campagna contro le infrastrutture energetiche iraniane, senza però alcun via libera definitivo.',
        },
        {
          when: 'Notte fra 1 e 2 agosto',
          title: 'L’attacco viene cancellato',
          text: 'L’annuncio arriva a mercati chiusi e sposta il quadro da rischio di escalation imminente a trattativa in corso.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'Rispetto all’ultimo controllo, la cancellazione dell’attacco riduce ulteriormente il rischio di un’escalation immediata e quindi il premio rifugio incorporato nell’oro. È un premio che si era formato su una notizia non confermata: si sgonfia con la stessa rapidità con cui era comparso.',
    },
    {
      kind: 'scenarios',
      title: 'Effetto probabile alla riapertura',
      caption:
        'Ipotesi condizionate all’assenza di smentite, non previsioni: descrivono una direzione, non un’ampiezza.',
      items: [
        {
          label: 'Oro',
          tone: 'bear',
          text: 'Pressione iniziale ribassista, soprattutto se non emergono smentite iraniane.',
        },
        {
          label: 'Petrolio',
          tone: 'bear',
          text: 'Rischio ribassista più netto, perché la riapertura di Hormuz è uno dei punti centrali della trattativa.',
        },
        {
          label: 'Dollaro',
          tone: 'warn',
          text: 'Potrebbe perdere parte della domanda rifugio, ma restare sostenuto dalla Fed restrittiva.',
        },
        {
          label: 'Treasury',
          tone: 'bear',
          text: 'Possibile rialzo dei rendimenti per uscita dagli asset difensivi: sarebbe un secondo fattore negativo per XAU/USD.',
        },
      ],
    },
    {
      kind: 'stats',
      title: 'Il quadro prima della riapertura',
      caption:
        'Riferimenti citati nelle analisi per rendere verificabile il ragionamento, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Tasso Fed',
          value: '3,50%-3,75%',
          tone: 'warn',
          note: 'Fermo dal comunicato del 29 luglio',
        },
        {
          label: 'Oro spot',
          value: '4.049,83',
          tone: 'bear',
          note: 'Ultima chiusura, precedente all’annuncio',
        },
        {
          label: 'Brent',
          value: '90,12 $',
          tone: 'bull',
          note: 'Sostenuto dalle difficoltà di transito a Hormuz',
        },
        {
          label: 'WTI',
          value: '84,67 $',
          tone: 'bull',
          note: 'Si muove con il Brent sul rischio di offerta',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Che cosa confermerebbe il movimento',
      anchor: 'conferme',
    },
    {
      kind: 'balance',
      left: {
        title: 'Rafforza lo scenario ribassista',
        tone: 'bear',
        items: [
          'Conferma iraniana dell’accordo.',
          'Riapertura effettiva e misurabile di Hormuz.',
          'Cessazione degli incidenti marittimi e degli attacchi regionali.',
          'Rendimenti statunitensi stabili o in aumento.',
        ],
      },
      right: {
        title: 'Lo ribalterebbe rapidamente',
        tone: 'bull',
        items: [
          'Teheran nega l’intesa.',
          'I negoziati falliscono.',
          'Nuovi attacchi contro navi o infrastrutture energetiche.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias fondamentale su XAU/USD è moderatamente ribassista alla riapertura. La differenza rispetto al controllo precedente è concreta: si è passati da un semplice rinvio dell’azione militare a una cancellazione dichiarata dell’attacco programmato.',
    },
    {
      kind: 'paragraph',
      text: 'La de-escalation non è però ancora strutturale, perché manca un accordo firmato e confermato dall’Iran. Finché quella firma non arriva, il ribasso poggia su una dichiarazione: basta una smentita da Teheran per rimettere in prezzo tutto ciò che è appena uscito.',
    },
    {
      kind: 'note',
      text: 'I livelli citati sono riferimenti all’ultima chiusura, riportati per rendere verificabile il ragionamento. Non sono obiettivi, non sono quotazioni in tempo reale e non descrivono livelli operativi.',
    },
  ],
};

const attaccoSospesoNonCancellato: Article = {
  slug: 'attacco-sospeso-non-cancellato-iran-smentisce',
  categories: ['geopolitica', 'asia', 'usa', 'fed'],
  title: 'L’attacco è sospeso, non cancellato, e Teheran smentisce',
  kicker: 'Geopolitica · Correzione della lettura',
  dek:
    'La ricostruzione più affidabile di Reuters ridimensiona l’annuncio: l’azione militare è rinviata per ' +
    'lasciare spazio a un accordo, non cancellata, e l’opzione resta aperta. L’Iran nega di aver chiesto una ' +
    'pausa e definisce fuorviante la versione statunitense. Il bias torna neutrale.',
  publishedAt: '2026-08-02T12:46:00+02:00',
  author: AUTHOR,
  readingMinutes: 3,
  tags: ['Iran', 'Hormuz', 'Rendimenti', 'Premio di rischio', 'Correzione'],
  instruments: ['XAU/USD', 'Petrolio', 'DXY', 'Treasury 30 anni'],
  horizons: ['breve'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'bassa',
    regime:
      'Pausa militare dichiarata da una sola delle due parti, con premio geopolitico solo parzialmente ' +
      'riassorbito e rendimenti statunitensi lunghi che restano il vero freno.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sulla pausa temporanea e alta sull’assenza di un accordo definitivo: sono entrambi fatti ' +
    'verificabili, il secondo per smentita esplicita di Teheran. Resta media la certezza sull’effetto ' +
    'iniziale su XAU/USD, che è la parte interpretativa e non quella documentata.',
  takeaways: [
    'Secondo la ricostruzione di Reuters, Trump non ha cancellato definitivamente l’attacco: ha detto che per ora sospenderà o rinvierà l’azione militare per lasciare spazio a un possibile accordo rapido.',
    'L’opzione militare resta quindi aperta, e questo ridimensiona lo scenario ribassista prospettato nel controllo precedente.',
    'L’Iran ha negato di aver chiesto una pausa delle ostilità, ha definito fuorviante la versione statunitense e mantiene un elevato livello di allerta militare.',
    'Non risulta alcun accordo firmato né una conferma iraniana della cornice negoziale annunciata da Washington.',
    'Il bias fondamentale torna neutrale: il principale fattore ribassista per l’oro resta la combinazione di rendimenti statunitensi elevati e Fed attenta all’inflazione, non un accordo geopolitico già raggiunto.',
  ],
  invalidation: [
    'Verso il basso: accordo confermato anche da Teheran, riapertura effettiva di Hormuz e petrolio in discesa stabile.',
    'Verso l’alto: nuovi attacchi, fallimento esplicito dei negoziati o ulteriori incidenti marittimi.',
  ],
  nextEvent: {
    when: 'Domenica sera',
    title: 'Riapertura degli scambi',
    detail:
      'Con una pausa dichiarata da una parte sola, il primo prezzo dirà quanto premio geopolitico il mercato è disposto a restituire.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'La ricostruzione più affidabile di Reuters indica che Donald Trump non ha cancellato definitivamente un attacco contro l’Iran: ha detto che per ora sospenderà o rinvierà una nuova azione militare, per lasciare spazio a un possibile accordo rapido. L’opzione militare resta quindi aperta.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Che cosa cambia rispetto al controllo precedente',
      text: 'Il controllo pubblicato poco prima si basava sulla formulazione dell’annuncio, che parlava di cancellazione. La differenza fra sospendere e cancellare cambia il peso della notizia: una pausa lascia la leva militare in mano a chi l’ha dichiarata, una cancellazione la toglie. La lettura ribassista che ne derivava va quindi ridimensionata.',
    },
    {
      kind: 'paragraph',
      text: 'A questo si aggiunge la reazione iraniana, che è l’elemento davvero nuovo: Teheran ha negato di aver chiesto una pausa delle ostilità, ha definito fuorviante la versione statunitense e mantiene un elevato livello di allerta militare. Non risulta ancora un accordo firmato né una conferma iraniana della cornice negoziale annunciata da Washington.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'Questa correzione riduce la forza dello scenario ribassista prospettato nell’ultimo controllo. La de-escalation è reale soltanto sul piano immediato: è fragile e non concordata pubblicamente dalle due parti, quindi il premio geopolitico non ha motivo di uscire tutto dal prezzo.',
    },
    {
      kind: 'scenarios',
      title: 'Effetto probabile, corretto',
      caption:
        'Ipotesi condizionate, non previsioni: descrivono una direzione attenuata rispetto al controllo precedente, non un’ampiezza.',
      items: [
        {
          label: 'Oro',
          tone: 'warn',
          text: 'Meno pressione ribassista di quanto stimato: il premio geopolitico potrebbe restare parzialmente incorporato.',
        },
        {
          label: 'Petrolio',
          tone: 'warn',
          text: 'Possibile calo iniziale, ma limitato, perché Hormuz non è ancora pienamente normalizzato.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Può mantenere la domanda rifugio, e resta quindi un freno per l’oro.',
        },
        {
          label: 'Treasury',
          tone: 'bear',
          text: 'I rendimenti lunghi restano elevati e continuano a frenare XAU/USD: venerdì il trentennale aveva toccato livelli pluriennali mentre l’oro cedeva l’1,26%.',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Sul fronte monetario non risultano nuovi atti dopo il comunicato del 29 luglio 2026, che la pagina ufficiale continua a indicare come l’ultimo documento di politica monetaria disponibile. È un dettaglio che pesa più della geopolitica: significa che la sponda contro cui il premio di rischio deve misurarsi non si è mossa.',
    },
    {
      kind: 'stats',
      title: 'I riferimenti citati',
      caption:
        'Riferimenti riportati nell’analisi per rendere verificabile il ragionamento, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Oro spot',
          value: '4.049,83',
          tone: 'bear',
          note: 'Chiusura di venerdì, in calo dell’1,26%',
        },
        {
          label: 'Tasso Fed',
          value: '3,50%-3,75%',
          tone: 'warn',
          note: 'Comunicato del 29 luglio, nessun atto successivo',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Le due invalidazioni',
      anchor: 'invalidazioni',
    },
    {
      kind: 'paragraph',
      text: 'Una lettura neutrale non si rompe da un lato solo: vale la pena tenere separate le condizioni che la sposterebbero verso il basso da quelle che la sposterebbero verso l’alto.',
    },
    {
      kind: 'balance',
      left: {
        title: 'Invalidazione rialzista',
        tone: 'bear',
        items: [
          'Accordo confermato anche da Teheran.',
          'Riapertura effettiva dello Stretto di Hormuz.',
          'Petrolio in discesa stabile.',
        ],
      },
      right: {
        title: 'Invalidazione ribassista',
        tone: 'bull',
        items: [
          'Nuovi attacchi.',
          'Fallimento esplicito dei negoziati.',
          'Ulteriori incidenti marittimi.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias fondamentale è neutrale, non più moderatamente ribassista. La pausa statunitense riduce il rischio di escalation immediata, ma la smentita iraniana impedisce di considerare avviata una de-escalation stabile: finché una delle due parti nega la ricostruzione dell’altra, la tregua è un’intenzione dichiarata, non un fatto condiviso.',
    },
    {
      kind: 'paragraph',
      text: 'Il principale fattore ribassista per l’oro resta quindi la combinazione di rendimenti statunitensi elevati e di una Fed ancora attenta all’inflazione, non un accordo geopolitico già raggiunto. È una distinzione che conta perché sposta l’attenzione da un titolo di giornale a una variabile che si misura ogni giorno.',
    },
    {
      kind: 'note',
      text: 'I livelli citati sono riferimenti all’ultima chiusura, riportati per rendere verificabile il ragionamento. Non sono obiettivi, non sono quotazioni in tempo reale e non descrivono livelli operativi.',
    },
  ],
};

const acquistiBancheCentraliRivisti: Article = {
  slug: 'banche-centrali-tornano-a-comprare-oro-rendimenti-freno',
  categories: ['usa', 'tasso-di-interesse', 'fed', 'geopolitica'],
  title: 'Le banche centrali tornano a comprare oro, ma i rendimenti restano il freno',
  kicker: 'Fondamentali · Controllo a tutto campo',
  dek:
    'Il World Gold Council ha rivisto al ribasso il primo trimestre e registrato un forte recupero nel ' +
    'secondo, con circa 289 tonnellate acquistate. Su tutto il resto — Fed, lavoro statunitense, dollaro, ' +
    'geopolitica — non risultano fatti nuovi: i fondamentali restano bilanciati.',
  publishedAt: '2026-08-02T16:06:00+02:00',
  author: AUTHOR,
  readingMinutes: 3,
  tags: ['World Gold Council', 'Riserve auree', 'Rendimenti USA', 'Cina', 'Polonia'],
  instruments: ['XAU/USD', 'DXY', 'Treasury'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'bassa',
    regime:
      'Fondamentali bilanciati: domanda strutturale delle banche centrali e premio geopolitico da una parte, ' +
      'rendimenti statunitensi elevati e Fed senza segnali di allentamento dall’altra.',
  },
  certainty: 'alta',
  certaintyNote:
    'Il fondamento è solido: una revisione pubblicata dal World Gold Council e una serie di assenze di ' +
    'notizie verificabili su Fed, dati macro e dossier iraniano. La cifra del secondo trimestre è però ' +
    'approssimata, e un controllo costruito in buona parte su ciò che non è successo dice poco su quanto ' +
    'durerà l’equilibrio descritto.',
  takeaways: [
    'Il World Gold Council ha rivisto i dati: gli acquisti delle banche centrali nel primo trimestre 2026 sono risultati molto più bassi di quanto inizialmente stimato.',
    'Nel secondo trimestre gli acquisti sono però tornati a crescere sensibilmente, intorno alle 289 tonnellate, con Polonia e Cina ancora fra i principali acquirenti.',
    'Per XAU/USD è un supporto strutturale di medio periodo, non un catalizzatore immediato per l’intraday.',
    'Dopo il FOMC del 29 luglio non risultano nuove decisioni sui tassi né interventi ufficiali che cambino le aspettative; non sono usciti nuovi dati macro né fatti nuovi sul dossier iraniano.',
    'Il bias fondamentale resta neutrale: il vantaggio rialzista è soltanto condizionato a una riaccensione delle tensioni o a un indebolimento di dollaro e rendimenti.',
  ],
  invalidation: [
    'Il vantaggio rialzista decade se le tensioni geopolitiche non si riaccendono e dollaro e rendimenti restano dove sono.',
    'L’equilibrio si rompe verso il basso se i rendimenti statunitensi salgono ancora senza un fatto geopolitico nuovo.',
    'Si rompe verso l’alto se gli acquisti delle banche centrali proseguono al ritmo del secondo trimestre mentre il dollaro si indebolisce.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il World Gold Council ha rivisto i propri dati sugli acquisti di oro delle banche centrali, e la correzione va in due direzioni opposte: il primo trimestre 2026 è risultato molto più debole di quanto stimato inizialmente, mentre il secondo è tornato a crescere sensibilmente.',
    },
    {
      kind: 'stats',
      title: 'Acquisti delle banche centrali',
      caption:
        'Stime riviste del World Gold Council riportate nell’analisi, non quotazioni né dati in tempo reale.',
      items: [
        {
          label: '2° trimestre 2026',
          value: '≈ 289 t',
          tone: 'bull',
          note: 'Polonia e Cina ancora fra i principali acquirenti',
        },
        {
          label: '1° trimestre 2026',
          value: 'Rivisto al ribasso',
          tone: 'bear',
          note: 'Molto più basso della stima iniziale',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Le due letture non si annullano, perché agiscono su orizzonti diversi. Nel breve termine il rallentamento del primo trimestre è un elemento meno favorevole all’oro di quanto si credesse. Nel medio periodo, però, il recupero del secondo indica che le banche centrali continuano ad accumulare, e questo sostiene il mercato.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Supporto strutturale, non catalizzatore',
      text: 'Per XAU/USD la domanda delle banche centrali è una gamba di medio periodo: agisce sul pavimento del mercato, non sul movimento della singola seduta. Aspettarsi che muova il prezzo nell’intraday significa chiedere a un dato trimestrale qualcosa che non può dare.',
    },
    {
      kind: 'heading',
      text: 'Che cosa non è cambiato',
      anchor: 'nulla-di-nuovo',
    },
    {
      kind: 'paragraph',
      text: 'Il resto del controllo è fatto di assenze, e in un controllo periodico contano quanto i fatti: dicono che l’impianto della lettura precedente regge.',
    },
    {
      kind: 'scenarios',
      title: 'I quattro fronti senza novità',
      items: [
        {
          label: 'Fed',
          tone: 'warn',
          text: 'Dopo il FOMC del 29 luglio non risultano nuove decisioni sui tassi né interventi ufficiali che cambino le aspettative di politica monetaria. Il mercato continua a valutare una Fed ancora restrittiva nei prossimi mesi.',
        },
        {
          label: 'Lavoro statunitense',
          tone: 'warn',
          text: 'Non sono stati pubblicati nuovi dati macro capaci di modificare il quadro dopo gli ultimi numeri su occupazione e inflazione. Il prossimo elemento di novità resta il calendario macroeconomico statunitense.',
        },
        {
          label: 'Dollaro e Treasury',
          tone: 'bear',
          text: 'Nessuna notizia nuova. Resta valido il tema principale: rendimenti statunitensi ancora elevati, che continuano a rappresentare il principale freno fondamentale per XAU/USD.',
        },
        {
          label: 'Geopolitica',
          tone: 'warn',
          text: 'Non risultano nuovi attacchi confermati, nuove sanzioni rilevanti né decisioni ufficiali statunitensi diverse da quelle già discusse sul dossier iraniano. Il premio geopolitico è ancora presente, ma senza una nuova accelerazione.',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'È proprio l’ultimo punto a impedire la conclusione più semplice: le tensioni ancora aperte fanno sì che l’oro non perda del tutto il proprio supporto, anche mentre i rendimenti lo frenano. Il mercato resta in attesa, e l’attesa non ha una direzione.',
    },
    {
      kind: 'heading',
      text: 'Il bilancio dei fondamentali',
      anchor: 'bilancio',
    },
    {
      kind: 'balance',
      left: {
        title: 'Positivo per l’oro',
        tone: 'bull',
        items: [
          'Ripresa degli acquisti delle banche centrali nel secondo trimestre.',
          'Rischio geopolitico ancora elevato e non riassorbito.',
        ],
      },
      right: {
        title: 'Negativo per l’oro',
        tone: 'bear',
        items: [
          'Rendimenti dei Treasury su livelli elevati.',
          'Fed che non ha ancora dato segnali di un allentamento imminente.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias fondamentale resta neutrale, con un leggero vantaggio per lo scenario rialzista soltanto se dovessero riaccendersi rapidamente le tensioni geopolitiche oppure indebolirsi dollaro e rendimenti. È un vantaggio condizionato, e finché la condizione non si verifica non cambia la lettura.',
    },
    {
      kind: 'note',
      text: 'La cifra del secondo trimestre è una stima approssimata del World Gold Council, riportata per rendere verificabile il ragionamento. Non è una quotazione, non è un dato in tempo reale e la revisione dei trimestri precedenti mostra quanto queste stime possano cambiare.',
    },
  ],
};

const opecQuoteHormuzTransito: Article = {
  slug: 'opec-alza-le-quote-e-una-metaniera-esce-da-hormuz',
  categories: ['geopolitica', 'asia', 'usa', 'fed'],
  title: 'OPEC+ alza le quote e una metaniera esce da Hormuz',
  kicker: 'Geopolitica · Premio di rischio sul petrolio',
  dek:
    'Due novità nella stessa direzione: un aumento delle quote produttive di circa 188.000 barili al giorno ' +
    'da settembre e il primo transito di una metaniera fuori da Hormuz dall’11 luglio. Entrambe riducono il ' +
    'premio di rischio sul petrolio, ma per l’oro l’effetto è meno lineare di quanto sembri.',
  publishedAt: '2026-08-02T16:13:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['OPEC+', 'Hormuz', 'Petrolio', 'De-escalation', 'Premio di rischio'],
  instruments: ['XAU/USD', 'Petrolio', 'DXY', 'Treasury'],
  horizons: ['breve'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'bassa',
    regime:
      'Premio di rischio sul petrolio in riduzione per offerta e navigazione, con l’effetto sull’oro attenuato ' +
      'dalla possibilità che rendimenti più bassi ne compensino la perdita di domanda rifugio.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sull’accordo OPEC+ e sul transito della nave, che sono entrambi fatti avvenuti. Scende a media ' +
    'sulla prosecuzione della de-escalation, che dipende da negoziati ancora aperti, e a media sull’effetto ' +
    'ribassista immediato per XAU/USD, dove due catene causali opposte possono annullarsi a vicenda.',
  takeaways: [
    'OPEC+ ha concordato un aumento delle quote produttive di circa 188.000 barili al giorno da settembre 2026, completando il ritiro progressivo di una parte dei tagli volontari.',
    'Reuters segnala però che l’offerta effettiva potrebbe crescere meno delle quote teoriche, perché guerre e interruzioni continuano a limitare alcune esportazioni.',
    'Una metaniera di QatarEnergy è riuscita a uscire dallo Stretto di Hormuz: è il primo transito di questo tipo segnalato dall’11 luglio, e i mercati azionari del Golfo sono saliti nella seduta domenicale.',
    'Le due novità vanno nella stessa direzione — riduzione del premio di rischio sul petrolio — ma per l’oro l’effetto è misto, perché un petrolio più debole può frenare i rendimenti statunitensi.',
    'Il bias resta neutrale con lieve pressione ribassista geopolitica, non chiaramente ribassista: la novità è probabilmente più negativa per il petrolio che per l’oro.',
  ],
  invalidation: [
    'Nuovi problemi a Hormuz: invalidazione immediata dello scenario di normalizzazione.',
    'L’offerta effettiva non cresce quanto le quote, perché guerre e interruzioni continuano a limitare le esportazioni.',
    'I negoziati falliscono e l’opzione militare, rimasta implicitamente aperta, torna sul tavolo.',
  ],
  nextEvent: {
    when: 'Domenica sera',
    title: 'Riapertura degli scambi',
    detail:
      'È il momento in cui si vedrà quale delle due catene prevale: la perdita di domanda rifugio o il calo dei rendimenti che ne deriva.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'OPEC+ ha concordato un aumento delle quote produttive di circa 188.000 barili al giorno a partire da settembre 2026. La decisione completa il progressivo ritiro di una parte dei tagli volontari introdotti negli anni precedenti.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Quote teoriche e offerta effettiva non coincidono',
      text: 'Reuters segnala che l’offerta reale potrebbe aumentare meno delle quote, perché guerre e interruzioni continuano a limitare alcune esportazioni. È la distanza fra ciò che un accordo consente di produrre e ciò che arriva davvero sul mercato: nel contesto attuale non è un dettaglio contabile.',
    },
    {
      kind: 'paragraph',
      text: 'Alla decisione sull’offerta si aggiunge un segnale sulla navigazione. Una nave metaniera di QatarEnergy è riuscita a uscire dallo Stretto di Hormuz: è il primo transito di questo tipo segnalato dall’11 luglio. I mercati azionari del Golfo hanno reagito positivamente alle speranze di de-escalation, con Arabia Saudita e Qatar in rialzo nella seduta domenicale.',
    },
    {
      kind: 'paragraph',
      text: 'Sul fronte monetario non risultano nuove comunicazioni della Federal Reserve capaci di modificare il quadro sui tassi: gli aggiornamenti successivi al FOMC riguardano principalmente la regolamentazione bancaria.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'Le due novità vanno nella stessa direzione, cioè verso una riduzione del premio di rischio sul petrolio.',
    },
    {
      kind: 'list',
      title: 'Le tre spinte nella stessa direzione',
      items: [
        'L’aumento OPEC+ amplia l’offerta potenziale.',
        'Il passaggio della nave attraverso Hormuz suggerisce che la navigazione non è completamente paralizzata.',
        'La pausa statunitense negli attacchi rafforza, almeno temporaneamente, le aspettative di de-escalation.',
      ],
    },
    {
      kind: 'scenarios',
      title: 'Effetto probabile alla riapertura',
      caption:
        'Ipotesi condizionate, non previsioni: indicano una direzione per ciascun mercato, non un’ampiezza.',
      items: [
        {
          label: 'Petrolio',
          tone: 'bear',
          text: 'Pressione ribassista, o rialzo più contenuto. È il mercato su cui la notizia dovrebbe avere l’effetto più diretto.',
        },
        {
          label: 'Oro',
          tone: 'warn',
          text: 'Effetto misto. La riduzione del rischio geopolitico è negativa per il premio rifugio, ma un petrolio più basso attenua il rischio inflazionistico e può frenare i rendimenti statunitensi, elemento potenzialmente positivo per XAU/USD.',
        },
        {
          label: 'Dollaro',
          tone: 'warn',
          text: 'Potrebbe perdere una parte della domanda rifugio, ma resta sostenuto se il mercato continua a prezzare una Fed restrittiva.',
        },
        {
          label: 'Treasury',
          tone: 'bull',
          text: 'Un petrolio più debole può ridurre le aspettative d’inflazione e favorire rendimenti più bassi: sarebbe il principale elemento capace di proteggere l’oro da una discesa più forte.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Quello che non è ancora dimostrato',
      anchor: 'cautele',
    },
    {
      kind: 'paragraph',
      text: 'Non è confermata una riapertura stabile e completa di Hormuz. Un singolo transito è un segnale incoraggiante, ma non dimostra che il traffico sia tornato normale: una nave che passa racconta che si può passare, non che si passi regolarmente.',
    },
    {
      kind: 'paragraph',
      text: 'Resta inoltre il quadro descritto nei controlli precedenti: Donald Trump mantiene implicitamente aperta l’opzione militare se i negoziati fallissero, mentre l’Iran resta in stato di elevata preparazione.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione per XAU/USD',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias fondamentale è neutrale con lieve pressione ribassista geopolitica, ma non chiaramente ribassista. La novità è probabilmente più negativa per il petrolio che per l’oro, e questa asimmetria è il punto: le due catene causali che partono dalla stessa notizia arrivano sull’oro con segni opposti.',
    },
    {
      kind: 'scenarios',
      title: 'Le tre configurazioni decisive alla riapertura',
      items: [
        {
          label: 'Conferma ribassista',
          tone: 'bear',
          text: 'Oro giù con DXY e rendimenti in rialzo: la perdita di domanda rifugio prevale e la lettura ribassista trova conferma.',
        },
        {
          label: 'Assorbimento e recupero',
          tone: 'bull',
          text: 'Petrolio giù, rendimenti giù e dollaro debole: l’oro potrebbe assorbire rapidamente la de-escalation e perfino recuperare.',
        },
        {
          label: 'Invalidazione immediata',
          tone: 'warn',
          text: 'Nuovi problemi a Hormuz: lo scenario di normalizzazione decade sul posto e il premio di rischio torna a formarsi.',
        },
      ],
    },
    {
      kind: 'note',
      text: 'Le cifre riportate sono quelle citate nelle fonti dell’analisi e servono a rendere verificabile il ragionamento. Non sono quotazioni in tempo reale, e la quota concordata da OPEC+ descrive l’offerta consentita, non quella che arriverà effettivamente sul mercato.',
    },
  ],
};

const interventoCoordinatoYen: Article = {
  slug: 'intervento-coordinato-usa-giappone-sullo-yen',
  categories: ['asia', 'usa', 'fed'],
  title: 'Intervento coordinato Stati Uniti-Giappone sullo yen',
  kicker: 'Valute · Intervento coordinato',
  dek:
    'Reuters riferisce del primo intervento congiunto dal 2011 a sostegno dello yen, sceso ai minimi da ' +
    'circa quarant’anni. Per l’oro cambia il segno del dollaro, e la struttura scelta — liquidità dalla Fed ' +
    'invece di vendite di Treasury — evita che i rendimenti salgano ancora.',
  publishedAt: '2026-08-02T18:20:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Yen', 'Intervento valutario', 'Dollaro', 'Cina', 'Liquidità'],
  instruments: ['XAU/USD', 'USD/JPY', 'DXY', 'Treasury'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'Possibile indebolimento coordinato del dollaro con rendimenti non ulteriormente spinti in alto, mentre ' +
      'la de-escalation iraniana e l’offerta OPEC+ continuano a ridurre il premio rifugio e quello energetico.',
  },
  certainty: 'media',
  certaintyNote:
    'Alta sull’intervento riportato da Reuters, media sulla sua durata e media sull’effetto rialzista per ' +
    'XAU/USD. L’annuncio ufficiale giapponese è però ancora atteso e alcuni dettagli restano da ' +
    'formalizzare: finché non arriva, il fatto è solido nella sostanza ma non nei numeri.',
  takeaways: [
    'Secondo Reuters, Giappone e Stati Uniti hanno effettuato un intervento coordinato sul mercato valutario a sostegno dello yen, sceso ai minimi da circa quarant’anni: sarebbe il primo intervento congiunto di questo tipo dal 2011.',
    'L’operazione avrebbe comportato acquisti di yen e vendite di dollari per un importo giapponese vicino a 59 miliardi di dollari, ma l’annuncio ufficiale giapponese è ancora atteso.',
    'Tokyo starebbe usando anche una linea di liquidità in dollari della Federal Reserve, evitando di vendere grandi quantità di Treasury e di provocare un’ulteriore impennata dei rendimenti.',
    'La Banca popolare cinese ha ribadito una politica «appropriatamente accomodante» e ampia liquidità per la seconda metà del 2026, dopo il rallentamento della crescita al 4,3% nel secondo trimestre.',
    'Il bias passa da neutrale a neutrale con lieve inclinazione rialzista: il sostegno viene dal possibile indebolimento coordinato del dollaro, non da un ritorno del premio geopolitico.',
  ],
  invalidation: [
    'L’intervento si rivela inefficace e il DXY torna forte.',
    'I rendimenti statunitensi accelerano nonostante la struttura scelta per l’operazione.',
    'Chiarimenti ufficiali ridimensionano il coinvolgimento statunitense.',
    'Lo yen si rafforza senza che il dollaro si indebolisca: l’effetto sull’oro sarebbe molto più limitato.',
  ],
  nextEvent: {
    when: 'Domenica sera',
    title: 'Riapertura degli scambi',
    detail:
      'È il primo momento in cui si potrà misurare l’efficacia dell’intervento; l’annuncio ufficiale giapponese è atteso e potrebbe precisarne l’importo.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Secondo Reuters, Giappone e Stati Uniti hanno effettuato un intervento coordinato sul mercato valutario per sostenere lo yen, precipitato ai minimi da circa quarant’anni. Sarebbe il primo intervento congiunto di questo tipo dal 2011.',
    },
    {
      kind: 'stats',
      title: 'L’intervento in cifre',
      caption:
        'Cifre riportate da Reuters e citate nell’analisi, non dati ufficiali né quotazioni in tempo reale.',
      items: [
        {
          label: 'Importo giapponese',
          value: '≈ 59 mld $',
          tone: 'bull',
          note: 'Acquisti di yen e vendite di dollari',
        },
        {
          label: 'Minimi dello yen',
          value: '≈ 40 anni',
          tone: 'bear',
          note: 'Il livello che ha reso necessaria l’operazione',
        },
        {
          label: 'Ultimo intervento congiunto',
          value: '2011',
          tone: 'warn',
          note: 'Quindici anni senza un’operazione di questo tipo',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'L’annuncio ufficiale è ancora atteso',
      text: 'La ricostruzione è di Reuters: l’annuncio ufficiale giapponese non è ancora arrivato e alcuni dettagli restano da formalizzare. L’importo, in particolare, va trattato come una cifra riportata e non come un dato confermato.',
    },
    {
      kind: 'heading',
      text: 'La struttura conta più dell’importo',
      anchor: 'struttura',
    },
    {
      kind: 'paragraph',
      text: 'Il punto tecnico è il più rilevante di tutta la vicenda: Tokyo starebbe utilizzando anche una linea di liquidità in dollari della Federal Reserve per procurarsi la valuta necessaria. In questo modo evita di vendere grandi quantità di Treasury statunitensi, e quindi di provocare un’ulteriore impennata dei rendimenti proprio mentre cerca di sostenere la propria valuta.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'L’effetto più diretto è potenzialmente ribassista sul dollaro, e passa per tre canali distinti.',
    },
    {
      kind: 'list',
      items: [
        'Acquisti di yen e vendite di dollari possono indebolire il DXY.',
        'Uno yen più forte può ridurre parte della pressione rialzista sul dollaro.',
        'L’uso della linea Fed limita il rischio che il Giappone venda Treasury in massa, evitando per ora un forte rialzo aggiuntivo dei rendimenti.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Per XAU/USD la combinazione fra un dollaro più debole e rendimenti non ulteriormente spinti verso l’alto sarebbe favorevole, e potrebbe compensare in parte la riduzione del premio geopolitico legata a Iran e Hormuz. È la prima volta in questa sequenza di controlli che il sostegno all’oro arriva dal lato valutario invece che da quello del rischio.',
    },
    {
      kind: 'heading',
      text: 'Lo stimolo monetario cinese',
      anchor: 'cina',
    },
    {
      kind: 'paragraph',
      text: 'La Banca popolare cinese ha ribadito una politica monetaria «appropriatamente accomodante», ampia liquidità e possibili aggiustamenti tempestivi degli strumenti nella seconda metà del 2026, dopo il rallentamento della crescita cinese al 4,3% nel secondo trimestre.',
    },
    {
      kind: 'paragraph',
      text: 'È un elemento moderatamente favorevole all’oro nel medio periodo, perché maggiore liquidità cinese può sostenere domanda interna, materie prime e acquisti di oro. Preso da solo, però, non è un catalizzatore intraday forte.',
    },
    {
      kind: 'heading',
      text: 'Che cosa verificare alla riapertura',
      anchor: 'verifiche',
    },
    {
      kind: 'list',
      title: 'Le quattro conferme da cercare',
      items: [
        'USD/JPY in forte discesa.',
        'DXY in indebolimento.',
        'Treasury a 2 e a 10 anni stabili o in calo.',
        'XAU/USD capace di mantenere gli eventuali rialzi.',
      ],
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Uno yen forte, da solo, non basta',
      text: 'Un rafforzamento dello yen senza un calo del DXY avrebbe un effetto molto più limitato sull’oro. La seconda condizione non discende automaticamente dalla prima: è quella da verificare per prima.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias fondamentale su XAU/USD passa da neutrale a neutrale con lieve inclinazione rialzista. Il nuovo sostegno deriva dal possibile indebolimento coordinato del dollaro, mentre la de-escalation iraniana e l’aumento dell’offerta OPEC+ continuano a ridurre il premio rifugio e quello energetico: due forze opposte, con la prima appena prevalente.',
    },
    {
      kind: 'note',
      text: 'Le cifre riportate provengono dalla ricostruzione di Reuters e servono a rendere verificabile il ragionamento. Non sono dati ufficiali, non sono quotazioni in tempo reale e l’importo dell’operazione potrebbe cambiare con l’annuncio giapponese.',
    },
  ],
};

const movimentoCrossAssetSiRafforza: Article = {
  slug: 'movimento-si-rafforza-petrolio-giu-dollaro-sotto-quota-100',
  categories: ['usa', 'tasso-di-interesse', 'geopolitica', 'fed'],
  title: 'Il movimento si rafforza: petrolio giù, dollaro sotto quota 100',
  kicker: 'Correlazioni · Controllo cross-asset',
  dek:
    'Il petrolio perde oltre il 6% sulle attese di un’intesa fra Stati Uniti e Iran, il Dollar Index scende ' +
    'sotto quota 100 e anche euro e sterlina guadagnano terreno: non è più una reazione circoscritta a ' +
    'USD/JPY. Per l’oro il sostegno arriva ora da tre lati insieme.',
  publishedAt: '2026-08-03T08:55:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Petrolio', 'Dollaro', 'Yen', 'Rendimenti', 'Iran'],
  instruments: ['XAU/USD', 'DXY', 'Brent', 'WTI', 'USD/JPY', 'Treasury'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'media',
    regime:
      'Movimento cross-asset coerente: petrolio in forte calo, dollaro debole contro tutte le principali ' +
      'valute e rendimenti statunitensi sotto potenziale pressione ribassista, con la minaccia di un nuovo ' +
      'intervento valutario a limitare il recupero del dollaro.',
  },
  certainty: 'media',
  certaintyNote:
    'Medio-alta sul bias immediato, media sulla sua durata nei prossimi giorni. I fatti sono variazioni di ' +
    'prezzo osservabili e una dichiarazione attribuita al segretario al Tesoro: l’incertezza riguarda quanto ' +
    'a lungo le tre conferme resteranno allineate, non la loro esistenza.',
  takeaways: [
    'Il petrolio perde oltre il 6%, con il mercato che aumenta le scommesse su una soluzione diplomatica fra Stati Uniti e Iran.',
    'Lo yen guadagna un altro 1% circa dopo l’intervento coordinato di Washington e Tokyo, e il Dollar Index scende sotto quota 100, intorno a 99,8.',
    'Euro e sterlina salgono contro il dollaro: il movimento non è più circoscritto a USD/JPY, ma riguarda tutte le principali valute.',
    'Il segretario al Tesoro Scott Bessent si dichiara pronto a ripetere l’intervento sullo yen e chiede di ampliare la facility FIMA della Fed, che fornisce dollari alle autorità monetarie estere senza costringerle a vendere Treasury.',
    'Il bias passa da neutrale con inclinazione rialzista a rialzista di forza media: la novità non è una singola notizia, ma la coerenza fra petrolio, dollaro e oro.',
  ],
  invalidation: [
    'Il Dollar Index recupera stabilmente quota 100.',
    'I Treasury a 2 e a 10 anni tornano in forte rialzo.',
    'I negoziati con l’Iran falliscono in modo dichiarato.',
    'Il petrolio rimbalza bruscamente, riportando in alto il rischio d’inflazione.',
  ],
  nextEvent: {
    when: 'Nei prossimi giorni',
    title: 'Dati sul lavoro statunitensi',
    detail:
      'Numeri deboli rafforzerebbero l’aspettativa di una Federal Reserve meno aggressiva; numeri molto forti riporterebbero in alto dollaro e rendimenti.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Rispetto all’ultimo controllo la reazione di mercato è diventata più netta, e soprattutto più coerente: il petrolio perde oltre il 6%, lo yen guadagna un altro 1% circa dopo l’intervento coordinato di Washington e Tokyo e il Dollar Index è sceso sotto quota 100, intorno a 99,8.',
    },
    {
      kind: 'stats',
      title: 'Il quadro cross-asset',
      caption:
        'Variazioni citate nell’analisi e riferite al momento del controllo, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Petrolio',
          value: 'oltre −6%',
          tone: 'bull',
          note: 'Scommesse in aumento su una soluzione diplomatica fra Stati Uniti e Iran',
        },
        {
          label: 'Yen',
          value: '≈ +1%',
          tone: 'bull',
          note: 'Guadagno aggiuntivo dopo l’intervento coordinato',
        },
        {
          label: 'Dollar Index',
          value: '≈ 99,8',
          tone: 'bull',
          note: 'La tenuta o meno di quota 100 è il primo riferimento per la sessione europea',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Non è più un movimento isolato',
      anchor: 'cross-asset',
    },
    {
      kind: 'paragraph',
      text: 'Ciò che cambia la lettura non è una nuova dichiarazione geopolitica, ma l’estensione del movimento: euro e sterlina stanno salendo contro il dollaro, e questo conferma che non si tratta più soltanto di una reazione circoscritta a USD/JPY. Il dollaro si sta indebolendo contro tutte le principali valute, non solo contro quella su cui è avvenuto l’intervento.',
    },
    {
      kind: 'paragraph',
      text: 'Nello stesso momento l’oro resta sostenuto mentre il petrolio crolla, una combinazione che di per sé non è scontata. Reuters collega il rialzo del metallo alla diminuzione dei timori inflazionistici e alla conseguente attenuazione delle pressioni sui tassi statunitensi: il sostegno arriva quindi dal canale dei rendimenti, non da quello del rischio.',
    },
    {
      kind: 'heading',
      text: 'Bessent e la facility FIMA',
      anchor: 'bessent',
    },
    {
      kind: 'paragraph',
      text: 'Il segretario al Tesoro Scott Bessent ha dichiarato che gli Stati Uniti sono pronti a ripetere l’intervento sullo yen qualora i movimenti tornassero disordinati. È una precisazione che pesa sul posizionamento: finché la minaccia resta credibile, chi scommette su un recupero rapido del dollaro deve mettere in conto un secondo intervento.',
    },
    {
      kind: 'paragraph',
      text: 'Bessent ha inoltre chiesto di ampliare la facility FIMA della Federal Reserve, lo strumento con cui le autorità monetarie estere ottengono dollari a fronte dei Treasury che già detengono, invece di venderli sul mercato.',
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Perché la richiesta sulla FIMA conta',
      text: 'È lo stesso principio già visto con la linea di liquidità della Fed, ma su scala più ampia: il Giappone può procurarsi i dollari necessari senza liquidare grandi quantità di titoli del Tesoro statunitense. Senza quelle vendite viene meno la spinta al rialzo dei rendimenti, che resta il freno principale per l’oro.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La conferma del quadro rialzista già emerso poggia su quattro passaggi che questa volta si tengono l’uno con l’altro.',
    },
    {
      kind: 'list',
      items: [
        'Il dollaro è in calo generalizzato, non solo contro lo yen: è la condizione più direttamente favorevole all’oro.',
        'Il petrolio molto più debole riduce il rischio d’inflazione.',
        'Un minore rischio d’inflazione può spingere i rendimenti dei Treasury verso il basso.',
        'Il rischio di ulteriori interventi valutari limita, almeno nel breve periodo, il potenziale di recupero del dollaro.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'La novità più importante non è dunque un fatto nuovo preso singolarmente, ma il fatto che il movimento sia diventato cross-asset e coerente: petrolio giù, dollaro giù e oro sostenuto raccontano la stessa cosa. Nei controlli precedenti le forze in campo si compensavano a vicenda; qui puntano nella stessa direzione.',
    },
    {
      kind: 'heading',
      text: 'Aspettative di mercato',
      anchor: 'aspettative',
    },
    {
      kind: 'paragraph',
      text: 'Se Brent e WTI resteranno su questi livelli e il Dollar Index non recupererà quota 100, XAU/USD potrebbe conservare un’impostazione positiva durante la sessione europea. Sono due condizioni verificabili in tempo reale, ed è da lì che conviene ripartire al controllo successivo.',
    },
    {
      kind: 'balance',
      title: 'Il prossimo bivio: i dati sul lavoro statunitensi',
      left: {
        title: 'Numeri deboli',
        tone: 'bull',
        items: [
          'Rafforzerebbero l’aspettativa di una Federal Reserve meno aggressiva.',
          'Rendimenti e dollaro avrebbero un motivo in più per scendere.',
          'Il quadro descritto qui ne uscirebbe confermato.',
        ],
      },
      right: {
        title: 'Numeri molto forti',
        tone: 'bear',
        items: [
          'Riporterebbero in alto dollaro e rendimenti.',
          'Metterebbero in discussione l’aspettativa di una Federal Reserve meno aggressiva.',
          'Sarebbe il primo elemento a incrinare la coerenza descritta qui.',
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
      text: 'Il bias fondamentale su XAU/USD resta orientato al rialzo, con un segnale più forte rispetto al controllo precedente: non perché sia arrivata una notizia più grande, ma perché tre mercati diversi la stanno confermando insieme.',
    },
    {
      kind: 'scenarios',
      title: 'Effetto immediato probabile',
      caption: 'Lettura per singolo mercato al momento del controllo, non previsioni di prezzo.',
      items: [
        {
          label: 'Oro',
          tone: 'bull',
          text: 'Sostenuto, con la spinta che arriva dal dollaro e dai rendimenti invece che dal premio di rischio.',
        },
        {
          label: 'Petrolio',
          tone: 'bear',
          text: 'Fortemente ribassista, trainato dalle scommesse su una soluzione diplomatica fra Stati Uniti e Iran.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Ribassista contro tutte le principali valute, con il rischio di un secondo intervento a limitarne il recupero.',
        },
        {
          label: 'Rendimenti USA',
          tone: 'bear',
          text: 'Pressione potenzialmente ribassista, per effetto del minore rischio d’inflazione e del mancato ricorso a vendite di Treasury.',
        },
      ],
    },
    {
      kind: 'note',
      text: 'I livelli e le variazioni citati servono a rendere verificabile il ragionamento e sono riferiti al momento del controllo: non sono quotazioni in tempo reale né obiettivi di prezzo affidabili.',
    },
  ],
};

export const ARTICLES: readonly Article[] = [
  movimentoCrossAssetSiRafforza,
  interventoCoordinatoYen,
  opecQuoteHormuzTransito,
  acquistiBancheCentraliRivisti,
  attaccoSospesoNonCancellato,
  cancellazioneAttaccoIran,
  attacchiEnergiaIraniana,
];
