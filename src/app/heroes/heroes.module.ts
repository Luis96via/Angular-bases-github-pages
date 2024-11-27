import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero/hero.component";
import { HeroesListComponent } from './list/heroes-list/heroes-list.component';

@NgModule({
  declarations:[
   HeroesListComponent,
    HeroComponent
  ],
  exports:[
    HeroesListComponent,
    HeroComponent
  ],
  imports: [CommonModule]
})
export class HeroesModule{}
