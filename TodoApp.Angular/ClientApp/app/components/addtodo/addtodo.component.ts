import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'add-todo',
    templateUrl: './addtodo.component.html'
})
export class AddTodoComponent {

    public todo: Todo = new Todo();

    constructor(private http: Http) {
    }

    public postTodo(todo: Todo) {

        var baseUrl = "http://localhost:50001/";

        this.http.post(baseUrl + 'api/Todoes', this.todo).subscribe(result => {

            console.log("result : " + result);
        }, error => console.error(error));
    }
}

export class Todo {

    id: number;
    title: string;
    description: string;
    createdAt: string;
    isDone: boolean;
}
