import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pokemonApi } from '@environments/environment';

@Injectable()
export class PokemonService {

    private readonly pokemonApi = pokemonApi.baseUrl;

    constructor(
        private httpClient: HttpClient
    ) { }

    public getByName(name: string): Observable<Object> {
        return this.httpClient.get(`${ pokemonApi }/${ name }`);
    }
    
}