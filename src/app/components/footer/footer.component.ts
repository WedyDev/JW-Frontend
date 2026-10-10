import { Component, inject } from '@angular/core';
import { COMPANY, whatsappUrl } from '../../data/landing.data';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';
import { LogoMarkComponent } from '../../shared/logo-mark.component';

@Component({
  selector: 'app-footer',
  imports: [IconComponent, LogoMarkComponent],
  template: `
    @let copy = t().footer;

    <footer class="footer">
      <div class="cta-band">
        <div class="container cta-inner">
          <p>{{ copy.cta }}</p>
          <a href="#contacto" class="btn btn-light">
            {{ copy.ctaButton }}
            <app-icon name="arrow-right" />
          </a>
        </div>
      </div>

      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <p class="brand"><app-logo-mark /> <span><strong>JW</strong> Consultora</span></p>
            <p>{{ copy.tagline }}</p>
          </div>

          <nav [attr.aria-label]="copy.services">
            <h2>{{ copy.services }}</h2>
            <ul role="list">
              @for (service of t().services.items; track service.id) {
                <li><a href="#servicios">{{ service.title }}</a></li>
              }
            </ul>
          </nav>

          <nav [attr.aria-label]="copy.company">
            <h2>{{ copy.company }}</h2>
            <ul role="list">
              @for (link of t().nav.links; track link.id) {
                <li><a [href]="'#' + link.id">{{ link.label }}</a></li>
              }
              <li><a href="#contacto">{{ copy.contact }}</a></li>
            </ul>
          </nav>

          <div>
            <h2>{{ copy.contact }}</h2>
            <ul role="list">
              <li><a [href]="whatsapp" target="_blank" rel="noopener">WhatsApp {{ company.whatsappDisplay }}</a></li>
              <li><a [href]="'mailto:' + company.email">{{ company.email }}</a></li>
              <li>{{ t().contact.channels.scheduleValue }}</li>
              <li>{{ t().hero.facts.locationValue }}</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© {{ year }} {{ company.legalName }} {{ copy.rights }}</p>
          <p>RUC {{ company.ruc }}</p>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      background: #0f1115;
      color: rgba(255, 255, 255, 0.62);
      font-size: 0.9375rem;
    }

    .cta-band {
      background: linear-gradient(110deg, var(--c-accent-dark) 0%, var(--c-accent) 55%, #2fb886 100%);
    }

    .cta-inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding-block: 52px;
    }

    .cta-inner p {
      max-width: 680px;
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 3vw, 2.1rem);
      line-height: 1.25;
      color: #fff;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.3fr 1fr 0.7fr 1fr;
      gap: 40px;
      padding: 64px 0 56px;
    }

    .footer-grid > * {
      min-width: 0;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      font-size: 0.95rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.78);
    }

    .brand strong {
      margin-right: 4px;
      font-weight: 700;
      color: #fff;
    }

    .brand app-logo-mark {
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14);
      border-radius: 7px;
    }

    .footer-brand p:not(.brand) {
      max-width: 320px;
    }

    h2 {
      margin-bottom: 18px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--c-accent-2);
    }

    ul {
      display: grid;
      gap: 10px;
      overflow-wrap: anywhere;
    }

    ul a {
      text-decoration: none;
      transition: color 0.2s;
    }

    ul a:hover {
      color: #fff;
      text-decoration: underline;
    }

    .footer-bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 8px 24px;
      padding: 24px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      font-size: 0.8125rem;
    }

    @media (max-width: 1024px) {
      .footer-grid { grid-template-columns: 1fr 1fr; }
    }

    @media (max-width: 560px) {
      .footer-grid { grid-template-columns: 1fr; gap: 32px; }
      .cta-inner .btn { width: 100%; }
    }
  `,
})
export class FooterComponent {
  readonly t = inject(LanguageService).t;
  readonly company = COMPANY;
  readonly whatsapp = whatsappUrl();
  readonly year = new Date().getFullYear();
}
