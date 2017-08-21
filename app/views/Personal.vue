<template>
    <div>
        <my-top id="top"></my-top>
        <div class="box">
            <div class="personal-box">
                个人中心
            </div>
        </div>
        <my-footer></my-footer>   
    </div> 
</template>

<script>
    
    var personal = {

    }

    export default {

        name:"personal",
        data:function(){
            return personal
        },
        methods:{
            
        }
    }

</script>

<style scoped>
    .personal-box{
        height:auto;
    }
</style>