"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_welcome_welcome_module_ts"],{

/***/ 5338:
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _welcome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.component.html?ngResource */ 3046);
/* harmony import */ var _welcome_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component.scss?ngResource */ 792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let WelcomeComponent = class WelcomeComponent {
    constructor() {
    }
};
WelcomeComponent.ctorParameters = () => [];
WelcomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        template: _welcome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomeComponent);



/***/ }),

/***/ 2282:
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeModule": () => (/* binding */ WelcomeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.component */ 5338);
/* harmony import */ var _welcome_routing_modulet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome_routing.modulet */ 4419);






let WelcomeModule = class WelcomeModule {
};
WelcomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(),
            _welcome_routing_modulet__WEBPACK_IMPORTED_MODULE_1__.WelcomesRoutingModule
        ]
    })
], WelcomeModule);



/***/ }),

/***/ 4419:
/*!**********************************************************!*\
  !*** ./src/app/pages/welcome/welcome_routing.modulet.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomesRoutingModule": () => (/* binding */ WelcomesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.component */ 5338);




const routes = [
    { path: '', component: _welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent }
];
let WelcomesRoutingModule = class WelcomesRoutingModule {
};
WelcomesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], WelcomesRoutingModule);



/***/ }),

/***/ 792:
/*!*****************************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3046:
/*!*****************************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content >\n<div class=\"outer-wrapper\">\n    <h2 class=\"ion-text-center\">Who is using Studio</h2>\n    <div class=\"container\">\n        <div class=\"row user-row align-items-center justify-content-center\">\n            <div class=\"col-md-3 col-sm-6 d-inline-flex justify-content-center\">\n            <div class=\"user-box d-flex flex-column align-items-center aos\"  data-aos-delay=\"300\">\n                <a routerLink=\"/authentication\" routerDirection=\"forward\">\n                    <div class=\"user-img\">\n                        <img src=\"./assets/images/user-img-1.png\" alt=\"\"/>\n                    </div>\n                    <div class=\"content\">\n                        <h3>George Gouse</h3>\n                    </div>\n                    </a>\n            </div>\n            </div>\n            <div class=\"col-md-3 col-sm-6 d-inline-flex justify-content-center\">\n            <div class=\"user-box d-flex flex-column align-items-center aos\"  data-aos-delay=\"500\">\n                <a routerLink=\"/authentication\" routerDirection=\"forward\">\n                    <div class=\"user-img\">\n                        <img src=\"./assets/images/user-img-2.png\" alt=\"\"/>\n                    </div>\n                    <div class=\"content\">\n                        <h3>Tamarcus Brown</h3>\n                    </div>\n                </a>\n            </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 d-inline-flex justify-content-center\">\n            <div class=\"user-box d-flex flex-column align-items-center aos\" data-aos-delay=\"800\">\n                <a routerLink=\"/authentication\" routerDirection=\"forward\">\n                <div class=\"user-img\">\n                    <img src=\"./assets/images/user-img-3.png\" alt=\"\"/>\n                </div>\n                <div class=\"content\">\n                    <h3>Zahir Namane</h3>\n                </div>\n                </a>\n            </div>\n        </div>\n        \n        <div class=\"col-md-3 col-sm-6 d-inline-flex justify-content-center\">\n            <div class=\"user-box d-flex flex-column align-items-center aos\"  data-aos-delay=\"1100\">\n                <a routerLink=\"/authentication\" routerDirection=\"forward\">\n                <div class=\"user-img\">\n                    <img src=\"./assets/images/user-img-4.png\" alt=\"\"/>\n                </div>\n                <div class=\"content\">\n                    <h3>Marissa Grootes</h3>\n                </div>\n                </a>\n            </div>\n            </div>\n            </div>\n            <div class=\"cant-find-section text-center\">\n                <h6><span>OR</span></h6>\n                <h2>Can't find yourself!</h2>\n                <p>You can always login to get going.</p>\n                <a  class=\"store-btn-lg btn-border\" routerLink=\"/authentication\" routerDirection=\"forward\">Login</a>\n            </div>\n    </div>\n</div>\n\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_welcome_welcome_module_ts.js.map