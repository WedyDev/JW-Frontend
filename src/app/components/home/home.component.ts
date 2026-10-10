import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ProcessComponent } from '../process/process.component';
import { TechComponent } from '../tech/tech.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

/** Landing de JW Consultora: solo compone las secciones. */
@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    ProjectsComponent,
    ProcessComponent,
    TechComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
