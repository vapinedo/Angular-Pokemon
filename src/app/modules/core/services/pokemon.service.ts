import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BASE, POKEMON_ENDPOINT } from '@environments/environment';
import { PokemonExtended, PokemonMedium, PokemonShort } from '@core/interfaces/pokemon.interface';

@Injectable()
export class PokemonService {

    constructor(
        private httpClient: HttpClient
    ) { }

    async getPokemonList(): Promise<PokemonMedium[] | undefined> {
        try {
            const pageSize = 20;

            const request = await fetch(`
                ${URL_BASE}${POKEMON_ENDPOINT}?limit=${pageSize}&offset=${pageSize}
            `);
            const { results: pokemonShortList  } = await request.json();

            const pokemonMediumList = pokemonShortList.map((pokemon: PokemonShort) => {
                const pokemonShort = this.getPokemonByName(pokemon.name);
                return pokemonShort;
            })
            return Promise.all(pokemonMediumList);

        } catch (error) {
            console.error(error)
            return undefined;
        }
    }

    async getPokemonByName(name: string): Promise<PokemonMedium | undefined> {
        try {
            const nameWithSpaces = name.trim();
            
            return this.httpClient.get<PokemonExtended>(`
                ${URL_BASE}${POKEMON_ENDPOINT}${nameWithSpaces}
            `)
            .pipe(map((pokemon: PokemonExtended) => {
                return this.getPokemonMedium(pokemon)
            }))
            .toPromise();
            
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    private getPokemonMedium(pokemon: PokemonExtended): PokemonMedium {
        const { 
            name, 
            moves,
            sprites: { other: { home: { front_default: image }}}
        } = pokemon;
        return { name, moves, image };
    }

}