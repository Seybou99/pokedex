import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

@NgModule({  
  declarations: [ 
    AppComponent, 
    NotFoundComponent, PokemonFormComponent
  ],
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
