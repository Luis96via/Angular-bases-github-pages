import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css',
  standalone: false,
})
export class HeroesListComponent {
  private allHeroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'She Hulk',
    'Captain America',
  ];
  public visibleHeroes: string[] = [];

  showMas(): void {
    if (this.allHeroes.length > this.visibleHeroes.length) {
      this.visibleHeroes.push(this.allHeroes[this.visibleHeroes.length]);
    }
  }

  showMenos(): void {
    if (this.allHeroes.length >= this.visibleHeroes.length) {
      this.visibleHeroes.pop();
    }
  }
}
