<template>
  <div>
    <div class="headdiv">
      <router-link to="/index"></router-link>
      <p>{{data.starname1}}</p>
      <div>
        <p>{{data.days}}</p>
        <img src="../assets/images/yellowstars@2x.png" alt>
      </div>
    </div>
    <div id="chatbg" class="chat">
    </div>
    <div class="cin">
      <input type="text" name="xiaoxi" v-model="msg">
      <button id="sendMsg" @click="socketSend" disabled="disabled">发送</button>
    </div>
  </div>
  
</template>

<style>
  .cin{
    width: 10rem;
    height: 1.307rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .cin > input{
    width: 7.08rem;
    height: 1.04rem;
    font-size: 32px;
    padding-left: 0.133rem;
    color: #565656;
    overflow-y: scroll;
    border-radius: 0.133rem;
    border: solid 1px #dfdfdd;
  }
  .cin > button{
    width: 1.6rem;
    height: 1.04rem;
    background-color: #5677fc;
    border-radius: 0.2rem;
    font-size: 32px;
    color: #ffffff;
  }
  .headdiv{
    width: 10rem;
    height: 1.173rem;
    background-color: #5677fc;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .headdiv > p{
    margin:auto;
    font-size: 36px;
    line-height: 1;
    color: #ffffff;
  }
  .headdiv > a{
    width: 0.293rem;
    height: 0.533rem;
    margin: 0.32rem 0.533rem;
    background-image: url(../assets/images/fanhui@2x.png);
  }
  .headdiv > div{
    display: flex;
    margin: 0.32rem 0.533rem;
    flex-direction: row;
  }
  .headdiv > div p{
    margin:auto;
    font-size: 36px;
    padding: 2px 5px;
    color: #ffffff;
  }
  .chat{
    width: 10rem;
    height: 15.25rem;
    background-color: #f1f1f1;
    overflow-y: scroll;
  }
  .recive,.send{
    padding: 0.533rem 0.533rem;
    display: flex;
    flex-direction: row;
  }
  .recive > div > img,.send > div > img{
    width: 1.067rem;
    height: 1.067rem;
    border-radius: 50%;
  }
  .recive > div,.send > div {
    display: flex;
  }
  .recive{
    justify-content: flex-start;
  }
  .send{
    justify-content: flex-end;
  }
  .recive > div::after{
    content:attr(data-attr);
    display: inline-block;
    max-width: 6.053rem;
    position: relative;
    background-color: #ffffff;
    font-size: 32px;
    left: 0.267rem;
    top: 0.5rem;
    padding: 0.267rem;
    border-radius: 0rem 0.133rem 0.133rem 0.133rem;
  }
  .send > div::before{
    content:attr(data-attr);
    display: inline-block;
    max-width: 6.053rem;
    position: relative;
    background-color: #ffffff;
    font-size: 32px;
    right: 0.267rem;
    top: 0.5rem;
    padding: 0.267rem;
    border-radius: 0.133rem 0 0.133rem 0.133rem;
  }
</style>

<script>
  export default{
    data(){
      return {
        websocket:null,
        msg:'',
        data:''
      }
    },
    methods:{
      appendChatDiv(type , msg){
        let parent = document.getElementById('chatbg')
        let rec = document.createElement('div')
        let imgDiv = document.createElement('div')
        let img = document.createElement('img')
        imgDiv.setAttribute('data-attr',msg)
        if(type == 'recive'){
          rec.className = 'recive'
          img.src = this.data.avatar2
          imgDiv.onclick = function(){
            this.$router.push('/friend')
          }
        }
        else if(type == 'send'){
          rec.className = 'send'
          img.src = this.data.avatar1
          imgDiv.onclick = function(){
            this.$router.push('/user')
          }
        }
        parent.appendChild(rec)
        rec.appendChild(imgDiv)
        imgDiv.appendChild(img)
      },
      socketSend(){
        this.socket.send(this.msg)
        this.appendChatDiv('send',this.msg)
        this.msg = ''
      },
      initial(){
        this.socket = new WebSocket('ws://116.196.123.49:8888/c?token=' + window.localStorage.token)
        this.socket.onopen = function(evt){
          document.getElementById('sendMsg').disabled = false
        }
        let that = this
        this.socket.onmessage = function(evt){
          let res = JSON.parse(evt.data)
          console.log(res)
          that.appendChatDiv('recive',res.msg)
        }
        this.socket.onerror = function(evt){
          alert('网络错误！')
          document.getElementById('sendMsg').disabled = true
        }
        this.socket.onclose = function(evt){
          alert('网络错误！')
          document.getElementById('sendMsg').disabled = true
        }
      }
    },
    created(){
      this.$http.get('http://116.196.123.49:8060/star/api/chatInfo').then((res)=>{
        if(res.body.code == 0){
          if(res.body.data.starname2 === ''){
            this.$router.push('/index')
          }
          else{
            this.data = res.body.data
          }
        }
        else{
          this.$router.push('/index')
        }
      })
      this.initial()
    }
  }
</script>