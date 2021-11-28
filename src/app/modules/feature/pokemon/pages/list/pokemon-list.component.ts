import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@core/services/pokemon.service';
import { PokemonMedium } from '@core/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  private page = 0;

  public pokemonList: PokemonMedium[] = [];
  
  constructor( 
    private pokemonSvc: PokemonService,
  ) {}
    
    ngOnInit(): void {
      this.getPokemonList();
    }
    
    async getPokemonList(): Promise<void> {
      const pokemonList = await this.pokemonSvc.getAll();
      if (pokemonList && pokemonList.length > 0) {
        this.pokemonList = pokemonList;
      }
    }

    async onScroll() {
      console.log("Scroll is Down")
      const pokemonList = await this.pokemonSvc.getByPage(this.page + 20);
      if (pokemonList && pokemonList.length > 0) {
        this.pokemonList = [...this.pokemonList, ...pokemonList];
      }
      console.log(this.pokemonList)
    }
  
}