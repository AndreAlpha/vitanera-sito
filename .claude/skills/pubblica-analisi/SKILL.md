---
name: pubblica-analisi
description: Pubblica una o più analisi su Vitanera partendo dal testo grezzo. Rigenera il calendario economico, chiude gli esiti delle analisi precedenti ricontrollandone le condizioni di invalidazione, interroga il grafo di conoscenza in contenuti/ per collocare il testo rispetto a quanto già pubblicato e alle note di metodo — e può rielaborarne le conclusioni —, decide titolo e categorie aggiungendone di nuove se mancano, scrive un file TypeScript per analisi con la sua copia markdown, aggiorna l'indicatore operativo a tre orizzonti e i riferimenti di mercato, riaggiorna il grafo, verifica formattazione, build e test, poi fa commit e push. Usare quando l'utente fornisce il testo di un'analisi da pubblicare ("aggiungi questo articolo", "pubblica questa analisi", "pubblica queste analisi", "inserisci questi") e anche quando chiede solo di aggiornare i dati del calendario o di verificare come sono andate le analisi precedenti.
---

# Pubblicare un'analisi su Vitanera

L'argomento è il **testo grezzo** dell'analisi. Se è un percorso di file, leggilo.
Se manca del tutto, chiedi il testo e fermati.

Non chiedere conferma su titolo, categorie, orario o orizzonte: sono decisioni
tue, prese con le regole qui sotto. Chiedi solo se il testo è ambiguo al punto da
rendere impossibile capire di quale strumento parla.

**Il testo grezzo è materia prima, non un dettato.** Descrive un momento visto da
chi aveva davanti il grafico; il tuo lavoro è collocarlo in tutto quello che è
stato scritto prima e nei quadri di metodo raccolti in `contenuti/studio/`. Se il
contesto porta a una conclusione diversa da quella dichiarata — direzione,
orizzonte, forza — **la conclusione che pubblichi è la tua**, e il perché va
scritto nel resoconto finale. Vedi il passo 4.

## L'ordine dei passi non è negoziabile

Il calendario si rigenera **per primo** e l'orario di pubblicazione si sceglie
**dopo**. La rigenerazione dura una ventina di secondi e fa un centinaio di
richieste di rete: se decidi `publishedAt` prima, quando arrivi al commit quel
valore è già invecchiato di minuti.

I numeri qui sotto sono quelli dei titoli di sezione, così «passo 7» si trova
senza contarli.

```
 0  conta le analisi           8  aggiorna i riferimenti di mercato
 1  rigenera il calendario     9  passa in rassegna il resto del sito
 2  leggi lo stato e l'ora    10  genera i markdown e il grafo
 3  chiudi gli esiti aperti   11  formatta, compila, prova
 4  contestualizza col grafo  12  commit e push
 5  decidi le categorie       13  (solo se online non si aggiorna)
 6  scrivi l'articolo         14  riferisci
 7  aggiorna l'indicatore
```

Due passi vengono **prima** di scrivere e non sono facoltativi.

Il primo e' **chiudere gli esiti aperti**: si torna sull'analisi precedente e si
guarda se le condizioni che aveva dichiarato sono scattate. Se questo passo non
sta sul percorso obbligato della pubblicazione non succede mai, perche' nessuno
torna spontaneamente a giudicare un testo vecchio, e il registro degli esiti
resta vuoto per sempre.

Il secondo e' **interrogare il grafo**. Il testo che ricevi descrive un momento;
il grafo sa che cosa e' stato scritto prima e quali quadri di metodo si
applicano. Un'analisi scritta senza guardarlo e' una notizia, non un'analisi.

---

## 0. Quante analisi ci sono nell'argomento

L'argomento può contenere **una o più analisi**. Contale prima di tutto, perché
cambia l'ordine del lavoro.

Sono analisi distinte quando si vede almeno uno di questi segni:

- l'utente lo dice («queste due», «pubblica anche questa», «prima questa poi quella»);
- compaiono più titoli o più intestazioni di apertura dello stesso tipo
  («Fatti confermati» ripetuto, «Bias intraday» ripetuto);
- sono separate da una riga di stacco (`---`, `===`, `***`) o numerate;
- descrivono **momenti diversi**: orari, controlli o sedute successive, con
  livelli di prezzo che si contraddicono fra loro.

Non sono analisi distinte i paragrafi di un unico testo lungo, né una parte che
riprende e commenta il controllo precedente: quella è la struttura normale di
un'analisi sola.

**Nel dubbio pubblica un articolo solo.** Un testo spezzato per errore in due
produce due articoli deboli e due voci in archivio che si contraddicono; un
articolo unico si può sempre dividere dopo.

### Come si lavora con più analisi

1. **Ordina i testi dal più vecchio al più recente.** L'ordine cronologico è
   quello del contenuto, non quello in cui li hai ricevuti: un controllo che
   parla dell'apertura americana viene dopo uno che commenta il dato delle 14:30.
2. **Scrivi tutti gli articoli**, uno per testo. Ogni articolo ha il suo file,
   il suo slug e le sue categorie: due analisi dello stesso giorno possono avere
   categorie del tutto diverse.
3. **Assegna i `publishedAt` in ordine crescente**, tutti già trascorsi e tutti
   successivi all'ultimo articolo già in archivio. Distanziali di qualche minuto
   rispettando l'ordine cronologico reale: se i testi citano un orario («dopo
   l'apertura USA», «alle 14:30»), usalo come vincolo di ordinamento, ma non
   pubblicare mai un orario futuro pur di rispettarlo.
4. **Metti i riferimenti in testa all'array** nell'ordine inverso: il più recente
   per primo.
5. **Aggiorna l'indicatore una volta sola**, sull'analisi **più recente**. Le
   altre entrano al massimo nello `stance` e in `sources`.
6. **Aggiorna i riferimenti di mercato una volta sola**, con i valori dell'analisi
   più recente; usa quelli delle precedenti solo per le voci che la più recente
   non cita.
7. **Una sola rigenerazione dei markdown, un solo giro di verifica e un solo
   commit** alla fine, non uno per articolo.

Se una delle analisi è impubblicabile — testo troncato, strumento non
identificabile — pubblica le altre e dillo esplicitamente nel resoconto finale,
senza bloccare tutto.

---

## 1. Rigenera lo storico del calendario economico

**Questo passo si esegue a ogni pubblicazione**, anche quando l'analisi non parla
di dati macro, e anche quando l'utente chiede soltanto «aggiorna i dati».

Non è una cortesia: tre controlli del calendario **marciscono da soli col passare
del tempo** e fanno fallire i test — e quindi il deploy — senza che nessuno abbia
toccato niente.

| Controllo                                                      | Dove                   | Quando scade da solo                       |
| -------------------------------------------------------------- | ---------------------- | ------------------------------------------ |
| ogni `next.at` deve essere nel futuro                          | `data.spec.ts:151-159` | appena passa la prossima uscita più vicina |
| entrambe le banche centrali devono avere una prossima riunione | `data.spec.ts:161-166` | dopo l'ultima riunione in archivio         |
| appuntamenti futuri per entrambe le aree                       | `data.spec.ts:188-193` | idem                                       |

La prima è la più insidiosa: gli indicatori settimanali (sussidi USA) fanno
scadere quel controllo **ogni sette giorni**.

```powershell
npm run calendario
```

Circa **20 secondi** e **120 richieste** all'endpoint pubblico di TradingView
(2 paesi × 15 anni × 4 trimestri). Riscrive **soltanto** due file:

- `src/app/core/data/calendar.series.ts` — lo storico di ogni indicatore
- `src/app/core/data/calendar.events.ts` — gli appuntamenti di Fed e BCE

Non tocca `calendar.meta.ts`, che è redazionale e si modifica solo a mano.

### Verifica l'esito: il codice di uscita non basta

Lo script **non fallisce mai**. Se la rete non risponde o la fonte cambia i
titoli delle serie, stampa un avviso, scrive comunque i file con lo storico
azzerato ed **esce con codice 0**. Il file resta sintatticamente valido e
«sembra» sano, perché gli appuntamenti delle banche centrali sono cablati nello
script e restano popolati anche quando lo storico è vuoto.

Guarda quindi l'output, non l'esito del comando. Un run riuscito finisce con due
righe di questa forma e **nessuna** riga che cominci con `!` o `⚠`:

```
Scritte 3357 diffusioni su 29 indicatori.
Appuntamenti banche centrali: 49 futuri, 48 recenti.
```

Riferimenti per giudicare: le diffusioni sono circa **3350** e crescono
lentamente nel tempo (il massimo teorico è 3480); gli indicatori sono sempre
**29**. Un `⚠ usa/nfp: solo 12 diffusioni storiche` o un `! US 2019-01-01: HTTP 429`
significano dati parziali.

