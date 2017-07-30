/* ===== app/auth.service.ts ===== */
import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { AppSettings } from '../appSettings/appSettings';
import { UserService } from '../models/user/user.service';
import 'rxjs/Rx';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

declare var Auth0Lock: any;
var options = {
  auth: {
    redirectUrl: AppSettings.getCallbackUrl(),
    responseType: 'token'
  }
}; 

@Injectable()
export class Auth {
  userProfile: any;
  authResults: any;
  mcSignupCode: string;
  showNewUserForm: boolean = false;
  showError: boolean = false;
  lock = new Auth0Lock('vr3Dc4MexUQrJLMQOzPlL1Q9Ct0cjebf', 'adrianrossing.auth0.com', options, {
 });

  constructor(private router: Router, private us: Http, private http: Http) {

    this.lock.on('authenticated', (authResult: any) => {
      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        this.authResults = authResult;
        this.userProfile = profile;
        console.log(profile);
        if (profile.user_metadata == null || profile.user_metadata.magnumChorumUserID == null) {
          this.showNewUserForm = true;
        } else {
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
    this.lock.show();
  };

  public authenticated() {
    return tokenNotExpired();
  };

  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.router.navigate(['login']);
  };

  public validSignUpCode() {
    if (this.mcSignupCode != null) {
      return ((this.mcSignupCode as string).length === 8);
    } else {
      return false;
    }
  }

  public linkAuth0ToMC(authResult: any, profile: any) {
    let params = new URLSearchParams();
    params.set('key', this.mcSignupCode);
    this.http.get('http://intranet.magnumchorum.org/api/auth/attemptLogIn.php',
      { search: params, headers: new Headers({ 'Content-Type': 'application/json' })})
    .map((res: Response) => res.json())
    .subscribe(
      res => {
        console.log(res[0].userID);
        if (res[0].userID && res[0].userID > -1) {
          let headers = new Headers( );
          headers.append('Authorization', 'Bearer ' + this.authResults.idToken);//authResult.accessToken);
          headers.append('Content-Type', 'application/json');
          this.http.patch('https://adrianrossing.auth0.com/api/v2/users/' + this.userProfile.user_id,//'https://adrianrossisng.auth0.com/api/v2/users/' + profile.user_id, 
            { 'user_metadata': { 'magnumChorumUserID': res[0].userID} },
            { headers: headers })
            .map(response => response.json())
            .subscribe(
              response => {
                localStorage.setItem('id_token', this.authResults.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
                this.router.navigate(['dashboard']);
            },
            error => alert(error.json().message)
            );
          } else {
            this.showError = true;
          }
        },
      err => console.error(err)
      // () => console.log()
      );
  }
}
