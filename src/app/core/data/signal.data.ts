import { BiasDirection, Level } from '../models/article.model';

/**
 * Indicatore operativo sull'oro mostrato in panoramica.
 *
 * Sintetizza le ultime pubblicazioni di ogni sezione — fondamentali,
 * correlazioni, geopolitica — in una sola lettura. Va aggiornato a mano ogni
 * volta che viene pubblicata una nuova analisi: `updatedAt` fa fede.
 *
 * Trascorsi `validityMinutes` minuti dall'aggiornamento, l'indicatore scade
 * automaticamente e la panoramica passa allo stato «in attesa di notizie».
 *
 * La durata non è fissa: si sceglie a ogni pubblicazione in base a quanto regge
 * la lettura. Un controllo intraday cross-asset vale poche decine di minuti, un
 * dato macro o una decisione di banca centrale reggono l'intera seduta. Il
 * valore è mostrato anche al lettore, quindi va tenuto tondo.
 *
 * Resta un riepilogo editoriale di quanto scritto negli articoli: non è
 * consulenza finanziaria né un segnale di acquisto o vendita.
 */
export interface OperationalSignal {
  readonly updatedAt: string;
  readonly validityMinutes: number;
  readonly asset: string;
  readonly direction: BiasDirection;
  readonly strength: Level;
  readonly headline: string;
  readonly stance: string;
  readonly favours: readonly string[];
  readonly avoid: readonly string[];
  readonly invalidation: string;
  readonly confirming: readonly string[];
  readonly contradicting: readonly string[];
  /** Slug delle analisi da cui deriva la lettura. */
  readonly sources: readonly string[];
}

/**
 * `null` quando non esiste alcuna lettura in corso: è lo stato in cui si trova
 * il sito finché non viene pubblicata la prima analisi. La panoramica mostra in
 * quel caso il riquadro «in attesa di notizie» al posto dell'indicatore.
 */
export const MARKET_SIGNAL: OperationalSignal | null = {
  updatedAt: '2026-08-03T16:05:00+02:00',
  // Controllo intraday a pochi minuti dal dato, con una divergenza aperta
  // dichiarata — il dato suggerisce una cosa, i prezzi ne fanno un'altra — e il
  // numero ISM principale ancora mancante: si sta al minimo dei 30-45 minuti
  // della fascia intraday. Il catalizzatore dichiarato è «nei prossimi minuti».
  validityMinutes: 30,
  asset: 'XAU/USD',
  direction: 'neutrale-rialzista',
  strength: 'bassa',
  headline: 'Primi componenti ISM leggermente contro l’oro, ma i prezzi non hanno ancora girato',
  stance:
    'Prezzi pagati a 71,1 sopra le attese ma in calo dal 73,0, nuovi ordini a 56,7 in aumento: la domanda ' +
    'industriale non cede e il rischio di una Fed costretta a restare restrittiva sale un poco. Il dato ISM ' +
    'principale non è però ancora verificabile, e soprattutto DXY e rendimenti continuano a scendere nella ' +
    'seduta: nessuna inversione cross-asset. Sullo sfondo restano la struttura dell’intervento sullo yen, che ' +
    'ha tolto una gamba al canale valutario, e una Fed che secondo Williams può ancora aspettare.',
  favours: [
    'Trattare la lettura come una divergenza aperta fra ciò che il dato suggerisce e ciò che i prezzi fanno',
    'Aspettare il numero ISM principale prima di dare peso pieno al blocco dei componenti',
  ],
  avoid: [
    'Leggere i prezzi pagati sopra le attese come una nuova accelerazione: restano in discesa dal 73,0',
    'Anticipare l’inversione su una sola delle tre condizioni invece che sulle tre insieme',
  ],
  invalidation:
    'Oro in calo, DXY in recupero e Treasury a 2 e a 10 anni in salita nello stesso momento, oppure un dato ISM principale che smentisce il quadro suggerito dai componenti già pubblicati.',
  confirming: [
    'DXY e rendimenti ancora in calo nella seduta',
    'Prezzi pagati giù dal 73,0 al 71,1',
    'Fed in attesa, tassi fermi al 3,50%-3,75%',
  ],
  contradicting: [
    'Prezzi pagati 71,1 contro 70,0 atteso',
    'Nuovi ordini in aumento a 56,7',
    'Dato ISM principale non ancora verificabile',
  ],
  sources: [
    'primi-dati-ism-prezzi-sopra-le-attese-ordini-in-aumento',
    'intervento-sullo-yen-washington-ha-venduto-euro',
    'williams-politica-della-fed-ben-posizionata',
  ],
};

export const DIRECTION_LABEL: Record<BiasDirection, string> = {
  rialzista: 'Rialzista',
  'neutrale-rialzista': 'Neutro con inclinazione rialzista',
  neutrale: 'Neutro',
  'neutrale-ribassista': 'Neutro con inclinazione ribassista',
  ribassista: 'Ribassista',
};

export const STRENGTH_VALUE: Record<Level, number> = { bassa: 1, media: 2, alta: 3 };
