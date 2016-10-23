import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {md5} from '../../auth/md5'
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 

@Injectable()
export class LoginService {
  tryAgain: boolean;

  constructor(
    private _router: Router, private http: Http){}
}