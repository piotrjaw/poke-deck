import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {
  private pokemon: Pokemon;
  private nextId: number;
  private previousId: number;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  goBack(): void {
    this.router.navigate(['']);
  }

  getPokemon(id: number): void {
    this.pokemonService
      .getPokemons(id);
  }

  ngOnInit(): void {
    this.pokemonService.pokemons$
      .subscribe(([pokemon]) => this.pokemon = pokemon);
    this.pokemonService.nextId$
      .subscribe(nextId => this.nextId = nextId);
    this.pokemonService.previousId$
      .subscribe(previousId => this.previousId = previousId);
    this.route
      .params
      .subscribe(({ id }) => this.getPokemon(Number(id)));
  }
}
