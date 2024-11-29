import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './name.component.html',
  standalone: false,
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 100,
    },

    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegueta',
      power: 7000,
    },
  ];

  onNewCharacter(character: Character) {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  }
}
