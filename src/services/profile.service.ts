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
// import {  Angular2TokenService } from "angular2-token";
import { Angular2TokenService } from "./authToken.service";

@Injectable()
export class ProfileService {
    private baseUrl = "http://smartconnector.herokuapp.com/api/v1";

    constructor(private http:Http,private auth:AuthService){

    }
    
    getUserProfile(){
        let headers = new Headers({"Authorization":`Bearer ${this.auth.getUserToken()}`});
        return this.http.get(this.baseUrl+'/profile',{headers:headers})
        .map((res: Response)=>res.json());
    }

}