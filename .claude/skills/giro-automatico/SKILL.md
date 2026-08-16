---
name: giro-automatico
description: Esegue un giro automatico di Vitanera senza nessuno davanti allo schermo. È il punto d'ingresso unico che l'Utilità di pianificazione lancia dopo ogni diffusione del calendario economico, ogni due ore in orario di mercato e a fine giornata. Mette in fila `verifica-fatti` e `sorveglia-notizie`, lascia che sia una sola delle due a pubblicare, e fa arrivare al remoto un solo push per giro perché il deploy non si annulli da sé. Usare quando l'argomento è `sorveglianza`, `dato <nome del dato>` o `completo` — cioè quando la richiesta arriva da uno dei task pianificati, non da una persona.
---

# Il giro automatico

Questa skill gira **senza nessuno davanti**. È la differenza che decide tutto il
resto: non puoi chiedere niente, non puoi lasciare a metà, non puoi fermarti a
domandare se va bene così. Quello che decidi finisce online da solo.

Le due skill che fanno il lavoro vero — `verifica-fatti` e `sorveglia-notizie` —
esistono già e non si riassumono qui. Questa le mette in fila e si occupa delle
tre cose che nessuna delle due può sapere da sola: **quale delle due parla**,
**quando si spinge al remoto**, e **che cosa succede se qualcosa si rompe**.

## Le regole che non si negoziano

1. **Non fare domande.** Non c'è nessuno che risponda: una domanda è una
   sessione che resta appesa finché il guardiano non la ferma dopo cinquanta
   minuti. Se un dubbio non si scioglie da sé, la risposta è non pubblicare.
2. **Non lasciare l'albero sporco.** Un giro che modifica dei file e non arriva
   al commit blocca tutti i giri successivi: il guardiano se ne accorge e ferma
   la pianificazione finché non interviene una persona. Se devi abbandonare a
   metà, riporta indietro quello che hai toccato con `git checkout --`.
3. **Chiudi sempre con la riga `ESITO:`.** È l'unica cosa che il guardiano legge.
   Senza, il giro risulta fallito anche se è andato benissimo. Vedi in fondo.
4. **Una sola analisi per giro**, e una sola pubblicazione. Se `verifica-fatti`
   ha pubblicato, `sorveglia-notizie` non si esegue.

---

## 1. I tre tipi di giro

L'argomento dice quale.

| Argomento | Quando scatta | Che cosa esegue |
| --------- | ------------- | --------------- |
| `sorveglianza` | ogni due ore dalle 7:37 alle 21:37, da lunedì a venerdì | `verifica-fatti numeri`, poi `sorveglia-notizie` |
| `dato <nome>` | quindici minuti dopo una diffusione del calendario, venti dopo una decisione, un'ora dopo una conferenza stampa | `verifica-fatti`, poi `sorveglia-notizie` con il dato in mano |
| `completo` | alle 23:17 nei feriali e alle 18:17 di domenica | calendario, `verifica-fatti`, poi `sorveglia-notizie` |

Il `<nome>` del giro `dato` è il titolo dell'appuntamento come lo scrive il
calendario — «Occupati non agricoli (USA)», «Federal Reserve: decisione sui
tassi». Non è una notizia: è **il posto dove guardare**. Il numero uscito lo devi
ancora trovare tu, ed è la prima cosa che cerca `sorveglia-notizie`.

### Perché il giro `completo` rigenera il calendario

Solo `pubblica-analisi` esegue `npm run calendario`, e lo esegue quando pubblica.
In una settimana senza pubblicazioni il calendario invecchia, e tre controlli di
`data.spec.ts` scadono da soli: le prossime uscite finiscono nel passato e i test
diventano rossi senza che nessuno abbia toccato niente. A quel punto il primo
giro che prova a pubblicare fallisce sul più bello.

Quindi il giro `completo` comincia da lì, **prima di tutto il resto**:

```powershell
npm run calendario
```

Valgono per intero le avvertenze del passo 1 di `pubblica-analisi`: lo script non
fallisce mai, quindi si guarda l'output e non il codice di uscita, e poi il diff.
Se lo scaricamento è andato male, `git checkout --` sui due file e si prosegue
senza — un giro con il calendario di ieri vale comunque, un giro che si ferma no.

