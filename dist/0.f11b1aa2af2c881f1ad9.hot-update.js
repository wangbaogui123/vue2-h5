webpackHotUpdate(0,{

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_swipe__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_swipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_swipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_VLink_vue__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_VLink_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_VLink_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lazyLoad_js__ = __webpack_require__(52);

//import routes from './router'






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5__lazyLoad_js__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$ajax = __WEBPACK_IMPORTED_MODULE_2_axios___default.a;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('swipe', __WEBPACK_IMPORTED_MODULE_3_vue_swipe__["Swipe"]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('swipe-item', __WEBPACK_IMPORTED_MODULE_3_vue_swipe__["SwipeItem"]);

__webpack_require__(126);
__webpack_require__(127);
__webpack_require__(51)(__WEBPACK_IMPORTED_MODULE_0_vue__["default"], __WEBPACK_IMPORTED_MODULE_4__components_VLink_vue___default.a);

const Home = __webpack_require__(142);
const routes = [{ path: '/', component: Home }, { path: '/login', component: Home }];

const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
	history: false,
	hashbang: true,
	routes
});

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
	router

});

// window.addEventListener('popstate', () => {
// 	app.currentRoute = window.location.pathname
// })

/***/ })

})