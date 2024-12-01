# Bases

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

Estructura General del Proyecto
El proyecto está organizado en módulos principales:

AppModule (módulo raíz)
CounterModule
HeroesModule
DbzModule
Modularización
La aplicación implementa una arquitectura modular bien estructurada:

DBZ Module (dbz.module.ts):
Componentes: MainPageComponent, ListComponent, AddCharacterComponent
Implementa un servicio (DbzService) para gestión de estado
Utiliza FormsModule para manejo de formularios
Heroes Module (heroes.module.ts):
Componentes: HeroComponent, HeroesListComponent
Manejo independiente de funcionalidad de héroes
Counter Module (counter.module.ts):
Implementa funcionalidad básica de contador
Componente standalone con template inline
Comunicación entre Componentes
DBZ Module (Ejemplo más complejo):
Comunicación Padre-Hijo:
typescript


// MainPageComponent -> ListComponent
@Input() characterList: Character[]
// MainPageComponent -> AddCharacterComponent
@Output() onNewCharacter: EventEmitter<Character>
Gestión de Estado:
Utiliza DbzService como servicio singleton
Implementa patrón Observable para manejo de datos
Características Destacadas
Manejo de Interfaces:
typescript


export interface Character {
  id?: string,
  name: string,
  power: number
}
Implementación de Servicios:
typescript


@Injectable({providedIn: 'root'})
export class DbzService {
  // Gestión centralizada de datos
}
Componentes Reactivos:
Uso de eventos (click)
Implementación de two-way binding [(ngModel)]
Manejo de outputs para comunicación hacia arriba
Patrones de Diseño
Singleton en servicios
Componentes Presentacionales vs Contenedores
Event Bus para comunicación entre componentes
Observaciones
La aplicación sigue las mejores prácticas de Angular
Implementa una arquitectura escalable y mantenible
Utiliza TypeScript de manera efectiva para type-safety
Incorpora Bootstrap para estilos
Esta implementación demuestra un buen entendimiento de los conceptos fundamentales de Angular y patrones de diseño modernos.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
