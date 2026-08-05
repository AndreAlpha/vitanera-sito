import { BiasDirection, Horizon, Level } from '../models/article.model';

/**
 * Una delle tre letture della panoramica.
 *
 * Sono tre perché l'oro può salire nelle prossime ore e restare debole nel mese,
 * e una lettura sola costringe a scegliere quale delle due dire. Separandole,
 * una lettura intraday che si ribalta tre volte in un giorno non cancella più la
 * lettura di fondo, e chi legge vede subito su quale arco di tempo sta guardando.
 */
export interface SignalReading {
  readonly horizon: Horizon;
  readonly direction: BiasDirection;
  readonly strength: Level;
  /** Una riga sul perché: il meccanismo, non il prezzo. */
  readonly regime: string;
  /** Che cosa farebbe decadere questa lettura. Più di 10 caratteri. */
  readonly invalidation: string;
}

/**
 * Indicatore operativo sull'oro mostrato in panoramica.
 *
 * Sintetizza le ultime pubblicazioni in tre letture, una per orizzonte. Va
 * aggiornato a mano ogni volta che viene pubblicata una nuova analisi.
 *
 * **Non scade.** C'era una durata dichiarata, `validityMinutes`, dopo la quale
 * la panoramica passava da sola a «in attesa di notizie». È stata tolta: era
 * precisione finta. Nessuno sa davvero se una lettura vale novanta minuti o
 * duecento, e un indicatore che si dichiara valido fino alle 21:35 sta
 * promettendo qualcosa che non può mantenere. Al suo posto c'è la data e l'ora
 * dell'ultimo aggiornamento, scritta grande: quanto sia vecchia, e se quello che
 * dice regga ancora, lo decide chi legge — che è l'unico ad avere davanti il
 * mercato di adesso.
 *
 * Resta un riepilogo editoriale di quanto scritto negli articoli: non è
 * consulenza finanziaria né un segnale di acquisto o vendita.
 */
export interface OperationalSignal {
  /**
   * Identico come stringa al `publishedAt` dell'analisi più recente: è quel
   * momento che l'indicatore fotografa, non il momento in cui qualcuno lo ha
   * ricopiato.
   */
  readonly updatedAt: string;
  /**
   * Quando le conferme e le contraddizioni sono state ricontrollate l'ultima
   * volta, se è successo dopo la pubblicazione dell'analisi.
   *
   * Serve perché `updatedAt` fa due mestieri e ne può fare uno solo: dice **quale
   * analisi** l'indicatore riassume, ed è vincolato a coincidere con il suo
   * `publishedAt`. Quando il quadro viene riverificato senza pubblicare nulla —
   * il prezzo si è mosso nella direzione già descritta, nessun fatto nuovo — quel
   * campo non si può muovere, e senza questo la panoramica direbbe di essere
   * ferma a ore prima mentre i numeri accanto sono di adesso.
   *
   * Si omette quando coincide con `updatedAt`: una riga in più che ripete la
   * stessa ora è rumore.
   */
  readonly checkedAt?: string;
  readonly asset: string;
  /** Le tre letture, in ordine di orizzonte crescente. */
  readonly readings: readonly SignalReading[];
  readonly headline: string;
  readonly stance: string;
  readonly favours: readonly string[];
  readonly avoid: readonly string[];
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
  updatedAt: '2026-08-05T15:25:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'neutrale-rialzista',
      strength: 'bassa',
      regime:
        'Due notizie favorevoli al metallo nello stesso pomeriggio — ADP a 44.000 contro 70.000 attesi e aste ' +
        'lunghe invariate — e il decennale è tornato a 4,62%, cioè dove stava a metà giornata. Finché il canale ' +
        'dei tassi non si muove, il sostegno resta dichiarato e non pagato.',
      invalidation:
        'Il rendimento del decennale sopra il 4,70%, oppure un Dollar Index in deciso recupero sopra quota 100; nella direzione opposta, una discesa netta del decennale che darebbe finalmente corpo alla lettura.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'Il Tesoro finanzia i 68 miliardi di fabbisogno in più senza toccare le aste a dieci e trent’anni: lo ' +
        'shock di offerta che frenava l’oro è rinviato di diversi trimestri. Restano aperti i due colli di ' +
        'bottiglia sulle rotte, Hormuz e Mar Rosso, che tengono in piedi il premio geopolitico sul greggio.',
      invalidation:
        'Un rapporto occupazionale di venerdì nettamente sopra le attese di circa 80.000 posti, o salari orari in riaccelerazione; oppure un XAU/USD incapace di tenere l’area 4.150-4.170.',
    },
    {
      horizon: 'lungo',
      direction: 'neutrale',
      strength: 'bassa',
      regime:
        'Gli acquisti delle banche centrali sostengono da sotto e la parte lunga della curva ha ora una ' +
        'variabile in meno, perché il Tesoro si è impegnato a non ingrossare le aste per diversi trimestri. ' +
        'Restano gli altri due freni: rendimenti reali alti e un rialzo Fed a settembre ancora dato al 57%.',
      invalidation:
        'Una svolta monetaria confermata dalle riunioni, oppure il ritorno stabile del decennale sopra il 5%.',
    },
  ],
  headline: 'Due notizie favorevoli all’oro, e il decennale resta dov’era',
  stance:
    'Il settore privato americano ha creato 44.000 posti a luglio contro i 70.000 attesi, e un quarto d’ora ' +
    'dopo il Tesoro ha annunciato aste di Treasury nominali invariate per almeno diversi trimestri: è la ' +
    'risposta benigna alla domanda che l’archivio aveva posto due giorni fa sui 739 miliardi di fabbisogno. ' +
    'Entrambe le notizie giocano a favore del metallo, ma il rendimento decennale è sceso e poi risalito a ' +
    '4,62%, cioè al livello di metà giornata. Il sostegno di fondo migliora; il canale che dovrebbe ' +
    'trasmetterlo, per ora, non risponde.',
  favours: [
    'Distinguere il fabbisogno del Tesoro dalle scadenze su cui viene finanziato: è la seconda a muovere i rendimenti',
    'Aspettare il rapporto occupazionale di venerdì, che separa «già nei prezzi» da «il mercato non crede all’ADP»',
  ],
  avoid: [
    'Trattare l’ADP come il dato ufficiale sull’occupazione: anticipa l’NFP in modo discontinuo',
    'Leggere l’immobilità del decennale come conferma della lettura rialzista: è esattamente ciò che non torna',
  ],
  confirming: [
    'ADP 44.000 contro 70.000 attesi',
    'Aste nominali invariate per diversi trimestri',
    'Riacquisti del Tesoro fino a 38 mld $',
  ],
  contradicting: [
    'Decennale tornato a 4,62%, come a metà giornata',
    'Licenziamenti ancora contenuti',
    'Il dato ufficiale sul lavoro esce solo venerdì',
  ],
  sources: [
    'adp-debole-e-tesoro-fermo-ma-il-decennale-non-si-muove',
    'attacco-houthi-nel-mar-rosso-il-secondo-collo-di-bottiglia',
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

/** Etichette dei tre orizzonti, con l'arco di tempo scritto per esteso. */
export const HORIZON_LABEL: Record<Horizon, string> = {
  breve: 'Intraday',
  medio: 'Medio termine',
  lungo: 'Lungo termine',
};

export const HORIZON_SPAN: Record<Horizon, string> = {
  breve: 'prossimi minuti o ore',
  medio: 'prossimi giorni',
  lungo: 'prossime settimane o mesi',
};
