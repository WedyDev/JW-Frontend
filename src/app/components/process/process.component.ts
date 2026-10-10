import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeadComponent } from '../../shared/section-head.component';

@Component({
  selector: 'app-process',
  imports: [RevealDirective, SectionHeadComponent],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css',
})
export class ProcessComponent {
  readonly t = inject(LanguageService).t;
}
