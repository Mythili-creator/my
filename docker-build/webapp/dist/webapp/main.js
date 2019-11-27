(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _food_food_item_edit_food_item_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food/food-item-edit/food-item-edit.component */ "./src/app/food/food-item-edit/food-item-edit.component.ts");
/* harmony import */ var _food_food_item_info_food_item_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food/food-item-info/food-item-info.component */ "./src/app/food/food-item-info/food-item-info.component.ts");
/* harmony import */ var _food_food_menu_food_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food/food-menu/food-menu.component */ "./src/app/food/food-menu/food-menu.component.ts");
/* harmony import */ var _food_food_search_food_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food/food-search/food-search.component */ "./src/app/food/food-search/food-search.component.ts");
/* harmony import */ var _shopping_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping/shopping-cart/shopping-cart.component */ "./src/app/shopping/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _site_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./site/login/login.component */ "./src/app/site/login/login.component.ts");
/* harmony import */ var _site_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./site/signup/signup.component */ "./src/app/site/signup/signup.component.ts");
/* harmony import */ var _site_auth_guard_service_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./site/auth-guard-service.guard */ "./src/app/site/auth-guard-service.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: "food-item-edit/:id", component: _food_food_item_edit_food_item_edit_component__WEBPACK_IMPORTED_MODULE_2__["FoodItemEditComponent"] },
    { path: "food-item-info", component: _food_food_item_info_food_item_info_component__WEBPACK_IMPORTED_MODULE_3__["FoodItemInfoComponent"] },
    { path: "food-menu", component: _food_food_menu_food_menu_component__WEBPACK_IMPORTED_MODULE_4__["FoodMenuComponent"] },
    { path: "food-search", component: _food_food_search_food_search_component__WEBPACK_IMPORTED_MODULE_5__["FoodSearchComponent"] },
    {
        path: "shopping-cart",
        component: _shopping_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"],
        canActivate: [_site_auth_guard_service_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuardServiceGuard"]]
    },
    { path: "login", component: _site_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: "signup", component: _site_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
    { path: "", redirectTo: "food-search", pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "truYum";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _food_food_item_info_food_item_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food/food-item-info/food-item-info.component */ "./src/app/food/food-item-info/food-item-info.component.ts");
/* harmony import */ var _food_food_menu_food_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food/food-menu/food-menu.component */ "./src/app/food/food-menu/food-menu.component.ts");
/* harmony import */ var _food_food_search_food_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./food/food-search/food-search.component */ "./src/app/food/food-search/food-search.component.ts");
/* harmony import */ var _shopping_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shopping/shopping-cart/shopping-cart.component */ "./src/app/shopping/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _food_food_item_edit_food_item_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./food/food-item-edit/food-item-edit.component */ "./src/app/food/food-item-edit/food-item-edit.component.ts");
/* harmony import */ var _site_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./site/signup/signup.component */ "./src/app/site/signup/signup.component.ts");
/* harmony import */ var _site_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./site/login/login.component */ "./src/app/site/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _food_food_item_info_food_item_info_component__WEBPACK_IMPORTED_MODULE_5__["FoodItemInfoComponent"],
                _food_food_menu_food_menu_component__WEBPACK_IMPORTED_MODULE_6__["FoodMenuComponent"],
                _food_food_search_food_search_component__WEBPACK_IMPORTED_MODULE_7__["FoodSearchComponent"],
                _shopping_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartComponent"],
                _food_food_item_edit_food_item_edit_component__WEBPACK_IMPORTED_MODULE_9__["FoodItemEditComponent"],
                _site_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _site_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/food/food-item-edit/food-item-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/food/food-item-edit/food-item-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar_top {\r\n    background-color: #ff641a;\r\n}\r\n.container {\r\n    margin-top: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC9mb29kLWl0ZW0tZWRpdC9mb29kLWl0ZW0tZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9vZC9mb29kLWl0ZW0tZWRpdC9mb29kLWl0ZW0tZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcl90b3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjQxYTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/food/food-item-edit/food-item-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/food/food-item-edit/food-item-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar text-light navbar-expand-lg  navbar-dark navbar_top\">\n\t<a class=\"navbar-brand\" routerLink=\"/food-search\"> <i id=\"truyum-nav-logo\"\n\t\t\tclass=\"material-icons\">restaurant_menu</i><span id=\"truyum-heading\">\n\t\t\ttruYum</span></a>\n\t <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\"\n                    data-target=\"#x\">\n                    <span class=\"navbar-toggler-icon\" ></span>\n                </button>\n\t<div id=\"x\" class=\"collapse navbar-collapse\">\n\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" id=\"truyum-navbar-menus\" routerLink=\"/food-search\">Menu Items</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item mt-2\" id=\"truyum-navbar-menus\"><i class=\"material-icons\">account_box</i>{{userName}}\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link \" id=\"truyum-navbar-menus\" (click)=\"logOut()\">Logout</a></li>\n\t\t</ul>\n\t</div>\n</nav>\n<form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"container mb-5\">\n\t\t<div class=\"form-content\" *ngIf =\"!editted\">\n\t\t<h3>Edit menu item</h3>\n\t\t<div class=\"row\">\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<label for=\"title\">Item Name</label>\n\t\t\t\t<div><input id=\"title\" type=\"text\" [formControl]=\"name\" style=\"width: 100% \" /></div>\n\t\t\t\t<div *ngIf=\"name.invalid && (name.touched || name.dirty)\">\n\t\t\t\t\t<small *ngIf=\"name.errors.required\">Name field is required.</small>\n\t\t\t\t\t<small *ngIf=\"name.errors.minlength\">Name should be more than 2 characters.</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-12\">\n\t\t\t\t<label for=\"price\">Price</label>\n\t\t\t\t<div> <input id=\"price\" type=\"text\" formControlName=\"price\" style=\"width: 100%\" />\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"price.invalid && (price.touched || price.dirty)\">\n\t\t\t\t\t<small *ngIf=\"price.errors.required\">Price field is required.</small>\n\t\t\t\t\t<small *ngIf=\"price.errors.pattern\">Price should only be a number.</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-12\">\n\t\t\t\t<label for=\"dateOfLaunch\">Date Of Launch</label>\n\t\t\t\t<div><input type=\"date\" [formControl]=\"dateOfLaunch\" style=\"width: 100%\"\n\t\t\t\t\t\tid=\"dateOfLaunch\" />\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-12\">\n\t\t\t\t<label for=\"category\">Category</label>\n\t\t\t\t<div>\n\t\t\t\t\t<select [formControl]=\"category\" style=\"width: 100%\" id=\"category\">\n\t\t\t\t\t\t<option>Main Course</option>\n\t\t\t\t\t\t<option>Starters</option>\n\t\t\t\t\t\t<option>Dessert</option>\n\n\t\t\t\t\t</select>\n\t\t\t\t\t<div *ngIf=\"category.invalid && (category.touched || category.dirty)\">\n\t\t\t\t\t\t<small *ngIf=\"category.errors.required\">Choose a category.</small>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-12\">\n\t\t\t\t<div>\n\t\t\t\t\t<label>Active</label>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<label for=\"radio1\"> <input [formControl]=\"isAvailable\" type=\"radio\" id=\"radio1\" name=\"optradio\"\n\t\t\t\t\t\t\t[value]=true>Yes\n\t\t\t\t\t</label>&nbsp;\n\n\n\t\t\t\t\t<label for=\"radio2\"> <input [formControl]=\"isAvailable\" type=\"radio\" id=\"radio2\" name=\"optradio\"\n\t\t\t\t\t\t\t[value]=false>No\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\n\n\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"pl-3\">\n\t\t\t\t<input [formControl]=\"freeDelivery\" type=\"checkbox\" class=\"ml-auto\" id=\"freeDelivery\"> <label\n\t\t\t\t\tclass=\"pl-3\" for=\"freeDelivery\">Free Delivery</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<button type=\"submit\" class=\"btn ml-2 mr-2 mt-2\" *ngIf=\"cartItems.price>0\">Save</button>\n\t\t</div><br>\n\t\t</div>\n\t\t<div class=\"container\" *ngIf=\"editted\">\n\t\t\t<div class=\"alert alert-success\">\n\t\t\t\tMenu Item Details Saved Successfully!!!\n\t\t\t</div>\n\t\t</div>\n\n\n\n\t</div>\n</form>"

/***/ }),

