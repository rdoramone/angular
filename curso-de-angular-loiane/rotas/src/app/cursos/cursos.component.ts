import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from './cursos.service';

import { Subscription } from 'rxjs/RX';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription

  constructor(
    private cursoService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  // O ngOnInit é o melhor lugar para se carregar informações
  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        // queryparams também é um Behavior Subject, ou seja, ele também retorna uma inscrição.
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.router.navigate(
      ['/cursos'], 
      { queryParams: 
        { 'pagina': ++this.pagina } 
      }
    );
  }

}
