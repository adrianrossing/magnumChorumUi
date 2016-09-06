import { Component } from '@angular/core';
import {AbsenceService} from '../../models/absence/absence.service';
import {Absence} from '../../models/DTOs/absence';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AbsenceDetail} from './absence-detail/absence-detail';

@Component({
  selector: 'absences',
  template: require('./absences.html'),
  styles: [require('./absences.css').toString()], 
  directives: [ROUTER_DIRECTIVES, AbsenceDetail],
  providers: [AbsenceService]
})
export class Absences {
  absences: Absence[];
  addingNewAbsence: boolean;
  newAbsence: Absence;

  constructor(private absenceService: AbsenceService) {
  	//TODO: Get Logged In User!!!!
    this.addingNewAbsence = false;
  	this.absences = this.absenceService.getAllAbsences();//.getAbsencesByUserID(10)
  }
  
}