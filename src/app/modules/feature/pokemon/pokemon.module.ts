import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonListComponent } from './pages/list/pokemon-list.component';
import { PokemonCardComponent } from './components/card/pokemon-card.component';
import { PokemonSearchComponent } from './pages/search/pokemon-search.component';

const modules = [
  SharedModule,
  InfiniteScrollModule,
  PokemonRoutingModule
];

const components = [
  PokemonListComponent,
  PokemonCardComponent,
  PokemonSearchComponent
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [modules]
})
export class PokemonModule { }