Poi controlla il diff, che è il modo più affidabile:

```powershell
git diff --stat src/app/core/data/calendar.series.ts src/app/core/data/calendar.events.ts
```

- **Poche righe cambiate** (spesso solo due) → tutto a posto. Il diff non è mai
  vuoto: `CALENDAR_GENERATED_AT` e `EVENTS_GENERATED_AT` cambiano sempre, perché
  registrano il minuto della rigenerazione. La prima delle due è **visibile al
  lettore** in `/calendario` come «Archivio aggiornato al …».
- **Il file si è accorciato di migliaia di righe** → lo scaricamento è andato
  male. Ripristina e riprova:

  ```powershell
  git checkout -- src/app/core/data/calendar.series.ts src/app/core/data/calendar.events.ts
  ```

  Se fallisce anche al secondo tentativo, **pubblica lo stesso l'analisi** senza
  i due file rigenerati e dillo nel resoconto: un'analisi pubblicata con il
  calendario di ieri è meglio di un'analisi non pubblicata. Ma controlla che i
  test passino comunque: se falliscono per le date, il problema va risolto prima.

### Per le prove ripetute

La copia grezza in `.calendar-cache/` (circa 38 MB, esclusa da git) evita di
riscaricare tutto. In PowerShell la sintassi bash del README **non funziona**:

```powershell
$env:CALENDAR_CACHE = '1'; npm run calendario   # 0,4 secondi invece di 20
Remove-Item Env:CALENDAR_CACHE                   # per tornare a scaricare davvero
```

La variabile resta impostata per tutta la sessione: ricordati di toglierla, o la
pubblicazione vera userà dati vecchi.

> **La cache si avvelena.** Lo script riscrive `.calendar-cache/` alla fine di
> ogni scaricamento **senza guardare se è andato bene**: dopo un download
> fallito la cache contiene `[]`. Riprovare con `CALENDAR_CACHE=1` a quel punto
> riusa il vuoto e sembra riuscire in mezzo secondo. Se un run è andato male,
> **cancella la cache** prima di ritentare:
> `Remove-Item -Recurse -Force .calendar-cache`.

---

## 2. Leggi lo stato attuale e prendi l'ora

Prima di scrivere, apri sempre:

| File                                    | Perché                                       |
| --------------------------------------- | -------------------------------------------- |
| `src/app/core/data/articles.data.ts`    | l'elenco: quali analisi ci sono e in che ordine |
| `src/app/core/data/articles/` (uno solo) | lo stile di un'articolo già scritto          |
| `src/app/core/data/signal.data.ts`      | indicatore in panoramica, e il suo tipo      |
| `src/app/core/data/outcomes.data.ts`    | esiti già registrati: serve al passo 3       |
| `src/app/core/data/markets.data.ts`     | riferimenti numerici in panoramica           |
| `src/app/core/models/article.model.ts`  | i tipi, e l'elenco esatto degli slug         |
| `src/app/core/config/site.config.ts`    | l'elenco autorevole delle categorie          |
| `src/app/core/data/calendar.meta.ts`    | i 29 indicatori e le loro categorie          |

`articles.data.ts` **non contiene più testo**: ogni analisi vive in un file suo
sotto `articles/`, e lì dentro ci sono solo gli import e l'array. Per vedere come
è fatta un'analisi apri uno di quei file, non l'elenco — il più recente in cima
all'array è quello che descrive lo stato attuale del mercato.

L'archivio può essere **vuoto**: è lo stato in cui il sito riparte. In quel caso
la cartella `articles/` non esiste ancora, non c'è un articolo precedente da cui
copiare lo stile — usa i tipi e questa guida — e `MARKET_SIGNAL` vale `null`,
quindi l'indicatore si scrive da zero invece di aggiornarlo. Vale anche per
`kicker`, `tags` e `instruments`: non c'è nulla da riusare, la prima
pubblicazione fonda le convenzioni.

Poi prendi l'ora, **adesso e non prima**:

```powershell
Get-Date -Format "yyyy-MM-ddTHH:mm:ssK"
```

**Usa un orario già trascorso**, non arrotondato in avanti: togli qualche minuto.
A video una data di poco futura non si noterebbe — `formatSince` tollera cinque
minuti di scarto e l'indicatore tronca il tempo trascorso a zero — ma due test la
vietano senza tolleranza (`data.spec.ts:19-26` e `:70-75`), e un test rosso
significa nessuna pubblicazione online.

---

## 3. Chiudi gli esiti aperti

**Prima di scrivere qualcosa di nuovo, guarda com'è andata l'ultima volta.**

Ogni analisi in archivio ha dichiarato, prima di sapere come sarebbe finita, un
elenco di condizioni che la renderebbero sbagliata. Questo passo le ricontrolla e
scrive il risultato in `src/app/core/data/outcomes.data.ts`.

Non è un passo di cortesia. Senza, il registro degli esiti resta vuoto e tutto il
resto — la calibrazione, il badge sulle schede, la pagina `/esiti` — è impianto
senza contenuto. E si torna al punto di partenza: ventidue analisi che dichiarano
di essere falsificabili e nessuna mai falsificata.

### Che cosa controllare

Guarda le analisi **senza esito il cui orizzonte è ormai trascorso**:

| Orizzonte dichiarato | Si può giudicare dopo |
| -------------------- | --------------------- |
| `breve`              | qualche ora           |
| `medio`              | un paio di giorni     |
| `lungo`              | qualche settimana     |

Di norma è una sola analisi, la precedente. Se ne sono maturate diverse insieme,
chiudi almeno quella immediatamente precedente e le altre di orizzonte `breve`:
sono quelle che scadono più in fretta e che, non chiuse subito, diventano
impossibili da giudicare onestamente.

### Come si ricava il verdetto

L'ordine conta, ed è questo:

1. **Rileggi `invalidation` dell'analisi**, senza guardare nient'altro.
2. **Per ogni condizione, cerca il dato** che dice se è scattata o no. Sono
   condizioni scritte apposta per essere verificabili: «XAU/USD sotto i 4.070
   dollari», «il decennale sopra il 4,70%». Serve un numero e una data, non
   un'impressione.
3. **Solo adesso scrivi il verdetto**, che segue meccanicamente:

   | Condizioni scattate | Verdetto     |
   | ------------------- | ------------ |
   | nessuna             | `confermata` |
   | alcune              | `parziale`   |
   | tutte               | `invalidata` |

   Il conteggio è **verificato da un test** (`data.spec.ts`): un verdetto che non
   corrisponde alle condizioni non compila il sito.

Se le informazioni per giudicare non ci sono — nessuna fonte disponibile, troppo
tempo passato — l'esito è `senza-verifica` con `conditions: []`. È un esito
legittimo e va registrato: ometterlo farebbe del registro una raccolta delle
analisi che faceva comodo controllare.

> **Il verso è obbligatorio.** Verdetto prima e condizioni dopo produce sempre
> «parziale», perché conoscendo l'esito si trova sempre il modo di dire che una
> parte aveva ragione. È il singolo errore che rende inutile tutto il registro.

### Che cosa non fare, mai

- **Non toccare l'analisi.** Né il testo, né il bias, né l'invalidazione. Un
  archivio in cui le previsioni si aggiustano dopo non misura più niente.
- **Non inventare condizioni.** Un test controlla che ogni condizione
  ricontrollata sia una di quelle davvero scritte nell'analisi.
- **Non scrivere una `lesson` a ogni esito.** Serve solo quando è cambiato
  qualcosa nel metodo. Una morale per ogni analisi è rumore.

### La forma

```ts
{
  slug: 'oro-estende-il-rialzo-il-canale-e-quello-dei-tassi',
  checkedAt: '2026-08-06T09:10:00+02:00',
  verdict: 'parziale',
  conditions: [
    {
      condition: 'XAU/USD sotto i 4.070 dollari.',
      triggered: true,
      evidence: 'Minimo a 4.058 nella seduta del 5 agosto.',
    },
    // ...tutte le altre, nell'ordine dell'analisi
  ],
  what: 'Che cosa e successo davvero, coi numeri.',
}
```

`conditions` deve contenere **tutte** le voci di `invalidation`, nello stesso
ordine e con lo stesso testo: anche quelle che non sono scattate, perché la parte
che ha retto è informativa quanto quella che ha ceduto.

---

## 4. Contestualizza con il grafo

`contenuti/` è un grafo di conoscenza: le analisi già pubblicate e le note di
metodo in `contenuti/studio/`. Il grafo esiste per essere interrogato prima di
scrivere, non per essere ammirato dopo.

**Il testo che ricevi descrive un momento. Tu devi collocarlo.** Chi scrive
l'analisi grezza ha davanti il grafico di adesso; tu hai davanti tutto quello che
è stato scritto prima e i quadri di metodo con cui si giudica. Sono due cose
diverse, ed è questa la ragione per cui la skill esiste.

