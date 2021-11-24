import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@core/pokemon.service';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss']
})
export class PokemonHomeComponent implements OnInit {

  public pokemon: any;
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
      const { name, sprites: { other: { home: { front_default } } } } = pokemon;
      return { name, front_default };
    });

    this.pokemonList = pokemonArr;
  }
  
}