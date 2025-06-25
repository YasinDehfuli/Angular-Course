import {Component, HostListener} from '@angular/core';
import {RouterModule} from "@angular/router";
import {TodosComponent} from "./components/todo/todos/todos.component";
import {NgIfComponent} from "./components/directives-learn/ng-if/ng-if.component";
import {ColorChangerDirective} from "./directives/color-changer.directive";

@Component({
    imports: [RouterModule, TodosComponent, NgIfComponent, ColorChangerDirective],
    selector: 'app-routes',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true
})
export class AppComponent {
    title = 'Angular-Course';
}
