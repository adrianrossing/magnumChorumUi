import {Component} from '@angular/core';
import {Header} from '../components/header/Header';

@Component({
  selector: 'App',
  templateUrl: './app/containers/App.html',
  directives: [Header]
})
export class App {
}
