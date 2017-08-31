webpackHotUpdate(0,{

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_swipe__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_swipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_swipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_VLink_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_VLink_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_VLink_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lazyLoad_js__ = __webpack_require__(65);







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5__lazyLoad_js__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$ajax = __WEBPACK_IMPORTED_MODULE_2_axios___default.a;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('swipe', __WEBPACK_IMPORTED_MODULE_3_vue_swipe__["Swipe"]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('swipe-item', __WEBPACK_IMPORTED_MODULE_3_vue_swipe__["SwipeItem"]);

__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(64)(__WEBPACK_IMPORTED_MODULE_0_vue__["default"], __WEBPACK_IMPORTED_MODULE_4__components_VLink_vue___default.a);

const router = new VueRouter({
	history: false,
	hashbang: true,
	routes: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */]
});

const app = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({

	el: "#app",
	data: {
		currentRoute: window.location.pathname,
		topshow: false,
		isLogin: false
	},
	computed: {
		ViewComponent() {

			const matchingView = __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */][this.currentRoute];
			return matchingView ? __webpack_require__(63)("./" + matchingView + '.vue') : __webpack_require__(60);
		}
	},
	render(h) {
		return h(this.ViewComponent);
	},
	methods: {

		com_Ajax(obj, success, error) {
			this.$ajax(obj).then(function (data) {

				success(data);
			}, function (data) {

				error(data);
			});
		}
	}

});

window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname;
});

/***/ })

})