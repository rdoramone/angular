import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
   /*
    Caso queira utilizar um Service em um componente específico. nós podemos declarar o "providers"
    dentro do Decorator "@Component". Mas utilizando dessa forma, nós teremos o número de instâncias
    de acordo com o número de declarações do metadado nos componentes. Por exemplo, se utilizar a
    "CursosServices" declarado no metadado "providers" em 3 componentes diferentes, teremos 3 instâncias
    de "CursosService".
  */
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  /*
    Lembrando que ao utilizar o "private" para a declaração do parâmetro "cursosService", "cursosService"
    passa a ser um atributo da classe "CursosComponent"
  */
  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    /*
      Aqui nós estamos nos inscrevendo para receber as notificações de novos valores de cursos.
    */
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
