import { Component, OnInit, Renderer } from '@angular/core';
import { Router }                      from '@angular/router';
import { Http, Response }              from '@angular/http';
import { AuthService } from "../../services/auth.service";
import { Refresher } from "../../services/refresher.service";
import { LoadingService } from "../../services/loading.service";

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
    //    if(this.auth.logged){
    //         this.router.navigateByUrl("/dashboard");
    //     }
       
    }
    
    constructor(private auth:AuthService,private router:Router,
        private loadingService:LoadingService,private refresher:Refresher){
        this.auth.GetStatus();
    }
    login(){
        this.loadingService.loading = true;
        this.auth.login(this.userData).subscribe(
            res => {
                console.log(res);
                this.auth.LoginStatusSet(true);
                localStorage.setItem("userData",JSON.stringify(res.json()));
                this.refresher.refreshSubscription();
                setTimeout(()=> {
                    this.loadingService.loading = false;
                    this.router.navigateByUrl("/dashboard");
                }, 25);
            },
            error =>{
                console.log(error);
                this.loadingService.loading = false;
            }
        );
    }

}