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
 * L'archivio si popola **in avanti**, un'analisi alla volta, prima di ogni nuova
 * pubblicazione. Non è stato riempito a posteriori con le ventidue analisi
 * precedenti di proposito: inventare esiti per analisi di cui si conosce già la
 * fine sarebbe esattamente l'errore che l'archivio esiste per impedire.
 */
export const OUTCOMES: readonly Outcome[] = [
  {
    slug: 'oro-estende-il-rialzo-il-canale-e-quello-dei-tassi',
    checkedAt: '2026-08-05T08:30:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition: 'XAU/USD sotto i 4.070 dollari.',
        triggered: false,
        evidence:
          'Nessun ritorno sotto quel livello: dai 4.092 dollari della pubblicazione il metallo è salito fino a circa 4.127.',
      },
      {
        condition: 'Il rendimento del decennale nuovamente sopra il 4,70%.',
        triggered: false,
        evidence: 'Il decennale è sceso ancora, dal 4,66% verso il 4,62%.',
      },
      {
        condition: 'Un forte rimbalzo del petrolio.',
        triggered: false,
        evidence:
          'Il greggio si è stabilizzato senza rimbalzare: Brent intorno a 79,6 dollari da 80,47, WTI vicino a 75,9 da 76,67.',
      },
      {
        condition: 'Dati ADP o payroll nettamente superiori alle attese.',
        triggered: false,
        evidence: 'Nessuno dei due era ancora stato pubblicato al momento del controllo.',
      },
    ],
    what: 'Le quattro condizioni hanno retto tutte. La catena descritta — greggio giù, rendimenti giù, oro su — ha continuato a funzionare per un’altra sessione: l’oro ha superato i 4.100 dollari che l’analisi indicava come test immediato, il decennale è arretrato di altri quattro punti base e il dollaro è rimasto debole. La probabilità di un rialzo Fed a settembre è scesa verso il 57-59%.',
  },
];