/***/ "./src/app/food/food-item-edit/food-item-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/food/food-item-edit/food-item-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: FoodItemEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemEditComponent", function() { return FoodItemEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/menu-item-service.service */ "./src/app/services/menu-item-service.service.ts");
/* harmony import */ var src_app_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication-service.service */ "./src/app/services/authentication-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FoodItemEditComponent = /** @class */ (function () {
    function FoodItemEditComponent(menuService, service2, route, router) {
        this.menuService = menuService;
        this.service2 = service2;
        this.route = route;
        this.router = router;
        this.foodId = this.route.snapshot.paramMap.get("id");
        this.newCartItem = {
            id: 0,
            name: "",
            price: 0,
            isAvailable: false,
            dateOfLaunch: new Date(),
            category: "",
            freeDelivery: false,
            url: ""
        };
        this.editted = false;
        this.userName = this.service2.getUserName();
        this.added = false;
    }
    FoodItemEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var fid = Number(this.foodId);
        console.log(this.foodId);
        this.menuService.getMenuItem(fid).subscribe(function (data) {
            console.log(data);
            _this.cartItems = data;
            if (fid > 0) {
                _this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.cartItems.name, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                    ]),
                    'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.cartItems.price, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$")
                    ]),
                    'isAvailable': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.cartItems.isAvailable, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    'url': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.cartItems.url, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    'dateOfLaunch': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(_this.cartItems.dateOfLaunch, 'yyyy-MM-dd', 'en'), [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.cartItems.category, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                    ]),
                    'freeDelivery': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.cartItems.freeDelivery, []),
                    'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.cartItems.id, [])
                });
            }
            else {
                _this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                    ]),
                    price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$")
                    ]),
                    isAvailable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    dateOfLaunch: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    freeDelivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", []),
                    id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [])
                });
            }
            _this.editForm
                .get("id")
                .valueChanges.subscribe(function (value) { return (_this.newCartItem.id = value); });
            _this.editForm
                .get("name")
                .valueChanges.subscribe(function (value) { return (_this.newCartItem.name = value); });
            _this.editForm
                .get("price")
                .valueChanges.subscribe(function (value) { return (_this.newCartItem.price = value); });
            _this.editForm
                .get("isAvailable")
                .valueChanges.subscribe(function (value) { return (_this.newCartItem.isAvailable = value); });
            _this.editForm
                .get("url")
                .valueChanges.subscribe(function (value) { return (_this.newCartItem.url = value); });
            _this.editForm
                .get("category")
                .valueChanges.subscribe(function (value) { return (_this.newCartItem.category = value); });
            _this.editForm
                .get("freeDelivery")
                .valueChanges.subscribe(function (value) { return (_this.newCartItem.freeDelivery = value); });
            _this.editForm
                .get("dateOfLaunch")
                .valueChanges.subscribe(function (value) { return (_this.newCartItem.dateOfLaunch = value); });
            _this.editForm
                .get("id")
                .valueChanges.subscribe(function (value) { return (_this.cartItems.id = value); });
            _this.editForm
                .get("name")
                .valueChanges.subscribe(function (value) { return (_this.cartItems.name = value); });
            _this.editForm
                .get("price")
                .valueChanges.subscribe(function (value) { return (_this.cartItems.price = value); });
            _this.editForm
                .get("isAvailable")
                .valueChanges.subscribe(function (value) { return (_this.cartItems.isAvailable = value); });
            _this.editForm
                .get("url")
                .valueChanges.subscribe(function (value) { return (_this.cartItems.url = value); });
            _this.editForm
                .get("category")
                .valueChanges.subscribe(function (value) { return (_this.cartItems.category = value); });
            _this.editForm
                .get("freeDelivery")
                .valueChanges.subscribe(function (value) { return (_this.cartItems.freeDelivery = value); });
            _this.editForm
                .get("dateOfLaunch")
                .valueChanges.subscribe(function (value) { return (_this.cartItems.dateOfLaunch = value); });
        });
    };
    FoodItemEditComponent.prototype.logOut = function () {
        this.service2.logOut();
        this.router.navigateByUrl("/login");
    };
    FoodItemEditComponent.prototype.onSubmit = function () {
        this.menuService.updateFoodItem(this.cartItems).subscribe();
        this.editted = true;
    };
    Object.defineProperty(FoodItemEditComponent.prototype, "id", {
        get: function () {
            return this.editForm.get("id");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FoodItemEditComponent.prototype, "name", {
        get: function () {
            return this.editForm.get("name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FoodItemEditComponent.prototype, "price", {
        get: function () {
            return this.editForm.get("price");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FoodItemEditComponent.prototype, "isAvailable", {
        get: function () {
            return this.editForm.get("isAvailable");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FoodItemEditComponent.prototype, "url", {
        get: function () {
            return this.editForm.get("url");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FoodItemEditComponent.prototype, "category", {
        get: function () {
            return this.editForm.get("category");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FoodItemEditComponent.prototype, "freeDelivery", {
        get: function () {
            return this.editForm.get("freeDelivery");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FoodItemEditComponent.prototype, "dateOfLaunch", {
        get: function () {
            return this.editForm.get("dateOfLaunch");
        },
        enumerable: true,
        configurable: true
    });
    FoodItemEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-food-item-edit",
            template: __webpack_require__(/*! ./food-item-edit.component.html */ "./src/app/food/food-item-edit/food-item-edit.component.html"),
            styles: [__webpack_require__(/*! ./food-item-edit.component.css */ "./src/app/food/food-item-edit/food-item-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_3__["MenuItemServiceService"],
            src_app_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FoodItemEditComponent);
    return FoodItemEditComponent;
}());



/***/ }),

/***/ "./src/app/food/food-item-info/food-item-info.component.css":
/*!******************************************************************!*\
  !*** ./src/app/food/food-item-info/food-item-info.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".free {\r\n    color:darkblue;\r\n}\r\n\r\n.navbar-toggler {\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC9mb29kLWl0ZW0taW5mby9mb29kLWl0ZW0taW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9mb29kL2Zvb2QtaXRlbS1pbmZvL2Zvb2QtaXRlbS1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJlZSB7XHJcbiAgICBjb2xvcjpkYXJrYmx1ZTtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/food/food-item-info/food-item-info.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/food/food-item-info/food-item-info.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mb-5\">\n\t<div class=\"card-deck\">\n\t\t<div class=\"col-12 col-md-6 col-lg-3\" *ngFor=\"let food of food\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<img src=\"{{food.url}}\" class=\"card-img-top\" alt=\"Image Not Found\" />\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"row col-12\">\n\n\t\t\t\t\t\t<label for=\"name\">\n\t\t\t\t\t\t\t<h6 id=\"name\">{{food.name}}</h6>\n\t\t\t\t\t\t</label> <span class=\"ml-auto\" id=\"price\"><label\n\t\t\t\t\t\t\t\tfor=\"price\">&#8377;{{food.price}}</label></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto\" *ngIf=\"added && food.id == addedId\">\n\t\t\t\t\t\t<div class=\"alert alert-success\">Added to cart successfully!!!\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row col-12\">\n\t\t\t\t\t\t<span class=\"badge badge-success mb-3 mr-1\" *ngIf=\"isAdmin\" id=\"active\"><label for=\"active\"\n\t\t\t\t\t\t\t\t*ngIf=\"food.isAvailable\"> Active</label></span>\n\t\t\t\t\t\t<span class=\"badge badge-danger mb-3 mr-1\" *ngIf=\"isAdmin\" id=\"active\"><label for=\"active\"\n\t\t\t\t\t\t\t\t*ngIf=\"!food.isAvailable\"> Inactive</label></span>\n\t\t\t\t\t\t<span id=\"category\"><label for=\"category\">{{food.category}}</label></span>\n\t\t\t\t\t\t<div class=\"ml-auto\" *ngIf=\"food.freeDelivery\">\n\t\t\t\t\t\t\t<i class=\"material-icons ml-auto free\">local_shipping</i> <span class=\"badge badge-info mb-3\" id=\"freeDelivery\">\n\t\t\t\t\t\t\t<label for=\"freeDelivery \">free</label>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row col-12\" *ngIf=\"!isAdmin\">\n\t\t\t\t\t\t<a id=\"truyum-addtocart\" class=\"btn ml-auto\" (click)=\"addToCart(food.id)\">\n\t\t\t\t\t\t\t<i class=\"material-icons btn\">add_shopping_cart</i> <span class=\"btn\">Add To Cart</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row col-12\" *ngIf=\"isAdmin\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<i class=\"material-icons\">access_time</i><span id=\"dateofLaunch\"><label\n\t\t\t\t\t\t\t\t\tfor=\"dateofLaunch\">Launch</label></span>\n\t\t\t\t\t\t\t<div>{{food.dateOfLaunch | date}}</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<a [routerLink]=\"['/food-item-edit',food.id]\" id=\"truyum-addtocart\" class=\"btn ml-auto\">\n\t\t\t\t\t\t\t<i class=\"material-icons btn\">edit</i> <span class=\"btn\">Edit</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<router-outlet></router-outlet>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div><br>"

/***/ }),

/***/ "./src/app/food/food-item-info/food-item-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/food/food-item-info/food-item-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: FoodItemInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemInfoComponent", function() { return FoodItemInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication-service.service */ "./src/app/services/authentication-service.service.ts");
/* harmony import */ var src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/menu-item-service.service */ "./src/app/services/menu-item-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodItemInfoComponent = /** @class */ (function () {
    function FoodItemInfoComponent(service, service2, router) {
        this.service = service;
        this.service2 = service2;
        this.router = router;
        this.isAdmin = false;
        this.added = false;
        this.plsLogin = false;
        this.addedId = 0;
        this.ClickOnAdd = false;
    }
    FoodItemInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = this.service2.isAdmin();
        if (this.isAdmin) {
            this.service.getAllMenuItems().subscribe(function (data) { return (_this.food = data); });
        }
    };
    FoodItemInfoComponent.prototype.addToCart = function (item) {
        if (this.service2.isLogged()) {
            this.service.addCartItem(this.service2.getUserName(), item).subscribe();
            this.added = true;
            this.addedId = item;
        }
        else {
            this.service.ClickOnAdd = true;
            this.router.navigateByUrl("/login");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FoodItemInfoComponent.prototype, "food", void 0);
    FoodItemInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-food-item-info",
            template: __webpack_require__(/*! ./food-item-info.component.html */ "./src/app/food/food-item-info/food-item-info.component.html"),
            styles: [__webpack_require__(/*! ./food-item-info.component.css */ "./src/app/food/food-item-info/food-item-info.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_3__["MenuItemServiceService"],
            src_app_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FoodItemInfoComponent);
    return FoodItemInfoComponent;
}());



/***/ }),

/***/ "./src/app/food/food-menu/food-menu.component.css":
/*!********************************************************!*\
  !*** ./src/app/food/food-menu/food-menu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb2QvZm9vZC1tZW51L2Zvb2QtbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/food/food-menu/food-menu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/food/food-menu/food-menu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-food-item-info [food]=\"foodItems\"></app-food-item-info>"

/***/ }),

/***/ "./src/app/food/food-menu/food-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/food/food-menu/food-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: FoodMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodMenuComponent", function() { return FoodMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/menu-item-service.service */ "./src/app/services/menu-item-service.service.ts");
/* harmony import */ var src_app_services_user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-auth-service.service */ "./src/app/services/user-auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodMenuComponent = /** @class */ (function () {
    function FoodMenuComponent(menuItemService, userService) {
        this.menuItemService = menuItemService;
        this.userService = userService;
    }
    FoodMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.fooditems=this.service.getFoodItems();
        this.role = this.userService.getRole();
        console.log(this.role);
        this.menuItemService
            .getAllMenuItems()
            .subscribe(function (data) { return (_this.foodItems = data); });
        console.log(this.foodItems);
        //x.subscribe(data => this.fooditems=data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FoodMenuComponent.prototype, "foodItems", void 0);
    FoodMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-food-menu",
            template: __webpack_require__(/*! ./food-menu.component.html */ "./src/app/food/food-menu/food-menu.component.html"),
            styles: [__webpack_require__(/*! ./food-menu.component.css */ "./src/app/food/food-menu/food-menu.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_1__["MenuItemServiceService"],
            src_app_services_user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthServiceService"]])
    ], FoodMenuComponent);
    return FoodMenuComponent;
}());



/***/ }),

