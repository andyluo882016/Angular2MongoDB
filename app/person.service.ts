import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Person} from './person';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
@Injectable()
export class PersonService{
   private headers= new Headers({'Content-type': 'application/json'});
   //this is url in np4-cloundDb app3 np14
   private personUrl='http://localhost:3300/getAllEmpls';
   private empUrl='http://localhost:3300/saveEmplyee';
   //'http://localhost:1338/showall';
   
   //constructor(private http: Http){}
    constructor(private http: Http ) { }
   
   //getUser() { this is coreectlly be used
 getUser() : Observable<Person[]>{
     //let body= res.json();
      console.log("--**",this.http.get(this.personUrl).map(
              (res:Response) => res.json()
              ));
    return this.http.get(this.personUrl)
    .map((res:Response) => res.json()).catch(this.handleError);
  }
   
   // Fetch all existing comments
     getPersons() : Observable<Person[]> {

         // ...using get request
         return this.http.get(this.personUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
             
     }
     //public addPerson(user: Object): Observable<Person[]>{
     public addPerson(user: Object): Observable<Person[]>{
        //let body={};
        let bodyString = JSON.stringify(user); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        let body = JSON.stringify(user);
        return this.http.post(this.empUrl, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //..
      
          
     } 
     
     private handleError(error: any): Promise<any> {
           console.error('An error occurred', error); // for demo purposes only
          return Promise.reject(error.message || error);
     }
 
}