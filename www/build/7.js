webpackJsonp([7],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupbuysPageModule", function() { return GroupbuysPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupbuys__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupbuysPageModule = /** @class */ (function () {
    function GroupbuysPageModule() {
    }
    GroupbuysPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__groupbuys__["a" /* GroupbuysPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groupbuys__["a" /* GroupbuysPage */]),
            ],
        })
    ], GroupbuysPageModule);
    return GroupbuysPageModule;
}());

//# sourceMappingURL=groupbuys.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupbuysPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bigchaindb_bigchaindb__ = __webpack_require__(53);
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
 * Generated class for the GroupbuysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupbuysPage = /** @class */ (function () {
    function GroupbuysPage(navCtrl, navParams, bigchaindbProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bigchaindbProvider = bigchaindbProvider;
        this.items = [];
        this.transactions = [];
        this.bigchaindbProvider.searchTransaction("trlgrpbuy").then(function (data) {
            _this.transactions = data;
            var _loop_1 = function (index) {
                var transaction = _this.transactions[index];
                _this.transactions[index].data.count = 0;
                _this.bigchaindbProvider.searchTransaction(transaction.data.id).then(function (data) {
                    var result = data;
                    for (var index2 = 0; index2 < result.length; index2++) {
                        var element = result[index2];
                        if (element.data.type == "trlprtcp")
                            if (element.data.action == "Join")
                                _this.transactions[index].data.count += element.data.quantity;
                            else
                                _this.transactions[index].data.count -= element.data.quantity;
                    }
                });
            };
            for (var index = 0; index < _this.transactions.length; index++) {
                _loop_1(index);
            }
        });
    }
    GroupbuysPage.prototype.viewGroupBuy = function (transaction) {
        this.navCtrl.push("GroupbuyPage", {
            data: transaction
        });
    };
    GroupbuysPage.prototype.viewMyGroup = function (transaction) {
        this.navCtrl.push("MygroupPage", {
            data: transaction
        });
    };
    GroupbuysPage.prototype.createGroupBuy = function () {
        this.bigchaindbProvider.createGroupBuy();
    };
    GroupbuysPage.prototype.ionViewDidLoad = function () {
    };
    GroupbuysPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groupbuys',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\groupbuys\groupbuys.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-searchbar placeholder="Search"></ion-searchbar>\n    <ion-buttons right (click)="viewCart()">\n      <button ion-button icon-only>\n        <ion-icon name="cart" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-buttons (click)="viewMyGroup()">\n    <button block ion-button>\n      View Group\n    </button>\n  </ion-buttons>\n  <ion-grid>\n    <ion-row>\n      <h5 padding-left>Group Buy</h5>\n    </ion-row>\n    <ion-card *ngFor="let item of transactions; let i = index">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <img src={{item.data.product.image}} />\n          </ion-col>\n          <ion-col>\n            <ion-row>\n              {{item.data.product.name}}\n            </ion-row>\n            <ion-row *ngFor="let option of item.data.product.option">\n              {{option.title}}: {{option.selected}}\n            </ion-row>\n            <ion-row>\n              $ {{item.data.product.price | number:\'1.2-2\'}}\n            </ion-row>\n            <ion-row>\n              {{item.data.count}}/{{item.data.quantity}} Purchased\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <button block small icon-end ion-button (click)="viewGroupBuy(item)">\n                  View Group Buy\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\groupbuys\groupbuys.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_bigchaindb_bigchaindb__["a" /* BigchaindbProvider */]])
    ], GroupbuysPage);
    return GroupbuysPage;
}());

//# sourceMappingURL=groupbuys.js.map

/***/ })

});
//# sourceMappingURL=7.js.map