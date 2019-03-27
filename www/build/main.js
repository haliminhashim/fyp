webpackJsonp([18],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories__ = __webpack_require__(55);
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



var ProductsProvider = /** @class */ (function () {
    function ProductsProvider(http, categoriesProvider) {
        this.http = http;
        this.categoriesProvider = categoriesProvider;
        this.apiUrl = 'http://localhost:3000';
    }
    ProductsProvider.prototype.getProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/products/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ProductsProvider.prototype.getProductsByCategory = function (parentId, number) {
        return __awaiter(this, void 0, void 0, function () {
            var ids, query, index, category;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = [];
                        return [4 /*yield*/, this.categoriesProvider.getCategories().then(function (data) {
                                var categories = data;
                                var index = 0;
                                ids.push(parentId);
                                while (index < ids.length) {
                                    categories.forEach(function (category) {
                                        if (category.parentId == ids[index])
                                            ids.push(category.id);
                                    });
                                    index++;
                                }
                            })];
                    case 1:
                        _a.sent();
                        query = "";
                        for (index = 0; index < ids.length; index++) {
                            console.log(ids[index]);
                            category = ids[index];
                            query += "categoryId=" + category + "&";
                        }
                        query += "categoryId=" + parentId + "&" + "_page=" + number + "&_limit=6";
                        return [2 /*return*/, new Promise(function (resolve) {
                                _this.http.get(_this.apiUrl + '/products?' + query).subscribe(function (data) {
                                    resolve(data);
                                }, function (err) {
                                    console.log(err);
                                });
                            })];
                }
            });
        });
    };
    ProductsProvider.prototype.getProducts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/products').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ProductsProvider.prototype.getProductsByPage = function (number) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/products?_page=' + number + "&limit=4").subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ProductsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__categories_categories__["a" /* CategoriesProvider */]])
    ], ProductsProvider);
    return ProductsProvider;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_password_validators__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_bigchaindb_bigchaindb__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { EmailValidator } from '../../validators/email.validators';
