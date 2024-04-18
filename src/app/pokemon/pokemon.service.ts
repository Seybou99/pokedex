import { Injectable } from '@angular/core';
import { POKEMONS } from './api-pokemons';
import { Pokemon } from './pokemon.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemonList(): Pokemon[] {
    return POKEMONS
  }
  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }
  getTypesList(): string[] {
    return [
      'Feu', 
      'Eau', 
      'Plante',
      'Insecte',
      'Normal',
      'Vol',
      'Poison',
      'Fée',
      'Psy',
      'Electrik',
      'Combat'
    ]
  }
}
