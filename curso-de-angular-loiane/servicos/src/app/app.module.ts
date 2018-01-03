import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';

import { LogService } from './shared/log.service';

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

    Aqui colocamos o LogService para que ele seja utilizado em toda a aplicação, pois ao
    declarar ele no AppModule ele passa a ter escopo global.
  */
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
