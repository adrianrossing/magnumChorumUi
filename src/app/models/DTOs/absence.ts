export class Absence {
  id: number;
  userID: number;
  userName: string;
  eventID: number;
  eventName: string;
  actionID: number;
  action: string;
  typeID: number;
  type: string;
  comments: {
  	comment: string;
  	userID: number;
  	commentDate: Date;
  }[];
  enteredDate: Date;
}