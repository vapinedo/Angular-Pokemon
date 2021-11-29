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
            html: `
                <img 
                width="60%" 
                src=${pokemon.image}
                class="animate__animated animate__rubberBand" />
            `,
            icon: 'success',
            title: `${ this.titleCasePipe.transform(pokemon.name) } catched!`,
            showConfirmButton: false,
          })
    }

}