/***/ "./src/app/food/food-search/food-search.component.css":
/*!************************************************************!*\
  !*** ./src/app/food/food-search/food-search.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar_top {\r\n    background-color: #ff641a;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC9mb29kLXNlYXJjaC9mb29kLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvZm9vZC9mb29kLXNlYXJjaC9mb29kLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcl90b3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjQxYTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/food/food-search/food-search.component.html":
/*!*************************************************************!*\
  !*** ./src/app/food/food-search/food-search.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg text-light  navbar-dark navbar_top\">\n\t<a class=\"navbar-brand\" routerLink=\"/food-search\"> <i id=\"truyum-nav-logo\"\n\t\t\tclass=\"material-icons\">restaurant_menu</i><span id=\"truyum-heading\">\n\t\t\ttruYum</span></a>\n\t <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\"\n                    data-target=\"#x\">\n                    <span class=\"navbar-toggler-icon\" ></span>\n                </button>\n\t<div id=\"x\" class=\"collapse navbar-collapse\">\n\t\t<ul class=\"navbar-nav ml-auto\" *ngIf=\"isLogged\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link \" id=\"truyum-navbar-menus\" routerLink=\"/food-search\">Menu Items</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\" *ngIf=\"!isCustomer\"><a class=\"nav-link \" id=\"truyum-navbar-menus\"\n\t\t\t\t\trouterLink=\"/shopping-cart\">Cart</a></li>\n\t\t\t<li class=\"nav-item mt-2\" id=\"truyum-navbar-menus\"><i class=\"material-icons\">account_box</i>{{userName}}\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link \" id=\"truyum-navbar-menus\" (click)=\"logOut()\">Logout</a></li>\n\t\t</ul>\n\t\t<ul class=\"navbar-nav ml-auto\" *ngIf=\"!isLogged\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link \" id=\"truyum-navbar-menus\" routerLink=\"/food-search\">Menu Items</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\" *ngIf=\"!isCustomer\"><a class=\"nav-link \" id=\"truyum-navbar-menus\"\n\t\t\t\t\trouterLink=\"/shopping-cart\">Cart</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link \" id=\"truyum-navbar-menus\" routerLink=\"/login\">Login</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link \" id=\"truyum-navbar-menus\" routerLink=\"/signup\">Signup</a></li>\n\t\t</ul>\n\t</div>\n</nav>\n<div class=\"jumbotron\">\n\t<h3 class=\"text-light\">Find food</h3>\n\t<div class=\"input-group mb-3\">\n\t\t<div class=\"input-group-prepend\">\n\t\t\t<span class=\"input-group-text material-icons\">local_cafe</span>\n\t\t</div>\n\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search Food\" [(ngModel)]=\"searchText\" (input)=\"search()\">\n\t</div>\n</div>\n\n<app-food-menu [foodItems]=\"food\"></app-food-menu>"

/***/ }),

