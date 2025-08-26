import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  imports: [],
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  timeline = [
    { week: 'Week 1–2', desc: 'Requirements & brainstorming' },
    { week: 'Week 3', desc: 'First prototype design' },
    { week: 'Week 5', desc: 'Integrated external API' },
    { week: 'Current', desc: 'Testing & refining user flows' }
  ];


  updates = [
    'Currently working on secure login with JWT — figuring out token storage is trickier than expected!',
    'Experimenting with hover animations in Angular — small detail, but huge impact.'
  ];
}
