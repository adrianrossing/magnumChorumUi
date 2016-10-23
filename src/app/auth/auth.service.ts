/* ===== app/auth.service.ts ===== */
import { Injectable }      from '@angular/core';
import { tokenNotExpired, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Headers, Http, Response, URLSearchParams } from '@angular/http';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  showNewUserForm: boolean = false;
  userProfile: any;
  authResults: any;
  mcSignupCode: string;
  // Configure Auth0
  lock = new Auth0Lock('vr3Dc4MexUQrJLMQOzPlL1Q9Ct0cjebf', 'adrianrossing.auth0.com', {
    callback: 'http://localhost:3000/login#'
   //  additionalSignUpFields: [{
   //  name: "MagnumChorumAccountID",                              // required
   //  placeholder: "MC19505!",            // required
   //  validator: function(value) {                  // optional
   //    // only accept addresses with more than 10 chars
   //    return {
   //      valid: value.length == 8,
   //       hint: "This is the Temorary Account Identifier provided by Magnum Chorum." // optional
   //     };
   //   }
   // }]
 });

  constructor(private router: Router, private http: Http) {


    this.lock.on("authenticated", (authResult: any) => {
      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        console.log(profile);
        if (profile.user_metadata == null || profile.user_metadata.magnumChorumUserID == null)
        { 
          console.log('dumb');
          this.authResults = authResult;
          this.userProfile = profile;
          this.showNewUserForm = true;
        } 
        else {
          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('profile', JSON.stringify(profile));

          this.router.navigate(['dashboard']);
        }
      });
    }, 
    err => console.error(err)
    );
  }


  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.router.navigate(['login']);
  };

  public validSignUpCode()
  {
    if(this.mcSignupCode != null) {
      return ((this.mcSignupCode as string).length == 8);
    }
    else {
      return false;
    }
  }

  public linkAuth0ToMC(authResult: any, profile: any)
  {
    console.log('go');
        let headers = new Headers()

        headers.append('Authorization', 'Bearer '+ authResult.idToken);//authResult.accessToken);
        headers.append('Content-Type', 'application/json');

          this.http.patch('https://adrianrossing.auth0.com/api/v2/users/' + profile.user_id,//'https://adrianrossisng.auth0.com/api/v2/users/' + profile.user_id, 
            { "user_metadata": { "magnumChorumUserID": 97 } },
            { headers: headers })
          .map(response => response.json())
          .subscribe(
            response => {
              console.log(response);


              // let params = new URLSearchParams();
          // params.set('firstName', profile.given_name);
          // params.set('lastName', profile.family_name);
          // params.set('email', profile.email);
          // params.set('auth0UserID', profile.user_id);
          // params.set('enteredByUserID', profile.MagnumChorumAccountID);

          // this.http.get('http://intranet.magnumchorum.org/api/auth/linkA0MagnumUser.php',
          //   { search: params, headers: new Headers({ 'Content-Type': 'application/json' })})
          // .map((res:Response) => res.json())
          // .subscribe(
          //   res => { 


        // },
        // err => console.error(err),
        // () => console.log()
        // );


              // localStorage.setItem('id_token', authResult.idToken);
              // localStorage.setItem('profile', JSON.stringify(profile));

              // this.router.navigate(['dashboard']);



            },
            error => alert(error.json().message)
            );

  }
}
