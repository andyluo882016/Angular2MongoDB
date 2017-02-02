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
require('rxjs/add/operator/map');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/catch');
//import 'rxjs/add/operator/map';
var http_1 = require('@angular/http');
var PersonService = (function () {
    //'http://localhost:1338/showall';
    //constructor(private http: Http){}
    function PersonService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-type': 'application/json' });
        //this is url in np4-cloundDb app3 np14
        this.personUrl = 'http://localhost:3300/getAllEmpls';
        this.empUrl = 'http://localhost:3300/saveEmplyee';
    }
    //getUser() { this is coreectlly be used
    PersonService.prototype.getUser = function () {
        //let body= res.json();
        console.log("--**", this.http.get(this.personUrl).map(function (res) { return res.json(); }));
        return this.http.get(this.personUrl)
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    // Fetch all existing comments
    PersonService.prototype.getPersons = function () {
        // ...using get request
        return this.http.get(this.personUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    //public addPerson(user: Object): Observable<Person[]>{
    PersonService.prototype.addPerson = function (user) {
        //let body={};
        var bodyString = JSON.stringify(user); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var body = JSON.stringify(user);
        return this.http.post(this.empUrl, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); }); //..
    };
    PersonService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PersonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map