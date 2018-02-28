<template>
  <div class="bg-div">
    <div class="login-div">
      <ul>
        <li><h2>登录</h2></li>
        <li><p>用户名</p></li>
        <li><input type="text" placeholder="请输入用户名" v-model="username"></li>
        <li><p>密码</p></li>
        <li><input type="password" placeholder="请输入密码" v-model="password"></li>
        <li><span v-show="tip">您的账号或密码有误</span></li>
        <li><button @click="login">登录</button></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .bg-div{
    width: 10rem;
    height: 17.787rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(../assets/images/stars-background@2x.png);
  }
  .login-div{
    width: 8.666rem;
    height: 92.5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-div ul li{
    list-style: none;
  }
  h2{
    color: #ffffff;
    font-size: 0.66rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  .login-div p{
    width: 7.333rem;
    height: 36px;
    line-height: 36px;
    color: rgba(255,255,255,0.5);
    text-align: left;
    margin-bottom: 0.706rem;
  }
  .login-div span{
    width: 7.333rem;
    height: 24px;
    line-height: 24px;
    color: #f5e27c;
    text-align: right;
    float: right;
  }
  .login-div li input{
    width: 7.333rem;
    height: 55px;
    line-height: 55px;
    margin-bottom: 0.56rem;
    font-size: 36px;
    color: #ffffff;
    background: transparent;
    border-bottom: solid 1px #efeef2; 
  }
  .login-div button{
    width: 7.333rem;
    height: 1.6rem;
    border-radius: 15px;
    line-height: 1.6rem;
    text-align: center;
    font-size: 0.48rem;
    color: #ffffff;
    background-color: #5677fc;
    margin-top: 1.56rem;
    margin-bottom: 1.68rem;
  }
</style>

<script>
  export default{
    data(){
      return {
        username:null,
        password:null,
        tip:false
      }
    },
    methods:{
      login(){
        if(this.username == "" || this.password == "")
          this.tip = true
        else{
          let data = {
            'userid': this.username,
            'Password': this.password
          }
          this.$http.post('',data).then((res)=>{
            if(res.Status === true){
              window.localStorage.setItem('token',res.data)
              console.log(window.localStorage.token)
              this.$router.push('/index')
            }
          })
        }
      }
    }
  }
</script>