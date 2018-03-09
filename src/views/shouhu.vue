<template>
  <div>
    <user-head :id="userId"></user-head>
    <biao-qian :id="userId"></biao-qian>
    <button class="shouhu" @click="shouhuFn">守护</button>
    <div class="overlay" v-show="overlay">
      <div class="lightbox">
        <span>{{tip}}！</span>
        <button @click="showOverlay">确定</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .shouhu{
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
  width: 7.917rem;
  height: 5.695rem;
  background: #ffffff;
  border-radius: 0.4rem;
  margin: auto;
  text-align: center;
  padding-top: 2rem;
 }
 .lightbox span{
  font-size: 18px;
  color: rgb(86,86,86);
 }
 .lightbox button{
  width: 1.333rem;
  height: 0.8rem;
  background-color: transparent;
  border-radius: 0.2rem;
  font-size: 15px;
  color: #5677fc;
  margin-top: 1.8rem;
  margin-left: 5.6rem;
 }
 .lightbox button:hover{
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
        overlay:false,
        userId:this.$route.params.id,
        tip:'守护成功'
      }
    },
    methods:{
      shouhuFn(){
        this.$http.post('http://116.196.123.49:8060/star/api/star'+ '?' + 'chatID=' + this.userId.chatID).then((res)=>{
          if(res.code === 0){
            this.overlay = true
          }
          else{
            this.tip = res.body.message
            this.overlay = true
          }
        })
      },
      showOverlay(){
        this.overlay = false
        if(this.tip == '守护成功'){
          this.$router.push('/index')
        }
      }
    },
    created(){
      console.log(this.$route.params.id)
      if(this.userId == undefined){
        //this.$router.push('/index')
      }
    }
  }
</script>