import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'vitanera.avvertenze.presa-visione.v1';

/**
 * Traccia la presa visione delle avvertenze.
 *
 * Non è un consenso al trattamento di dati personali: il sito non profila e non
 * traccia. Serve unicamente a non riproporre la modale informativa a ogni
 * visita. Il valore è conservato nella memoria locale del browser.
 */
@Injectable({ providedIn: 'root' })
export class ConsentService {
  private readonly _acknowledged = signal<boolean>(this.read());

  readonly acknowledged = this._acknowledged.asReadonly();

  acknowledge(): void {
    this._acknowledged.set(true);
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      // Memoria locale non disponibile (modalità privata, storage pieno):
      // l'avvertenza verrà semplicemente riproposta alla visita successiva.
    }
  }

  /** Permette di rileggere le avvertenze dal piè di pagina. */
  reopen(): void {
    this._acknowledged.set(false);
  }

  private read(): boolean {
    try {
      return localStorage.getItem(STORAGE_KEY) !== null;
    } catch {
      return false;
    }
  }
}
