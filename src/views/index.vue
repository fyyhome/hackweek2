<template>
  <div>
    <router-link to="/rankList" class="icon rank-list"></router-link>
    <router-link to="/xiaoxi" class="icon xiao-xi"></router-link>
    <div :class="[night? 'night': 'day','index-bg']">
      <router-link :to="{name:'ShouHu',params: { id: user[0]}}"></router-link>
      <router-link :to="{name:'ShouHu',params: { id: user[1]}}"></router-link>
      <router-link :to="{name:'ShouHu',params: { id: user[2]}}"></router-link>
      <router-link :to="{name:'ShouHu',params: { id: user[3]}}"></router-link>
      <router-link :to="{name:'ShouHu',params: { id: user[4]}}"></router-link>
      <button class="shua-xin" @click="refresh">换一批</button>
      <div class="animation-div" v-show="animate">
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<style scoped>
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
    bottom: 0.573rem;
    right: 0.533rem;
    font-size: 30px;
    background-color: rgba(255,255,255,0.3);
    border-radius: 0.267rem;
    color: #ffffff;
  }
  @keyframes shuaxin{
    from {transform:rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  .animation-div{
    width: 1.6rem;
    height: 1.6rem;
    background-color: transparent;
    position: absolute;
    top: calc(45% - 0.8rem);
    left: calc(50% - 0.8rem);
    background-image: url(../assets/images/shuaxin.png);
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
        animate:false
      }
    },
    methods:{
      getTime(){
        let t = new Date()
        let hour = t.getHours()
        console.log(hour)
        if(hour >= 19 || hour <= 7){
          this.night = true
        }
        else{
          this.night = false
        }
      },
      refresh(){
        this.animate = true
        this.$http.get('').then((res)=>{
          if(res.body.code === 0){
            this.user = res.body.data
            let that = this
            setTimeout(function(){
              that.animate = false
            },1500)
          }
          else{
            alert('网络错误！')
          }
        })
      }
    },
    mounted(){
      // this.user = [
      //   {
      //     name:'fyy1',
      //     id:1
      //   },
      //   {
      //     name:'fyy2',
      //     id:2
      //   },
      //   {
      //     name:'fyy3',
      //     id:3
      //   }
      // ]
      this.getTime()
      setInterval(this.getTime,60000)
      this.$http.get('').then((res)=>{
        if(res.body.code === 0){
          this.user = res.body.data
        }
        else{
          // this.$router.push('/')
        }
      })
    }
  }
</script>