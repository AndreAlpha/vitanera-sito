/**
 * trump-dichiara-una-trattativa-durata-tutto-il-giorno
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const trattativaDurataTuttoIlGiorno: Article = {
  slug: 'trump-dichiara-una-trattativa-durata-tutto-il-giorno',
  categories: ['premio-di-rischio', 'medio-oriente', 'petrolio', 'oro'],
  title: 'Trump dichiara una trattativa durata tutto il giorno',
  kicker: 'Premio di rischio · Il quinto annuncio',
  dek:
    'Stavolta a parlare è il presidente in persona, e non di una possibilità ma di un negoziato già ' +
    'avvenuto e «molto positivo». È il quinto annuncio in tre giorni; i quattro precedenti hanno prodotto ' +
    'una smentita iraniana e nessuna nave in più.',
  publishedAt: '2026-08-05T10:30:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Trump', 'Hormuz', 'Iran', 'Petrolio', 'Tasso di base'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    regime:
      'Il greggio più basso continua a sostenere l’oro dal canale dei tassi, ma la stessa distensione che lo ' +
      'abbassa toglie domanda di bene rifugio: la notizia spinge nei due sensi insieme. Sotto, il vincolo ' +
      'fisico non si muove e il movimento verso i 4.175 espone a prese di profitto.',
    horizon: 'breve',
  },
  certainty: 'bassa',
  certaintyNote:
    'Alta sull’esistenza della dichiarazione, che è pubblica. Bassa sul suo contenuto, ed è il fondamento su ' +
    'cui la lettura poggia: che una trattativa sia durata tutto il giorno e sia andata bene è la parola di ' +
    'una parte sola, la controparte la nega, il testo non cita una fonte indipendente e l’unica misura ' +
    'verificabile — i transiti — dice che non è cambiato nulla.',
  takeaways: [
    'Trump ha dichiarato che Stati Uniti e Iran hanno svolto una negoziazione durata tutta la giornata e che le discussioni sarebbero state «molto positive», aggiungendo che lo Stretto di Hormuz potrebbe riaprire presto.',
    'Nella stessa dichiarazione ha minacciato nuove azioni militari qualora Teheran si ritirasse: è una promessa e un avvertimento nella stessa frase.',
    'Non esiste un accordo firmato, l’Iran continua a negare un’intesa imminente e restano divergenze sul controllo dello stretto.',
    'I transiti restano otto navi contro le circa 130-140 al giorno di prima della guerra: la riapertura materiale non è cominciata.',
    'Il mercato dà comunque più credito alla distensione: Brent a 79,04 dollari e WTI a 75,19, con rendimenti e attese di rialzo Fed meno aggressivi.',
  ],
  invalidation: [
    'Una nuova smentita netta da parte iraniana.',
    'Transiti fermi alle otto navi, senza risalita verso i 130-140 al giorno.',
    'Il fallimento dichiarato dei colloqui.',
    'Un rimbalzo del Brent sopra gli 80-82 dollari.',
    'Un ADP molto superiore alle attese, o un aumento aggressivo delle emissioni Treasury a lunga scadenza.',
  ],
  nextEvent: {
    when: 'Oggi alle 14:15 e alle 14:30',
    title: 'ADP sul lavoro privato e rifinanziamento del Tesoro',
    detail:
      'Sono i due appuntamenti che possono spostare il bias davvero, e agiscono sullo stesso canale: un ADP forte o un aumento delle emissioni a lunga scadenza riporterebbero in alto dollaro e rendimenti, togliendo all’oro la spinta che oggi lo sostiene.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il presidente statunitense ha dichiarato che Stati Uniti e Iran hanno svolto una negoziazione durata tutta la giornata, che le discussioni sarebbero state «molto positive» e che lo Stretto di Hormuz potrebbe riaprire presto. Nella stessa dichiarazione ha minacciato nuove azioni militari qualora Teheran si ritirasse.',
    },
    {
      kind: 'paragraph',
      text: 'Rispetto a quanto si era sentito finora è un passo avanti su due fronti. A parlare non è più il segretario al Tesoro ma il presidente, e non si parla più di un’intesa possibile ma di un negoziato già avvenuto. È la differenza fra annunciare un’intenzione e riferire un fatto.',
    },
    {
      kind: 'heading',
      text: 'Il quinto annuncio in tre giorni',
      anchor: 'tasso-di-base',
    },
    {
      kind: 'paragraph',
      text: 'Prima di pesare quanto sia convincente questa dichiarazione conviene fare un’altra domanda, che è quella che i previsori più accurati fanno per prima: quante volte, in questa stessa vicenda, un annuncio del genere è stato seguito da una riapertura? La risposta la dà l’archivio, e non è incoraggiante.',
    },
    {
      kind: 'timeline',
      title: 'Quello che è già stato annunciato, e come è finito',
      items: [
        {
          when: '3 agosto',
          title: 'Teheran nega i negoziati diretti',
          text: 'Washington parla di contatti in corso, l’Iran smentisce che esistano negoziati o incontri programmati.',
        },
        {
          when: '4 agosto, notte',
          title: 'Trump dice che i colloqui sono in corso',
          text: 'Nella stessa dichiarazione minaccia un attacco molto pesante. L’Iran nega di nuovo.',
        },
        {
          when: '4 agosto, pomeriggio',
          title: 'Bessent: intesa possibile oggi o mercoledì',
          text: 'Il Qatar riferisce di una bozza in circolazione con Oman e Pakistan mediatori. Il greggio perde quasi il 10% in due sedute.',
        },
        {
          when: '4 agosto, sera',
          title: 'I termini operativi non sono concordati',
          text: 'L’Iran chiede il controllo sul traffico in entrata e la facoltà di intervenire sulle uscite. Nessun accordo.',
        },
        {
          when: '5 agosto, mattina',
          title: 'Otto navi contro 130-140 al giorno',
          text: 'Il primo conteggio dei transiti dice che la normalizzazione non è nemmeno cominciata.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Quattro annunci, zero navi in più',
      text: 'La storia che questa dichiarazione racconta è coerente e circostanziata — una giornata intera di trattativa, un esito positivo, una riapertura vicina — e proprio per questo merita di essere confrontata con la frequenza con cui, qui dentro, annunci simili si sono tradotti in qualcosa di misurabile. Finora: mai. Il criterio con cui questo sito separa una storia convincente da una probabilità è descritto in /metodologia.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'Il mercato sta comunque dando più credito alla distensione, e lo si vede sui prezzi.',
    },
    {
      kind: 'stats',
      title: 'Dove sono i prezzi',
      caption: 'Valori citati al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Brent',
          value: '79,04 $',
          tone: 'bull',
          note: 'In calo da 79,6 di stamattina',
        },
        {
          label: 'WTI',
          value: '75,19 $',
          tone: 'bull',
          note: 'In calo da 75,9',
        },
        {
          label: 'Transiti a Hormuz',
          value: 'otto navi',
          tone: 'bear',
          note: 'Contro 130-140 al giorno prima della guerra: invariato',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Il greggio più basso riduce le pressioni inflazionistiche, ammorbidisce rendimenti e attese di rialzo della Fed, e per questa via sostiene l’oro. È lo stesso canale dei tassi che regge il movimento da ieri, e che non ha niente a che vedere con la domanda di bene rifugio.',
    },
    {
      kind: 'heading',
      text: 'La stessa notizia tira dalle due parti',
      anchor: 'due-parti',
    },
    {
      kind: 'balance',
      title: 'Che cosa farebbe un accordo ufficiale',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Petrolio più basso e inflazione attesa in calo.',
          'Rendimenti e attese sulla Fed meno aggressivi.',
        ],
      },
      right: {
        title: 'Contro l’oro',
        tone: 'bear',
        items: [
          'Perdita del premio geopolitico che ha sostenuto il metallo per giorni.',
          'Minore domanda di bene rifugio proprio mentre il prezzo è sui massimi del mese.',
        ],
      },
    },
    {
      kind: 'paragraph',
      text: 'È la ragione per cui la lettura non può essere pienamente rialzista: non perché il movimento sia debole — è il più forte della settimana — ma perché lo scenario che lo alimenta, se si realizzasse davvero, gli toglierebbe una gamba. A questo si aggiunge il rischio di prese di profitto dopo la corsa verso i 4.175 dollari.',
    },
    {
      kind: 'heading',
      text: 'Che cosa decide oggi',
      anchor: 'oggi',
    },
    {
      kind: 'paragraph',
      text: 'Alle 14:15 esce l’ADP sul lavoro privato statunitense, alle 14:30 arrivano i dettagli del rifinanziamento trimestrale del Tesoro. Sono i due appuntamenti che possono spostare il bias davvero, e agiscono sullo stesso canale: un ADP molto forte o un aumento aggressivo delle emissioni a lunga scadenza riporterebbero in alto dollaro e rendimenti, e toglierebbero all’oro la spinta che oggi lo sostiene. La diplomazia, per adesso, muove il greggio; i rendimenti muovono l’oro.',
    },
    {
      kind: 'note',
      text: 'La dichiarazione è pubblica; che il negoziato sia avvenuto e sia andato bene è invece riferito da una parte sola e negato dall’altra, e nel testo di partenza non è attribuito ad alcuna fonte indipendente. I livelli di prezzo servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};
