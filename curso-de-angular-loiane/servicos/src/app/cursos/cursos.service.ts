import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    /*
        Quando declaramos um atributo de uma classe ou um método como "static", significa
        que não precisamos da instância da classe para acessar o mesmo.

        Ou seja, quando as duas instâncias de "CursosService" forem criadas a variável
        "criouNovoCurso" será compartilhada entre as instâncias, pois ela é "static".
    */
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

    constructor() {
        console.log('CursosService');
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}
