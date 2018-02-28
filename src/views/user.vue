<template>
  <div>
    <user-head :id="userId"></user-head>
    <router-link to="/userMessage"></router-link>
    <p class="xingyu">拉埃绿绿绿绿绿绿绿绿绿绿绿绿</p>
    <biao-qian :id="userId"></biao-qian>
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
    font-size: 30px;
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
        userId:''
      }
    }
  }
</script>