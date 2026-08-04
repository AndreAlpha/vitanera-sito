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
    value: '≈ 4.060',
    change: '≈ +0,2%',
    tone: 'gold',
    icon: 'coin',
    note: 'Sostenuto dalla tensione geopolitica dopo il colpo alla nave. Livello approssimato citato nell’analisi, non una quotazione: manca però il resto del quadro difensivo, e il mercato aspetta i dati sul lavoro.',
  },
  {
    symbol: 'HORMUZ',
    name: 'Stretto di Hormuz',
    value: 'nave colpita',
    change: 'corridoio temporaneo, nessun accordo politico',
    tone: 'bear',
    icon: 'map',
    note: 'Un mercantile colpito da un proiettile nell’area dello stretto: il rischio sulle rotte energetiche non era rientrato. La mediazione dell’Oman riguarda soltanto il passaggio delle navi.',
  },
  {
    symbol: 'IRAN',
    name: 'Colloqui fra Stati Uniti e Iran',
    value: 'due versioni opposte',
    change: 'nessuna conferma verificabile',
    tone: 'warn',
    icon: 'alert',
    note: 'Washington sostiene che i contatti siano in corso; Teheran nega negoziati diretti e limita il tavolo omanita ai passaggi marittimi. Sullo sfondo resta la minaccia militare rilanciata da Trump.',
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
    value: 'leggermente risalito',
    change: 'dopo il calo della vigilia',
    tone: 'warn',
    icon: 'percent',
    note: 'È il canale da cui l’oro trae il beneficio maggiore, e sta andando dalla parte sbagliata: sale invece di scendere, nonostante la tensione geopolitica. Sopra pesano ISM forte e maggiore offerta di titoli.',
  },
  {
    symbol: 'DXY',
    name: 'Dollar Index',
    value: 'minimi da due mesi',
    change: 'nessun premio rifugio prezzato',
    tone: 'bull',
    icon: 'dollar',
    note: 'Resta vicino ai minimi nonostante l’incidente a Hormuz: il segno più chiaro che gli investitori non stanno prezzando una nuova escalation su larga scala.',
  },
  {
    symbol: 'PETROLIO',
    name: 'Greggio Brent',
    value: '84,89 $',
    change: '≈ +1,3%, WTI 81,11 $',
    tone: 'warn',
    icon: 'arrow-up',
    note: 'Recupera parte del crollo della seduta precedente dopo il colpo alla nave. È la conferma più solida che il premio geopolitico non era sparito, ed è la variabile da cui dipende quasi tutto il resto.',
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
