import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@core/services/pokemon.service';
import { PokemonShort } from '@core/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemonList: PokemonShort[] = [];

  constructor( 
    private pokemonSvc: PokemonService
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
  
}