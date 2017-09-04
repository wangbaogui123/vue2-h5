<template>
    <div>
        <!-- <my-top id="top"></my-top> -->
        <div class="box">
            <ul class="tableBox" id="tableBox">
                <li v-for="(item,index) in arr" :key="item.$index">
                    <span v-for="(t,i) in item.isshow" :key="t.$index" class="ok" v-touch="t">
                        <i v-if="t.isclick"></i>
                    </span>
                </li>
            </ul>
        </div>
        <!-- <my-footer></my-footer>    -->
    </div> 
</template>

<script>
    
    var game = {

        arr:[{
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            },
            {
                isshow:[{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0},{"show":1,"isclick":0}],
            }]

    }

    export default {

        name:"game",
        data:function(){
            return game
        },
        created:function(){
            this.aa();
        },
        methods:{
            aa(){
                console.log(this.arr)
                var arr = [1,0,1,0,1,0]

                for(var i = 0;i < arr.length; i ++){
                    if(!i){
                        console.log(123);
                        return false;
                    }
                }
                console.log("ok");
           }
        }
    }

</script>

<style scoped>
    .box{
        margin:0px;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        outline: 0;
        -webkit-overflow-scrolling: touch;
        background-color:#fff;
        font-family:'PingFangSC-Medium';
        font-weight: normal; 
    }
    .box .tableBox{
        width: 100%;
        height: 100%;
        border:1px solid #ccc;
        box-sizing: border-box;
    }
    .box .tableBox li{
        height:6.66%;
        box-sizing: border-box;
    }
    .box .tableBox li span{
        display: block;
        width: 10%;
        float: left;
        height: 100%;
        box-sizing: border-box;
        border-left:1px solid #ccc; 
        border-bottom:1px solid #ccc;
    }
    .box .tableBox li span:nth-child(1){
        border-right:1px solid #ccc;
        border-left:none;  
    }
    .box .tableBox li:nth-child(1) span:nth-child(2){
        margin: 0;
        border-left:none;
        border-right:none;
    }
    .box .tableBox li:nth-child(1) span:nth-child(6){
        border-right:1px solid #ccc;
    }
    .box .tableBox li:nth-child(1) span:nth-child(7){
        border-left:none;
    }

    .box .tableBox li:nth-child(7) span{
        border-bottom:none;
    }
    .box .tableBox li:nth-child(8) span{
        border-top:1px solid #ccc; 
    }
    .box .tableBox li:nth-child(8) span:nth-child(2){
        margin: 0;
        border-left:none;
        border-right:none;
    }
    .box .tableBox li:nth-child(8) span:nth-child(6){
        border-right:1px solid #ccc;
    }
    .box .tableBox li:nth-child(8) span:nth-child(7){
        border-left:none;
    }
    .box .tableBox li:nth-child(14) span{
        border-bottom:none;
    }
    .box .tableBox li:last-child span{
        border-top:1px solid #ccc; 
        border-bottom:none;
    }
    .box .tableBox li:last-child span:nth-child(2){
        margin: 0;
        border-left:none;
        border-right:none;
    }
    .box .tableBox li:last-child span:nth-child(6){
        border-right:1px solid #ccc;
    }
    .box .tableBox li:last-child span:nth-child(7){
        border-left:none;
    }

    .box .tableBox li span:nth-child(2){
        margin-left:40%;
        border-right:1px solid #ccc;
    }


    .box .tableBox li span:last-child{
        float: right;
        border-left:1px solid #ccc;
    }
    .box .tableBox li span i{
        display: block;
        background: #ccc;
        width: 100%;
        height:100%;
    }
</style>