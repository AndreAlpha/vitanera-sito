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
    value: '4.035 – 4.041',
    change: 'da 4.070 – 4.080',
    tone: 'gold',
    icon: 'coin',
    note: 'Area persa rapidamente dopo l’apertura americana.',
  },
  {
    symbol: 'US 10Y',
    name: 'Treasury decennale',
    value: '≈ 4,67 – 4,68%',
    change: '2Y ≈ 4,29%',
    tone: 'bear',
    icon: 'chart',
    note: 'Il costo opportunità resta una pressione concreta.',
  },
  {
    symbol: 'Nasdaq',
    name: 'Apertura USA',
    value: '+1,6%',
    change: 'S&P 500 ≈ +1%',
    tone: 'bull',
    icon: 'chart',
    note: 'Sessione risk-on che l’oro non sta seguendo.',
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
];

/** Riferimenti secondari mostrati nella striscia sotto le schede. */
export const MARKET_STRIP: readonly MarketReference[] = [
  {
    symbol: 'Rame',
    name: 'Componente industriale',
    value: '+2,1 / +2,8%',
    change: 'platino ancora positivo',
    tone: 'bull',
    icon: 'bolt',
    note: 'Il comparto metalli non è uniformemente ribassista.',
  },
  {
    symbol: 'Petrolio',
    name: 'WTI e Brent',
    value: '−1,35% / −1,56%',
    change: 'in calo',
    tone: 'bear',
    icon: 'droplet',
    note: 'Si riduce la spinta inflazionistica e geopolitica.',
  },
  {
    symbol: 'Valute',
    name: 'Legate ai metalli',
    value: 'AUD/USD debole',
    change: 'EUR/USD e NZD/USD sopra i livelli precedenti',
    tone: 'warn',
    icon: 'dollar',
    note: 'Il fronte valutario non dà un segnale uniforme.',
  },
  {
    symbol: 'US 30Y',
    name: 'Treasury trentennale',
    value: '≈ 5,21%',
    change: 'poco sotto i massimi dal 2007',
    tone: 'bear',
    icon: 'chart',
    note: 'La parte lunga non ha seguito il segnale dovish.',
  },
  {
    symbol: 'PIL USA',
    name: 'Secondo trimestre',
    value: '+1,5%',
    change: 'atteso ≈ 2,1%',
    tone: 'bull',
    icon: 'chart',
    note: 'Crescita sotto le attese: quadro di fondo meno favorevole a una Fed aggressiva.',
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
];
