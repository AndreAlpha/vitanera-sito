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
  updatedAt: '2026-08-03T16:15:00+02:00',
  // Un dato pubblicato e completo regge la seduta: fascia dei 90-120 minuti.
  // Si sta a 90 e non oltre perché la direzione si è già mossa due volte oggi
  // — rialzista alle 12:50, neutrale-rialzista alle 15:00, neutrale ora — e
  // perché l'effetto sui prezzi è ancora una deduzione da verificare.
  validityMinutes: 90,
  asset: 'XAU/USD',
  direction: 'neutrale',
  strength: 'media',
  headline:
    'ISM manifatturiero a 55,6: la sorpresa positiva toglie all’oro l’inclinazione rialzista',
  stance:
    'Il dato principale è uscito molto più forte del previsto — 55,6 contro 54,0 atteso — con l’occupazione ' +
    'manifatturiera tornata sopra 50 e i prezzi pagati ancora oltre 70. Non implica un rialzo dei tassi, ma ' +
    'rafforza i membri più aggressivi della Fed e rende meno accomodanti le parole di Williams. Il petrolio ' +
    'debole continua a sostenere l’oro per via indiretta: le due spinte ora si annullano invece di sommarsi, ' +
    'e la lettura costruita poco fa sui soli componenti va corretta, non confermata.',
  favours: [
    'Trattare il numero principale come il riferimento, e i componenti usciti prima come un quadro parziale',
    'Guardare al 2 anni come alla scadenza che reagisce per prima a un cambio di attese sulla Fed',
  ],
  avoid: [
    'Leggere il dato come un rialzo dei tassi già deciso: sposta gli argomenti, non la decisione',
    'Dare per scontato il recupero di dollaro e rendimenti prima di averlo visto sui prezzi',
  ],
  invalidation:
    'Dollaro e rendimenti non riescono a recuperare nonostante il dato, oppure XAU/USD lo assorbe e torna sopra i massimi precedenti: in quel caso il mercato sta pesando di più il calo del petrolio e il rischio geopolitico della forza manifatturiera.',
  confirming: [
    'ISM 55,6 contro 54,0 atteso',
    'Occupazione ISM 52,8, sopra la soglia di espansione',
    'Prezzi pagati ancora oltre 70',
  ],
  contradicting: [
    'Petrolio debole che riduce l’inflazione attesa',
    'Spesa per costruzioni −0,1% contro +0,2% atteso',
    'Recupero di dollaro e rendimenti ancora da verificare',
  ],
  sources: [
    'ism-manifatturiero-a-55-6-piu-forte-del-previsto',
    'primi-dati-ism-prezzi-sopra-le-attese-ordini-in-aumento',
    'intervento-sullo-yen-washington-ha-venduto-euro',
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
