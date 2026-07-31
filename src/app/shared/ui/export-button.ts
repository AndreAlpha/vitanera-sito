import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Icon } from './icon';

/**
 * Pulsante che scarica un file di testo generato al momento.
 *
 * Il contenuto non è precalcolato: si costruisce al clic, perché per l'intero
 * calendario sono qualche centinaio di migliaia di caratteri che non ha senso
 * tenere in memoria di chi la pagina la sta solo leggendo.
 */
@Component({
  selector: 'app-export-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <button
      class="btn btn--ghost export"
      type="button"
      [disabled]="busy()"
      [attr.aria-label]="label() + ' — scarica un file Markdown'"
      (click)="download()"
    >
      <app-icon [name]="done() ? 'check' : 'download'" [size]="15" />
      {{ done() ? 'File scaricato' : label() }}
    </button>
    @if (error()) {
      <p class="export__error" role="alert">{{ error() }}</p>
    }
  `,
  styles: `
    :host {
      display: inline-flex;
      flex-direction: column;
      gap: var(--s-2);
    }

    .export[disabled] {
      opacity: 0.6;
      cursor: progress;
    }

    .export__error {
      font-size: var(--t-xs);
      color: var(--down);
    }
  `,
})
export class ExportButton {
  readonly label = input<string>('Esporta in Markdown');
  readonly filename = input.required<string>();
  /** Costruttore del contenuto, invocato solo al clic. */
  readonly build = input.required<() => string>();

  protected readonly busy = signal(false);
  protected readonly done = signal(false);
  protected readonly error = signal<string | null>(null);

  private timer?: ReturnType<typeof setTimeout>;

  protected download(): void {
    this.busy.set(true);
    this.error.set(null);

    let url: string | null = null;
    try {
      // `build` è un input-signal che contiene una funzione: la prima chiamata
      // legge il signal, la seconda costruisce davvero il documento.
      const buildDocument = this.build();
      const blob = new Blob([buildDocument()], { type: 'text/markdown;charset=utf-8' });
      url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = this.filename();
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      link.remove();

      this.done.set(true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.done.set(false), 4000);
    } catch {
      this.error.set('Non è stato possibile generare il file. Riprova.');
    } finally {
      // L'indirizzo temporaneo va revocato, ma non prima che il browser abbia
      // avviato lo scaricamento: revocarlo nello stesso giro lo annullerebbe.
      if (url) {
        const toRevoke = url;
        setTimeout(() => URL.revokeObjectURL(toRevoke), 30_000);
      }
      this.busy.set(false);
    }
  }
}
