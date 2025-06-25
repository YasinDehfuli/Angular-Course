import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";
import {TodosComponent} from "./components/todo/todos/todos.component";
import {NgIfComponent} from "./components/directives-learn/ng-if/ng-if.component";
import {TestDirective} from "./test.directive";

@Component({
    imports: [RouterModule, TodosComponent, NgIfComponent, TestDirective],
    selector: 'app-routes',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true
})
export class AppComponent {
    title = 'Angular-Course';
}
