import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'; //this is for toPromise();
import { Absence } from '../DTOs/absence';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AttendanceService {
  // private boardUrl = 'app/bulletin-board';  // URL to web api
  public data;
  constructor(private http: Http) { 
   
    

  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getAttendance() : any {
    const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    this.http.get('api/users/getUsersForAttendance.php')
    //this.http.get('http://intranet.magnumchorum.org/api/users/getUsersForAttendance.php')
    //        .subscribe(res => this.data = res.json());
    // return this.data;
            // .map(this.extractData)
            // .catch(this.handleError);
        .map((res:Response) => res.json())
        .subscribe(

        res => { this.data = res},
        err => console.error(err),
        () => console.log(this.data)
      );
    return this.data;
  }


  private extractData(res: Response) {
    let body = res.json();
    console.log('asd');
    return body.data || { };
  }

  getAllAbsences() : Absence[]{
    let absences = [
      {id: 1, userID:10, userName: 'Adrian Rossing', eventID: 177, eventName: 'Rehearsal - 9/14/2016', 
        actionID: 1, action: 'Requested', enteredDate: new Date('2016/09/01'), typeID: 2, type: 'Late', comments: [{
          comment: 'I will be tied up at work until 7:40. Is it alright if I come late to rehearsal? ETA: 8pm. Sorry I wasn\'t aware of this conflict earlier!', 
          userID: 10, commentDate: new Date('2016/09/01')},{
          comment: 'That sounds fine, Adrian! Looking forward to seeing you!', 
          userID: 1, commentDate: new Date('2016/09/02')},{
          comment: 'You forgot to hit "approve!"', 
          userID: 10, commentDate: new Date('2016/09/02')},{
          comment: 'Oops. There you go!', 
          userID: 1, commentDate: new Date('2016/09/03')}]},
      {id: 1, userID:10, userName: 'Adrian Rossing', eventID: 199, eventName: 'Concert - 10/27/2016', 
        actionID: 3, action: 'Deneyed', enteredDate: new Date('2016/09/02'), typeID: 1, type: 'Absent', comments: [{
          comment: 'The fall concert won\'t work for me. JUST KIDDING! THIS IS A TEST...', 
          userID: 10, commentDate: new Date('2016/09/02')}]},
      {id: 2, userID:20, userName: 'Andrew Parr', eventID: 188, eventName: 'Church Service - 10/15/2016', 
        actionID: 2, action: 'Approved', enteredDate: new Date('2016/08/20'), typeID: 1, type: 'Absent', comments: [{
          comment: 'I\'ll be at my church job in WBL.', 
          userID: 20, commentDate: new Date('2016/08/20')},{
          comment: 'Congratualtions on the new job, Andrew. Thanks for letting us know.', 
          userID: 1, commentDate: new Date('2016/08/27')}]},
      {id: 3, userID:30, userName: 'David Anderson', eventID: 188, eventName: 'Church Service - 10/15/2016', 
        actionID: 2, action: 'Approved', enteredDate: new Date('2016/08/10'), typeID: 1, type: 'Absent', comments: [{ 
          comment: 'I\'ll be conducting and playing organ for my lovely congregation!', 
          userID: 30, commentDate: new Date('2016/08/10')},{
          comment: 'Sounds good, David. What is your choir singing this Sunday? Let\'s talk about rep soon.', 
          userID: 1, commentDate: new Date('2016/08/27')}]}
    ];
    return absences as Absence[];
  }

  getAbsencesByID(absenceID : number) : Absence[] {
    let absences = [
      {id: 1, userID:10, userName: 'Adrian Rossing', eventID: 177, eventName: 'Rehearsal - 9/14/2016', 
        actionID: 1, action: 'Requested', enteredDate: new Date('2016/09/01'), typeID: 2, type: 'Late', comments: [{
          comment: 'I will be tied up at work until 7:40. Is it alright if I come late to rehearsal? ETA: 8pm. Sorry I wasn\'t aware of this conflict earlier!', 
          userID: 10, commentDate: new Date('2016/09/01')},{
          comment: 'That sounds fine, Adrian! Looking forward to seeing you!', 
          userID: 1, commentDate: new Date('2016/09/02')},{
          comment: 'You forgot to hit "approve!"', 
          userID: 10, commentDate: new Date('2016/09/02')},{
          comment: 'Oops. There you go!', 
          userID: 1, commentDate: new Date('2016/09/03')}]},
      {id: 1, userID:10, userName: 'Adrian Rossing', eventID: 199, eventName: 'Concert - 10/27/2016', 
        actionID: 3, action: 'Deneyed', enteredDate: new Date('2016/09/02'), typeID: 1, type: 'Absent', comments: [{
          comment: 'The fall concert won\'t work for me. JUST KIDDING! THIS IS A TEST...', 
          userID: 10, commentDate: new Date('2016/09/02')}]}
    ];
    return absences as Absence[]; 
  }

  getAbsencesByUserID(userID : number) : Absence[] {
    let absences = [
      {id: 1, userID:10, userName: 'Adrian Rossing', eventID: 177, eventName: 'Rehearsal - 9/14/2016', 
        actionID: 1, action: 'Requested', enteredDate: new Date('2016/09/01'), typeID: 2, type: 'Late', comments: [{
          comment: 'I will be tied up at work until 7:40. Is it alright if I come late to rehearsal? ETA: 8pm. Sorry I wasn\'t aware of this conflict earlier!', 
          userID: 10, commentDate: new Date('2016/09/01')},{
          comment: 'That sounds fine, Adrian! Looking forward to seeing you!', 
          userID: 1, commentDate: new Date('2016/09/02')},{
          comment: 'You forgot to hit "approve!"', 
          userID: 10, commentDate: new Date('2016/09/02')},{
          comment: 'Oops. There you go!', 
          userID: 1, commentDate: new Date('2016/09/03')}]},
      {id: 1, userID:10, userName: 'Adrian Rossing', eventID: 199, eventName: 'Concert - 10/27/2016', 
        actionID: 3, action: 'Deneyed', enteredDate: new Date('2016/09/02'), typeID: 1, type: 'Absent', comments: [{
          comment: 'The fall concert won\'t work for me. JUST KIDDING! THIS IS A TEST...', 
          userID: 10, commentDate: new Date('2016/09/02')}]}
    ];     
    return absences as Absence[];
  }


  getAbsenceTypes() : any {
    let types = [{id: 1, name: 'Absent - I will be completely missing the rehearsal or event.'}, {id:2, name: 'Late  - I will be arriving after the start time.'}];
    return types;
  }

}