### Le tre domande

Interroga il grafo — la skill si chiama `graphify-windows` — e rispondi a queste
tre, in quest'ordine:

```powershell
graphify query "che cosa dicevano le ultime analisi su <strumento e tema>"
graphify query "quale quadro di metodo si applica a <il meccanismo descritto>"
graphify path "<il fatto nuovo>" "<il tema dell'analisi precedente>"
```

1. **Che cosa è già stato detto?** Se il testo ripete una lettura già pubblicata
   senza aggiungere un fatto, la risposta giusta può essere **non pubblicare**
   (vedi sotto).
2. **Quale nota di `studio/` inquadra questo ragionamento?** Vincoli contro
   preferenze, tasso di base, aggiornamento bayesiano, premio di rischio che si
   sgonfia: se una nota si applica, l'analisi la **usa nel testo**, con parole
   proprie e senza citazioni di pagina, e rimanda a `/metodologia` invece che al
   libro da cui la nota è tratta.
3. **Che cosa contraddice questa lettura?** Il grafo è il modo più rapido per
   trovare l'analisi precedente che diceva il contrario. Se c'è, il testo deve
   dirlo: «rispetto al controllo delle 14:30, la direzione cambia perché…».

Se `graphify query` non è disponibile, leggi direttamente i markdown in
`contenuti/analisi/` e `contenuti/studio/`: sono lo stesso contenuto, solo senza
la traversata. Non saltare il passo, fallo a mano.

### Puoi contraddire il testo che ricevi

Questa è la parte che conta. Se il testo grezzo dichiara un bias ribassista e il
contesto dice altro, **la tua conclusione vince**, e il testo va rielaborato di
conseguenza.

Quando succede davvero:

- **Il testo giudica un orizzonte e ne descrive un altro.** Un movimento di
  quindici minuti dichiarato come impostazione di fondo va scritto come `breve`,
  non come `lungo`.
- **La direzione contraddice la catena causale descritta nel testo stesso.** Se
  il testo dice «petrolio giù, rendimenti giù» e conclude ribassista sull'oro, la
  catena e la conclusione non stanno insieme: una delle due è sbagliata, e quasi
  sempre è la conclusione.
- **Il fatto nuovo era già stato prezzato** in un'analisi precedente. Il grafo lo
  dice; il testo grezzo, scritto guardando il grafico, no.
- **Il testo tratta come confermato ciò che è riportato.** Un piano riferito
  dalla stampa non è un ordine di attacco. La distanza fra le due cose è quasi
  sempre la differenza fra rialzista e neutrale-rialzista.

**Quello che non puoi fare** è cambiare la direzione perché ti convince di meno.
Serve una ragione dicibile in una riga, presa dal grafo o dal testo stesso. E la
ragione va **scritta nel resoconto finale**, sempre: se hai cambiato qualcosa che
l'autore aveva dichiarato, deve saperlo.

### Quando la risposta è non pubblicare

Prima di scrivere, una domanda sola:

> **Che cosa c'è qui che l'analisi precedente non diceva già?**

| Risposta                                                   | Che cosa fare                                 |
| ---------------------------------------------------------- | --------------------------------------------- |
| Un dato uscito, una decisione presa, un vincolo che cambia | si pubblica                                   |
| Una smentita o una conferma di qualcosa dato per certo     | si pubblica                                   |
| Il prezzo si è mosso nella direzione già descritta         | **non si pubblica**: si aggiorna l'indicatore |
| Il prezzo si è mosso e basta                               | **non si pubblica**                           |

Ventidue analisi in quattro giorni sono un flusso di aggiornamenti, non un
archivio di giudizi: la coesione di quel gruppo di nodi nel grafo è 0,09, la più
bassa dell'intero corpus. Un archivio si rilegge fra un mese; una diretta no.

Se decidi di non pubblicare, **dillo e spiega perché**, e proponi in alternativa
di aggiornare l'indicatore operativo (passo 7), che non lascia in archivio una
voce che si contraddice con quella di due ore prima.

---

## 5. Decidi le categorie

Il campo è `categories` ed è un **elenco**: un'analisi appartiene a tutte le
categorie di cui parla davvero. L'elenco autorevole è `CATEGORIES` in
`site.config.ts`, e il tipo `CategorySlug` è una union di letterali: uno slug
scritto male **non compila**. Copiali, non scriverli a memoria.

### Le due metà dell'elenco, e perché non sono la stessa cosa

`CategorySlug` è l'unione di due tipi, e la differenza è sostanziale:

| Tipo                     | Che cosa sono                                    | `series` |
| ------------------------ | ------------------------------------------------ | -------- |
| `IndicatorCategorySlug`  | dichiarate dagli indicatori di `calendar.meta.ts` | `true`   |
| `EditorialCategorySlug`  | solo editoriali, nessuno storico dietro           | `false`  |

Usare una categoria con `series: true` porta il lettore **anche allo storico del
dato** dalla scheda dell'indicatore. Usarne una editoriale lo colloca solo in
archivio. Nessuna delle due è migliore: quello che non va è dichiarare la prima
quando l'analisi non parla davvero di quel dato, perché manda chi legge su una
serie che non contiene il numero che ha appena letto.

Un test (`data.spec.ts`) verifica che `series` corrisponda a ciò che il calendario
dichiara davvero: non si può mentire in un verso né nell'altro.

### L'elenco, per famiglia

| Famiglia        | Slug                                                                                                                                                                                                            | Storico |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| aree            | `usa` `europa`                                                                                                                                                                                                  | sì      |
| aree            | `asia` `medio-oriente`                                                                                                                                                                                          | no      |
| banche-centrali | `fed` `bce` `tasso-di-interesse`                                                                                                                                                                                | sì      |
| mercati         | `oro` `petrolio` `valute` `obbligazioni`                                                                                                                                                                        | no      |
| temi            | `correlazioni` `premio-di-rischio` `rotte-e-approvvigionamento` `interventi-valutari` `riserve-auree` `debito-pubblico`                                                                                          | no      |
| lavoro          | `tasso-di-disoccupazione` `richieste-iniziali-sussidi` `nfp`                                                                                                                                                    | sì      |
| lavoro          | `jolts`                                                                                                                                                                                                         | no      |
| prezzi          | `ipc` `variazione-ipc` `ipc-core` `variazione-ipc-core` `pce` `pce-core-annuale` `pce-core-trimestrale` `variazione-pce-core` `variazione-ipp` `variazione-ipp-core`                                            | sì      |
| attivita        | `fiducia-consumatori` `produzione-industriale` `variazione-produzione-industriale` `pil` `pil-annuale` `pil-trimestrale` `variazione-vendite-dettaglio` `vendite-dettaglio-essenziali` `indice-vendite-dettaglio` | sì      |
| attivita        | `ism`                                                                                                                                                                                                           | no      |

### Se la categoria giusta non c'è, aggiungila

**Questa è una regola, non un permesso.** L'elenco editoriale è nato dalle analisi
già pubblicate e continua a crescere con quello che si scrive: quando un'analisi
tratta qualcosa che non ha una categoria, la risposta giusta è **aggiungerne una**,
non ripiegare su quella che le somiglia di più.

Il ripiego costa più di quanto sembri. Era già successo: la tassonomia era stata
disegnata sugli indicatori del calendario, poi le analisi hanno parlato di ISM,
JOLTS, interventi valutari e transito a Hormuz — nessuno dei quali aveva una
categoria — e per diciotto analisi su ventidue è finita per prima un'area. Ogni
pagina prendeva la stessa tinta e ogni scheda annunciava «USA» invece del fatto
di cui parlava.

Come si aggiunge una categoria editoriale:

1. Un letterale in `EditorialCategorySlug` (`article.model.ts`), nella famiglia
   giusta fra `aree`, `mercati`, `temi`, o accanto ai dati fuori calendario.
2. Una voce in `CATEGORIES` (`site.config.ts`) con `series: false`, `icon` presa
   dallo switch di `icon.ts`, `short` corto davvero — finisce in una pastiglia —
   e una `description` che dica **perché quel tema conta per l'oro**, non che cosa
   sia in generale.
3. Se serve una famiglia nuova, aggiungila a `CATEGORY_FAMILIES` **e** dàlle una
   tinta in `styles.scss` (`[data-accent='<famiglia>']`): senza, tutte le sue
   pagine restano sul colore di base senza che nulla segnali l'errore.

Aggiungine **una alla volta e solo quando serve davvero**. Un test rifiuta le
categorie editoriali che nessuna analisi usa: un elenco di buoni propositi non
compila.

E dillo nel resoconto finale: una categoria nuova è una scelta editoriale, non un
dettaglio di implementazione.

### La prima categoria non può essere un'area

