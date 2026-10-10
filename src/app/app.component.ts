import { Component, afterNextRender, inject } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LanguageService } from './i18n/language.service';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  template: '<app-home />',
})
export class AppComponent {
  constructor() {
    const language = inject(LanguageService);
    afterNextRender(() => language.restore());
  }
}
