import Vue from 'vue'
import routes from './router'
import axios from 'axios'

Vue.prototype.$ajax = axios

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





