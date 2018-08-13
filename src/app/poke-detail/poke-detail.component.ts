import { Component, HostListener, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {
  public pokemon: Pokemon;
  private nextId: number;
  private previousId: number;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    switch (event.keyCode) {
      case 27:
        this.router.navigate(['']);
        break;
      case 37:
        if (this.previousId > 0) {
          this.router.navigate(['/pokemon', this.previousId]);
        }
        break;
      case 39:
        if (this.nextId > 0) {
          this.router.navigate(['/pokemon', this.nextId]);
        }
        break;
      default:
        break;
    }
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
