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
    value: '≈ 4.260',
    change: 'ancora positivo, sopra i 4.244 di metà pomeriggio',
    tone: 'gold',
    icon: 'coin',
    note: 'Livello citato al momento della scrittura, non una quotazione in tempo reale. È salito attraverso una riprezzatura restrittiva invece di seguirla: quando il prezzo rifiuta la notizia che dovrebbe muoverlo, l’informazione sta nel rifiuto. Il supporto tecnico indicato dalla fonte resta l’area 4.160.',
  },
  {
    symbol: 'SUSSIDI',
    name: 'Richieste iniziali di sussidio, settimanali',
    value: '199.000',
    change: 'attese 202.000-204.000',
    tone: 'bear',
    icon: 'users',
    note: 'Da 198.000 riviste: i licenziamenti restano bassi, ed è la metà del dato favorevole al dollaro. L’altra metà dice il contrario — le richieste continuative salgono da 1,777 a 1,801 milioni, cioè chi perde il lavoro fatica di più a ritrovarlo.',
  },
  {
    symbol: 'PRODUTTIVITA',
    name: 'Produttività e costo del lavoro per unità prodotta',
    value: '+1,4%',
    change: 'atteso +0,7%, costo del lavoro +1,3%',
    tone: 'bull',
    icon: 'chart',
    note: 'È il dato che nessuno ha prezzato. Finché la produttività cresce più del costo del lavoro per unità, i salari possono salire senza finire nei prezzi: viene a mancare la base contabile del timore che la Fed dichiara, cioè un’inflazione che si radica nei salari. Serie trimestrale e molto rivista: una lettura non fa una tendenza.',
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
    change: 'fermo dal 5 agosto, contro 130-140 al giorno',
    tone: 'bear',
    icon: 'map',
    note: 'È il numero che manca a tutte le dichiarazioni sui progressi diplomatici, ed è il metro che questo archivio ha scelto il 5 agosto e non ha più cambiato. In cinque giorni sette annunci non lo hanno mosso di una unità, e il settimo ridimensiona i precedenti: un indicatore che sta fermo è quello che impedisce di aggiornare sei volte nella direzione sbagliata.',
  },
  {
    symbol: 'MAR ROSSO',
    name: 'Attacchi alle petroliere saudite',
    value: 'rivendicati',
    change: 'ora anche nel Golfo di Aden',
    tone: 'bear',
    icon: 'alert',
    note: 'Un secondo collo di bottiglia, su rotte diverse e con un attore che non siede al tavolo di Hormuz: un accordo con Teheran non chiuderebbe da solo il rischio sulle rotte energetiche. Manca una conferma saudita indipendente dei danni, quindi resta una rivendicazione.',
  },
  {
    symbol: 'IRAN',
    name: 'Intesa tecnica Iran-Oman sulla rotta',
    value: 'gestione delle rotte',
    change: 'non la riapertura, secondo Teheran',
    tone: 'bear',
    icon: 'map',
    note: 'Le coordinate concordate erano state lette come il primo passo verso la riapertura; un esponente della commissione Sicurezza nazionale del Parlamento iraniano dice ora che il tavolo riguarda la gestione delle rotte e della navigazione. I quattro punti restano aperti — controllo degli ingressi, ispezione delle navi in uscita, commissioni sul traffico e rimozione del blocco statunitense dei porti — e un accordo accettato da Washington non c’è.',
  },
  {
    symbol: 'FED FUNDS',
    name: 'Tasso ufficiale della Federal Reserve',
    value: '3,50%-3,75%',
    change: 'rialzo a settembre da 54,4% a 56,7%',
    tone: 'bear',
    icon: 'bank',
    note: 'Per quattro giorni questa cifra aveva assorbito un JOLTS più fiacco, un ADP molto sotto le attese e sei prese di posizione restrittive senza spostarsi. La settima la muove di 2,3 punti, e la differenza è che arriva dal presidente della Fed: la preferenza di chi decide l’ordine del giorno viene prezzata, quella di chi non lo decide no. Resta comunque sotto il 57% di partenza.',
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
    value: '≈ 4,22%',
    change: 'circa +4 punti base sull’indiscrezione Warsh',
    tone: 'bear',
    icon: 'arrow-up',
    note: 'È di nuovo il rendimento che reagisce per primo: la scadenza a due anni riflette il percorso dei tassi nei prossimi trimestri, cioè il punto in cui una decisione di settembre si vedrebbe prima che altrove. Sopra il 4,25% invaliderebbe la lettura sui giorni.',
  },
  {
    symbol: 'US10Y',
    name: 'Treasury a 10 anni',
    value: '≈ 4,64%',
    change: 'sceso sui dati, poi risalito su Warsh',
    tone: 'warn',
    icon: 'arrow-up',
    note: 'Era sceso dopo i dati sul lavoro e ha recuperato dopo l’indiscrezione sul presidente della Fed: nella stessa giornata il canale dei tassi si è girato due volte. Il 4,68% è la tacca in cui la lettura comincia a logorarsi, il 4,70% quella che la invalida.',
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
    value: '80,34 $',
    change: 'sopra la soglia degli 80, WTI 75,93 $',
    tone: 'bear',
    icon: 'arrow-up',
    note: 'La soglia di logoramento fissata a 80 dollari è stata superata in ventiquattro ore, e non per una minaccia nuova ma per l’assenza di una conferma definitiva sull’intesa Iran-Oman; dal massimo di giornata a 81,40 è poi rientrato. Sopra gli 82 dollari l’effetto inflazionistico tornerebbe a pesare sull’oro più della domanda di rifugio: fra gli 80 e gli 82 la lettura si logora senza rompersi.',
  },
  {
    symbol: 'GOLFO',
    name: 'Avvertimento iraniano ai Paesi del Golfo',
    value: 'ritorsione annunciata',
    change: 'ricostruita da cinque fonti',
    tone: 'warn',
    icon: 'alert',
    note: 'Teheran ha avvertito che risponderebbe a un nuovo attacco statunitense colpendo le infrastrutture energetiche della regione. È lo scenario che questo archivio aveva descritto come deduzione il 2 agosto: la differenza è che adesso lo dichiara chi lo eseguirebbe. Resta condizionato a un attacco che non c’è stato.',
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
