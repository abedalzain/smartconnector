import {Component, NgModule, Injectable} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {Subject} from 'rxjs/Rx';

@Injectable()
export class Refresher {
 
 public refresh = new Subject<string>();
 
 public refreshSubscription() {
   this.refresh.next('refresh');
   console.log("refreshed");   
 }
  
}