import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosComponent },
    { path: '', component: HomeComponent }
];
// a propriedade 'forRoot' me mostra todas as rotas do projeto.
// Para criar uma rota de funcionalidade por exemplo "Cursos" eu uso o método forChild no lugar de forRoot
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
