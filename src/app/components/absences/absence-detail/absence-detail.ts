import { Component, Input } from '@angular/core';
import {AbsenceService} from '../../../models/absence/absence.service';
import {Absence} from '../../../models/DTOs/absence';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'absence-detail',
  template: require('./absence-detail.html'),
  // styles: [require('./absence.css').toString()],
  directives: [ROUTER_DIRECTIVES],
  providers: [AbsenceService]
})
export class AbsenceDetail {
  @Input() id: number;
  // absences: Absence[];
  // inputText = '';

  constructor(private absenceService: AbsenceService) {
  	// TODO: Get Logged In User!!!!
  	// this.absences = this.absenceService.getAbsencesByID(1);//.getAbsencesByUserID(10)
  }
}