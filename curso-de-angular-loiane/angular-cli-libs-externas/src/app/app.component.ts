import { Component } from '@angular/core';

import * as _ from 'lodash';
/*
  Aqui foi importado uma biblioteca de forma global.

  Com o '*' falamos que queremos todas as funcionalidades assim como em um select de banco de dados,
  mas podemos falar qual funcionalidade do lodash que queremos utilizar, por exemplo "addMapEntry',
  para saber os nomes das funcionalidades basta abrir a pasta do lodash no node_modules e verificar os arquivos com '_'.

  Usamos um alias para poder chamar essa biblioteca em qualquer parte, o alias usado foi o '_'.
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  list = _.map([1, 2, 3], (n) => `# ${n}`);
}
