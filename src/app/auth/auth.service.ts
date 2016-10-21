/* ===== app/auth.service.ts ===== */
import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  userProfile: any;
  // Configure Auth0
  lock = new Auth0Lock('vr3Dc4MexUQrJLMQOzPlL1Q9Ct0cjebf', 'adrianrossing.auth0.com', {
    autoclose: true
  });
  // auth0 = new Auth0({
  //   domain: 'adrianrossing.auth0.com',
  //   clientID: 'vr3Dc4MexUQrJLMQOzPlL1Q9Ct0cjebf',
  //   responseType: 'token',
  //   callbackURL: 'http://localhost:3000',
  // });

  constructor(private router: Router) {
    this.getProfile();
    //Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult: any) => {
        localStorage.setItem('id_token', authResult.idToken);
        this.getProfile();
        this.router.navigate(['dashboard']);
      }, 
      err => console.error(err)
    );
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public getProfile() {
    if (this.authenticated()) {
      var token = localStorage.getItem('id_token');
      this.lock.getProfile(token, (err: any, profile: any) => {
        this.userProfile = profile;
        console.log(profile);
        return profile;
        // return this.userProfile;
      });
    }
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  };

  //  public checkCredentials(){
  //     var router: Router;
  //     if (localStorage.getItem("id_token") === null)
  //     {
  //       router.navigate(['login']);
  //     }
  // };

}