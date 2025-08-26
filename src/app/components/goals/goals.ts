import { Component } from '@angular/core';
import { Card } from "../card/card";

@Component({
  selector: 'app-goals',
  imports: [Card],
  templateUrl: './goals.html',
  styleUrl: './goals.css'
})

export class Goals {
  goals = [
    { icon: '📚', text: 'Deepening frontend frameworks (React, Blazor)' },
    { icon: '🔒', text: 'Improving cyber security skills (JWT, CORS)' },
    { icon: '⚡', text: 'Agile teamwork & CI/CD pipelines' },
    { icon: '🎨', text: 'Designing with accessibility in mind' }
  ];
}
