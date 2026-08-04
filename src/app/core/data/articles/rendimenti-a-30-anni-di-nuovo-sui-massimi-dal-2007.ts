/**
 * rendimenti-a-30-anni-di-nuovo-sui-massimi-dal-2007
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const rendimentiTrentennaleMassimi: Article = {
  slug: 'rendimenti-a-30-anni-di-nuovo-sui-massimi-dal-2007',
  categories: ['tasso-di-interesse', 'usa', 'fed', 'geopolitica'],
  title: 'Rendimenti a 30 anni di nuovo sui massimi dal 2007',
  kicker: 'Tassi USA · Parte lunga della curva',
  dek:
    'Il trentennale statunitense è risalito intorno al 5,25%, area che non si vedeva dal 2007. È la ragione ' +
    'per cui l’oro resta fermo poco sopra i 4.062 dollari nonostante Hormuz: il mercato obbligazionario sta ' +
    'assorbendo buona parte della domanda rifugio.',
  publishedAt: '2026-08-04T11:15:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['Treasury', 'Curva dei rendimenti', 'Fed', 'JOLTS', 'Emissioni'],
  instruments: ['XAU/USD', 'Treasury', 'DXY', 'Brent'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-ribassista',
    strength: 'bassa',
    regime:
      'Rendimenti lunghi sui massimi dal 2007 che alzano il rendimento alternativo offerto dai titoli di ' +
      'Stato e frenano l’oro proprio mentre il rischio geopolitico dovrebbe sostenerlo. La tensione su ' +
      'Hormuz impedisce una lettura decisamente ribassista, ma non riesce a farsi pagare.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sul livello dei rendimenti, che è un prezzo osservabile; medio-alta sull’effetto frenante per ' +
    'l’oro, che è una relazione consolidata ma non un automatismo. La verifica arriva con il JOLTS del ' +
    'pomeriggio.',
  takeaways: [
    'Il rendimento del Treasury statunitense a 30 anni è risalito intorno al 5,25%, area più alta dal 2007, e il movimento riguarda soprattutto la parte lunga della curva.',
    'Dietro ci sono tre valutazioni che il mercato continua a fare insieme: inflazione persistente, maggiore fabbisogno di finanziamento del Tesoro e credibilità restrittiva della Fed.',
    'L’oro resta leggermente positivo vicino ai 4.062 dollari ma senza accelerare, mentre il Brent recupera verso gli 84,8-85 dollari dopo il ribasso della vigilia.',
    'Il mercato attribuisce circa il 65% di probabilità a un rialzo della Fed a settembre, e non sono uscite nuove comunicazioni ufficiali dalla Fed o dalla Fed di New York.',
    'Bias neutrale con lieve inclinazione ribassista finché i rendimenti lunghi restano su questi livelli: il mercato obbligazionario sta neutralizzando buona parte della domanda rifugio.',
  ],
  invalidation: [
    'Un forte calo dei rendimenti dopo il JOLTS.',
    'Un dollaro in discesa.',
    'Un XAU/USD capace di superare con decisione i massimi della mattinata.',
  ],
  nextEvent: {
    when: 'Oggi alle 16:00',
    title: 'JOLTS statunitense',
    detail:
      'È il prossimo catalizzatore macro importante. Domani arriva invece la conferma del Tesoro sulle emissioni: se aumentassero quelle a lunga scadenza, i rendimenti potrebbero restare elevati e limitare XAU/USD anche con le tensioni geopolitiche aperte.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il rendimento del Treasury statunitense a 30 anni è risalito intorno al 5,25%, l’area più alta dal 2007. Il movimento riguarda soprattutto la parte lunga della curva, ed è la notizia che spiega meglio di ogni altra il comportamento dell’oro in queste ore.',
    },
    {
      kind: 'stats',
      title: 'Il quadro in quattro numeri',
      caption:
        'Valori citati dalle fonti al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Treasury a 30 anni',
          value: '≈ 5,25%',
          tone: 'bear',
          note: 'Area più alta dal 2007',
        },
        {
          label: 'XAU/USD',
          value: '≈ 4.062 $',
          tone: 'warn',
          note: 'Leggermente positivo, ma senza accelerare',
        },
        {
          label: 'Brent',
          value: '84,8-85 $',
          tone: 'warn',
          note: 'Recupera dopo il ribasso della vigilia',
        },
        {
          label: 'Rialzo Fed a settembre',
          value: '≈ 65%',
          tone: 'bear',
          note: 'Probabilità attribuita dal mercato',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Che cosa sta prezzando la parte lunga',
      anchor: 'parte-lunga',
    },
    {
      kind: 'paragraph',
      text: 'Il mercato continua a valutare tre cose insieme, e nessuna delle tre è nuova: inflazione persistente, maggiore fabbisogno di finanziamento del Tesoro e credibilità restrittiva della Fed. La novità è che le sta prezzando tutte contemporaneamente sulla scadenza più lunga, dove il peso dell’offerta di titoli si sente di più.',
    },
    {
      kind: 'paragraph',
      text: 'Va notato anche ciò che non è successo: dalla Federal Reserve e dalla Fed di New York non sono uscite nuove comunicazioni ufficiali rilevanti. Il movimento non nasce da un annuncio, ma dal modo in cui il mercato sta leggendo dati e conti pubblici.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'L’aumento dei rendimenti lunghi è un ostacolo concreto per l’oro, perché eleva il rendimento alternativo offerto dai titoli di Stato: chi cerca protezione può trovarla in uno strumento che paga una cedola, invece che in uno che non paga nulla.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Ecco perché Hormuz non si vede sul prezzo',
      text: 'È la spiegazione della reazione tiepida di ieri e di stamattina: il rischio geopolitico c’è e il petrolio lo conferma, ma la domanda rifugio che ne deriva viene in buona parte assorbita dal mercato obbligazionario invece che dall’oro.',
    },
    {
      kind: 'heading',
      text: 'Effetto probabile immediato',
      anchor: 'effetto',
    },
    {
      kind: 'scenarios',
      caption: 'Effetti attesi nella giornata, da verificare sui prezzi.',
      items: [
        {
          label: 'Oro',
          tone: 'warn',
          text: 'Sostegno geopolitico, ma rialzi frenati dai rendimenti.',
        },
        {
          label: 'Dollaro',
          tone: 'bear',
          text: 'Tendenzialmente sostenuto.',
        },
        {
          label: 'Treasury',
          tone: 'bear',
          text: 'Pressione soprattutto sul 30 anni e sulla parte lunga della curva.',
        },
        {
          label: 'Petrolio',
          tone: 'warn',
          text: 'Lieve recupero, ancora legato all’assenza di progressi diplomatici verificabili con l’Iran.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Nei prossimi giorni',
      anchor: 'prossimi-giorni',
    },
    {
      kind: 'paragraph',
      text: 'Se domani il Tesoro confermasse un aumento delle emissioni a lunga scadenza, i rendimenti potrebbero restare elevati e continuare a limitare XAU/USD anche in presenza di tensioni geopolitiche. È l’incrocio fra i due filoni di questi giorni: il debito americano decide quanto spazio ha il premio di rischio.',
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias passa a neutrale con lieve inclinazione ribassista, e resta tale finché i rendimenti lunghi si mantengono così elevati. Il rischio geopolitico impedisce una lettura decisamente ribassista, ma al momento è il mercato obbligazionario a dettare il passo.',
    },
    {
      kind: 'note',
      text: 'I livelli riportati provengono dalle fonti citate nel testo e servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi. La probabilità di rialzo attribuita alla Fed è una lettura di mercato, non una previsione della banca centrale.',
    },
  ],
};
