import { ProfileService } from './../services/profile.service';
import { SubscriptionComponent } from '../pages/subscription/subscription.component';

// import { Angular2TokenService }                   from 'angular2-token';
import { NgModule }                               from '@angular/core';
import { BrowserModule }                          from '@angular/platform-browser';
import { FormsModule }                            from '@angular/forms';
import { HttpModule }                             from '@angular/http';

import { AppRoutingModule }                       from './app-routing.module';

import { InMemoryWebApiModule }                   from 'angular-in-memory-web-api';
import { InMemoryDataService }                    from '../services/in-memory-data.service';


import { AppComponent }                           from './app.component';
import { DashboardComponent}                      from '../pages/dashboard/dashboard.component';
import { WorkflowDetailComponent }                from '../pages/workflow-detail/workflow-detail.component';
import { WorkflowEditComponent }                  from '../pages/workflow-edit/workflow-edit.component';
import { WorkflowService }                        from '../services/workflow.service';
import { WorkflowsComponent }                     from '../pages/workflows/workflows.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent }                         from "../pages/login/login.component";
import { AuthService }                            from "../services/auth.service";
import { SignUpComponent }                        from "../pages/signup/signup.component";
import { Refresher }                              from "../services/refresher.service";
import { Angular2TokenService }                   from "../services/authToken.service";
import { MyAccountComponent }                     from "../pages/myaccount/myaccount.component";
import { ProfileComponent }                       from "../pages/profile/profile.component";
import { LoadingService }                         from "../services/loading.service";
import { CanActivateViaAuthGuard } from "../services/canActive.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    AppRoutingModule,
    // A2tUiModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WorkflowDetailComponent,
    WorkflowEditComponent,
    WorkflowsComponent,
    LoginComponent,
    SignUpComponent,
    MyAccountComponent,
    SubscriptionComponent,
    ProfileComponent
  ],
  providers: [
    WorkflowService,
    AuthService,
    Refresher,
    Angular2TokenService ,
    ProfileService,
    LoadingService,
    CanActivateViaAuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }