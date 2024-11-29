import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  standalone: false,
})
export class HeroComponent {
  public name: string = 'Iroman';
  public age: number = 45;
  public apaDesa: string = 'Visible';

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    if (this.name == 'Spiderman') {
      this.name = 'Iroman';
    } else {
      this.name = 'Spiderman';
    }
  }

  changeAge(): void {
    if (this.age == 45) {
      this.age = 18;
    } else {
      this.age = 45;
    }
  }

  aparecerDesaparecer(): void {
    if (this.apaDesa == 'Visible') {
      this.apaDesa = 'Hidden';
    } else {
      this.apaDesa = 'Visible';
    }
  }
}
