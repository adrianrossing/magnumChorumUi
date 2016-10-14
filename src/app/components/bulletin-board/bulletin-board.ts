import { Component, Input } from '@angular/core';
import {BulletinBoardService} from '../../models/bulletin-board/bulletin-board.service';
import {BulletinBoardPost} from '../../models/DTOs/bulletin-board-post';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { Headers, Http, Response, URLSearchParams } from '@angular/http';


@Component({
  selector: 'bulletin-board',
  template: require('./bulletin-board.html'), 
  styles: [require('./bulletin-board.css').toString()], 
  directives: [ROUTER_DIRECTIVES],
  providers: [BulletinBoardService]
})

export class BulletinBoard {
  @Input() testText: any;
  @Input() dashboardDisplay: boolean = false; 
  boardItems: BulletinBoardPost[];
  boards: any[];
  boards2: any[];
  inputText = '';

  constructor(private bulletinBoardService: BulletinBoardService, private http: Http) {
  	this.boardItems = this.bulletinBoardService.getBoardPosts()
    // this.boards = this.bulletinBoardService.getBoardPosts_2()
    // .subscribe(
    //   res => { this.boards = res},
    //   err => console.error(err),
    //   () => console.log(this.boards));
    //  this.boards2 = this.bulletinBoardService.getBoardPosts_3()
    // .subscribe(
    //   res => { this.boards = res},
    //   err => console.error(err),
    //   () => console.log(this.boards));
    const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    let params = new URLSearchParams();
    this.http.get('http://intranet.magnumchorum.org/api/board/getBoard.php',
      { search: params, headers: new Headers({ 'Content-Type': 'application/json' })})
      .map((res:Response) => res.json())
      .subscribe(
      res => { this.boards = Object.keys(res).map(function (key) { 
        // if (res[key]["children"].length != 0)
        // {
        //   res[key]["children2"] = Object.keys(res[key]["children"]).map(function (k) { 
        //     return res[key]["children"][k]; });
        // }
        return res[key]; });},
      err => console.error(err)
    );
  }  




  // ngOnInit() {
  //   this.loadBoard();
  // }



  // loadBoard() {
  //   this.bulletinBoardService.getBoardPosts_2()
  //   .subscribe(
  //     res => { this.boards = res},
  //     err => console.error(err),
  //     () => console.log(this.boards));
  //   this.bulletinBoardService.getBoardPosts_3()
  //   .subscribe(
  //     res => { this.boards = res},
  //     err => console.error(err),
  //     () => console.log(this.boards));

  // }


}
