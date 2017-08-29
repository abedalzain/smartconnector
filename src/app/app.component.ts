import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import { Refresher } from "../services/refresher.service";

@Component({
    selector: 'sc-app',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.scss']
    //  styleUrls:['../styles/main.scss']
})

export class AppComponent { 
    logged:boolean =false ;

    constructor(private auth:AuthService,private router:Router,private refresher:Refresher){
        this.logged = this.auth.logged;
        this.refresher.refresh.subscribe((data)=>{
            this.auth.GetStatus();
            this.logged = this.auth.logged;
        });
    }

    loggedOut(){
        this.refresher.refreshSubscription();
        setTimeout(()=> {
            this.router.navigateByUrl("/login");
        }, 50);
    }
    goToMyAccount(){
        setTimeout(()=> {
            this.router.navigateByUrl('/myaccount');
        }, 50);
    }
}