var SignupPage = /** @class */ (function () {
    function SignupPage(bigchaindbProvider, navCtrl, navParams, usersProvider, toastCtrl, formBuilder) {
        this.bigchaindbProvider = bigchaindbProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersProvider = usersProvider;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.validation_messages = {
            'firstname': [
                { type: 'required', message: 'First Name is required.' }
            ],
            'lastname': [
                { type: 'required', message: 'Last name is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
                //{ type: 'validEmail', message: 'An account with the email already exist.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' }
            ],
            'matching_passwords': [
                { type: 'areEqual', message: 'Password mismatch' }
            ],
        };
    }
    SignupPage.prototype.ionViewWillLoad = function () {
        this.matching_passwords_group = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        }, function (formGroup) {
            return __WEBPACK_IMPORTED_MODULE_5__validators_password_validators__["a" /* PasswordValidator */].areEqual(formGroup);
        });
        this.validations_form = this.formBuilder.group({
            firstname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            matching_passwords: this.matching_passwords_group,
        });
    };
    SignupPage.prototype.onSubmit = function (values) {
        var _this = this;
        var json = {
            "id": null,
            "email": values.email,
            "firstname": values.firstname,
            "lastname": values.lastname,
            "password": values.matching_passwords.password,
            "gender": "",
            "dob": "",
            "defaultBillingAddress": null,
            "defaultShippingAddress": null,
            "keys": this.bigchaindbProvider.createKeys()
        };
        this.usersProvider.create(json).then(function (data) {
            if (data) {
                _this.presentToast("Account has been created");
                _this.gotoLogin();
            }
            else
                _this.presentToast("Unable to create account. Please try again");
        });
    };
    SignupPage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\signup\signup.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton color="primary">\n    <ion-title text-center>Trollee</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid margin-top>\n    <ion-row text-center>\n      <ion-col>\n        <h3>Create your account</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]="validations_form">\n          <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input formControlName="email" type="email"></ion-input>\n\n          </ion-item>\n          <div class="validation-errors">\n            <ng-container *ngFor="let validation of validation_messages.email">\n              <div class="error-message" *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <ion-item>\n            <ion-label stacked>First Name</ion-label>\n            <ion-input formControlName="firstname" type="text"></ion-input>\n\n          </ion-item>\n          <div class="validation-errors">\n            <ng-container *ngFor="let validation of validation_messages.firstname">\n              <div class="error-message" *ngIf="validations_form.get(\'firstname\').hasError(validation.type) && (validations_form.get(\'firstname\').dirty || validations_form.get(\'firstname\').touched)">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <ion-item>\n            <ion-label stacked>Last Name</ion-label>\n            <ion-input formControlName="lastname" type="text"></ion-input>\n\n          </ion-item>\n          <div class="validation-errors">\n            <ng-container *ngFor="let validation of validation_messages.lastname">\n              <div class="error-message" *ngIf="validations_form.get(\'lastname\').hasError(validation.type) && (validations_form.get(\'lastname\').dirty || validations_form.get(\'lastname\').touched)">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <div formGroupName="matching_passwords">\n            <ion-item>\n              <ion-label stacked color="primary">Password</ion-label>\n              <ion-input type="password" formControlName="password"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.password">\n                <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'password\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'password\').dirty || validations_form.get(\'matching_passwords\').get(\'password\').touched)">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n      \n            <ion-item>\n              <ion-label stacked color="primary">Confirm Password</ion-label>\n              <ion-input type="password" formControlName="confirm_password"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.confirm_password">\n                <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'confirm_password\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'confirm_password\').dirty || validations_form.get(\'matching_passwords\').get(\'confirm_password\').touched)">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n          </div>\n          <!-- These validations are for the form group -->\n          <div class="validation-errors">\n            <ng-container *ngFor="let validation of validation_messages.matching_passwords">\n              <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'confirm_password\').dirty || validations_form.get(\'matching_passwords\').get(\'confirm_password\').touched)">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <!-- <div class="error-message" *ngIf="!user.controls.cpassword.valid && submitAttempt">\n              <li>Confirm password does not match</li>\n          </div> -->\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block type="submit" type="submit" [disabled]="!validations_form.valid" (click)="onSubmit(validations_form.value)">Create Account</button>\n      </ion-col>\n    </ion-row>\n    <ion-row text-center>\n      <ion-col>\n        Already have an account?\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="dark" (click)="gotoLogin();">Login to account</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_bigchaindb_bigchaindb__["a" /* BigchaindbProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		287,
		16
	],
	"../pages/address-details/address-details.module": [
		289,
		15
	],
	"../pages/address-picker/address-picker.module": [
		288,
		14
	],
	"../pages/address/address.module": [
		290,
		13
	],
	"../pages/cart/cart.module": [
		291,
		12
	],
	"../pages/checkout/checkout.module": [
		292,
		11
	],
	"../pages/create-address/create-address.module": [
		293,
		10
	],
	"../pages/groupbuy-confirmation/groupbuy-confirmation.module": [
		294,
		9
	],
	"../pages/groupbuy/groupbuy.module": [
		295,
		8
	],
	"../pages/groupbuys/groupbuys.module": [
		296,
		7
	],
	"../pages/home/home.module": [
		161
	],
	"../pages/login/login.module": [
		162
	],
	"../pages/mygroup/mygroup.module": [
		297,
		6
	],
	"../pages/order-details/order-details.module": [
		298,
		5
	],
	"../pages/order/order.module": [
		299,
		4
	],
	"../pages/product-options/product-options.module": [
		300,
		3
	],
	"../pages/product/product.module": [
		301,
		2
	],
	"../pages/products/products.module": [
		302,
		1
	],
	"../pages/signup/signup.module": [
		303,
		17
	],
	"../pages/tabs/tabs.module": [
		304,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddressesProvider = /** @class */ (function () {
    function AddressesProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000';
    }
    AddressesProvider.prototype.getAddressesByUserId = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/addresses?userId=' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AddressesProvider.prototype.getAddress = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/addresses/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AddressesProvider.prototype.create = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/addresses', JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AddressesProvider.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.apiUrl + '/addresses/' + id, {
                headers: { 'Content-Type': 'application/json' }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AddressesProvider.prototype.update = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.apiUrl + '/addresses/' + data.id, JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AddressesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AddressesProvider);
    return AddressesProvider;
}());

