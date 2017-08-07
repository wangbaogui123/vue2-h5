import Vue from 'vue'
import routes from './router'
import axios from 'axios'
import { Swipe, SwipeItem } from 'vue-swipe'
import VLink from './components/VLink.vue'
import LazyLoad from './lazyLoad.js'


Vue.use(LazyLoad);

Vue.prototype.$ajax = axios

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);


require('./css/style.css')
require('./css/top.css')
require('./component.js')(Vue,VLink)


const app = new Vue({
	
	el:"#app",
	data:{
		currentRoute: window.location.pathname,
		topshow:false ,
		isLogin:false   
	},
	computed:{
		ViewComponent () {

			const matchingView = routes[this.currentRoute]
			return matchingView
				? require('./views/' + matchingView + '.vue')
				: require('./views/404.vue')
		}
	},
	render (h) {
		return h(this.ViewComponent)
	},
	methods:{

		com_Ajax(obj,success,error){
			this.$ajax(obj).then(function(data){

                success(data);
            },function(data){
				
                error(data);
            })
		}
	}


})


window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname
})





