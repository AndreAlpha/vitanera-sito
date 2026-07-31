---
name: pubblica-analisi
description: Pubblica una o più analisi su Vitanera partendo dal testo grezzo. Rigenera lo storico del calendario economico, decide titolo, categorie e durata della lettura, converte il testo in blocchi strutturati, aggiorna l'indicatore operativo e i riferimenti di mercato, verifica formattazione, build e test, poi fa commit e push. Usare quando l'utente fornisce il testo di un'analisi da pubblicare ("aggiungi questo articolo", "pubblica questa analisi", "pubblica queste analisi", "inserisci questi") e anche quando chiede solo di aggiornare i dati del calendario.
---

# Pubblicare un'analisi su Vitanera

L'argomento è il **testo grezzo** dell'analisi. Se è un percorso di file, leggilo.
Se manca del tutto, chiedi il testo e fermati.

Non chiedere conferma su titolo, categorie, orario o durata della lettura: sono
decisioni tue, prese con le regole qui sotto. Chiedi solo se il testo è ambiguo
al punto da rendere impossibile capire di quale strumento parla.

## L'ordine dei passi non è negoziabile

Il calendario si rigenera **per primo** e l'orario di pubblicazione si sceglie
**dopo**. La rigenerazione dura una ventina di secondi e fa un centinaio di
richieste di rete: se decidi `publishedAt` prima, quando arrivi al commit quel
valore è già invecchiato di minuti.

```
1  conta le analisi          6  aggiorna i riferimenti di mercato
2  rigenera il calendario    7  passa in rassegna il resto del sito
3  leggi lo stato e l'ora    8  formatta, compila, prova
4  scrivi gli articoli       9  commit e push
5  aggiorna l'indicatore    10  riferisci
```

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
2. **Scrivi tutti gli articoli**, uno per testo. Ogni articolo ha la sua `const`,
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
7. **Un solo giro di verifica e un solo commit** alla fine, non uno per articolo.

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

| File                                   | Perché                                  |
| -------------------------------------- | --------------------------------------- |
| `src/app/core/data/articles.data.ts`   | archivio e costante `AUTHOR`            |
| `src/app/core/data/signal.data.ts`     | indicatore in panoramica, e il suo tipo |
| `src/app/core/data/markets.data.ts`    | riferimenti numerici in panoramica      |
| `src/app/core/models/article.model.ts` | i tipi, e l'elenco esatto degli slug    |
| `src/app/core/config/site.config.ts`   | l'elenco autorevole delle categorie     |
| `src/app/core/data/calendar.meta.ts`   | i 29 indicatori e le loro categorie     |

L'archivio può essere **vuoto**: è lo stato in cui il sito riparte. In quel caso
non c'è un articolo precedente da cui copiare lo stile — usa i tipi e questa
guida — e `MARKET_SIGNAL` vale `null`, quindi l'indicatore si scrive da zero
invece di aggiornarlo. Vale anche per `kicker`, `tags` e `instruments`: non c'è
nulla da riusare, la prima pubblicazione fonda le convenzioni.

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

## 3. Decidi le categorie

Il campo è `categories` ed è un **elenco**: un'analisi appartiene a tutte le
categorie di cui parla davvero. L'elenco autorevole è `CATEGORIES` in
`site.config.ts`, e il tipo `CategorySlug` è una union di 29 letterali: uno slug
scritto male **non compila**. Copiali, non scriverli a memoria.

Sono ventinove, in cinque famiglie:

| Famiglia        | Slug                                                                                                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aree            | `usa` `europa` `asia` `geopolitica`                                                                                                                                                                               |
| banche-centrali | `fed` `bce` `tasso-di-interesse`                                                                                                                                                                                  |
| lavoro          | `tasso-di-disoccupazione` `richieste-iniziali-sussidi` `nfp`                                                                                                                                                      |
| prezzi          | `ipc` `variazione-ipc` `ipc-core` `variazione-ipc-core` `pce` `pce-core-annuale` `pce-core-trimestrale` `variazione-pce-core` `variazione-ipp` `variazione-ipp-core`                                              |
| attivita        | `fiducia-consumatori` `produzione-industriale` `variazione-produzione-industriale` `pil` `pil-annuale` `pil-trimestrale` `variazione-vendite-dettaglio` `vendite-dettaglio-essenziali` `indice-vendite-dettaglio` |

### Cosa fa davvero la prima categoria

