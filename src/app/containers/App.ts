import {Component} from '@angular/core';
import {Header} from '../components/header/Header';
import {MainSection} from '../components/MainSection';

@Component({
  selector: 'App',
  templateUrl: './app/containers/App.html',
  directives: [Header, MainSection]
})
export class App {
}
