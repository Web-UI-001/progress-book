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
// import { Subject } from './subject';
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'progress-book',
            template: "\n    <header>\n      <nav class=\"navbar navbar-inverse\">\n        <div class=\"navbar-header\">\n          <a href=\"/\" class=\"navbar-brand\">Progress-book</a>\n        </div>\n      </nav>\n    </header>\n    <main> \n       <nav>\n         <a routerLink=\"/monday\" class=\"btn btn-default\">Monday</a>\n         <a routerLink=\"/tuesday\" class=\"btn btn-primary\">Tuesday</a>\n         <a routerLink=\"/wednesday\" class=\"btn btn-success\">Wednesday</a>\n         <a routerLink=\"/thursday\" class=\"btn btn-info\">Thursday</a>\n         <a routerLink=\"/friday\" class=\"btn btn-warning\">Friday</a>\n            <router-outlet></router-outlet>\n        </nav>\n       \n    </main>\n    <footer class=\"text-center\">\n      Copyright &copy; 2016\n    </footer>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map