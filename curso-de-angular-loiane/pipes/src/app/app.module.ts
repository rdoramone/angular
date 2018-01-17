import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

// A alternativa para corrigir a inserção de LOCALE_ID é usar esses 2 imports e o método abaixo.
import { registerLocaleData } from '@angular/common';
import ptBR from '@angular/common/locales/pt';

registerLocaleData(ptBR);

import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    /*
      Temos 3 formas de fazer essa injeção de dependência

      Podemos usar a propriedade 'useValue', para passar apenas um valor.

      Podemos usar 'useClass' que é a forma mais comum de se utilizar. E para o 'useClass',
      nós passamos o nome da Classe a ser utilizada.

      Podemos usar 'useFactory' utilizando o padrão de projeto Factory.
    */
    /* {
      provide: LOCALE_ID,
      useValue: 'pt-PT'
    }*/
    SettingsService, {
      provide: LOCALE_ID,
      // Em 'deps' nós passamos os providers que esse LOCALE_ID precisam para funcionar
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
