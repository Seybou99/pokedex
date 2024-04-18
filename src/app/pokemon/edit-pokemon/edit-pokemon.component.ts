import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <div *ngIf="pokemon">
      <h2 class="text-center">{{ pokemon.name }}</h2>
      <div class="text-center">
        <img [src]="pokemon.picture">
      </div>
      <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
    </div>
  `,
  styles: [
  ]
})
export class EditPokemonComponent {

}
