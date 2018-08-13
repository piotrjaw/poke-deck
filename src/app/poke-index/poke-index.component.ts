import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-poke-index',
  templateUrl: './poke-index.component.html',
  styleUrls: ['./poke-index.component.scss']
})
export class PokeIndexComponent implements OnInit {
  public pageCount: number;
  public pageNumber: number;

  constructor(
    private pokemonService: PokemonService,
  ) { }

  changePage($event: number): void {
    this.pokemonService.changePage($event);
  }

  ngOnInit() {
    this.pokemonService.pageCount$
      .subscribe(pageCount => this.pageCount = pageCount);
    this.pokemonService.pageNumber$
      .subscribe(pageNumber => {
        this.pageNumber = pageNumber;
      });
  }
}
