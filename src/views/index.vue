<template>
  <div>
    <div class="overlay" v-show="overlay_status">
      你还没守护那个Ta哦！
    </div>
    <router-link to="/rankList" class="icon rank-list"></router-link>
    <router-link to="/xiaoxi" :class="[{'tong-zhi' : tongzhi},'xiao-xi','icon']"></router-link>
    <div :class="[night? 'night': 'day','index-bg']">
      <div v-show="night">
        <router-link :to="{name:'ShouHu',params: { id: user[0]}}"></router-link>
        <router-link :to="{name:'ShouHu',params: { id: user[1]}}"></router-link>
        <router-link :to="{name:'ShouHu',params: { id: user[2]}}"></router-link>
        <router-link :to="{name:'ShouHu',params: { id: user[3]}}"></router-link>
        <router-link :to="{name:'ShouHu',params: { id: user[4]}}"></router-link>
        <button class="shua-xin" @click="refresh">换一批</button>
        <div class="animation-div" v-show="animate">
        </div>
      </div>
    </div>
    <footer-nav @getInfo="getChatInfo"></footer-nav>
  </div>
</template>

<style scoped>
  .overlay{
    width: 4.5rem;
    height: 4.5rem;
    background-color: #ffffff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-2.25rem,-2.25rem);
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #565656;
    font-size: 0.36rem;
  }
  .icon{
    display: inline-block;
    position: absolute;
    z-index: 1;
    width: 1.2rem;
    height: 1.2rem;
    top: 0.267rem;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.3);
    background-position: center;
  }
  .rank-list{
    left: 0.533rem;
    background-size: 0.507rem 0.4rem;
    background-image: url(../assets/images/paihb@2x.png);
  }
  .xiao-xi{
    right: 0.533rem;
    background-size: 0.64rem 0.453rem;
    background-image: url(../assets/images/xinf@2x.png);
  }
  .tong-zhi::after{
    color:red;
    font-size: 36px;
    content: ".";
    position: relative;
    left: 0.8rem;
    bottom: 0.6rem;
  }
  .index-bg{
    width: 10rem;
    height: 16.5rem;
    position: relative;
  }
  .night{
    background-image: url(../assets/images/beijin@2x.png);
  }
  .day{
    background-image: url(../assets/images/baitianyun@2x.png);
  }
  .index-bg a{
    position: absolute;
    display: inline-block;
    width: 1.573rem;
    height: 1.533rem;
  }
  .index-bg a:nth-child(1){
    left: 2.267rem;
    top: 1.746rem;
  }
  .index-bg a:nth-child(2){
    left: 5.173rem;
    top: 3.733rem;
  }
  .index-bg a:nth-child(3){
    left: 1.04rem;
    top: 7.413rem;
  }
  .index-bg a:nth-child(4){
    left: 6.747rem;
    top: 8.187rem;
  }
  .index-bg a:nth-child(5){
    left: 3.613rem;
    top: 12.32rem;
  }
  .shua-xin{
    width: 1.693rem;
    height: 0.92rem;
    position: absolute;
    z-index: 99;
    bottom: 0.573rem;
    right: 0.533rem;
    font-size: 0.4rem;
    background-color: rgba(255,255,255,0.3);
    border-radius: 0.267rem;
    color: #ffffff;
  }
  @keyframes shuaxin{
    from {
      -webkit-transform:rotate(0deg);
      -moz-transform:rotate(0deg);
      transform:rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .animation-div{
    width: 1.6rem;
    height: 1.6rem;
    background-color: transparent;
    position: absolute;
    top: calc(45% - 0.8rem);
    left: calc(50% - 0.8rem);
    background-image: url(../assets/images/shuaxin.png);
    -webkit-animation-name: shuaxin;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-iteration-count: 3;
    -moz-animation-name: shuaxin;
    -moz-animation-duration: 0.5s;
    -moz-animation-iteration-count: 3;
    animation-name: shuaxin;
    animation-duration: 0.5s;
    animation-iteration-count: 3;
  }
</style>

<script>
  import FooterNav from './footer.vue'
  export default{
    components:{
      FooterNav
    },
    data(){
      return {
        night:true,
        user:'',
        animate:false,
        tongzhi:false,
        overlay_status:false
      }
    },
    methods:{
      getTime(){
        let t = new Date()
        let hour = t.getHours()
        if(hour >= 16 || hour <= 7){
          this.night = true
        }
        else{
          this.night = false
        }
        this.$http.get('http://116.196.123.49:8060/star/api/messageNumber').then((res)=>{
          if(res.body.code === 0){
            if(res.body.data == 0){
              this.tongzhi = false
            }
            else{
              this.tongzhi =true
            }
          }
        })
      },
      refresh(){
        this.animate = true
        let that = this
        setTimeout(function(){
          that.animate = false
        },1500)
        this.$http.get('http://116.196.123.49:8060/star/api/stars').then((res)=>{
          if(res.body.code === 0){
            this.user = res.body.data
          }
          else{
            this.animate = false
            alert('网络错误！')
          }
        })
      },
      getChatInfo(){
        this.$http.get('http://116.196.123.49:8060/star/api/chatInfo').then((res)=>{
          if(res.body.code == 10){
            this.overlay_status = true
            let that = this
            setTimeout(()=>{
              that.overlay_status = false
            },1000)
          }
          else if(res.body.code === 0){
            this.$router.push('/chat')
          }
          else{
            return 
          }
        })
      }
    },
    created(){
      this.getTime()
      setInterval(this.getTime,60000)
      this.$http.get('http://116.196.123.49:8060/star/api/stars').then((res)=>{
        if(res.body.code === 0){
          this.user = res.body.data
        }
        else{
          this.$router.push('/')
        }
      })
    }
  }
</script>