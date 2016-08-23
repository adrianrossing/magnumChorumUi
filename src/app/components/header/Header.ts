import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from '../../actions/index';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Auth} from '../../auth/auth.service';

@Component({
  selector: 'Header',
  templateUrl: './app/components/header/Header.html',
  directives: [ROUTER_DIRECTIVES]
})
export class Header {
  constructor(
    // private auth: Auth, 
              public store: Store<any[]>) {}

  handleSave(text: string) {
    if (text.length !== 0) {
      this.store.dispatch(actions.addTodo(text));
      
    }
  }
}
