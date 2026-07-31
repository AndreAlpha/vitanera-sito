import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/ui/icon';

/**
 * Pagina di errore.
 *
 * Chiudeva con l'avvertenza legale in riquadro: a chi ha sbagliato indirizzo
 * non serve, e il piè di pagina la riporta comunque su ogni schermata. Restano
 * una riga che spiega cos'è successo e tre rimandi — panoramica, archivio,
 * calendario — perché da qui l'unica cosa utile è ripartire da qualche parte.
 *
 * Erano cinque pastiglie in fila e un titolo da quarantadue pixel: adesso è un
 * elenco separato da filetti, allineato a sinistra come il resto del sito.
 */
@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    <section class="nf anim-in">
      <p class="eyebrow">404</p>
      <h1>Questa pagina non esiste</h1>
      <p class="nf__text">
        L’indirizzo richiesto non corrisponde ad alcun contenuto pubblicato. Può essere stato
        rimosso, rinominato o non essere mai esistito.
      </p>

      <nav class="nf__links" aria-labelledby="nf-dest">
        <p class="nf__label" id="nf-dest">Destinazioni utili</p>

        <a class="nf__link" routerLink="/">
          <span>Panoramica</span>
          <app-icon name="arrow-right" [size]="14" />
        </a>
        <a class="nf__link" routerLink="/analisi">
          <span>Archivio analisi</span>
          <app-icon name="arrow-right" [size]="14" />
        </a>
        <a class="nf__link" routerLink="/calendario">
          <span>Calendario economico</span>
          <app-icon name="arrow-right" [size]="14" />
        </a>
      </nav>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .nf {
      padding: var(--s-8) 0 var(--s-7);
      max-width: var(--measure);
    }

    h1 {
      margin-top: var(--s-3);
      font-size: var(--t-2xl);
    }

    .nf__text {
      margin-top: var(--s-4);
      font-size: var(--t-md);
      line-height: var(--lh-loose);
      color: var(--text-muted);
    }

    .nf__links {
      max-width: 40ch;
      margin-top: var(--s-7);
    }

    .nf__label {
      margin-bottom: var(--s-2);
      font-size: var(--t-xs);
      font-weight: 500;
      color: var(--text-faint);
    }

    .nf__link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--s-4);
      padding: var(--s-3) 0;
      border-top: 1px solid var(--line);
      font-size: var(--t-sm);
      color: var(--text-soft);
      transition: color var(--dur) var(--ease);
    }

    .nf__link:last-child {
      border-bottom: 1px solid var(--line);
    }

    .nf__link app-icon {
      color: var(--text-faint);
      transition: color var(--dur) var(--ease);
    }

    .nf__link:hover,
    .nf__link:hover app-icon {
      color: var(--accent);
    }

    @media (max-width: 620px) {
      .nf {
        padding: var(--s-7) 0 var(--s-6);
      }

      h1 {
        font-size: var(--t-xl);
      }

      .nf__text {
        font-size: var(--t-sm);
      }
    }
  `,
})
export class NotFound {}
