import { Component } from '@angular/core';
import {AttendanceService} from '../../../models/attendance/attendance.service';
// import {Absence} from '../../../models/DTOs/absence';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'attendance',
  template: require('./attendance.html'),
  // styles: [require('./absnces.css').toString()], 
  directives: [ROUTER_DIRECTIVES],
  providers: [AttendanceService]
})
export class Attendance {
  attendance: any[];
  // addingNewAbsence: boolean;
  // newAbsence: Absence;
  // test: any;
  
  constructor(private AttendanceService: AttendanceService) {
  	//TODO: Get Logged In User!!!!
  	this.attendance = this.AttendanceService.getAttendance();//.getAbsencesByUserID(10)getAttendance
  }
  
}AttendanceService