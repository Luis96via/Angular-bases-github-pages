import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h3>{{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter(10)">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>

    <hr />`,
})
export class CounterComponent {
  // Implementar lógica del componente aquí
  public counter: number = 10;

  increaseBy(number: number): number {
    return (this.counter += number);
  }

  decreaseBy(number: number): number {
    return (this.counter -= number);
  }

  resetCounter(number: number): number {
    return (this.counter = number);
  }
}
