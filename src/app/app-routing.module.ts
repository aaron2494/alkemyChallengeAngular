import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './COMPONENTS/home/home.component';
import { LoginComponent } from './COMPONENTS/login/login.component';


import { PermitionGuard } from './GUARDS/permition.guard';

const routes: Routes = [
{path:'login',component:LoginComponent},//Ruta de login
{path:'home',component:HomeComponent,canActivate:[PermitionGuard]}, //Ruta bloqueada hasta no tener autorización del login
{path:'**', redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
