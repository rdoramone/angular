import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {
    /* A forma abaixo utilizada para alterar o DOM não é uma forma segura, podendo ocasionar vunerabilidade na aplicação */
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    /* Para fazer a mesma alteração acima, mas de forma segura, podemos usar a versão abaixo utilizando a Dependência "Renderer" */
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'backgroundColor',
      'yellow'
    );
  }

}
