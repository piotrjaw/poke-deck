import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  pokemons: Pokemon[];

  constructor(
    private pokemonService: PokemonService,
  ) { }

  getPokemons(): void {
    this.pokemonService.getPokemons(undefined);
  }

  ngOnInit(): void {
    this.pokemonService.pokemons$
      .subscribe(pokemons => this.pokemons = pokemons);
    this.getPokemons();
  }
}
