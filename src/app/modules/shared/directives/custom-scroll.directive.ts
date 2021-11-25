import { Directive, ElementRef, HostListener, Inject, Input } from "@angular/core";
import { DOCUMENT } from '@angular/common';


@Directive({
    selector: "[customScroll]"
})
export class CustomScrollDirective {

    @Input() scrollValue: number = 300;
    
    constructor(
        private element: ElementRef,
        @Inject(DOCUMENT) private document: Document
    ) {
        element.nativeElement.style.display="none";
    }

    @HostListener("window:scroll")
    whenScrollReachTo() {
        const yOffset = window.pageYOffset;
        const scrollTop = this.document.documentElement.scrollTop;
        if ((yOffset || scrollTop) > this.scrollValue) {
            this.element.nativeElement.style.display="block";
        } else {
            this.element.nativeElement.style.display="none";
        }
    }
    
}