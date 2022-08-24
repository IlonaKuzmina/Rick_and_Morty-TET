import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characters, CharactersResult } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  baseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  getCharacters(pageNumber: number) {
    return this.http.get<Characters>(
      `${this.baseUrl}?page=${pageNumber}`
    );
  }
}
