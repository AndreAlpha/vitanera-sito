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
    value: '≈ 4.253',
    change: 'massimo vicino a 4.265, rialzo oltre il 4%',
    tone: 'gold',
    icon: 'coin',
    note: 'Livello citato in chiusura di giornata, non una quotazione in tempo reale. Il metallo ha assorbito senza cedere l’apertura di una governatrice della Fed a un rialzo: il supporto tecnico indicato dalla fonte resta l’area 4.160.',
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
    note: 'In ventiquattro ore questa cifra ha assorbito un JOLTS più fiacco, un ADP molto sotto le attese, gli interventi di Schmid e Kashkari e infine l’apertura della governatrice Cook a un rialzo, senza spostarsi — e resta sotto il 67% di qualche giorno fa. È il numero da guardare al posto delle dichiarazioni.',
  },
  {
    symbol: 'PCE',
    name: 'Indice dei prezzi PCE statunitense, giugno',
    value: '3,7%',
    change: 'core al 3,3%',
    tone: 'bear',
    icon: 'percent',
    note: 'Sono i due numeri con cui Lisa Cook definisce l’inflazione ancora «troppo alta» e giustifica la disponibilità a votare un rialzo. Il timore che dichiara non è il livello in sé, ma che si radichi nei salari e nei prezzi.',
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
    symbol: 'US2Y',
    name: 'Treasury a 2 anni',
    value: '≈ 4,21%',
    change: 'in risalita dopo le parole di Cook',
    tone: 'bear',
    icon: 'arrow-up',
    note: 'È l’unico rendimento che ha reagito all’apertura della governatrice: la scadenza a due anni riflette il percorso dei tassi nei prossimi trimestri, cioè il punto in cui un rialzo di settembre si vedrebbe per primo. Sopra il 4,25% invaliderebbe la lettura sui giorni.',
  },
  {
    symbol: 'US10Y',
    name: 'Treasury a 10 anni',
    value: '≈ 4,63%',
    change: 'prima discesa dopo quattro salite',
    tone: 'bull',
    icon: 'arrow-down',
    note: '4,60-4,61% alle 13:20, poi 4,62%, 4,63%, 4,64% e adesso di nuovo 4,63%: la serie di rialzi che lavorava contro il metallo si è interrotta proprio sulla notizia restrittiva. Il 4,70% resta la soglia che invaliderebbe la lettura.',
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
    value: '≈ 99,75',
    change: 'ancora sotto quota 100',
    tone: 'bull',
    icon: 'dollar',
    note: 'Nemmeno l’apertura di Cook a un rialzo lo ha riportato sopra la soglia: è la conferma che regge meglio nella lettura sui giorni. Un ritorno nell’area 100-100,20 la invaliderebbe.',
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
