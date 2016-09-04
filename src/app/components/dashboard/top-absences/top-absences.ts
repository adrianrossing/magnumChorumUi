import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AbsenceService} from '../../../models/absence/absence.service';
import {Absence} from '../../../models/DTOs/absence';

@Component({
  selector: 'top-absences',
  template: require('./top-absences.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class TopAbsences {
  absences: Absence[];
  addingNewAbsence: boolean;
  constructor(private absenceService: AbsenceService) {
  	//TODO: Get Logged In User!!!!
    this.addingNewAbsence = false;
  	this.absences = this.absenceService.getAllAbsences();//.getAbsencesByUserID(10)
  }
}
