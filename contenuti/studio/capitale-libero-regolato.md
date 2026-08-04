# Capitale Libero Regolato e Chunking Mensile

La gestione scientifica del rischio non può limitarsi al singolo trade, ma deve strutturare l'intero capitale operativo a disposizione attraverso regole rigide, flessibili e dinamiche, note come **Chunking Mensile** e calcolo del **Capitale Libero Regolato** [686, 687, 690].

### 1. Capitale Libero vs. Capitale in Gestione (AUM)
C'è una differenza fondamentale che molti operatori confondono [709]:
- **Capitale in Gestione (AUM)**: È la massa liquida totale presente nel conto di trading (es. $100.000.000) [709].
- **Capitale Libero (Free Capital)**: È la quantità massima di denaro che l'operatore può effettivamente permettersi di perdere prima che subentri il "rischio di rovina" (licenziamento, chiusura del fondo, stop strutturale dell'attività, es. un limite massimo di drawdown del 9%, pari a $9.000.000) [687, 691, 709]. È solo su questa seconda cifra che vanno calcolate le percentuali di rischio [709].

### 2. Il Chunking Mensile
Resetare emotivamente e operativamente i parametri è fondamentale [690, 692]. Brent Donnelly propone di dividere l'anno in blocchi mensili indipendenti [689, 690]:
- All'inizio di ogni mese, i contatori di profitto e perdita vengono azzerati virtualmente [690, 692].
- Si stabilisce un limite di stop loss mensile rigido (es. il 10% del capitale libero annuale disponibile) [691, 693]. Se lo stop mensile viene toccato, l'attività viene sospesa e si va in pausa per resettare la mente [48, 760].
- Si stabilisce un obiettivo mensile di profitto (tipicamente pari a 2 volte lo stop loss mensile) [691, 693].

### 3. Regolazione Dinamica del Rischio (Adjusted Free Capital)
Il capitale libero disponibile per il calcolo delle taglie dei trade non è fisso, ma si adegua costantemente all'andamento reale del profitto e perdita cumulato da inizio anno (YTD P&L) [690, 708]:
$$\text{Adjusted Free Capital} = \text{Free Capital Iniziale} + \text{YTD P\&L}$$
- **Se il trader guadagna**: L'Adjusted Free Capital sale [693, 722]. Di conseguenza, la taglia dei trade futuri aumenta in modo lineare, permettendo di capitalizzare al massimo sulla "striscia vincente" e catturare rendimenti esponenziali [52, 711, 727].
- **Se il trader perde**: L'Adjusted Free Capital scende [692, 710]. La taglia dei trade futuri si riduce automaticamente, mettendo in atto un sistema di autoprotezione intrinseco che riduce la volatilità del portafoglio durante i periodi di slump [710, 727].

Collegamenti:
- [[volatility-adjusted-sizing-turtles]] (L'input di volatilità combinato con l'adjusted free capital per la taglia della posizione)
- [[gestione-dello-slump-operativo]] (Come lo slump forza la riduzione dinamica del rischio)
