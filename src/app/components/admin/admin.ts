import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'admin',
  template: require('./admin.html'), 
  // styles: [require('./bulletin-board.css').toString()], 
  directives: [ROUTER_DIRECTIVES]
  // providers: [BulletinBoardService]
})

export class Admin {
}
