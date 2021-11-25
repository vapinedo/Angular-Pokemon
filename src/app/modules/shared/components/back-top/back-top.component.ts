import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: "app-back-top",
    templateUrl: "./back-top.component.html",
    styleUrls: ["./back-top.component.scss"]
})
export class BackTopComponent {

  isVisible: boolean = false;
  private readonly scrollAmount = 300; // pixels

    constructor( 
      @Inject(DOCUMENT) private document: Document
    ) {}

    @HostListener("window:scroll")
    showWhenScroll() {
      const yOffset = window.pageYOffset;
      const scrollTop = this.document.documentElement.scrollTop;
      this.isVisible = (yOffset || scrollTop) > this.scrollAmount;
    }
    
    onBackTop() {
      this.document.documentElement.scrollTop = 0;
    }
}