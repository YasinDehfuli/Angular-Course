import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
    selector: '[appSpecialElement]',
    standalone: true,
})
export class SpecialElementDirective implements OnInit {
    constructor(el : ElementRef) {
        console.log('SpecialElementDirective Works!');
    }

    ngOnInit() {
        console.log('SpecialElementDirective Works on Init!');
    }

    @HostListener('mouseenter')
    public mouseEnter() {
        console.log("runs")
    }
}
