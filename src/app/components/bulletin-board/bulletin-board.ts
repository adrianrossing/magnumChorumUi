import { Component } from '@angular/core';
import {BulletinBoardService} from '../../models/bulletin-board/bulletin-board.service';
import {BulletinBoardPost} from '../../models/DTOs/bulletin-board-post';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'bulletin-board',
  templateUrl: './app/components/bulletin-board/bulletin-board.html', 
  styleUrls: ['app/components/bulletin-board/bulletin-board.css'], 
  providers: [ROUTER_DIRECTIVES, BulletinBoardService]
})

export class BulletinBoard {
  boardItems: BulletinBoardPost[];
  inputText = '';

  constructor(private bulletinBoardService: BulletinBoardService) {
  	this.boardItems = this.bulletinBoardService.getBoardPosts()
  }
  
}
