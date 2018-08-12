import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  private searchTerm$ = new Subject<number>();

  search(id: number): void {
    this.searchTerm$.next(id);
  }

  constructor(
    private pokemonService: PokemonService,
  ) {}

  ngOnInit(): void {
    this.searchTerm$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe(
        term => this.pokemonService.search(Number(term)),
      );
  }
}
