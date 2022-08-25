import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private baseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  public getCharacters(pageNumber: number): Observable<Characters> {
    return this.http.get(
      `${this.baseUrl}?page=${pageNumber}`
    ) as Observable<Characters>;
  }
}
