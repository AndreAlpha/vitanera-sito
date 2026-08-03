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
  updatedAt: '2026-08-03T08:55:00+02:00',
  // Base di 30-45 minuti per un controllo intraday cross-asset, alzata a 90
  // per i due motivi previsti: i correlati sono allineati e l'analisi conferma
  // la precedente invece di ribaltarla. Resta comunque dentro la sessione
  // europea, che è l'orizzonte dichiarato dal testo, e ben prima del
  // `nextEvent` dell'articolo, che è a giorni.
  validityMinutes: 90,
  asset: 'XAU/USD',
  direction: 'rialzista',
  strength: 'media',
  headline: 'Il movimento diventa cross-asset: petrolio giù, dollaro sotto quota 100',
  stance:
    'Il petrolio perde oltre il 6% sulle attese di un’intesa fra Stati Uniti e Iran, il Dollar Index scende ' +
    'sotto quota 100 intorno a 99,8 e anche euro e sterlina salgono contro il dollaro: la reazione non è più ' +
    'circoscritta a USD/JPY. Reuters collega l’oro sostenuto al minore rischio d’inflazione e alla ' +
    'conseguente attenuazione delle pressioni sui tassi statunitensi, mentre Bessent si dice pronto a ' +
    'ripetere l’intervento sullo yen e chiede di ampliare la facility FIMA. Il bias sale rispetto al ' +
    'controllo precedente non per una notizia più grande, ma perché tre mercati la confermano insieme.',
  favours: [
    'Trattare quota 100 sul DXY e la tenuta di Brent e WTI come le due condizioni da verificare',
    'Leggere la coerenza fra i tre mercati come il vero elemento nuovo, più delle singole variazioni',
  ],
  avoid: [
    'Estendere oltre la sessione europea una lettura costruita su variazioni intraday',
    'Dare per scontato che il calo del petrolio si traduca subito in rendimenti più bassi',
  ],
  invalidation:
    'Il DXY recupera stabilmente quota 100, i Treasury a 2 e a 10 anni tornano in forte rialzo, i negoziati con l’Iran falliscono in modo dichiarato oppure il petrolio rimbalza bruscamente.',
  confirming: [
    'Petrolio oltre −6%',
    'DXY ≈ 99,8, sotto quota 100',
    'Euro e sterlina in rialzo contro il dollaro',
  ],
  contradicting: [
    'Lettura costruita su variazioni intraday',
    'Dati sul lavoro statunitensi ancora attesi',
    'Rendimenti in calo solo potenziale, non ancora osservato',
  ],
  sources: [
    'movimento-si-rafforza-petrolio-giu-dollaro-sotto-quota-100',
    'intervento-coordinato-usa-giappone-sullo-yen',
    'opec-alza-le-quote-e-una-metaniera-esce-da-hormuz',
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
