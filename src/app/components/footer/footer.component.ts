import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    @Input({required: true})
    public name!: string;

    title = 'Hello World'
    description = 'This is a footer'
    uniqueClass = 'classColor'

    public onCLick(event:Event, value:string) {
        event.preventDefault();
        this.uniqueClass = value
    }
}