I due file rigenerati entrano nel commit del giro, quale che sia. Se il giro non
ha nient'altro da committare, si committano da soli con il messaggio
`Calendario economico rigenerato: <N> diffusioni, <M> appuntamenti futuri.`

---

## 2. L'ordine, e perché è quello

```
  calendario (solo `completo`)
       ↓
  verifica-fatti          archivio → notizia
       ↓
  ha pubblicato? ── sì ──→ fine
       ↓ no
  sorveglia-notizie       notizia → archivio
       ↓
  ha pubblicato? ── sì ──→ fine
       ↓ no
  push, se c'è qualcosa da spingere
```

**`verifica-fatti` va per prima, sempre.** Va nella direzione archivio → notizia:
parte da quello che le analisi avevano dichiarato e cerca il numero che lo
scioglie. È la direzione che chiude gli esiti, ed è quella che va fatta finché la
finestra di un orizzonte `breve` è ancora aperta. Rimandarla a dopo lo scout
significa giudicarla il giorno dopo, quando non si può più.

**Lo scout va per seconda**, e serve a quello che la prima non può vedere per
progetto: un dato appena uscito che nessuna analisi aveva nominato, una nave
colpita che non era nell'invalidazione di nessuno. Se `verifica-fatti` ha già
pubblicato, lo scout **non si esegue**: la novità più forte del giro è già in
archivio, e la seconda diventerebbe la voce che si contraddice con quella di due
minuti prima.

### Che cosa passare a `verifica-fatti`

| Tipo di giro | Argomento | Perché |
| ------------ | --------- | ------ |
| `sorveglianza` | `numeri` | Solo il passo 6: riallinea le soglie e i vincoli dell'indicatore. Otto giri al giorno di ricerca completa sarebbero otto giri di esiti superficiali |
| `dato` | _(niente)_ | Il giro di default, fino a cinque analisi scadute. Un dato uscito è quasi sempre il `nextEvent` che qualcuna aveva dichiarato |
| `completo` | _(niente)_ | Idem, ed è il giro in cui l'arretrato si smaltisce davvero |

E una cosa in più, che vale per tutti e tre: **`verifica-fatti` non deve
spingere**. Il suo passo 8 spinge quando il suo cancello resta chiuso; qui il
push è del passo 3 di questa skill, e il perché è nel prossimo paragrafo. Dillo
esplicitamente quando la invochi.

---

## 3. Il push si fa una volta sola per giro

`.github/workflows/pages.yml` dichiara `concurrency: group: pages` con
`cancel-in-progress: true`. Due push a pochi minuti l'uno dall'altro finiscono
nello stesso gruppo e **il secondo annulla il deploy del primo mentre è ancora in
coda**: il run risulta fallito con `Deployment cancelled` senza che nessuno abbia
sbagliato niente.

A mano capitava di rado. Qui capiterebbe a ogni giro in cui `verifica-fatti`
chiude un esito e poi lo scout pubblica: due commit, due push, un deploy morto.

Quindi:

| Chi committa | Chi spinge |
| ------------ | ---------- |
| `verifica-fatti`, al suo passo 8 | nessuno |
| `pubblica-analisi`, al suo passo 12 | **lei**, ed è l'unico push del giro |
| questa skill, se nessuna delle due ha pubblicato | **lei**, alla fine |

Se lo scout ha pubblicato, `pubblica-analisi` ha già spinto tutto — il suo commit
e quello di `verifica-fatti` — in una volta sola: un run, un deploy, e la storia
resta divisa in due commit leggibili.

Se invece nessuno ha pubblicato ma qualcosa è cambiato — un esito chiuso, i
numeri dell'indicatore riallineati, il calendario rigenerato — il push lo fai tu:

```powershell
git status --short
git push origin master
```

Se il remoto è avanti, `git pull --rebase origin master` e ritenta una volta.
**Mai** `git push --force`. Se il push viene rifiutato due volte, è un errore:
vedi il passo 5.

E se non è cambiato niente, **non fare un commit vuoto e non spingere**. Un giro
che non trova nulla è il risultato normale, non un fallimento.

