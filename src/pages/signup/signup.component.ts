import { LoadingService } from './../../services/loading.service';
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
        first_name:"",
        last_name:"",
        role:"",
        company:"",
        phone:"",
        email:"",
        password:""
    }
    
    passwordConfirmation ='';
    ngOnInit() {
       console.log("welcome to login page");
       
    }
    constructor(private auth:AuthService,private loadingService:LoadingService,private router:Router){
        
    }
    signup(){
        this.loadingService.loading = true;
        if(this.userData.password == this.passwordConfirmation){
            this.auth.register(this.userData).subscribe((data:any)=>{
                console.log(data);
                this.loadingService.loading = false;
                this.router.navigateByUrl("/login");
            },error=>{
                console.log(error.json());
                this.loadingService.loading = false;
            });
        }
    }

}