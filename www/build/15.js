webpackJsonp([15],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDetailsPageModule", function() { return AddressDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_details__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddressDetailsPageModule = /** @class */ (function () {
    function AddressDetailsPageModule() {
    }
    AddressDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__address_details__["a" /* AddressDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address_details__["a" /* AddressDetailsPage */]),
            ],
        })
    ], AddressDetailsPageModule);
    return AddressDetailsPageModule;
}());

//# sourceMappingURL=address-details.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_addresses_addresses__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddressDetailsPage = /** @class */ (function () {
    function AddressDetailsPage(navCtrl, formBuilder, toastCtrl, navParams, viewCtrl, addressesProviders, usersProvider) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.addressesProviders = addressesProviders;
        this.usersProvider = usersProvider;
        this.submitAttempt = false;
        this.user = this.usersProvider.currentUser();
        this.address = this.formBuilder.group({
            id: undefined,
            userId: this.user.id,
            country: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            fullName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            streetAddress1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            streetAddress2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            zipCode: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            default: 'false'
        });
        this.address = this.navParams.get('data');
    }
    AddressDetailsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddressDetailsPage.prototype.gotoSave = function () {
        var _this = this;
        this.addressesProviders.update(this.address).then(function (res) {
            if (res != {}) {
                _this.presentToast("Address has been sucessfully updated");
                _this.closeModal();
            }
            else {
                _this.presentToast("Unable to update information. Please try again");
            }
        });
    };
    AddressDetailsPage.prototype.presentToast = function (msg) {
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
    AddressDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address-details',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\address-details\address-details.html"*/'<ion-header>\n  <ion-navbar hideBackButton color="primary">\n    <ion-buttons right (click)="closeModal();">\n      <button ion-button icon-only>\n        <ion-icon name="close" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>Edit Address</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only>\n        <ion-icon name="" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Full Name</ion-label>\n          <ion-input [(ngModel)]="address.fullName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Street Address 1</ion-label>\n          <ion-input [(ngModel)]="address.streetAddress1"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Street Address 2</ion-label>\n          <ion-input [(ngModel)]="address.streetAddress2"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>City</ion-label>\n          <ion-input [(ngModel)]="address.city"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>State</ion-label>\n          <ion-input [(ngModel)]="address.state"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Zip Code</ion-label>\n          <ion-input [(ngModel)]="address.zipCode"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Country</ion-label>\n          <ion-input [(ngModel)]="address.country"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Phone Number</ion-label>\n          <ion-input [(ngModel)]="address.phoneNumber"></ion-input>\n        </ion-item>\n        <button margin-top ion-button block (click)="gotoSave();">Save Changes</button>\n        <button margin-top ion-button color="dark" block (click)="closeModal();">Cancel</button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\address-details\address-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_addresses_addresses__["a" /* AddressesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */]])
    ], AddressDetailsPage);
    return AddressDetailsPage;
}());

//# sourceMappingURL=address-details.js.map

/***/ })

});
//# sourceMappingURL=15.js.map