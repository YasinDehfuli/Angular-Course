import {Component} from '@angular/core';
import {TodoComponent} from "../todo/todo.component";
import {NgClass, NgForOf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";

@Component({
    selector: 'app-todo-list',
    imports: [
        TodoComponent,
        NgForOf,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        NgStyle,
        NgClass
    ],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
    casesHandling = 'case3'
    isOdd = true

    public todos = [
        {
            id: 1,
            title: 'Test',
        },
        {
            id: 2,
            title: 'Test2',
        },
        {
            id: 3,
            title: 'Test2',
        }
    ]

    doInsert(title: string) {
        this.todos.push({id: Math.random(), title: title})
    }

    getColor() {
        switch (this.casesHandling) {
            case 'case1':
                return 'red'
            case 'case2':
                return 'green'
            case 'case3':
                return 'yellow'
            default:
                return 'black'
        }
    }
}
