declare var process: any;

export class AppSettings {
   public static API_ENDPOINT='http://127.0.0.1:6666/api/';

//    public static callback='http://localhost:3000/login';
   public static getCallbackUrl() {

    if (process.env.NODE_ENV === 'production') {
        return "http://intranet.magnumchorum.org/login";
    }
    else {
        return "http://localhost:3000/login";
   }
}
}