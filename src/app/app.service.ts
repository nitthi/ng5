import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {Http, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class AppService{
    api_url: string;
    constructor(private http: Http) {
        this.api_url = 'http://10.111.99.24';
    }
    get(url) {
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.api_url+url,options);
      }
    
      post(url, data) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.api_url+url, data, options );
      }
      put(url, data) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.api_url+url, data, options );
      }
      delet(url,data) {
        let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers, body:data });
        return this.http.delete(this.api_url+url,options);
      }
     
}
  