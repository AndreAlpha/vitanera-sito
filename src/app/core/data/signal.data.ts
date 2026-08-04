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
  updatedAt: '2026-08-04T15:10:00+02:00',
  // Decide il catalizzatore, non la tabella: il JOLTS delle 16:00 è il test
  // dichiarato della lettura, e la validità non può superarlo. Pubblicata alle
  // 15:10, scade alle 15:55. Coincide comunque con la fascia 30-45 di un
  // controllo intraday, che è la natura di questa inversione di prezzo.
  validityMinutes: 45,
  asset: 'XAU/USD',
  direction: 'neutrale-rialzista',
  strength: 'bassa',
  headline: 'Bessent apre a un accordo su Hormuz e il petrolio inverte di colpo',
  stance:
    'Brent e WTI passano dal recupero a un calo di circa il 4%, a 80,66 e 76,76 dollari, dopo che il ' +
    'segretario al Tesoro ha detto che un’intesa per riaprire lo stretto potrebbe arrivare oggi o mercoledì; ' +
    'il Qatar riferisce di una bozza in circolazione con Oman e Pakistan mediatori. Per l’oro si allenta il ' +
    'canale che lo stava frenando — greggio, inflazione attesa, rendimenti — ma la stessa distensione toglie ' +
    'domanda di rifugio. Nessun accordo è confermato e i transiti restano limitati.',
  favours: [
    'Distinguere i due canali: il greggio più basso aiuta via rendimenti, la distensione toglie rifugio',
    'Misurare la distanza fra un’intesa detta possibile e uno stretto che torna davvero a funzionare',
  ],
  avoid: [
    'Trattare le dichiarazioni come un accordo: la controparte iraniana finora ha sempre smentito',
    'Portare questa lettura oltre il JOLTS delle 16:00, che può ribaltarne il presupposto',
  ],
  invalidation:
    'Il fallimento delle trattative, una nuova smentita netta dell’Iran, ulteriori attacchi alle navi o un forte rimbalzo del petrolio; oppure un JOLTS molto forte, che farebbe risalire dollaro e rendimenti cancellando il beneficio del greggio più basso.',
  confirming: [
    'Brent ≈ 80,66 $, circa −4%',
    'WTI ≈ 76,76 $',
    'Bozza di accordo riferita dal Qatar',
  ],
  contradicting: [
    'Nessun accordo confermato',
    'Transiti a Hormuz ancora limitati',
    'Meno domanda di rifugio se la distensione è vera',
  ],
  sources: [
    'petrolio-inverte-bruscamente-bessent-apre-su-hormuz',
    'rischio-hormuz-si-paga-in-petrolio-e-rendimenti-non-in-oro',
    'rendimenti-a-30-anni-di-nuovo-sui-massimi-dal-2007',
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
