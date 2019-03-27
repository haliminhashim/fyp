webpackJsonp([10],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAddressPageModule", function() { return CreateAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_address__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateAddressPageModule = /** @class */ (function () {
    function CreateAddressPageModule() {
    }
    CreateAddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_address__["a" /* CreateAddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_address__["a" /* CreateAddressPage */]),
            ],
        })
    ], CreateAddressPageModule);
    return CreateAddressPageModule;
}());

//# sourceMappingURL=create-address.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_addresses_addresses__ = __webpack_require__(206);
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
 * Generated class for the CreateAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateAddressPage = /** @class */ (function () {
    function CreateAddressPage(navCtrl, toastCtrl, viewCtrl, navParams, formBuilder, addressesProvider, usersProvider) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.addressesProvider = addressesProvider;
        this.usersProvider = usersProvider;
        this.submitAttempt = false;
        this.user = this.usersProvider.currentUser();
        this.address = this.formBuilder.group({
            id: undefined,
            userId: this.user.id,
            country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fullName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            streetAddress1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            streetAddress2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            zipCode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            default: 'false'
        });
    }
    CreateAddressPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CreateAddressPage.prototype.save = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.address.valid) {
            this.addressesProvider.create(this.address.value).then(function (data) {
                if (data) {
                    _this.presentToast("Address has been succefully created");
                    _this.closeModal();
                }
                else {
                    _this.presentToast("Unable to create address. Please try again");
                }
            });
        }
        ;
    };
    CreateAddressPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CreateAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-address',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\create-address\create-address.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left (click)="closeModal();">\n      <button ion-button icon-only>\n        <ion-icon name="arrow-back" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>Add an Address</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only>\n        <ion-icon name="" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="address">\n    <ion-item>\n      <ion-label stacked>Full Name</ion-label>\n      <ion-input formControlName="fullName" type="text"></ion-input>\n    </ion-item>\n    <div class="error-message" *ngIf="!address.controls.fullName.valid && submitAttempt">\n      <li>Full Name field is required</li>\n    </div>\n    <ion-item>\n      <ion-label stacked>Street Address 1</ion-label>\n      <ion-input formControlName="streetAddress1" type="text"></ion-input>\n    </ion-item>\n    <div class="error-message" *ngIf="!address.controls.streetAddress1.valid && submitAttempt">\n      <li>Street Address 1 field is required</li>\n    </div>\n    <ion-item>\n      <ion-label stacked>Street Address 2</ion-label>\n      <ion-input formControlName="streetAddress2" type="text"></ion-input>\n    </ion-item>\n    <div class="error-message" *ngIf="!address.controls.streetAddress2.valid && submitAttempt">\n      <li>Street Address 2 field is required</li>\n    </div>\n    <ion-item>\n      <ion-label stacked>City</ion-label>\n      <ion-input formControlName="city" type="text"></ion-input>\n    </ion-item>\n    <div class="error-message" *ngIf="!address.controls.city.valid && submitAttempt">\n      <li>City field is required</li>\n    </div>\n    <ion-item>\n      <ion-label stacked>State</ion-label>\n      <ion-input formControlName="state" type="text"></ion-input>\n    </ion-item>\n    <div class="error-message" *ngIf="!address.controls.state.valid && submitAttempt">\n      <li>State field is required</li>\n    </div>\n    <ion-item>\n      <ion-label stacked>Country</ion-label>\n      <ion-input formControlName="country" type="text"></ion-input>\n    </ion-item>\n    <div class="error-message" *ngIf="!address.controls.country.valid && submitAttempt">\n      <li>Country field is required</li>\n    </div>\n    <ion-item>\n      <ion-label stacked>Zip Code</ion-label>\n      <ion-input formControlName="zipCode" type="text"></ion-input>\n    </ion-item>\n    <div class="error-message" *ngIf="!address.controls.zipCode.valid && submitAttempt">\n      <li>Zip Code field is required</li>\n    </div>\n    <ion-item>\n      <ion-label stacked>Phone Number</ion-label>\n      <ion-input formControlName="phoneNumber" type="text"></ion-input>\n    </ion-item>\n    <div class="error-message" *ngIf="!address.controls.phoneNumber.valid && submitAttempt">\n      <li>Phone Number field is required</li>\n    </div>\n  </form>\n\n  <button ion-button block color="dark" (click)="save();">Add Address</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\create-address\create-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_addresses_addresses__["a" /* AddressesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */]])
    ], CreateAddressPage);
    return CreateAddressPage;
}());

//# sourceMappingURL=create-address.js.map

/***/ })

});
//# sourceMappingURL=10.js.map