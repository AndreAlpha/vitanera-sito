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
  updatedAt: '2026-08-03T10:05:00+02:00',
  // Una scheda geopolitica varrebbe 180-240, ma il testo dichiara una
  // divergenza aperta — la stessa notizia sostiene il rifugio e apre al
  // rimbalzo di petrolio e rendimenti — e questo accorcia. Sopra i 90 minuti
  // del controllo precedente perché il fatto è una dichiarazione ufficiale e
  // non una variazione di prezzo.
  validityMinutes: 120,
  asset: 'XAU/USD',
  direction: 'rialzista',
  strength: 'bassa',
  headline: 'Teheran smentisce i negoziati: il premio rifugio regge, il quadro si fa fragile',
  stance:
    'Il ministero degli Esteri iraniano nega che siano in corso negoziati con gli Stati Uniti: i colloqui ' +
    'mediati dall’Oman riguardano solo un corridoio temporaneo nello Stretto di Hormuz, che non sarà ' +
    'riaperto pienamente finché continuerà quella che Teheran definisce «aggressione» americana. La ' +
    'smentita arriva su un mercato che aveva già prezzato il contrario, con il petrolio in forte calo e le ' +
    'Borse europee in rialzo. Resta il sostegno valutario descritto in mattinata, ma il premio geopolitico ' +
    'che si stava sgonfiando torna in parte in piedi: stessa direzione del controllo precedente, con meno forza.',
  favours: [
    'Tenere distinta la solidità della dichiarazione dall’effetto di mercato, che è la parte incerta',
    'Trattare il canale omanita per quello che è: transito delle navi, non accordo politico',
  ],
  avoid: [
    'Leggere il ritorno del rischio geopolitico come automaticamente rialzista per l’oro',
    'Contare ancora sul solo dollaro debole se il petrolio rimbalza e i rendimenti si riprendono',
  ],
  invalidation:
    'Arriva una conferma ufficiale di negoziati diretti fra Stati Uniti e Iran, un accordo verificabile sulla riapertura di Hormuz, oppure il petrolio continua a scendere nonostante la smentita iraniana.',
  confirming: [
    'Teheran: nessun negoziato in corso',
    'Hormuz non riapribile del tutto',
    'DXY ≈ 99,8, ancora sotto quota 100',
  ],
  contradicting: [
    'Petrolio ancora in forte calo',
    'Borse europee aperte in rialzo sulle speranze diplomatiche',
    'Rimbalzo del greggio come rischio per i rendimenti',
  ],
  sources: [
    'iran-smentisce-negoziati-diretti-con-gli-stati-uniti',
    'movimento-si-rafforza-petrolio-giu-dollaro-sotto-quota-100',
    'intervento-coordinato-usa-giappone-sullo-yen',
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
