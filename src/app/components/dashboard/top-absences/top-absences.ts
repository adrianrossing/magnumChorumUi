import {Component} from '@angular/core';
import {AbsenceService} from '../../../models/absence/absence.service';
import {Absence} from '../../../models/DTOs/absence';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'top-absences',
  template: require('./top-absences.html'),
  styles: [require('./top-absences.css').toString()],
  directives: [ROUTER_DIRECTIVES],
  providers: [AbsenceService]
})
export class TopAbsences {
  absencess: Absence[];
  addingNewAbsencee: boolean;
  // constructor(private absenceService: AbsenceService) {
  // 	TODO: Get Logged In User!!!!
  //   this.addingNewAbsence = false;
  // 	this.absences = this.absenceService.getAllAbsences();//.getAbsencesByUserID(10)
  // }
    constructor(private absenceService: AbsenceService) {
  	//TODO: Get Logged In User!!!!
    this.addingNewAbsencee = false;
  	this.absencess = this.absenceService.getAllAbsences();//.getAbsencesByUserID(10)
  }
}
