import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { PokemonService } from '@core/services/pokemon.service';
import { PokemonShort } from '@core/interfaces/pokemon.interface';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  scrollAmount = 300;
  isVisibleBackTopBtn: boolean = false;
  public pokemonList: PokemonShort[] = [];
  
  constructor( 
    private pokemonSvc: PokemonService,
    @Inject(DOCUMENT) private document: Document
  ) {}
    
    ngOnInit(): void {
      this.getPokemonList();
    }
    
    async getPokemonList() {
      const pokemonList = await this.pokemonSvc.getPokemonList();
      if (pokemonList && pokemonList.length > 0) {
        this.pokemonList = pokemonList;
      }
    }
    
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