import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@core/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemonList: any[] = [];

  constructor( 
    private pokemonSvc: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  async getPokemonList() {
    const pokemonList = await this.pokemonSvc.getPokemonList();
    const pokemonArr = pokemonList.map((pokemon: any) => {
      const { 
        name, 
        moves,
        sprites: { other: { home: { front_default }}}
      } = pokemon;
      return { name, front_default, moves };
    });
    this.pokemonList = pokemonArr;
  }
  
}