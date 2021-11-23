import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonHomeComponent } from './home/pokemon-home.component';

const routes: Routes = [
  { path: '', component: PokemonHomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }