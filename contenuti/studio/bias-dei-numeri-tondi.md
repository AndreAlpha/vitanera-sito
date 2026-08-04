# Il Bias dei Numeri Tondi (Round Number Bias)

## Definizione Teorica
Nel trading e nella psicologia applicata ai mercati, il **Bias dei Numeri Tondi** (Round Number Bias) è la tendenza sistematica degli esseri umani ad attribuire un'importanza e una rilevanza sproporzionata ai numeri tondi o "interi" (come ad esempio costosi traguardi di prezzo come 100, 1000 o centesimi finiti come .00 o .50) rispetto ai numeri intermedi [375].

Questa distorsione deriva dal modo in cui il cervello umano elabora e categorizza le informazioni numeriche per risparmiare energia (System 1), fungendo da potente scorciatoia cognitiva [95, 375]. Ne sono esempi quotidiani il desiderio di arrotondare il pieno di benzina alla cifra tonda o il senso di frustrazione provato da un maratoneta che termina in 4:00:02 rispetto a 3:59:58 [375].

## Evidenze Quantitative nei Mercati
Brent Donnelly ha condotto un'analisi statistica rigorosa dimostrando che questa distorsione si riflette in modo massiccio sulla microstruttura di mercato [376]. Esaminando la distribuzione dei centesimi (le ultime due cifre decimali del prezzo) in cui si registrano i massimi e i minimi giornalieri di grandi titoli azionari (come Tesla e Netflix) tra il 2015 e il 2020, emerge un'enorme e statisticamente inspiegabile sovra-rappresentazione di massimi e minimi esattamente sui livelli `.00` (centesimi tondi) e `.50` [376]:

```
Frequenza di Massimi/Minimi Giornalieri
  ▲
 9%│   █ (.00)
 8%│   █
   │   │
 4%│   │                    █ (.50)
 3%│   │                    █
 1%│   █  █  █  █  █  █  █  █  █  █  █  █  █
   └───┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──► centesimi
      .00                  .50
```

Questo accade perché la maggior parte degli ordini limite e, soprattutto, degli **ordini di stop loss e take profit** inseriti dagli investitori privati e persino dai professionisti sono posizionati, per pigrizia mentale, esattamente sui numeri tondi [376].

## Applicazione Tattica nel Trading (La Regola del Professionista)
Comprendere il round number bias fornisce un'immediata e preziosa utilità operativa per massimizzare l'efficacia delle esecuzioni [376]:
1. **Piazzamento degli Stop Loss**: Un trader esperto evita tassativamente di inserire i propri stop loss esattamente sul numero tondo (ad esempio, vendere a $100.00 o a $99.99) [741]. Poiché i market maker e gli algoritmi tendono a "cacciare" la liquidità accumulata sui numeri tondi (stop runs), gli stop devono essere posizionati a debita distanza di sicurezza, filtrati in base alla volatilità e preferibilmente sul lato "opposto" rispetto al numero tondo [573, 741].
2. **Piazzamento dei Take Profit**: Al contrario, per assicurarsi l'esecuzione di un ordine di vendita, è ottimale inserire l'ordine leggermente *al di sotto* della cifra tonda (ad esempio a $99.85 invece di $100.00) in quanto il prezzo potrebbe rimbalzare violentemente a causa del muro di ordini limite posizionati sul numero tondo senza mai toccarlo effettivamente [376].

## Concetti Correlati
* [[eccesso-di-sicurezza-e-miscalibrazione]] (Miscalibration)
* [[approccio-tight-aggressive]] (Tight/Aggressive Trading Style)
* [[microstruttura-di-mercato-e-liquidita]] (Market Microstructure)