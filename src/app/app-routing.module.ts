import { MyAccountComponent }      from '../pages/myaccount/myaccount.component';
import { Angular2TokenService }    from "../services/authToken.service";
import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { DashboardComponent }      from '../pages/dashboard/dashboard.component';
import { WorkflowsComponent }      from '../pages/workflows/workflows.component';
import { WorkflowEditComponent }   from '../pages/workflow-edit/workflow-edit.component';
import { WorkflowDetailComponent } from '../pages/workflow-detail/workflow-detail.component';
import { LoginComponent }          from "../pages/login/login.component";
import { SignUpComponent }         from "../pages/signup/signup.component";
import { SubscriptionComponent }   from "../pages/subscription/subscription.component";
import { ProfileComponent }        from "../pages/profile/profile.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'edit/:id', component: WorkflowEditComponent },
    { path: 'detail/:id', component: WorkflowDetailComponent },
    { path: 'workflows', component: WorkflowsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    {
        path: 'restricted',
        component: LoginComponent,
        canActivate: [Angular2TokenService]
    },
    { path:'myaccount',component:MyAccountComponent,
        children: [
            { path: '', redirectTo: 'subscriptions', pathMatch: 'full' },
            { path: 'subscriptions', component: SubscriptionComponent },
            { path: 'profile', component: ProfileComponent }
        ]
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
