import { Component, Input } from '@angular/core';
import {AbsenceService} from '../../models/absence/absence.service';
import {Absence} from '../../models/DTOs/absence';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AbsenceDetail} from './absence-detail/absence-detail';
import { UserService } from '../../models/user/user.service';

import {Observable} from 'rxjs/Rx';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

@Component({
  selector: 'absences',
  template: require('./absences.html'),
  styles: [require('./absences.css').toString()],
  directives: [ROUTER_DIRECTIVES, AbsenceDetail],
  providers: [AbsenceService]
})
export class Absences {
  absences: any[];
  addingNewAbsence: boolean;
  newAbsence: Absence;
  test: any;
  userID: number = -1;

  constructor(private absenceService: AbsenceService, private userService: UserService, private http: Http) {
  	//TODO: Get Logged In User!!!!
    this.addingNewAbsence = false;
        this.userID = this.userService.getUserProfile();

  	//this.absences = this.absenceService.getAllAbsences();//.getAbsencesByUserID(10)
    //this.test = this.absenceService.getTest();

    const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    let params = new URLSearchParams();
      params.set('userID', null);
      params.set('eventID', null);
      params.set('absenceTypeID', null);
      params.set('minDateTime', null);

    this.http.get('http://intranet.magnumchorum.org/api/absences/getAbsences.php',
      { search: params, headers: new Headers({ 'Content-Type': 'application/json' })})
      .map((res:Response) => res.json())
      .subscribe(
      res => { this.absences = res;
        // Object.keys(res).map(function (key) { 
        // return res[key]; }); 
      },
      err => console.error(err),
      () => console.log('dumb')
    );
  }  

}