webpackJsonp([11],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
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
 * Generated class for the DetailArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DetailArticlePage = (function () {
    function DetailArticlePage(navCtrl, navParams, sanitizer, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.article = this.navParams.get('main');
    }
    DetailArticlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailArticlePage');
    };
    DetailArticlePage.prototype.aimer = function (art) {
        var alert = this.alertCtrl.create({
            title: 'Aimer',
            subTitle: 'Cette fonctionnalité est en cours de conception.',
            buttons: ['OK']
        });
        alert.present();
    };
    DetailArticlePage.prototype.publier = function (art) {
        var alert = this.alertCtrl.create({
            title: 'Publier',
            subTitle: 'Cette fonctionnalité est en cours de conception.',
            buttons: ['OK']
        });
        alert.present();
    };
    return DetailArticlePage;
}());
DetailArticlePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail-article',template:/*ion-inline-start:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/detail-article/detail-article.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Diaspora7</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <img src="{{article.image}}"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        <b [innerHTML]="article.title" color="primary"></b>\n        <div [innerHTML]="article.content">\n        </div>\n      </ion-card-title>\n      <p>\n        {{article.date |  date:\'dd/MM/yyyy HH:MM\'}}\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="energy" icon-start (click)="aimer(article)">\n          <ion-icon name=\'heart\'></ion-icon>\n          Aimer\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="energy" icon-start (click)="publier(article)">\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Publier\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/detail-article/detail-article.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DetailArticlePage);

//# sourceMappingURL=detail-article.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfriquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_article__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_data_rest_data__ = __webpack_require__(16);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AfriquePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AfriquePage = (function (_super) {
    __extends(AfriquePage, _super);
    function AfriquePage(navCtrl, navParams, rest, loadingController) {
        var _this = _super.call(this, navCtrl, rest, loadingController) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.loadingController = loadingController;
        _this.categories = ['6115', '7353'];
        _this.getFirstArticles(_this.categories);
        return _this;
    }
    AfriquePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AfriquePage');
    };
    return AfriquePage;
}(__WEBPACK_IMPORTED_MODULE_2__classes_article__["a" /* Article */]));
AfriquePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-afrique',template:/*ion-inline-start:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/afrique/afrique.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle color="energy" >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Afrique</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let ar of articles">\n\n    <img src="{{ar.image}}"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        <p [innerHTML]="ar.title"></p>\n\n      </ion-card-title>\n      <p>\n        {{ar.date}}\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="energy" icon-start (click)="detailArticle(ar)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Voir\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="energy" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Publier\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/afrique/afrique.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_data_rest_data__["a" /* RestDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], AfriquePage);

//# sourceMappingURL=afrique.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolitiquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_data_rest_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_article__ = __webpack_require__(20);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PolitiquePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PolitiquePage = (function (_super) {
    __extends(PolitiquePage, _super);
    function PolitiquePage(navCtrl, navParams, rest, loadingController) {
        var _this = _super.call(this, navCtrl, rest, loadingController) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.loadingController = loadingController;
        _this.categories = ['13', '7214'];
        _this.getFirstArticles(_this.categories);
        return _this;
    }
    PolitiquePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PolitiquePage');
    };
    return PolitiquePage;
}(__WEBPACK_IMPORTED_MODULE_3__classes_article__["a" /* Article */]));
PolitiquePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-politique',template:/*ion-inline-start:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/politique/politique.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle color="danger" >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Politique</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let ar of articles">\n\n    <img src="{{ar.image}}"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        <p [innerHTML]="ar.title"></p>\n\n      </ion-card-title>\n      <p>\n        {{ar.date}}\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="danger" icon-start (click)="detailArticle(ar)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Voir\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Publier\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/politique/politique.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_data_rest_data__["a" /* RestDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], PolitiquePage);

