import { Component } from '@angular/core';
import {AbsenceService} from '../../../models/absence/absence.service';
import {Absence} from '../../../models/DTOs/absence';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'absences',
  templateUrl: './app/components/absences/absence-detail/absence-detail.html',
  styleUrls: ['app/components/absences/absence.css'], 
  providers: [ROUTER_DIRECTIVES, AbsenceService]
})
export class Absences {
  absences: Absence[];
  inputText = '';

  constructor(private absenceService: AbsenceService) {
  	//TODO: Get Logged In User!!!!
  	this.absences = this.absenceService.getAbsencesByID(1);//.getAbsencesByUserID(10)
  }
  
}