import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appColorChanger]'
})
export class ColorChangerDirective {

    constructor(public el: ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setBackground()
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.removeBackground()
    }

    setBackground() {
        this.el.nativeElement.style.background = '#000'
    }

    removeBackground() {
        this.el.nativeElement.style.background = '#777'
    }
}
