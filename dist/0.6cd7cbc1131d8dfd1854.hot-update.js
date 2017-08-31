webpackHotUpdate(0,{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__router__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    href: {
      type: String,
      required: true
    }
  },
  methods: {

    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(null, __WEBPACK_IMPORTED_MODULE_0__router__["default"][this.href], this.href);
    }
  }
});

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected ] (2:5)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m {[\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 2 | \u001b[39m  \u001b[32m'/'\u001b[39m\u001b[33m:\u001b[39m \u001b[32m'Home'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m   | \u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 3 | \u001b[39m  \u001b[32m'/login'\u001b[39m\u001b[33m:\u001b[39m \u001b[32m'Login'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 4 | \u001b[39m  \u001b[32m'/detail/:id'\u001b[39m\u001b[33m:\u001b[39m\u001b[32m'Detail'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 5 | \u001b[39m  \u001b[32m'/personal'\u001b[39m\u001b[33m:\u001b[39m\u001b[32m'Personal'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_swipe__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_swipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_swipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_VLink_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_VLink_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_VLink_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lazyLoad_js__ = __webpack_require__(65);








console.log(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6__lazyLoad_js__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$ajax = __WEBPACK_IMPORTED_MODULE_3_axios___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('swipe', __WEBPACK_IMPORTED_MODULE_4_vue_swipe__["Swipe"]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('swipe-item', __WEBPACK_IMPORTED_MODULE_4_vue_swipe__["SwipeItem"]);

__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(64)(__WEBPACK_IMPORTED_MODULE_0_vue__["default"], __WEBPACK_IMPORTED_MODULE_5__components_VLink_vue___default.a);

const routers = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
	history: false,
	hashbang: true,
	routes: __WEBPACK_IMPORTED_MODULE_1__router__["default"]
});

console.log(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);

const app = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({

	el: "#app",
	data: {
		currentRoute: window.location.pathname,
		topshow: false,
		isLogin: false
	},
	// computed:{
	// 	ViewComponent () {

	// 		const matchingView = routes[this.currentRoute]
	// 		return matchingView
	// 			? require('./views/' + matchingView + '.vue')
	// 			: require('./views/404.vue')
	// 	}
	// },
	// render (h) {
	// 	return h(this.ViewComponent)
	// },
	methods: {

		com_Ajax(obj, success, error) {
			this.$ajax(obj).then(function (data) {

				success(data);
			}, function (data) {

				error(data);
			});
		}
	},
	router: routers

});

window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname;
});

/***/ })

})