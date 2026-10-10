import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LanguageService } from './i18n/language.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the hero headline in Spanish', () => {
    const fixture = TestBed.createComponent(AppComponent);
    TestBed.inject(LanguageService).set('es');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Mejoramos y automatizamos');
  });

  it('should switch the content to English', () => {
    const fixture = TestBed.createComponent(AppComponent);
    TestBed.inject(LanguageService).set('en');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('We improve and automate');
    expect(document.documentElement.lang).toBe('en');
  });
});
