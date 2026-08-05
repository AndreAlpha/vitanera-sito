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
    value: '≈ 4.127',
    change: 'circa +1,3%, sopra i 4.100',
    tone: 'gold',
    icon: 'coin',
    note: 'Livelli citati nell’analisi, non quotazioni in tempo reale. Salgono anche argento, platino e palladio. I 4.100 non sono un supporto: contano perché ci si accumulano gli ordini, non da soli.',
  },
  {
    symbol: 'HORMUZ',
    name: 'Stretto di Hormuz, transiti',
    value: 'otto navi',
    change: 'contro 130-140 al giorno prima del conflitto',
    tone: 'bear',
    icon: 'map',
    note: 'È il numero che manca a tutte le dichiarazioni sui progressi diplomatici: la normalizzazione dei traffici non è cominciata, e il ribasso del greggio sconta una riapertura che nei fatti non c’è.',
  },
  {
    symbol: 'IRAN',
    name: 'Trattativa sulla riapertura dello stretto',
    value: 'quinto annuncio in tre giorni',
    change: 'quattro precedenti, zero navi in più',
    tone: 'warn',
    icon: 'alert',
    note: 'Ora è il presidente a dichiarare una trattativa già avvenuta e «molto positiva». L’Iran continua a negare un’intesa imminente, e il conteggio dei transiti non si è mosso dopo nessuno degli annunci precedenti.',
  },
  {
    symbol: 'FED FUNDS',
    name: 'Tasso ufficiale della Federal Reserve',
    value: '3,50%-3,75%',
    change: 'rialzo a settembre 57-59% di probabilità',
    tone: 'warn',
    icon: 'bank',
    note: 'Scesa dal 67% del giorno precedente, ma resta sopra la metà: la svolta monetaria non è affatto acquisita, e le attese sono molto sensibili ai prossimi ADP e payroll.',
  },
  {
    symbol: 'JOLTS',
    name: 'Offerte di lavoro statunitensi, giugno',
    value: '7,359 mln',
    change: 'attese 7,440 mln',
    tone: 'bull',
    icon: 'users',
    note: 'Maggio rivisto al ribasso a 7,537 milioni e tasso di posti vacanti dal 4,6% al 4,4%. Assunzioni e licenziamenti stabili: raffreddamento graduale, non crisi occupazionale.',
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
    value: '≈ 4,62%',
    change: 'sceso ancora dal 4,66%',
    tone: 'bull',
    icon: 'percent',
    note: 'È il canale da cui arriva la spinta, più della domanda rifugio. Il 4,70% resta la soglia: tornarci sopra invaliderebbe la lettura.',
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
    value: '≈ 99,89',
    change: 'di nuovo sotto quota 100',
    tone: 'bull',
    icon: 'dollar',
    note: 'Il JOLTS più debole lo ha riportato sotto la soglia. È la terza delle tre conferme che oggi si presentano insieme, e un ritorno sopra 100 invaliderebbe la lettura.',
  },
  {
    symbol: 'PETROLIO',
    name: 'Greggio Brent',
    value: '79,04 $',
    change: 'WTI 75,19 $, ancora in calo',
    tone: 'warn',
    icon: 'arrow-down',
    note: 'È il primo anello della catena che sostiene l’oro, ed è quello più sottile: scende sul quinto annuncio di distensione in tre giorni, mentre il conteggio dei transiti non si muove.',
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
