import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-add-todo',
    imports: [
        FormsModule
    ],
    templateUrl: './add-todo.component.html',
    styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
    todoText: string;
    @Output() updateTodo = new EventEmitter<{ title: string }>();

    constructor() {
        this.todoText = ''
    }

    doSendTodo() {
        this.updateTodo.emit({title : this.todoText})
        this.todoText = ''
    }
}
