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
                    <input type="text" v-model="user" />
                </p>
                <p>
                    <span>Password：</span>
                    <input type="password" v-model="password" />
                </p>
                
                <button v-on:click="loginFun">登录</button>  

                <p style="color:red;font-size:.8rem;">{{errorMsg}}</p>
            </div>
            

        </div> 
         <my-footer></my-footer>   
    </div> 
</template>

<script>
    
    var login = {
        existingUser:[{user:"wbg@123.com",password:"123"}],
        user:"wbg@123.com",
        password:"123",
        errorMsg:""
    }

    export default {

        name:"login",
        data:function(){
            return login
        },
        methods:{
            loginFun:function(){

                if(login.user && login.password){

                   for(var i=0;i<login.existingUser.length;i++){

                        if(login.existingUser[i].user == login.user && login.existingUser[i].password == login.password){
                            
                            window.localStorage.setItem("user",login.user);
                            window.location.href = "/";
                            login.errorMsg = "";
                        }else{
                            login.errorMsg = "输入账号或密码有误！";
                        }
                   } 
                }else{

                    login.errorMsg = "输入账号或密码为空！";
                }
            }
        }
    }

</script>

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
    .loginbox .msg p input{
        display: block;
        float: left;
        width: 6rem;
        height: 2rem;
        line-height: 2rem;
        margin-top: 2rem;
    }
    .loginbox .msg button{
        height: 4rem;
        line-height: 4rem;
        color:aquamarine;
        font-size: 1rem;
    }
</style>