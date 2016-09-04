import { Component } from '@angular/core';
import {AbsenceService} from '../../../models/absence/absence.service';
import {Absence} from '../../../models/DTOs/absence';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'absences',
  template: require('./absence-detail.html'),
  // styles: [require('./absence.css').toString()],
  directives: [ROUTER_DIRECTIVES],
  providers: [AbsenceService]
})
export class AbsenceDetail {
  // absences: Absence[];
  // inputText = '';

  constructor(private absenceService: AbsenceService) {
  	// TODO: Get Logged In User!!!!
  	// this.absences = this.absenceService.getAbsencesByID(1);//.getAbsencesByUserID(10)
  }
}