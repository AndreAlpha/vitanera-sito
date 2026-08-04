/**
 * attacco-sospeso-non-cancellato-iran-smentisce
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const attaccoSospesoNonCancellato: Article = {
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
