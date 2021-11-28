// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

// Pokemon Api
export const URL_BASE = "https://pokeapi.co/api/v2/";
export const POKEMON_ENDPOINT = "pokemon/";


// Firebase Api
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfhFpAYG9jLPZRlQtkXAXxs10tundFANk",
  authDomain: "angular-pokemon-f26df.firebaseapp.com",
  projectId: "angular-pokemon-f26df",
  storageBucket: "angular-pokemon-f26df.appspot.com",
  messagingSenderId: "292176426407",
  appId: "1:292176426407:web:7087362f1d95a10b59b282",
  measurementId: "G-L1L36GL5LY"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
export const firebase_database = getFirestore(firebase_app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
