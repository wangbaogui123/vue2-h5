import Vue from 'vue'
//import routes from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
import { Swipe, SwipeItem } from 'vue-swipe'
import VLink from './components/VLink.vue'
import LazyLoad from './lazyLoad.js'

Vue.use(LazyLoad);
Vue.use(VueRouter)

Vue.prototype.$ajax = axios

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);


require('./css/style.css')
require('./css/top.css')
require('./component.js')(Vue,VLink)

const Home = require ("./views/Home.vue")
const Login = require ("./views/Login.vue")

const routes = [
	{ path: '/', component: Home},
	{ path: '/login', component: Login},
]

const router = new VueRouter({
	history: false,
	hashbang: true,
	routes
})


const app = new Vue({
	
	el:"#app",
	data:{
		currentRoute: window.location.pathname,
		topshow:false ,
		isLogin:false   
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
	methods:{

		com_Ajax(obj,success,error){
			this.$ajax(obj).then(function(data){

                success(data);
            },function(data){
				
                error(data);
            })
		}
	},
	router


})

// window.addEventListener('popstate', () => {
// 	app.currentRoute = window.location.pathname
// })





