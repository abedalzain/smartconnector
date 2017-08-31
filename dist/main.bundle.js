webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_myaccount_myaccount_component__ = __webpack_require__("../../../../../src/pages/myaccount/myaccount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authToken_service__ = __webpack_require__("../../../../../src/services/authToken.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_workflows_workflows_component__ = __webpack_require__("../../../../../src/pages/workflows/workflows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_workflow_edit_workflow_edit_component__ = __webpack_require__("../../../../../src/pages/workflow-edit/workflow-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_workflow_detail_workflow_detail_component__ = __webpack_require__("../../../../../src/pages/workflow-detail/workflow-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login_component__ = __webpack_require__("../../../../../src/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup_component__ = __webpack_require__("../../../../../src/pages/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_subscription_subscription_component__ = __webpack_require__("../../../../../src/pages/subscription/subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile_component__ = __webpack_require__("../../../../../src/pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_canActive_service__ = __webpack_require__("../../../../../src/services/canActive.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_canActive_service__["a" /* CanActivateViaAuthGuard */]
        ]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_workflow_edit_workflow_edit_component__["a" /* WorkflowEditComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_canActive_service__["a" /* CanActivateViaAuthGuard */]
        ]
    },
    {
        path: 'detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_workflow_detail_workflow_detail_component__["a" /* WorkflowDetailComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_canActive_service__["a" /* CanActivateViaAuthGuard */]
        ]
    },
    {
        path: 'workflows',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_workflows_workflows_component__["a" /* WorkflowsComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_canActive_service__["a" /* CanActivateViaAuthGuard */]
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup_component__["a" /* SignUpComponent */] },
    {
        path: 'restricted',
        component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_authToken_service__["a" /* Angular2TokenService */]]
    },
    {
        path: 'myaccount', component: __WEBPACK_IMPORTED_MODULE_0__pages_myaccount_myaccount_component__["a" /* MyAccountComponent */],
        children: [
            { path: '', redirectTo: 'subscriptions', pathMatch: 'full' },
            { path: 'subscriptions', component: __WEBPACK_IMPORTED_MODULE_10__pages_subscription_subscription_component__["a" /* SubscriptionComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile_component__["a" /* ProfileComponent */] }
        ],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_12__services_canActive_service__["a" /* CanActivateViaAuthGuard */]
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"loadingService?.loading\" class=\"loader\"></div>\r\n<div *ngIf=\"loadingService?.loading\" class=\"overlay\"></div> -->\r\n<div id=\"header\" class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li>\r\n                    <a [routerLink]=\"['/dashboard']\" class=\"pull-left\">\r\n                        <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\" id=\"home-btn\"></span>\r\n                    </a>\r\n                </li>\r\n                <li><a [routerLink]=\"['/dashboard']\" class=\"pull-left\">\r\n                        <img id=\"header-logo\" src=\"assets/images/header-logo.png\" alt=\"Smartsheet Connector\">\r\n                    </a>\r\n                </li>\r\n\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"!logged\">\r\n                <li class=\"account-section-button\">\r\n                    <button  [routerLink]=\"['/login']\" class=\"btn btn-default\">Sign In</button>                   \r\n                </li>\r\n\r\n                <li class=\"account-section-button\">\r\n                    <button [routerLink]=\"['/signup']\" class=\"btn btn-success\">Sign Up</button>                   \r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"logged\">\r\n                <li>\r\n                    <p id=\"trial-box\" class=\"bg-info\">Trial expires in 7 days - Subscribe Now!</p>\r\n                </li>\r\n                <li class=\"account-section-item\">\r\n                        <i class=\"fa fa-question-circle-o \" aria-hidden=\"true\"></i>\r\n                     </li>\r\n         \r\n                     <li class=\"account-section-item\">\r\n                         <i class=\"fa fa-cog \" aria-hidden=\"true\"></i>\r\n                     </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                           \r\n                            <img  width=\"40\" src=\"assets/images/user.png\" alt=\"Smartsheet Connector\">\r\n                            \r\n                        </a>\r\n                    <ul class=\"dropdown-menu navbar-login-menu\">\r\n                        <li>\r\n                            <div class=\"navbar-login\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-4\">\r\n                                        <p class=\"text-center\">\r\n                                            <img width=\"60\" src=\"assets/images/user.png\" alt=\"Smartsheet Connector\">\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"col-lg-8\">\r\n                                        <p class=\"text-left\">\r\n                                            <strong>\r\n                                                <!-- Rajab Nabih -->\r\n                                                {{user?.first_name}}&nbsp;{{user?.last_name}}\r\n                                            </strong>\r\n                                        </p>\r\n                                        <p class=\"text-left small\">\r\n                                            <!-- correoElectronico@email.com -->\r\n                                            {{user?.email}}\r\n                                        </p>\r\n                                        \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li>\r\n                            <div class=\"navbar-login navbar-login-session\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-6\">\r\n                                        <p>\r\n                                            <a (click)=\"goToMyAccount()\" class=\"btn btn-info btn-sm\">My Account</a>\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"col-lg-6\">\r\n                                            <p class=\"text-left\">\r\n                                               <a (click)=\"logOut()\" class=\"btn btn-default  btn-sm\">Sign out</a>\r\n                                            </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<main>\r\n    <div class=\"content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_refresher_service__ = __webpack_require__("../../../../../src/services/refresher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_profile_service__ = __webpack_require__("../../../../../src/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_loading_service__ = __webpack_require__("../../../../../src/services/loading.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(auth, router, refresher, profileService, loadingService) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.refresher = refresher;
        this.profileService = profileService;
        this.loadingService = loadingService;
        this.logged = this.auth.GetStatus();
        this.refresher.refresh.subscribe(function (data) {
            _this.logged = _this.auth.GetStatus();
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refresher.refresh.subscribe(function (data) {
            if (_this.auth.GetStatus()) {
                _this.getUserData();
                return;
            }
        });
        setTimeout(function () {
            if (_this.auth.GetStatus()) {
                _this.getUserData();
            }
        }, 50);
    };
    AppComponent.prototype.logOut = function () {
        var _this = this;
        this.loadingService.loading = true;
        localStorage.removeItem("userData");
        this.refresher.refreshSubscription();
        this.refresher.refresh.subscribe(function () {
            _this.logged = _this.auth.GetStatus();
        });
        setTimeout(function () {
            _this.router.navigateByUrl("/login");
            _this.loadingService.loading = false;
        }, 20);
    };
    AppComponent.prototype.goToMyAccount = function () {
        var _this = this;
        this.loadingService.loading = true;
        setTimeout(function () {
            _this.router.navigateByUrl('/myaccount');
            _this.loadingService.loading = false;
        }, 50);
    };
    AppComponent.prototype.getUserData = function () {
        var _this = this;
        this.loadingService.loading = true;
        this.profileService.getUserProfile().subscribe(function (data) {
            console.log(data);
            _this.user = data;
            _this.loadingService.loading = false;
        }, function (error) {
            console.log(error);
            _this.loadingService.loading = false;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'sc-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        //  styleUrls:['../styles/main.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_refresher_service__["a" /* Refresher */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_refresher_service__["a" /* Refresher */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_profile_service__["a" /* ProfileService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_loading_service__["a" /* LoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_loading_service__["a" /* LoadingService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_profile_service__ = __webpack_require__("../../../../../src/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_subscription_subscription_component__ = __webpack_require__("../../../../../src/pages/subscription/subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_in_memory_data_service__ = __webpack_require__("../../../../../src/services/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_workflow_detail_workflow_detail_component__ = __webpack_require__("../../../../../src/pages/workflow-detail/workflow-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_workflow_edit_workflow_edit_component__ = __webpack_require__("../../../../../src/pages/workflow-edit/workflow-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_workflow_service__ = __webpack_require__("../../../../../src/services/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_workflows_workflows_component__ = __webpack_require__("../../../../../src/pages/workflows/workflows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login_component__ = __webpack_require__("../../../../../src/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup_component__ = __webpack_require__("../../../../../src/pages/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_refresher_service__ = __webpack_require__("../../../../../src/services/refresher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_authToken_service__ = __webpack_require__("../../../../../src/services/authToken.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_myaccount_myaccount_component__ = __webpack_require__("../../../../../src/pages/myaccount/myaccount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile_component__ = __webpack_require__("../../../../../src/pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_loading_service__ = __webpack_require__("../../../../../src/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_canActive_service__ = __webpack_require__("../../../../../src/services/canActive.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { Angular2TokenService }                   from 'angular2-token';























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__services_in_memory_data_service__["a" /* InMemoryDataService */], { passThruUnknownUrl: true }),
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_workflow_detail_workflow_detail_component__["a" /* WorkflowDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_workflow_edit_workflow_edit_component__["a" /* WorkflowEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_workflows_workflows_component__["a" /* WorkflowsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_myaccount_myaccount_component__["a" /* MyAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_1__pages_subscription_subscription_component__["a" /* SubscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile_component__["a" /* ProfileComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__services_workflow_service__["a" /* WorkflowService */],
            __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_19__services_refresher_service__["a" /* Refresher */],
            __WEBPACK_IMPORTED_MODULE_20__services_authToken_service__["a" /* Angular2TokenService */],
            __WEBPACK_IMPORTED_MODULE_0__services_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_23__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_24__services_canActive_service__["a" /* CanActivateViaAuthGuard */],
            { provide: __WEBPACK_IMPORTED_MODULE_15__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_15__angular_common__["d" /* HashLocationStrategy */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/models/workflow.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Workflow; });
var Workflow = (function () {
    function Workflow() {
    }
    return Workflow;
}());

//# sourceMappingURL=workflow.js.map

/***/ }),

/***/ "../../../../../src/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Workflows</h1>\r\n<div class=\"align-center\">\r\n    <button class=\"btn btn-action\" (click)=\"add()\">Add Workflow</button>\r\n</div>\r\n<ul class=\"workflows\">\r\n    <li *ngFor=\"let workflow of workflows\" class=\"workflow\">\r\n        <div class=\"workflow-sync\">\r\n            <img src=\"assets/svgs/jira.svg\" height=\"20\">\r\n\r\n            <i *ngIf=\"workflow.syncType === 'Two-way sync'\" class=\"workflow-arrow fa fa-arrows-h\" aria-hidden=\"true\"></i>\r\n            <i *ngIf=\"workflow.syncType === 'JIRA to Smartsheet'\" class=\"workflow-arrow fa fa-long-arrow-right\" aria-hidden=\"true\"></i>\r\n            <i *ngIf=\"workflow.syncType === 'Smartsheet to JIRA'\" class=\"workflow-arrow fa fa-long-arrow-left\" aria-hidden=\"true\"></i>\r\n\r\n            <img src=\"assets/svgs/smartsheet.svg\" height=\"20\">\r\n        </div>\r\n        <div class=\"workflow-title\">\r\n            <h2>\r\n                <a [routerLink]=\"['/edit', workflow.id]\" class=\"workflow-name\">{{workflow.name}}</a>\r\n                <span *ngIf=\"workflow.interval\" class=\"interval-badge\">{{ workflow.interval }}</span>\r\n            </h2>\r\n            <p *ngIf=\"workflow.lastSync\" class=\"last-sync\">Last sync: {{workflow.lastSync | date: 'd MMM, h:mma'}}</p>\r\n        </div>\r\n        <div class=\"workflow-status\">\r\n            <label class=\"toggle\">\r\n                <input type=\"checkbox\" *ngIf=\"workflow.active\" checked (change)=\"toggle(workflow); $event.stopPropagation()\">\r\n                <input type=\"checkbox\" *ngIf=\"!workflow.active\" (change)=\"toggle(workflow); $event.stopPropagation()\">\r\n                <div class=\"toggle-slider\"></div>\r\n                <div class=\"toggle-on\">On</div>\r\n                <div class=\"toggle-off\">Off</div>\r\n            </label>\r\n        </div>\r\n        <div class=\"workflow-actions\">\r\n            <button (click)=\"sync(workflow, $event)\" class=\"workflow-sync-now\" title=\"Sync workflow\">\r\n                <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <a [routerLink]=\"['/edit', workflow.id]\" class=\"workflow-edit\" title=\"Edit workflow\">\r\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n            </a>\r\n            <button (click)=\"delete(workflow); $event.stopPropagation()\" class=\"workflow-delete\" title=\"Delete workflow\">\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_workflow_service__ = __webpack_require__("../../../../../src/services/workflow.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(router, workflowService, http, _renderer) {
        this.router = router;
        this.workflowService = workflowService;
        this.http = http;
        this._renderer = _renderer;
    }
    DashboardComponent.prototype.goToDetail = function (workflow) {
        this.router.navigate(['/edit', workflow.id]);
    };
    DashboardComponent.prototype.getWorkflows = function () {
        var _this = this;
        this.workflowService.getWorkflows().then(function (workflows) { return _this.workflows = workflows; });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getWorkflows();
    };
    DashboardComponent.prototype.add = function () {
        var _this = this;
        this.workflowService.create()
            .then(function (workflow) {
            _this.goToDetail(workflow);
        });
    };
    DashboardComponent.prototype.toggle = function (workflow) {
        workflow.active = !workflow.active;
        this.workflowService.update(workflow);
    };
    DashboardComponent.prototype.delete = function (workflow) {
        var _this = this;
        if (confirm('Are you sure you want to delete this?')) {
            this.workflowService
                .delete(workflow.id)
                .then(function () {
                _this.workflows = _this.workflows.filter(function (h) { return h !== workflow; });
            });
        }
    };
    DashboardComponent.prototype.sync = function (workflow, event) {
        var _this = this;
        var icon = event.target;
        this._renderer.setElementClass(icon, 'fa-spin', true);
        var data = '?' +
            encodeURIComponent('jira_connection[username]') + '=' + encodeURIComponent('edibouazza') +
            '&' + encodeURIComponent('jira_connection[password]') + '=' + encodeURIComponent('Y%0YH\'F?\'Fh1{cXU8[') +
            '&' + encodeURIComponent('jira_connection[site]') + '=' + encodeURIComponent('diffagency.atlassian.net') +
            '&' + encodeURIComponent('smartsheet_connection[bearer_token]') + '=' + encodeURIComponent('1xkmmm7go8z5u5hwkrez8u05i7');
        this.http.get('https://api.smartconnector.io/jira/sync' + data)
            .toPromise()
            .then(function (response) {
            console.log(response);
            _this._renderer.setElementClass(icon, 'fa-spin', false);
            _this._renderer.setElementClass(icon, 'fa-refresh', false);
            _this._renderer.setElementClass(icon, 'fa-check', true);
            setTimeout(function () {
                _this._renderer.setElementClass(icon, 'fa-check', false);
                _this._renderer.setElementClass(icon, 'fa-refresh', true);
            }, 2000);
        }, function (response) {
            console.error(response);
            _this._renderer.setElementClass(icon, 'fa-spin', false);
            _this._renderer.setElementClass(icon, 'fa-ban', true);
            _this._renderer.setElementClass(icon, 'fa-refresh', false);
            setTimeout(function () {
                _this._renderer.setElementClass(icon, 'fa-ban', false);
                _this._renderer.setElementClass(icon, 'fa-refresh', true);
            }, 2000);
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-dashboard',
        template: __webpack_require__("../../../../../src/pages/dashboard/dashboard.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_workflow_service__["a" /* WorkflowService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate=\"\">\r\n\r\n    <div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <h3 class=\"pull-left\">Sign In</h3>\r\n            </div>\r\n        </div>\r\n        \r\n\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <input type=\"email\" placeholder=\"Email\" name=\"email\" (keyup.enter)=\"login()\" [(ngModel)]=\"userData.email\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <a class=\"form-link pull-right\" href=\"#\">Forgot?</a>\r\n                <input type=\"password\" placeholder=\"Password\" name=\"password\" (keyup.enter)=\"login()\" [(ngModel)]=\"userData.password\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <button type=\"button\" class=\"btn btn-primary sign-in-btn\" (click)=\"login()\">SIGN IN</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <hr id=\"sign-in-hr\"/>\r\n            </div>\r\n            <div id=\"sign-in-or\">OR</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <button type=\"button\" class=\"btn sign-in-btn\" id=\"google-sign-in-btn\">\r\n                    <i class=\"fa fa-google-plus-official\" id=\"google-plus-icon\" aria-hidden=\"true\"></i>\r\n                    SIGN IN WITH GOOGLE\r\n                    </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"login-inputs\">\r\n                <span>\r\n                    Don't have an account?\r\n                </span>\r\n                <br>\r\n                <a [routerLink]=\"['/signup']\">REGISTER NOW</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_refresher_service__ = __webpack_require__("../../../../../src/services/refresher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loading_service__ = __webpack_require__("../../../../../src/services/loading.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(auth, router, loadingService, refresher) {
        this.auth = auth;
        this.router = router;
        this.loadingService = loadingService;
        this.refresher = refresher;
        this.userData = {
            email: "",
            password: ""
        };
        this.auth.GetStatus();
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("welcome to login page");
        //    if(this.auth.logged){
        //         this.router.navigateByUrl("/dashboard");
        //     }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loadingService.loading = true;
        this.auth.login(this.userData).subscribe(function (res) {
            console.log(res);
            _this.auth.LoginStatusSet(true);
            localStorage.setItem("userData", JSON.stringify(res.json()));
            _this.refresher.refreshSubscription();
            setTimeout(function () {
                _this.loadingService.loading = false;
                _this.router.navigateByUrl("/dashboard");
            }, 25);
        }, function (error) {
            console.log(error);
            _this.loadingService.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/pages/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_loading_service__["a" /* LoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_loading_service__["a" /* LoadingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_refresher_service__["a" /* Refresher */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_refresher_service__["a" /* Refresher */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/pages/myaccount/myaccount.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page_title\">\r\n    My Account\r\n</div>\r\n<div class=\"page-content\">\r\n    <div class=\"page_left_side\">\r\n        <div id=\"subscription\" class=\"clickable\" (click)=\"showSubscriptions()\">\r\n            <i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i>\r\n            <span>\r\n                Subscription\r\n            </span>\r\n        </div>\r\n        <div id=\"profile\" class=\"clickable\" (click)=\"showProfile()\">\r\n            <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\r\n            <span>\r\n                Profile\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"page_right_side\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/pages/myaccount/myaccount.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_refresher_service__ = __webpack_require__("../../../../../src/services/refresher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyAccountComponent = (function () {
    function MyAccountComponent(auth, router, refresher) {
        this.auth = auth;
        this.router = router;
        this.refresher = refresher;
    }
    MyAccountComponent.prototype.ngOnInit = function () {
        console.log("welcome to MyAccount page");
        //    this.auth.printCurrentUser();
    };
    MyAccountComponent.prototype.showProfile = function () {
        this.router.navigateByUrl('/myaccount/profile');
    };
    MyAccountComponent.prototype.showSubscriptions = function () {
        this.router.navigateByUrl('/myaccount/subscriptions');
    };
    return MyAccountComponent;
}());
MyAccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-account',
        template: __webpack_require__("../../../../../src/pages/myaccount/myaccount.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_refresher_service__["a" /* Refresher */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_refresher_service__["a" /* Refresher */]) === "function" && _c || Object])
], MyAccountComponent);

var _a, _b, _c;
//# sourceMappingURL=myaccount.component.js.map

/***/ }),

/***/ "../../../../../src/pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<div class=\"page_title\">\r\n    Profile\r\n</div>\r\n    <div class=\"inner_profile_row\">\r\n        <span class=\"profile_form_tag\">Name:</span>\r\n        <input class=\"profile_form_input\" type=\"text\" placeholder=\"Name\" name=\"name\"/>\r\n    </div>\r\n    <div class=\"inner_profile_row\">\r\n        <span class=\"profile_form_tag\">Email:</span>\r\n        <span class=\"profile_form_text\">{{currentUser.currentUserData.email}} &nbsp;<a class=\"clickable\">Change</a></span>\r\n    </div>\r\n    <div class=\"inner_profile_row\">\r\n        <span class=\"profile_form_tag\">Password:</span>\r\n        <span class=\"profile_form_text\"><a class=\"clickable\">Change</a></span>\r\n    </div>\r\n    <div class=\"inner_profile_row\">\r\n        <span class=\"profile_form_tag\">Company:</span>\r\n        <input class=\"profile_form_input\" type=\"text\" placeholder=\"Company\" name=\"company\"/>\r\n    </div>\r\n    <div class=\"inner_profile_row\">\r\n        <span class=\"profile_form_tag\">Role:</span>\r\n        <input class=\"profile_form_input\" type=\"text\" placeholder=\"Role\" name=\"role\"/>\r\n    </div>\r\n    <div class=\"inner_profile_row\">\r\n        <span class=\"profile_form_tag\">Phone:</span>\r\n        <input class=\"profile_form_input\" type=\"text\" placeholder=\"Phone\" name=\"number\"/>\r\n    </div>\r\n    <div class=\"inner_profile_row\">\r\n        <span class=\"profile_form_tag\">Time Zone:</span>\r\n        <select class=\"profile_form_input\">\r\n            <option timeZoneId=\"1\" gmtAdjustment=\"GMT-12:00\" useDaylightTime=\"0\" value=\"-12\">(GMT-12:00) International Date Line West</option>\r\n            <option timeZoneId=\"2\" gmtAdjustment=\"GMT-11:00\" useDaylightTime=\"0\" value=\"-11\">(GMT-11:00) Midway Island, Samoa</option>\r\n            <option timeZoneId=\"3\" gmtAdjustment=\"GMT-10:00\" useDaylightTime=\"0\" value=\"-10\">(GMT-10:00) Hawaii</option>\r\n            <option timeZoneId=\"4\" gmtAdjustment=\"GMT-09:00\" useDaylightTime=\"1\" value=\"-9\">(GMT-09:00) Alaska</option>\r\n            <option timeZoneId=\"5\" gmtAdjustment=\"GMT-08:00\" useDaylightTime=\"1\" value=\"-8\">(GMT-08:00) Pacific Time (US & Canada)</option>\r\n            <option timeZoneId=\"6\" gmtAdjustment=\"GMT-08:00\" useDaylightTime=\"1\" value=\"-8\">(GMT-08:00) Tijuana, Baja California</option>\r\n            <option timeZoneId=\"7\" gmtAdjustment=\"GMT-07:00\" useDaylightTime=\"0\" value=\"-7\">(GMT-07:00) Arizona</option>\r\n            <option timeZoneId=\"8\" gmtAdjustment=\"GMT-07:00\" useDaylightTime=\"1\" value=\"-7\">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>\r\n            <option timeZoneId=\"9\" gmtAdjustment=\"GMT-07:00\" useDaylightTime=\"1\" value=\"-7\">(GMT-07:00) Mountain Time (US & Canada)</option>\r\n            <option timeZoneId=\"10\" gmtAdjustment=\"GMT-06:00\" useDaylightTime=\"0\" value=\"-6\">(GMT-06:00) Central America</option>\r\n            <option timeZoneId=\"11\" gmtAdjustment=\"GMT-06:00\" useDaylightTime=\"1\" value=\"-6\">(GMT-06:00) Central Time (US & Canada)</option>\r\n            <option timeZoneId=\"12\" gmtAdjustment=\"GMT-06:00\" useDaylightTime=\"1\" value=\"-6\">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>\r\n            <option timeZoneId=\"13\" gmtAdjustment=\"GMT-06:00\" useDaylightTime=\"0\" value=\"-6\">(GMT-06:00) Saskatchewan</option>\r\n            <option timeZoneId=\"14\" gmtAdjustment=\"GMT-05:00\" useDaylightTime=\"0\" value=\"-5\">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>\r\n            <option timeZoneId=\"15\" gmtAdjustment=\"GMT-05:00\" useDaylightTime=\"1\" value=\"-5\">(GMT-05:00) Eastern Time (US & Canada)</option>\r\n            <option timeZoneId=\"16\" gmtAdjustment=\"GMT-05:00\" useDaylightTime=\"1\" value=\"-5\">(GMT-05:00) Indiana (East)</option>\r\n            <option timeZoneId=\"17\" gmtAdjustment=\"GMT-04:00\" useDaylightTime=\"1\" value=\"-4\">(GMT-04:00) Atlantic Time (Canada)</option>\r\n            <option timeZoneId=\"18\" gmtAdjustment=\"GMT-04:00\" useDaylightTime=\"0\" value=\"-4\">(GMT-04:00) Caracas, La Paz</option>\r\n            <option timeZoneId=\"19\" gmtAdjustment=\"GMT-04:00\" useDaylightTime=\"0\" value=\"-4\">(GMT-04:00) Manaus</option>\r\n            <option timeZoneId=\"20\" gmtAdjustment=\"GMT-04:00\" useDaylightTime=\"1\" value=\"-4\">(GMT-04:00) Santiago</option>\r\n            <option timeZoneId=\"21\" gmtAdjustment=\"GMT-03:30\" useDaylightTime=\"1\" value=\"-3.5\">(GMT-03:30) Newfoundland</option>\r\n            <option timeZoneId=\"22\" gmtAdjustment=\"GMT-03:00\" useDaylightTime=\"1\" value=\"-3\">(GMT-03:00) Brasilia</option>\r\n            <option timeZoneId=\"23\" gmtAdjustment=\"GMT-03:00\" useDaylightTime=\"0\" value=\"-3\">(GMT-03:00) Buenos Aires, Georgetown</option>\r\n            <option timeZoneId=\"24\" gmtAdjustment=\"GMT-03:00\" useDaylightTime=\"1\" value=\"-3\">(GMT-03:00) Greenland</option>\r\n            <option timeZoneId=\"25\" gmtAdjustment=\"GMT-03:00\" useDaylightTime=\"1\" value=\"-3\">(GMT-03:00) Montevideo</option>\r\n            <option timeZoneId=\"26\" gmtAdjustment=\"GMT-02:00\" useDaylightTime=\"1\" value=\"-2\">(GMT-02:00) Mid-Atlantic</option>\r\n            <option timeZoneId=\"27\" gmtAdjustment=\"GMT-01:00\" useDaylightTime=\"0\" value=\"-1\">(GMT-01:00) Cape Verde Is.</option>\r\n            <option timeZoneId=\"28\" gmtAdjustment=\"GMT-01:00\" useDaylightTime=\"1\" value=\"-1\">(GMT-01:00) Azores</option>\r\n            <option timeZoneId=\"29\" gmtAdjustment=\"GMT+00:00\" useDaylightTime=\"0\" value=\"0\">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>\r\n            <option timeZoneId=\"30\" gmtAdjustment=\"GMT+00:00\" useDaylightTime=\"1\" value=\"0\">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>\r\n            <option timeZoneId=\"31\" gmtAdjustment=\"GMT+01:00\" useDaylightTime=\"1\" value=\"1\">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>\r\n            <option timeZoneId=\"32\" gmtAdjustment=\"GMT+01:00\" useDaylightTime=\"1\" value=\"1\">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>\r\n            <option timeZoneId=\"33\" gmtAdjustment=\"GMT+01:00\" useDaylightTime=\"1\" value=\"1\">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>\r\n            <option timeZoneId=\"34\" gmtAdjustment=\"GMT+01:00\" useDaylightTime=\"1\" value=\"1\">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>\r\n            <option timeZoneId=\"35\" gmtAdjustment=\"GMT+01:00\" useDaylightTime=\"1\" value=\"1\">(GMT+01:00) West Central Africa</option>\r\n            <option timeZoneId=\"36\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Amman</option>\r\n            <option timeZoneId=\"37\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Athens, Bucharest, Istanbul</option>\r\n            <option timeZoneId=\"38\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Beirut</option>\r\n            <option timeZoneId=\"39\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Cairo</option>\r\n            <option timeZoneId=\"40\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"0\" value=\"2\">(GMT+02:00) Harare, Pretoria</option>\r\n            <option timeZoneId=\"41\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>\r\n            <option timeZoneId=\"42\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Jerusalem</option>\r\n            <option timeZoneId=\"43\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Minsk</option>\r\n            <option timeZoneId=\"44\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Windhoek</option>\r\n            <option timeZoneId=\"45\" gmtAdjustment=\"GMT+03:00\" useDaylightTime=\"0\" value=\"3\">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>\r\n            <option timeZoneId=\"46\" gmtAdjustment=\"GMT+03:00\" useDaylightTime=\"1\" value=\"3\">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>\r\n            <option timeZoneId=\"47\" gmtAdjustment=\"GMT+03:00\" useDaylightTime=\"0\" value=\"3\">(GMT+03:00) Nairobi</option>\r\n            <option timeZoneId=\"48\" gmtAdjustment=\"GMT+03:00\" useDaylightTime=\"0\" value=\"3\">(GMT+03:00) Tbilisi</option>\r\n            <option timeZoneId=\"49\" gmtAdjustment=\"GMT+03:30\" useDaylightTime=\"1\" value=\"3.5\">(GMT+03:30) Tehran</option>\r\n            <option timeZoneId=\"50\" gmtAdjustment=\"GMT+04:00\" useDaylightTime=\"0\" value=\"4\">(GMT+04:00) Abu Dhabi, Muscat</option>\r\n            <option timeZoneId=\"51\" gmtAdjustment=\"GMT+04:00\" useDaylightTime=\"1\" value=\"4\">(GMT+04:00) Baku</option>\r\n            <option timeZoneId=\"52\" gmtAdjustment=\"GMT+04:00\" useDaylightTime=\"1\" value=\"4\">(GMT+04:00) Yerevan</option>\r\n            <option timeZoneId=\"53\" gmtAdjustment=\"GMT+04:30\" useDaylightTime=\"0\" value=\"4.5\">(GMT+04:30) Kabul</option>\r\n            <option timeZoneId=\"54\" gmtAdjustment=\"GMT+05:00\" useDaylightTime=\"1\" value=\"5\">(GMT+05:00) Yekaterinburg</option>\r\n            <option timeZoneId=\"55\" gmtAdjustment=\"GMT+05:00\" useDaylightTime=\"0\" value=\"5\">(GMT+05:00) Islamabad, Karachi, Tashkent</option>\r\n            <option timeZoneId=\"56\" gmtAdjustment=\"GMT+05:30\" useDaylightTime=\"0\" value=\"5.5\">(GMT+05:30) Sri Jayawardenapura</option>\r\n            <option timeZoneId=\"57\" gmtAdjustment=\"GMT+05:30\" useDaylightTime=\"0\" value=\"5.5\">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>\r\n            <option timeZoneId=\"58\" gmtAdjustment=\"GMT+05:45\" useDaylightTime=\"0\" value=\"5.75\">(GMT+05:45) Kathmandu</option>\r\n            <option timeZoneId=\"59\" gmtAdjustment=\"GMT+06:00\" useDaylightTime=\"1\" value=\"6\">(GMT+06:00) Almaty, Novosibirsk</option>\r\n            <option timeZoneId=\"60\" gmtAdjustment=\"GMT+06:00\" useDaylightTime=\"0\" value=\"6\">(GMT+06:00) Astana, Dhaka</option>\r\n            <option timeZoneId=\"61\" gmtAdjustment=\"GMT+06:30\" useDaylightTime=\"0\" value=\"6.5\">(GMT+06:30) Yangon (Rangoon)</option>\r\n            <option timeZoneId=\"62\" gmtAdjustment=\"GMT+07:00\" useDaylightTime=\"0\" value=\"7\">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>\r\n            <option timeZoneId=\"63\" gmtAdjustment=\"GMT+07:00\" useDaylightTime=\"1\" value=\"7\">(GMT+07:00) Krasnoyarsk</option>\r\n            <option timeZoneId=\"64\" gmtAdjustment=\"GMT+08:00\" useDaylightTime=\"0\" value=\"8\">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>\r\n            <option timeZoneId=\"65\" gmtAdjustment=\"GMT+08:00\" useDaylightTime=\"0\" value=\"8\">(GMT+08:00) Kuala Lumpur, Singapore</option>\r\n            <option timeZoneId=\"66\" gmtAdjustment=\"GMT+08:00\" useDaylightTime=\"0\" value=\"8\">(GMT+08:00) Irkutsk, Ulaan Bataar</option>\r\n            <option timeZoneId=\"67\" gmtAdjustment=\"GMT+08:00\" useDaylightTime=\"0\" value=\"8\">(GMT+08:00) Perth</option>\r\n            <option timeZoneId=\"68\" gmtAdjustment=\"GMT+08:00\" useDaylightTime=\"0\" value=\"8\">(GMT+08:00) Taipei</option>\r\n            <option timeZoneId=\"69\" gmtAdjustment=\"GMT+09:00\" useDaylightTime=\"0\" value=\"9\">(GMT+09:00) Osaka, Sapporo, Tokyo</option>\r\n            <option timeZoneId=\"70\" gmtAdjustment=\"GMT+09:00\" useDaylightTime=\"0\" value=\"9\">(GMT+09:00) Seoul</option>\r\n            <option timeZoneId=\"71\" gmtAdjustment=\"GMT+09:00\" useDaylightTime=\"1\" value=\"9\">(GMT+09:00) Yakutsk</option>\r\n            <option timeZoneId=\"72\" gmtAdjustment=\"GMT+09:30\" useDaylightTime=\"0\" value=\"9.5\">(GMT+09:30) Adelaide</option>\r\n            <option timeZoneId=\"73\" gmtAdjustment=\"GMT+09:30\" useDaylightTime=\"0\" value=\"9.5\">(GMT+09:30) Darwin</option>\r\n            <option timeZoneId=\"74\" gmtAdjustment=\"GMT+10:00\" useDaylightTime=\"0\" value=\"10\">(GMT+10:00) Brisbane</option>\r\n            <option timeZoneId=\"75\" gmtAdjustment=\"GMT+10:00\" useDaylightTime=\"1\" value=\"10\">(GMT+10:00) Canberra, Melbourne, Sydney</option>\r\n            <option timeZoneId=\"76\" gmtAdjustment=\"GMT+10:00\" useDaylightTime=\"1\" value=\"10\">(GMT+10:00) Hobart</option>\r\n            <option timeZoneId=\"77\" gmtAdjustment=\"GMT+10:00\" useDaylightTime=\"0\" value=\"10\">(GMT+10:00) Guam, Port Moresby</option>\r\n            <option timeZoneId=\"78\" gmtAdjustment=\"GMT+10:00\" useDaylightTime=\"1\" value=\"10\">(GMT+10:00) Vladivostok</option>\r\n            <option timeZoneId=\"79\" gmtAdjustment=\"GMT+11:00\" useDaylightTime=\"1\" value=\"11\">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>\r\n            <option timeZoneId=\"80\" gmtAdjustment=\"GMT+12:00\" useDaylightTime=\"1\" value=\"12\">(GMT+12:00) Auckland, Wellington</option>\r\n            <option timeZoneId=\"81\" gmtAdjustment=\"GMT+12:00\" useDaylightTime=\"0\" value=\"12\">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>\r\n            <option timeZoneId=\"82\" gmtAdjustment=\"GMT+13:00\" useDaylightTime=\"0\" value=\"13\">(GMT+13:00) Nuku'alofa</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"inner_profile_row\">\r\n        <span class=\"profile_form_tag\">Developer Mode:</span>\r\n        <input type=\"checkbox\" name=\"developerMode\" id=\"developer\" value=\"dev\"/>\r\n    </div>\r\n    <div class=\"inner_profile_row\">\r\n            <span class=\"profile_form_tag\"></span>\r\n            <button style=\"margin-left: 0px;\" class=\"btn btn-info\">Save</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.currentUser = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        console.log("ProfileComponent");
        // console.log(this.authService.printCurrentUser());
        this.currentUser = this.authService.getCurrentUserData();
        console.log(this.currentUser);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'profile',
        template: __webpack_require__("../../../../../src/pages/profile/profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/pages/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate=\"\">\r\n\r\n    <div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <h3 class=\"pull-left\">Sign Up</h3>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <input type=\"text\" placeholder=\"First Name\" name=\"firstName\" (keyup.enter)=\"signup()\" [(ngModel)]=\"userData.first_name\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <input type=\"text\" placeholder=\"Last Name\" name=\"lastName\" (keyup.enter)=\"signup()\" [(ngModel)]=\"userData.last_name\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <input type=\"text\" placeholder=\"Role\" name=\"role\" (keyup.enter)=\"signup()\" [(ngModel)]=\"userData.role\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <input type=\"text\" placeholder=\"Company\" name=\"company\" (keyup.enter)=\"signup()\" [(ngModel)]=\"userData.company\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <input type=\"text\" placeholder=\"Phone\" name=\"phone\" (keyup.enter)=\"signup()\" [(ngModel)]=\"userData.phone\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <input type=\"email\" placeholder=\"Email\" name=\"email\" (keyup.enter)=\"signup()\" [(ngModel)]=\"userData.email\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <input type=\"password\" placeholder=\"Password\" name=\"password\" (keyup.enter)=\"signup()\" [(ngModel)]=\"userData.password\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <input type=\"password\" placeholder=\"Password Confirmation\" name=\"passwordConfirmation\" (keyup.enter)=\"signup()\" [(ngModel)]=\"passwordConfirmation\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <button type=\"button\" class=\"btn btn-primary sign-in-btn\" (click)=\"signup()\">SIGN UP</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <hr id=\"sign-in-hr\"/>\r\n            </div>\r\n            <div id=\"sign-in-or\">OR</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <button type=\"button\" class=\"btn sign-in-btn\" id=\"google-sign-in-btn\">\r\n                    <i class=\"fa fa-google-plus-official\" id=\"google-plus-icon\" aria-hidden=\"true\"></i>\r\n                    SIGN UP WITH GOOGLE\r\n                    </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\" login-inputs\">\r\n                <span>\r\n                    Have an account?\r\n                </span>\r\n                <br>\r\n                <a [routerLink]=\"['/login']\">SIGN IN</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/pages/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loading_service__ = __webpack_require__("../../../../../src/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = (function () {
    function SignUpComponent(auth, loadingService, router) {
        this.auth = auth;
        this.loadingService = loadingService;
        this.router = router;
        this.userData = {
            first_name: "",
            last_name: "",
            role: "",
            company: "",
            phone: "",
            email: "",
            password: ""
        };
        this.passwordConfirmation = '';
    }
    SignUpComponent.prototype.ngOnInit = function () {
        console.log("welcome to login page");
    };
    SignUpComponent.prototype.signup = function () {
        var _this = this;
        this.loadingService.loading = true;
        if (this.userData.password == this.passwordConfirmation) {
            this.auth.register(this.userData).subscribe(function (data) {
                console.log(data);
                _this.loadingService.loading = false;
                _this.router.navigateByUrl("/login");
            }, function (error) {
                console.log(error.json());
                _this.loadingService.loading = false;
            });
        }
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'signup',
        template: __webpack_require__("../../../../../src/pages/signup/signup.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_loading_service__["a" /* LoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_loading_service__["a" /* LoadingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SignUpComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/pages/subscription/subscription.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"first_row\">\r\n    <div class=\"first_col\">\r\n        Your Subscription is\r\n        <div class=\"dark_blue\">\r\n            30-Day Free Trial \r\n        </div>\r\n        <a class=\"light_blue clickable\" id=\"comare_plans\">\r\n            Compare Plans\r\n        </a>\r\n    </div>\r\n    <div class=\"second_col\">\r\n        <div>Status Active</div>\r\n        <div>Expires Jul 11th,2017 </div>\r\n    </div>\r\n    <div class=\"third_col\">\r\n        <button class=\"btn btn-primary\">\r\n            Request Subscription\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"other_rows\">\r\n    <div class=\"first_col\">\r\n        <div>Active integration Flows:</div>\r\n        <div>NA</div>\r\n    </div>\r\n    <div class=\"second_col\">\r\n        <div>Customer Success Plan:</div>\r\n        <div>Essential</div>\r\n    </div>\r\n    <div class=\"third_col\">\r\n        \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/pages/subscription/subscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscriptionComponent = (function () {
    function SubscriptionComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SubscriptionComponent.prototype.ngOnInit = function () {
        console.log("SubscriptionComponent");
    };
    return SubscriptionComponent;
}());
SubscriptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'subscription',
        template: __webpack_require__("../../../../../src/pages/subscription/subscription.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SubscriptionComponent);

var _a, _b;
//# sourceMappingURL=subscription.component.js.map

/***/ }),

/***/ "../../../../../src/pages/workflow-detail/workflow-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"workflow\">\r\n    <a [routerLink]=\"['/dashboard']\" class=\"action-link\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Dashboard</a>\r\n\r\n    <h1 class=\"detail-title\">{{workflow.name}}</h1>\r\n\r\n    <div class=\"detail-status\">\r\n        <label class=\"toggle\">\r\n            <input type=\"checkbox\" *ngIf=\"workflow.active\" checked (change)=\"toggle(workflow); $event.stopPropagation()\">\r\n            <input type=\"checkbox\" *ngIf=\"!workflow.active\" (change)=\"toggle(workflow); $event.stopPropagation()\">\r\n            <div class=\"toggle-slider\"></div>\r\n            <div class=\"toggle-on\">On</div>\r\n            <div class=\"toggle-off\">Off</div>\r\n        </label>\r\n    </div>\r\n\r\n    <h2>Settings</h2>\r\n    <dl class=\"form-review\">\r\n        <dt>Type</dt>\r\n        <dd>{{ workflow.syncType }}</dd><br/>\r\n\r\n        <dt>Sheet ID</dt>\r\n        <dd>{{ workflow.sheetId }}</dd><br/>\r\n\r\n        <dt>JIRA ID</dt>\r\n        <dd>{{ workflow.jiraId }}</dd><br/>\r\n    </dl>\r\n\r\n    <h2>Fields</h2>\r\n    <dl class=\"form-review\">\r\n        <dt>Task ID</dt>\r\n        <dd>{{ workflow.taskId }}</dd><br/>\r\n\r\n        <dt>Error Field</dt>\r\n        <dd>{{ workflow.errorField }}</dd><br/>\r\n    </dl>\r\n\r\n    <div class=\"form-navigation\">\r\n        <a [routerLink]=\"['/edit', workflow.id]\" class=\"btn btn-outline\">Edit</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/pages/workflow-detail/workflow-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_workflow__ = __webpack_require__("../../../../../src/models/workflow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_workflow_service__ = __webpack_require__("../../../../../src/services/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkflowDetailComponent = (function () {
    function WorkflowDetailComponent(workflowService, route, location) {
        this.workflowService = workflowService;
        this.route = route;
        this.location = location;
        this.syncTypes = ['Two-way sync', 'JIRA to Smartsheet', 'Smartsheet to JIRA'];
        this.step = 1;
    }
    ;
    WorkflowDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.workflowService.getWorkflow(+params['id']); })
            .subscribe(function (workflow) { return _this.workflow = workflow; });
    };
    WorkflowDetailComponent.prototype.goTo = function (step) {
        this.step = step;
    };
    WorkflowDetailComponent.prototype.goBack = function () {
        if (this.step > 1)
            this.step--;
        else
            this.location.back();
    };
    WorkflowDetailComponent.prototype.next = function () {
        this.step++;
    };
    WorkflowDetailComponent.prototype.save = function () {
        this.workflowService.update(this.workflow);
    };
    WorkflowDetailComponent.prototype.toggle = function (workflow) {
        workflow.active = !workflow.active;
        this.save();
    };
    WorkflowDetailComponent.prototype.onSubmit = function () { this.step++; };
    return WorkflowDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_workflow__["a" /* Workflow */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_workflow__["a" /* Workflow */]) === "function" && _a || Object)
], WorkflowDetailComponent.prototype, "workflow", void 0);
WorkflowDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'workflow-detail',
        template: __webpack_require__("../../../../../src/pages/workflow-detail/workflow-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_workflow_service__["a" /* WorkflowService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object])
], WorkflowDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=workflow-detail.component.js.map

/***/ }),

/***/ "../../../../../src/pages/workflow-edit/workflow-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"workflow\">\r\n    <div id=\"steps-container\">\r\n        <nav id=\"steps\">\r\n            <div class=\"step-line\"></div>\r\n            <button type=\"button\" class=\"step\" (click)=\"goTo(1)\" [ngClass]=\"{selected: step === 1}\">\r\n                <i class=\"fa fa-sliders step-button\" aria-hidden=\"true\"></i>\r\n                <span class=\"step-title\">Settings</span>\r\n            </button>\r\n            <button type=\"button\" class=\"step\" (click)=\"goTo(2)\" [ngClass]=\"{selected: step === 2}\">\r\n                <i class=\"tab-icon fa fa-arrows-h step-button\" aria-hidden=\"true\"></i>\r\n                <span class=\"step-title\">Fields</span>\r\n            </button>\r\n            <button type=\"button\" class=\"step\" (click)=\"goTo(3)\" [ngClass]=\"{'selected': step === 3}\">\r\n                <i class=\"fa fa-check step-button\" aria-hidden=\"true\"></i>\r\n                <span class=\"step-title\">Save</span>\r\n            </button>\r\n        </nav>\r\n    </div>\r\n\r\n    <form (ngSubmit)=\"onSubmit()\" #workflowForm=\"ngForm\">\r\n        <!-- Settings -->\r\n        <div [hidden]=\"step !== 1\">\r\n            <p class=\"form-instruction\">Choose a Smartsheet Sheet and a JIRA project to connect.</p>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\" for=\"syncType\">Sync Type</label>\r\n                <div class=\"col-md-6 no-padding\" >\r\n                    <div class=\"select-wrapper\">\r\n                        <select class=\"form-control\" id=\"syncType\" [(ngModel)]=\"workflow.syncType\" name=\"syncType\" required>\r\n                            <option *ngFor=\"let type of syncTypes\" [value]=\"type\">{{type}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\" for=\"sheetName\">Sheet Name</label>\r\n                <div class=\"col-md-6 no-padding\">\r\n                    <div class=\"select-wrapper\">\r\n                        <select class=\"form-control\" id=\"sheetName\" [(ngModel)]=\"workflow.sheetId\" name=\"sheetId\" required>\r\n                            <option [value]=\"1\">SmartSheet 1</option>\r\n                            <option [value]=\"2\">SmartSheet 2</option>\r\n                            <option [value]=\"3\">SmartSheet 3</option>\r\n                        </select>\r\n                    </div>\r\n                    <a href=\"#\" class=\"form-link\">Create a new sheet</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\" for=\"jiraProject\">JIRA Project</label>\r\n                <div class=\"col-md-6 no-padding\">\r\n                    <div class=\"select-wrapper\">\r\n                        <select class=\"form-control\" id=\"jiraProject\" [(ngModel)]=\"workflow.jiraId\" name=\"jiraId\" required>\r\n                            <option [value]=\"1\">JIRA 1</option>\r\n                            <option [value]=\"2\">JIRA 2</option>\r\n                            <option [value]=\"3\">JIRA 3</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Step 2 -->\r\n        <div [hidden]=\"step !== 2\">\r\n            <p class=\"form-instruction\">Map JIRA fields to sheet columns.</p>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\" for=\"fieldId\">Task ID</label>\r\n                <div class=\"col-md-6 no-padding\">\r\n                    <div class=\"select-wrapper\">\r\n                        <select id=\"jiraProject\" [(ngModel)]=\"workflow.taskId\" name=\"taskId\" required>\r\n                            <option [value]=\"11111\">11111</option>\r\n                            <option [value]=\"22222\">22222</option>\r\n                            <option [value]=\"33333\">33333</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\" for=\"fieldId\">Error Field</label>\r\n                <div class=\"col-md-6 no-padding\">\r\n                    <div class=\"select-wrapper\">\r\n                        <select id=\"jiraProject\" [(ngModel)]=\"workflow.errorField\" name=\"errorField\" required>\r\n                            <option [value]=\"11111\">11111</option>\r\n                            <option [value]=\"22222\">22222</option>\r\n                            <option [value]=\"33333\">33333</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\" for=\"fieldId\">Title</label>\r\n                <div class=\"col-md-6 no-padding\">\r\n                    <div class=\"select-wrapper\">\r\n                        <select id=\"jiraProject\" [(ngModel)]=\"workflow.title\" name=\"taskTitle\" required>\r\n                            <option [value]=\"11111\">11111</option>\r\n                            <option [value]=\"22222\">22222</option>\r\n                            <option [value]=\"33333\">33333</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\" for=\"fieldId\">Start Date</label>\r\n                <div class=\"col-md-6 no-padding\">\r\n                    <div class=\"select-wrapper\">\r\n                        <select id=\"jiraProject\" [(ngModel)]=\"workflow.startDate\" name=\"startDate\" required>\r\n                            <option [value]=\"11111\">11111</option>\r\n                            <option [value]=\"22222\">22222</option>\r\n                            <option [value]=\"33333\">33333</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\" for=\"fieldId\">End Date</label>\r\n                <div class=\"col-md-6 no-padding\">\r\n                    <div class=\"select-wrapper\">\r\n                        <select id=\"jiraProject\" [(ngModel)]=\"workflow.endDate\" name=\"endDate\" required>\r\n                            <option [value]=\"11111\">11111</option>\r\n                            <option [value]=\"22222\">22222</option>\r\n                            <option [value]=\"33333\">33333</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Step 3 -->\r\n        <div [hidden]=\"step !== 3\">\r\n            <p class=\"form-instruction\">Save</p>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\" for=\"jiraProject\">Workflow Name</label>\r\n                <div class=\"col-md-6 no-padding\">\r\n                    <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"workflow.name\" required>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-navigation\">\r\n            <button *ngIf=\"step != 1\" (click)=\"goBack()\" class=\"btn btn-outline\" type=\"button\">Back</button>\r\n            <button *ngIf=\"step != 3\" (click)=\"next()\" class=\"btn btn-action\" type=\"button\">Next</button>\r\n            <button *ngIf=\"workflow.active && step == 3\" (click)=\"save()\" class=\"btn\" type=\"button\">Save as draft</button>\r\n            <button *ngIf=\"step == 3\" (click)=\"launch()\" class=\"btn btn-action\" type=\"button\">{{ workflow.active ? 'Save' : 'Save and launch' }}</button>\r\n        </div>\r\n    </form>\r\n    <br />\r\n    <div class=\"align-center\">\r\n        <a [routerLink]=\"['/dashboard']\" class=\"action-link\">Cancel</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/pages/workflow-edit/workflow-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_workflow__ = __webpack_require__("../../../../../src/models/workflow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_workflow_service__ = __webpack_require__("../../../../../src/services/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorkflowEditComponent = (function () {
    function WorkflowEditComponent(workflowService, route, location, router) {
        this.workflowService = workflowService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.syncTypes = ['Two-way sync', 'JIRA to Smartsheet', 'Smartsheet to JIRA'];
        this.step = 1;
    }
    ;
    WorkflowEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.workflowService.getWorkflow(+params['id']); })
            .subscribe(function (workflow) { return _this.workflow = workflow; });
    };
    WorkflowEditComponent.prototype.goTo = function (step) {
        this.step = step;
    };
    WorkflowEditComponent.prototype.goBack = function () {
        if (this.step > 1)
            this.step--;
        else
            this.location.back();
    };
    WorkflowEditComponent.prototype.next = function () {
        this.step++;
    };
    WorkflowEditComponent.prototype.launch = function () {
        this.workflow.active = true;
        this.save();
    };
    WorkflowEditComponent.prototype.save = function () {
        this.workflowService.update(this.workflow);
        this.router.navigate(['/detail', this.workflow.id]);
    };
    WorkflowEditComponent.prototype.toggle = function (workflow) {
        workflow.active = !workflow.active;
        this.save();
    };
    WorkflowEditComponent.prototype.onSubmit = function () { this.step++; };
    return WorkflowEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_workflow__["a" /* Workflow */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_workflow__["a" /* Workflow */]) === "function" && _a || Object)
], WorkflowEditComponent.prototype, "workflow", void 0);
WorkflowEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'workflow-edit',
        template: __webpack_require__("../../../../../src/pages/workflow-edit/workflow-edit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_workflow_service__["a" /* WorkflowService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], WorkflowEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=workflow-edit.component.js.map

/***/ }),

