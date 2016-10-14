import {Component} from '@angular/core';
import {Header} from '../components/header/Header';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Auth} from '../auth/auth.service';
import {LoginService} from '../components/login/login.service'

@Component({
  selector: 'App',
  template: require('./App.html'),
  directives: [ROUTER_DIRECTIVES, Header], 
  providers: [LoginService]
})
export class App {
  //constructor(private auth: Auth) {}
  constructor(
        private _service:LoginService){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
}
