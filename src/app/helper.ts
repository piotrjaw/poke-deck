import { Injectable } from '@angular/core';

const idRegex = /^https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\/$/i;

@Injectable({
  providedIn: 'root'
})
export class Helper {
  constructor() {}

  public getIdFromPokemonUrl = (url) => idRegex.exec(url)[1];
}
