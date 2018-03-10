<template>
  <div>
    <div class="head">
      <router-link to="/index"></router-link>
      <p>排行榜</p>
      <div class="headimg">
        <div>
          <img :src="listone.avatar1" alt>
        </div>
        <div class="floatdiv">
          <img :src="listone.avatar2" alt>
        </div>
      </div>
      <div class="msg">
        <p>{{listone.starname1}}&nbsp;&nbsp;&nbsp;&nbsp;{{listone.starname2}}</p>
        <div>
          <img src="../assets/images/yellowstars@2x.png" alt>
          <p>{{listone.days}}天</p>
        </div>
      </div>
    </div>
    <div class="listdiv">
      <div v-for="(item,index) in list">
        <span class="rankspan">{{index+2}}</span>
        <div class="headicon">
          <img :src="item.avatar1" alt>
          <img :src="item.avatar2" alt>
        </div>
        <p>{{item.starname1}}&nbsp;&&nbsp;{{item.starname2}}</p>
        <div class="days daysflex">
          <img src="../assets/images/yellowstars@2x.png" alt>
          <p>{{item.days}}天</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .head{
    width: 10rem;
    height: 6.667rem;
    background-image: linear-gradient(0deg, 
      #b7c5fd 0%, 
      #879efd 20%, 
      #5677fc 100%), 
    linear-gradient(
      #5677fc, 
      #5677fc);
  }
  .head > a{
    display: inline-block;
    width: 0.293rem;
    height: 0.533rem;
    margin-top: 0.32rem;
    margin-left: 0.533rem;
    background-image: url(../assets/images/fanhui@2x.png);
  }
  .head > p{
    display: inline-block;
    float: right;
    font-size: 18px;
    color: #ffffff;
    line-height: 0.533rem;
    margin-top: 0.32rem;
    margin-right: 4.293rem;
  }
  .headimg{
    display: flex;
    margin-top: 1.027rem;
    flex-direction: row;
    justify-content: center;
  }
  .headimg > div{
    width: 2.666rem;
    height: 2.666rem;
    border-radius: 50%;
    background-color: #7b88ad;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .floatdiv{
    position: relative;
    left: -0.307rem;
  }
  .headimg div:nth-child(1){
    position: relative;
    right: -0.307rem;
  }
  .headimg img{
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
  }
  .headimg div:nth-child(1) img{
    z-index: 2;
  }
  .floatdiv img{
    z-index: 3;
  }
  .msg{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    color: #ffffff;
  }
  .msg > p{
    display: inline-block;
    height: 0.653rem;
    line-height: 0.653rem;
    border-bottom: solid 1px #ffffff;
  }
  .days, .msg > div{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .msg > div > p, .days > p{
    padding-left: 0.15rem;
    max-width: 4.5rem;
  }
  .listdiv{
    width: 10rem;
    height: 11.2rem;
    overflow-y: scroll;
    background-color: #f1f1f1;
    padding-top: 0.267rem;
  }
  .listdiv > div{
    width: 10rem;
    height: 1.707rem;
    /*background-color: #ffffff;*/
    background: 
      -webkit-linear-gradient(135deg, transparent 0.572rem, #ffffff 0),
      -webkit-linear-gradient(45deg, transparent 0.572rem, #f46c60 0);
    background: 
      -o-linear-gradient(135deg, transparent 0.572rem, #ffffff 0),
      -o-linear-gradient(45deg, transparent 0.572rem, #f46c60 0);
    background: 
      linear-gradient(135deg, transparent 0.572rem, #ffffff 0),
      linear-gradient(45deg, transparent 0.572rem, #f46c60 0);
    display: flex;
    flex-direction: row;
    align-items: center; 
  }
  .headicon{
    height: 1.387rem;
    display: flex;
    margin-left: 0.233rem;
    flex-direction: row;
    align-items: center;
  }
  .headicon img{
    width: 1.107rem;
    height: 1.093rem;
    border-radius: 50%;
  }
  .headicon img:nth-child(2){
    z-index: 3;
    position: relative;
    left: -.3rem;
  }
  .headicon + p{
    display: inline-block;
    width: 5.3rem;
    max-width: 5.3rem;
    font-size: 16px;
    color: #565656;
  }
  .rankspan{
    font-size: 16px;
    color: #ffffff;
    align-self: flex-start;
    padding: 0.107rem 0.11rem;
  }
  .days > p{
    font-size: 16px;
    color: #565656;
  }
</style>

<script>
  export default{
    data(){
      return {
        list:'',
        listone:''
      }
    },
    created(){
      this.$http.get('http://116.196.123.49:8060/star/api/rankChart').then((res)=>{
        if(res.body.code == 0){
          this.list = res.body.data
          this.listone = this.list[0]
          this.list.splice(0,1)
        }
        else{
          alert('网络错误')
        }
      })
    }
  }
</script>