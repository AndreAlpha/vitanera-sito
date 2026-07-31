import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BiasDirection, Level } from '../../core/models/article.model';
import { Icon } from './icon';

/**
 * Rappresentazione visiva del bias descritto in un'analisi.
 * È una sintesi editoriale, non un segnale operativo.
 */
@Component({
  selector: 'app-bias-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <span class="chip badge" [class]="tone()" [attr.title]="'Bias descritto: ' + direction()">
      <app-icon [name]="icon()" [size]="12" />
      {{ label() }}
      @if (strength(); as s) {
        <span class="badge__dots" [attr.aria-label]="'Forza del segnale: ' + s">
          @for (i of dots; track i) {
            <i [class.on]="i <= strengthValue()"></i>
          }
        </span>
      }
    </span>
  `,
  styles: `
    /* Forma e tinte arrivano dal primitivo globale .chip: qui resta solo ciò
       che una pastiglia non sa fare, cioè i tre pallini della forza. */
    .badge {
      gap: var(--s-2);
    }

    .badge__dots {
      display: inline-flex;
      gap: 2px;
    }

    .badge__dots i {
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: currentColor;
      opacity: 0.25;
    }

    .badge__dots i.on {
      opacity: 1;
    }
  `,
})
export class BiasBadge {
  readonly direction = input.required<BiasDirection>();
  readonly strength = input<Level | null>(null);
  readonly prefix = input<string>('');

  protected readonly dots = [1, 2, 3];

  protected readonly label = computed(() => {
    const p = this.prefix();
    const d = this.direction();
    const text = d.replace('-', ' · ');
    return p ? `${p} ${text}` : text.charAt(0).toUpperCase() + text.slice(1);
  });

  /** La variante del primitivo `.chip` che corrisponde alla direzione. */
  protected readonly tone = computed(() => {
    const d = this.direction();
    if (d.endsWith('ribassista')) {
      return 'chip--down';
    }
    if (d.endsWith('rialzista')) {
      return 'chip--up';
    }
    return 'chip--flat';
  });

  protected readonly icon = computed(() => {
    const d = this.direction();
    if (d === 'rialzista' || d === 'neutrale-rialzista') {
      return 'arrow-up';
    }
    if (d === 'ribassista' || d === 'neutrale-ribassista') {
      return 'arrow-down';
    }
    return 'arrow-flat';
  });

  protected readonly strengthValue = computed(() => {
    switch (this.strength()) {
      case 'alta':
        return 3;
      case 'media':
        return 2;
      case 'bassa':
        return 1;
      default:
        return 0;
    }
  });
}
