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

export const MARKET_SIGNAL: OperationalSignal = {
  updatedAt: '2026-07-30T16:12:00+02:00',
  validityMinutes: 60,
  asset: 'XAU/USD',
  direction: 'neutrale-rialzista',
  strength: 'media',
  headline: 'L’oro riprende 4.100 sul dato macro morbido, ma i rendimenti lunghi non cedono',
  stance:
    'Il dettaglio mensile del PCE e un PIL a +1,5% rendono il quadro fondamentale moderatamente rialzista e XAU/USD ' +
    'ha recuperato 4.100 con un massimo intorno a 4.120. La conferma cross-asset resta però parziale — argento, ' +
    'platino e petrolio non accompagnano — e il rischio energetico legato all’Iran continua a lavorare in senso ' +
    'inflazionistico.',
  favours: [
    'Un’impostazione rialzista solo finché l’oro resta sopra 4.100, con spazio per ritestare 4.116–4.120.',
    'Attendere un consolidamento sopra 4.116–4.120 prima di considerare confermata la continuazione.',
  ],
  avoid: [
    'Considerare accettato il breakout senza tenuta di 4.100: un ritorno rapido sotto quel livello lo smentirebbe.',
    'Impostazioni ribassiste sull’oro finché inflazione mensile e crescita restano orientate verso una Fed meno aggressiva.',
  ],
  invalidation:
    'Una perdita stabile di 4.100 accompagnata da DXY e Treasury in rialzo, oppure una nuova escalation capace di ' +
    'spingere il petrolio fortemente più in alto e far tornare dominanti le aspettative di stretta Fed.',
  confirming: [
    'Core PCE mensile +0,1%, atteso +0,2%',
    'PCE generale mensile −0,1%',
    'PIL T2 +1,5%, atteso ≈ 2,1%',
    'XAU/USD sopra 4.100, massimo ≈ 4.120',
  ],
  contradicting: [
    'US 30Y ≈ 5,21%',
    'US 10Y ≈ 4,67 – 4,69%',
    'Sussidi: media 4 settimane 202.750',
    'Core PCE annuale ancora 3,3%',
  ],
  sources: [
    'oro-sopra-4100-ma-i-rendimenti-lunghi-non-cedono',
    'deterioramento-della-conferma-cross-asset',
    'hormuz-e-bab-el-mandeb-rischio-non-ancora-blocco',
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
