# I Modelli Sistematici Multi-Fattoriali

I **modelli sistematici multi-fattoriali** sono framework di investimento quantitativo che strutturano l'allocazione del capitale su un portafoglio diversificato di asset (valute, azioni, obbligazioni, materie prime) attraverso l'applicazione automatizzata di regole matematiche predefinite, eliminando l'influenza delle emozioni umane [22, 85, 86].

### 1. I Quattro Stili di Strategia Primari
Un modello sistematico globale macro ottimizza il portafoglio combinando quattro stili di investimento indipendenti [88, 90]:
- **Value (Valore)**: Identifica se un asset è economico o costoso rispetto alla sua stima di fair value di lungo periodo (es. modelli di parità del potere d'acquisto PPP per le valute, o multipli P/E, P/B e P/FCF per le azioni) [91, 100].
- **Trend/Momentum (Tendenza)**: Sfrutta la propensione dei mercati finanziari a muoversi in direzioni persistenti nel breve e medio termine (es. incroci di medie mobili, canali) [78, 92, 93].
- **Carry (Rendimento)**: Cattura i flussi di rendimento generati dal possesso dell'asset (es. differenziali dei tassi di interesse FX carry, rolldown sulle curve obbligazionarie, pendenze contango/backwardation sulle materie prime) [94, 100].
- **Fundamentals (Fondamentali)**: Integra indicatori macroeconomici storici e previsionali (es. PMI, crescita del PIL, sorprese dei dati macro, andamento della produzione industriale) [95, 100].

### 2. Struttura del Framework
Ogni stile di strategia è composto da singoli fattori ponderati matematicamente [88, 96]. Ad esempio, lo stile *Value* azionario può assegnare un peso del 33% al P/E, 33% al P/B e 34% al P/FCF [96].
I singoli stili (es. 25% ciascuno) vengono poi sommati per determinare il posizionamento finale dell'asset [90].

```
  Fattori Value (P/E, P/B) -----------> STILE VALUE (25%) ------\
  Fattori Trend (Medie Mobili) --------> STILE TREND (25%) -------\----> MODELLO SISTEMATICO
  Fattori Carry (Tassi Interest) ------> STILE CARRY (25%) -------/       (Output di Posizionamento)
  Fattori Fondamentali (PIL, PMI) ----> STILE FUNDAMENTALS (25%) -/
```

### 3. Integrazione dei Fattori di Rischio (Risk Factors)
Prima dell'esecuzione, il modello quantitativo applica dei filtri di ottimizzazione legati ai rischi esogeni [97, 98]:
- *Rischio di inflazione* (impatto sulle obbligazioni) [97].
- *Rischio di liquidità* (allargamento bid/ask spread che può erodere i rendimenti) [97, 98].

Collegamenti:
- [[risk-parity]] (L'allocazione dei pesi basata esclusivamente sulla volatilità)
- [[impossibile-trinitas]] (Il limite macroeconomico che influenza i fondamentali di carry)
- [[volatility-adjusted-sizing-turtles]] (Modulazione quantitativa del rischio sulle posizioni del modello)
