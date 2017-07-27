
<template>
    <swipe class="my-swipe">
        <swipe-item v-for="item in banner">
            <a v-bind:href="item.href"><img v-bind:src="item.imgUrl" alt=""></a>
        </swipe-item>
    </swipe>
</template>
<script>

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
                ]
            }
        },
        created:function(){
            console.log(this.$parent);
        }

    }

</script>