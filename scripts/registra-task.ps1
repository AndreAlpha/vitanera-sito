# Registra nell'Utilita di pianificazione i giri descritti da
# .giri/pianificazione.json, che scrive `npm run pianifica`.
#
# I task vivono tutti sotto la cartella \Vitanera\ e vengono cancellati e
# riscritti da capo a ogni esecuzione: gli appuntamenti una-tantum scadono e
# non ha senso accumularli.
#
# Girano con LogonType Interactive, quindi non chiedono una password ma
# richiedono che l'utente sia collegato. E' la stessa condizione che serve
# comunque, perche' senza sessione non c'e' nemmeno il portachiavi di git.

$ErrorActionPreference = 'Stop'

$radice = Split-Path -Parent $PSScriptRoot
$pianificazione = Join-Path $radice '.giri\pianificazione.json'

if (-not (Test-Path $pianificazione)) {
    Write-Error "Manca $pianificazione. Eseguire prima 'npm run pianifica'."
}

$piano = Get-Content $pianificazione -Raw | ConvertFrom-Json
$percorso = '\Vitanera\'
$giro = Join-Path $radice 'scripts\giro.ps1'
$pwshExe = (Get-Process -Id $PID).Path
if (-not $pwshExe) { $pwshExe = 'pwsh.exe' }

# Impostazioni comuni. `StartWhenAvailable` recupera i giri saltati mentre il
# computer dormiva; `WakeToRun` lo sveglia per i dati, se l'alimentazione lo
# consente; `IgnoreNew` impedisce che due giri si sovrappongano.
$impostazioni = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -WakeToRun `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries `
    -MultipleInstances IgnoreNew `
    -ExecutionTimeLimit (New-TimeSpan -Hours 1)

$identita = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" -LogonType Interactive -RunLevel Limited

function New-AzioneGiro {
    param([string]$Tipo, [string]$Dettaglio)

    $argomenti = "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$giro`" -Tipo $Tipo"
    if ($Dettaglio) {
        $argomenti += " -Dettaglio `"$Dettaglio`""
    }
    New-ScheduledTaskAction -Execute $pwshExe -Argument $argomenti -WorkingDirectory $radice
}

# --- Pulizia -----------------------------------------------------------------

$vecchi = @(Get-ScheduledTask -TaskPath $percorso -ErrorAction Ignore)
foreach ($task in $vecchi) {
    Unregister-ScheduledTask -TaskName $task.TaskName -TaskPath $percorso -Confirm:$false
}
Write-Host "Rimossi $($vecchi.Count) task esistenti sotto $percorso"

# --- Giri fissi --------------------------------------------------------------

foreach ($ricorrente in $piano.ricorrenti) {
    $trigger = foreach ($ora in $ricorrente.ore) {
        $quando = [datetime]::ParseExact($ora, 'HH:mm', $null)
        if ($ricorrente.giorni -contains '*') {
            New-ScheduledTaskTrigger -Daily -At $quando
        }
        else {
            New-ScheduledTaskTrigger -Weekly -DaysOfWeek $ricorrente.giorni -At $quando
        }
    }

    Register-ScheduledTask `
        -TaskName $ricorrente.nome `
        -TaskPath $percorso `
        -Action (New-AzioneGiro -Tipo $ricorrente.tipo) `
        -Trigger $trigger `
        -Settings $impostazioni `
        -Principal $identita `
        -Description $ricorrente.descrizione `
        -Force | Out-Null

    Write-Host "  $($ricorrente.nome): $($ricorrente.ore -join ', ')"
}

# --- Appuntamenti dal calendario --------------------------------------------

foreach ($appuntamento in $piano.appuntamenti) {
    $quando = [datetimeoffset]::Parse($appuntamento.at).LocalDateTime
    if ($quando -le (Get-Date)) { continue }

    Register-ScheduledTask `
        -TaskName $appuntamento.nome `
        -TaskPath $percorso `
        -Action (New-AzioneGiro -Tipo $appuntamento.tipo -Dettaglio $appuntamento.dettaglio) `
        -Trigger (New-ScheduledTaskTrigger -Once -At $quando) `
        -Settings $impostazioni `
        -Principal $identita `
        -Description $appuntamento.dettaglio `
        -Force | Out-Null

    Write-Host "  $($appuntamento.nome): $($quando.ToString('dd/MM HH:mm')) - $($appuntamento.dettaglio)"
}

$totale = $piano.ricorrenti.Count + $piano.appuntamenti.Count
Write-Host "`nRegistrati $totale task sotto $percorso"
