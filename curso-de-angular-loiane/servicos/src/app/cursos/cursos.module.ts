import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent]
  /*
    Como no nosso AppModule já está sendo declarado o "CursosService" como "providers" não
    é necessário declara-lo aqui, a não ser que queremos utilizar o "CursosSerive" apenas para os
    Components declarados no metadado "declarations".
  */
  // providers: [CursosService]
})
export class CursosModule { }
