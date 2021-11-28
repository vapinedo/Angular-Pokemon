import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@core/services/pokemon.service';
import { PokemonMedium } from '@core/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  // paginate every 20 pokemons
  // 20, 40, 60, 80 pokemons, etc
  private page = 0;
  private readonly LIMIT = 980; // 1000 pokemos max
  private POKEMONS_PER_PAGE = 20;

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
      if (this.page >= this.LIMIT) return;

      this.page += this.POKEMONS_PER_PAGE;
      const pokemonList = await this.pokemonSvc.getByPage(this.page);
        
      if (pokemonList && pokemonList.length > 0) {
        this.pokemonList = [...this.pokemonList, ...pokemonList];
      }
    }
  
}