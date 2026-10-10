import { Component, input } from '@angular/core';
import { RevealDirective } from './reveal.directive';

/**
 * Encabezado de sección: índice y etiqueta a la izquierda, título y bajada a
 * la derecha. Mantiene la misma estructura en todas las secciones.
 */
@Component({
  selector: 'app-section-head',
  imports: [RevealDirective],
  template: `
    <header class="head" [class.head--dark]="dark()" [class.head--stacked]="stacked()" appReveal>
      <p class="label"><span>{{ index() }}</span>{{ label() }}</p>
      <div>
        <h2 [id]="titleId()">{{ title() }}</h2>
        <div class="lead"><ng-content /></div>
      </div>
    </header>
  `,
  styles: `
    .head {
      position: relative;
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 32px;
      padding-top: 28px;
      margin-bottom: 64px;
      border-top: 1px solid var(--c-line);
    }

    /* Barra de acento sobre la línea */
    .head::before {
      content: '';
      position: absolute;
      top: -2px;
      left: 0;
      width: 72px;
      height: 3px;
      background: var(--c-accent);
    }

    .label {
      display: flex;
      gap: 14px;
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-ink);
    }

    .label span {
      color: var(--c-accent);
      font-variant-numeric: tabular-nums;
    }

    h2 {
      max-width: 760px;
      font-family: var(--font-serif);
      font-size: clamp(1.75rem, 3.6vw, 2.6rem);
      font-weight: 500;
      line-height: 1.15;
      letter-spacing: -0.01em;
    }

    .lead {
      max-width: 680px;
      margin-top: 16px;
      font-size: 1.0625rem;
      color: var(--c-muted);
    }

    .lead:empty {
      display: none;
    }

    /* Variante en una sola columna, para usar dentro de layouts de dos columnas */
    .head--stacked {
      grid-template-columns: 1fr;
      gap: 14px;
      margin-bottom: 32px;
    }

    .head--dark {
      border-top-color: rgba(255, 255, 255, 0.2);
    }

    .head--dark::before {
      background: var(--c-accent-2);
    }

    .head--dark .label,
    .head--dark h2 {
      color: #fff;
    }

    .head--dark .label span {
      color: var(--c-accent-2);
    }

    .head--dark .lead {
      color: rgba(255, 255, 255, 0.7);
    }

    @media (max-width: 860px) {
      .head {
        grid-template-columns: 1fr;
        gap: 14px;
        margin-bottom: 40px;
      }
    }
  `,
})
export class SectionHeadComponent {
  readonly index = input.required<string>();
  readonly label = input.required<string>();
  readonly title = input.required<string>();
  readonly titleId = input.required<string>();
  readonly dark = input(false);
  readonly stacked = input(false);
}
