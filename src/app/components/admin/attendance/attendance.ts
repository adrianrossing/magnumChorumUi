
import {AttendanceService} from '../../../models/attendance/attendance.service';
// import {Absence} from '../../../models/DTOs/absence';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { Component, Input, OnChanges } from '@angular/core';
import {AbsenceService} from '../../../models/absence/absence.service';
import {Absence} from '../../../models/DTOs/absence';


import {Observable} from 'rxjs/Rx';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';


@Component({
  selector: 'attendance',
  template: require('./attendance.html'),
  // styles: [require('./absnces.css').toString()], 
  directives: [ROUTER_DIRECTIVES],
  providers: [AttendanceService]
})
export class Attendance {
  events: any[];
  selectedEvent: any;
  attendance: any[];
  users: any[];
  voicePartSelected: number;
  usersFiltered: any[];

  // addingNewAbsence: boolean;
  // newAbsence: Absence;
  // test: any;
  
  constructor(private AttendanceService: AttendanceService, private http: Http) {
  	//TODO: Get Logged In User!!!!
    this.voicePartSelected = -1;
  	this.attendance = this.AttendanceService.getAttendance();//.getAbsencesByUserID(10)getAttendance
    this.http.get('http://intranet.magnumchorum.org/api/events/getEvents.php',
      { headers: new Headers({ 'Content-Type': 'application/json' })})
      .map((res:Response) => res.json())
      .subscribe(
      res => { this.events = res;
        // Object.keys(res).map(function (key) { 
        // return res[key]; }); 
      },
      err => console.error(err),
      () => console.log(this.events)
    );
  }

  // filterByID(obj) {
  //   if (obj.voicePartID !== undefined && typeof(obj.voicePartID) === 'number' && !isNaN(obj.voicePartID) && obj.voicePartID === this.voicePartSelected) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  voicePartSelect(voicePartID)
  {
    this.voicePartSelected = voicePartID;
    this.usersFiltered = [];
    for (var i = 0; i < this.users.length; i++)
      {
        if (this.users[i].voicePartID == voicePartID) {
          this.usersFiltered.push(this.users[i]);
        }
      }
    //this.usersFiltered = this.users.filter(this.filterByID);
  }


  checkIn(u)
  {  
      let params = new URLSearchParams();
      params.set('userID', u.userId);
      params.set('eventID', this.selectedEvent.eventID);
      params.set('attendanceStatusID', '1');
      params.set('enteredByUserID', u.userId);

      this.http.get('http://intranet.magnumchorum.org/api/attendance/saveAttendance.php',
      { search: params, headers: new Headers({ 'Content-Type': 'application/json' })})
      .map((res:Response) => res.json())
      .subscribe(
      res => { 
        // for (var i = 0; i < this.users.length; i++)
        // {
        //   if (this.users[i].userID == userID) {
            u.message = 'You have successfully checked in.';
            u.attendanceStatusID = 1;
            // this.voicePartSelect(this.voicePartSelected);
          // }
        // }
        // this.users[userID].message = 'You have successfully checked in';
        // this.users[userID].attendanceStatusID = 1;
        
        // Object.keys(res).map(function (key) { 
        // return res[key]; }); 
      },
      err => console.error(err),
      () => console.log()
    );
  }


  onEventSelect(eventID) { 
      this.selectedEvent = null;
      for (var i = 0; i < this.events.length; i++)
      {
        if (this.events[i].eventID == eventID) {
          this.selectedEvent = this.events[i];
        }
      }
      const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    let params = new URLSearchParams();
      params.set('eventID', this.selectedEvent.eventID);

    this.http.get('http://intranet.magnumchorum.org/api/users/getUsersForAttendance.php',
      { search: params, headers: new Headers({ 'Content-Type': 'application/json' })})
      .map((res:Response) => res.json())
      .subscribe(
      res => { this.users = res;
               this.usersFiltered = res;
        // Object.keys(res).map(function (key) { 
        // return res[key]; }); 
      },
      err => console.error(err),
      () => console.log(this.usersFiltered)
    );
  }


}