import { Component } from '@angular/core';
import {BulletinBoardService} from '../../../models/bulletin-board/bulletin-board.service';
import {BulletinBoardPost} from '../../../models/bulletin-board/bulletin-board-post';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'top-bulletin-board',
  template: require('./top-bulletin-board.html'), 
  styles: [require('./top-bulletin-board.css')], 
  providers: [ROUTER_DIRECTIVES, BulletinBoardService]
})

export class TopBulletinBoard {
  boardItems: BulletinBoardPost[];
  inputText = '';

  constructor(private bulletinBoardService: BulletinBoardService) {
  	this.boardItems = this.bulletinBoardService.getBoardPosts()
  }
  
}
