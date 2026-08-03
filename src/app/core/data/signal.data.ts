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
  updatedAt: '2026-08-03T22:40:00+02:00',
  // Una scheda di sintesi starebbe fra i 180 e i 240 minuti, ma qui si scende a
  // 120: il testo dichiara due forze opposte in equilibrio e la direzione si è
  // mossa quattro volte in giornata. Non si scende sotto, perché i fatti sono
  // strutturali — una previsione di indebitamento e una posizione diplomatica —
  // e il catalizzatore vero è il piano del Tesoro di mercoledì.
  validityMinutes: 120,
  asset: 'XAU/USD',
  direction: 'neutrale',
  strength: 'bassa',
  headline: 'Più debito americano in arrivo, e una distensione iraniana che l’Iran smentisce',
  stance:
    'Il Tesoro prevede di indebitarsi per 739 miliardi di dollari nel terzo trimestre, 68 in più della stima ' +
    'di maggio, e mercoledì dirà come: se il finanziamento andasse sulle scadenze lunghe sarebbe pressione ' +
    'sui rendimenti e quindi sull’oro. Sull’altro fronte Teheran nega che esistano negoziati, proprio nel ' +
    'giorno in cui il mercato ha fatto crollare il WTI del 7% sull’ipotesi contraria. Petrolio in calo da una ' +
    'parte, ISM forte e più debito dall’altra: le due spinte oggi si annullano.',
  favours: [
    'Aspettare la composizione delle emissioni: conta più di quanto conti il fabbisogno in sé',
    'Considerare che il greggio sta scontando una distensione che la controparte smentisce',
  ],
  avoid: [
    'Leggere il maggiore fabbisogno come pressione già in atto sui rendimenti',
    'Dare per acquisita la distensione fra Stati Uniti e Iran sulla base del solo movimento del petrolio',
  ],
  invalidation:
    'Per il rischio rialzista, una conferma concreta di negoziati fra Stati Uniti e Iran con riapertura stabile di Hormuz; per la pressione ribassista da debito, un Tesoro che mercoledì lascia invariate le aste lunghe e finanzia sui titoli brevi.',
  confirming: [
    'WTI ≈ −7%, Brent verso 83-84 $',
    'Rendimenti giù con le aspettative inflazionistiche',
    'Iran: nessun negoziato, nessun incontro programmato',
  ],
  contradicting: [
    'Fabbisogno del terzo trimestre a 739 mld $',
    'ISM 55,6, massimo da oltre quattro anni',
    'Composizione delle emissioni ignota fino a mercoledì',
  ],
  sources: [
    'tesoro-alza-il-fabbisogno-iran-raffredda-la-distensione',
    'oro-inverte-il-rialzo-dopo-il-dato-ism',
    'ism-manifatturiero-a-55-6-piu-forte-del-previsto',
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