/***/ "./src/app/food/food-search/food-search.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/food/food-search/food-search.component.ts ***!
  \***********************************************************/
/*! exports provided: FoodSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodSearchComponent", function() { return FoodSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication-service.service */ "./src/app/services/authentication-service.service.ts");
/* harmony import */ var src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/menu-item-service.service */ "./src/app/services/menu-item-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodSearchComponent = /** @class */ (function () {
    function FoodSearchComponent(service2, router, menuService) {
        this.service2 = service2;
        this.router = router;
        this.menuService = menuService;
        this.userName = this.service2.getUserName();
        this.isCustomer = this.service2.isAdmin();
    }
    FoodSearchComponent.prototype.ngOnInit = function () {
        this.isLogged = this.service2.isLogged();
        this.userName = this.service2.getUserName();
    };
    FoodSearchComponent.prototype.search = function () {
        this.food = this.menuService.getFoodItems1(this.searchText);
    };
    FoodSearchComponent.prototype.logOut = function () {
        this.service2.logOut();
        this.userName = this.service2.getUserName();
        this.router.navigateByUrl("/login");
    };
    FoodSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-food-search",
            template: __webpack_require__(/*! ./food-search.component.html */ "./src/app/food/food-search/food-search.component.html"),
            styles: [__webpack_require__(/*! ./food-search.component.css */ "./src/app/food/food-search/food-search.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_3__["MenuItemServiceService"]])
    ], FoodSearchComponent);
    return FoodSearchComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/authentication-service.service.ts ***!
  \************************************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-auth-service.service */ "./src/app/services/user-auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(userService, router) {
        this.userService = userService;
        this.router = router;
        this.Invalid = false;
    }
    AuthServiceService.prototype.getUserName = function () {
        return this.loggedUserName;
    };
    AuthServiceService.prototype.logOut = function () {
        this.loggedInUser = false;
        this.adminFlag = false;
        //this.service1.emptyCart();
        this.loggedUserName = "";
        this.userService.setToken("");
    };
    AuthServiceService.prototype.isLogged = function () {
        return this.loggedInUser;
    };
    AuthServiceService.prototype.authenticateUser = function (userName, password) {
        var _this = this;
        console.log("Authentication called");
        this.userService.authenticate(userName, password).subscribe(function (data) {
            _this.userService.setToken(data.token);
            _this.userService.setRole(data.role);
            _this.loggedUserName = userName;
            var x = data.role;
            if (x == "ROLE_ADMIN") {
                _this.adminFlag = true;
            }
            else {
                _this.adminFlag = false;
            }
            _this.loggedInUser = true;
            _this.router.navigateByUrl("/food-search");
        }, function (error) {
            console.log(error);
            if (error.status == 401) {
                _this.error = "Invalid user ";
                _this.Invalid = true;
                console.log(_this.error);
                _this.router.navigateByUrl("/login");
            }
        });
    };
    AuthServiceService.prototype.isAdmin = function () {
        return this.adminFlag;
    };
    AuthServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_user_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthServiceService);
    return AuthServiceService;
}());



