"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var person_service_1 = require('./person.service');
var person_1 = require('./person');
var PERSONS = [{
        _id: "16",
        name: "Steven Thomas T.",
        age: 39,
        salary: 98219980,
        title: "Software Develope Manager",
        status: "SSN871",
        favorites: { "food": "Sea Food", "artist": "Apple" },
        image: "http://localhost:1339/getimage/Penguins.jpg",
        finished: ['17', '21', '12'],
        badges: ["Great", "Yellow"],
        address: { "city": "Los Angeles", "state": "California", "pincode": "123" },
        tags: ["music", "cricket", "blogs"]
    }];
var HeroListComponent = (function () {
    function HeroListComponent(personService) {
        this.personService = personService;
        this.users = PERSONS;
    }
    HeroListComponent.prototype.Onselect = function (person) {
        this.selectedPerson = person;
    };
    ;
    HeroListComponent.prototype.getPersons = function () {
        var _this = this;
        this.personService
            .getUser()
            .subscribe(function (persons) { return _this.persons = persons; });
        console.log("------", this.personService
            .getUser()
            .subscribe(function (persons) { return _this.persons = persons; }));
    };
    HeroListComponent.prototype.findAllPersons = function () {
        var _this = this;
        this.personService
            .getPersons()
            .subscribe(function (persons) { return _this.persons = persons; });
    };
    HeroListComponent.prototype.addPerson = function (person) {
        var _this = this;
        if (!person) {
            return;
        }
        this.personService.addPerson(person)
            .subscribe(function (persons) { return _this.persons.push(person); }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', person_1.Person)
    ], HeroListComponent.prototype, "person", void 0);
    HeroListComponent = __decorate([
        core_1.Component({
            template: "<div>\n    <h2>HEROES</h2>\n    <p>Get your heroes here: </p>\n    {{users | json}}\n  <hr>\n  <ul class=\"persons\">\n  <li *ngFor=\"let user of users\">\n   <span class=\"badge\"><button (click)=\"addPerson(user)\">add Person</button></span>\n   {{user._id}} {{\"  \"}} {{user.name}}\n    \n  </li>\n    </ul>\n    \n   \n    <button (click)=\"getPersons()\">Load persons file</button><br>\n     <ul class=\"persons\">\n  <li *ngFor=\"let person of persons\"\n     [class.selected]=\"person === selectedPerson\"\n        (click)=\"Onselect(person)\"\n   >\n   <span class=\"badge\">{{person._id}}</span> {{person.name}}\n    \n  </li>\n</ul>\n<hr>\n\n  <table *ngIf=\"selectedPerson\">\n    <thead>\n      <tr>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Age</th>\n          <th>Favorites</th>\n         <th>Picture</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n         <td>{{selectedPerson._id}}</td>\n        <td>{{selectedPerson.name}}</td>\n        <td>{{selectedPerson.age}}</td>\n         <td>{{ selectedPerson.favorites.food }}</td>\n        <!-- <td><img width=\"100\" src=\"{{selectedPerson.image}}\"></td> -->\n        <td><img src=\"{{selectedPerson.image}}\" style=\"height:50px\"></td>\n      </tr>      \n     \n    </tbody>\n  </table>\n    </div><hr>\n  <button routerLink=\"/sidekicks\">Go to sidekicks</button>\n  ",
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService])
    ], HeroListComponent);
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map