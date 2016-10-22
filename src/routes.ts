/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';

import {App} from './app/containers/App';
import {Absences} from './app/components/absences/absences';
import {NewAbsence} from './app/components/absences/new-absence/new-absence';
import {AbsenceDetail} from './app/components/absences/absence-detail/absence-detail';
import {Dashboard} from './app/components/dashboard/dashboard';
import {Landing} from './app/components/landing/landing';
import {Login} from './app/components/login/login';
import {BulletinBoard} from './app/components/bulletin-board/bulletin-board';
import {Information} from './app/components/information/information';
import {Profile} from './app/components/profile/profile';
import {Admin} from './app/components/admin/admin';
import {Attendance} from './app/components/admin/attendance/attendance';
import {AuthGuard} from './app/auth/auth.guard';

@Component({
  selector: 'root',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES], 
  providers: [AuthGuard]
})
export class Root {
}

export const routes: RouterConfig = [
  // {
  //   path: 'app',
  //   component: App
  // }, 
  { path: '', redirectTo: 'dashboard', terminal: true },
  { path: 'landing', component: Landing },
  { path: 'login', component: Login },
  { path: '', component: App, canActivate: [AuthGuard],
    children: [
      { path: '', component: App, canActivate: [AuthGuard]},
      { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
      { path: 'bulletin-board', component: BulletinBoard, canActivate: [AuthGuard] },
      { path: 'absences', component: Absences, canActivate: [AuthGuard] },
      { path: 'absences/new', component: NewAbsence, canActivate: [AuthGuard] },
      { path: 'absences/:id', component: AbsenceDetail, canActivate: [AuthGuard] }, //not using now.. just doing in the absences partial. 
      { path: 'information', component: Information, canActivate: [AuthGuard] },
      { path: 'profile', component: Profile, canActivate: [AuthGuard] },
      { path: 'admin', component: Admin, canActivate: [AuthGuard], 
        children: [
          { path: '', component: Attendance, canActivate: [AuthGuard] },
          { path: 'attendance', component: Attendance, canActivate: [AuthGuard] },
        ]
    }
    ]
  }
];
