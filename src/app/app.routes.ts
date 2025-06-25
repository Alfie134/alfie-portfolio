import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home';
import { ProjectsComponent } from './components/projects/projects';
import { CreativityComponent } from './components/creativity/creativity';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'creativity', component:CreativityComponent}
];
