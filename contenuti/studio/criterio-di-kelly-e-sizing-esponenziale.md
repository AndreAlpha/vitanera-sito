# Il Criterio di Kelly e il Sizing Esponenziale

## Definizione Teorica
La gestione del rischio nell'universo del trading non è una scienza fissa, ma un esercizio dinamico di allocazione del capitale basato sulla probabilità stimata (valore atteso) e sulla consistenza del proprio "bankroll" attuale [136, 657]. 

Il **Criterio di Kelly** (Kelly Criterion), originariamente sviluppato dal matematico John Kelly nel 1956, è una formula matematica utilizzata per calcolare la dimensione percentuale ottimale di una scommessa al fine di massimizzare la crescita geometrica della ricchezza nel lungo termine, azzerando al contempo il rischio di rovina (risk of ruin) [648, 679].

## La Logica Sottostante il Sizing Dinamico (Behaving like a Call Option)
Sebbene la formula di Kelly richieda la conoscenza esatta delle probabilità (condizione impossibile nel trading, dove le probabilità sono stimate con un certo margine di errore), la logica di base è un pilastro cardine dell'Alpha Trader [136, 679]:
* **Sizing Dinamico**: La dimensione della posizione deve crescere in modo proporzionale all'aumento del proprio capitale libero (free capital = capitale iniziale + profitti YTD) e ridursi progressivamente durante le fasi di perdita (drawdown) [648].
* **Comportarsi come un'Opzione Call**: Questo meccanismo permette al trader di esibire un profilo di rischio asimmetrico: limitato sul lato negativo (perché il sizing si contrae quando si perde) e illimitato sul lato positivo (perché il sizing si espande quando si guadagna) [312, 645, 647].

```
Profitti Finali (YTD)
  ▲                     ┌────────────── / "20% factor" (Sizing Esponenziale) [646, 647]
  │                    ╱
  │                   ╱
  │                  ╱
  │                 ╱   ┌──────────── / "10% factor"
  │                ╱   ╱
  │               ╱   ╱   ┌────────── / "zero factor" (Sizing Fisso) [646]
  │              ╱   ╱   ╱
  ├─────────────┼───┼───┼────────────► Downside Limitato (Drawdown) [647]
  │             │   │   │
  └─────────────┴───┴───┴────────────► Tempo / Numero di Trade
```

## Il Sizing Esponenziale sui Trade ad Alta Convinzione
La maggior parte dei sistemi di classificazione della convinzione (A, B, C o 3, 4, 5 stelle) presenta un errore fatale: l'incremento del rischio è troppo lineare [635]. Brent Donnelly propone invece un approccio basato su **tre livelli di convinzione** con scaling esponenziale [635]:

### 1. TYPE I (Normali operazioni quotidiane)
Operazioni di routine basate su normali segnali statistici o lead/lag [636, 637]. Si rischia una quota fissa ridotta, compresa tra l'**1% e il 3%** del proprio capitale libero [637, 648].

### 2. TYPE II (Alta convinzione per sblocchi di tesi)
Opportunità non frequenti in cui si verifica una chiara inversione della narrativa fondamentale o un grosso disallineamento nei mercati correlati [638]. La formula per calcolare il capitale a rischio in questa fase è esponenziale e sfrutta i guadagni accumulati [639]:
$$\text{Rischio TYPE II} = 3\% \text{ del capitale libero} + 10\% \text{ dei profitti YTD}$$

Questo permette di sfruttare la cosiddetta "casa d'appoggio" senza mettere a rischio il capitale iniziale [639].

### 3. TYPE III (Le grandi occasioni della vita)
Dislocazioni macroeconomiche estreme o shock geopolitici rari (come il default sovrano di un paese o un intervento d'emergenza di una banca centrale) [642]. Se il trader si trova in una posizione di forza finanziaria (profitti YTD significativi), deve "essere un maiale" (be a pig, citando Stanley Druckenmiller) e rischiare quote ingenti del proprio profitto YTD (fino al **50%**) per generare rendimenti geometrici straordinari, in quanto queste occasioni si presentano solo pochissime volte nella vita [644, 651].

## Concetti Correlati
* [[bias-dei-favoriti-vs-outsider]] (Favorite-Longshot Bias)
* [[approccio-tight-aggressive]] (Tight/Aggressive Trading Style)
* [[processo-vs-risultato]] (Process vs. Outcome)