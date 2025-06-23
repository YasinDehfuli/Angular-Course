import {Component} from '@angular/core';
import {TodoComponent} from "../todo/todo.component";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-todo-list',
    imports: [
        TodoComponent,
        NgForOf
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

    doInsert(title: string) {
        this.todos.push({id: Math.random(), title:  title})
    }
}
