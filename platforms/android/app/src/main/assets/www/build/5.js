webpackJsonp([5],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderPageModule = /** @class */ (function () {
    function OrderPageModule() {
    }
    OrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
            ],
        })
    ], OrderPageModule);
    return OrderPageModule;
}());

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, ordersProvider, usersProvider, navParams, viewCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.ordersProvider = ordersProvider;
        this.usersProvider = usersProvider;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.orders = [];
        this.user = this.usersProvider.currentUser();
        this.ordersProvider.getOrdersByUserId(this.user.id).then(function (data) {
            _this.orders = data;
        });
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        if (this.user.id <= 0)
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    OrderPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    OrderPage.prototype.viewOrderDetails = function (data) {
        var modalPage = this.modalCtrl.create("OrderDetailsPage", {
            data: data
        });
        modalPage.present();
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-order",template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\order\order.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>Your Orders</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only>\n        <ion-icon name="" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="orders.length == 0">\n    <ion-card>\n      <ion-card-content text-center padding>\n        No existing Order\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n\n<ion-content padding *ngIf="orders.length != 0">\n  <ion-card *ngFor="let order of orders">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row color="primary">\n          <ion-col>#{{order.id}}</ion-col>\n          <ion-col text-right>{{order.status}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3>\n            <img src={{order.products[0].image}}>\n          </ion-col>\n          <ion-col>\n            <ion-row>{{order.products[0].name}}</ion-row>\n            <ion-row>Quantity: {{order.products[0].quantity}}</ion-row>\n            <ion-row>$ {{order.products[0].price}}</ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row text-right>\n          <ion-col>\n            {{order.date}}\n          </ion-col>\n        </ion-row>\n        <ion-row text-center *ngIf="order.products.length == 1">\n          <ion-col>\n            <button ion-button block color="light" outline (click)="viewOrderDetails(order)">View Order Details</button>\n          </ion-col>\n        </ion-row>\n        <ion-row text-center *ngIf="order.products.length > 1">\n          <ion-col>\n            <button ion-button block color="light" outline (click)="viewOrderDetails(order)">View Other Items</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\order\order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__["a" /* OrdersProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=5.js.map