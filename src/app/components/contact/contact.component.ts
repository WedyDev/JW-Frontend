import { Component, ElementRef, computed, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { COMPANY, whatsappUrl } from '../../data/landing.data';
import { LanguageService } from '../../i18n/language.service';
import { ContactIntentService } from '../../shared/contact-intent.service';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeadComponent } from '../../shared/section-head.component';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealDirective, SectionHeadComponent, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly t = inject(LanguageService).t;
  readonly company = COMPANY;
  /** Permite cortar el correo después de la @ en columnas angostas. */
  readonly emailUser = COMPANY.email.split('@')[0];
  readonly emailDomain = COMPANY.email.split('@')[1];
  readonly whatsappHref = computed(() => whatsappUrl(this.t().contact.whatsappGreeting));
  readonly maxMessage = 500;
  readonly sent = signal(false);

  private readonly fb = inject(NonNullableFormBuilder);
  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    company: ['', [Validators.maxLength(150)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
    phone: ['', [Validators.pattern(/^\+?[0-9\s\-()]{7,20}$/)]],
    service: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(this.maxMessage)]],
    consent: [false, Validators.requiredTrue],
  });

  constructor() {
    const intent = inject(ContactIntentService);
    effect(() => {
      const service = intent.selectedService();
      if (service) this.form.controls.service.setValue(service);
    });
  }

  showError(name: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[name];
    return control.invalid && control.touched;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.host.nativeElement.querySelector<HTMLElement>('.ng-invalid:not(form)')?.focus();
      return;
    }

    const copy = this.t().contact;
    const labels = copy.whatsappLabels;
    const { name, company, email, phone, service, message } = this.form.getRawValue();
    const serviceLabel = copy.serviceOptions.find((option) => option.id === service)?.label ?? service;
    const text = [
      copy.whatsappIntro,
      '',
      `${labels.name}: ${name}`,
      company ? `${labels.company}: ${company}` : null,
      `${labels.email}: ${email}`,
      phone ? `${labels.phone}: ${phone}` : null,
      `${labels.service}: ${serviceLabel}`,
      '',
      message,
    ]
      .filter((line) => line !== null)
      .join('\n');

    this.document.defaultView?.open(whatsappUrl(text), '_blank', 'noopener');
    this.sent.set(true);
  }

  reset(): void {
    this.form.reset();
    this.sent.set(false);
  }
}
