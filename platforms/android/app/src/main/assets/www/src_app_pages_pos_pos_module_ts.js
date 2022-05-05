"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_pos_pos_module_ts"],{

/***/ 236:
/*!*********************************************************!*\
  !*** ./src/app/layouts/main/footer/footer.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 1782);
/* harmony import */ var _footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css?ngResource */ 3398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FooterComponent = class FooterComponent {
    constructor() {
        this.today = new Date().getFullYear();
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 4588:
/*!*********************************************************!*\
  !*** ./src/app/layouts/main/header/header.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 5413);
/* harmony import */ var _header_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.css?ngResource */ 7930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/search.service */ 4112);





let HeaderComponent = class HeaderComponent {
    constructor(searchService) {
        this.searchService = searchService;
        this.searchKey = "";
    }
    ngOnInit() {
    }
    getData(event) {
        if (this.searchKey) {
            this.searchService.setsearchkey(event.target.value || "");
        }
        else if (event.target.value.length > 1) {
            this.searchKey = event.target.value;
            this.searchService.setsearchkey(event.target.value);
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService }
];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 915:
/*!************************************************!*\
  !*** ./src/app/layouts/main/main.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component.html?ngResource */ 9539);
/* harmony import */ var _main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component.scss?ngResource */ 346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent.ctorParameters = () => [];
MainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-main',
        template: _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainComponent);



/***/ }),

/***/ 8590:
/*!*********************************************!*\
  !*** ./src/app/layouts/main/main.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutModule": () => (/* binding */ MainLayoutModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component */ 915);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 4588);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 236);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);








let MainLayoutModule = class MainLayoutModule {
};
MainLayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot()
        ],
        exports: [
            _main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
        ]
    })
], MainLayoutModule);



/***/ }),

/***/ 3161:
/*!**********************************************************************!*\
  !*** ./src/app/pages/modal/product-modal/product-modal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModalComponent": () => (/* binding */ ProductModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _product_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-modal.component.html?ngResource */ 2534);
/* harmony import */ var _product_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-modal.component.scss?ngResource */ 2288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ProductModalComponent = class ProductModalComponent {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.qty = 1;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            loop: true,
            autoplay: {
                delay: 2000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
    }
    toChange(i) {
        var _a;
        (_a = this.viewer.nativeElement) === null || _a === void 0 ? void 0 : _a.slideTo(i + 1, 500);
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const onClosedData = 'Wrapped Up!';
            yield this.modalController.dismiss(onClosedData);
        });
    }
    qtyIncrease() {
        this.qty = this.qty + 1;
    }
    qtyDecriment() {
        if (this.qty > 0) {
            this.qty = this.qty - 1;
        }
    }
    onSlideMoved(event) {
        // this.slides.slideTo(i);
        event.target.isEnd().then((isEnd) => {
            console.log('End of slide', isEnd);
        });
        event.target.isBeginning().then((istrue) => {
            console.log('End of slide', istrue);
        });
    }
    // this.cd.detectChanges();
    ngOnInit() { }
};
ProductModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams }
];
ProductModalComponent.propDecorators = {
    viewer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['sliderIndex', { read: false, static: false },] }]
};
ProductModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-modal',
        template: _product_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductModalComponent);



/***/ }),

/***/ 2136:
/*!*************************************************!*\
  !*** ./src/app/pages/pos/pos-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosRoutingModule": () => (/* binding */ PosRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_layouts_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layouts/main/main.component */ 915);
/* harmony import */ var _pos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos.component */ 7593);





const routes = [
    {
        path: '',
        component: src_app_layouts_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        children: [
            { path: '', component: _pos_component__WEBPACK_IMPORTED_MODULE_1__.PosComponent }
        ]
    }
];
let PosRoutingModule = class PosRoutingModule {
};
PosRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], PosRoutingModule);



/***/ }),

/***/ 7593:
/*!********************************************!*\
  !*** ./src/app/pages/pos/pos.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosComponent": () => (/* binding */ PosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos.component.html?ngResource */ 8744);
/* harmony import */ var _pos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos.component.scss?ngResource */ 7314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_apiServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apiServices */ 5030);
/* harmony import */ var _modal_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/product-modal/product-modal.component */ 3161);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/loader-service */ 7961);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/search.service */ 4112);










