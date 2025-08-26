import { Component } from '@angular/core';
import { WaveDivider } from '../wave-divider/wave-divider';
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [WaveDivider, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class Header {
  
}
