import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'/landing',
        loadChildren: () => import('./landing-page/landing-page.routes').then(m=>m.landingPageRoutes)
    }
];
