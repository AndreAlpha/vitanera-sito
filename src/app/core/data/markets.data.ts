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
    value: '≈ 4.092',
    change: 'circa +1%, Comex 4.095,40 $ (+1,53%)',
    tone: 'gold',
    icon: 'coin',
    note: 'Livelli citati nell’analisi, non quotazioni in tempo reale. Il rialzo ha retto tutta la seduta invece di esaurirsi dopo il dato, e ha coinvolto anche argento, platino e palladio. L’area 4.100 è il test immediato.',
  },
  {
    symbol: 'HORMUZ',
    name: 'Stretto di Hormuz',
    value: 'chi controlla che cosa',
    change: 'ingressi a Teheran, uscite all’Oman',
    tone: 'bear',
    icon: 'map',
    note: 'Sono i termini in discussione secondo Reuters: l’Iran vuole il controllo sul traffico in entrata e la facoltà di intervenire sulle uscite, autorizzate dall’Oman. Su questo l’accordo non è chiuso.',
  },
  {
    symbol: 'IRAN',
    name: 'Trattativa sulla riapertura dello stretto',
    value: 'termini non concordati',
    change: 'richiesta di controllo totale attenuata',
    tone: 'warn',
    icon: 'alert',
    note: 'Teheran ha fatto un passo indietro rispetto alla pretesa iniziale, ma le divergenze sulla gestione dello stretto restano. Le dichiarazioni americane su un’intesa imminente restano aspettative.',
  },
  {
    symbol: 'FED FUNDS',
    name: 'Tasso ufficiale della Federal Reserve',
    value: '3,50%-3,75%',
    change: 'rialzo a settembre ≈ 57% di probabilità',
    tone: 'warn',
    icon: 'bank',
    note: 'Scesa dal 65% di stamattina dopo il JOLTS, ma resta sopra la metà: la svolta monetaria non è affatto acquisita, e le attese sono molto sensibili ai prossimi ADP e payroll.',
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
    value: '≈ 4,66%',
    change: 'arretrato dall’area del 4,70%',
    tone: 'bull',
    icon: 'percent',
    note: 'È il canale da cui arriva la spinta di questa seduta, più della domanda rifugio. Il 4,70% resta la soglia: tornarci sopra invaliderebbe la lettura.',
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
    value: '80,47 $',
    change: '−3,9%, WTI 76,67 $ (−4,6%)',
    tone: 'bull',
    icon: 'arrow-down',
    note: 'È il primo anello della catena che oggi sostiene l’oro: greggio giù, inflazione attesa giù, rendimenti giù. Resta però un ribasso costruito su una distensione i cui termini non sono chiusi.',
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
