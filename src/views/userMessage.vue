<template>
  <div>
    <div class="back-wrap">
      <router-link to = '/index'></router-link>
      <p>点亮你的小星星</p>
    </div>
    <div class="base">
      <div class="base-wrap head">
        <p>头像</p>
        <div>
          <input type="file" accept="image/*" id="head-image" @change="uploadImg">
        </div>
        <button></button>
      </div>
      <div>
        <div class="base-wrap name">
          <p>昵称</p>
          <font>{{username}}</font>
          <button @click="selectFn('昵称')"></button>
        </div>
        <div class="base-wrap sex">
          <p>性别</p>
          <font>{{sex}}</font>
          <button @click="selectFn('性别')"></button>
        </div>
      </div>
      <div class="base-wrap word">
        <p>星语</p>
        <div>
          {{starword}}
        </div>
        <button @click="selectFn('星语')"></button>
      </div>
    </div>
    <div class="biao-qian">
      <p>选择你的星星属性，最多只能选五个</p>
      <ul>
        <li v-for="(item,index) in biaoqian"><button :class="[{'bq-status':item.status},'bq-button']" @click="changeStatus(index)">{{item.bqname}}</button></li>
      </ul>
      <button @click="selectFn('添加标签')">+ 自定义标签</button>
    </div>
    <footer>
      <button @click="upload">点亮星星</button>
    </footer>
    <div class="shadow" v-show="tip" @click="changeTip">
      <div class="tip-box">
        {{tiptext}}
      </div>
    </div>
    <div class="shadow" v-if="select != ''">
      <div class="check-box">
        <h2>{{select}}</h2>
        <ul v-if="select ==='性别'">
          <li>
            <input type="radio" id="man" v-model="sex" value="男">
            <label for="man">男</label>
          </li>
          <li>
            <input type="radio" id="woman" v-model="sex" value="女">
            <label for="woman">女</label>
          </li>
        </ul>
        <input id="username" type="text" v-bind="username" v-if="select === '昵称'" placeholder="填写昵称">
        <input id="zdybiaoqian" type="text" v-model="zdybiaoqian" v-if="select === '添加标签'" placeholder="填写标签">
        <input id="starword" type="text" v-bind="starword" v-if="select === '星语'" placeholder="填写星语">
        <button class="quxiao" @click="cancleFn">取消</button>
        <button class="queren" @click="resureFn">确定</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .back-wrap{
    width: 100%;
    height: 1.173rem;
    background-color: #5677fc;
    text-align: center;
  }
  .back-wrap a{
    display: inline-block;
    width: 0.293rem;
    height: 0.533rem;
    background-image: url(../assets/images/fanhui@2x.png);
    position: absolute;
    top: 0.293rem;
    left: 0.533rem;
  }
  .back-wrap p{
    font-size: 36px;
    color: #ffffff;
    line-height: 1.173rem;
  }
  .base{
    width: 10rem;
    height: 7.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .base-wrap{
    width: 10rem;
    display: flex;
    align-items: center;
  }
  .head{
    height: 1.707rem;
    box-shadow: 0 0.267rem 5px #f1f1f1, 0 -0.267rem 5px rgb(241,241,241);
  }
  .name{
    height: 1.173rem;
    border-bottom: 1px solid #dfdfdd;
  }
  .sex{
    height: 1.173rem;
    padding-top: 0.2rem;
  }
  .word{
    height: 1.707rem;
    box-shadow: 0 0.25rem 2px #f1f1f1, 0 -0.25rem 2px rgb(241,241,241);
  }
  .base-wrap p{
    font-size: 32px;
    line-height: 1;
    color: #565656;
    margin-left: 0.52rem;
  }
  .base-wrap button{
    width: 0.227rem;
    height: 0.413rem;
    background-color: #ffffff;
    background-image: url(../assets/images/jiantouyou@2x.png);
    position: absolute;
    right: 0.533rem;
  }
  .name font,.sex font{
    font-size: 26px;
    line-height: 1;
    color: #989898;
    position: absolute;
    right: 1.027rem;
  }
  .word div{
    display: inline-flex;
    width: 5.5rem;
    height: 0.973rem;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    font-size: 26px;
    color: #989898;
    position: absolute;
    right: 1.027rem;
  }
  .head div{
    width: 1.44rem;
    height: 1.44rem;
    margin-left: 6.173rem;
    background-color: #f1f1f1;
    border-radius: 50%;
    background-size: auto;
    background-position: center;
    background-image: url(../assets/images/tianjia@2x.png);
  }
  #head-image{
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .biao-qian{
    width: 10rem;
    height: 7rem;
    background-color: rgb(241,241,241);
  }
  .biao-qian p{
    font-size: 24px;
    line-height: 2.5;
    color: #989898;
    margin-left: 0.533rem;
  }
  .biao-qian ul{
    margin-left: 0.533rem;
    height: 5.067rem;
  }
  .biao-qian ul li{
    float: left;
    margin-bottom: 0.267rem;
  }
  .bq-button{
    width: auto;
    height: 1rem;
    line-height: 1rem;
    background: transparent;
    border-radius: 0.267rem;
    border: 1px solid #dfdfdd;
    color: #dfdfdd;
    font-size: 0.48rem;
    padding-left: 0.267rem;
    padding-right: 0.267rem;
    text-align: center;
    margin-right: 0.267rem;
  }
  .bq-status{
    border: 1px solid #5677fc;
    color: #5677fc;
  }
  .button-checked{
    color: #5677fc;
    border: 1px solid #5677fc;
  }
  .biao-qian > button{
    width: 3.333rem;
    height: 1rem;
    background: transparent;
    color: #565656;
    font-size: 36px;
    line-height: 1rem;
    border-radius: 0.267rem;
    border: 1px solid #dfdfdd;
    text-align: center;
    margin-left: 0.533rem;
  }
  footer{
    width: 10rem;
    height: 2.36rem;
    background-color: rgb(241,241,241);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer button{
    width: 8.933rem;
    height: 1.6rem;
    background-color: #5677fc;
    border-radius: 0.2rem;
    font-size: 0.48rem;
    color: #ffffff;
    vertical-align: center;
  }
  .shadow{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(127,127,127,0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .check-box{
    width: 7.6rem;
    height: 5.467rem;
    background-color: #ffffff;
    border-radius: 0.4rem;
    font-size: 36px;
    color:rgb(86,86,86);
    padding-left: 0.5rem;
    z-index: 1;
    position: relative;
  }
  .check-box h2{
    margin-top: 0.534rem;
  }
  .check-box ul{
    margin-top: 0.8rem;
  }
  .check-box ul > li:last-child{
    margin-top: 0.534rem;
  }
  input[type="radio"] + label::before{
    content: "\a0";
    display: inline-block;
    vertical-align: .1em;
    width: .8em;
    height: .8em;
    margin-right: 1em;
    border-style: solid;
    border-width: 4px;
    border-color: #565656;
    border-radius: 50%;
    background: white;
    text-indent: .15em;
    line-height: .65;
  }
  /*隐藏默认的单选框样式*/
  input[type="radio"]{
    width: 1em;
    height: 1em;
    position: absolute;
    clip: rect(0,0,0,0);
  }
  input[type="radio"]:checked + label::before{
    content: "\a0";
    border-color: #5677fc;
  }
  input[type="radio"]:checked + label{
    color: #5677fc;
  }
  .check-box button{
    width: 1.334rem;
    height: 0.8rem;
    position: absolute;
    bottom: 0.534rem;
    background: white;
    color: #5677fc;
    font-size: 36px;
  }
  .check-box button:hover{
    background-color: #f1f1f1;
  }
  .queren{
    right: 0.267rem;
  }
  .quxiao{
    right: 1.867rem;
  }
  input[type="text"]{
    margin-top: 0.8rem;
    font-size: 34px;
    color: rgb(152,152,152); 
  }
  .tip-box{
    width: 7.6rem;
    height: 5.467rem;
    background-color: #ffffff;
    border-radius: 0.4rem;
    font-size: 36px;
    color:rgb(86,86,86);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
  export default{
    data(){
      return{
        userHead: null,
        sex: '女',
        username: '',
        zdybiaoqian:'',
        biaoqian: [
          {
            bqname:'汪星人',
            status:false
          },
          {
            bqname:'女神',
            status:false
          },
          {
            bqname:'长腿欧巴',
            status:false
          },
          {
            bqname:'懒癌患者',
            status:false
          },
          {
            bqname:'二次元',
            status:false
          },
          {
            bqname:'萌萌哒',
            status:false
          },
          {
            bqname:'民谣',
            status:false
          },
          {
            bqname:'不吃肉不能活',
            status:false
          }
        ],
        starword: '',
        tip:false,
        tiptext:'请完善个人资料！',
        select: ''
      } 
    },
    methods:{
      upload(){
        let label = []
        for(let item of this.biaoqian){
          if(item.status == true)
            label.push(item)
        }
        if(this.username == '' || this.starword == '' || label.length == 0){
          this.tip = true
        }
        else{
          let data = {
            starname: this.username,
            gender: this.sex,
            starword: this.starword,
            label: label
          }
          this.$http.post('http://39.106.219.21:3000/api/setinfo',data).then((res)=>{
            if(res.body.code == 0){
              window.localStorage.global = JSON.stringify(res.body.data)
              this.$router.push('/user')
            }
            else{
              this.$router.push('/')
            }
          })
        }   
      },
      //上传图片部分
      uploadImg(){
        this.userHead  = document.getElementById('head-image').files[0]
        let userHead = this.userHead
        let formdata = new FormData()
        formdata.append('file',userHead)
        this.$http.post('http://39.106.219.21:3000/api/avatar',formdata).then((res)=>{
          if(res.body.code != 0){
            alert('网络错误!')
          }
        })
      },
      changeTip(){
        this.tip = false
      },
      changeStatus(index){
        let count = 0
        for(let item of this.biaoqian){
          if(item.status === true){
            count += 1
          }
        }
        if(count < 5){
          this.biaoqian[index].status = !this.biaoqian[index].status
        }
        else if(count >= 5){
          this.biaoqian[index].status = false
        }
      },
      selectFn(title){
        this.select = title
        if(this.select === '昵称'){
          setTimeout(function(){
            document.getElementById('username').focus()
          },200)
        }
        else if(this.select === '星语'){
          setTimeout(function(){
            document.getElementById('starword').focus()
          },200)
        }
        else if(this.select === '添加标签'){
          setTimeout(function(){
            document.getElementById('zdybiaoqian').focus()
          },200)
        }
      },
      resureFn(){
        if(this.select === '昵称'){
          this.username = document.getElementById('username').value
        }
        else if(this.select === '星语'){
          this.starword = document.getElementById('starword').value
        }
        else{
          if(this.zdybiaoqian != ''){
            this.biaoqian.push({
              bqname: this.zdybiaoqian,
              status: true
            })
          }
        }
        this.select = ''  
      },
      cancleFn(){
        this.select = ''
      }
    }
  }
</script>