/**
 * iran-chiede-il-controllo-sugli-ingressi-a-hormuz
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const iranControlloIngressiHormuz: Article = {
  slug: 'iran-chiede-il-controllo-sugli-ingressi-a-hormuz',
  categories: ['rotte-e-approvvigionamento', 'medio-oriente', 'petrolio', 'oro'],
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
    horizon: 'breve',
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
  sources: [{ outlet: 'Reuters' }],
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
