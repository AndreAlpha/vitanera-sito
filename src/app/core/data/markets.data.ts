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
    value: '4.095 – 4.104',
    change: 'da 4.035 – 4.041',
    tone: 'gold',
    icon: 'coin',
    note: 'Inversione intraday: recuperati oltre 50–60 dollari.',
  },
  {
    symbol: 'DXY',
    name: 'Indice del dollaro',
    value: 'Sotto 100',
    change: 'nuovi minimi intraday',
    tone: 'bull',
    icon: 'dollar',
    note: 'Principale carburante del recupero dell’oro.',
  },
  {
    symbol: 'XPT/USD',
    name: 'Platino spot',
    value: '+2,5 / +3%',
    change: 'argento ≈ +0,9%',
    tone: 'bull',
    icon: 'coin',
    note: 'Il comparto metalli conferma ora pienamente l’oro.',
  },
  {
    symbol: 'US 10Y',
    name: 'Treasury decennale',
    value: '≈ 4,66%',
    change: '2Y ≈ 4,23%',
    tone: 'bull',
    icon: 'chart',
    note: 'Pressione allentata rispetto ai massimi precedenti.',
  },
];

/** Riferimenti secondari mostrati nella striscia sotto le schede. */
export const MARKET_STRIP: readonly MarketReference[] = [
  {
    symbol: 'Nasdaq',
    name: 'Azionario USA',
    value: '+2,26%',
    change: 'S&P 500 +1,16%, Dow +0,6%',
    tone: 'bull',
    icon: 'chart',
    note: 'Con il dollaro in calo, azionario e oro possono avanzare insieme.',
  },
  {
    symbol: 'Rame',
    name: 'Componente industriale',
    value: '≈ +2,5%',
    change: '',
    tone: 'bull',
    icon: 'bolt',
    note: 'Forza confermata sulle materie prime industriali.',
  },
  {
    symbol: 'Valute',
    name: 'Correlate all’oro',
    value: 'EUR, AUD, NZD in rialzo',
    change: 'contro dollaro',
    tone: 'bull',
    icon: 'dollar',
    note: 'Anche il blocco valutario accompagna il movimento.',
  },
  {
    symbol: 'Petrolio',
    name: 'WTI e Brent',
    value: '−0,8% / −1,1%',
    change: 'unica contraddizione',
    tone: 'bear',
    icon: 'droplet',
    note: 'Nessuna conferma di una nuova accelerazione inflazionistica.',
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
