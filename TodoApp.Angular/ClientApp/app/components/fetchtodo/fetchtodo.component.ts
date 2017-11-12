import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from '../../models/todo.model';

@Component({
    selector: 'fetch-todo',
    templateUrl: './fetchtodo.component.html'
})
export class FetchTodoComponent {

    public todoes: Todo[];

    constructor(http: Http) {

        var baseUrl = "http://localhost:50001/";

        http.get(baseUrl + 'api/Todoes').subscribe(result => {

            this.todoes = result.json() as Todo[];
            console.log("this.todoes.length : " + this.todoes.length);
        }, error => console.error(error));
    }
}
