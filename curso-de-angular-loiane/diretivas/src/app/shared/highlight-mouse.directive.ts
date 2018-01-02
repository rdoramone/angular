import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

/* 
  Para escutar um evento do elemento com essa diretiva usamos a Classe, HostListener

  o HostListener é um tipo de metadado e podemos passar no nome do evento que iremos escutar como parâmentro.

*/

  // @HostListener('mouseenter') onMouseover() {
  //   this._renderer.setElementStyle(
  //     this._elementRef.nativeElement,
  //     'background-color',
  //     'yellow'
  //   );
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this._renderer.setElementStyle(
  //     this._elementRef.nativeElement,
  //     'background-color',
  //     'white'
  //   );
  // }

  // constructor(
  //   private _elementRef: ElementRef,
  //   private _renderer: Renderer
  // ) { }

  @HostListener('mouseenter') onMouseover() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
  }
  /* Permite que seja feito uma associação de um atributo HTML para uma variável, no caso abaixo a variável é 'backgroundColor' que recebe uma string */
  // Senão precisar manipular mais nenhuma propriedade, podemos usar dessa forma, senão, usar o código da linha 47 até a linha 51.
  // @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor() {
    //código extra
    return this.backgroundColor;
  }
  private backgroundColor: string;

  constructor() { }

}