/***/ }),

/***/ "./src/app/services/menu-item-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/menu-item-service.service.ts ***!
  \*******************************************************/
/*! exports provided: MenuItemServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemServiceService", function() { return MenuItemServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-service.service */ "./src/app/services/authentication-service.service.ts");
/* harmony import */ var _user_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-auth-service.service */ "./src/app/services/user-auth-service.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuItemServiceService = /** @class */ (function () {
    function MenuItemServiceService(http, service, authService) {
        this.http = http;
        this.service = service;
        this.authService = authService;
        this.food = [];
        this.ClickOnAdd = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    MenuItemServiceService.prototype.getAllMenuItems = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.service.getToken()
            })
        };
        return this.http.get(this.baseUrl + "/menu-items", httpOptions);
    };
    MenuItemServiceService.prototype.getMenuItem = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.service.getToken()
            })
        };
        return this.http.get(this.baseUrl + "/menu-items/" + id, httpOptions);
    };
    MenuItemServiceService.prototype.addUser = function (newuser) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.service.getToken()
            })
        };
        console.log("Adduser" + newuser);
        return this.http.post(this.baseUrl + "/users", newuser, httpOptions);
    };
    MenuItemServiceService.prototype.updateFoodItem = function (editFood) {
        console.log(editFood);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.service.getToken()
            })
        };
        return this.http.put(this.baseUrl + "/menu-items", editFood, httpOptions);
    };
    MenuItemServiceService.prototype.addCartItem = function (id, cartItem) {
        console.log(cartItem);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.service.getToken()
            })
        };
        console.log("addCartItem");
        return this.http.post(this.baseUrl + "/carts/" + id + "/" + cartItem, cartItem, httpOptions);
    };
    MenuItemServiceService.prototype.getCart = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.service.getToken()
            })
        };
        return this.http.get(this.baseUrl + "/carts/" + id, httpOptions);
    };
    MenuItemServiceService.prototype.removeCart = function (userId, id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.service.getToken()
            })
        };
        return this.http.delete(this.baseUrl + "/carts/" + userId + "/" + id, httpOptions);
    };
    MenuItemServiceService.prototype.getFoodItems1 = function (searchText) {
        var _this = this;
        if (this.authService.isAdmin()) {
            if (searchText == "") {
                this.getAllMenuItems().subscribe(function (data) { return (_this.food = data); });
                return this.food;
            }
            else {
                this.getAllMenuItems().subscribe(function (data) { return (_this.food = data); });
                var filteredFood = this.food.filter(function (x) { return x.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1; });
                return filteredFood;
            }
        }
        else {
            if (searchText == "") {
                this.getAllMenuItems().subscribe(function (data) { return (_this.food = data); });
                return this.food;
            }
            else {
                this.getAllMenuItems().subscribe(function (data) { return (_this.food = data); });
                var filteredFood = this.food.filter(function (x) { return x.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1; });
                return filteredFood;
            }
        }
    };
    MenuItemServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthServiceService"],
            _authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]])
    ], MenuItemServiceService);
    return MenuItemServiceService;
}());



