import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    { 
        path: '', 
        component: 
        PagesComponent ,
        children: [
            { path: 'users', component: DasboardComponent },
            { path: '**', redirectTo: '/users' }
        ]
    }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );