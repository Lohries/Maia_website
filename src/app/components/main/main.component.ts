import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { MembersComponent } from '../members/members.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SectionEndingComponent } from '../section-ending/section-ending.component';
import { SectionWelcomeComponent } from '../section-welcome/section-welcome.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardsComponent, FooterComponent, HomeComponent, MembersComponent, NavbarComponent, SectionEndingComponent, SectionWelcomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
