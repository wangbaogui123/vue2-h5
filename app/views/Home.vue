
<template>

    <div>
        <my-top :top-show="topshow"></my-top>
    
        <div class="box">
            <div class="home">   
                <swipe class="my-swipe">
                    <swipe-item v-for="item in banner" :key="item.$index">
                        <a v-bind:href="item.href"><img v-bind:src="item.imgUrl" ></a>
                    </swipe-item>
                </swipe>
                <div class="home-list">
                    <ul class="list-ul">
                        <li v-for="i in list" :key="i.$index">{{i}}</li>
                    </ul>
                </div>  
                <div>
                    <div>
                        <p></p>
                        <div></div>
                        <p></p>
                        <p></p>
                    </div>
                </div>      
            </div>
        </div>

        <my-footer></my-footer>
    </div> 
    


</template>
<script>

    require('../css/home.css')

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
            ]
            
        }

    export default {
        name:"app",
        data:function(){
            return homeData
        },
        created:function(){
            //console.log(this.$parent);
            var $this = this.$parent;

            $this.com_Ajax({
                method: 'get',
				url: './app/data/list.json'
            },function(data){
                
                console.log(data);
            },function(data){

                console.log(data);
            })
        }

    }

</script>