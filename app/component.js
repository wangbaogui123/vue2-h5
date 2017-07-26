module.exports = function(Vue){

	let data = {
		page:"Vue Demo"
	}

	// 注册组件my-top
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

	// 注册组件my-footer
	Vue.component("my-footer",{

		template: '<footer class="footer"><p><span style="color:dodgerblue">北京微</span> h5 Game</p><p> <span style="color:deeppink"> @ </span><span style="color:aquamarine">by</span> Wbg</p><p style="font-size:.8rem;">2012- <span style="color:hotpink">2018</span></p><p><span style="color:darkturquoise">h5</span> game All Rights Reserved</p></footer>'
	})



}