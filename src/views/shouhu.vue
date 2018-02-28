<template>
  <div>
    <user-head></user-head>
    <biao-qian></biao-qian>
    <div class="overlay" v-show="overlay">
      <div class="lightbox">
        <span>守护成功！</span>
        <button @click="showOverlay">确定</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
 }
 .lightbox span{
  font-size: 36px;
  color: rgb(86,86,86);
 }
 .lightbox button{
  width: 1.333rem;
  height: 0.8rem;
  background-color: transparent;
  border-radius: 0.2rem;
  font-size: 30px;
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
        overlay:true
      }
    },
    methods:{
      showOverlay(){
        this.overlay = false
      }
    }
  }
</script>