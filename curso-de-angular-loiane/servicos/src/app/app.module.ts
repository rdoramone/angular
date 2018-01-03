import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursosModule
  ],
  /*
    Aqui nós estamos fornecendo o serviço CursosService de forma que ele possa ser usado
    em toda a aplicação, sem a necessidade de ser declarado novamente em outros módulos.
    Lembrando que não é necessário fazer o import do service declarado no metadado "providers".
  */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