**È un test** (`data.spec.ts`), non un consiglio: se la prima categoria appartiene
alla famiglia `aree`, la build fallisce.

La ragione è che la prima categoria fa due cose. Dà la tinta alla pagina — via la
**famiglia**, non la categoria — e sulla scheda d'archivio diventa la riga di
occhiello in maiuscoletto con l'icona. Con un'area davanti, ogni analisi
americana ha la stessa tinta di ogni altra e la scheda annuncia dove è successo
invece di che cosa è successo.

Metti per prima la categoria del **fatto nuovo** che ha generato l'analisi: il
dato uscito, il meccanismo descritto, la decisione presa. Se non riesci a
trovarne una, è il segnale che ne manca una da aggiungere — oppure che l'analisi
non ha un fatto nuovo, e allora vale il passo 4: non pubblicarla.

### Quante, e in che ordine

Componi per strati: **1)** il fatto o il tema, **2)** il mercato di cui parla,
**3)** l'area, **4)** l'istituto o la categoria collegata, se il testo la tratta
davvero.

Tieniti a **tre o quattro**. Sulla scheda si vedono la principale più due `short`
(tre sulla scheda in evidenza) e un «+N» il cui contenuto compare solo nel
`title`: oltre la quarta, le categorie sono invisibili a chi non passa col mouse.
Il minimo è una — con zero il test `data.spec.ts` fallisce.

### L'area va sempre messa, ma non per prima

`tasso-di-interesse` è una sola categoria per **due** banche centrali, e
`tasso-di-disoccupazione`, `ipc`, `variazione-ipc`, `ipc-core`,
`variazione-produzione-industriale` esistono in **entrambe** le aree. Senza `usa`
o `europa` un taglio della BCE è indistinguibile da un FOMC.

Per il Golfo, l'Iran e le rotte del greggio si usa `medio-oriente` e non `asia`:
sono due quadranti diversi e per un po' sono stati confusi.

### Esempi, dalle analisi già pubblicate

| Testo                                                | `categories`                                                 |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| JOLTS più debole delle attese                        | `['jolts', 'usa', 'tasso-di-interesse', 'oro']`               |
| Controllo cross-asset su oro, petrolio e rendimenti  | `['correlazioni', 'oro', 'obbligazioni', 'tasso-di-interesse']` |
| Nave colpita nello Stretto di Hormuz                 | `['rotte-e-approvvigionamento', 'medio-oriente', 'petrolio', 'oro']` |
| Piano di attacchi riportato dalla stampa             | `['premio-di-rischio', 'medio-oriente', 'petrolio', 'oro']`   |
| Intervento coordinato sullo yen                      | `['interventi-valutari', 'valute', 'asia', 'usa']`            |
| Il Tesoro alza il fabbisogno                         | `['debito-pubblico', 'obbligazioni', 'usa', 'medio-oriente']` |
| Reazione al dato NFP di luglio                       | `['nfp', 'usa', 'fed', 'oro']`                                |
| IPC americano sopra le attese                        | `['variazione-ipc', 'usa', 'ipc-core', 'oro']`                |
| Riunione BCE, tassi fermi                            | `['tasso-di-interesse', 'bce', 'europa', 'oro']`              |

### Le coppie che si confondono

Il collegamento fra un'analisi e lo storico di un dato passa **solo** dalla
coincidenza fra `Article.categories` e le `categories` dell'indicatore in
`calendar.meta.ts`. Uno slug plausibile ma sbagliato non dà errore: manda il
lettore su una serie che non contiene il numero che ha appena letto.

| Se il testo parla di…            | Slug                                           | Non confondere con                                                               |
| -------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------- |
| inflazione USA a/a in %          | `variazione-ipc`                               | `ipc`, che negli USA è il **livello** dell'indice in punti                       |
| livello dell'indice IPC USA      | `ipc`                                          | —                                                                                |
| inflazione area euro a/a         | `ipc` **+ `europa`**                           | negli USA lo stesso slug è il livello: qui Eurostat pubblica la variazione annua |
| inflazione area euro m/m         | `variazione-ipc` + `europa`                    | —                                                                                |
| core USA a/a (≈ 2-3%)            | `ipc-core`                                     | `variazione-ipc-core`, che è il m/m                                              |
| core USA m/m (≈ 0,1-0,4%)        | `variazione-ipc-core`                          | —                                                                                |
| core area euro                   | `ipc-core` + `europa`                          | `variazione-ipc-core`: **non esiste** un core mensile euro in calendario         |
| PCE core a/a, l'obiettivo del 2% | `pce-core-annuale`                             | `variazione-pce-core`, che è il m/m                                              |
| PCE core m/m                     | `variazione-pce-core`                          | —                                                                                |
| PCE core che esce col PIL        | `pce-core-trimestrale`                         | —                                                                                |
| PCE headline                     | `pce`                                          | —                                                                                |
| PIL **americano**                | `pil` + `usa`                                  | `pil-trimestrale`, che è **europeo** benché il dato USA sia trimestrale          |
| PIL area euro a/a                | `pil-annuale` + `europa`                       | —                                                                                |
| PIL area euro t/t                | `pil-trimestrale` + `europa`                   | —                                                                                |
| consumi USA                      | `variazione-vendite-dettaglio`                 | `indice-vendite-dettaglio`, che è **solo** area euro                             |
| consumi USA al netto delle auto  | `vendite-dettaglio-essenziali`                 | —                                                                                |
| consumi area euro                | `indice-vendite-dettaglio`                     | —                                                                                |
| produzione industriale euro      | `variazione-produzione-industriale` + `europa` | `produzione-industriale`, che esiste **solo** per gli USA                        |
| produzione industriale USA m/m   | `variazione-produzione-industriale`            | `produzione-industriale`, che è l'a/a                                            |
| PPI americano mensile            | `variazione-ipp` / `variazione-ipp-core`       | non esiste alcun IPP europeo in calendario                                       |

Il PIL americano è pubblicato **in ragione d'anno**, quello dell'area euro no:
non confrontare i due numeri come se fossero omogenei.

### `fed` e `bce` non agganciano quasi niente

Sono dichiarate solo da sette indicatori in tutto (`fed` su tassi, disoccupazione,
PCE e PCE core annuale; `bce` su tassi, IPC e IPC core). Taggare `fed` su
un'analisi NFP **non** la fa comparire fra gli argomenti collegati dell'NFP.
Usale per quello che sono — riunioni, verbali, discorsi, proiezioni — non per
agganciare una serie.

Non forzare una categoria di indicatore quando il testo non tratta quel dato: un
accostamento sbagliato si nota subito, e con `series: true` promette anche uno
storico che non c'entra.

---

## 6. Scrivi l'articolo

**Un'analisi, un file.** Il nome del file è lo slug, ed è lo stesso nome
dell'indirizzo della pagina e della copia markdown: da un solo nome si trovano
tutti e tre.

Servono due modifiche, in quest'ordine:

1. **Crea `src/app/core/data/articles/<slug>.ts`**, con questa intestazione e poi
   `export const <nomeCamelCase>: Article = { … }`:

   ```ts
   import type { Article } from '../../models/article.model';
   import { AUTHOR } from '../author';
   ```

   L'import del tipo va con `import type`, quello di `AUTHOR` no: il primo sparisce
   in compilazione, il secondo è un valore vero. `AUTHOR` **non** è più dichiarato
   nel file dell'archivio, sta in `src/app/core/data/author.ts` e da lì si importa.

2. **Aggiungi due righe a `src/app/core/data/articles.data.ts`**: l'import del
   nuovo file, e il nome **in testa** all'array `ARTICLES`. L'ordinamento vero
   avviene per `publishedAt`, ma l'elenco si tiene dal più recente. In quel file
   non si scrive testo: solo import e array.

Con più analisi ripeti per ciascuna e tieni l'array `[ultima, penultima, …]`,
con gli import nello stesso ordine.

Gli **slug** devono essere unici fra tutti gli articoli (`data.spec.ts:14-17`) —
e con un file per slug un doppione si vede prima, perché sovrascriverebbe un file
esistente: se il nome che stai per usare c'è già, cambia lo slug invece di
sovrascrivere. Le **ancore** devono essere uniche solo all'interno dello stesso
articolo (`:38-46`), perché ogni articolo è una pagina a sé.

### Campi obbligatori

