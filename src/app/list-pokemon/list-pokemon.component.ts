import { Component } from '@angular/core';
import { POKEMONS } from '../api-pokemons';
import { Pokemon } from '../pokemon.models';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {
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
