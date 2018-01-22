import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/RX';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosSerive: CursosService) {
    // o snapshot é como se fosse uma foto desse exato momemento da rota.
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursosSerive.getCurso(params['id']);

        if (this.curso == null) {
          /*
            Caso seja necessário passar um parâmetro para o redirecionamento de página
            nós podemos passar da mesma forma que usamos no 'routerLink'.
            
            Exemplo:
              this.router.navigate(['/curso', this.id]);
          */
          this.router.navigate(['/nao-encontrado']);
        }
      }
    );
  }
  /*
    Abaixo estamos usando o método 'unsubscribe', porque mesmo depois da Classe CursoDetalheComponent
    ter sido destruída o 'subscribe' pode continuar vivo. E como boa prática nós fazemos o 'unsubscribe'.
  */
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
