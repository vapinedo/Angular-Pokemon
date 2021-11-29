import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firebaseDB } from '@environments/environment';
import { PokemonMedium } from '@core/interfaces/pokemon.interface';
import { collection, doc, setDoc, getDocs, getDoc, deleteDoc } from '@firebase/firestore';

@Injectable()
export class PokemonFirebaseService {

    private readonly COLLECTION = "pokemonsCatched";

    constructor(
        private httpClient: HttpClient
    ) { }
    
    async create(pokemon: PokemonMedium): Promise<unknown> {
        try {
            const docId = pokemon.id.toString();
            const response = await setDoc(
                doc(firebaseDB, this.COLLECTION, docId), pokemon
            );
            return response;
            
        } catch (err) {
            console.error("Error adding document: ", err);
            return err;
        }
    }
    async read(): Promise<any[]> {
        const request = await getDocs(collection(firebaseDB, this.COLLECTION));
        const pokemonList = request.docs.map(item => item.data());
        return pokemonList;
    }

    // async readbyId(id: number) {
    //     const request = await getDoc(collection(firebase_database, this.COLLECTION));
    //     request.forEach((item) => console.log(item.data()));
    // }

    async delete() {
        const docID = "D6XhgQTfRwelUAFkGNnH";
        return await deleteDoc(doc(firebaseDB, this.COLLECTION, docID));
    }

}