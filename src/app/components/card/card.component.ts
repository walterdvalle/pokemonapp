import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  pokemon!: Pokemon;

  constructor(private pokemonService: PokemonService) {

  }
  ngOnInit(): void {
    this.pokemonService.getPokemon("charizard").subscribe((response: Pokemon) => {
      this.pokemon = response;
    });
  }
}
