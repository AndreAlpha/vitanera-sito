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
  updatedAt: '2026-08-03T15:00:00+02:00',
  // La lettura scade all'apertura americana, che è il catalizzatore dichiarato
  // nell'analisi: pubblicata alle 15:00, vale mezz'ora. È volutamente sotto i
  // 30-45 minuti di un controllo intraday, perché qui non si descrive un
  // movimento già avvenuto ma se ne deduce uno da verificare sui prezzi.
  validityMinutes: 30,
  asset: 'XAU/USD',
  direction: 'neutrale-rialzista',
  strength: 'bassa',
  headline: 'Sullo yen gli Stati Uniti hanno venduto euro: il dollaro non era il bersaglio',
  stance:
    'Il coordinamento con il Giappone è confermato, ma la gamba americana sarebbe stata fatta di euro e non ' +
    'di dollari: l’obiettivo era sostenere lo yen senza indebolire il dollaro nel suo complesso, anche per ' +
    'non alimentare l’inflazione interna. Restano favorevoli all’oro il petrolio in calo e i rendimenti in ' +
    'discesa, con Williams che tiene la Fed in attesa; viene meno invece il canale valutario, che era il ' +
    'sostegno più recente. Della BCE si sa solo che sarebbe stata in contatto con la Fed.',
  favours: [
    'Verificare sui prezzi se il dollaro si stabilizza contro euro invece di cedere su tutti i fronti',
    'Tenere petrolio e rendimenti come le due gambe che reggono ancora la lettura',
  ],
  avoid: [
    'Continuare a leggere l’intervento sullo yen come volontà americana di un dollaro debole',
    'Dare per acquisita una partecipazione della BCE, di cui risulta soltanto un contatto con la Fed',
  ],
  invalidation:
    'Il DXY continua a scendere in modo generalizzato, i Treasury si indeboliscono ancora e l’oro mantiene comunque il rialzo, oppure arriva una smentita ufficiale americana sull’utilizzo dell’euro.',
  confirming: [
    'Petrolio in calo, Brent quasi −5%',
    'Decennale −5/−6 pb',
    'Fed in attesa, tassi fermi al 3,50%-3,75%',
  ],
  contradicting: [
    'Gamba americana in euro, non in dollari',
    'Dollaro che può recuperare contro euro',
    'Dettagli ufficiali di Tesoro e Fed di New York non ancora pubblicati',
  ],
  sources: [
    'intervento-sullo-yen-washington-ha-venduto-euro',
    'williams-politica-della-fed-ben-posizionata',
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
