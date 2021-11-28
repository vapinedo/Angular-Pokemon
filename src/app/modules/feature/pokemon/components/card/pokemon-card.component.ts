import { Component, Input, OnInit } from '@angular/core';
import { PokemonMedium } from '@core/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon!: PokemonMedium;

  constructor() {}

  ngOnInit(): void {
  }

}