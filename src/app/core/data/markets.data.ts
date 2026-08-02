import { MarketReference } from '../models/article.model';

/**
 * Valori di riferimento citati nelle analisi pubblicate.
 *
 * ATTENZIONE: non sono quotazioni in tempo reale, non provengono da un feed di
 * mercato e non devono essere utilizzati a fini operativi. Servono unicamente a
 * dare contesto immediato a ciò che si legge negli articoli e vanno aggiornati
 * a mano insieme alle pubblicazioni.
 *
 * Sono di conseguenza vuoti finché l'archivio è vuoto: un quadro di mercato
 * senza analisi che lo citino sarebbe un numero senza fonte. La panoramica
 * omette del tutto il blocco quando non c'è nulla da mostrare.
 *
 * Per i dati macroeconomici — quelli sì completi di storico e fonte — la
 * sezione di riferimento è il calendario economico.
 */
export const MARKET_REFERENCES: readonly MarketReference[] = [
  {
    symbol: 'XAU/USD',
    name: 'Oro spot',
    value: '4.049,83',
    change: '−1,26%',
    tone: 'gold',
    icon: 'coin',
    note: 'Ultima chiusura, precedente all’annuncio sulla pausa militare.',
  },
  {
    symbol: 'ACQUISTI BC',
    name: 'Acquisti di oro delle banche centrali',
    value: '≈ 289 t',
    change: '2° trimestre 2026',
    tone: 'bull',
    icon: 'basket',
    note: 'Stima rivista del World Gold Council: Polonia e Cina fra i principali acquirenti.',
  },
  {
    symbol: 'US30Y',
    name: 'Treasury a 30 anni',
    value: 'Livelli pluriennali',
    change: '',
    tone: 'bear',
    icon: 'arrow-up',
    note: 'Toccati venerdì mentre l’oro cedeva: è il principale freno per XAU/USD.',
  },
  {
    symbol: 'FED FUNDS',
    name: 'Tasso ufficiale della Federal Reserve',
    value: '3,50%-3,75%',
    change: '',
    tone: 'bear',
    icon: 'bank',
    note: 'Fermo dal comunicato del 29 luglio, con l’inflazione ancora descritta come elevata.',
  },
  {
    symbol: 'BRENT',
    name: 'Brent',
    value: '90,12 $',
    change: '+1,2%',
    tone: 'bull',
    icon: 'bolt',
    note: 'Sostenuto dalle difficoltà di transito a Hormuz, la cui riapertura è nel negoziato.',
  },
];

/**
 * Riferimenti secondari.
 *
 * Resta vuoto finché non c'è un valore da mettere: la panoramica concatena i
 * due array in un'unica griglia, quindi la distinzione non si vede più a video
 * e non ha senso riempirlo per simmetria. Il DXY è citato nell'ultima analisi,
 * ma senza un numero: senza numero non è un riferimento.
 */
export const MARKET_STRIP: readonly MarketReference[] = [];
