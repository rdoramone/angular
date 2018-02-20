import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostratMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;

      this.mostratMenuEmitter.emit(true);

      this.router.navigate(['/']);
    } else {
      this.mostratMenuEmitter.emit(false);

      this.usuarioAutenticado = false;
    }
  }
}
