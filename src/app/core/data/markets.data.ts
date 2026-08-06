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
    value: '4.293,50 $',
    change: 'meno 0,27%, dopo un massimo a 4.363,60',
    tone: 'warn',
    icon: 'coin',
    note: 'Rilevazione delle 18:38 del 6 agosto, non una quotazione in tempo reale. Per quattro giorni era salito rifiutando le notizie che avrebbero dovuto muoverlo; oggi scende mentre petrolio, rendimenti e dollaro salgono insieme, che è la prima volta in cinque giorni che i tre canali puntano tutti nella stessa direzione. Il calo resta piccolo e nessun supporto dichiarato è stato toccato: l’area 4.200 logora la lettura, i 4.160 la invalidano.',
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
    value: 'l’ottavo dal 22 luglio',
    change: 'nessuna conferma saudita, per prassi',
    tone: 'bear',
    icon: 'alert',
    note: 'Un secondo collo di bottiglia, su rotte diverse e con un attore che non siede al tavolo di Hormuz. Due precisazioni che cambiano la lettura: la petroliera Wafa è l’ottava rivendicata dall’inizio del blocco houthi del 22 luglio, quindi non è un episodio isolato; e l’assenza di conferma saudita non è un indizio contrario, perché Riad per prassi non commenta gli attacchi delle milizie legate a Teheran. Fonti di sicurezza regionali confermano l’attacco, l’entità dei danni resta non verificata.',
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
    change: 'rialzo a settembre fermo al 56,9%',
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
    value: '4,245%',
    change: '+6,6 punti base, da 4,179 di chiusura',
    tone: 'bear',
    icon: 'arrow-up',
    note: 'È la prima lettura puntuale del biennale da quando questo archivio ha cominciato a metterci sopra le sue soglie, e arriva a mezzo punto base dal 4,25% che invaliderebbe la lettura sui giorni: il massimo di giornata coincide con il valore corrente. Le due condizioni che lo nominavano erano state chiuse come non scattate senza un numero, ed erano giuste — ma per la ragione sbagliata.',
  },
  {
    symbol: 'US10Y',
    name: 'Treasury a 10 anni',
    value: '4,673%',
    change: 'massimo 4,679%, da 4,617 di chiusura',
    tone: 'bear',
    icon: 'arrow-up',
    note: 'Nella stessa giornata il canale dei tassi si è girato due volte e ha chiuso il giro dalla parte contraria all’oro: il massimo di 4,679% è un millesimo di punto sotto il 4,68% in cui la lettura comincia a logorarsi, e ventisette centesimi di punto base sotto il 4,70% che la invalida. La spinta di questa fase è energetica, non monetaria.',
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
    value: '99,860',
    change: 'massimo 99,900: dieci centesimi sotto quota 100',
    tone: 'warn',
    icon: 'dollar',
    note: 'Anche questa è la prima lettura puntuale dopo tre condizioni chiuse sulla sola direzione descritta. Quota 100 non è stata toccata, ed è l’ultima delle tre conferme che manca perché il quadro si giri per intero: il dollaro sale insieme a petrolio e rendimenti, ma non ha ancora fatto il passo che le analisi avevano dichiarato.',
  },
  {
    symbol: 'PETROLIO',
    name: 'Greggio Brent',
    value: '82,74 $',
    change: 'massimo 82,91, da una chiusura di 79,45',
    tone: 'bear',
    icon: 'arrow-up',
    note: 'La soglia di invalidazione dichiarata il 5 agosto è stata superata: sopra gli 82 dollari l’effetto inflazionistico pesa sull’oro più della domanda di rifugio. Conta più di dove è arrivato: è salito del 4% contro scorte statunitensi in aumento, listini Aramco tagliati per l’Asia e un’intesa Iran-Oman su una rotta temporanea, cioè contro tre notizie che avrebbero dovuto farlo scendere. Il vincolo dei quattro giorni precedenti — il premio di rischio non si forma — si è sciolto.',
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