**Non** dà la tinta alla pagina da sola: la tinta viene dalla **famiglia** della
prima categoria (29 categorie → 5 tinte, calcolate in `app.ts:126-138`). E sulla
scheda d'archivio la prima non è una pastiglia ma la riga di occhiello in
maiuscoletto, con l'icona.

Conseguenza pratica: se metti `usa` per prima, **ogni** analisi americana prende
la tinta della famiglia «aree» e la scheda annuncia «USA» invece del dato di cui
parla. Metti per prima la categoria del **fatto nuovo** che ha generato l'analisi.

### Quante, e in che ordine

Componi per strati: **1)** l'indicatore o il tema, **2)** l'area, **3)** l'istituto
se c'entra, **4)** le categorie collegate che il testo tratta davvero.

Tieniti a **tre o quattro**. Sulla scheda si vedono la principale più due `short`
(tre sulla scheda in evidenza) e un «+N» il cui contenuto compare solo nel
`title`: oltre la quarta, le categorie sono invisibili a chi non passa col mouse.
Il minimo è una — con zero il test `data.spec.ts:28-36` fallisce.

### L'area va sempre messa

`tasso-di-interesse` è una sola categoria per **due** banche centrali, e
`tasso-di-disoccupazione`, `ipc`, `variazione-ipc`, `ipc-core`,
`variazione-produzione-industriale` esistono in **entrambe** le aree. Senza `usa`
o `europa` un taglio della BCE è indistinguibile da un FOMC.

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

### `fed` e `bce` non agganciano lo storico

Sono dichiarate solo da sette indicatori in tutto (`fed` su tassi, disoccupazione,
PCE e PCE core annuale; `bce` su tassi, IPC e IPC core). Taggare `fed` su
un'analisi NFP **non** la fa comparire fra gli argomenti collegati dell'NFP.
Usale come categoria editoriale — riunioni, verbali, discorsi, proiezioni — non
per agganciare una serie.

`asia` e `geopolitica` sono le uniche due categorie senza alcuno storico dietro.

### Esempi

| Testo                                                | `categories`                              |
| ---------------------------------------------------- | ----------------------------------------- |
| Reazione al dato NFP di luglio                       | `['nfp', 'usa', 'fed']`                   |
| IPC americano sopra le attese, core in accelerazione | `['variazione-ipc', 'usa', 'ipc-core']`   |
| Riunione BCE, tassi fermi                            | `['tasso-di-interesse', 'bce', 'europa']` |
| Stretto di Hormuz e premio di rischio                | `['geopolitica', 'asia']`                 |
| Controllo cross-asset intraday su XAU/USD            | `['usa', 'tasso-di-interesse']`           |

Non forzare una categoria di indicatore quando il testo non lo tratta: un
accostamento sbagliato si nota subito.

---

## 4. Scrivi l'articolo

Aggiungi un `const <nomeCamelCase>: Article = { … }` prima dell'export `ARTICLES`,
poi metti il riferimento **in testa** all'array (l'ordinamento vero avviene per
`publishedAt`, ma l'array si tiene dal più recente).

Con più analisi ripeti per ciascuna e tieni l'array `[ultima, penultima, …]`.
Gli **slug** devono essere unici fra tutti gli articoli (`data.spec.ts:14-17`);
le **ancore** solo all'interno dello stesso articolo (`:38-46`), perché ogni
articolo è una pagina a sé.

### Campi obbligatori

