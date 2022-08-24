import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    CharactersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
