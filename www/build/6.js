webpackJsonp([6],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MygroupPageModule", function() { return MygroupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mygroup__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MygroupPageModule = /** @class */ (function () {
    function MygroupPageModule() {
    }
    MygroupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mygroup__["a" /* MygroupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mygroup__["a" /* MygroupPage */]),
            ],
        })
    ], MygroupPageModule);
    return MygroupPageModule;
}());

//# sourceMappingURL=mygroup.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MygroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bigchaindb_bigchaindb__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MygroupPage = /** @class */ (function () {
    function MygroupPage(userProvider, bigchaindbProvider, navCtrl, navParams) {
        this.userProvider = userProvider;
        this.bigchaindbProvider = bigchaindbProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transactions = [];
        this.user = this.userProvider.currentUser();
    }
    MygroupPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.bigchaindbProvider.searchTransaction('"' + this.user.email + '"').then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = data;
                        result.forEach(function (element) {
                            if (element.data.type == "trlprtcp") {
                                element.product = {
                                    image: ""
                                };
                                element.data.referrals = [];
                                _this.transactions.push(element);
                            }
                        });
                        return [4 /*yield*/, this.transactions.forEach(function (transaction, index) {
                                _this.bigchaindbProvider.searchTransaction(transaction.data.groupBuyId).then(function (data) {
                                    var result = data;
                                    result.forEach(function (element) {
                                        if (element.data.type == "trlgrpbuy") {
                                            _this.transactions[index].product = element.data.product;
                                            _this.transactions[index].tiers = element.data.tiers;
                                            _this.transactions[index].discount = 0;
                                        }
                                    });
                                    var invitesCodes = [];
                                    var referrals = [];
                                    invitesCodes.push(transaction.data.inviteCode);
                                    invitesCodes.forEach(function (code) {
                                        result.forEach(function (transaction) {
                                            if (code == transaction.data.referral)
                                                invitesCodes.push(transaction.data.inviteCode);
                                        });
                                    });
                                    invitesCodes.forEach(function (code) {
                                        result.forEach(function (element) {
                                            if (code == element.data.referral && _this.user.email != element.data.email)
                                                referrals.push(element.data.email);
                                        });
                                    });
                                    _this.transactions[index].data.referrals = referrals;
                                    transaction.tiers.forEach(function (tier) {
                                        // console.log(tier.amount)
                                        if (referrals.length >= tier.amount) {
                                            _this.transactions[index].discount = tier.discount;
                                        }
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        // console.log(this.transactions)
    };
    MygroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mygroup',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\mygroup\mygroup.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-searchbar placeholder="Search"></ion-searchbar>\n      <ion-buttons right (click)="viewCart()">\n        <button ion-button icon-only>\n          <ion-icon name="cart" color="secondary"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-card *ngIf="transactions.length == 0"> \n      <ion-row>\n        <ion-col>\n            You have no Group Buy Participation\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <ion-card *ngFor="let item of transactions">\n    <ion-row>\n      <ion-col col-4 *ngIf="item.product.image">\n        <img src={{item.product.image}} />\n      </ion-col>\n      <ion-col col-8>\n        <ion-row>\n          Invite Code: {{item.data.inviteCode}}\n        </ion-row>\n        <ion-row>\n          <span>{{item.product.name}}</span>\n          <span *ngFor="let option of item.product.option">\n            , {{option.selected}}\n          </span>\n        </ion-row>\n        <ion-row>\n          Quantity: {{item.data.quantity}}\n        </ion-row>\n        <ion-row>\n          Referrals: {{item.data.referrals.length}}\n        </ion-row>\n        <ion-row>\n          Original Price: $ {{item.product.price | number:\'1.2-2\'}}\n        </ion-row>\n        <ion-row>\n          Discount: $ {{item.discount | number:\'1.2-2\'}}\n        </ion-row>\n        <ion-row>\n          Attained Price: $ {{item.product.price - item.discount | number:\'1.2-2\'}}\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            Level\n          </ion-col>\n          <ion-col>\n            Referrals\n          </ion-col>\n          <ion-col>\n            Discount($)\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor="let tier of item.tiers">\n          <ion-col>\n            {{tier.level}}\n          </ion-col>\n          <ion-col>\n            {{tier.amount}}\n          </ion-col>\n          <ion-col>\n            {{tier.discount}}\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\mygroup\mygroup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_bigchaindb_bigchaindb__["a" /* BigchaindbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MygroupPage);
    return MygroupPage;
}());

//# sourceMappingURL=mygroup.js.map

/***/ })

});
//# sourceMappingURL=6.js.map