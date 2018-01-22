import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'nao-encontrado', component: CursoNaoEncontradoComponent },
];

@NgModule({
    /*
        Aqui como estamos usando um módulo de funcionalidades, nós precisamos trocar o método
        'forRoot' por 'forChild'.
    */
    imports: [
        RouterModule.forChild(cursosRoutes)
    ],
    exports: [RouterModule]
})
export class CursosRoutingModule { }
