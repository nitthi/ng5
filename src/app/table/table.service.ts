import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { AppService } from './../app.service';
@Injectable()
export class TableService{
    constructor(private appService : AppService){}
    getData(){
		
	}
}