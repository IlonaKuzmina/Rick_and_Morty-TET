import { TestBed } from '@angular/core/testing';
import { Characters } from '../models/character.model';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { CharactersService } from './characters.service';
class MockResponses {
  CharactersMock: Characters = {
    info: {
      count: 1,
      pages: 1,
      next: '',
      prev: '',
    },
    results: [],
  };
}
const baseUrl = 'https://rickandmortyapi.com/api/character/';
const MockResponse = new MockResponses();

describe('CharactersService', () => {
  let charactersService: CharactersService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    charactersService = TestBed.inject(CharactersService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(charactersService).toBeTruthy();
  });

  it('should test getCharacters function ', () => {
    let result: Characters | undefined;
    const pageNumber: number = 1;
    const mockResponse: Characters = MockResponse.CharactersMock;

    charactersService.getCharacters(pageNumber).subscribe({
      next: (response) => {
        result = response;
      },

      error: () => {},
    });

    const request = controller.expectOne({
      method: 'GET',
      url: baseUrl + `?page=${pageNumber}`,
    });

    request.flush(mockResponse);
    controller.verify();

    expect(result).toBe(mockResponse);
  });
});
