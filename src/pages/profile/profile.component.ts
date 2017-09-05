import { UserData } from './../../models/user.model';
import { ProfileService } from './../../services/profile.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit{
    proflie:UserData;
    editBool={
        email:false,
        password:false,
        name:false,
        company:false,
        role:false,
        phone:false
    };
    currentUser:any={};
    constructor(private authService: AuthService,private pService:ProfileService,
                private router:Router){
                    this.getUserData();
                }
    ngOnInit() {
        console.log("ProfileComponent");
    }
    getUserData(){
        this.pService.getUserProfile().subscribe(data=>{
            this.proflie = data;
            console.log(this.proflie);   
            this.currentUser={
                id:this.proflie.id,
                email:this.proflie.email,
                password:this.proflie.password,
                name:`${this.proflie.first_name} ${this.proflie.last_name}`,
                company:this.proflie.company,
                role:this.proflie.role,
                phone:this.proflie.phone
            } ;       
        },error=>{
            console.log("error fetching user data",error);            
        });
    }
    
}