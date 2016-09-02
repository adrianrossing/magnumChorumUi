import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'; //this is for toPromise();
import { BulletinBoardPost } from '../DTOs/bulletin-board-post';

@Injectable()
export class BulletinBoardService {
  // private boardUrl = 'app/bulletin-board';  // URL to web api

  // constructor(private http: Http) { 
  // }

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



    // boardPosts.toPromise()
      // .then(response => response.json().data as BulletinBoardPost[])
      // .catch(this.handleError);

  //   return this.http.get(this.boardUrl)
  //              .toPromise()
  //              .then(response => response.json().data as BulletinBoardPost[])
  //              .catch(this.handleError);




  // getBoardPost(id: number) {
  //   //return this.getBoardPosts().find(post => post.id === id);
  // }

  // private handleError(error: any) {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
  // }