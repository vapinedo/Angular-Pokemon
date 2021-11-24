import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pokemonApi } from '@environments/environment';

@Injectable()
export class PokemonService {

    private readonly pokemonApi = pokemonApi;

    constructor(
        private httpClient: HttpClient
    ) { }

    async getPokemonList(): Promise<any> {
        try {
            const request = await fetch(pokemonApi);
            const { results } = await request.json();
            const pokemonList = results.map((poke: any) => {
                const pokemon = this.getPokemonByName(poke.name);
                return pokemon;
            })
            return Promise.all(pokemonList);

        } catch (error) {
            return error;
        }
    }

    async getPokemonByName(name: string) {
        const nameWithSpaces = name.trim();
        try {
            return this.httpClient.get(`${this.pokemonApi}${nameWithSpaces}`)
            .pipe(map(pokemon => this.getPokemonProps(pokemon)))
            .toPromise();
            
        } catch (error) {
            console.log('Error ocurred');
            return error;
        }
    }

    private getPokemonProps(pokemon: any) {
        const { 
            name, 
            moves,
            sprites: { other: { home: { front_default }}}
        } = pokemon;
        return { name, moves, front_default };
    }

}