//# sourceMappingURL=addresses.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartsProvider = /** @class */ (function () {
    function CartsProvider(http, usersProvider) {
        this.http = http;
        this.usersProvider = usersProvider;
        this.apiUrl = 'http://localhost:3000';
        this.cart = [];
        this.cartid = 0;
        this.user = this.usersProvider.currentUser();
    }
    CartsProvider.prototype.getCartByUserId = function (userId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/carts?userId=' + userId).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CartsProvider.prototype.addToCart = function (product) {
        var _this = this;
        this.user = this.usersProvider.currentUser();
        this.getCartByUserId(this.user.id).then(function (data) {
            var exist = false;
            _this.json = data;
            var products = _this.json;
            for (var index = 0; index < products.length; index++) {
                var element = products[index];
                var item = JSON.parse(JSON.stringify(element.product));
                item.quantity = 1;
                if (JSON.stringify(item) === JSON.stringify(product)) {
                    element.product.quantity += 1;
                    _this.update(element);
                    exist = true;
                }
            }
            ;
            if (!exist) {
                var json = {
                    "userId": _this.user.id,
                    "product": product
                };
                _this.create(json);
            }
        });
        return this.getCartByUserId(this.user.id);
    };
    CartsProvider.prototype.updateQuantity = function (product) {
        var _this = this;
        this.getCartByUserId(this.user.id).then(function (data) {
            _this.json = data;
            for (var index = 0; index < _this.json.length; index++) {
                var element = _this.json[index];
                var item = JSON.parse(JSON.stringify(element.product));
                item.quantity = product.quantity;
                if (JSON.stringify(item) === JSON.stringify(product)) {
                    element.product.quantity = product.quantity;
                    _this.update(element);
                }
            }
            ;
        });
    };
    CartsProvider.prototype.create = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/carts', JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CartsProvider.prototype.update = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.apiUrl + '/carts/' + data.id, JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CartsProvider.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.apiUrl + '/carts/' + id, {
                headers: { 'Content-Type': 'application/json' }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CartsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__users_users__["a" /* UsersProvider */]])
    ], CartsProvider);
    return CartsProvider;
}());

//# sourceMappingURL=carts.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersProvider = /** @class */ (function () {
    function OrdersProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000';
    }
    OrdersProvider.prototype.getOrdersByUserId = function (userId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/orders?userId=' + userId).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    OrdersProvider.prototype.getOrder = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/orders/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    OrdersProvider.prototype.create = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/orders', JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    OrdersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], OrdersProvider);
    return OrdersProvider;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_products_products__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_categories_categories__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_carts_carts__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_addresses_addresses__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_orders_orders__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_bigchaindb_bigchaindb__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address-picker/address-picker.module#AddressPickerPageModule', name: 'AddressPickerPage', segment: 'address-picker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address-details/address-details.module#AddressDetailsPageModule', name: 'AddressDetailsPage', segment: 'address-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-address/create-address.module#CreateAddressPageModule', name: 'CreateAddressPage', segment: 'create-address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groupbuy-confirmation/groupbuy-confirmation.module#GroupbuyConfirmationPageModule', name: 'GroupbuyConfirmationPage', segment: 'groupbuy-confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groupbuy/groupbuy.module#GroupbuyPageModule', name: 'GroupbuyPage', segment: 'groupbuy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groupbuys/groupbuys.module#GroupbuysPageModule', name: 'GroupbuysPage', segment: 'groupbuys', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mygroup/mygroup.module#MygroupPageModule', name: 'MygroupPage', segment: 'mygroup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-options/product-options.module#ProductOptionsPageModule', name: 'ProductOptionsPage', segment: 'product-options', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product/:data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__["LoginPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_products_products__["a" /* ProductsProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_categories_categories__["a" /* CategoriesProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_users_users__["a" /* UsersProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_carts_carts__["a" /* CartsProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_addresses_addresses__["a" /* AddressesProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_orders_orders__["a" /* OrdersProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_bigchaindb_bigchaindb__["a" /* BigchaindbProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    PasswordValidator.areEqual = function (formGroup) {
        var val;
        var valid = true;
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    };
    return PasswordValidator;
}());

