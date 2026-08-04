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
  updatedAt: '2026-08-04T18:25:00+02:00',
  // Scheda geopolitica, fascia 180-240: si prende il minimo. L'analisi conferma
  // la precedente invece di ribaltarla — la direzione è ferma da due ore dopo
  // una giornata di capovolgimenti — ma il testo dichiara un sostegno «non
  // pulito», con lo stesso scenario che aiuta l'oro da un lato e lo penalizza
  // dall'altro. Scade alle 21:25, prima della chiusura americana.
  validityMinutes: 180,
  asset: 'XAU/USD',
  direction: 'rialzista',
  strength: 'media',
  headline: 'I termini della trattativa su Hormuz sono aperti, e il petrolio non lo prezza',
  stance:
    'L’Iran chiede di mantenere il controllo sul traffico in entrata nello stretto e di poter intervenire su ' +
    'quello in uscita, con l’Oman a gestire le autorizzazioni: ha attenuato la richiesta di controllo totale, ' +
    'ma le divergenze restano e i termini operativi non sono concordati. Brent e WTI continuano intanto a ' +
    'scendere verso 79,8 e 76 dollari sulla scommessa nella mediazione. Il quadro macro del pomeriggio — ' +
    'JOLTS debole, dollaro e rendimenti giù — regge, e ora si aggiunge un rischio che il greggio non sconta.',
  favours: [
    'Considerare il ribasso del greggio più fragile di quanto il prezzo suggerisca, ora che i termini si conoscono',
    'Tenere distinte le due facce di un blocco dei negoziati: rifugio a favore, rendimenti contro',
  ],
  avoid: [
    'Leggere l’attenuazione della richiesta iraniana come un accordo in dirittura d’arrivo',
    'Dare per pulito un sostegno che lo stesso scenario può ribaltare passando dai rendimenti',
  ],
  invalidation:
    'Un accordo ufficiale e verificabile sulla riapertura dello stretto, una ripresa stabile dei transiti, oppure un petrolio che resta sotto gli 80 dollari senza rimbalzare.',
  confirming: [
    'Termini operativi non ancora concordati',
    'Divergenze aperte sulla gestione dello stretto',
    'JOLTS debole, dollaro e rendimenti in calo',
  ],
  contradicting: [
    'Brent ≈ 79,8 $, ancora in forte calo',
    'Richiesta di controllo totale attenuata',
    'Mediazione di Qatar, Oman e Pakistan in corso',
  ],
  sources: [
    'iran-chiede-il-controllo-sugli-ingressi-a-hormuz',
    'jolts-piu-debole-delle-attese-oro-su-rendimenti-giu',
    'petrolio-inverte-bruscamente-bessent-apre-su-hormuz',
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
