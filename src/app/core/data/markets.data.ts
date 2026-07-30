import { MarketReference } from '../models/article.model';

/**
 * Valori di riferimento citati nelle analisi pubblicate.
 *
 * ATTENZIONE: non sono quotazioni in tempo reale, non provengono da un feed di
 * mercato e non devono essere utilizzati a fini operativi. Servono unicamente a
 * dare contesto immediato a ciò che si legge negli articoli e vanno aggiornati
 * a mano insieme alle pubblicazioni.
 */
export const MARKET_REFERENCES: readonly MarketReference[] = [
  {
    symbol: 'XAU/USD',
    name: 'Oro spot',
    value: '≈ 4.060 $',
    change: 'sostenuto',
    tone: 'gold',
    icon: 'coin',
    note: 'Tiene l’area ma non accelera in proporzione all’escalation.',
  },
  {
    symbol: 'US 30Y',
    name: 'Treasury trentennale',
    value: '≈ 5,24%',
    change: 'massimo da 19 anni',
    tone: 'bear',
    icon: 'chart',
    note: 'Principale vento contrario per un’attività priva di rendimento.',
  },
  {
    symbol: 'BRENT',
    name: 'Greggio Brent',
    value: '≈ 92 $',
    change: 'da sotto 90',
    tone: 'warn',
    icon: 'droplet',
    note: 'Premio geopolitico tornato sui prezzi; WTI sopra 85.',
  },
  {
    symbol: 'DXY',
    name: 'Indice del dollaro',
    value: '≈ 100,9',
    change: 'sostenuto',
    tone: 'neutral',
    icon: 'dollar',
    note: 'Domanda rifugio e attese di una Fed più restrittiva.',
  },
];

/** Riferimenti secondari mostrati nella striscia sotto le schede. */
export const MARKET_STRIP: readonly MarketReference[] = [
  {
    symbol: 'Fed funds',
    name: 'Tasso di riferimento',
    value: '3,50 – 3,75%',
    change: 'invariato',
    tone: 'neutral',
    icon: 'bank',
    note: 'Confermato con una votazione di 9 a 3.',
  },
  {
    symbol: 'US 10Y',
    name: 'Treasury decennale',
    value: '≈ 4,70%',
    change: '2Y ≈ 4,28%',
    tone: 'bear',
    icon: 'chart',
    note: 'Rendimenti elevati lungo tutta la curva.',
  },
  {
    symbol: 'WTI',
    name: 'Greggio WTI',
    value: '> 85 $',
    change: 'in rialzo',
    tone: 'warn',
    icon: 'droplet',
    note: 'Tornato sopra la soglia con la nuova escalation.',
  },
  {
    symbol: 'Core PCE atteso',
    name: 'Stime pre-pubblicazione',
    value: '+0,2% m/m',
    change: '+3,3% a/a',
    tone: 'neutral',
    icon: 'percent',
    note: 'Prossimo catalizzatore dichiarato.',
  },
  {
    symbol: 'Rialzo settembre',
    name: 'Probabilità implicita',
    value: '64 – 65%',
    change: 'da ≈ 81%',
    tone: 'bull',
    icon: 'percent',
    note: 'Attribuita dal mercato dopo la decisione.',
  },
  {
    symbol: 'Argento e platino',
    name: 'Altri preziosi',
    value: 'deboli',
    change: '',
    tone: 'bear',
    icon: 'coin',
    note: 'Il comparto non conferma il recupero dell’oro.',
  },
];
