import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsentService } from '../../core/services/consent.service';
import { SITE } from '../../core/config/site.config';
import { Icon } from '../ui/icon';

/**
 * Avvertenza di primo accesso. Compare finché l'utente non dichiara di averla
 * letta; la presa visione è memorizzata localmente e può essere riaperta dal
 * piè di pagina.
 */
@Component({
  selector: 'app-disclaimer-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    @if (!consent.acknowledged()) {
      <div
        class="overlay no-print"
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
      >
        <div class="sheet">
          <div class="sheet__glow"></div>

          <div class="sheet__head">
            <span class="mark">
              <app-icon name="shield" [size]="20" />
            </span>
            <div>
              <p class="eyebrow">{{ site.name }} · Informativa preliminare</p>
              <h2 id="disclaimer-title">Prima di continuare, leggi con attenzione</h2>
            </div>
          </div>

          <ul class="points">
            <li>
              <app-icon name="close" [size]="14" />
              <span
                ><strong>Non è una testata giornalistica.</strong> Il sito non è registrato presso
                alcun tribunale ai sensi della L. 62/2001, non ha direttore responsabile e non ha
                periodicità prestabilita.</span
              >
            </li>
            <li>
              <app-icon name="close" [size]="14" />
              <span
                ><strong>Non è consulenza finanziaria.</strong> Nessun contenuto costituisce
                raccomandazione di investimento, consulenza personalizzata, ricerca in materia di
                investimenti o sollecitazione al pubblico risparmio.</span
              >
            </li>
            <li>
              <app-icon name="close" [size]="14" />
              <span
                ><strong>L’autore non è un soggetto abilitato.</strong> Non è iscritto all’Albo OCF
                e non è vigilato da CONSOB o Banca d’Italia. La lettura non instaura alcun rapporto
                di consulenza.</span
              >
            </li>
            <li>
              <app-icon name="alert" [size]="14" />
              <span
                ><strong>Rischio elevato.</strong> Oro, valute, materie prime, derivati e strumenti
                a leva possono comportare la perdita totale — e, con la leva, superiore — del
                capitale. I risultati passati non indicano quelli futuri.</span
              >
            </li>
            <li>
              <app-icon name="info" [size]="14" />
              <span
                ><strong>Dati non in tempo reale.</strong> I valori citati sono riferimenti tratti
                da fonti pubbliche al momento della redazione e possono essere imprecisi o
                superati.</span
              >
            </li>
          </ul>

          <p class="closing">
            Ogni decisione è assunta dal lettore in piena autonomia e sotto la propria esclusiva
            responsabilità. Per operare, rivolgersi a un consulente finanziario abilitato.
          </p>

          <div class="sheet__foot">
            <button type="button" class="btn btn--gold" (click)="consent.acknowledge()">
              Ho letto e compreso
              <app-icon name="check" [size]="15" />
            </button>
            <a class="btn btn--ghost" routerLink="/avvertenze" (click)="consent.acknowledge()">
              Leggi le avvertenze complete
            </a>
          </div>
        </div>
      </div>
    }
  `,
  styles: `
    .overlay {
      position: fixed;
      inset: 0;
      z-index: 200;
      display: grid;
      place-items: center;
      padding: 24px;
      background: rgba(5, 5, 4, 0.82);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      animation: fade-in 0.35s var(--ease) both;
      overflow-y: auto;
    }

    .sheet {
      position: relative;
      width: min(660px, 100%);
      max-height: calc(100vh - 48px);
      overflow-y: auto;
      padding: 30px 32px 26px;
      border: 1px solid rgba(233, 185, 73, 0.24);
      border-radius: var(--r-xl);
      background: linear-gradient(180deg, #16130e, #0c0b0a 60%);
      box-shadow: var(--shadow-lg);
      animation: fade-up 0.45s var(--ease) both;
    }

    .sheet__glow {
      position: absolute;
      inset: -1px -1px auto;
      height: 130px;
      background: radial-gradient(60% 100% at 50% 0%, rgba(233, 185, 73, 0.16), transparent 70%);
      border-radius: var(--r-xl) var(--r-xl) 0 0;
      pointer-events: none;
    }

    .sheet__head {
      position: relative;
      display: flex;
      gap: 14px;
      align-items: center;
      margin-bottom: 22px;
    }

    .mark {
      display: grid;
      place-items: center;
      width: 46px;
      height: 46px;
      flex: none;
      border-radius: 15px;
      background: linear-gradient(135deg, var(--gold-soft), var(--gold-deep));
      color: #241a06;
      box-shadow: var(--shadow-gold);
    }

    h2 {
      font-size: 21px;
      margin-top: 5px;
    }

    .points {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 18px 18px 16px;
      border: 1px solid var(--line);
      border-radius: var(--r-md);
      background: rgba(255, 255, 255, 0.022);
    }

    .points li {
      display: flex;
      gap: 10px;
      font-size: 13px;
      line-height: 1.6;
      color: var(--text-muted);
    }

    .points li app-icon {
      margin-top: 3px;
      color: var(--warn);
    }

    .points li strong {
      color: var(--text);
      font-weight: 600;
    }

    .closing {
      margin-top: 16px;
      font-size: 12.5px;
      line-height: 1.6;
      color: var(--text-faint);
    }

    .sheet__foot {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 22px;
      padding-top: 20px;
      border-top: 1px solid var(--line);
    }

    @media (max-width: 560px) {
      .sheet {
        padding: 24px 20px 20px;
      }

      h2 {
        font-size: 18px;
      }

      .sheet__foot .btn {
        width: 100%;
      }
    }
  `,
})
export class DisclaimerModal {
  protected readonly consent = inject(ConsentService);
  protected readonly site = SITE;
}
