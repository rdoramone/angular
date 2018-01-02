import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
})
export class InputPropertyComponent implements OnInit {
  /*
    Aqui nós passamos o parâmetro do Decorator Input como uma string chamada "nome", que na verdade é o input property que está sendo
    passado no html. Com isso não precisamos trocar o nome do input property no HTML para o nome da variável "nomeCurso". Caso não
    queira usar o parâmetro, podemos fazer da seguinte forma que seria equivalente:

    @Input() nome: string = '';

    Ou podemos declarar os inputs como metadado do decorator Components como um array e declarar a variável nomeCurso abaixo.
    inputs: ['nomeCurso:nome']
  */

  @Input() nomeCurso: string;

  constructor() { }

  ngOnInit() {
  }

}
