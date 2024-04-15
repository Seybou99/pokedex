import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `Liste de pokemons`,
  styles: []
})
export class AppComponent {
  pokemonList = ['Bulbizarre', 'Salameche', 'Carapuce'];

  ngOnInit(){
    console.log(this.pokemonList)
    this.selectPokemon('Salameche')
  }

  selectPokemon(pokemonName: string): void {
    console.log(`Vous avez cliqué sur le pokemon ${pokemonName}`);
  }

}
