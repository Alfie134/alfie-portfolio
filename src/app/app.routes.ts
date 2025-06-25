import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { IntroductionComponent } from './components/introduction/introduction';
import { CreativityComponent } from './components/creativity/creativity';
import { ProjectsComponent } from './components/projects/projects';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'creativity', component:CreativityComponent},
    {path: 'introduction', component:IntroductionComponent},
    {path: 'projects', component:ProjectsComponent}
];
