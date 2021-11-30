import Swal from "sweetalert2";
import { TitleCasePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "@core/services/message.service";
import { PokemonMedium } from "@core/interfaces/pokemon.interface";
import { PokemonFirebaseService } from "@core/services/pokemon-firebase.service";

@Component({
    selector: "app-caught-up",
    templateUrl: "./caught-up.component.html",
    styleUrls: ["./caught-up.component.scss"]
})
export class CaughtUpComponent implements OnInit {

    public pokemonList: PokemonMedium[] = [];

    constructor(
        private titleCasePipe: TitleCasePipe,
        private messageSvc: MessageService,
        private pokemonFirebaseSvc: PokemonFirebaseService
    ) {}

    ngOnInit(): void {
        this.getPokemonCauthUpList();
    }

    async getPokemonCauthUpList(): Promise<void> {
        const pokemonCaughtUpList = await this.pokemonFirebaseSvc.read();
        if (pokemonCaughtUpList.length > 0) {
            this.pokemonList = pokemonCaughtUpList;
        }
    }

    async onDropPokemon(pokemon: PokemonMedium) {
        const drop = await this.messageSvc.confirm(pokemon);

        Swal.fire({
            title: `Droping ${ this.titleCasePipe.transform(pokemon.name) }`,
            html: 'Please wait...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
        });

        if (drop.isConfirmed) {
            await this.pokemonFirebaseSvc.delete(pokemon);
            Swal.close();
        }
    }

}