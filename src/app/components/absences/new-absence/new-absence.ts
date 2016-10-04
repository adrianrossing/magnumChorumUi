import { Component, Input, OnChanges } from '@angular/core';
import {AbsenceService} from '../../../models/absence/absence.service';
import {Absence} from '../../../models/DTOs/absence';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {Observable} from 'rxjs/Rx';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';


@Component({
  selector: 'new-absence',
  // host: {
  //       '(document:click)': 'handleClick($event)',
  //   },
  template: require('./new-absence.html'),
  styles: [require('./new-absence.css').toString()], 
  directives: [ROUTER_DIRECTIVES],
  providers: [AbsenceService]
})
export class NewAbsence {
  absenceTypes: any[];
  selectedAbsence: any;
  submitted: boolean = false;
  events: any[];
  selectedEvent: any;
  users: any[];
  selectedUser: any;
  // query = '';
  // countries: any[];
  // filteredList= [];
  // elementRef;

  constructor(private absenceService: AbsenceService, private http: Http) {
  	this.absenceTypes = absenceService.getAbsenceTypes();
    //this.elementRef = myElement;
    

    const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

    this.http.get('http://intranet.magnumchorum.org/api/users/getUsersWithVoicePart.php',
      { headers: new Headers({ 'Content-Type': 'application/json' })})
      .map((res:Response) => res.json())
      .subscribe(
      res => { this.users =
         Object.keys(res).map(function (key) { 
         return res[key]; }); 
      },
      err => console.error(err),
      () => console.log(this.users)
    );

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

    // TODO: Get Logged In User!!!!
  	// this.absences = this.absenceService.getAbsencesByID(1);//.getAbsencesByUserID(10)
  }


  // filter() {
  //     if (this.query !== ""){
  //         this.filteredList = this.countries.filter(function(el){
  //             return (el["userName"].toString().toLowerCase().substr(0,this.query.length) === this.query.toString().toLowerCase() == true);


  //         }.bind(this));
  //     }else{
  //         this.filteredList = [];
  //     }
  // }
   
  // select(item){
  //     this.query = item;
  //     this.filteredList = [];
  // }






  submitRequest() {
     //call service. when promise returns, route to /absences.

    const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    let params = new URLSearchParams();
      params.set('userID', null);
      params.set('eventID', null);
      params.set('absenceTypeID', null);
      params.set('actionID', null);

    this.http.post('http://intranet.magnumchorum.org/api/absences/saveNewAbsence.php',
      { search: params, headers: new Headers({ 'Content-Type': 'application/json' })})
      .map((res:Response) => res.json())
      .subscribe(
      res => { 
        // Object.keys(res).map(function (key) { 
        // return res[key]; }); 
      },
      err => console.error(err),
      () => console.log('success')
    );


     this.submitted = true;
   }

  onTypeSelect(typeID) { 
      this.selectedAbsence = null;
      for (var i = 0; i < this.absenceTypes.length; i++)
      {
        if (this.absenceTypes[i].id == typeID) {
          this.selectedAbsence = this.absenceTypes[i];
        }
      }
  }
  onEventSelect(eventID) { 
      this.selectedEvent = null;
      for (var i = 0; i < this.events.length; i++)
      {
        if (this.events[i].id == eventID) {
          this.selectedEvent = this.events[i];
        }
      }
  }
  onUserSelect(userID) { 
      this.selectedUser = null;
      for (var i = 0; i < this.users.length; i++)
      {
        if (this.users[i].id == userID) {
          this.selectedUser = this.users[i];
        }
      }
  }

}