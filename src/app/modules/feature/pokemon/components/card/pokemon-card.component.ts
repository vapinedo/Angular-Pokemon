import Swal from "sweetalert2";
import { Component, Input } from '@angular/core';
import { MessageService } from '@core/services/message.service';
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
    private messageSvc: MessageService,
    private pokemonFirebaseSvc: PokemonFirebaseService
  ) {}

  async onCatchPokemon(pokemon: PokemonMedium) {
    Swal.fire({
      title: `Catching ${pokemon.name}`,
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    const response = await this.pokemonFirebaseSvc.create(pokemon);
    setTimeout(() => {
      Swal.close();
      this.messageSvc.pokemonCatched(pokemon);
    }, 1000);
  }

}