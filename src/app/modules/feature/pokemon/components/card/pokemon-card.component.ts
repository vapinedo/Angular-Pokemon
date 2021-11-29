import { Component, Input } from '@angular/core';
import { PokemonMedium } from '@core/interfaces/pokemon.interface';
import { PokemonFirebaseService } from '@core/services/pokemon-firebase.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon!: PokemonMedium;

  constructor(
    private pokemonFirebaseSvc: PokemonFirebaseService
  ) {}

  async onCatchPokemon(pokemon: PokemonMedium) {
    const docRefId = await this.pokemonFirebaseSvc.create(pokemon);
    console.log(docRefId);
  }

}