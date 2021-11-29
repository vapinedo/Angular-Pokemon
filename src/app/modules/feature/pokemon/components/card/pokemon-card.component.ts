import Swal from "sweetalert2";
import { TitleCasePipe } from "@angular/common";
import { Component, Input } from '@angular/core';
import { MessageService } from '@core/services/message.service';
import { PokemonMedium } from '@core/interfaces/pokemon.interface';
import { PokemonFirebaseService } from '@core/services/pokemon-firebase.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  providers: [TitleCasePipe]
})
export class PokemonCardComponent {

  @Input() pokemon!: PokemonMedium;

  constructor(
    private messageSvc: MessageService,
    private titleCasePipe: TitleCasePipe,
    private pokemonFirebaseSvc: PokemonFirebaseService
  ) {}

  async onCatchPokemon(pokemon: PokemonMedium) {
    Swal.fire({
      title: `Catching ${ this.titleCasePipe.transform(pokemon.name) }`,
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    const pokemonExists = await this.pokemonFirebaseSvc.chechExistsById(pokemon.id.toString());
    Swal.close();
   
    if (pokemonExists) {
      this.messageSvc.pokemonAlreadyExists(pokemon);
    } else {
      await this.pokemonFirebaseSvc.create(pokemon);
      this.messageSvc.pokemonCatched(pokemon);
    }
  }

}