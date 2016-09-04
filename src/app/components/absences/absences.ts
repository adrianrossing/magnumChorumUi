import { Component } from '@angular/core';
import {AbsenceService} from '../../models/absence/absence.service';
import {Absence} from '../../models/DTOs/absence';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'absences',
  template: require('./absences.html'),
  styles: [require('./absences.css').toString()], 
  providers: [ROUTER_DIRECTIVES, AbsenceService]
})
export class Absences {
  absences: Absence[];
  inputText = '';
  addingNewAbsence: boolean;
  constructor(private absenceService: AbsenceService) {
  	//TODO: Get Logged In User!!!!
    this.addingNewAbsence = false;
  	this.absences = this.absenceService.getAllAbsences();//.getAbsencesByUserID(10)
  }
  
}