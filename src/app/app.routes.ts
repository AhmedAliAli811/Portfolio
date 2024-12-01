import { Routes } from '@angular/router';
// import { Project4Component } from './project4/project4.component';
import { Project3Component } from './project3/project3.component';
import { Project2Component } from './project2/project2.component';
import { Project1Component } from './project1/project1.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project1', component: Project1Component },
  { path: 'project2', component: Project2Component },
  { path: 'project3', component: Project3Component },
  // { path: 'project4', component: Project4Component }
];
