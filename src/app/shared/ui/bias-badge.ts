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
    <span
      class="badge"
      [class]="'badge--' + tone()"
      [attr.title]="'Bias descritto: ' + direction()"
    >
      <app-icon [name]="icon()" [size]="13" />
      <span class="badge__text">{{ label() }}</span>
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
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 5px 12px;
      border-radius: var(--r-pill);
      border: 1px solid var(--line-strong);
      background: rgba(255, 255, 255, 0.04);
      font-size: 11.5px;
      font-weight: 600;
      letter-spacing: 0.01em;
      white-space: nowrap;
    }

    .badge--bull {
      border-color: rgba(74, 210, 149, 0.35);
      background: var(--bull-dim);
      color: var(--bull);
    }

    .badge--bear {
      border-color: rgba(255, 95, 102, 0.35);
      background: var(--bear-dim);
      color: var(--bear);
    }

    .badge--neutral {
      border-color: var(--line-strong);
      background: var(--info-dim);
      color: var(--info);
    }

    .badge__dots {
      display: inline-flex;
      gap: 3px;
      margin-left: 1px;
    }

    .badge__dots i {
      width: 4px;
      height: 4px;
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

  protected readonly tone = computed(() => {
    const d = this.direction();
    if (d.endsWith('ribassista')) {
      return 'bear';
    }
    if (d.endsWith('rialzista')) {
      return 'bull';
    }
    return 'neutral';
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
