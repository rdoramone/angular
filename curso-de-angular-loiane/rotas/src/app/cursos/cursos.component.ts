import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];

  constructor(private cursoService: CursosService) { }
  // O ngOnInit é o melhor lugar para se carregar informações
  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

}
