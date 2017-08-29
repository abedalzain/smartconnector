import { Component, OnInit, Renderer } from '@angular/core';
import { Router }                      from '@angular/router';
import { Http, Response }              from '@angular/http';
import { AuthService } from "../../services/auth.service";
import { Refresher } from "../../services/refresher.service";

@Component({
	selector: 'login',
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    userData:any={
        email:"",
        password:""
    }
    ngOnInit() {
       console.log("welcome to login page");
       
    }
    constructor(private auth:AuthService,private router:Router,private refresher:Refresher){
        
    }
    login(){
        this.auth.login(this.userData);
    }

}