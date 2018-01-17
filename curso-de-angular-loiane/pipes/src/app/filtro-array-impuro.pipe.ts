import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  // Através do metadado 'pure' nós falamos se o pipe é puro e por default ele é true.
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {
/*
  Aqui nós estamos usando herança do EcmaScript 2015 atráves do 'extends'.

  Isso significa que iremos usar a classe do FiltrosArrayPipe que possui o Pipe Puro,
  e herdaremos o método 'transform' que existe lá atualmente.
*/

}
