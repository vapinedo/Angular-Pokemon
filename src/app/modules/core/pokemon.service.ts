import { map, mergeAll, mergeMap, Observable, pluck, tap } from 'rxjs';
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

    public async getPokemonByName(name: string): Promise<any> {
        try {
            const request = await fetch(`${this.pokemonApi}${name}`);
            const response = await request.json();
            return response;
            
        } catch (error) {
            return error;
        }
    }

}