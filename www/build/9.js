webpackJsonp([9],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupbuyConfirmationPageModule", function() { return GroupbuyConfirmationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupbuy_confirmation__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupbuyConfirmationPageModule = /** @class */ (function () {
    function GroupbuyConfirmationPageModule() {
    }
    GroupbuyConfirmationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__groupbuy_confirmation__["a" /* GroupbuyConfirmationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groupbuy_confirmation__["a" /* GroupbuyConfirmationPage */]),
            ],
        })
    ], GroupbuyConfirmationPageModule);
    return GroupbuyConfirmationPageModule;
}());

//# sourceMappingURL=groupbuy-confirmation.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupbuyConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_addresses_addresses__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_orders_orders__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_bigchaindb_bigchaindb__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupbuyConfirmationPage = /** @class */ (function () {
    function GroupbuyConfirmationPage(toastCtrl, bigchaindbProvider, ordersProvider, modalCtrl, addressesProvider, usersProvider, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.bigchaindbProvider = bigchaindbProvider;
        this.ordersProvider = ordersProvider;
        this.modalCtrl = modalCtrl;
        this.addressesProvider = addressesProvider;
        this.usersProvider = usersProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.payment = "paypal";
        this.subTotalAmnt = 0.00;
        this.shippingAmnt = 1.00;
        this.totalAmnt = 0.00;
        this.shippingAddress = { id: null };
        this.billingAddress = { id: null };
        this.user = this.usersProvider.currentUser();
        this.product = null;
        this.inviteCode = "";
        this.quantity = 1;
        this.product = this.navParams.get("data").data.product;
        this.inviteCode = this.navParams.get("inviteCode");
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
        this.subTotalAmnt = this.navParams.get("data").data.product.price;
        this.totalAmnt = this.subTotalAmnt + this.shippingAmnt;
        this.setAddresses();
    }
    GroupbuyConfirmationPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1500,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    GroupbuyConfirmationPage.prototype.decreaseQuantity = function () {
        var quantity = this.quantity;
        if (quantity <= 1) {
            this.presentToast("Cannot Quantity Minimum 1");
        }
        else {
            this.quantity -= 1;
            this.calculateTotal();
        }
    };
    GroupbuyConfirmationPage.prototype.increaseQuantity = function () {
        var quantity = this.quantity;
        if (quantity >= 10) {
            this.presentToast("Cannot Quantity Maximum 10");
        }
        else {
            this.quantity += 1;
            this.calculateTotal();
        }
    };
    GroupbuyConfirmationPage.prototype.calculateTotal = function () {
        this.shippingAmnt = this.deliveryOption[this.delivery].price;
        this.totalAmnt = (+this.subTotalAmnt * this.quantity) + +this.shippingAmnt;
    };
    GroupbuyConfirmationPage.prototype.setAddresses = function () {
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
    GroupbuyConfirmationPage.prototype.changeShippingAddress = function () {
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
    GroupbuyConfirmationPage.prototype.changeBillingAddress = function () {
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
    GroupbuyConfirmationPage.prototype.create = function () {
        var _this = this;
        var data = {
            email: this.user.email,
            keys: this.user.keys,
            shipping: this.shippingAddress,
            referral: this.inviteCode,
            groupBuyId: this.navParams.get("data").data.id,
            quantity: this.quantity,
            inviteCode: this.user.id + this.navParams.get("data").data.id,
            payment: this.payment,
        };
        this.bigchaindbProvider.joinGroupBuy(data)
            .then(function (res) {
            _this.presentToast("Joined Group Buy Successfully");
            _this.navCtrl.pop();
        });
    };
    GroupbuyConfirmationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groupbuy-confirmation',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\groupbuy-confirmation\groupbuy-confirmation.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title text-center>Checkout</ion-title>\n      <ion-buttons right>\n        <button ion-button icon-only>\n          <ion-icon name="" color="secondary"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h6 padding-left>Item Summary:</h6>\n        </ion-col>\n      </ion-row>\n      <ion-row class="checkout-content">\n        <ion-col>\n          <ion-card *ngIf="product != null">\n            <ion-row>\n              <ion-col col-4>\n                <img src={{product.image}} />\n              </ion-col>\n              <ion-col>\n                <ion-row>\n                  {{product.name}}\n                  <ion-row *ngFor="let option of product.option">\n                    {{option.title}}: {{option.selected}}\n                  </ion-row>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-3>\n                      <button block small ion-button icon-only (click)="decreaseQuantity()">\n                        <ion-icon name="arrow-dropdown" color="secondary"></ion-icon>\n                      </button>\n                    </ion-col>\n                    <ion-col>\n                      <button ion-button small outline block color="primary">{{quantity}}</button>\n                    </ion-col>\n                    <ion-col col-3>\n                      <button block small ion-button icon-only (click)="increaseQuantity()">\n                        <ion-icon name="arrow-dropup" color="secondary"></ion-icon>\n                      </button>\n                    </ion-col>\n                  </ion-row>\n                <ion-row>\n                  Price per unit: $ {{product.price | number:\'1.2-2\'}}\n                </ion-row>\n                  {{inviteCode}}\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h6 padding-left>Shipping Address:</h6>\n        </ion-col>\n        <ion-col col-3 padding-right text-right>\n          <span end (click)="changeShippingAddress()">Change</span>\n        </ion-col>\n      </ion-row>\n      <ion-row class="checkout-content">\n        <ion-col>\n          <ion-card>\n            <ion-card-content *ngIf="shippingAddress.id == null">\n              No Shipping Address Selected\n            </ion-card-content>\n            <ion-card-content *ngIf="shippingAddress.id != null">\n              <ion-row>\n                {{shippingAddress.fullName}}\n              </ion-row>\n              <ion-row>\n                {{shippingAddress.streetAddress1}},\n                {{shippingAddress.streetAddress2}}\n              </ion-row>\n              <ion-row>\n                {{shippingAddress.city}},\n                {{shippingAddress.state}}\n              </ion-row>\n              <ion-row>\n                {{shippingAddress.country}}\n                {{shippingAddress.zipCode}}\n              </ion-row>\n              <ion-row>\n                {{shippingAddress.phoneNumber}}\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h6 padding-left>Billing Address:</h6>\n        </ion-col>\n        <ion-col col-3 padding-right text-right>\n          <span end (click)="changeBillingAddress()">Change</span>\n        </ion-col>\n      </ion-row>\n      <ion-row class="checkout-content">\n        <ion-col>\n          <ion-card>\n            <ion-card-content *ngIf="billingAddress.id == null">\n              No Billing Address Selected\n            </ion-card-content>\n            <ion-card-content *ngIf="billingAddress.id != null">\n              <ion-row>\n                {{billingAddress.fullName}}\n              </ion-row>\n              <ion-row>\n                {{billingAddress.streetAddress1}},\n                {{billingAddress.streetAddress2}}\n              </ion-row>\n              <ion-row>\n                {{billingAddress.city}},\n                {{billingAddress.state}}\n              </ion-row>\n              <ion-row>\n                {{billingAddress.country}}\n                {{billingAddress.zipCode}}\n              </ion-row>\n              <ion-row>\n                {{billingAddress.phoneNumber}}\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h6 padding-left>Delivery Option:</h6>\n        </ion-col>\n      </ion-row>\n      <ion-row class="checkout-content">\n        <ion-col>\n          <ion-list padding-left padding-right radio-group [(ngModel)]="delivery">\n            <div *ngFor="let option of deliveryOption; let i = index">\n              <ion-item>\n                <ion-label>{{option.name}}</ion-label>\n                <ion-radio value={{i}} (click)="calculateTotal()"></ion-radio>\n              </ion-item>\n            </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h6 padding-left>Payment Method</h6>\n        </ion-col>\n      </ion-row>\n      <ion-row class="checkout-content">\n        <ion-col>\n          <ion-list padding-left padding-right radio-group [(ngModel)]="payment">\n            <ion-item>\n              <ion-label>Paypal</ion-label>\n              <ion-radio value="paypal"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>uTrust</ion-label>\n              <ion-radio value="utrust"></ion-radio>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n  \n  <ion-footer padding>\n    <h4>Summary</h4>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          Sub Total\n        </ion-col>\n        <ion-col>\n          $ {{(subTotalAmnt * quantity) | number:\'1.2-2\'}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Shipping\n        </ion-col>\n        <ion-col>\n          $ {{shippingAmnt | number:\'1.2-2\'}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h5>Total</h5>\n        </ion-col>\n        <ion-col>\n          <h5>$ {{totalAmnt | number:\'1.2-2\'}}</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item>\n      <ion-label stacked>Invite Code</ion-label>\n      <ion-input type="text" [(ngModel)]="inviteCode"></ion-input>\n    </ion-item>\n    <button ion-button block (click)="create()">Place Order</button>\n  </ion-footer>'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\groupbuy-confirmation\groupbuy-confirmation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_bigchaindb_bigchaindb__["a" /* BigchaindbProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_orders_orders__["a" /* OrdersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_addresses_addresses__["a" /* AddressesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], GroupbuyConfirmationPage);
    return GroupbuyConfirmationPage;
}());

//# sourceMappingURL=groupbuy-confirmation.js.map

/***/ })

});
//# sourceMappingURL=9.js.map