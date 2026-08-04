/**
 * trump-cancella-attacco-iran-accordo-non-chiuso
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const cancellazioneAttaccoIran: Article = {
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
