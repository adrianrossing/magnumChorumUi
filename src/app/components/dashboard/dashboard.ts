import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {Header} from '../header/Header';

@Component({
  selector: 'dashboard',
  templateUrl: './app/components/dashboard/dashboard.html',
  directives: [ROUTER_DIRECTIVES, Header]
})
export class Dashboard {
}
