---
name: pubblica-analisi
description: Pubblica una o più analisi su Vitanera partendo dal testo grezzo. Decide titolo e sezione, lo converte in blocchi strutturati, aggiorna l'indicatore operativo e i riferimenti di mercato in panoramica, verifica la build e i test, poi fa commit e push. Usare quando l'utente fornisce il testo di un'analisi da pubblicare ("aggiungi questo articolo", "pubblica questa analisi", "pubblica queste analisi", "inserisci questi").
---

# Pubblicare un'analisi su Vitanera

L'argomento è il **testo grezzo** dell'analisi. Se è un percorso di file, leggilo.
Se manca del tutto, chiedi il testo e fermati.

Non chiedere conferma su titolo, sezione o orario: sono decisioni tue, prese con
le regole qui sotto. Chiedi solo se il testo è ambiguo al punto da rendere
impossibile capire di quale strumento parla.

## 0. Quante analisi ci sono nell'argomento

L'argomento può contenere **una o più analisi**. Prima di tutto conta quante
sono, perché cambia l'ordine del lavoro.

Sono analisi distinte quando si vede almeno uno di questi segni:

- l'utente lo dice («queste due», «pubblica anche questa», «prima questa poi
  quella»);
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
   parla dell'apertura americana viene dopo uno che commenta il dato delle
   14:30.
2. **Scrivi tutti gli articoli** seguendo i passi 1-3, uno per testo. Ogni
   articolo ha la sua `const`, il suo slug e la sua sezione: due analisi dello
   stesso giorno possono finire in sezioni diverse.
