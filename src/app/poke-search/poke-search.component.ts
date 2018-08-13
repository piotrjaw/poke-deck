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
  private lastId: number;
  private searchId$: Subject<number> = new Subject<number>();

  search(event: any): void {
    const inputValue = event.target.value;
    const trimmedValue = inputValue.replace(/\D/g, '');
    if (inputValue !== trimmedValue) {
      event.target.value = trimmedValue;
    }
    if (trimmedValue !== this.lastId) {
      this.searchId$.next(trimmedValue);
      this.lastId = trimmedValue;
    }
  }

  constructor(
    private pokemonService: PokemonService,
  ) {}

  ngOnInit(): void {
    this.searchId$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe(
        searchId => this.pokemonService.search(Number(searchId)),
      );
  }
}
