webpackJsonp([14],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPickerPageModule", function() { return AddressPickerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_picker__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddressPickerPageModule = /** @class */ (function () {
    function AddressPickerPageModule() {
    }
    AddressPickerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__address_picker__["a" /* AddressPickerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address_picker__["a" /* AddressPickerPage */]),
            ],
        })
    ], AddressPickerPageModule);
    return AddressPickerPageModule;
}());

//# sourceMappingURL=address-picker.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_addresses_addresses__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_users__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressPickerPage = /** @class */ (function () {
    function AddressPickerPage(navCtrl, usersProvider, modalCtrl, navParams, addressesProvider, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.usersProvider = usersProvider;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.addressesProvider = addressesProvider;
        this.viewCtrl = viewCtrl;
        this.user = this.usersProvider.currentUser();
        this.addressesProvider.getAddressesByUserId(this.user.id).then(function (data) {
            _this.addresses = data;
        });
        this.address = [];
        this.selectedAddress = 0; //this.navParams.get('id');
    }
    AddressPickerPage.prototype.ionViewDidLoad = function () {
    };
    AddressPickerPage.prototype.closeModal = function () {
        var data = this.selectedAddress;
        this.viewCtrl.dismiss(data);
    };
    AddressPickerPage.prototype.createAddress = function () {
        var _this = this;
        var modalPage = this.modalCtrl.create('CreateAddressPage');
        modalPage.present();
        modalPage.onDidDismiss(function () {
            _this.getAddresses();
        });
    };
    AddressPickerPage.prototype.viewAddress = function (address) {
        var _this = this;
        var modalPage = this.modalCtrl.create('AddressDetailsPage', {
            data: address
        });
        modalPage.present();
        modalPage.onDidDismiss(function () {
            _this.getAddresses();
        });
    };
    AddressPickerPage.prototype.getAddresses = function () {
        var _this = this;
        this.addressesProvider.getAddressesByUserId(1).then(function (data) {
            _this.addresses = data;
        });
    };
    AddressPickerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address-picker',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\address-picker\address-picker.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title text-center>Checkout</ion-title>\n      <ion-buttons right>\n        <button ion-button icon-only>\n          <ion-icon name="" color="secondary"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding margin-top>\n  <ion-row>\n    <ion-col>\n      <button block ion-button (click)="createAddress()">Add Address</button>\n    </ion-col>\n  </ion-row>\n  <ion-list radio-group [(ngModel)]="selectedAddress">\n    <ion-card padding *ngFor="let item of addresses; let i = index">\n      <ion-radio value={{item.id}}></ion-radio>\n      <ion-card-header>\n        <h1>{{item.fullName}}</h1>\n      </ion-card-header>\n      <ion-card-content>\n        <div>{{item.streetAddress1}}</div>\n        <div>{{item.streetAddress2}}</div>\n        <div>{{item.city}}, {{item.state}} {{item.zipCode}}</div>\n        <div>{{item.country}}</div>\n        <div>Phone Number: {{item.phoneNumber}}</div>\n      </ion-card-content>\n      <button ion-button outline block color="light" (click)="viewAddress(item)">Edit</button>\n    </ion-card>\n  </ion-list>\n  <ion-row>\n    <ion-col>\n      <button ion-button block (click)="closeModal();">Continue</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\address-picker\address-picker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_addresses_addresses__["a" /* AddressesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], AddressPickerPage);
    return AddressPickerPage;
}());

//# sourceMappingURL=address-picker.js.map

/***/ })

});
//# sourceMappingURL=14.js.map