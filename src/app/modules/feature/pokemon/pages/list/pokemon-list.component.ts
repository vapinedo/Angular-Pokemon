import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@core/services/pokemon.service';
import { PokemonMedium } from '@core/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemonList: PokemonMedium[] = [];
  
  constructor( 
    private pokemonSvc: PokemonService,
  ) {}
    
    ngOnInit(): void {
      this.getPokemonList();
    }
    
    async getPokemonList(): Promise<void> {
      const pokemonList = await this.pokemonSvc.getPokemonList();
      if (pokemonList && pokemonList.length > 0) {
        this.pokemonList = pokemonList;
      }
    }

    onScrollReachDown(): void {
      console.log("Scroll is Down")
    }
  
}