---

## 4. Il freno editoriale

Qui non c'è nessuno che dica «aspetta». Il cancello del passo 9 di
`verifica-fatti` e quello di `sorveglia-notizie` sono già stretti, ma sono
pensati per una persona che lancia la skill quando le pare. Otto giri al giorno
più uno per ogni dato in calendario sono un'altra cosa, e il rischio ha già un
precedente misurato: ventidue analisi in quattro giorni hanno prodotto il gruppo
di nodi **meno coeso di tutto il grafo**, coesione 0,09.

Una regola in più, quindi, e vale per entrambi i cancelli:

> **Se l'analisi più recente in archivio ha meno di quarantacinque minuti, si
> pubblica solo per un fatto duro**: un dato macro diffuso, una decisione
> ufficiale, un comunicato di banca centrale, una conferma o una smentita da
> fonte primaria. Non per una ricostruzione di stampa, non per una
> rivendicazione, non per un movimento di prezzo.

Il `publishedAt` dell'articolo in testa a `ARTICLES` dice quanti minuti sono
passati. Quando la regola morde, **dillo nella riga finale**: è
`ESITO: nessuna novita — freno editoriale, ultima analisi di N minuti fa`.

Non è un freno all'automazione: è la stessa cosa che faceva la persona quando
guardava la notifica e decideva di non incollarla.

---

## 5. Se qualcosa si rompe

Nessuno sta guardando, quindi ogni guasto va o risolto o dichiarato. Non ci sono
altre due possibilità, e in particolare non esiste «vado avanti e vediamo».

| Che cosa | Che cosa fare |
| -------- | ------------- |
| `npm run calendario` scarica male | `git checkout --` sui due file, prosegui senza, dillo nella riga finale |
| `npm run build` o `npm test` falliscono | **niente commit**. Prova a capire in un giro solo: se è una data scaduta del calendario, rigenera e ritenta una volta. Se non si risolve, riporta indietro tutto con `git checkout -- .` e chiudi con `ESITO: errore` |
| Il push viene rifiutato | `git pull --rebase origin master`, ritenta una volta. Se fallisce ancora, il commit resta locale: chiudi con `ESITO: errore — push rifiutato`, il giro dopo lo troverà e lo spingerà |
| `graphify` non risponde | Il grafo si aggiorna la volta dopo. Non è un errore: prosegui e dillo nella riga finale |
| Una fonte non risponde | È il caso normale: metà delle fonti non risponde per progetto. Vedi il passo 2 di `verifica-fatti` |
| Il deploy fallisce dopo un push riuscito | L'analisi **è pubblicata**. Non ripubblicare, non rilanciare il workflow: chiudi con `ESITO: pubblicato <slug> — deploy in ritardo` |

Un file rimasto modificato e non committato è la cosa peggiore che puoi
lasciare, perché blocca ogni giro successivo. Prima di chiudere con un errore,
`git status --porcelain` deve essere vuoto: o hai committato, o hai riportato
indietro.

---

## 6. La riga finale

L'ultima riga della risposta è **l'unica cosa che il guardiano legge**. Va scritta
esattamente così, in fondo, da sola, senza grassetto e senza punteggiatura
intorno:

```
ESITO: pubblicato <slug>
ESITO: numeri riallineati — <che cosa si è mosso>
ESITO: nessuna novita — <quale regola ha tenuto chiuso il cancello>
ESITO: errore — <che cosa si è rotto>
```

`ESITO: errore` accende una notifica sul desktop e **ferma tutti i giri
successivi** finché la persona non cancella `.giri/bloccato`. Usalo per quello
che è davvero un guasto: test rossi, push rifiutato, un file rimasto indietro.
Non usarlo per un giro che non ha trovato niente — quello è `nessuna novita`, ed
è il risultato che ci si aspetta la maggior parte delle volte.

Sopra quella riga scrivi un resoconto breve, dieci righe al massimo: finisce nel
log del giro, che è quello che la persona legge quando vuole capire che cosa è
successo mentre non c'era. I resoconti lunghi delle due skill sottostanti servono
a una conversazione, e qui la conversazione non c'è.
