module.exports = function(Vue,VueRouter){

	// 1. 定义（路由）组件。
	var homeHtml = require("./views/home.html"),
		flightHtml = require("./views/flight.html"),
		msgHtml = require("./views/msg.html")

	const Home = { template: homeHtml }
	const Index = { template: flightHtml }
	const Detail = { template: msgHtml }

	// 每个路由path应该映射一个组件。 其中"component" 可以是
	// 通过 Vue.extend() 创建的组件构造器，
	// 或者，只是一个组件配置对象。
	const routes = [
	  { path: '/', component: Home },
	  { path: '/flight', component: Index },
	  { path: '/msg', component: Detail }
	]

}


