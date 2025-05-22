import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./components/header.component";

@Component({
  imports: [RouterModule,HeaderComponent],
  selector: 'app-routes',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Course';
}
