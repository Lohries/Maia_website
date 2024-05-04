import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { SectionWelcomeComponent } from './components/section-welcome/section-welcome.component';
import { SectionEndingComponent } from './components/section-ending/section-ending.component';
import { MembersComponent } from './components/members/members.component';
import { InmoovComponentComponent } from './components/inmoov-component/inmoov-component.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, NavbarComponent, CardsComponent, SectionWelcomeComponent, SectionEndingComponent, MembersComponent, InmoovComponentComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Maia';
}
