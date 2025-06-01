import {Component} from '@angular/core';
import {TodoComponent} from "../todo/todo.component";

@Component({
    selector: 'app-todo-list',
    imports: [
        TodoComponent
    ],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
    public todos = [{
        id: 1,
        title: 'Test',
    },
        {
            id: 2,
            title: 'Test2',
        }
    ]
}
