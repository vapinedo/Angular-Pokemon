import { Component, OnInit } from "@angular/core";
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
        const response = await this.pokemonFirebaseSvc.delete();
        console.log(response);
    }

}