import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firebase_database } from '@environments/environment';
import { collection, addDoc, getDocs } from '@firebase/firestore';
import { PokemonExtended, PokemonMedium, PokemonShort } from '@core/interfaces/pokemon.interface';

@Injectable()
export class PokemonFirebaseService {

    constructor(
        private httpClient: HttpClient
    ) { }

    async getPokemonsFromFB() {
        const request = await getDocs(collection(firebase_database, "pokemonsCatched"));
        request.forEach((item) => console.log(item.data()));
    }

    async createPokemonToFB() {
        try {
            const docRef = await addDoc(collection(firebase_database, "pokemonsCatched"), {
                name: "Charmander",
                mover: 20,
                imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
            });
            console.log("Document written with ID: ", docRef.id);
            
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

}