| Campo                 | Regola                                                                                                                                                                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slug`                | Dal titolo: minuscolo, senza accenti né apostrofi, parole separate da trattini, max ~60 caratteri. Unico. **È anche il nome del file `.ts` e del `.md`**: scegline uno che si legga da solo.                                            |
| `categories`          | L'elenco deciso al passo 5, con la principale per prima.                                                                                                                                                                                |
| `title`               | Se il testo ne ha uno usabile, riprendilo sistemando maiuscole e refusi. Altrimenti scrivilo: sintetico, in italiano, senza punto finale, senza maiuscole enfatiche.                                                                    |
| `kicker`              | `Tema · Sottotema`, per esempio `Correlazioni · Controllo cross-asset`. **Non è decorativo**: è l'ultima briciola di pane della barra superiore e il testo con cui l'indicatore operativo cita le sue fonti. Tienilo corto e specifico. |
| `dek`                 | Due o tre righe sul fatto nuovo e perché conta. Non ripetere il titolo.                                                                                                                                                                 |
| `publishedAt`         | ISO con fuso, dal passo 2. **Mai nel futuro**, mai prima dell'ultimo articolo pubblicato.                                                                                                                                               |
| `author`              | La costante `AUTHOR`, importata da `../author`. Non scrivere mai la stringa a mano.                                                                                                                                                     |
| `readingMinutes`      | Circa 200 parole al minuto, arrotondato per eccesso.                                                                                                                                                                                    |
| `tags`, `instruments` | Dal testo. `instruments` compare due volte nel dettaglio: pastiglie in testata e riquadro laterale «Strumenti citati».                                                                                                                  |
| `horizons`            | `breve` per letture intraday, `breve`+`medio` per dati macro, `lungo` solo se il testo parla davvero di anni.                                                                                                                           |
| `certainty`           | `bassa`/`media`/`alta`: quanto è solido il **fondamento fattuale**, non l'esito atteso. Vedi sotto: non è un campo da riempire per inerzia.                                                                                             |
| `takeaways`           | 4-5 punti, uno per fatto, nell'ordine del testo. **Non lasciarlo vuoto**: `pages.spec.ts:85` pretende la stringa «In sintesi», che è resa solo se ci sono takeaway.                                                                     |
| `sources`             | Le testate e gli enti citati nel testo, in ordine di importanza. Vedi sotto.                                                                                                                                                            |
| `blocks`              | Vedi sotto.                                                                                                                                                                                                                             |

### Campi facoltativi

| Campo           | Effetto se lo metti                                                                                                                                                                    | Effetto se lo ometti                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `bias`          | Pastiglia in testata, sezione «Regime descritto», badge sulla scheda, colonna nell'elenco di categoria — **e** la scheda in «Impostazione descritta al momento» della pagina Orizzonti | L'analisi non compare mai in Orizzonti |
| `certaintyNote` | Sezione con il misuratore a tre tacche                                                                                                                                                 | La sezione sparisce                    |
| `invalidation`  | Sezione «Cosa invaliderebbe questa lettura»                                                                                                                                            | La sezione sparisce                    |
| `nextEvent`     | Riquadro del catalizzatore — **e** vincola la durata dell'indicatore (passo 7)                                                                                                         | Nessun vincolo                         |
| `updatedAt`     | **Niente.** Nessun template lo legge: è un campo morto                                                                                                                                 | —                                      |
| `featured`      | **Niente.** La scheda grande della panoramica è semplicemente l'articolo più recente                                                                                                   | —                                      |

Metti `bias` ogni volta che il testo dichiara un'inclinazione: `direction` fra
`rialzista`, `neutrale-rialzista`, `neutrale`, `neutrale-ribassista`,
`ribassista`; `strength` fra `bassa`, `media`, `alta`; `regime` è una riga che
descrive il contesto; `horizon` è obbligatorio e va scelto con cura.

### L'orizzonte del bias

`bias.horizon` dice **su quale arco di tempo vale la direzione**, ed è il campo
con cui la panoramica separa le sue tre letture.

| Valore  | Arco di tempo         | Tipico di                                          |
| ------- | --------------------- | -------------------------------------------------- |
| `breve` | prossimi minuti o ore | controlli cross-asset, reazioni a una notizia      |
| `medio` | prossimi giorni       | dati macro pubblicati, prese di posizione ufficiali |
| `lungo` | prossime settimane    | riserve, debito, cambi di regime monetario         |

Non è lo stesso di `horizons`, che dice **su quali orizzonti il testo ragiona**:
un'analisi può ragionare su `['breve', 'medio']` e dichiarare un bias `breve`.

Sbagliarlo ha un effetto visibile: la panoramica mostra al massimo una lettura
per orizzonte, e un bias intraday marcato `lungo` va a occupare il posto della
lettura di fondo, scacciandone una che valeva settimane.

Nel dubbio, `breve`. La maggior parte delle analisi descrive quello che sta
succedendo adesso, anche quando usa parole da manuale.

### Le fonti

`sources` è l'elenco di chi ha detto le cose che il testo riporta: `outlet` è
obbligatorio, `title`, `url` e `at` sono facoltativi ma vanno messi quando li hai.
Compare nella colonna laterale sotto «Fonti consultate».

Mettici **solo le testate e gli enti che il testo nomina davvero**. Se il testo
grezzo dice «secondo Reuters», la voce è Reuters; se non attribuisce niente,
`sources` si omette. Non dedurre la fonte da quello che sembra probabile: una
fonte inventata è peggio di una fonte assente, perché sembra verificabile.

Se `invalidation` non è dichiarata esplicitamente, ricavala dalla logica del
testo senza inventare fatti nuovi. **Scrivila sempre**: è l'elenco che il passo 3
tornerà a ricontrollare, e un'analisi senza invalidazione non entrerà mai nel
registro degli esiti se non come `senza-verifica`.

Ogni condizione va scritta in modo **verificabile con un numero**. «XAU/USD sotto
i 4.070 dollari» si controlla; «se il quadro peggiora» no, e fra una settimana
non vorrà dire niente.

### La calibrazione di `certainty`

Su ventidue analisi consecutive il campo valeva `alta` tredici volte, `media`
nove, `bassa` mai. Un campo che assume due valori su tre non porta informazione:
tanto vale non averlo.

Regole, ora:

- `alta` **solo** se i numeri citati vengono da fonti dichiarate e i fatti sono
  avvenuti. Un dato pubblicato, una decisione presa, un prezzo osservato.
- `media` se il fatto è avvenuto ma la lettura poggia su una catena di
  conseguenze, oppure se le fonti concordano solo in parte.
- `bassa` quando il fondamento è una notizia riportata e non confermata, una
  smentita non verificata, un piano di cui si conosce l'esistenza ma non l'esito.
  **Esiste e va usata**: è il caso di tutte le analisi che partono da «secondo
  fonti».

Se le ultime analisi hanno tutte `alta`, la prossima non può averla per inerzia:
rileggi il fondamento e chiediti che cosa, di preciso, è già successo. Il
registro degli esiti confronta questa dichiarazione con come è andata, e con un
solo valore quel confronto non misura niente.

### I dieci blocchi

L'indice laterale dell'articolo nasce dai blocchi `heading`: senza heading non
c'è indice.

| Blocco      | Com'è reso oggi                                                              | Quando usarlo                                    |
| ----------- | ---------------------------------------------------------------------------- | ------------------------------------------------ |
| `paragraph` | Prosa con grazie; il primo va con `lead: true`                               | Il corpo del discorso                            |
| `heading`   | Titolo con `anchor` esplicita                                                | Ogni volta che cambia argomento: genera l'indice |
| `list`      | Elenco con trattini                                                          | Enumerazioni senza segno                         |
| `callout`   | Riquadro **piatto**, filetto di 2px a sinistra e titolo nel colore del tono  | Un inciso che deve staccarsi                     |
| `stats`     | **Tabella** a due colonne: etichetta a sinistra, valore incolonnato a destra | Numeri confrontabili                             |
| `scenarios` | **Elenco di definizioni** a righe: etichetta a sinistra, testo a destra      | Lettura per singolo mercato o ipotesi            |
| `balance`   | Due colonne contrapposte                                                     | Favorevoli / contrari, conferme / contraddizioni |
| `timeline`  | Linea sottile con pallini                                                    | Sequenza cronologica                             |
| `quote`     | Filetto a sinistra, corsivo con grazie                                       | Citazione                                        |
| `note`      | Riquadro piatto con icona «info»                                             | Nota. **Può stare ovunque**, non solo in fondo   |

Tre cose che il rifacimento dell'interfaccia ha cambiato e che cambiano il
consiglio d'uso:

- **`stats` è una tabella, non più una griglia di piastrelle.** Usa etichette
  **corte**: l'etichetta va a capo mentre il numero resta su una riga sola. Il
  dettaglio va nel campo `note` dello `StatItem`, che scende su riga propria.
- **`scenarios` non sono più schede affiancate**, sono righe. Vanno bene testi
  lunghi.
- **`callout` non ha più il fondo colorato**: il tono si vede solo nel filetto e
  nel titolo. Non contarci per un contrasto forte.

### I toni, e due trappole

`Tone` vale `gold` | `bull` | `bear` | `warn` | `neutral`.

**`gold` dentro un'analisi non è oro.** I blocchi usano `--accent`, che è la
tinta della **famiglia** della categoria principale: su un'analisi NFP un callout
`gold` esce verde salvia, su una BCE prugna. Se vuoi il colore dell'oro, non c'è:
usa `warn`, `bull` o `bear`, che hanno tinte fisse. In `markets.data.ts`, invece,
`gold` è davvero oro, perché la panoramica non ha accento di sezione.

**Il tono è ignorato in due blocchi su dieci.** `ListBlock.tone` e
`TimelineItem.tone` esistono nel modello ma nessun template li legge: scriverli
compila e non produce nulla. Per un elenco con un segno usa `callout` (che ha
`items`) o `balance`; per i numeri, `stats`.

### Regole editoriali

**Da fare**

- Correggere refusi, punteggiatura, maiuscole e titoli troncati.
- Rendere impersonale ciò che si rivolge all'autore: «il tuo grafico» → «il
  grafico», «la tua regola» → «la regola seguita».
- Uniformare i numeri allo stile del sito: `4.078`, `3,3%`, `≈ 92 $`.
- Riorganizzare l'ordine dei blocchi se migliora la lettura.
- Aggiungere un `note` quando il testo cita livelli di prezzo, chiarendo che sono
  riferimenti per rendere verificabile il ragionamento e non obiettivi affidabili.
- Mettere una `caption` sui blocchi `stats` che ricordi che non sono quotazioni in
  tempo reale.

**Da non fare**

- Inventare dati, percentuali, orari o fatti non presenti nel testo.
- Cambiare la direzione del bias o addolcire una conclusione operativa: il
  giudizio è dell'autore.
- Modificare articoli già pubblicati per farli tornare con l'esito.

### Le avvertenze: non toglierne e non aggiungerne

Questa regola è cambiata, e conta.

Le avvertenze legali sono state **deliberatamente ridotte**: erano dodici riquadri
sparsi più una barra fissa e una modale di primo accesso, e la ripetizione le
rendeva invisibili. Oggi il regime è: il testo integrale in `/avvertenze`, il
riassunto nel piè di pagina, e **una riga sola** in chiusura di ogni analisi,
messa automaticamente da `<app-risk-notice />`.

Quindi:

- **Non toglierle** dove ci sono.
- **Non aggiungerne** dentro il testo di un'analisi «per sicurezza». Il piede
  dell'articolo ce l'ha già.
- **Non scrivere mai** le frasi «Non costituisce consulenza finanziaria» né «Non
  è consulenza finanziaria» dentro il corpo di un'analisi: sono le stringhe
  **contate** dal gruppo di test «le avvertenze non si ripetono» in
  `pages.spec.ts`. Una di troppo e il test fallisce con `expected 2 to be 1`.

Il vincolo verificato è: pagine di dati e di indice **zero**, pagine di giudizio
(analisi, orizzonti, metodologia) **esattamente una**, panoramica una sola e
contestuale (quella dell'indicatore operativo).

---

## 7. Aggiorna l'indicatore operativo

`MARKET_SIGNAL` in `signal.data.ts` è la sintesi delle **ultime pubblicazioni**,
quali che siano le loro categorie. Dice tre cose, una per orizzonte, e la data e
l'ora in cui è stata scritta.

L'aggiornamento non è facoltativo: se lo salti, la panoramica continua a mostrare
la lettura precedente con la sua data vecchia, e un test lo impone (vedi sotto).

Se hai pubblicato più analisi in una volta, l'indicatore riflette **solo la più
recente**: è quella che descrive il mercato adesso. Le precedenti possono
comparire nello `stance` e in `sources`, mai nella direzione.

### Non c'è più una scadenza

C'era `validityMinutes`: la lettura si dichiarava valida un tot di minuti e allo
scadere la panoramica passava da sola a «in attesa di notizie», anche quando il
quadro non era cambiato di una virgola.

È stato tolto, e la ragione conta anche per come scrivi il resto. Nessuno sa
davvero se una lettura vale novanta minuti o duecento: quel numero era una
precisione che il sito non poteva mantenere, e per giunta era visibile al
lettore. Al suo posto c'è **la data e l'ora dell'ultimo aggiornamento, scritta
grande**. Quanto sia vecchia, e se quello che dice regga ancora, lo decide chi
legge — che è l'unico ad avere davanti il mercato di adesso.

Conseguenza pratica: non devi più scegliere una durata, ma devi **scrivere ogni
lettura in modo che invecchi bene**. Una riga che dice «l'oro sale» invecchia
male; una che dice «l'oro sale perché i rendimenti scendono, e smette se
risalgono» resta leggibile anche il giorno dopo.

### I campi

| Campo                          | Regola                                                                                                                                                                                                                        |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `updatedAt`                    | **Identico come stringa** al `publishedAt` dell'analisi più recente. Il test usa `toBe`, non un confronto di istanti.                                                                                                          |
| `asset`                        | Lo strumento, di norma `XAU/USD`.                                                                                                                                                                                             |
| `readings`                     | **Tre**, nell'ordine `breve`, `medio`, `lungo`. È un test: due letture invece di tre non si notano a video ma tolgono proprio quella di fondo.                                                                                 |
| `headline`                     | Una riga: il fatto che conta adesso.                                                                                                                                                                                          |
| `stance`                       | Due o tre righe che tengono insieme le ultime letture.                                                                                                                                                                        |
| `favours` / `avoid`            | **Entrambi non vuoti**, è un test. Anche quando il testo dice di restare fuori: `favours` deve dirlo esplicitamente.                                                                                                           |
| `confirming` / `contradicting` | Etichette brevissime con il valore: `DXY debole ≈ 100,65`.                                                                                                                                                                     |
| `sources`                      | Fino a tre slug, dal più recente, possibilmente di categorie diverse. Devono esistere in archivio; sono i nomi dei file sotto `articles/`. A video compare il **`kicker`** dell'articolo, non il titolo.                        |

Ogni voce di `readings` ha cinque campi, tutti obbligatori:

| Campo          | Regola                                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| `horizon`      | `breve`, `medio` o `lungo`.                                                                                |
| `direction`    | Una delle cinque della scala.                                                                              |
| `strength`     | `bassa`, `media`, `alta`.                                                                                  |
| `regime`       | Una riga sul **meccanismo**, non sul prezzo. Più di 10 caratteri, è un test.                               |
| `invalidation` | Che cosa fa decadere **questa** lettura. Più di 10 caratteri, è un test: una frase con dentro un riferimento verificabile. |

### Le tre letture non devono concordare

È il punto di tutta la struttura. L'oro può salire nelle prossime ore e restare
fermo nel mese: prima quelle due cose si escludevano a vicenda e bisognava
sceglierne una, adesso stanno su due righe diverse.

| Orizzonte | Da dove viene                                                                                      |
| --------- | -------------------------------------------------------------------------------------------------- |
| `breve`   | Il bias dell'analisi appena pubblicata, se ha `horizon: 'breve'`.                                  |
| `medio`   | La somma delle ultime sedute: dati usciti, decisioni prese, tenuta della catena causale descritta. |
| `lungo`   | Quello che cambia lentamente: riserve, debito, rendimenti reali, regime monetario.                 |

Le due letture più lunghe **non si riscrivono a ogni pubblicazione**. Se nulla è
cambiato sul loro orizzonte, si lasciano come sono: cambiare la lettura di fondo
perché è cambiato il prezzo di stamattina è esattamente l'errore che la
separazione serve a evitare.

Aggiorna `medio` quando esce un dato o viene presa una decisione. Aggiorna
`lungo` quando cambia qualcosa di strutturale — una riunione, una revisione delle
riserve, un movimento duraturo della parte lunga della curva — cioè raramente.

**Se cambi una delle due, dillo nel resoconto finale e spiega che cosa è
cambiato.** È una modifica che il lettore non vede come tale e che vale più di
qualunque aggiornamento intraday.

### Quando aggiornare l'indicatore senza pubblicare

Se il passo 4 ha deciso di **non pubblicare** — il prezzo si è mosso nella
direzione già descritta, nessun fatto nuovo — l'indicatore si aggiorna lo stesso:
è il modo giusto di dire «il quadro regge» senza lasciare in archivio una voce
che si contraddice con quella di due ore prima.

In quel caso `updatedAt` **resta** quello dell'ultima analisi pubblicata: è un
test, e ha senso, perché è quel testo che l'indicatore riassume. Si aggiornano
`confirming`, `contradicting` e semmai la forza di una lettura.

---

## 8. Aggiorna i riferimenti di mercato

In `markets.data.ts` allinea `MARKET_REFERENCES` e `MARKET_STRIP` ai valori
citati nelle analisi più recenti.

**I due array non si distinguono più a video.** La panoramica li concatena in una
griglia sola (`home.ts:45`): la striscia di pastiglie che stava sotto ripeteva gli
stessi valori ed è stata tolta. Restano due costanti solo come sorgenti separate,
e conviene mettere in `MARKET_REFERENCES` ciò che conta di più, perché viene prima.

Ogni voce ha sette campi obbligatori:

- `symbol` — **deve essere unico fra i due array**: la griglia traccia per symbol.
- `name` — obbligatorio nel tipo ma **non reso da nessuna parte**. Valorizzalo lo
  stesso.
- `value`, `change` — `change` si vede solo se non è vuoto.
- `tone` — `gold` per l'oro, `bull` favorevole, `bear` contrario, `warn` ambiguo.
  **`neutral` non ha alcuna regola di stile**: il valore resta del colore di base.
- `icon` — deve esistere nello switch di `icon.ts`, altrimenti esce un cerchio
  vuoto senza alcun errore. Quelle disponibili: `alert archive arrow-down
