import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BASE, POKEMON_ENDPOINT  } from '@environments/environment';
import { PokemonExtended, PokemonMedium, PokemonShort } from '@core/interfaces/pokemon.interface';

@Injectable()
export class PokemonApiService {

    constructor(
        private httpClient: HttpClient
    ) { }

    async getAll(): Promise<PokemonMedium[] | undefined> {
        try {
            const request = await fetch(`${URL_BASE}${POKEMON_ENDPOINT}`);
            const { results: pokemonShortList } = await request.json();

            const pokemonMediumPromisesList = pokemonShortList.map((pokemon: PokemonShort) => {
                const pokemonMediumPromise = this.getByName(pokemon.name);
                return pokemonMediumPromise;
            })
            return Promise.all(pokemonMediumPromisesList);

        } catch (error) {
            console.error(error)
            return undefined;
        }
    }

    async getByPage(offset: number = 20): Promise<PokemonMedium[] | undefined> {

        const pokemonsPerPage = 20;

        try {
            const request = await fetch(`
                ${URL_BASE}${POKEMON_ENDPOINT}?limit=${pokemonsPerPage}&offset=${offset}
            `);
            const { results: pokemonShortList } = await request.json();

            const pokemonMediumPromisesList = pokemonShortList.map((pokemon: PokemonShort) => {
                const pokemonMediumPromise = this.getByName(pokemon.name);
                return pokemonMediumPromise;
            })
            return Promise.all(pokemonMediumPromisesList);

        } catch (error) {
            console.error(error)
            return undefined;
        }
    }

    async getByName(name: string): Promise<PokemonMedium | undefined> {
        try {
            const nameWithSpaces = name.trim();
            
            return this.httpClient.get<PokemonExtended>(`
                ${URL_BASE}${POKEMON_ENDPOINT}${nameWithSpaces}
            `)
            .pipe(map((pokemon: PokemonExtended) => {
                return this.getMedium(pokemon)
            }))
            .toPromise();
            
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    private getMedium(pokemon: PokemonExtended): PokemonMedium {
        const { 
            id,
            name, 
            moves,
            sprites: { other: { home: { front_default: image }}}
        } = pokemon;
        const movesCount = moves.length;
        return { id, name, movesCount, image };
    }

}