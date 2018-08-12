import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { PokeIndexComponent } from './poke-index/poke-index.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeSpinnerComponent } from './poke-spinner/poke-spinner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PokemonIndexProvider } from './pokemon-index.provider';
import { pokemonIndexProviderFactory } from './pokemon-index-provider.factory';

@NgModule({
  declarations: [
    AppComponent,
    PokeDetailComponent,
    PokeIndexComponent,
    PokeSearchComponent,
    PokeListComponent,
    PageNotFoundComponent,
    PaginationComponent,
    PokeSpinnerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule,
  ],
  providers: [
    PokemonIndexProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: pokemonIndexProviderFactory,
      deps: [PokemonIndexProvider],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [PokeSpinnerComponent],
})
export class AppModule { }
