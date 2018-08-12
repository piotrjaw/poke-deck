import { PokemonIndexProvider } from './pokemon-index.provider';

export function pokemonIndexProviderFactory(provider: PokemonIndexProvider) {
  return () => provider.createPokemonIndex();
}
