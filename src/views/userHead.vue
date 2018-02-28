<template>
  <div>
    <div class="big-head">
      <router-link to=""></router-link>
      <div class="small-head">
        <img src="../assets/images/fanhui@2x.png" alt="">
      </div>
    </div>
    <div class="user-name">
      <span>啦啦啦啦啦</span>
      <img src="../assets/images/nvtub@2x.png" alt>
    </div>
  </div>
</template>

<style>
  .user-name{
    width: 8rem;
    margin: auto;
    text-align: center;
    border-bottom: solid 1px #dfdfdd;
  }
  .big-head{
    width: 10rem;
    height: 4.8rem;
    background-color: #5677fc;
    position: relative;
  }
  .big-head a{
    display: inline-block;
    width: 0.293rem;
    height: 0.533rem;
    position: absolute;
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
  .user-name img{
    margin: 0.267rem auto;
  }
</style>
