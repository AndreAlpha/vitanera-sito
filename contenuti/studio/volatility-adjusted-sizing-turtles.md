# Position Sizing Normalizzato sulla Volatilità (Turtle's N)

Il **position sizing normalizzato sulla volatilità** è una metodologia scientifica originata dagli studi dei celebri *Turtle Traders* negli anni '80 e finalizzata a equilibrare il rischio reale di perdita (in dollari o punti base) su tutti i trade inseriti in portafoglio, indipendentemente dalla volatilità intrinseca dell'asset specifico [38, 517].

### 1. Il Parametro N (True Range Esponenziale)
I Turtles definivano la volatilità di un asset attraverso il parametro **N**, calcolato come la media mobile esponenziale a 20 giorni del **True Range (TR)** [38]:
- Il True Range giornaliero è il valore massimo tra [38]:
  1. Il massimo del giorno meno il minimo del giorno.
  2. Il massimo del giorno meno la chiusura del giorno precedente.
  3. La chiusura del giorno precedente meno il minimo del giorno.
- Di fatto, **N** rappresenta l'escursione media giornaliera attesa (la volatilità a una deviazione standard) per l'asset in esame [38, 40].

### 2. Il Calcolo dello Stop Loss a 2N
Assegnare un livello di stop-loss basato semplicemente su una percentuale fissa o un numero fisso di pip per tutti gli asset è un gravissimo errore commesso dai trader inesperti (es. usare sempre uno stop a 50 pip sia su EUR/USD sia sul volatile USD/MXN) [517, 714].
- Utilizzando **1N** di stop, la probabilità statistica quotidiana di essere liquidati a causa del normale rumore di mercato è di circa il 16% (sulla coda sinistra della distribuzione normale) [40].
- Utilizzando uno stop-loss posizionato a **2N** (due deviazioni standard), la probabilità di stop-out legata al puro rumore scende a circa il **2%** [40]. Ciò consente di far respirare il trade riducendo drasticamente il tasso di falsi stop-out [40, 41].

### 3. La Formula del Position Sizing
Una volta determinato il capitale monetario che si è disposti a rischiare sul singolo trade (es. l'1% del Capitale Libero, equivalente a $10.000) e calcolata la distanza dello stop-loss in punti base o centesimi di dollaro basandosi su 2N, la taglia esatta della posizione si ricava invertendo matematicamente la formula della perdita [41, 729, 730]:
$$\text{Position Size} = \frac{\text{Capitale Monetario a Rischio (Unit Size)}}{\text{Distanza dello Stop (es. 2N in valore monetario)}}$$

Questo processo normalizza il portafoglio: se il mercato si muove violentemente contro il trader, la perdita registrata su un asset volatile (come il petrolio o il peso messicano) sarà matematicamente identica a quella registrata su un asset poco volatile (come le obbligazioni governative a breve termine) [38, 517].

Collegamenti:
- [[capitale-libero-regolato]] (Fornisce il valore monetario esatto a rischio - Unit Size)
- [[risk-utilization-nonlineare]] (Come la taglia della posizione si adegua alla forza della convinzione)
- [[gioco-di-pregiudizio-dei-favoriti-vs-outsider]] (Il posizionamento disciplinato evita i falsi longshot)
