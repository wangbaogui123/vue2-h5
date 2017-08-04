<template>
    <div>
        <my-top id="top"></my-top>
        <div class="box loginbox">
            <p class="colorMove toptit">
                Login In
            </p>
            <div class="msg">
                <p>
                    <span>User Name：</span>
                </p>
                <p>
                    <span>Password：</span>
                </p>

                <button>登录</button>  
            </div>
            

        </div> 
         <my-footer></my-footer>   
    </div> 
</template>

<style scoped>
    .loginbox{
        background: #fff;
    }
    .loginbox .toptit{
        font-size: 2rem;
        padding: 2rem 0 1rem;
    }
    .loginbox .msg{
        width: 70%;
        margin: 0 auto;
        height: auto;
    }
    .loginbox .msg p{
        border-bottom: 1px solid #ccc;
        font-size: .9rem;
        color:#a6b1b0;
        height:4rem;
        overflow: hidden;

    }
    .loginbox .msg p span{
        float:left;
        height: 2rem;
        margin-top: 2rem;
        line-height: 2rem;
    }
    .loginbox .msg button{
        height: 4rem;
        line-height: 4rem;
        color:aquamarine;
        font-size: 1rem;
    }
</style>