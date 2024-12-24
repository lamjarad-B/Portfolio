import { Routes } from '@angular/router';
import { ProfileSectionComponent } from './main/profile-section/profile-section.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full', // Redirige vers "profile" par défaut
  },
  {
    path: 'profile',
    component: ProfileSectionComponent,
  },
  // { path: 'projects', component: ProjectsSectionComponent },
  // { path: '**', component: PageNotFoundComponent }, // Gère les chemins invalides
];
