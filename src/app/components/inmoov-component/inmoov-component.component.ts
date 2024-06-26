import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MembersComponent } from '../members/members.component';

@Component({
  selector: 'app-inmoov-component',
  standalone: true,
  imports: [MembersComponent, FooterComponent, NavbarComponent],
  templateUrl: './inmoov-component.component.html',
  styleUrl: './inmoov-component.component.css'
})
export class InmoovComponentComponent {

}