arrow-flat arrow-right arrow-up bank basket bolt book calendar chart check
chevron-down chevron-right clock close coin compass dashboard dollar download
euro factory flow gauge globe horizon info layers link lock mail map menu
percent print scale search shield spark target users`.
- `note` — la riga sotto il numero.

I due array possono restare **vuoti**: con entrambi vuoti la panoramica omette
del tutto la sezione «Quadro sintetico», titolo e nota compresi. Popolali solo
con valori che le analisi appena pubblicate citano davvero: un numero rimasto lì
da una pubblicazione precedente è una quotazione senza fonte sotto l'etichetta
«valori citati nelle analisi».

**Non confonderli con il calendario economico.** Sono riferimenti editoriali
scritti a mano; il calendario è generato dal passo 1.

---

## 9. Passa in rassegna il resto del sito

Quasi tutto è automatico e non va toccato: l'ordine dell'archivio, i conteggi
della pagina Argomenti, la ricerca, gli articoli correlati, i titoli delle pagine,
l'indice laterale. Non esiste una sitemap né un elenco di pagine da registrare.

Restano tre cose da valutare a ogni pubblicazione:

**Il glossario** (`glossary.data.ts`). Se l'analisi introduce un termine tecnico
che non c'è, aggiungilo: quattro campi obbligatori — `term`, `letter`,
`definition`, `why` — più `related` facoltativo.

Il collegamento è **automatico**: il dettaglio di ogni analisi cerca i termini
del glossario nel testo effettivo — titolo, sommario, corpo, argomenti — e li
mostra sotto «Termini di questa analisi», con il rimando alla definizione. Una
voce aggiunta oggi compare da sola in tutte le analisi che la citano, anche in
quelle vecchie.

Resta una scelta editoriale: falla quando il termine è centrale per capire il
testo, non per ogni sigla. Le voci sono rese **nell'ordine di dichiarazione**,
non alfabetico.

**La pagina Orizzonti** non richiede più niente. `currentReadings` mostra al
massimo **una lettura per orizzonte**, la più recente: prima le prendeva tutte,
e ventidue impostazioni di giorni diversi comparivano insieme sotto un titolo che
diceva «al momento». Le altre restano in archivio col loro esito. Non c'è nulla
da fare a mano, ma se aggiungi un bias `lungo` sappi che scaccia da lì quello
precedente — è voluto.

**Le note dei documenti legali**. `legal.data.ts` ha un `updatedAt` scritto a mano
per ciascuno dei tre documenti. Non dipende dalle pubblicazioni: toccalo solo se
hai davvero modificato quel testo.

---

## 10. Genera i markdown e aggiorna il grafo

A ogni analisi corrisponde un `contenuti/analisi/<slug>.md`: la stessa analisi in
markdown, con i metadati nel frontmatter e poi il testo. Non serve al sito — non
viene compilato, non finisce in `dist/`, nessuna pagina lo apre — ma è il formato
con cui i testi si lavorano fuori di qui, per esempio per costruirci un grafo.

**Non si scrive a mano.** Si genera dall'archivio, in un comando:

```powershell
npm run analisi
```

Scrive un file per ogni analisi, riscrive quelli cambiati e cancella quelli
rimasti senza analisi corrispondente. Finisce con una riga di questa forma:

```
contenuti/analisi/: 23 markdown (1 nuovi, 22 invariati).
  scritto <slug>.md
