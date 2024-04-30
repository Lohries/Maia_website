import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-inmoov-component',
  standalone: true,
  imports: [CardsComponent, FooterComponent],
  templateUrl: './inmoov-component.component.html',
  styleUrl: './inmoov-component.component.css'
})
export class InmoovComponentComponent {

}
