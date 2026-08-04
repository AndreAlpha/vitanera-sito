# Stress-Testing Storico e di Scenario

Lo **stress-testing** è una metodologia di gestione del rischio macroeconomico utilizzata per identificare le vulnerabilità di un portafoglio di trading rispetto a eventi estremi, shock geopolitici improvvisi e rotture strutturali delle correlazioni storiche che non vengono adeguatamente catturate dai modelli statistici tradizionali come il Value at Risk (VaR) [15, 30, 54, 532].

### 1. I Limiti del Value at Risk (VaR)
Il Value at Risk calcola la massima perdita attesa all'interno di un intervallo di confidenza specifico (es. 95% o 99%) su un certo orizzonte temporale [49]. Tuttavia, presenta due gravi vulnerabilità:
- **Ipotesi di Distribuzione Normale**: Il VaR assume che i rendimenti finanziari seguano una distribuzione gaussiana (curva a campana), ignorando la presenza di code grasse (*fat tails*) che caratterizzano i mercati reali [46, 47, 698].
- **Cecità ai Cambiamenti di Regime**: In periodi prolungati di bassa volatilità, il VaR si contrae in modo anomalo, inducendo a incrementare enormemente la leva finanziaria proprio mentre i rischi di mercato reali si stanno accumulando (Minsky Moment) [54, 532].

### 2. Le Due Metodologie di Stress-Testing
Per svelare le "mine antiuomo" nascoste nel portafoglio, i gestori macro utilizzano due tecniche complementari [54]:
1. **Stress-Testing Storico**: Consiste nel ricalcolare la P&L del portafoglio attuale simulando esattamente l'andamento dei mercati durante le più severe crisi del passato recente, tra cui [54, 55]:
   - Il crollo del lunedì nero (Black Monday - 19 ottobre 1987) [20, 83].
   - Il default della Russia e il collasso del fondo LTCM (1998) [94].
   - La bancarotta di Lehman Brothers e la crisi dei subprime (2008) [74].
   - Il disastro nucleare di Fukushima (2011) [54, 55].
   - Il downgrade del rating degli Stati Uniti (2011) [54, 55].
2. **Stress-Testing di Scenario**: Prevede la creazione di scenari ipotetici ma coerenti dal punto di vista geopolitico e di teoria dei giochi (es. una escalation militare improvvisa nello Stretto di Hormuz con chiusura delle rotte petrolifere) [144, 678]. Si stimano gli impatti simultanei sui prezzi del greggio, sui tassi d'interesse, sui cambi delle valute commodity e sui mercati azionari, testando la tenuta del portafoglio alle rotture repentine delle correlazioni standard [678].

Collegamenti:
- [[risk-utilization-nonlineare]] (La modulazione preventiva del rischio basata sui limiti emersi dagli stress-test)
- [[gap-risk-e-rischio-fine-settimana]] (La gestione degli shock fuori dagli orari di contrattazione)
