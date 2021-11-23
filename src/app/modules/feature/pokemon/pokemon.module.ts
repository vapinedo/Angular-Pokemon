import { NgModule } from '@angular/core';

import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonHomeComponent } from './home/pokemon-home.component';

const modules = [
    PokemonRoutingModule
];

const components = [
    PokemonHomeComponent
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [modules]
})
export class PokemonModule { }