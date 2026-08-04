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
    value: '≈ 4.053',
    change: 'quasi fermo',
    tone: 'gold',
    icon: 'coin',
    note: 'Livello approssimato citato nell’analisi, non una quotazione. Non beneficia pienamente della tensione geopolitica: la domanda rifugio si sta scaricando altrove.',
  },
  {
    symbol: 'HORMUZ',
    name: 'Stretto di Hormuz',
    value: 'transiti ancora limitati',
    change: 'situazione marittima non normalizzata',
    tone: 'bear',
    icon: 'map',
    note: 'È la distanza fra un’intesa detta possibile e uno stretto che torna a funzionare: i flussi non sono ripartiti e dopo il mercantile colpito il rischio sulle rotte resta.',
  },
  {
    symbol: 'IRAN',
    name: 'Trattativa sulla riapertura dello stretto',
    value: 'bozza in circolazione',
    change: 'intesa possibile oggi o mercoledì',
    tone: 'warn',
    icon: 'alert',
    note: 'Lo dice il segretario al Tesoro Bessent, e il Qatar riferisce di una bozza con Oman e Pakistan mediatori. Nessuna conferma iraniana: finora Teheran ha smentito ogni volta.',
  },
  {
    symbol: 'FED FUNDS',
    name: 'Tasso ufficiale della Federal Reserve',
    value: '3,50%-3,75%',
    change: 'rialzo a settembre ≈ 65% di probabilità',
    tone: 'bear',
    icon: 'bank',
    note: 'La probabilità è una lettura di mercato, non una previsione della banca centrale: dalla Fed e dalla Fed di New York non sono uscite nuove comunicazioni ufficiali rilevanti.',
  },
  {
    symbol: 'ISM',
    name: 'ISM manifatturiero, indice principale',
    value: '55,6',
    change: 'massimo da oltre quattro anni',
    tone: 'bear',
    icon: 'gauge',
    note: 'Atteso 54,0, precedente 53,3, con occupazione, ordini ed esportazioni in espansione. È il dato che ha fatto invertire il rialzo dell’oro.',
  },
  {
    symbol: 'US10Y',
    name: 'Treasury a 10 anni',
    value: '4,705%',
    change: '+2,2 pb',
    tone: 'bear',
    icon: 'percent',
    note: 'È il canale da cui l’oro trae il beneficio maggiore. Il crollo del greggio toglie la spinta che lo stava alzando, ma il calo dei rendimenti va ancora verificato: il JOLTS delle 16:00 è il primo test.',
  },
  {
    symbol: 'US30Y',
    name: 'Treasury a 30 anni',
    value: '≈ 5,25%',
    change: 'massimi dal 2007',
    tone: 'bear',
    icon: 'percent',
    note: 'La parte lunga prezza insieme inflazione persistente, fabbisogno del Tesoro e credibilità restrittiva della Fed. È l’ostacolo più concreto per l’oro, perché alza il rendimento alternativo dei titoli di Stato.',
  },
  {
    symbol: 'DXY',
    name: 'Dollar Index',
    value: 'appena sopra 100',
    change: 'tornato sopra la soglia',
    tone: 'bear',
    icon: 'dollar',
    note: 'Ha recuperato quota 100 dopo i minimi recenti. Un dollaro che risale toglie all’oro il principale sostegno valutario delle ultime sedute.',
  },
  {
    symbol: 'PETROLIO',
    name: 'Greggio Brent',
    value: '≈ 80,66 $',
    change: 'circa −4%, WTI ≈ 76,76 $',
    tone: 'warn',
    icon: 'arrow-down',
    note: 'Inversione netta dopo le parole di Bessent su una possibile riapertura dello stretto. Il greggio più basso allenta la spinta su inflazione attesa e rendimenti, ma segnala anche la distensione che toglie domanda di rifugio.',
  },
  {
    symbol: 'TESORO USA',
    name: 'Fabbisogno del Tesoro, terzo trimestre',
    value: '739 mld $',
    change: '+68 mld sulla stima di maggio',
    tone: 'bear',
    icon: 'print',
    note: 'Più offerta di Treasury in arrivo. La composizione delle emissioni arriva col piano di rifinanziamento di mercoledì 5 agosto alle 14:30 italiane.',
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
