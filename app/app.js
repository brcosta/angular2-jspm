import 'reflect-metadata';
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'angular-app'
})
@View({
  template: 'Hello, {{world}}'
})
class AngularApp {
  world: string;
  constructor(){
    this.world = 'Angular 2 + JSPM';
  }
}

bootstrap(AngularApp);