| Campo                 | Regola                                                                                                                                                                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slug`                | Dal titolo: minuscolo, senza accenti né apostrofi, parole separate da trattini, max ~60 caratteri. Unico.                                                                                                                               |
| `categories`          | L'elenco deciso al passo 3, con la principale per prima.                                                                                                                                                                                |
| `title`               | Se il testo ne ha uno usabile, riprendilo sistemando maiuscole e refusi. Altrimenti scrivilo: sintetico, in italiano, senza punto finale, senza maiuscole enfatiche.                                                                    |
| `kicker`              | `Tema · Sottotema`, per esempio `Correlazioni · Controllo cross-asset`. **Non è decorativo**: è l'ultima briciola di pane della barra superiore e il testo con cui l'indicatore operativo cita le sue fonti. Tienilo corto e specifico. |
| `dek`                 | Due o tre righe sul fatto nuovo e perché conta. Non ripetere il titolo.                                                                                                                                                                 |
| `publishedAt`         | ISO con fuso, dal passo 2. **Mai nel futuro**, mai prima dell'ultimo articolo pubblicato.                                                                                                                                               |
| `author`              | La costante `AUTHOR`. È dichiarata in cima a `articles.data.ts`, cioè nello stesso file dell'articolo: si usa direttamente, senza import.                                                                                               |
| `readingMinutes`      | Circa 200 parole al minuto, arrotondato per eccesso.                                                                                                                                                                                    |
| `tags`, `instruments` | Dal testo. `instruments` compare due volte nel dettaglio: pastiglie in testata e riquadro laterale «Strumenti citati».                                                                                                                  |
| `horizons`            | `breve` per letture intraday, `breve`+`medio` per dati macro, `lungo` solo se il testo parla davvero di anni.                                                                                                                           |
| `certainty`           | `bassa`/`media`/`alta`: quanto è solido il **fondamento fattuale**, non l'esito atteso.                                                                                                                                                 |
| `takeaways`           | 4-5 punti, uno per fatto, nell'ordine del testo. **Non lasciarlo vuoto**: `pages.spec.ts:85` pretende la stringa «In sintesi», che è resa solo se ci sono takeaway.                                                                     |
| `blocks`              | Vedi sotto.                                                                                                                                                                                                                             |

### Campi facoltativi

| Campo           | Effetto se lo metti                                                                                                                                                                    | Effetto se lo ometti                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `bias`          | Pastiglia in testata, sezione «Regime descritto», badge sulla scheda, colonna nell'elenco di categoria — **e** la scheda in «Impostazione descritta al momento» della pagina Orizzonti | L'analisi non compare mai in Orizzonti |
| `certaintyNote` | Sezione con il misuratore a tre tacche                                                                                                                                                 | La sezione sparisce                    |
| `invalidation`  | Sezione «Cosa invaliderebbe questa lettura»                                                                                                                                            | La sezione sparisce                    |
| `nextEvent`     | Riquadro del catalizzatore — **e** vincola la durata dell'indicatore (passo 5)                                                                                                         | Nessun vincolo                         |
| `updatedAt`     | **Niente.** Nessun template lo legge: è un campo morto                                                                                                                                 | —                                      |
| `featured`      | **Niente.** La scheda grande della panoramica è semplicemente l'articolo più recente                                                                                                   | —                                      |

Metti `bias` ogni volta che il testo dichiara un'inclinazione: `direction` fra
`rialzista`, `neutrale-rialzista`, `neutrale`, `neutrale-ribassista`,
`ribassista`; `strength` fra `bassa`, `media`, `alta`; `regime` è una riga che
descrive il contesto.

Se `invalidation` non è dichiarata esplicitamente, ricavala dalla logica del
testo senza inventare fatti nuovi.

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

## 5. Aggiorna l'indicatore operativo

`MARKET_SIGNAL` in `signal.data.ts` è la sintesi delle **ultime pubblicazioni**,
quali che siano le loro categorie.

L'aggiornamento non è facoltativo: se lo salti, la panoramica continua a mostrare
la lettura precedente e, scaduta, resta su «in attesa di notizie» anche se hai
appena pubblicato. E un test lo impone (vedi sotto).

Se hai pubblicato più analisi in una volta, l'indicatore riflette **solo la più
recente**: è quella che descrive il mercato adesso. Le precedenti possono
comparire nello `stance` e in `sources`, mai nella direzione.

Tutti e tredici i campi sono obbligatori.

| Campo                          | Regola                                                                                                                                                                                            |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `updatedAt`                    | **Identico come stringa** al `publishedAt` dell'analisi più recente. Il test usa `toBe`, non un confronto di istanti: `data.spec.ts:83-91`.                                                       |
| `validityMinutes`              | Quanto dura la lettura. Deciso ogni volta, vedi sotto. Deve essere > 0.                                                                                                                           |
| `asset`                        | Lo strumento, di norma `XAU/USD`.                                                                                                                                                                 |
| `direction`, `strength`        | Dal bias del nuovo articolo; se non ne ha, resta il più recente disponibile.                                                                                                                      |
| `headline`                     | Una riga: il fatto che conta adesso.                                                                                                                                                              |
| `stance`                       | Due o tre righe che tengono insieme le ultime letture.                                                                                                                                            |
| `favours` / `avoid`            | **Entrambi non vuoti**, è un test. Anche quando il testo dice di restare fuori: `favours` deve dirlo esplicitamente.                                                                              |
| `invalidation`                 | La condizione che fa decadere la lettura. **Più di 10 caratteri**, è un test: una frase, non una parola.                                                                                          |
| `confirming` / `contradicting` | Etichette brevissime con il valore: `DXY debole ≈ 100,65`.                                                                                                                                        |
| `sources`                      | Fino a tre slug, dal più recente, possibilmente di categorie diverse. Devono esistere in `articles.data.ts` (`data.spec.ts:77-81`). A video compare il **`kicker`** dell'articolo, non il titolo. |

### Quanto deve durare la lettura

`validityMinutes` **non è un valore fisso**: 60 è solo il punto di partenza. Il
numero è **visibile al lettore** («valido X minuti dall'aggiornamento»), quindi
usa valori tondi: `30`, `45`, `60`, `90`, `120`, `180`, `240`.

| Tipo di analisi                 | Durata tipica | Perché                                           |
| ------------------------------- | ------------- | ------------------------------------------------ |
| Controllo intraday cross-asset  | 30–45         | Vive di variazioni che cambiano in minuti        |
| Pubblicazione di un dato macro  | 90–120        | Il dato resta un fatto per tutta la seduta       |
| Decisione di banca centrale     | 120–240       | Regge fino al dato o all'intervento successivo   |
| Scheda geopolitica o di sintesi | 180–240       | Descrive un contesto, non un movimento di prezzo |

Poi correggi guardando le ultime pubblicazioni:

- **Accorcia** se la direzione è cambiata più di una volta nelle ultime ore, se
  la lettura poggia su una sola conferma, o se il testo dichiara una divergenza
  aperta.
- **Allunga** se i correlati sono allineati, se l'analisi conferma la precedente
  invece di ribaltarla, o se il fatto nuovo è strutturale (un dato pubblicato,
  una decisione presa) e non una reazione di prezzo.

Due vincoli che vengono prima di tutto:

- Se l'articolo ha un `nextEvent`, **la validità non deve superare quel
  catalizzatore**.
- Se il testo dice per quanto vale («fino alla chiusura americana», «in attesa
  del dato delle 14:30»), quell'indicazione vince su qualunque tabella.

Motiva la scelta nel resoconto finale, in mezza riga.

### Che cosa si vede quando scade

Scaduto il termine **non sparisce nulla**: headline, stance, favours, avoid,
conferme, contraddizioni e fonti restano tutti a video, solo ingrigiti. Cambiano
la pastiglia, il quadrante di sinistra («In attesa di notizie» più la nota che
l'ultima lettura è scaduta), la sparizione della forza e la barra a zero.
L'orologio condiviso batte ogni 15 secondi, quindi il passaggio avviene da solo.

### Prolungare una lettura già pubblicata

Se serve tenere viva la lettura corrente senza pubblicare una nuova analisi,
**alza `validityMinutes` e non toccare `updatedAt`**: deve restare identico al
`publishedAt` dell'ultima analisi, è un test. Ricalcola l'ora di scadenza prima
di rispondere — `updatedAt` più `validityMinutes`, non «un'ora da adesso».

---

## 6. Aggiorna i riferimenti di mercato

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

## 7. Passa in rassegna il resto del sito

Quasi tutto è automatico e non va toccato: l'ordine dell'archivio, i conteggi
della pagina Argomenti, la ricerca, gli articoli correlati, i titoli delle pagine,
l'indice laterale. Non esiste una sitemap né un elenco di pagine da registrare.

Restano tre cose da valutare a ogni pubblicazione:

**Il glossario** (`glossary.data.ts`). Se l'analisi introduce un termine tecnico
che non c'è, aggiungilo: quattro campi obbligatori — `term`, `letter`,
`definition`, `why` — più `related` facoltativo. Nessun test lo verifica e nessun
collegamento automatico esiste fra articolo e glossario, quindi è una scelta
editoriale: falla quando il termine è centrale per capire il testo. Le voci sono
rese **nell'ordine di dichiarazione**, non alfabetico.

**La pagina Orizzonti**. `currentReadings` prende **tutti** gli articoli con
`bias`, senza limite e senza taglio temporale: ogni analisi con bias aggiunge per
sempre una scheda a «Impostazione descritta al momento». Se l'elenco comincia a
essere lungo, segnalalo nel resoconto — non è un errore, ma va deciso.

**Le note dei documenti legali**. `legal.data.ts` ha un `updatedAt` scritto a mano
per ciascuno dei tre documenti. Non dipende dalle pubblicazioni: toccalo solo se
hai davvero modificato quel testo.

---

## 8. Formatta, compila, prova

**Questo passo non si salta mai** e va sempre eseguito prima del commit, anche
quando la modifica sembra minima. L'ordine è questo:

```powershell
npx prettier --write "src/app/core/data/*.ts"
npm run build
npm test -- --no-watch
```

Tutti e tre devono passare, e **devi averne visto l'esito** prima di toccare
`git`. Se uno solo fallisce, niente commit e niente push: correggi e ripeti.

Con più analisi si esegue una volta sola, alla fine.

### Perché prettier deve comprendere i file generati

Il glob `src/app/core/data/*.ts` include anche `calendar.series.ts` e
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

Cinque file, 59 test. La CI (`.github/workflows/pages.yml`) esegue **prima i test
e poi la build**: un test rosso non pubblica nulla online.

Quelli che riguardano ciò che hai appena scritto:

| Test                                            | Errore che lo fa fallire                                            |
| ----------------------------------------------- | ------------------------------------------------------------------- |
| `data.spec.ts:14`                               | due articoli con lo stesso slug                                     |
| `data.spec.ts:19`                               | `publishedAt` nel futuro, anche di un minuto                        |
| `data.spec.ts:28`                               | categoria inesistente, o articolo con zero categorie                |
| `data.spec.ts:38`                               | due `anchor` uguali nello stesso articolo                           |
| `data.spec.ts:70`                               | `updatedAt` dell'indicatore nel futuro                              |
| `data.spec.ts:77`                               | `sources` che punta a uno slug inesistente                          |
| `data.spec.ts:83`                               | `updatedAt` diverso dal `publishedAt` dell'ultima analisi           |
| `data.spec.ts:93`                               | `favours` o `avoid` vuoti, `invalidation` ≤ 10 caratteri            |
| `data.spec.ts:116`                              | meno di 50 diffusioni per un indicatore (calendario scaricato male) |
| `data.spec.ts:151`                              | una prossima uscita già passata (calendario non rigenerato)         |
| `data.spec.ts:161`                              | manca la prossima riunione di una delle due banche centrali         |
| `pages.spec.ts:85`                              | articolo senza `takeaways`: manca «In sintesi»                      |
| `pages.spec.ts` «le avvertenze non si ripetono» | un'avvertenza aggiunta o tolta                                      |

Due note sui comandi:

- Usa **`npm run build`**, non `ng build`. Lo script incatena `ng build` e
  `scripts/prepare-pages.mjs`, che aggiunge `404.html` (necessario perché GitHub
  Pages gestisca gli indirizzi diretti come `/analisi/uno-slug`), `.nojekyll` e la
  copia del `CNAME`. Finisce stampando `Pronto per GitHub Pages: …\dist\vitanera\browser (32 elementi, 404.html e .nojekyll inclusi).`
- Usa **`npm test -- --no-watch`**: senza quel flag il comando resta in ascolto.

La build locale **non finisce online**: online ci va quella che il workflow rifà
dopo il push. Serve a impedire di pubblicare dati rotti, non a caricare i file.

---

## 9. Commit e push

Solo a build e test superati. Controlla prima che cosa stai per includere:

```powershell
git status --short
```

Attesi: `articles.data.ts`, `signal.data.ts`, `markets.data.ts`,
`calendar.series.ts`, `calendar.events.ts`, più eventualmente `glossary.data.ts`.
Se compare altro, guarda che cos'è prima di aggiungerlo.

```powershell
git add -A
git commit -m @'
Nuova analisi: <titolo>

- <categoria principale>: sintesi in una riga.
- Indicatore aggiornato: <direzione e messaggio>.
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

## 10. Se online non si vede l'aggiornamento

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

## 11. Riferisci

Chiudi dicendo, in poche righe:

- **Titolo e categorie scelte**, con mezza riga sul perché della principale.
- **Orario di pubblicazione.**
- **Come è cambiato l'indicatore**: direzione, forza, durata scelta **con l'ora
  di scadenza calcolata**, e perché quella durata.
- **Che cosa hai cambiato del testo dell'autore**: refusi, riformulazioni, tagli.
- **L'esito della rigenerazione del calendario**: quante diffusioni e quanti
  appuntamenti futuri, e se il diff conteneva dati nuovi o solo il timestamp.

Gli ultimi tre punti vanno sempre esplicitati.

Con più analisi ripeti titolo, categorie e orario per ciascuna, poi dai una volta
sola l'esito dell'indicatore, dei riferimenti di mercato e del calendario. Se hai
unito o separato dei testi rispetto a come li hai ricevuti, dillo e spiega perché.