let PosComponent = class PosComponent {
    constructor(router, http, modalController, loader, searchService) {
        this.router = router;
        this.http = http;
        this.modalController = modalController;
        this.loader = loader;
        this.searchService = searchService;
        this.productData = [];
        this.selectedCategory = '';
        this.selectbookmark = '';
        this.loading = true;
        this.type = 'bestSellers';
        this.searchkey = "";
        this.offset = 0;
        this.limit = 2;
        this.searchService.searchSubject.subscribe((data) => {
            this.searchkey = data || "";
            this.loadProduct();
        });
    }
    ngOnInit() {
        this.loader.startLoading();
        this.catResponse = this.http.getCategory().subscribe((data) => {
            this.categoryData = data;
            this.getProduct();
        });
    }
    loadProduct(id) {
        this.loader.startLoading();
        this.selectedCategory = id || "";
        this.getProduct();
    }
    addBookmark(id) {
        this.selectbookmark = id;
    }
    getProduct() {
        var _a, _b;
        if (this.productResponse) {
            this.productResponse.unsubscribe();
        }
        this.productResponse = (_b = (_a = this.http) === null || _a === void 0 ? void 0 : _a.getProduct(this.selectedCategory, this.type, this.searchkey, this.offset, this.limit)) === null || _b === void 0 ? void 0 : _b.subscribe((data) => {
            this.productData = data;
            this.loader.stopLoading();
        });
    }
    productDetail(productDetail) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(productDetail);
            const modal = yield this.modalController.create({
                component: _modal_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_3__.ProductModalComponent,
                componentProps: {
                    "data": productDetail
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    closeModal() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    getProductList(type) {
        this.type = type;
        this.getProduct();
    }
    ngOnDestroy() {
        this.catResponse.unsubscribe();
        this.productResponse.unsubscribe();
    }
};
PosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_apiServices__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService },
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_5__.SearchService }
];
PosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-pos',
        template: _pos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PosComponent);



/***/ }),

/***/ 3645:
/*!*****************************************!*\
  !*** ./src/app/pages/pos/pos.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosModule": () => (/* binding */ PosModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _pos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos-routing.module */ 2136);
/* harmony import */ var _pos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pos.component */ 7593);
/* harmony import */ var _modal_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/product-modal/product-modal.component */ 3161);
/* harmony import */ var src_app_layouts_main_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/layouts/main/main.module */ 8590);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);









let PosModule = class PosModule {
};
PosModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_pos_component__WEBPACK_IMPORTED_MODULE_2__.PosComponent, _modal_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_3__.ProductModalComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, src_app_layouts_main_main_module__WEBPACK_IMPORTED_MODULE_4__.MainLayoutModule, _pos_routing_module__WEBPACK_IMPORTED_MODULE_1__.PosRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule],
        exports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
    })
], PosModule);



/***/ }),

/***/ 4112:
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);



let SearchService = class SearchService {
    constructor() {
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    }
    setsearchkey(name) {
        this.searchSubject.next(name);
    }
};
SearchService.ctorParameters = () => [];
SearchService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], SearchService);



/***/ }),

/***/ 89:
/*!***********************************************!*\
  !*** ./src/app/shared/cart/cart.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.component.html?ngResource */ 9298);
/* harmony import */ var _cart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.component.scss?ngResource */ 927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CartComponent = class CartComponent {
    constructor() { }
    ngOnInit() { }
};
CartComponent.ctorParameters = () => [];
CartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cart',
        template: _cart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartComponent);



/***/ }),

/***/ 1455:
/*!*****************************************************************!*\
  !*** ./src/app/shared/category-tile/category-tile.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryTileComponent": () => (/* binding */ CategoryTileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _category_tile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-tile.component.html?ngResource */ 7850);
/* harmony import */ var _category_tile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-tile.component.scss?ngResource */ 5272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let CategoryTileComponent = class CategoryTileComponent {
    constructor() {
        this.loadProductEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    loadProduct(event) {
        this.loadProductEvent.emit(event);
    }
};
CategoryTileComponent.ctorParameters = () => [];
CategoryTileComponent.propDecorators = {
    selectedCategory: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    categoryData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    loadProductEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
CategoryTileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'category-tile',
        template: _category_tile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_category_tile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoryTileComponent);



/***/ }),

