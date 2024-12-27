import { Routes } from '@angular/router';
import { ProfileSectionComponent } from './main/profile-section/profile-section.component';
import { ProjectsSectionComponent } from './main/projects-section/projects-section.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'profile',
  //   pathMatch: 'full', // Redirige vers "profile" par défaut
  // },
  {
    path: '',
    component: ProfileSectionComponent,
  },
  {
    path: 'profile',
    component: ProfileSectionComponent,
  },
  {
    path: 'projects',
    component: ProjectsSectionComponent,
  },
  {
    path: '**',
    redirectTo: '', // Redirige tout chemin non valide vers la racine
  },
  // { path: 'projects', component: ProjectsSectionComponent },
  // { path: '**', component: PageNotFoundComponent }, // Gère les chemins invalides
];
