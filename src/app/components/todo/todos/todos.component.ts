import { Component } from '@angular/core';
import {AddTodoComponent} from "../add-todo/add-todo.component";
import {TodoListComponent} from "../todo-list/todo-list.component";

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

}
