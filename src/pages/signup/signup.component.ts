import { Component, OnInit, Renderer } from '@angular/core';
import { Router }                      from '@angular/router';
import { Http, Response }              from '@angular/http';
import { AuthService } from "../../services/auth.service";

@Component({
	selector: 'signup',
	templateUrl: 'signup.component.html'
})

export class SignUpComponent implements OnInit {
    userData:any={
        firstName:"",
        lastName:"",
        role:"",
        company:"",
        phone:"",
        email:""
    }
    ngOnInit() {
       console.log("welcome to login page");
       
    }
    constructor(private auth:AuthService){
        
    }
    signup(){
        // this.auth.login(JSON.stringify(this.userData)).subscribe((data:any)=>{
        //     console.log(data);
        // },error=>{
        //     console.log(error.json());
        // });
    }

}