/***/ }),

/***/ "./src/app/services/user-auth-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/user-auth-service.service.ts ***!
  \*******************************************************/
/*! exports provided: UserAuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthServiceService", function() { return UserAuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAuthServiceService = /** @class */ (function () {
    function UserAuthServiceService(httpClient) {
        this.httpClient = httpClient;
        this.authenticationApiUrl = "http://localhost:8096/authentication-service/authenticate";
    }
    UserAuthServiceService.prototype.authenticate = function (user, password) {
        var credentials = btoa(user + ":" + password);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set("Authorization", "Basic " + credentials);
        return this.httpClient.get(this.authenticationApiUrl, { headers: headers });
    };
    UserAuthServiceService.prototype.setToken = function (token) {
        this.token = token;
    };
    UserAuthServiceService.prototype.getToken = function () {
        return this.token;
    };
    UserAuthServiceService.prototype.setRole = function (role) {
        this.role = role;
    };
    UserAuthServiceService.prototype.getRole = function () {
        return this.role;
    };
    UserAuthServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserAuthServiceService);
    return UserAuthServiceService;
}());



/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shopping/shopping-cart/shopping-cart.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar_top {\r\n    background-color: #ff641a;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmcvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJfdG9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY0MWE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shopping/shopping-cart/shopping-cart.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar text-light navbar-expand-lg  navbar-dark navbar_top\">\n\t<a class=\"navbar-brand\" routerLink=\"/food-search\"> <i id=\"truyum-nav-logo\" class=\"material-icons\">restaurant_menu</i><span id=\"truyum-heading\">\n\t\t\ttruYum</span></a>\n\t <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\"\n                    data-target=\"#x\">\n                    <span class=\"navbar-toggler-icon\" ></span>\n                </button>\n\t<div id=\"x\" class=\"collapse navbar-collapse\">\n\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link \" id=\"truyum-navbar-menus\" routerLink=\"/food-search\">Menu Items</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\" *ngIf=\"!isCustomer\"><a class=\"nav-link \" id=\"truyum-navbar-menus\" routerLink=\"/shopping-cart\">Cart</a></li>\n\t\t\t<li class=\"nav-item mt-2\" id=\"truyum-navbar-menus\"><i class=\"material-icons\">account_box</i>{{userName}}\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link \" id=\"truyum-navbar-menus\" (click)=\"logOut()\">Logout</a></li>\n\t\t</ul>\n\t</div>\n</nav>\n\n<div *ngIf=\"displayCart.total>0\">\n\t<div class=\"container \">\n\t\t<h2>Cart</h2>\n\t\t<div class=\"container\" *ngIf=\"isRemoved\">\n\t\t\t<div class=\"alert alert-warning\">Item removed from Cart!!!\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"list-group\">\n\t\t\t<div class=\"list-group-item list-group-item-action\" *ngFor=\"let dis of displayCart.menuItemList\">\n\t\t\t\t<div class=\"d-flex w-100 justify-content-between\">\n\t\t\t\t\t<h5 class=\"mb-1\">{{dis.name}}</h5>\n\t\t\t\t\t<small>{{dis.price}}</small>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"material-icons float-right\" id=\"trash\" (click)=\"removeCart(dis.id)\">delete</button>\n\n\n\t\t\t</div>\n\t\t\t<div class=\"list-group-item list-group-item-action\">\n\t\t\t\t<div class=\"d-flex w-100 justify-content-between\">\n\t\t\t\t\t<h2 class=\"mb-1\">Total</h2>\n\t\t\t\t\t<h6 class=\"mt-2\">{{displayCart.total | currency : \"INR\"}}</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div><br>\n\n</div>\n<br><br>\n<div *ngIf=\"isEmpty\">\n\t<div class=\"container\">\n\t\t<h2>Cart</h2>\n\t\t<div class=\"alert alert-danger\">Use <a [routerLink]=\"['/food-search']\">Add to Cart</a> option in menu item list\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shopping/shopping-cart/shopping-cart.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/menu-item-service.service */ "./src/app/services/menu-item-service.service.ts");
/* harmony import */ var src_app_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication-service.service */ "./src/app/services/authentication-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(service2, router, menuService) {
        this.service2 = service2;
        this.router = router;
        this.menuService = menuService;
        // dcart:CartItem={
        //   fooditems:[],
        //   total:0
        // };
        this.isCustomer = this.service2.isAdmin();
        this.userName = this.service2.getUserName();
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isRemoved = false;
        this.menuService.getCart(this.service2.getUserName()).subscribe(function (data) {
            console.log(data);
            _this.displayCart = data;
            if (data == null || _this.displayCart.total == 0)
                _this.isEmpty = true;
            else
                _this.isEmpty = false;
        });
    };
    ShoppingCartComponent.prototype.logOut = function () {
        this.service2.logOut();
        this.userName = this.service2.getUserName();
        this.router.navigateByUrl("/login");
    };
    ShoppingCartComponent.prototype.removeCart = function (id) {
        var _this = this;
        this.menuService.removeCart(this.service2.getUserName(), id).subscribe(function () {
            return _this.menuService.getCart(_this.service2.getUserName()).subscribe(function (data) {
                console.log(data);
                _this.displayCart = data;
                if (_this.displayCart.total == 0) {
                    _this.isEmpty = true;
                }
                else
                    _this.isEmpty = false;
            });
        });
        this.isRemoved = true;
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-shopping-cart",
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_2__["MenuItemServiceService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/site/auth-guard-service.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/site/auth-guard-service.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthGuardServiceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardServiceGuard", function() { return AuthGuardServiceGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication-service.service */ "./src/app/services/authentication-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardServiceGuard = /** @class */ (function () {
    function AuthGuardServiceGuard(router, service) {
        this.router = router;
        this.service = service;
    }
    AuthGuardServiceGuard.prototype.canActivate = function (next, state) {
        if (this.service.isLogged()) {
            return true;
        }
        else {
            this.router.navigateByUrl("/login");
            return false;
        }
    };
    AuthGuardServiceGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]])
    ], AuthGuardServiceGuard);
    return AuthGuardServiceGuard;
}());



