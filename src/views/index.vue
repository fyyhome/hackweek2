<template>
  <div>
    <router-link to="/rankList" class="icon rank-list"></router-link>
    <router-link to="/xiaoxi" class="icon xiao-xi"></router-link>
    <div :class="[night? 'night': 'day','index-bg']">
      <router-link to="{name:'ShouHu',params:{id:0}}"></router-link>
      <router-link to="{name:'ShouHu',params:{id:1}}"></router-link>
      <router-link to="{name:'ShouHu',params:{id:2}}"></router-link>
      <router-link to="{name:'ShouHu',params:{id:3}}"></router-link>
      <router-link to="{name:'ShouHu',params:{id:4}}"></router-link>
      <button class="shua-xin">换一批</button>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<style scoped>
  .icon{
    display: inline-block;
    /*position: fixed;*/
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
    /*position: fixed;
    bottom: 1.573rem;*/
    position: absolute;
    bottom: 0.573rem;
    right: 0.533rem;
    background-color: rgba(255,255,255,0.3);
    border-radius: 0.267rem;
    color: #ffffff;
    font-size: 30px;
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
        night:true
      }
    },
    methods:{
      getTime(){
        console.log(1)
        let t = new Date()
        let hour = t.getHours()
        if(hour >= 19 || hour <= 7){
          this.night = true
        }
        else{
          this.night = false
        }
      }
    },
    mounted(){
      setInterval(this.getTime,60000)
      this.$http.get('').then((res)=>{
        let list = JSON.stringify(res)
        window.localStorage.setItem('data',list)
      })
    }
  }
</script>