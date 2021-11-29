import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaughtUpComponent } from './pages/caught-up/caught-up.component';
import { PokemonListComponent } from './pages/list/pokemon-list.component';
import { PokemonSearchComponent } from './pages/search/pokemon-search.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'caught-up', component: CaughtUpComponent },
  { path: 'search/:queryString', component: PokemonSearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }