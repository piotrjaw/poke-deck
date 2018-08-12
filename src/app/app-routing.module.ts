import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeIndexComponent } from './poke-index/poke-index.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PokeIndexComponent },
  { path: 'pokemon/:id', component: PokeDetailComponent },
  { path: 'pokemon', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
