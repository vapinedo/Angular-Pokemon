import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonMedium } from '@core/interfaces/pokemon.interface';
import { PokemonApiService } from '@core/services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {

  queryString: string = "";
  pokemon!: PokemonMedium;

  constructor( 
    private pokemonApiSvc: PokemonApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.queryString = this.activatedRoute.snapshot.params["queryString"];
    this.pokemonSearch(this.queryString);
  }

  async pokemonSearch(queryString: string) {
    const queryWithSpaces = queryString.trim();

    if (queryWithSpaces.length > 0) {
      const pokemon = await this.pokemonApiSvc.getByName(queryString);
      if (pokemon) {
        this.pokemon = pokemon;
      }      
    }
    return;
  }

}