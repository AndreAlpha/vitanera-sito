# Il Bias di Sopravvivenza (Survivorship Bias)

## Definizione Teorica
Il **Bias di Sopravvivenza** (Survivorship Bias) è un errore logico sistematico che si verifica quando si analizza un campione di dati focalizzandosi unicamente sugli elementi che hanno superato un determinato processo di selezione (i "sopravvissuti"), ignorando completamente quelli che sono falliti o scomparsi nel tempo, portando a conclusioni gravemente distorte [257, 453].

L'esempio storico più celebre è quello del matematico **Abraham Wald** durante la Seconda Guerra Mondiale [257, 451]. Il Dipartimento della Marina statunitense mostrò a Wald uno schema dei fori di proiettile accumulati sugli aerei che rientravano dalle missioni di combattimento, proponendo di rinforzare con corazze aggiuntive le zone più colpite (ali, fusoliera e coda) [257, 451, 452]. 

Wald rigettò l'analisi intuitiva dei militari, spiegando che i fori visibili mostravano dove gli aerei potevano essere colpiti *e sopravvivere* per fare ritorno alla base [452]. I rinforzi andavano posizionati sulle parti strutturalmente immuni nei grafici (ovvero i motori), perché gli aerei colpiti in quelle aree erano andati distrutti e non erano potuti rientrare per essere esaminati [452].

## Manifestazioni nei Mercati Finanziari
Il bias di sopravvivenza inquina pesantemente l'analisi dei dati di investimento in tre aree chiave [453]:
1. **Le performance dei fondi comuni**: Gli indici dei fondi storici mostrano spesso rendimenti medi sorprendenti solo perché i fondi falliti o con performance disastrose sono stati chiusi e liquidati nel tempo, lasciando in vita solo i vincitori storici [453].
2. **I Backtest quantitativi di trading**: Testare una strategia su un paniere attuale di azioni (ad esempio, le aziende attualmente incluse nel NASDAQ) esclude tutte le società del settore che sono andate in bancarotta negli ultimi 15 anni, sovrastimando drammaticamente i rendimenti storici effettivi [453].
3. **Le truffe di sollecitazione (La tecnica dello "Stealing Thunder")**: Gli operatori abusivi di scommesse sportive o finanziarie inviano migliaia di email con previsioni opposte a gruppi diversi, dimezzando progressivamente il campione fino a isolare un piccolo gruppo di persone che riceve consecutivamente 4 o 5 previsioni corrette di fila, inducendole a credere a un'abilità quasi soprannaturale e convincendole ad acquistare costosi abbonamenti [454, 455].

## Strategie di Difesa dell'Alpha Trader
Per neutralizzare il bias di sopravvivenza, l'investitore deve applicare un rigore scientifico ferreo [454, 456]:
* **Cercare le prove mancanti (Missing Evidence)**: Chiedersi sempre: *"Quali dati non sto vedendo in questo grafico? Quali elementi sono falliti e sono stati esclusi dal database?"* [454].
* **Utilizzare database liberi da Survivorship Bias**: Assicurarsi che i backtest storici includano i dati storici completi delle società cancellate dal listino (delisted stocks) [453].

## Concetti Correlati
* [[pensiero-e-aggiornamento-bayesiano]] (Bayesian Updating)
* [[apofenia-e-illusione-del-clustering]] (Apophenia)
* [[processo-vs-risultato]] (Process vs. Outcome)