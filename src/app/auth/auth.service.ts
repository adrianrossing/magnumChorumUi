/* ===== app/auth.service.ts ===== */
import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('vr3Dc4MexUQrJLMQOzPlL1Q9Ct0cjebf', 'adrianrossing.auth0.com', {});
  // auth0 = new Auth0({
  //   domain: 'adrianrossing.auth0.com',
  //   clientID: 'vr3Dc4MexUQrJLMQOzPlL1Q9Ct0cjebf',
  //   responseType: 'token',
  //   callbackURL: 'http://localhost:3000',
  // });

  constructor(private router: Router) {
    if (!this.authenticated())
    {
      this.lock.show();
    }
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.router.navigate(['dashboard']);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

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