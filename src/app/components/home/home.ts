import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { CreativityComponent } from '../creativity/creativity';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
