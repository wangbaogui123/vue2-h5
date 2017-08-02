module.exports = function(Vue,VLink){

	let data = {
		page:"H5 View"
	}

	let toptpl = require("./tpl/top.html");

	// 注册组件my-top
	Vue.component("my-top",{

		props:{
			topShow:[]
		},
		template: toptpl,
	  	data:function(){
	  		return data;
		},
		methods:{
		  	topFun:function(){  
		  		this.topShow = !this.topShow;
		  	}
		},
		components:{
		  VLink
	  	}
	})


	// 注册组件my-footer
	Vue.component("my-footer",{

		template: '<footer class="footer"><p><span style="color:dodgerblue">北京微</span> h5 Game</p><p> <span style="color:deeppink"> @ </span><span style="color:aquamarine">by</span> Wbg</p><p style="font-size:.8rem;">2012- <span style="color:hotpink">2018</span></p><p><span style="color:darkturquoise">h5</span> game All Rights Reserved</p></footer>'
	})






}