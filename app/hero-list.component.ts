import { Component, Input } from '@angular/core';
import {PersonService} from './person.service';
import {Person} from './person';
const PERSONS: Person[]=[{
                _id: "16",
                name: "Steven Thomas T.",
                 age: 39,
                 salary: 98219980,
                 title:"Software Develope Manager",
                 status:"SSN871",
                 favorites: {"food":"Sea Food","artist":"Apple"},
                 image:"http://localhost:1339/getimage/Penguins.jpg",
                 finished: ['17','21','12'],
                 badges:["Great","Yellow"],
                 address:{"city":"Los Angeles","state":"California","pincode":"123"},
                 tags: ["music","cricket","blogs"]

}];
@Component({
  template: `<div>
    <h2>HEROES</h2>
    <p>Get your heroes here: </p>
    {{users | json}}
  <hr>
  <ul class="persons">
  <li *ngFor="let user of users">
   <span class="badge"><button (click)="addPerson(user)">add Person</button></span>
   {{user._id}} {{"  "}} {{user.name}}
    
  </li>
    </ul>
    
   
    <button (click)="getPersons()">Load persons file</button><br>
     <ul class="persons">
  <li *ngFor="let person of persons"
     [class.selected]="person === selectedPerson"
        (click)="Onselect(person)"
   >
   <span class="badge">{{person._id}}</span> {{person.name}}
    
  </li>
</ul>
<hr>

  <table *ngIf="selectedPerson">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
          <th>Favorites</th>
         <th>Picture</th>
      </tr>
    </thead>
    <tbody>
      <tr>
         <td>{{selectedPerson._id}}</td>
        <td>{{selectedPerson.name}}</td>
        <td>{{selectedPerson.age}}</td>
         <td>{{ selectedPerson.favorites.food }}</td>
        <!-- <td><img width="100" src="{{selectedPerson.image}}"></td> -->
        <td><img src="{{selectedPerson.image}}" style="height:50px"></td>
      </tr>      
     
    </tbody>
  </table>
    </div><hr>
  <button routerLink="/sidekicks">Go to sidekicks</button>
  `,
  providers:[PersonService]
})
export class HeroListComponent {
    errorMessage: string;
    selectedPerson: Person;
    Onselect(person: Person): void{
      this.selectedPerson = person;  
    };
    @Input() person: Person;
    
    
    users =PERSONS;
    persons: Person[];
    
    constructor(private personService: PersonService) {}
    
    getPersons(): void {
    this.personService
        .getUser()
        .subscribe(persons => this.persons = persons);
        
         console.log("------",this.personService
        .getUser()
        .subscribe(persons => this.persons = persons));
  }
    
    findAllPersons(): void{
       this.personService
           .getPersons()
           .subscribe(persons => this.persons = persons);
    } 
    
    addPerson (person: Person) {
        if (!person) { return; }
              this.personService.addPerson(person)
                   .subscribe(
                     persons  => this.persons.push(person),
                     error =>  this.errorMessage = <any>error);
      } 

    
 }