//# sourceMappingURL=politique.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_article__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_data_rest_data__ = __webpack_require__(16);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ActuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ActuPage = (function (_super) {
    __extends(ActuPage, _super);
    function ActuPage(navCtrl, navParams, rest, loadingController) {
        var _this = _super.call(this, navCtrl, rest, loadingController) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.loadingController = loadingController;
        _this.categories = ['4', '23', '7682', '16', '2', '7447'];
        _this.getFirstArticles(_this.categories);
        return _this;
    }
    ActuPage.prototype.ionViewDidLoad = function () {
        this.getFirstArticles(this.categories);
    };
    return ActuPage;
}(__WEBPACK_IMPORTED_MODULE_2__classes_article__["a" /* Article */]));
ActuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-actu',template:/*ion-inline-start:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/actu/actu.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle color="energy" >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Actualité</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let ar of articles">\n\n    <img src="{{ar.image}}"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        <p [innerHTML]="ar.title"></p>\n\n      </ion-card-title>\n      <p>\n        {{ar.date |  date:\'dd/MM/yyyy HH:MM\'}}\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="energy" icon-start (click)="detailArticle(ar)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Voir\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="energy" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Publier\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/actu/actu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_data_rest_data__["a" /* RestDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], ActuPage);

//# sourceMappingURL=actu.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternationnalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_data_rest_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_article__ = __webpack_require__(20);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InternationnalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InternationnalPage = (function (_super) {
    __extends(InternationnalPage, _super);
    function InternationnalPage(navCtrl, navParams, rest, loadingController) {
        var _this = _super.call(this, navCtrl, rest, loadingController) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.loadingController = loadingController;
        _this.categories = ['25'];
        _this.getFirstArticles(_this.categories);
        return _this;
    }
    InternationnalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InternationnalPage');
    };
    return InternationnalPage;
}(__WEBPACK_IMPORTED_MODULE_3__classes_article__["a" /* Article */]));
InternationnalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-internationnal',template:/*ion-inline-start:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/internationnal/internationnal.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle color="danger" >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Internationnal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let ar of articles">\n\n    <img src="{{ar.image}}"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        <p [innerHTML]="ar.title"></p>\n\n      </ion-card-title>\n      <p>\n        {{ar.date}}\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="danger" icon-start (click)="detailArticle(ar)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Voir\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Publier\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/internationnal/internationnal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_data_rest_data__["a" /* RestDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], InternationnalPage);

//# sourceMappingURL=internationnal.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CulturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_article__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_data_rest_data__ = __webpack_require__(16);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CulturePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CulturePage = (function (_super) {
    __extends(CulturePage, _super);
    function CulturePage(navCtrl, navParams, rest, loadingController) {
        var _this = _super.call(this, navCtrl, rest, loadingController) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.loadingController = loadingController;
        _this.categories = ['2779', '7316', '7465', '7520', '7463', '7552'];
        _this.getFirstArticles(_this.categories);
        return _this;
    }
    CulturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CulturePage');
    };
    return CulturePage;
}(__WEBPACK_IMPORTED_MODULE_2__classes_article__["a" /* Article */]));
CulturePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-culture',template:/*ion-inline-start:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/culture/culture.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle color="danger" >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Culture</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let ar of articles">\n\n    <img src="{{ar.image}}"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        <p [innerHTML]="ar.title"></p>\n\n      </ion-card-title>\n      <p>\n        {{ar.date}}\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="danger" icon-start (click)="detailArticle(ar)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Voir\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Publier\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/culture/culture.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_data_rest_data__["a" /* RestDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], CulturePage);

