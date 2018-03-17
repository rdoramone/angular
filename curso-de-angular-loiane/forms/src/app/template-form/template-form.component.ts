import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'Ricardo',
    email: 'rdo_ramone@hotmail.com'
  }
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    console.log(this.usuario);
  }
}
