import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Characters } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

import { CharactersListComponent } from './characters-list.component';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  // let charactersService: CharactersService;
  const spyCharactersService: Partial<CharactersService> = {
    getCharacters(pageNumber: number): Observable<Characters> {
      return of();
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersListComponent],
      providers: [
        {
          provide: CharactersService,
          useValue: spyCharactersService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch characters when created', () => {
    spyOn<Partial<CharactersService>, any>(
      spyCharactersService,
      'getCharacters'
    ).and.returnValue(of({ results: [] }));
    component.ngOnInit();
    const characters = component.characters;

    expect(characters?.length).toBe(0);
  });

  it('should fetch more characters onScroll and change pageNumber', () => {
    spyOn<Partial<CharactersService>, any>(
      spyCharactersService,
      'getCharacters'
    ).and.returnValue(of({ results: [{ character: { name: 'Rick' } }] }));
    component.ngOnInit();
    component.onScroll();
    const characters = component.characters;

    expect(characters?.length).toBe(2);
    expect(component.pageNumber).toBe(2);
  });

  it('should not change the page when no new characters are returned', () => {
    spyOn<Partial<CharactersService>, any>(
      spyCharactersService,
      'getCharacters'
    ).and.returnValue(
      of({
        results: [
          { character: { name: 'Rick' } },
          { character: { name: 'Rick2' } },
          { character: { name: 'Rick3' } },
        ],
      })
    );
    component.ngOnInit();
    const characters = component.characters;

    expect(characters?.length).toBe(3);
    expect(component.pageNumber).toBe(1);
  });
});
