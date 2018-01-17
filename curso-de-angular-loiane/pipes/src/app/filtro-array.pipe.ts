import { Pipe, PipeTransform } from '@angular/core';
/*
  O que é um Pipe puro: Um pipe puro é o pipe que não olha as modificações do valor
  que é passado como parâmetro no método 'transform', Por isso que ao fazer qualquer
  alteração no array de Livros que estamos usando no exemplo e fazendo o filtro ele
  não efetua as alterações na tela.

  Para ficar escutando as alterações efetuadas pelo pipe nós precisamos usar os pipes
  impuros.
*/
@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length === 0 || args === undefined) {
      return value;
    }

    let filter = args.toLocaleLowerCase();

    return value.filter(
      v => v.toLocaleLowerCase().indexOf(filter) != -1
    );
  }

}
