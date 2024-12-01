import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuidv4 } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService{

    public characters: Character[] = [
        {
          id: uuidv4(),  
          name: 'Krillin',
          power: 100,
        },
    
        { 
          id: uuidv4(),    
          name: 'Goku',
          power: 9500,
        },
        {
          id: uuidv4(),   
          name: 'Vegueta',
          power: 7000,
        },
      ];
    
      addCharacter(character: Character) {
        
        const onNewCharacter: Character = {
            id: uuidv4(),
            ...character
        };
        
        this.characters.push(onNewCharacter);
      }
    
      deleteCharacterById(id: string) {
        this.characters = this.characters.filter(character => character.id !== id);
      }


}