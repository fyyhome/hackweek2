<template>
  <div>
    <div class="big-head">
      <router-link to="/index"></router-link>
      <img class="bg-blur" :src="user.avatar">
      <div class="small-head">
        <img :src="user.avatar" alt>
      </div>
    </div>
    <div class="user-name">
      <span>{{user.starname}}</span>
      <div :class="{'nan': gendersrc, 'nv' : !gendersrc}">
      </div>
      <!-- <img :src="gendersrc" alt> -->
    </div>
  </div>
</template>

<style scoped>
  .user-name{
    width: 8rem;
    margin: auto;
    text-align: center;
    /*border-bottom: solid 1px #dfdfdd;*/
  }
  .big-head{
    width: 10rem;
    height: 4.8rem;
    background-color: #5677fc;
    position: relative;
  }
  .bg-blur{
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(10px);
  }
  .big-head a{
    display: inline-block;
    width: 0.293rem;
    height: 0.533rem;
    position: absolute;
    z-index: 99;
    margin: 0.293rem 0.533rem;
    background-color: transparent;
    background-image: url(../assets/images/fanhui@2x.png);
  }
  .small-head{
    width: 3.533rem;
    height: 3.533rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    margin: 3.107rem 3.23rem;
    background-color: rgba(255,255,255,0.3);
    z-index: 1;
  }
  .small-head img{
    width: 3.013rem;
    height: 3.013rem;
    border-radius: 50%;
    z-index: 1;
  }
  span{
    display: block;
    color: rgb(86,86,86);
    font-size: 50px;
    margin-top: 1.847rem;
  }
  .user-name div{
    width: 0.5rem;
    height: 0.5rem;
    margin: 0.267rem auto;
  }
  .nan{
    background-image: url(../assets/images/nan@2x.png);
  }
  .nv{
    background-image: url(../assets/images/nvtub@2x.png);
  }
</style>

<script>
  export default{
    props:['id'],
    data(){
      return {
        user:this.id,
        gendersrc:''
      }
    },
    created(){
      if(this.user.gender == '男'){
        this.gendersrc = true
      }
      else{
        this.gendersrc = false
      }
    }
  }
</script>
