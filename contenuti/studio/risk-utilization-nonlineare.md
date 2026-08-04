# Risk Utilization Non Lineare

La **Risk Utilization Non Lineare** è una regola fondamentale di gestione del rischio macro che stabilisce che la quantità di capitale esposta alle fluttuazioni di mercato (la percentuale di VaR utilizzata rispetto al limite massimo) non debba crescere in modo lineare rispetto alla convinzione teorica o al numero di trade, ma debba seguire una traiettoria esponenziale guidata da rigorosi filtri di asimmetria probabilistica [50, 51, 52].

### 1. La Prospettiva della Teoria dei Giochi (L'analogia del Poker)
Per comprendere la non-linearità, Greg Gliner ed esperti di finanza comportamentale propongono un'analogia classica tratta dal poker Texas Hold'em [50, 51]:
- Immaginate di giocare su due tavoli contemporaneamente. Nel primo tavolo vi viene servita una coppia d'Assi (A-A), la migliore mano di partenza pre-flop con una probabilità di vittoria elevatissima [50, 51]. Nel secondo tavolo vi viene servito un fante e una regina non dello stesso seme (J-Q unsuited), una mano mediocre con un valore atteso modesto [50].
- **Comportamento Lineare (Sbagliato)**: Un trader lineare penserebbe: "Ho il 50% di convinzione su J-Q e l'80% su A-A, quindi giocherò J-Q con metà del capitale massimo".
- **Comportamento Non Lineare (Corretto)**: Il giocatore professionista va all-in (utilizza il 100% del limite di rischio consentito) sulla coppia d'Assi, mentre passa o gioca al risparmio minimo sulla mano J-Q [51, 52].

### 2. Modulazione della Convizione (Stelle del Trade)
I trade non sono tutti uguali. Donnelly e Gliner classificano le opportunità in base ai fattori di convergenza in tre categorie di rischio [708]:
- **Three-Star Trade (Bassa Convinzione)**: Rischiare al massimo l'1% del Capitale Libero [708].
- **Four-Star Trade (Media Convinzione)**: Rischiare il 3% del Capitale Libero [708].
- **Five-Star Trade (Massima Convinzione)**: Rischiare fino al 6-7% del Capitale Libero [708, 710].

```
  Quota di Capitale a Rischio
     |                                    / (Five-Star: 6-7%)
     |                                   /
     |                                  /
     |                                 /
     |                                / (Four-Star: 3%)
     |                              _/
     |_____________________________/ (Three-Star: 1%)
     +--------------------------------------------------> Convinzione Analitica
```

La non-linearità assicura che il capitale venga protetto gelosamente durante i periodi di rumore di mercato o bassa chiarezza strategica, rimanendo disponibile per essere impiegato in modo massiccio quando si presenta una vera asimmetria statistica favorevole [713, 714].

Collegamenti:
- [[volatility-adjusted-sizing-turtles]] (Modulazione dello stop in base alla volatilità)
- [[capitale-libero-regolato]] (Fornisce il capitale monetario reale su cui applicare le percentuali non lineari)
- [[gestione-dello-slump-operativo]] (Metodologia per ritornare a trade di dimensioni minime 3-star)
