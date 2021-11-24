import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PokemonService } from './services/pokemon.service';

const modules = [
    HttpClientModule
];

const services = [
    PokemonService
];

@NgModule({
    imports: [modules],
    providers: [services],
})
export class CoreModule { }
