<template>
  <div>
    <div class="biaoqian">
      <p v-for="item in user.label">{{item.bqname}}</p>
    </div>
  </div>
</template>

<style scoped>
  .biaoqian{
    width: 10rem;
    height: 6.427rem;
    padding: 0.534rem;
    overflow-y: scroll;
    position: relative;
    border-top: solid 1px #dfdfdd;
  }
  .biaoqian p{
    display: inline-block;
    height: 1rem;
    padding: 0.278rem;
    margin: 0.139rem;
    border-radius: 0.267rem;
    border: solid 0.027rem #5677fc;
    font-size: 0.48rem;
    line-height: 1;
    color: #5677fc;
  }
</style>

<script>
  export default{
    props:['id'],
    data(){
      return {
        user:this.id
      }
    }
  }
</script>