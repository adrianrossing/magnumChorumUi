import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from '../../actions/index';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Auth} from '../../auth/auth.service';
//import { CollapseDirective } from 'ng2-bootstrap';

@Component({
  selector: 'Header',
  template: require('./Header.html'),
  styles: [require('./header.css').toString()],
  directives: [ROUTER_DIRECTIVES],//, CollapseDirective], 
  providers:[Auth]
})
export class Header {
  public isCollapsed: boolean = false;
  constructor(
    private auth: Auth, 
    public store: Store<any[]>) {

     console.log(auth.userProfile);
  }  

  handleSave(text: string) {
    if (text.length !== 0) {
      this.store.dispatch(actions.addTodo(text));      
    }

  }
}
