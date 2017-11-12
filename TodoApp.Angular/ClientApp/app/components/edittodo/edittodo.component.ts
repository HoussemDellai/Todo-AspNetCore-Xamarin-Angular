import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params } from "@angular/router";
import { Todo } from '../../models/todo.model';

@Component({
    selector: 'edit-todo',
    templateUrl: './edittodo.component.html'
})

export class EditTodoComponent implements OnInit, OnDestroy {

    todoId: number;
    private sub: any;
    public todo: Todo = new Todo();

    constructor(private route: ActivatedRoute, private http: Http) { }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {

            this.todoId = +params['todoId']; // (+) converts string 'id' to a number

            console.log("this.todoId : " + this.todoId);

            // In a real app: dispatch action to load the details here.

            var baseUrl = "http://localhost:50001/";

            this.http.get(baseUrl + 'api/Todoes/' + this.todoId).subscribe(result => {

                this.todo = result.json() as Todo;
                console.log("this.todo : " + this.todo);
            }, error => console.error(error));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    
    public putTodo(todo: Todo) {

        var baseUrl = "http://localhost:50001/";

        this.http.post(baseUrl + 'api/Todoes', this.todo).subscribe(result => {

            console.log("result : " + result);
        }, error => console.error(error));
    }
}
