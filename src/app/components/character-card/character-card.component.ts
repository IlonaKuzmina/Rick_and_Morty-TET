import { Component, Input } from '@angular/core';
import { CharactersResult } from '../../models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() character?: CharactersResult;
}
