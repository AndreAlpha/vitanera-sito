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
    value: '≈ 4.259',
    change: 'oltre +4%, il più forte da febbraio',
    tone: 'gold',
    icon: 'coin',
    note: 'Livello del controllo delle 18:20, non una quotazione in tempo reale. La cifra tonda dei 4.200 non ha trattenuto nulla, come previsto: quei numeri contano perché ci si accumulano ordini, e una volta assorbiti il prezzo prosegue.',
  },
  {
    symbol: 'ARGENTO',
    name: 'Argento spot',
    value: 'in rialzo con l’oro',
    change: 'il movimento resta di comparto',
    tone: 'bull',
    icon: 'spark',
    note: 'È il dettaglio che qualifica il movimento: quando anche il metallo più piccolo e più volatile sale, di solito si sta guardando un afflusso di ordini sull’intero comparto, non una riprezzatura dei tassi.',
  },
  {
    symbol: 'ADP',
    name: 'Occupazione privata statunitense, luglio',
    value: '44.000',
    change: 'attese 70.000',
    tone: 'bull',
    icon: 'users',
    note: 'Ritmo più debole degli ultimi sei mesi, con giugno rivisto da 98.000 a 95.000. I licenziamenti restano contenuti: raffreddamento delle assunzioni, non crisi. Il dato ufficiale arriva venerdì.',
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
    symbol: 'MAR ROSSO',
    name: 'Attacco a una petroliera vicino a Yanbu',
    value: 'petroliera colpita',
    change: 'rivendicato dagli Houthi',
    tone: 'bear',
    icon: 'alert',
    note: 'Un secondo collo di bottiglia, su una rotta diversa e con un attore che non siede al tavolo di Hormuz: un accordo con Teheran non chiuderebbe da solo il rischio sulle rotte energetiche.',
  },
  {
    symbol: 'IRAN',
    name: 'Intesa tecnica Iran-Oman sulla rotta',
    value: 'coordinate concordate',
    change: 'sesto annuncio, il primo con un documento',
    tone: 'warn',
    icon: 'map',
    note: 'I cinque precedenti erano dichiarazioni di intenti e non avevano mosso una nave. Questo produce un oggetto tecnico, ma la dichiarazione congiunta è ancora in revisione e restano aperti controllo del traffico in uscita, tariffe, garanzie di sicurezza e opposizione americana.',
  },
  {
    symbol: 'FED FUNDS',
    name: 'Tasso ufficiale della Federal Reserve',
    value: '3,50%-3,75%',
    change: 'rialzo a settembre fermo al 57%',
    tone: 'warn',
    icon: 'bank',
    note: 'In ventiquattro ore questa cifra ha assorbito un JOLTS più fiacco, un ADP molto sotto le attese e gli interventi restrittivi di Schmid e Kashkari senza spostarsi. È il numero da guardare al posto delle dichiarazioni.',
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
    value: '≈ 4,64%',
    change: 'quarta lettura consecutiva in salita',
    tone: 'bear',
    icon: 'arrow-up',
    note: '4,60-4,61% alle 13:20, poi 4,62%, 4,63% e adesso 4,64%: nessun passo grande abbastanza da farsi notare, ma la direzione si è girata mentre l’oro saliva del 4%. Il 4,70% resta la soglia che invaliderebbe la lettura.',
  },
  {
    symbol: 'US30Y',
    name: 'Treasury a 30 anni',
    value: '≈ 5,25%',
    change: 'massimi dal 2007',
    tone: 'bear',
    icon: 'percent',
    note: 'Prezzava tre cose insieme: inflazione persistente, fabbisogno del Tesoro e credibilità restrittiva della Fed. Il piano di rifinanziamento ne toglie una — le aste lunghe non crescono — e restano le altre due.',
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
    value: '79,34 $',
    change: 'di nuovo sotto gli 80, WTI 75,42 $',
    tone: 'bull',
    icon: 'arrow-down',
    note: 'Il rimbalzo del Mar Rosso è rientrato: pesano l’intesa tecnica su Hormuz e un aumento inatteso di 2,5 milioni di barili nelle scorte americane. Sopra gli 82 dollari l’effetto inflazionistico tornerebbe a pesare sull’oro più della domanda di rifugio.',
  },
  {
    symbol: 'TESORO USA',
    name: 'Rifinanziamento trimestrale di agosto',
    value: '125 mld $',
    change: 'aste invariate per diversi trimestri',
    tone: 'bull',
    icon: 'print',
    note: '58 miliardi a tre anni, 42 a dieci, 25 a trenta, più riacquisti fino a 38 miliardi. I 68 miliardi di fabbisogno in più non passano dalle scadenze lunghe: lo shock di offerta che frenava l’oro è rinviato.',
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
