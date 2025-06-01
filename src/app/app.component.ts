import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";
import {TodosComponent} from "./components/todo/todos/todos.component";

@Component({
    imports: [RouterModule, TodosComponent],
    selector: 'app-routes',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Angular-Course';
}
