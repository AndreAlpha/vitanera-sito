# Calibrazione e Risoluzione (Brier Score)

Per valutare scientificamente l'accuratezza e l'efficacia di un modello di previsione probabilistico, si utilizza una combinazione di due metriche fondamentali che compongono il cosiddetto **Brier Score** [241, 243, 245].

### 1. Calibrazione (Calibration)
La calibrazione misura quanto accuratamente il livello di fiducia espresso (la probabilità stimata) corrisponda alla frequenza reale con cui l'evento si realizza [241].
- **Definizione**: Se un previsore assegna una probabilità del 70% a un certo evento (es. la pioggia o un rialzo dei tassi d'interesse), quell'evento dovrebbe idealmente verificarsi esattamente il 70% delle volte in un campione ampio di previsioni identiche [241].
- **Miscalibrazione**: 
  - *Sovrastima (Overconfidence)*: Il previsore assegna probabilità estreme (es. 80%) a eventi che si verificano molto meno frequentemente (es. 50%) [242].
  - *Sottostima (Underconfidence)*: Il previsore è troppo prudente, assegnando probabilità modeste (es. 20%) a eventi che in realtà si realizzano molto più spesso (es. 50%) [242].

### 2. Risoluzione (Resolution)
La risoluzione misura la decisività e la capacità del previsore di separare gli eventi che accadranno da quelli che non accadranno, assegnando probabilità vicine a 0% o 100% [243].
- Un previsore "vigliacco" ma ben calibrato potrebbe limitarsi ad assegnare sempre la media storica di lungo periodo (es. 40% di possibilità di pioggia ogni giorno in una zona umida), ottenendo una calibrazione perfetta ma una risoluzione pessima (non offre alcuna informazione specifica giorno per giorno) [243].
- La previsione ottimale unisce un'ottima calibrazione a un'alta risoluzione (assegnare con sicurezza probabilità vicine al 90-100% agli eventi che si verificano, e 0-10% a quelli che non si verificano) [243, 244].

### 3. Il Brier Score
Il Brier Score è un sistema di calcolo matematico ("proper scoring rule") che quantifica la discrepanza tra le stime probabilistiche e i risultati reali registrati (assegnando 1 se l'evento accade, 0 se non accade) [244, 407].
- Il punteggio varia da **0** (onniscienza assoluta, previsione perfetta) a **0.5** (accuratezza pari al lancio di una moneta da parte di uno scimpanzé) fino a **2.0** (previsione costantemente e completamente errata con massima fiducia) [245].
- Penalizza pesantemente l'arroganza: chi assegna il 100% o il 95% di confidenza a un evento che poi fallisce riceve una punizione pesantissima sul punteggio [244].

Collegamenti:
- [[fallacia-wrong-side-of-maybe]] (L'errore logico nel giudicare le probabilità)
- [[pensiero-e-aggiornamento-bayesiano]] (Aggiornamento progressivo per migliorare il punteggio)
- [[visione-esterna-vs-interna]] (Uso del tasso di base per calibrare l'inizio della stima)
