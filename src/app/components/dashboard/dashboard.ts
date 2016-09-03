import {Component} from '@angular/core';
// import {ROUTER_DIRECTIVES} from '@angular/router';
import {TopAbsences} from '../dashboard/top-absences/top-absences';
import {BulletinBoard} from '../bulletin-board/bulletin-board';
import {TopFeature} from '../dashboard/top-feature/top-feature';

@Component({
  selector: 'dashboard',
  template: require('./app/components/dashboard/dashboard.html'),
  styles: [require('app/components/dashboard/dashboard.css')],
  directives: [TopFeature, BulletinBoard, TopAbsences]
})
export class Dashboard {
}
