import { Injectable }    from '@angular/core';
import 'rxjs/add/operator/toPromise'; //this is for toPromise();

@Injectable()
export class UserService {
  // private boardUrl = 'app/bulletin-board';  // URL to web api
  public userId;
  constructor() {
    this.userId = -1;
  }

  public loadUserProfile(id: number): void {
    this.userId = id;
  }

  public getUserProfile(): number {
    return this.userId;
  }
}
