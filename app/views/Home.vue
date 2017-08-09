
<template>

    <div>
        <my-top :top-show="topshow" :login-user="isLogin"></my-top>
    
        <div class="box">
            <div class="home">   
                <swipe class="my-swipe">
                    <swipe-item v-for="item in banner" :key="item.$index">
                        <a v-bind:href="item.href" ><img v-lazyload="item.imgUrl"></a>
                    </swipe-item>
                </swipe>
                <div class="home-list">
                    <div class="home-list-div">
                        <ul class="list-ul">
                            <li v-for="i in list" :key="i.$index">{{i}}</li>
                        </ul>
                    </div>   
                </div>  
                <div class="home-view">
                    <p class="viewtop">热门文章</p>
                    <div v-for="(item,index) in allData" :key="item.$index" v-bind:class='{"last":index == allData.length-1}'>
                        <v-link v-bind:href='/detail/+item.id'>
                            <p><a ><img v-lazyload="item.user.avatar"></a><span class="colorMove">{{item.user.nickname}}</span></p>
                            <p> <img v-lazyload="item.list_image_url"></p>
                            <p>{{item.title}}</p>
                            <p>{{item.public_abbr}}</p>
                            <p> 
                                <a class="colorMove">
                                    <span>{{item.public_comments_count}}评论</span>
                                    <span v-if="item.likes_count">· {{item.likes_count}}喜欢</span>
                                    <span v-if="item.total_rewards_count">· {{item.total_rewards_count}}赞赏</span>
                                </a> 
                            </p>
                        </v-link>
                    </div>
                    <p class="more" v-on:click="moreFun">{{msg}}</p>
                </div>      
            </div>
        </div>

        <my-footer></my-footer>
    </div> 
    


</template>
<script>

    require('../css/home.css')
    import VLink from '../components/VLink.vue'

    var homeData = {
            banner:[
                {
                    href:"www.baidu.com",
                    imgUrl:"//upload-images.jianshu.io/upload_images/2088907-8553e27a39f5a662.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                },
                {
                    href:"www.baidu.com",
                    imgUrl:"//upload-images.jianshu.io/upload_images/2088907-754fb4eb4afcc4ee.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                },
                {
                    href:"www.baidu.com",
                    imgUrl:"//upload-images.jianshu.io/upload_images/2088907-597e193193bf2fd5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                }
            ],
            list:[
                "We are only separated by a turned distance, but could not meet.",
                "Dear past, thanks for all lessons, dear future, I am ready!",
                "I love you not for who you are, but for who I am before you.",
                "We are only separated by a turned distance, but could not meet.",
                "Dear past, thanks for all lessons, dear future, I am ready!",
                "I love you not for who you are, but for who I am before you."
            ],
            allData:[],
            pageIndex:0,
            msg:"展开更多文章⬇"
            
        }

    export default {
        name:"home",
        data:function(){
            return homeData
        },
        created:function(){

            this.moreFun();

        },
        methods:{

            moreFun(){

                var $this = this.$parent;
                var _this = this;

                $this.com_Ajax({

                    method: 'get',
                    url: './app/data/list.json'

                },function(data){
                    
                    for(var i = _this.pageIndex*4;i <  _this.pageIndex*4+4; i++){
                        
                        if(data.data[i]){
                            homeData.allData.push(data.data[i]);
                        }else{
                            homeData.msg = "没有更多数据了～"
                        }
                    }

                    _this.pageIndex++;
                     
                },function(data){

                    console.log(data);
                })

            }
        },
        components:{
		  VLink
	  	}

    }

</script>