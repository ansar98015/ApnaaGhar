import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path:'home', component: HomeComponent},
    { path:'showAll', loadComponent: () => import("./components/show-all/show-all.component").then((m)=>m.ShowAllComponent)},
    { path:'propertyDetails/:id', loadComponent: () => import("./components/propertyDetails/propertyDetails.component")
        .then((m)=>m.PropertyDetailsComponent)},
    { path:'login', loadComponent: () => import("./components/login/login.component").then((m)=>m.LoginComponent)},
    { path:'createAccount', loadComponent: () => import("./components/create-account/create-account.component").then((m)=>m.CreateAccountComponent)},
    { path:'**', loadComponent: () => import("./components/not-found/not-found.component").then((m)=>m.NotFoundComponent)},
];
