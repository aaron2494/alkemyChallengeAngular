//Modulos requeridos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';//Http para conexión
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Componentes creados
import { AppComponent } from './app.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';

import { MenuDishComponent } from './COMPONENTS/home/menu-dish/menu-dish.component';
import { CurrentDishesComponent } from './COMPONENTS/home/current-dishes/current-dishes.component'

//Providers

import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MenuDishComponent,
    CurrentDishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  {provide:JWT_OPTIONS,useValue:JWT_OPTIONS},
  JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
