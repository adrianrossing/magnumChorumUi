/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';

import {App} from './app/containers/App';
import {Absences} from './app/components/absences/absences';
import {Dashboard} from './app/components/dashboard/dashboard';
import {Landing} from './app/components/landing/landing';
import {Login} from './app/components/login/login';
import {BulletinBoard} from './app/components/bulletin-board/bulletin-board';
import {Information} from './app/components/information/information';
import {Profile} from './app/components/profile/profile';


@Component({
  selector: 'root',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
export class Root {
}

export const routes: RouterConfig = [
  // {
  //   path: 'app',
  //   component: App
  // }, 
  //{ path: '', redirectTo: 'dashboard', terminal: true },
  { path: 'login', component: Login },
  { path: '', component: App,
    children: [
      { path: '', component: Landing },
      { path: 'dashboard', component: Dashboard },
      { path: 'bulletin-board', component: BulletinBoard },
      { path: 'absences', component: Absences },
      { path: 'information', component: Information },
      { path: 'profile', component: Profile }
    ]
  }
];
