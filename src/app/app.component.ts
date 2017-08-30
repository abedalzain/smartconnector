import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Refresher } from "../services/refresher.service";
import { ProfileService } from "../services/profile.service";
import { UserData } from "../models/user.model";
import { LoadingService } from "../services/loading.service";

@Component({
    selector: 'sc-app',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.scss']
    //  styleUrls:['../styles/main.scss']
})

export class AppComponent { 
    
    logged: boolean;
    user:UserData;
    constructor(private auth:AuthService,private router:Router,
        private refresher:Refresher,private profileService:ProfileService,
    private loadingService:LoadingService){
            this.logged = this.auth.GetStatus();
            this.refresher.refresh.subscribe((data)=>{
                this.logged = this.auth.GetStatus();
            });
    }
    ngOnInit(){
        this.refresher.refresh.subscribe((data)=>{
            if(this.auth.GetStatus()){
                this.getUserData();
                return;
            } 
        });
        setTimeout(()=> {
            if(this.auth.GetStatus()){
                this.getUserData();
            }   
        }, 50);    
    }

    logOut(){
        this.loadingService.loading = true;
        localStorage.removeItem("userData");
        this.refresher.refreshSubscription();
        this.refresher.refresh.subscribe(()=>{
            this.logged = this.auth.GetStatus();
        });
        setTimeout(()=>{
            this.router.navigateByUrl("/login");
            this.loadingService.loading = false;
        }, 20);   
        
    }
    goToMyAccount(){
        this.loadingService.loading = true;
        setTimeout(()=> {
            this.router.navigateByUrl('/myaccount');
            this.loadingService.loading = false;
        }, 50);
    }
    getUserData(){
        this.loadingService.loading = true;
        this.profileService.getUserProfile().subscribe(
            data=>{
            console.log(data);
            this.user = data;
            this.loadingService.loading = false;
        },error=>{
            console.log(error);
            this.loadingService.loading = false;
        });
    }
}