```

Guarda quel conteggio: dopo aver pubblicato una analisi devi vedere **un nuovo
file per analisi pubblicata** e tutti gli altri invariati. Se compaiono
«aggiornati» che non ti aspetti, hai toccato un'analisi già pubblicata — torna
indietro e guarda che cosa (modificare articoli già pubblicati è vietato dalle
regole editoriali del passo 6).

Se generi prima di aver finito di scrivere, rilancialo: è idempotente e costa
meno di un secondo.

Il markdown contiene anche **l'esito**, quando c'è: registrare un esito al passo 3
rende vecchio il markdown esattamente come lo renderebbe vecchio una correzione
di refuso, e va rigenerato allo stesso modo.

### Poi aggiorna il grafo

```
/graphify ./contenuti --update
```

`--update` riestrae **solo i file nuovi o cambiati**, quindi con una analisi in
più costa pochi secondi invece dei dieci minuti di una ricostruzione completa.

Va fatto **dopo** aver generato i markdown, non prima: il grafo legge
`contenuti/`, e su markdown non ancora rigenerati riestrarrebbe la versione
vecchia dell'analisi.

Serve al passo 4 della **prossima** pubblicazione: se non lo aggiorni, la volta
dopo il grafo non conosce l'analisi che hai appena scritto e la contestualizzazione
gira su un archivio vecchio di un giorno. È l'unico passo di questa procedura il
cui costo di essere saltato si paga la volta successiva anziché subito, ed è per
questo che è facile dimenticarlo.

`graphify-out/` è escluso da git: non compare in `git status` e non va aggiunto
al commit.

### Perché non lo si scrive a mano

Scriverlo a mano vorrebbe dire scrivere due volte lo stesso testo, e la seconda
copia diverge alla prima correzione di refuso. Generandolo, il markdown non può
contraddire l'articolo — e infatti non gli è permesso: **due controlli separati
falliscono** se i due non corrispondono.

| Controllo                           | Quando scatta                                       |
| ----------------------------------- | --------------------------------------------------- |
| `npm run build`                     | prima di `ng build`, quindi prima di ogni deploy    |
| `src/app/core/data/analisi.spec.ts` | a ogni `npm test`, sull'impronta di ciascun file    |

Entrambi vedono anche i file di troppo: se un'analisi viene tolta dall'archivio
senza rigenerare, il suo markdown orfano fa fallire il controllo.

Il messaggio che li fa scattare è sempre lo stesso — «i markdown non
corrispondono all'archivio» — e la risposta è sempre `npm run analisi`.

---

## 11. Formatta, compila, prova

**Questo passo non si salta mai** e va sempre eseguito prima del commit, anche
quando la modifica sembra minima. L'ordine è questo:

```powershell
npx prettier --write "src/app/core/data/**/*.ts"
npm run build
npm test -- --no-watch
```

> **Il glob ha due asterischi.** Con `src/app/core/data/*.ts` i file delle
> singole analisi, che stanno in `data/articles/`, non verrebbero formattati: il
> commit passerebbe lo stesso e la formattazione resterebbe sbagliata finché
> qualcuno non la nota.

Tutti e tre devono passare, e **devi averne visto l'esito** prima di toccare
`git`. Se uno solo fallisce, niente commit e niente push: correggi e ripeti.

Con più analisi si esegue una volta sola, alla fine.

### Perché prettier deve comprendere i file generati

Il glob include anche `calendar.series.ts` e
`calendar.events.ts`, ed **è giusto così**. Lo script del calendario emette
doppi apici e indentazione a 4 spazi, mentre il repository è a apici singoli e 6
spazi: senza questo passaggio il commit conterrebbe **settemila righe** di sola
riformattazione. Passato prettier, i due file coincidono esattamente con quelli
committati, a meno delle due righe del timestamp. Misurato: 7 281 righe di diff
prima, 2 dopo.

> **Falso allarme da fine riga.** `core.autocrlf` è `true` e non c'è
> `.gitattributes`: un file appena ripreso con `git checkout --` torna nel
> disco con CRLF e `prettier --check` lo segnala, anche se nessuno l'ha
> toccato. È cosmetico — `git diff` non mostra nulla, perché git normalizza in
> fase di commit. Non inseguirlo e non riformattare mezzo repository per farlo
> tacere.

### Che cosa intercettano i test

Sei file, 75 test. La CI (`.github/workflows/pages.yml`) esegue **prima i test
e poi la build**: un test rosso non pubblica nulla online.

Quelli che riguardano ciò che hai appena scritto, per argomento:

| Che cosa lo fa fallire                                                     | Dove                |
| --------------------------------------------------------------------------- | ------------------- |
| due articoli con lo stesso slug                                             | `data.spec.ts`      |
| `publishedAt` nel futuro, anche di un minuto                                | `data.spec.ts`      |
| categoria inesistente, o articolo con zero categorie                        | `data.spec.ts`      |
| **prima categoria di famiglia `aree`** — vedi passo 5                       | `data.spec.ts`      |
| **`bias` senza `horizon`** valido                                           | `data.spec.ts`      |
| due `anchor` uguali nello stesso articolo                                   | `data.spec.ts`      |
| **`series` che non corrisponde a quello che il calendario dichiara**        | `data.spec.ts`      |
| **categoria editoriale che nessuna analisi usa**                            | `data.spec.ts`      |
| `updatedAt` dell'indicatore nel futuro, o diverso dall'ultima analisi       | `data.spec.ts`      |
| `sources` dell'indicatore che punta a uno slug inesistente                  | `data.spec.ts`      |
| **`readings` che non sono tre, in ordine `breve` `medio` `lungo`**          | `data.spec.ts`      |
| **`regime` o `invalidation` di una lettura ≤ 10 caratteri**                 | `data.spec.ts`      |
| `favours` o `avoid` vuoti                                                   | `data.spec.ts`      |
| **esito che giudica uno slug inesistente, o lo stesso due volte**           | `data.spec.ts`      |
| **esito che ricontrolla una condizione mai dichiarata dall'analisi**        | `data.spec.ts`      |
| **esito che salta una condizione, senza essere `senza-verifica`**           | `data.spec.ts`      |
| **verdetto che non corrisponde alle condizioni scattate**                   | `data.spec.ts`      |
| **condizione ricontrollata senza `evidence`**                               | `data.spec.ts`      |
| meno di 50 diffusioni per un indicatore (calendario scaricato male)         | `data.spec.ts`      |
| una prossima uscita già passata, o manca una riunione di banca centrale     | `data.spec.ts`      |
| articolo senza `takeaways`: manca «In sintesi»                              | `pages.spec.ts`     |
| un'avvertenza aggiunta o tolta                                              | `pages.spec.ts`     |
| markdown mancante, di troppo o vecchio: manca `npm run analisi`             | `analisi.spec.ts`   |

In grassetto i controlli aggiunti con gli esiti, i tre orizzonti e la tassonomia
editoriale: sono quelli che è più facile far scattare senza accorgersene.

Due note sui comandi:

- Usa **`npm run build`**, non `ng build`. Lo script incatena tre cose: il
  controllo dei markdown del passo 10, `ng build`, e `scripts/prepare-pages.mjs`,
  che aggiunge `404.html` (necessario perché GitHub Pages gestisca gli indirizzi
  diretti come `/analisi/uno-slug`), `.nojekyll` e la copia del `CNAME`. Comincia
  quindi stampando `contenuti/analisi/: N markdown allineati all'archivio.` e
  finisce con `Pronto per GitHub Pages: …\dist\vitanera\browser (32 elementi, 404.html e .nojekyll inclusi).`
  Se si ferma sulla prima riga, hai saltato `npm run analisi`.
- Usa **`npm test -- --no-watch`**: senza quel flag il comando resta in ascolto.

La build locale **non finisce online**: online ci va quella che il workflow rifà
dopo il push. Serve a impedire di pubblicare dati rotti, non a caricare i file.

---

## 12. Commit e push

Solo a build e test superati. Controlla prima che cosa stai per includere:

```powershell
git status --short
```

| Stato | File                                                          |
| ----- | ------------------------------------------------------------- |
| `??`  | `src/app/core/data/articles/<slug>.ts`, uno per analisi       |
| `??`  | `contenuti/analisi/<slug>.md`, uno per analisi                |
| `M`   | `articles.data.ts` — import e voce nell'array                 |
| `M`   | `outcomes.data.ts` — gli esiti chiusi al passo 3              |
| `M`   | `contenuti/analisi/<slug>.md` delle analisi di cui hai chiuso l'esito |
| `M`   | `signal.data.ts`, `markets.data.ts`                           |
| `M`   | `calendar.series.ts`, `calendar.events.ts`                    |
| `M`   | `article.model.ts`, `site.config.ts`, `styles.scss`, solo se hai aggiunto una categoria |
| `M`   | `glossary.data.ts`, solo se hai aggiunto una voce             |

I nuovi file sono **due per analisi** e vanno in coppia: un `.ts` senza il suo
`.md` significa che hai saltato `npm run analisi`, e in quel caso la build
sarebbe già fallita.

Non deve comparire `graphify-out/`: è escluso da git. Se compare altro, guarda
che cos'è prima di aggiungerlo.

```powershell
git add -A
git commit -m @'
Nuova analisi: <titolo>

- <categoria principale>: sintesi in una riga.
- Esito di <slug precedente>: <verdetto>, <N> condizioni su <M> scattate.
- Indicatore aggiornato: <direzione intraday e messaggio>.
- Riferimenti di mercato allineati ai valori citati.
- Calendario economico rigenerato: <N> diffusioni, <M> appuntamenti futuri.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>
'@
git push origin master
```

Con più analisi il commit resta uno solo, con la prima riga al plurale e un punto
elenco per articolo.

Nel messaggio evita apostrofi tipografici e caratteri accentati dentro
l'here-string: passano dalla shell senza problemi solo in forma semplice.

Se il push viene rifiutato perché il remoto è avanti:

```powershell
git pull --rebase origin master
git push origin master
```

**Mai** `git push --force`.

Il push su `master` attiva il workflow, che ricompila e pubblica: non serve altro.

---

## 13. Se online non si vede l'aggiornamento

Il workflow impiega uno o due minuti. Se dopo il push il sito sembra fermo,
verifica **che cosa sta davvero servendo il dominio**:

```powershell
$idx = (Invoke-WebRequest -Uri "https://vitanera.it/" -UseBasicParsing).Content
[regex]::Matches($idx, '(?:chunk|main)-[A-Z0-9]+\.js') | ForEach-Object { $_.Value } | Sort-Object -Unique
```

- **Gli hash coincidono con l'ultima build locale** → il sito è aggiornato e
  quello che si vede è cache: ricaricamento forzato.
- **La pagina mostra il README del repository** → non è un problema di dati. Su
  GitHub, _Settings → Pages → Build and deployment → Source_ deve essere
  **GitHub Actions**. Finché resta su _Deploy from a branch_, il workflow compila
  ma la pubblicazione non arriva mai online.
- **Gli hash sono vecchi** → il workflow è fallito o non è partito. Guarda
  _Actions_ sul repository.

Riporta all'utente quale dei tre casi è, senza rifare build o commit inutili.

---

## 14. Riferisci

Chiudi dicendo, in poche righe:

- **Titolo e categorie scelte**, con mezza riga sul perché della principale, e
  se hai **aggiunto una categoria nuova**, quale e perché mancava.
- **Orario di pubblicazione** e **orizzonte del bias**, con mezza riga sul perché
  quell'orizzonte e non un altro.
- **I due file creati**, con il loro slug: `articles/<slug>.ts` e
  `contenuti/analisi/<slug>.md`.
- **Che cosa ha detto il grafo**: quale analisi precedente hai trovato, quale
  nota di `studio/` hai applicato, e se hai **cambiato qualcosa rispetto al testo
  ricevuto** — direzione, orizzonte, forza — con la ragione. Se non hai cambiato
  niente, dillo lo stesso: significa che il contesto conferma.
- **Gli esiti chiusi**: quale analisi, quale verdetto, quante condizioni scattate
  su quante, e il numero che lo dimostra.
- **Come è cambiato l'indicatore**: la direzione per ciascuno dei tre orizzonti,
  e quali delle due letture più lunghe hai toccato — se ne hai toccata una,
  perché.
- **Che cosa hai cambiato del testo dell'autore**: refusi, riformulazioni, tagli.
- **L'esito della rigenerazione del calendario**: quante diffusioni e quanti
  appuntamenti futuri, e se il diff conteneva dati nuovi o solo il timestamp.
- **Se il grafo è stato riaggiornato**, e quanti file ha riestratto.

Dal terzo punto in giù vanno sempre esplicitati. Se hai deciso di **non
pubblicare** (passo 4), il resoconto è più corto ma dice le stesse cose: che cosa
diceva già l'archivio, perché il testo non aggiungeva un fatto, e come hai
aggiornato l'indicatore invece.

Con più analisi ripeti titolo, categorie e orario per ciascuna, poi dai una volta
sola l'esito dell'indicatore, dei riferimenti di mercato e del calendario. Se hai
unito o separato dei testi rispetto a come li hai ricevuti, dillo e spiega perché.