/***/ 8492:
/*!***************************************************************!*\
  !*** ./src/app/shared/product-tile/product-tile.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductTileComponent": () => (/* binding */ ProductTileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _product_tile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-tile.component.html?ngResource */ 3100);
/* harmony import */ var _product_tile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-tile.component.scss?ngResource */ 5088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ProductTileComponent = class ProductTileComponent {
    constructor() {
        this.productPage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    productDetail(event) {
        this.productPage.emit(event);
    }
};
ProductTileComponent.ctorParameters = () => [];
ProductTileComponent.propDecorators = {
    productData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    productPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ProductTileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'product-tile',
        template: _product_tile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_tile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductTileComponent);



/***/ }),

/***/ 6976:
/*!**************************************************!*\
  !*** ./src/app/shared/shared-routing.modulet.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedRoutingModule": () => (/* binding */ SharedRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.component */ 6688);




const routes = [
    { path: '', component: _shared_component__WEBPACK_IMPORTED_MODULE_0__.SharedComponent }
];
let SharedRoutingModule = class SharedRoutingModule {
};
SharedRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], SharedRoutingModule);



/***/ }),

/***/ 6688:
/*!********************************************!*\
  !*** ./src/app/shared/shared.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponent": () => (/* binding */ SharedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _shared_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.component.html?ngResource */ 4846);
/* harmony import */ var _shared_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.component.scss?ngResource */ 6014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SharedComponent = class SharedComponent {
    constructor() {
    }
};
SharedComponent.ctorParameters = () => [];
SharedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        template: _shared_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shared_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SharedComponent);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.component */ 6688);
/* harmony import */ var _shared_routing_modulet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-routing.modulet */ 6976);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart.component */ 89);
/* harmony import */ var _category_tile_category_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-tile/category-tile.component */ 1455);
/* harmony import */ var _product_tile_product_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-tile/product-tile.component */ 8492);









let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_shared_component__WEBPACK_IMPORTED_MODULE_0__.SharedComponent, _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__.CartComponent, _category_tile_category_tile_component__WEBPACK_IMPORTED_MODULE_3__.CategoryTileComponent, _product_tile_product_tile_component__WEBPACK_IMPORTED_MODULE_4__.ProductTileComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _shared_routing_modulet__WEBPACK_IMPORTED_MODULE_1__.SharedRoutingModule
        ],
        exports: [_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__.CartComponent, _category_tile_category_tile_component__WEBPACK_IMPORTED_MODULE_3__.CategoryTileComponent, _product_tile_product_tile_component__WEBPACK_IMPORTED_MODULE_4__.ProductTileComponent]
    })
], SharedModule);



/***/ }),

/***/ 3398:
/*!*********************************************************************!*\
  !*** ./src/app/layouts/main/footer/footer.component.css?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 7930:
/*!*********************************************************************!*\
  !*** ./src/app/layouts/main/header/header.component.css?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 346:
/*!*************************************************************!*\
  !*** ./src/app/layouts/main/main.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 2288:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/modal/product-modal/product-modal.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".img-size {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InByb2R1Y3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXNpemV7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 7314:
/*!*********************************************************!*\
  !*** ./src/app/pages/pos/pos.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/* Custom Skeleton Line Height and Margin */\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBQTtBQUNBO0VBQ0ksaUJBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7QUFDSiIsImZpbGUiOiJwb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDdXN0b20gU2tlbGV0b24gTGluZSBIZWlnaHQgYW5kIE1hcmdpbiAqL1xuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dCB7XG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIH1cbiAgXG4gIC5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQ6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9Il19 */";

/***/ }),

/***/ 927:
/*!************************************************************!*\
  !*** ./src/app/shared/cart/cart.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 5272:
/*!******************************************************************************!*\
  !*** ./src/app/shared/category-tile/category-tile.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS10aWxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 5088:
/*!****************************************************************************!*\
  !*** ./src/app/shared/product-tile/product-tile.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXRpbGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6014:
/*!*********************************************************!*\
  !*** ./src/app/shared/shared.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1782:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/main/footer/footer.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "";

/***/ }),

