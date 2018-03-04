<template>
  <div>
    <div class="yindao" @click="resure">
      <img src="../assets/images/yindao.jpg" alt>
    </div>
  </div>
</template>

<style scoped>
  .yindao{
    position: fixed;
    max-width: 950px;
    margin:auto;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>

<script>
  export default{
    methods:{
      resure(){
        this.$router.push('/index')
      }
    }
  }
</script>