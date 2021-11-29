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
        this.getCauthUpPokemons();
    }

    async getCauthUpPokemons(): Promise<void> {
        const pokemonList = await this.pokemonFirebaseSvc.read();
        if (pokemonList.length > 0) {
            this.pokemonList = pokemonList;
        }
    }

}