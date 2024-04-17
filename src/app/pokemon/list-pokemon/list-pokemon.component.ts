import { Component } from '@angular/core';
import { Pokemon } from '../pokemon.models';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = [];
  pokemonSelected: Pokemon|undefined

  constructor(private router: Router, public pokemonService: PokemonService) {}

  ngOnInit(){
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  selectPokemon(PokemonName: string): void {
    const name: string = PokemonName

    const pokemon:Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.name == name);

    this.pokemonSelected = pokemon
  }

  goToDetail(pokemon: Pokemon){
    //On recupere l'id du pokemon passé en parametre
    const id:number = pokemon.id;
    //On navigue vers le details du pokemon en question 
    this.router.navigate(['pokemon/', id]);
  }
}
