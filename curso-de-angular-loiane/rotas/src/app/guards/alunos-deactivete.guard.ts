import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';

import { Observable } from 'rxjs/Rx';

@Injectable()
// No uso do CanDeactivate é obrigatório passar o tipo de componente no qual iremos desativar
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
    canDeactivate(
        component: AlunoFormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log('guarda desativada');
        return component.podeMudarRota();
    }
}