import { Component } from '@angular/core';
import { CreativityComponent } from '../creativity/creativity';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CreativityComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
