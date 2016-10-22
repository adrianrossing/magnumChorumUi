import { Injectable }             from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
		 CanActivate }            from '@angular/router';
import { Auth }                   from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  // constructor(private auth: Auth, private router: Router) {}

//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if(this.auth.authenticated()){
//       if(this.auth.isAdmin()){
//         return true;
//       } else {
//         this.router.navigate(['unauthorized']);
//         return false;
//       }
//     } else {
//       localStorage.setItem('redirect_url', state.url);
//       this.auth.login();
//       this.router.navigate(['']);
//       return false;
//     }
//   }
// }



// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';
//  
// @Injectable()
// export class AuthGuard implements CanActivate {
//  
    constructor(private router: Router) { }
 
    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page
        this.router.navigate(['login']);
        return false;
    }
}