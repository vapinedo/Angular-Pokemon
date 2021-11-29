import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firebase_database } from '@environments/environment';
import { PokemonMedium } from '@core/interfaces/pokemon.interface';
import { collection, addDoc, getDocs, getDoc } from '@firebase/firestore';

@Injectable()
export class PokemonFirebaseService {

    private readonly COLLECTION = "pokemonsCatched";

    constructor(
        private httpClient: HttpClient
    ) { }

    async read() {
        const request = await getDocs(collection(firebase_database, this.COLLECTION));
        request.forEach((item) => console.log(item.data()));
    }

    // async readbyId(id: number) {
    //     const request = await getDocs(collection(firebase_database, this.COLLECTION));
    //     request.forEach((item) => console.log(item.data()));
    // }

    async create(pokemon: PokemonMedium): Promise<unknown> {
        try {
            const docRef = await addDoc(
                collection(firebase_database, this.COLLECTION), pokemon
            );
            return docRef.id
            
        } catch (err) {
            console.error("Error adding document: ", err);
            return err;
        }
    }

}