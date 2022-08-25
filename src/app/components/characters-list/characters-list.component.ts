import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharactersResult } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  public characters?: CharactersResult[];
  private charactersSubscription?: Subscription;
  private pageNumber: number = 1;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersSubscription = this.charactersService
      .getCharacters(this.pageNumber)
      .subscribe((response) => {
        const { results } = response;
        this.characters = results;
      });
  }

  public onScroll(): void {
    this.charactersSubscription = this.charactersService
      .getCharacters(++this.pageNumber)
      .subscribe((response) => {
        const { results } = response;
        this.characters?.push(...results);
      });
  }

  ngOnDestroy(): void {
    this.charactersSubscription?.unsubscribe();
  }
}
