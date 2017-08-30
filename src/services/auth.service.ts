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
export class AuthService {
    
    baseUrl = "http://smartconnector.herokuapp.com";
    options:RequestOptions;
    logged:boolean =false;
    response:Response;
    constructor(private http:Http,
                private _tokenService: Angular2TokenService,
                private router:Router,private refresher:Refresher){
        let headers = new Headers(
            { 'Content-Type': 'application/json'
            // 'Access-Control-Allow-Origin':'127.0.0.1:4200',
            // 'Access-Control-Allow-Methods':'POST',
            // 'Access-Control-Allow-Headers':'Content-Type, Authorization'
                });
        this.options = new RequestOptions({ headers: headers });
        this._tokenService.init({
            apiBase: this.baseUrl,
            apiPath:"api/v1",
            signInPath:"authentication",
            signOutPath:'sign_out',
            signInRedirect:'/restricted',
            registerAccountPath:'signup',
            globalOptions: {
                headers: {
                    'Content-Type':     'application/json',
                    'Accept':           'application/json',
                    "cache-control": "no-cache"
                }
            }
        });
        // this._tokenService.init({});
    }
    printCurrentUser(){
        console.log(this._tokenService);
    }
    getCurrentUserData(){
        let user:any ={};
        if(this._tokenService.userSignedIn()){
            user.currentAuthData = this._tokenService.currentAuthData;
            user.currentUserData = this._tokenService.currentUserData;
            user.currentUserType = this._tokenService.currentUserType;
            return user;
        }else{
            return user;
        }
        
    }
    public GetStatus(){
        let userData =localStorage.getItem('userData');
        if(userData != null){
            if(userData.length >0){
                // this.LoginStatusSet(true);
                return true;
            }else{
                // this.LoginStatusSet(false);
                return false;
            }
        }else{
            // this.LoginStatusSet(false);
            return false;
        }
    }
    public LoginStatusSet(bool:boolean){
        this.logged = bool;
    }
    
    public login(data:any){
        return this._tokenService.signIn(data)
        
    }
    public register(registerData){
        return this._tokenService.registerAccount(registerData);
    }

    public logout(){
        // let h =JSON.parse(localStorage.getItem("headers"));
        // let headers = new Headers({ 'uid': h.uid},);
        // localStorage.removeItem('access-token');
        // localStorage.removeItem('uid');
        // localStorage.removeItem('client');
        return this._tokenService.signOut();
    }
    
    getUserToken(){
        let data = localStorage.getItem("userData");
        let token:string = JSON.parse(data).id_token;
        // console.log(JSON.parse(data));
        // console.log(token);
        return token;
    }
}
