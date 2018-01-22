import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
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
