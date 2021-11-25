import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { PokemonService } from '@core/services/pokemon.service';
import { PokemonShort } from '@core/interfaces/pokemon.interface';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: "app-back-top",
    templateUrl: "./back-top.component.html",
    styleUrls: ["./back-top.component.scss"]
})
export class BackTopComponent {

    scrollAmount = 300;
    isVisibleBackTopBtn: boolean = false;

    constructor( 
        @Inject(DOCUMENT) private document: Document
    ) {}

    @HostListener("window:scroll")
    onWindowScroll() {
      const yOffset = window.pageYOffset;
      const scrollTop = this.document.documentElement.scrollTop;
      this.isVisibleBackTopBtn = (yOffset || scrollTop) > this.scrollAmount;
    }
    
    onBackTop() {
      this.document.documentElement.scrollTop = 0;
    }
}