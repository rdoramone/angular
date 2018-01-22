import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    { path: 'nao-encontrado', component: CursoNaoEncontradoComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    /*
        Aqui nós precisamos exportar o RouterModule, pois nós usamos as diretivas que pertecem
        a esse módulo como por exemplo, routerlink e routeLinkActive. Com isso nós deixamos elas
        disponíveis para serem usadas no projeto.
    */
    exports: [RouterModule]
})
export class AppRoutingModule { }
