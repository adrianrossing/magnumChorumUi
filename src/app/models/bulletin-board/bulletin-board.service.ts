import { Injectable }    from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise'; //this is for toPromise();
import { Observable } from 'rxjs/Observable';
import { BulletinBoardPost } from '../DTOs/bulletin-board-post';

@Injectable()
export class BulletinBoardService{
  public data;
  constructor(private http: Http) { 
  }

  // getBoardPosts_2() : any {
  //   const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
  //   let params = new URLSearchParams();

  //   this.http.get('http://intranet.magnumchorum.org/api/board/getBoard.php',
  //    { search: params, headers: new Headers({ 'Content-Type': 'application/json' })})
  //     .map((res:Response) => res.json())
  //     .subscribe(
  //     res => { this.data = res},
  //     err => console.error(err),
  //     () => console.log(this.data)
  //   );

  // }
 // getBoardPosts_2 (): any 
 // {
 //        //let bodyString = JSON.stringify(body); // Stringify payload
 //        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
 //        let options       = new RequestOptions({ headers: headers }); // Create a request option

 //        return this.http.post('http://intranet.magnumchorum.org/api/board/getBoard.php', options) // ...using post request
 //                         .map((res:Response) => res.json()); // ...and calling .json() on the response to return data
 //                        // .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
 //    }   



  getBoardPosts_3() : any
  {
    return this.http.get('http://intranet.magnumchorum.org/api/board/getBoard.php')
      // ...and calling .json() on the response to return data
       .map((res:Response) => res.json());
       //...errors if any
       //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 



  getBoardPosts() : BulletinBoardPost[]{
  let boardPosts = [
	    { id: 1, comment: 'I am excited for choir to start again. Let\'s all get dinner before choir! Tavern on France at 5pm.', author: 'Adrian', votes: 10, rank: 2},
  		{ id: 2, comment: 'Who is looking for copies of sing legato? $8... that is a STEAL! You\'ll want to have them once I start leading warmups.' , author: 'Andrew', votes: 17, rank: 3 },
  		{ id: 3, comment: 'I was able to get discounted tickets fot the Twin\'s game next weekend. If you are interested in going, just let me know!', author: 'David', votes: 12, rank: 4 },
  		{ id: 4, comment: 'I am praying for each of you as you get a good night\'s sleep before our first rehearsal tomorrow. I am truly blessed to have each of you in my life.', author: 'Mark', votes: 4731, rank: 1,
      comments: [{ id: 1, comment: 'Thank you Mark! Can\'t wait!', author: 'Martha'},
        { id: 2, comment: 'It\'s 1:00am... sorry Mark...' , author: 'Adrian'}]
      }
  ];

  	return boardPosts as BulletinBoardPost[];

  }

}