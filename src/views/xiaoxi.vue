<template>
  <div>
    <div class="headdiv">
      <router-link to="/index"></router-link>
      <p>我的消息</p>
    </div>
    <div class="xiaoxi-list">
      <div class="xiaoxikuang" v-for="item in list">
        <div>
          <img :src="item.chatAvatar">
        </div>
        <div>
          <p v-show="item.type == 'PICKED'">“<span>{{item.chatStarname}}</span>”摘下了你的小星星，浩瀚星海中相遇不易的，和他打声招呼吧！</p>
          <p v-show="item.type == 'ABANDON'">嘿！你的小星星“<span>{{item.chatStarname}}</span>”觉得自己不是最适合你的守护者，决定再次出发，现在你也可以去寻找你的小星星啦！</p>
          <h6>{{item.date}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .headdiv{
    width: 10rem;
    height: 1.173rem;
    background-color: #5677fc;
    text-align: center;
  }
  .headdiv a{
    display: inline-block;
    width: 0.293rem;
    height: 0.533rem;
    position: absolute;
    top: 0.293rem;
    left: 0.533rem;
    background-image: url(../assets/images/fanhui@2x.png);
  }
  .headdiv p{
    font-size: 18px;
    color: #ffffff;
    line-height: 1.173rem;
  }
  .xiaoxi-list{
    width: 10rem;
    height: 16.5rem;
    overflow-y: scroll;
    background-color: #f1f1f1;
    padding-top: 0.127rem;
  }
  .xiaoxikuang{
    width: 8.933rem;
    height: 4.533rem;
    background-color: #ffffff;
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0.14rem auto;
  }
  .xiaoxikuang div:nth-child(1){
    width: 1.467rem;
    height: 100%;
  }
  .xiaoxikuang div:nth-child(2){
    width: 6.2rem;
    height: 100%;
    padding-top: .52rem;
    padding-left: .253rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .xiaoxikuang div:nth-child(1) > img{
    width: 1.467rem;
    height: 1.467rem;
    border-radius: 50%;
    margin-top: 0.52rem;
  }
  .xiaoxikuang div:nth-child(2) > p{
    font-size: 16px;
    color: #565656;
  }
  .xiaoxikuang div:nth-child(2) > h6{
    font-size: 12px;
    color: #989898;
    align-self: flex-end;
    margin: 0.533rem 0;
  }
  .xiaoxikuang div:nth-child(2) > p span{
    color: #5677fc;
  }
</style>

<script>
  export default{
    data(){
      return {
        list:''
      }
    },
    created(){
      this.$http.get('http://116.196.123.49:8060/star/api/message').then((res)=>{
        if(res.body.code == 0){
          this.list = res.body.data
        }
      })
    }
  }
</script>