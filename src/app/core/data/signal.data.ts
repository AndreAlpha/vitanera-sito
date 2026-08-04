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
  updatedAt: '2026-08-04T11:15:00+02:00',
  // Sale a 180: i correlati sono allineati e la lettura poggia su una
  // condizione dichiarata e durevole — «finché i rendimenti lunghi restano
  // così elevati» — non su un movimento di giornata. Non si arriva a 240
  // perché la direzione si è già mossa due volte stamattina. Scade alle 14:15,
  // prima del JOLTS delle 16:00 indicato come catalizzatore.
  validityMinutes: 180,
  asset: 'XAU/USD',
  direction: 'neutrale-ribassista',
  strength: 'bassa',
  headline: 'Il trentennale al 5,25% assorbe la domanda rifugio che Hormuz stava creando',
  stance:
    'Il rendimento a 30 anni è risalito sui massimi dal 2007 e la parte lunga della curva prezza insieme ' +
    'inflazione persistente, maggiore fabbisogno del Tesoro e credibilità restrittiva della Fed, con il ' +
    'mercato che dà circa il 65% di probabilità a un rialzo a settembre. È la ragione per cui l’oro resta ' +
    'fermo a 4.062 dollari nonostante la nave colpita a Hormuz e il greggio in recupero verso 84,8-85: chi ' +
    'cerca protezione la trova in un titolo che paga una cedola. Dalla Fed nessuna comunicazione nuova.',
  favours: [
    'Guardare al canale dei rendimenti prima che a quello geopolitico: è quello che sta decidendo',
    'Tenere la lettura legata alla condizione dichiarata, cioè finché i rendimenti lunghi restano elevati',
  ],
  avoid: [
    'Aspettarsi che il rischio su Hormuz si traduca in prezzo finché la parte lunga resta su questi livelli',
    'Leggere il 65% sul rialzo di settembre come una previsione della Fed: è una lettura di mercato',
  ],
  invalidation:
    'Un forte calo dei rendimenti dopo il JOLTS delle 16:00, un dollaro in discesa e un XAU/USD capace di superare con decisione i massimi della mattinata.',
  confirming: [
    'Trentennale ≈ 5,25%, massimi dal 2007',
    'Rialzo Fed a settembre ≈ 65% di probabilità',
    'Oro fermo a 4.062 $ nonostante Hormuz',
  ],
  contradicting: [
    'Rischio geopolitico aperto dopo la nave colpita',
    'Brent in recupero verso 84,8-85 $',
    'Nessuna nuova comunicazione restrittiva dalla Fed',
  ],
  sources: [
    'rendimenti-a-30-anni-di-nuovo-sui-massimi-dal-2007',
    'nave-colpita-nello-stretto-di-hormuz',
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
