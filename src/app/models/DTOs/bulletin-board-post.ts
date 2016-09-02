export class BulletinBoardPost {
  id: number;
  author: string;
  comment: string;
  date: Date;
  votes: number;
  rank: number;
  comments: BulletinBoardPost[];
}