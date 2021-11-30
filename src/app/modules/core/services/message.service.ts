import { Injectable } from "@angular/core";
import { TitleCasePipe } from "@angular/common";
import Swal, { SweetAlertResult } from "sweetalert2";
import { PokemonMedium } from "@core/interfaces/pokemon.interface";


@Injectable()
export class MessageService {

    constructor(private titleCasePipe: TitleCasePipe) {}

    pokemonCatched(pokemon: PokemonMedium): Promise<SweetAlertResult<any>> {
        return Swal.fire({
            html: `
                <img 
                width="55%" 
                src=${pokemon.image}
                class="animate__animated animate__zoomInDown" />
            `,
            icon: 'success',
            title: `${ this.titleCasePipe.transform(pokemon.name) } catched!`,
            showConfirmButton: false,
          });
    }

    pokemonAlreadyExists(pokemon: PokemonMedium): Promise<SweetAlertResult<any>> {
        return Swal.fire({
            html: `
                <img 
                width="55%" 
                src=${pokemon.image}
                class="animate__animated animate__shakeX" />
            `,
            icon: 'warning',
            title: `Oops ${ this.titleCasePipe.transform(pokemon.name) } already catched!`,
            showConfirmButton: false,
          });
    }

    confirm(pokemon: PokemonMedium) {
        return Swal.fire({
            html: `
                <img 
                width="55%"
                src=${pokemon.image}
                class="animate__animated animate__flash animate__fadeIn" />
            `,  
            title: `Drop ${this.titleCasePipe.transform(pokemon.name)} ?`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#999',
            confirmButtonText: 'Yeah, Drop it!'
        });
    }

}