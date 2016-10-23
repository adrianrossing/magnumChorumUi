import {Component} from '@angular/core';
import {LoginService, User} from './login.service';
import {Auth} from '../../auth/auth.service';


@Component({
  selector: 'login',
  template: require('./login.html'), 
    styles: [require('./login.css').toString()], 
    providers: [LoginService, Auth]
})
export class Login {
 
    constructor(
        private _service:LoginService
        ,private auth: Auth
        // ,private authHttp: AuthHttp
        ) {}

        //this.auth.userProfile.valueChanges.subscribe( x =>  console.log(x));


    
 
    login() {
      //go and get MC user 

    //       var data: any = JSON.stringify({
    //   user_metadata: {
    //     address: this.address
    //   }
    // });


    //   this.authHttp
    //   .patch('https://' + 'adrianrossing.auth0.com' + '/api/v2/users/' + this.auth.userProfile.user_id, data, {headers: headers})
    //   .map(response => response.json())
    //   .subscribe(
    //     response => {
    //       //Update profile
    //       this.auth.userProfile = response;
    //       localStorage.setItem('profile', JSON.stringify(response));
    //       this.router.navigate(['/profile']);
    //     },
    //     error => alert(error.json().message)
    //     );
    //   this.router.navigate(['dashboard']);
	}
}