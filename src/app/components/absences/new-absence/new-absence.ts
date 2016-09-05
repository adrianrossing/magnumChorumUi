import { Component, Input } from '@angular/core';
import {AbsenceService} from '../../../models/absence/absence.service';
import {Absence} from '../../../models/DTOs/absence';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'new-absence',
  template: require('./new-absence.html'),
  // styles: [require('./absence.css').toString()],
  directives: [ROUTER_DIRECTIVES],
  providers: [AbsenceService]
})
export class NewAbsence {
  @Input() id: number;
  // absences: Absence[];
  // inputText = '';

  constructor(private absenceService: AbsenceService) {
  	// TODO: Get Logged In User!!!!
  	// this.absences = this.absenceService.getAbsencesByID(1);//.getAbsencesByUserID(10)
  }
}