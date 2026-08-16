# Esegue un giro automatico di Vitanera. E' il programma che l'Utilita di
# pianificazione lancia: apre una sessione di Claude Code senza interfaccia,
# le passa la skill `giro-automatico`, e si occupa di tutto quello che una
# sessione non puo' fare da se' — non sovrapporsi a un'altra, non ripartire
# dopo un guasto, e avvisare quando qualcosa e' andato storto.
#
#     pwsh -File scripts/giro.ps1 -Tipo sorveglianza
#     pwsh -File scripts/giro.ps1 -Tipo dato -Dettaglio "Inflazione USA"
#     pwsh -File scripts/giro.ps1 -Tipo completo
#     pwsh -File scripts/giro.ps1 -Tipo pianifica
#
# In condizioni normali non dice niente a nessuno: scrive una riga nel registro
# e finisce. Le notifiche arrivano solo quando c'e' un problema.

[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('sorveglianza', 'dato', 'completo', 'pianifica')]
    [string]$Tipo,

    [string]$Dettaglio = '',

    # Salta il blocco, il lucchetto e la pausa: serve per provare a mano.
    [switch]$Forza
)

$ErrorActionPreference = 'Stop'

$radice = Split-Path -Parent $PSScriptRoot
$cartella = Join-Path $radice '.giri'
$cartellaLog = Join-Path $cartella 'log'
$lucchetto = Join-Path $cartella 'lucchetto'
$bloccato = Join-Path $cartella 'bloccato'
$ultimo = Join-Path $cartella 'ultimo.txt'
$registro = Join-Path $cartella 'registro.tsv'

$MINUTI_PAUSA = 30      # una sorveglianza a meno di questi minuti dal giro precedente salta
$MINUTI_LUCCHETTO = 90  # oltre questi, il lucchetto e' di un giro morto e si scavalca
$MINUTI_TIMEOUT = 50    # oltre questi, la sessione si considera bloccata

New-Item -ItemType Directory -Path $cartellaLog -Force | Out-Null

$avvio = Get-Date
$etichetta = $avvio.ToString('yyyy-MM-dd_HH-mm-ss')
$fileLog = Join-Path $cartellaLog "$etichetta-$Tipo.log"

function Scrivi {
    param([string]$Testo)
    "$((Get-Date).ToString('HH:mm:ss'))  $Testo" | Add-Content -Path $fileLog -Encoding utf8
}

function Annota {
    param([string]$Esito, [string]$Nota)
    $riga = @($avvio.ToString('s'), $Tipo, $Dettaglio, $Esito, $Nota) -join "`t"
    Add-Content -Path $registro -Value $riga -Encoding utf8
}

# Notifica solo per i problemi: un fumetto nell'area di notifica, che non
# richiede moduli aggiuntivi e non blocca lo script se non riesce a comparire.
function Avvisa {
    param([string]$Titolo, [string]$Testo)
    try {
        Add-Type -AssemblyName System.Windows.Forms
        Add-Type -AssemblyName System.Drawing
        $icona = New-Object System.Windows.Forms.NotifyIcon
        $icona.Icon = [System.Drawing.SystemIcons]::Warning
        $icona.BalloonTipIcon = [System.Windows.Forms.ToolTipIcon]::Warning
        $icona.BalloonTipTitle = $Titolo
        $icona.BalloonTipText = $Testo
        $icona.Visible = $true
        $icona.ShowBalloonTip(20000)
        Start-Sleep -Seconds 12
        $icona.Dispose()
    }
    catch {
        Scrivi "! La notifica non e' comparsa: $_"
    }
}

function Esci {
    param([string]$Esito, [string]$Nota, [int]$Codice = 0)
    Scrivi "ESITO $Esito - $Nota"
    Annota -Esito $Esito -Nota $Nota
    if (Test-Path $lucchetto) { Remove-Item $lucchetto -Force -ErrorAction Ignore }
    exit $Codice
}

Scrivi "Giro $Tipo avviato$(if ($Dettaglio) { " - $Dettaglio" })"

# --- La ripianificazione non ha bisogno di tutto il resto --------------------

if ($Tipo -eq 'pianifica') {
    Set-Location $radice
    $uscita = & npm run pianifica 2>&1
    $uscita | Out-File -FilePath $fileLog -Append -Encoding utf8
    if ($LASTEXITCODE -ne 0) {
        Avvisa 'Vitanera: pianificazione fallita' "Gli appuntamenti dal calendario non sono stati riscritti. Vedi $fileLog"
        Esci -Esito 'errore' -Nota 'pianificazione fallita' -Codice 1
    }
    Esci -Esito 'ok' -Nota 'appuntamenti ripianificati'
}

# --- Tre ragioni per non partire --------------------------------------------

