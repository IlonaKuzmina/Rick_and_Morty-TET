import { Component, OnInit } from '@angular/core';
import { CharactersResult } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  characters?: CharactersResult[];
  pageNumber: number = 1;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getDataFrom();
  }

  getDataFrom(): void {
    this.charactersService
      .getCharacters(this.pageNumber)
      .subscribe((response) => {
        const { results } = response;
        this.characters = results;
        console.log(this.characters)
      });
  }
}
