import { Component } from '@angular/core';
import { POKEMONS } from './api-pokemons';
import { Pokemon } from './pokemon.models';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemonList = POKEMONS;
  pokemonSelected: Pokemon|undefined

  ngOnInit(){
    console.log(this.pokemonList)
  }

  selectPokemon(PokemonName: string): void {
    const name: string = PokemonName

    const pokemon:Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.name == name);

    this.pokemonSelected = pokemon
  }
}
