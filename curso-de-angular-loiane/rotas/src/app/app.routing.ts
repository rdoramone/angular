import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    /*
        Para colocar um caminho que tenha um parâmetro no final da url, por exemplo, um id.
        Nós colocamos sempre o ':' dois pontos, para indicar que é um parâmetro
        e o nome do parâmetro de sua preferência.
            Exemplo: 
                'cursos/:id'
    */
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    { path: 'nao-encontrado', component: CursoNaoEncontradoComponent },
    { path: '', component: HomeComponent }
];
// a propriedade 'forRoot' me mostra todas as rotas do projeto.
// Para criar uma rota de funcionalidade por exemplo "Cursos" eu uso o método forChild no lugar de forRoot
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
