# Tipi di Ordine e Microstruttura del Flusso

La microstruttura del mercato valutario è caratterizzata da una struttura decentralizzata e over-the-counter (OTC), dove la liquidità fluisce attraverso network elettronici (ECN) collegati tra loro (Reuters, EBS, Hotspot) [500, 501, 781]. Comprendere la tipologia di ordini e la loro esecuzione è fondamentale per l'efficacia operativa [491, 501].

### 1. I Tipi di Ordine Chiave
- **Risk Price (Risk Transfer)**: L'ordine standard di mercato immediato, in cui il cliente "colpisce il bid" (vende) o "paga l'offer" (compra) accettando lo spread del market maker per trasferire istantaneamente il rischio di prezzo alla banca [501, 502].
- **Limit Order (Ordine Limite)**: Un ordine di acquisto inferiore al prezzo corrente o di vendita superiore al prezzo corrente, inserito nel book di negoziazione, che attende che il mercato tocchi quel livello prima di essere eseguito [113, 500, 799].
- **Iceberg Order**: Ordini di grandi dimensioni che vengono inseriti nel book nascondendone la reale entità [31, 32]. Solo una piccola frazione dell'ordine totale (la punta dell'iceberg) viene visualizzata sul mercato; non appena questa frazione viene eseguita, l'algoritmo ricarica automaticamente un altro blocco identico fino al completamento totale dell'ordine, evitando di spaventare gli altri partecipanti e muovere il prezzo sfavorevolmente [31].
- **VWAP (Volume-Weighted Average Price)**: Ordini d'esecuzione algoritmica distribuiti nel corso della giornata proporzionalmente al volume di scambi atteso per ogni intervallo temporale, in modo da garantire al cliente un prezzo finale allineato alla media volumetrica giornaliera riducendo al minimo l'impatto di mercato [30, 31, 822].

### 2. Dinamica di Spread e Liquidità
Brent Donnelly evidenzia che la liquidità e i costi transazionali variano drammaticamente a seconda del momento della giornata [508, 518]. Il picco di massima efficienza e spread stretti si registra durante l'overlap delle ore lavorative di Londra e New York (dalle 12:00 alle 17:00 CET), mentre i periodi di bassa liquidità (come l'apertura asiatica o la fase post-chiusura di Wall Street) presentano spread allargati ed esposizione a repentine escursioni di prezzo guidate da flussi individuali forzati [518, 521, 525].

Collegamenti:
- [[fissazione-wmr-e-fix-di-fine-mese]] (Il picco operativo di esecuzione degli ordini istituzionali)
- [[punti-pivot-delle-notizie]] (Gestione degli stop in corrispondenza del rilascio di dati)
- [[analisi-posizionamento-cftc]] (Analisi aggregata delle posizioni speculative)
