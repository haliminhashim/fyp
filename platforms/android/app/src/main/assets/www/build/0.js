webpackJsonp([0],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_paypal_ngx__ = __webpack_require__(299);
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
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_paypal_ngx__["a" /* PayPal */]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PayPalPayment; });
/* unused harmony export PayPalItem */
/* unused harmony export PayPalPaymentDetails */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PayPalConfiguration; });
/* unused harmony export PayPalShippingAddress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(106);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PayPal = /** @class */ (function (_super) {
    __extends(PayPal, _super);
    function PayPal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPal.prototype.version = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "version", {}, arguments); };
    PayPal.prototype.init = function (clientIdsForEnvironments) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "init", {}, arguments); };
    PayPal.prototype.prepareToRender = function (environment, configuration) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "prepareToRender", {}, arguments); };
    PayPal.prototype.renderSinglePaymentUI = function (payment) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "renderSinglePaymentUI", {}, arguments); };
    PayPal.prototype.clientMetadataID = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "clientMetadataID", {}, arguments); };
    PayPal.prototype.renderFuturePaymentUI = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "renderFuturePaymentUI", {}, arguments); };
    PayPal.prototype.renderProfileSharingUI = function (scopes) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "renderProfileSharingUI", {}, arguments); };
    PayPal.pluginName = "PayPal";
    PayPal.plugin = "com.paypal.cordova.mobilesdk";
    PayPal.pluginRef = "PayPalMobile";
    PayPal.repo = "https://github.com/paypal/PayPal-Cordova-Plugin";
    PayPal.platforms = ["Android", "iOS"];
    PayPal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], PayPal);
    return PayPal;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

var PayPalPayment = /** @class */ (function () {
    function PayPalPayment(amount, currency, shortDescription, intent, details) {
        /**
         * Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
         * for your tracking purposes.
         */
        this.bnCode = 'PhoneGap_SP';
        this.amount = amount;
        this.currency = currency;
        this.shortDescription = shortDescription;
        this.intent = intent;
        this.details = details;
    }
    return PayPalPayment;
}());

var PayPalItem = /** @class */ (function () {
    /**
     * The PayPalItem class defines an optional itemization for a payment.
     * @see https://developer.paypal.com/docs/api/#item-object for more details.
     * @param {String} name: Name of the item. 127 characters max
     * @param {Number} quantity: Number of units. 10 characters max.
     * @param {String} price: Unit price for this item 10 characters max.
     * May be negative for "coupon" etc
     * @param {String} currency: ISO standard currency code.
     * @param {String} sku: The stock keeping unit for this item. 50 characters max (optional)
     */
    function PayPalItem(name, quantity, price, currency, sku) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.currency = currency;
        this.sku = sku;
    }
    return PayPalItem;
}());

var PayPalPaymentDetails = /** @class */ (function () {
    /**
     * The PayPalPaymentDetails class defines optional amount details.
     * @param {String} subtotal: Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
     * @param {String} shipping: Amount charged for shipping. 10 characters max with support for 2 decimal places.
     * @param {String} tax: Amount charged for tax. 10 characters max with support for 2 decimal places.
     */
    function PayPalPaymentDetails(subtotal, shipping, tax) {
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.tax = tax;
    }
    return PayPalPaymentDetails;
}());

var PayPalConfiguration = /** @class */ (function () {
    /**
     * You use a PayPalConfiguration object to configure many aspects of how the SDK behaves.
     * see defaults for options available
     */
    function PayPalConfiguration(options) {
        var defaults = {
            defaultUserEmail: null,
            defaultUserPhoneCountryCode: null,
            defaultUserPhoneNumber: null,
            merchantName: null,
            merchantPrivacyPolicyURL: null,
            merchantUserAgreementURL: null,
            acceptCreditCards: true,
            payPalShippingAddressOption: 0,
            rememberUser: true,
            languageOrLocale: null,
            disableBlurWhenBackgrounding: false,
            presentingInPopover: false,
            forceDefaultsInSandbox: false,
            sandboxUserPassword: null,
            sandboxUserPin: null
        };
        if (options && typeof options === 'object') {
            for (var i in options) {
                if (defaults.hasOwnProperty(i)) {
                    defaults[i] = options[i];
                }
            }
        }
        return defaults;
    }
    return PayPalConfiguration;
}());

