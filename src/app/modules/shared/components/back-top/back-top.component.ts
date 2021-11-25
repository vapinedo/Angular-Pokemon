import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: "app-back-top",
    templateUrl: "./back-top.component.html",
    styleUrls: ["./back-top.component.scss"]
})
export class BackTopComponent {

    constructor( 
      @Inject(DOCUMENT) private document: Document
    ) {}

    onBackTop() {
      this.document.documentElement.scrollTop = 0;
    }
}