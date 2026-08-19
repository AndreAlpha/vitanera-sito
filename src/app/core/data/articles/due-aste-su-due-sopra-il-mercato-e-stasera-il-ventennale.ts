import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const dueAsteSuDueSopraIlMercato: Article = {
  slug: 'due-aste-su-due-sopra-il-mercato-e-stasera-il-ventennale',
  categories: ['debito-pubblico', 'fed', 'oro', 'usa'],
  title: 'Due aste su due sono arrivate sopra il mercato, e stasera tocca al ventennale',
  kicker: 'Debito pubblico · Il collocamento che misura il premio',
  dek:
    'Il Tesoro americano colloca oggi sedici miliardi di dollari a vent’anni alle 19:00, e un’ora dopo ' +
    'la banca centrale pubblica i verbali di luglio. Sono le due prove della diagnosi scritta qui ieri ' +
    'sera — che il rialzo dei rendimenti lunghi sia premio a termine e non inflazione attesa — e ' +
    'arrivano dopo due collocamenti lunghi su due aggiudicati sopra il mercato.',
  publishedAt: '2026-08-19T09:10:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: [
    'Asta a vent’anni',
    'Verbali del FOMC',
    'Rapporto domanda-offerta',
    'Premio a termine',
    'Scorte di distillati',
  ],
  instruments: ['XAU/USD', 'Treasury', 'Brent', 'WTI'],
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sul fondamento, che è fatto di calendari ufficiali e di risultati già pubblicati: il ' +
    'collocamento a vent’anni da sedici miliardi è confermato dal calendario del Tesoro americano per ' +
    'oggi, i verbali della riunione del 28-29 luglio dal calendario della banca centrale per le 14:00 di ' +
    'New York, e i due risultati d’asta su cui poggia il conto sono in archivio con i loro numeri. Media ' +
    'sulla deduzione, e va detta per quello che è: due collocamenti non fanno una serie statistica, e ' +
    'un tasso di base costruito su due casi è un indizio, non una previsione. Bassa infine sul dato di ' +
    'settore che questa mattina indica scorte americane di greggio e distillati in calo: è una ' +
    'rilevazione preliminare di un’associazione di categoria, e il rapporto ufficiale esce oggi.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'media',
    horizon: 'medio',
    regime:
      'La direzione resta appena sotto il neutrale e la ragione non è il prezzo di stamattina, che è ' +
      'fermo a circa 4.337,6 dollari, ma un conteggio. Negli ultimi due collocamenti sulle scadenze ' +
      'lunghe il Tesoro americano si è aggiudicato sopra il quotato di mercato in entrambi i casi — il ' +
      'decennale del 12 agosto al 4,683% contro un secondario a 4,673%, il trentennale del 13 agosto al ' +
      '5,216% contro un quotato di 5,212% alla chiusura delle offerte — e in entrambi con un rapporto ' +
      'fra domanda e offerta pari o inferiore alla propria media. Due su due non è una serie, ma è la ' +
      'sola base di cui questo archivio dispone, e punta nella direzione sbagliata per il metallo: ' +
      'un’asta assorbita a fatica tiene il rendimento reale dov’è, e il rendimento reale è la grandezza ' +
      'che l’oro deve battere. La forza è media perché la stessa serata contiene la prova opposta: ' +
      'verbali di una riunione precedente allo shock energetico possono spostare la probabilità di una ' +
      'pausa e riaprire il canale monetario in un’ora.',
  },
  takeaways: [
    'Il calendario ufficiale del Tesoro americano colloca l’asta del titolo a vent’anni oggi, mercoledì 19 agosto, per sedici miliardi di dollari: alle 19:00 italiane, un’ora prima dei verbali della banca centrale. Non è domani, e la data è il primo fatto da fissare perché attribuire a un’asta un movimento che avviene in un giorno diverso è il modo più semplice di sbagliare la causa.',
    'Arriva dopo due collocamenti su scadenze lunghe che si sono aggiudicati entrambi sopra il quotato di mercato: il decennale da 42 miliardi il 12 agosto al 4,683% contro un secondario a 4,673%, e il trentennale da 25 miliardi il 13 agosto al 5,216% contro un quotato di 5,212% alla chiusura delle offerte.',
    'In entrambi i casi anche la domanda era sotto la propria media: rapporto fra domanda e offerta a 2,53 contro 2,48 di media ma sotto il 2,59 del mese prima sul decennale, e a 2,39 contro circa 2,43 sul trentennale, con gli operatori primari all’11,51% contro circa il 10,6%.',
    'I verbali riguardano la riunione del 28-29 luglio, chiusa con i tassi al 3,50-3,75% e tre voti contrari a favore di un rialzo. Il mercato prezza circa il 64% di probabilità di una pausa a settembre, quindi il quadro monetario non ha subito un nuovo irrigidimento questa mattina.',
    'Il metallo è praticamente fermo a circa 4.337,6 dollari dopo il forte calo della vigilia, mentre il greggio sale ancora: Brent a 91,44 dollari con più 0,5% e WTI a 85,45 con più 0,6%. Il trentennale resta attorno al 5,27% dopo il picco a 5,3371%.',
  ],
  sources: [
    {
      outlet: 'United States Department of the Treasury',
      title:
        'Calendario ufficiale dei collocamenti: titolo a vent’anni con data d’asta 19 agosto 2026',
      at: '19 agosto 2026',
    },
    {
      outlet: 'Reuters',
      title:
        'Collocamento a vent’anni da sedici miliardi di dollari; XAU/USD a circa 4.337,6 dollari, Brent a 91,44 con più 0,5% e WTI a 85,45 con più 0,6%',
      at: '19 agosto 2026',
    },
    {
      outlet: 'Federal Reserve',
      title:
        'Calendario ufficiale: pubblicazione dei verbali della riunione del FOMC del 28-29 luglio alle 14:00 di New York',
      at: '19 agosto 2026',
    },
    {
      outlet: 'American Petroleum Institute',
      title:
        'Rilevazione preliminare di settore: scorte americane di greggio e distillati in calo, scorte di benzina in aumento',
      at: '19 agosto 2026',
    },
    {
      outlet: 'Energy Information Administration',
      title:
        'Pubblicazione del rapporto settimanale ufficiale sullo stato del petrolio, prevista per il 19 agosto',
      at: '19 agosto 2026',
    },
  ],
  invalidation: [
    'Un collocamento a vent’anni che si aggiudica sotto il quotato di mercato alla chiusura delle offerte, con un rapporto fra domanda e offerta sopra la media delle ultime dieci aste sulla stessa scadenza: rovescerebbe la serie di due su due e toglierebbe a questa lettura la sua unica base, che è un conteggio e non un’opinione.',
    'Un trentennale che chiude sotto il 5,213% entro venerdì 21 agosto, cioè sotto la chiusura del 13 agosto: direbbe che la pressione sulla parte lunga sta rientrando davvero e non soltanto dai massimi intraday, e la direzione andrebbe riportata a neutrale.',
    'Verbali che mostrino un comitato preoccupato dalle aspettative di inflazione di lungo periodo invece che dalle condizioni finanziarie: sarebbero in contraddizione con un’inflazione di pareggio a dieci anni ferma al 2,30%, e toglierebbero alla diagnosi fiscale del rialzo dei rendimenti la conferma che questa analisi si aspetta.',
    'Una probabilità di pausa a settembre sopra il 75% dopo i verbali, contro il 64% di questa mattina: direbbe che il canale monetario si è riaperto in modo netto, e a quel punto la direzione andrebbe portata sopra il neutrale a prescindere dal risultato dell’asta.',
    'Scorte americane di distillati in aumento nel rapporto ufficiale di oggi, contro il calo indicato in via preliminare dalla fonte di settore: smentirebbe il numero su cui il mercato sta ragionando stamattina e toglierebbe una delle cause dichiarate del primato sui margini di raffinazione registrato stanotte.',
  ],
  nextEvent: {
    when: 'Mercoledì 19 agosto, 19:00 e 20:00 italiane',
    title: 'Asta del titolo a vent’anni, poi i verbali del FOMC di luglio',
    detail:
      'Un’ora separa le due prove, e vanno lette in quest’ordine. All’asta il numero che conta non è il ' +
      'rendimento di aggiudicazione ma il suo scarto dal quotato di mercato alla chiusura delle offerte: ' +
      'sopra vuol dire che il Tesoro ha dovuto pagare per collocare, sotto che la carta era desiderata. ' +
      'Ai verbali conta una cosa sola: se il fronte favorevole a un rialzo fosse più largo dei tre voti ' +
      'contrari messi a verbale, perché la larghezza si vede nella discussione e non nel conteggio.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Il calendario ufficiale del Tesoro americano colloca oggi, mercoledì 19 agosto, l’asta del ' +
        'titolo a vent’anni per sedici miliardi di dollari, alle 19:00 italiane. Un’ora dopo la banca ' +
        'centrale pubblica i verbali della riunione del 28-29 luglio. Sono due prove della stessa ' +
        'diagnosi, quella che questo archivio ha scritto ieri sera: se il rialzo dei rendimenti lunghi ' +
        'non è inflazione attesa ma premio a termine, allora si vede nel prezzo che il Tesoro deve ' +
        'pagare per collocare debito, e non si vede nelle preoccupazioni del comitato. Stasera si ' +
        'guardano tutte e due le cose a un’ora di distanza.',
    },
    {
      kind: 'heading',
      text: 'Il tasso di base, e sono due casi',
      anchor: 'il-tasso-di-base',
    },
    {
      kind: 'paragraph',
      text:
        'Prima di guardare che cosa può succedere conviene contare che cosa è già successo, che è la ' +
        'regola con cui questo archivio affronta gli eventi ripetuti. Negli ultimi due collocamenti su ' +
        'scadenze lunghe il Tesoro americano si è aggiudicato sopra il quotato di mercato in entrambi i ' +
        'casi. Il 12 agosto il decennale da 42 miliardi è andato al 4,683% mentre sul secondario il ' +
        'titolo scambiava a 4,673%: dieci millesimi di punto sopra, e dieci punti base e mezzo sopra ' +
        'l’asta del mese precedente. Il 13 agosto il trentennale da 25 miliardi è andato al 5,216% ' +
        'contro un quotato di 5,212% alla chiusura delle offerte: quattro decimi di punto base sopra, e ' +
        'il costo più alto su quella scadenza da circa un quarto di secolo.',
    },
    {
      kind: 'stats',
      title: 'I due collocamenti che precedono quello di stasera',
      caption:
        'Risultati pubblicati dal Tesoro americano e già registrati in archivio. Il rapporto fra domanda e offerta indica quante volte l’importo offerto è stato richiesto: sopra la media significa carta desiderata, sotto significa carta assorbita a fatica.',
      items: [
        {
          label: 'Decennale, 12 agosto',
          value: '4,683%',
          tone: 'bear',
          note: 'Contro un secondario a 4,673%: aggiudicato sopra il mercato, e dieci punti base e mezzo sopra l’asta di luglio. Importo 42 miliardi',
        },
        {
          label: 'Domanda, decennale',
          value: '2,53',
          tone: 'warn',
          note: 'Sopra la media di 2,48 delle ultime dieci aste ma sotto il 2,59 del mese precedente, quando il rendimento era più basso',
        },
        {
          label: 'Trentennale, 13 agosto',
          value: '5,216%',
          tone: 'bear',
          note: 'Contro un quotato di 5,212% alla chiusura delle offerte: sopra il mercato di quattro decimi di punto base. Importo 25 miliardi',
        },
        {
          label: 'Domanda, trentennale',
          value: '2,39',
          tone: 'bear',
          note: 'Contro circa 2,43 di media, con gli operatori primari all’11,51% contro circa il 10,6%: quando i primari prendono di più, gli altri hanno preso di meno',
        },
        {
          label: 'Ventennale, stasera',
          value: '16 mld $',
          tone: 'warn',
          note: 'Alle 19:00 italiane. È la scadenza meno liquida delle tre, quindi la più sensibile a una domanda che si raffredda',
        },
        {
          label: 'Trentennale oggi',
          value: '≈ 5,27%',
          tone: 'bear',
          note: 'Dopo il picco a 5,3371%. L’asta arriva su un livello di partenza superiore di circa sei centesimi a quello del collocamento del 13 agosto',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Due casi non sono una serie, e vale la pena dirlo prima e non dopo',
      text:
        'Un tasso di base costruito su due osservazioni è un indizio, non una previsione: con due lanci ' +
        'di moneta non si stabilisce se è truccata. La ragione per cui vale comunque la pena contarli è ' +
        'che sono gli unici due disponibili nella fase in cui la parte lunga è sotto tensione, e che ' +
        'concordano su entrambe le misure — prezzo di aggiudicazione sopra il mercato e domanda pari o ' +
        'sotto la propria media. Se stasera arrivasse il terzo caso concorde, la cosa smetterebbe di ' +
        'essere un indizio; se arrivasse un’asta forte, sarebbe la prima crepa nella diagnosi fiscale ' +
        'scritta ieri, ed è per questo che il collocamento conta più dei verbali che lo seguono.',
    },
    {
      kind: 'heading',
      text: 'Che cosa cercare nei verbali, e che cosa no',
      anchor: 'nei-verbali',
    },
    {
      kind: 'paragraph',
      text:
        'Il numero dei dissensi è già noto: alla riunione del 28-29 luglio i tassi sono rimasti al ' +
        '3,50-3,75% con tre voti contrari a favore di un rialzo. Quel numero è a verbale da tre ' +
        'settimane e non porta informazione nuova. Quello che i verbali possono aggiungere è la ' +
        'larghezza del fronte restrittivo fra i nove che hanno votato per la pausa, che è una cosa ' +
        'diversa e non si legge nel conteggio. C’è però una seconda domanda, ed è quella che riguarda ' +
        'direttamente la lettura di ieri sera: se il comitato ragioni sulle aspettative di inflazione ' +
        'oppure sul costo reale del denaro. Il mercato obbligazionario dice che le prime sono ferme — ' +
        'inflazione di pareggio al 2,30% su dieci anni e al 2,27% su cinque — e se il comitato stesse ' +
        'guardando proprio quelle, chi decide e chi prezza starebbero guardando due grandezze diverse.',
    },
    {
      kind: 'balance',
      title: 'Le due uscite della serata',
      left: {
        title: 'Asta debole, verbali restrittivi',
        tone: 'bear',
        items: [
          'Aggiudicazione sopra il quotato con domanda sotto la media: il terzo caso concorde, e la diagnosi fiscale del rialzo dei rendimenti diventa difficile da contestare.',
          'Il rendimento reale resta dov’è o sale, e con esso il costo di tenere un’attività che non paga cedole.',
          'Con la probabilità di pausa già scesa dal 65% al 64% nella mattinata, un fronte restrittivo più largo dei tre dissensi toglierebbe anche la gamba monetaria.',
        ],
      },
      right: {
        title: 'Asta forte, verbali accomodanti',
        tone: 'bull',
        items: [
          'Aggiudicazione sotto il mercato con domanda sopra la media: la serie si interrompe al secondo caso e la parte lunga trova un primo alleggerimento.',
          'Sarebbe anche la prima smentita della lettura scritta ieri sera, e questo archivio la conterebbe come tale invece di adattarla.',
          'Verbali che mostrino i nove convinti della pausa riaprirebbero il canale monetario: sopra il 75% di probabilità la direzione andrebbe portata sopra il neutrale.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Il resto della mattinata',
      anchor: 'il-resto',
    },
    {
      kind: 'paragraph',
      text:
        'Sul metallo non c’è molto da aggiungere rispetto alle ultime ore: circa 4.337,6 dollari, ' +
        'praticamente fermo dopo il calo della vigilia, con il greggio che continua a salire — Brent a ' +
        '91,44 dollari con più 0,5%, WTI a 85,45 con più 0,6%. Va invece registrato un dato preliminare ' +
        'sull’energia, e va registrato con la sua riserva: secondo la rilevazione di un’associazione di ' +
        'categoria le scorte americane di greggio e di distillati sarebbero diminuite e quelle di ' +
        'benzina aumentate. Non è il numero ufficiale, che esce oggi con il rapporto settimanale ' +
        'dell’agenzia americana per l’energia, e questo archivio ha già scritto che un dato di settore ' +
        'anticipa e non conclude. Se confermato, però, quel calo dei distillati sarebbe la causa più ' +
        'diretta del primato sui margini di raffinazione registrato stanotte.',
    },
    {
      kind: 'note',
      text:
        'Una nota sulla data, perché è la ragione per cui questa analisi esiste. Il collocamento a ' +
        'vent’anni risulta oggi sul calendario ufficiale del Tesoro americano, non domani. La ' +
        'differenza non è formale: con la parte lunga della curva sotto questa tensione, attribuire un ' +
        'movimento serale a un’asta che non si è tenuta è il modo più semplice di scrivere una causa ' +
        'sbagliata, ed è un errore che si propaga perché nessuno torna a controllarlo. Quando due ' +
        'controlli danno date diverse, quella che vale è sempre il calendario dell’emittente.',
    },
    {
      kind: 'note',
      text:
        'I livelli citati qui — il 5,213% sul trentennale, il 75% sulla probabilità di pausa — servono a ' +
        'rendere verificabile il ragionamento e a fissare le condizioni che lo renderebbero sbagliato. ' +
        'Non sono obiettivi né previsioni di prezzo.',
    },
    {
      kind: 'scenarios',
      title: 'Che cosa guardare adesso',
      items: [
        {
          label: 'Lo scarto, non il rendimento',
          tone: 'warn',
          text:
            'Alle 19:00 il numero da cercare non è il rendimento di aggiudicazione, che dipende da dove ' +
            'sta il mercato, ma la sua distanza dal quotato alla chiusura delle offerte. È una ' +
            'distinzione che questo archivio ha già sbagliato una volta, il 13 agosto, leggendo ' +
            'l’aggiudicazione contro il prezzo del secondario di un’ora prima invece che contro quello ' +
            'del momento: la correzione arrivò il giorno dopo e cambiò il segno della lettura.',
        },
        {
          label: 'Il rapporto fra domanda e offerta',
          tone: 'bear',
          text:
            'È la seconda metà della misura e va letta insieme alla prima. Un’aggiudicazione sopra il ' +
            'mercato con domanda sopra la media dice una cosa — il mercato ha comprato caro perché ' +
            'voleva la carta — mentre sopra il mercato con domanda sotto la media ne dice un’altra, ed ' +
            'è quella che si è vista in entrambe le aste precedenti.',
        },
        {
          label: 'L’ora del movimento',
          tone: 'neutral',
          text:
            'Le due prove distano sessanta minuti, ed è poco per separarne gli effetti. Un movimento ' +
            'che comincia fra le 19:00 e le 20:00 appartiene all’asta; uno che comincia dopo le 20:00 ' +
            'appartiene ai verbali. Confondere i due significherebbe attribuire al comitato una ' +
            'riprezzatura che è arrivata dal Tesoro, e sarebbe lo stesso errore che questa analisi ' +
            'evita sulla data.',
        },
      ],
    },
  ],
};
