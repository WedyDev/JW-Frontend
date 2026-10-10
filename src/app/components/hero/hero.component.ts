import { Component, inject } from '@angular/core';
import { CLIENTS, COMPANY } from '../../data/landing.data';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-hero',
  imports: [IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly t = inject(LanguageService).t;
  readonly company = COMPANY;
  readonly clients = CLIENTS;
}
