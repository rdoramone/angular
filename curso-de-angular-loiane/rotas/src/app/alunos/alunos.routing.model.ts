import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

const alunosRoutes: Routes = [
    /*
        Para declarar as rotas filhas nós passamos um array como terceiro parâmetro do objeto abaixo.
        Mas ao fazer isso devemos passar a tag 'router-outlet' dentro do 'alunos.component.html', com
        isso iremos renderizar sempre 2 componentes, alunos.component e um dos filhos que serão selecionados.
    */
    { path: '', component: AlunosComponent,
        children: [
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/editar', component: AlunoFormComponent }
        ]
    },
    /*
        As urls que são hard coded deve ser passadas primeiro e depois passar as urls
        que possuem parâmetros como por exemplo 'alunos/:id', caso a url com parâmetros
        seja passada primeiro que uma url hard coded podemos ter uma colisão de urls,
        por exemplo, se eu declarar primeiro a url 'alunos/:id' e depois 'alunos/novo',
        o 'novo' da segunda url é interpretado como um parâmetro, pois o parâmetro ':id'
        da primeira url pode ser qualquer valor, desde um número até uma string.
    */
    // { path: 'alunos/novo', component: AlunoFormComponent },
    // { path: 'alunos/:id', component: AlunoDetalheComponent },
    // { path: 'alunos/:id/editar', component: AlunoFormComponent }
];

@NgModule({
    /*
        Aqui como estamos usando um módulo de funcionalidades, nós precisamos trocar o método
        'forRoot' por 'forChild'.
    */
    imports: [
        RouterModule.forChild(alunosRoutes)
    ],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