//# sourceMappingURL=culture.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifestylePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_data_rest_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_article__ = __webpack_require__(20);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LifestylePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LifestylePage = (function (_super) {
    __extends(LifestylePage, _super);
    function LifestylePage(navCtrl, navParams, rest, loadingController) {
        var _this = _super.call(this, navCtrl, rest, loadingController) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.loadingController = loadingController;
        _this.categories = ['6360', '7516', '9', '7471', '480'];
        _this.getFirstArticles(_this.categories);
        return _this;
    }
    LifestylePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LifestylePage');
    };
    return LifestylePage;
}(__WEBPACK_IMPORTED_MODULE_3__classes_article__["a" /* Article */]));
LifestylePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lifestyle',template:/*ion-inline-start:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/lifestyle/lifestyle.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle color="danger" >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>LifeStyle</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let ar of articles">\n\n    <img src="{{ar.image}}"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        <p [innerHTML]="ar.title"></p>\n\n      </ion-card-title>\n      <p>\n        {{ar.date}}\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="danger" icon-start (click)="detailArticle(ar)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Voir\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Publier\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/lifestyle/lifestyle.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_data_rest_data__["a" /* RestDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], LifestylePage);

//# sourceMappingURL=lifestyle.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SantePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_data_rest_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_article__ = __webpack_require__(20);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SantePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SantePage = (function (_super) {
    __extends(SantePage, _super);
    function SantePage(navCtrl, navParams, rest, loadingController) {
        var _this = _super.call(this, navCtrl, rest, loadingController) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.loadingController = loadingController;
        _this.categories = ['2267', '6', '7525', '7668', '8', '6361'];
        _this.getFirstArticles(_this.categories);
        return _this;
    }
    SantePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SantePage');
    };
    return SantePage;
}(__WEBPACK_IMPORTED_MODULE_3__classes_article__["a" /* Article */]));
SantePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sante',template:/*ion-inline-start:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/sante/sante.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle color="danger" >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Santé</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let ar of articles">\n\n    <img src="{{ar.image}}"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        <p [innerHTML]="ar.title"></p>\n\n      </ion-card-title>\n      <p>\n        {{ar.date}}\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="danger" icon-start (click)="detailArticle(ar)" >\n          <ion-icon name=\'eye\'></ion-icon>\n          Voir\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Publier\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/sante/sante.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_data_rest_data__["a" /* RestDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], SantePage);

//# sourceMappingURL=sante.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_data_rest_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_article__ = __webpack_require__(20);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SportPage = (function (_super) {
    __extends(SportPage, _super);
    function SportPage(navCtrl, navParams, rest, loadingController) {
        var _this = _super.call(this, navCtrl, rest, loadingController) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.loadingController = loadingController;
        _this.categories = ['3', '7285', '7434', '7460', '7426', '7462', '7461'];
        _this.getFirstArticles(_this.categories);
        return _this;
    }
    SportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SportPage');
    };
    return SportPage;
}(__WEBPACK_IMPORTED_MODULE_3__classes_article__["a" /* Article */]));
SportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sport',template:/*ion-inline-start:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/sport/sport.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle color="danger" >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sport</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let ar of articles">\n\n    <img src="{{ar.image}}"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        <p [innerHTML]="ar.title"></p>\n\n      </ion-card-title>\n      <p>\n        {{ar.date}}\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="danger" icon-start (click)="detailArticle(ar)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Voir\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Publier\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/sport/sport.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_data_rest_data__["a" /* RestDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], SportPage);

//# sourceMappingURL=sport.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FemmePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_article__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_data_rest_data__ = __webpack_require__(16);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FemmePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FemmePage = (function (_super) {
    __extends(FemmePage, _super);
    function FemmePage(navCtrl, navParams, rest, loadingController) {
        var _this = _super.call(this, navCtrl, rest, loadingController) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.loadingController = loadingController;
        _this.categories = ['7540', '7546', '7541', '7557'];
        _this.getFirstArticles(_this.categories);
        return _this;
    }
    FemmePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FemmePage');
    };
    return FemmePage;
}(__WEBPACK_IMPORTED_MODULE_2__classes_article__["a" /* Article */]));
FemmePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-femme',template:/*ion-inline-start:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/femme/femme.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle color="danger" >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Femme</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let ar of articles">\n\n    <img src="{{ar.image}}"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        <p [innerHTML]="ar.title"></p>\n\n      </ion-card-title>\n      <p>\n        {{ar.date}}\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="danger" icon-start (click)="detailArticle(ar)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Voir\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Publier\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/femme/femme.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_data_rest_data__["a" /* RestDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], FemmePage);

