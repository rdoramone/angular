import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  constructor(private http: Http) { }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

  consultaCEP(cep, form) {
    cep.replace(/\D/g, '');

    if (cep !== "") {
      this.resetaDadosForm(form);

      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .map(dados => dados.json())
        .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados, formulario) {
    /*
      Ao utilizar o método 'setValue()' nós conseguimos popular os dados do formulário com os dados da API de CEP, mas para que os dados
      do nome e email que já foram preenchidos, sejam preservados, nós precisamos passar os valores deles que já estavam preenchidos.
      Caso haja um formulário grande com diversos campos teriamos que fazer isso manualmente para vários campos, mas para evitar esse
      trabalho, nós podemos usar o método'patchValue()', com ele nós só passamos os campos no qual receberão os dados da API, sem impactar
      os demais campos já preenchidos.
    */
    /*formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(formulario) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  onSubmit(form) {
    console.log(form.value);
    console.log(this.usuario);
  }
}
