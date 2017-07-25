import Vue from 'vue'
import VueRouter  from 'vue-router'

Vue.use(VueRouter)

require('./css/style.css')
require('./css/top.css')
require('./component.js')(Vue)
require('./index.js')(Vue)

const routes = require('./router.js')(Vue,VueRouter)


// 创建路由对象
	const router = new VueRouter({
	    routes // （缩写）相当于 routes: routes，es6的新语法
	})

	var app = new Vue({
		
	  el:"#app",
      router: router,
      data:{

      	page:"H5 Game",
        topshow:false
          
      },
      methods:{
	  	topFun:function(){
	  		app.topshow = !app.topshow;
	  	}
	  }

    })





