import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent } from './pages/list/pokemon-list.component';
import { PokemonSearchComponent } from './pages/search/pokemon-search.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'search/:queryString', component: PokemonSearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }