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

const iranSmentisceNegoziatiDiretti: Article = {
  slug: 'iran-smentisce-negoziati-diretti-con-gli-stati-uniti',
  categories: ['geopolitica', 'asia', 'usa'],
  title: 'L’Iran smentisce i negoziati diretti con gli Stati Uniti',
  kicker: 'Geopolitica · Smentita di Teheran',
  dek:
    'Il ministero degli Esteri di Teheran nega che siano in corso trattative: i colloqui mediati dall’Oman ' +
    'riguardano soltanto un corridoio temporaneo per le navi, e lo Stretto non sarà riaperto del tutto finché ' +
    'continuerà quella che l’Iran definisce aggressione americana. Il mercato stava prezzando l’esatto contrario.',
  publishedAt: '2026-08-03T10:05:00+02:00',
  author: AUTHOR,
  readingMinutes: 3,
  tags: ['Iran', 'Hormuz', 'Oman', 'Petrolio', 'Premio di rischio'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'DXY', 'Treasury'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'bassa',
    regime:
      'Premio geopolitico che resta in parte in piedi dopo la smentita di Teheran, contro un mercato che ' +
      'continua a prezzare una soluzione diplomatica: il sostegno rifugio all’oro convive con il rischio che ' +
      'petrolio e rendimenti statunitensi rimbalzino insieme.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sulla dichiarazione iraniana, che è un fatto dichiarato e verificabile; media sull’effetto di ' +
    'mercato, perché la stessa notizia sostiene l’oro come rifugio e insieme apre a un rimbalzo di petrolio ' +
    'e rendimenti. La solidità del fatto non si trasferisce alla conclusione operativa.',
  takeaways: [
    'Il ministero degli Esteri iraniano dichiara che al momento non sono in corso negoziati con gli Stati Uniti.',
    'I colloqui mediati dall’Oman riguardano soltanto la creazione di un corridoio temporaneo e sicuro nello Stretto di Hormuz, non un accordo politico complessivo.',
    'Teheran aggiunge che lo Stretto non potrà essere riaperto pienamente finché continuerà quella che definisce «aggressione» americana.',
    'La smentita contrasta con l’ottimismo su cui il petrolio resta in forte calo e le Borse europee hanno aperto in rialzo.',
    'Il bias resta rialzista ma perde forza: il premio rifugio regge, però un rimbalzo di petrolio e rendimenti toglierebbe all’oro il vantaggio del dollaro debole.',
  ],
  invalidation: [
    'Arriva una conferma ufficiale di negoziati diretti fra Stati Uniti e Iran.',
    'Viene raggiunto un accordo verificabile sulla riapertura dello Stretto di Hormuz.',
    'Il petrolio continua a scendere nonostante la smentita iraniana.',
  ],
  nextEvent: {
    when: 'Nei prossimi giorni',
    title: 'L’emergere o meno di un canale negoziale concreto',
    detail:
      'Senza un canale verificabile il mercato potrebbe ridurre le scommesse su una normalizzazione veloce di Hormuz; un forte rimbalzo del petrolio riporterebbe però in primo piano le aspettative inflazionistiche.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il ministero degli Esteri iraniano ha dichiarato che al momento non sono in corso negoziati con gli Stati Uniti. Teheran sta parlando con l’Oman soltanto per creare un corridoio temporaneo e sicuro nello Stretto di Hormuz, e ha aggiunto che lo Stretto non potrà essere riaperto pienamente finché continuerà quella che definisce «aggressione» americana.',
    },
    {
      kind: 'paragraph',
      text: 'La distinzione non è formale. Un corridoio temporaneo per il passaggio delle navi e un accordo politico complessivo sono due cose diverse, e finora è sul tavolo soltanto la prima: la mediazione omanita riguarda la logistica del transito, non la fine della crisi.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il mercato stava prezzando il contrario',
      text: 'La dichiarazione contrasta con l’ottimismo costruito sull’idea di trattative imminenti e di una rapida riapertura di Hormuz. Nel frattempo il petrolio resta in forte calo e le Borse europee hanno aperto in rialzo proprio su quelle speranze: la smentita arriva quindi su posizioni già prese.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La notizia indebolisce lo scenario di de-escalation rapida, ma lo fa su quattro fronti che non spingono tutti nella stessa direzione.',
    },
    {
      kind: 'list',
      items: [
        'Aumenta il rischio che il crollo del petrolio sia stato eccessivo.',
        'Mantiene in piedi una parte del premio geopolitico sull’oro.',
        'Può frenare la discesa dei rendimenti statunitensi, se il petrolio recupera.',
        'Può riportare domanda rifugio sul dollaro, limitando il vantaggio che XAU/USD ricavava da un DXY debole.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'I primi due punti sostengono l’oro, gli altri due lo frenano. È la ragione per cui una notizia che riaccende il rischio geopolitico non è, questa volta, automaticamente rialzista.',
    },
    {
      kind: 'heading',
      text: 'Effetto immediato',
      anchor: 'effetto-immediato',
    },
    {
      kind: 'scenarios',
      title: 'Lettura per singolo mercato',
      caption: 'Effetti probabili al momento del controllo, non previsioni di prezzo.',
      items: [
        {
          label: 'Oro',
          tone: 'bull',
          text: 'Moderatamente favorevole, perché resta aperto il rischio geopolitico.',
        },
        {
          label: 'Petrolio',
          tone: 'warn',
          text: 'Possibile recupero parziale dopo il forte ribasso.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Possibile lieve sostegno rifugio, che eroderebbe il vantaggio dell’oro dal lato valutario.',
        },
        {
          label: 'Treasury',
          tone: 'warn',
          text: 'Rendimento potenzialmente stabile o in recupero, se il petrolio rimbalza e tornano i timori inflazionistici.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Nei prossimi giorni',
      anchor: 'prossimi-giorni',
    },
    {
      kind: 'paragraph',
      text: 'Se non emergerà un canale negoziale concreto, il mercato potrebbe ridurre le scommesse su una normalizzazione veloce di Hormuz. Il risultato però non è univoco, e conviene tenere separate le due strade.',
    },
    {
      kind: 'balance',
      title: 'Due esiti che non coincidono',
      left: {
        title: 'Nessun canale negoziale',
        tone: 'bull',
        items: [
          'Il mercato ridimensiona l’ipotesi di una riapertura veloce di Hormuz.',
          'Il premio rifugio sull’oro resta in piedi più a lungo.',
          'È la parte della notizia che sostiene XAU/USD.',
        ],
      },
      right: {
        title: 'Forte rimbalzo del petrolio',
        tone: 'bear',
        items: [
          'Le aspettative inflazionistiche tornano a salire.',
          'I rendimenti statunitensi si riprendono invece di scendere.',
          'È la via attraverso cui la stessa notizia diventa negativa per l’oro.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Aspettative di mercato',
      anchor: 'aspettative',
    },
    {
      kind: 'paragraph',
      text: 'Il mercato sta ancora prezzando una possibile soluzione diplomatica, ma questa è ormai un’aspettativa e non un fatto confermato. I colloqui mediati dall’Oman riguardano per ora soprattutto il passaggio temporaneo delle navi: leggerli come l’anticamera di un accordo politico è una scelta di interpretazione, non una lettura dei fatti disponibili.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias fondamentale su XAU/USD resta moderatamente rialzista, ma più fragile e meno lineare del controllo precedente. La smentita iraniana sostiene l’oro come bene rifugio e allo stesso tempo può provocare un rimbalzo del petrolio e dei rendimenti statunitensi: per questo la notizia non è automaticamente e fortemente rialzista.',
    },
    {
      kind: 'note',
      text: 'La parte solida di questa lettura è la dichiarazione iraniana; l’effetto di mercato che se ne ricava resta un’ipotesi. Le due cose vanno tenute distinte, tanto più che qui puntano in direzioni opposte.',
    },
  ],
};

const williamsPoliticaBenPosizionata: Article = {
  slug: 'williams-politica-della-fed-ben-posizionata',
  categories: ['tasso-di-interesse', 'usa', 'fed'],
  title: 'Williams: la politica della Fed è «ben posizionata»',
  kicker: 'Federal Reserve · Intervista a Williams',
  dek:
    'Il presidente della Fed di New York si aspetta ancora un rallentamento dell’inflazione fra il 2026 e il ' +
    '2027 e dice di aver sostenuto con convinzione la scelta di lasciare i tassi fermi. È una posizione più ' +
    'morbida di quella dei tre membri del FOMC che la scorsa settimana chiedevano un rialzo immediato.',
  publishedAt: '2026-08-03T12:50:00+02:00',
  author: AUTHOR,
  readingMinutes: 3,
  tags: ['Federal Reserve', 'Williams', 'Inflazione', 'Dazi', 'Tassi'],
  instruments: ['XAU/USD', 'DXY', 'Treasury', 'Brent'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'media',
    regime:
      'Fed che può continuare ad aspettare invece di alzare subito, con il dollaro ai minimi da metà giugno e ' +
      'i rendimenti in calo. Il rischio di un rialzo più avanti resta però aperto e legato ai prossimi dati ' +
      'core su inflazione e lavoro.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sulle dichiarazioni, che sono riportate e verificabili; media sull’effetto di mercato. Pesano due ' +
    'cose in senso opposto alla notizia: l’intervista è stata realizzata il 31 luglio e pubblicata solo oggi, ' +
    'e i movimenti favorevoli all’oro erano già in corso prima che uscisse.',
  takeaways: [
    'John Williams, presidente della Fed di New York, si aspetta ancora un rallentamento dell’inflazione nella seconda metà del 2026 e nel 2027, e ha sostenuto con convinzione la scelta di lasciare i tassi al 3,50%-3,75%.',
    'Considera la politica attuale «ben posizionata», perché crescita e mercato del lavoro non mostrano segnali evidenti di surriscaldamento.',
    'Ritiene che l’effetto inflazionistico dei dazi possa avere raggiunto il picco, ma avverte che la Fed sarebbe pronta ad alzare i tassi senza un ritorno credibile dell’inflazione verso il 2%.',
    'È una posizione meno aggressiva di quella dei tre membri del FOMC che la scorsa settimana avevano chiesto un rialzo immediato.',
    'Il contesto resta favorevole all’oro — dollaro ai minimi da metà giugno, decennale in calo di 5-6 punti base, Brent quasi −5% — ma i movimenti erano già iniziati prima dell’intervista.',
  ],
  invalidation: [
    'Escono dati statunitensi molto forti.',
    'L’inflazione core si dimostra persistente.',
    'Il petrolio rimbalza nettamente.',
    'I Treasury a 2 e a 10 anni recuperano rapidamente nonostante le parole di Williams.',
  ],
  nextEvent: {
    when: 'Nei prossimi giorni',
    title: 'Dati core su inflazione e lavoro',
    detail:
      'Williams ha chiarito che ogni decisione dipenderà da lì. Il rischio di un rialzo a settembre o nei mesi successivi resta aperto.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il presidente della Federal Reserve di New York, John Williams, ha dichiarato di aspettarsi ancora un rallentamento dell’inflazione nella seconda metà del 2026 e nel 2027. Ha detto di aver sostenuto con convinzione la decisione di lasciare i tassi al 3,50%-3,75% e considera la politica attuale «ben posizionata».',
    },
    {
      kind: 'paragraph',
      text: 'La motivazione che dà è la stessa che regge l’attesa: crescita e mercato del lavoro non mostrano segnali evidenti di surriscaldamento. Se l’economia non sta correndo, non c’è ragione di stringere adesso.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'L’intervista è del 31 luglio',
      text: 'Reuters l’ha pubblicata oggi alle 12:02 italiane, ma è stata realizzata il 31 luglio. Le parole di Williams non sono quindi una reazione a quanto è successo da allora — l’intervento sullo yen, il crollo del petrolio, la smentita iraniana — e questo va tenuto presente nel valutarne il peso.',
    },
    {
      kind: 'heading',
      text: 'Dazi, petrolio e la porta lasciata aperta',
      anchor: 'dazi-e-petrolio',
    },
    {
      kind: 'paragraph',
      text: 'Williams ritiene che l’effetto inflazionistico dei dazi possa avere raggiunto il picco. Aggiunge che, se il petrolio si stabilizzerà o scenderà, anche la spinta proveniente dal conflitto mediorientale dovrebbe attenuarsi: due delle fonti di pressione sui prezzi verrebbero meno insieme.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'La porta al rialzo resta aperta',
      text: 'Williams ha precisato che la Fed sarebbe pronta ad alzare i tassi qualora i dati non mostrassero un ritorno credibile dell’inflazione verso il 2%. Non è una promessa di attesa a tempo indeterminato, ed è la parte della dichiarazione che il mercato tende a saltare.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La posizione è meno aggressiva di quella dei tre membri del FOMC che la scorsa settimana avevano chiesto un rialzo immediato. Williams non promette un taglio, ma rafforza l’idea che la Fed possa continuare ad aspettare anziché aumentare subito i tassi: per l’oro è la differenza fra un freno che stringe e uno che resta dov’è.',
    },
    {
      kind: 'scenarios',
      title: 'Effetto immediato probabile',
      caption: 'Lettura per singolo mercato al momento del controllo, non previsioni di prezzo.',
      items: [
        {
          label: 'Oro',
          tone: 'bull',
          text: 'Moderatamente positivo: si allontana l’ipotesi di una stretta immediata.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Lieve pressione ribassista, coerente con il resto della giornata.',
        },
        {
          label: 'Treasury',
          tone: 'bull',
          text: 'Possibile ulteriore sollievo sui rendimenti, che è il canale attraverso cui l’oro ne beneficia davvero.',
        },
        {
          label: 'Petrolio',
          tone: 'neutral',
          text: 'Nessun effetto diretto: resta guidato soprattutto da Iran e Stretto di Hormuz.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Il contesto di mercato',
      anchor: 'contesto',
    },
    {
      kind: 'stats',
      title: 'Dove sono i mercati mentre esce l’intervista',
      caption:
        'Riferimenti citati nell’analisi al momento del controllo, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Dollaro',
          value: 'minimi da metà giugno',
          tone: 'bull',
          note: 'Il livello più basso in circa un mese e mezzo',
        },
        {
          label: 'Treasury 10 anni',
          value: '−5/−6 pb',
          tone: 'bull',
          note: 'Il canale da cui l’oro trae il beneficio maggiore',
        },
        {
          label: 'Brent',
          value: 'quasi −5%',
          tone: 'bull',
          note: 'Meno pressione inflazionistica dal lato energetico',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Il quadro è dunque favorevole all’oro su tutti e tre i fronti. Non è però possibile attribuire questi movimenti soltanto alle parole di Williams: erano iniziati prima, sulla scia dello yen e del calo del petrolio. L’intervista si inserisce in una direzione già presa, la conferma, ma non l’ha originata.',
    },
    {
      kind: 'heading',
      text: 'Aspettative e interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias su XAU/USD resta moderatamente rialzista e ne esce leggermente rafforzato. La novità riduce il rischio di un rialzo immediato della Fed, ma non elimina quello di settembre o dei mesi successivi: Williams ha chiarito che ogni decisione dipenderà dai prossimi dati core sull’inflazione e sul lavoro.',
    },
    {
      kind: 'note',
      text: 'Le dichiarazioni sono la parte solida di questa lettura; l’effetto di mercato che se ne ricava è una deduzione. I riferimenti numerici servono a rendere verificabile il ragionamento e non sono quotazioni in tempo reale.',
    },
  ],
};

const interventoYenVendutiEuro: Article = {
  slug: 'intervento-sullo-yen-washington-ha-venduto-euro',
  categories: ['asia', 'usa', 'europa', 'fed'],
  title: 'Sullo yen Washington ha venduto euro, non dollari',
  kicker: 'Valute · Struttura dell’intervento',
  dek:
    'Il coordinamento fra Stati Uniti e Giappone è confermato, ma la gamba americana dell’operazione non era ' +
    'in dollari: secondo il Financial Times Washington ha venduto euro. Cambia il significato dell’intervento ' +
    'per il dollaro, e con esso uno dei fattori rialzisti dell’oro.',
  publishedAt: '2026-08-03T15:00:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Yen', 'Euro', 'Intervento valutario', 'Dollaro', 'BCE'],
  instruments: ['XAU/USD', 'USD/JPY', 'EUR/USD', 'DXY', 'Treasury'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'Sostegno allo yen ottenuto senza indebolire il dollaro nel suo complesso: restano favorevoli il calo ' +
      'del petrolio e quello dei rendimenti, ma viene meno la lettura dell’intervento come volontà americana ' +
      'di un dollaro più debole.',
  },
  certainty: 'media',
  certaintyNote:
    'Alta sul coordinamento fra Stati Uniti e Giappone, che è confermato; medio-alta sull’utilizzo dell’euro, ' +
    'riportato dal Financial Times e confermato a Reuters da una fonte operativa ma non ancora dai documenti ' +
    'ufficiali; media sull’impatto per XAU/USD, che è una deduzione e non un fatto osservato.',
  takeaways: [
    'Il coordinamento fra Giappone e Stati Uniti sull’acquisto di yen è confermato: su questo non ci sono più dubbi.',
    'La novità è la valuta venduta dalla parte americana: non dollari ma euro, secondo il Financial Times e una fonte operativa citata da Reuters. Tesoro statunitense e Fed di New York non hanno ancora pubblicato i dettagli ufficiali.',
    'Cambia il significato dell’operazione: sostenere lo yen senza provocare un calo generalizzato del dollaro, anche per non alimentare ulteriormente l’inflazione americana.',
    'Per l’oro si indebolisce uno dei fattori rialzisti, perché il dollaro può stabilizzarsi o recuperare, soprattutto contro l’euro; Treasury neutrali o leggermente favoriti, petrolio non toccato e ancora guidato dal dossier Iran-Hormuz.',
    'Della BCE si sa soltanto che sarebbe stata in contatto con la Fed: non risulta una sua partecipazione all’operazione. Il bias su XAU/USD passa da moderatamente rialzista a neutrale con lieve inclinazione rialzista.',
  ],
  invalidation: [
    'Il DXY continua a scendere in modo generalizzato invece di stabilizzarsi.',
    'I Treasury si indeboliscono ancora e l’oro mantiene comunque il rialzo.',
    'Arriva una smentita ufficiale americana sull’utilizzo dell’euro.',
    'Emerge una partecipazione diretta della BCE all’operazione e non un semplice contatto con la Fed.',
  ],
  nextEvent: {
    when: 'Dopo l’apertura americana',
    title: 'Prima verifica su dollaro e oro',
    detail:
      'È il momento in cui si vedrà se il dollaro si stabilizza davvero contro euro invece di continuare a cedere su tutti i fronti. Nel frattempo non risultano nuove decisioni della Fed, nuovi dati statunitensi o sviluppi su Iran e Hormuz.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il coordinamento fra Giappone e Stati Uniti a sostegno dello yen è confermato. La precisazione che arriva ora riguarda però un dettaglio tecnico che ne cambia il senso: la parte americana dell’operazione non sarebbe stata fatta vendendo dollari, ma vendendo euro. Lo ha riportato il Financial Times e una fonte operativa lo ha confermato a Reuters.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'I dettagli ufficiali non sono ancora usciti',
      text: 'Il Tesoro statunitense e la Federal Reserve di New York non hanno pubblicato i dettagli dell’operazione. La ricostruzione è giornalistica e va trattata come tale: solida abbastanza da cambiare la lettura, non abbastanza da chiudere la questione.',
    },
    {
      kind: 'heading',
      text: 'Perché la valuta venduta cambia tutto',
      anchor: 'valuta-venduta',
    },
    {
      kind: 'paragraph',
      text: 'Nella prima ricostruzione l’intervento sembrava indicare una volontà americana di indebolire il dollaro: se Washington vende dollari per comprare yen, il messaggio al mercato è che un dollaro più debole non le dispiace. La vendita di euro dice l’opposto. Gli Stati Uniti vogliono sostenere lo yen senza provocare un calo generalizzato del biglietto verde, anche per non alimentare ulteriormente l’inflazione interna.',
    },
    {
      kind: 'paragraph',
      text: 'È una distinzione che vale più dell’importo dell’operazione. Un intervento contro il dollaro e un intervento a spese dell’euro producono lo stesso effetto su USD/JPY e due effetti opposti sul Dollar Index.',
    },
    {
      kind: 'heading',
      text: 'Che cosa cambia mercato per mercato',
      anchor: 'effetti',
    },
    {
      kind: 'scenarios',
      title: 'La lettura rivista',
      caption:
        'Deduzioni tratte dalla struttura dell’operazione così come è stata riportata, non movimenti già osservati.',
      items: [
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Potrebbe stabilizzarsi o recuperare, soprattutto contro l’euro: è la valuta che ha fatto da contropartita all’intervento.',
        },
        {
          label: 'Oro',
          tone: 'bear',
          text: 'Perde parte della spinta che stava ricevendo da un DXY debole. Il canale valutario, che era il sostegno più recente, si assottiglia.',
        },
        {
          label: 'Treasury',
          tone: 'bull',
          text: 'Impatto neutrale o leggermente favorevole: la struttura scelta evita vendite massicce di titoli statunitensi.',
        },
        {
          label: 'Petrolio',
          tone: 'neutral',
          text: 'Nessun effetto diretto. Resta guidato dal dossier Iran-Hormuz, che non ha registrato sviluppi nello stesso intervallo.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Il ruolo della BCE',
      anchor: 'bce',
    },
    {
      kind: 'paragraph',
      text: 'L’uso dell’euro sarebbe stato scelto proprio per tenere l’intervento concentrato sullo yen. Resta aperta la domanda su chi abbia fornito quegli euro, e qui conviene essere precisi: di una partecipazione diretta della BCE non c’è notizia. È noto soltanto che la Banca centrale europea sarebbe stata in contatto con la Fed.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Un contatto non è una partecipazione',
      text: 'Se la BCE avesse preso parte all’operazione, la portata sarebbe molto maggiore: significherebbe un coordinamento a tre e non a due. Allo stato non risulta, ed è una differenza da non dare per colmata in attesa di conferme.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias su XAU/USD passa da moderatamente rialzista a neutrale con lieve inclinazione rialzista. Petrolio e rendimenti in discesa continuano a sostenere l’oro, e sono le due gambe che reggono ancora la lettura. Quella che viene a mancare è la terza: l’intervento sullo yen non può più essere considerato la prova di una volontà americana di indebolire tutto il dollaro.',
    },
    {
      kind: 'note',
      text: 'La parte solida di questa lettura è il coordinamento, confermato; l’utilizzo dell’euro è riportato dalla stampa e in attesa dei documenti ufficiali; l’effetto su XAU/USD è una deduzione che va verificata sui prezzi. La prossima verifica utile è dopo l’apertura americana.',
    },
  ],
};

const primiComponentiIsm: Article = {
  slug: 'primi-dati-ism-prezzi-sopra-le-attese-ordini-in-aumento',
  categories: ['usa', 'tasso-di-interesse', 'fed'],
  title: 'Primi dati ISM: prezzi sopra le attese, ordini in aumento',
  kicker: 'Dati USA · Primi componenti ISM',
  dek:
    'Alle 16:00 italiane sono usciti alcuni componenti del manifatturiero statunitense: prezzi pagati sopra ' +
    'le attese ma in discesa, nuovi ordini in aumento. Il dato ISM principale non è ancora verificabile, e ' +
    'dollaro e rendimenti non hanno ancora invertito la seduta.',
  publishedAt: '2026-08-03T16:05:00+02:00',
  author: AUTHOR,
  readingMinutes: 3,
  tags: ['ISM', 'Prezzi pagati', 'Nuovi ordini', 'PMI', 'Inflazione'],
  instruments: ['XAU/USD', 'DXY', 'Treasury', 'Brent'],
  horizons: ['breve'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'Componenti ISM leggermente sfavorevoli all’oro — ordini solidi e prezzi ancora alti — ma dollaro e ' +
      'rendimenti che nella seduta continuano a scendere: la lettura resta appena inclinata al rialzo e più ' +
      'fragile di prima, in attesa che il quadro cross-asset si pronunci.',
  },
  certainty: 'media',
  certaintyNote:
    'Alta sui componenti già pubblicati, che sono numeri usciti e verificabili; media sull’impatto, perché ' +
    'manca ancora la conferma del dato ISM principale e la reazione completa del mercato. È una lettura presa ' +
    'a pochi minuti dall’uscita, con una parte del quadro ancora scoperta.',
  takeaways: [
    'Prezzi pagati ISM a 71,1, sopra il 70,0 atteso ma in calo dal 73,0 precedente.',
    'Nuovi ordini a 56,7, in aumento dal 56,0: la domanda industriale statunitense non sta cedendo.',
    'Poco prima, il PMI manifatturiero finale di S&P Global era risultato 53,9, appena sopra il 53,8 preliminare e atteso.',
    'Il dato ISM principale non è ancora comparso in modo affidabile nelle fonti ufficiali e nei calendari consultati: non viene riportato alcun numero non verificato.',
    'Lettura mista e leggermente sfavorevole all’oro, ma DXY e rendimenti risultano ancora in calo nella seduta: il dato non ha prodotto una vera inversione cross-asset. Bias intraday ancora neutrale con lieve inclinazione rialzista, più fragile.',
  ],
  invalidation: [
    'Oro in calo, DXY in recupero e Treasury a 2 e a 10 anni in salita nello stesso momento.',
    'Il dato ISM principale, una volta verificabile, smentisce il quadro suggerito dai componenti.',
    'I prezzi pagati vengono letti come una nuova accelerazione inflazionistica invece che come una discesa dal 73,0.',
  ],
  nextEvent: {
    when: 'Nei prossimi minuti',
    title: 'Dato ISM principale e reazione cross-asset',
    detail:
      'Servono il numero principale, quando sarà verificabile, e la direzione presa insieme da oro, dollaro e rendimenti: è lì che si vede se la lettura regge o si ribalta.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Alle 16:00 italiane sono stati pubblicati alcuni componenti del manifatturiero statunitense. Sono numeri parziali — il dato principale manca ancora — ma sufficienti a spostare di poco la lettura su XAU/USD.',
    },
    {
      kind: 'stats',
      title: 'I numeri usciti',
      caption:
        'Componenti pubblicati e verificati al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Prezzi pagati ISM',
          value: '71,1',
          tone: 'bear',
          note: 'Sopra il 70,0 atteso, ma in calo dal 73,0 precedente',
        },
        {
          label: 'Nuovi ordini ISM',
          value: '56,7',
          tone: 'bear',
          note: 'In aumento dal 56,0',
        },
        {
          label: 'PMI S&P Global finale',
          value: '53,9',
          tone: 'warn',
          note: 'Appena sopra il 53,8 preliminare e atteso',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il dato principale non è ancora verificabile',
      text: 'L’ISM Manufacturing PMI non è comparso in modo affidabile nelle pagine ufficiali e nei calendari consultati pochi minuti dopo l’uscita. Un numero non verificato non viene riportato: la lettura qui sotto poggia sui soli componenti già pubblicati.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La lettura iniziale è mista, ma nel complesso leggermente sfavorevole all’oro. Due elementi tirano nella stessa direzione e uno li attenua.',
    },
    {
      kind: 'balance',
      title: 'Come si distribuiscono i tre elementi',
      left: {
        title: 'Sfavorevoli all’oro',
        tone: 'bear',
        items: [
          'Ordini più forti: la domanda industriale statunitense non sta cedendo.',
          'Prezzi ancora molto elevati e sopra le attese: aumenta il rischio che la Fed debba restare restrittiva.',
        ],
      },
      right: {
        title: 'Che attenua',
        tone: 'bull',
        items: [
          'I prezzi sono comunque scesi dal 73,0 al 71,1: non è una nuova accelerazione inflazionistica netta.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Effetto probabile immediato',
      anchor: 'effetto-immediato',
    },
    {
      kind: 'scenarios',
      caption: 'Effetti attesi dalla lettura del dato, non movimenti già osservati.',
      items: [
        {
          label: 'Oro',
          tone: 'bear',
          text: 'Lieve pressione ribassista, o quantomeno maggiore volatilità.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Piccolo sostegno, coerente con ordini solidi e prezzi ancora alti.',
        },
        {
          label: 'Rendimenti USA',
          tone: 'bear',
          text: 'Rischio di rimbalzo, soprattutto sulla scadenza a 2 anni, che è la più sensibile alle attese sulla Fed.',
        },
        {
          label: 'Petrolio',
          tone: 'neutral',
          text: 'Effetto marginale: resta il dossier Iran a guidarlo.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Per ora nessuna inversione cross-asset',
      text: 'DXY e rendimenti dei Treasury risultano ancora in calo nella seduta. Il dato non ha prodotto una vera inversione: è la ragione per cui la lettura resta appena inclinata al rialzo invece di girare.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias intraday su XAU/USD resta neutrale con lieve inclinazione rialzista, ma più fragile di prima: si regge ora su una divergenza aperta fra ciò che il dato suggerisce e ciò che i prezzi stanno facendo.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Le tre condizioni che renderebbero il segnale davvero ribassista',
      items: ['Oro in discesa.', 'DXY in recupero.', 'Treasury a 2 e a 10 anni in salita.'],
      text: 'Contano solo se si presentano insieme e nei prossimi minuti: presa singolarmente, nessuna delle tre basta.',
    },
    {
      kind: 'note',
      text: 'I numeri riportati sono i componenti già pubblicati; il dato ISM principale è volutamente assente perché non ancora verificabile. Gli effetti descritti sono deduzioni da confrontare con i prezzi, non movimenti osservati.',
    },
  ],
};

const ismManifatturieroFortissimo: Article = {
  slug: 'ism-manifatturiero-a-55-6-piu-forte-del-previsto',
  categories: ['usa', 'tasso-di-interesse', 'fed'],
  title: 'ISM manifatturiero a 55,6: molto più forte del previsto',
  kicker: 'Dati USA · ISM manifatturiero',
  dek:
    'Il dato principale è arrivato ed è una sorpresa nettamente positiva: 55,6 contro 54,0 atteso, con ' +
    'l’occupazione manifatturiera tornata sopra la soglia di espansione. È molto più forte di quanto ' +
    'apparisse dai soli componenti disponibili poco fa, e per l’oro cambia il segno della lettura.',
  publishedAt: '2026-08-03T16:15:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['ISM', 'Occupazione', 'Prezzi pagati', 'Fed', 'Spesa per costruzioni'],
  instruments: ['XAU/USD', 'DXY', 'Treasury', 'Brent'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'media',
    regime:
      'Crescita industriale statunitense più robusta del previsto e occupazione manifatturiera tornata in ' +
      'espansione, con prezzi ancora sopra 70. Il petrolio debole continua a sostenere l’oro per via ' +
      'indiretta, ma non basta più a mantenere l’inclinazione rialzista.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sul dato, che è pubblicato e completo in tutte le sue componenti; medio-alta sulla direzione ' +
    'teorica dell’impatto, che resta una deduzione da confrontare con i prezzi. È il rovescio della lettura ' +
    'di poco fa, quando il numero principale mancava e il giudizio poggiava sui soli componenti.',
  takeaways: [
    'L’ISM Manufacturing PMI di luglio è salito a 55,6, contro 54,0 atteso e 53,3 precedente: una sorpresa nettamente positiva sulla crescita industriale statunitense.',
    'L’occupazione manifatturiera è tornata in espansione a 52,8, dal 49,7 precedente.',
    'Nuovi ordini a 56,7 dal 56,0; prezzi pagati a 71,1, sopra il 70,3 atteso pur scendendo dal 73,0; spesa per costruzioni a −0,1%, contro il +0,2% atteso.',
    'Il dato principale è molto più forte di quanto apparisse dai soli componenti inizialmente disponibili: la lettura di poco fa va corretta, non confermata.',
    'Bias fondamentale da lieve rialzista a neutrale, con rischio ribassista intraday: il petrolio debole continua a sostenere l’oro, ma l’ISM a 55,6 è abbastanza forte da contrastare quel beneficio.',
  ],
  invalidation: [
    'Dollaro e rendimenti non riescono a recuperare nonostante il dato.',
    'XAU/USD assorbe l’ISM e torna sopra i massimi precedenti.',
    'In entrambi i casi il mercato starebbe dando più peso al calo del petrolio e al rischio geopolitico che alla forza manifatturiera.',
  ],
  nextEvent: {
    when: 'Nei prossimi giorni',
    title: 'JOLTS, ADP e payroll',
    detail:
      'L’ISM alza l’importanza dei prossimi dati sul lavoro. Se confermassero forza, il mercato potrebbe aumentare le probabilità di una Fed più restrittiva, creando un ostacolo più serio per XAU/USD.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il dato principale è arrivato, ed è molto più forte del previsto. L’ISM Manufacturing PMI di luglio è salito a 55,6, contro il 54,0 atteso e il 53,3 precedente: una sorpresa nettamente positiva sulla crescita industriale statunitense. Anche l’occupazione manifatturiera è tornata in espansione.',
    },
    {
      kind: 'stats',
      title: 'Il quadro completo',
      caption: 'Dati pubblicati di luglio, non quotazioni in tempo reale.',
      items: [
        {
          label: 'ISM manifatturiero',
          value: '55,6',
          tone: 'bear',
          note: 'Atteso 54,0, precedente 53,3',
        },
        {
          label: 'Occupazione ISM',
          value: '52,8',
          tone: 'bear',
          note: 'Dal 49,7: sopra 50 torna in espansione',
        },
        {
          label: 'Nuovi ordini',
          value: '56,7',
          tone: 'bear',
          note: 'Dal 56,0',
        },
        {
          label: 'Prezzi pagati',
          value: '71,1',
          tone: 'warn',
          note: 'Sopra il 70,3 atteso, pur scendendo dal 73,0',
        },
        {
          label: 'Spesa per costruzioni',
          value: '−0,1%',
          tone: 'bull',
          note: 'Contro il +0,2% atteso: l’unica voce in controtendenza',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'I componenti dicevano un’altra cosa',
      text: 'Il numero principale è molto più forte di quanto lasciassero intendere i soli componenti disponibili poco dopo l’uscita. La lettura precedente, costruita su quelli, va corretta: è il motivo per cui un dato parziale non andrebbe trattato come se fosse completo.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La combinazione è sfavorevole all’oro, e lo è su quattro fronti che si sommano.',
    },
    {
      kind: 'list',
      items: [
        'Crescita statunitense più robusta: minore urgenza per la Fed di allentare.',
        'Occupazione manifatturiera sopra 50: si riducono i timori di un indebolimento del mercato del lavoro.',
        'Prezzi ancora oltre 70: le pressioni inflazionistiche restano elevate.',
        'Possibile recupero di dollaro e rendimenti dei Treasury.',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Il dato non implica automaticamente un rialzo dei tassi. Rafforza però l’argomento dei membri della Fed più aggressivi, e rende meno accomodanti le dichiarazioni con cui Williams definiva la politica «ben posizionata».',
    },
    {
      kind: 'heading',
      text: 'Effetto probabile immediato',
      anchor: 'effetto',
    },
    {
      kind: 'scenarios',
      caption: 'Effetti attesi dalla lettura del dato, non movimenti già osservati.',
      items: [
        {
          label: 'Oro',
          tone: 'bear',
          text: 'Pressione ribassista e rischio di restituzione del rialzo iniziale.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Sostegno rialzista.',
        },
        {
          label: 'Treasury',
          tone: 'bear',
          text: 'Rendimenti potenzialmente in recupero, soprattutto sulla scadenza a 2 anni.',
        },
        {
          label: 'Petrolio',
          tone: 'neutral',
          text: 'Lieve sostegno dalla maggiore attività economica, ma resta dominato da Iran e Hormuz.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Nei prossimi giorni',
      anchor: 'prossimi-giorni',
    },
    {
      kind: 'paragraph',
      text: 'L’ISM alza l’importanza dei prossimi dati sul lavoro. Se JOLTS, ADP e payroll confermassero forza, il mercato potrebbe aumentare le probabilità di una Fed più restrittiva, e per XAU/USD sarebbe un ostacolo più serio di quello di oggi.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias fondamentale passa da lieve rialzista a neutrale, con rischio ribassista intraday. La debolezza del petrolio continua a ridurre l’inflazione attesa e a sostenere l’oro per via indiretta, ma l’ISM a 55,6 è abbastanza forte da contrastare quel beneficio: le due spinte ora si annullano invece di sommarsi.',
    },
    {
      kind: 'note',
      text: 'Il dato è la parte solida di questa lettura; la direzione dell’impatto è una deduzione da verificare sui prezzi. Se dollaro e rendimenti non recuperano, o se l’oro assorbe il dato e torna sopra i massimi precedenti, significa che il mercato sta pesando di più il petrolio e la geopolitica della forza manifatturiera.',
    },
  ],
};

const oroInverteDopoIsm: Article = {
  slug: 'oro-inverte-il-rialzo-dopo-il-dato-ism',
  categories: ['usa', 'tasso-di-interesse', 'asia', 'fed'],
  title: 'L’oro inverte il rialzo dopo l’ISM',
  kicker: 'Correlazioni · Reazione al dato ISM',
  dek:
    'XAU/USD è passato dal rialzo iniziale a circa −0,3%, vicino ai 4.030 dollari, e con lui sono scesi ' +
    'argento, platino e palladio. Nello stesso pomeriggio la Bank of Korea annuncia che tornerà a comprare ' +
    'oro dopo dodici anni: una notizia strutturale che però non tocca la pressione di oggi.',
  publishedAt: '2026-08-03T17:10:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['ISM', 'Bank of Korea', 'Banche centrali', 'Metalli preziosi', 'Dollaro'],
  instruments: ['XAU/USD', 'XAG/USD', 'DXY', 'Treasury', 'Brent'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'media',
    regime:
      'Il prezzo ha reagito nella direzione coerente con un ISM al massimo da oltre quattro anni: il mercato ' +
      'sta pesando più la forza dell’economia statunitense e il rischio di tassi elevati che il calo del ' +
      'petrolio. La domanda ufficiale coreana sostiene il quadro di fondo, non quello della giornata.',
  },
  certainty: 'alta',
  certaintyNote:
    'Il fondamento è solido: il movimento dei prezzi è osservato e riferito da Reuters, l’ISM è pubblicato e ' +
    'la Bank of Korea ha annunciato. La lettura complessiva resta però medio-alta, perché le quantità che ' +
    'Seul acquisterà non sono note e perché i riferimenti di prezzo sono approssimati.',
  takeaways: [
    'Dopo il dato manifatturiero, XAU/USD è passato dal rialzo iniziale a circa −0,3%, vicino ai 4.030 dollari.',
    'Sono scesi anche argento, platino e palladio: la pressione non riguarda soltanto l’oro ma l’intero comparto dei preziosi.',
    'L’ISM manifatturiero di luglio a 55,6 è il massimo da oltre quattro anni, con occupazione, ordini ed esportazioni in espansione; i costi restano elevati anche se la loro crescita ha rallentato leggermente.',
    'La Bank of Korea acquisterà oro dai produttori nazionali per la prima volta dal 2013, nell’ambito della gestione delle riserve: le quantità non sono ancora note.',
    'Bias intraday neutrale-ribassista: il mercato sta dando più peso alla forza americana e al rischio di tassi elevati che al calo del petrolio.',
  ],
  invalidation: [
    'L’oro recupera rapidamente il livello precedente al dato mentre DXY e rendimenti restano deboli.',
    'Una nuova escalation concreta su Iran e Hormuz riporta forte domanda di bene rifugio.',
  ],
  nextEvent: {
    when: 'Nei prossimi giorni',
    title: 'Dati sul lavoro statunitensi',
    detail:
      'Se anche questi risultassero forti, aumenterebbe il rischio di una discesa verso i 4.000 dollari. La domanda delle banche centrali può offrire sostegno più avanti, ma non è un catalizzatore intraday.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'La verifica sui prezzi è arrivata, e va nella direzione del dato. Dopo l’ISM manifatturiero molto più forte del previsto, XAU/USD è passato dal rialzo iniziale a circa −0,3%, vicino ai 4.030 dollari.',
    },
    {
      kind: 'stats',
      title: 'I riferimenti della giornata',
      caption:
        'Valori citati nelle fonti al momento della scrittura, approssimati e non quotazioni in tempo reale.',
      items: [
        {
          label: 'XAU/USD',
          value: '≈ −0,3%',
          tone: 'bear',
          note: 'Vicino ai 4.030 dollari, dopo un rialzo iniziale',
        },
        {
          label: 'ISM manifatturiero',
          value: '55,6',
          tone: 'bear',
          note: 'Massimo da oltre quattro anni',
        },
        {
          label: 'Bank of Korea',
          value: 'dal 2013',
          tone: 'bull',
          note: 'Primo ritorno agli acquisti dopo dodici anni',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Non è un movimento del solo oro',
      text: 'Sono scesi anche argento, platino e palladio. Quando cede l’intero comparto dei preziosi il movimento non nasce da qualcosa di specifico dell’oro, ma dal lato del dollaro e dei tassi: è la conferma più utile contenuta in questa reazione.',
    },
    {
      kind: 'paragraph',
      text: 'Dal lato della Federal Reserve, invece, non è arrivato nulla di nuovo: nessuna comunicazione monetaria rilevante dopo l’ultimo controllo. Il movimento è quindi tutto del dato, non delle parole.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La reazione del prezzo conferma che il mercato sta dando più peso alla forza dell’economia statunitense e al rischio di tassi elevati che al calo del petrolio. È esattamente la gerarchia che nella lettura precedente era ancora da verificare.',
    },
    {
      kind: 'list',
      items: [
        'Economia statunitense più forte: meno urgenza di allentare la politica monetaria.',
        'Inflazione industriale ancora alta: maggiore rischio di una Fed restrittiva.',
        'Dollaro e rendimenti possono recuperare.',
        'L’oro, che non offre interessi, perde attrattiva quando i rendimenti salgono.',
      ],
    },
    {
      kind: 'heading',
      text: 'La Bank of Korea torna a comprare',
      anchor: 'bank-of-korea',
    },
    {
      kind: 'paragraph',
      text: 'La banca centrale coreana ha annunciato che acquisterà oro dai produttori nazionali per la prima volta dal 2013, nell’ambito della gestione delle riserve. È una notizia strutturalmente positiva per la domanda ufficiale, e si aggiunge al filone degli acquisti delle banche centrali.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Struttura, non giornata',
      text: 'Le quantità non sono ancora note, e un acquisto graduale dai produttori interni non sposta il prezzo nel pomeriggio in cui viene annunciato. Non basta quindi a contrastare la pressione immediata dell’ISM: sono due orizzonti diversi che non vanno sommati.',
    },
    {
      kind: 'heading',
      text: 'Effetto probabile immediato',
      anchor: 'effetto',
    },
    {
      kind: 'scenarios',
      caption: 'Effetti attesi e, per l’oro, già osservati.',
      items: [
        {
          label: 'Oro',
          tone: 'bear',
          text: 'Pressione ribassista confermata dai prezzi, non più solo dedotta.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Rischio di recupero.',
        },
        {
          label: 'Treasury',
          tone: 'bear',
          text: 'Rendimenti potenzialmente più alti, soprattutto sulle scadenze brevi.',
        },
        {
          label: 'Petrolio',
          tone: 'neutral',
          text: 'Ancora debole, ma il suo effetto favorevole all’oro è stato momentaneamente superato dai dati statunitensi.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Nei prossimi giorni',
      anchor: 'prossimi-giorni',
    },
    {
      kind: 'paragraph',
      text: 'Se anche i prossimi dati sul lavoro risultassero forti, aumenterebbe il rischio di una discesa verso i 4.000 dollari. La domanda delle banche centrali, coreana compresa, può offrire sostegno più avanti: non è però un catalizzatore intraday e non va usata per leggere le prossime ore.',
    },
    {
      kind: 'note',
      text: 'I livelli di prezzo riportati sono approssimati e servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi. I fatti su prezzi, ISM e Bank of Korea provengono da Reuters, la conferma sull’assenza di nuove comunicazioni monetarie dalla Federal Reserve.',
    },
  ],
};

const tesoroFabbisognoEIran: Article = {
  slug: 'tesoro-alza-il-fabbisogno-iran-raffredda-la-distensione',
  categories: ['usa', 'tasso-di-interesse', 'geopolitica', 'asia'],
  title: 'Il Tesoro alza il fabbisogno, l’Iran raffredda la distensione',
  kicker: 'Debito USA · Piano di rifinanziamento',
  dek:
    'Washington prevede di indebitarsi per 739 miliardi di dollari nel terzo trimestre, 68 in più della stima ' +
    'di maggio, e mercoledì dirà come. Nel frattempo Teheran smentisce che esistano negoziati, proprio mentre ' +
    'il mercato ha fatto crollare il petrolio sull’ipotesi opposta.',
  publishedAt: '2026-08-03T22:40:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Tesoro USA', 'Emissioni', 'Iran', 'Hormuz', 'Petrolio'],
  instruments: ['XAU/USD', 'Treasury', 'WTI', 'Brent', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'bassa',
    regime:
      'Due forze opposte in equilibrio instabile: il petrolio in forte calo abbassa le aspettative ' +
      'inflazionistiche e i rendimenti, mentre la forza dell’ISM e il maggiore fabbisogno del Tesoro premono ' +
      'nella direzione contraria. Al rialzo resta soltanto un rischio geopolitico non prezzato.',
  },
  certainty: 'media',
  certaintyNote:
    'Medio-alta sui fatti — la revisione del Tesoro, le dichiarazioni iraniane e il crollo del greggio sono ' +
    'riportati e verificabili — ma media sull’effetto finale, perché petrolio e rendimenti stanno producendo ' +
    'forze opposte e la composizione delle emissioni non sarà nota prima di mercoledì.',
  takeaways: [
    'Il Tesoro statunitense ha alzato la previsione di indebitamento netto del terzo trimestre a 739 miliardi di dollari, 68 miliardi in più della stima di maggio.',
    'Mercoledì arriva il piano trimestrale di rifinanziamento, con scadenze e dimensioni delle aste: è lì che si vedrà se l’aumento pesa davvero sull’oro.',
    'L’Iran ribadisce che non sono in corso negoziati con gli Stati Uniti e che non esistono incontri programmati; con l’Oman ci sono contatti per un passaggio temporaneamente sicuro a Hormuz, ma non per una riapertura piena.',
    'La smentita contrasta con l’ottimismo che oggi ha fatto crollare il WTI di circa il 7% e portato il Brent verso gli 83-84 dollari, con i rendimenti giù per il calo delle aspettative inflazionistiche.',
    'Bias neutrale con un lieve rischio rialzista geopolitico, ma fragile sul lato dei rendimenti: petrolio e debito spingono in direzioni opposte.',
  ],
  invalidation: [
    'Per il rischio rialzista: una conferma concreta di negoziati fra Stati Uniti e Iran e una riapertura stabile di Hormuz.',
    'Per la pressione ribassista da debito: mercoledì il Tesoro lascia invariate le aste a lunga scadenza e concentra il finanziamento sui titoli brevi.',
  ],
  nextEvent: {
    when: 'Mercoledì',
    title: 'Piano trimestrale di rifinanziamento del Tesoro',
    detail:
      'Scadenze e dimensioni delle aste. Se l’aumento fosse concentrato sui Treasury bill a breve termine, l’impatto sull’oro sarebbe probabilmente limitato.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il Tesoro statunitense ha alzato la previsione di indebitamento netto per il terzo trimestre a 739 miliardi di dollari. Sono 68 miliardi in più rispetto alla stima di maggio, e mercoledì arriverà il piano trimestrale di rifinanziamento con i dettagli su scadenze e dimensioni delle aste.',
    },
    {
      kind: 'stats',
      title: 'La revisione',
      caption: 'Previsioni del Tesoro riportate dalle fonti, non dati di mercato.',
      items: [
        {
          label: 'Fabbisogno del terzo trimestre',
          value: '739 mld $',
          tone: 'bear',
          note: 'Indebitamento netto previsto',
        },
        {
          label: 'Rispetto alla stima di maggio',
          value: '+68 mld $',
          tone: 'bear',
          note: 'È l’entità della revisione',
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
      text: 'Più emissioni di debito possono significare maggiore offerta di Treasury, e la catena che ne segue è nota — soprattutto se ad aumentare fossero le emissioni a lunga scadenza.',
    },
    {
      kind: 'list',
      items: [
        'Rendimenti statunitensi potenzialmente più alti.',
        'Possibile sostegno al dollaro.',
        'Pressione ribassista sull’oro, che non paga interessi.',
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Per ora è un rischio per mercoledì, non un fatto di oggi',
      text: 'La composizione delle emissioni non è ancora nota, ed è quella a decidere. Se l’aumento venisse concentrato sui Treasury bill a breve termine, l’impatto sull’oro sarebbe probabilmente limitato: il fabbisogno più alto conta meno di come lo si finanzia.',
    },
    {
      kind: 'heading',
      text: 'Iran: il mercato ha corso troppo?',
      anchor: 'iran',
    },
    {
      kind: 'paragraph',
      text: 'Teheran ha ribadito che non sono in corso negoziati con gli Stati Uniti e che non esistono incontri programmati. Sono invece in corso contatti con l’Oman per un passaggio temporaneamente sicuro nello Stretto di Hormuz, ma l’Iran afferma che lo stretto non potrà riaprire completamente finché continua quella che definisce aggressione statunitense.',
    },
    {
      kind: 'stats',
      title: 'Quanto ha corso l’ottimismo oggi',
      caption: 'Movimenti di giornata citati dalle fonti, non quotazioni in tempo reale.',
      items: [
        {
          label: 'WTI',
          value: '≈ −7%',
          tone: 'warn',
          note: 'In giornata',
        },
        {
          label: 'Brent',
          value: '83-84 $',
          tone: 'warn',
          note: 'Il livello verso cui si è spinto',
        },
        {
          label: 'Rendimenti Treasury',
          value: 'in calo',
          tone: 'bull',
          note: 'Per la discesa delle aspettative inflazionistiche',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Il prezzo sconta una distensione che nessuno ha annunciato',
      text: 'Il crollo del greggio poggia su un’aspettativa di intesa che la controparte smentisce. Non significa che l’intesa non arriverà, ma che oggi il mercato sta pagando qualcosa che al momento non esiste — e questo è, di per sé, un rischio di volatilità.',
    },
    {
      kind: 'heading',
      text: 'Lettura per l’oro',
      anchor: 'lettura',
    },
    {
      kind: 'paragraph',
      text: 'L’effetto immediato è misto. Il forte calo del petrolio riduce i timori d’inflazione, abbassa i rendimenti e può sostenere XAU/USD. La forza dell’ISM e il nuovo fabbisogno del Tesoro impediscono però, per ora, una lettura nettamente rialzista: sono due spinte che si annullano invece di sommarsi.',
    },
    {
      kind: 'heading',
      text: 'Nei prossimi giorni',
      anchor: 'prossimi-giorni',
    },
    {
      kind: 'paragraph',
      text: 'Aumenta il rischio di volatilità. Se il mercato prendesse atto che una vera trattativa fra Stati Uniti e Iran non esiste, petrolio e domanda di bene rifugio potrebbero recuperare insieme. Per l’oro sarebbe inizialmente positivo, ma un forte rimbalzo del greggio riporterebbe poi in alto rendimenti e aspettative sui tassi: lo stesso movimento, prima favorevole e poi contrario.',
    },
    {
      kind: 'note',
      text: 'I riferimenti su fabbisogno, dichiarazioni iraniane e movimenti del greggio provengono dalle agenzie citate nel testo. I livelli di prezzo servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};

const trumpUltimatumTeheran: Article = {
  slug: 'trump-alza-di-nuovo-la-minaccia-contro-teheran',
  categories: ['geopolitica', 'asia', 'usa', 'tasso-di-interesse'],
  title: 'Trump alza di nuovo la minaccia contro Teheran',
  kicker: 'Geopolitica · Ultimatum a Teheran',
  dek:
    'Un’ultima possibilità di accordo, altrimenti un attacco molto pesante: il presidente statunitense parla ' +
    'esplicitamente di possibile «decapitazione» della leadership iraniana e sostiene che i colloqui siano in ' +
    'corso, mentre Teheran continua a negarli. Arriva dopo il crollo del greggio di lunedì.',
  publishedAt: '2026-08-04T00:10:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Trump', 'Iran', 'Escalation', 'Petrolio', 'Bene rifugio'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'DXY', 'Treasury'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'bassa',
    regime:
      'Il rischio geopolitico torna a salire proprio mentre il mercato ha appena finito di prezzare il suo ' +
      'contrario. La minaccia sostiene l’oro come bene rifugio, ma la forza dell’ISM e il rischio di ' +
      'rendimenti più alti restano dall’altra parte: la lettura resta neutrale, con il rischio ora sbilanciato ' +
      'verso l’alto.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sulla dichiarazione, che è pubblica e riportata; media sull’effetto di mercato, perché il canale ' +
    'rifugio e quello dei rendimenti possono muoversi in senso opposto e perché non esiste alcuna conferma ' +
    'iraniana dei colloqui che il presidente dice in corso.',
  takeaways: [
    'Trump ha dichiarato che l’Iran avrebbe un’ultima possibilità di raggiungere un accordo, minacciando in caso contrario un attacco molto pesante e parlando esplicitamente di possibile «decapitazione» della leadership iraniana.',
    'Sostiene inoltre che i colloqui siano in corso, mentre Teheran continua a negare sia i negoziati sia l’esistenza di incontri programmati.',
    'La minaccia arriva dopo il crollo del petrolio di lunedì, con il Brent a 83,77 dollari e il WTI a 80,34: diversi analisti considerano quel ribasso una possibile reazione eccessiva.',
    'Il mercato ha chiuso la seduta dando ancora molto peso alla possibilità di un accordo, che però resta un’aspettativa e non un fatto accertato.',
    'Bias neutrale con rischio rialzista geopolitico in aumento: la minaccia sostiene l’oro, ma ISM forte e rischio di rendimenti più alti restano contrari.',
  ],
  invalidation: [
    'Una conferma ufficiale dei colloqui fra Stati Uniti e Iran.',
    'Un accordo verificabile e non soltanto annunciato.',
    'La prosecuzione del calo del petrolio nonostante la minaccia: significherebbe che il mercato non le dà credito.',
  ],
  nextEvent: {
    when: 'Alla riapertura asiatica',
    title: 'Le tre condizioni, se arrivano insieme',
    detail:
      'Petrolio in recupero, azioni deboli e rendimenti Treasury in discesa. Solo se si presentano contemporaneamente la minaccia diventa un segnale nettamente rialzista per XAU/USD.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il presidente statunitense ha dichiarato che l’Iran avrebbe un’ultima possibilità di raggiungere un accordo, minacciando in caso contrario un attacco molto pesante e parlando esplicitamente di una possibile «decapitazione» della leadership iraniana. È un gradino sopra il linguaggio dei giorni scorsi.',
    },
    {
      kind: 'heading',
      text: 'Il contrasto sui colloqui',
      anchor: 'colloqui',
    },
    {
      kind: 'balance',
      title: 'Due versioni che non stanno insieme',
      left: {
        title: 'Washington',
        tone: 'warn',
        items: [
          'Trump sostiene che i colloqui siano in corso.',
          'Nello stesso intervento rilancia la minaccia militare.',
        ],
      },
      right: {
        title: 'Teheran',
        tone: 'bear',
        items: ['Nega che esistano negoziati.', 'Nega che siano stati programmati incontri.'],
      },
    },
    {
      kind: 'paragraph',
      text: 'Non è una sfumatura diplomatica: è la differenza fra uno scenario che il mercato ha già pagato e uno che non esiste. Finché una delle due versioni non viene confermata, la distensione resta un’ipotesi di una parte sola.',
    },
    {
      kind: 'stats',
      title: 'Da dove arriva il prezzo',
      caption:
        'Livelli di chiusura di lunedì citati dalle fonti, non quotazioni in tempo reale né obiettivi.',
      items: [
        {
          label: 'Brent',
          value: '83,77 $',
          tone: 'warn',
          note: 'Dopo il crollo di lunedì',
        },
        {
          label: 'WTI',
          value: '80,34 $',
          tone: 'warn',
          note: 'Diversi analisti lo considerano un ribasso eccessivo',
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
      text: 'La novità rende meno credibile e più fragile lo scenario di distensione che aveva fatto scendere il petrolio e sostenuto i mercati azionari. È il primo elemento della giornata che spinge nella direzione opposta a tutto il resto.',
    },
    {
      kind: 'scenarios',
      caption: 'Effetti attesi, da verificare alla riapertura.',
      items: [
        {
          label: 'Oro',
          tone: 'bull',
          text: 'Moderatamente positivo come bene rifugio.',
        },
        {
          label: 'Petrolio',
          tone: 'warn',
          text: 'Rischio concreto di rimbalzo dopo il crollo.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Possibile sostegno rifugio, che però può limitare il rialzo di XAU/USD: le due domande di rifugio si contendono lo stesso flusso.',
        },
        {
          label: 'Rendimenti USA',
          tone: 'neutral',
          text: 'Reazione ambigua: possono scendere per avversione al rischio, ma risalire se il petrolio riaccende i timori inflazionistici.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Cosa sta prezzando il mercato',
      anchor: 'aspettative',
    },
    {
      kind: 'paragraph',
      text: 'La seduta si è chiusa dando ancora molto peso alla possibilità di un accordo. Ma una conferma iraniana dei colloqui non esiste, e il presidente ha rilanciato la minaccia militare nello stesso momento in cui li dichiarava in corso. La probabilità di una soluzione resta quindi un’aspettativa, non un fatto accertato.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias su XAU/USD resta neutrale, con un rischio rialzista geopolitico in aumento. La minaccia sostiene l’oro, ma non basta ancora a produrre un segnale rialzista pulito: la forza dell’ISM e il rischio di rendimenti più alti continuano a tirare dalla parte opposta.',
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Le tre condizioni che renderebbero il segnale netto',
      items: ['Petrolio in recupero.', 'Azioni deboli.', 'Rendimenti Treasury in discesa.'],
      text: 'Vanno viste insieme alla riapertura asiatica. Prese una alla volta ciascuna ha spiegazioni alternative; è la loro contemporaneità a dire che il mercato sta riprezzando il rischio geopolitico.',
    },
    {
      kind: 'note',
      text: 'La dichiarazione e i livelli del greggio provengono dalle agenzie citate nel testo. I prezzi riportati sono riferimenti di chiusura per rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};

const naveColpitaHormuz: Article = {
  slug: 'nave-colpita-nello-stretto-di-hormuz',
  categories: ['geopolitica', 'asia', 'usa', 'tasso-di-interesse'],
  title: 'Nave colpita nello Stretto di Hormuz',
  kicker: 'Geopolitica · Incidente a Hormuz',
  dek:
    'Un mercantile è stato colpito da un proiettile mentre resta totale incertezza sui presunti colloqui fra ' +
    'Stati Uniti e Iran. Il greggio recupera parte del crollo e l’oro sale verso i 4.060 dollari: il rischio ' +
    'sulle rotte energetiche non era rientrato.',
  publishedAt: '2026-08-04T08:45:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Hormuz', 'Iran', 'Petrolio', 'Bene rifugio', 'Trasporti marittimi'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'DXY', 'Treasury'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'Il premio geopolitico rientra in scena dopo essere stato quasi azzerato in una sola seduta, e il ' +
      'greggio lo conferma risalendo. Manca però il resto del quadro difensivo: le azioni asiatiche tengono, ' +
      'il decennale risale invece di scendere e il dollaro resta vicino ai minimi di due mesi.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sull’incidente e sul recupero del petrolio, che sono fatti riportati e misurabili; media ' +
    'sull’impatto duraturo sull’oro, perché l’episodio appare isolato e il resto dei mercati non lo sta ' +
    'trattando come l’inizio di un’escalation.',
  takeaways: [
    'Una nave mercantile è stata colpita da un proiettile nell’area dello Stretto di Hormuz.',
    'Resta totale incertezza sui colloqui: Washington sostiene che i contatti siano in corso, Teheran nega negoziati diretti e precisa che quelli con l’Oman riguardano soltanto la gestione dei passaggi marittimi.',
    'Dopo il crollo della seduta precedente il petrolio recupera parzialmente: Brent a 84,89 dollari con circa +1,3%, WTI a 81,11 con circa +1%.',
    'L’oro sale di circa lo 0,2%, vicino ai 4.060 dollari, sostenuto dalla tensione geopolitica mentre il mercato aspetta i prossimi dati sul lavoro statunitense.',
    'I mercati asiatici restano relativamente positivi e il DXY è vicino ai minimi di due mesi: per ora nessuno sta prezzando una nuova escalation su larga scala, anche se il decennale è leggermente risalito.',
  ],
  invalidation: [
    'Un chiarimento ufficiale che ridimensioni l’attacco.',
    'Un accordo verificabile fra Stati Uniti e Iran.',
    'Un petrolio che torna rapidamente sui minimi nonostante l’incidente: vorrebbe dire che il mercato non attribuisce all’episodio alcun valore di segnale.',
  ],
  nextEvent: {
    when: 'Nei prossimi giorni',
    title: 'Dati sul lavoro statunitensi',
    detail:
      'È l’appuntamento che il mercato sta aspettando e che può riportare i rendimenti al centro della lettura sull’oro, togliendo spazio al premio geopolitico.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Una nave mercantile è stata colpita da un proiettile nell’area dello Stretto di Hormuz. Arriva mentre resta totale incertezza sui presunti colloqui fra Stati Uniti e Iran, e mentre il mercato aveva appena finito di prezzare il loro esito positivo.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il rischio sulle rotte energetiche non era rientrato',
      text: 'È questo il significato dell’episodio, al di là della sua dimensione. L’ottimismo diplomatico che nella seduta precedente aveva fatto crollare il greggio poggiava sull’idea che la questione fosse in via di soluzione: un colpo su una nave dice che non lo è.',
    },
    {
      kind: 'heading',
      text: 'Le due versioni restano incompatibili',
      anchor: 'versioni',
    },
    {
      kind: 'paragraph',
      text: 'Washington sostiene che i contatti siano in corso. Teheran continua a negare negoziati diretti e aggiunge una precisazione che vale più di una smentita generica: i colloqui con l’Oman riguardano soltanto la gestione dei passaggi marittimi, non un negoziato politico. È la stessa distinzione che l’Iran fa da giorni, e nessuna delle due parti ha finora prodotto una conferma verificabile.',
    },
    {
      kind: 'heading',
      text: 'Come hanno reagito i prezzi',
      anchor: 'prezzi',
    },
    {
      kind: 'stats',
      title: 'Il recupero dopo il crollo',
      caption:
        'Valori citati dalle fonti al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Brent',
          value: '84,89 $',
          tone: 'warn',
          note: 'Circa +1,3%',
        },
        {
          label: 'WTI',
          value: '81,11 $',
          tone: 'warn',
          note: 'Circa +1%',
        },
        {
          label: 'XAU/USD',
          value: '≈ 4.060 $',
          tone: 'bull',
          note: 'Circa +0,2%, sostenuto dalla tensione geopolitica',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'scenarios',
      caption: 'Effetti attesi; per oro e petrolio già in parte osservati.',
      items: [
        {
          label: 'Oro',
          tone: 'bull',
          text: 'Moderatamente positivo per domanda di bene rifugio.',
        },
        {
          label: 'Petrolio',
          tone: 'warn',
          text: 'Rischio di ulteriore recupero, dopo un crollo che diversi analisti avevano già giudicato eccessivo.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Possibile sostegno rifugio, che limita parte del vantaggio per XAU/USD.',
        },
        {
          label: 'Treasury',
          tone: 'neutral',
          text: 'Effetto misto: rendimenti più bassi in caso di avversione al rischio, più alti se il petrolio riaccende le aspettative d’inflazione.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Cosa sta prezzando il mercato',
      anchor: 'aspettative',
    },
    {
      kind: 'paragraph',
      text: 'La possibilità di un accordo resta un’aspettativa non confermata. I mercati asiatici sono ancora relativamente positivi e il Dollar Index rimane vicino ai minimi di due mesi: gli investitori, per ora, non stanno prezzando una nuova escalation su larga scala. Il rendimento del Treasury decennale è però leggermente risalito.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Una condizione su tre',
      text: 'Il quadro difensivo completo vorrebbe petrolio in recupero, azioni deboli e rendimenti in discesa. È arrivata la prima, mentre le azioni tengono e il decennale sale: è la ragione per cui la lettura si sposta di poco e non di molto.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias su XAU/USD diventa lievemente rialzista, con il rischio geopolitico nuovamente in aumento. Non è ancora un segnale forte: l’incidente appare isolato e i mercati azionari non mostrano vero panico. Lo diventerebbe con ulteriori attacchi alle navi, con restrizioni concrete ai transiti, oppure con una smentita definitiva dei colloqui accompagnata da nuove operazioni militari.',
    },
    {
      kind: 'note',
      text: 'L’incidente e i movimenti di prezzo provengono dalle agenzie citate nel testo. I livelli riportati servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};

const rendimentiTrentennaleMassimi: Article = {
  slug: 'rendimenti-a-30-anni-di-nuovo-sui-massimi-dal-2007',
  categories: ['tasso-di-interesse', 'usa', 'fed', 'geopolitica'],
  title: 'Rendimenti a 30 anni di nuovo sui massimi dal 2007',
  kicker: 'Tassi USA · Parte lunga della curva',
  dek:
    'Il trentennale statunitense è risalito intorno al 5,25%, area che non si vedeva dal 2007. È la ragione ' +
    'per cui l’oro resta fermo poco sopra i 4.062 dollari nonostante Hormuz: il mercato obbligazionario sta ' +
    'assorbendo buona parte della domanda rifugio.',
  publishedAt: '2026-08-04T11:15:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Treasury', 'Curva dei rendimenti', 'Fed', 'JOLTS', 'Emissioni'],
  instruments: ['XAU/USD', 'Treasury', 'DXY', 'Brent'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'bassa',
    regime:
      'Rendimenti lunghi sui massimi dal 2007 che alzano il rendimento alternativo offerto dai titoli di ' +
      'Stato e frenano l’oro proprio mentre il rischio geopolitico dovrebbe sostenerlo. La tensione su ' +
      'Hormuz impedisce una lettura decisamente ribassista, ma non riesce a farsi pagare.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sul livello dei rendimenti, che è un prezzo osservabile; medio-alta sull’effetto frenante per ' +
    'l’oro, che è una relazione consolidata ma non un automatismo. La verifica arriva con il JOLTS del ' +
    'pomeriggio.',
  takeaways: [
    'Il rendimento del Treasury statunitense a 30 anni è risalito intorno al 5,25%, area più alta dal 2007, e il movimento riguarda soprattutto la parte lunga della curva.',
    'Dietro ci sono tre valutazioni che il mercato continua a fare insieme: inflazione persistente, maggiore fabbisogno di finanziamento del Tesoro e credibilità restrittiva della Fed.',
    'L’oro resta leggermente positivo vicino ai 4.062 dollari ma senza accelerare, mentre il Brent recupera verso gli 84,8-85 dollari dopo il ribasso della vigilia.',
    'Il mercato attribuisce circa il 65% di probabilità a un rialzo della Fed a settembre, e non sono uscite nuove comunicazioni ufficiali dalla Fed o dalla Fed di New York.',
    'Bias neutrale con lieve inclinazione ribassista finché i rendimenti lunghi restano su questi livelli: il mercato obbligazionario sta neutralizzando buona parte della domanda rifugio.',
  ],
  invalidation: [
    'Un forte calo dei rendimenti dopo il JOLTS.',
    'Un dollaro in discesa.',
    'Un XAU/USD capace di superare con decisione i massimi della mattinata.',
  ],
  nextEvent: {
    when: 'Oggi alle 16:00',
    title: 'JOLTS statunitense',
    detail:
      'È il prossimo catalizzatore macro importante. Domani arriva invece la conferma del Tesoro sulle emissioni: se aumentassero quelle a lunga scadenza, i rendimenti potrebbero restare elevati e limitare XAU/USD anche con le tensioni geopolitiche aperte.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il rendimento del Treasury statunitense a 30 anni è risalito intorno al 5,25%, l’area più alta dal 2007. Il movimento riguarda soprattutto la parte lunga della curva, ed è la notizia che spiega meglio di ogni altra il comportamento dell’oro in queste ore.',
    },
    {
      kind: 'stats',
      title: 'Il quadro in quattro numeri',
      caption:
        'Valori citati dalle fonti al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Treasury a 30 anni',
          value: '≈ 5,25%',
          tone: 'bear',
          note: 'Area più alta dal 2007',
        },
        {
          label: 'XAU/USD',
          value: '≈ 4.062 $',
          tone: 'warn',
          note: 'Leggermente positivo, ma senza accelerare',
        },
        {
          label: 'Brent',
          value: '84,8-85 $',
          tone: 'warn',
          note: 'Recupera dopo il ribasso della vigilia',
        },
        {
          label: 'Rialzo Fed a settembre',
          value: '≈ 65%',
          tone: 'bear',
          note: 'Probabilità attribuita dal mercato',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Che cosa sta prezzando la parte lunga',
      anchor: 'parte-lunga',
    },
    {
      kind: 'paragraph',
      text: 'Il mercato continua a valutare tre cose insieme, e nessuna delle tre è nuova: inflazione persistente, maggiore fabbisogno di finanziamento del Tesoro e credibilità restrittiva della Fed. La novità è che le sta prezzando tutte contemporaneamente sulla scadenza più lunga, dove il peso dell’offerta di titoli si sente di più.',
    },
    {
      kind: 'paragraph',
      text: 'Va notato anche ciò che non è successo: dalla Federal Reserve e dalla Fed di New York non sono uscite nuove comunicazioni ufficiali rilevanti. Il movimento non nasce da un annuncio, ma dal modo in cui il mercato sta leggendo dati e conti pubblici.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'L’aumento dei rendimenti lunghi è un ostacolo concreto per l’oro, perché eleva il rendimento alternativo offerto dai titoli di Stato: chi cerca protezione può trovarla in uno strumento che paga una cedola, invece che in uno che non paga nulla.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Ecco perché Hormuz non si vede sul prezzo',
      text: 'È la spiegazione della reazione tiepida di ieri e di stamattina: il rischio geopolitico c’è e il petrolio lo conferma, ma la domanda rifugio che ne deriva viene in buona parte assorbita dal mercato obbligazionario invece che dall’oro.',
    },
    {
      kind: 'heading',
      text: 'Effetto probabile immediato',
      anchor: 'effetto',
    },
    {
      kind: 'scenarios',
      caption: 'Effetti attesi nella giornata, da verificare sui prezzi.',
      items: [
        {
          label: 'Oro',
          tone: 'warn',
          text: 'Sostegno geopolitico, ma rialzi frenati dai rendimenti.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Tendenzialmente sostenuto.',
        },
        {
          label: 'Treasury',
          tone: 'bear',
          text: 'Pressione soprattutto sul 30 anni e sulla parte lunga della curva.',
        },
        {
          label: 'Petrolio',
          tone: 'warn',
          text: 'Lieve recupero, ancora legato all’assenza di progressi diplomatici verificabili con l’Iran.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Nei prossimi giorni',
      anchor: 'prossimi-giorni',
    },
    {
      kind: 'paragraph',
      text: 'Se domani il Tesoro confermasse un aumento delle emissioni a lunga scadenza, i rendimenti potrebbero restare elevati e continuare a limitare XAU/USD anche in presenza di tensioni geopolitiche. È l’incrocio fra i due filoni di questi giorni: il debito americano decide quanto spazio ha il premio di rischio.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias passa a neutrale con lieve inclinazione ribassista, e resta tale finché i rendimenti lunghi si mantengono così elevati. Il rischio geopolitico impedisce una lettura decisamente ribassista, ma al momento è il mercato obbligazionario a dettare il passo.',
    },
    {
      kind: 'note',
      text: 'I livelli riportati provengono dalle fonti citate nel testo e servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi. La probabilità di rialzo attribuita alla Fed è una lettura di mercato, non una previsione della banca centrale.',
    },
  ],
};

const rischioHormuzSiPagaAltrove: Article = {
  slug: 'rischio-hormuz-si-paga-in-petrolio-e-rendimenti-non-in-oro',
  categories: ['usa', 'tasso-di-interesse', 'geopolitica'],
  title: 'Il rischio Hormuz si paga in petrolio e rendimenti, non in oro',
  kicker: 'Correlazioni · Cambio di reazione',
  dek:
    'Il Brent amplia il recupero fino a 86,04 dollari e il decennale statunitense torna al 4,705%, mentre ' +
    'l’oro resta quasi fermo a 4.053. Il premio geopolitico continua a esistere, ma si sta scaricando ' +
    'sull’energia e sui tassi invece che sul metallo.',
  publishedAt: '2026-08-04T12:35:00+02:00',
  author: AUTHOR,
  readingMinutes: 3,
  tags: ['Hormuz', 'Brent', 'Rendimenti', 'JOLTS', 'Costo-opportunità'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'media',
    regime:
      'Rischio geopolitico che si trasmette a petrolio e rendimenti invece che alla domanda rifugio: con il ' +
      'Brent sopra gli 86 dollari e il decennale al 4,705% sale il costo-opportunità di detenere oro, e la ' +
      'tensione su Hormuz non riesce a compensarlo.',
  },
  certainty: 'media',
  certaintyNote:
    'Medio-alta sul cambiamento cross-asset, media sulla durata del movimento. I prezzi citati sono ' +
    'osservabili; è l’interpretazione — che il rischio si stia scaricando su energia e tassi invece che ' +
    'sull’oro — a restare una lettura, per quanto coerente con tutti e quattro i riferimenti.',
  takeaways: [
    'Il Brent ha ampliato il recupero fino a circa +2,7%, a 86,04 dollari, mentre il WTI è salito di circa +2,1%, a 82,06.',
    'I transiti nello Stretto di Hormuz restano estremamente ridotti e il mercato fisico del petrolio è ancora sotto pressione, nonostante le ipotesi diplomatiche.',
    'Il rendimento del Treasury decennale è risalito di circa 2,2 punti base al 4,705% e il Dollar Index è tornato appena sopra quota 100.',
    'L’oro è rimasto quasi fermo intorno a 4.053 dollari, senza beneficiare pienamente della tensione geopolitica.',
    'Il bias intraday passa da lieve rialzista a neutrale con inclinazione ribassista: il rischio geopolitico si sta traducendo in petrolio e rendimenti più alti anziché in domanda rifugio.',
  ],
  invalidation: [
    'Il petrolio restituisce il recupero.',
    'Il decennale torna sotto il 4,68% circa.',
    'Il Dollar Index scende sotto quota 100.',
    'L’oro supera con decisione l’area dei 4.100 dollari.',
  ],
  nextEvent: {
    when: 'Oggi alle 16:00',
    title: 'JOLTS statunitense',
    detail:
      'Un dato forte spingerebbe rendimenti e dollaro più in alto, con effetto negativo sull’oro; un dato debole aprirebbe a un calo dei rendimenti e a un recupero di XAU/USD.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Non è arrivata una nuova decisione della Federal Reserve o del Tesoro, ma nel quadro cross-asset è cambiato qualcosa di significativo: il rischio geopolitico sta tornando a tradursi soprattutto in petrolio e rendimenti più alti, anziché in forte domanda rifugio per l’oro.',
    },
    {
      kind: 'stats',
      title: 'I riferimenti al momento del controllo',
      caption: 'Valori citati nell’analisi, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Brent',
          value: '86,04 $',
          tone: 'bear',
          note: 'Recupero ampliato fino a circa +2,7%',
        },
        {
          label: 'WTI',
          value: '82,06 $',
          tone: 'bear',
          note: 'In rialzo di circa +2,1%',
        },
        {
          label: 'Treasury 10 anni',
          value: '4,705%',
          tone: 'bear',
          note: 'Risalito di circa 2,2 punti base',
        },
        {
          label: 'Dollar Index',
          value: 'appena sopra 100',
          tone: 'bear',
          note: 'Tornato sopra la soglia dopo i minimi recenti',
        },
        {
          label: 'XAU/USD',
          value: '≈ 4.053 $',
          tone: 'warn',
          note: 'Quasi fermo, senza beneficiare della tensione',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Il contesto fisico non è cambiato: i transiti nello Stretto di Hormuz rimangono estremamente ridotti e il mercato del petrolio resta sotto pressione, nonostante le ipotesi diplomatiche circolate nei giorni scorsi. Quello che è cambiato è dove il mercato sta mettendo il prezzo di quel rischio.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La combinazione è meno favorevole all’oro rispetto all’ultimo controllo, e il motivo sta in una catena di tre passaggi che si tengono in fila.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Il petrolio in rialzo alza l’inflazione attesa.',
        'L’inflazione attesa più alta spinge in su i rendimenti statunitensi.',
        'Rendimenti più alti aumentano il costo-opportunità di detenere oro, che non paga cedola.',
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'La tensione c’è, il panico no',
      text: 'Il rischio geopolitico continua a offrire sostegno all’oro, ma al momento non sta generando panico sui mercati: azioni europee e futures statunitensi restano positivi. È la differenza fra un premio di rischio che esiste e un premio di rischio che si fa pagare.',
    },
    {
      kind: 'heading',
      text: 'I livelli sono già sulla soglia',
      anchor: 'soglie',
    },
    {
      kind: 'paragraph',
      text: 'Il segnale diventerebbe più ribassista se il Brent restasse sopra gli 86 dollari, se il decennale superasse stabilmente il 4,70% e se il dollaro continuasse a recuperare. Vale la pena notare che i primi due livelli sono già stati toccati: 86,04 e 4,705% stanno appena oltre la soglia indicata. Quello che manca non è il livello, è la persistenza, ed è esattamente la cosa che si può verificare solo lasciando passare le prossime ore.',
    },
    {
      kind: 'heading',
      text: 'Il prossimo test',
      anchor: 'prossimo-test',
    },
    {
      kind: 'balance',
      title: 'JOLTS statunitense, oggi alle 16:00',
      left: {
        title: 'Dato forte',
        tone: 'bear',
        items: [
          'Rendimenti e dollaro potenzialmente più alti.',
          'Negativo per l’oro, che vedrebbe salire ancora il rendimento alternativo.',
          'Confermerebbe la direzione descritta qui.',
        ],
      },
      right: {
        title: 'Dato debole',
        tone: 'bull',
        items: [
          'Possibile calo dei rendimenti.',
          'Spazio per un recupero di XAU/USD.',
          'È la via da cui questa lettura verrebbe smentita.',
        ],
      },
    },
    {
      kind: 'paragraph',
      text: 'Sul fronte monetario non risultano nuove comunicazioni ufficiali della Federal Reserve. Il Tesoro pubblicherà invece i dettagli del rifinanziamento trimestrale domani, mercoledì 5 agosto, alle 14:30 italiane: è il secondo appuntamento da tenere d’occhio, perché la composizione delle emissioni incide direttamente sulla parte della curva che qui sta facendo il danno.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias intraday su XAU/USD passa da lieve rialzista a neutrale con inclinazione ribassista. Non perché la tensione geopolitica sia rientrata — non lo è — ma perché il canale attraverso cui arrivava all’oro si è chiuso: adesso passa dal petrolio ai rendimenti, e i rendimenti giocano contro.',
    },
    {
      kind: 'note',
      text: 'I livelli citati servono a rendere verificabile il ragionamento e sono riferiti al momento del controllo: non sono quotazioni in tempo reale né obiettivi di prezzo affidabili.',
    },
  ],
};

const petrolioInverteBessent: Article = {
  slug: 'petrolio-inverte-bruscamente-bessent-apre-su-hormuz',
  categories: ['geopolitica', 'asia', 'usa', 'tasso-di-interesse'],
  title: 'Il petrolio inverte bruscamente: Bessent apre su Hormuz',
  kicker: 'Geopolitica · Ipotesi di riapertura',
  dek:
    'Brent e WTI passano dal recupero a un calo di circa il 4% dopo le parole del segretario al Tesoro ' +
    'statunitense: un’intesa per riaprire lo stretto potrebbe arrivare oggi o mercoledì. Per l’oro il canale ' +
    'che si apre è quello dell’inflazione attesa, non quello del rifugio.',
  publishedAt: '2026-08-04T15:10:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Hormuz', 'Bessent', 'Petrolio', 'Iran', 'JOLTS'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    regime:
      'Il greggio in forte calo allenta la spinta sull’inflazione attesa e quindi sui rendimenti, che erano ' +
      'l’ostacolo principale per l’oro. Lo stesso movimento toglie però domanda di bene rifugio: due effetti ' +
      'opposti che nascono dalla stessa notizia e che tengono contenuta la reazione netta.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sull’inversione del petrolio, che è un prezzo osservabile; media sulla conclusione diplomatica, ' +
    'perché esistono dichiarazioni e segnali dei mediatori ma non un accordo, e media sull’impatto finale ' +
    'sull’oro, che dipende da quale dei due canali prevale.',
  takeaways: [
    'Rispetto all’ultimo controllo il quadro si è capovolto: Brent e WTI sono passati dal recupero a un calo di circa il 4%, a 80,66 e 76,76 dollari.',
    'La svolta è arrivata dopo le dichiarazioni del segretario al Tesoro statunitense Scott Bessent, secondo cui un’intesa per riaprire lo Stretto di Hormuz potrebbe arrivare già oggi o mercoledì.',
    'Il Qatar ha riferito che starebbe circolando una bozza di accordo, con Oman e Pakistan coinvolti nella mediazione.',
    'Un accordo non è però confermato: i flussi di petrolio attraverso lo stretto restano limitati e la situazione marittima non è tornata alla normalità.',
    'Bias da neutrale-ribassista a neutrale con lieve inclinazione rialzista, soprattutto attraverso il canale inflazione-rendimenti; il contrappeso è la minore domanda di bene rifugio.',
  ],
  invalidation: [
    'Il fallimento delle trattative o una nuova smentita netta da parte dell’Iran.',
    'Ulteriori attacchi alle navi.',
    'Un forte rimbalzo del petrolio.',
    'Un JOLTS molto forte, che farebbe risalire dollaro e rendimenti cancellando il beneficio del greggio più basso.',
  ],
  nextEvent: {
    when: 'Oggi alle 16:00',
    title: 'JOLTS di giugno',
    detail:
      'È il test immediato della lettura: un dato debole farebbe scendere insieme rendimenti e dollaro, rendendo il quadro più favorevole all’oro; uno molto forte annullerebbe il beneficio del greggio più basso.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il quadro si è capovolto nel giro di poche ore. Brent e WTI, che nella mattinata stavano ampliando il recupero, sono passati a un calo di circa il 4%. Non è un aggiustamento: è l’inversione del movimento che aveva dominato l’intera giornata.',
    },
    {
      kind: 'stats',
      title: 'Dove sono i prezzi',
      caption:
        'Valori citati dalle fonti al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Brent',
          value: '≈ 80,66 $',
          tone: 'bull',
          note: 'Circa −4%, dal recupero della mattina',
        },
        {
          label: 'WTI',
          value: '≈ 76,76 $',
          tone: 'bull',
          note: 'Circa −4%',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Che cosa ha girato il mercato',
      anchor: 'la-svolta',
    },
    {
      kind: 'paragraph',
      text: 'La svolta è arrivata dopo le dichiarazioni del segretario al Tesoro statunitense Scott Bessent, secondo cui un’intesa per riaprire lo Stretto di Hormuz potrebbe arrivare già oggi o mercoledì. Anche il Qatar ha riferito che starebbe circolando una bozza di accordo, con Oman e Pakistan coinvolti nella mediazione.',
    },
    {
      kind: 'paragraph',
      text: 'È la prima volta in questa vicenda che a parlare di tempi non è una parte sola: alle parole americane si affianca una conferma indiretta dal Golfo. Resta il fatto che la controparte iraniana, finora, ha smentito ogni volta.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'Il crollo del petrolio riduce il rischio di una nuova accelerazione dell’inflazione americana. È il canale che nelle ultime sedute stava lavorando contro l’oro, e che ora comincia a girare dall’altra parte.',
    },
    {
      kind: 'list',
      items: [
        'Può frenare i rendimenti dei Treasury.',
        'Può ridurre le aspettative di una Fed ancora più aggressiva.',
        'Può indebolire il dollaro.',
        'Può quindi offrire sostegno all’oro.',
      ],
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Il contrappeso viene dalla stessa notizia',
      text: 'Una vera distensione con l’Iran ridurrebbe anche la domanda di oro come bene rifugio. I due effetti nascono dallo stesso fatto e tirano in direzioni opposte: per questo la reazione netta di XAU/USD può restare inizialmente contenuta.',
    },
    {
      kind: 'heading',
      text: 'Che cosa manca perché sia un accordo',
      anchor: 'aspettative',
    },
    {
      kind: 'paragraph',
      text: 'Un accordo non è ancora confermato. Al momento esistono dichiarazioni americane e segnali dei mediatori, ma i flussi di petrolio attraverso Hormuz restano limitati e la situazione marittima non è tornata alla normalità. La distanza fra un’intesa annunciata come possibile e uno stretto che torna a funzionare è tutta lì. Dal lato della Federal Reserve, intanto, non risultano nuove comunicazioni monetarie rilevanti.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias passa da neutrale-ribassista a neutrale con lieve inclinazione rialzista, soprattutto attraverso il canale inflazione-rendimenti. La lettura diventerebbe più favorevole all’oro se il petrolio restasse sotto pressione e il JOLTS risultasse debole, facendo scendere insieme rendimenti e dollaro.',
    },
    {
      kind: 'note',
      text: 'Dichiarazioni e livelli di prezzo provengono dalle agenzie citate nel testo. I riferimenti numerici servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};

const joltsPiuDeboleDelleAttese: Article = {
  slug: 'jolts-piu-debole-delle-attese-oro-su-rendimenti-giu',
  categories: ['usa', 'tasso-di-interesse', 'fed'],
  title: 'JOLTS più debole delle attese: oro su, rendimenti giù',
  kicker: 'Dati USA · Offerte di lavoro',
  dek:
    'Le offerte di lavoro di giugno scendono a 7,359 milioni, sotto le attese e sotto il dato di maggio ' +
    'rivisto al ribasso. Per la prima volta in due giorni la reazione è coerente su tutti i fronti: oro in ' +
    'rialzo, rendimenti in calo, dollaro sotto quota 100.',
  publishedAt: '2026-08-04T16:30:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['JOLTS', 'Mercato del lavoro', 'Fed', 'Rendimenti', 'Dollaro'],
  instruments: ['XAU/USD', 'Treasury', 'DXY', 'Brent'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'media',
    regime:
      'Mercato del lavoro leggermente meno teso che riduce la necessità di un rialzo Fed ravvicinato e ' +
      'attenua il segnale restrittivo dell’ISM. La differenza rispetto agli ultimi aggiornamenti è che ' +
      'stavolta oro, dollaro e rendimenti confermano nello stesso momento invece di contraddirsi.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui dati, che sono pubblicati dal Bureau of Labor Statistics e completi delle revisioni; ' +
    'medio-alta sulla lettura immediata, perché una singola rilevazione mensile non fa una tendenza e ' +
    'assunzioni e licenziamenti restano stabili.',
  takeaways: [
    'Le offerte di lavoro statunitensi sono scese a 7,359 milioni a giugno, sotto i 7,440 milioni attesi e i 7,537 milioni di maggio, questi ultimi rivisti al ribasso.',
    'Il tasso di posti vacanti è calato dal 4,6% al 4,4%, mentre assunzioni, dimissioni volontarie e licenziamenti sono rimasti sostanzialmente stabili.',
    'La sorpresa non è enorme, ma arriva dopo l’ISM molto forte e segnala che il mercato del lavoro non sta accelerando insieme all’industria.',
    'La reazione è stata coerente su tutti i fronti: XAU/USD verso i 4.080-4.085 dollari, decennale dall’area del 4,70% verso circa il 4,64%, DXY di nuovo sotto quota 100 intorno a 99,89.',
    'Bias moderatamente rialzista intraday, e più solido degli aggiornamenti precedenti proprio perché confermato contemporaneamente da oro, dollaro e rendimenti.',
  ],
  invalidation: [
    'XAU/USD che non riesce a mantenersi sopra i 4.070 dollari circa.',
    'Il rendimento del decennale che torna sopra il 4,70%.',
    'Il DXY nuovamente sopra quota 100.',
    'Nuovi sviluppi diplomatici concreti che riducano fortemente la domanda di bene rifugio.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Le offerte di lavoro statunitensi sono scese a 7,359 milioni a giugno, sotto i 7,440 milioni attesi e sotto i 7,537 milioni di maggio, a loro volta rivisti al ribasso. Il tasso di posti vacanti è calato dal 4,6% al 4,4%.',
    },
    {
      kind: 'stats',
      title: 'Il dato e le attese',
      caption:
        'Dati del Bureau of Labor Statistics riferiti a giugno, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Offerte di lavoro',
          value: '7,359 mln',
          tone: 'bull',
          note: 'Attese 7,440 mln',
        },
        {
          label: 'Dato di maggio',
          value: '7,537 mln',
          tone: 'bull',
          note: 'Rivisto al ribasso',
        },
        {
          label: 'Tasso di posti vacanti',
          value: '4,4%',
          tone: 'bull',
          note: 'Dal 4,6% precedente',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Raffreddamento graduale, non crisi occupazionale',
      text: 'Il JOLTS non dimostra ancora un vero deterioramento del lavoro: le assunzioni sono rimaste a 5,3 milioni e i licenziamenti non sono aumentati in modo significativo. Si sta restringendo la domanda di lavoro, non si sta rompendo l’occupazione.',
    },
    {
      kind: 'heading',
      text: 'La reazione dei prezzi',
      anchor: 'reazione',
    },
    {
      kind: 'scenarios',
      title: 'Il movimento subito dopo il dato',
      caption:
        'Livelli citati dalle fonti al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'XAU/USD',
          tone: 'bull',
          text: 'Salito verso i 4.080-4.085 dollari, tornando vicino alla parte alta del recente intervallo.',
        },
        {
          label: 'Treasury a 10 anni',
          tone: 'bull',
          text: 'Sceso dall’area del 4,70% verso circa il 4,64%.',
        },
        {
          label: 'DXY',
          tone: 'bull',
          text: 'Tornato sotto quota 100, intorno a 99,89.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Per la prima volta i tre canali dicono la stessa cosa',
      text: 'Oro su, rendimenti giù, dollaro più debole: è una reazione cross-asset coerente. Negli aggiornamenti delle ultime due giornate mancava sempre almeno una gamba — le azioni che non cedevano, il decennale che saliva invece di scendere, il dollaro fermo sui minimi senza muoversi. È questa contemporaneità a rendere il segnale più solido, più del dato in sé.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'Un mercato del lavoro leggermente meno teso riduce la necessità per la Federal Reserve di alzare nuovamente i tassi in tempi brevi. Il dato attenua quindi parte del segnale restrittivo arrivato ieri dall’ISM: l’industria corre, il lavoro no, e per la banca centrale le due cose non chiedono la stessa risposta.',
    },
    {
      kind: 'scenarios',
      title: 'Effetto immediato probabile',
      items: [
        {
          label: 'Oro',
          tone: 'bull',
          text: 'Positivo.',
        },
        {
          label: 'Dollaro',
          tone: 'bull',
          text: 'Moderatamente negativo, quindi favorevole al metallo.',
        },
        {
          label: 'Treasury',
          tone: 'bull',
          text: 'Rendimenti in calo, soprattutto se il mercato riduce le probabilità di un rialzo della Fed.',
        },
        {
          label: 'Petrolio',
          tone: 'neutral',
          text: 'Impatto diretto limitato: resta dominato dalle notizie su Iran e Hormuz.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias su XAU/USD passa a moderatamente rialzista sull’orizzonte intraday. Il segnale è più solido rispetto agli aggiornamenti precedenti non perché il dato sia clamoroso — non lo è — ma perché per la prima volta in due giorni le tre conferme arrivano insieme invece di annullarsi a vicenda.',
    },
    {
      kind: 'note',
      text: 'I dati provengono dal Bureau of Labor Statistics, i livelli di mercato dalle fonti citate nel testo. I riferimenti numerici servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};

const iranControlloIngressiHormuz: Article = {
  slug: 'iran-chiede-il-controllo-sugli-ingressi-a-hormuz',
  categories: ['geopolitica', 'asia', 'usa', 'tasso-di-interesse'],
  title: 'L’Iran chiede il controllo sugli ingressi a Hormuz',
  kicker: 'Geopolitica · Termini della trattativa',
  dek:
    'Emergono i termini operativi della trattativa, e non sono chiusi: Teheran vuole mantenere il controllo ' +
    'sul traffico in entrata e poter intervenire su quello in uscita. L’ottimismo che ha fatto crollare il ' +
    'greggio poggia su un’intesa che nei dettagli non esiste ancora.',
  publishedAt: '2026-08-04T18:25:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Hormuz', 'Iran', 'Oman', 'Petrolio', 'Negoziati'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'media',
    regime:
      'JOLTS debole, dollaro e rendimenti in calo continuano a sostenere l’oro, e la condizione iraniana ' +
      'aggiunge un rischio geopolitico che il prezzo del greggio non sta scontando. Il sostegno però non è ' +
      'pulito: un forte rimbalzo del petrolio aiuterebbe l’oro dal lato rifugio e lo penalizzerebbe da quello ' +
      'dei rendimenti.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sull’esistenza delle richieste iraniane, che sono riportate da Reuters e circostanziate; media ' +
    'sull’esito delle trattative, perché una posizione negoziale non dice come finirà e i termini operativi ' +
    'non risultano concordati.',
  takeaways: [
    'Secondo Reuters l’Iran chiede di mantenere il controllo sul traffico navale in entrata nello Stretto di Hormuz e di essere informato sui movimenti in uscita, con la possibilità di intervenire.',
    'L’Oman gestirebbe le autorizzazioni per le navi in uscita: Teheran avrebbe attenuato la richiesta iniziale di controllo totale, ma restano divergenze importanti sulla gestione dello stretto.',
    'Le dichiarazioni americane su un’intesa imminente restano quindi aspettative: i termini operativi non risultano ancora concordati.',
    'Brent e WTI restano comunque in forte calo, intorno a 79,8 e 76 dollari, perché il mercato continua a scommettere sulla mediazione di Qatar, Oman e Pakistan.',
    'Bias moderatamente rialzista ma non pulito: il quadro macro sostiene l’oro, e la condizione iraniana aggiunge un rischio rialzista che il greggio non prezza.',
  ],
  invalidation: [
    'Un accordo ufficiale e verificabile sulla riapertura dello stretto.',
    'Una ripresa stabile dei transiti.',
    'Un petrolio che resta sotto gli 80 dollari senza rimbalzare.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Per la prima volta si conoscono i termini operativi della trattativa su Hormuz, e non sono chiusi. Secondo Reuters l’Iran chiede di mantenere il controllo sul traffico navale in entrata e di essere informato sui movimenti in uscita, con la possibilità di intervenire. L’Oman gestirebbe le autorizzazioni per le navi in uscita.',
    },
    {
      kind: 'heading',
      text: 'Un passo avanti che resta a metà',
      anchor: 'posizione',
    },
    {
      kind: 'paragraph',
      text: 'Teheran avrebbe attenuato la richiesta iniziale di controllo totale, quindi il movimento verso un’intesa esiste. Ma restano divergenze importanti su chi gestisce che cosa, e sono esattamente il genere di dettagli su cui un accordo si fa o non si fa.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Aspettative da una parte, termini dall’altra',
      text: 'Le dichiarazioni americane su un’intesa imminente restano aspettative; i termini operativi non risultano concordati. È la stessa asimmetria di ieri, ma con un elemento in più: ora si sa su che cosa si sta discutendo, e non è poco.',
    },
    {
      kind: 'heading',
      text: 'Il petrolio non lo sta scontando',
      anchor: 'petrolio',
    },
    {
      kind: 'stats',
      title: 'Dove sono i prezzi',
      caption:
        'Livelli citati dalle fonti al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Brent',
          value: '≈ 79,8 $',
          tone: 'warn',
          note: 'Resta in forte calo',
        },
        {
          label: 'WTI',
          value: '≈ 76 $',
          tone: 'warn',
          note: 'Resta in forte calo',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Il greggio continua a scendere perché il mercato scommette sulla mediazione di Qatar, Oman e Pakistan. Ma un ribasso costruito su un’intesa i cui termini sono ancora aperti è più fragile di quanto il prezzo suggerisca: è questa la vera notizia per chi guarda l’oro.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'La nuova informazione rende il ribasso del petrolio più vulnerabile a un’inversione. Se i negoziati si bloccassero, la catena che ne seguirebbe è a due facce.',
    },
    {
      kind: 'balance',
      title: 'Che cosa succederebbe a un blocco dei negoziati',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Maggiore domanda di bene rifugio.',
          'Rientro del premio geopolitico che il prezzo ha appena tolto.',
        ],
      },
      right: {
        title: 'Contro l’oro',
        tone: 'bear',
        items: [
          'Petrolio in recupero e nuove pressioni inflazionistiche.',
          'Rendimenti statunitensi potenzialmente più alti.',
        ],
      },
    },
    {
      kind: 'paragraph',
      text: 'L’effetto iniziale sarebbe quindi positivo per via geopolitica, ma diventerebbe contrastato se il rialzo del greggio trascinasse molto in alto dollaro e rendimenti. È lo stesso meccanismo che ieri ha impedito all’oro di farsi pagare la tensione su Hormuz, applicato in senso inverso.',
    },
    {
      kind: 'heading',
      text: 'Lettura aggiornata',
      anchor: 'lettura',
    },
    {
      kind: 'paragraph',
      text: 'Il bias su XAU/USD resta moderatamente rialzista, ma non pulito. Il JOLTS più debole e il calo di dollaro e rendimenti continuano a sostenere il metallo; la richiesta iraniana aggiunge ora un ulteriore rischio rialzista geopolitico, perché mostra che una riapertura completa e immediata dello stretto non è ancora garantita. Una rottura dei negoziati, o nuove interferenze alle navi, rafforzerebbero quel sostegno.',
    },
    {
      kind: 'note',
      text: 'Le condizioni negoziali e i livelli di prezzo provengono dalle fonti citate nel testo. I riferimenti numerici servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi. Dalla Federal Reserve non risultano nuove decisioni o comunicazioni monetarie rilevanti.',
    },
  ],
};

export const ARTICLES: readonly Article[] = [
  iranControlloIngressiHormuz,
  joltsPiuDeboleDelleAttese,
  petrolioInverteBessent,
  rischioHormuzSiPagaAltrove,
  rendimentiTrentennaleMassimi,
  naveColpitaHormuz,
  trumpUltimatumTeheran,
  tesoroFabbisognoEIran,
  oroInverteDopoIsm,
  ismManifatturieroFortissimo,
  primiComponentiIsm,
  interventoYenVendutiEuro,
  williamsPoliticaBenPosizionata,
  iranSmentisceNegoziatiDiretti,
  movimentoCrossAssetSiRafforza,
  interventoCoordinatoYen,
  opecQuoteHormuzTransito,
  acquistiBancheCentraliRivisti,
  attaccoSospesoNonCancellato,
  cancellazioneAttaccoIran,
  attacchiEnergiaIraniana,
];
