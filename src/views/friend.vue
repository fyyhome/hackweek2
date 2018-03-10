<template>
  <div>
    <user-head :id="user"></user-head>
    <router-link to="/userMessage"></router-link>
    <p class="xingyu">{{user.starword}}</p>
    <biao-qian :id="user"></biao-qian>
    <button class="fangqi" @click="fangqiFn">放弃</button>
    <div class="overlay" v-show="overlay">
      <div class="lightbox">
        <div>
          <h2>星轨</h2>
          <p><span>{{user.date}}</span><br>你成为他的守护者<br>一起度过了<span>{{user.days}}</span>天奇妙的时光</p>
        </div>
        <div>
          <p>点击放弃后，这颗星星永远不会出现在你的星控中，晚上7点后才能选择你的星星，确定放弃吗？</p>
          <button class="button-right" @click="resureFn">确定</button>
          <button @click="cancleFn">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .xingyu{
    display: inline-block;
    width: 10rem;
    height: 1.31rem;
    text-align: center;
    padding-top: 0.267rem;
    padding-bottom: 0.267rem;
    font-size: 15px;
    color: #989898;
    vertical-align: center;
  }
  a{
    width: 0.52rem;
    height: 0.533rem;
    position: fixed;
    top: 0.293rem;
    right: 0.533rem;
    background-image: url(../assets/images/bianji@2x.png);
  }
  .fangqi{
    display: block;
    width: 8.933rem;
    height: 1.6rem;
    background-color: #5677fc;
    border-radius: 0.2rem;
    font-size: 0.48rem;
    line-height: 1;
    color: #ffffff;
    margin: 0.534rem auto;
  }
  .overlay{
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0,0,0,.8);
 } 
 .lightbox{
    width: 7.6rem;
    height: 7.707rem;
    background: #ffffff;
    border-radius: 0.4rem;
    margin: auto;
 }
 .lightbox div{
  width: 6.56rem;
  height: 4.093rem;
  margin: auto;
 }
 .lightbox > div > h2{
  display: inline-block;
  font-size: 18px;
  color: #565656;
  margin: 0.547rem 0;
 }
 .lightbox > div > p{
  font-size: 17px;
  color: #989898;
 }
 .lightbox div:last-child > p{
  border-top: 1px solid #dfdfdd;
 }
 .lightbox > div > p > span{
  color: #5677fc;
 }
 .lightbox > div > button{
  width: 1.333rem;
  height: 0.8rem;
  background-color: #ffffff;
  border-radius: 0.2rem;
  color: #5677fc;
  font-size: 15px;
 }
 .button-right{
  margin-left: 3.6rem;
 }
 .lightbox > div > button:hover{
  background-color: #f1f1f1;
 }
</style>

<script>
  import UserHead from './userHead.vue'
  import BiaoQian from './biaoqian.vue'
  export default{
    components:{
      UserHead,
      BiaoQian
    },
    data(){
      return {
        user:'',
        overlay: false
      }
    },
    created(){
      this.$http.get('http://116.196.123.49:8060/star/api/star').then((res)=>{
        if(res.body.code === 0){
          this.user = res.body.data
          console.log(this.user)
        }
      })
    },
    methods:{
      fangqiFn(){
        this.overlay = true;
      },
      resureFn(){
        this.$http.post('http://116.196.123.49:8060/star/api/abandon').then((res)=>{
          if(res.body.code === 0){
            this.$router.push("/index")
          }
        })
      },
      cancleFn(){
        this.overlay = false
      }
    }
  }
</script>