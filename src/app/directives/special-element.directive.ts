import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[SpecialElement]'
})
export class SpecialElementDirective {
    constructor(el : ElementRef) {
        console.log('SpecialElementDirective Works!');
    }
}
