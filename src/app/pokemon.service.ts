import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pokemon } from './pokemon';
import { PokemonData } from './pokemon-data';
import { PokemonsData } from './pokemons-data';
import { PokemonIndexProvider } from './pokemon-index.provider';
import { Helper } from './helper';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';
  private limit = 10;
  private pokemonCache: Map<number, Pokemon[]> = new Map<number, Pokemon[]>();
  public pageCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public pageNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public pokemons$: Subject<Pokemon[]> = new Subject<Pokemon[]>();
  public nextId$: Subject<number> = new Subject<number>();
  public previousId$: Subject<number> = new Subject<number>();

  constructor(
    private helper: Helper,
    private http: HttpClient,
    private pokemonIndexProvider: PokemonIndexProvider,
  ) { }

  private transformRawPokemonData = ({ id, name, sprites: { front_default }, stats }): Pokemon[] => [({
    id,
    name,
    image: front_default,
    stats,
  })]

  public changePage(newPageNumber: number): void {
    this.pageNumber$.next(newPageNumber);
    this.getPokemons(undefined);
  }

  private updateIds(id: number): void {
    this.nextId$.next(this.getNextId(id));
    this.previousId$.next(this.getPreviousId(id));
  }

  private getNextId(id: number): number {
    const currentPosition = this.pokemonIndexProvider.pokemonIndex.indexOf(id);
    if (currentPosition === this.pokemonIndexProvider.pokemonIndex.length - 1) {
      return 0;
    }
    return this.pokemonIndexProvider.pokemonIndex[currentPosition + 1];
  }

  private getPreviousId(id: number): number {
    const currentPosition = this.pokemonIndexProvider.pokemonIndex.indexOf(id);
    if (currentPosition === 0) {
      return 0;
    }
    return this.pokemonIndexProvider.pokemonIndex[currentPosition - 1];
  }

  public getPokemons(id: number | undefined): void {
    const cacheHit = id && this.pokemonCache.get(id);
    if (cacheHit) {
      this.pokemons$.next(cacheHit);
      this.updateIds(id);
    } else {
      const request = id ?
        this._getPokemon(id) :
        this._getPokemons();
      request.subscribe(pokemons => this.pokemons$.next(pokemons));
    }
  }

  private _getPokemon(_id: number): Observable<Pokemon[]> {
    return this.http
      .get<PokemonData>(`${this.pokemonURL}${_id}/`)
      .pipe(
        tap(
          pokemon => this.pokemonCache.set(Number(pokemon.id), this.transformRawPokemonData(pokemon))
        ),
        tap(
          ({ id }) => {
            this.updateIds(Number(id));
            this.pageCount$.next(0);
          },
        ),
        map(this.transformRawPokemonData),
      );
  }

  private _getPokemons(): Observable<Pokemon[]> {
    const params = new HttpParams()
      .set('limit', `${this.limit}`)
      .set('offset', `${this.limit * this.pageNumber$.getValue()}`);
    return this.http
      .get<PokemonsData>(this.pokemonURL, { params })
      .pipe(
        tap(
          ({ count }) => this.pageCount$.next(Math.ceil(count / this.limit)),
        ),
        map(({ results }) => results.map(
          ({ url, name }) => ({
            name,
            id: this.helper.getIdFromPokemonUrl(url),
          })
        )),
      );
  }

  search(id: number): void {
    if (!this.pokemonIndexProvider.pokemonIndex.includes(id)) {
      return;
    }
    this.getPokemons(id);
  }
}
