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
  updatedAt: '2026-08-02T12:38:00+02:00',
  // L'analisi descrive espressamente l'effetto «alla riapertura» e ha come
  // catalizzatore il ritorno degli scambi di domenica sera: la lettura vale
  // fino a poco prima di quel momento, non oltre, perché è il primo prezzo a
  // dire se la cancellazione viene letta come de-escalation.
  validityMinutes: 600,
  asset: 'XAU/USD',
  direction: 'ribassista',
  strength: 'media',
  headline: 'Attacco cancellato, ma l’Iran non ha ratificato nulla',
  stance:
    'Trump ha annunciato di aver cancellato — non rinviato — il nuovo attacco contro l’Iran, citando ' +
    'un’intesa preliminare che comprenderebbe la riapertura completa di Hormuz. Reuters parla più ' +
    'prudentemente di sospensione. Il premio geopolitico che aveva riportato il bias sul neutrale ' +
    'venerdì si sgonfia: la lettura passa a moderatamente ribassista, ma poggia su una dichiarazione ' +
    'e non su un accordo firmato.',
  favours: [
    'Trattare la de-escalation come annunciata e non ancora strutturale',
    'Verificare la reazione del petrolio, dove Hormuz è il punto centrale della trattativa',
  ],
  avoid: [
    'Considerare chiuso il rischio geopolitico prima di una conferma iraniana',
    'Leggere l’assenza di smentite del fine settimana come una ratifica',
  ],
  invalidation:
    'Teheran smentisce l’intesa, i negoziati falliscono o Hormuz non viene riaperto; oppure l’oro assorbe subito le vendite mentre DXY e rendimenti non riescono a salire.',
  confirming: [
    'Attacco cancellato, non rinviato',
    'Hormuz nel perimetro dell’accordo',
    'Fed ferma al 3,50%-3,75%',
  ],
  contradicting: [
    'Nessuna ratifica pubblica da Teheran',
    'Minaccia iraniana di risposta dura confermata',
  ],
  sources: [
    'trump-cancella-attacco-iran-accordo-non-chiuso',
    'attacchi-energia-iraniana-piano-non-ordine',
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
