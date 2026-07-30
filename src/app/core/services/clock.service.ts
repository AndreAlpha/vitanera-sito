import { Injectable, OnDestroy, signal } from '@angular/core';

/** Oltre questa soglia si mostra data e ora al posto del tempo trascorso. */
export const RELATIVE_LIMIT_HOURS = 12;

const TICK_MS = 15_000;

/**
 * Orologio condiviso.
 *
 * Un solo intervallo per tutta l'applicazione: i tempi relativi ("18m fa") e la
 * validità dell'indicatore operativo si aggiornano da soli senza che ogni
 * componente installi il proprio timer.
 */
@Injectable({ providedIn: 'root' })
export class ClockService implements OnDestroy {
  private readonly _now = signal(Date.now());
  private readonly handle = setInterval(() => this._now.set(Date.now()), TICK_MS);

  readonly now = this._now.asReadonly();

  ngOnDestroy(): void {
    clearInterval(this.handle);
  }
}
