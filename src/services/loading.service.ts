import { UserData } from './../models/user.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Refresher } from './refresher.service';
import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response, RequestMethod } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class LoadingService {
    public loading:boolean = false;
}