import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from '../../models/todo.model';

@Component({
    selector: 'add-todo',
    templateUrl: './addtodo.component.html'
})
export class AddTodoComponent {

    public todo: Todo = new Todo(1, "Create new tutorial", "About Angular and Web API", "11-11-2017", false);

    constructor(private http: Http) {
    }

    public postTodo(todo: Todo) {

        var baseUrl = "http://localhost:50001/";

        this.http.post(baseUrl + 'api/Todoes', this.todo).subscribe(result => {

            console.log("result : " + result);
        }, error => console.error(error));
    }
}
