import { Component, inject } from '@angular/core';
import { SERVICE_ICONS, ServiceId } from '../../data/landing.data';
import { LanguageService } from '../../i18n/language.service';
import { ContactIntentService } from '../../shared/contact-intent.service';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeadComponent } from '../../shared/section-head.component';

@Component({
  selector: 'app-services',
  imports: [RevealDirective, SectionHeadComponent, IconComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  readonly t = inject(LanguageService).t;
  readonly icons = SERVICE_ICONS;
  private readonly contactIntent = inject(ContactIntentService);

  /** El enlace hace el scroll nativo a #contacto; aquí solo se preselecciona el servicio. */
  quote(id: ServiceId): void {
    this.contactIntent.selectedService.set(id);
  }
}
