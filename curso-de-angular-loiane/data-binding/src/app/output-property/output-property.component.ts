import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
   /*
    Assim como o Input property, o Output property também pode ser declarado como um metadado do decorator Components como um array.
    outputs: ['mudouValor']
  */
  @Input() valor = 0;

  /*
    Para expor o valor que é alterado pelas funções incrementa e decrementa para o pai, no caso data-binding.component,
    é necessário usar um Evento emissor para emitir o valor para o pai. Para isso usamos a Classe 'EventEmitter'.
  */
  @Output() mudouValor = new EventEmitter();

  /*
    Aqui nós usamos o Decorator @ViewChild e passamos um parâmetro para o @ViewChild para fazer o casamento da variável do template com a
    variável do component.

    Aqui nos usamos o tipo HTMLElement e passamos um console.log() dentro do método de incremento para verificar o tipo do elemento HTML
    e vimos que o tipo correto era "ElementRef" e fizemos a alteração para acessar o elemento diretamente.
    */
  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    /*
      Toda vez que o botão incrementa for clicado será emitido um evento. Dentro de 'emit()' podemos passar qualquer valor,
      desde string a objetos.
    */
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
