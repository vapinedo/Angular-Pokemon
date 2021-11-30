import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firebaseDB } from '@environments/environment';
import { PokemonMedium } from '@core/interfaces/pokemon.interface';
import { collection, doc, setDoc, getDocs, getDoc, deleteDoc, DocumentData } from '@firebase/firestore';

@Injectable()
export class PokemonFirebaseService {

    private readonly collectionRef = "pokemonsCatched";
    private readonly pokemonsRef = collection(firebaseDB, "pokemonsCatched");

    constructor(
        private httpClient: HttpClient
    ) { }
    
    async create(pokemon: PokemonMedium) {
        try {
            const docId = pokemon.id.toString();
            return await setDoc(doc(this.pokemonsRef, docId), pokemon);
            
        } catch (err) {
            console.error("Error adding document: ", err);
            return err;
        }
    }

    async read(): Promise<any[]> {
        const request = await getDocs(collection(firebaseDB, this.collectionRef));
        const pokemonList = request.docs.map(item => item.data());
        return pokemonList;
    }

    async readbyId(docId: string): Promise<DocumentData | undefined> {
        const docRef = doc(firebaseDB, this.collectionRef, docId);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? docSnap.data() : undefined;
    }

    async chechExistsById(docId: string) {  
        const docRef = doc(firebaseDB, this.collectionRef, docId);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? true : false;
    }

    async delete(pokemon: PokemonMedium) {
        const docID = pokemon.id.toString();
        return await deleteDoc(doc(firebaseDB, this.collectionRef, docID));
    }

}