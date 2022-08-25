import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [AppComponent, CharacterCardComponent, CharactersListComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule, InfiniteScrollModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
