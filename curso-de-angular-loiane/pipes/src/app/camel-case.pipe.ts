import { Pipe, PipeTransform } from '@angular/core';
// Aqui nós temos o decorator @Pipe e dentro dele temos o nome do seletor 'camelCase'
@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
/*
  Para o funcionamento do Pipe é necessário que ele faça a implementação de uma interface chamada de PipeTransform

  Quando é implementada essa interface, nós precisamos sobreescrever o método dessa interface, no caso é o método "transform"
*/
  transform(value: any, args?: any): any {
    let values = value.split(' ');
    let result = '';

    for (let v of values) {
      result += this.capitalize(v) + ' ';
    }

    return result;
  }

  capitalize(value: string) {
    return value.substr(0, 1).toUpperCase() +
      value.substr(1).toLowerCase();
  }
}
