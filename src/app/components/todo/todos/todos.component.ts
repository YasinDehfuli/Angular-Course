import {Component, ViewChild} from '@angular/core';
import {AddTodoComponent} from "../add-todo/add-todo.component";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {TodoComponent} from "../todo/todo.component";

@Component({
    selector: 'app-todos',
    imports: [
        AddTodoComponent,
        TodoListComponent
    ],
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss'
})
export class TodosComponent {

    @ViewChild('todoList')
    private todoListComponent!: TodoListComponent

    doUpdateTodo(todo: { title: string}){
        this.todoListComponent.doInsert(todo.title)
    }
}
