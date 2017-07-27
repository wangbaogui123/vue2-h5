import Vue from 'vue'
import routes from './router'
import axios from 'axios'
import { Swipe, SwipeItem } from 'vue-swipe'

Vue.prototype.$ajax = axios

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);


require('./css/style.css')
require('./css/top.css')
require('./component.js')(Vue)


const app = new Vue({
	
	el:"#app",
	data:{
		currentRoute: window.location.pathname    
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
		com_Ajax(){
			this.$ajax({
				method: 'post',
				url: '/user',
				data: {
					name: 'wise',
					info: 'wrong'
				}
			})
		}
	}


})


window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname
})





