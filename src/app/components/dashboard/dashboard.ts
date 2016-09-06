import {Component} from '@angular/core';
// import {ROUTER_DIRECTIVES} from '@angular/router';
import {TopAbsences} from '../dashboard/top-absences/top-absences';
import {BulletinBoard} from '../bulletin-board/bulletin-board';
import {TopFeature} from '../dashboard/top-feature/top-feature';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.html'),
  styles: [require('./dashboard.css').toString()],
  directives: [TopFeature, BulletinBoard, TopAbsences]
})
export class Dashboard {
	dashboardDisplay: boolean = true;
}
