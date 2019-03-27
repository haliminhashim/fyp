webpackJsonp([8],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupbuyPageModule", function() { return GroupbuyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupbuy__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupbuyPageModule = /** @class */ (function () {
    function GroupbuyPageModule() {
    }
    GroupbuyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__groupbuy__["a" /* GroupbuyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groupbuy__["a" /* GroupbuyPage */]),
            ],
        })
    ], GroupbuyPageModule);
    return GroupbuyPageModule;
}());

//# sourceMappingURL=groupbuy.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupbuyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupbuyPage = /** @class */ (function () {
    function GroupbuyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inviteCode = "";
        this.product = this.navParams.get('data').data.product;
        this.tiers = this.navParams.get('data').data.tiers;
        console.log(this.tiers);
    }
    GroupbuyPage.prototype.joinGroupBuy = function () {
        this.navCtrl.push("GroupbuyConfirmationPage", {
            data: this.navParams.get('data'),
            inviteCode: this.inviteCode
        });
    };
    GroupbuyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupbuyPage');
    };
    GroupbuyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groupbuy',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\groupbuy\groupbuy.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-searchbar placeholder="Search"></ion-searchbar>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="viewCart()">\n        <ion-icon name="cart" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <img src="{{ product.image }}" />\n          <ion-card-header>\n            {{ product.make }}\n          </ion-card-header>\n          <ion-card-content>\n            <p>{{ product.name }}</p>\n            <p>$ {{ product.price  | number:\'1.2-2\'}}</p>\n          </ion-card-content>\n          <ion-row>\n            <ion-col>\n              <h5>Selected Options:</h5>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor="let option of product.option">\n            <ion-col>\n              {{option.title}}\n            </ion-col>\n            <ion-col *ngIf="option.selected != \'\'">\n              {{option.selected}}\n            </ion-col>\n            <ion-col *ngIf="option.selected == \'\'">\n              None\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Invite Code</ion-label>\n                <ion-input type="text" [(ngModel)]="inviteCode" style="border: solid thin black"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <button ion-button block (click)="joinGroupBuy()">Join</button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        Level\n      </ion-col>\n      <ion-col>\n        Referrals\n      </ion-col>\n      <ion-col>\n        Discount($)\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor="let tier of tiers" padding-left>\n      <ion-col>\n        {{tier.level}}\n      </ion-col>\n      <ion-col>\n        {{tier.amount}}\n      </ion-col>\n      <ion-col>\n        {{tier.discount}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col padding-left>\n        <h5>Specification</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col padding-left padding-right>\n        <ion-row class="spec-item" *ngFor="let item of product.spec">\n          <ion-col>{{ item.type }}</ion-col>\n          <ion-col>{{ item.value }}</ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\groupbuy\groupbuy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], GroupbuyPage);
    return GroupbuyPage;
}());

//# sourceMappingURL=groupbuy.js.map

/***/ })

});
//# sourceMappingURL=8.js.map