/***/ 5413:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/main/header/header.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header id=\"site-header\">\n  <a routerLink=\"/welcome\" class=\"brand\">\n      <svg class=\"sidebar-left\">\n          <use xlink:href=\"./assets/images/svg-sprite.svg#sidebar-left\"></use>\n      </svg>\n      <h1>POS</h1>\n  </a>\n  <div class=\"header-search\">\n      <svg class=\"icon-search\">\n          <use xlink:href=\"./assets/images/svg-sprite.svg#icon-search\"></use>\n      </svg>\n      <input type=\"text\"  (keyup)=\"getData($event)\" class=\"form-control\" placeholder=\"Search by product name...\"/>\n  </div>\n  <div class=\"profile-action ms-auto\">\n      <a href=\"javascript:void(0)\" class=\"user-profile\">\n          <img src=\"./assets/images/profile-img.png\" alt=\"\"/>\n          <span>James Gouse</span>\n      </a>\n      <a href=\"javascript:void(0)\" class=\"store-btn btn-border\">Log out</a>\n  </div>\n</ion-header>";

/***/ }),

/***/ 9539:
/*!*************************************************************!*\
  !*** ./src/app/layouts/main/main.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>";

/***/ }),

/***/ 2534:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/modal/product-modal/product-modal.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "  <div id=\"lucid-cart-modal\">\n  <ion-header [translucent]=\"true\" class=\"lucid-modal-header\">\n      <h2 class=\"modal-title\">{{data.name}}</h2>\n      <a  (click)=\"closeModal()\" href=\"javascript:void(0)\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></a>\n</ion-header>\n\n<div class=\"modal-body modal-body d-lg-flex justify-content-between\">\n\n\n  <div class=\"product-slider\">\n    <ion-slides #sliderIndex pager=\"true\" [options]=\"slideOpts\" id=\"sliderIndex\">\n    <!--<ion-slides   #sliderIndex  pager=\"true\" >-->\n      <ion-slide  *ngFor=\"let img of data.images\">\n        <img [src]=\"img.image\" alt=\"\"/>\n      </ion-slide>\n    </ion-slides>\n\n    <div class=\"slider-nav\">\n        <div class=\"thumb-image\" *ngFor=\"let timg of data.images; index as i \" (click)=\"toChange(i)\">\n            <img class=\"img-size\" [src]=\"timg.image\" alt=\"\"/>\n        </div>\n\n    </div>\n</div>\n<div class=\"product-detail\">\n  <h4 *ngIf=\"data.variants.length>0\">Choose size</h4>\n  <ul class=\"custom-radio-button d-flex flex-wrap\">\n      <li *ngFor=\"let variant of data.variants\">\n        <div class=\"form-group\" (click)=\"size = variant\">\n            <input type=\"radio\" id=\"{{variant.size}}\" name=\"size\" checked/>\n            <label for=\"{{variant.size}}\">{{variant.size}}</label>\n          </div>\n      </li>\n  </ul>\n  <h4>Choose quantity</h4>\n  <div class=\"quantity-wrapper\">\n    <button class=\"decrement\" (click)=\"qtyDecriment()\"><i class=\"fa fa-chevron-left\"></i></button>\n    <input class=\"counter\" type='text' [(ngModel)]=\"qty\">\n    <button class=\"increment\" (click)=\"qtyIncrease()\"><i class=\"fa fa-chevron-right\"></i></button>\n  </div>\n  <div class=\"product-info\">\n    <div class=\"quantity-available\">Quantity available in stock: <span>430</span></div>\n    <div class=\"product-health good\">Good Stock health</div>\n</div>\n  <a href=\"javascript:void(0)\" class=\"store-btn-lg btn-blue\">Add to Order</a>\n</div>\n\n</div>\n</div>\n  <!-- Modal -->\n";

/***/ }),

