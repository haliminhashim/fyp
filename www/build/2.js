webpackJsonp([2],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */]),
            ],
        })
    ], ProductPageModule);
    return ProductPageModule;
}());

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carts_carts__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_products_products__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_users__ = __webpack_require__(34);
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






var ProductPage = /** @class */ (function () {
    function ProductPage(bigchaindbProvider, navCtrl, navParams, viewCtrl, modalCtrl, toastCtrl, cartsProvider, usersProvider, productsProvider) {
        var _this = this;
        this.bigchaindbProvider = bigchaindbProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.cartsProvider = cartsProvider;
        this.usersProvider = usersProvider;
        this.productsProvider = productsProvider;
        this.product = {
            "id": 0,
            "image": "https://via.placeholder.com/750",
            "name": "Product Name",
            "price": 9999.99,
            "categoryId": 0,
            "make": "Product Make",
            "option": [],
            "spec": []
        };
        this.transaction = {};
        this.result = {};
        this.productsProvider.getProducts().then(function (data) {
            _this.products = data;
            _this.related = data;
            _this.sameseller = data;
        });
        this.productsProvider.getProduct(this.navParams.get('data')).then(function (data) {
            _this.product = data;
        });
    }
    ProductPage.prototype.getTransaction = function (id) {
        this.bigchaindbProvider.getTrasanction("06cc7655afde40748b456a566f7c452b55443ef6ae1bfd5cfca4b9e3e36ae592").then(function (data) {
            console.log(data);
        });
    };
    ProductPage.prototype.optionModal = function (product) {
        var _this = this;
        var modalPage = this.modalCtrl.create('ProductOptionsPage', {
            data: product
        });
        modalPage.onDidDismiss(function (data) {
            _this.product = data;
        });
        modalPage.present();
    };
    ProductPage.prototype.addToCart = function (product) {
        var count = 0;
        product.option.forEach(function (option) {
            if (option.selected != "")
                count = count + 1;
        });
        if (count == product.option.length) {
            this.cartsProvider.addToCart(product);
            this.presentToast('Sucessfully added to cart');
        }
        else
            this.presentToast('Select all product option');
    };
    ProductPage.prototype.presentToast = function (msg) {
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
    ProductPage.prototype.viewProduct = function (id) {
        this.navCtrl.push('ProductPage', {
            data: id
        });
    };
    ProductPage.prototype.viewCart = function () {
        this.navCtrl.push('CartPage');
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\product\product.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-searchbar placeholder="Search"></ion-searchbar>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="viewCart()">\n        <ion-icon name="cart" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <img src="{{ product.image }}" />\n          <ion-card-header>\n            {{ product.make }}\n          </ion-card-header>\n          <ion-card-content>\n            <p>{{ product.name }}</p>\n            <p>$ {{ product.price | number:\'1.2-2\'}}</p>\n          </ion-card-content>\n          <ion-row>\n            <ion-col>\n              <button ion-button outline block icon-end (click)="optionModal(product)">\n                Options\n                <ion-icon name="arrow-dropright"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <h5>Selected Options:</h5>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor="let option of product.option">\n            <ion-col>\n              {{option.title}}\n            </ion-col>\n            <ion-col *ngIf="option.selected != \'\'">\n              {{option.selected}}\n            </ion-col>\n            <ion-col *ngIf="option.selected == \'\'">\n              None\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <button ion-button block>Buy Now</button>\n            </ion-col>\n            <ion-col>\n              <button ion-button block color="light" (click)="addToCart(product)" >Add to Cart</button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col padding-left>\n        <h5>Related Products</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row nowrap class="horizontal-scroll">\n      <ion-col padding-left class="card-scroll" col-5 *ngFor="let item of related">\n        <ion-card (click)="viewProduct(item.id);">\n          <img src={{item.image}} />\n          <ion-card-content>\n            <ion-row>\n              <ion-col class="product-name">\n                  {{item.name}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                $ {{item.price | number:\'1.2-2\'}}\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col padding-left >\n        <h5>Specification</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col padding-left padding-right>\n        <ion-row class="spec-item" *ngFor="let item of product.spec">\n          <ion-col>{{ item.type }}</ion-col>\n          <ion-col>{{ item.value }}</ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col padding-left>\n        <h5>From Same Seller</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row nowrap class="horizontal-scroll">\n      <ion-col padding-left class="card-scroll" col-5 *ngFor="let item of sameseller">\n        <ion-card (click)="viewProduct(item.productid);">\n          <img src={{item.image}} />\n          <ion-card-content>\n            <ion-row>\n              <ion-col class="product-name">\n                  {{item.name}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                $ {{item.price | number:\'1.2-2\'}}\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_bigchaindb_bigchaindb__["a" /* BigchaindbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_carts_carts__["a" /* CartsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ })

});
//# sourceMappingURL=2.js.map