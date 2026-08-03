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
  updatedAt: '2026-08-03T12:50:00+02:00',
  // Una posizione dichiarata da un membro stabile del FOMC è un fatto che
  // regge la seduta, non una variazione di prezzo: sopra i 120 minuti del
  // controllo precedente. Sotto i 240 perché il testo stesso avverte che
  // l'intervista è del 31 luglio e che i movimenti erano già in corso, e
  // perché il rischio di un rialzo a settembre resta aperto.
  validityMinutes: 180,
  asset: 'XAU/USD',
  direction: 'rialzista',
  strength: 'media',
  headline: 'Williams non ha fretta di alzare: la Fed può continuare ad aspettare',
  stance:
    'Il presidente della Fed di New York si aspetta ancora disinflazione fra il 2026 e il 2027, ha sostenuto ' +
    'con convinzione i tassi fermi al 3,50%-3,75% e definisce la politica «ben posizionata»: una posizione ' +
    'più morbida di quella dei tre membri del FOMC che chiedevano un rialzo immediato. Il contesto conferma ' +
    'la direzione — dollaro ai minimi da metà giugno, decennale giù di 5-6 punti base, Brent quasi −5% — ma ' +
    'quei movimenti erano già iniziati sulla scia dello yen e del petrolio, e la smentita iraniana di ' +
    'stamattina tiene in piedi il rischio di un rimbalzo del greggio.',
  favours: [
    'Leggere l’intervista come conferma di una direzione già presa, non come il suo innesco',
    'Tenere il canale dei rendimenti come il vero collegamento fra Fed e oro',
  ],
  avoid: [
    'Confondere «nessun rialzo adesso» con l’avvio di un ciclo di tagli',
    'Dimenticare che le parole sono del 31 luglio e non commentano gli ultimi tre giorni',
  ],
  invalidation:
    'Escono dati statunitensi molto forti, l’inflazione core si dimostra persistente, il petrolio rimbalza nettamente oppure i Treasury a 2 e a 10 anni recuperano rapidamente nonostante le parole di Williams.',
  confirming: [
    'Tassi fermi al 3,50%-3,75%, sostenuti da Williams',
    'Decennale −5/−6 pb',
    'Dollaro ai minimi da metà giugno',
  ],
  contradicting: [
    'Intervista realizzata il 31 luglio',
    'Rialzo di settembre non escluso',
    'Rimbalzo del greggio ancora possibile dopo la smentita iraniana',
  ],
  sources: [
    'williams-politica-della-fed-ben-posizionata',
    'iran-smentisce-negoziati-diretti-con-gli-stati-uniti',
    'movimento-si-rafforza-petrolio-giu-dollaro-sotto-quota-100',
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