/***/ 8744:
/*!*********************************************************!*\
  !*** ./src/app/pages/pos/pos.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n    <div class=\"site-wrapper d-lg-flex flex-md-wrap justify-content-md-between\">\n        <div class=\"left-section\">\n         <category-tile [selectedCategory]=\"selectedCategory\" [categoryData]=\"categoryData\" (loadProductEvent)=\"loadProduct($event)\"></category-tile>\n\n\n            <div class=\"tab_container\">\n                <h3 class=\"d_active tab_drawer_heading\" rel=\"tab1\">\n                    <svg class=\"icon\">\n                        <use xlink:href=\"./assets/images/svg-sprite.svg#icon-all\"></use>\n                    </svg> All\n                </h3>\n                <div id=\"tab1\" class=\"tab_content\">\n                    <ul class=\"store-tabs d-flex justify-content-center\">\n                        <li class=\"tab-link\" [class.current]=\"type=='bestSellers'\" data-tab=\"tab-1\" (click)=\"getProductList('bestSellers')\">Popular</li>\n                        <li class=\"tab-link\" data-tab=\"tab-2\" [class.current]=\"type=='recentlySold'\" (click)=\"getProductList('recentlySold')\">Recently sold</li>\n                        <li class=\"tab-link\" data-tab=\"tab-3\" [class.current]=\"type=='newLaunched'\" (click)=\"getProductList('newLaunched')\">New Launch</li>\n                        <li class=\"tab-link\" data-tab=\"tab-4\" [class.current]=\"type=='bookMarked'\" (click)=\"getProductList('bookMarked')\">Bookmarks</li>\n                    </ul>\n\n                   <product-tile *ngIf=\"productData.data.length\" [productData]=\"productData\" (productPage)=\"productDetail($event)\"></product-tile>\n                   <div *ngIf=\"productData.data.length==0\">NO PRODUCT</div>\n                </div>\n            </div>\n            <!-- .tab_container -->\n        </div>\n        <app-cart class=\"right-section\"></app-cart>\n    </div>\n\n</ion-content>\n";

/***/ }),

/***/ 9298:
/*!************************************************************!*\
  !*** ./src/app/shared/cart/cart.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"order-summary-head d-flex justify-content-between align-items-center\">\n    <h3>Order Summary</h3>\n    <div class=\"order-action d-flex align-items-center\">\n    <a href=\"javascript:void(0)\"><svg class=\"icon\">\n        <use xlink:href=\"./assets/images/svg-sprite.svg#icon-tag\"></use>\n    </svg></a>\n    <a href=\"javascript:void(0)\"><svg class=\"icon\">\n        <use xlink:href=\"./assets/images/svg-sprite.svg#icon-bin\"></use>\n    </svg></a>\n</div>\n</div>\n<div class=\"add-customer-box\">\n    <a href=\"javascript:void(0)\" class=\"add-customer\">\n        <svg class=\"icon\">\n            <use xlink:href=\"./assets/images/svg-sprite.svg#icon-customer\"></use>\n        </svg>\n        Look up customer</a>\n        <a href=\"javascript:void(0)\" class=\"store-btn btn-border\">Create New</a>\n</div>\n    <ul class=\"cart-product-list\">\n        <li class=\"d-flex align-items-center\">\n            <a href=\"javascript:void(0)\" class=\"remove-btn\"></a>\n            <div class=\"product-info d-flex\">\n                <div class=\"image\">\n                    <img src=\"./assets/images/cart-product-thumb.png\" alt=\"\"/>\n                </div>\n                <div class=\"product-content\">\n                    <h4>Men's - Polo Shirt - White</h4>\n                    <div class=\"quantity\">Quantity <span>1</span></div>\n                </div>\n                <div class=\"price\">$68.00</div>\n            </div>\n        </li>\n        <li class=\"d-flex align-items-center\">\n            <a href=\"javascript:void(0)\" class=\"remove-btn\"></a>\n            <div class=\"product-info d-flex\">\n                <div class=\"image\">\n                    <img src=\"./assets/images/cart-product-thumb-cup.png\" alt=\"\"/>\n                </div>\n                <div class=\"product-content\">\n                    <h4>Camp Cup - White</h4>\n                    <div class=\"quantity\">Quantity <span>1</span></div>\n                </div>\n                <div class=\"price\">$28.00</div>\n            </div>\n        </li>\n    </ul>\n    <div class=\"product-bill-wrapper\">\n        <div class=\"bill-row d-flex justify-content-between align-items-center\">\n            <div class=\"subtotal\">Sub Total</div>\n            <div class=\"sub-amount\">$96.00</div>\n        </div>\n        <div class=\"tax-amount d-flex justify-content-between align-items-center\">\n            <div class=\"tax\">Sales Tax (5.7%)</div>\n            <div class=\"sub-amount\">$5.40</div>\n        </div>\n        <div class=\"pay-amount d-flex justify-content-between align-items-center\">\n            <div class=\"tax\">You will Pay</div>\n            <div class=\"sub-amount\">$101.40</div>\n        </div>\n    </div>\n    <button class=\"store-btn-lg btn-blue\">Pay $101.40</button>\n     <div class=\"empty-bag\">\n        <svg class=\"icon\">\n            <use xlink:href=\"./assets/images/svg-sprite.svg#icon-bear\"></use>\n        </svg>\n         <p>Your bag is empty.</p>\n     </div>";

/***/ }),

