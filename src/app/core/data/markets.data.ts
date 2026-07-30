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
    value: '4.078 – 4.080',
    change: '≈ +0,3%',
    tone: 'gold',
    icon: 'coin',
    note: 'Positivo, ma senza conferma dal resto del comparto.',
  },
  {
    symbol: 'Core PCE',
    name: 'Inflazione annuale',
    value: '3,3%',
    change: 'atteso 3,4%',
    tone: 'bull',
    icon: 'percent',
    note: 'Sotto le attese: meno pressione immediata su un nuovo rialzo Fed.',
  },
  {
    symbol: 'DXY',
    name: 'Indice del dollaro',
    value: '≈ 100,65',
    change: 'da 100,85',
    tone: 'bull',
    icon: 'dollar',
    note: 'In arretramento: è il principale sostegno rimasto all’oro.',
  },
  {
    symbol: 'XAG/USD',
    name: 'Argento spot',
    value: '≈ −1,9%',
    change: 'platino ≈ −1,35%',
    tone: 'bear',
    icon: 'coin',
    note: 'Il comparto dei preziosi non conferma il recupero dell’oro.',
  },
];

/** Riferimenti secondari mostrati nella striscia sotto le schede. */
export const MARKET_STRIP: readonly MarketReference[] = [
  {
    symbol: 'PCE generale',
    name: 'Inflazione annuale',
    value: '3,7%',
    change: 'da 4,1%',
    tone: 'bull',
    icon: 'percent',
    note: 'In rallentamento, ma ancora lontano dall’obiettivo del 2%.',
  },
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
    value: '≈ 4,63%',
    change: '2Y ≈ 4,29%',
    tone: 'bear',
    icon: 'chart',
    note: 'Rendimenti ancora elevati lungo tutta la curva.',
  },
  {
    symbol: 'US 30Y',
    name: 'Treasury trentennale',
    value: '≈ 5,24%',
    change: 'massimo da 19 anni',
    tone: 'bear',
    icon: 'chart',
    note: 'Principale vento contrario di fondo.',
  },
  {
    symbol: 'Rame',
    name: 'Componente industriale',
    value: '≈ +2,3%',
    change: '',
    tone: 'bull',
    icon: 'bolt',
    note: 'Forza residua sulle materie prime industriali.',
  },
  {
    symbol: 'Petrolio',
    name: 'WTI e Brent',
    value: '−0,65% / −0,93%',
    change: 'in correzione',
    tone: 'bear',
    icon: 'droplet',
    note: 'Nessuna conferma inflazionistica o geopolitica rialzista.',
  },
];