//# sourceMappingURL=password.validators.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_categories_categories__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events, usersProvider, categoriesProvider, modalCtrl) {
        var _this = this;
        this.events = events;
        this.usersProvider = usersProvider;
        this.categoriesProvider = categoriesProvider;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.categories = [];
        this.user = {
            "id": 0,
            "username": "",
            "password": "",
            "email": "",
            "firstname": "",
            "lastname": "",
            "gender": "",
            "dob": "",
            "defaultBillingAddress": 0,
            "defaultShippingAddress": 0
        };
        platform.ready().then(function () {
            statusBar;
            splashScreen.hide();
        });
        this.categoriesProvider.getMainCategories().then(function (data) {
            _this.categories = data;
        });
        ;
        this.events.subscribe('user:login', function (user) {
            _this.user = user;
        });
    }
    MyApp.prototype.viewCategory = function (tcategory) {
        this.nav.push('ProductsPage', {
            id: tcategory.id,
        });
    };
    MyApp.prototype.viewGroupBuy = function () {
        if (this.user.id != 0)
            this.nav.push('GroupbuysPage');
        else
            this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.viewAccount = function () {
        if (this.user.id != 0) {
            this.nav.push('TabsPage');
        }
        else
            this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.viewCart = function () {
        this.nav.push('CartPage');
    };
    MyApp.prototype.viewOrder = function () {
        if (this.user.id != 0)
            this.nav.push('OrderPage');
        else
            this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.logout = function () {
        this.usersProvider.logout();
        this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.login = function () {
        this.nav.setRoot('LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\app\app.html"*/'<ion-menu [content]="mycontent">\n\n  <ion-header>\n\n    <ion-toolbar text-center color="primary">\n      <ion-title>Trollee</ion-title>\n      <ion-buttons right>\n        <button ion-button icon-only menuClose>\n          <ion-icon name="close" color="secondary"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons left>\n        <button class="createUser" ion-button icon-only>\n          <ion-icon name="" color="secondary"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col *ngIf="user.id > 0" style="font-size: 1.2em">Hi, {{user.firstname}}</ion-col>\n        <ion-col *ngIf="user.id <= 0">Hi, Guest</ion-col>\n\n        <ion-col *ngIf="user.id > 0" col-3 text-center (click)="logout()" menuClose> \n          <div>Logout</div>\n        </ion-col>\n        <ion-col *ngIf="user.id <= 0" col-3 text-center (click)="login()" menuClose>\n          Login\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3 text-center class="nav-fast-dial" (click)="viewOrder()" menuClose>\n          <ion-icon name="md-list" color="primary"></ion-icon>\n          <div class="nav-fast-dial-text">Orders</div>\n        </ion-col>\n        <ion-col col-3 text-center class="nav-fast-dial" (click)="viewAccount()" menuClose>\n          <ion-icon name="person" color="primary"></ion-icon>\n          <div class="nav-fast-dial-text">Account</div>\n        </ion-col>\n        <ion-col col-3 text-center class="nav-fast-dial" (click)="viewCart()" menuClose>\n          <ion-icon name="cart" color="primary"></ion-icon>\n          <div class="nav-fast-dial-text">Cart</div>\n        </ion-col>\n        <ion-col col-3 text-center class="nav-fast-dial" (click)="viewGroupBuy()" menuClose>\n          <ion-icon name="people" color="primary"></ion-icon>\n          <div class="nav-fast-dial-text">Group Buy</div>\n        </ion-col>\n        <ion-col col-3 text-center class="nav-fast-dial" menuClose>\n          <ion-icon name="help-circle" color="primary"></ion-icon>\n          <div class="nav-fast-dial-text">Help</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-list-header no-lines color="primary" class="menu-categories">\n      <h2>Categories</h2>\n    </ion-list-header>\n\n  </ion-header>\n\n  <ion-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-list>\n            <div *ngFor="let category of categories">\n              <button (click)="viewCategory(category)" menuClose ion-item>\n                {{category.name}}\n              </button>\n            </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #mycontent swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_users_users__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_categories_categories__["a" /* CategoriesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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


var UsersProvider = /** @class */ (function () {
    function UsersProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000';
        this.user = this.user = {
            "id": 0,
            "username": "",
            "password": "",
            "email": "",
            "firstname": "",
            "lastname": "",
            "gender": "",
            "dob": "",
            "defaultBillingAddress": null,
            "defaultShippingAddress": null
        };
    }
    UsersProvider.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/users').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    UsersProvider.prototype.getUser = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/users/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    UsersProvider.prototype.getUserByEmail = function (email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/users?email=' + email).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    UsersProvider.prototype.create = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/users', JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UsersProvider.prototype.update = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.apiUrl + '/users/' + data.id, JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' }
            })
                .subscribe(function (data) {
                _this.user = data;
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    UsersProvider.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var temp;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserByEmail(email)
                            .then(function (data) {
                            temp = data;
                            for (var index = 0; index < temp.length; index++) {
                                if (data[index].email == email && temp[index].password == password) {
                                    _this.user = temp[index];
                                    break;
                                }
                                else {
                                    _this.user = null;
                                }
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.user];
                }
            });
        });
    };
    UsersProvider.prototype.logout = function () {
        this.user = {
            "id": 0,
            "username": "",
            "password": "",
            "email": "",
            "firstname": "",
            "lastname": "",
            "gender": "",
            "dob": "",
            "defaultBillingAddress": 0,
            "defaultShippingAddress": 0
        };
    };
    UsersProvider.prototype.currentUser = function () {
        return this.user;
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_products__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, modalCtrl, productsProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.productsProvider = productsProvider;
        this.products = [];
        this.daily = [];
        this.page = 1;
        this.scrollChecker = true;
        this.productsProvider.getProductsByPage(this.page).then(function (data) {
            _this.page += 1;
            _this.products = data;
        });
        this.productsProvider.getProducts().then(function (data) {
            _this.daily = JSON.parse(JSON.stringify(data));
        });
    }
    HomePage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (_this.scrollChecker)
                    _this.productsProvider.getProductsByPage(_this.page).then(function (data) {
                        var additionalProducts = data;
                        if (additionalProducts.length != 0) {
                            additionalProducts.forEach(function (product) {
                                _this.products.push(product);
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
    HomePage.prototype.viewCart = function () {
        this.navCtrl.push('CartPage');
    };
    HomePage.prototype.pushGroupBuy = function () {
        this.navCtrl.push('GroupbuysPage');
    };
    HomePage.prototype.viewProduct = function (id) {
        this.navCtrl.push('ProductPage', {
            data: id
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-searchbar placeholder="Search"></ion-searchbar>\n    <ion-buttons right (click)="viewCart()">\n      <button ion-button icon-only>\n        <ion-icon name="cart" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-slides>\n      <ion-slide>\n        <img src="https://pixabay.com/get/e83db60a2ffd013ed1534705fb0938c9bd22ffd41cb412459df2c47ba7/black-friday-1875790_1920.png" />\n      </ion-slide>\n      <ion-slide>\n        <img src="https://pixabay.com/get/e83db60721f0043ed1534705fb0938c9bd22ffd41cb412459df2c478a1/black-friday-1878945_1920.png" />\n      </ion-slide>\n    </ion-slides>\n  </ion-list>\n  <ion-grid>\n    <ion-row>\n      <ion-col padding-left>\n        <h5>Daily Deals</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row nowrap class="horizontal-scroll">\n      <ion-col col-5 *ngFor="let item of daily">\n        <ion-card (click)="viewProduct(item.id);">\n          <img src={{item.image}} />\n          <ion-card-content color="dark">\n            <ion-row>\n              <ion-col class="product-name">\n                {{item.name}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                $ {{item.price | number:\'1.2-2\'}}\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <img src="https://pixabay.com/get/e83db80729f5053ed1534705fb0938c9bd22ffd41cb412459df2c570a4/black-friday-1898114_1920.jpg" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col padding-left>\n        <h5>Recommended</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row class="vertical-scroll">\n      <ion-col col-6 *ngFor="let item of products">\n        <ion-card (click)="viewProduct(item.id);">\n          <img src={{item.image}} />\n          <ion-card-content color="dark">\n            <ion-row>\n              <ion-col class="product-name">\n                {{item.name}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                $ {{item.price | number:\'1.2-2\'}}\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigchaindbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bigchaindb_driver__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bigchaindb_driver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bigchaindb_driver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the BigchaindbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BigchaindbProvider = /** @class */ (function () {
    function BigchaindbProvider(http) {
        this.http = http;
        this.apiUrl = 'https://test.bigchaindb.com/api/v1/';
        this.apiUrl2 = 'http://localhost:3000';
        console.log('Hello BigchaindbProvider Provider');
    }
    BigchaindbProvider.prototype.getTrasanction = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'transactions/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    BigchaindbProvider.prototype.create = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl2 + '/groupBuy', JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BigchaindbProvider.prototype.searchTransaction = function (query) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'assets/?search=' + query).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    BigchaindbProvider.prototype.createKeys = function () {
        return new __WEBPACK_IMPORTED_MODULE_2_bigchaindb_driver__["Ed25519Keypair"]();
    };
    BigchaindbProvider.prototype.createGroupBuy = function () {
        var _this = this;
        var user = {
            "publicKey": "BPcvGEeG5u8U2RPNww2X5QhMnJRQ7vX2JqD7yY55PQyY",
            "privateKey": "6t9DK7eb2azS62skzG7WttK4LErBZNwobRMWmBTHUrVv"
        };
        var assetdata = {
            "type": "trlgrpbuy",
            "id": "trlgrpbuy3",
            "expiry": 1553904000,
            "tiers": [{
                    "level": 1,
                    "amount": 3,
                    "discount": 20
                },
                {
                    "level": 2,
                    "amount": 5,
                    "discount": 30
                }, {
                    "level": 3,
                    "amount": 10,
                    "discount": 60
                }],
            "product": {
                "id": 3,
                "image": "https://i.expansys.net/img/b/313404/google-pixel-3-xl-g013c.jpg",
                "name": "Pixel 3 XL",
                "price": 1199.99,
                "rating": 4,
                "categoryId": 6,
                "make": "Google",
                "quantity": 1,
                "confirm": true,
                "option": [
                    {
                        "title": "Storage Size",
                        "selected": "128 GB",
                        "type": [
                            {
                                "value": "64 GB"
                            },
                            {
                                "value": "128 GB"
                            }
                        ]
                    },
                    {
                        "title": "Colour",
                        "selected": "Not Pink",
                        "type": [
                            {
                                "value": "Clearly White"
                            },
                            {
                                "value": "Just Black"
                            },
                            {
                                "value": "Not Pink"
                            }
                        ]
                    }
                ],
                "spec": [
                    {
                        "type": "Colour",
                        "value": "Gold / Silver / Space Grey"
                    },
                    {
                        "type": "Screen Size",
                        "value": "6.5 inch / 16.5 cm"
                    },
                    {
                        "type": "Sim Count",
                        "value": "Dual Sim"
                    },
                    {
                        "type": "Network",
                        "value": "4 GB"
                    }
                ]
            },
            "quantity": 100
        };
        var metadata = {
            'planet': 'earth'
        };
        var signedTransaction = this.createSignedTransaction(assetdata, metadata, user);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'transactions?mode=sync', JSON.stringify(signedTransaction), {
                headers: { 'Content-Type': 'application/json' }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BigchaindbProvider.prototype.joinGroupBuy = function (data) {
        var _this = this;
        var assetdata = {
            "type": "trlprtcp",
            "groupBuyId": data.groupBuyId,
            "email": data.email,
            "quantity": data.quantity,
            "paymentDetails": data.payment,
            "shippingDetails": data.shipping,
            "referral": data.referral,
            "action": "Join",
            "inviteCode": data.inviteCode
        };
        var metadata = {
            'planet': 'earth'
        };
        var signedTransaction = this.createSignedTransaction(assetdata, metadata, data.keys);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + 'transactions?mode=sync', JSON.stringify(signedTransaction), {
                headers: { 'Content-Type': 'application/json' }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BigchaindbProvider.prototype.createSignedTransaction = function (assetdata, metadata, user) {
        var baseTransaction = __WEBPACK_IMPORTED_MODULE_2_bigchaindb_driver__["Transaction"].makeCreateTransaction(assetdata, metadata, [__WEBPACK_IMPORTED_MODULE_2_bigchaindb_driver__["Transaction"].makeOutput(__WEBPACK_IMPORTED_MODULE_2_bigchaindb_driver__["Transaction"].makeEd25519Condition(user.publicKey))], user.publicKey);
        return __WEBPACK_IMPORTED_MODULE_2_bigchaindb_driver__["Transaction"].signTransaction(baseTransaction, user.privateKey);
    };
    BigchaindbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BigchaindbProvider);
    return BigchaindbProvider;
}());

//# sourceMappingURL=bigchaindb.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_bigchaindb_bigchaindb__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(bigchaindbProvider, navCtrl, navParams, usersProvider, toastCtrl, events, formBuilder) {
        this.bigchaindbProvider = bigchaindbProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersProvider = usersProvider;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.formBuilder = formBuilder;
        this.loginForm = this.formBuilder.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required])],
            password: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]
        });
        this.submitAttempt = false;
    }
    LoginPage.prototype.gotoSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.submitAttempt = true;
        this.usersProvider.login(this.loginForm.value.email, this.loginForm.value.password).then(function (data) {
            if (data) {
                _this.events.publish("user:login", data);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else
                _this.presentToast("Invalid Email / Password");
        });
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: "bottom"
        });
        toast.onDidDismiss(function () {
            console.log("Dismissed toast");
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar hideBackButton color="primary">\n    <ion-title text-center>Trollee</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid margin-top>\n    <ion-row text-center>\n      <ion-col>\n        <h3>Sign in to your account</h3>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]="loginForm">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input formControlName="email" type="email"></ion-input>\n          </ion-item>\n          <div class="error-message" *ngIf="loginForm.controls.email.errors && submitAttempt">\n            <li *ngIf="loginForm.controls.email.errors.email">\n              Invalid Email Address\n            </li>\n            <li *ngIf="loginForm.controls.email.errors.required">\n              Email field is required\n            </li>\n          </div>\n          <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input formControlName="password" type="password"></ion-input>\n          </ion-item>\n          <div class="error-message" *ngIf="loginForm.controls.email.errors && submitAttempt">\n            <li>Password field is required</li>\n          </div>\n        </ion-col>\n      </ion-row>\n    </form>\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="login();">Login</button>\n      </ion-col>\n    </ion-row>\n    <ion-row text-center>\n      <ion-col>\n        Don\'t have an account?\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="dark" (click)="gotoSignup();">Create an account</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_bigchaindb_bigchaindb__["a" /* BigchaindbProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_users_users__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesProvider = /** @class */ (function () {
    function CategoriesProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000';
        this.categories = [];
    }
    CategoriesProvider.prototype.getMainCategories = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/categories?parentId=0').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CategoriesProvider.prototype.getSubCategories = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/categories?parentId=' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CategoriesProvider.prototype.getCategory = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/categories/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CategoriesProvider.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/categories').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CategoriesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CategoriesProvider);
    return CategoriesProvider;
}());

//# sourceMappingURL=categories.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map