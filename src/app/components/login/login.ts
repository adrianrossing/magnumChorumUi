import {Component} from '@angular/core';
import {LoginService, User} from './login.service';
// import {Auth} from '../../auth/auth.service';

// import {AuthHttp, AuthConfig} from 'angular2-jwt';

@Component({
  selector: 'login',
  template: require('./login.html'), 
    styles: [require('./login.css').toString()], 
    providers: [LoginService]
})
export class Login {
	//constructor(private auth: Auth) {}
	public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:LoginService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        
		}
	}
}