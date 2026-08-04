/**
 * trump-alza-di-nuovo-la-minaccia-contro-teheran
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const trumpUltimatumTeheran: Article = {
  slug: 'trump-alza-di-nuovo-la-minaccia-contro-teheran',
  categories: ['premio-di-rischio', 'medio-oriente', 'petrolio', 'oro'],
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
    horizon: 'breve',
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
