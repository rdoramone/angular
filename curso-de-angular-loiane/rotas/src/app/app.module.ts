import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { MaterializeModule } from 'angular2-materialize';
import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app.routing.model';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, // O BrowserModule, nós só importamos na raiz da aplicação.
    MaterializeModule,
    CursosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
