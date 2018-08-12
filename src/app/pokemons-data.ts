import { Pokemon } from './pokemon';

export class PokemonsData {
  count: number;
  results: {
    id: number,
    name: string,
    map(fn: Function): Pokemon[],
  };
}
