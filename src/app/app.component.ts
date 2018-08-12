import { Component } from '@angular/core';
import { PokeSpinnerComponent } from './poke-spinner/poke-spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pokeSpinner = PokeSpinnerComponent ;
  title = 'poke-deck';
}