//# sourceMappingURL=femme.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JusticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_data_rest_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_article__ = __webpack_require__(20);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the JusticePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var JusticePage = (function (_super) {
    __extends(JusticePage, _super);
    function JusticePage(navCtrl, navParams, rest, loadingController) {
        var _this = _super.call(this, navCtrl, rest, loadingController) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.loadingController = loadingController;
        _this.categories = ['44', '7671'];
        _this.getFirstArticles(_this.categories);
        return _this;
    }
    JusticePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JusticePage');
    };
    return JusticePage;
}(__WEBPACK_IMPORTED_MODULE_3__classes_article__["a" /* Article */]));
JusticePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-justice',template:/*ion-inline-start:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/justice/justice.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle color="danger" >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Justice</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let ar of articles">\n\n    <img src="{{ar.image}}"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        <p [innerHTML]="ar.title"></p>\n\n      </ion-card-title>\n      <p>\n        {{ar.date}}\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="danger" icon-start (click)="detailArticle(ar)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Voir\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Publier\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/pages/justice/justice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_data_rest_data__["a" /* RestDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], JusticePage);

//# sourceMappingURL=justice.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 Generated class for the RestDataProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
var RestDataProvider = (function () {
    function RestDataProvider(http) {
        this.http = http;
        this.apiUrl = 'http://technokocc.fr/gawlomob/application/ionicArticles';
        console.log('Hello RestDataProvider Provider');
    }
    RestDataProvider.prototype.getArticles = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Charset', 'UTF-8');
        return this.http.get(this.apiUrl, headers)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestDataProvider.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl).
                subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    RestDataProvider.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    RestDataProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return RestDataProvider;
}());
RestDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], RestDataProvider);

//# sourceMappingURL=rest-data.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/actu/actu.module": [
		280,
		10
	],
	"../pages/afrique/afrique.module": [
		278,
		9
	],
	"../pages/culture/culture.module": [
		282,
		8
	],
	"../pages/detail-article/detail-article.module": [
		277,
		7
	],
	"../pages/femme/femme.module": [
		286,
		6
	],
	"../pages/internationnal/internationnal.module": [
		281,
		5
	],
	"../pages/justice/justice.module": [
		287,
		4
	],
	"../pages/lifestyle/lifestyle.module": [
		283,
		3
	],
	"../pages/politique/politique.module": [
		279,
		2
	],
	"../pages/sante/sante.module": [
		284,
		1
	],
	"../pages/sport/sport.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_article_detail_article__ = __webpack_require__(100);

