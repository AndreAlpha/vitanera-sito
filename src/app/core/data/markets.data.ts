import { MarketReference } from '../models/article.model';

/**
 * Valori di riferimento citati nelle analisi pubblicate.
 *
 * ATTENZIONE: non sono quotazioni in tempo reale, non provengono da un feed di
 * mercato e non devono essere utilizzati a fini operativi. Servono unicamente a
 * dare contesto immediato a ciò che si legge negli articoli.
 */
export const MARKET_REFERENCES: readonly MarketReference[] = [
  {
    symbol: 'XAU/USD',
    name: 'Oro spot',
    value: '4.060 – 4.065',
    change: 'da 4.116',
    tone: 'gold',
    icon: 'coin',
    note: 'Rientro dopo il massimo toccato subito dopo la decisione della Fed.',
  },
  {
    symbol: 'FED FUNDS',
    name: 'Tasso di riferimento',
    value: '3,50 – 3,75%',
    change: 'invariato',
    tone: 'neutral',
    icon: 'bank',
    note: 'Decisione confermata con una votazione di 9 a 3.',
  },
  {
    symbol: 'US 10Y',
    name: 'Treasury decennale',
    value: '≈ 4,64%',
    change: '30Y a 5,24%',
    tone: 'bear',
    icon: 'chart',
    note: 'Il trentennale è indicato come massimo dal 2007.',
  },
  {
    symbol: 'BRENT',
    name: 'Greggio Brent',
    value: '≈ 91,80 $',
    change: '+1,17%',
    tone: 'warn',
    icon: 'droplet',
    note: 'In risalita con la ripresa degli attacchi USA-Iran.',
  },
];

export interface DriverItem {
  readonly label: string;
  readonly effect: 'favorevole' | 'sfavorevole' | 'ambiguo';
  readonly weight: 1 | 2 | 3;
  readonly note: string;
}

/**
 * Sintesi qualitativa dei fattori citati nelle analisi pubblicate.
 * Non è un modello quantitativo, non ha valore predittivo e non deriva da
 * elaborazioni statistiche: è una schematizzazione di quanto scritto nei testi.
 */
export const DRIVERS: readonly DriverItem[] = [
  {
    label: 'Rischio geopolitico',
    effect: 'favorevole',
    weight: 3,
    note: 'Attacchi ripresi, rotte marittime sotto osservazione.',
  },
  {
    label: 'Assenza di rialzo immediato',
    effect: 'favorevole',
    weight: 2,
    note: 'Tassi lasciati invariati nella riunione di riferimento.',
  },
  {
    label: 'Rendimenti reali USA',
    effect: 'sfavorevole',
    weight: 3,
    note: 'Curva in rialzo, trentennale ai massimi dal 2007.',
  },
  {
    label: 'Dollaro',
    effect: 'sfavorevole',
    weight: 2,
    note: 'In recupero dopo la reazione iniziale alla Fed.',
  },
  {
    label: 'Dissenso interno al FOMC',
    effect: 'sfavorevole',
    weight: 2,
    note: 'Tre membri favorevoli a un rialzo.',
  },
  {
    label: 'Petrolio e inflazione',
    effect: 'ambiguo',
    weight: 3,
    note: 'Sostiene la domanda di protezione ma alimenta attese restrittive.',
  },
];

/** Riferimenti secondari mostrati nella striscia sotto le schede. */
export const MARKET_STRIP: readonly MarketReference[] = [
  {
    symbol: 'US 2Y',
    name: 'Treasury biennale',
    value: '≈ 4,29%',
    change: '',
    tone: 'bear',
    icon: 'chart',
    note: 'Parte breve della curva.',
  },
  {
    symbol: 'WTI',
    name: 'Greggio WTI',
    value: '≈ 84,85 $',
    change: '+0,46%',
    tone: 'warn',
    icon: 'droplet',
    note: 'Rialzo meno marcato rispetto al Brent.',
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
    symbol: 'XPT/USD',
    name: 'Platino',
    value: '≈ −0,4%',
    change: '',
    tone: 'bear',
    icon: 'coin',
    note: 'Citato tra le conferme ribassiste.',
  },
];
