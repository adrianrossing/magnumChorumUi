import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {md5} from '../../auth/md5'
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User("admin@admin.com","adm9"),
  new User("user1@gmail.com","a23"),
  new User("asd","asd")
];
 
@Injectable()
export class LoginService {
  tryAgain: boolean;

  constructor(
    private _router: Router, private http: Http){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }
 
  login(user){
    var authenticatedUser;
    const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
    let params = new URLSearchParams();
    params.set('username', user.email);
    params.set('password', md5(user.password));
    this.http.get('http://intranet.magnumchorum.org/api/auth/attempLogIn.php',
      { search: params, headers: new Headers({ 'Content-Type': 'application/json' })})
      .map((res:Response) => res.json())
      .subscribe(
      res => { 
        authenticatedUser = res[0]; 
        if (  authenticatedUser != null && authenticatedUser.email != "" ) {
          localStorage.setItem("userID", authenticatedUser.userID);
          localStorage.setItem("username", authenticatedUser.username);
          this._router.navigate(['dashboard']);  
        }
        else {
          this.tryAgain = true;
        }

      },
      err => console.error(err),
      () => console.log(authenticatedUser)
    ); 
  }
 
   checkCredentials(){
    // if (localStorage.getItem("username") === "null" || localStorage.getItem("username") === "" || localStorage.getItem("username") === null ||
    //     localStorage.getItem("userID") === "null" || localStorage.getItem("userID") === "" || localStorage.getItem("userIDAw") === null ){
      if (localStorage.getItem("id_token") === null)
      {
        this._router.navigate(['login']);
      
    }
  } 
}