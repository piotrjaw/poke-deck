import { TestBed, inject } from '@angular/core/testing';

import { PokemonIndexProviderService } from './pokemon-index-provider.service';

describe('PokemonIndexProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonIndexProviderService]
    });
  });

  it('should be created', inject([PokemonIndexProviderService], (service: PokemonIndexProviderService) => {
    expect(service).toBeTruthy();
  }));
});
