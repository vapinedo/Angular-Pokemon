import { Component, Input, OnInit } from '@angular/core';
import { PokemonShort } from '@core/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon!: PokemonShort;

  constructor() {}

  ngOnInit(): void {
  }

}