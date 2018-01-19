import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/RX';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) {
    // o snapshot é como se fosse uma foto desse exato momemento da rota.
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
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
