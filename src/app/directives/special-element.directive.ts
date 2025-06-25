import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[appSpecialElement]',
    standalone: true,
})
export class SpecialElementDirective implements OnInit {
    @Input() appSpecialElement!: boolean;

    constructor(el: ElementRef) {
        console.log('SpecialElementDirective Works!');
        console.log(this.appSpecialElement)
    }

    ngOnInit() {
        console.log('SpecialElementDirective Works on Init!');
    }

    @HostListener('mouseenter')
    public mouseEnter() {
        console.log("runs")
    }
}
