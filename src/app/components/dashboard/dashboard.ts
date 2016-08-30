import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {TopAbsences} from '../dashboard/top-absences/top-absences';
import {TopBulletinBoard} from '../dashboard/top-bulletin-board/top-bulletin-board';
import {TopFeature} from '../dashboard/top-feature/top-feature';

@Component({
  selector: 'dashboard',
  templateUrl: './app/components/dashboard/dashboard.html',
  styleUrls: ['app/components/dashboard/dashboard.css'],
  directives: [ROUTER_DIRECTIVES, TopFeature, TopBulletinBoard, TopAbsences]
})
export class Dashboard {
}
