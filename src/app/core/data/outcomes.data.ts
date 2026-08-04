import { Outcome } from '../models/article.model';

/**
 * Registro degli esiti: come sono andate a finire le analisi pubblicate.
 *
 * Ogni analisi dichiara prima, sotto `invalidation`, l'elenco delle condizioni
 * che la renderebbero sbagliata. Questo archivio torna a controllarle una per
 * una quando il tempo è passato, e registra che cosa è successo davvero.
 *
 * Tre regole, e sono tutte e tre importanti:
 *
 * 1. **L'analisi non si tocca mai.** L'esito vive qui, in un file separato e in
 *    sola aggiunta. Se si potesse ritoccare l'analisi dopo aver visto come è
 *    andata, questo registro misurerebbe la memoria di chi lo compila e non le
 *    sue previsioni.
 * 2. **Il verdetto si ricava dalle condizioni, non dall'impressione.** Prima si
 *    ricontrolla ogni voce di `invalidation` con il numero che si è visto, poi
 *    si scrive il verdetto. Nell'ordine inverso si finisce sempre per giudicare
 *    «sostanzialmente giusta» qualunque lettura di cui si conosce già l'esito.
 * 3. **Anche il silenzio è un esito.** Un'analisi che nessuno ha ricontrollato
 *    in tempo utile si registra come `senza-verifica`. Ometterla farebbe di
 *    questo archivio una raccolta delle analisi che faceva comodo controllare.
 *
 * L'archivio è **attualmente vuoto**: il meccanismo è appena stato costruito e
 * nessuna delle analisi pubblicate finora è stata ricontrollata. Non è stato
 * riempito a posteriori di proposito — inventare esiti per analisi già note
 * sarebbe esattamente l'errore che l'archivio esiste per impedire. Si popola in
 * avanti, un'analisi alla volta, prima di ogni nuova pubblicazione.
 */
export const OUTCOMES: readonly Outcome[] = [];
