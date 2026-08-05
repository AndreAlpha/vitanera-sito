import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AUTHORSHIP_NOTICE } from '../../core/config/site.config';

/**
 * Chi pensa l'analisi e chi la scrive.
 *
 * Sta sotto la firma e non in fondo alla pagina di proposito: è una precisazione
 * su **chi** sta parlando, e chi sta parlando si vuole sapere prima di leggere,
 * non dopo. Nella stessa riga della firma non ci sta — è una frase, non
 * un'etichetta — ma subito sotto sì.
 *
 * Come l'avvertenza di rischio, il testo vive in una costante e il componente lo
 * mette dove serve: così vale per tutte le analisi allo stesso modo, comprese
 * quelle pubblicate prima che la dicitura esistesse, e non c'è modo di
 * dimenticarla scrivendo un articolo nuovo.
 *
 * Compare **una volta sola** per pagina, come tutte le note di questo sito: un
 * test lo verifica.
 */
@Component({
  selector: 'app-authorship-notice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <p class="byline">
      {{ notice }}
      <a routerLink="/metodologia">Come sono costruite le analisi</a>
    </p>
  `,
  styles: `
    :host {
      display: block;
    }

    .byline {
      max-width: var(--measure);
      font-size: var(--t-xs);
      line-height: var(--lh-snug);
      color: var(--text-faint);
    }

    .byline a {
      color: var(--text-muted);
      text-decoration: underline;
      text-underline-offset: 3px;
      white-space: nowrap;
    }

    .byline a:hover {
      color: var(--text-soft);
    }
  `,
})
export class AuthorshipNotice {
  protected readonly notice = AUTHORSHIP_NOTICE;
}