/***/ }),

/***/ "./src/app/site/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/site/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar_top {\r\n    background-color: #ff641a;\r\n}\r\n.navbar-toggler {\r\n    color:black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaXRlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyX3RvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NDFhO1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBjb2xvcjpibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/site/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/site/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  navbar-expand-lg navbar-dark text-light navbar_top\">\n    <a class=\"navbar-brand\" routerLink=\"/food-search\"> <i id=\"truyum-nav-logo\"\n                class=\"material-icons\">restaurant_menu</i><span id=\"truyum-heading\">\n                    truYum</span></a>\n                    <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\"\n                    data-target=\"#x\">\n                    <span class=\"navbar-toggler-icon\" ></span>\n                </button>\n            <div id=\"x\" class=\"collapse navbar-collapse\">\n                    <ul class=\"navbar-nav ml-auto\">\n                      <li class=\"nav-item\"><a class=\"nav-link \"\n                        id=\"truyum-navbar-menus\" routerLink=\"/food-search\">Menu Items</a></li>\n                        \n                      <li class=\"nav-item\"><a class=\"nav-link \"\n                        id=\"truyum-navbar-menus\" routerLink=\"/login\">Login</a></li>\n                      <li class=\"nav-item\"><a class=\"nav-link\"\n                        id=\"truyum-navbar-menus\" routerLink=\"/signup\">Signup</a></li>\n                    </ul>\n                  </div>\n    </nav>\n\n<form #loginForm=\"ngForm\">\n\n<div class=\"row\">\n\t\t<div class=\"col-xs-11 mt-5 ml-5 mr-5 mb-5 mx-auto\">\n\t\t\t<div class=\"card mt-5\">\n        <span class=\"row  mt-5 ml-5 mr-5\">\n  <h3>Login</h3></span>\n   <div class=\"alert alert-info \" *ngIf=\"this.menuItemServiceService.ClickOnAdd\">Please login before adding an item to cart.</div>\n   <div class=\"alert alert-danger \" *ngIf=\"this.service.Invalid\">Invalid Username/Password..</div>\n <div class=\"row mt-5 ml-5 mr-5\">\n\t\t\t\t\t\t<div class=\"form-group col-12\">\n      <label for=\"userName\">Username</label> <div><input name=\"userName\" required \n        type=\"text\" [(ngModel)]=\"loggedUser.userName\" #userName=ngModel placeholder=\"Enter username\" />\n        <div><small *ngIf=\"!userName.value && userName.touched\" >Name field is required.</small></div>\n    </div></div>\n  </div>\n\n  <div class=\"row ml-5 mr-5\">\n\t\t\t\t\t\t<div class=\"form-group col-12 mt-2\">\n      <label for=\"password\">Password</label><div> <input name=\"password\" type=\"password\" required\n      [(ngModel)]=\"loggedUser.password\" #password=ngModel placeholder=\"Enter password\" />\n      <div><small *ngIf=\"!password.value && password.touched\" >Password field is required.</small></div>\n\n    </div></div>\n  </div>\n <div class=\"row  mt-3 ml-5 mr-5 mb-5\">\n\t<div class=\"col-6\">\n    <button type=\"button\" class=\"btn\" [disabled]=\"!loginForm.valid\" (click)=\"onLogin()\">Login</button></div>\n    <span class=\"col-6\">New here?<a routerLink=\"/signup\">Signup</a></span>\n  \n</div>\n<div class=\"container  col-2 col-expand-lg mt-5 pb-3 mb-5 \" *ngIf=\"!authenticated\">\t\n  \t\t<div class=\"container\">\n    <div class=\"alert alert-danger\">Login Failed.. </div>\n  </div></div>\n</div>\n\t\t</div>\n\t</div>\n  </form>"

/***/ }),

