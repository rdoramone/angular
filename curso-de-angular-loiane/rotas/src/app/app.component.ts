import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() { 
    this.authService.mostratMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }
}
