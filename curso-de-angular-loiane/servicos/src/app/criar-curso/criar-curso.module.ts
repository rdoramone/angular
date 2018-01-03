import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    /*
      Aqui como eu vou utilizar o componente "ReceberCursoCriadoComponent" apenas dentro do
      "CriarCursoComponent", eu não preciso declarar "ReceberCursoCriadoComponent" no metadado
      "exports".
    */
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursoComponent]
  /*
    Como no nosso AppModule já está sendo declarado o "CursosService" como "providers" não
    é necessário declara-lo aqui, a não ser que queremos utilizar o "CursosSerive" apenas para os
    Components declarados no metadado "declarations".
  */
//   providers: [CursosService]
})
export class CriarCursoModule { }
