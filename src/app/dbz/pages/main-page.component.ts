import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './name.component.html',
  standalone: false,
})
export class MainPageComponent {
  constructor( public dbzService:DbzService){}

get characters():Character[]{
  return [...this.dbzService.characters];
}

onDeleteCharacter(id:string){
  this.dbzService.deleteCharacterById(id);
}

onNewCharacter(character:Character):void{
  this.dbzService.addCharacter(character);
}


}
