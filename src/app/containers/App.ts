import {Component} from '@angular/core';
import {Header} from '../components/header/Header';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'App',
  templateUrl: './app/containers/App.html',
  directives: [ROUTER_DIRECTIVES, Header]
})
export class App {
}
