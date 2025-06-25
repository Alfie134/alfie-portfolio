import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [NavBar],
  templateUrl: './introduction.html',
  styleUrl: './introduction.css'
})
export class IntroductionComponent {

}
