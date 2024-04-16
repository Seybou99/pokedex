import { Component } from '@angular/core';
import { POKEMONS } from './api-pokemons';
import { Pokemon } from './pokemon.models';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styles: []
})
export class AppComponent {
  pokemonList = POKEMONS;
  pokemonSelected: Pokemon|undefined

  ngOnInit(){
    console.log(this.pokemonList)
  }

  selectPokemon(pokemonId: string): void {
    const id: number = +pokemonId

    const pokemon:Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == id);

    this.pokemonSelected = pokemon
  }
}
