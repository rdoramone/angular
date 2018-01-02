import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  /*
    Aqui podemos usar o template de strings para colocar um pequeno bloco de css de acordo com o style guide do angular.
    Caso seja necessário mais do que um bloco é recomendado o uso de um arquivo externo como o próprio css do componente.
  */
  /*styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
    }
    `
  ]
  */
})
export class DataBindingComponent implements OnInit {
  url = 'http://loaine.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/';

  valorAtual = '';
  valorSalvo = '';

  isMouseOver = false;

  nomeDoCurso = 'Angular';

  valorInicial = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    /*
      Para usar o intellisense do visual studio podemos usar o TypeScript e dizer que o evento que será recebido aqui é do tipo
      "KeyboardEvent", con isso podemos passar o evento com um "." na sequência para que o visual Studio de as propriedades que
      são atreladas ao "event".

      Aqui usamos dessa forma, pois a propriedade "target" é do tipo "HTMLInputElement" sendo assim precisamos definir qual o
      seu tipo senão da erro de compilação.
    */
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
