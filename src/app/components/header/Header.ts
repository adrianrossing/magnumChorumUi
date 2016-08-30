import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from '../../actions/index';
import {ROUTER_DIRECTIVES} from '@angular/router';
// import {Auth} from '../../auth/auth.service';
import { CollapseDirective } from 'ng2-bootstrap';

@Component({
  selector: 'Header',
  templateUrl: './app/components/header/Header.html',
  styleUrls: ['app/components/header/header.css'],
  directives: [ROUTER_DIRECTIVES, CollapseDirective]
})
export class Header {
  public isCollapsed: boolean = false;
  constructor(
    // private auth: Auth, 
              public store: Store<any[]>) {}

  handleSave(text: string) {
    if (text.length !== 0) {
      this.store.dispatch(actions.addTodo(text));      
    }
  }
}
