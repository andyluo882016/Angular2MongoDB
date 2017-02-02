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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var crisis_list_component_1 = require('./crisis-list.component');
var hero_list_component_1 = require('./hero-list.component');
var not_found_component_1 = require('./not-found.component');
var http_1 = require('@angular/http');
var person_service_1 = require('./person.service');
require('./rxjs-extensions');
var appRoutes = [
    { path: 'crisis-center', component: crisis_list_component_1.CrisisListComponent },
    { path: 'heroes', component: hero_list_component_1.HeroListComponent },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes),
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                hero_list_component_1.HeroListComponent,
                crisis_list_component_1.CrisisListComponent,
                not_found_component_1.PageNotFoundComponent
            ],
            providers: [person_service_1.PersonService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map