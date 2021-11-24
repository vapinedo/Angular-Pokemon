import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@core/services/pokemon.service';

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
    if (pokemonList.length > 0) {
      this.pokemonList = pokemonList;
    }
  }
  
}