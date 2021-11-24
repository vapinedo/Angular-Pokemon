import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonListComponent } from './pages/list/pokemon-list.component';
import { PokemonCardComponent } from './components/card/pokemon-card.component';

const modules = [
  CommonModule,
  PokemonRoutingModule
];

const components = [
  PokemonListComponent,
  PokemonCardComponent
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [modules]
})
export class PokemonModule { }