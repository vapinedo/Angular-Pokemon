import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {

  pokemon: any;

  constructor( 
    private pokemonSvc: PokemonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const queryString = this.activatedRoute.snapshot.params["queryString"];
    this.pokemonSearch(queryString);
  }

  async pokemonSearch(queryString: string) {
    const pokemon = await this.pokemonSvc.getPokemonByName(queryString);
    if (pokemon) {
      this.pokemon = pokemon;
    }
  }

}