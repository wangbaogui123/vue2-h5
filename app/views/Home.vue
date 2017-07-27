
<template>

    <div class="home">   
        <swipe class="my-swipe">
            <swipe-item v-for="item in banner">
                <a v-bind:href="item.href"><img v-bind:src="item.imgUrl" ></a>
            </swipe-item>
        </swipe>
        <div class="home-list">
            <ul>
                <li v-for="i in list">{{i}}</li>
            </ul>
        </div>
    </div>
    
</template>
<script>

    require('../css/home.css')

    export default {
        name:"app",
        data:function(){
            return {
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
                    "I love you not for who you are, but for who I am before you."
                ]
            }
        },
        created:function(){
            console.log(this.$parent);
        }

    }

</script>