import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'subscription',
    templateUrl: 'subscription.component.html'
})
export class SubscriptionComponent implements OnInit{
    ngOnInit() {
        console.log("SubscriptionComponent");
    }
    constructor(private authService: AuthService,
                private router:Router){}
    
}