import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pokemonApi } from '@environments/environment';
import { PokemonExtended, PokemonShort } from '@core/interfaces/pokemon.interface';

@Injectable()
export class PokemonService {

    private readonly pokemonApi = pokemonApi;

    constructor(
        private httpClient: HttpClient
    ) { }

    async getPokemonList(): Promise<PokemonShort[] | undefined> {
        try {
            const request = await fetch(pokemonApi);
            const { results } = await request.json();

            const pokemonList = results.map((poke: PokemonShort) => {
                const pokemon = this.getPokemonByName(poke.name);
                return pokemon;
            })
            return Promise.all(pokemonList);

        } catch (error) {
            console.error(error)
            return undefined;
        }
    }

    async getPokemonByName(name: string): Promise<PokemonShort | undefined> {
        const nameWithSpaces = name.trim();
        try {
            return this.httpClient.get<PokemonExtended>(`${this.pokemonApi}${nameWithSpaces}`)
            .pipe(map((pokemon) => this.getPokemonShort(pokemon)))
            .toPromise();
            
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    private getPokemonShort(pokemon: PokemonExtended): PokemonShort {
        const { 
            name, 
            moves,
            sprites: { other: { home: { front_default: image }}}
        } = pokemon;
        return { name, moves, image };
    }

}