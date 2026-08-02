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
  updatedAt: '2026-08-02T12:46:00+02:00',
  // Il catalizzatore resta la riapertura degli scambi di domenica sera e la
  // validità non la supera. È però più corta di quella data alla lettura che
  // corregge: la direzione è cambiata due volte nella stessa giornata, e una
  // sintesi che poggia su una ricostruzione appena rivista non merita di
  // restare in piedi fino all'ultimo minuto utile.
  validityMinutes: 480,
  asset: 'XAU/USD',
  direction: 'neutrale',
  strength: 'bassa',
  headline: 'Pausa militare dichiarata da una parte sola: il bias torna neutrale',
  stance:
    'La ricostruzione di Reuters corregge l’annuncio: l’azione militare è sospesa o rinviata per lasciare ' +
    'spazio a un accordo, non cancellata, e l’opzione resta aperta. L’Iran nega di aver chiesto una pausa e ' +
    'definisce fuorviante la versione statunitense. Lo scenario ribassista del controllo precedente si ' +
    'ridimensiona: il vero freno per l’oro resta la combinazione di rendimenti lunghi elevati e Fed attenta ' +
    'all’inflazione, non una de-escalation concordata.',
  favours: [
    'Trattare la pausa come dichiarata da una parte sola, non come tregua condivisa',
    'Guardare ai rendimenti lunghi e alla Fed come al vero freno dell’oro',
  ],
  avoid: [
    'Portare avanti lo scenario ribassista costruito sull’annuncio di cancellazione',
    'Leggere l’assenza di nuovi attacchi come conferma della cornice negoziale',
  ],
  invalidation:
    'Un accordo confermato anche da Teheran, con Hormuz effettivamente riaperto e petrolio in discesa stabile, sposta la lettura verso il basso; nuovi attacchi, il fallimento esplicito dei negoziati o altri incidenti marittimi la spostano verso l’alto.',
  confirming: [
    'Trentennale USA su livelli pluriennali',
    'Fed ferma al 3,50%-3,75%',
    'Oro venerdì −1,26%',
  ],
  contradicting: [
    'Teheran nega la pausa e resta in allerta',
    'Opzione militare statunitense ancora aperta',
  ],
  sources: [
    'attacco-sospeso-non-cancellato-iran-smentisce',
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