/***/ 7850:
/*!******************************************************************************!*\
  !*** ./src/app/shared/category-tile/category-tile.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ul class=\"category-tabs d-md-flex justify-content-between\" *ngIf=\"categoryData\">\n  <li [class.active]=\"'' == selectedCategory\" (click)=\"loadProduct('')\" rel=\"tab1\">\n      <svg class=\"icon\">\n          <use xlink:href=\"./assets/images/svg-sprite.svg#icon-all\"></use>\n      </svg>\n      <svg class=\"icon-white\">\n        <use xlink:href=\"./assets/images/svg-sprite.svg#icon-all-white\"></use>\n    </svg>\n      All Products\n  </li>\n  <li [class.active]=\"data._id == selectedCategory\" (click)=\"loadProduct(data?._id )\" rel=\"tab2\"\n      *ngFor=\"let data of categoryData?.data\">\n      <svg class=\"icon\">\n          <use attr.xlink:href=\"./assets/images/svg-sprite.svg#{{data.icon}}\"></use>\n      </svg>\n      <svg class=\"icon-white\">\n        <use attr.xlink:href=\"./assets/images/svg-sprite.svg#{{data.icon}}-white\"></use>\n    </svg>\n      {{data.name}}\n  </li>\n\n</ul>\n";

/***/ }),

/***/ 3100:
/*!****************************************************************************!*\
  !*** ./src/app/shared/product-tile/product-tile.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"tab-1\" class=\"store-content current\">\n  <div class=\"store-products d-md-flex flex-wrap\" *ngIf=\"productData\">\n      <div class=\"product-box\" *ngFor=\"let product of productData.data\">\n          <a href=\"javascript:void(0)\" (click)=\"addBookmark(product._id )\" class=\"product-ribbon\"\n          [class.active]=\"product?.isBookmarked\">\n              <svg class=\"icon\">\n                  <use xlink:href=\"./assets/images/svg-sprite.svg#icon-ribbon\"></use>\n              </svg>\n              <svg class=\"icon\">\n                  <use xlink:href=\"./assets/images/svg-sprite.svg#icon-ribbon-filled\"></use>\n              </svg>\n          </a>\n          <a href=\"javascript:void(0)\" (click)=\"productDetail(product)\" class=\"block-link\"></a>\n          <div class=\"image-container\">\n              <img [src]=\"product?.images[0]['image']\" alt=\"\" />\n          </div>\n          <div class=\"content\">\n              <h4>{{product.name}}k</h4>\n              <div class=\"product-health bad\">4 ITEMS RUNNING LOW</div>\n              <div class=\"price d-flex justify-content-between align-items-center\">\n                  <h2>{{product?.priceBook?.symbol}}{{product.basePrice}}</h2>\n              </div>\n          </div>\n      </div>\n\n  </div>\n</div>";

/***/ }),

