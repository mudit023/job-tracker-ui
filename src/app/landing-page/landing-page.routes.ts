import { Routes } from '@angular/router';

export const landingPageRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-page.component').then(m => m.LandingPageComponent),
  },
];
