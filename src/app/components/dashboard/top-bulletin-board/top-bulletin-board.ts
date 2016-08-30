import {Component} from '@angular/core';

@Component({
  selector: 'top-bulletin-board',
  templateUrl: './app/components/dashboard/top-bulletin-board/top-bulletin-board.html', 
  styleUrls: ['app/components/dashboard/top-bulletin-board/top-bulletin-board.css']
})
export class TopBulletinBoard {
  public boardItems = [
    { comment: 'I\'m excited for choir to start again. Let\'s all get dinner before choir! Tavern on France at 5pm.', author: 'Adrian', plusses: 10 },
	{ comment: 'Who is looking for copies of sing legato? $8... that is a STEAL! You\'ll want to have them once I start leading warmups.' , author: 'Andrew', plusses: 17 },
	{ comment: 'I was able to get discounted tickets fot the Twin\'s game next weekend. If you are interested in going, please reply!', author: 'David', plusses: 12 },
	{ comment: 'I am praying for each of you as you get a good night\'s sleep before our first rehearsal tomorrow. I am truly blessed to have each of you in my life.', author: 'Mark', plusses: 4731 },
  ];
}