/***/ "../../../../../src/pages/workflows/workflows.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>My Workflows</h1>\r\n<ul class=\"workflows\">\r\n    <li *ngFor=\"let workflow of workflows\" (click)=\"onSelect(workflow)\" [class.selected]=\"workflow === selectedHero\">\r\n        <span class=\"badge\">{{workflow.id}}</span>\r\n        <span>{{workflow.name}}</span>\r\n        <button class=\"delete\" (click)=\"delete(workflow); $event.stopPropagation()\">x</button>\r\n    </li>\r\n</ul>\r\n<div>\r\n    <label>Hero name:</label> <input #workflowName />\r\n    <button (click)=\"add(workflowName.value); workflowName.value=''\">Add</button>\r\n</div>\r\n<div *ngIf=\"selectedHero\">\r\n    <h2>{{selectedHero.name | uppercase}} is my workflow</h2>\r\n    <button (click)=\"goToDetail()\">View Details</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/pages/workflows/workflows.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_workflow_service__ = __webpack_require__("../../../../../src/services/workflow.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkflowsComponent = (function () {
    function WorkflowsComponent(router, workflowService) {
        this.router = router;
        this.workflowService = workflowService;
    }
    WorkflowsComponent.prototype.getWorkflows = function () {
        var _this = this;
        this.workflowService.getWorkflows().then(function (workflows) { return _this.workflows = workflows; });
    };
    WorkflowsComponent.prototype.ngOnInit = function () {
        this.getWorkflows();
    };
    WorkflowsComponent.prototype.onSelect = function (workflow) {
        this.selectedWorkflow = workflow;
    };
    WorkflowsComponent.prototype.goToDetail = function () {
        this.router.navigate(['/detail', this.selectedWorkflow.id]);
    };
    WorkflowsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.workflowService.create()
            .then(function (workflow) {
            _this.workflows.push(workflow);
            _this.selectedWorkflow = null;
        });
    };
    WorkflowsComponent.prototype.delete = function (workflow) {
        var _this = this;
        this.workflowService
            .delete(workflow.id)
            .then(function () {
            _this.workflows = _this.workflows.filter(function (h) { return h !== workflow; });
            if (_this.selectedWorkflow === workflow) {
                _this.selectedWorkflow = null;
            }
        });
    };
    return WorkflowsComponent;
}());
WorkflowsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-workflows',
        template: __webpack_require__("../../../../../src/pages/workflows/workflows.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_workflow_service__["a" /* WorkflowService */]) === "function" && _b || Object])
], WorkflowsComponent);

