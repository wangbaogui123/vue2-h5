module.exports = function(Vue){

	let data = {
		page:"Vue Demo"
	}

	// 注册组件
	Vue.component("my-top",{

		template: "#topTpl",
	  	data:function(){

	  		return data;
	  	},methods:{
		  	topFun:function(){
		  		top.topshow = !top.topshow;
		  	}
		}
	})

	// 创建top组件实例
	let top = new Vue({
	  el: '#top',
	  data:{

	  	topshow:false

	  }
	})

}