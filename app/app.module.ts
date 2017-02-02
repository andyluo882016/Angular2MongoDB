import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }          from './app.component';
import { CrisisListComponent }   from './crisis-list.component';
import { HeroListComponent }     from './hero-list.component';
import { PageNotFoundComponent } from './not-found.component';
import { HttpModule, JsonpModule }    from '@angular/http';
import {PersonService} from './person.service';
import './rxjs-extensions';


const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  providers: [PersonService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
