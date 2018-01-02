import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  // Declarations, Imports, Providers e Bootstrap são metadados.
  declarations: [ // Dentro de declarations é onde colocamos todos os componentes, diretivas e pipes que vamos usar nesse módulo.
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [ // Aqui em Imports é onde colocamos todos os módulos que iremos utilizar dentro desse componente ou que precisamo usar em algum componente que foi declarado nesse módulo em Declarations.
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule
  ],
  providers: [], // Aqui em Providers é onde colocamos todos os serviços que iremos utilizar nos componentes que foram declarados em Declarations. E se tivermos mais módulos de funcionalidade, os serviços vão servir de escopo para toda a aplicação, como por exemplo serviços de autenticação, pois aqui eles possuem o escopo global da aplicação.
  bootstrap: [AppComponent] // Aqui informações qual é o componente principal que usaremos como o viewport do projeto.
})
export class AppModule { }