var Article = (function () {
    function Article(navCtrl, rest, loadingController) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.loadingController = loadingController;
    }
    Article.prototype.getArticles = function () {
        var _this = this;
        this.rest.getArticles()
            .subscribe(function (articles) { return _this.articles = articles; }, function (error) { return _this.errorMessage = error; });
    };
    Article.prototype.getFirstArticles = function (category) {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Chargement des articles"
        });
        loader.present();
        this.rest.getArticles().subscribe(function (data) {
            _this.resp = data;
            _this.articles = _this.resp.articles;
            _this.articles = _this.resp.articles.filter(function (item) {
                return (category.indexOf(item.categorya) > -1) || (category.indexOf(item.categoryb) > -1);
            });
            loader.dismiss();
        });
    };
    Article.prototype.detailArticle = function (article) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detail_article_detail_article__["a" /* DetailArticlePage */], { main: article });
    };
    return Article;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_data_rest_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_actu_actu__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_afrique_afrique__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_culture_culture__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_femme_femme__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_internationnal_internationnal__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_justice_justice__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_lifestyle_lifestyle__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_politique_politique__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sante_sante__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sport_sport__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_detail_article_detail_article__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_actu_actu__["a" /* ActuPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_afrique_afrique__["a" /* AfriquePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_culture_culture__["a" /* CulturePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_femme_femme__["a" /* FemmePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_internationnal_internationnal__["a" /* InternationnalPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_justice_justice__["a" /* JusticePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_lifestyle_lifestyle__["a" /* LifestylePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_politique_politique__["a" /* PolitiquePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_sante_sante__["a" /* SantePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_sport_sport__["a" /* SportPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_detail_article_detail_article__["a" /* DetailArticlePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/detail-article/detail-article.module#DetailArticlePageModule', name: 'DetailArticlePage', segment: 'detail-article', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/afrique/afrique.module#AfriquePageModule', name: 'AfriquePage', segment: 'afrique', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/politique/politique.module#PolitiquePageModule', name: 'PolitiquePage', segment: 'politique', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/actu/actu.module#ActuPageModule', name: 'ActuPage', segment: 'actu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/internationnal/internationnal.module#InternationnalPageModule', name: 'InternationnalPage', segment: 'internationnal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/culture/culture.module#CulturePageModule', name: 'CulturePage', segment: 'culture', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lifestyle/lifestyle.module#LifestylePageModule', name: 'LifestylePage', segment: 'lifestyle', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sante/sante.module#SantePageModule', name: 'SantePage', segment: 'sante', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sport/sport.module#SportPageModule', name: 'SportPage', segment: 'sport', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/femme/femme.module#FemmePageModule', name: 'FemmePage', segment: 'femme', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/justice/justice.module#JusticePageModule', name: 'JusticePage', segment: 'justice', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_actu_actu__["a" /* ActuPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_afrique_afrique__["a" /* AfriquePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_culture_culture__["a" /* CulturePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_femme_femme__["a" /* FemmePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_internationnal_internationnal__["a" /* InternationnalPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_justice_justice__["a" /* JusticePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_lifestyle_lifestyle__["a" /* LifestylePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_politique_politique__["a" /* PolitiquePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_sante_sante__["a" /* SantePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_sport_sport__["a" /* SportPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_detail_article_detail_article__["a" /* DetailArticlePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_6__providers_rest_data_rest_data__["a" /* RestDataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_afrique_afrique__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_politique_politique__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_actu_actu__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_internationnal_internationnal__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_culture_culture__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lifestyle_lifestyle__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sante_sante__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sport_sport__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_femme_femme__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_justice_justice__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_actu_actu__["a" /* ActuPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Actualité', component: __WEBPACK_IMPORTED_MODULE_6__pages_actu_actu__["a" /* ActuPage */] },
            { title: 'Politique', component: __WEBPACK_IMPORTED_MODULE_5__pages_politique_politique__["a" /* PolitiquePage */] },
            { title: 'Internationnal', component: __WEBPACK_IMPORTED_MODULE_7__pages_internationnal_internationnal__["a" /* InternationnalPage */] },
            { title: 'Afrique', component: __WEBPACK_IMPORTED_MODULE_4__pages_afrique_afrique__["a" /* AfriquePage */] },
            { title: 'Culture', component: __WEBPACK_IMPORTED_MODULE_8__pages_culture_culture__["a" /* CulturePage */] },
            { title: 'LifeStyle', component: __WEBPACK_IMPORTED_MODULE_9__pages_lifestyle_lifestyle__["a" /* LifestylePage */] },
            { title: 'Santé', component: __WEBPACK_IMPORTED_MODULE_10__pages_sante_sante__["a" /* SantePage */] },
            { title: 'Sport', component: __WEBPACK_IMPORTED_MODULE_11__pages_sport_sport__["a" /* SportPage */] },
            { title: 'Femme', component: __WEBPACK_IMPORTED_MODULE_12__pages_femme_femme__["a" /* FemmePage */] },
            { title: 'Justice', component: __WEBPACK_IMPORTED_MODULE_13__pages_justice_justice__["a" /* JusticePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title color="energy">Diaspora7</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/dnid/Documents/HybrideApp/khadimDieng/diaspora7/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map