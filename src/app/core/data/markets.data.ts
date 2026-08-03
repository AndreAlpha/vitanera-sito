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
    value: '≈ 4.030',
    change: '≈ −0,3%',
    tone: 'gold',
    icon: 'coin',
    note: 'Rialzo iniziale restituito dopo l’ISM. Livello approssimato citato nell’analisi, non una quotazione: il rischio geopolitico che torna a salire lo sostiene, ma la domanda rifugio può anche andare sul dollaro.',
  },
  {
    symbol: 'IRAN',
    name: 'Minaccia militare statunitense',
    value: 'ultima possibilità',
    change: 'colloqui negati da Teheran',
    tone: 'warn',
    icon: 'alert',
    note: 'Trump minaccia un attacco molto pesante e parla di possibile «decapitazione» della leadership, sostenendo che i colloqui siano in corso. L’Iran nega negoziati e incontri programmati.',
  },
  {
    symbol: 'HORMUZ',
    name: 'Stretto di Hormuz',
    value: 'Corridoio temporaneo',
    change: 'nessun accordo politico',
    tone: 'warn',
    icon: 'map',
    note: 'La mediazione dell’Oman riguarda il passaggio delle navi. Teheran esclude una riapertura piena finché continuerà quella che definisce «aggressione» americana.',
  },
  {
    symbol: 'FED FUNDS',
    name: 'Tasso ufficiale della Federal Reserve',
    value: '3,50%-3,75%',
    change: 'fermo dal 29 luglio',
    tone: 'warn',
    icon: 'bank',
    note: 'Williams ha sostenuto con convinzione la decisione di non muoversi, ma alzerebbe senza un ritorno credibile dell’inflazione al 2%.',
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
    symbol: 'BANK OF KOREA',
    name: 'Acquisti di oro della banca centrale coreana',
    value: 'primi dal 2013',
    change: 'quantità non note',
    tone: 'bull',
    icon: 'archive',
    note: 'Acquisti dai produttori nazionali nell’ambito della gestione delle riserve. Sostegno strutturale alla domanda ufficiale, non un catalizzatore intraday.',
  },
  {
    symbol: 'US10Y',
    name: 'Treasury a 10 anni',
    value: '−5/−6 pb',
    change: 'recupero atteso, non ancora visto',
    tone: 'warn',
    icon: 'percent',
    note: 'È il canale da cui l’oro trae il beneficio maggiore. Oggi è sceso con le aspettative inflazionistiche, ma ora ha due spinte contrarie: la forza dell’ISM e la maggiore offerta di titoli in arrivo dal Tesoro.',
  },
  {
    symbol: 'DXY',
    name: 'Dollar Index',
    value: 'minimi da metà giugno',
    change: '≈ 99,8, sotto quota 100',
    tone: 'warn',
    icon: 'dollar',
    note: 'Il recupero resta un rischio e non un fatto: i preziosi hanno già reagito all’ISM, il dollaro non ancora. È la principale conferma che manca alla lettura ribassista sull’oro.',
  },
  {
    symbol: 'PETROLIO',
    name: 'Greggio Brent',
    value: '83,77 $',
    change: 'WTI 80,34 $, chiusura di lunedì',
    tone: 'warn',
    icon: 'arrow-down',
    note: 'Diversi analisti considerano il crollo una possibile reazione eccessiva. Dopo la nuova minaccia americana il rischio di rimbalzo è concreto, ed è la variabile da cui dipende quasi tutto il resto.',
  },
  {
    symbol: 'TESORO USA',
    name: 'Fabbisogno del Tesoro, terzo trimestre',
    value: '739 mld $',
    change: '+68 mld sulla stima di maggio',
    tone: 'bear',
    icon: 'print',
    note: 'Più offerta di Treasury in arrivo. Quanto pesi sull’oro dipende dalla composizione delle emissioni, che il piano di rifinanziamento dirà mercoledì.',
  },
  {
    symbol: 'INTERVENTO JPY',
    name: 'Intervento coordinato sullo yen',
    value: '≈ 59 mld $',
    change: 'euro venduti, non dollari',
    tone: 'warn',
    icon: 'shield',
    note: 'Importo giapponese riportato da Reuters. Secondo il Financial Times la gamba americana è stata fatta vendendo euro: sostiene lo yen senza indebolire il dollaro nel suo complesso. Dettagli ufficiali non ancora pubblicati.',
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
