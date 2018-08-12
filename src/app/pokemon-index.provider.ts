import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Helper } from './helper';
import { PokemonsData } from './pokemons-data';

@Injectable()
export class PokemonIndexProvider {
  private pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';
  public pokemonIndex: number[];

  constructor(
    private helper: Helper,
    private http: HttpClient,
  ) {}

  createPokemonIndex(): Promise<any> {
    return new Promise((resolve) => {
      const params = new HttpParams()
        .set('limit', '1');
      this.http
        .get<any>(`${this.pokemonURL}`, { params })
        .pipe(map(({ count }) => count))
        .subscribe(
          count => {
            const listParams = new HttpParams()
              .set('limit', `${count}`);
            this.http
              .get<any>(`${this.pokemonURL}`, { params: listParams })
              .pipe(map(({ results }) => results.map(
                ({ url }) => Number(this.helper.getIdFromPokemonUrl(url))
              )))
              .subscribe(
                pokemonIndex => {
                  this.pokemonIndex = pokemonIndex;
                  resolve();
                }
              );
          }
        );
    });
  }
}
