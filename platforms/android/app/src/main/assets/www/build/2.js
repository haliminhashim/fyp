webpackJsonp([2],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]),
            ],
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_products__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_categories_categories__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams, categoriesProviders, productProvider, viewCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categoriesProviders = categoriesProviders;
        this.productProvider = productProvider;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.productItems = [];
        this.subCategory = [];
        this.category = {};
        this.page = 1;
        this.scrollChecker = true;
        this.categoriesProviders.getCategory(this.navParams.get("id")).then(function (data) {
            _this.category = data;
            _this.categoriesProviders.getSubCategories(_this.category.id).then(function (data) {
                _this.subCategory = data;
                _this.productProvider.getProductsByCategory(_this.navParams.get("id"), _this.page).then(function (data) {
                    var result = data;
                    result.forEach(function (product) {
                        _this.productItems.push(product);
                    });
                    _this.page += 1;
                });
            });
        });
    }
    ProductsPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (_this.scrollChecker)
                    _this.productProvider.getProductsByCategory(_this.navParams.get("id"), _this.page).then(function (data) {
                        var result = data;
                        if (result.length > 0) {
                            result.forEach(function (product) {
                                _this.productItems.push(product);
                            });
                            _this.page += 1;
                        }
                        else
                            _this.scrollChecker = false;
                    });
                resolve();
            }, 500);
        });
    };
    ProductsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ProductsPage.prototype.viewProduct = function (id) {
        this.navCtrl.push('ProductPage', { data: id });
    };
    ProductsPage.prototype.viewSubCategory = function (tid) {
        this.navCtrl.push('ProductsPage', { id: tid });
    };
    ProductsPage.prototype.viewCart = function () {
        this.navCtrl.push('CartPage');
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\products\products.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-searchbar placeholder="Search"></ion-searchbar>\n    <ion-buttons right (click)="viewCart()">\n      <button ion-button icon-only>\n        <ion-icon name="cart" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <h5 padding-left>{{category.name}}</h5>\n    </ion-row>\n    <ion-row nowrap class="horizontal-scroll">\n      <ion-col class="card-scroll" col-4 *ngFor="let item of subCategory">\n        <ion-card class="category-list" (click)="viewSubCategory(item.id)">\n          <ion-card-content style="padding: 5%; font-size: 3vw; text-align: center; height: 100%;">\n            {{item.name}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row class="vertical-scroll" *ngIf="productItems.length == 0">\n      <ion-col>\n        <ion-card>\n          <ion-card-content text-center padding>\n            No items in this category\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-row>\n    <ion-row class="vertical-scroll" *ngIf="productItems.length > 0">\n      <ion-col col-6 *ngFor="let item of productItems">\n        <ion-card (click)="viewProduct(item.id);">\n          <img src={{item.image}} />\n          <ion-card-content>\n            <ion-row>\n              <ion-col class="product-name">\n                {{item.name}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                $ {{item.price}}\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_categories_categories__["a" /* CategoriesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ })

});
//# sourceMappingURL=2.js.map