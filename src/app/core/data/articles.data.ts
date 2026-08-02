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

export const ARTICLES: readonly Article[] = [
  attaccoSospesoNonCancellato,
  cancellazioneAttaccoIran,
  attacchiEnergiaIraniana,
];
