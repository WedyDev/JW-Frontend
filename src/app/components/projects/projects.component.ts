import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeadComponent } from '../../shared/section-head.component';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective, SectionHeadComponent, IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly t = inject(LanguageService).t;
}
