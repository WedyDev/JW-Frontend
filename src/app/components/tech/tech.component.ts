import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeadComponent } from '../../shared/section-head.component';

/**
 * Matriz de tecnologías: filas por área y columnas por ecosistema.
 * En pantallas angostas cada fila se presenta como una ficha.
 */
@Component({
  selector: 'app-tech',
  imports: [RevealDirective, SectionHeadComponent],
  template: `
    @let copy = t().tech;

    <section id="tecnologia" class="section" aria-labelledby="tecnologia-title">
      <div class="container">
        <app-section-head index="04" [label]="copy.label" titleId="tecnologia-title" [title]="copy.title">
          {{ copy.lead }}
        </app-section-head>

        <div class="matrix-wrap" appReveal>
        <table class="matrix">
          <thead>
            <tr>
              <th scope="col">{{ copy.area }}</th>
              @for (column of copy.columns; track column) {
                <th scope="col">{{ column }}</th>
              }
            </tr>
          </thead>
          <tbody>
            @for (row of copy.rows; track row.area) {
              <tr>
                <th scope="row">{{ row.area }}</th>
                @for (cell of row.cells; track $index; let c = $index) {
                  <td [attr.data-label]="copy.columns[c]" [class.is-empty]="!cell.length">
                    @if (cell.length) {
                      <ul role="list">
                        @for (tool of cell; track tool) {
                          <li>{{ tool }}</li>
                        }
                      </ul>
                    } @else {
                      <span class="empty" aria-label="—">—</span>
                    }
                  </td>
                }
              </tr>
            }
          </tbody>
        </table>
        </div>
      </div>
    </section>
  `,
  styles: `
    .matrix-wrap {
      border: 1px solid var(--c-line);
      border-radius: 6px;
      overflow: hidden;
      background: var(--c-surface);
    }

    .matrix {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
    }

    thead th {
      padding: 18px 24px;
      background: var(--c-ink);
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-align: left;
      color: #fff;
    }

    thead th:first-child {
      width: 24%;
      color: rgba(255, 255, 255, 0.55);
    }

    tbody tr + tr {
      border-top: 1px solid var(--c-line);
    }

    tbody tr {
      transition: background-color 0.2s;
    }

    tbody tr:hover {
      background: var(--c-surface-2);
    }

    tbody th,
    td {
      padding: 20px 24px;
      vertical-align: top;
      text-align: left;
    }

    tbody th {
      position: relative;
      font-size: 0.9375rem;
      font-weight: 600;
      color: var(--c-ink);
    }

    /* Marca de acento a la izquierda del área */
    tbody th::before {
      content: '';
      position: absolute;
      left: 0;
      top: 22px;
      width: 3px;
      height: 18px;
      background: var(--c-accent);
    }

    td + td,
    tbody th + td {
      border-left: 1px solid var(--c-line-soft);
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    li {
      padding: 5px 10px;
      border: 1px solid var(--c-line);
      border-radius: var(--radius);
      background: var(--c-surface);
      font-size: 0.8125rem;
      font-weight: 500;
      color: var(--c-ink);
    }

    .empty {
      color: var(--c-subtle);
    }

    /* Ficha por área en pantallas angostas */
    @media (max-width: 900px) {
      .matrix,
      .matrix tbody,
      .matrix tr,
      .matrix th,
      .matrix td {
        display: block;
        width: 100%;
      }

      .matrix-wrap {
        border: 0;
        border-radius: 0;
        overflow: visible;
        background: transparent;
      }

      thead {
        display: none !important;
      }

      tbody tr {
        margin-bottom: 14px;
        border: 1px solid var(--c-line) !important;
        border-radius: 6px;
        background: var(--c-surface);
        overflow: hidden;
      }

      tbody th {
        padding: 16px 20px;
        background: var(--c-ink);
        color: #fff;
      }

      tbody th::before {
        top: 18px;
        background: var(--c-accent-2);
      }

      td {
        padding: 14px 20px;
        border-left: 0 !important;
      }

      td + td {
        border-top: 1px solid var(--c-line-soft);
      }

      td::before {
        content: attr(data-label);
        display: block;
        margin-bottom: 8px;
        font-size: 0.6875rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--c-muted);
      }

      .matrix td.is-empty {
        display: none;
      }
    }
  `,
})
export class TechComponent {
  readonly t = inject(LanguageService).t;
}
