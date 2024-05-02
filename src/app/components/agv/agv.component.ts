import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-agv',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './agv.component.html',
  styleUrl: './agv.component.css'
})
export class AGVComponent {

}
