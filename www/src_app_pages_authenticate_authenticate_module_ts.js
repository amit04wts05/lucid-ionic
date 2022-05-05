"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_authenticate_authenticate_module_ts"],{

/***/ 7179:
/*!********************************************************************!*\
  !*** ./src/app/pages/authenticate/authenticate-routing.modulet.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticateRoutingModule": () => (/* binding */ AuthenticateRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _authenticate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticate.component */ 2089);




const routes = [
    { path: '', component: _authenticate_component__WEBPACK_IMPORTED_MODULE_0__.AuthenticateComponent }
];
let AuthenticateRoutingModule = class AuthenticateRoutingModule {
};
AuthenticateRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AuthenticateRoutingModule);



/***/ }),

/***/ 2089:
/*!**************************************************************!*\
  !*** ./src/app/pages/authenticate/authenticate.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticateComponent": () => (/* binding */ AuthenticateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _authenticate_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticate.component.html?ngResource */ 9538);
/* harmony import */ var _authenticate_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authenticate.component.scss?ngResource */ 6903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AuthenticateComponent = class AuthenticateComponent {
    constructor() {
    }
};
AuthenticateComponent.ctorParameters = () => [];
AuthenticateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        template: _authenticate_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authenticate_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthenticateComponent);



/***/ }),

/***/ 2539:
/*!***********************************************************!*\
  !*** ./src/app/pages/authenticate/authenticate.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticateModule": () => (/* binding */ AuthenticateModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _authenticate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticate.component */ 2089);
/* harmony import */ var _authenticate_routing_modulet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authenticate-routing.modulet */ 7179);






let AuthenticateModule = class AuthenticateModule {
};
AuthenticateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_authenticate_component__WEBPACK_IMPORTED_MODULE_0__.AuthenticateComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(),
            _authenticate_routing_modulet__WEBPACK_IMPORTED_MODULE_1__.AuthenticateRoutingModule
        ]
    })
], AuthenticateModule);



/***/ }),

/***/ 6903:
/*!***************************************************************************!*\
  !*** ./src/app/pages/authenticate/authenticate.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoZW50aWNhdGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9538:
/*!***************************************************************************!*\
  !*** ./src/app/pages/authenticate/authenticate.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content >\n<div class=\"text-center\">\n    <h2>Who is using Scottsdale AZ Studio</h2>\n    <div class=\"container\">\n        <div class=\"row user-row align-items-center justify-content-center flex-column\">\n            <div class=\"col-md-3 col-sm-6 d-inline-flex justify-content-center\">\n                <div class=\"user-box d-flex flex-column align-items-center\">\n                    <a routerLink=\"/pos\" class=\"block-link\"></a>\n                        <div class=\"user-img\">\n                            <img src=\"./assets/images/user-img-1.png\" alt=\"\"/>\n                        </div>\n                        <div class=\"content\">\n                            <h3>George Gouse</h3>\n                        </div>\n                </div>\n            </div>\n            <div class=\"password-wrapper d-flex align-items-center justify-content-center\">\n                <input class=\"inputs\" type=\"password\" maxlength=\"1\" placeholder=\"0\" />\n                <input class=\"inputs\" type=\"password\" maxlength=\"1\" placeholder=\"0\"/>\n                <input class=\"inputs\" type=\"password\" maxlength=\"1\"  placeholder=\"0\"/>\n                <input class=\"inputs\" type=\"password\" maxlength=\"1\"  placeholder=\"0\"/>\n            </div>\n            <div class=\"finger-print\" routerLink=\"/pos\" routerDirection=\"root\">\n                <svg class=\"icon\">\n                    <use xlink:href=\"./assets/images/svg-sprite.svg#icon-finger-print\"></use>\n                </svg>\n                  </div>\n            </div>\n        </div>\n    </div>\n\n  </ion-content >\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_authenticate_authenticate_module_ts.js.map