var PayPalShippingAddress = /** @class */ (function () {
    /**
     * See the documentation of the individual properties for more detail.
     * @param {String} recipientName: Name of the recipient at this address. 50 characters max.
     * @param {String} line1: Line 1 of the address (e.g., Number, street, etc). 100 characters max.
     * @param {String} line2: Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
     * @param {String} city: City name. 50 characters max.
     * @param {String} state: 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
     * @param {String} postalCode: ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
     * @param {String} countryCode: 2-letter country code. 2 characters max.
     */
    function PayPalShippingAddress(recipientName, line1, line2, city, state, postalCode, countryCode) {
        this.recipientName = recipientName;
        this.line1 = line1;
        this.line2 = line2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.countryCode = countryCode;
    }
    return PayPalShippingAddress;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3BheXBhbC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF5RTVDLDBCQUFpQjs7OztJQU0zQyx3QkFBTztJQWNQLHFCQUFJLGFBQUMsd0JBQTJDO0lBY2hELGdDQUFlLGFBQUMsV0FBbUIsRUFBRSxhQUFrQztJQWF2RSxzQ0FBcUIsYUFBQyxPQUFzQjtJQWU1QyxpQ0FBZ0I7SUFTaEIsc0NBQXFCO0lBWXJCLHVDQUFzQixhQUFDLE1BQWdCOzs7Ozs7SUFuRjVCLE1BQU07UUFEbEIsVUFBVSxFQUFFO09BQ0EsTUFBTTtpQkExRW5CO0VBMEU0QixpQkFBaUI7U0FBaEMsTUFBTTs7SUFvSmpCLHVCQUFZLE1BQWMsRUFBRSxRQUFnQixFQUFFLGdCQUF3QixFQUFFLE1BQWMsRUFBRSxPQUE4QjtRQW5DdEg7OztXQUdHO1FBQ0gsV0FBTSxHQUFHLGFBQWEsQ0FBQztRQWdDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7d0JBcE9IOzs7O0lBZ1FFOzs7Ozs7Ozs7T0FTRztJQUNILG9CQUFZLElBQVksRUFBRSxRQUFnQixFQUFFLEtBQWEsRUFBRSxRQUFnQixFQUFFLEdBQVk7UUFDdkYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztxQkFoUkg7Ozs7SUFvU0U7Ozs7O09BS0c7SUFDSCw4QkFBWSxRQUFnQixFQUFFLFFBQWdCLEVBQUUsR0FBVztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDOytCQTlTSDs7OztJQTZaRTs7O09BR0c7SUFDSCw2QkFBWSxPQUFvQztRQUU5QyxJQUFNLFFBQVEsR0FBK0I7WUFDM0MsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QiwyQkFBMkIsRUFBRSxJQUFJO1lBQ2pDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsd0JBQXdCLEVBQUUsSUFBSTtZQUM5Qix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsMkJBQTJCLEVBQUUsQ0FBQztZQUM5QixZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLDRCQUE0QixFQUFFLEtBQUs7WUFDbkMsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixzQkFBc0IsRUFBRSxLQUFLO1lBQzdCLG1CQUFtQixFQUFFLElBQUk7WUFDekIsY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQztRQUVGLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMxQyxLQUFLLElBQU0sQ0FBQyxJQUFJLE9BQU8sRUFBRTtnQkFDdkIsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUM5QixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxQjthQUNGO1NBQ0Y7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzhCQTliSDs7OztJQWtlRTs7Ozs7Ozs7O09BU0c7SUFDSCwrQkFBWSxhQUFxQixFQUFFLEtBQWEsRUFBRSxLQUFhLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxVQUFrQixFQUFFLFdBQW1CO1FBQ25JLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7Z0NBcGZIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgUGF5UGFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBheVBhbCBwbHVnaW4gZm9yIENvcmRvdmEvSW9uaWMgQXBwbGljYXRpb25zXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBQYXlQYWwsIFBheVBhbFBheW1lbnQsIFBheVBhbENvbmZpZ3VyYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3BheXBhbCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwYXlQYWw6IFBheVBhbCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMucGF5UGFsLmluaXQoe1xuICogICBQYXlQYWxFbnZpcm9ubWVudFByb2R1Y3Rpb246ICdZT1VSX1BST0RVQ1RJT05fQ0xJRU5UX0lEJyxcbiAqICAgUGF5UGFsRW52aXJvbm1lbnRTYW5kYm94OiAnWU9VUl9TQU5EQk9YX0NMSUVOVF9JRCdcbiAqIH0pLnRoZW4oKCkgPT4ge1xuICogICAvLyBFbnZpcm9ubWVudHM6IFBheVBhbEVudmlyb25tZW50Tm9OZXR3b3JrLCBQYXlQYWxFbnZpcm9ubWVudFNhbmRib3gsIFBheVBhbEVudmlyb25tZW50UHJvZHVjdGlvblxuICogICB0aGlzLnBheVBhbC5wcmVwYXJlVG9SZW5kZXIoJ1BheVBhbEVudmlyb25tZW50U2FuZGJveCcsIG5ldyBQYXlQYWxDb25maWd1cmF0aW9uKHtcbiAqICAgICAvLyBPbmx5IG5lZWRlZCBpZiB5b3UgZ2V0IGFuIFwiSW50ZXJuYWwgU2VydmljZSBFcnJvclwiIGFmdGVyIFBheVBhbCBsb2dpbiFcbiAqICAgICAvL3BheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbjogMiAvLyBQYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb25QYXlQYWxcbiAqICAgfSkpLnRoZW4oKCkgPT4ge1xuICogICAgIGxldCBwYXltZW50ID0gbmV3IFBheVBhbFBheW1lbnQoJzMuMzMnLCAnVVNEJywgJ0Rlc2NyaXB0aW9uJywgJ3NhbGUnKTtcbiAqICAgICB0aGlzLnBheVBhbC5yZW5kZXJTaW5nbGVQYXltZW50VUkocGF5bWVudCkudGhlbigoKSA9PiB7XG4gKiAgICAgICAvLyBTdWNjZXNzZnVsbHkgcGFpZFxuICpcbiAqICAgICAgIC8vIEV4YW1wbGUgc2FuZGJveCByZXNwb25zZVxuICogICAgICAgLy9cbiAqICAgICAgIC8vIHtcbiAqICAgICAgIC8vICAgXCJjbGllbnRcIjoge1xuICogICAgICAgLy8gICAgIFwiZW52aXJvbm1lbnRcIjogXCJzYW5kYm94XCIsXG4gKiAgICAgICAvLyAgICAgXCJwcm9kdWN0X25hbWVcIjogXCJQYXlQYWwgaU9TIFNES1wiLFxuICogICAgICAgLy8gICAgIFwicGF5cGFsX3Nka192ZXJzaW9uXCI6IFwiMi4xNi4wXCIsXG4gKiAgICAgICAvLyAgICAgXCJwbGF0Zm9ybVwiOiBcImlPU1wiXG4gKiAgICAgICAvLyAgIH0sXG4gKiAgICAgICAvLyAgIFwicmVzcG9uc2VfdHlwZVwiOiBcInBheW1lbnRcIixcbiAqICAgICAgIC8vICAgXCJyZXNwb25zZVwiOiB7XG4gKiAgICAgICAvLyAgICAgXCJpZFwiOiBcIlBBWS0xQUIyMzQ1NkNENzg5MDEyRUYzNEdISUpcIixcbiAqICAgICAgIC8vICAgICBcInN0YXRlXCI6IFwiYXBwcm92ZWRcIixcbiAqICAgICAgIC8vICAgICBcImNyZWF0ZV90aW1lXCI6IFwiMjAxNi0xMC0wM1QxMzozMzozM1pcIixcbiAqICAgICAgIC8vICAgICBcImludGVudFwiOiBcInNhbGVcIlxuICogICAgICAgLy8gICB9XG4gKiAgICAgICAvLyB9XG4gKiAgICAgfSwgKCkgPT4ge1xuICogICAgICAgLy8gRXJyb3Igb3IgcmVuZGVyIGRpYWxvZyBjbG9zZWQgd2l0aG91dCBiZWluZyBzdWNjZXNzZnVsXG4gKiAgICAgfSk7XG4gKiAgIH0sICgpID0+IHtcbiAqICAgICAvLyBFcnJvciBpbiBjb25maWd1cmF0aW9uXG4gKiAgIH0pO1xuICogfSwgKCkgPT4ge1xuICogICAvLyBFcnJvciBpbiBpbml0aWFsaXphdGlvbiwgbWF5YmUgUGF5UGFsIGlzbid0IHN1cHBvcnRlZCBvciBzb21ldGhpbmcgZWxzZVxuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBQYXlQYWxFbnZpcm9ubWVudFxuICogUGF5UGFsQ29uZmlndXJhdGlvbk9wdGlvbnNcbiAqIEBjbGFzc2VzXG4gKiBQYXlQYWxQYXltZW50XG4gKiBQYXlQYWxJdGVtXG4gKiBQYXlQYWxQYXltZW50RGV0YWlsc1xuICogUGF5UGFsU2hpcHBpbmdBZGRyZXNzXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUGF5UGFsJyxcbiAgcGx1Z2luOiAnY29tLnBheXBhbC5jb3Jkb3ZhLm1vYmlsZXNkaycsXG4gIHBsdWdpblJlZjogJ1BheVBhbE1vYmlsZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGF5cGFsL1BheVBhbC1Db3Jkb3ZhLVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBheVBhbCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJldHJpZXZlIHRoZSB2ZXJzaW9uIG9mIHRoZSBQYXlQYWwgaU9TIFNESyBsaWJyYXJ5LiBVc2VmdWwgd2hlbiBjb250YWN0aW5nIHN1cHBvcnQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWW91IG11c3QgcHJlY29ubmVjdCB0byBQYXlQYWwgdG8gcHJlcGFyZSB0aGUgZGV2aWNlIGZvciBwcm9jZXNzaW5nIHBheW1lbnRzLlxuICAgKiBUaGlzIGltcHJvdmVzIHRoZSB1c2VyIGV4cGVyaWVuY2UsIGJ5IG1ha2luZyB0aGUgcHJlc2VudGF0aW9uIG9mIHRoZVxuICAgKiBVSSBmYXN0ZXIuIFRoZSBwcmVjb25uZWN0IGlzIHZhbGlkIGZvciBhIGxpbWl0ZWQgdGltZSwgc29cbiAgICogdGhlIHJlY29tbWVuZGVkIHRpbWUgdG8gcHJlY29ubmVjdCBpcyBvbiBwYWdlIGxvYWQuXG4gICAqXG4gICAqIEBwYXJhbSB7UGF5UGFsRW52aXJvbm1lbnR9IGNsaWVudElkc0ZvckVudmlyb25tZW50czogc2V0IG9mIGNsaWVudCBpZHMgZm9yIGVudmlyb25tZW50c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0KGNsaWVudElkc0ZvckVudmlyb25tZW50czogUGF5UGFsRW52aXJvbm1lbnQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgbXVzdCBwcmVjb25uZWN0IHRvIFBheVBhbCB0byBwcmVwYXJlIHRoZSBkZXZpY2UgZm9yIHByb2Nlc3NpbmcgcGF5bWVudHMuXG4gICAqIFRoaXMgaW1wcm92ZXMgdGhlIHVzZXIgZXhwZXJpZW5jZSwgYnkgbWFraW5nIHRoZSBwcmVzZW50YXRpb24gb2YgdGhlIFVJIGZhc3Rlci5cbiAgICogVGhlIHByZWNvbm5lY3QgaXMgdmFsaWQgZm9yIGEgbGltaXRlZCB0aW1lLCBzbyB0aGUgcmVjb21tZW5kZWQgdGltZSB0byBwcmVjb25uZWN0IGlzIG9uIHBhZ2UgbG9hZC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVudmlyb25tZW50OiBhdmFpbGFibGUgb3B0aW9ucyBhcmUgXCJQYXlQYWxFbnZpcm9ubWVudE5vTmV0d29ya1wiLCBcIlBheVBhbEVudmlyb25tZW50UHJvZHVjdGlvblwiIGFuZCBcIlBheVBhbEVudmlyb25tZW50U2FuZGJveFwiXG4gICAqIEBwYXJhbSB7UGF5UGFsQ29uZmlndXJhdGlvbn0gY29uZmlndXJhdGlvbjogUGF5UGFsQ29uZmlndXJhdGlvbiBvYmplY3QsIGZvciBGdXR1cmUgUGF5bWVudHMgbWVyY2hhbnROYW1lLCBtZXJjaGFudFByaXZhY3lQb2xpY3lVUkwgYW5kIG1lcmNoYW50VXNlckFncmVlbWVudFVSTCBtdXN0IGJlIHNldCBiZSBzZXRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJlcGFyZVRvUmVuZGVyKGVudmlyb25tZW50OiBzdHJpbmcsIGNvbmZpZ3VyYXRpb246IFBheVBhbENvbmZpZ3VyYXRpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBQYXlQYWwgVUkgdG8gY29sbGVjdCBwYXltZW50IGZyb20gdGhlIHVzZXIuXG4gICAqIFNlZSBodHRwczovL2RldmVsb3Blci5wYXlwYWwuY29tL3dlYmFwcHMvZGV2ZWxvcGVyL2RvY3MvaW50ZWdyYXRpb24vbW9iaWxlL2lvcy1pbnRlZ3JhdGlvbi1ndWlkZS9cbiAgICogZm9yIG1vcmUgZG9jdW1lbnRhdGlvbiBvZiB0aGUgcGFyYW1zLlxuICAgKlxuICAgKiBAcGFyYW0ge1BheVBhbFBheW1lbnR9IHBheW1lbnQgUGF5UGFsUGF5bWVudCBvYmplY3RcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVuZGVyU2luZ2xlUGF5bWVudFVJKHBheW1lbnQ6IFBheVBhbFBheW1lbnQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmNlIGEgdXNlciBoYXMgY29uc2VudGVkIHRvIGZ1dHVyZSBwYXltZW50cywgd2hlbiB0aGUgdXNlciBzdWJzZXF1ZW50bHkgaW5pdGlhdGVzIGEgUGF5UGFsIHBheW1lbnRcbiAgICogZnJvbSB0aGVpciBkZXZpY2UgdG8gYmUgY29tcGxldGVkIGJ5IHlvdXIgc2VydmVyLCBQYXlQYWwgdXNlcyBhIENvcnJlbGF0aW9uIElEIHRvIHZlcmlmeSB0aGF0IHRoZVxuICAgKiBwYXltZW50IGlzIG9yaWdpbmF0aW5nIGZyb20gYSB2YWxpZCwgdXNlci1jb25zZW50ZWQgZGV2aWNlK2FwcGxpY2F0aW9uLlxuICAgKiBUaGlzIGhlbHBzIHJlZHVjZSBmcmF1ZCBhbmQgZGVjcmVhc2UgZGVjbGluZXMuXG4gICAqIFRoaXMgbWV0aG9kIE1VU1QgYmUgY2FsbGVkIHByaW9yIHRvIGluaXRpYXRpbmcgYSBwcmUtY29uc2VudGVkIHBheW1lbnQgKGEgXCJmdXR1cmUgcGF5bWVudFwiKSBmcm9tIGEgbW9iaWxlIGRldmljZS5cbiAgICogUGFzcyB0aGUgcmVzdWx0IHRvIHlvdXIgc2VydmVyLCB0byBpbmNsdWRlIGluIHRoZSBwYXltZW50IHJlcXVlc3Qgc2VudCB0byBQYXlQYWwuXG4gICAqIERvIG5vdCBvdGhlcndpc2UgY2FjaGUgb3Igc3RvcmUgdGhpcyB2YWx1ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2xpZW50TWV0YWRhdGFJRCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQbGVhc2UgUmVhZCBEb2NzIG9uIEZ1dHVyZSBQYXltZW50cyBhdCBodHRwczovL2dpdGh1Yi5jb20vcGF5cGFsL1BheVBhbC1pT1MtU0RLI2Z1dHVyZS1wYXltZW50c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZW5kZXJGdXR1cmVQYXltZW50VUkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGxlYXNlIFJlYWQgRG9jcyBvbiBQcm9maWxlIFNoYXJpbmcgYXQgaHR0cHM6Ly9naXRodWIuY29tL3BheXBhbC9QYXlQYWwtaU9TLVNESyNwcm9maWxlLXNoYXJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzY29wZXMgc2NvcGVzIFNldCBvZiByZXF1ZXN0ZWQgc2NvcGUtdmFsdWVzLiBBY2NlcHRlZCBzY29wZXMgYXJlOiBvcGVuaWQsIHByb2ZpbGUsIGFkZHJlc3MsIGVtYWlsLCBwaG9uZSwgZnV0dXJlcGF5bWVudHMgYW5kIHBheXBhbGF0dHJpYnV0ZXNcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnBheXBhbC5jb20vZG9jcy9pbnRlZ3JhdGlvbi9kaXJlY3QvaWRlbnRpdHkvYXR0cmlidXRlcy8gZm9yIG1vcmUgZGV0YWlsc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZW5kZXJQcm9maWxlU2hhcmluZ1VJKHNjb3Blczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBheVBhbEVudmlyb25tZW50IHtcbiAgUGF5UGFsRW52aXJvbm1lbnRQcm9kdWN0aW9uOiBzdHJpbmc7XG4gIFBheVBhbEVudmlyb25tZW50U2FuZGJveDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFBheVBhbFBheW1lbnQge1xuICAvKipcbiAgICogVGhlIGFtb3VudCBvZiB0aGUgcGF5bWVudC5cbiAgICovXG4gIGFtb3VudDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIElTTyA0MjE3IGN1cnJlbmN5IGZvciB0aGUgcGF5bWVudC5cbiAgICovXG4gIGN1cnJlbmN5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwYXltZW50LlxuICAgKi9cbiAgc2hvcnREZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvKipcbiAgICogXCJTYWxlXCIgZm9yIGFuIGltbWVkaWF0ZSBwYXltZW50LlxuICAgKi9cbiAgaW50ZW50OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBCdWlsZCBOb3RhdGlvbiBjb2RlIChcIkJOIGNvZGVcIiksIG9idGFpbmVkIGZyb20gcGFydG5lcnByb2dyYW1AcGF5cGFsLmNvbSxcbiAgICogZm9yIHlvdXIgdHJhY2tpbmcgcHVycG9zZXMuXG4gICAqL1xuICBibkNvZGUgPSAnUGhvbmVHYXBfU1AnO1xuICAvKipcbiAgICogT3B0aW9uYWwgaW52b2ljZSBudW1iZXIsIGZvciB5b3VyIHRyYWNraW5nIHB1cnBvc2VzLiAodXAgdG8gMjU2IGNoYXJhY3RlcnMpXG4gICAqL1xuICBpbnZvaWNlTnVtYmVyOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCB0ZXh0LCBmb3IgeW91ciB0cmFja2luZyBwdXJwb3Nlcy4gKHVwIHRvIDI1NiBjaGFyYWN0ZXJzKVxuICAgKi9cbiAgY3VzdG9tOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCB0ZXh0IHdoaWNoIHdpbGwgYXBwZWFyIG9uIHRoZSBjdXN0b21lcidzIGNyZWRpdCBjYXJkIHN0YXRlbWVudC4gKHVwIHRvIDIyIGNoYXJhY3RlcnMpXG4gICAqL1xuICBzb2Z0RGVzY3JpcHRvcjogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uYWwgYXJyYXkgb2YgUGF5UGFsSXRlbSBvYmplY3RzLlxuICAgKi9cbiAgaXRlbXM6IEFycmF5PFBheVBhbEl0ZW0+O1xuICAvKipcbiAgICogT3B0aW9uYWwgcGF5ZWUgZW1haWwsIGlmIHlvdXIgYXBwIGlzIHBheWluZyBhIHRoaXJkLXBhcnR5IG1lcmNoYW50LlxuICAgKiBUaGUgcGF5ZWUncyBlbWFpbC4gSXQgbXVzdCBiZSBhIHZhbGlkIFBheVBhbCBlbWFpbCBhZGRyZXNzLlxuICAgKi9cbiAgcGF5ZWVFbWFpbDogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uYWwgY3VzdG9tZXIgc2hpcHBpbmcgYWRkcmVzcywgaWYgeW91ciBhcHAgd2lzaGVzIHRvIHByb3ZpZGUgdGhpcyB0byB0aGUgU0RLLlxuICAgKi9cbiAgc2hpcHBpbmdBZGRyZXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBQYXlQYWxQYXltZW50RGV0YWlscyBvYmplY3RcbiAgICovXG4gIGRldGFpbHM6IFBheVBhbFBheW1lbnREZXRhaWxzO1xuXG4gIGNvbnN0cnVjdG9yKGFtb3VudDogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCBzaG9ydERlc2NyaXB0aW9uOiBzdHJpbmcsIGludGVudDogc3RyaW5nLCBkZXRhaWxzPzogUGF5UGFsUGF5bWVudERldGFpbHMpIHtcbiAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XG4gICAgdGhpcy5zaG9ydERlc2NyaXB0aW9uID0gc2hvcnREZXNjcmlwdGlvbjtcbiAgICB0aGlzLmludGVudCA9IGludGVudDtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUGF5UGFsSXRlbSB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBpdGVtLiAxMjcgY2hhcmFjdGVycyBtYXhcbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIE51bWJlciBvZiB1bml0cy4gMTAgY2hhcmFjdGVycyBtYXguXG4gICAqL1xuICBxdWFudGl0eTogbnVtYmVyO1xuICAvKipcbiAgICogVW5pdCBwcmljZSBmb3IgdGhpcyBpdGVtIDEwIGNoYXJhY3RlcnMgbWF4LlxuICAgKi9cbiAgcHJpY2U6IHN0cmluZztcbiAgLyoqXG4gICAqIElTTyBzdGFuZGFyZCBjdXJyZW5jeSBjb2RlLlxuICAgKi9cbiAgY3VycmVuY3k6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBzdG9jayBrZWVwaW5nIHVuaXQgZm9yIHRoaXMgaXRlbS4gNTAgY2hhcmFjdGVycyBtYXggKG9wdGlvbmFsKVxuICAgKi9cbiAgc2t1Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgUGF5UGFsSXRlbSBjbGFzcyBkZWZpbmVzIGFuIG9wdGlvbmFsIGl0ZW1pemF0aW9uIGZvciBhIHBheW1lbnQuXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIucGF5cGFsLmNvbS9kb2NzL2FwaS8jaXRlbS1vYmplY3QgZm9yIG1vcmUgZGV0YWlscy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWU6IE5hbWUgb2YgdGhlIGl0ZW0uIDEyNyBjaGFyYWN0ZXJzIG1heFxuICAgKiBAcGFyYW0ge051bWJlcn0gcXVhbnRpdHk6IE51bWJlciBvZiB1bml0cy4gMTAgY2hhcmFjdGVycyBtYXguXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcmljZTogVW5pdCBwcmljZSBmb3IgdGhpcyBpdGVtIDEwIGNoYXJhY3RlcnMgbWF4LlxuICAgKiBNYXkgYmUgbmVnYXRpdmUgZm9yIFwiY291cG9uXCIgZXRjXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjdXJyZW5jeTogSVNPIHN0YW5kYXJkIGN1cnJlbmN5IGNvZGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBza3U6IFRoZSBzdG9jayBrZWVwaW5nIHVuaXQgZm9yIHRoaXMgaXRlbS4gNTAgY2hhcmFjdGVycyBtYXggKG9wdGlvbmFsKVxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyLCBwcmljZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCBza3U/OiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMuc2t1ID0gc2t1O1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUGF5UGFsUGF5bWVudERldGFpbHMge1xuICAvKipcbiAgICogU3ViLXRvdGFsIChhbW91bnQpIG9mIGl0ZW1zIGJlaW5nIHBhaWQgZm9yLiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXG4gICAqL1xuICBzdWJ0b3RhbDogc3RyaW5nO1xuICAvKipcbiAgICogQW1vdW50IGNoYXJnZWQgZm9yIHNoaXBwaW5nLiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXG4gICAqL1xuICBzaGlwcGluZzogc3RyaW5nO1xuICAvKipcbiAgICogQW1vdW50IGNoYXJnZWQgZm9yIHRheC4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxuICAgKi9cbiAgdGF4OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBQYXlQYWxQYXltZW50RGV0YWlscyBjbGFzcyBkZWZpbmVzIG9wdGlvbmFsIGFtb3VudCBkZXRhaWxzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3VidG90YWw6IFN1Yi10b3RhbCAoYW1vdW50KSBvZiBpdGVtcyBiZWluZyBwYWlkIGZvci4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2hpcHBpbmc6IEFtb3VudCBjaGFyZ2VkIGZvciBzaGlwcGluZy4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdGF4OiBBbW91bnQgY2hhcmdlZCBmb3IgdGF4LiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdWJ0b3RhbDogc3RyaW5nLCBzaGlwcGluZzogc3RyaW5nLCB0YXg6IHN0cmluZykge1xuICAgIHRoaXMuc3VidG90YWwgPSBzdWJ0b3RhbDtcbiAgICB0aGlzLnNoaXBwaW5nID0gc2hpcHBpbmc7XG4gICAgdGhpcy50YXggPSB0YXg7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGF5UGFsQ29uZmlndXJhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogV2lsbCBiZSBvdmVycmlkZGVuIGJ5IGVtYWlsIHVzZWQgaW4gbW9zdCByZWNlbnQgUGF5UGFsIGxvZ2luLlxuICAgKi9cbiAgZGVmYXVsdFVzZXJFbWFpbD86IHN0cmluZztcbiAgLyoqXG4gICAqIFdpbGwgYmUgb3ZlcnJpZGRlbiBieSBwaG9uZSBjb3VudHJ5IGNvZGUgdXNlZCBpbiBtb3N0IHJlY2VudCBQYXlQYWwgbG9naW5cbiAgICovXG4gIGRlZmF1bHRVc2VyUGhvbmVDb3VudHJ5Q29kZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFdpbGwgYmUgb3ZlcnJpZGRlbiBieSBwaG9uZSBudW1iZXIgdXNlZCBpbiBtb3N0IHJlY2VudCBQYXlQYWwgbG9naW4uXG4gICAqL1xuICBkZWZhdWx0VXNlclBob25lTnVtYmVyPzogc3RyaW5nO1xuICAvKipcbiAgICogWW91ciBjb21wYW55IG5hbWUsIGFzIGl0IHNob3VsZCBiZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgd2hlbiByZXF1ZXN0aW5nIGNvbnNlbnQgdmlhIGEgUGF5UGFsRnV0dXJlUGF5bWVudFZpZXdDb250cm9sbGVyLlxuICAgKi9cbiAgbWVyY2hhbnROYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogVVJMIG9mIHlvdXIgY29tcGFueSdzIHByaXZhY3kgcG9saWN5LCB3aGljaCB3aWxsIGJlIG9mZmVyZWQgdG8gdGhlIHVzZXIgd2hlbiByZXF1ZXN0aW5nIGNvbnNlbnQgdmlhIGEgUGF5UGFsRnV0dXJlUGF5bWVudFZpZXdDb250cm9sbGVyLlxuICAgKi9cbiAgbWVyY2hhbnRQcml2YWN5UG9saWN5VVJMPzogc3RyaW5nO1xuICAvKipcbiAgICogVVJMIG9mIHlvdXIgY29tcGFueSdzIHVzZXIgYWdyZWVtZW50LCB3aGljaCB3aWxsIGJlIG9mZmVyZWQgdG8gdGhlIHVzZXIgd2hlbiByZXF1ZXN0aW5nIGNvbnNlbnQgdmlhIGEgUGF5UGFsRnV0dXJlUGF5bWVudFZpZXdDb250cm9sbGVyLlxuICAgKi9cbiAgbWVyY2hhbnRVc2VyQWdyZWVtZW50VVJMPzogc3RyaW5nO1xuICAvKipcbiAgICogSWYgc2V0IHRvIE5PLCB0aGUgU0RLIHdpbGwgb25seSBzdXBwb3J0IHBheWluZyB3aXRoIFBheVBhbCwgbm90IHdpdGggY3JlZGl0IGNhcmRzLlxuICAgKiBUaGlzIGFwcGxpZXMgb25seSB0byBzaW5nbGUgcGF5bWVudHMgKHZpYSBQYXlQYWxQYXltZW50Vmlld0NvbnRyb2xsZXIpLlxuICAgKiBGdXR1cmUgcGF5bWVudHMgKHZpYSBQYXlQYWxGdXR1cmVQYXltZW50Vmlld0NvbnRyb2xsZXIpIGFsd2F5cyB1c2UgUGF5UGFsLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuICBhY2NlcHRDcmVkaXRDYXJkcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBGb3Igc2luZ2xlIHBheW1lbnRzLCBvcHRpb25zIGZvciB0aGUgc2hpcHBpbmcgYWRkcmVzcy5cbiAgICogLSAwIC0gUGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uTm9uZTogbm8gc2hpcHBpbmcgYWRkcmVzcyBhcHBsaWVzLlxuICAgKiAtIDEgLSBQYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb25Qcm92aWRlZDogc2hpcHBpbmcgYWRkcmVzcyB3aWxsIGJlIHByb3ZpZGVkIGJ5IHlvdXIgYXBwLFxuICAgKiAgIGluIHRoZSBzaGlwcGluZ0FkZHJlc3MgcHJvcGVydHkgb2YgUGF5UGFsUGF5bWVudC5cbiAgICogLSAyIC0gUGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uUGF5UGFsOiB1c2VyIHdpbGwgY2hvb3NlIGZyb20gc2hpcHBpbmcgYWRkcmVzc2VzIG9uIGZpbGVcbiAgICogICBmb3IgdGhlaXIgUGF5UGFsIGFjY291bnQuXG4gICAqIC0gMyAtIFBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbkJvdGg6IHVzZXIgd2lsbCBjaG9vc2UgZnJvbSB0aGUgc2hpcHBpbmcgYWRkcmVzcyBwcm92aWRlZCBieSB5b3VyIGFwcCxcbiAgICogICBpbiB0aGUgc2hpcHBpbmdBZGRyZXNzIHByb3BlcnR5IG9mIFBheVBhbFBheW1lbnQsIHBsdXMgdGhlIHNoaXBwaW5nIGFkZHJlc3NlcyBvbiBmaWxlIGZvciB0aGUgdXNlcidzIFBheVBhbCBhY2NvdW50LlxuICAgKiBEZWZhdWx0cyB0byAwIChQYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb25Ob25lKS5cbiAgICovXG4gIHBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIElmIHNldCB0byBZRVMsIHRoZW4gaWYgdGhlIHVzZXIgcGF5cyB2aWEgdGhlaXIgUGF5UGFsIGFjY291bnQsXG4gICAqIHRoZSBTREsgd2lsbCByZW1lbWJlciB0aGUgdXNlcidzIFBheVBhbCB1c2VybmFtZSBvciBwaG9uZSBudW1iZXI7XG4gICAqIGlmIHRoZSB1c2VyIHBheXMgdmlhIHRoZWlyIGNyZWRpdCBjYXJkLCB0aGVuIHRoZSBTREsgd2lsbCByZW1lbWJlclxuICAgKiB0aGUgUGF5UGFsIFZhdWx0IHRva2VuIHJlcHJlc2VudGluZyB0aGUgdXNlcidzIGNyZWRpdCBjYXJkLlxuICAgKlxuICAgKiBJZiBzZXQgdG8gTk8sIHRoZW4gYW55IHByZXZpb3VzbHktcmVtZW1iZXJlZCB1c2VybmFtZSwgcGhvbmUgbnVtYmVyLCBvclxuICAgKiBjcmVkaXQgY2FyZCB0b2tlbiB3aWxsIGJlIGVyYXNlZCwgYW5kIHN1YnNlcXVlbnQgcGF5bWVudCBpbmZvcm1hdGlvbiB3aWxsXG4gICAqIG5vdCBiZSByZW1lbWJlcmVkLlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byBZRVMuXG4gICAqL1xuICByZW1lbWJlclVzZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogSWYgbm90IHNldCwgb3IgaWYgc2V0IHRvIG5pbCwgZGVmYXVsdHMgdG8gdGhlIGRldmljZSdzIGN1cnJlbnQgbGFuZ3VhZ2Ugc2V0dGluZy5cbiAgICpcbiAgICogQ2FuIGJlIHNwZWNpZmllZCBhcyBhIGxhbmd1YWdlIGNvZGUgKFwiZW5cIiwgXCJmclwiLCBcInpoLUhhbnNcIiwgZXRjLikgb3IgYXMgYSBsb2NhbGUgKFwiZW5fQVVcIiwgXCJmcl9GUlwiLCBcInpoLUhhbnRfSEtcIiwgZXRjLikuXG4gICAqIElmIHRoZSBsaWJyYXJ5IGRvZXMgbm90IGNvbnRhaW4gbG9jYWxpemVkIHN0cmluZ3MgZm9yIGEgc3BlY2lmaWVkIGxvY2FsZSwgdGhlbiB3aWxsIGZhbGwgYmFjayB0byB0aGUgbGFuZ3VhZ2UuIEUuZy4sIFwiZXNfQ09cIiAtPiBcImVzXCIuXG4gICAqIElmIHRoZSBsaWJyYXJ5IGRvZXMgbm90IGNvbnRhaW4gbG9jYWxpemVkIHN0cmluZ3MgZm9yIGEgc3BlY2lmaWVkIGxhbmd1YWdlLCB0aGVuIHdpbGwgZmFsbCBiYWNrIHRvIEFtZXJpY2FuIEVuZ2xpc2guXG4gICAqXG4gICAqIElmIHlvdSBzcGVjaWZ5IG9ubHkgYSBsYW5ndWFnZSBjb2RlLCBhbmQgdGhhdCBjb2RlIG1hdGNoZXMgdGhlIGRldmljZSdzIGN1cnJlbnRseSBwcmVmZXJyZWQgbGFuZ3VhZ2UsXG4gICAqIHRoZW4gdGhlIGxpYnJhcnkgd2lsbCBhdHRlbXB0IHRvIHVzZSB0aGUgZGV2aWNlJ3MgY3VycmVudCByZWdpb24gYXMgd2VsbC5cbiAgICogRS5nLiwgc3BlY2lmeWluZyBcImVuXCIgb24gYSBkZXZpY2Ugc2V0IHRvIFwiRW5nbGlzaFwiIGFuZCBcIlVuaXRlZCBLaW5nZG9tXCIgd2lsbCByZXN1bHQgaW4gXCJlbl9HQlwiLlxuICAgKi9cbiAgbGFuZ3VhZ2VPckxvY2FsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIE5vcm1hbGx5LCB0aGUgU0RLIGJsdXJzIHRoZSBzY3JlZW4gd2hlbiB0aGUgYXBwIGlzIGJhY2tncm91bmRlZCxcbiAgICogdG8gb2JzY3VyZSBjcmVkaXQgY2FyZCBvciBQYXlQYWwgYWNjb3VudCBkZXRhaWxzIGluIHRoZSBpT1Mtc2F2ZWQgc2NyZWVuc2hvdC5cbiAgICogSWYgeW91ciBhcHAgYWxyZWFkeSBkb2VzIGl0cyBvd24gYmx1cnJpbmcgdXBvbiBiYWNrZ3JvdW5kaW5nLCB5b3UgbWlnaHQgY2hvb3NlIHRvIGRpc2FibGUgdGhpcy5cbiAgICogRGVmYXVsdHMgdG8gTk8uXG4gICAqL1xuICBkaXNhYmxlQmx1cldoZW5CYWNrZ3JvdW5kaW5nPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIElmIHlvdSB3aWxsIHByZXNlbnQgdGhlIFNESydzIHZpZXcgY29udHJvbGxlciB3aXRoaW4gYSBwb3BvdmVyLCB0aGVuIHNldCB0aGlzIHByb3BlcnR5IHRvIFlFUy5cbiAgICogRGVmYXVsdHMgdG8gTk8uIChpT1Mgb25seSlcbiAgICovXG4gIHByZXNlbnRpbmdJblBvcG92ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogU2FuZGJveCBjcmVkZW50aWFscyBjYW4gYmUgZGlmZmljdWx0IHRvIHR5cGUgb24gYSBtb2JpbGUgZGV2aWNlLiBTZXR0aW5nIHRoaXMgZmxhZyB0byBZRVMgd2lsbFxuICAgKiBjYXVzZSB0aGUgc2FuZGJveFVzZXJQYXNzd29yZCBhbmQgc2FuZGJveFVzZXJQaW4gdG8gYWx3YXlzIGJlIHByZS1wb3B1bGF0ZWQgaW50byBsb2dpbiBmaWVsZHMuXG4gICAqL1xuICBmb3JjZURlZmF1bHRzSW5TYW5kYm94PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFBhc3N3b3JkIHRvIHVzZSBmb3Igc2FuZGJveCBpZiAnZm9yY2VEZWZhdWx0c0luU2FuZGJveCcgaXMgc2V0LlxuICAgKi9cbiAgc2FuZGJveFVzZXJQYXNzd29yZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFBJTiB0byB1c2UgZm9yIHNhbmRib3ggaWYgJ2ZvcmNlRGVmYXVsdHNJblNhbmRib3gnIGlzIHNldC5cbiAgICovXG4gIHNhbmRib3hVc2VyUGluPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUGF5UGFsQ29uZmlndXJhdGlvbiBpbXBsZW1lbnRzIFBheVBhbENvbmZpZ3VyYXRpb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIFlvdSB1c2UgYSBQYXlQYWxDb25maWd1cmF0aW9uIG9iamVjdCB0byBjb25maWd1cmUgbWFueSBhc3BlY3RzIG9mIGhvdyB0aGUgU0RLIGJlaGF2ZXMuXG4gICAqIHNlZSBkZWZhdWx0cyBmb3Igb3B0aW9ucyBhdmFpbGFibGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYXlQYWxDb25maWd1cmF0aW9uT3B0aW9ucykge1xuXG4gICAgY29uc3QgZGVmYXVsdHM6IFBheVBhbENvbmZpZ3VyYXRpb25PcHRpb25zID0ge1xuICAgICAgZGVmYXVsdFVzZXJFbWFpbDogbnVsbCxcbiAgICAgIGRlZmF1bHRVc2VyUGhvbmVDb3VudHJ5Q29kZTogbnVsbCxcbiAgICAgIGRlZmF1bHRVc2VyUGhvbmVOdW1iZXI6IG51bGwsXG4gICAgICBtZXJjaGFudE5hbWU6IG51bGwsXG4gICAgICBtZXJjaGFudFByaXZhY3lQb2xpY3lVUkw6IG51bGwsXG4gICAgICBtZXJjaGFudFVzZXJBZ3JlZW1lbnRVUkw6IG51bGwsXG4gICAgICBhY2NlcHRDcmVkaXRDYXJkczogdHJ1ZSxcbiAgICAgIHBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbjogMCxcbiAgICAgIHJlbWVtYmVyVXNlcjogdHJ1ZSxcbiAgICAgIGxhbmd1YWdlT3JMb2NhbGU6IG51bGwsXG4gICAgICBkaXNhYmxlQmx1cldoZW5CYWNrZ3JvdW5kaW5nOiBmYWxzZSxcbiAgICAgIHByZXNlbnRpbmdJblBvcG92ZXI6IGZhbHNlLFxuICAgICAgZm9yY2VEZWZhdWx0c0luU2FuZGJveDogZmFsc2UsXG4gICAgICBzYW5kYm94VXNlclBhc3N3b3JkOiBudWxsLFxuICAgICAgc2FuZGJveFVzZXJQaW46IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4gb3B0aW9ucykge1xuICAgICAgICBpZiAoZGVmYXVsdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBkZWZhdWx0c1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXlQYWxTaGlwcGluZ0FkZHJlc3Mge1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgcmVjaXBpZW50IGF0IHRoaXMgYWRkcmVzcy4gNTAgY2hhcmFjdGVycyBtYXguXG4gICAqL1xuICByZWNpcGllbnROYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMaW5lIDEgb2YgdGhlIGFkZHJlc3MgKGUuZy4sIE51bWJlciwgc3RyZWV0LCBldGMpLiAxMDAgY2hhcmFjdGVycyBtYXguXG4gICAqL1xuICBsaW5lMTogc3RyaW5nO1xuICAvKipcbiAgICogTGluZSAyIG9mIHRoZSBhZGRyZXNzIChlLmcuLCBTdWl0ZSwgYXB0ICMsIGV0YykuIDEwMCBjaGFyYWN0ZXJzIG1heC4gT3B0aW9uYWwuXG4gICAqL1xuICBsaW5lMjogc3RyaW5nO1xuICAvKipcbiAgICogQ2l0eSBuYW1lLiA1MCBjaGFyYWN0ZXJzIG1heC5cbiAgICovXG4gIGNpdHk6IHN0cmluZztcbiAgLyoqXG4gICAqIDItbGV0dGVyIGNvZGUgZm9yIFVTIHN0YXRlcywgYW5kIHRoZSBlcXVpdmFsZW50IGZvciBvdGhlciBjb3VudHJpZXMuIDEwMCBjaGFyYWN0ZXJzIG1heC4gUmVxdWlyZWQgaW4gY2VydGFpbiBjb3VudHJpZXMuXG4gICAqL1xuICBzdGF0ZTogc3RyaW5nO1xuICAvKipcbiAgICogWklQIGNvZGUgb3IgZXF1aXZhbGVudCBpcyB1c3VhbGx5IHJlcXVpcmVkIGZvciBjb3VudHJpZXMgdGhhdCBoYXZlIHRoZW0uIDIwIGNoYXJhY3RlcnMgbWF4LiBSZXF1aXJlZCBpbiBjZXJ0YWluIGNvdW50cmllcy5cbiAgICovXG4gIHBvc3RhbENvZGU6IHN0cmluZztcbiAgLyoqXG4gICAqIDItbGV0dGVyIGNvdW50cnkgY29kZS4gMiBjaGFyYWN0ZXJzIG1heC5cbiAgICovXG4gIGNvdW50cnlDb2RlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGZvciBtb3JlIGRldGFpbC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHJlY2lwaWVudE5hbWU6IE5hbWUgb2YgdGhlIHJlY2lwaWVudCBhdCB0aGlzIGFkZHJlc3MuIDUwIGNoYXJhY3RlcnMgbWF4LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbGluZTE6IExpbmUgMSBvZiB0aGUgYWRkcmVzcyAoZS5nLiwgTnVtYmVyLCBzdHJlZXQsIGV0YykuIDEwMCBjaGFyYWN0ZXJzIG1heC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGxpbmUyOiBMaW5lIDIgb2YgdGhlIGFkZHJlc3MgKGUuZy4sIFN1aXRlLCBhcHQgIywgZXRjKS4gMTAwIGNoYXJhY3RlcnMgbWF4LiBPcHRpb25hbC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGNpdHk6IENpdHkgbmFtZS4gNTAgY2hhcmFjdGVycyBtYXguXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZTogMi1sZXR0ZXIgY29kZSBmb3IgVVMgc3RhdGVzLCBhbmQgdGhlIGVxdWl2YWxlbnQgZm9yIG90aGVyIGNvdW50cmllcy4gMTAwIGNoYXJhY3RlcnMgbWF4LiBSZXF1aXJlZCBpbiBjZXJ0YWluIGNvdW50cmllcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBvc3RhbENvZGU6IFpJUCBjb2RlIG9yIGVxdWl2YWxlbnQgaXMgdXN1YWxseSByZXF1aXJlZCBmb3IgY291bnRyaWVzIHRoYXQgaGF2ZSB0aGVtLiAyMCBjaGFyYWN0ZXJzIG1heC4gUmVxdWlyZWQgaW4gY2VydGFpbiBjb3VudHJpZXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb3VudHJ5Q29kZTogMi1sZXR0ZXIgY291bnRyeSBjb2RlLiAyIGNoYXJhY3RlcnMgbWF4LlxuICAgKi9cbiAgY29uc3RydWN0b3IocmVjaXBpZW50TmFtZTogc3RyaW5nLCBsaW5lMTogc3RyaW5nLCBsaW5lMjogc3RyaW5nLCBjaXR5OiBzdHJpbmcsIHN0YXRlOiBzdHJpbmcsIHBvc3RhbENvZGU6IHN0cmluZywgY291bnRyeUNvZGU6IHN0cmluZykge1xuICAgIHRoaXMucmVjaXBpZW50TmFtZSA9IHJlY2lwaWVudE5hbWU7XG4gICAgdGhpcy5saW5lMSA9IGxpbmUxO1xuICAgIHRoaXMubGluZTIgPSBsaW5lMjtcbiAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnBvc3RhbENvZGUgPSBwb3N0YWxDb2RlO1xuICAgIHRoaXMuY291bnRyeUNvZGUgPSBjb3VudHJ5Q29kZTtcbiAgfVxufVxuIl19

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_addresses_addresses__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_orders_orders__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_carts_carts__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal_ngx__ = __webpack_require__(299);
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
    function CheckoutPage(payPal, navCtrl, cartsProvider, ordersProvider, navParams, addressesProvider, usersProvider, viewCtrl, modalCtrl) {
        this.payPal = payPal;
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
        this.delivery = this.deliveryOption[0];
        this.payment = "paypal";
        this.shippingAmnt = 1;
        this.checkoutList = this.navParams.get('items');
        this.subTotalAmnt = this.navParams.get('subTotal');
        this.totalAmnt = this.subTotalAmnt + this.shippingAmnt;
        this.setAddresses();
    }
    CheckoutPage.prototype.pay = function () {
        var _this = this;
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AbeK5EFgfZVQ3fZRzjOPGURRTN9vkYvuNh_5S3kpJVUAl1BzIiym-lYmJGaCTwgFmlvEil6DRK3sa91d'
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal_ngx__["b" /* PayPalConfiguration */]({
            // Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(function () {
                var payment = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal_ngx__["c" /* PayPalPayment */]('3.33', 'USD', 'Description', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function () {
                    // Successfully paid
                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                }, function () {
                    // Error or render dialog closed without being successful
                });
            }, function () {
                // Error in configuration
            });
        }, function () {
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    };
    CheckoutPage.prototype.calculateTotal = function () {
        this.totalAmnt = +this.subTotalAmnt + +this.delivery.price;
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
            "delivery": this.delivery,
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
            selector: 'page-checkout',template:/*ion-inline-start:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\checkout\checkout.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title text-center>Checkout</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only>\n        <ion-icon name="" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h6 padding-left>Item Summary:</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class="checkout-content">\n      <ion-col>\n        <ion-card *ngFor="let item of checkoutList; let i = index">\n          <ion-row>\n            <ion-col col-4>\n              <img src={{item.product.image}} />\n            </ion-col>\n            <ion-col>\n              <ion-row>\n                {{item.product.name}}\n                <ion-row *ngFor="let option of item.product.option">\n                  {{option.title}}: {{option.selected}}\n                </ion-row>\n              </ion-row>\n              <ion-row>\n                Quantity: {{item.product.quantity}}\n              </ion-row>\n              <ion-row>\n                Price: $ {{item.product.price}}\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6 padding-left>Shipping Address:</h6>\n      </ion-col>\n      <ion-col col-3 padding-right text-right>\n        <span end (click)="changeShippingAddress()">Change</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class="checkout-content">\n      <ion-col>\n        <ion-card>\n          <ion-card-content *ngIf="shippingAddress.id == null">\n            No Shipping Address Selected\n          </ion-card-content>\n          <ion-card-content *ngIf="shippingAddress.id != null">\n            <ion-row>\n              {{shippingAddress.fullName}}\n            </ion-row>\n            <ion-row>\n              {{shippingAddress.streetAddress1}},\n              {{shippingAddress.streetAddress2}}\n            </ion-row>\n            <ion-row>\n              {{shippingAddress.city}},\n              {{shippingAddress.state}}\n            </ion-row>\n            <ion-row>\n              {{shippingAddress.country}}\n              {{shippingAddress.zipCode}}\n            </ion-row>\n            <ion-row>\n              {{shippingAddress.phoneNumber}}\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6 padding-left>Billing Address:</h6>\n      </ion-col>\n      <ion-col col-3 padding-right text-right>\n        <span end (click)="changeBillingAddress()">Change</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class="checkout-content">\n      <ion-col>\n        <ion-card>\n          <ion-card-content *ngIf="billingAddress.id == null">\n            No Billing Address Selected\n          </ion-card-content>\n          <ion-card-content *ngIf="billingAddress.id != null">\n            <ion-row>\n              {{billingAddress.fullName}}\n            </ion-row>\n            <ion-row>\n              {{billingAddress.streetAddress1}},\n              {{billingAddress.streetAddress2}}\n            </ion-row>\n            <ion-row>\n              {{billingAddress.city}},\n              {{billingAddress.state}}\n            </ion-row>\n            <ion-row>\n              {{billingAddress.country}}\n              {{billingAddress.zipCode}}\n            </ion-row>\n            <ion-row>\n              {{billingAddress.phoneNumber}}\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6 padding-left>Delivery Option:</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class="checkout-content">\n      <ion-col>\n        <ion-list padding-left padding-right radio-group [(ngModel)]="delivery">\n          <div *ngFor="let option of deliveryOption">\n            <ion-item>\n              <ion-label>{{option.name}}</ion-label>\n              <ion-radio value={{option}} (click)="calculateTotal()"></ion-radio>\n            </ion-item>\n          </div>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h6 padding-left>Payment Method</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class="checkout-content">\n      <ion-col>\n        <ion-list padding-left padding-right radio-group [(ngModel)]="payment">\n          <ion-item>\n            <ion-label>Paypal</ion-label>\n            <ion-radio value="paypal"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>uTrust</ion-label>\n            <ion-radio value="utrust"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer padding>\n  <h4>Summary</h4>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        Sub Total\n      </ion-col>\n      <ion-col>\n        $ {{subTotalAmnt}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        Shipping\n      </ion-col>\n      <ion-col>\n        $ {{shippingAmnt}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h5>Total</h5>\n      </ion-col>\n      <ion-col>\n        <h5>$ {{totalAmnt}}</h5>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <button ion-button block (click)="create()">Place Order</button>\n  <button ion-button block (click)="pay()">PayPal</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\muham\Desktop\Level 4\Final Year Project\workspace\trollee\src\pages\checkout\checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal_ngx__["a" /* PayPal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_carts_carts__["a" /* CartsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_orders_orders__["a" /* OrdersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_addresses_addresses__["a" /* AddressesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=0.js.map