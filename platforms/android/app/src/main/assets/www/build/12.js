webpackJsonp([12],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
            ],
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, toastCtrl, navParams, usersProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.usersProvider = usersProvider;
        this.formBuilder = formBuilder;
        this.curpassword = "";
        this.newpassword = "";
        this.conpassword = "";
        this.currentPasswordValid = false;
        this.newPasswordValid = false;
        this.newPasswordNotEmpty = false;
        this.PersonalInfoSubmitAttempt = false;
        this.PasswordSubmitAttempt = false;
        this.user = this.usersProvider.currentUser();
        this.account = this.formBuilder.group({
            id: this.user.id,
            username: this.user.username,
            email: [this.user.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
            firstname: [this.user.firstname, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            lastname: [this.user.lastname, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            gender: [this.user.gender, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            dob: [this.user.dob, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
        });
    }
    AccountPage.prototype.ionViewDidLoad = function () {
    };
    AccountPage.prototype.updatePersonalInformation = function () {
        var _this = this;
        this.PersonalInfoSubmitAttempt = true;
        if (this.account.valid)
            this.usersProvider.update(this.account.value).then(function (data) {
                if (data != {})
                    _this.presentToast("Personal Information has been sucesfully updated");
                else
                    _this.presentToast("Unable to update information. Please try again");
            });
    };
    AccountPage.prototype.updatePassword = function () {
        var _this = this;
        this.PasswordSubmitAttempt = true;
        if (this.curpassword !== this.user.password)
            this.currentPasswordValid = false;
        else
            this.currentPasswordValid = true;
        if (this.newpassword !== this.conpassword)
            this.newPasswordValid = false;
        else
            this.newPasswordValid = true;
        if (this.newpassword == "")
            this.newPasswordNotEmpty = false;
        else
            this.newPasswordNotEmpty = true;
        if (this.currentPasswordValid && this.newPasswordValid && this.newPasswordNotEmpty) {
            var data = {
                "id": this.user.id,
                "password": this.newpassword
            };
            this.usersProvider.update(data).then(function (data) {
                if (data != {}) {
                    _this.curpassword = "";
                    _this.newpassword = "";
                    _this.conpassword = "";
                    _this.presentToast("Password has been sucesfully updated");
                }
                else
                    _this.presentToast("Unable to update information. Please try again");
            });
        }
    };
    AccountPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: "bottom"
        });
        toast.onDidDismiss(function () {
            console.log("Dismissed toast");
        });
        toast.present();
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\account\account.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>Trollee</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row text-center>\n      <ion-col>\n        <h3>Personal Information</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]="account">\n          <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input formControlName="email" type="email"></ion-input>\n          </ion-item>\n          <div class="error-message" *ngIf="!account.controls.email.valid && PersonalInfoSubmitAttempt">\n            Email field is required\n          </div>\n          <ion-item>\n            <ion-label stacked>First Name</ion-label>\n            <ion-input formControlName="firstname" type="text"></ion-input>\n          </ion-item>\n          <div class="error-message" *ngIf="!account.controls.firstname.valid && PersonalInfoSubmitAttempt">\n            First Name field is required\n          </div>\n          <ion-item>\n            <ion-label stacked>Last Name</ion-label>\n            <ion-input formControlName="lastname" type="text"></ion-input>\n          </ion-item>\n          <div class="error-message" *ngIf="!account.controls.lastname.valid && PersonalInfoSubmitAttempt">\n            Last Name field is required\n          </div>\n          <ion-item>\n            <ion-label stacked>Date of Birth</ion-label>\n            <ion-datetime formControlName="dob" displayFormat="DD/MM/YYYY" value=account.dob></ion-datetime>\n          </ion-item>\n          <div class="error-message" *ngIf="!account.controls.dob.valid && PersonalInfoSubmitAttempt">\n            Date of Birth field is required\n          </div>\n          <ion-item>\n            <ion-label stacked>Gender</ion-label>\n            <ion-select formControlName=gender>\n              <ion-option value="Male">Male</ion-option>\n              <ion-option value="Female">Female</ion-option>\n            </ion-select>\n          </ion-item>\n          <div class="error-message" *ngIf="!account.controls.gender.valid && PersonalInfoSubmitAttempt">\n            Gender field is required\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="dark" (click)="updatePersonalInformation()">Save Changes</button>\n      </ion-col>\n    </ion-row>\n    <ion-row text-center padding-top>\n      <ion-col>\n        <h3>Security Information</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Current Password</ion-label>\n          <ion-input [(ngModel)]="curpassword" type="password"></ion-input>\n        </ion-item>\n        <div class="error-message" *ngIf="!currentPasswordValid  && PasswordSubmitAttempt">\n          The Current Password Provided Does Not Match\n        </div>\n        <ion-item>\n          <ion-label stacked>New Password</ion-label>\n          <ion-input [(ngModel)]="newpassword" type="password"></ion-input>\n        </ion-item>\n        <div class="error-message" *ngIf="!newPasswordNotEmpty && PasswordSubmitAttempt">\n          The New Password Provided Can\'t be Empty\n        </div>\n        <ion-item>\n          <ion-label stacked> Confirm Password</ion-label>\n          <ion-input [(ngModel)]="conpassword" type="password"></ion-input>\n        </ion-item>\n        <div class="error-message" *ngIf="!newPasswordValid  && PasswordSubmitAttempt">\n          The New Password Provided Does Not Match\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="dark" (click)="updatePassword()">Update Password</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=12.js.map