if (-not $Forza) {
    if (Test-Path $bloccato) {
        $motivo = (Get-Content $bloccato -Raw).Trim()
        Scrivi "Fermo: c'e' un blocco da un giro precedente. $motivo"
        Esci -Esito 'saltato' -Nota 'blocco attivo'
    }

    if (Test-Path $lucchetto) {
        $eta = (Get-Date) - (Get-Item $lucchetto).LastWriteTime
        if ($eta.TotalMinutes -lt $MINUTI_LUCCHETTO) {
            Scrivi "Fermo: un altro giro e' in corso da $([int]$eta.TotalMinutes) minuti."
            Esci -Esito 'saltato' -Nota 'giro gia in corso'
        }
        Scrivi "Lucchetto vecchio di $([int]$eta.TotalMinutes) minuti: lo scavalco."
        Remove-Item $lucchetto -Force -ErrorAction Ignore
    }

    if ($Tipo -eq 'sorveglianza' -and (Test-Path $ultimo)) {
        $eta = (Get-Date) - (Get-Item $ultimo).LastWriteTime
        if ($eta.TotalMinutes -lt $MINUTI_PAUSA) {
            Scrivi "Fermo: il giro precedente e' finito $([int]$eta.TotalMinutes) minuti fa."
            Esci -Esito 'saltato' -Nota 'troppo vicino al giro precedente'
        }
    }
}

"$PID $(Get-Date -Format s)" | Set-Content -Path $lucchetto -Encoding utf8

# --- L'albero deve essere pulito --------------------------------------------
#
# Un giro fallito lascia dietro file modificati e non committati. Se il giro
# dopo partisse lo stesso, li commetterebbe alla cieca insieme ai propri.

Set-Location $radice
$sporco = & git status --porcelain
if ($sporco) {
    $elenco = ($sporco | Select-Object -First 12) -join "`n"
    Scrivi "Albero sporco prima di cominciare:`n$elenco"
    "Albero di lavoro sporco alle $($avvio.ToString('s')). Guarda git status e sistema, poi cancella questo file." |
        Set-Content -Path $bloccato -Encoding utf8
    Avvisa 'Vitanera: giri fermi' "Il repository ha modifiche non committate da un giro precedente. I giri restano fermi finche' non sistemi e cancelli .giri\bloccato"
    Esci -Esito 'errore' -Nota 'albero di lavoro sporco' -Codice 1
}

# --- La sessione -------------------------------------------------------------

$claude = (Get-Command claude -ErrorAction Ignore).Source
if (-not $claude) {
    Avvisa 'Vitanera: claude non trovato' "L'eseguibile claude non e' nel PATH del task. I giri sono fermi."
    Esci -Esito 'errore' -Nota 'claude non trovato' -Codice 1
}

$richiesta = "/giro-automatico $Tipo"
if ($Dettaglio) { $richiesta += " $Dettaglio" }
Scrivi "Richiesta: $richiesta"

$lavoro = Start-Job -ScriptBlock {
    param($exe, $richiesta, $dir)
    Set-Location $dir
    $uscita = & $exe -p $richiesta --dangerously-skip-permissions --output-format text 2>&1
    $uscita
    "__CODICE__$LASTEXITCODE"
} -ArgumentList $claude, $richiesta, $radice

if (-not (Wait-Job $lavoro -Timeout ($MINUTI_TIMEOUT * 60))) {
    Stop-Job $lavoro
    Remove-Job $lavoro -Force
    Scrivi "! La sessione non e' finita entro $MINUTI_TIMEOUT minuti: interrotta."
    "Sessione interrotta per timeout alle $((Get-Date).ToString('s')). Controlla che il repository sia pulito prima di ripartire." |
        Set-Content -Path $bloccato -Encoding utf8
    Avvisa 'Vitanera: giro interrotto' "La sessione ha superato i $MINUTI_TIMEOUT minuti ed e' stata fermata. Controlla il repository, poi cancella .giri\bloccato"
    Esci -Esito 'errore' -Nota 'timeout della sessione' -Codice 1
}

$uscita = Receive-Job $lavoro
Remove-Job $lavoro -Force

$testo = ($uscita | ForEach-Object { $_.ToString() }) -join "`n"
$testo | Out-File -FilePath $fileLog -Append -Encoding utf8

$codice = 0
if ($testo -match '__CODICE__(\d+)') { $codice = [int]$Matches[1] }

# --- Che cosa ha detto -------------------------------------------------------
#
# La skill chiude sempre con una riga `ESITO: ...`. La sua assenza e' gia' un
# sintomo: vuol dire che la sessione e' morta a meta' del giro.

$riga = ($uscita | ForEach-Object { $_.ToString() } | Where-Object { $_ -match '^\s*ESITO:' } | Select-Object -Last 1)

if ($codice -ne 0 -or -not $riga -or $riga -match 'ESITO:\s*errore') {
    $motivo = if ($riga) { $riga.Trim() } elseif ($codice -ne 0) { "la sessione e' uscita con codice $codice" } else { 'la sessione non ha riferito un esito' }
    "$motivo (giro delle $($avvio.ToString('HH:mm')), log in $fileLog)" | Set-Content -Path $bloccato -Encoding utf8
    Avvisa 'Vitanera: giro fallito' "$motivo`nI giri restano fermi finche' non cancelli .giri\bloccato"
    Esci -Esito 'errore' -Nota $motivo -Codice 1
}

(Get-Date -Format s) | Set-Content -Path $ultimo -Encoding utf8
Esci -Esito 'ok' -Nota $riga.Trim()
