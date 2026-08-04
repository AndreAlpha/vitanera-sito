/**
 * intervento-sullo-yen-washington-ha-venduto-euro
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const interventoYenVendutiEuro: Article = {
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
