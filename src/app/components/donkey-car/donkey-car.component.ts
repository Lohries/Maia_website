import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-donkey-car',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './donkey-car.component.html',
  styleUrl: './donkey-car.component.css'
})
export class DonkeyCarComponent {

}
