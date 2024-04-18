import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon.models';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styles: [
  ]
})
export class PokemonFormComponent {
  @Input() pokemon: Pokemon|undefined;
  types: string[] = [];
  constructor(public pokemonService: PokemonService){}

  ngOnInit(): void {
    this.types = this.pokemonService.getTypesList()
  }

  /* Cette fonction permet de déterminer si le pokémon en cours d'édition possède le type passé en paramètre */
  hasType(type: string ): boolean {
    return true
  }

  /* Cette fonction permet d'ajouter le type passé en paramètre sur le pokemon en cours d'edition, si le type etait déjà affecté au pokemon il sera retiré de celui ci */
  selectType($event: Event, type: string): void {

  }

  onSubmit() {

  }
}