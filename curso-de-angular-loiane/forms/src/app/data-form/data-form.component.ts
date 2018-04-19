import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // cada campo passa a ser um controle
    // Essa é forma mais verbosa de se escrever o formulário
    // this.formulario = new FormGroup({
    //   // Aqui podemos passar um valor inicial como um nome.
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    // Essa forma é a mesma coisa da forma acima, mas de forma simplificada.
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }

}