3. **Assegna i `publishedAt` in ordine crescente**, tutti già trascorsi e tutti
   successivi all'ultimo articolo già in archivio. Distanziali di qualche
   minuto rispettando l'ordine cronologico reale: se i testi citano un orario
   («dopo l'apertura USA», «alle 14:30»), usalo come vincolo di ordinamento, ma
   non pubblicare mai un orario futuro pur di rispettarlo.
4. **Metti i riferimenti in testa all'array** nell'ordine inverso: il più
   recente per primo.
5. **Aggiorna l'indicatore una volta sola**, sull'analisi **più recente** (passo
   4). Le altre entrano al massimo nello `stance` e in `sources`.
6. **Aggiorna i riferimenti di mercato una volta sola** (passo 5), con i valori
   dell'analisi più recente; usa quelli delle precedenti solo per le voci che
   la più recente non cita.
7. **Una sola build, un solo test, un solo commit** alla fine (passi 6 e 7), non
   uno per articolo.

Se una delle analisi è impubblicabile — testo troncato, strumento non
identificabile — pubblica le altre e dillo esplicitamente nel resoconto finale,
senza bloccare tutto.

## 1. Leggi lo stato attuale

Prima di scrivere, apri sempre:

- `src/app/core/data/articles.data.ts` — archivio, per replicare struttura e stile
- `src/app/core/data/signal.data.ts` — indicatore in panoramica
- `src/app/core/data/markets.data.ts` — riferimenti numerici in panoramica
- `src/app/core/models/article.model.ts` — tipi, se hai dubbi sui campi

Serve anche l'ora corrente:

```powershell
Get-Date -Format "yyyy-MM-ddTHH:mm:ssK"
```

**Usa un orario già trascorso**, non arrotondato in avanti. Un `publishedAt`
anche di due minuti nel futuro fa apparire l'indicatore come «in attesa di
notizie» appena pubblicato e mostra la data assoluta al posto del tempo
trascorso. Nel dubbio togli qualche minuto.

## 2. Decidi la sezione

| Sezione | `category` | Quando |
| --- | --- | --- |
| Fondamentali | `fondamentali` | Dati macro, banche centrali, decisioni sui tassi, inflazione, occupazione. Struttura tipica: fatti confermati → perché conta → interpretazione → impatto → catalizzatore. |
| Correlazioni | `correlazioni` | Controlli cross-asset: conferme e contraddizioni fra oro, dollaro, rendimenti, energia, metalli, valute. Parole spia: «conferma», «divergenza», «correlati», «bias intraday». |
| Geopolitica | `geopolitica` | Conflitti, rotte marittime, energia come fattore di rischio, colli di bottiglia. |

Se il testo copre più temi, scegli la sezione del **fatto nuovo** che lo ha
generato, non degli argomenti citati di sfuggita.

## 3. Scrivi l'articolo

Aggiungi un `const <nomeCamelCase>: Article = { … }` prima dell'export `ARTICLES`,
poi inserisci il riferimento **in testa** all'array (l'ordinamento vero avviene
per `publishedAt`, ma l'array si tiene dal più recente).

Con più analisi ripeti questo passo per ciascuna, in ordine cronologico, e
tieni l'array ordinato dal più recente: `[ultima, penultima, …]`. Slug e ancore
devono restare unici fra tutti gli articoli aggiunti nello stesso giro — è uno
degli errori che i test intercettano.

### Campi

| Campo | Regola |
| --- | --- |
| `slug` | Dal titolo: minuscolo, senza accenti né apostrofi, parole separate da trattini, max ~60 caratteri. Deve essere unico. |
| `title` | Se il testo ne ha già uno usabile, riprendilo sistemando maiuscole e refusi. Se manca o è troncato, scrivilo tu: sintetico, in italiano, senza punto finale, senza maiuscole enfatiche. |
| `kicker` | `Tema · Sottotema`, coerente con quelli già presenti (per esempio `Correlazioni · Controllo cross-asset`). |
| `dek` | Due o tre righe che riassumono il fatto nuovo e perché conta. Non ripetere il titolo. |
| `publishedAt` | Ora corrente in formato ISO con fuso. **Mai nel futuro**, mai prima dell'ultimo articolo pubblicato. |
| `author` | Sempre la costante `AUTHOR`. |
| `readingMinutes` | Circa 200 parole al minuto, arrotondato per eccesso. |
| `tags`, `instruments` | Ricavati dal testo, riusando le etichette già presenti nell'archivio quando coincidono. |
| `horizons` | `breve` per letture intraday, `breve`+`medio` per dati macro, `lungo` solo se il testo parla davvero di anni. |
| `bias` | Solo se il testo dichiara un'inclinazione. `direction` fra `rialzista`, `neutrale-rialzista`, `neutrale`, `neutrale-ribassista`, `ribassista`; `strength` fra `bassa`, `media`, `alta`; `regime` è una riga che descrive il contesto. |
| `certainty` + `certaintyNote` | Quanto è solido il **fondamento fattuale**, non l'esito atteso. |
| `takeaways` | 4-5 punti, uno per fatto, nell'ordine del testo. |
| `invalidation` | Le condizioni che il testo indica come invalidanti. Se non le dichiara, ricavale dalla sua stessa logica senza inventare fatti nuovi. |
| `nextEvent` | Solo se il testo indica un catalizzatore futuro. |

### Blocchi disponibili per `blocks`

- `paragraph` — prosa; il primo va con `lead: true`
- `heading` — titolo di paragrafo, con `anchor` esplicita (genera l'indice laterale)
- `list` — elenco puntato, `title` facoltativo, `ordered` per la numerazione
- `callout` — riquadro colorato: `tone` fra `bull`, `bear`, `warn`, `gold`, `neutral`
- `stats` — griglia di riferimenti numerici; metti sempre una `caption` che ricorda che non sono quotazioni in tempo reale
- `scenarios` — schede per singolo mercato o per singola ipotesi
- `balance` — due colonne contrapposte (favorevoli / contrari, conferme / contraddizioni)
- `timeline` — sequenza cronologica
- `quote`, `note` — citazione e nota a piè d'articolo

Scegli il blocco che rispecchia la forma del testo: elenchi contrapposti →
`balance`; lettura per singolo mercato → `scenarios`; numeri → `stats`.
Non appiattire tutto in paragrafi.

### Regole editoriali

**Da fare**

- Correggere refusi, punteggiatura, maiuscole e titoli troncati.
- Rendere impersonale ciò che si rivolge all'autore: «il tuo grafico» → «il grafico», «la tua regola» → «la regola seguita».
- Uniformare i numeri allo stile del sito: `4.078`, `3,3%`, `≈ 92 $`.
- Riorganizzare l'ordine dei blocchi se migliora la lettura.
- Aggiungere un `note` finale quando il testo cita livelli di prezzo, chiarendo che sono riferimenti per rendere verificabile il ragionamento e non obiettivi affidabili.

**Da non fare**

- Inventare dati, percentuali, orari o fatti non presenti nel testo.
- Cambiare la direzione del bias o addolcire una conclusione operativa: il giudizio è dell'autore.
- Rimuovere o attenuare avvertenze legali, in qualunque punto del sito.
- Modificare articoli già pubblicati per farli tornare con l'esito.

## 4. Aggiorna l'indicatore

`MARKET_SIGNAL` in `src/app/core/data/signal.data.ts` è la sintesi delle
**ultime pubblicazioni di tutte le sezioni**, non solo dell'ultima.

L'aggiornamento non è facoltativo: se lo salti, la panoramica continua a
mostrare la lettura precedente e, passata l'ora, resta bloccata su «in attesa
di notizie» anche se hai appena pubblicato.

Se hai pubblicato più analisi in una volta, l'indicatore riflette **solo la più
recente**: è quella che descrive il mercato adesso. Le precedenti possono
comparire nello `stance` e in `sources`, mai nella direzione.

- `updatedAt`: identico al `publishedAt` del nuovo articolo — quindi anch'esso già trascorso. Fa scattare la validità di 60 minuti. Con più analisi è il `publishedAt` della più recente, ossia il più alto dei valori appena scritti.
- `direction`, `strength`: dal bias del nuovo articolo, se ne ha uno; altrimenti resta il più recente disponibile.
- `headline`: una riga, il fatto che conta adesso.
- `stance`: due o tre righe che tengono insieme le ultime letture delle diverse sezioni.
- `favours` / `avoid`: cosa il testo indica come favorito e cosa come da evitare. Se il testo dice di restare fuori, `favours` deve dirlo esplicitamente.
- `invalidation`: la condizione che fa decadere la lettura.
- `confirming` / `contradicting`: etichette brevissime con il valore, per esempio `DXY debole ≈ 100,65`.
- `sources`: fino a tre slug, dal più recente, possibilmente di sezioni diverse. Devono esistere in `articles.data.ts`.

## 5. Aggiorna i riferimenti di mercato

In `src/app/core/data/markets.data.ts` allinea `MARKET_REFERENCES` (quattro
schede) e `MARKET_STRIP` (striscia sotto) ai valori citati nelle analisi più
recenti. `tone` guida il colore: `gold` per l'oro, `bull` favorevole, `bear`
contrario, `warn` ambiguo, `neutral` fermo.

Non toccare le note che ricordano che i dati non sono in tempo reale.

## 6. Verifica e build

**Questo passo non si salta mai e va sempre eseguito prima del commit**, anche
quando la modifica sembra minima e anche quando è l'ennesima pubblicazione
della giornata. L'ordine è questo:

```powershell
npx prettier --write "src/app/core/data/*.ts"
npm run build
npm test -- --no-watch
```

Tutti e tre devono passare, e **devi averne visto l'esito** prima di toccare
`git`: non dare per scontato che siano andati a buon fine. Se uno solo
fallisce, niente commit e niente push: correggi e ripeti da capo.

Con più analisi pubblicate insieme si esegue una volta sola, alla fine, quando
tutti gli articoli sono scritti e l'indicatore è aggiornato.

I test in `src/app/core/data/data.spec.ts` controllano proprio gli errori che
non rompono la compilazione ma si vedono solo a sito acceso: date di
pubblicazione nel futuro, `updatedAt` dell'indicatore non allineato all'ultima
analisi, fonti che puntano a slug inesistenti, ancore o slug duplicati. Se uno
di questi fallisce, il problema è nei dati che hai appena scritto.

Due avvertenze sui comandi:

- Usa **`npm run build`**, non `ng build`. Lo script incatena `ng build` e
  `scripts/prepare-pages.mjs`, che aggiunge all'output `404.html` (necessario
  perché GitHub Pages gestisca gli indirizzi diretti come `/analisi/uno-slug`),
  `.nojekyll` e la copia del `CNAME`. Con il solo `ng build` l'output non è
  pubblicabile.
- Usa **`npm test -- --no-watch`**: senza quel flag il comando resta in ascolto
  e non termina.

Il risultato finisce in `dist/vitanera/browser`, che non viene versionato:
serve a verificare che il sito compili davvero prima di pubblicare. La build
che va in produzione la rifà il workflow sul runner.

**Cosa pubblica davvero il sito.** La build locale non finisce online: online ci
va quella che il workflow rifà dopo il push. Quindi la build locale serve a
impedire di pubblicare dati rotti, non a caricare i file. Se il sito mostra un
contenuto vecchio o sbagliato, il problema non è quasi mai la build locale: vedi
il passo 8.

## 7. Commit e push

Solo a build e test superati. Messaggio in italiano: prima riga sintetica, poi
i punti principali. Chiudi sempre con la riga di attribuzione.

```powershell
git add -A
git commit -m @'
Nuova analisi: <titolo>

- <sezione>: sintesi in una riga.
- Indicatore aggiornato: <direzione e messaggio>.
- Riferimenti di mercato allineati ai valori citati.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>
'@
git push origin master
```

Con più analisi il commit resta uno solo, con la prima riga al plurale e un
punto elenco per articolo:

```
Nuove analisi: <titolo 1> e <titolo 2>

- <sezione 1>: sintesi in una riga.
- <sezione 2>: sintesi in una riga.
- Indicatore aggiornato sull'analisi più recente: <direzione e messaggio>.
- Riferimenti di mercato allineati ai valori citati.
```

Nel messaggio di commit evita apostrofi tipografici e caratteri accentati dentro
l'here-string: passano dalla shell senza problemi solo in forma semplice.

Se il push viene rifiutato perché il remoto è avanti:

```powershell
git pull --rebase origin master
git push origin master
```

**Mai** `git push --force`.

Il push su `master` attiva il workflow `.github/workflows/pages.yml`, che
ricompila e pubblica il sito: non serve altro.

## 8. Se online non si vede l'aggiornamento

Il workflow impiega uno o due minuti. Se dopo il push il sito sembra fermo,
prima di rimettere mano ai dati verifica **che cosa sta davvero servendo il
dominio**, confrontando gli hash della build locale con quelli online:

```powershell
$idx = (Invoke-WebRequest -Uri "https://vitanera.it/" -UseBasicParsing).Content
[regex]::Matches($idx, '(?:chunk|main)-[A-Z0-9]+\.js') | ForEach-Object { $_.Value } | Sort-Object -Unique
```

- **Gli hash coincidono con l'ultima build locale** → il sito è aggiornato e
  quello che si vede nel browser è cache: serve un ricaricamento forzato.
- **La pagina mostra il README del repository invece del sito** → non è un
  problema di build né di dati. Significa che GitHub Pages sta servendo i file
  del repository: su GitHub, *Settings → Pages → Build and deployment → Source*
  deve essere impostato su **GitHub Actions**. Finché resta su *Deploy from a
  branch*, il workflow compila ma la pubblicazione non arriva mai online.
- **Gli hash sono vecchi** → il workflow è fallito o non è partito. Guarda le
  esecuzioni in *Actions* sul repository.

Riporta all'utente quale dei tre casi è, senza rifare build o commit inutili.

## 9. Riferisci

Chiudi dicendo, in poche righe: titolo scelto, sezione e perché, orario di
pubblicazione, come è cambiato l'indicatore, e **quali modifiche hai fatto al
testo dell'autore** (refusi, riformulazioni, tagli). Quest'ultimo punto va
sempre esplicitato.

Con più analisi ripeti titolo, sezione e orario per ciascuna, poi dai una volta
sola l'esito dell'indicatore e dei riferimenti di mercato. Se hai unito o
separato dei testi rispetto a come li hai ricevuti, dillo e spiega perché.
