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
    note: 'Ultima chiusura citata nelle analisi: i controlli successivi descrivono il movimento senza indicare un nuovo livello.',
  },
  {
    symbol: 'DXY',
    name: 'Dollar Index',
    value: '≈ 99,8',
    change: 'sotto quota 100',
    tone: 'bull',
    icon: 'dollar',
    note: 'La tenuta o meno di quota 100 è la prima condizione da verificare per la sessione europea.',
  },
  {
    symbol: 'PETROLIO',
    name: 'Greggio Brent e WTI',
    value: 'oltre −6%',
    change: 'in giornata',
    tone: 'bull',
    icon: 'arrow-down',
    note: 'Il mercato aumenta le scommesse su una soluzione diplomatica fra Stati Uniti e Iran: meno rischio d’inflazione, e quindi meno pressione sui rendimenti.',
  },
  {
    symbol: 'JPY',
    name: 'Yen giapponese',
    value: '≈ +1%',
    change: 'dopo l’intervento',
    tone: 'bull',
    icon: 'globe',
    note: 'Guadagno aggiuntivo, accompagnato però anche da euro e sterlina in rialzo contro il dollaro.',
  },
  {
    symbol: 'INTERVENTO JPY',
    name: 'Intervento coordinato sullo yen',
    value: '≈ 59 mld $',
    change: 'primo dal 2011',
    tone: 'bull',
    icon: 'shield',
    note: 'Importo giapponese riportato da Reuters. Bessent si è detto pronto a ripeterlo se i movimenti tornassero disordinati.',
  },
  {
    symbol: 'US30Y',
    name: 'Treasury a 30 anni',
    value: 'Livelli pluriennali',
    change: '',
    tone: 'warn',
    icon: 'percent',
    note: 'Restano il freno principale per XAU/USD, ma il calo del petrolio apre a una pressione ribassista sui rendimenti ancora solo potenziale.',
  },
  {
    symbol: 'FED FUNDS',
    name: 'Tasso ufficiale della Federal Reserve',
    value: '3,50%-3,75%',
    change: '',
    tone: 'bear',
    icon: 'bank',
    note: 'Fermo dal comunicato del 29 luglio: i prossimi dati sul lavoro pesano sull’attesa di una Fed meno aggressiva.',
  },
  {
    symbol: 'OPEC+',
    name: 'Aumento delle quote produttive OPEC+',
    value: '+188.000 b/g',
    change: 'da settembre 2026',
    tone: 'warn',
    icon: 'flow',
    note: 'Offerta consentita, non necessariamente offerta effettiva: guerre e interruzioni limitano ancora alcune esportazioni.',
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
