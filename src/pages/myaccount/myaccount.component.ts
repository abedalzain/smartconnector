import { Component, OnInit, Renderer } from '@angular/core';
import { Router }                      from '@angular/router';
import { Http, Response }              from '@angular/http';
import { AuthService } from "../../services/auth.service";
import { Refresher } from "../../services/refresher.service";

@Component({
	selector: 'my-account',
	templateUrl: 'myaccount.component.html'
})

export class MyAccountComponent implements OnInit {
    
    constructor(private auth:AuthService,private router:Router,private refresher:Refresher){
        
    }
    ngOnInit() {
       console.log("welcome to MyAccount page");
    //    this.auth.printCurrentUser();
    }

    showProfile(){
        this.router.navigateByUrl('/myaccount/profile');
    }
    showSubscriptions(){
        this.router.navigateByUrl('/myaccount/subscriptions');
    }
}