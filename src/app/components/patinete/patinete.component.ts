import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-patinete',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './patinete.component.html',
  styleUrl: './patinete.component.css'
})
export class PatineteComponent {

}
