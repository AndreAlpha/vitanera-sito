# Gap Risk e Rischio del Fine Settimana

Il **Gap Risk** (rischio di vuoto di negoziazione o divario di prezzo) rappresenta una delle minacce più severe per la solvibilità di un portafoglio di trading, verificandosi quando il prezzo di un asset si apre a un livello significativamente diverso rispetto alla chiusura precedente, senza che sia avvenuta alcuna transazione intermedia in grado di attivare gli ordini di stop-loss [43, 529].

### 1. Cause e Dinamiche del Gap
Il gap risk si manifesta principalmente in corrispondenza del fine settimana (Carrying Weekend Positions) [43, 467]:
- I mercati finanziari regolati (es. mercati azionari, contratti futures sui cereali) o i canali interbancari valutari sono chiusi o registrano un'assenza totale di liquidità tra il venerdì sera e la domenica sera [104, 525].
- Se durante questo intervallo si verificano shock geopolitici improvvisi, catastrofi naturali o modifiche inattese di politica monetaria da parte di banche centrali (es. la tassa sui depositi a Cipro nel weekend del 16 marzo 2013), il prezzo all'apertura del lunedì effettuerà un "salto" anomalo [43, 467].
- **Impatto sul Rischio**: Se un trader possedeva una posizione lunga sul mercato azionario europeo (Euro Stoxx 50) con uno stop-loss fissato a -1%, e il mercato apre il lunedì mattina con un crollo del -2.3%, l'ordine di stop verrà eseguito inevitabilmente al primo prezzo disponibile sul mercato (a -2.3%), infliggendo una perdita più che doppia rispetto a quella massima pianificata originariamente [43, 729].

### 2. Gestione e Mitigazione del Rischio
Brent Donnelly e Greg Gliner propongono regole severe per minimizzare il Gap Risk [529]:
- **Riduzione delle posizioni**: Evitare di portare leve elevate o posizioni sensibili oltre la chiusura del venerdì, in particolare su valute emergenti o asset volatili [529].
- **Quantificazione statistica**: Utilizzare le informazioni fornite dai mercati delle opzioni (la volatilità implicita nel week-end) per stimare con precisione la deviazione standard attesa del gap, riducendo le dimensioni complessive della posizione in conformità [529].
- **Prevenzione contrarian**: Sfruttare i gap domenicali eccessivi generati da puro panico emotivo per implementare trade di mean reversion non appena riaprono le contrattazioni.

Collegamenti:
- [[fissazione-wmr-e-fix-di-fine-mese]] (Flussi che tentano di prepositionarsi prima della chiusura del weekend)
- [[stress-testing-macro]] (Modellare l'impatto di gap estremi storici sul portafoglio attuale)
