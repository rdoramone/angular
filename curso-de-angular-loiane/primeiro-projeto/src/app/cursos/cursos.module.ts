import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursosDetalheComponent
  ],
  exports: [ // Esse metadado é usado para expor Components, Diretivas e Pipes Declarados nesse módulo, para outros módulos.
    CursosComponent
  ]
})
export class CursosModule { }
