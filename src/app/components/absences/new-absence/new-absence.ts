import { Component, Input, OnChanges } from '@angular/core';
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
  absenceTypes: any;
  selectedAbsence: any;

      name: string;

  constructor(private absenceService: AbsenceService) {
  	this.absenceTypes = absenceService.getAbsenceTypes();

    // TODO: Get Logged In User!!!!
  	// this.absences = this.absenceService.getAbsencesByID(1);//.getAbsencesByUserID(10)
  }

  onSubmit() {
     this.submitted = true;
   }

  onSelect(productId) { 
      this.selectedAbsence = null;
      for (var i = 0; i < this.absenceTypes.length; i++)
      {
        if (this.absenceTypes[i].id == productId) {
          this.selectedAbsence = this.absenceTypes[i];
        }
      }
  

}