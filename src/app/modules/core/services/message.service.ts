import { Injectable } from "@angular/core";
import { TitleCasePipe } from "@angular/common";
import Swal, { SweetAlertResult } from "sweetalert2";
import { PokemonMedium } from "@core/interfaces/pokemon.interface";


@Injectable()
export class MessageService {

    constructor(private titleCasePipe: TitleCasePipe) {}

    pokemonCatched(pokemon: PokemonMedium): Promise<SweetAlertResult<any>> {
        return Swal.fire({
            position: 'center',
            html: `<img src=${pokemon.image} width="60%" />`,
            icon: 'success',
            title: `${ this.titleCasePipe.transform(pokemon.name) } catched!`,
            showConfirmButton: false,
          })
    }

}