var _a, _b;
//# sourceMappingURL=workflows.component.js.map

/***/ }),

/***/ "../../../../../src/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__refresher_service__ = __webpack_require__("../../../../../src/services/refresher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authToken_service__ = __webpack_require__("../../../../../src/services/authToken.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import {  Angular2TokenService } from "angular2-token";

var AuthService = (function () {
    function AuthService(http, _tokenService, router, refresher) {
        this.http = http;
        this._tokenService = _tokenService;
        this.router = router;
        this.refresher = refresher;
        this.baseUrl = "http://smartconnector.herokuapp.com";
        this.logged = false;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json'
            // 'Access-Control-Allow-Origin':'127.0.0.1:4200',
            // 'Access-Control-Allow-Methods':'POST',
            // 'Access-Control-Allow-Headers':'Content-Type, Authorization'
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["i" /* RequestOptions */]({ headers: headers });
        this._tokenService.init({
            apiBase: this.baseUrl,
            apiPath: "api/v1",
            signInPath: "authentication",
            signOutPath: 'sign_out',
            signInRedirect: '/restricted',
            registerAccountPath: 'signup',
            globalOptions: {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "cache-control": "no-cache"
                }
            }
        });
        // this._tokenService.init({});
    }
    AuthService.prototype.printCurrentUser = function () {
        console.log(this._tokenService);
    };
    AuthService.prototype.getCurrentUserData = function () {
        var user = {};
        if (this._tokenService.userSignedIn()) {
            user.currentAuthData = this._tokenService.currentAuthData;
            user.currentUserData = this._tokenService.currentUserData;
            user.currentUserType = this._tokenService.currentUserType;
            return user;
        }
        else {
            return user;
        }
    };
    AuthService.prototype.GetStatus = function () {
        var userData = localStorage.getItem('userData');
        if (userData != null) {
            if (userData.length > 0) {
                // this.LoginStatusSet(true);
                return true;
            }
            else {
                // this.LoginStatusSet(false);
                return false;
            }
        }
        else {
            // this.LoginStatusSet(false);
            return false;
        }
    };
    AuthService.prototype.LoginStatusSet = function (bool) {
        this.logged = bool;
    };
    AuthService.prototype.login = function (data) {
        return this._tokenService.signIn(data);
    };
    AuthService.prototype.register = function (registerData) {
        return this._tokenService.registerAccount(registerData);
    };
    AuthService.prototype.logout = function () {
        // let h =JSON.parse(localStorage.getItem("headers"));
        // let headers = new Headers({ 'uid': h.uid},);
        // localStorage.removeItem('access-token');
        // localStorage.removeItem('uid');
        // localStorage.removeItem('client');
        return this._tokenService.signOut();
    };
    AuthService.prototype.getUserToken = function () {
        var data = localStorage.getItem("userData");
        var token = JSON.parse(data).id_token;
        // console.log(JSON.parse(data));
        // console.log(token);
        return token;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__authToken_service__["a" /* Angular2TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__authToken_service__["a" /* Angular2TokenService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__refresher_service__["a" /* Refresher */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__refresher_service__["a" /* Refresher */]) === "function" && _d || Object])
], AuthService);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/services/authToken.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2TokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var Angular2TokenService = (function () {
    function Angular2TokenService(http, activatedRoute, router) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    Object.defineProperty(Angular2TokenService.prototype, "currentUserType", {
        get: function () {
            if (this.atCurrentUserType != null)
                return this.atCurrentUserType.name;
            else
                return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Angular2TokenService.prototype, "currentUserData", {
        get: function () {
            return this.atCurrentUserData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Angular2TokenService.prototype, "currentAuthData", {
        get: function () {
            return this.atCurrentAuthData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Angular2TokenService.prototype, "currentAuthHeaders", {
        get: function () {
            if (this.atCurrentAuthData != null) {
                return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({
                    'access-token': this.atCurrentAuthData.accessToken,
                    'client': this.atCurrentAuthData.client,
                    'expiry': this.atCurrentAuthData.expiry,
                    'token-type': this.atCurrentAuthData.tokenType,
                    'uid': this.atCurrentAuthData.uid
                });
            }
            return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */];
        },
        enumerable: true,
        configurable: true
    });
    Angular2TokenService.prototype.userSignedIn = function () {
        return !!this.atCurrentAuthData;
    };
    Angular2TokenService.prototype.canActivate = function () {
        if (this.userSignedIn())
            return true;
        else {
            // Store current location in storage (usefull for redirection after signing in)
            if (this.atOptions.signInStoredUrlStorageKey) {
                localStorage.setItem(this.atOptions.signInStoredUrlStorageKey, window.location.pathname + window.location.search);
            }
            // Redirect user to sign in if signInRedirect is set
            if (this.router && this.atOptions.signInRedirect)
                this.router.navigate([this.atOptions.signInRedirect]);
            return false;
        }
    };
    // Inital configuration
    Angular2TokenService.prototype.init = function (options) {
        var defaultOptions = {
            apiPath: null,
            apiBase: null,
            signInPath: 'auth/sign_in',
            signInRedirect: null,
            signInStoredUrlStorageKey: null,
            signOutPath: 'auth/sign_out',
            validateTokenPath: 'auth/validate_token',
            signOutFailedValidate: false,
            registerAccountPath: 'auth',
            deleteAccountPath: 'auth',
            registerAccountCallback: window.location.href,
            updatePasswordPath: 'auth',
            resetPasswordPath: 'auth/password',
            resetPasswordCallback: window.location.href,
            userTypes: null,
            oAuthBase: window.location.origin,
            oAuthPaths: {
                github: 'auth/github'
            },
            oAuthCallbackPath: 'oauth_callback',
            oAuthWindowType: 'newWindow',
            oAuthWindowOptions: null,
            globalOptions: {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        };
        this.atOptions = Object.assign(defaultOptions, options);
        this.tryLoadAuthData();
    };
    /**
     *
     * Actions
     *
     */
    // Register request
    Angular2TokenService.prototype.registerAccount = function (registerData) {
        if (registerData.userType == null)
            this.atCurrentUserType = null;
        else {
            this.atCurrentUserType = this.getUserTypeByName(registerData.userType);
            delete registerData.userType;
        }
        // registerData.password_confirmation  = registerData.passwordConfirmation;
        delete registerData.passwordConfirmation;
        // registerData.confirm_success_url    = this.atOptions.registerAccountCallback;
        return this.post(this.getUserPath() + this.atOptions.registerAccountPath, JSON.stringify(registerData));
    };
    // Delete Account
    Angular2TokenService.prototype.deleteAccount = function () {
        return this.delete(this.getUserPath() + this.atOptions.deleteAccountPath);
    };
    // Sign in request and set storage
    Angular2TokenService.prototype.signIn = function (signInData) {
        var _this = this;
        if (signInData.userType == null)
            this.atCurrentUserType = null;
        else
            this.atCurrentUserType = this.getUserTypeByName(signInData.userType);
        var body = JSON.stringify({
            email: signInData.email,
            password: signInData.password
        });
        var observ = this.post(this.getUserPath() + this.atOptions.signInPath, body);
        observ.subscribe(function (res) { return _this.atCurrentUserData = res.json().data; }, function (_error) { return null; });
        return observ;
    };
    Angular2TokenService.prototype.signInOAuth = function (oAuthType) {
        var oAuthPath = this.getOAuthPath(oAuthType);
        var callbackUrl = window.location.origin + "/" + this.atOptions.oAuthCallbackPath;
        var oAuthWindowType = this.atOptions.oAuthWindowType;
        var authUrl = this.getOAuthUrl(oAuthPath, callbackUrl, oAuthWindowType);
        if (oAuthWindowType == 'newWindow') {
            var oAuthWindowOptions = this.atOptions.oAuthWindowOptions;
            var windowOptions = '';
            if (oAuthWindowOptions) {
                for (var key in oAuthWindowOptions) {
                    windowOptions += "," + key + "=" + oAuthWindowOptions[key];
                }
            }
            var popup = window.open(authUrl, '_blank', "closebuttoncaption=Cancel" + windowOptions);
            return this.requestCredentialsViaPostMessage(popup);
        }
        else if (oAuthWindowType == 'sameWindow') {
            window.location.href = authUrl;
        }
        else {
            throw "Unsupported oAuthWindowType \"" + oAuthWindowType + "\"";
        }
    };
    Angular2TokenService.prototype.processOAuthCallback = function () {
        this.getAuthDataFromParams();
    };
    // Sign out request and delete storage
    Angular2TokenService.prototype.signOut = function () {
        var observ = this.delete(this.getUserPath() + this.atOptions.signOutPath);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('client');
        localStorage.removeItem('expiry');
        localStorage.removeItem('tokenType');
        localStorage.removeItem('uid');
        this.atCurrentAuthData = null;
        this.atCurrentUserType = null;
        this.atCurrentUserData = null;
        return observ;
    };
    // Validate token request
    Angular2TokenService.prototype.validateToken = function () {
        var _this = this;
        var observ = this.get(this.getUserPath() + this.atOptions.validateTokenPath);
        observ.subscribe(function (res) { return _this.atCurrentUserData = res.json().data; }, function (error) {
            if (error.status === 401 && _this.atOptions.signOutFailedValidate) {
                _this.signOut();
            }
        });
        return observ;
    };
    // Update password request
    Angular2TokenService.prototype.updatePassword = function (updatePasswordData) {
        if (updatePasswordData.userType != null)
            this.atCurrentUserType = this.getUserTypeByName(updatePasswordData.userType);
        var args;
        if (updatePasswordData.passwordCurrent == null) {
            args = {
                password: updatePasswordData.password,
                password_confirmation: updatePasswordData.passwordConfirmation
            };
        }
        else {
            args = {
                current_password: updatePasswordData.passwordCurrent,
                password: updatePasswordData.password,
                password_confirmation: updatePasswordData.passwordConfirmation
            };
        }
        if (updatePasswordData.resetPasswordToken) {
            args.reset_password_token = updatePasswordData.resetPasswordToken;
        }
        var body = JSON.stringify(args);
        return this.put(this.getUserPath() + this.atOptions.updatePasswordPath, body);
    };
    // Reset password request
    Angular2TokenService.prototype.resetPassword = function (resetPasswordData) {
        if (resetPasswordData.userType == null)
            this.atCurrentUserType = null;
        else
            this.atCurrentUserType = this.getUserTypeByName(resetPasswordData.userType);
        var body = JSON.stringify({
            email: resetPasswordData.email,
            redirect_url: this.atOptions.resetPasswordCallback
        });
        return this.post(this.getUserPath() + this.atOptions.resetPasswordPath, body);
    };
    /**
     *
     * HTTP Wrappers
     *
     */
    Angular2TokenService.prototype.get = function (url, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* RequestMethod */].Get
        }, options));
    };
    Angular2TokenService.prototype.post = function (url, body, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* RequestMethod */].Post,
            body: body
        }, options));
    };
    Angular2TokenService.prototype.put = function (url, body, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* RequestMethod */].Put,
            body: body
        }, options));
    };
    Angular2TokenService.prototype.delete = function (url, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* RequestMethod */].Delete
        }, options));
    };
    Angular2TokenService.prototype.patch = function (url, body, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* RequestMethod */].Patch,
            body: body
        }, options));
    };
    Angular2TokenService.prototype.head = function (path, options) {
        return this.request({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* RequestMethod */].Head,
            url: this.getApiPath() + path
        });
    };
    Angular2TokenService.prototype.options = function (url, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* RequestMethod */].Options
        }, options));
    };
    // Construct and send Http request
    Angular2TokenService.prototype.request = function (options) {
        var baseRequestOptions;
        var baseHeaders = this.atOptions.globalOptions.headers;
        // Merge auth headers to request if set
        if (this.atCurrentAuthData != null) {
            Object.assign(baseHeaders, {
                'access-token': this.atCurrentAuthData.accessToken,
                'client': this.atCurrentAuthData.client,
                'expiry': this.atCurrentAuthData.expiry,
                'token-type': this.atCurrentAuthData.tokenType,
                'uid': this.atCurrentAuthData.uid
            });
        }
        baseRequestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["i" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */](baseHeaders)
        });
        // Merge standard and custom RequestOptions
        baseRequestOptions = baseRequestOptions.merge(options);
        var response = this.http.request(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* Request */](baseRequestOptions)).share();
        this.handleResponse(response);
        return response;
    };
    Angular2TokenService.prototype.mergeRequestOptionsArgs = function (options, addOptions) {
        var returnOptions = options;
        if (options)
            Object.assign(returnOptions, addOptions);
        return returnOptions;
    };
    // Check if response is complete and newer, then update storage
    Angular2TokenService.prototype.handleResponse = function (response) {
        var _this = this;
        response.subscribe(function (res) {
            _this.getAuthHeadersFromResponse(res);
        }, function (error) {
            _this.getAuthHeadersFromResponse(error);
        });
    };
    /**
     *
     * Get Auth Data
     *
     */
    // Try to load auth data
    Angular2TokenService.prototype.tryLoadAuthData = function () {
        var userType = this.getUserTypeByName(localStorage.getItem('userType'));
        if (userType)
            this.atCurrentUserType = userType;
        this.getAuthDataFromStorage();
        if (this.activatedRoute)
            this.getAuthDataFromParams();
        if (this.atCurrentAuthData)
            this.validateToken();
    };
    // Parse Auth data from response
    Angular2TokenService.prototype.getAuthHeadersFromResponse = function (data) {
        var headers = data.headers;
        var authData = {
            accessToken: headers.get('access-token'),
            client: headers.get('client'),
            expiry: headers.get('expiry'),
            tokenType: headers.get('token-type'),
            uid: headers.get('uid')
        };
        this.setAuthData(authData);
    };
    // Parse Auth data from post message
    Angular2TokenService.prototype.getAuthDataFromPostMessage = function (data) {
        var authData = {
            accessToken: data['auth_token'],
            client: data['client_id'],
            expiry: data['expiry'],
            tokenType: 'Bearer',
            uid: data['uid']
        };
        this.setAuthData(authData);
    };
    // Try to get auth data from storage.
    Angular2TokenService.prototype.getAuthDataFromStorage = function () {
        var authData = {
            accessToken: localStorage.getItem('accessToken'),
            client: localStorage.getItem('client'),
            expiry: localStorage.getItem('expiry'),
            tokenType: localStorage.getItem('tokenType'),
            uid: localStorage.getItem('uid')
        };
        if (this.checkAuthData(authData))
            this.atCurrentAuthData = authData;
    };
    // Try to get auth data from url parameters.
    Angular2TokenService.prototype.getAuthDataFromParams = function () {
        var _this = this;
        if (this.activatedRoute.queryParams)
            this.activatedRoute.queryParams.subscribe(function (queryParams) {
                var authData = {
                    accessToken: queryParams['token'] || queryParams['auth_token'],
                    client: queryParams['client_id'],
                    expiry: queryParams['expiry'],
                    tokenType: 'Bearer',
                    uid: queryParams['uid']
                };
                if (_this.checkAuthData(authData))
                    _this.atCurrentAuthData = authData;
            });
    };
    /**
     *
     * Set Auth Data
     *
     */
    // Write auth data to storage
    Angular2TokenService.prototype.setAuthData = function (authData) {
        if (this.checkAuthData(authData)) {
            this.atCurrentAuthData = authData;
            localStorage.setItem('accessToken', authData.accessToken);
            localStorage.setItem('client', authData.client);
            localStorage.setItem('expiry', authData.expiry);
            localStorage.setItem('tokenType', authData.tokenType);
            localStorage.setItem('uid', authData.uid);
            if (this.atCurrentUserType != null)
                localStorage.setItem('userType', this.atCurrentUserType.name);
        }
    };
    /**
     *
     * Validate Auth Data
     *
     */
    // Check if auth data complete and if response token is newer
    Angular2TokenService.prototype.checkAuthData = function (authData) {
        if (authData.accessToken != null &&
            authData.client != null &&
            authData.expiry != null &&
            authData.tokenType != null &&
            authData.uid != null) {
            if (this.atCurrentAuthData != null)
                return authData.expiry >= this.atCurrentAuthData.expiry;
            else
                return true;
        }
        else {
            return false;
        }
    };
    /**
     *
     * Construct Paths / Urls
     *
     */
    Angular2TokenService.prototype.getUserPath = function () {
        if (this.atCurrentUserType == null)
            return '';
        else
            return this.atCurrentUserType.path + '/';
    };
    Angular2TokenService.prototype.getApiPath = function () {
        var constructedPath = '';
        if (this.atOptions.apiBase != null)
            constructedPath += this.atOptions.apiBase + '/';
        if (this.atOptions.apiPath != null)
            constructedPath += this.atOptions.apiPath + '/';
        return constructedPath;
    };
    Angular2TokenService.prototype.getOAuthPath = function (oAuthType) {
        var oAuthPath;
        oAuthPath = this.atOptions.oAuthPaths[oAuthType];
        if (oAuthPath == null)
            oAuthPath = "/auth/" + oAuthType;
        return oAuthPath;
    };
    Angular2TokenService.prototype.getOAuthUrl = function (oAuthPath, callbackUrl, windowType) {
        var url;
        url = this.atOptions.oAuthBase + "/" + oAuthPath;
        url += "?omniauth_window_type=" + windowType;
        url += "&auth_origin_url=" + encodeURIComponent(callbackUrl);
        if (this.atCurrentUserType != null)
            url += "&resource_class=" + this.atCurrentUserType.name;
        return url;
    };
    /**
     *
     * OAuth
     *
     */
    Angular2TokenService.prototype.requestCredentialsViaPostMessage = function (authWindow) {
        var pollerObserv = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(500);
        var responseObserv = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromEvent(window, 'message').pluck('data')
            .filter(this.oAuthWindowResponseFilter);
        var responseSubscription = responseObserv.subscribe(this.getAuthDataFromPostMessage.bind(this));
        var pollerSubscription = pollerObserv.subscribe(function () {
            if (authWindow.closed)
                pollerSubscription.unsubscribe();
            else
                authWindow.postMessage('requestCredentials', '*');
        });
        return responseObserv;
    };
    Angular2TokenService.prototype.oAuthWindowResponseFilter = function (data) {
        if (data.message == 'deliverCredentials' || data.message == 'authFailure')
            return data;
    };
    /**
     *
     * Utilities
     *
     */
    // Match user config by user config name
    Angular2TokenService.prototype.getUserTypeByName = function (name) {
        if (name == null || this.atOptions.userTypes == null)
            return null;
        return this.atOptions.userTypes.find(function (userType) { return userType.name === name; });
    };
    return Angular2TokenService;
}());
Angular2TokenService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], Angular2TokenService);

