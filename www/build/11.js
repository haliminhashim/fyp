webpackJsonp([11],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            ]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_addresses_addresses__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_orders_orders__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_carts_carts__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, cartsProvider, ordersProvider, navParams, addressesProvider, usersProvider, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.cartsProvider = cartsProvider;
        this.ordersProvider = ordersProvider;
        this.navParams = navParams;
        this.addressesProvider = addressesProvider;
        this.usersProvider = usersProvider;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.checkoutList = [];
        this.payment = "paypal";
        this.subTotalAmnt = 0.00;
        this.shippingAmnt = 1.00;
        this.totalAmnt = 0.00;
        this.shippingAddress = { id: null };
        this.billingAddress = { id: null };
        this.user = this.usersProvider.currentUser();
        this.deliveryOption = [{
                id: 1,
                name: "Standard",
                price: 1.00,
            }, {
                id: 2,
                name: "Express",
                price: 3.00,
            }];
        this.delivery = 0;
        this.payment = "paypal";
        this.shippingAmnt = 1;
        this.checkoutList = this.navParams.get('items');
        this.subTotalAmnt = this.navParams.get('subTotal');
        this.totalAmnt = this.subTotalAmnt + this.shippingAmnt;
        this.setAddresses();
    }
    ;
    CheckoutPage.prototype.calculateTotal = function () {
        this.shippingAmnt = this.deliveryOption[this.delivery].price;
        this.totalAmnt = +this.subTotalAmnt + +this.shippingAmnt;
    };
    CheckoutPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CheckoutPage.prototype.setAddresses = function () {
        var _this = this;
        var billingId = this.user.defaultBillingAddress;
        var shippingId = this.user.defaultShippingAddress;
        if (billingId != null) {
            this.addressesProvider.getAddress(billingId).then(function (data) {
                _this.billingAddress = data;
            });
        }
        else {
            this.billingAddress.id = null;
        }
        if (shippingId != null) {
            this.addressesProvider.getAddress(shippingId).then(function (data) {
                _this.shippingAddress = data;
            });
        }
        else
            this.shippingAddress.id = null;
    };
    CheckoutPage.prototype.changeShippingAddress = function () {
        var _this = this;
        var addressId = null;
        if (this.shippingAddress.id != null)
            addressId = this.shippingAddress.id;
        var modalPage = this.modalCtrl.create('AddressPickerPage', {
            id: addressId
        });
        modalPage.onDidDismiss(function (data) {
            _this.addressesProvider.getAddress(data).then(function (data) {
                _this.shippingAddress = data;
            });
        });
        modalPage.present();
    };
    CheckoutPage.prototype.changeBillingAddress = function () {
        var _this = this;
        var addressId = null;
        if (this.billingAddress.id != null)
            addressId = this.shippingAddress.id;
        var modalPage = this.modalCtrl.create('AddressPickerPage', {
            id: addressId
        });
        modalPage.onDidDismiss(function (data) {
            _this.addressesProvider.getAddress(data).then(function (data) {
                _this.billingAddress = data;
            });
        });
        modalPage.present();
    };
    CheckoutPage.prototype.create = function () {
        var _this = this;
        var products = [];
        this.checkoutList.forEach(function (item) {
            products.push(item.product);
        });
        var json = {
            "id": null,
            "userId": this.user.id,
            "date": new Date().toString(),
            "status": "Awaiting Payment",
            "productTotal": +this.subTotalAmnt,
            "shippingTotal": +this.shippingAmnt,
            "orderTotal": +this.totalAmnt,
            "delivery": this.deliveryOption[this.delivery],
            "payment": this.payment,
            "products": products,
            "shippingAddress": this.shippingAddress,
            "billingAddress": this.billingAddress
        };
        this.ordersProvider.create(json).then(function (res) {
            if (res) {
                _this.checkoutList.forEach(function (item) {
                    _this.cartsProvider.delete(item.id);
                });
                _this.navCtrl.popToRoot();
                var modalPage = _this.modalCtrl.create('OrderDetailsPage', { data: res });
                modalPage.present();
            }
        });
    };
    CheckoutPage.prototype.ionViewWillEnter = function () {
        if (this.user.id == 0)
            this.navCtrl.setRoot("LoginPage");
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\checkout\checkout.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>Checkout</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only>\n        <ion-icon name="" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h6 padding-left>Item Summary:</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class="checkout-content">\n      <ion-col>\n        <ion-card *ngFor="let item of checkoutList; let i = index">\n          <ion-row>\n            <ion-col col-4>\n              <img src={{item.product.image}} />\n            </ion-col>\n            <ion-col>\n              <ion-row>\n                {{item.product.name}}\n                <ion-row *ngFor="let option of item.product.option">\n                  {{option.title}}: {{option.selected}}\n                </ion-row>\n              </ion-row>\n              <ion-row>\n                Quantity: {{item.product.quantity}}\n              </ion-row>\n              <ion-row>\n                Price: $ {{item.product.price | number:\'1.2-2\'}}\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6 padding-left>Shipping Address:</h6>\n      </ion-col>\n      <ion-col col-3 padding-right text-right>\n        <span end (click)="changeShippingAddress()">Change</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class="checkout-content">\n      <ion-col>\n        <ion-card>\n          <ion-card-content *ngIf="shippingAddress.id == null">\n            No Shipping Address Selected\n          </ion-card-content>\n          <ion-card-content *ngIf="shippingAddress.id != null">\n            <ion-row>\n              {{shippingAddress.fullName}}\n            </ion-row>\n            <ion-row>\n              {{shippingAddress.streetAddress1}},\n              {{shippingAddress.streetAddress2}}\n            </ion-row>\n            <ion-row>\n              {{shippingAddress.city}},\n              {{shippingAddress.state}}\n            </ion-row>\n            <ion-row>\n              {{shippingAddress.country}}\n              {{shippingAddress.zipCode}}\n            </ion-row>\n            <ion-row>\n              {{shippingAddress.phoneNumber}}\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6 padding-left>Billing Address:</h6>\n      </ion-col>\n      <ion-col col-3 padding-right text-right>\n        <span end (click)="changeBillingAddress()">Change</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class="checkout-content">\n      <ion-col>\n        <ion-card>\n          <ion-card-content *ngIf="billingAddress.id == null">\n            No Billing Address Selected\n          </ion-card-content>\n          <ion-card-content *ngIf="billingAddress.id != null">\n            <ion-row>\n              {{billingAddress.fullName}}\n            </ion-row>\n            <ion-row>\n              {{billingAddress.streetAddress1}},\n              {{billingAddress.streetAddress2}}\n            </ion-row>\n            <ion-row>\n              {{billingAddress.city}},\n              {{billingAddress.state}}\n            </ion-row>\n            <ion-row>\n              {{billingAddress.country}}\n              {{billingAddress.zipCode}}\n            </ion-row>\n            <ion-row>\n              {{billingAddress.phoneNumber}}\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6 padding-left>Delivery Option:</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class="checkout-content">\n      <ion-col>\n        <ion-list padding-left padding-right radio-group [(ngModel)]="delivery">\n          <div *ngFor="let option of deliveryOption; let i = index">\n            <ion-item>\n              <ion-label>{{option.name}}</ion-label>\n              <ion-radio value={{i}} (click)="calculateTotal()"></ion-radio>\n            </ion-item>\n          </div>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6 padding-left>Payment Method</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class="checkout-content">\n      <ion-col>\n        <ion-list padding-left padding-right radio-group [(ngModel)]="payment">\n          <ion-item>\n            <ion-label>Paypal</ion-label>\n            <ion-radio value="paypal"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>uTrust</ion-label>\n            <ion-radio value="utrust"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer padding>\n  <h4>Summary</h4>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        Sub Total\n      </ion-col>\n      <ion-col>\n        $ {{subTotalAmnt | number:\'1.2-2\'}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        Shipping\n      </ion-col>\n      <ion-col>\n        $ {{shippingAmnt | number:\'1.2-2\'}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h5>Total</h5>\n      </ion-col>\n      <ion-col>\n        <h5>$ {{totalAmnt | number:\'1.2-2\'}}</h5>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <button ion-button block (click)="create()">Place Order</button>\n  <body></body>\n</ion-footer>'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\checkout\checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_carts_carts__["a" /* CartsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_orders_orders__["a" /* OrdersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_addresses_addresses__["a" /* AddressesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=11.js.map