/***/ "./src/app/site/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/site/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication-service.service */ "./src/app/services/authentication-service.service.ts");
/* harmony import */ var src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/menu-item-service.service */ "./src/app/services/menu-item-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router, menuItemServiceService) {
        this.service = service;
        this.router = router;
        this.menuItemServiceService = menuItemServiceService;
        this.authenticated = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(this.service.Invalid);
        this.service.Invalid = false;
        this.loggedUser = {
            userName: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: ""
        };
    };
    LoginComponent.prototype.onLogin = function () {
        console.log(this.loggedUser.userName);
        this.service.authenticateUser(this.loggedUser.userName, this.loggedUser.password);
        this.menuItemServiceService.ClickOnAdd = false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/site/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/site/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_3__["MenuItemServiceService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/site/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/site/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar_top {\r\n    background-color: #ff641a;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9zaXRlL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJfdG9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY0MWE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/site/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/site/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark text-light navbar_top\">\n  <a class=\"navbar-brand\" routerLink=\"/food-search\"> <i id=\"truyum-nav-logo\"\n      class=\"material-icons\">restaurant_menu</i><span id=\"truyum-heading\">\n      truYum</span></a>\n   <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\"\n                    data-target=\"#x\">\n                    <span class=\"navbar-toggler-icon\" ></span>\n                </button>\n  <div id=\"x\" class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\"><a class=\"nav-link \" id=\"truyum-navbar-menus\" routerLink=\"/food-search\">Menu Items</a></li>\n\n      <li class=\"nav-item\"><a class=\"nav-link \" id=\"truyum-navbar-menus\" routerLink=\"/login\">Login</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" id=\"truyum-navbar-menus\" routerLink=\"/signup\">Signup</a></li>\n    </ul>\n  </div>\n</nav>\n<div class=\"row\">\n<div class=\"col-xs-11 mt-5 ml-5 mr-5 mb-5 mx-auto\">\n\t\t\t<div class=\"card mt-5\">\n\t\t\t\t<h1 class=\"mt-5 ml-5\">Signup</h1>\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n \n\t\t\t\t\t\t<div class=\"row ml-5 mr-5\">\n\t\t\t\t\t\t<div class=\"col-md-6 col-xs-12 mt-5\">\n              <label for=\"username\">Username</label>\n        <div> <input id=\"userName\" type=\"text\" [formControl]=\"userName\" placeholder=\"username\" /></div>\n        <div *ngIf=\"userName.invalid && (userName.touched || userName.dirty)\">\n          <small *ngIf=\"userName.errors.required\">Username field is required.</small>\n        </div>\n\t\t\t\t\t\t</div>\n      </div>\n    \n    <div class=\"row ml-5 mr-5\">\n\t\t\t\t\t\t<div class=\"col-md-6 col-xs-12 mt-5\">\n              <label for=\"firstName\">First Name</label> \n        <div> <input id=\"firstName\" type=\"text\" [formControl]=\"firstName\" placeholder=\"Enter first name\" /></div>\n        <div *ngIf=\"firstName.invalid && (firstName.touched || firstName.dirty)\">\n          <small *ngIf=\"firstName.errors.required\">Firstname field is required.</small>\n          <small *ngIf=\"firstName.errors.pattern\">Firstname field should not contain numbers.</small>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-xs-12  mt-5\">\n              <label for=\"lastName\">Last Name</label> \n        <div><input id=\"lastName\" type=\"text\" [formControl]=\"lastName\" placeholder=\"Enter last name\" /></div>\n        <div *ngIf=\"lastName.invalid && (lastName.touched || lastName.dirty)\">\n          <small *ngIf=\"lastName.errors.required\">Lastname field is required.</small>\n          <small *ngIf=\"lastName.errors.pattern\">Lastname field should not contain numbers.</small>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"row ml-5 mr-5\">\n\t\t\t\t\t\t<div class=\"col-md-6 col-xs-12 mt-5\">\n              <label for=\"password\">Password</label> \n        <div> <input id=\"password\" type=\"password\" [formControl]=\"password\" placeholder=\"Enter password\" /></div>\n        <div *ngIf=\"password.invalid && (password.touched || password.dirty)\">\n          <small *ngIf=\"password.errors.required\">Password field is required.</small>\n        </div>\n      </div>\n  <div class=\"col-md-6 col-xs-12 mt-5\">\n              <label for=\"confirmPassword\">Confirm Password</label>\n        <div> <input id=\"confirmPassword\" type=\"password\" [formControl]=\"confirmPassword\"\n            placeholder=\"Enter confirm password\" /></div>\n        <div *ngIf=\"confirmPassword.invalid && (confirmPassword.touched || confirmPassword.dirty)\">\n          <small *ngIf=\"confirmPassword.errors.required\">Confirm Password field is required.</small>\n        </div><small class=\"text-danger\" *ngIf=\"passwordMatch\">Passwords does not match.</small>\n      </div>\n    </div>\n    <div class=\"row  mt-5 ml-5 mr-5 mb-5\">\n      <div class=\"col-12\">\n      <button type=\"submit\" [disabled]=\"!userForm.valid\" class=\"btn ml-3 mt-2\">Signup</button>\n      </div>\n    </div>\n  </form>\n</div>\n</div>\n\t\t</div>"

/***/ }),

/***/ "./src/app/site/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/site/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/menu-item-service.service */ "./src/app/services/menu-item-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(service, router) {
        this.service = service;
        this.router = router;
        this.user = {
            userName: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: ""
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-zA-Zs]*$")
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-zA-Zs]*$")
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.userForm
            .get("userName")
            .valueChanges.subscribe(function (value) { return (_this.user.userName = value); });
        this.userForm
            .get("firstName")
            .valueChanges.subscribe(function (value) { return (_this.user.firstName = value); });
        this.userForm
            .get("lastName")
            .valueChanges.subscribe(function (value) { return (_this.user.lastName = value); });
        this.userForm
            .get("password")
            .valueChanges.subscribe(function (value) { return (_this.user.password = value); });
        this.userForm
            .get("confirmPassword")
            .valueChanges.subscribe(function (value) { return (_this.user.confirmPassword = value); });
    };
    SignupComponent.prototype.onSubmit = function () {
        console.log(this.user);
        if (this.user.confirmPassword == this.user.password) {
            this.service.addUser(this.user).subscribe();
            this.router.navigateByUrl("/login");
        }
        else {
            this.passwordMatch = true;
        }
    };
    Object.defineProperty(SignupComponent.prototype, "userName", {
        get: function () {
            return this.userForm.get("userName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "firstName", {
        get: function () {
            return this.userForm.get("firstName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "lastName", {
        get: function () {
            return this.userForm.get("lastName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () {
            return this.userForm.get("password");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "confirmPassword", {
        get: function () {
            return this.userForm.get("confirmPassword");
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/site/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/site/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_menu_item_service_service__WEBPACK_IMPORTED_MODULE_3__["MenuItemServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8096/menuitem-service'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\practice-check\truYum-v2\webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map