var _a, _b, _c;
//# sourceMappingURL=authToken.service.js.map

/***/ }),

/***/ "../../../../../src/services/canActive.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateViaAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanActivateViaAuthGuard = (function () {
    function CanActivateViaAuthGuard(authService) {
        this.authService = authService;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function () {
        return this.authService.GetStatus();
    };
    return CanActivateViaAuthGuard;
}());
CanActivateViaAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], CanActivateViaAuthGuard);

var _a;
//# sourceMappingURL=canActive.service.js.map

/***/ }),

/***/ "../../../../../src/services/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var workflows = [
            {
                id: 1,
                name: 'Two Way Sync Project',
                syncType: 'Two-way sync',
                active: true,
                lastSync: 1497050536,
                interval: '5 mins'
            },
            {
                id: 2,
                name: 'Jira to Smartsheet Project',
                syncType: 'JIRA to Smartsheet',
                active: true,
                lastSync: 1497050536,
                interval: 'manual'
            },
            {
                id: 3,
                name: 'Smartsheet to Jira Project',
                syncType: 'Smartsheet to JIRA',
                active: false
            }
        ];
        return { workflows: workflows };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ "../../../../../src/services/loading.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoadingService = (function () {
    function LoadingService() {
        this.loading = false;
    }
    return LoadingService;
}());
LoadingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], LoadingService);

