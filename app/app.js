import Vue from 'vue'
import routes from './router'

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

			console.log(require('./views/Home.vue'));
			return require('./views/Home.vue')
			// return matchingView
			// 	? require('./views/' + matchingView + '.vue')
			// 	: require('./views/404.vue')
		}
	},
	render (h) {
		return h(this.ViewComponent)
	}

})

window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname
})





