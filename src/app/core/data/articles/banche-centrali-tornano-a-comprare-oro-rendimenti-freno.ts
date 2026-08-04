/**
 * banche-centrali-tornano-a-comprare-oro-rendimenti-freno
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const acquistiBancheCentraliRivisti: Article = {
  slug: 'banche-centrali-tornano-a-comprare-oro-rendimenti-freno',
  categories: ['riserve-auree', 'oro', 'obbligazioni', 'usa'],
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
    // Il testo dice tre volte «medio periodo», ma parlando di acquisti
    // trimestrali che «agiscono sul pavimento del mercato, non sul movimento
    // della singola seduta». Sulla scala del sito — dove `medio` sono i giorni
    // e `lungo` le settimane — quelle parole valgono `lungo`.
    horizon: 'lungo',
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
  sources: [{ outlet: 'World Gold Council' }],
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