/***/ 4846:
/*!*********************************************************!*\
  !*** ./src/app/shared/shared.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content >\n<div class=\"site-wrapper d-lg-flex flex-md-wrap justify-content-md-between search-results\">\n    <div class=\"left-section\">\n         <h3>Search Results</h3>\n         <div class=\"store-products d-md-flex flex-wrap\">\n            <div class=\"product-box\">\n                <a href=\"javascript:void(0)\" class=\"product-ribbon\">\n                    <svg class=\"icon\">\n                        <use xlink:href=\"images/svg-sprite.svg#icon-ribbon\"></use>\n                    </svg>\n                    <svg class=\"icon\">\n                        <use xlink:href=\"images/svg-sprite.svg#icon-ribbon-filled\"></use>\n                    </svg>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"block-link\"></a>\n                <div class=\"image-container\">\n                    <img src=\"images/mens-polo-tshirt.png\" alt=\"\"/>\n                </div>\n                <div class=\"content\">\n                    <h4>Men's - Polo Shirt - Black</h4>\n                    <div class=\"product-health bad\">4 ITEMS RUNNING LOW</div>\n                    <div class=\"price d-flex justify-content-between align-items-center\">\n                        <h2>$68.00</h2>\n                    </div>\n                </div>\n            </div>\n            <div class=\"product-box\">\n                <a href=\"javascript:void(0)\" class=\"product-ribbon\">\n                    <svg class=\"icon\">\n                        <use xlink:href=\"images/svg-sprite.svg#icon-ribbon\"></use>\n                    </svg>\n                    <svg class=\"icon\">\n                        <use xlink:href=\"images/svg-sprite.svg#icon-ribbon-filled\"></use>\n                    </svg>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"block-link\"></a>\n                <div class=\"image-container\">\n                    <img src=\"images/women-polo-white.png\" alt=\"\"/>\n                </div>\n                <div class=\"content\">\n                    <h4>Men's - Polo Shirt - White</h4>\n                    <div class=\"product-health good\">Good Stock Health</div>\n                    <div class=\"price d-flex justify-content-between align-items-center\">\n                        <h2>$68.00</h2>\n                    </div>\n                </div>\n            </div>\n            <div class=\"product-box\">\n                <a href=\"javascript:void(0)\" class=\"product-ribbon\">\n                    <svg class=\"icon\">\n                        <use xlink:href=\"images/svg-sprite.svg#icon-ribbon\"></use>\n                    </svg>\n                    <svg class=\"icon\">\n                        <use xlink:href=\"images/svg-sprite.svg#icon-ribbon-filled\"></use>\n                    </svg>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"block-link\"></a>\n                <div class=\"image-container\">\n                    <img src=\"images/mens-polo-tshirt.png\" alt=\"\"/>\n                </div>\n                <div class=\"content\">\n                    <h4>Men's - Polo Shirt - Black</h4>\n                    <div class=\"product-health bad\">4 ITEMS RUNNING LOW</div>\n                    <div class=\"price d-flex justify-content-between align-items-center\">\n                        <h2>$68.00</h2>\n                    </div>\n                </div>\n            </div>\n            <div class=\"product-box\">\n                <a href=\"javascript:void(0)\" class=\"product-ribbon\">\n                    <svg class=\"icon\">\n                        <use xlink:href=\"images/svg-sprite.svg#icon-ribbon\"></use>\n                    </svg>\n                    <svg class=\"icon\">\n                        <use xlink:href=\"images/svg-sprite.svg#icon-ribbon-filled\"></use>\n                    </svg>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"block-link\"></a>\n                <div class=\"image-container\">\n                    <img src=\"images/women-polo-white.png\" alt=\"\"/>\n                </div>\n                <div class=\"content\">\n                    <h4>Men's - Polo Shirt - White</h4>\n                    <div class=\"product-health good\">Good Stock Health</div>\n                    <div class=\"price d-flex justify-content-between align-items-center\">\n                        <h2>$68.00</h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"right-section\">\n        <h3>Order Summary</h3>\n        <a href=\"javascript:void(0)\" class=\"add-customer\">\n            <svg class=\"icon\">\n                <use xlink:href=\"images/svg-sprite.svg#icon-customer\"></use>\n            </svg>\n            Guest</a>\n             <div class=\"empty-bag\">\n                 <img src=\"images/icon-bear.png\" alt=\"\"/>\n                 <p>Your bag is empty.</p>\n             </div>\n    </div>\n</div>\n</ion-content >\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pos_pos_module_ts.js.map