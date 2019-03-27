webpackJsonp([8],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carts_carts__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, usersProvider, cartsProvider, viewCtrl, toastCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersProvider = usersProvider;
        this.cartsProvider = cartsProvider;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.total = 0.00;
        this.user = this.usersProvider.currentUser();
        this.cart = [];
        this.cartsProvider.getCartByUserId(this.user.id).then(function (data) {
            _this.cart = data;
            _this.total = _this.calculateTotal(data);
        });
    }
    CartPage.prototype.calculateTotal = function (cart) {
        var amount = 0;
        cart.forEach(function (item) {
            if (item.product.confirm != false)
                amount += (item.product.price * item.product.quantity);
        });
        return amount;
    };
    CartPage.prototype.presentToast = function (msg) {
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
    CartPage.prototype.decreaseQuantity = function (index) {
        var quantity = this.cart[index].product.quantity;
        if (quantity <= 1) {
            this.presentToast("Cannot Quantity Minimum 1");
        }
        else {
            this.cart[index].product.quantity -= 1;
            this.cartsProvider.updateQuantity(this.cart[index].product);
        }
        this.total = this.calculateTotal(this.cart);
    };
    CartPage.prototype.increaseQuantity = function (index) {
        var quantity = this.cart[index].product.quantity;
        if (quantity >= 10) {
            this.presentToast("Cannot Quantity Maximum 10");
        }
        else {
            this.cart[index].product.quantity += 1;
            this.cartsProvider.updateQuantity(this.cart[index].product);
        }
        this.total = this.calculateTotal(this.cart);
    };
    CartPage.prototype.checkout = function (cart) {
        var checkoutList = [];
        cart.forEach(function (item) {
            if (item.product.confirm)
                checkoutList.push(item);
        });
        if (this.user.id != 0) {
            this.navCtrl.push('CheckoutPage', {
                items: checkoutList,
                subTotal: this.total
            });
        }
        else
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    CartPage.prototype.removeFromCart = function (id) {
        var _this = this;
        this.cartsProvider.delete(id).then(function (res) {
            _this.cartsProvider.getCartByUserId(_this.user.id).then(function (data) {
                _this.cart = data;
                _this.total = _this.calculateTotal(data);
            });
        });
    };
    CartPage.prototype.editOption = function (product) {
        var modalPage = this.modalCtrl.create('ProductOptionsPage', {
            data: product
        });
        modalPage.onDidDismiss(function (data) {
            product = data;
        });
        modalPage.present();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\cart\cart.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>Your Trollee</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only>\n        <ion-icon name="" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="cart.length != 0">\n  <ion-card *ngFor="let item of cart; let i = index">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-checkbox [(ngModel)]="item.product.confirm"></ion-checkbox>\n          {{item.product.make}}\n        </ion-col>\n        <ion-col col-1>\n          <ion-icon float-right name="trash" right (click)="removeFromCart(item.id)"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <img src={{item.product.image}} />\n        </ion-col>\n        <ion-col>\n          <ion-row>\n            {{item.product.name}}\n          </ion-row>\n          <ion-row *ngFor="let option of item.product.option">\n            {{option.title}}: {{option.selected}}\n          </ion-row>\n          <ion-row>\n            $ {{item.product.price}}\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <button block small icon-end ion-button (click)="editOption(item.product)">\n                Options\n                <ion-icon name="arrow-dropdown" color="secondary"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-3>\n              <button block small ion-button icon-only (click)="decreaseQuantity(i)">\n                <ion-icon name="arrow-dropdown" color="secondary"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button small outline block color="primary" (click)="viewAddress(item)">{{item.product.quantity}}</button>\n            </ion-col>\n            <ion-col col-3>\n              <button block small ion-button icon-only (click)="increaseQuantity(i)">\n                <ion-icon name="arrow-dropup" color="secondary"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n\n<ion-content *ngIf="cart.length == 0">\n  <ion-card>\n    <ion-card-content text-center padding>\n      No item in cart\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer padding *ngIf="cart.length != 0">\n  <h4>Summary</h4>\n  <ion-grid>\n    <ion-row padding-top>\n      <ion-col>\n        <h5>Total</h5>\n      </ion-col>\n      <ion-col>\n        <h5>${{total}}</h5>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <button ion-button block (click)="checkout(cart);">Go To Checkout</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_carts_carts__["a" /* CartsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=8.js.map