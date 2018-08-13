import { TestBed, inject } from '@angular/core/testing';

import { PokemonIndexProvider } from './pokemon-index.provider';

describe('PokemonIndexProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonIndexProvider]
    });
  });

  it('should be created', inject([PokemonIndexProvider], (service: PokemonIndexProvider) => {
    expect(service).toBeTruthy();
  }));
});
