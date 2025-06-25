import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";
import {TodosComponent} from "./components/todo/todos/todos.component";
import {NgIfComponent} from "./components/directives-learn/ng-if/ng-if.component";

@Component({
    imports: [RouterModule, TodosComponent, NgIfComponent],
    selector: 'app-routes',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Angular-Course';
}
