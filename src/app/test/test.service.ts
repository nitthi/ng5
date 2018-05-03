import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { AppService } from './../app.service';
@Injectable()
export class TestService{
    constructor(private appService : AppService){}
    getTests(){
      return this.appService.get('/tests').map(res => res.json());
    }
    saveDetails(data) {
      return this.appService.post('/save', data).map(res => res.json());
    }
}