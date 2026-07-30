---
name: pubblica-analisi
description: Pubblica un'analisi su Vitanera partendo dal testo grezzo. Decide titolo e sezione, lo converte in blocchi strutturati, aggiorna l'indicatore operativo e i riferimenti di mercato in panoramica, verifica la build e i test, poi fa commit e push. Usare quando l'utente fornisce il testo di un'analisi da pubblicare ("aggiungi questo articolo", "pubblica questa analisi", "inserisci questo").
---

# Pubblicare un'analisi su Vitanera

L'argomento è il **testo grezzo** dell'analisi. Se è un percorso di file, leggilo.
Se manca del tutto, chiedi il testo e fermati.

Non chiedere conferma su titolo, sezione o orario: sono decisioni tue, prese con
le regole qui sotto. Chiedi solo se il testo è ambiguo al punto da rendere
impossibile capire di quale strumento parla.

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

- `updatedAt`: identico al `publishedAt` del nuovo articolo — quindi anch'esso già trascorso. Fa scattare la validità di 60 minuti.
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

Va eseguita **prima** del commit, in quest'ordine:

```powershell
npx prettier --write "src/app/core/data/*.ts"
npm run build
npm test -- --no-watch
```

Tutti e tre devono passare. Non fare commit né push se uno solo fallisce:
correggi e ripeti.

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

Se il push viene rifiutato perché il remoto è avanti:

```powershell
git pull --rebase origin master
git push origin master
```

**Mai** `git push --force`.

Il push su `master` attiva il workflow `.github/workflows/pages.yml`, che
ricompila e pubblica il sito: non serve altro.

## 8. Riferisci

Chiudi dicendo, in poche righe: titolo scelto, sezione e perché, orario di
pubblicazione, come è cambiato l'indicatore, e **quali modifiche hai fatto al
testo dell'autore** (refusi, riformulazioni, tagli). Quest'ultimo punto va
sempre esplicitato.
