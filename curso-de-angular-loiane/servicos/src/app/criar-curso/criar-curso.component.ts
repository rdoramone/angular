import { Component, OnInit } from '@angular/core';

import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
  /*
    Caso queira utilizar um Service em um componente específico. nós podemos declarar o "providers"
    dentro do Decorator "@Component". Mas utilizando dessa forma, nós teremos o número de instâncias
    de acordo com o número de declarações do metadado nos componentes. Por exemplo, se utilizar a
    "CursosServices" declarado no metadado "providers" em 3 componentes diferentes, teremos 3 instâncias
    de "CursosService".
  */
  // providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursoService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(curso: string) {
    this.cursoService.addCurso(curso);
  }

}
