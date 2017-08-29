import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit{
    currentUser:any={} ;
    ngOnInit() {
        console.log("ProfileComponent");
        // console.log(this.authService.printCurrentUser());
        this.currentUser = this.authService.getCurrentUserData();
        console.log(this.currentUser);
        
    }
    constructor(private authService: AuthService,
                private router:Router){}
    
}