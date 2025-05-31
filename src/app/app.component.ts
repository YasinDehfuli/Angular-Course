import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {InputComponent} from "./components/input/input.component";

@Component({
  imports: [RouterModule, HeaderComponent, FooterComponent, InputComponent],
  selector: 'app-routes',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Course';
}
