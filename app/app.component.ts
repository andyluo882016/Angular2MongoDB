import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>Angular Router </h1>
    <p>The hero's birthday is {{ birthday | date }}</p>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { 
    
    birthday = new Date(1988, 3, 15); // April 15, 1988
}