//# sourceMappingURL=loading.service.js.map

/***/ }),

/***/ "../../../../../src/services/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileService = (function () {
    function ProfileService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.baseUrl = "http://smartconnector.herokuapp.com/api/v1";
    }
    ProfileService.prototype.getUserProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ "Authorization": "Bearer " + this.auth.getUserToken() });
        return this.http.get(this.baseUrl + '/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ProfileService);

var _a, _b;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/services/refresher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Refresher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Refresher = (function () {
    function Refresher() {
        this.refresh = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    Refresher.prototype.refreshSubscription = function () {
        this.refresh.next('refresh');
        console.log("refreshed");
    };
    return Refresher;
}());
Refresher = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], Refresher);

//# sourceMappingURL=refresher.service.js.map

/***/ }),

/***/ "../../../../../src/services/workflow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkflowService = (function () {
    function WorkflowService(http) {
        this.http = http;
        this.WorkflowsUrl = 'api/workflows'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    WorkflowService.prototype.getWorkflows = function () {
        return this.http.get(this.WorkflowsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    WorkflowService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    WorkflowService.prototype.getWorkflow = function (id) {
        var url = this.WorkflowsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ;
    WorkflowService.prototype.update = function (workflow) {
        var url = this.WorkflowsUrl + "/" + workflow.id;
        return this.http
            .put(url, JSON.stringify(workflow), { headers: this.headers })
            .toPromise()
            .then(function () { return workflow; })
            .catch(this.handleError);
    };
    WorkflowService.prototype.create = function () {
        return this.http
            .post(this.WorkflowsUrl, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    WorkflowService.prototype.delete = function (id) {
        var url = this.WorkflowsUrl + "/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return WorkflowService;
}());
WorkflowService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], WorkflowService);

var _a;
//# sourceMappingURL=workflow.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map