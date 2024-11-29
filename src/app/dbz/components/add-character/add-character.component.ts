import { Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface'

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  standalone: false,
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (this.character.name.length == 0) return;

    const newCharacter = { ...this.character };
    this.onNewCharacter.emit(newCharacter);
    console.log(newCharacter);

    this.character.name = '';
    this.character.power = 0;
  }
}
