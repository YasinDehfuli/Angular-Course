import {Component} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-ng-if',
    imports: [
        NgIf
    ],
    templateUrl: './ng-if.component.html',
    styleUrl: './ng-if.component.scss'
})
export class NgIfComponent {
    showAlert: boolean;

    constructor() {
        this.showAlert = true;
    }

    shouldShowAlert() {
        document.querySelector('.showAlert')!.innerHTML = 'Boom! it works'
    }
}
