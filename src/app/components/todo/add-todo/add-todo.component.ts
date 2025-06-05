import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
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
    @ViewChild('refWithViewChild') refWithViewChild: ElementRef | undefined

    constructor() {
        this.todoText = ''
    }

    doSendTodo() {
        this.updateTodo.emit({title: this.todoText})
        this.todoText = ''
    }

    doChangeLocalRefColor(ref: any) {
        ref.style.color = 'red'
        ref.style.backgroundColor = 'yellow'
    }

    doChangeWithViewChild() {
        this.refWithViewChild!.nativeElement.style.color = 'green'
        this.refWithViewChild!.nativeElement.style.backgroundColor = 'black'
    }
}
