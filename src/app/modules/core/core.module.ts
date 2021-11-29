import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TitleCasePipe } from '@angular/common';

import { MessageService } from './services/message.service';
import { PokemonApiService } from './services/pokemon-api.service';
import { PokemonFirebaseService } from './services/pokemon-firebase.service';

const modules = [
    HttpClientModule
];

const services = [
    TitleCasePipe,
    
    MessageService,
    PokemonApiService,
    PokemonFirebaseService
];

@NgModule({
    imports: [modules],
    providers: [services],
})
export class CoreModule { }
