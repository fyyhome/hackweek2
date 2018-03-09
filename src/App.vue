<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import login from './views/login'
export default {
  name: 'App',
  components:{
    login
  }
}
</script>

<style>
@import url(./assets/css/public.css);
#app{
  width: 10rem;
  margin: auto;
}
#app > div{
  position: relative;
}
</style>
