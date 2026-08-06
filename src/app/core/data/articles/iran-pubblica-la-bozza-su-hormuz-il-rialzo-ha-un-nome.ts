/**
 * iran-pubblica-la-bozza-su-hormuz-il-rialzo-ha-un-nome
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const iranBozzaHormuz: Article = {
  slug: 'iran-pubblica-la-bozza-su-hormuz-il-rialzo-ha-un-nome',
  categories: ['rotte-e-approvvigionamento', 'petrolio', 'medio-oriente', 'oro'],
  title: 'L’Iran pubblica la bozza su Hormuz: il rialzo del greggio ha un nome',
  kicker: 'Rotte · La bozza e i due tavoli',
  dek:
    'L’agenzia statale Fars ha pubblicato il testo di quella che chiama la bozza iniziale del piano strategico ' +
    'per la gestione dello Stretto: divieto di transito alle navi statunitensi e israeliane, multe fino al 20% ' +
    'del valore del carico, commissioni di servizio da pagare in rial. È la causa del balzo del 4% che un’ora ' +
    'fa ha rotto la soglia degli 82 dollari — ma il quadro di metodo di questo archivio dice di non prenderla ' +
    'per quello che sembra.',
  publishedAt: '2026-08-06T19:40:00+02:00',
  author: AUTHOR,
  readingMinutes: 5,
  tags: ['Hormuz', 'Iran', 'Giochi a due livelli', 'Transiti', 'Premio di rischio'],
  instruments: ['Brent', 'WTI', 'XAU/USD', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'bassa',
    regime:
      'Il canale che pesa resta quello del greggio: sopra gli 82 dollari il Brent alimenta inflazione attesa e ' +
      'rendimenti più di quanto alimenti la domanda di rifugio, e l’oro scende mentre petrolio, tassi e dollaro ' +
      'salgono insieme. La direzione non cambia rispetto a un’ora fa, la forza sì: adesso si sa che quel ' +
      'movimento poggia su una bozza parlamentare pubblicata durante un negoziato, cioè sul tipo di documento ' +
      'che dice poco su come andrà a finire.',
    horizon: 'medio',
  },
  certainty: 'media',
  certaintyNote:
    'Alta sulla pubblicazione: l’agenzia Fars ha diffuso il testo, la ripresa è attribuita e i prezzi sono ' +
    'osservati da due rilevazioni che concordano. Media sul significato, e per una ragione precisa: è una bozza ' +
    'in esame, non una legge, e arriva dal Parlamento mentre a trattare è l’esecutivo. Bassa sulla conseguenza ' +
    'che il testo grezzo ne trarrebbe — che la riapertura si allontani — perché il quadro di metodo usato qui ' +
    'classifica proprio questo genere di documento come poco diagnostico rispetto all’esito del negoziato.',
  takeaways: [
    'L’agenzia di stato iraniana Fars ha pubblicato oggi il testo di quella che descrive come la bozza iniziale del piano strategico per la gestione dello Stretto di Hormuz. Il testo è in esame e non è stato approvato.',
    'Prevede il divieto permanente di transito alle navi statunitensi e israeliane, l’esclusione dei Paesi che hanno danneggiato l’Iran finché il danno non è risarcito, multe fino al 20% del valore del carico e commissioni di servizio da pagare esclusivamente in rial.',
    'È la causa del movimento: il Brent è salito di circa il 4% a 82,72 dollari e il WTI del 3,5% a 77,83 dopo la pubblicazione, dopo essere sceso di circa l’8% nella settimana sulle dichiarazioni americane che davano l’accordo per vicino.',
    'Le commissioni in rial contraddicono direttamente la ricostruzione dell’intesa Iran-Oman circolata ieri, secondo cui non sarebbero stati imposti pedaggi né oneri di servizio: due documenti descrivono lo stesso passaggio in modo incompatibile.',
    'Il metro materiale però non si è mosso: i transiti restano fermi a otto navi contro le 130-140 al giorno di prima del conflitto, e nessuna dichiarazione congiunta è stata emessa.',
  ],
  invalidation: [
    'Un conteggio dei transiti che risale sopra le otto navi: è la condizione che questo archivio ha dichiarato per prima e non ha mai cambiato, ed è l’unica che misura il passaggio invece di descriverlo.',
    'L’approvazione del testo da parte del Parlamento iraniano, che lo trasformerebbe da posizione negoziale in norma, oppure il suo ritiro dall’ordine del giorno.',
    'Un Brent che torna sotto gli 80 dollari: direbbe che il premio riaperto oggi si è già sgonfiato, e con esso la ragione di questa lettura.',
    'Una dichiarazione congiunta Iran-Oman che escluda esplicitamente commissioni di transito: mostrerebbe che la bozza era posizionamento interno e non la posizione del tavolo.',
    'Prima di tutte queste, e senza aspettare la rottura: un Brent che resta sopra gli 82 dollari mentre l’oro risale sopra i 4.320, che segnalerebbe che il legame fra greggio e metallo si sta allentando.',
  ],
  nextEvent: {
    when: 'Domani alle 14:30',
    title: 'Rapporto occupazionale statunitense',
    detail:
      'La bozza iraniana non ha una data: passerà o non passerà in commissione quando ci passerà, e la dichiarazione congiunta con l’Oman è annunciata da due giorni senza arrivare. Il rapporto di domani una data ce l’ha, e agisce sull’altro capo della catena descritta qui — i rendimenti — che è quello attraverso cui il greggio arriva davvero all’oro. Un dato forte sommerebbe l’effetto tassi all’effetto energetico; un dato debole toglierebbe metà della pressione.',
  },
  sources: [
    {
      outlet: 'Fars',
      title: 'Bozza iniziale del piano strategico per la gestione dello Stretto di Hormuz',
    },
    { outlet: 'CNBC' },
    { outlet: 'Investing.com' },
    { outlet: 'Al Jazeera' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'L’agenzia di stato iraniana Fars ha pubblicato oggi il testo di quella che descrive come la bozza iniziale del piano strategico per la gestione dello Stretto di Hormuz. Prevede il divieto permanente di transito alle navi statunitensi e israeliane, l’esclusione dei Paesi e dei soggetti che hanno danneggiato l’Iran finché il danno non viene risarcito, multe fino al 20% del valore del carico per chi violasse le restrizioni e commissioni per pilotaggio e sicurezza da pagare esclusivamente in rial. Il testo è in esame in commissione parlamentare e non è stato approvato.',
    },
    {
      kind: 'stats',
      title: 'Dove siamo',
      caption: 'Rilevazioni delle 19:42 del 6 agosto, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Brent',
          value: '82,52 $',
          tone: 'bear',
          note: 'Più 3,86%, massimo di giornata 83,00, chiusura di ieri 79,45',
        },
        {
          label: 'WTI',
          value: '77,83 $',
          tone: 'bear',
          note: 'Più 3,5% circa dopo la pubblicazione della bozza',
        },
        {
          label: 'XAU/USD',
          value: '4.298,50 $',
          tone: 'warn',
          note: 'Meno 0,16%, dopo un massimo di giornata a 4.363,60',
        },
        {
          label: 'Treasury 10 anni',
          value: '4,673%',
          tone: 'bear',
          note: 'Massimo 4,679%, un millesimo sotto la tacca di logoramento',
        },
        {
          label: 'Dollar Index',
          value: '99,855',
          tone: 'warn',
          note: 'Massimo 99,900: quota 100 non è stata toccata',
        },
        {
          label: 'Transiti a Hormuz',
          value: 'otto navi',
          tone: 'bear',
          note: 'Fermo dal 5 agosto, contro 130-140 al giorno',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Il rialzo di un’ora fa ha un nome',
      anchor: 'il-rialzo-ha-un-nome',
    },
    {
      kind: 'paragraph',
      text: 'L’analisi pubblicata qui un’ora fa registrava che il Brent aveva superato gli 82 dollari — la soglia dichiarata da questo archivio il 5 agosto — e osservava che il rincaro arrivava contro tre notizie che avrebbero dovuto farlo scendere: scorte statunitensi in aumento, listini Aramco tagliati per l’Asia, un’intesa Iran-Oman su una rotta temporanea. Diceva che cosa era successo senza poter dire perché.',
    },
    {
      kind: 'paragraph',
      text: 'Adesso si sa. Il greggio è salito dopo la pubblicazione della bozza: circa il 4% sul Brent a 82,72 dollari e il 3,5% sul WTI a 77,83, dopo che nella settimana i prezzi erano scesi di circa l’8% sulle dichiarazioni di Washington che davano l’accordo per imminente. La sequenza completa della settimana è quindi meno sorprendente di quanto sembrasse: il mercato aveva prezzato la riapertura sulla parola americana, e ha ripreso il premio quando la parte iraniana ha messo per iscritto a che condizioni intende riaprire.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Due documenti, lo stesso passaggio, termini incompatibili',
      text: 'La ricostruzione dell’intesa Iran-Oman circolata ieri diceva che non sarebbero stati imposti pedaggi né oneri di servizio. La bozza pubblicata oggi prevede commissioni per pilotaggio e sicurezza, da pagare esclusivamente in rial. Sui costi di transito — uno dei quattro punti aperti che questo archivio segue dal 4 agosto — le due carte dicono il contrario l’una dell’altra. Non è un dettaglio contabile: chi incassa e in quale valuta è esattamente ciò che distingue una rotta gestita da una rotta riaperta.',
    },
    {
      kind: 'heading',
      text: 'Perché una bozza massimalista dice poco',
      anchor: 'due-tavoli',
    },
    {
      kind: 'paragraph',
      text: 'Qui il testo grezzo di questa analisi tirava una conclusione che va corretta, e la ragione sta in un quadro di metodo che questo archivio usa già. Chi negozia un accordo internazionale gioca su due tavoli insieme: quello con la controparte e quello interno, dove servono i voti per ratificare. Su un tavolo si tratta, sull’altro si deve apparire irremovibili, e la retorica intransigente serve spesso ad allargare lo spazio di manovra interno invece che a chiuderlo all’esterno. Per questo le posizioni massimaliste esibite durante un negoziato sono poco diagnostiche su come finirà: il metodo è descritto in /metodologia.',
    },
    {
      kind: 'paragraph',
      text: 'La configurazione di oggi è precisamente quella. A trattare con l’Oman è l’esecutivo; a pubblicare la bozza è il Parlamento, per il tramite di un’agenzia di stato. Un testo che vieta il passaggio alle navi americane e israeliane e pretende il pagamento in valuta nazionale è la posizione di partenza più alta immaginabile, ed è anche il documento che rende ratificabile in patria un accordo più modesto. Leggerlo come la prova che la riapertura si allontana significa scambiare la posizione negoziale per l’esito — cioè fare con l’Iran l’errore che questo archivio ha passato cinque giorni a non fare con gli annunci americani.',
    },
    {
      kind: 'paragraph',
      text: 'Vale però anche il rovescio, e non va addolcito: la bozza è la prima volta che la parte iraniana mette per iscritto delle condizioni, dopo sette annunci in cui a parlare era quasi sempre Washington. Anche scontandola per quello che è, dice che l’oggetto della trattativa comprende chi può passare e chi paga, e non soltanto dove si passa.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Le due spinte, e la catena che le collega',
      left: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'La catena è quella descritta da giorni: più rischio su Hormuz, più greggio, più inflazione attesa, più rendimenti, più costo-opportunità.',
          'Il Brent resta sopra gli 82 dollari, cioè oltre la soglia dove l’effetto inflazionistico supera la domanda di rifugio.',
          'Petrolio, rendimenti e dollaro si muovono insieme, e l’oro scende: la coincidenza toglie al metallo anche il sostegno da rifugio.',
        ],
      },
      right: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Il rischio geopolitico aumenta, e con esso la domanda di rifugio: è l’effetto che agisce nelle ore.',
          'Il documento è una bozza in esame, non una norma: se resta tale, il premio riaperto oggi è il primo a sgonfiarsi.',
          'Nessuna delle soglie del metallo è stata toccata: il massimo di giornata resta 4.363,60 dollari e il calo è dello 0,16%.',
        ],
      },
    },
    {
      kind: 'scenarios',
      title: 'Effetto probabile',
      caption: 'Effetti attesi, da confrontare con i prezzi.',
      items: [
        {
          label: 'Petrolio',
          tone: 'bear',
          text: 'Al rialzo finché la bozza resta sul tavolo, ma su una base fragile: è un testo non approvato, e il premio che ha creato può essere restituito con la stessa velocità con cui è arrivato.',
        },
        {
          label: 'Oro',
          tone: 'warn',
          text: 'Sotto pressione per via dei tassi finché il Brent resta sopra gli 82, sostenuto dal rifugio se la tensione sale davvero. La direzione resta quella di un’ora fa; la convinzione è minore.',
        },
        {
          label: 'Rendimenti USA',
          tone: 'bear',
          text: 'Il canale energetico continua a spingerli, e il decennale è a un millesimo dalla tacca di logoramento del 4,68%.',
        },
        {
          label: 'Dollaro',
          tone: 'warn',
          text: 'A 99,855 con un massimo a 99,900: quota 100 resta la conferma che non arriva, ed è la terza gamba che manca.',
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
      text: 'L’impostazione su XAU/USD resta neutrale con inclinazione ribassista, come un’ora fa, ma la forza scende da media a bassa. Non è un ripensamento sul meccanismo: il greggio sopra gli 82 dollari continua a lavorare contro il metallo attraverso i rendimenti, e i prezzi lo confermano. È un giudizio sulla base di quel movimento. Un’ora fa non si sapeva perché il Brent fosse salito; adesso si sa, e la ragione è un documento che il metodo usato qui insegna a scontare.',
    },
    {
      kind: 'paragraph',
      text: 'C’è una simmetria che vale la pena dire per esteso. Per cinque giorni questo archivio ha ripetuto che gli annunci americani di distensione non spostavano il conteggio delle navi, e che le parole non sono un fatto. La stessa disciplina va applicata adesso che il documento arriva dall’altra parte e spinge il prezzo nella direzione opposta: una bozza iraniana non è una nave che non passa più di quanto un comunicato di Washington fosse una nave che passa. Il conteggio è ancora otto, ed è ancora l’unica cosa che si muove solo quando succede qualcosa davvero.',
    },
    {
      kind: 'note',
      text: 'Il testo della bozza è pubblicato dall’agenzia di stato iraniana Fars e ripreso dalla stampa internazionale; non è stato approvato ed è descritto come iniziale. I livelli citati sono rilevazioni delle 19:42 del 6 agosto e servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi. Il conteggio degli otto transiti risale al 5 agosto e non è stato aggiornato.',
    },
  ],
};
