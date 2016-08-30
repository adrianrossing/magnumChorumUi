import { Component } from '@angular/core';
import {BulletinBoardService} from '../../../models/bulletin-board/bulletin-board.service';
import {BulletinBoardPost} from '../../../models/bulletin-board/bulletin-board-post';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'top-bulletin-board',
  templateUrl: './app/components/dashboard/top-bulletin-board/top-bulletin-board.html', 
  styleUrls: ['app/components/dashboard/top-bulletin-board/top-bulletin-board.css'], 
  providers: [ROUTER_DIRECTIVES, BulletinBoardService]
})

export class TopBulletinBoard {
  boardItems: BulletinBoardPost[];

  constructor(private bulletinBoardService: BulletinBoardService) {
  	this.boardItems = this.bulletinBoardService.getBoardPosts()
  }
  
}
