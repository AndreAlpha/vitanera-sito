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
    value: '> 4.100',
    change: 'massimo ≈ 4.120',
    tone: 'gold',
    icon: 'coin',
    note: 'Livello recuperato dopo il dato macro più morbido.',
  },
  {
    symbol: 'Core PCE',
    name: 'Variazione mensile',
    value: '+0,1%',
    change: 'atteso +0,2%',
    tone: 'bull',
    icon: 'percent',
    note: 'Inflazione mensile in raffreddamento.',
  },
  {
    symbol: 'PIL USA',
    name: 'Secondo trimestre',
    value: '+1,5%',
    change: 'atteso ≈ 2,1%',
    tone: 'bull',
    icon: 'chart',
    note: 'Crescita sotto le attese: combinazione favorevole a una Fed meno aggressiva.',
  },
  {
    symbol: 'US 30Y',
    name: 'Treasury trentennale',
    value: '≈ 5,21%',
    change: 'poco sotto i massimi dal 2007',
    tone: 'bear',
    icon: 'chart',
    note: 'La parte lunga non segue il segnale dovish.',
  },
];

/** Riferimenti secondari mostrati nella striscia sotto le schede. */
export const MARKET_STRIP: readonly MarketReference[] = [
  {
    symbol: 'PCE generale',
    name: 'Variazione mensile',
    value: '−0,1%',
    change: 'annuale 3,7%',
    tone: 'bull',
    icon: 'percent',
    note: 'In rallentamento, ma ancora lontano dall’obiettivo del 2%.',
  },
  {
    symbol: 'Core PCE',
    name: 'Inflazione annuale',
    value: '3,3%',
    change: 'obiettivo Fed 2%',
    tone: 'warn',
    icon: 'percent',
    note: 'Ancora lontana dal target: la pressione si riduce, non sparisce.',
  },
  {
    symbol: 'US 10Y',
    name: 'Treasury decennale',
    value: '≈ 4,67 – 4,69%',
    change: '30Y ≈ 5,21%',
    tone: 'bear',
    icon: 'chart',
    note: 'Il mercato non prezza ancora un vero ciclo di allentamento.',
  },
  {
    symbol: 'Sussidi',
    name: 'Richieste iniziali',
    value: '197.000',
    change: 'media 4 sett. 202.750',
    tone: 'warn',
    icon: 'bank',
    note: 'Mercato del lavoro ancora piuttosto solido.',
  },
  {
    symbol: 'Spesa reale',
    name: 'Consumi USA',
    value: '+0,4%',
    change: '',
    tone: 'warn',
    icon: 'bolt',
    note: 'Nessun brusco crollo della domanda.',
  },
  {
    symbol: 'Petrolio',
    name: 'WTI e Brent',
    value: '−0,65% / −0,93%',
    change: 'in correzione',
    tone: 'bear',
    icon: 'droplet',
    note: 'Principale rischio contrario all’oro nel medio termine.',
  },
];
