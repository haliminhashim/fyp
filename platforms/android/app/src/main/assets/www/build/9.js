webpackJsonp([9],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddressPageModule = /** @class */ (function () {
    function AddressPageModule() {
    }
    AddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */]),
            ],
        })
    ], AddressPageModule);
    return AddressPageModule;
}());

//# sourceMappingURL=address.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_addresses_addresses__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressPage = /** @class */ (function () {
    function AddressPage(navCtrl, toastCtrl, addressesProvider, navParams, modalCtrl, usersProvider) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.addressesProvider = addressesProvider;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.usersProvider = usersProvider;
        this.addresses = [];
        this.address = {};
        this.user = this.usersProvider.currentUser();
        this.getAddresses();
    }
    AddressPage.prototype.getAddresses = function () {
        var _this = this;
        this.addressesProvider.getAddressesByUserId(this.user.id).then(function (data) {
            _this.addresses = data;
        });
    };
    AddressPage.prototype.createAddress = function () {
        var _this = this;
        var modalPage = this.modalCtrl.create('CreateAddressPage');
        modalPage.present();
        modalPage.onDidDismiss(function () {
            _this.getAddresses();
        });
    };
    AddressPage.prototype.viewAddress = function (address) {
        var _this = this;
        var modalPage = this.modalCtrl.create('AddressDetailsPage', {
            data: address
        });
        modalPage.present();
        modalPage.onDidDismiss(function () {
            _this.getAddresses();
        });
    };
    AddressPage.prototype.deleteAddress = function (id) {
        var _this = this;
        this.addressesProvider.delete(id).then(function (res) {
            if (res) {
                _this.getAddresses();
                _this.presentToast("Address has been sucessfully deleted.");
            }
            else
                _this.presentToast("Unable to delete information. Please try again");
        });
    };
    AddressPage.prototype.setBillingDefault = function (data) {
        var _this = this;
        var json = {
            "id": this.user.id,
            "defaultBillingAddress": data
        };
        this.usersProvider.update(json).then(function (data) {
            if (data != {}) {
                _this.user = data;
                _this.presentToast("Default Billing Address has been updated");
            }
            else {
                _this.presentToast("Unable to update information. Please try again");
            }
        });
    };
    AddressPage.prototype.setShippingDefault = function (data) {
        var _this = this;
        var json = {
            "id": this.user.id,
            "defaultShippingAddress": data
        };
        this.usersProvider.update(json).then(function (data) {
            if (data != {}) {
                _this.user = data;
                _this.presentToast("Default Shipping Address has been updated");
            }
            else {
                _this.presentToast("Unable to update information. Please try again");
            }
        });
    };
    AddressPage.prototype.presentToast = function (msg) {
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
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\address\address.html"*/'<ion-content padding margin-top *ngIf="addresses.length > 0">\n  <ion-card padding *ngFor="let item of addresses">\n    <ion-card-header>\n      <h1>{{item.fullName}}</h1>\n    </ion-card-header>\n    <ion-card-content>\n      {{item.streetAddress1}}<br>\n      {{item.streetAddress2}}<br>\n      {{item.city}}, {{item.state}} {{item.zipCode}}<br>\n      {{item.country}}<br>\n      Phone Number: {{item.phoneNumber}}\n    </ion-card-content>\n    <ion-row>\n      <ion-col col-12 text-center>\n        <button ion-button outline block color="dark" *ngIf="user.defaultBillingAddress == item.id">Current Billing\n          Address</button>\n        <button ion-button block color="dark" *ngIf="user.defaultBillingAddress != item.id" (click)="setBillingDefault(item.id)">Set\n          as Billing Address</button>\n      </ion-col>\n      <ion-col col-12 text-center>\n        <button ion-button outline block color="dark" *ngIf="user.defaultShippingAddress == item.id">Current Shipping\n          Address</button>\n        <button ion-button block color="dark" *ngIf="user.defaultShippingAddress != item.id" (click)="setShippingDefault(item.id)">Set\n          as Shipping Address</button>\n      </ion-col>\n      <ion-col col-6 text-center>\n        <button ion-button outline block color="light" (click)="viewAddress(item)">Edit</button>\n      </ion-col>\n      <ion-col col-6 text-center>\n        <button ion-button outline block color="light" (click)="deleteAddress(item.id)">Delete</button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-row>\n    <ion-col>\n      <button block ion-button color="dark" (click)="createAddress()">Add Address</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-content padding margin-top *ngIf="addresses.length == 0">\n  <ion-card>\n    <ion-card-content>\n      No existing address\n    </ion-card-content>\n  </ion-card>\n  <ion-row>\n    <ion-col>\n      <button block ion-button color="dark" (click)="createAddress()">Add Address</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\address\address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_addresses_addresses__["a" /* AddressesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ })

});
//# sourceMappingURL=9.js.map