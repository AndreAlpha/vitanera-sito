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
  updatedAt: '2026-08-04T08:45:00+02:00',
  // Sale a 120 dai 90 della notte: il catalizzatore imminente — la riapertura
  // asiatica — è passato e il prossimo, i dati sul lavoro, è a giorni. Non si
  // arriva ai 180-240 di una scheda geopolitica perché l'episodio è isolato e
  // solo una delle tre condizioni difensive si è presentata.
  validityMinutes: 120,
  asset: 'XAU/USD',
  direction: 'neutrale-rialzista',
  strength: 'bassa',
  headline: 'Una nave colpita a Hormuz: il premio geopolitico rientra in scena, ma da solo',
  stance:
    'Il colpo su un mercantile dice che il rischio sulle rotte energetiche non era rientrato, e il greggio lo ' +
    'conferma risalendo: Brent a 84,89 dollari, WTI a 81,11. L’oro sale verso i 4.060. Delle tre condizioni ' +
    'che renderebbero il segnale netto ne è però arrivata una sola: le azioni asiatiche tengono, il decennale ' +
    'risale invece di scendere e il dollaro resta vicino ai minimi di due mesi. Sui colloqui le due versioni ' +
    'restano incompatibili, con Teheran che limita il tavolo omanita ai soli passaggi marittimi.',
  favours: [
    'Trattare il recupero del greggio come la conferma più solida, perché è misurabile',
    'Pesare l’episodio per quello che è finora: isolato, senza panico sulle azioni',
  ],
  avoid: [
    'Leggere il rialzo dell’oro come inizio di un movimento rifugio pieno: manca il resto del quadro',
    'Considerare chiusa la partita diplomatica in un senso o nell’altro, senza conferme verificabili',
  ],
  invalidation:
    'Un chiarimento ufficiale che ridimensioni l’attacco, un accordo verificabile fra Stati Uniti e Iran, oppure un petrolio che torna rapidamente sui minimi nonostante l’incidente.',
  confirming: [
    'Nave colpita nell’area di Hormuz',
    'Brent 84,89 $, circa +1,3%',
    'XAU/USD ≈ 4.060 $, circa +0,2%',
  ],
  contradicting: [
    'Azioni asiatiche ancora relativamente positive',
    'Decennale leggermente risalito',
    'DXY vicino ai minimi di due mesi',
  ],
  sources: [
    'nave-colpita-nello-stretto-di-hormuz',
    'trump-alza-di-nuovo-la-minaccia-contro-teheran',
    'tesoro-alza-il-fabbisogno-iran-raffredda-la-distensione',
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
