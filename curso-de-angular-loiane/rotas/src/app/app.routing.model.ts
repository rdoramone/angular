import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';

const appRoutes: Routes = [
    /*
        Lembrando que para usar o Lazy Loading para o carregamento de um módulo de forma dinâmica, é necessário 3 passos.

        IMPORTANTE: Para fazer o carregamento dinâmico é necessário parar a execução do ng serve para evitar erros, mas execute o mesmo do zero
        ao terminar os passos.

        1º Dentro desse arquivo 'app.routing.model', passamos o path que será acessado e como segundo objeto passamos o 'loadChildren' com o
        caminho completo do módulo de funcionalidade no qual deve ser carregado e passar '#' e o nome da classe do módulo.

        2º Retirar os imports relacionados ao módulo passado no 'loadChildren', não pode haver nenhuma declaração de import em nenhum lugar da
        aplicação.

        3º No arquivo de roteamento do meu módulo, no caso 'cursos.routing.module', o caminho principal deverá vir vazio.
    */
    { path: 'cursos',
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    { path: 'alunos',
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    /*
        Aqui nós precisamos exportar o RouterModule, pois nós usamos as diretivas que pertecem
        a esse módulo como por exemplo, routerlink e routeLinkActive. Com isso nós deixamos elas
        disponíveis para serem usadas no projeto.
    */
    exports: [RouterModule]
})
export class AppRoutingModule { }
