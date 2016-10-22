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
  userProfile: any;

  // Configure Auth0
  lock = new Auth0Lock('vr3Dc4MexUQrJLMQOzPlL1Q9Ct0cjebf', 'adrianrossing.auth0.com', {
  additionalSignUpFields: [{
    name: "AccountID",                              // required
    placeholder: "MC19505!",            // required
    validator: function(value) {                  // optional
      // only accept addresses with more than 10 chars
      return {
         valid: value.length == 8,
         hint: "This is the Temorary Account Identifier provided by Magnum Chorum." // optional
      };
    }
  }]
});
  // {
    // autoclose: true, 
    // additionalSignUpFields: [{
    //   magnumChorumIdentifier: "Magnum Chorum Issued Identifier",// required
    //   placeholder: "enter your address",            // required
    //   icon: "https://example.com/address_icon.png", // optional
    //   validator: function(value) {                  // optional
    //     // only accept addresses with more than 10 chars
    //     return value.length > 10;
    //   }
    // }]
  // });

  constructor(private router: Router, private http: Http) {

    // this.getProfile = new Observable(observer => {
    //   if (this.authenticated()) {
    //     var token = localStorage.getItem('id_token');
    //     this.lock.getProfile(token, (err: any, profile: any) => {
    //       this.userProfile = profile;
    //       console.log(profile);
    //       return profile;
    //       // return this.userProfile;
    //       });
    //   }
    // });

    this.lock.on("authenticated", (authResult: any) => {
      this.lock.getProfile(authResult.idToken, function(error, profile) {
        if (error) {
          // Handle error
          return;
        }

        profile.user_metadata = profile.user_metadata || {};
        // localStorage.setItem('profile', JSON.stringify(profile));
        // this.userProfile = profile;



        if (profile.user_metadata == null || profile.user_metadata.magnumChorumUserID == null)
        {

            this.http
            .patch('https://adrianrossisng.auth0.com/api/v2/users/' + profile.user_id, 
              { user_metadata: { magnumChorumUserID: 59 } }, 
              {headers: { authorization: "Bearer " + localStorage.getItem(authResult.idToken) },})
            .map(response => response.json())
            .subscribe(
              response => {
                console.log(response);
              },
              error => alert(error.json().message)
            );
              // var options = { method: 'PATCH',
              // url: 'https://adrianrossing.auth0.com/api/v2/users/{user_id}',
              // headers: { authorization: "Bearer " + localStorage.getItem(authResult.idToken) },
              // body: { user_metadata: { magnumChorumUserID: 59 } },
              // json: true };

              // request(options, function (error, response, body) {
              //   if (error) throw new Error(error);

              //   console.log(body);
              // });

          // let params = new URLSearchParams();
          // params.set('userID', "5");
          // params.set('eventID', this.selectedEvent.eventID);
          // params.set('attendanceStatusID', '1');
          // params.set('enteredByUserID', "5");

          // this.http.get('http://intranet.magnumchorum.org/api/auth/auth0MagnumUser.php',
          //   { search: params, headers: new Headers({ 'Content-Type': 'application/json' })})
          // .map((res:Response) => res.json())
          // .subscribe(
          //   res => { 

          //     var request;//require("request");

          //     var options = { method: 'PATCH',
          //     url: 'https://adrianrossing.auth0.com/api/v2/users/{user_id}',
          //     headers: { authorization: "Bearer " + localStorage.getItem(authResult.idToken) },
          //     body: { user_metadata: { magnumChorumUserID: 59 } },
          //     json: true };

          //     request(options, function (error, response, body) {
          //       if (error) throw new Error(error);

          //       console.log(body);
          //     });

          //   },
          //   err => console.error(err),
          //   () => console.log()
          //   );
        }
        else {
          console.log(profile);
        }






        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
      });
//       this.getProfile().subscribe(x => {
//         localStorage.setItem('profile', x);
//         localStorage.setItem('profile2', this.userProfile);
//         console.log('dumb');
//       }, 
//       () => console.log(this.userProfile));
// console.log('dumb2');
      // this.checkUserLogin();
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
    this.router.navigate(['login']);
  };

  // public checkUserLogin() {
  //   if (this.userProfile != null)
  //   {
  //     if (this.)
  //   }
  // }

}